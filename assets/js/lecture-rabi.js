(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function initRabiDemo() {
    const nu1Input = $("rabi-nu1");
    const detuningInput = $("rabi-detuning");
    const timeInput = $("rabi-time");
    if (!nu1Input || !detuningInput || !timeInput) return;

    const nu1Out = $("rabi-nu1-out");
    const detuningOut = $("rabi-detuning-out");
    const timeOut = $("rabi-time-out");
    const generalOut = $("rabi-general-out");
    const angleOut = $("rabi-angle-out");
    const probOut = $("rabi-prob-out");
    const piOut = $("rabi-pi-out");
    const explanation = $("rabi-explanation");

    const path = $("rabi-path");
    const marker = $("rabi-marker");
    const markerLine = $("rabi-marker-line");

    const x0 = 58, x1 = 530, yTop = 35, yBottom = 248;
    const yMap = (p) => yBottom - (yBottom - yTop) * Math.max(0, Math.min(1, p));

    function transitionProbability(nu1, detuning, timeNs) {
      const generalized = Math.sqrt(nu1 * nu1 + detuning * detuning);
      const amplitude = nu1 * nu1 / (generalized * generalized);
      const timeUs = timeNs / 1000;
      return amplitude * Math.pow(Math.sin(Math.PI * generalized * timeUs), 2);
    }

    function update() {
      const nu1 = parseFloat(nu1Input.value);
      const detuning = parseFloat(detuningInput.value);
      const timeNs = parseFloat(timeInput.value);
      const generalized = Math.sqrt(nu1 * nu1 + detuning * detuning);
      const probability = transitionProbability(nu1, detuning, timeNs);
      const angleDeg = 360 * nu1 * timeNs / 1000;
      const piTimeNs = 500 / nu1;

      nu1Out.textContent = nu1.toFixed(1) + " MHz";
      detuningOut.textContent = detuning.toFixed(1) + " MHz";
      timeOut.textContent = timeNs.toFixed(1) + " ns";
      generalOut.textContent = generalized.toFixed(2) + " MHz";
      angleOut.textContent = angleDeg.toFixed(1) + "°";
      probOut.textContent = (100 * probability).toFixed(1) + "%";
      piOut.textContent = piTimeNs.toFixed(1) + " ns";

      if (explanation) {
        const relDetuning = Math.abs(detuning) / nu1;
        const nearPi = Math.abs(((angleDeg % 360) + 360) % 360 - 180) < 8;
        if (relDetuning < 0.03 && nearPi) {
          explanation.textContent = "The pulse is resonant and has approximately the area of a π rotation, so population transfer is nearly complete.";
        } else if (relDetuning < 0.1) {
          explanation.textContent = "The drive is close to resonance. Pulse area mainly determines how far the state rotates.";
        } else if (relDetuning > 2) {
          explanation.textContent = "The drive is strongly detuned: the effective rotation axis points mostly along z and population transfer is strongly suppressed.";
        } else {
          explanation.textContent = "Detuning tilts the effective rotation axis and reduces the maximum population transfer below unity.";
        }
      }

      // Keep one absolute time axis while varying drive and detuning.
      // Autoscaling by the oscillation period made distinct frequencies
      // appear almost identical, and hid slow driving at small nu1.
      const tMax = 500; // ns; matches the pulse-duration slider
      const xMap = (t) => x0 + (x1 - x0) * t / tMax;

      const pts = [];
      const n = 1200; // sample up to sqrt(50²+50²) MHz without aliasing
      for (let i = 0; i <= n; i++) {
        const t = tMax * i / n;
        pts.push([xMap(t), yMap(transitionProbability(nu1, detuning, t))]);
      }
      path.setAttribute("d", makePath(pts));

      const markerX = xMap(timeNs);
      const markerY = yMap(probability);
      marker.setAttribute("cx", markerX.toFixed(2));
      marker.setAttribute("cy", markerY.toFixed(2));
      markerLine.setAttribute("x1", markerX.toFixed(2));
      markerLine.setAttribute("x2", markerX.toFixed(2));
    }

    [nu1Input, detuningInput, timeInput].forEach((input) =>
      input.addEventListener("input", update)
    );

    document.querySelectorAll("[data-rabi-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        nu1Input.value = "10";
        if (button.dataset.rabiMode === "pi2") {
          detuningInput.value = "0";
          timeInput.value = "25";
        } else if (button.dataset.rabiMode === "pi") {
          detuningInput.value = "0";
          timeInput.value = "50";
        } else {
          detuningInput.value = "8";
          timeInput.value = "50";
        }
        update();
      });
    });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRabiDemo);
  } else {
    initRabiDemo();
  }
})();
