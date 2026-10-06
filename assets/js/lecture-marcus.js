(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function initMarcusDemo() {
    const lambdaInput = $("marcus-lambda");
    const dgInput = $("marcus-dg");
    const vInput = $("marcus-v");
    const tempInput = $("marcus-temp");
    if (!lambdaInput || !dgInput || !vInput || !tempInput) return;

    const lambdaOut = $("marcus-lambda-out");
    const dgOut = $("marcus-dg-out");
    const vOut = $("marcus-v-out");
    const tempOut = $("marcus-temp-out");
    const barrierOut = $("marcus-barrier-out");
    const rateOut = $("marcus-rate-out");
    const regimeOut = $("marcus-regime-out");
    const explanation = $("marcus-explanation");
    const path = $("marcus-rate-path");
    const marker = $("marcus-marker");
    const markerLine = $("marcus-marker-line");
    const optimalLine = $("marcus-optimal-line");
    const yMaxLabel = $("marcus-y-max");
    const yMinLabel = $("marcus-y-min");

    const hbarEVs = 6.582119569e-16;
    const kBEVK = 8.617333262e-5;
    const x0 = 58, x1 = 530;
    const yTop = 35, yBottom = 248;
    const dgMin = -3, dgMax = 1;

    const xMap = (dg) => x0 + (x1 - x0) * (dg - dgMin) / (dgMax - dgMin);

    function barrier(lambda, dg) {
      return Math.pow(lambda + dg, 2) / (4 * lambda);
    }

    function log10Rate(lambda, dg, vMeV, temp) {
      const vEV = vMeV / 1000;
      const kBT = kBEVK * temp;
      const prefactor =
        (2 * Math.PI / hbarEVs) *
        (vEV * vEV) /
        Math.sqrt(4 * Math.PI * lambda * kBT);
      const lnRate = Math.log(prefactor) - barrier(lambda, dg) / kBT;
      return lnRate / Math.LN10;
    }

    function formatRate(log10k) {
      if (!Number.isFinite(log10k)) return "—";
      if (log10k < -300) return "<10⁻³⁰⁰ s⁻¹";
      const exponent = Math.floor(log10k);
      const mantissa = Math.pow(10, log10k - exponent);
      if (exponent >= -2 && exponent <= 4) {
        return Math.pow(10, log10k).toPrecision(3) + " s⁻¹";
      }
      return mantissa.toFixed(2) + " × 10^" + exponent + " s⁻¹";
    }

    function signed(value, digits) {
      const abs = Math.abs(value).toFixed(digits);
      return value < 0 ? "−" + abs : abs;
    }

    function update() {
      const lambda = parseFloat(lambdaInput.value);
      const dg = parseFloat(dgInput.value);
      const vMeV = parseFloat(vInput.value);
      const temp = parseFloat(tempInput.value);

      lambdaOut.textContent = lambda.toFixed(2) + " eV";
      dgOut.textContent = signed(dg, 2) + " eV";
      vOut.textContent = vMeV.toFixed(1) + " meV";
      tempOut.textContent = temp.toFixed(0) + " K";

      const b = barrier(lambda, dg);
      const currentLog = log10Rate(lambda, dg, vMeV, temp);
      barrierOut.textContent = b.toFixed(3) + " eV";
      rateOut.textContent = formatRate(currentLog);

      const tol = Math.max(0.02, 0.03 * lambda);
      let regime = "normal";
      if (Math.abs(dg + lambda) <= tol) regime = "activationless";
      else if (dg < -lambda) regime = "inverted";
      regimeOut.textContent = regime;

      if (explanation) {
        if (regime === "activationless") {
          explanation.textContent = "You are at the Marcus optimum: the classical activation barrier is essentially zero.";
        } else if (regime === "inverted") {
          explanation.textContent = "The reaction is more exergonic than the activationless condition, so the Marcus barrier grows again.";
        } else if (dg > 0) {
          explanation.textContent = "The reaction is endergonic. The positive driving force adds to the reorganization penalty and suppresses the rate.";
        } else {
          explanation.textContent = "The reaction is exergonic and still in the normal Marcus region: making ΔG° more negative lowers the barrier.";
        }
      }

      const curve = [];
      let maxLog = -Infinity;
      let minLog = Infinity;
      const n = 320;
      for (let i = 0; i <= n; i++) {
        const x = dgMin + (dgMax - dgMin) * i / n;
        const y = log10Rate(lambda, x, vMeV, temp);
        curve.push([x, y]);
        maxLog = Math.max(maxLog, y);
        minLog = Math.min(minLog, y);
      }

      const plotMax = Math.ceil(maxLog + 0.5);
      const plotMin = Math.floor(Math.max(minLog, plotMax - 20));
      const yMap = (value) => {
        const c = clamp(value, plotMin, plotMax);
        return yBottom - (yBottom - yTop) * (c - plotMin) / (plotMax - plotMin);
      };

      path.setAttribute("d", makePath(curve.map(([x, y]) => [xMap(x), yMap(y)])));
      yMaxLabel.textContent = plotMax.toFixed(0);
      yMinLabel.textContent = plotMin.toFixed(0);

      const markerX = xMap(dg);
      const markerY = yMap(currentLog);
      marker.setAttribute("cx", markerX.toFixed(2));
      marker.setAttribute("cy", markerY.toFixed(2));
      markerLine.setAttribute("x1", markerX.toFixed(2));
      markerLine.setAttribute("x2", markerX.toFixed(2));

      const optimumX = xMap(clamp(-lambda, dgMin, dgMax));
      optimalLine.setAttribute("x1", optimumX.toFixed(2));
      optimalLine.setAttribute("x2", optimumX.toFixed(2));
    }

    [lambdaInput, dgInput, vInput, tempInput].forEach((input) =>
      input.addEventListener("input", update)
    );

    document.querySelectorAll("[data-marcus-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        const lambda = parseFloat(lambdaInput.value);
        if (button.dataset.marcusMode === "normal") dgInput.value = (-0.5 * lambda).toFixed(2);
        if (button.dataset.marcusMode === "activationless") dgInput.value = (-lambda).toFixed(2);
        if (button.dataset.marcusMode === "inverted") dgInput.value = (-1.6 * lambda).toFixed(2);
        update();
      });
    });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMarcusDemo);
  } else {
    initMarcusDemo();
  }
})();
