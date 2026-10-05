(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function initOrbitalDemo() {
    const delta = $("orbital-delta");
    const coupling = $("orbital-coupling");
    if (!delta || !coupling) return;

    const deltaOut = $("orbital-delta-out");
    const couplingOut = $("orbital-coupling-out");
    const splittingOut = $("orbital-splitting");
    const minGapOut = $("orbital-min-gap");
    const weightOut = $("orbital-weight");
    const weightBar = $("orbital-character-bar");
    const explanation = $("orbital-explanation");
    const diabatic1 = $("diabatic-1");
    const diabatic2 = $("diabatic-2");
    const lower = $("adiabatic-minus");
    const upper = $("adiabatic-plus");
    const marker = $("orbital-marker");
    const markerMinus = $("orbital-marker-minus");
    const markerPlus = $("orbital-marker-plus");

    const x0 = 58, x1 = 528, y0 = 252, y1 = 30;
    const dMin = -4, dMax = 4, eMin = -2.6, eMax = 2.6;
    const xMap = (d) => x0 + (x1 - x0) * (d - dMin) / (dMax - dMin);
    const yMap = (e) => y0 - (y0 - y1) * (e - eMin) / (eMax - eMin);

    function curve(fn) {
      const pts = [];
      const n = 180;
      for (let i = 0; i <= n; i++) {
        const d = dMin + (dMax - dMin) * i / n;
        pts.push([xMap(d), yMap(fn(d))]);
      }
      return makePath(pts);
    }

    function update() {
      const d = parseFloat(delta.value);
      const t = parseFloat(coupling.value);
      const root = Math.sqrt((d * d) / 4 + t * t);
      const denom = Math.sqrt(d * d + 4 * t * t);
      const w1 = denom < 1e-12 ? 0.5 : 0.5 * (1 + d / denom);

      deltaOut.textContent = d.toFixed(2) + " eV";
      couplingOut.textContent = t.toFixed(2) + " eV";
      splittingOut.textContent = (2 * root).toFixed(2) + " eV";
      minGapOut.textContent = (2 * Math.abs(t)).toFixed(2) + " eV";
      weightOut.textContent = (100 * w1).toFixed(1) + "%";
      if (weightBar) weightBar.style.width = (100 * w1).toFixed(1) + "%";

      if (explanation) {
        const mixing = denom < 1e-12 ? 1 : (2 * Math.abs(t)) / denom;
        if (Math.abs(t) < 1e-10) {
          explanation.textContent = "With t = 0 the two diabatic states do not talk to each other: they cross exactly at Δ = 0.";
        } else if (mixing > 0.8) {
          explanation.textContent = "Near the avoided crossing the two diabatic states are strongly mixed. Neither adiabatic state belongs cleanly to only one localized state.";
        } else if (mixing > 0.35) {
          explanation.textContent = "The states are partially mixed: coupling matters, but the energy offset still preserves noticeable localization.";
        } else {
          explanation.textContent = "Far from resonance, the energy offset dominates and the adiabatic states are mostly localized on one diabatic state.";
        }
      }

      diabatic1.setAttribute("d", curve((x) => -x / 2));
      diabatic2.setAttribute("d", curve((x) => +x / 2));
      lower.setAttribute("d", curve((x) => -Math.sqrt((x * x) / 4 + t * t)));
      upper.setAttribute("d", curve((x) => +Math.sqrt((x * x) / 4 + t * t)));

      const x = xMap(d);
      marker.setAttribute("x1", x);
      marker.setAttribute("x2", x);
      markerMinus.setAttribute("cx", x);
      markerMinus.setAttribute("cy", yMap(-root));
      markerPlus.setAttribute("cx", x);
      markerPlus.setAttribute("cy", yMap(+root));
    }

    delta.addEventListener("input", update);
    coupling.addEventListener("input", update);

    document.querySelectorAll("[data-orbital-delta]").forEach((button) => {
      button.addEventListener("click", () => {
        delta.value = button.dataset.orbitalDelta;
        coupling.value = button.dataset.orbitalCoupling;
        update();
      });
    });

    update();
  }

  function initLarmorDemo() {
    const b = $("larmor-b");
    const g = $("larmor-g");
    const toggle = $("larmor-toggle");
    if (!b || !g) return;

    const bOut = $("larmor-b-out");
    const gOut = $("larmor-g-out");
    const fOut = $("larmor-frequency");
    const periodOut = $("larmor-period");
    const explanation = $("larmor-explanation");
    const vector = $("spin-vector");
    const projection = $("spin-projection");
    const tip = $("spin-tip");
    const arrow = $("spin-arrowhead");

    const origin = {x:260, y:230};
    const center = {x:260, y:92};
    const rx = 82, ry = 24;
    let visualRate = 1.5;
    let theta = 0;
    let last = null;
    let running = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function updatePhysics() {
      const bMt = parseFloat(b.value);
      const gVal = parseFloat(g.value);
      const freqMHz = 13.99624555 * gVal * bMt;
      const periodNs = 1000 / freqMHz;
      bOut.textContent = bMt.toFixed(2) + " mT";
      gOut.textContent = gVal.toFixed(4);
      fOut.textContent = freqMHz.toFixed(2) + " MHz";
      periodOut.textContent = periodNs.toFixed(2) + " ns";

      if (explanation) {
        if (bMt <= 0.075) {
          explanation.textContent = "This is an Earth-strength field scale: the electron Larmor frequency is already in the MHz range.";
        } else if (bMt < 2) {
          explanation.textContent = "At millitesla fields the electron precession frequency scales linearly with B₀ and remains tens of MHz.";
        } else {
          explanation.textContent = "Increasing B₀ increases the Zeeman splitting and therefore the Larmor frequency linearly.";
        }
      }

      visualRate = 1.1 + 0.55 * Math.log10(1 + freqMHz);
    }

    function draw() {
      const x = center.x + rx * Math.cos(theta);
      const y = center.y + ry * Math.sin(theta);
      projection.setAttribute("x1", center.x);
      projection.setAttribute("y1", center.y);
      projection.setAttribute("x2", x.toFixed(2));
      projection.setAttribute("y2", y.toFixed(2));
      tip.setAttribute("cx", x.toFixed(2));
      tip.setAttribute("cy", y.toFixed(2));
      vector.setAttribute("x2", x.toFixed(2));
      vector.setAttribute("y2", y.toFixed(2));

      const dx = x - origin.x, dy = y - origin.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const ux = dx / len, uy = dy / len;
      const px = -uy, py = ux;
      const baseX = x - ux * 16, baseY = y - uy * 16;
      const p1x = baseX + px * 6, p1y = baseY + py * 6;
      const p2x = baseX - px * 6, p2y = baseY - py * 6;
      arrow.setAttribute("d",
        "M" + x.toFixed(2) + " " + y.toFixed(2) +
        " L" + p1x.toFixed(2) + " " + p1y.toFixed(2) +
        " L" + p2x.toFixed(2) + " " + p2y.toFixed(2) + " Z");
    }

    function animate(now) {
      if (last === null) last = now;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (running) {
        theta += visualRate * dt;
        draw();
      }
      requestAnimationFrame(animate);
    }

    b.addEventListener("input", updatePhysics);
    g.addEventListener("input", updatePhysics);

    document.querySelectorAll("[data-larmor-b]").forEach((button) => {
      button.addEventListener("click", () => {
        b.value = button.dataset.larmorB;
        updatePhysics();
      });
    });

    if (toggle) {
      toggle.textContent = running ? "Pause" : "Play";
      toggle.addEventListener("click", () => {
        running = !running;
        toggle.textContent = running ? "Pause" : "Play";
      });
    }

    updatePhysics();
    draw();
    requestAnimationFrame(animate);
  }

  function initSTDemo() {
    const coupling = $("st-coupling");
    const detuning = $("st-detuning");
    if (!coupling || !detuning) return;

    const couplingOut = $("st-coupling-out");
    const detuningOut = $("st-detuning-out");
    const frequencyOut = $("st-frequency");
    const amplitudeOut = $("st-amplitude");
    const windowOut = $("st-window");
    const explanation = $("st-explanation");
    const tMid = $("st-time-mid");
    const tMaxLabel = $("st-time-max");
    const singlet = $("singlet-path");
    const triplet = $("triplet-path");
    const x0 = 58, x1 = 530, yTop = 35, yBottom = 248;

    function update() {
      const V = parseFloat(coupling.value);
      const D = parseFloat(detuning.value);
      const omega = Math.sqrt(D * D + 4 * V * V);
      const amp = omega < 1e-12 ? 0 : (4 * V * V) / (omega * omega);
      const tMax = clamp(4 / Math.max(omega, 0.05), 0.25, 8.0);

      couplingOut.textContent = V.toFixed(2) + " MHz";
      detuningOut.textContent = D.toFixed(2) + " MHz";
      frequencyOut.textContent = omega.toFixed(2) + " MHz";
      amplitudeOut.textContent = (100 * amp).toFixed(1) + "%";
      windowOut.textContent = tMax.toFixed(2) + " μs";

      if (explanation) {
        if (D < 0.25 * Math.max(V, 0.1)) {
          explanation.textContent = "The two levels are nearly resonant, so the model permits almost complete singlet–triplet transfer.";
        } else if (amp > 0.65) {
          explanation.textContent = "Coupling is still strong compared with detuning, so large-amplitude singlet–triplet oscillations remain possible.";
        } else if (amp > 0.2) {
          explanation.textContent = "Detuning is suppressing the transfer: oscillations remain, but the triplet population cannot approach unity.";
        } else {
          explanation.textContent = "The states are strongly off-resonant. The coupling produces only a small triplet admixture.";
        }
      }

      tMid.textContent = (tMax / 2).toFixed(2);
      tMaxLabel.textContent = tMax.toFixed(2);

      const sPts = [], tPts = [];
      const n = 360;
      for (let i = 0; i <= n; i++) {
        const time = tMax * i / n;
        const pT = amp * Math.pow(Math.sin(Math.PI * omega * time), 2);
        const pS = 1 - pT;
        const x = x0 + (x1 - x0) * i / n;
        sPts.push([x, yBottom - (yBottom - yTop) * pS]);
        tPts.push([x, yBottom - (yBottom - yTop) * pT]);
      }

      singlet.setAttribute("d", makePath(sPts));
      triplet.setAttribute("d", makePath(tPts));
    }

    coupling.addEventListener("input", update);
    detuning.addEventListener("input", update);

    document.querySelectorAll("[data-st-v]").forEach((button) => {
      button.addEventListener("click", () => {
        coupling.value = button.dataset.stV;
        detuning.value = button.dataset.stDelta;
        update();
      });
    });

    update();
  }

  function init() {
    initOrbitalDemo();
    initLarmorDemo();
    initSTDemo();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
