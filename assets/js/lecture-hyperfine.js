(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  function binomial(n, k) {
    let c = 1;
    for (let i = 1; i <= k; i++) c = c * (n - i + 1) / i;
    return Math.round(c);
  }

  function initHyperfineDemo() {
    const nInput = $("hf-count");
    const aInput = $("hf-A");
    if (!nInput || !aInput) return;

    const nOut = $("hf-count-out");
    const aOut = $("hf-A-out");
    const linesOut = $("hf-lines-out");
    const spacingOut = $("hf-spacing-out");
    const intensityOut = $("hf-intensity-out");
    const spanOut = $("hf-span-out");
    const explanation = $("hf-explanation");
    const group = $("hf-stick-group");
    const leftLabel = $("hf-axis-left");
    const rightLabel = $("hf-axis-right");

    const x0 = 58, x1 = 530, yBase = 210, maxHeight = 140;

    function update() {
      const n = parseInt(nInput.value, 10);
      const A = parseFloat(aInput.value);
      const intensities = Array.from({length:n+1}, (_,k) => binomial(n,k));
      const maxI = Math.max(...intensities);
      const outer = n * A / 2;
      const axisHalf = 220; // fixed teaching frame: n<=4 and A<=100 MHz fit inside ±200 MHz
      const xMap = (nu) => x0 + (x1-x0) * (nu + axisHalf) / (2*axisHalf);

      nOut.textContent = n.toString();
      aOut.textContent = A.toFixed(0) + " MHz";
      linesOut.textContent = (n+1).toString();
      spacingOut.textContent = A.toFixed(0) + " MHz";
      intensityOut.textContent = intensities.join(" : ");
      spanOut.textContent = (n*A).toFixed(0) + " MHz";
      leftLabel.textContent = "−" + axisHalf.toFixed(0);
      rightLabel.textContent = axisHalf.toFixed(0);

      group.innerHTML = "";
      for (let k=0; k<=n; k++) {
        const m = k - n/2;
        const nu = m * A;
        const x = xMap(nu);
        const h = 28 + (maxHeight-28) * intensities[k] / maxI;
        const line = document.createElementNS("http://www.w3.org/2000/svg","line");
        line.setAttribute("x1", x.toFixed(2));
        line.setAttribute("x2", x.toFixed(2));
        line.setAttribute("y1", yBase.toString());
        line.setAttribute("y2", (yBase-h).toFixed(2));
        line.setAttribute("class","hyperfine-stick");
        group.appendChild(line);
      }

      if (explanation) {
        const words = ["","one","two","three","four"];
        explanation.textContent =
          `${words[n]} equivalent spin-1/2 ${n===1?"nucleus creates":"nuclei create"} ${n+1} first-order EPR lines. Their spacing is a = A/h and their relative intensities are ${intensities.join(":")}.`;
      }
    }

    nInput.addEventListener("input", update);
    aInput.addEventListener("input", update);
    document.querySelectorAll("[data-hf-n]").forEach((button) => {
      button.addEventListener("click", () => {
        nInput.value = button.dataset.hfN;
        update();
      });
    });
    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHyperfineDemo);
  } else {
    initHyperfineDemo();
  }
})();
