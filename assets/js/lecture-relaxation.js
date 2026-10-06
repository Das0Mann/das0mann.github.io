(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function initRelaxationDemo() {
    const t1Input = $("relax-t1");
    const tphiInput = $("relax-tphi");
    if (!t1Input || !tphiInput) return;

    const t1Out = $("relax-t1-out");
    const tphiOut = $("relax-tphi-out");
    const t2Out = $("relax-t2-out");
    const windowOut = $("relax-window-out");
    const explanation = $("relax-explanation");
    const mzPath = $("relax-mz-path");
    const mxyPath = $("relax-mxy-path");

    const x0 = 58, x1 = 530;
    const yTop = 35, yBottom = 248;

    function update() {
      const t1 = parseFloat(t1Input.value);
      const tphi = parseFloat(tphiInput.value);
      const t2 = 1 / (1 / (2 * t1) + 1 / tphi);
      const tMax = clamp(4 * Math.max(t1, t2), 1.0, 32.0);

      t1Out.textContent = t1.toFixed(2) + " μs";
      tphiOut.textContent = tphi.toFixed(2) + " μs";
      t2Out.textContent = t2.toFixed(2) + " μs";
      windowOut.textContent = tMax.toFixed(2) + " μs";

      if (explanation) {
        const ratio = t2 / (2 * t1);
        if (ratio > 0.8) {
          explanation.textContent = "Pure dephasing is weak. T₂ is close to its relaxation-limited upper bound of 2T₁.";
        } else if (ratio > 0.3) {
          explanation.textContent = "Both population relaxation and pure dephasing contribute appreciably to coherence loss.";
        } else {
          explanation.textContent = "Pure dephasing dominates: transverse coherence disappears much faster than longitudinal populations recover.";
        }
      }

      const n = 320;
      const mz = [];
      const mxy = [];

      for (let i = 0; i <= n; i++) {
        const time = tMax * i / n;
        const z = 1 - Math.exp(-time / t1);
        const xy = Math.exp(-time / t2);
        const x = x0 + (x1 - x0) * i / n;
        mz.push([x, yBottom - (yBottom - yTop) * z]);
        mxy.push([x, yBottom - (yBottom - yTop) * xy]);
      }

      mzPath.setAttribute("d", makePath(mz));
      mxyPath.setAttribute("d", makePath(mxy));
    }

    t1Input.addEventListener("input", update);
    tphiInput.addEventListener("input", update);

    document.querySelectorAll("[data-relax-t1]").forEach((button) => {
      button.addEventListener("click", () => {
        t1Input.value = button.dataset.relaxT1;
        tphiInput.value = button.dataset.relaxTphi;
        update();
      });
    });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRelaxationDemo);
  } else {
    initRelaxationDemo();
  }
})();
