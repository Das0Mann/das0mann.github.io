// Source-level sensitivity regression: run with node tests/lecture-sensitivity.cjs
// Uses only Node built-ins and executes each published widget's actual JS.
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const fixtures = [
  { script:"lecture-rabi.js", defaults:{"rabi-nu1":10,"rabi-detuning":0,"rabi-time":50}, checks:[
    ["rabi-nu1",0.2,50,"rabi-prob-out"],["rabi-detuning",-50,50,"rabi-prob-out"],["rabi-time",1,500,"rabi-prob-out"]
  ]},
  { script:"lecture-tensor.js", defaults:{"tensor-tx":20,"tensor-ty":50,"tensor-tz":100,"tensor-theta":45,"tensor-phi":45},checks:[
    ["tensor-tx",-100,150,"tensor-effective"],["tensor-ty",-100,150,"tensor-effective"],["tensor-tz",-100,150,"tensor-effective"],["tensor-theta",0,90,"tensor-effective"],["tensor-phi",0,90,"tensor-effective"]
  ]},
  {script:"lecture-cw-detection.js",defaults:{"cw-width":2,"cw-mod":0.2},checks:[
    ["cw-width",0.4,8,"cw-amplitude"],["cw-mod",0.02,5,"cw-amplitude"]
  ]},
  {script:"lecture-relaxation.js",defaults:{"relax-t1":2,"relax-tphi":0.4771},checks:[
    ["relax-t1",0.2,8,"relax-mz-1us"],["relax-tphi",-0.699,1.301,"relax-mxy-1us"]
  ]},
  {script:"lecture-radical-levels.js",defaults:{"rp-level-field":100,"rp-level-j":10,"rp-level-dg":0.005,"rp-level-v":1},checks:[
    ["rp-level-field",0,1000,"rp-level-gap"],["rp-level-j",-60,60,"rp-level-gap"],
    ["rp-level-dg",-0.02,0.02,"rp-level-gap"],["rp-level-v",0,20,"rp-level-gap"]
  ]},
  {script:"lecture-memory.js",defaults:{"memory-gamma":1,"memory-tau":-0.699},checks:[
    ["memory-gamma",0.1,5,"memory-product-out"],["memory-tau",-2,0.301,"memory-product-out"]
  ]},
  {script:"lecture-secular.js",defaults:{"secular-dnu":0.35,"secular-time":2},checks:[
    ["secular-dnu",0,1.5,"secular-residual"],["secular-time",0.05,3,"secular-residual"]
  ]},
  {script:"lecture-tunnelling.js",defaults:{"tunnel-dr":2,"tunnel-beta":1},checks:[
    ["tunnel-dr",0,5,"tunnel-k-out"],["tunnel-beta",0.3,2,"tunnel-k-out"]
  ]},
  {script:"lecture-pulse-bandwidth.js",defaults:{"pulse-duration":40},checks:[
    ["pulse-duration",10,250,"pulse-zero"]
  ]},
  {script:"lecture-motion.js",defaults:{"motion-logf":2,"motion-logtau":0,"motion-sigma":5},checks:[
    ["motion-logf",-1,4,"motion-x-out"],["motion-logtau",-3,4,"motion-x-out"],
    ["motion-sigma",1,10,"motion-jabs-out"]
  ]},
  {script:"lecture-qbio.js",defaults:{"qbio-loglife":0,"qbio-logt2":0.301,"qbio-logf":0.301},checks:[
    ["qbio-loglife",-2,2,"qbio-cycles-out"],["qbio-logt2",-2,2,"qbio-coherence-out"],
    ["qbio-logf",-2,2,"qbio-cycles-out"]
  ]}
];

function load(config) {
  const elements = new Map();
  function get(id) {
    if (!elements.has(id)) {
      const listeners = {};
      elements.set(id,{
        value: String(Object.prototype.hasOwnProperty.call(config.defaults,id)?config.defaults[id]:0),
        textContent:"",style:{},dataset:{},listeners,
        setAttribute(name,value) {
          const string=String(value);
          assert(!/NaN|Infinity/.test(string),config.script+" invalid SVG "+id+"."+name);
          this[name]=string;
        },
        addEventListener(name,fn) {listeners[name]=fn;},
        appendChild() {},
        set innerHTML(v) {this._innerHTML=v;},
        get innerHTML() {return this._innerHTML||"";}
      });
    }
    return elements.get(id);
  }
  const document={
    readyState:"complete",
    getElementById:get,
    querySelectorAll:()=>[],
    createElementNS:()=>({setAttribute(){}})
  };
  const source=fs.readFileSync("assets/js/"+config.script,"utf8");
  vm.runInNewContext(source,{document,console,Math},{filename:config.script,timeout:2500});
  return get;
}

let controls=0,samples=0;
for(const config of fixtures) {
  const get=load(config);
  for(const [id,min,max,output] of config.checks) {
    const input=get(id),values=[];
    assert(typeof input.listeners.input==="function",config.script+" missing input event: "+id);
    for(let i=0;i<17;i++) {
      const v=min+(max-min)*i/16;
      input.value=String(v);
      input.listeners.input();
      const raw=get(output).textContent;
      const result=Number.parseFloat(String(raw).replace("−","-"));
      assert(Number.isFinite(result),config.script+" non-finite "+output+" at "+id+"="+v+" ("+raw+")");
      values.push(result);
      samples++;
    }
    const distinct=new Set(values.map(v=>v.toPrecision(5))).size;
    assert(distinct>=3,config.script+" INACTIVE control "+id+" -> "+output+" ("+distinct+" distinct readouts)");
    input.value=String(config.defaults[id]);
    input.listeners.input();
    controls++;
  }
  console.log("PASS",config.script,config.checks.length,"controls");
}
console.log("PASS",controls,"controls sampled at 17 positions each;",samples,"evaluations");
