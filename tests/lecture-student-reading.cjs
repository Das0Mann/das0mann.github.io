"use strict";
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const read=p=>fs.readFileSync(p,"utf8");
const routes=[...read("_data/lecture_route.yml").matchAll(/^  url: (\/lecture\/[^\s]+\/)$/gm)].map(m=>m[1]);
assert.equal(routes.length,14);

const layout=read("_layouts/page.html");
assert(layout.includes("show_page_hero = false"),"A lecture must not repeat its scientific title in a page banner");
assert(layout.includes("page.url contains '/lecture/'"),"Lecture-only hero behavior must be explicit");

for(const url of routes) {
 const src=read(path.join("lecture",url.slice("/lecture/".length),"index.md"));
 assert(src.includes('<header class="module-intro">'),"Missing introduction "+url);
 assert(src.includes('<h1>{{ site.data.lecture_story[page.url].question }}</h1>'),
   "The driving question must be a real page heading, not a second h2: "+url);
 assert(src.includes('· {{ page.title }}'),"Chapter identity must stay readable: "+url);
 const intro=src.indexOf('<header class="module-intro">');
 const nav=src.indexOf("{% include lecture-library-nav.html %}");
 const story=src.indexOf("{% include lecture-story-opening.html %}");
 const goals=src.indexOf('class="module-learning');
 assert(intro>=0 && intro<story && story<nav && nav<goals,
   "A student must encounter a physical question before administrative navigation: "+url);
 const related=src.indexOf("{% include lecture-connections.html %}");
 const conclusion=src.indexOf("{% include lecture-story-handoff.html %}");
 assert(related>conclusion,
   "Optional related modules belong after the scientific conclusion: "+url);
 assert(src.split("{% include lecture-library-nav.html %}").length===3,
   "Preserve exactly one chapter navigation after intro and one at end: "+url);
}

const el=read("lecture/electronic-structure/index.md");
assert(el.includes("lesson-running-case"),"First chapter must have a concrete motivating example");
assert(el.includes("flavin–tryptophan radical pair"),"Running flavin–tryptophan case missing");
assert(el.includes("In atomic units") || el.includes("atomic units"),"Electronic Hamiltonian units missing");
assert(el.includes("binom{4}{2}=6"),"Missing CAS(2,2) worked determinant example");
assert(el.includes("binom{2}{1}"),"Missing fixed-spin-projection worked determinant example");
assert(el.includes("2|t|"),"Avoided crossing minimum-gap interpretation missing");
assert(el.includes("lesson-parameter-result"),"Effective Hamiltonian must be taught before formal downfolding");
assert(el.includes("lesson-derivation"),"Advanced downfolding must remain available but optional");
assert(el.includes("\\mathbf D_{12}"),"Interelectron dipolar term must have a distinct label");
assert(el.includes("\\mathbf D_{\\mathrm{ZFS}}"),"Higher-spin ZFS must be distinguished");
assert((el.match(/class="lesson-equation-meaning"/g)||[]).length>=14,
  "Advanced equations should each have a specific physical interpretation");
assert((el.match(/class="lesson-glossary"/g)||[]).length>=3,
  "Large reference glossaries should not interrupt the main argument");
assert.equal((el.match(/class="lecture-section story-deep-dive"/g)||[]).length,5,
  "Keep each full theoretical derivation accessible without overwhelming beginners");

const spin=read("lecture/spin-hamiltonians/index.md");
assert(spin.includes("The exponent of \\(U(t)\\) must be dimensionless"),
  "Energy/frequency conversions require an explanation of their purpose");
const et=read("lecture/electron-transfer/index.md");
assert(et.includes("the arrow is not a kinetic-rate equation"),
  "Avoid presenting donor-acceptor notation as a quantitative rate law");
const molspin=read("lecture/molspin-notebooks/index.md");
assert(molspin.includes("Read the input as a physical sequence"),
  "Software examples must begin with physical modelling intent");
assert(!molspin.includes("\\texttt{Interaction}_q"),
  "Remove pseudo-equations whose meaning is clearer in prose");

const css=read("assets/css/lecture-system.css");
assert(css.includes("STUDENT READING SYSTEM v2"),"Readable unified typography tokens missing");
assert(css.includes("--lesson-body: 1rem"),"Establish an explicit base reading size");
assert(css.includes("--lesson-small: .89rem"),"Do not create arbitrary note font sizes");
assert(css.includes("--lesson-h1:"),"Establish a single hierarchy for scientific question headings");
assert(css.includes("mjx-container[display"),"MathJax formula size must be coordinated with body text");
assert(css.includes(".lesson-equation-meaning"),"Equation interpretations need consistent typography");
const fonts=[...css.matchAll(/font-family:\s*([^;}\n]+)/g)].map(m=>m[1].trim());
for(const font of fonts)
 assert(font.startsWith("var(--course-font)") || font.startsWith("ui-monospace"),
   "Unexpected competing text font stack: "+font);
assert(!css.includes("PT Sans Narrow"),"No legacy condensed lecture font");
assert(!css.includes("PT Serif"),"No legacy serif lecture font");
const toc=read("assets/js/lecture-toc.js");
assert(!toc.includes('lecture.querySelector(".lecture-connections")'),
  "Section navigator must appear near the chapter opening, not after footer references");

if(process.argv.includes("--rendered")){
 for(const url of routes){
   const html=read(path.join("_site",url.slice(1),"index.html"));
   assert.equal((html.match(/<h1\b/g)||[]).length,1,"A lecture must have exactly one h1: "+url);
   assert(!html.includes('class="page-hero"'),"Duplicate large page header: "+url);
   assert(/<header class="module-intro">[\s\S]*?<h1>/.test(html),
      "The scientific question must be the first true page heading: "+url);
   assert(html.indexOf('class="module-intro"')<html.indexOf('class="lecture-module-nav'),
      "Physical introduction should come before the route picker: "+url);
   assert(html.includes("assets/css/lecture-system.css"),"Missing course typography: "+url);
   assert(html.includes("lecture-knowledge-check"),"Knowledge check missing: "+url);
 }
 const compiled=read("_site/lecture/electronic-structure/index.html");
 assert(compiled.includes("lesson-parameter-result"),"Published physical Hamiltonian missing");
 assert(compiled.includes("lesson-derivation"),"Published optional derivation missing");
 assert(compiled.includes("lesson-worked-step"),"Published worked example missing");
 assert(!compiled.includes("page-hero-emblem"),"No second emblem on a lecture chapter");
}
console.log("PASS: 14 student-first chapter structures, single font stack, contextual mathematics and preserved interactive models");
