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
    const referencePath = $("epr-reference-path");
    const marker = $("epr-marker");
    const markerLine = $("epr-marker-line");
    const yMinLabel = $("epr-y-min");
    const yMaxLabel = $("epr-y-max");
    const spanOut = $("epr-span-out");
    const spanMeter = $("epr-span-meter");

    const muBOverH_GHzPerT = 13.99624555;
    const referenceFrequency = 9.5;
    const x0 = 58, x1 = 530;
    const yTop = 35, yBottom = 248;

    const gEff = (thetaDeg, gPerp, gPar) => {
      const t = thetaDeg * Math.PI / 180;
      const s = Math.sin(t), c = Math.cos(t);
      return Math.sqrt(gPerp * gPerp * s * s + gPar * gPar * c * c);
    };

    const bRes = (freqGHz, g) => freqGHz / (muBOverH_GHzPerT * g);
    const xMap = (theta) => x0 + (x1 - x0) * theta / 90;

    function offsetCurve(freq, gPerp, gPar) {
      const bp = bRes(freq, gPar);
      const bt = bRes(freq, gPerp);
      const centre = 0.5 * (bp + bt);
      const pts = [];
      for (let i = 0; i <= 240; i++) {
        const angle = 90 * i / 240;
        const offsetMt = 1000 * (bRes(freq, gEff(angle, gPerp, gPar)) - centre);
        pts.push([angle, offsetMt]);
      }
      return {pts, centre, bp, bt};
    }

    function update() {
      const freq = parseFloat(freqInput.value);
      const gPerp = parseFloat(gPerpInput.value);
      const gPar = parseFloat(gParInput.value);
      const theta = parseFloat(thetaInput.value);

      const current = offsetCurve(freq, gPerp, gPar);
      const reference = offsetCurve(referenceFrequency, gPerp, gPar);
      const bParallel = current.bp;
      const bPerp = current.bt;
      const span = Math.abs(bParallel - bPerp);

      let maxAbs = 0.25;
      for (const [,v] of current.pts) maxAbs = Math.max(maxAbs, Math.abs(v));
      for (const [,v] of reference.pts) maxAbs = Math.max(maxAbs, Math.abs(v));
      maxAbs *= 1.18;

      const yMap = (offsetMt) =>
        yBottom - (yBottom - yTop) * (offsetMt + maxAbs) / (2 * maxAbs);

      fieldPath.setAttribute("d", makePath(current.pts.map(([a,v]) => [xMap(a), yMap(v)])));
      if (referencePath) {
        referencePath.setAttribute("d", makePath(reference.pts.map(([a,v]) => [xMap(a), yMap(v)])));
      }

      const currentG = gEff(theta, gPerp, gPar);
      const currentB = bRes(freq, currentG);
      const currentOffset = 1000 * (currentB - current.centre);
      const x = xMap(theta);
      const y = yMap(currentOffset);

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

      if (spanOut && spanMeter) {
        const spanMt = 1000 * span;
        spanOut.textContent = spanMt.toFixed(spanMt < 10 ? 2 : 1) + " mT";
        const meter = 100 * Math.log10(1 + Math.max(0, spanMt)) / Math.log10(1 + 600);
        spanMeter.style.width = Math.max(0, Math.min(100, meter)).toFixed(1) + "%";
      }

      if (yMinLabel) yMinLabel.textContent = (-maxAbs).toFixed(1);
      if (yMaxLabel) yMaxLabel.textContent = maxAbs.toFixed(1);

      if (explanation) {
        const dg = Math.abs(gPerp - gPar);
        if (dg < 0.001) {
          explanation.textContent = "The tensor is nearly isotropic, so both the current and 9.5 GHz reference curves collapse toward zero offset.";
        } else if (Math.abs(freq-referenceFrequency) < 0.6) {
          explanation.textContent = "At X-band the solid curve nearly overlaps the dashed 9.5 GHz reference.";
        } else if (freq > referenceFrequency) {
          explanation.textContent = "The solid curve expands away from the dashed X-band reference: the same g-anisotropy produces a larger absolute field spread at higher frequency.";
        } else {
          explanation.textContent = "Below X-band the solid curve contracts inside the dashed reference because the same g-anisotropy maps onto a smaller field spread.";
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