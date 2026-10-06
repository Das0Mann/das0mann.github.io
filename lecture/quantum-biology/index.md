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
<section class="module-learning" aria-label="Learning goals">
  <div class="module-learning-head">
    <span>After this module</span>
    <strong>You should be able to…</strong>
  </div>
  <div class="module-learning-grid">
    <div><span>01</span><p>Separate genuinely mechanism-specific quantum effects from the trivial statement that chemistry is quantum mechanical.</p></div>
    <div><span>02</span><p>Test a proposed mechanism against preparation, interaction, lifetime, decoherence, readout and experiment.</p></div>
    <div><span>03</span><p>Connect microscopic radical-pair or coherence dynamics to an actual biological observable without skipping scales.</p></div>
  </div>
</section>

{% include lecture-connections.html %}


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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>The field does not supply chemical energy—it changes quantum-state evolution before chemistry reads it out</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Spin-correlated radical pair</strong>
        <p><b>What it is:</b> Two radicals created in a chemically defined total-spin state, often singlet or triplet, because they originate from a common precursor.</p>
        <p><b>What it changes:</b> Their subsequent coherent singlet–triplet evolution can alter which spin-selective reaction channel is accessible.</p>
        <p><b>What you observe:</b> Field-dependent product yields, transient EPR signals or reaction-yield detected resonance.</p>
      </article>
      <article>
        <strong>Magnetic sensitivity</strong>
        <p><b>What it is:</b> A change in spin dynamics caused by Zeeman, hyperfine and anisotropic interactions, not by appreciable thermal energy deposition from the magnetic field.</p>
        <p><b>What it changes:</b> It modifies the time spent in singlet versus triplet character before recombination or escape.</p>
        <p><b>What you observe:</b> Small but systematic changes in chemical yield as field strength, orientation or RF frequency is varied.</p>
      </article>
    </div>
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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Lifetime and coherence answer different questions</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Radical-pair lifetime \(\tau_\mathrm{RP}\)</strong>
        <p><b>What it is:</b> The characteristic time before recombination, escape or another chemical step removes the radical pair.</p>
        <p><b>What it changes:</b> It sets the total window available for spin evolution and magnetic-field sensitivity.</p>
        <p><b>What you observe:</b> Transient decay kinetics and the time over which radical-pair signals remain detectable.</p>
      </article>
      <article>
        <strong>Coherence time \(T_2\)</strong>
        <p><b>What it is:</b> The timescale over which a well-defined relative phase between relevant spin states survives.</p>
        <p><b>What it changes:</b> It limits how long interference-based singlet–triplet evolution can remain coherent even if the radicals themselves still exist.</p>
        <p><b>What you observe:</b> Decay of coherent oscillations or echo-like spin observables.</p>
      </article>
      <article>
        <strong>Mixing timescale</strong>
        <p><b>What it is:</b> The characteristic period set by differences in hyperfine, Zeeman or other spin-Hamiltonian energies that convert one spin character into another.</p>
        <p><b>What it changes:</b> Magnetosensitivity requires enough time for appreciable mixing before chemistry or dephasing terminates it.</p>
        <p><b>What you observe:</b> Oscillation periods in calculated singlet/triplet populations and characteristic field-response times.</p>
      </article>
    </div>
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
          <path id="qbio-envelope-path" class="population-line lower-line" fill="none" d="M58.00 35.00 L59.57 35.71 L61.15 36.42 L62.72 37.12 L64.29 37.82 L65.87 38.52 L67.44 39.22 L69.01 39.91 L70.59 40.61 L72.16 41.30 L73.73 41.98 L75.31 42.67 L76.88 43.35 L78.45 44.03 L80.03 44.71 L81.60 45.39 L83.17 46.06 L84.75 46.74 L86.32 47.40 L87.89 48.07 L89.47 48.74 L91.04 49.40 L92.61 50.06 L94.19 50.72 L95.76 51.38 L97.33 52.03 L98.91 52.68 L100.48 53.33 L102.05 53.98 L103.63 54.63 L105.20 55.27 L106.77 55.91 L108.35 56.55 L109.92 57.19 L111.49 57.82 L113.07 58.46 L114.64 59.09 L116.21 59.72 L117.79 60.34 L119.36 60.97 L120.93 61.59 L122.51 62.21 L124.08 62.83 L125.65 63.44 L127.23 64.06 L128.80 64.67 L130.37 65.28 L131.95 65.89 L133.52 66.50 L135.09 67.10 L136.67 67.70 L138.24 68.30 L139.81 68.90 L141.39 69.50 L142.96 70.09 L144.53 70.68 L146.11 71.27 L147.68 71.86 L149.25 72.45 L150.83 73.03 L152.40 73.61 L153.97 74.19 L155.55 74.77 L157.12 75.35 L158.69 75.92 L160.27 76.50 L161.84 77.07 L163.41 77.63 L164.99 78.20 L166.56 78.77 L168.13 79.33 L169.71 79.89 L171.28 80.45 L172.85 81.01 L174.43 81.56 L176.00 82.12 L177.57 82.67 L179.15 83.22 L180.72 83.77 L182.29 84.32 L183.87 84.86 L185.44 85.40 L187.01 85.94 L188.59 86.48 L190.16 87.02 L191.73 87.56 L193.31 88.09 L194.88 88.62 L196.45 89.15 L198.03 89.68 L199.60 90.21 L201.17 90.73 L202.75 91.26 L204.32 91.78 L205.89 92.30 L207.47 92.82 L209.04 93.33 L210.61 93.85 L212.19 94.36 L213.76 94.87 L215.33 95.38 L216.91 95.89 L218.48 96.40 L220.05 96.90 L221.63 97.40 L223.20 97.91 L224.77 98.40 L226.35 98.90 L227.92 99.40 L229.49 99.89 L231.07 100.39 L232.64 100.88 L234.21 101.37 L235.79 101.85 L237.36 102.34 L238.93 102.83 L240.51 103.31 L242.08 103.79 L243.65 104.27 L245.23 104.75 L246.80 105.23 L248.37 105.70 L249.95 106.17 L251.52 106.65 L253.09 107.12 L254.67 107.59 L256.24 108.05 L257.81 108.52 L259.39 108.98 L260.96 109.45 L262.53 109.91 L264.11 110.37 L265.68 110.82 L267.25 111.28 L268.83 111.74 L270.40 112.19 L271.97 112.64 L273.55 113.09 L275.12 113.54 L276.69 113.99 L278.27 114.43 L279.84 114.88 L281.41 115.32 L282.99 115.76 L284.56 116.20 L286.13 116.64 L287.71 117.08 L289.28 117.51 L290.85 117.95 L292.43 118.38 L294.00 118.81 L295.57 119.24 L297.15 119.67 L298.72 120.10 L300.29 120.52 L301.87 120.95 L303.44 121.37 L305.01 121.79 L306.59 122.21 L308.16 122.63 L309.73 123.05 L311.31 123.46 L312.88 123.88 L314.45 124.29 L316.03 124.70 L317.60 125.11 L319.17 125.52 L320.75 125.93 L322.32 126.34 L323.89 126.74 L325.47 127.15 L327.04 127.55 L328.61 127.95 L330.19 128.35 L331.76 128.75 L333.33 129.14 L334.91 129.54 L336.48 129.93 L338.05 130.33 L339.63 130.72 L341.20 131.11 L342.77 131.50 L344.35 131.88 L345.92 132.27 L347.49 132.66 L349.07 133.04 L350.64 133.42 L352.21 133.80 L353.79 134.18 L355.36 134.56 L356.93 134.94 L358.51 135.32 L360.08 135.69 L361.65 136.07 L363.23 136.44 L364.80 136.81 L366.37 137.18 L367.95 137.55 L369.52 137.92 L371.09 138.28 L372.67 138.65 L374.24 139.01 L375.81 139.37 L377.39 139.74 L378.96 140.10 L380.53 140.45 L382.11 140.81 L383.68 141.17 L385.25 141.52 L386.83 141.88 L388.40 142.23 L389.97 142.58 L391.55 142.94 L393.12 143.28 L394.69 143.63 L396.27 143.98 L397.84 144.33 L399.41 144.67 L400.99 145.02 L402.56 145.36 L404.13 145.70 L405.71 146.04 L407.28 146.38 L408.85 146.72 L410.43 147.06 L412.00 147.39 L413.57 147.73 L415.15 148.06 L416.72 148.39 L418.29 148.72 L419.87 149.05 L421.44 149.38 L423.01 149.71 L424.59 150.04 L426.16 150.36 L427.73 150.69 L429.31 151.01 L430.88 151.34 L432.45 151.66 L434.03 151.98 L435.60 152.30 L437.17 152.62 L438.75 152.93 L440.32 153.25 L441.89 153.57 L443.47 153.88 L445.04 154.19 L446.61 154.51 L448.19 154.82 L449.76 155.13 L451.33 155.44 L452.91 155.74 L454.48 156.05 L456.05 156.36 L457.63 156.66 L459.20 156.97 L460.77 157.27 L462.35 157.57 L463.92 157.87 L465.49 158.17 L467.07 158.47 L468.64 158.77 L470.21 159.07 L471.79 159.36 L473.36 159.66 L474.93 159.95 L476.51 160.24 L478.08 160.54 L479.65 160.83 L481.23 161.12 L482.80 161.41 L484.37 161.69 L485.95 161.98 L487.52 162.27 L489.09 162.55 L490.67 162.84 L492.24 163.12 L493.81 163.40 L495.39 163.68 L496.96 163.97 L498.53 164.25 L500.11 164.52 L501.68 164.80 L503.25 165.08 L504.83 165.35 L506.40 165.63 L507.97 165.90 L509.55 166.18 L511.12 166.45 L512.69 166.72 L514.27 166.99 L515.84 167.26 L517.41 167.53 L518.99 167.80 L520.56 168.06 L522.13 168.33 L523.71 168.60 L525.28 168.86 L526.85 169.12 L528.43 169.39 L530.00 169.65"/>
          <line id="qbio-life-line" x1="294.00" y1="35" x2="294.00" y2="248" class="plot-marker"/>
          <circle id="qbio-life-marker" cx="294.00" cy="118.81" r="5" class="plot-point upper-point"/>
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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>A weak oscillating field becomes effective when frequency, lifetime and coherence line up</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>RF resonance</strong>
        <p><b>What it is:</b> An oscillating magnetic field drives transitions when its frequency matches an energy splitting of the spin system.</p>
        <p><b>What it changes:</b> Even a small field can accumulate a coherent rotation if the radical pair survives and remains coherent for long enough.</p>
        <p><b>What you observe:</b> Frequency-selective changes in reaction yield or spin polarization rather than bulk heating.</p>
      </article>
      <article>
        <strong>Field amplitude \(B_1\)</strong>
        <p><b>What it is:</b> The transverse oscillating magnetic-field strength that sets the driving/Rabi rate.</p>
        <p><b>What it changes:</b> It determines how quickly the spin state is rotated; if the lifetime is too short, a tiny \(B_1\) has no time to build a significant effect.</p>
        <p><b>What you observe:</b> Signal amplitude and power dependence of RF-induced perturbations.</p>
      </article>
    </div>
  </div>


  <p>An oscillating magnetic field can perturb a radical pair when its frequency overlaps spin transitions and when the pair remains coherent for long enough to respond. The important comparison is therefore between field-induced transition rates, intrinsic spin interactions, relaxation and reaction times—not simply RF photon energy versus thermal energy.</p>

  <p>Orientation and anisotropy also matter. A field that is resonant for one molecular orientation may be off-resonant for another, and molecular motion can either average or broaden that response.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Photo-CIDNP</p><h2>Radical-pair chemistry can create nuclear hyperpolarization</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Photo-CIDNP converts spin-selective radical-pair chemistry into non-thermal nuclear populations</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Nuclear hyperpolarization</strong>
        <p><b>What it is:</b> A nuclear-spin population difference larger than its thermal Boltzmann value.</p>
        <p><b>What it changes:</b> It amplifies NMR signals and stores information about spin-selective reaction pathways in the nuclear degrees of freedom.</p>
        <p><b>What you observe:</b> Enhanced, emissive or otherwise non-Boltzmann NMR resonances.</p>
      </article>
      <article>
        <strong>Spin sorting</strong>
        <p><b>What it is:</b> Different nuclear-spin states alter radical-pair spin evolution and therefore have different probabilities of recombination or escape.</p>
        <p><b>What it changes:</b> Chemical selection leaves products enriched in particular nuclear-spin projections.</p>
        <p><b>What you observe:</b> Nucleus- and site-specific photo-CIDNP enhancements that depend on hyperfine coupling and reaction kinetics.</p>
      </article>
    </div>
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
    <article><span>Hyperpolarization</span><h3>Nuclear hyperpolarization in electron-transfer proteins: Revealing unexpected light-induced ¹⁵N signals with field-cycling magic-angle spinning NMR</h3><p>Light-induced nuclear hyperpolarization as a probe of electron-transfer proteins.</p><a href="https://doi.org/10.1016/j.jmro.2024.100168" target="_blank" rel="noopener">J. Magn. Reson. Open (2024) →</a></article>
    <article><span>Other radical chemistry</span><h3>Spin Relaxation Does Not Preclude Magnetic Field Effects on Lipid Autoxidation</h3><p>A case study beyond cryptochrome showing how relaxation and magnetic-field effects can coexist in radical chemistry.</p><a href="https://doi.org/10.1021/acscentsci.5c01229" target="_blank" rel="noopener">ACS Cent. Sci. (2026) →</a></article>
  </div>
</section>


<section class="lecture-section external-reading">
  <div class="lecture-section-head">
    <span class="lecture-index literature-index">L</span>
    <div><p class="section-eyebrow">Key external literature</p><h2>Where to read next</h2></div>
  </div>
  <p class="external-reading-intro">These are deliberately selected from outside my own work: foundational papers or reviews that are especially useful for this topic.</p>
  <div class="lecture-reading-grid external-literature-grid">
    <article>
      <span>Field overview</span>
      <h3>Quantum biology</h3>
      <p>N. Lambert et al. · Nature Physics (2013). A broad critical review of candidate functional quantum effects in biological systems.</p>
      <a href="https://doi.org/10.1038/nphys2474" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Coherence in complex systems</span>
      <h3>Using coherence to enhance function in chemical and biophysical systems</h3>
      <p>G. D. Scholes et al. · Nature (2017). A careful review of what coherence can mean and do in noisy chemical and biological environments.</p>
      <a href="https://doi.org/10.1038/nature21425" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Magnetoreception</span>
      <h3>The Radical-Pair Mechanism of Magnetoreception</h3>
      <p>P. J. Hore and H. Mouritsen · Annual Review of Biophysics (2016). A key mechanistic reference for cryptochrome-based radical-pair magnetoreception.</p>
      <a href="https://doi.org/10.1146/annurev-biophys-032116-094545" target="_blank" rel="noopener">Open DOI →</a>
    </article>
  </div>
</section>
{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-qbio.js" defer></script>
