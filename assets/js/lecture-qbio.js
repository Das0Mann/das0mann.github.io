(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function formatTime(us) {
    if (us < 0.1) return (us * 1000).toFixed(1) + " ns";
    if (us >= 10) return us.toFixed(1) + " μs";
    return us.toFixed(2) + " μs";
  }

  function formatFreq(mhz) {
    if (mhz >= 1000) return (mhz / 1000).toFixed(2) + " GHz";
    if (mhz >= 10) return mhz.toFixed(1) + " MHz";
    return mhz.toFixed(2) + " MHz";
  }

  function initQBioDemo() {
    const lifeInput = $("qbio-loglife");
    const t2Input = $("qbio-logt2");
    const fInput = $("qbio-logf");
    if (!lifeInput || !t2Input || !fInput) return;

    const lifeOut = $("qbio-life-out");
    const t2Out = $("qbio-t2-out");
    const fOut = $("qbio-f-out");
    const cyclesOut = $("qbio-cycles-out");
    const coherenceOut = $("qbio-coherence-out");
    const coherentCyclesOut = $("qbio-coherent-cycles-out");
    const explanation = $("qbio-explanation");
    const envelopePath = $("qbio-envelope-path");
    const lifeLine = $("qbio-life-line");
    const lifeMarker = $("qbio-life-marker");

    const x0 = 58, x1 = 530, yTop = 35, yBottom = 248;
    const yMap = (value) => yBottom - (yBottom - yTop) * value;

    function update() {
      const life = Math.pow(10, parseFloat(lifeInput.value));
      const t2 = Math.pow(10, parseFloat(t2Input.value));
      const f = Math.pow(10, parseFloat(fInput.value));

      const cycles = f * life;
      const coherence = Math.exp(-life / t2);
      const coherentCycles = f * Math.min(life, t2);

      lifeOut.textContent = formatTime(life);
      t2Out.textContent = formatTime(t2);
      fOut.textContent = formatFreq(f);
      cyclesOut.textContent = cycles.toFixed(cycles < 10 ? 2 : 1);
      coherenceOut.textContent = (100 * coherence).toFixed(1) + "%";
      coherentCyclesOut.textContent = coherentCycles.toFixed(coherentCycles < 10 ? 2 : 1);

      if (explanation) {
        if (cycles < 0.5) {
          explanation.textContent = "The radical pair disappears before even half of a characteristic mixing cycle is completed. This timescale alone would strongly limit coherent spin conversion.";
        } else if (coherence < 0.1) {
          explanation.textContent = "The lifetime permits spin evolution, but the coherence envelope is largely gone before the reaction time.";
        } else if (coherentCycles >= 1) {
          explanation.textContent = "The lifetime and coherence time overlap with at least one characteristic mixing cycle. The basic timescale window is open, although this does not guarantee magnetosensitivity.";
        } else {
          explanation.textContent = "Some coherent evolution is possible, but the available window is narrow and the full Hamiltonian and reaction kinetics will decide the outcome.";
        }
      }

      const tMax = 2 * life;
      const pts = [];
      const n = 300;
      for (let i = 0; i <= n; i++) {
        const t = tMax * i / n;
        pts.push([
          x0 + (x1 - x0) * t / tMax,
          yMap(Math.exp(-t / t2))
        ]);
      }
      envelopePath.setAttribute("d", makePath(pts));

      const lifeX = x0 + (x1 - x0) * 0.5;
      const lifeY = yMap(coherence);
      lifeLine.setAttribute("x1", lifeX.toFixed(2));
      lifeLine.setAttribute("x2", lifeX.toFixed(2));
      lifeMarker.setAttribute("cx", lifeX.toFixed(2));
      lifeMarker.setAttribute("cy", lifeY.toFixed(2));
    }

    [lifeInput, t2Input, fInput].forEach((input) =>
      input.addEventListener("input", update)
    );

    document.querySelectorAll("[data-qbio-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.dataset.qbioMode === "short") {
          lifeInput.value = "-1.3";
          t2Input.value = "0.3";
          fInput.value = "0.0";
        } else if (button.dataset.qbioMode === "dephased") {
          lifeInput.value = "0";
          t2Input.value = "-1";
          fInput.value = "0.3";
        } else {
          lifeInput.value = "0";
          t2Input.value = "0.3";
          fInput.value = "0.3";
        }
        update();
      });
    });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQBioDemo);
  } else {
    initQBioDemo();
  }
})();
