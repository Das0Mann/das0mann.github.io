"use strict";
const fs=require("node:fs");
const vm=require("node:vm");
const assert=require("node:assert/strict");
const tree=fs.readdirSync("lecture",{withFileTypes:true}).filter(x=>x.isDirectory());
const pages=tree.map(x=>({name:x.name,path:"lecture/"+x.name+"/index.md"})).filter(x=>fs.existsSync(x.path));
function attrs(tag) {
  const out={};
  for(const m of tag.matchAll(/([a-z][a-z0-9-]*)="([^"]*)"/gi))out[m[1]]=m[2];
  for(const name of ["checked","disabled"])if(new RegExp("\\b"+name+"\\b").test(tag))out[name]=true;
  return out;
}
function datasetName(s){return s.replace(/-([a-z])/g,(_,x)=>x.toUpperCase());}
const files={
  "electronic-structure":["lecture-active-space.js","lecture-interactive.js"],
  "spin-hamiltonians":["lecture-dipolar.js","lecture-tensor.js"],
  "spin-dynamics":["lecture-interactive.js","lecture-bloch.js","lecture-relaxation.js"],
  "radical-pairs":["lecture-interactive.js","lecture-radical-levels.js"],
  "magnetic-resonance":["lecture-hyperfine.js","lecture-epr.js","lecture-powder.js","lecture-cw-detection.js"],
  "electron-transfer":["lecture-marcus.js","lecture-tunnelling.js"],
  "molecular-motion":["lecture-motion.js"],
  "computational-lab":["lecture-scaling.js"],
  "open-systems":["lecture-memory.js","lecture-secular.js"],
  "quantum-biology":["lecture-qbio.js"],
  "excited-state-photochemistry":["lecture-photochemistry.js"],
  "coherent-control":["lecture-rabi.js","lecture-pulse-bandwidth.js"]
};
let total=0,covered=0;
for(const page of pages) {
  const source=fs.readFileSync(page.path,"utf8");
  const buttons=[...source.matchAll(/<button\b[^>]*>/g)].map(x=>attrs(x[0])).filter(x=>Object.keys(x).some(k=>k.startsWith("data-")));
  if(!buttons.length)continue;
  const inputs=[...source.matchAll(/<input\b[^>]*>/g)].map(x=>attrs(x[0])).filter(x=>x.id);
  const elements=new Map();
  function make(id,attr={}) {
    const listeners={};
    const el={value:attr.value??"0",min:attr.min??"",max:attr.max??"",step:attr.step??"",
      checked:!!attr.checked,textContent:"",dataset:{},style:{},listeners,
      addEventListener(event,fn){listeners[event]=fn;},
      appendChild(child){return child;},
      setAttribute(k,v){const text=String(v);assert(!/NaN|Infinity/.test(text),"invalid SVG "+id);this[k]=text;}
    };
    elements.set(id,el);return el;
  }
  for(const attr of inputs)make(attr.id,attr);
  const buttonNodes=buttons.map((attr,index)=>{
    const node=make("button-"+index,attr);
    for(const [key,value] of Object.entries(attr))if(key.startsWith("data-"))node.dataset[datasetName(key.slice(5))]=value;
    node.dataAttributes=Object.keys(attr).filter(k=>k.startsWith("data-"));
    return node;
  });
  const doc={
    readyState:"complete",
    getElementById(id){return elements.get(id)??make(id);},
    createElementNS(_ns,tag){return make("svg-"+tag+"-"+elements.size);},
    querySelectorAll(selector){
      const required=[...selector.matchAll(/\[data-([a-z-]+)\]/g)].map(m=>"data-"+m[1]);
      if(!required.length)return [];
      return buttonNodes.filter(x=>required.every(k=>x.dataAttributes.includes(k)));
    }
  };
  for(const filename of files[page.name]||[]) {
    const code=fs.readFileSync("assets/js/"+filename,"utf8");
    vm.runInNewContext(code,{document:doc,console,Math,window:{matchMedia:()=>({matches:true})},requestAnimationFrame:()=>0},{filename,timeout:3000});
  }
  for(const [index,button] of buttonNodes.entries()) {
    assert.equal(typeof button.listeners.click,"function",page.name+" preset "+index+" has no click handler");
    button.listeners.click();
    for(const input of inputs.filter(x=>x.type==="range")) {
      const el=elements.get(input.id);
      const value=Number(el.value),lo=Number(input.min),hi=Number(input.max);
      assert(Number.isFinite(value),page.name+" "+input.id+" became nonfinite");
      assert(value>=lo-1e-8&&value<=hi+1e-8,
        page.name+" preset "+index+" pushed "+input.id+"="+value+" outside ["+lo+","+hi+"]");
    }
    covered++;
  }
  total+=buttons.length;
  console.log("PRESETS PASS",page.name,buttons.length);
}
assert.equal(covered,total);
assert(total>=70,"unexpected reduction in preset buttons");
console.log("PRESETS PASS total",total,"of",covered);
