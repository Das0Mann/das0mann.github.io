"use strict";
const fs = require("node:fs");
const assert = require("node:assert/strict");
const model = require("../assets/js/lecture-cidnp-model.js");

function close(a,b,tol=1e-9) {
  assert(Math.abs(a-b) <= tol, String(a) + " != " + String(b));
}
function numericIntegral(delta,J,k) {
  // Independent midpoint-rule numerical check against the analytic formula.
  const end=15 / k, n=24000, dt=end/n;
  let total=0;
  for(let i=0;i<n;i++) {
    const t=dt*(i+0.5);
    total += k*Math.exp(-k*t)*model.singletPopulation(t,delta,J)*dt;
  }
  return total;
}

// Kaptein factors: precursor, product, g-ordering and hyperfine ordering.
const plus = model.kaptein("triplet","recombination","positive","positive");
assert.equal(plus.sign,1);
assert.equal(model.kaptein("triplet","recombination","positive","negative").sign,-1);
assert.equal(model.kaptein("singlet","recombination","positive","positive").sign,-1);
assert.equal(model.kaptein("triplet","escape","positive","positive").sign,-1);
assert.equal(model.kaptein("triplet","recombination","negative","positive").sign,-1);
assert.throws(()=>model.kaptein("invalid","escape","positive","positive"), TypeError);

// S/T0 Hamiltonian frequency and coherent oscillation.
close(model.transitionFrequency(3,4),Math.sqrt(73));
close(model.singletPopulation(0,2,0),0);
close(model.singletPopulation(0.25,2,0),1,1e-12);
close(model.singletPopulation(0.25,0,0),0);
assert(model.singletPopulation(0.1,2,8) <= 4/(256+4)+1e-12);
assert(model.singletPopulation(0.1,2,8)>=0);

// Limiting invariants: zero hyperfine, zero field and no time for mixing.
const zeroA=model.evaluate(5,0,14,5);
close(zeroA.difference,0);
assert.equal(zeroA.q,0);
const zeroField=model.evaluate(0,7,15,5);
close(zeroField.difference,0);
close(zeroField.q,0);
const noSignal=model.evaluate(0,0,0,3);
assert.equal(noSignal.q,null);
const standard=model.evaluate(4,6,20,5);
assert(standard.difference>0,"Expected signed sorting for positive Δg A under the declared convention");
assert(standard.q>0 && standard.q<=1);
close(standard.q,standard.difference/standard.total);
close(model.evaluate(4,-6,20,5).difference,-standard.difference,1e-12);
const stronger=model.evaluate(4,6,95,5);
assert(stronger.total<standard.total,"Exchange detuning suppresses ST0 mixing weight");
assert(model.evaluate(4,6,20,25).total<standard.total,
  "Shortening lifetime suppresses the integrated triplet-to-singlet signal");

// Frequency field conversion (delta = μ_B Δg B /h + m A), MHz/T.
const delta=model.deltaFrequency(1,0,0.0008,+.5);
close(delta,13996.24555*.0008,1e-10);
for(const p of [
  {delta:0.8,J:0,k:2.5},
  {delta:1.7,J:0.9,k:3.5},
  {delta:6.3,J:1.2,k:8.0},
  {delta:-4.0,J:0.4,k:4.0}
]) {
  close(model.weightedSinglet(p.delta,p.J,p.k),
    numericIntegral(p.delta,p.J,p.k),2e-5);
}

// Important scientific exclusions: avoid treating this as a 2J crossing model.
const lesson=fs.readFileSync("lecture/photo-cidnp/index.md","utf8");
assert(lesson.includes("cannot reproduce the \\(2J\\) level-crossing peak"));
assert(lesson.includes("not a complete fit"));
assert(lesson.includes("Kaptein"));
assert(lesson.includes("Spin sorting"));
for(const url of ["10.1002/anie.202510116","10.1021/jacs.5c22947","10.1021/acs.jctc.4c00361"])
  assert(lesson.includes(url), "Missing user publication "+url);
const widget=fs.readFileSync("assets/js/lecture-cidnp.js","utf8");
assert(!/\b(eval|innerHTML|outerHTML|document\.write)\b/.test(widget),
  "CIDNP widgets must use safe text/attribute updating");
assert(widget.includes("cidnp-nmr-path") && widget.includes("cidnp-time-plus") &&
  widget.includes("cidnp-field-encounter"), "Missing connected plotting widgets");

// Exercise the actual browser widget, not only its analytical model. The
// mock uses the same global model object and the documented DOM element IDs.
{
  const vm = require("node:vm");
  const nodes = new Map();
  const defaults = {
    "cidnp-precursor":"triplet", "cidnp-exit":"recombination",
    "cidnp-dg":"positive", "cidnp-a":"positive",
    "cidnp-field":"4", "cidnp-hfi":"6",
    "cidnp-exchange":"20", "cidnp-lifetime":"5"
  };
  function node(id) {
    if (!nodes.has(id)) {
      const events = {};
      const attributes = {};
      nodes.set(id, {
        value: defaults[id] || "", textContent:"", events, attributes,
        setAttribute(name,val) {
          assert(!/NaN|Infinity/.test(String(val)), "invalid plot coordinate "+id);
          attributes[name]=String(val);
        },
        addEventListener(name,fn) { events[name]=fn; },
        querySelectorAll() { return []; },
        classList: { toggle(){} }
      });
    }
    return nodes.get(id);
  }
  const document = {
    readyState: "complete",
    getElementById: node
  };
  const source = fs.readFileSync("assets/js/lecture-cidnp.js","utf8");
  vm.runInNewContext(source, {
    window: { CIDNPModel:model }, document, console, Math, Number
  }, {timeout:1000});

  assert.equal(node("cidnp-sign").textContent, "+ · enhanced absorption");
  assert(node("cidnp-field-y-plus").textContent.startsWith("+"), "missing numeric positive axis");
  assert(node("cidnp-field-y-minus").textContent.startsWith("−"), "missing numeric negative axis");
  assert(node("cidnp-field-scale").textContent.includes("dimensionless"), "autoscale not disclosed");
  assert(node("cidnp-field-selected").attributes.d.length>1000,"field plot path missing");
  assert(node("cidnp-time-plus").attributes.d.length>1000,"time plot path missing");
  const first = node("cidnp-field-marker").attributes.x1;
  node("cidnp-field").value="9";
  node("cidnp-field").events.input();
  assert.notEqual(node("cidnp-field-marker").attributes.x1,first,
    "current-field marker must move with magnetic field input");
  node("cidnp-a").value="negative";
  node("cidnp-a").events.change();
  assert(node("cidnp-sign").textContent.includes("emission"),
    "sign widget must update its spectrum and explanation");
  assert(node("cidnp-nmr-path").attributes.d.length>100,
    "Kaptein plot should be initialized");
}

if(process.argv.includes("--rendered")) {
  const html=fs.readFileSync("_site/lecture/photo-cidnp/index.html","utf8");
  for(const id of ["cidnp-sign-lab","cidnp-spin-sort-lab","cidnp-nmr-path",
    "cidnp-field-selected","cidnp-time-plus","cidnp-time-minus"])
    assert(html.includes('id="'+id+'"'),"Missing rendered widget target "+id);
  assert(html.includes("lecture-cidnp-model.js"));
  assert(html.includes("lecture-cidnp.js"));
  assert(html.includes("assets/css/lecture-cidnp.css"));
  assert(html.includes("lecture-knowledge-check"));
  assert(html.includes('id="cidnp-field-y-plus"'), "missing labelled field axis");
  assert(html.includes('id="cidnp-field-scale"'), "missing autoscale disclosure");
  assert(html.includes('<details class="cidnp-plot-panel" open>'), "accessible spin-evolution plot missing");
  assert(html.includes('<details class="cidnp-plot-panel">'), "collapsible field plot missing");
}
console.log("PASS: Kaptein signs, coherent spin dynamics, lifetime integrals, signed imbalance and rendered widgets");
