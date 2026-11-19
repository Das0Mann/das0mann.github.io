"use strict";
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const read = (file) => fs.readFileSync(file,"utf8");

const routes = [...read("_data/lecture_route.yml").matchAll(/^  url: (\/lecture\/[^\s]+\/)$/gm)]
  .map(match => match[1]);
assert.equal(routes.length,14,"All fourteen lectures must have a story");
const raw = read("_data/lecture_story.yml");
const data = new Map();
let current = null;
for(const line of raw.split("\n")) {
  if(!line.trim() || line.trim().startsWith("#")) continue;
  if(/^"\/lecture\/[^"]+\/":$/.test(line)) {
    current = JSON.parse(line.slice(0,-1));
    assert(!data.has(current),"Duplicate chapter story "+current);
    data.set(current,{});
  } else {
    const match = line.match(/^  (question|lead|bridge|takeaway|next_question|next_url): (".*")$/);
    assert(match && current, "Invalid story data line: "+line);
    data.get(current)[match[1]] = JSON.parse(match[2]);
  }
}
assert.deepEqual([...data.keys()],routes,"Story must preserve the exact suggested learning path order");
for(const [index,url] of routes.entries()){
  const story=data.get(url);
  for(const field of ["question","lead","bridge","takeaway","next_question"]) {
    assert.equal(typeof story[field],"string",url+" missing "+field);
    assert(story[field].length >= 48,url+" "+field+" should explain the physics, not just label it");
  }
  if(index+1<routes.length) assert.equal(story.next_url,routes[index+1],
    "Chapter must lead into the next suggested learning step");
  else assert.equal(story.next_url,undefined,"Last chapter must close the sequence without inventing a successor");
  const source=read(path.join("lecture",url.slice("/lecture/".length),"index.md"));
  assert(source.includes("site.data.lecture_story[page.url].question"),"Source must use the central question: "+url);
  assert(source.includes("site.data.lecture_story[page.url].lead"),"Source must use the narrative hook: "+url);
  assert(source.includes("{% include lecture-story-opening.html %}"),"Missing continuity from the previous chapter: "+url);
  assert(source.includes("{% include lecture-story-handoff.html %}"),"Missing end-of-chapter handoff: "+url);
  assert(source.indexOf("lecture-story-opening.html") < source.indexOf("module-learning"),
    "Motivation should appear before ancillary learning outcomes: "+url);
  assert(source.indexOf("lecture-story-handoff.html") > source.lastIndexOf("<section"),
    "The handoff belongs at the end of the chapter: "+url);
}
const electronic=read("lecture/electronic-structure/index.md");
const dives = [...electronic.matchAll(/<details class="lecture-section story-deep-dive"/g)];
assert.equal(dives.length,5,"Five technical branches should be optional rather than interrupting the main route");
for(const slug of ["hartree-fock","density-functional-theory","wavefunction-correlation",
  "multireference-methods","relativistic-response"]){
  assert(electronic.includes('id="technical-'+slug+'"'),"Missing technical derivation "+slug);
}
for(const [number,title] of [
  ["04","How quickly does a complete active space grow?"],
  ["05","Choose the method from the electronic structure"],
  ["06","State mixing and avoided crossings"],
  ["07","Magnetic observables care about where the unpaired spin lives"],
  ["08","Electronic structure supplies the spin Hamiltonian"],
  ["09","Applications in contemporary research"],
  ["10","Foundations and original literature"]
]){
  const heading=electronic.indexOf(title);
  assert(heading>=0,"Missing scientific section "+title);
  const preceding=electronic.slice(Math.max(0,heading-220),heading);
  assert(preceding.includes('lecture-index">'+number+'</span>'),
    "Unclear numbering immediately before "+title);
}
const head=read("_includes/_head.html");
assert(head.includes("page.url contains '/lecture/'"),"Lecture needs a separate stylesheet strategy");
assert(head.includes("lecture-system.css"),"Unified lecture CSS must be loaded");
assert(head.includes("site-coherence.css"),"All pages must share a coherent design");
assert(!head.includes("main_pretty.css"),"Legacy conflicting CSS must not load");
const css=read("assets/css/lecture-system.css");
assert(css.includes("--course-font: system-ui"),"One system font should be used for course text");
for(const target of [".lecture-chapter-context",".lecture-chapter-handoff",".story-deep-dive",
  ".lecture-equation",".physical-concept-panel",".interactive-card"]){
  assert(css.includes(target),"Missing common visual language: "+target);
}
assert(css.includes("prefers-reduced-motion"),"Reduced-motion styling required");

if(process.argv.includes("--rendered")){
  for(const [index,url] of routes.entries()) {
    const html=read(path.join("_site",url.slice(1),"index.html"));
    const story=data.get(url);
    const q=story.question.slice(0,32);
    assert(html.includes(q),"Published motivating question missing: "+url);
    assert(html.includes(story.bridge.slice(0,32)),"Connection with prior material missing: "+url);
    assert(html.includes(story.takeaway.slice(0,30)),"Closing learning result missing: "+url);
    assert(html.includes('class="lecture-chapter-handoff"'),"Missing visible forward narrative: "+url);
    assert(html.includes("assets/css/lecture-system.css"),"Consolidated CSS missing: "+url);
    for(const legacy of ["main_pretty.css","lecture-polish.css","lecture-audit.css","lecture-refresh.css","lecture-cidnp.css"])
      assert(!html.includes('href="https://quantum-chemistry.org/assets/css/'+legacy+'"'),
        "Lecture still loading a conflicting legacy stylesheet: "+url+" "+legacy);
    if(index+1<routes.length) assert(html.includes('href="https://quantum-chemistry.org'+routes[index+1]+'"'),
      "Last block must link to successor: "+url);
  }
  const first=read("_site/lecture/electronic-structure/index.html");
  assert.equal((first.match(/class="lecture-section story-deep-dive"/g)||[]).length,5,
    "Jekyll should render each optional advanced explanation as one native disclosure");
  assert(!first.includes("{% include lecture-story"),"Raw Liquid must not appear on published pages");
  const homepage=read("_site/index.html");
  assert(homepage.includes("site-coherence.css"),"Homepage animation styles must remain in the shared design");
}
console.log("PASS: fourteen chapter-specific scientific narratives, optional in-depth derivations and one lecture typography system");
