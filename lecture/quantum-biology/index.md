---
layout: page
title: Quantum Biology Case Studies
excerpt: "Use the theory to dissect real biological mechanisms"
permalink: /lecture/quantum-biology/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 10</span>
  <h2>Quantum biology is a mechanism question, not a label</h2>
  <p>Every chemical bond is quantum mechanical. That alone does not make a biological process an interesting example of quantum biology. The useful question is whether a specifically quantum degree of freedom—coherence, tunnelling, spin correlation or non-classical state structure—survives long enough and couples strongly enough to change a biological observable.</p>
</header>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">A plausibility ladder</p><h2>Ask six questions before invoking a quantum mechanism</h2></div>
  </div>

  <div class="observable-list">
    <div><strong>1. State preparation</strong><span>What physical process prepares the relevant quantum state?</span></div>
    <div><strong>2. Interaction scale</strong><span>Which Hamiltonian terms drive the proposed dynamics, and on what timescale?</span></div>
    <div><strong>3. Lifetime</strong><span>Does the intermediate survive long enough for those dynamics to occur?</span></div>
    <div><strong>4. Decoherence / relaxation</strong><span>Does environmental coupling erase the relevant state before it matters?</span></div>
    <div><strong>5. Readout</strong><span>How is the quantum state converted into a chemical, spectroscopic or physiological observable?</span></div>
    <div><strong>6. Discriminating experiment</strong><span>What measurement would distinguish this mechanism from a classical alternative?</span></div>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Cryptochrome</p><h2>A radical pair can turn a magnetic field into chemistry</h2></div>
  </div>

  <p>Flavin-containing cryptochromes can form photoinduced radical pairs through electron transfer. A minimal mechanistic chain is</p>

  <div class="lecture-equation">
  \[
  \text{photoexcitation}
  \rightarrow
  \text{electron transfer}
  \rightarrow
  \text{spin-correlated radical pair}
  \rightarrow
  \text{S--T dynamics}
  \rightarrow
  \text{spin-selective chemistry}.
  \]
  </div>

  <p>The magnetic field does not need to compete energetically with \(k_BT\). It changes spin precession and state mixing in a non-equilibrium reaction intermediate; the chemical reaction then provides the readout.</p>

  <p>To connect that microscopic picture to a biological compass, however, the chain has to continue through protein structure, orientation, downstream chemistry and ultimately physiology. A successful spin calculation is therefore necessary for some mechanistic questions, but never sufficient by itself for the biological claim.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Timescales</p><h2>Does the radical pair live long enough for spin dynamics to matter?</h2></div>
  </div>

  <div class="interactive-card" id="qbio-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Sanity check</span><h3>Lifetime, mixing and coherence</h3></div>
      <span class="interactive-model-note">timescale diagnostic only</span>
    </div>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>shorten the radical-pair lifetime, lengthen \(T_2\), or change the characteristic mixing frequency. The goal is not to predict magnetosensitivity, but to see whether the basic timescales even overlap.</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="qbio-loglife"><span class="control-name">Radical-pair lifetime \(\tau_\mathrm{RP}\)</span><output id="qbio-life-out">1.00 μs</output></label>
        <input id="qbio-loglife" type="range" min="-2" max="2" step="0.01" value="0">

        <label for="qbio-logt2"><span class="control-name">Coherence time \(T_2\)</span><output id="qbio-t2-out">2.00 μs</output></label>
        <input id="qbio-logt2" type="range" min="-2" max="2" step="0.01" value="0.3010">

        <label for="qbio-logf"><span class="control-name">Mixing frequency \(f_\mathrm{mix}\)</span><output id="qbio-f-out">2.00 MHz</output></label>
        <input id="qbio-logf" type="range" min="-2" max="2" step="0.01" value="0.3010">

        <div class="demo-presets">
          <button type="button" data-qbio-mode="short">too short</button>
          <button type="button" data-qbio-mode="balanced">overlap</button>
          <button type="button" data-qbio-mode="dephased">strong dephasing</button>
        </div>

        <div class="interactive-readout">
          <span>Mixing cycles during lifetime <strong id="qbio-cycles-out">2.00</strong></span>
          <span>Coherence at \(\tau_\mathrm{RP}\) <strong id="qbio-coherence-out">60.7%</strong></span>
          <span>Coherent-cycle estimate <strong id="qbio-coherent-cycles-out">2.00</strong></span>
        </div>

        <p id="qbio-explanation" class="demo-explanation">The lifetime permits several mixing cycles and a substantial coherence envelope remains at the reaction time.</p>
      </div>

      <div class="plot-wrap">
        <svg id="qbio-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="Coherence envelope relative to radical-pair lifetime">
          <line x1="58" y1="248" x2="530" y2="248" class="plot-axis"/>
          <line x1="58" y1="35" x2="58" y2="248" class="plot-axis"/>
          <line x1="58" y1="141.5" x2="530" y2="141.5" class="plot-grid"/>
          <text x="482" y="278" class="svg-caption">time / μs</text>
          <text x="12" y="38" class="svg-caption">coherence</text>
          <path id="qbio-envelope-path" class="population-line lower-line" fill="none" d=""/>
          <line id="qbio-life-line" x1="294" y1="35" x2="294" y2="248" class="plot-marker"/>
          <circle id="qbio-life-marker" cx="294" cy="115" r="5" class="plot-point upper-point"/>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">This is only a timescale filter. Real radical-pair magnetosensitivity depends on the full Hamiltonian, initial state, reaction model, orientation, relaxation pathways and field-dependent dynamics—not just three scalar timescales.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Weak RF fields</p><h2>A weak field can matter through resonance, not heating</h2></div>
  </div>

  <p>An oscillating magnetic field can perturb a radical pair when its frequency overlaps spin transitions and when the pair remains coherent for long enough to respond. The important comparison is therefore between field-induced transition rates, intrinsic spin interactions, relaxation and reaction times—not simply RF photon energy versus thermal energy.</p>

  <p>Orientation and anisotropy also matter. A field that is resonant for one molecular orientation may be off-resonant for another, and molecular motion can either average or broaden that response.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Photo-CIDNP</p><h2>Radical-pair chemistry can create nuclear hyperpolarization</h2></div>
  </div>

  <p>Photochemically induced dynamic nuclear polarization is another radical-pair readout. Spin-selective reaction pathways correlate electron-spin evolution with nuclear-spin states, creating nuclear populations far from thermal equilibrium.</p>

  <p>The resulting NMR enhancement can therefore report on electron transfer, radical-pair dynamics and molecular geometry. In biomimetic flavin–tryptophan systems, distance and conformational dynamics become directly relevant because they change both electron-transfer kinetics and spin interactions.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">Hyperpolarization</p><h2>The useful observable may be an amplified spin population</h2></div>
  </div>

  <p>Hyperpolarization is attractive because it converts spin-selective photochemistry into a large magnetic-resonance signal. The theoretical problem becomes multiscale: prepare the electronic state, model electron transfer and radical-pair dynamics, determine how polarization is transferred, and include relaxation of the observer spin.</p>

  <aside class="teacher-note">
    <strong>The design question is therefore not just “can I create polarization?”</strong>
    <span>You need sufficient yield, transfer efficiency and lifetime while suppressing the relaxation channels that erase the polarization before detection.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">07</span>
    <div><p class="section-eyebrow">Beyond cryptochrome</p><h2>Spin chemistry can influence other reactive networks too</h2></div>
  </div>

  <p>Radical-pair ideas are not restricted to magnetoreception. Any reaction network containing spin-correlated radical intermediates, competing spin-selective pathways and suitable lifetimes is a candidate for magnetic-field effects.</p>

  <p>The same modelling discipline applies: identify the radical state, quantify the spin Hamiltonian, include relaxation and reaction kinetics, and calculate the actual observable rather than inferring an effect from one interaction parameter alone.</p>
</section>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">08</span>
    <div><p class="section-eyebrow">Selected reading</p><h2>Case studies from my work</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>Quantum biology overview</span><h3>Quantum phenomena in biological systems</h3><p>A broad entry point into where specifically quantum mechanisms are discussed in biology.</p><a href="https://doi.org/10.3389/frqst.2024.1466906" target="_blank" rel="noopener">Front. Quantum Sci. Technol. (2024) →</a></article>
    <article><span>Weak RF fields</span><h3>Weak Radiofrequency Field Effects on Biological Systems Mediated through the Radical Pair Mechanism</h3><p>A detailed review of radical-pair physics, RF perturbations and biological magnetic-field effects.</p><a href="https://doi.org/10.1021/acs.chemrev.5c00178" target="_blank" rel="noopener">Chemical Reviews (2025) →</a></article>
    <article><span>Cryptochrome organization</span><h3>European Robin Cryptochrome-4a Associates with Lipid Bilayers in an Ordered Manner, Fulfilling a Molecular-Level Condition for Magnetoreception</h3><p>Links molecular orientation and membrane association to a physical requirement of directional magnetosensitivity.</p><a href="https://doi.org/10.1021/acschembio.4c00576" target="_blank" rel="noopener">ACS Chem. Biol. (2025) →</a></article>
    <article><span>Relaxation</span><h3>The Effect of Spin Relaxation on Magnetic Compass Sensitivity in ErCry4a</h3><p>How environmental spin relaxation competes with radical-pair compass sensitivity.</p><a href="https://doi.org/10.1002/cphc.202400129" target="_blank" rel="noopener">ChemPhysChem (2024) →</a></article>
    <article><span>Photo-CIDNP</span><h3>Distance-Dependence of Photo-CIDNP in Biomimetic Tryptophan–Flavin Diads</h3><p>Distance-dependent spin chemistry and nuclear hyperpolarization in a controlled biomimetic system.</p><a href="https://doi.org/10.1002/anie.202510116" target="_blank" rel="noopener">Angew. Chem. Int. Ed. (2025) →</a></article>
    <article><span>Hyperpolarization</span><h3>Nuclear hyperpolarization in electron-transfer proteins</h3><p>Light-induced nuclear hyperpolarization as a probe of electron-transfer proteins.</p><a href="https://doi.org/10.1016/j.jmro.2024.100168" target="_blank" rel="noopener">J. Magn. Reson. Open (2024) →</a></article>
    <article><span>Other radical chemistry</span><h3>Spin Relaxation Does Not Preclude Magnetic Field Effects on Lipid Autoxidation</h3><p>A case study beyond cryptochrome showing how relaxation and magnetic-field effects can coexist in radical chemistry.</p><a href="https://doi.org/10.1021/acscentsci.5c01229" target="_blank" rel="noopener">ACS Cent. Sci. (2026) →</a></article>
  </div>
</section>

{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-qbio.js" defer></script>
