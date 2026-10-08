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
    const t2Line = $("qbio-t2-line");
    const mixLine = $("qbio-mix-line");
    const lifeMarker = $("qbio-life-marker");

    const x0 = 58, x1 = 530, yTop = 35, yBottom = 248;
    const logMin = -2, logMax = 2;
    const xMapLog = (logt) => x0 + (x1 - x0) * (logt - logMin) / (logMax - logMin);
    const xMapTime = (t) => xMapLog(Math.max(logMin, Math.min(logMax, Math.log10(t))));
    const yMap = (value) => yBottom - (yBottom - yTop) * Math.max(0, Math.min(1, value));

    function setVertical(line, x) {
      if (!line) return;
      line.setAttribute("x1", x.toFixed(2));
      line.setAttribute("x2", x.toFixed(2));
    }

    function update() {
      const life = Math.pow(10, parseFloat(lifeInput.value));
      const t2 = Math.pow(10, parseFloat(t2Input.value));
      const f = Math.pow(10, parseFloat(fInput.value));
      const mixPeriod = 1 / f; // MHz × μs = cycles

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
          explanation.textContent = "The lifetime marker lies before even half of a mixing period. Coherent spin conversion has very little time to develop.";
        } else if (coherence < 0.1) {
          explanation.textContent = "The lifetime is long enough for mixing, but the T₂ marker lies far to the left: most coherence is gone before reaction.";
        } else if (coherentCycles >= 1) {
          explanation.textContent = "Lifetime, coherence time and mixing period overlap in a useful window. This passes the timescale sanity check, although it does not prove magnetosensitivity.";
        } else {
          explanation.textContent = "Some coherent evolution is possible, but the three timescales only marginally overlap.";
        }
      }

      const pts = [];
      const n = 360;
      for (let i = 0; i <= n; i++) {
        const logt = logMin + (logMax - logMin) * i / n;
        const t = Math.pow(10, logt);
        pts.push([xMapLog(logt), yMap(Math.exp(-t / t2))]);
      }
      envelopePath.setAttribute("d", makePath(pts));

      const xLife = xMapTime(life);
      const xT2 = xMapTime(t2);
      const xMix = xMapTime(mixPeriod);
      setVertical(lifeLine, xLife);
      setVertical(t2Line, xT2);
      setVertical(mixLine, xMix);

      lifeMarker.setAttribute("cx", xLife.toFixed(2));
      lifeMarker.setAttribute("cy", yMap(coherence).toFixed(2));
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