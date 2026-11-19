"use strict";
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");

const read = (file) => fs.readFileSync(file, "utf8");
const source = read("_includes/icon.html");
const names = [...source.matchAll(/{% when '([^']+)' %}/g)].map(match => match[1]);
assert(names.length >= 25, "Expected reusable icons for site and lecture modules");
assert.equal(new Set(names).size, names.length, "Duplicate icon cases");
assert(source.includes('aria-hidden="true"'), "Decorative icons must be hidden from assistive technology");
assert(source.includes('focusable="false"'), "SVG icons must not enter tab order");

const route = read("_data/lecture_route.yml");
const modules = [...route.matchAll(/^  url: (\/lecture\/[^\s]+\/)$/gm)].map(match => match[1]);
const icons = [...route.matchAll(/^  icon: "([^"]+)"$/gm)].map(match => match[1]);
assert.equal(modules.length, 14);
assert.equal(icons.length, modules.length);
for (const name of icons) assert(names.includes(name), `Undefined module icon: ${name}`);

const navigation = read("_data/navigation.yml");
const entries = [...navigation.matchAll(/^- title: ([^\n]+)/gm)].map(match => match[1]);
const navIcons = [...navigation.matchAll(/^  icon: ([a-z-]+)/gm)].map(match => match[1]);
assert.equal(entries.length, 5, "Primary navigation should have five clear destinations");
assert.equal(navIcons.length, entries.length, "Every destination needs a consistent icon");
for (const name of navIcons) assert(names.includes(name), `Undefined navigation icon: ${name}`);

const head = read("_includes/_head.html");
assert(head.includes("assets/css/iconic.css"), "Iconic design layer must be loaded");
assert(!head.includes("Source+Serif"), "The site must use one text family");
assert(!head.includes("Material+Icons"), "The site should not load a second icon family");
const iconic = read("assets/css/iconic.css");
assert(iconic.includes(".site-icon"), "Shared SVG icon style is required");
assert(iconic.includes(".library-icon-grid"), "Module catalogue must use the shared grid system");
assert(iconic.includes("@media (max-width: 650px)"), "Mobile layout rules are required");
assert(iconic.includes("prefers-reduced-motion"), "Reduced-motion preferences must be supported");

assert(fs.existsSync("_site/index.html"), "Run this check after building Jekyll");
const home = read("_site/index.html");
const library = read("_site/lecture/index.html");
const countSvg = (html) => (html.match(/class="site-icon/g) || []).length;
assert(countSvg(home) >= 15, "Homepage should render navigation and research icons");
assert(countSvg(library) >= 19, "Catalogue should render 13 module icons and navigation");
assert.equal((library.match(/class="library-card library-icon-card"/g) || []).length,modules.length,
  "The rendered catalogue must contain one self-contained link per module");
assert(!library.includes("{% include icon.html"), "Unprocessed Liquid icons in built pages");
assert(home.includes('class="hero-signature hero-signature--animated"'), "Animated signature illustration must render");
assert(home.includes('class="hero-motion-toggle"'), "Animation must expose a pause control");
assert(home.includes('class="hero-signal-curve"'), "Spin mixing plot is missing");
assert(home.includes("assets/js/hero-spin.js"), "Animation script must be loaded");
assert(!home.includes('class="radical-pair-panel"'), "Legacy hero should not render");
assert(home.includes("assets/css/iconic.css"), "Final design styles missing from homepage");
assert(home.includes("assets/css/site-coherence.css"), "Sitewide design layer must be loaded");
assert(!home.includes("assets/css/main_pretty.css"),"Legacy theme must not leak into published pages");
assert(!home.includes("assets/css/lecture-refresh.css"),"Lecture refresh must not load as a sitewide stylesheet");

for (const mod of modules) {
  const html = read(path.join("_site", mod.slice(1), "index.html"));
  assert(html.includes('class="module-intro"'), `No main scientific introduction on ${mod}`);
  assert(/<header class="module-intro">[\s\S]*?<h1>/.test(html),
    `The scientific driving question must be the only chapter h1: ${mod}`);
  assert(!html.includes('class="page-hero"'),
    `Lecture should not duplicate the title in a second hero: ${mod}`);
  assert(html.includes('class="lecture-knowledge-check"'), `Checkpoint missing on ${mod}`);
  assert(html.includes("lecture-page"), `Lecture CSS scope missing on ${mod}`);
  assert(html.includes('<details class="lecture-connections"'), `Expandable prerequisite panel missing on ${mod}`);
}
console.log("PASS: unified icon system, 5 primary links and "+modules.length+" lecture cards");
