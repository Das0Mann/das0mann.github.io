(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function initCwDetection() {
    const widthInput = $("cw-width");
    const modInput = $("cw-mod");
    if (!widthInput || !modInput) return;

    const widthOut = $("cw-width-out");
    const modOut = $("cw-mod-out");
    const ratioOut = $("cw-ratio");
    const ppOut = $("cw-pp");
    const amplitudeOut = $("cw-amplitude");
    const regimeOut = $("cw-regime");
    const explanation = $("cw-explanation");
    const absorptionPath = $("cw-absorption-path");
    const lockinPath = $("cw-lockin-path");

    const x0=58, x1=530;
    const yAbsTop=34, yAbsBottom=134;
    const yDerTop=170, yDerBottom=270;
    const nField=360, nPhase=72;

    function gaussian(x, sigma) {
      return Math.exp(-0.5 * (x/sigma) * (x/sigma));
    }

    function update() {
      const width=parseFloat(widthInput.value);
      const bmod=parseFloat(modInput.value);
      const sigma=width/2.354820045;
      const range=Math.max(4*width, 3*bmod, 2.5);
      const fields=[];
      const abs=[];
      const lock=[];

      for(let i=0;i<=nField;i++){
        const b=-range+2*range*i/nField;
        fields.push(b);
        abs.push(gaussian(b,sigma));

        let first=0;
        for(let k=0;k<nPhase;k++){
          const phi=2*Math.PI*(k+0.5)/nPhase;
          first += gaussian(b+bmod*Math.cos(phi),sigma)*Math.cos(phi);
        }
        lock.push(2*first/nPhase);
      }

      let lockMax=0;
      for(const v of lock) lockMax=Math.max(lockMax,Math.abs(v));
      // Keep the genuine first-harmonic amplitude before normalizing its shape.
      const rawAmplitude = lockMax;
      if(lockMax<1e-12) lockMax=1;

      let imax=0, imin=0;
      for(let i=1;i<lock.length;i++){
        if(lock[i]>lock[imax]) imax=i;
        if(lock[i]<lock[imin]) imin=i;
      }
      const pp=Math.abs(fields[imax]-fields[imin]);
      const ratio=bmod/width;

      const xMap=(b)=>x0+(x1-x0)*(b+range)/(2*range);
      const yAbs=(v)=>yAbsBottom-(yAbsBottom-yAbsTop)*v;
      const yDer=(v)=>{
        const mid=(yDerTop+yDerBottom)/2;
        const amp=(yDerBottom-yDerTop)/2;
        return mid-amp*(v/lockMax);
      };

      absorptionPath.setAttribute("d",makePath(fields.map((b,i)=>[xMap(b),yAbs(abs[i])])));
      lockinPath.setAttribute("d",makePath(fields.map((b,i)=>[xMap(b),yDer(lock[i])])));

      widthOut.textContent=width.toFixed(1)+" mT";
      modOut.textContent=bmod.toFixed(2)+" mT";
      ratioOut.textContent=ratio.toFixed(2);
      ppOut.textContent=pp.toFixed(2)+" mT";
      if(amplitudeOut) amplitudeOut.textContent=rawAmplitude.toFixed(4)+" (relative)";

      if(ratio<0.15){
        regimeOut.textContent="near derivative limit";
        explanation.textContent="The modulation is small compared with the linewidth, so first-harmonic lock-in detection closely follows the first derivative of the underlying absorption line.";
      }else if(ratio<0.5){
        regimeOut.textContent="moderate modulation";
        explanation.textContent="The signal is still derivative-like, but the finite modulation already smooths and broadens the detected line. Peak positions begin to shift slightly.";
      }else{
        regimeOut.textContent="overmodulated";
        explanation.textContent="The modulation is now comparable to or larger than the intrinsic linewidth. The lock-in spectrum is visibly distorted and can no longer be interpreted as a simple mathematical derivative.";
      }
    }

    [widthInput,modInput].forEach(el=>el.addEventListener("input",update));
    document.querySelectorAll("[data-cw]").forEach(button=>{
      button.addEventListener("click",()=>{
        const mode=button.dataset.cw;
        widthInput.value="2";
        if(mode==="small") modInput.value="0.1";
        else if(mode==="matched") modInput.value="0.6";
        else modInput.value="2.5";
        update();
      });
    });

    update();
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",initCwDetection);
  }else{
    initCwDetection();
  }
})();