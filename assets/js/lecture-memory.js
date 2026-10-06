(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function initMemoryDemo() {
    const gammaInput = $("memory-gamma");
    const tauInput = $("memory-tau");
    if (!gammaInput || !tauInput) return;

    const gammaOut = $("memory-gamma-out");
    const tauOut = $("memory-tau-out");
    const productOut = $("memory-product-out");
    const regimeOut = $("memory-regime-out");
    const windowOut = $("memory-window-out");
    const explanation = $("memory-explanation");
    const markovPath = $("memory-markov-path");
    const kernelPath = $("memory-kernel-path");

    const x0 = 58, x1 = 530, yTop = 35, yBottom = 248;
    const yMin = -1.05, yMax = 1.05;
    const yMap = (value) => {
      const c = Math.max(yMin, Math.min(yMax, value));
      return yBottom - (yBottom - yTop) * (c - yMin) / (yMax - yMin);
    };

    function integrate(gamma, tau, tMax) {
      const n = 420;
      const dt = tMax / n;
      let y = 1;
      let v = 0;
      const out = [[0, y]];

      function deriv(stateY, stateV) {
        return [stateV, (-stateV - gamma * stateY) / tau];
      }

      for (let i = 1; i <= n; i++) {
        const [k1y, k1v] = deriv(y, v);
        const [k2y, k2v] = deriv(y + 0.5 * dt * k1y, v + 0.5 * dt * k1v);
        const [k3y, k3v] = deriv(y + 0.5 * dt * k2y, v + 0.5 * dt * k2v);
        const [k4y, k4v] = deriv(y + dt * k3y, v + dt * k3v);

        y += dt * (k1y + 2*k2y + 2*k3y + k4y) / 6;
        v += dt * (k1v + 2*k2v + 2*k3v + k4v) / 6;
        out.push([i * dt, y]);
      }
      return out;
    }

    function update() {
      const gamma = parseFloat(gammaInput.value);
      const tau = parseFloat(tauInput.value);
      const product = gamma * tau;
      const tMax = Math.min(50, Math.max(6 / gamma, 8 * tau));

      gammaOut.textContent = gamma.toFixed(2) + " μs⁻¹";
      tauOut.textContent = tau.toFixed(2) + " μs";
      productOut.textContent = product.toFixed(3);
      windowOut.textContent = tMax.toFixed(2) + " μs";

      let regime = "overdamped";
      if (Math.abs(product - 0.25) < 0.015) regime = "critical";
      else if (product > 0.25) regime = "underdamped";
      else if (product < 0.05) regime = "Markov-like";
      regimeOut.textContent = regime;

      if (explanation) {
        if (product < 0.05) {
          explanation.textContent = "The memory kernel is much shorter than the decay time, so the finite-memory curve approaches the Markovian exponential.";
        } else if (product < 0.25) {
          explanation.textContent = "The memory is finite but the scalar response remains overdamped.";
        } else {
          explanation.textContent = "The memory time is long enough to produce an underdamped response and overshoot in this toy amplitude.";
        }
      }

      const finite = integrate(gamma, tau, tMax);
      const markov = finite.map(([t]) => [t, Math.exp(-gamma * t)]);
      const xMap = (t) => x0 + (x1 - x0) * t / tMax;

      markovPath.setAttribute("d", makePath(markov.map(([t,y]) => [xMap(t), yMap(y)])));
      kernelPath.setAttribute("d", makePath(finite.map(([t,y]) => [xMap(t), yMap(y)])));
    }

    gammaInput.addEventListener("input", update);
    tauInput.addEventListener("input", update);

    document.querySelectorAll("[data-memory-tau]").forEach((button) => {
      button.addEventListener("click", () => {
        tauInput.value = button.dataset.memoryTau;
        update();
      });
    });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMemoryDemo);
  } else {
    initMemoryDemo();
  }
})();
