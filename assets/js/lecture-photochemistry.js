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


  function initBranchingDemo() {
    const kfInput = $("branch-kf");
    const kicInput = $("branch-kic");
    const kiscInput = $("branch-kisc");
    if (!kfInput || !kicInput || !kiscInput) return;

    const kfOut = $("branch-kf-out");
    const kicOut = $("branch-kic-out");
    const kiscOut = $("branch-kisc-out");
    const fluorOut = $("branch-fluor-out");
    const icOut = $("branch-ic-out");
    const iscOut = $("branch-isc-out");
    const lifeOut = $("branch-life-out");
    const fluorBar = $("branch-fluor-bar");
    const icBar = $("branch-ic-bar");
    const iscBar = $("branch-isc-bar");

    function rate(log10k) {
      return Math.pow(10, parseFloat(log10k));
    }

    function formatRate(k) {
      const e = Math.floor(Math.log10(k));
      const m = k / Math.pow(10, e);
      return m.toFixed(1) + " × 10" + String.fromCharCode(0x2070 + 0);
    }

    function scientific(k) {
      const e = Math.floor(Math.log10(k));
      const m = k / Math.pow(10, e);
      return m.toFixed(1) + " × 10^" + e + " s⁻¹";
    }

    function formatLifetime(seconds) {
      if (seconds < 1e-9) return (seconds * 1e12).toFixed(1) + " ps";
      if (seconds < 1e-6) return (seconds * 1e9).toFixed(2) + " ns";
      return (seconds * 1e6).toFixed(2) + " μs";
    }

    function update() {
      const kf = rate(kfInput.value);
      const kic = rate(kicInput.value);
      const kisc = rate(kiscInput.value);
      const total = kf + kic + kisc;

      const pf = kf / total;
      const pic = kic / total;
      const pisc = kisc / total;
      const lifetime = 1 / total;

      kfOut.textContent = scientific(kf);
      kicOut.textContent = scientific(kic);
      kiscOut.textContent = scientific(kisc);
      fluorOut.textContent = (100 * pf).toFixed(1) + "%";
      icOut.textContent = (100 * pic).toFixed(1) + "%";
      iscOut.textContent = (100 * pisc).toFixed(1) + "%";
      lifeOut.textContent = formatLifetime(lifetime);

      fluorBar.style.width = (100 * pf).toFixed(3) + "%";
      icBar.style.width = (100 * pic).toFixed(3) + "%";
      iscBar.style.width = (100 * pisc).toFixed(3) + "%";
    }

    [kfInput, kicInput, kiscInput].forEach((input) =>
      input.addEventListener("input", update)
    );

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => { initPhotoDemo(); initBranchingDemo(); });
  } else {
    initPhotoDemo();
    initBranchingDemo();
  }
})();
