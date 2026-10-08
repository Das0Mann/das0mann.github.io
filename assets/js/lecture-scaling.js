(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function formatBytes(bytes) {
    if (!Number.isFinite(bytes) || bytes <= 0) return "—";
    const units = ["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];
    let value = bytes;
    let i = 0;
    while (value >= 1024 && i < units.length - 1) {
      value /= 1024;
      i++;
    }
    if (i === units.length - 1 && value >= 1024) {
      return bytes.toExponential(2) + " B";
    }
    const digits = value >= 100 ? 0 : value >= 10 ? 1 : 2;
    return value.toFixed(digits) + " " + units[i];
  }

  function initScalingDemo() {
    const nInput = $("scale-spins");
    const mInput = $("scale-samples");
    if (!nInput || !mInput) return;

    const nOut = $("scale-spins-out");
    const mOut = $("scale-samples-out");
    const dOut = $("scale-d-out");
    const stateOut = $("scale-state-out");
    const opOut = $("scale-operator-out");
    const liouvilleOut = $("scale-liouville-out");
    const seOut = $("scale-se-out");
    const explanation = $("scale-explanation");
    const samplingMeter = $("scale-sampling-meter");
    const samplingGain = $("scale-sampling-gain");

    const statePath = $("scale-state-path");
    const opPath = $("scale-operator-path");
    const liouvillePath = $("scale-liouville-path");
    const markerLine = $("scale-marker-line");

    const nMin = 2, nMax = 24;
    const x0 = 58, x1 = 530, yTop = 35, yBottom = 248;
    const yMin = 1, yMax = 32;

    const xMap = (n) => x0 + (x1 - x0) * (n - nMin) / (nMax - nMin);
    const yMap = (logBytes) => {
      const c = Math.max(yMin, Math.min(yMax, logBytes));
      return yBottom - (yBottom - yTop) * (c - yMin) / (yMax - yMin);
    };

    const statePts = [], opPts = [], liouvillePts = [];
    for (let n = nMin; n <= nMax; n++) {
      const D = Math.pow(2, n);
      statePts.push([xMap(n), yMap(Math.log10(16 * D))]);
      opPts.push([xMap(n), yMap(Math.log10(16 * D * D))]);
      liouvillePts.push([xMap(n), yMap(Math.log10(16 * Math.pow(D, 4)))]);
    }
    statePath.setAttribute("d", makePath(statePts));
    opPath.setAttribute("d", makePath(opPts));
    liouvillePath.setAttribute("d", makePath(liouvillePts));

    function update() {
      const n = parseInt(nInput.value, 10);
      const m = Math.max(1, Math.round(Math.pow(2, parseFloat(mInput.value))));
      const D = Math.pow(2, n);
      const stateBytes = 16 * D;
      const opBytes = 16 * D * D;
      const liouvilleBytes = 16 * Math.pow(D, 4);
      const seFactor = 1 / Math.sqrt(m);

      nOut.textContent = n.toString();
      mOut.textContent = m.toString();
      dOut.textContent = D.toLocaleString("en-US");
      stateOut.textContent = formatBytes(stateBytes);
      opOut.textContent = formatBytes(opBytes);
      liouvilleOut.textContent = formatBytes(liouvilleBytes);
      seOut.textContent = seFactor.toFixed(3) + " σ";
      if (samplingMeter && samplingGain) {
        // Bar shrinks as uncertainty falls; M=1 is the full-width baseline.
        samplingMeter.style.width = (100 * seFactor).toFixed(1) + "%";
        samplingGain.textContent = (1 / seFactor).toFixed(1) + "× more precise than M=1";
      }

      const x = xMap(n);
      markerLine.setAttribute("x1", x.toFixed(2));
      markerLine.setAttribute("x2", x.toFixed(2));

      if (explanation) {
        if (opBytes < 1e8) {
          explanation.textContent = "Dense representations are still manageable here, so algorithmic simplicity may matter more than asymptotic scaling.";
        } else if (stateBytes < 1e8 && opBytes > 1e9) {
          explanation.textContent = "A state vector is still modest, while a dense operator is already expensive. State-vector or sparse methods gain a large advantage.";
        } else {
          explanation.textContent = "Even state-vector storage is becoming substantial. Explicit dense operator-space methods are far beyond practical memory limits.";
        }
      }
    }

    nInput.addEventListener("input", update);
    mInput.addEventListener("input", update);

    document.querySelectorAll("[data-scale-n]").forEach((button) => {
      button.addEventListener("click", () => {
        nInput.value = button.dataset.scaleN;
        update();
      });
    });

    document.querySelectorAll("[data-scale-m]").forEach((button) => {
      button.addEventListener("click", () => {
        mInput.value = Math.log2(parseFloat(button.dataset.scaleM)).toFixed(4);
        update();
      });
    });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScalingDemo);
  } else {
    initScalingDemo();
  }
})();
