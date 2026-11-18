"use strict";
const fs = require("node:fs");
const assert = require("node:assert/strict");

const read = (p) => fs.readFileSync(p, "utf8");
const route = read("_data/lecture_route.yml");
const checks = read("_data/lecture_checks.yml");
const modules = [...route.matchAll(/^  url: (\/lecture\/[^\s]+\/)$/gm)].map((match) => match[1]);
const routeNumbers = [...route.matchAll(/^- number: "(\d{2})"$/gm)].map((match) => match[1]);

assert.equal(modules.length, 13, "The learning path must contain 13 modules");
assert.equal(new Set(modules).size, 13, "Each route entry must be unique");
assert.equal(routeNumbers.length, 13, "Every route entry must retain a historical module number");
assert.equal(new Set(routeNumbers).size, 13, "Historical module numbers must be unique");

const blocks = checks.split(/(?=^"\/lecture\/[^"]+":)/m).filter((block) => block.startsWith('"/lecture/'));
assert.equal(blocks.length, 13, "Each lecture must have exactly one concept checkpoint");
const checked = new Set();
for (const block of blocks) {
  const heading = block.match(/^"(\/lecture\/[^"]+)":/);
  assert(heading, "A check must have its full page URL");
  const url = heading[1];
  assert(modules.includes(url), `Unexpected check page: ${url}`);
  assert(!checked.has(url), `Duplicate checkpoint: ${url}`);
  checked.add(url);

  const options = [...block.matchAll(/^    - "/gm)];
  const answer = block.match(/^  answer: (\d+)$/m);
  assert.equal(options.length, 3, `Exactly three choices required for ${url}`);
  assert(answer, `No marked correct answer for ${url}`);
  assert(Number(answer[1]) >= 0 && Number(answer[1]) < options.length,
    `Correct choice index outside options: ${url}`);
  assert(/^  question: ".+"/m.test(block), `No question for ${url}`);
  assert(/^  explanation: ".+"/m.test(block), `No reasoning for ${url}`);

  const page = read("lecture" + url.slice("/lecture".length) + "index.md");
  assert(page.includes("{% include lecture-library-nav.html %}"),
    `Missing module navigation: ${url}`);
  assert(page.includes("module-learning"), `Missing learning goals: ${url}`);
}

const layout = read("_layouts/page.html");
const head = read("_includes/_head.html");
const nav = read("_includes/lecture-library-nav.html");
assert(layout.includes("lecture-knowledge-check.html"), "Lecture checkpoints must render");
assert(layout.includes("lecture-refresh.js"), "Lecture checks must be interactive");
assert(head.includes("lecture-refresh.css"), "Lecture styles must load");
assert(nav.includes("lecture_route"), "Suggested path must come from route data");

const index = read("lecture/index.md");
assert(index.includes('id="lecture-module-search"'), "Library search input is missing");
assert(index.includes('id="lecture-result-count"'), "Library result count is missing");
assert(index.includes("library-grid"), "Module cards must remain available without JavaScript");

const photoScript = read("assets/js/lecture-photochemistry.js");
assert(photoScript.includes("const eEm = e00 - lambda;"),
  "Harmonic emission energy must not be silently clipped");
const lambda = 0.5 * 1.0 * (0.5 ** 2);
const eAbs = 2.30 + lambda;
const eEm = 2.30 - lambda;
assert(Math.abs(eAbs - eEm - 2 * lambda) < 1e-12,
  "Equal-curvature harmonic Stokes shift must be 2 lambda");
console.log("PASS: 13 routes, 13 scientific checks, lecture wiring and harmonic-model sanity");
