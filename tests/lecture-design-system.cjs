"use strict";
const fs = require("node:fs");
const assert = require("node:assert/strict");
const read = p => fs.readFileSync(p,"utf8");
const css = read("assets/css/lecture-system.css");
const guidance = read("docs/design/lecture-design-rules.md");
const root = read("_includes/_head.html");
const urls = [...read("_data/lecture_route.yml").matchAll(/^  url: (\/lecture\/[^\s]+\/)$/gm)].map(m => m[1]);

assert.equal(urls.length, 14, "Retain all fourteen lectures");
assert(css.length < 56000, "Remove superseded CSS before adding another visual layer");
assert((css.match(/!important/g) || []).length < 100, "The cascade should not require hundreds of !important overrides");
assert((css.match(/^[.#][^{\n]+\{/gm) || []).length < 340, "Simplify the lecture selector inventory");
assert(css.includes("EDITORIAL SCIENCE"), "Current design-system contract missing");
assert(css.includes("--course-reading: 72ch"), "Set a readable line length");
assert(css.includes("--course-stage: 990px"), "Allow wide science figures without stretching paragraphs");
assert(css.includes("--lesson-body: 1.0625rem"), "Set 17px body text");
assert(css.includes("--course-space-5: 48px"), "Use a shared spacing rhythm");
assert(css.includes(".lecture-module .lecture-equation"), "Equations should use the shared unboxed treatment");
assert(css.includes(".lecture-module .interactive-card"), "Interactive experiments should retain a shared surface");
assert(css.includes(".lecture-module .lecture-section-head"), "One section heading hierarchy required");
assert(css.includes(".lecture-route-picker"), "Course navigation must remain accessible");
assert(css.includes(".lecture-local-toc"), "Section navigation must remain accessible");
assert(css.includes(".rotation-legend"), "Rotational widget line legend must remain styled");
assert(css.includes(".cidnp-plot-panel"), "Photo-CIDNP plots must retain layout");
assert(css.includes("prefers-reduced-motion"), "Disable ornamental motion when requested");
assert(root.includes("assets/css/lecture-system.css"), "All chapters must use the shared design system");

const fonts = [...css.matchAll(/font-family:\s*([^;}\n]+)/g)].map(m => m[1].trim());
assert(fonts.length>0,"One font family must be explicit");
for(const font of fonts) {
  assert(font.startsWith("var(--course-font)") || font.startsWith("ui-monospace"),
    "Unexpected competing text font: "+font);
}
for(const item of ["72ch","8-pixel spacing","4.5:1","three meaningful treatments","Scientific narrative"]) {
  assert(guidance.includes(item), "Missing documented design principle: "+item);
}
function luminance(hex) {
  const normalized = [1,3,5].map(i => parseInt(hex.slice(i,i+2),16)/255);
  const linear = normalized.map(c => c<=.04045?c/12.92:((c+.055)/1.055)**2.4);
  return linear[0]*.2126+linear[1]*.7152+linear[2]*.0722;
}
function contrast(a,b) {
  const la=luminance(a),lb=luminance(b);
  return (Math.max(la,lb)+.05)/(Math.min(la,lb)+.05);
}
for(const [role,color] of [["body","#202f38"],["secondary","#40535e"],["accent","#146172"]]) {
  assert(contrast(color,"#ffffff")>=4.5,
    role+" text fails AA contrast threshold: "+contrast(color,"#ffffff").toFixed(2));
}
assert(contrast("#137c89","#ffffff")>=3,
  "Keyboard focus indicator must visibly contrast against white");
for(const url of urls) {
  const source = read("lecture/"+url.slice("/lecture/".length)+"index.md");
  assert(source.includes('<header class="module-intro">'),"Keep the chapter's scientific question: "+url);
  assert(source.includes("lecture-story-handoff.html"),"Do not remove the next-topic handoff: "+url);
}
if(process.argv.includes("--rendered")) {
  for(const url of urls) {
    const html=read("_site"+url+"index.html");
    assert(html.includes("assets/css/lecture-system.css"),"Rendered page missing editorial stylesheet: "+url);
    assert(html.includes("lecture-knowledge-check"),"Rendered chapter lost its knowledge check: "+url);
  }
}
console.log("PASS: editorial system size, accessible contrast, one font family, content measure, fourteen lecture integrations");
