(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const muBOverH_MHzPerMt = 13.99624555;

  function makePath(points) {
    return points.map((p, i) =>
      (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2)
    ).join(" ");
  }

  function signed(x, digits) {
    const s = x < 0 ? "−" : "";
    return s + Math.abs(x).toFixed(digits);
  }

  function initRadicalLevels() {
    const bInput = $("rp-level-field");
    const jInput = $("rp-level-j");
    const dgInput = $("rp-level-dg");
    const vInput = $("rp-level-v");
    if (!bInput || !jInput || !dgInput || !vInput) return;

    const bOut = $("rp-level-field-out");
    const jOut = $("rp-level-j-out");
    const dgOut = $("rp-level-dg-out");
    const vOut = $("rp-level-v-out");
    const detuningOut = $("rp-level-detuning");
    const gapOut = $("rp-level-gap");
    const sCharOut = $("rp-level-schar");
    const crossingOut = $("rp-level-crossing");
    const explanation = $("rp-level-explanation");

    const dSPath = $("rp-diabatic-s");
    const dTPath = $("rp-diabatic-t");
    const lowPath = $("rp-adiabatic-low");
    const highPath = $("rp-adiabatic-high");
    const markerLine = $("rp-level-marker-line");
    const markerLow = $("rp-level-marker-low");
    const markerHigh = $("rp-level-marker-high");

    const x0 = 58, x1 = 530, yTop = 34, yBottom = 270;
    const bMax = 1000;
    const xMap = (b) => x0 + (x1 - x0) * b / bMax;

    function deltaAt(b, j, dg) {
      return j + muBOverH_MHzPerMt * dg * b;
    }

    function update() {
      const b = parseFloat(bInput.value);
      const j = parseFloat(jInput.value);
      const dg = parseFloat(dgInput.value);
      const v = parseFloat(vInput.value);

      const delta = deltaAt(b, j, dg);
      const gap = Math.sqrt(delta*delta + 4*v*v);
      const sChar = gap < 1e-12 ? 0.5 : 0.5 * (1 + delta / gap);
      const crossing = dg > 1e-12 ? -j / (muBOverH_MHzPerMt * dg) : NaN;

      bOut.textContent = b.toFixed(0) + " mT";
      jOut.textContent = signed(j, 1) + " MHz";
      dgOut.textContent = dg.toFixed(4);
      vOut.textContent = v.toFixed(1) + " MHz";
      detuningOut.textContent = signed(delta, 1) + " MHz";
      gapOut.textContent = gap.toFixed(1) + " MHz";
      sCharOut.textContent = (100 * sChar).toFixed(1) + "%";
      crossingOut.textContent =
        Number.isFinite(crossing) && crossing >= 0 && crossing <= bMax
          ? crossing.toFixed(0) + " mT"
          : "outside range";

      const curves = {ds:[], dt:[], lo:[], hi:[]};
      let maxAbs = Math.max(5, Math.abs(v));
      const n = 320;
      for (let i=0; i<=n; i++) {
        const bb = bMax * i / n;
        const d = deltaAt(bb, j, dg);
        const g = Math.sqrt(d*d + 4*v*v);
        const ds = -d/2;
        const dt = d/2;
        const lo = -g/2;
        const hi = g/2;
        maxAbs = Math.max(maxAbs, Math.abs(ds), Math.abs(dt), Math.abs(lo), Math.abs(hi));
        curves.ds.push([bb,ds]);
        curves.dt.push([bb,dt]);
        curves.lo.push([bb,lo]);
        curves.hi.push([bb,hi]);
      }
      maxAbs *= 1.08;
      const yMap = (e) => yBottom - (yBottom-yTop) * (e + maxAbs) / (2*maxAbs);
      const convert = (arr) => arr.map(([bb,e]) => [xMap(bb), yMap(e)]);

      dSPath.setAttribute("d", makePath(convert(curves.ds)));
      dTPath.setAttribute("d", makePath(convert(curves.dt)));
      lowPath.setAttribute("d", makePath(convert(curves.lo)));
      highPath.setAttribute("d", makePath(convert(curves.hi)));

      const currentX = xMap(b);
      markerLine.setAttribute("x1", currentX.toFixed(2));
      markerLine.setAttribute("x2", currentX.toFixed(2));
      markerLow.setAttribute("cx", currentX.toFixed(2));
      markerLow.setAttribute("cy", yMap(-gap/2).toFixed(2));
      markerHigh.setAttribute("cx", currentX.toFixed(2));
      markerHigh.setAttribute("cy", yMap(gap/2).toFixed(2));

      if (explanation) {
        if (Math.abs(delta) <= Math.max(1, 2*v)) {
          explanation.textContent = "Exchange and the field-dependent Δg contribution nearly cancel. The diabatic S/T characters approach resonance, so the mixing matrix element produces strong avoided-crossing hybridization.";
        } else if (Math.abs(j) > Math.abs(muBOverH_MHzPerMt * dg * b) * 2) {
          explanation.textContent = "Exchange dominates the S–T detuning at this field. The eigenstates retain mostly unmixed singlet or triplet character.";
        } else if (dg > 0.008 && b > 300) {
          explanation.textContent = "The Δg Zeeman difference dominates the detuning here. Increasing field now separates the diabatic S/T energies rather than improving mixing.";
        } else {
          explanation.textContent = "The current detuning is larger than the mixing matrix element, so the adiabatic eigenstates are only weakly hybridized.";
        }
      }
    }

    [bInput,jInput,dgInput,vInput].forEach((el)=>el.addEventListener("input",update));

    document.querySelectorAll("[data-rp-level]").forEach((button)=>{
      button.addEventListener("click",()=>{
        const mode=button.dataset.rpLevel;
        if(mode==="resonant"){
          bInput.value="100"; jInput.value="-14"; dgInput.value="0.0100"; vInput.value="3";
        }else if(mode==="exchange"){
          bInput.value="100"; jInput.value="40"; dgInput.value="0.0010"; vInput.value="3";
        }else{
          bInput.value="500"; jInput.value="0"; dgInput.value="0.0150"; vInput.value="3";
        }
        update();
      });
    });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRadicalLevels);
  } else {
    initRadicalLevels();
  }
})();