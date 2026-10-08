(() => {
  "use strict";

  const $=(id)=>document.getElementById(id);

  function sinc(x){
    return Math.abs(x)<1e-12 ? 1 : Math.sin(x)/x;
  }

  function makePath(points){
    return points.map((p,i)=>
      (i===0?"M":"L")+p[0].toFixed(2)+" "+p[1].toFixed(2)
    ).join(" ");
  }

  function initPulseBandwidth(){
    const tpInput=$("pulse-duration");
    if(!tpInput) return;

    const tpOut=$("pulse-duration-out");
    const zeroOut=$("pulse-zero");
    const fwhmOut=$("pulse-fwhm");
    const nu1Out=$("pulse-nu1");
    const explanation=$("pulse-bandwidth-explanation");
    const path=$("pulse-bandwidth-path");
    const left=$("pulse-zero-left");
    const right=$("pulse-zero-right");

    const x0=58,x1=530,yTop=34,yBottom=270;

    function update(){
      const tp=parseFloat(tpInput.value); // ns
      const firstZero=1000/tp; // MHz
      const powerFwhm=885.9/tp; // MHz
      const piNu1=500/tp; // MHz
      const range=2.5*firstZero;

      const xMap=(f)=>x0+(x1-x0)*(f+range)/(2*range);
      const yMap=(p)=>yBottom-(yBottom-yTop)*p;

      const pts=[];
      const n=420;
      for(let i=0;i<=n;i++){
        const f=-range+2*range*i/n;
        const x=Math.PI*f*tp*1e-3;
        const power=Math.pow(sinc(x),2);
        pts.push([xMap(f),yMap(power)]);
      }
      path.setAttribute("d",makePath(pts));

      const xl=xMap(-firstZero), xr=xMap(firstZero);
      left.setAttribute("x1",xl.toFixed(2)); left.setAttribute("x2",xl.toFixed(2));
      right.setAttribute("x1",xr.toFixed(2)); right.setAttribute("x2",xr.toFixed(2));

      tpOut.textContent=tp.toFixed(0)+" ns";
      zeroOut.textContent=firstZero.toFixed(1)+" MHz";
      fwhmOut.textContent=powerFwhm.toFixed(1)+" MHz";
      nu1Out.textContent=piNu1.toFixed(1)+" MHz";

      if(tp<=20){
        explanation.textContent="This is a very short rectangular pulse: fast and spectrally broad. It can excite a wide range of offsets but sacrifices selectivity.";
      }else if(tp<=100){
        explanation.textContent="This pulse occupies an intermediate regime: tens of MHz of spectral width, with a useful compromise between speed and selectivity.";
      }else{
        explanation.textContent="The long pulse is spectrally narrow and selective, but the spin system spends more time under the pulse, so relaxation and B₁ inhomogeneity have more opportunity to matter.";
      }
    }

    tpInput.addEventListener("input",update);
    document.querySelectorAll("[data-pulse-duration]").forEach(button=>{
      button.addEventListener("click",()=>{
        tpInput.value=button.dataset.pulseDuration;
        update();
      });
    });

    update();
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",initPulseBandwidth);
  }else{
    initPulseBandwidth();
  }
})();