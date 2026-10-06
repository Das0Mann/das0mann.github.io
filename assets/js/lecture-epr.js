(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function initEPRDemo() {
    const freqInput = $("epr-frequency");
    const gPerpInput = $("epr-gperp");
    const gParInput = $("epr-gparallel");
    const thetaInput = $("epr-theta");
    if (!freqInput || !gPerpInput || !gParInput || !thetaInput) return;

    const freqOut = $("epr-frequency-out");
    const gPerpOut = $("epr-gperp-out");
    const gParOut = $("epr-gparallel-out");
    const thetaOut = $("epr-theta-out");
    const gEffOut = $("epr-geff-out");
    const bResOut = $("epr-bres-out");
    const bParOut = $("epr-bparallel-out");
    const bPerpOut = $("epr-bperp-out");
    const explanation = $("epr-explanation");
    const fieldPath = $("epr-field-path");
    const marker = $("epr-marker");
    const markerLine = $("epr-marker-line");
    const yMinLabel = $("epr-y-min");
    const yMaxLabel = $("epr-y-max");

    const muBOverH_GHzPerT = 13.99624555;
    const x0 = 58, x1 = 530;
    const yTop = 35, yBottom = 248;

    const gEff = (thetaDeg, gPerp, gPar) => {
      const t = thetaDeg * Math.PI / 180;
      const s = Math.sin(t), c = Math.cos(t);
      return Math.sqrt(gPerp * gPerp * s * s + gPar * gPar * c * c);
    };

    const bRes = (freqGHz, g) => freqGHz / (muBOverH_GHzPerT * g);
    const xMap = (theta) => x0 + (x1 - x0) * theta / 90;

    function update() {
      const freq = parseFloat(freqInput.value);
      const gPerp = parseFloat(gPerpInput.value);
      const gPar = parseFloat(gParInput.value);
      const theta = parseFloat(thetaInput.value);

      const bParallel = bRes(freq, gPar);
      const bPerp = bRes(freq, gPerp);
      const rawMin = Math.min(bParallel, bPerp);
      const rawMax = Math.max(bParallel, bPerp);
      const span = rawMax - rawMin;
      const pad = Math.max(span * 0.18, Math.max(rawMax * 0.004, 0.001));
      const yMin = rawMin - pad;
      const yMax = rawMax + pad;

      const yMap = (field) =>
        yBottom - (yBottom - yTop) * (field - yMin) / (yMax - yMin);

      const pts = [];
      for (let i = 0; i <= 240; i++) {
        const angle = 90 * i / 240;
        pts.push([xMap(angle), yMap(bRes(freq, gEff(angle, gPerp, gPar)))]);
      }
      fieldPath.setAttribute("d", makePath(pts));

      const currentG = gEff(theta, gPerp, gPar);
      const currentB = bRes(freq, currentG);
      const x = xMap(theta);
      const y = yMap(currentB);

      marker.setAttribute("cx", x.toFixed(2));
      marker.setAttribute("cy", y.toFixed(2));
      markerLine.setAttribute("x1", x.toFixed(2));
      markerLine.setAttribute("x2", x.toFixed(2));

      freqOut.textContent = freq.toFixed(2) + " GHz";
      gPerpOut.textContent = gPerp.toFixed(4);
      gParOut.textContent = gPar.toFixed(4);
      thetaOut.textContent = theta.toFixed(1) + "°";
      gEffOut.textContent = currentG.toFixed(4);
      bResOut.textContent = currentB.toFixed(3) + " T";
      bParOut.textContent = bParallel.toFixed(3) + " T";
      bPerpOut.textContent = bPerp.toFixed(3) + " T";

      if (yMinLabel) yMinLabel.textContent = yMin.toFixed(3);
      if (yMaxLabel) yMaxLabel.textContent = yMax.toFixed(3);

      if (explanation) {
        const dg = Math.abs(gPerp - gPar);
        if (dg < 0.001) {
          explanation.textContent = "The tensor is nearly isotropic, so rotating the molecule barely changes the resonance field.";
        } else if (freq < 15) {
          explanation.textContent = "At X-band the anisotropy is visible as an orientation-dependent resonance field, but the absolute field spread is still modest.";
        } else if (freq < 60) {
          explanation.textContent = "At this frequency the same g-anisotropy maps onto a substantially larger separation in magnetic field.";
        } else {
          explanation.textContent = "At W-band-like frequencies even modest g-anisotropy produces a large absolute field separation, which helps resolve tensor components.";
        }
      }
    }

    [freqInput, gPerpInput, gParInput, thetaInput].forEach((input) =>
      input.addEventListener("input", update)
    );

    document.querySelectorAll("[data-epr-frequency]").forEach((button) => {
      button.addEventListener("click", () => {
        freqInput.value = button.dataset.eprFrequency;
        update();
      });
    });

    document.querySelectorAll("[data-epr-isotropic]").forEach((button) => {
      button.addEventListener("click", () => {
        const g = ((parseFloat(gPerpInput.value) + parseFloat(gParInput.value)) / 2).toFixed(4);
        gPerpInput.value = g;
        gParInput.value = g;
        update();
      });
    });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initEPRDemo);
  } else {
    initEPRDemo();
  }
})();
