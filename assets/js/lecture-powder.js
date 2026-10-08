(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const muBOverH_GHzPerT = 13.99624555;

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function initPowderDemo() {
    const freqInput = $("powder-frequency");
    const gpInput = $("powder-gperp");
    const gzInput = $("powder-gpar");
    const widthInput = $("powder-width");
    if (!freqInput || !gpInput || !gzInput || !widthInput) return;

    const freqOut = $("powder-frequency-out");
    const gpOut = $("powder-gperp-out");
    const gzOut = $("powder-gpar-out");
    const widthOut = $("powder-width-out");
    const bParOut = $("powder-bpar");
    const bPerpOut = $("powder-bperp");
    const spanOut = $("powder-span");
    const peakOut = $("powder-peak");
    const explanation = $("powder-explanation");

    const path = $("powder-path");
    const parLine = $("powder-par-line");
    const perpLine = $("powder-perp-line");
    const overviewPar = $("powder-overview-par");
    const overviewPerp = $("powder-overview-perp");
    const overviewBand = $("powder-overview-band");
    const xMinLabel = $("powder-x-min");
    const xMaxLabel = $("powder-x-max");

    const x0=58, x1=530, yTop=34, yBottom=270;

    function gEff(theta, gp, gz) {
      const s=Math.sin(theta), c=Math.cos(theta);
      return Math.sqrt(gp*gp*s*s + gz*gz*c*c);
    }

    function bResMt(freq, g) {
      return 1000 * freq / (muBOverH_GHzPerT * g);
    }

    function update() {
      const freq=parseFloat(freqInput.value);
      const gp=parseFloat(gpInput.value);
      const gz=parseFloat(gzInput.value);
      const fwhm=parseFloat(widthInput.value);
      const sigma=fwhm/2.354820045;

      const bPar=bResMt(freq,gz);
      const bPerp=bResMt(freq,gp);
      const rawMin=Math.min(bPar,bPerp);
      const rawMax=Math.max(bPar,bPerp);
      const span=rawMax-rawMin;
      // Fixed 0–4 T locator complements the automatically zoomed line shape.
      // 4 T covers the declared 5–100 GHz and g = 1.90–2.20 domain.
      if (overviewPar && overviewPerp && overviewBand) {
        const locate = (bMt) => 58 + 472 * Math.max(0, Math.min(1, bMt / 4000));
        const xp = locate(bPar), xt = locate(bPerp);
        overviewPar.setAttribute("x1", xp.toFixed(2));
        overviewPar.setAttribute("x2", xp.toFixed(2));
        overviewPerp.setAttribute("x1", xt.toFixed(2));
        overviewPerp.setAttribute("x2", xt.toFixed(2));
        overviewBand.setAttribute("x", Math.min(xp, xt).toFixed(2));
        overviewBand.setAttribute("width", Math.max(0.7, Math.abs(xp-xt)).toFixed(2));
      }
      const pad=Math.max(5*sigma, 0.12*Math.max(span,1), 1.0);
      const bMin=rawMin-pad;
      const bMax=rawMax+pad;
      const nField=360;
      const nTheta=480;
      const spectrum=new Array(nField+1).fill(0);
      const fields=new Array(nField+1);

      for(let i=0;i<=nField;i++) fields[i]=bMin+(bMax-bMin)*i/nField;

      for(let k=0;k<nTheta;k++){
        const theta=(k+0.5)*(Math.PI/2)/nTheta;
        const weight=Math.sin(theta);
        const br=bResMt(freq,gEff(theta,gp,gz));
        for(let i=0;i<=nField;i++){
          const u=(fields[i]-br)/sigma;
          if(Math.abs(u)<5) spectrum[i]+=weight*Math.exp(-0.5*u*u);
        }
      }

      let maxI=0, peakIndex=0;
      for(let i=0;i<=nField;i++){
        if(spectrum[i]>maxI){maxI=spectrum[i];peakIndex=i;}
      }
      if(maxI<=0) maxI=1;

      const xMap=(b)=>x0+(x1-x0)*(b-bMin)/(bMax-bMin);
      const yMap=(y)=>yBottom-(yBottom-yTop)*y;
      const pts=[];
      for(let i=0;i<=nField;i++) pts.push([xMap(fields[i]),yMap(spectrum[i]/maxI)]);
      path.setAttribute("d",makePath(pts));

      const xPar=xMap(bPar), xPerp=xMap(bPerp);
      parLine.setAttribute("x1",xPar.toFixed(2)); parLine.setAttribute("x2",xPar.toFixed(2));
      perpLine.setAttribute("x1",xPerp.toFixed(2)); perpLine.setAttribute("x2",xPerp.toFixed(2));

      freqOut.textContent=freq.toFixed(2)+" GHz";
      gpOut.textContent=gp.toFixed(4);
      gzOut.textContent=gz.toFixed(4);
      widthOut.textContent=fwhm.toFixed(1)+" mT";
      bParOut.textContent=bPar.toFixed(1)+" mT";
      bPerpOut.textContent=bPerp.toFixed(1)+" mT";
      spanOut.textContent=span.toFixed(1)+" mT";
      peakOut.textContent=fields[peakIndex].toFixed(1)+" mT";
      xMinLabel.textContent=bMin.toFixed(0);
      xMaxLabel.textContent=bMax.toFixed(0);

      if(explanation){
        if(Math.abs(gp-gz)<0.0008){
          explanation.textContent="The g tensor is nearly isotropic, so all orientations resonate at almost the same field and the powder pattern collapses toward one broadened line.";
        }else if(fwhm>Math.max(span,0.5)*1.5){
          explanation.textContent="The linewidth is larger than the principal-field separation, so broadening washes out most of the anisotropic powder structure.";
        }else if(freq>70){
          explanation.textContent="At W-band-like frequency the same g-anisotropy maps onto a much larger field separation, making the principal-value structure easier to resolve.";
        }else{
          explanation.textContent="The powder envelope is an orientation integral: sin(theta) weighting and turning points redistribute intensity relative to the simple B_res(theta) curve.";
        }
      }
    }

    [freqInput,gpInput,gzInput,widthInput].forEach((el)=>el.addEventListener("input",update));

    document.querySelectorAll("[data-powder-frequency]").forEach((button)=>{
      button.addEventListener("click",()=>{
        freqInput.value=button.dataset.powderFrequency;
        update();
      });
    });

    document.querySelectorAll("[data-powder-isotropic]").forEach((button)=>{
      button.addEventListener("click",()=>{
        const g=((parseFloat(gpInput.value)+parseFloat(gzInput.value))/2).toFixed(4);
        gpInput.value=g;
        gzInput.value=g;
        update();
      });
    });

    update();
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",initPowderDemo);
  }else{
    initPowderDemo();
  }
})();