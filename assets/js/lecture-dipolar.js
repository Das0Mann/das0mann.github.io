(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function initDipolarDemo() {
    const rInput = $("dipolar-r");
    const thetaInput = $("dipolar-theta");
    if (!rInput || !thetaInput) return;

    const rOut = $("dipolar-r-out");
    const thetaOut = $("dipolar-theta-out");
    const prefactorOut = $("dipolar-prefactor-out");
    const factorOut = $("dipolar-factor-out");
    const secularOut = $("dipolar-secular-out");
    const explanation = $("dipolar-explanation");
    const path = $("dipolar-factor-path");
    const marker = $("dipolar-marker");
    const markerLine = $("dipolar-marker-line");
    const distanceMeter = $("dipolar-distance-meter");
    const distanceRatio = $("dipolar-distance-ratio");

    const muB = 9.2740100783e-24;
    const h = 6.62607015e-34;
    const g1 = 2.0023;
    const g2 = 2.0023;

    const x0 = 58, x1 = 530;
    const yTop = 35, yBottom = 248;
    const yMin = -2.2, yMax = 1.2;

    const xMap = (theta) => x0 + (x1 - x0) * theta / 90;
    const yMap = (value) =>
      yBottom - (yBottom - yTop) * (value - yMin) / (yMax - yMin);

    function factor(thetaDeg) {
      const c = Math.cos(thetaDeg * Math.PI / 180);
      return 1 - 3 * c * c;
    }

    const curve = [];
    for (let i = 0; i <= 240; i++) {
      const theta = 90 * i / 240;
      curve.push([xMap(theta), yMap(factor(theta))]);
    }
    path.setAttribute("d", makePath(curve));

    function update() {
      const rNm = parseFloat(rInput.value);
      const theta = parseFloat(thetaInput.value);
      const rM = rNm * 1e-9;
      const prefactorHz =
        1e-7 * g1 * g2 * muB * muB / (h * rM * rM * rM);
      const prefactorMHz = prefactorHz / 1e6;
      const f = factor(theta);
      const secularMHz = prefactorMHz * f;

      rOut.textContent = rNm.toFixed(2) + " nm";
      thetaOut.textContent = theta.toFixed(2) + "°";
      prefactorOut.textContent = prefactorMHz.toFixed(prefactorMHz >= 10 ? 1 : 2) + " MHz";
      factorOut.textContent = f.toFixed(3);
      secularOut.textContent = secularMHz.toFixed(Math.abs(secularMHz) >= 10 ? 1 : 2) + " MHz";

      if (distanceMeter && distanceRatio) {
        const relTo1nm = 1 / Math.pow(rNm, 3);
        const logMin = Math.log10(1 / Math.pow(4, 3));
        const logMax = Math.log10(1 / Math.pow(0.5, 3));
        const meter = 100 * (Math.log10(relTo1nm) - logMin) / (logMax - logMin);
        distanceMeter.style.width = Math.max(0, Math.min(100, meter)).toFixed(1) + "%";
        distanceRatio.textContent = relTo1nm >= 0.1
          ? relTo1nm.toFixed(relTo1nm >= 10 ? 0 : 2) + "× at 1 nm"
          : relTo1nm.toExponential(1) + "× at 1 nm";
      }

      const x = xMap(theta);
      const y = yMap(f);
      marker.setAttribute("cx", x.toFixed(2));
      marker.setAttribute("cy", y.toFixed(2));
      markerLine.setAttribute("x1", x.toFixed(2));
      markerLine.setAttribute("x2", x.toFixed(2));

      if (explanation) {
        if (Math.abs(f) < 0.03) {
          explanation.textContent = "You are close to the magic angle: the high-field secular orientation factor is nearly zero.";
        } else if (theta < 25) {
          explanation.textContent = "Near the field axis the orientation factor is negative and approaches −2 at θ = 0°.";
        } else if (theta > 75) {
          explanation.textContent = "Near 90° the orientation factor is positive and approaches +1.";
        } else {
          explanation.textContent = "The sign and magnitude come from geometry; the overall scale still falls as r⁻³.";
        }
      }
    }

    rInput.addEventListener("input", update);
    thetaInput.addEventListener("input", update);

    document.querySelectorAll("[data-dipolar-r]").forEach((button) => {
      button.addEventListener("click", () => {
        rInput.value = button.dataset.dipolarR;
        thetaInput.value = button.dataset.dipolarTheta;
        update();
      });
    });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDipolarDemo);
  } else {
    initDipolarDemo();
  }
})();
