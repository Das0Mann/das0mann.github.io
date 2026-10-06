(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const makePath = (pts) => pts.map((p,i)=>(i===0?"M":"L")+p[0].toFixed(2)+" "+p[1].toFixed(2)).join(" ");

  function init() {
    const drInput=$("tunnel-dr"), betaInput=$("tunnel-beta");
    if(!drInput || !betaInput) return;
    const drOut=$("tunnel-dr-out"), betaOut=$("tunnel-beta-out");
    const vOut=$("tunnel-v-out"), kOut=$("tunnel-k-out"), suppressionOut=$("tunnel-suppression-out");
    const explanation=$("tunnel-explanation"), path=$("tunnel-rate-path"), line=$("tunnel-marker-line"), marker=$("tunnel-marker");
    const x0=58,x1=530,yTop=35,yBottom=248,drMax=8,logMin=-14.0,logMax=0;
    const xMap=(dr)=>x0+(x1-x0)*dr/drMax;
    const yMap=(logv)=>yBottom-(yBottom-yTop)*(Math.max(logMin,Math.min(logMax,logv))-logMin)/(logMax-logMin);

    function update() {
      const dr=parseFloat(drInput.value), beta=parseFloat(betaInput.value);
      const v=Math.exp(-beta*dr), k=Math.exp(-2*beta*dr), logk=Math.log10(k);
      drOut.textContent=dr.toFixed(1)+" Å";
      betaOut.textContent=beta.toFixed(2)+" Å⁻¹";
      vOut.textContent=v<0.001?v.toExponential(2):v.toFixed(3);
      kOut.textContent=k<0.001?k.toExponential(2):k.toFixed(4);
      suppressionOut.textContent=(1/k>=1e4?(1/k).toExponential(2):(1/k).toFixed(1))+"×";

      const pts=[];
      for(let i=0;i<=240;i++){
        const x=drMax*i/240;
        const y=(-2*beta*x)/Math.LN10;
        pts.push([xMap(x),yMap(y)]);
      }
      path.setAttribute("d",makePath(pts));
      const mx=xMap(dr),my=yMap(logk);
      line.setAttribute("x1",mx.toFixed(2)); line.setAttribute("x2",mx.toFixed(2));
      marker.setAttribute("cx",mx.toFixed(2)); marker.setAttribute("cy",my.toFixed(2));

      if(dr<0.6) explanation.textContent="The geometry is close to the reference separation, so the coupling remains comparatively strong.";
      else if(k>0.1) explanation.textContent="The rate is already measurably reduced, but the tunnelling penalty is still within one order of magnitude.";
      else if(k>0.001) explanation.textContent="A small structural shift now suppresses the nonadiabatic rate by one to three orders of magnitude.";
      else explanation.textContent="The coupling has become very weak: at this distance the tunnelling penalty dominates unless another pathway or conformation takes over.";
    }
    drInput.addEventListener("input",update); betaInput.addEventListener("input",update);
    document.querySelectorAll("[data-tunnel-beta]").forEach(b=>b.addEventListener("click",()=>{betaInput.value=b.dataset.tunnelBeta;update();}));
    update();
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init); else init();
})();