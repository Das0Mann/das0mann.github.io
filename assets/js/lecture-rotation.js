(() => {
  "use strict";
  const physics=window.LectureRotationModel;
  if(!physics) return;
  const get=(id)=>document.getElementById(id);
  function render() {
    const root=get("rotation-demo");
    if(!root) return;
    const tauInput=get("rotation-tau2"),orderInput=get("rotation-order"),internalInput=get("rotation-taue");
    const tauOut=get("rotation-tau2-out"),orderOut=get("rotation-order-out"),internalOut=get("rotation-taue-out");
    const tau1Out=get("rotation-tau1-out"),fastOut=get("rotation-fast-out"),oneOut=get("rotation-c1ns-out");
    const explanation=get("rotation-explanation");
    const curves=[
      ["rotation-rank1-path",(t,tau)=>physics.rankCorrelation(1,t,tau)],
      ["rotation-global-path",(t,tau)=>physics.rankCorrelation(2,t,tau)],
      ["rotation-local-path",(t,tau,S2,tauE)=>physics.localRank2(t,tau,S2,tauE)]
    ];
    function pathFor(func,tau,S2,tauE) {
      const parts=[];
      for(let i=0;i<=250;i++) {
        const t=10*i/250;
        const x=58+472*t/10;
        const y=248-213*func(t,tau,S2,tauE);
        parts.push((i===0?"M":"L")+x.toFixed(2)+" "+y.toFixed(2));
      }
      return parts.join(" ");
    }
    function update(){
      const tau=Number(tauInput.value),S2=Number(orderInput.value),tauE=Number(internalInput.value);
      if(![tau,S2,tauE].every(Number.isFinite))return;
      tauOut.textContent=tau.toFixed(2)+" ns";
      orderOut.textContent=S2.toFixed(2);
      internalOut.textContent=tauE.toFixed(2)+" ns";
      tau1Out.textContent=(3*tau).toFixed(2)+" ns";
      fastOut.textContent=physics.tauFast(tau,tauE).toFixed(2)+" ns";
      oneOut.textContent=physics.localRank2(1,tau,S2,tauE).toFixed(3);
      for(const [id,fn] of curves)get(id).setAttribute("d",pathFor(fn,tau,S2,tauE));
      if(S2>=0.99)explanation.textContent="The selected axis is effectively rigid in the molecular frame: its laboratory rank-two correlation follows global tumbling, while rank one relaxes three times more slowly.";
      else if(S2<=0.05)explanation.textContent="Rapid internal motion dominates the measured local rank-two signal. Global tumbling remains unchanged, so a short local decay does not by itself prove rapid whole-molecule rotation.";
      else explanation.textContent="The local axis contains global and internal motion. The order parameter controls their relative weights; the global rank-two time stays fixed until you change its slider.";
    }
    [tauInput,orderInput,internalInput].forEach(x=>x.addEventListener("input",update));
    root.querySelectorAll("[data-rotation-mode]").forEach(button=>{
      button.addEventListener("click",()=>{
        if(button.dataset.rotationMode==="rigid"){tauInput.value="0.6";orderInput.value="1";internalInput.value="0.15";}
        else if(button.dataset.rotationMode==="flexible"){tauInput.value="0.6";orderInput.value="0.2";internalInput.value="0.1";}
        else {tauInput.value="3";orderInput.value="0.75";internalInput.value="0.15";}
        update();
      });
    });
    update();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",render,{once:true});
  else render();
})();
