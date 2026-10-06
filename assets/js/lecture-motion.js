(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function initMotionDemo() {
    const logFInput = $("motion-logf");
    const logTauInput = $("motion-logtau");
    const sigmaInput = $("motion-sigma");
    if (!logFInput || !logTauInput || !sigmaInput) return;

    const fOut = $("motion-f-out");
    const tauOut = $("motion-tau-out");
    const sigmaOut = $("motion-sigma-out");
    const xOut = $("motion-x-out");
    const matchOut = $("motion-match-out");
    const jNormOut = $("motion-jnorm-out");
    const jAbsOut = $("motion-jabs-out");
    const explanation = $("motion-explanation");
    const path = $("motion-weight-path");
    const marker = $("motion-marker");
    const markerLine = $("motion-marker-line");
    const matchLine = $("motion-match-line");

    const x0 = 58, x1 = 530;
    const yTop = 35, yBottom = 248;
    const logTauMin = -3, logTauMax = 4;

    const xMap = (logTau) =>
      x0 + (x1 - x0) * (logTau - logTauMin) / (logTauMax - logTauMin);
    const yMap = (value) =>
      yBottom - (yBottom - yTop) * value / 1.05;

    function frequencyMHz() {
      return Math.pow(10, parseFloat(logFInput.value));
    }

    function omegaPerNs(fMHz) {
      return 2 * Math.PI * fMHz * 1e-3;
    }

    function formatFrequency(fMHz) {
      if (fMHz >= 1000) return (fMHz / 1000).toFixed(fMHz >= 10000 ? 1 : 2) + " GHz";
      if (fMHz >= 10) return fMHz.toFixed(1) + " MHz";
      return fMHz.toFixed(2) + " MHz";
    }

    function formatTau(tauNs) {
      if (tauNs >= 1000) return (tauNs / 1000).toFixed(2) + " μs";
      if (tauNs < 0.1) return (tauNs * 1000).toFixed(1) + " ps";
      return tauNs.toFixed(tauNs < 10 ? 2 : 1) + " ns";
    }

    function update() {
      const fMHz = frequencyMHz();
      const tauNs = Math.pow(10, parseFloat(logTauInput.value));
      const sigmaMHz = parseFloat(sigmaInput.value);
      const omega = omegaPerNs(fMHz);
      const x = omega * tauNs;
      const tauMatch = 1 / omega;
      const jNorm = 2 * tauNs / (1 + x * x);
      const jAbs = sigmaMHz * sigmaMHz * jNorm;

      fOut.textContent = formatFrequency(fMHz);
      tauOut.textContent = formatTau(tauNs);
      sigmaOut.textContent = sigmaMHz.toFixed(1) + " MHz";
      xOut.textContent = x.toPrecision(3);
      matchOut.textContent = formatTau(tauMatch);
      jNormOut.textContent = jNorm.toPrecision(3) + " ns";
      jAbsOut.textContent = jAbs.toPrecision(3) + " MHz²·ns";

      if (explanation) {
        if (x < 0.3) {
          explanation.textContent = "The fluctuations are fast compared with the spin period. The interaction is strongly motionally averaged at this frequency.";
        } else if (x <= 3) {
          explanation.textContent = "The fluctuation and spin timescales overlap strongly, so the spectral density near this transition frequency is large.";
        } else {
          explanation.textContent = "The fluctuations are slow on the spin timescale. Much of their power has moved toward lower frequencies.";
        }
      }

      const pts = [];
      const n = 320;
      for (let i = 0; i <= n; i++) {
        const logTau = logTauMin + (logTauMax - logTauMin) * i / n;
        const tau = Math.pow(10, logTau);
        const u = omega * tau;
        const normalizedWeight = 2 * u / (1 + u * u);
        pts.push([xMap(logTau), yMap(normalizedWeight)]);
      }
      path.setAttribute("d", makePath(pts));

      const markerX = xMap(parseFloat(logTauInput.value));
      const markerY = yMap(2 * x / (1 + x * x));
      marker.setAttribute("cx", markerX.toFixed(2));
      marker.setAttribute("cy", markerY.toFixed(2));
      markerLine.setAttribute("x1", markerX.toFixed(2));
      markerLine.setAttribute("x2", markerX.toFixed(2));

      const matchLog = clamp(Math.log10(tauMatch), logTauMin, logTauMax);
      const matchX = xMap(matchLog);
      matchLine.setAttribute("x1", matchX.toFixed(2));
      matchLine.setAttribute("x2", matchX.toFixed(2));
    }

    [logFInput, logTauInput, sigmaInput].forEach((input) =>
      input.addEventListener("input", update)
    );

    document.querySelectorAll("[data-motion-regime]").forEach((button) => {
      button.addEventListener("click", () => {
        const omega = omegaPerNs(frequencyMHz());
        const tauMatch = 1 / omega;
        const factor =
          button.dataset.motionRegime === "fast" ? 0.1 :
          button.dataset.motionRegime === "slow" ? 10 : 1;
        const target = clamp(Math.log10(tauMatch * factor), logTauMin, logTauMax);
        logTauInput.value = target.toFixed(3);
        update();
      });
    });

    document.querySelectorAll("[data-motion-frequency]").forEach((button) => {
      button.addEventListener("click", () => {
        const fMHz = parseFloat(button.dataset.motionFrequency);
        logFInput.value = Math.log10(fMHz).toFixed(4);
        update();
      });
    });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMotionDemo);
  } else {
    initMotionDemo();
  }
})();
