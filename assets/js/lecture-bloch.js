(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const deg = Math.PI / 180;

  function project(x, y, z) {
    return {
      x: 0.8660254 * x - 0.5 * y,
      y: 0.3 * x + 0.5196152 * y - 0.8 * z
    };
  }

  function fmtComplex(re, im) {
    const eps = 5e-4;
    if (Math.abs(im) < eps) return re.toFixed(3);
    if (Math.abs(re) < eps) return (im < 0 ? "−" : "") + Math.abs(im).toFixed(3) + "i";
    return re.toFixed(3) + (im < 0 ? " − " : " + ") + Math.abs(im).toFixed(3) + "i";
  }

  function initBlochDemo() {
    const thetaInput = $("bloch-theta");
    const phiInput = $("bloch-phi");
    const etaInput = $("bloch-eta");
    if (!thetaInput || !phiInput || !etaInput) return;

    const thetaOut = $("bloch-theta-out");
    const phiOut = $("bloch-phi-out");
    const etaOut = $("bloch-eta-out");
    const popOut = $("bloch-pop-up");
    const coherenceOut = $("bloch-coherence");
    const lengthOut = $("bloch-length");
    const purityOut = $("bloch-purity");
    const explanation = $("bloch-explanation");
    const vector = $("bloch-vector");
    const tip = $("bloch-tip");
    const reference = $("bloch-pure-reference");
    const matrix = $("bloch-matrix");

    const cx = 260, cy = 160, R = 112;

    function update() {
      const theta = parseFloat(thetaInput.value) * deg;
      const phi = parseFloat(phiInput.value) * deg;
      const eta = parseFloat(etaInput.value);

      const x0 = Math.sin(theta) * Math.cos(phi);
      const y0 = Math.sin(theta) * Math.sin(phi);
      const z0 = Math.cos(theta);

      const x = eta * x0;
      const y = eta * y0;
      const z = z0;

      const length = Math.sqrt(x*x + y*y + z*z);
      const purity = 0.5 * (1 + length * length);
      const pUp = 0.5 * (1 + z);
      const pDown = 1 - pUp;
      const cohRe = x / 2;
      const cohIm = -y / 2;
      const coherence = 0.5 * Math.sqrt(x*x + y*y);

      thetaOut.textContent = (theta / deg).toFixed(0) + "°";
      phiOut.textContent = (phi / deg).toFixed(0) + "°";
      etaOut.textContent = eta.toFixed(2);
      popOut.textContent = (100 * pUp).toFixed(1) + "%";
      coherenceOut.textContent = coherence.toFixed(3);
      lengthOut.textContent = length.toFixed(3);
      purityOut.textContent = purity.toFixed(3);

      const q = project(x, y, z);
      const q0 = project(x0, y0, z0);
      const xTip = cx + R * q.x;
      const yTip = cy + R * q.y;
      const xRef = cx + R * q0.x;
      const yRef = cy + R * q0.y;

      vector.setAttribute("x2", xTip.toFixed(2));
      vector.setAttribute("y2", yTip.toFixed(2));
      tip.setAttribute("cx", xTip.toFixed(2));
      tip.setAttribute("cy", yTip.toFixed(2));
      reference.setAttribute("x2", xRef.toFixed(2));
      reference.setAttribute("y2", yRef.toFixed(2));

      matrix.textContent =
        "ρ = [[" + pUp.toFixed(3) + ", " + fmtComplex(cohRe, cohIm) + "],\n" +
        "     [" + fmtComplex(cohRe, -cohIm) + ", " + pDown.toFixed(3) + "]]";

      if (explanation) {
        if (eta > 0.995) {
          explanation.textContent = "This is a pure state: the Bloch vector reaches the sphere surface and Tr(ρ²)=1.";
        } else if (Math.abs(Math.sin(theta)) < 0.05) {
          explanation.textContent = "This state is already almost an energy-basis population state, so pure dephasing has little effect: there is almost no transverse coherence to remove.";
        } else if (eta < 0.05) {
          explanation.textContent = "The transverse coherence is almost gone. Populations remain fixed, but the state has moved inward because phase information was lost.";
        } else {
          explanation.textContent = "Pure dephasing contracts the transverse Bloch components while leaving r_z—and therefore the basis-state populations—unchanged.";
        }
      }
    }

    [thetaInput, phiInput, etaInput].forEach((el) => el.addEventListener("input", update));

    document.querySelectorAll("[data-bloch]").forEach((button) => {
      button.addEventListener("click", () => {
        const mode = button.dataset.bloch;
        if (mode === "up") {
          thetaInput.value = "0"; phiInput.value = "0"; etaInput.value = "1";
        } else if (mode === "plus") {
          thetaInput.value = "90"; phiInput.value = "0"; etaInput.value = "1";
        } else if (mode === "phase") {
          thetaInput.value = "90"; phiInput.value = "90"; etaInput.value = "1";
        } else {
          thetaInput.value = "90"; phiInput.value = "0"; etaInput.value = "0.08";
        }
        update();
      });
    });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBlochDemo);
  } else {
    initBlochDemo();
  }
})();