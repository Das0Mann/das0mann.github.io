(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  function choose(n, k) {
    if (k < 0 || k > n) return 0;
    k = Math.min(k, n - k);
    let value = 1;
    for (let i = 1; i <= k; i++) value = value * (n - k + i) / i;
    return Math.round(value);
  }

  function formatInteger(x) {
    return Number.isFinite(x) ? Math.round(x).toLocaleString("en-US") : "—";
  }

  function formatBytes(bytes) {
    const units = ["B", "KiB", "MiB", "GiB", "TiB"];
    let value = bytes;
    let i = 0;
    while (value >= 1024 && i < units.length - 1) {
      value /= 1024;
      i++;
    }
    const digits = value >= 100 ? 0 : value >= 10 ? 1 : 2;
    return value.toFixed(digits) + " " + units[i];
  }

  function initCASDemo() {
    const mInput = $("cas-orbitals");
    const nInput = $("cas-electrons");
    if (!mInput || !nInput) return;

    const mOut = $("cas-orbitals-out");
    const nOut = $("cas-electrons-out");
    const labelOut = $("cas-label");
    const msOut = $("cas-ms-count");
    const allOut = $("cas-all-count");
    const memOut = $("cas-memory");
    const explanation = $("cas-explanation");

    function update() {
      const m = parseInt(mInput.value, 10);
      const maxElectrons = 2 * m;
      nInput.max = String(maxElectrons);
      if (parseInt(nInput.value, 10) > maxElectrons) nInput.value = String(maxElectrons);

      const n = parseInt(nInput.value, 10);
      const nAlpha = Math.ceil(n / 2);
      const nBeta = Math.floor(n / 2);
      const msCount = choose(m, nAlpha) * choose(m, nBeta);
      const allCount = choose(2 * m, n);

      mOut.textContent = String(m);
      nOut.textContent = String(n);
      labelOut.textContent = "CAS(" + n + "," + m + ")";
      msOut.textContent = formatInteger(msCount);
      allOut.textContent = formatInteger(allCount);
      memOut.textContent = formatBytes(msCount * 16);

      if (explanation) {
        if (msCount < 5000) {
          explanation.textContent = "This is a modest complete active space. Orbital optimization and integral transformations can still dominate the cost.";
        } else if (msCount < 200000) {
          explanation.textContent = "The CI problem is now substantial. Symmetry, spin adaptation and efficient solvers become increasingly important.";
        } else if (msCount < 2000000) {
          explanation.textContent = "The complete active space is large. The CI vector is only one part of the cost; repeated Hamiltonian actions during orbital optimization are the real burden.";
        } else {
          explanation.textContent = "This is a very large conventional CAS. Restricted active spaces, DMRG-SCF or other selected/structured active-space methods may be more practical.";
        }
      }
    }

    [mInput, nInput].forEach((el) => el.addEventListener("input", update));

    document.querySelectorAll("[data-cas-n][data-cas-m]").forEach((button) => {
      button.addEventListener("click", () => {
        mInput.value = button.dataset.casM;
        nInput.value = button.dataset.casN;
        update();
      });
    });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCASDemo);
  } else {
    initCASDemo();
  }
})();