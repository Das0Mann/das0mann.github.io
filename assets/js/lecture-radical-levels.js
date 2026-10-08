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
    const dgSplitOut = $("rp-level-dg-split");
    const mixingOut = $("rp-level-mixing");
    const gapOut = $("rp-level-gap");
    const mixFracOut = $("rp-level-mixfrac");
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

    function valuesAt(b, j, dg, v0) {
      const dgSplit = muBOverH_MHzPerMt * dg * b;
      const mixing = v0 + 0.5 * dgSplit;
      const gap = Math.sqrt(j*j + 4*mixing*mixing);
      return {dgSplit, mixing, gap};
    }

    function update() {
      const b = parseFloat(bInput.value);
      const j = parseFloat(jInput.value);
      const dg = parseFloat(dgInput.value);
      const v0 = parseFloat(vInput.value);

      const current = valuesAt(b, j, dg, v0);
      const mixFrac = current.gap < 1e-12 ? 0 : 4*current.mixing*current.mixing/(current.gap*current.gap);

      bOut.textContent = b.toFixed(0) + " mT";
      jOut.textContent = signed(j, 1) + " MHz";
      dgOut.textContent = signed(dg, 4);
      vOut.textContent = v0.toFixed(1) + " MHz";
      dgSplitOut.textContent = signed(current.dgSplit, 1) + " MHz";
      mixingOut.textContent = signed(current.mixing, 1) + " MHz";
      gapOut.textContent = current.gap.toFixed(1) + " MHz";
      mixFracOut.textContent = (100 * mixFrac).toFixed(1) + "%";

      const curves = {ds:[], dt:[], lo:[], hi:[]};
      let maxAbs = Math.max(5, Math.abs(j)/2, Math.abs(v0));
      const n = 320;
      for (let i=0; i<=n; i++) {
        const bb = bMax * i / n;
        const vals = valuesAt(bb, j, dg, v0);
        const ds = -j/2;
        const dt = j/2;
        const lo = -vals.gap/2;
        const hi = vals.gap/2;
        maxAbs = Math.max(maxAbs, Math.abs(lo), Math.abs(hi));
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
      markerLow.setAttribute("cy", yMap(-current.gap/2).toFixed(2));
      markerHigh.setAttribute("cx", currentX.toFixed(2));
      markerHigh.setAttribute("cy", yMap(current.gap/2).toFixed(2));

      if (explanation) {
        if (Math.abs(current.mixing) < 0.05 && Math.abs(j) > 0.5) {
          explanation.textContent = "The signed field-dependent contribution almost cancels the projected field-independent mixing. The off-diagonal channel approaches zero, so the eigenstates approach unmixed S and T0 states in this reduced model.";
        } else if (mixFrac > 0.75) {
          explanation.textContent = "Magnetic inequivalence is strong compared with the exchange gap, so the adiabatic eigenstates are strongly hybridized mixtures of singlet and T0 character.";
        } else if (Math.abs(j) > 4*Math.abs(current.mixing)) {
          explanation.textContent = "Exchange dominates the S–T energy gap. The off-diagonal mixing channel is too weak to hybridize the states strongly.";
        } else if (Math.abs(0.5*current.dgSplit) > 2*Math.abs(v0)) {
          explanation.textContent = "The field-dependent Δg contribution dominates the projected off-diagonal element. Depending on its sign it can enhance or cancel the field-independent contribution; a stronger field does not universally imply stronger mixing.";
        } else {
          explanation.textContent = "Field-independent and Δg-driven mixing are comparable to the exchange gap, so the eigenstates acquire appreciable mixed character.";
        }
      }
    }

    [bInput,jInput,dgInput,vInput].forEach((el)=>el.addEventListener("input",update));

    document.querySelectorAll("[data-rp-level]").forEach((button)=>{
      button.addEventListener("click",()=>{
        const mode=button.dataset.rpLevel;
        if(mode==="hyperfine"){
          bInput.value="10"; jInput.value="6"; dgInput.value="0.0010"; vInput.value="3";
        }else if(mode==="exchange"){
          bInput.value="100"; jInput.value="40"; dgInput.value="0.0010"; vInput.value="2";
        }else if(mode==="cancellation"){
          bInput.value="100"; jInput.value="10"; dgInput.value="-0.0050"; vInput.value="3.5";
        }else{
          bInput.value="700"; jInput.value="10"; dgInput.value="0.0150"; vInput.value="0.5";
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