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
  ]},
  {script:"lecture-epr.js",defaults:{"epr-frequency":9.5,"epr-gperp":2.003,"epr-gparallel":1.98,"epr-theta":45},checks:[
    ["epr-frequency",1,100,"epr-bres-out"],["epr-gperp",1.85,2.2,"epr-bperp-out"],
    ["epr-gparallel",1.85,2.2,"epr-bparallel-out"],["epr-theta",0,90,"epr-geff-out"]
  ]},
  {script:"lecture-hyperfine.js",defaults:{"hf-count":2,"hf-A":30},checks:[
    ["hf-count",1,4,"hf-lines-out"],["hf-A",5,100,"hf-span-out"]
  ]},
  {script:"lecture-powder.js",defaults:{"powder-frequency":9.5,"powder-gperp":2.005,"powder-gpar":1.98,"powder-width":1.5},checks:[
    ["powder-frequency",5,100,"powder-bpar"],["powder-gperp",1.9,2.2,"powder-bperp"],
    ["powder-gpar",1.9,2.2,"powder-bpar"],["powder-width",0.2,20,"powder-peak"]
  ]},
  {script:"lecture-dipolar.js",defaults:{"dipolar-r":1,"dipolar-theta":90},checks:[
    ["dipolar-r",0.5,4,"dipolar-prefactor-out"],["dipolar-theta",0,90,"dipolar-secular-out"]
  ]},
  {script:"lecture-active-space.js",defaults:{"cas-orbitals":6,"cas-electrons":6},checks:[
    ["cas-orbitals",2,14,"cas-all-count"],["cas-electrons",1,12,"cas-all-count"]
  ]},
  {script:"lecture-photochemistry.js",defaults:{"photo-e00":2.3,"photo-k":1,"photo-d":0.5,"branch-kf":8,"branch-kic":7.5,"branch-kisc":7,"branch-krxn":6.5},checks:[
    ["photo-e00",1.2,4,"photo-abs-out"],["photo-k",0.2,3,"photo-stokes-out"],
    ["photo-d",0,0.8,"photo-stokes-out"],["branch-kf",5,10,"branch-fluor-out"],
    ["branch-kic",5,10,"branch-ic-out"],["branch-kisc",5,10,"branch-isc-out"],
    ["branch-krxn",5,10,"branch-rxn-out"]
  ]},
  {script:"lecture-marcus.js",defaults:{"marcus-lambda":0.7,"marcus-dg":-0.5,"marcus-v":1,"marcus-temp":300},checks:[
    ["marcus-lambda",0.1,2.5,"marcus-barrier-out"],
    ["marcus-dg",-3,1,"marcus-barrier-out"],
    ["marcus-v",-1,2,"marcus-v-out"],
    ["marcus-temp",200,400,"marcus-rate-out"]
  ]},
  {script:"lecture-bloch.js",defaults:{"bloch-theta":90,"bloch-phi":0,"bloch-eta":1},checks:[
    ["bloch-theta",0,180,"bloch-pop-up"],["bloch-eta",0,1,"bloch-coherence"]
  ]}
];

function parseObservable(raw, output) {
  const text=String(raw).trim().replace(/−/g,"-");
  // Marcus rates use mantissa × 10^exponent; parseFloat alone extracts
  // only the mantissa and falsely reports long flat intervals.
  if(output==="marcus-rate-out") {
    const sci=text.match(/^([+-]?\\d+(?:\\.\\d+)?)\\s*×\\s*10\\^([+-]?\\d+)/);
    if(sci) return Math.log10(Number(sci[1]))+Number(sci[2]);
    const ordinary=Number.parseFloat(text);
    return ordinary>0?Math.log10(ordinary):Number.NaN;
  }
  return Number.parseFloat(text);
}

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
    const discrete = id==="hf-count";
    const nSamples=discrete?Math.round(max-min)+1:17;
    for(let i=0;i<nSamples;i++) {
      const v=min+(max-min)*i/(nSamples-1);
      input.value=String(v);
      input.listeners.input();
      const raw=get(output).textContent;
      const result=parseObservable(raw,output);
      assert(Number.isFinite(result),config.script+" non-finite "+output+" at "+id+"="+v+" ("+raw+")");
      values.push(result);
      samples++;
    }
    const distinct=new Set(values.map(v=>v.toPrecision(5))).size;
    assert(distinct>=3,config.script+" INACTIVE control "+id+" -> "+output+" ("+distinct+" distinct readouts)");
    // Detect long intervals where the measured observable does not respond.
    // Resolution uses the displayed result, intentionally catching rounded-to-zero plateaus.
    const amplitude=Math.max(...values)-Math.min(...values);
    const tolerance=Math.max(1e-9,0.002*amplitude);
    let longestFlat=0,runFlat=0,flatIntervals=0;
    for(let k=1;k<values.length;k++) {
      const flat=Math.abs(values[k]-values[k-1])<=tolerance;
      runFlat=flat?runFlat+1:0;
      if(flat) flatIntervals++;
      longestFlat=Math.max(longestFlat,runFlat);
    }
    const flatFraction=flatIntervals/(values.length-1);
    if(flatFraction>0.5 || longestFlat>=7) {
      console.warn("SENSITIVITY WARNING",config.script,id,"observable",output,
        "flat_fraction",flatFraction.toFixed(2),"longest_flat_run",longestFlat,
        "amplitude",amplitude.toPrecision(4));
    }
    input.value=String(config.defaults[id]);
    input.listeners.input();
    controls++;
  }
  console.log("PASS",config.script,config.checks.length,"controls");
}
console.log("PASS",controls,"controls sampled at 17 positions each;",samples,"evaluations");
