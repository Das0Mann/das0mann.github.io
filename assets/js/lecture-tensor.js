(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function initTensorDemo() {
    const txInput = $("tensor-tx");
    const tyInput = $("tensor-ty");
    const tzInput = $("tensor-tz");
    const thetaInput = $("tensor-theta");
    const phiInput = $("tensor-phi");
    if (!txInput || !tyInput || !tzInput || !thetaInput || !phiInput) return;

    const txOut = $("tensor-tx-out");
    const tyOut = $("tensor-ty-out");
    const tzOut = $("tensor-tz-out");
    const thetaOut = $("tensor-theta-out");
    const phiOut = $("tensor-phi-out");
    const effOut = $("tensor-effective");
    const isoOut = $("tensor-isotropic");
    const spanOut = $("tensor-span");
    const explanation = $("tensor-explanation");
    const path = $("tensor-path");
    const marker = $("tensor-marker");
    const markerLine = $("tensor-marker-line");

    const x0 = 58, x1 = 528, yTop = 30, yBottom = 252;
    const deg = Math.PI / 180;

    function projection(tx, ty, tz, thetaDeg, phiDeg) {
      const th = thetaDeg * deg;
      const ph = phiDeg * deg;
      const st = Math.sin(th);
      const nx = st * Math.cos(ph);
      const ny = st * Math.sin(ph);
      const nz = Math.cos(th);
      return tx * nx * nx + ty * ny * ny + tz * nz * nz;
    }

    function update() {
      const tx = parseFloat(txInput.value);
      const ty = parseFloat(tyInput.value);
      const tz = parseFloat(tzInput.value);
      const theta = parseFloat(thetaInput.value);
      const phi = parseFloat(phiInput.value);

      const eff = projection(tx, ty, tz, theta, phi);
      const iso = (tx + ty + tz) / 3;
      const minV = Math.min(tx, ty, tz);
      const maxV = Math.max(tx, ty, tz);
      const span = maxV - minV;
      const pad = Math.max(10, 0.12 * Math.max(1, span));
      const yMin = minV - pad;
      const yMax = maxV + pad;

      const xMap = (th) => x0 + (x1 - x0) * th / 180;
      const yMap = (value) => yBottom - (yBottom - yTop) * (value - yMin) / (yMax - yMin);

      txOut.textContent = tx.toFixed(0) + " MHz";
      tyOut.textContent = ty.toFixed(0) + " MHz";
      tzOut.textContent = tz.toFixed(0) + " MHz";
      thetaOut.textContent = theta.toFixed(0) + "°";
      phiOut.textContent = phi.toFixed(0) + "°";
      effOut.textContent = eff.toFixed(1) + " MHz";
      isoOut.textContent = iso.toFixed(1) + " MHz";
      spanOut.textContent = span.toFixed(0) + " MHz";

      const pts = [];
      for (let i = 0; i <= 180; i++) {
        pts.push([xMap(i), yMap(projection(tx, ty, tz, i, phi))]);
      }
      path.setAttribute("d", makePath(pts));

      const mx = xMap(theta);
      const my = yMap(eff);
      marker.setAttribute("cx", mx.toFixed(2));
      marker.setAttribute("cy", my.toFixed(2));
      markerLine.setAttribute("x1", mx.toFixed(2));
      markerLine.setAttribute("x2", mx.toFixed(2));

      if (explanation) {
        if (span < 1e-9) {
          explanation.textContent = "The tensor is isotropic, so rotating the molecule does not change the effective projection.";
        } else if (Math.abs(theta) < 5 || Math.abs(theta - 180) < 5) {
          explanation.textContent = "The field is almost aligned with the z principal axis, so the effective value approaches T_z.";
        } else if (Math.abs(theta - 90) < 5) {
          explanation.textContent = "The field lies almost in the xy plane. The azimuthal angle phi determines how strongly T_x and T_y contribute.";
        } else {
          explanation.textContent = "This orientation samples a weighted mixture of all three principal values. Rotating the molecule changes the effective interaction without changing the tensor eigenvalues.";
        }
      }
    }

    [txInput, tyInput, tzInput, thetaInput, phiInput].forEach((el) =>
      el.addEventListener("input", update)
    );

    document.querySelectorAll("[data-tensor-preset]").forEach((button) => {
      button.addEventListener("click", () => {
        const mode = button.dataset.tensorPreset;
        if (mode === "isotropic") {
          txInput.value = "60"; tyInput.value = "60"; tzInput.value = "60";
        } else if (mode === "axial") {
          txInput.value = "30"; tyInput.value = "30"; tzInput.value = "100";
        } else {
          txInput.value = "20"; tyInput.value = "55"; tzInput.value = "100";
        }
        update();
      });
    });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTensorDemo);
  } else {
    initTensorDemo();
  }
})();