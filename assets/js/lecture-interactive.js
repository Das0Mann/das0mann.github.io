(() => {
  "use strict";

  const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
  const $ = (id) => document.getElementById(id);

  function initOrbitalDemo() {
    const delta = $("orbital-delta");
    const coupling = $("orbital-coupling");
    if (!delta || !coupling) return;

    const deltaOut = $("orbital-delta-out");
    const couplingOut = $("orbital-coupling-out");
    const splittingOut = $("orbital-splitting");
    const weightOut = $("orbital-weight");

    const site1 = $("site1-line");
    const site2 = $("site2-line");
    const lower = $("bonding-line");
    const upper = $("antibonding-line");
    const site1Label = $("site1-label");
    const site2Label = $("site2-label");

    const yMap = (energy) => {
      const e = clamp(energy, -4.5, 4.5);
      return 135 - e * 24;
    };

    function update() {
      const d = parseFloat(delta.value);
      const t = parseFloat(coupling.value);
      const root = Math.sqrt((d * d) / 4 + t * t);
      const e1 = -d / 2;
      const e2 = d / 2;
      const eMinus = -root;
      const ePlus = root;
      const denom = Math.sqrt(d * d + 4 * t * t);
      const w1 = denom < 1e-12 ? 0.5 : 0.5 * (1 + d / denom);

      deltaOut.textContent = d.toFixed(2) + " eV";
      couplingOut.textContent = t.toFixed(2) + " eV";
      splittingOut.textContent = (2 * root).toFixed(2) + " eV";
      weightOut.textContent = (100 * w1).toFixed(1) + "%";

      const y1 = yMap(e1);
      const y2 = yMap(e2);
      const ym = yMap(eMinus);
      const yp = yMap(ePlus);

      [site1, site1Label].forEach((el) => {
        if (!el) return;
        if (el.tagName.toLowerCase() === "line") {
          el.setAttribute("y1", y1);
          el.setAttribute("y2", y1);
        } else {
          el.setAttribute("y", y1 + 20);
        }
      });

      [site2, site2Label].forEach((el) => {
        if (!el) return;
        if (el.tagName.toLowerCase() === "line") {
          el.setAttribute("y1", y2);
          el.setAttribute("y2", y2);
        } else {
          el.setAttribute("y", y2 - 10);
        }
      });

      [lower, upper].forEach((el, idx) => {
        const y = idx === 0 ? ym : yp;
        el.setAttribute("y1", y);
        el.setAttribute("y2", y);
      });

      const p1 = $("mix-path-1");
      const p2 = $("mix-path-2");
      const p3 = $("mix-path-3");
      const p4 = $("mix-path-4");
      if (p1) p1.setAttribute("d", `M165 ${y1} C240 ${y1} 275 ${ym} 340 ${ym}`);
      if (p2) p2.setAttribute("d", `M165 ${y2} C240 ${y2} 275 ${yp} 340 ${yp}`);
      if (p3) p3.setAttribute("d", `M165 ${y1} C245 ${y1} 275 ${yp} 340 ${yp}`);
      if (p4) p4.setAttribute("d", `M165 ${y2} C245 ${y2} 275 ${ym} 340 ${ym}`);

      const mix = denom < 1e-12 ? 1 : (2 * Math.abs(t)) / denom;
      [p3, p4].forEach((el) => {
        if (el) el.style.opacity = String(0.12 + 0.55 * mix);
      });
    }

    delta.addEventListener("input", update);
    coupling.addEventListener("input", update);
    update();
  }

  function initLarmorDemo() {
    const b = $("larmor-b");
    const g = $("larmor-g");
    if (!b || !g) return;

    const bOut = $("larmor-b-out");
    const gOut = $("larmor-g-out");
    const fOut = $("larmor-frequency");
    const periodOut = $("larmor-period");
    const vector = $("spin-vector");
    const projection = $("spin-projection");
    const tip = $("spin-tip");
    const arrow = $("spin-arrowhead");

    let freqMHz = 0;
    let visualRate = 1;
    let start = performance.now();

    function updatePhysics() {
      const bMt = parseFloat(b.value);
      const gVal = parseFloat(g.value);
      freqMHz = 13.99624555 * gVal * bMt;
      const periodNs = 1000 / freqMHz;

      bOut.textContent = bMt.toFixed(2) + " mT";
      gOut.textContent = gVal.toFixed(4);
      fOut.textContent = freqMHz.toFixed(2) + " MHz";
      periodOut.textContent = periodNs.toFixed(2) + " ns";

      visualRate = 0.65 + 0.55 * Math.log10(1 + freqMHz);
    }

    function animate(now) {
      if (!vector || !projection || !tip || !arrow) return;
      const t = (now - start) / 1000;
      const theta = t * visualRate;
      const cx = 205;
      const cyBase = 193;
      const rx = 95;
      const ry = 34;
      const x = cx + rx * Math.cos(theta);
      const y = 135 + ry * Math.sin(theta);

      projection.setAttribute("x2", x.toFixed(2));
      projection.setAttribute("y2", y.toFixed(2));
      tip.setAttribute("cx", x.toFixed(2));
      tip.setAttribute("cy", y.toFixed(2));
      vector.setAttribute("x2", x.toFixed(2));
      vector.setAttribute("y2", y.toFixed(2));

      const dx = x - cx;
      const dy = y - cyBase;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const ux = dx / len;
      const uy = dy / len;
      const px = -uy;
      const py = ux;
      const baseX = x - ux * 15;
      const baseY = y - uy * 15;
      const p1x = baseX + px * 6;
      const p1y = baseY + py * 6;
      const p2x = baseX - px * 6;
      const p2y = baseY - py * 6;
      arrow.setAttribute("d", `M${x.toFixed(2)} ${y.toFixed(2)} L${p1x.toFixed(2)} ${p1y.toFixed(2)} L${p2x.toFixed(2)} ${p2y.toFixed(2)} Z`);

      requestAnimationFrame(animate);
    }

    b.addEventListener("input", updatePhysics);
    g.addEventListener("input", updatePhysics);
    updatePhysics();

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      requestAnimationFrame(animate);
    }
  }

  function initSTDemo() {
    const v = $("st-coupling");
    const delta = $("st-detuning");
    if (!v || !delta) return;

    const vOut = $("st-coupling-out");
    const dOut = $("st-detuning-out");
    const fOut = $("st-frequency");
    const aOut = $("st-amplitude");
    const singlet = $("singlet-path");
    const triplet = $("triplet-path");

    const x0 = 50;
    const x1 = 535;
    const yTop = 30;
    const yBottom = 205;
    const tMax = 2.0;

    function buildPath(fn) {
      const n = 260;
      let d = "";
      for (let i = 0; i <= n; i++) {
        const time = tMax * i / n;
        const p = clamp(fn(time), 0, 1);
        const x = x0 + (x1 - x0) * i / n;
        const y = yBottom - (yBottom - yTop) * p;
        d += (i === 0 ? "M" : "L") + x.toFixed(2) + " " + y.toFixed(2) + " ";
      }
      return d.trim();
    }

    function update() {
      const V = parseFloat(v.value);
      const D = parseFloat(delta.value);
      const omega = Math.sqrt(D * D + 4 * V * V);
      const amp = omega === 0 ? 0 : (4 * V * V) / (omega * omega);

      vOut.textContent = V.toFixed(2) + " MHz";
      dOut.textContent = D.toFixed(2) + " MHz";
      fOut.textContent = omega.toFixed(2) + " MHz";
      aOut.textContent = (100 * amp).toFixed(1) + "%";

      const pT = (time) => amp * Math.pow(Math.sin(Math.PI * omega * time), 2);
      const pS = (time) => 1 - pT(time);

      singlet.setAttribute("d", buildPath(pS));
      triplet.setAttribute("d", buildPath(pT));
    }

    v.addEventListener("input", update);
    delta.addEventListener("input", update);
    update();
  }

  function init() {
    initOrbitalDemo();
    initLarmorDemo();
    initSTDemo();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
