---
layout: page
title: Photo-CIDNP and Nuclear Hyperpolarization
excerpt: "From spin-correlated radical pairs to signed NMR signals"
permalink: /lecture/photo-cidnp/
---

<div class="lecture-module lecture-cidnp">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 14</span>
  <h2>How can a spin-selective chemical reaction polarize a nucleus?</h2>
  <p>EPR reports transitions of electron spins, whereas NMR detects nuclear magnetization. Photo-chemically induced dynamic nuclear polarization (photo-CIDNP) links the two: light creates spin-correlated radicals, magnetic interactions cause nuclear-spin-dependent electron-spin evolution, and chemical reaction pathways convert that dependence into non-thermal nuclear populations. The resulting NMR signals can be enhanced or emissive.</p>
</header>

<section class="module-learning" aria-label="Learning goals">
  <div class="module-learning-head"><span>After this module</span><strong>You should be able to…</strong></div>
  <div class="module-learning-grid">
    <div><span>01</span><p>Explain electron-spin correlation, nuclear-spin sorting and the difference between EPR and CIDNP detection.</p></div>
    <div><span>02</span><p>Use Kaptein’s high-field sign rule with explicit precursor, exit-channel, \(\Delta g\), and hyperfine conventions.</p></div>
    <div><span>03</span><p>Distinguish an analytical teaching model from realistic exchange-coupled, relaxing and conformationally heterogeneous radical-pair simulations.</p></div>
  </div>
</section>
{% include lecture-connections.html %}

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">The observable</p><h2>EPR and CIDNP look at different spins in the same chemistry</h2></div>
  </div>
  <p>A radical pair can be examined through electron-spin resonance, the yield of a chemical product, or the nuclear magnetization remaining after the radical-pair reaction. These observables are related through the <em>same spin-dependent kinetics</em>, but they are not interchangeable.</p>

  <div class="cidnp-comparison" aria-label="Comparison of EPR, CIDNP and reaction-yield measurements">
    <article>
      <span class="cidnp-symbol">{% include icon.html name="radio" %}</span>
      <span class="cidnp-label">Electron-spin detection</span>
      <h3>EPR</h3>
      <p>Observes allowed electron-spin transitions, resonance fields, hyperfine structure, linewidths and, in time-resolved experiments, spin-polarized intermediates.</p>
    </article>
    <article>
      <span class="cidnp-symbol">{% include icon.html name="activity" %}</span>
      <span class="cidnp-label">Chemistry as detector</span>
      <h3>Reaction yields</h3>
      <p>Reports the integrated probability of particular spin-selective chemical channels, even when the radical intermediates are too short-lived for direct observation.</p>
    </article>
    <article>
      <span class="cidnp-symbol">{% include icon.html name="spin" %}</span>
      <span class="cidnp-label">Nuclear-spin detection</span>
      <h3>Photo-CIDNP / NMR</h3>
      <p>Measures non-Boltzmann nuclear populations in the products or radical-derived species, appearing as enhanced absorption or emission relative to a reference NMR spectrum.</p>
    </article>
  </div>

  <p>In liquid-state photo-CIDNP, the spin-correlated radical-pair mechanism explains why nuclei with different hyperfine interactions may acquire different signal signs. The NMR experiment detects the <em>products of spin sorting</em>, not simply the electron-spin transition frequencies measured by EPR.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Reaction sequence</p><h2>From a photon to a polarized NMR signal</h2></div>
  </div>
  <div class="cidnp-mechanism" aria-label="Photo-CIDNP mechanism">
    <div><span>01</span>{% include icon.html name="sun" %}<strong>Photoexcitation</strong><small>Prepare an excited state; intersystem crossing may create a triplet precursor</small></div>
    <div><span>02</span>{% include icon.html name="transfer" %}<strong>Electron transfer</strong><small>Form a singlet- or triplet-correlated radical pair</small></div>
    <div><span>03</span>{% include icon.html name="spin" %}<strong>Spin evolution</strong><small>Hyperfine, \(\Delta g\), exchange and other interactions affect mixing</small></div>
    <div><span>04</span>{% include icon.html name="flask" %}<strong>Spin sorting</strong><small>Recombination and escape select different spin histories</small></div>
    <div><span>05</span>{% include icon.html name="radio" %}<strong>NMR detection</strong><small>Compare absorptive or emissive product resonances with a reference</small></div>
  </div>
  <p>The nuclei initially need not be polarized. Consider a spin-\(\frac12\) nucleus with projections \(m_I=+\frac12\) and \(-\frac12\). The hyperfine field changes the effective electron-spin detuning in opposite directions for the two subensembles. Their probabilities of reaching a reactive spin state can therefore differ. If the pathways are spin selective, the nuclear populations of the observed products cease to be equal.</p>

  <div class="lecture-equation">
  \[
  P_N = \frac{N_{\alpha}-N_{\beta}}{N_{\alpha}+N_{\beta}},
  \qquad
  I_{\mathrm{CIDNP}} \propto P_N-P_N^{\mathrm{thermal}}.
  \]
  </div>
  <p>Signal phase depends on detection conventions and sample preparation. “Emissive” refers to the sign of a properly phased NMR resonance relative to absorption; it does not imply negative chemical concentration.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Kaptein’s sign rules</p><h2>Predict the sign before fitting the spectrum</h2></div>
  </div>
  <p>In the familiar high-field radical-pair regime, Kaptein’s qualitative rule connects the sign of a CIDNP resonance to four ingredients. Define radical 1 as the radical containing the observed nucleus \(i\), and define \(\Delta g = g_1-g_2\). With the conventional factors below,</p>
  <div class="lecture-equation">
  \[
  \Gamma_i
  = \mu\,\varepsilon\,
    \mathrm{sgn}(\Delta g)\,
    \mathrm{sgn}(A_{\mathrm{iso},i}),
  \]
  </div>
  <p>where \(\mu=+1\) for a triplet-born pair and \(-1\) for a singlet-born pair; \(\varepsilon=+1\) for singlet recombination products and \(-1\) for escape-derived products. A positive \(\Gamma_i\) denotes enhanced absorption in the stated phase convention, and a negative value denotes emission. The hyperfine sign must be assigned to the observed nucleus on <em>radical 1</em>; reversing the radical labels requires redefining \(\Delta g\) consistently.</p>

  <div class="cidnp-widget" id="cidnp-sign-lab">
    <div class="cidnp-widget-head">
      <div><span class="cidnp-widget-kicker">{% include icon.html name="sliders" %} Interactive sign logic</span><h3>Kaptein sign explorer</h3><p>Change one physical assumption at a time and follow the predicted NMR phase.</p></div>
      <span class="cidnp-widget-badge">Qualitative, high-field</span>
    </div>
    <div class="cidnp-controls cidnp-controls--four">
      <label for="cidnp-precursor">Precursor spin state
        <select id="cidnp-precursor"><option value="triplet">Triplet-born (\(\mu=+1\))</option><option value="singlet">Singlet-born (\(\mu=-1\))</option></select>
      </label>
      <label for="cidnp-exit">Observed reaction product
        <select id="cidnp-exit"><option value="recombination">Singlet recombination (\(\varepsilon=+1\))</option><option value="escape">Escape-derived (\(\varepsilon=-1\))</option></select>
      </label>
      <label for="cidnp-dg">Difference \(g_1-g_2\)
        <select id="cidnp-dg"><option value="positive">Positive \(\Delta g\)</option><option value="negative">Negative \(\Delta g\)</option></select>
      </label>
      <label for="cidnp-a">Isotropic hyperfine sign
        <select id="cidnp-a"><option value="positive">Positive \(A_{\mathrm{iso},i}\)</option><option value="negative">Negative \(A_{\mathrm{iso},i}\)</option></select>
      </label>
    </div>
    <div class="cidnp-result-row">
      <div class="cidnp-result">
        <span>Predicted sign</span>
        <strong id="cidnp-sign" class="cidnp-sign-positive" aria-live="polite">+ · enhanced absorption</strong>
        <small id="cidnp-sign-math">\((+1)(+1)(+1)(+1)=+1\)</small>
      </div>
      <div class="cidnp-spectrum">
        <svg id="cidnp-sign-spectrum" viewBox="0 0 520 152" role="img" aria-label="Schematic NMR absorption or emission line relative to a zero baseline">
          <line x1="28" y1="76" x2="495" y2="76" class="cidnp-gridline"></line>
          <path id="cidnp-nmr-path" class="cidnp-nmr-curve" d="M28 76 L495 76"></path>
          <text x="28" y="18">NMR intensity</text>
          <text x="28" y="145">Chemical shift (schematic)</text>
          <text x="487" y="70" text-anchor="end">0</text>
        </svg>
      </div>
    </div>
    <p class="cidnp-model-note">The curve illustrates signal phase only; it is not an experimental line shape. Kaptein’s rule is not universally valid near exchange-driven level crossings or when several nuclear spins, pathways, and relaxation processes compete.</p>
  </div>
  <p>Reading: <a href="https://doi.org/10.1039/C29710000732" target="_blank" rel="noopener">Kaptein (1971), simple rules for CIDNP</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12583242/" target="_blank" rel="noopener">tutorial on CW photo-CIDNP NMR spectroscopy</a>.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Spin sorting in time</p><h2>Why do the two nuclear projections contribute differently?</h2></div>
  </div>
  <p>A useful analytical starting point is a <em>deliberately restricted</em> \(S\)–\(T_0\) Hamiltonian for a triplet-\(T_0\)-born pair with one secularly coupled spin-\(\frac12\) nucleus. In cyclic-frequency units (MHz), with \(m=\pm\frac12\),</p>
  <div class="lecture-equation">
  \[
  \frac{H_m}{h} =
  \begin{pmatrix}
  -J_\nu & \Delta\nu_m/2\\
  \Delta\nu_m/2 & J_\nu
  \end{pmatrix}_{S,T_0},
  \quad
  \Delta\nu_m = \frac{\mu_B}{h}\Delta g\,B + m A,
  \quad
  f_m = \sqrt{(2J_\nu)^2+(\Delta\nu_m)^2}.
  \]
  </div>
  <p>Here \(J_\nu\) is <em>half</em> the singlet–triplet energy separation expressed as a frequency; it is not automatically interchangeable with the exchange parameter \(J\) of every spin-Hamiltonian convention. In this model, the probability to enter the singlet subspace from \(T_0\) at time \(t\) is</p>
  <div class="lecture-equation">
  \[
  P^{(m)}_{T_0\to S}(t)
  = \frac{(\Delta\nu_m)^2}{f_m^2}
  \sin^2(\pi f_m t).
  \]
  </div>
  <p>Frequency is in MHz and time in \(\mu\mathrm{s}\). To illustrate finite radical-pair lifetime without introducing an entire reaction superoperator, weight the singlet probability with a common exponential survival function:</p>
  <div class="lecture-equation">
  \[
  W_m = k\int_0^\infty e^{-kt}P^{(m)}_{T_0\to S}(t)\,dt
  = \frac{(2\pi\Delta\nu_m)^2}
    {2\left[k^2+(2\pi f_m)^2\right]},
  \qquad
  Q=\frac{W_{+1/2}-W_{-1/2}}{W_{+1/2}+W_{-1/2}}.
  \]
  </div>
  <p>\(W_m\) is an <strong>idealized singlet-weighted signal proxy</strong>, not an absolute recombination yield. The normalized \(Q\) is meaningful only when \(W_++W_->0\). A proper spin-selective loss term generally changes the survivor spin state and must be included in quantitative CIDNP modelling.</p>

  <div class="cidnp-widget" id="cidnp-spin-sort-lab">
    <div class="cidnp-widget-head">
      <div><span class="cidnp-widget-kicker">{% include icon.html name="activity" %} Interactive spin model</span><h3>Nuclear-resolved singlet mixing</h3><p>Compare the two nuclear subensembles and see how magnetic inequivalence and exchange control spin sorting.</p></div>
      <span class="cidnp-widget-badge">Exact in the stated two-level model</span>
    </div>
    <div class="cidnp-presets" aria-label="Example coupling scenarios">
      <button type="button" data-cidnp-preset="encounter">Weak exchange</button>
      <button type="button" data-cidnp-preset="compact">Stronger exchange</button>
      <button type="button" data-cidnp-preset="opposite">Reverse hyperfine sign</button>
    </div>
    <div class="cidnp-controls">
      <label for="cidnp-field">Magnetic field <output id="cidnp-field-out" for="cidnp-field">4.0 T</output><input id="cidnp-field" type="range" min="0" max="14" step="0.1" value="4"></label>
      <label for="cidnp-hfi">Hyperfine \(A\) <output id="cidnp-hfi-out" for="cidnp-hfi">+6.0 MHz</output><input id="cidnp-hfi" type="range" min="-12" max="12" step="0.5" value="6"></label>
      <label for="cidnp-exchange">Half splitting \(J_\nu\) <output id="cidnp-exchange-out" for="cidnp-exchange">20 MHz</output><input id="cidnp-exchange" type="range" min="0" max="120" step="2" value="20"></label>
      <label for="cidnp-lifetime">Lifetime rate \(k\) <output id="cidnp-lifetime-out" for="cidnp-lifetime">5.0 μs⁻¹</output><input id="cidnp-lifetime" type="range" min="0.5" max="25" step="0.5" value="5"></label>
    </div>
    <p class="cidnp-assumption">Fixed illustrative \(\Delta g=+0.0008\), with the observed nucleus on radical 1. Controls use cycle-frequency MHz, tesla and microseconds; they are <strong>not fitted values</strong> for a particular flavin–tryptophan dyad.</p>
    <div class="cidnp-plot-grid">
      <figure class="cidnp-plot-panel">
        <figcaption><strong>Spin evolution</strong><span>\(P_{T_0\to S}(t)\) at the selected field</span></figcaption>
        <svg viewBox="0 0 590 244" role="img" aria-label="Singlet population versus time for the two nuclear projections">
          <line x1="54" y1="18" x2="54" y2="194" class="cidnp-axis"/>
          <line x1="54" y1="194" x2="564" y2="194" class="cidnp-axis"/>
          <line x1="54" y1="106" x2="564" y2="106" class="cidnp-gridline"/>
          <text x="45" y="24" text-anchor="end">1</text><text x="45" y="199" text-anchor="end">0</text>
          <text x="309" y="228" text-anchor="middle">Time (μs)</text>
          <text x="564" y="212" text-anchor="end" id="cidnp-time-max">0.2</text>
          <path id="cidnp-time-plus" class="cidnp-trace cidnp-trace-plus"></path>
          <path id="cidnp-time-minus" class="cidnp-trace cidnp-trace-minus"></path>
        </svg>
        <div class="cidnp-legend"><span class="cidnp-legend-plus">Nuclear α, \(m=+\frac12\)</span><span class="cidnp-legend-minus">Nuclear β, \(m=-\frac12\)</span></div>
      </figure>
      <figure class="cidnp-plot-panel">
        <figcaption><strong>Field dependence</strong><span>Singlet-weighted imbalance \(W_\alpha-W_\beta\)</span></figcaption>
        <svg viewBox="0 0 590 244" role="img" aria-label="Signed nuclear-state singlet-weight difference versus magnetic field with a zero-exchange comparison">
          <line x1="54" y1="18" x2="54" y2="194" class="cidnp-axis"/>
          <line x1="54" y1="106" x2="564" y2="106" class="cidnp-gridline"/>
          <line x1="54" y1="194" x2="564" y2="194" class="cidnp-axis"/>
          <text x="46" y="24" text-anchor="end">+</text><text x="46" y="110" text-anchor="end">0</text><text x="46" y="199" text-anchor="end">−</text>
          <text x="54" y="214">0</text><text x="564" y="214" text-anchor="end">14</text>
          <text x="309" y="228" text-anchor="middle">Magnetic field (T)</text>
          <path id="cidnp-field-encounter" class="cidnp-trace cidnp-trace-reference"></path>
          <path id="cidnp-field-selected" class="cidnp-trace cidnp-trace-plus"></path>
          <line id="cidnp-field-marker" x1="54" y1="19" x2="54" y2="193" class="cidnp-field-marker"/>
        </svg>
        <div class="cidnp-legend"><span class="cidnp-legend-plus">Selected \(J_\nu\)</span><span class="cidnp-legend-reference">Reference \(J_\nu=0\)</span></div>
      </figure>
    </div>
    <div class="cidnp-stat-grid" aria-live="polite">
      <div><span>Singlet weight, α</span><strong id="cidnp-weight-plus">—</strong></div>
      <div><span>Singlet weight, β</span><strong id="cidnp-weight-minus">—</strong></div>
      <div><span>Difference \(W_\alpha-W_\beta\)</span><strong id="cidnp-difference">—</strong></div>
      <div><span>Normalized imbalance \(Q\)</span><strong id="cidnp-q">—</strong></div>
    </div>
    <p class="cidnp-widget-explanation" id="cidnp-model-explanation" aria-live="polite"></p>
    <p class="cidnp-model-note">Educational restrictions: one nuclear spin, high-field secular \(S/T_0\) sector, triplet-\(T_0\) precursor, a common state-independent lifetime envelope, no anisotropy or other nuclear spins. The zero-exchange reference is not an absolute encounter population prediction. In particular, this model <strong>cannot reproduce the \(2J\) level-crossing peak</strong> of a strongly coupled radical pair, which requires the relevant additional spin levels and reaction dynamics.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">From toy model to MolSpin</p><h2>What a realistic CIDNP model must contain</h2></div>
  </div>
  <p>For a quantitative calculation the Hamiltonian must represent both electrons and the relevant nuclear spins. The electron Zeeman and hyperfine interactions, exchange and dipolar couplings, and their time-dependent fluctuations enter alongside photoexcitation, charge separation, recombination, escape and relaxation.</p>
  <div class="lecture-equation">
  \[
  H(B,t)
  = H_{\mathrm{Z}}(B,t)
  + H_{\mathrm{hf}}(t)
  + H_{\mathrm{ex}}(t)
  + H_{\mathrm{dip}}(t)
  + \cdots ,
  \qquad
  \mathcal{P}_i \propto
  \mathrm{Tr}\!\left[I_{i,z}\,\rho_{\mathrm{product}}\right].
  \]
  </div>
  <p>The nuclear-spin operator must be defined consistently for the monitored nucleus, and the reaction-product density operator depends on the full preparation and kinetics. A change in sign can reflect more than a change of \(A_i\): distinct formation channels, exchange-driven level anticrossings, relaxation, or relative contributions of geminate and encounter reactions may alter the field response.</p>

  <div class="cidnp-research-bridge">
    <span class="cidnp-widget-kicker">{% include icon.html name="research" %} Connection to ongoing research</span>
    <h3>Flavin–tryptophan dyads: conformational dynamics changes the spin Hamiltonian</h3>
    <p>In biomimetic oligoproline-linked flavin–tryptophan dyads, the molecular linker controls the ensemble of donor–acceptor arrangements. Work on distance-dependent photo-CIDNP and later conformational switching shows why a single static geometry and one exchange coupling can be inadequate. Compact conformers may access strongly exchange-coupled intramolecular radical-pair pathways, while more separated or diffusive encounters contribute differently to polarization and field dependence.</p>
    <p>Consequently, **reproducing the sign alone is not a complete fit**. Site-resolved hyperfine assignments, experimentally observed low- and high-field features, nuclear-spin-selective kinetics and conformational weighting must be examined jointly. A robust computational protocol also separates independently supported quantities from parameters genuinely inferred by optimization.</p>
    <div class="cidnp-paper-list">
      <a href="https://doi.org/10.1002/anie.202510116" target="_blank" rel="noopener"><strong>Distance-Dependence of Photo-CIDNP in Biomimetic Tryptophan–Flavin Diads</strong><span>Theiss, Musabirova, Gerhards et al. · Angew. Chem. Int. Ed. (2025)</span></a>
      <a href="https://doi.org/10.1021/jacs.5c22947" target="_blank" rel="noopener"><strong>Conformational Switching Controls Biradical Spin Dynamics in Flavin–Tryptophan Dyads</strong><span>Musabirova, Morozova, Kiryutin et al., including Gerhards · JACS (2026)</span></a>
      <a href="https://doi.org/10.1021/acs.jctc.4c00361" target="_blank" rel="noopener"><strong>Spin Dynamics of Radical Pairs Using the Stochastic Schrödinger Equation in MolSpin</strong><span>Pažėra, Fay, Solov’yov, Hore and Gerhards · JCTC (2024)</span></a>
    </div>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">Physical interpretation</p><h2>When is a sign rule or small model insufficient?</h2></div>
  </div>
  <div class="cidnp-cautions">
    <div><strong>High fields are not low fields.</strong><p>At high field, the conventional \(\Delta g\) and secular hyperfine picture can give useful sign intuition. Near low-field crossings, the complete electron and nuclear level structure matters, and exchange-driven features require more than an \(S/T_0\) reduction.</p></div>
    <div><strong>Conformation is not one number.</strong><p>A distance distribution does not directly determine an exchange distribution or a reaction rate. Structural ensembles, electronic couplings and relevant kinetic timescales must be assessed together.</p></div>
    <div><strong>NMR intensity is not a direct Hamiltonian parameter.</strong><p>Experimental peak amplitudes depend on polarization generation, reaction pathways, populations, nuclear relaxation, timing, and detection. Matching \(J\) without these channels can misassign the mechanism.</p></div>
  </div>
  <p>Continue with <a href="{{ site.url }}/lecture/radical-pairs/">Radical-Pair Spin Chemistry</a> to derive spin-selective yields, <a href="{{ site.url }}/lecture/magnetic-resonance/">Magnetic Resonance</a> for EPR observables, and <a href="{{ site.url }}/lecture/molspin-notebooks/">MolSpin Examples</a> for computational model design.</p>
</section>

<section class="lecture-section module-reading">
  <div class="lecture-section-head"><span class="lecture-index">07</span><div><p class="section-eyebrow">Further reading</p><h2>Foundations and experimental practice</h2></div></div>
  <div class="lecture-reading-grid">
    <article><span>Origin of sign rules</span><h3>Simple rules for chemically induced dynamic nuclear polarization</h3><p>R. Kaptein (1971). A compact starting point for the high-field polarization-sign convention.</p><a href="https://doi.org/10.1039/C29710000732" target="_blank" rel="noopener">RSC article →</a></article>
    <article><span>Experimental tutorial</span><h3>Continuous-Wave (CW) Photo-CIDNP NMR Spectroscopy: A Tutorial</h3><p>An experimental perspective on photo-CIDNP methods, interpretation and implementation.</p><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12583242/" target="_blank" rel="noopener">Read tutorial →</a></article>
    <article><span>Conceptual review</span><h3>Spin Hyperpolarization in Modern Magnetic Resonance</h3><p>Connects CIDNP, electron polarization and other hyperpolarization methods while distinguishing their spin-physical origins.</p><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9951229/" target="_blank" rel="noopener">Read review →</a></article>
  </div>
</section>
{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-cidnp-model.js" defer></script>
<script src="{{ site.url }}/assets/js/lecture-cidnp.js" defer></script>
