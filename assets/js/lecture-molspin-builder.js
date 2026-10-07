(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  function initMolSpinBuilder() {
    const eInput = $("builder-electrons");
    const nInput = $("builder-nuclei");
    if (!eInput || !nInput) return;

    const controls = {
      zeeman: $("builder-zeeman"),
      hyperfine: $("builder-hyperfine"),
      exchange: $("builder-exchange"),
      drive: $("builder-drive"),
      relax: $("builder-relax"),
      reaction: $("builder-reaction")
    };

    const eOut = $("builder-electrons-out");
    const nOut = $("builder-nuclei-out");
    const dimOut = $("builder-dim");
    const rhoOut = $("builder-rho-dim");
    const classOut = $("builder-class");
    const equation = $("builder-equation");
    const explanation = $("builder-explanation");
    const checkTitle = $("builder-check-title");
    const hNote = $("builder-hamiltonian-note");
    const nonunitaryNote = $("builder-nonunitary-note");

    function update() {
      const ne = parseInt(eInput.value, 10);
      const nn = parseInt(nInput.value, 10);
      const D = Math.pow(2, ne + nn);
      const hTerms = [];
      const nonunitary = [];
      const warnings = [];

      if (controls.zeeman.checked) hTerms.push("H_Z");
      if (controls.hyperfine.checked) {
        if (nn > 0) hTerms.push("H_hf");
        else warnings.push("Hyperfine coupling needs at least one nuclear spin.");
      }
      if (controls.exchange.checked) {
        if (ne >= 2) hTerms.push("H_ex");
        else warnings.push("Electron exchange needs at least two electron spins.");
      }
      if (controls.drive.checked) hTerms.push("H_drive(t)");
      if (controls.relax.checked) nonunitary.push("R_relax[ρ]");
      if (controls.reaction.checked) {
        if (ne >= 2) nonunitary.push("K_reaction[ρ]");
        else warnings.push("A singlet/triplet-selective radical-pair reaction needs at least two electron spins.");
      }

      const hText = hTerms.length ? hTerms.join(" + ") : "0";
      const rhs = ["-(i/ħ)[H,ρ]"].concat(nonunitary).join(" + ");

      eOut.textContent = String(ne);
      nOut.textContent = String(nn);
      dimOut.textContent = D.toLocaleString("en-US");
      rhoOut.textContent = (D * D).toLocaleString("en-US");
      equation.textContent = "H = " + hText + "\n" + "dρ/dt = " + rhs;

      let cls = "closed coherent dynamics";
      if (controls.drive.checked) cls = "time-dependent coherent dynamics";
      if (nonunitary.length) cls = controls.drive.checked ? "driven open/reactive dynamics" : "open/reactive spin dynamics";
      classOut.textContent = cls;

      if (warnings.length) {
        checkTitle.textContent = "The model contains a physical inconsistency";
        explanation.textContent = warnings.join(" ");
      } else {
        checkTitle.textContent = "The ingredients are physically consistent";
        if (nonunitary.length) {
          explanation.textContent = "Hamiltonian interactions generate coherent evolution; relaxation and reaction terms change the reduced state non-unitarily and therefore sit outside H.";
        } else if (controls.drive.checked) {
          explanation.textContent = "All selected terms are Hamiltonian terms, but the drive makes H explicitly time dependent, so the numerical task must support time-dependent propagation.";
        } else {
          explanation.textContent = "All selected ingredients are Hamiltonian terms. A unitary propagator is sufficient until relaxation, reaction or other irreversible processes are introduced.";
        }
      }

      hNote.textContent = hTerms.length
        ? hTerms.join(", ") + " contribute to coherent spin evolution."
        : "No Hamiltonian interaction is selected; the spin state would not undergo coherent evolution.";

      nonunitaryNote.textContent = nonunitary.length
        ? nonunitary.join(", ") + " act outside the Hamiltonian and change populations/coherences irreversibly."
        : "No relaxation or kinetic sink is selected, so the simplified model is closed.";
    }

    [eInput, nInput].forEach((el) => el.addEventListener("input", update));
    Object.values(controls).forEach((el) => el.addEventListener("change", update));
    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMolSpinBuilder);
  } else {
    initMolSpinBuilder();
  }
})();