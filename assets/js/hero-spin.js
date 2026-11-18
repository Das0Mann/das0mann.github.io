(() => {
  "use strict";

  // A decorative, explicitly idealized two-level S/T mixing model.
  // H/h = [[0, v], [v, delta]] with v and delta in common frequency units.
  // P_S(t) = 1 - [4v²/(delta² + 4v²)] sin²(pi sqrt(delta² + 4v²) t).
  // This is not an experimental signal and does not model spin-selective kinetics.
  function init() {
    const card = document.querySelector("[data-hero-animation]");
    if (!card) return;

    const plot = card.querySelector(".hero-signal-curve");
    const marker = card.querySelector(".hero-signal-marker");
    const left = card.querySelector(".hero-spin-rotor--left");
    const right = card.querySelector(".hero-spin-rotor--right");
    const button = card.querySelector(".hero-motion-toggle");
    if (!plot || !marker || !left || !right || !button) return;

    const v = 0.70;
    const delta = 0.28;
    const omega = Math.sqrt(delta * delta + 4 * v * v);
    const amplitude = 4 * v * v / (omega * omega);
    const span = 3 / omega; // Three full singlet oscillations visible on the chart.
    const x0 = 10, x1 = 302, top = 12, range = 40;
    const probability = (t) =>
      1 - amplitude * Math.pow(Math.sin(Math.PI * omega * t), 2);
    const x = (t) => x0 + (x1 - x0) * t / span;
    const y = (t) => top + range * (1 - probability(t));

    let d = "";
    for (let i = 0; i <= 300; i++) {
      const t = span * i / 300;
      d += (i === 0 ? "M" : " L") + x(t).toFixed(2) + " " + y(t).toFixed(2);
    }
    plot.setAttribute("d", d);

    let elapsed = 0;
    let last = null;
    let frame = null;
    let visible = true;
    const motionPreference = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
    let playing = !motionPreference.matches;

    function draw() {
      const t = ((elapsed % span) + span) % span;
      marker.setAttribute("cx", x(t).toFixed(2));
      marker.setAttribute("cy", y(t).toFixed(2));
      // Rotating arrows are visual mnemonics of spin evolution, not classical spin trajectories.
      left.style.transform = "rotate(" + (elapsed * 43 % 360).toFixed(2) + "deg)";
      right.style.transform = "rotate(" + (-elapsed * 53 % 360).toFixed(2) + "deg)";
    }

    function tick(now) {
      frame = null;
      if (!playing || !visible || document.hidden) return;
      if (last !== null) elapsed += Math.min((now - last) / 1000, 0.06);
      last = now;
      draw();
      frame = window.requestAnimationFrame(tick);
    }

    function reconcile() {
      const active = playing && visible && !document.hidden;
      card.classList.toggle("is-paused", !active);
      button.textContent = playing ? "Pause" : "Play";
      button.setAttribute("aria-label", playing ? "Pause spin animation" : "Play spin animation");
      // Do not accumulate offscreen time or create duplicate animation loops.
      if (!active && frame !== null) {
        window.cancelAnimationFrame(frame);
        frame = null;
      }
      last = null;
      if (active && frame === null) frame = window.requestAnimationFrame(tick);
    }

    button.addEventListener("click", () => {
      playing = !playing;
      reconcile();
    });
    document.addEventListener("visibilitychange", reconcile);

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        visible = entries.some((entry) => entry.isIntersecting);
        reconcile();
      }, { threshold: 0.05 });
      observer.observe(card);
    }

    if (motionPreference.addEventListener) {
      motionPreference.addEventListener("change", (event) => {
        if (event.matches) {
          playing = false;
          reconcile();
        }
      });
    }

    draw();
    reconcile();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else init();
})();
