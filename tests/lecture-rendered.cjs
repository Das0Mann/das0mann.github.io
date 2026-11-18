"use strict";
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");

const source = fs.readFileSync("_data/lecture_route.yml", "utf8");
const urls = [...source.matchAll(/^  url: (\/lecture\/[^\s]+\/)$/gm)].map((m) => m[1]);
assert.equal(urls.length, 14);
const root = "_site";
assert(fs.existsSync(root), "Jekyll must build _site before this check");

for (let i = 0; i < urls.length; i++) {
  const file = path.join(root, urls[i].slice(1), "index.html");
  assert(fs.existsSync(file), `Jekyll did not generate ${file}`);
  const html = fs.readFileSync(file, "utf8");
  assert(html.includes("lecture-knowledge-check"), `Rendered checkpoint missing: ${urls[i]}`);
  assert(html.includes("lecture-check-choice"), `Rendered answer options missing: ${urls[i]}`);
  assert(html.includes(`Suggested path · step ${i + 1} of ${urls.length}`),
    `Incorrect route progress: ${urls[i]}`);
  assert(html.includes('aria-current="page"'), `Current module unmarked: ${urls[i]}`);
  assert(html.includes("lecture-route-picker"), `Module chooser missing: ${urls[i]}`);
  assert(!html.includes("{% include lecture-knowledge-check"), "Raw Liquid leaked into HTML");
}

const index = fs.readFileSync(path.join(root, "lecture", "index.html"), "utf8");
assert(index.includes('id="lecture-module-search"'), "Search field missing from published index");
const home = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert(home.includes("home-learning-links"), "Homepage lecture entry point missing");
assert(home.includes('id="main-content"'), "Homepage main landmark absent");
console.log("PASS: "+urls.length+" fully rendered modules, checkpoint contents, navigation and homepage");
