"use strict";
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");

const route = fs.readFileSync("_data/lecture_route.yml","utf8");
const all = [...route.matchAll(/^  url: (\/lecture\/[^\s]+\/)$/gm)].map((m) => m[1]);
const modules = all.filter((url) => url !== "/lecture/photo-cidnp/");
assert.equal(modules.length,13,"Original thirteen lectures must remain present");
const checks = {
  "/lecture/spin-hamiltonians/": ["isotropic exchange term is the only source","measured energy gap need not equal"],
  "/lecture/spin-dynamics/": ["T_2\\leq2T_1","pure dephasing vanishes"],
  "/lecture/molecular-motion/": ["sign-changing correlations","full frequency-dependent spectral density"],
  "/lecture/open-systems/": ["nonnegative rates","complete"],
  "/lecture/excited-state-photochemistry/": ["singlet and triplet energies","triplet gaps from approximate TDDFT"],
  "/lecture/electron-transfer/": ["linear-response assumptions","Non-Gaussian distributions"],
  "/lecture/radical-pairs/": ["unnormalized density operator","trace decreases"],
  "/lecture/magnetic-resonance/": ["powder-spectrum intensity","rigid, effective spin"],
  "/lecture/coherent-control/": ["B_{1,\\mathrm{rot}}","B_{1,\\mathrm{lab}}/2"],
  "/lecture/quantum-biology/": ["model lipid bilayers","not establish that membrane anchoring"],
  "/lecture/computational-lab/": ["independent, identically distributed","effective sample size"]
};
for(const url of modules) {
  const sourceFile = path.join("lecture",url.slice("/lecture/".length),"index.md");
  const source = fs.readFileSync(sourceFile,"utf8");
  assert(source.includes('<details class="module-learning module-learning-disclosure">'),
    "Learning goals should be a compact disclosure: "+url);
  assert(source.includes('<summary class="module-learning-summary">'),
    "Learning goals should have a native accessible summary: "+url);
  const start=source.indexOf('<details class="module-learning module-learning-disclosure">');
  const end=source.indexOf('</details>',start);
  assert(start>=0 && end>start,"Unclosed learning goals: "+url);
  const block=source.slice(start,end);
  assert.equal((block.match(/<div><span>0[1-9]<\/span>/g)||[]).length,3,
    "Learning goals should preserve three pedagogical outcomes: "+url);
  assert(!source.includes("Examples from my work"),
    "Avoid inconsistent self-reference in lecture headings: "+url);
  assert(!source.includes("Where to read next"),
    "Use consistent Further reading headings: "+url);
  assert(!source.includes('class="lecture-index concept-index">P</span>'),
    "Unexplained letter P must not mark advanced sections: "+url);
  for(const statement of checks[url]||[]) assert(source.includes(statement),
    "Reviewed physical qualification missing ("+statement+"): "+url);
}
const css = fs.readFileSync("assets/css/lecture-audit.css","utf8");
const head = fs.readFileSync("_includes/_head.html","utf8");
assert(css.includes("module-learning-disclosure"),"Learning outcome disclosure styles missing");
assert(css.includes(".lecture-route-picker"),"Repeated footer picker should be suppressed");
assert(css.includes(".lecture-section.concept-extension"),"Advanced section typography missing");
assert(head.includes("assets/css/lecture-system.css"),"Audited styles not loaded");
assert(fs.readFileSync("lecture/photo-cidnp/index.md","utf8").includes("<section class=\"module-learning\""),
  "The existing Photo-CIDNP lesson should not be rewritten by this sweep");

if(process.argv.includes("--rendered")) {
  for(const url of modules) {
    const generated=fs.readFileSync(path.join("_site",url.slice(1),"index.html"),"utf8");
    assert(generated.includes('class="module-learning module-learning-disclosure"'),
      "Rendered disclosure missing: "+url);
    assert(generated.includes("assets/css/lecture-system.css"),
      "New reading style missing: "+url);
    assert(generated.includes("lecture-knowledge-check"),"Checkpoint lost: "+url);
  }
}
console.log("PASS: scientific qualification, headings and collapsible goals for all "+modules.length+" original lectures");
