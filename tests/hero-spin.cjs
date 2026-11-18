"use strict";
const fs = require("node:fs");
const vm = require("node:vm");
const assert = require("node:assert/strict");

const script = fs.readFileSync("assets/js/hero-spin.js", "utf8");

function makeElement() {
  const events = new Map();
  return {
    attributes: {}, style: {}, textContent: "",
    setAttribute(name, value) { this.attributes[name] = String(value); },
    addEventListener(name, callback) { events.set(name, callback); },
    emit(name) {
      const callback = events.get(name);
      assert(callback, `No registered ${name} listener`);
      callback();
    }
  };
}

function simulate(reducedMotion) {
  const plot = makeElement();
  const marker = makeElement();
  const left = makeElement();
  const right = makeElement();
  const button = makeElement();
  const nodes = new Map([
    [".hero-signal-curve", plot],
    [".hero-signal-marker", marker],
    [".hero-spin-rotor--left", left],
    [".hero-spin-rotor--right", right],
    [".hero-motion-toggle", button]
  ]);
  const classes = new Map();
  const root = {
    querySelector: (selector) => nodes.get(selector),
    classList: { toggle(name, value) { classes.set(name, value); } }
  };
  const documentEvents = new Map();
  const doc = {
    readyState: "complete", hidden: false,
    querySelector: (selector) => selector === "[data-hero-animation]" ? root : null,
    addEventListener: (name, callback) => documentEvents.set(name, callback)
  };
  let id = 0;
  const frames = new Map();
  const preferenceHandlers = new Map();
  const win = {
    matchMedia: () => ({
      matches: reducedMotion,
      addEventListener: (event, callback) => preferenceHandlers.set(event, callback)
    }),
    requestAnimationFrame: (callback) => {
      const next = ++id;
      frames.set(next, callback);
      return next;
    },
    cancelAnimationFrame: (value) => frames.delete(value)
  };
  vm.runInNewContext(script, { window: win, document: doc, Math, console },
    { filename: "hero-spin.js", timeout: 1000 });
  function nextFrame(time) {
    const first = frames.entries().next().value;
    assert(first, "An animation frame should be queued");
    frames.delete(first[0]);
    first[1](time);
  }
  return { plot, marker, left, right, button, classes, doc, documentEvents,
    preferenceHandlers, frames, nextFrame };
}

const normal = simulate(false);
assert(normal.plot.attributes.d.startsWith("M10.00 12.00"), "Waveform must start at singlet population one");
assert(!/NaN|Infinity/.test(normal.plot.attributes.d), "Waveform contains invalid coordinates");
assert.equal(normal.plot.attributes.d.match(/ L/g).length, 300, "Wrong sample count");
assert.equal(normal.frames.size, 1, "Autoplay must schedule exactly one frame");
assert.equal(normal.button.textContent, "Pause");
normal.nextFrame(1000);
normal.nextFrame(1020);
const xAfter = Number(normal.marker.attributes.cx);
assert(xAfter > 10 && xAfter < 302, "Singlet marker should move smoothly");
assert(normal.left.style.transform.includes("rotate("), "Spin arrow needs to animate");

normal.button.emit("click");
assert.equal(normal.button.textContent, "Play");
assert.equal(normal.frames.size, 0, "Pausing must cancel scheduled frames");
assert.equal(normal.classes.get("is-paused"), true);
normal.button.emit("click");
assert.equal(normal.button.textContent, "Pause");
assert.equal(normal.frames.size, 1, "Resuming must schedule one frame");

normal.doc.hidden = true;
normal.documentEvents.get("visibilitychange")();
assert.equal(normal.frames.size, 0, "Hidden pages must stop rendering");
normal.doc.hidden = false;
normal.documentEvents.get("visibilitychange")();
assert.equal(normal.frames.size, 1, "Visible pages may resume");

const reduced = simulate(true);
assert.equal(reduced.button.textContent, "Play", "Reduced motion must not autoplay");
assert.equal(reduced.frames.size, 0, "Reduced motion should have no scheduled frames");
reduced.button.emit("click");
assert.equal(reduced.frames.size, 1, "Explicit playback should remain possible");
reduced.preferenceHandlers.get("change")({ matches: true });
assert.equal(reduced.frames.size, 0, "New reduced-motion preference must stop playback");

console.log("PASS: analytic spin-mixing waveform, pause/play, page visibility and reduced motion");
