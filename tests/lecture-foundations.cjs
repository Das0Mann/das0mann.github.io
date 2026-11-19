"use strict";
const fs = require("node:fs");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const R = require("../assets/js/lecture-rotation-model.js");

function close(actual, expected, tol=1e-11) {
  assert(Number.isFinite(actual), "Expected finite numeric result");
  assert(Math.abs(actual-expected)<=tol,
    actual+" must equal "+expected+" within "+tol);
}

// Independent isotropic rotational-diffusion expectations: rank l has
// rate l(l+1)D_r. The rank-two time is tau2=1/(6D_r).
const tau2=0.6;
for(const t of [0,0.2,1,3,8]) {
  close(R.rankCorrelation(2,t,tau2),Math.exp(-t/tau2));
  close(R.rankCorrelation(1,t,tau2),Math.exp(-t/(3*tau2)));
  close(R.localRank2(t,tau2,1,0.1),R.rankCorrelation(2,t,tau2));
  close(R.localRank2(t,tau2,0,0.1),Math.exp(-t*(1/tau2+10)));
}
close(R.tauFast(0.6,0.15),0.12);
close(R.localRank2(1,0.6,0.75,0.15),
  Math.exp(-1/0.6)*(0.75+0.25*Math.exp(-1/0.15)));
close(R.localRank2(0,0.6,0.75,0.15),1);

// For a no-slip spherical Stokes-Einstein-Debye model,
// D_r/D_t=3/(4R^2) and tau2=1/(6D_r).
for(const radius of [0.5,1,2]) {
  const Dt=0.23;
  const Dr=3*Dt/(4*radius*radius);
  close(R.sphereTau2(Dt,radius),1/(6*Dr));
}
assert.throws(()=>R.rankCorrelation(2,1,0),RangeError);
assert.throws(()=>R.localRank2(1,0.6,1.2,0.1),RangeError);

// Independently verify the spectral-density integral and peak location used
// in Molecular Motion; f in MHz, tau in ns, omega in rad/ns.
function numericSpectralDensity(sigma,tau,omega) {
  const max=25*tau, n=25000, dt=max/n;
  let sum=0;
  for(let i=0;i<n;i++) {
    const t=(i+0.5)*dt;
    sum+=2*sigma*sigma*Math.exp(-t/tau)*Math.cos(omega*t)*dt;
  }
  return sum;
}
for(const [s,t,w] of [[5,0.6,0.5],[5,1.4,0.8],[2,3,1]]) {
  const analytic=2*s*s*t/(1+w*w*t*t);
  close(numericSpectralDensity(s,t,w),analytic,2e-4*analytic);
}
const omega=1.2;
const J=(t)=>2*t/(1+omega*omega*t*t);
assert(J(1/omega)>J(0.1/omega));
assert(J(1/omega)>J(5/omega));

// Run the browser widget in a minimal DOM and verify actual SVG updates.
const elements=new Map();
const defaults={"rotation-tau2":"0.6","rotation-order":"0.75","rotation-taue":"0.15"};
const buttons=["rigid","flexible","slow"].map(mode=>({
  dataset:{rotationMode:mode},handlers:{},addEventListener(event,cb){this.handlers[event]=cb;}
}));
function node(id) {
  if(!elements.has(id)) {
    const handlers={},attributes={};
    elements.set(id,{
      value:defaults[id]||"0",textContent:"",handlers,attributes,
      addEventListener(event,cb){handlers[event]=cb;},
      setAttribute(key,val){
        assert(!/NaN|Infinity/.test(String(val)),"nonfinite SVG coordinates");
        attributes[key]=String(val);
      },
      querySelectorAll(selector) {
        return selector==="[data-rotation-mode]"?buttons:[];
      }
    });
  }
  return elements.get(id);
}
const document={readyState:"complete",getElementById:node};
vm.runInNewContext(fs.readFileSync("assets/js/lecture-rotation.js","utf8"),
  {window:{LectureRotationModel:R},document,Math,Number},
  {filename:"lecture-rotation.js",timeout:1500});
close(Number(node("rotation-tau1-out").textContent.replace(" ns","")),1.8);
close(Number(node("rotation-fast-out").textContent.replace(" ns","")),0.12);
for(const id of ["rotation-rank1-path","rotation-global-path","rotation-local-path"]) {
  assert(node(id).attributes.d.length>1800,"missing plot "+id);
}
const before=node("rotation-local-path").attributes.d;
node("rotation-order").value="1";
node("rotation-order").handlers.input();
assert.notEqual(node("rotation-local-path").attributes.d,before,
  "changing order parameter should alter local rank-two curve");
assert.equal(node("rotation-global-path").attributes.d,
  node("rotation-local-path").attributes.d,
  "S²=1 requires local rank-two and global rank-two curves to coincide");
for(const button of buttons) {
  assert.equal(typeof button.handlers.click,"function","preset missing "+button.dataset.rotationMode);
  button.handlers.click();
}
close(Number(node("rotation-tau1-out").textContent.replace(" ns","")),9);
const files={
  "lecture/spin-hamiltonians/index.md":[
    "A_\\mathrm{eff}", "Only \\(\\mathbf T\\) is constrained to have zero trace",
    "tensor-effective", "A_x"],
  "lecture/molecular-motion/index.md":[
    "C_1(t)=e^{-2D_rt}", "C_2(t)=e^{-6D_rt}",
    "\\tau_2=\\frac{2R_H^2}{9D_t}",
    "rank-two global rotational time", "rotation-demo"],
  "lecture/open-systems/index.md":[
    "uncorrelated, real stationary classical noise channels",
    "J_\\alpha(\\omega_{ba})",
    "not a universal Redfield relaxation tensor",
    "a quantum master equation", "\\dot x(0)=0"]
};
for(const [file,parts] of Object.entries(files)) {
  const content=fs.readFileSync(file,"utf8");
  for(const part of parts)assert(content.includes(part),"Missing physics revision "+part+" in "+file);
}
if(process.argv.includes("--rendered")) {
  for(const slug of ["spin-hamiltonians","molecular-motion","open-systems"]) {
    const content=fs.readFileSync("_site/lecture/"+slug+"/index.html","utf8");
    assert(content.includes("lecture-knowledge-check"),"Missing knowledge check "+slug);
    assert(content.includes("assets/css/lecture-system.css"),"Missing shared style "+slug);
  }
  const html=fs.readFileSync("_site/lecture/molecular-motion/index.html","utf8");
  assert(html.includes('id="rotation-demo"'),"Missing rotation lab");
  assert(html.includes("lecture-rotation-model.js"),"Missing analytic model bundle");
  assert(html.includes("lecture-rotation.js"),"Missing controller bundle");
}
console.log("PASS: spin tensor conventions, rank-aware MD times, Stokes-Einstein-Debye sphere, spectral-density integration, full widget and rendered pages");
