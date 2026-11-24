/* First-party physics labs: educational models, no external dependencies.
   Matrix conventions documented in each lesson. All values are angular-frequency
   units; spin operators have eigenvalues ±1/2 rather than ±ℏ/2. */
(function(global){
"use strict";
const EPS=1e-10;
const num=v=>{const n=Number(v);return Number.isFinite(n)?n:0;};
const short=v=>Math.abs(v)<EPS?"0":(Math.round(v*100)/100).toFixed(2);
function jacobiSymmetric(input){
 const n=input.length,A=input.map(r=>r.slice());
 const V=Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>+(i===j)));
 for(let k=0;k<100*n*n;k++){
  let p=0,q=1,max=0;
  for(let i=0;i<n;i++)for(let j=i+1;j<n;j++){const t=Math.abs(A[i][j]);if(t>max){p=i;q=j;max=t;}}
  if(max<1e-13)break;
  const theta=.5*Math.atan2(2*A[p][q],A[q][q]-A[p][p]);
  const c=Math.cos(theta),s=Math.sin(theta);
  const ap=A[p][p],aq=A[q][q],a=A[p][q];
  A[p][p]=c*c*ap-2*s*c*a+s*s*aq;
  A[q][q]=s*s*ap+2*s*c*a+c*c*aq;
  A[p][q]=0;A[q][p]=0;
  for(let r=0;r<n;r++){
   if(r!==p&&r!==q){const v=A[r][p],w=A[r][q];A[r][p]=A[p][r]=c*v-s*w;A[r][q]=A[q][r]=s*v+c*w;}
   const vp=V[r][p],vq=V[r][q];V[r][p]=c*vp-s*vq;V[r][q]=s*vp+c*vq;
  }
 }
 return Array.from({length:n},(_,i)=>({energy:A[i][i],coefficients:V.map(row=>row[i])})).sort((a,b)=>a.energy-b.energy);
}
function toyCAS(gap){
 const g=num(gap);
 return jacobiSymmetric([[-.9,.08,.25],[.08,-.3+.48*g,.07],[.25,.07,-.5+1.24*g]]);
}
function pairHamiltonian(kind,detune,J,d){
 // Common Zeeman component removed: ω1=Δω/2 and ω2=−Δω/2.
 // For two electrons: J S1·S2+d(3S1z S2z−S1·S2)
 // For electron+nucleus: A_perp(Sx Ix+Sy Iy)+A_parallel Sz Iz.
 const H=Array.from({length:4},()=>Array(4).fill(0));
 const p=[[.5,.5],[.5,-.5],[-.5,.5],[-.5,-.5]];
 for(let i=0;i<4;i++){
  const [z1,z2]=p[i];
  H[i][i]=num(detune)*(z1-z2)/2
    +(kind==="en"?num(d)*z1*z2:num(J)*z1*z2+2*num(d)*z1*z2);
 }
 H[1][2]=H[2][1]=kind==="en"?num(J)/2:(num(J)-num(d))/2;
 return H;
}
function commutatorLiouvillian(H){
 const n=H.length,N=n*n;
 const L=Array.from({length:N},()=>Array.from({length:N},()=>({re:0,im:0})));
 for(let r=0;r<n;r++)for(let c=0;c<n;c++){
  for(let a=0;a<n;a++)for(let b=0;b<n;b++){
   const val=(c===b?H[r][a]:0)-(r===a?H[b][c]:0);
   L[r*n+c][a*n+b]={re:0,im:-val};
  }
 }
 return L;
}
function singleSpinGenerator(down,up,phi,omega){
 const d=Math.max(0,num(down)),u=Math.max(0,num(up)),f=Math.max(0,num(phi)),w=num(omega);
 const L=Array.from({length:4},()=>Array.from({length:4},()=>({re:0,im:0})));
 const set=(r,c,re,im=0)=>{L[r][c]={re,im};};
 set(0,0,-d);set(0,3,u);
 set(1,1,-(d+u)/2-f,-w);set(2,2,-(d+u)/2-f,w);
 set(3,0,d);set(3,3,-u);
 return L;
}
function cellValue(v){
 const re=typeof v==="number"?v:v.re,im=typeof v==="number"?0:v.im;
 const a=Math.abs(re)>EPS,b=Math.abs(im)>EPS;
 if(!a&&!b)return "·";
 if(!b)return short(re);
 if(!a)return short(im)+"i";
 return short(re)+(im>=0?"+":"−")+short(Math.abs(im))+"i";
}
function renderMatrix(table,matrix,labels,large=false){
 if(!table)return;
 const old=table.querySelectorAll("thead,tbody");old.forEach(x=>x.remove());
 table.classList.toggle("physics-matrix-large",large);
 const thead=document.createElement("thead"),tr=document.createElement("tr");
 const corner=document.createElement("th");corner.textContent="row ↓ / column →";tr.append(corner);
 labels.forEach(x=>{const th=document.createElement("th");th.scope="col";th.textContent=x;tr.append(th);});
 thead.append(tr);table.append(thead);
 const tbody=document.createElement("tbody");
 matrix.forEach((row,i)=>{
  const r=document.createElement("tr"),th=document.createElement("th");th.scope="row";th.textContent=labels[i];r.append(th);
  row.forEach((v,j)=>{
   const re=typeof v==="number"?v:v.re,im=typeof v==="number"?0:v.im;
   const td=document.createElement("td");td.textContent=cellValue(v);
   const nonZero=Math.abs(re)+Math.abs(im)>EPS;
   if(nonZero)td.dataset.sign=Math.abs(im)>EPS?"complex":re<0?"neg":"pos";
   if(i===j)td.dataset.sign=nonZero&&Math.abs(im)>EPS?"complex":nonZero&&re<0?"neg":nonZero?"pos":"";
   if(i===j)td.dataset.diag="";
   td.title=labels[i]+" ← "+labels[j]+": "+(nonZero?td.textContent:"0");
   r.append(td);
  });tbody.append(r);
 });table.append(tbody);
}
function initSpin(panel){
 const get=s=>panel.querySelector(s);
 const on=()=> {
  const kind=get("[data-spin-kind]").value,view=get("[data-spin-view]").value;
  const delta=num(get("[data-spin-detune]").value),J=num(get("[data-spin-j]").value),d=num(get("[data-spin-d]").value);
  for(const [s,value] of [["[data-spin-detune-out]",delta],["[data-spin-j-out]",J],["[data-spin-d-out]",d]])get(s).textContent=short(value);
  const H=pairHamiltonian(kind,delta,J,d);
  const labels=["↑↑","↑↓","↓↑","↓↓"];
  let m,basis;
  if(view==="h"){m=H;basis=labels;}
  else {m=commutatorLiouvillian(H);basis=labels.flatMap((a)=>labels.map(b=>a+"|"+b));}
  renderMatrix(get("[data-spin-matrix]"),m,basis,view==="l");
  const nev=m.flat().filter(v=>(typeof v==="number"?Math.abs(v):Math.abs(v.re)+Math.abs(v.im))>EPS).length;
  const eig=jacobiSymmetric(H);
  const evals=eig.map(x=>short(x.energy)).join(", ");
  const sWeights=kind==="ee"?eig.map(x=>((x.coefficients[1]-x.coefficients[2])**2/2*100).toFixed(1)+"%").join(", "):"";
  const gaps=eig.slice(1).map((x,i)=>short(x.energy-eig[i].energy)).join(", ");
  const od=short(H[1][2]);
  const eq=kind==="en"?
    "H/ℏ = (Δω/2)(Sz − Iz) + A⊥(SxIx + SyIy) + A∥SzIz; Δω is an illustrative rotating-frame detuning.":
    "H/ℏ = (Δω/2)(S1z − S2z) + J S1·S2 + d(3S1zS2z − S1·S2); common Zeeman frequency removed.";
  get("[data-spin-equation]").textContent=eq;
  const insight="Non-zero entries: "+nev+" of "+m.length*m.length+". The |↑↓⟩↔|↓↑⟩ coupling is "+od+" rad/µs. Eigenfrequencies of H/ℏ: "+evals+"; adjacent energy gaps /ℏ: "+gaps+" rad/µs. "+(kind==="ee"?"Singlet weights of the four eigenstates (in ascending energy order): "+sWeights+". ":"")+
    (kind==="ee"?"Exchange and axial dipolar terms change the singlet–triplet splitting; unequal Zeeman frequencies can mix S and T₀.":"A⊥ creates electron–nuclear flip-flop terms, whereas A∥ changes only diagonal energies in this collinear example.")+
    (view==="l"?" The 16 rows index density-matrix ket–bra pairs, not additional physical energy levels.":"");
  get("[data-spin-insight]").textContent=insight;
 };
 panel.querySelectorAll("select,input").forEach(x=>x.addEventListener("input",on));on();
}
function initRelax(panel){
 const get=s=>panel.querySelector(s),on=()=>{
  const d=num(get("[data-relax-down]").value),u=num(get("[data-relax-up]").value),f=num(get("[data-relax-phi]").value),w=num(get("[data-relax-omega]").value);
  [["[data-relax-down-out]",d],["[data-relax-up-out]",u],["[data-relax-phi-out]",f],["[data-relax-omega-out]",w]].forEach(([s,v])=>get(s).textContent=short(v));
  const L=singleSpinGenerator(d,u,f,w);
  renderMatrix(get("[data-relax-matrix]"),L,["ρ↑↑","ρ↑↓","ρ↓↑","ρ↓↓"]);
  const g=d+u,inv=x=>x>EPS?(1/x).toFixed(2)+" µs":"∞";
  const steady=g>EPS?"Stationary ↑ population: "+(u/g*100).toFixed(1)+"%; ↓ population: "+(d/g*100).toFixed(1)+"%.":"No unique stationary population: transitions are switched off.";
  get("[data-relax-insight]").textContent="T₁ = "+inv(g)+", T₂ = "+inv(g/2+f)+
   ". The coherence eigenmodes decay at "+short(g/2+f)+" µs⁻¹ while rotating at ±"+short(w)+" rad/µs. "+
   steady+" The trace row (1,0,0,1) annihilates the generator.";
 };
 panel.querySelectorAll("input").forEach(x=>x.addEventListener("input",on));on();
}
function initCAS(panel){
 const get=s=>panel.querySelector(s),on=()=>{
  const root=Number(get("[data-cas-root]").value),gap=num(get("[data-cas-gap]").value);
  get("[data-cas-gap-value]").textContent=gap.toFixed(2)+" (arb. units)";
  const e=toyCAS(gap),state=e[root],names=["|g²⟩","|gu; S=0⟩","|u²⟩"];
  const bars=get("[data-cas-bars]");bars.replaceChildren();
  let dominant=0;
  state.coefficients.forEach((c,i)=>{
   if(Math.abs(c)>Math.abs(state.coefficients[dominant]))dominant=i;
   const row=document.createElement("div");row.className="cas-bar-row";
   const name=document.createElement("span");name.textContent=names[i];
   const track=document.createElement("div");track.className="cas-bar-track";
   const fill=document.createElement("span");fill.className="cas-bar-fill";fill.style.width=(c*c*100).toFixed(1)+"%";track.append(fill);
   const value=document.createElement("strong");value.textContent=(c*c*100).toFixed(1)+"%";
   row.append(name,track,value);bars.append(row);
  });
  const svg=get("[data-cas-spectrum]");svg.replaceChildren();
  const ns="http://www.w3.org/2000/svg", el=(name,attrs,txt)=>{
   const e1=document.createElementNS(ns,name);
   Object.entries(attrs).forEach(([k,v])=>e1.setAttribute(k,String(v)));
   if(txt!==undefined)e1.textContent=txt;svg.append(e1);
  };
  const E=e.map(x=>x.energy),min=Math.min(...E)-.1,max=Math.max(...E)+.1;
  e.forEach((x,i)=>{
   const y=175-(x.energy-min)/(max-min)*125;
   el("line",{x1:50,y1:y,x2:225,y2:y,stroke:i===root?"#126e7d":"#a9c2c7","stroke-width":i===root?5:2.5});
   el("text",{x:235,y:y+4,"font-weight":i===root?"700":"400"},"S"+i);
  });
  el("text",{x:18,y:188}, "Low");
  el("text",{x:18,y:23}, "High");
  get("[data-cas-reading]").textContent="S"+root+" has toy energy "+short(state.energy)+
   " (arbitrary units); its largest CSF contribution is "+names[dominant]+
   ". Note that squared coefficients depend on the chosen orbital/CSF basis.";
 };
 panel.querySelectorAll("select,input").forEach(x=>x.addEventListener("input",on));on();
}
function initPotential(panel){
 const get=s=>panel.querySelector(s),on=()=>{
  const species=get("[data-potential-system]").value,R=num(get("[data-potential-r]").value);
  get("[data-potential-r]").disabled=species==="h";
  get("[data-potential-r-value]").textContent=species==="h"?"not applicable":R.toFixed(1)+" bohr";
  const svg=get("[data-potential-svg]"),g=get("[data-potential-molecule]");
  g.replaceChildren();
  const ns="http://www.w3.org/2000/svg";
  const make=(tag,attrs,text)=>{
   const node=document.createElementNS(ns,tag);
   Object.entries(attrs).forEach(([k,v])=>node.setAttribute(k,String(v)));
   if(text!==undefined)node.textContent=text;g.append(node);return node;
  };
  const two=species!=="h",ne=species==="h2"?2:1;
  const xs=two?[320-48*R/2,320+48*R/2]:[320];
  xs.forEach((x,i)=>{
   make("circle",{cx:x,cy:48,r:17,fill:"#d3e9e9",stroke:"#177483","stroke-width":2});
   make("text",{x,y:53,"text-anchor":"middle","font-size":16},"+");
   make("text",{x,y:21,"text-anchor":"middle"},"Nucleus "+(i+1));
  });
  make("circle",{cx:ne===1?320:284,cy:93,r:8,fill:"#db9261",stroke:"#965532","stroke-width":2});
  make("text",{x:ne===1?320:284,y:114,"text-anchor":"middle"},"e⁻");
  const electronXs=ne===1?[320]:[284,356];
  for(const eX of electronXs)for(const nX of xs)
    make("line",{x1:eX,y1:85,x2:nX,y2:66,stroke:"#61a1a9","stroke-width":1.4,"stroke-dasharray":"3 5",opacity:.75});
  if(two){
    make("line",{x1:xs[0],y1:76,x2:xs[1],y2:76,stroke:"#c18559","stroke-width":1.4});
    make("text",{x:320,y:88,"text-anchor":"middle"},"R");
  }
  if(ne===2){
   make("circle",{cx:356,cy:93,r:8,fill:"#db9261",stroke:"#965532","stroke-width":2});
   make("text",{x:356,y:114,"text-anchor":"middle"},"e⁻");
   make("path",{d:"M292 93H348",stroke:"#bd7846","stroke-dasharray":"4 4"});
  }
  const out=[];
  for(let i=0;i<=220;i++){
   const x=-5+10*i/220;
   const soft=.64;
   const V=two?-1/Math.sqrt((x+R/2)**2+soft**2)-1/Math.sqrt((x-R/2)**2+soft**2):
     -1/Math.sqrt(x*x+soft*soft);
   const y=Math.max(136,Math.min(210,148-25*V));
   out.push((i?"L":"M")+(48+562*i/220).toFixed(2)+" "+y.toFixed(2));
  }
  get("[data-potential-curve]").setAttribute("d",out.join(" "));
  get("[data-potential-caption]").textContent= species==="h"?
   "H: one electron experiences a single electron–nucleus attraction; there is neither nucleus–nucleus nor electron–electron repulsion.":
   species==="h2p"?
   "H₂⁺: one electron is attracted to both nuclei; nucleus–nucleus repulsion is an R-dependent constant at fixed geometry. There is no electron–electron term.":
   "H₂: each electron is attracted to both nuclei; the two electrons repel each other, and the nuclei repel one another. A one-electron potential slice cannot represent electron correlation.";
 };
 panel.querySelectorAll("select,input").forEach(x=>x.addEventListener("input",on));on();
}
const api={jacobiSymmetric,toyCAS,pairHamiltonian,commutatorLiouvillian,singleSpinGenerator};
if(typeof module!=="undefined"&&module.exports)module.exports=api;
if(typeof document!=="undefined"){
 const start=()=>{
  document.querySelectorAll("[data-spin-matrix-lab]").forEach(initSpin);
  document.querySelectorAll("[data-relaxation-lab]").forEach(initRelax);
  const cas=document.getElementById("cas-roots-lab");if(cas)initCAS(cas);
  const pot=document.getElementById("potential-lab");if(pot)initPotential(pot);
 };
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
}
})(typeof window!=="undefined"?window:typeof globalThis!=="undefined"?globalThis:this);
