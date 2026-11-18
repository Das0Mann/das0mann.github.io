/* Isotropic rotational diffusion and independent Lipari-Szabo-type internal motion.
   Time and correlation times are in ns. This is an analytic teaching model,
   not a molecular dynamics inference routine. */
(function(root,factory) {
  "use strict";
  const api=factory();
  if(typeof module==="object" && module.exports) module.exports=api;
  if(root) root.LectureRotationModel=api;
})(typeof window!=="undefined"?window:null,function(){
  "use strict";
  const rankCorrelation=(rank, t, tau2)=>{
    if(!(tau2>0) || !(t>=0) || !(rank>=1)) throw new RangeError("invalid rotation parameters");
    return Math.exp(-rank*(rank+1)*t/(6*tau2));
  };
  const localRank2=(t,tau2,S2,tauE)=>{
    if(!(S2>=0 && S2<=1 && tauE>0)) throw new RangeError("invalid internal motion");
    return rankCorrelation(2,t,tau2)*(S2+(1-S2)*Math.exp(-t/tauE));
  };
  const tauFast=(tau2,tauE)=>tau2*tauE/(tau2+tauE);
  // Stokes-Einstein-Debye sphere: D_r=3 D_t/(4R^2), tau2=1/(6D_r).
  const sphereTau2=(Dt,R)=>2*R*R/(9*Dt);
  return Object.freeze({rankCorrelation,localRank2,tauFast,sphereTau2});
});
