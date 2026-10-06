(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function initPhotoDemo() {
    const e00Input = $("photo-e00");
    const kInput = $("photo-k");
    const dInput = $("photo-d");
    if (!e00Input || !kInput || !dInput) return;

    const e00Out = $("photo-e00-out");
    const kOut = $("photo-k-out");
    const dOut = $("photo-d-out");
    const lambdaOut = $("photo-lambda-out");
    const absOut = $("photo-abs-out");
    const emOut = $("photo-em-out");
    const stokesOut = $("photo-stokes-out");
    const explanation = $("photo-explanation");

    const groundPath = $("photo-ground-path");
    const excitedPath = $("photo-excited-path");
    const absArrow = $("photo-abs-arrow");
    const emArrow = $("photo-em-arrow");
    const absLabel = $("photo-abs-label");
    const emLabel = $("photo-em-label");

    const x0 = 58, x1 = 530, yTop = 25, yBottom = 270;
    const qMin = -1.5, qMax = 2.5;

    const xMap = (q) => x0 + (x1 - x0) * (q - qMin) / (qMax - qMin);

    function update() {
      const e00 = parseFloat(e00Input.value);
      const k = parseFloat(kInput.value);
      const d = parseFloat(dInput.value);

      const lambda = 0.5 * k * d * d;
      const eAbs = e00 + lambda;
      const eEm = Math.max(0, e00 - lambda);
      const stokes = 2 * lambda;

      e00Out.textContent = e00.toFixed(2) + " eV";
      kOut.textContent = k.toFixed(2) + " eV";
      dOut.textContent = d.toFixed(2);
      lambdaOut.textContent = lambda.toFixed(3) + " eV";
      absOut.textContent = eAbs.toFixed(3) + " eV";
      emOut.textContent = eEm.toFixed(3) + " eV";
      stokesOut.textContent = stokes.toFixed(3) + " eV";

      if (explanation) {
        if (d < 0.05) {
          explanation.textContent = "The minima coincide, so this equal-curvature model has essentially no reorganization or Stokes shift.";
        } else if (lambda < 0.2) {
          explanation.textContent = "The excited surface is moderately displaced: relaxation lowers the emission energy relative to vertical absorption.";
        } else {
          explanation.textContent = "The large displacement produces strong nuclear reorganization and a correspondingly large separation between absorption and emission.";
        }
      }

      const groundEnergy = (q) => 0.5 * k * q * q;
      const excitedEnergy = (q) => e00 + 0.5 * k * (q - d) * (q - d);

      let eMax = 0;
      for (let i = 0; i <= 240; i++) {
        const q = qMin + (qMax - qMin) * i / 240;
        eMax = Math.max(eMax, groundEnergy(q), excitedEnergy(q));
      }
      eMax = Math.max(eMax * 1.06, eAbs * 1.12, 1);

      const yMap = (e) => yBottom - (yBottom - yTop) * e / eMax;

      const gPts = [];
      const ePts = [];
      for (let i = 0; i <= 240; i++) {
        const q = qMin + (qMax - qMin) * i / 240;
        gPts.push([xMap(q), yMap(groundEnergy(q))]);
        ePts.push([xMap(q), yMap(excitedEnergy(q))]);
      }

      groundPath.setAttribute("d", makePath(gPts));
      excitedPath.setAttribute("d", makePath(ePts));

      const absX = xMap(0);
      absArrow.setAttribute("x1", absX.toFixed(2));
      absArrow.setAttribute("x2", absX.toFixed(2));
      absArrow.setAttribute("y1", yMap(0).toFixed(2));
      absArrow.setAttribute("y2", yMap(eAbs).toFixed(2));
      absLabel.setAttribute("x", (absX + 8).toFixed(2));
      absLabel.setAttribute("y", ((yMap(0) + yMap(eAbs)) / 2).toFixed(2));

      const emX = xMap(d);
      emArrow.setAttribute("x1", emX.toFixed(2));
      emArrow.setAttribute("x2", emX.toFixed(2));
      emArrow.setAttribute("y1", yMap(e00).toFixed(2));
      emArrow.setAttribute("y2", yMap(lambda).toFixed(2));
      emLabel.setAttribute("x", (emX + 8).toFixed(2));
      emLabel.setAttribute("y", ((yMap(e00) + yMap(lambda)) / 2).toFixed(2));
    }

    [e00Input, kInput, dInput].forEach((input) =>
      input.addEventListener("input", update)
    );

    document.querySelectorAll("[data-photo-d]").forEach((button) => {
      button.addEventListener("click", () => {
        dInput.value = button.dataset.photoD;
        update();
      });
    });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPhotoDemo);
  } else {
    initPhotoDemo();
  }
})();
