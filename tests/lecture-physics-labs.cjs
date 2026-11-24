"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const {toyCAS,jacobiSymmetric,pairHamiltonian,spinOneHamiltonian,commutatorLiouvillian,singleSpinGenerator}=require("../assets/js/lecture-physics-labs.js");
const close=(a,b,tol=1e-9)=>assert(Math.abs(a-b)<tol,"Expected "+a+" ≈ "+b);
const C=toyCAS(.9);
assert.equal(C.length,3);for(let i=1;i<3;i++)assert(C[i].energy>C[i-1].energy);
for(let a=0;a<3;a++){
 close(C[a].coefficients.reduce((s,v)=>s+v*v,0),1);
 for(let b=0;b<a;b++)close(C[a].coefficients.reduce((s,v,i)=>s+v*C[b].coefficients[i],0),0);
}
const H=pairHamiltonian("ee",0,2,0);
close(H[0][0],.5);close(H[1][2],1);close(H[2][1],1);close(H[1][1],-.5);
const e=jacobiSymmetric(H).map(x=>x.energy);
[-1.5,.5,.5,.5].forEach((v,i)=>close(e[i],v));
const Hgap=pairHamiltonian("ee",2,0,0);close(Hgap[1][1],1);close(Hgap[2][2],-1);
const Hn=pairHamiltonian("en",0,2,4);close(Hn[0][0],1);close(Hn[1][1],-1);close(Hn[1][2],1);
const HD=pairHamiltonian("ee",0,0,2);close(HD[0][0],1);close(HD[1][1],-1);close(HD[1][2],-1);
const spinOne=spinOneHamiltonian(0,3,.5);
close(spinOne[0][0],1);close(spinOne[1][1],-2);close(spinOne[2][2],1);
close(spinOne[0][2],.5);close(spinOne[2][0],.5);
const spinOneE=jacobiSymmetric(spinOne).map(x=>x.energy);
[-2,.5,1.5].forEach((v,i)=>close(spinOneE[i],v));
assert.equal(commutatorLiouvillian(spinOne).length,9);
const L=commutatorLiouvillian(H);
assert.equal(L.length,16);assert.equal(L[0].length,16);
// Column-major and row-major are distinct. This module declares row-major:
// index (r,c) = 4r + c. Verify the commutator entry and skew-Hermiticity.
close(L[1][2].im,1); // The exchange flip-flop couples the bra index of this density-matrix element.
for(let i=0;i<16;i++)for(let j=0;j<16;j++){
 close(L[i][j].re,0);close(L[i][j].im,L[j][i].im);
}
const g=singleSpinGenerator(1.2,.2,.4,3);
close(g[0][0].re,-1.2);close(g[0][3].re,.2);
close(g[3][0].re,1.2);close(g[3][3].re,-.2);
close(g[1][1].re,-1.1);close(g[1][1].im,-3);
close(g[2][2].re,-1.1);close(g[2][2].im,3);
for(let c=0;c<4;c++)close(g[0][c].re+g[3][c].re,0);
for(let c=0;c<4;c++)close(g[0][c].im+g[3][c].im,0);
// Positive rates imply 1/T2 = 1/(2T1)+gamma_phi.
close(-(g[1][1].re),(.5*(1.2+.2)+.4));
for(let v of [0,.5,1.1,2.4]){
 const roots=toyCAS(v);assert(roots.every(x=>Number.isFinite(x.energy)));
}
const includes={
 "lecture/electronic-structure/index.md":["lecture-potential-lab.html","lecture-approximation-map.html","lecture-cas-roots-lab.html"],
 "lecture/spin-hamiltonians/index.md":["lecture-spin-matrix-lab.html"],
 "lecture/spin-dynamics/index.md":["lecture-spin-matrix-lab.html","lecture-relaxation-matrix-lab.html"],
 "lecture/open-systems/index.md":["lecture-relaxation-matrix-lab.html"]
};
for(const [file,names] of Object.entries(includes)){
 const src=fs.readFileSync(file,"utf8");
 for(const name of names)assert(src.includes(name),file+" missing "+name);
}
assert(fs.readFileSync("_includes/_head.html","utf8").includes("lecture-physics-labs.css"));
assert(fs.readFileSync("_layouts/page.html","utf8").includes("lecture-physics-labs.js"));
if(process.argv.includes("--rendered")){
 const pages=["electronic-structure","spin-hamiltonians","spin-dynamics","open-systems"];
 for(const part of pages){
  const html=fs.readFileSync("_site/lecture/"+part+"/index.html","utf8");
  assert(!html.includes("{% include lecture-"),"Unresolved Liquid in "+part);
  assert(html.includes("lecture-physics-labs.js"),"New labs JS absent from "+part);
  assert(html.includes("lecture-physics-labs.css"),"New labs CSS absent from "+part);
  assert(html.includes('class="physics-lab"')||html.includes('class="physics-lab" id='),"New widgets missing from "+part);
 }
}
console.log("PASS CAS singlet eigenbasis, two-spin operators, row-major Liouvillian and GKSL T1/T2/trace invariants");
