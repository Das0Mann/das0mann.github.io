(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  function sincAbsCycles(cycles) {
    if (Math.abs(cycles) < 1e-12) return 1;
    const x = Math.PI * cycles;
    return Math.abs(Math.sin(x) / x);
  }

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function initSecularDemo() {
    const dnuInput=$("secular-dnu");
    const timeInput=$("secular-time");
    if(!dnuInput||!timeInput) return;

    const dnuOut=$("secular-dnu-out");
    const timeOut=$("secular-time-out");
    const cyclesOut=$("secular-cycles");
    const residualOut=$("secular-residual");
    const regimeOut=$("secular-regime");
    const explanation=$("secular-explanation");
    const path=$("secular-path");
    const markerLine=$("secular-marker-line");
    const marker=$("secular-marker");

    const x0=58,x1=530,yTop=34,yBottom=270,dnuMax=1.5;
    const xMap=(x)=>x0+(x1-x0)*x/dnuMax;
    const yMap=(y)=>yBottom-(yBottom-yTop)*y;

    function update(){
      const dnu=parseFloat(dnuInput.value);
      const T=parseFloat(timeInput.value);
      const cycles=dnu*T;
      const residual=sincAbsCycles(cycles);

      const pts=[];
      const n=400;
      for(let i=0;i<=n;i++){
        const x=dnuMax*i/n;
        pts.push([xMap(x),yMap(sincAbsCycles(x*T))]);
      }
      path.setAttribute("d",makePath(pts));

      const mx=xMap(dnu), my=yMap(residual);
      markerLine.setAttribute("x1",mx.toFixed(2));
      markerLine.setAttribute("x2",mx.toFixed(2));
      marker.setAttribute("cx",mx.toFixed(2));
      marker.setAttribute("cy",my.toFixed(2));

      dnuOut.textContent=dnu.toFixed(2)+" MHz";
      timeOut.textContent=T.toFixed(2)+" μs";
      cyclesOut.textContent=cycles.toFixed(2);
      residualOut.textContent=residual.toFixed(3);

      if(residual>0.6){
        regimeOut.textContent="non-secular terms persist";
        explanation.textContent="The relative phase hardly averages away over this window. Near-degenerate transitions can therefore remain dynamically coupled, so blindly secularizing them is risky.";
      }else if(residual>0.2){
        regimeOut.textContent="partial averaging";
        explanation.textContent="The cross term is reduced but not negligible. This is the regime where a secular approximation deserves an explicit numerical check rather than an automatic assumption.";
      }else{
        regimeOut.textContent="strong averaging";
        explanation.textContent="The cross term completes enough relative phase evolution that its coarse-grained average is small. This is the intuitive regime in which secularization becomes more defensible.";
      }
    }

    [dnuInput,timeInput].forEach(el=>el.addEventListener("input",update));
    document.querySelectorAll("[data-secular]").forEach(button=>{
      button.addEventListener("click",()=>{
        const mode=button.dataset.secular;
        if(mode==="degenerate"){dnuInput.value="0.05";timeInput.value="1";}
        else if(mode==="border"){dnuInput.value="0.30";timeInput.value="1";}
        else{dnuInput.value="1.2";timeInput.value="1";}
        update();
      });
    });

    update();
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",initSecularDemo);
  }else{
    initSecularDemo();
  }
})();