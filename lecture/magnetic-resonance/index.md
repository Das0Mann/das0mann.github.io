---
layout: page
title: Magnetic Resonance
excerpt: "From resonance conditions and anisotropy to EPR observables"
permalink: /lecture/magnetic-resonance/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 05</span>
  <h2>Turn spin-energy levels into a spectrum</h2>
  <p>Magnetic resonance asks a very practical question: at what field and frequency can an oscillating magnetic field drive a transition between spin states? From that simple starting point we get EPR spectra, hyperfine patterns, anisotropic powder lineshapes and reaction-yield detected resonance.</p>
</header>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Resonance</p><h2>Match the photon energy to the spin splitting</h2></div>
  </div>

  <p>For an isotropic \(S=\tfrac12\) electron spin, the first resonance condition is</p>

  <div class="lecture-equation">
  \[
  h\nu
  =
  g\mu_B B_\mathrm{res}.
  \]
  </div>

  <p>For \(g\approx2\), X-band EPR around \(9.5~\mathrm{GHz}\) resonates near \(0.34~\mathrm T\). Q-band moves to roughly \(1.2~\mathrm T\), and W-band around \(94~\mathrm{GHz}\) is near \(3.35~\mathrm T\). The exact field depends on \(g\).</p>

  <aside class="teacher-note">
    <strong>The spectrometer does not “measure \(g\)” directly.</strong>
    <span>It measures a resonance field at a known microwave frequency. The \(g\)-value is inferred from the resonance condition and the spin Hamiltonian.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Hyperfine structure</p><h2>Nuclear spins split electron-spin transitions</h2></div>
  </div>

  <p>For one electron coupled isotropically to one nucleus, a simple high-field Hamiltonian is</p>

  <div class="lecture-equation">
  \[
  \hat H
  \approx
  g\mu_B B_0\hat S_z
  -g_n\mu_NB_0\hat I_z
  +A\hat S_z\hat I_z.
  \]
  </div>

  <p>To first order, the allowed EPR transitions obey \(\Delta m_S=\pm1\) and \(\Delta m_I=0\). One \(I=\tfrac12\) nucleus therefore gives two hyperfine components. Several equivalent nuclei produce the familiar multiplet patterns; inequivalent nuclei create more complicated splittings.</p>

  <details class="lecture-details">
    <summary>When does this simple picture fail?</summary>
    <p>At low fields, for strong hyperfine coupling, for large anisotropy or when several interactions have comparable size, \(m_S\) and \(m_I\) may no longer be good quantum numbers. Then the full Hamiltonian has to be diagonalized rather than interpreted as a simple first-order splitting pattern.</p>
  </details>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Anisotropy</p><h2>One molecule can resonate at different fields in different orientations</h2></div>
  </div>

  <p>For an axial \(g\)-tensor with principal values \(g_\perp\) and \(g_\parallel\), the effective \(g\)-value for a field at angle \(\theta\) to the symmetry axis is</p>

  <div class="lecture-equation">
  \[
  g_\mathrm{eff}(\theta)
  =
  \sqrt{
  g_\perp^2\sin^2\theta
  +
  g_\parallel^2\cos^2\theta
  }.
  \]
  </div>

  <p>The corresponding resonance field is \(B_\mathrm{res}=h\nu/(\mu_Bg_\mathrm{eff})\).</p>

  <div class="interactive-card" id="epr-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Axial \(g\)-tensor resonance</h3></div>
      <span class="interactive-model-note">rigid \(S=\tfrac12\)</span>
    </div>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>start with \(g_\perp=g_\parallel\): orientation does nothing. Then separate the two values and compare X-, Q- and W-band. The absolute field spread grows with frequency.</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="epr-frequency"><span class="control-name">Microwave frequency \(\nu\)</span><output id="epr-frequency-out">9.50 GHz</output></label>
        <input id="epr-frequency" type="range" min="1" max="100" step="0.1" value="9.5">

        <label for="epr-gperp"><span class="control-name">\(g_\perp\)</span><output id="epr-gperp-out">2.0030</output></label>
        <input id="epr-gperp" type="range" min="1.85" max="2.20" step="0.0005" value="2.003">

        <label for="epr-gparallel"><span class="control-name">\(g_\parallel\)</span><output id="epr-gparallel-out">1.9800</output></label>
        <input id="epr-gparallel" type="range" min="1.85" max="2.20" step="0.0005" value="1.98">

        <label for="epr-theta"><span class="control-name">Orientation \(\theta\)</span><output id="epr-theta-out">45.0°</output></label>
        <input id="epr-theta" type="range" min="0" max="90" step="0.5" value="45">

        <div class="demo-presets">
          <button type="button" data-epr-frequency="9.5">X-band</button>
          <button type="button" data-epr-frequency="34">Q-band</button>
          <button type="button" data-epr-frequency="94">W-band</button>
          <button type="button" data-epr-isotropic="1">isotropic \(g\)</button>
        </div>

        <div class="interactive-readout">
          <span>Effective \(g\) <strong id="epr-geff-out">1.9915</strong></span>
          <span>Current resonance field <strong id="epr-bres-out">0.341 T</strong></span>
          <span>\(B_\parallel\) <strong id="epr-bparallel-out">0.343 T</strong></span>
          <span>\(B_\perp\) <strong id="epr-bperp-out">0.339 T</strong></span>
        </div>

        <p id="epr-explanation" class="demo-explanation">The anisotropy is modest at X-band, but the same \(g\)-difference maps onto a larger absolute field separation at higher microwave frequency.</p>
      </div>

      <div class="plot-wrap">
        <svg id="epr-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="EPR resonance field versus molecular orientation">
          <line x1="58" y1="248" x2="530" y2="248" class="plot-axis"/>
          <line x1="58" y1="35" x2="58" y2="248" class="plot-axis"/>
          <text x="478" y="278" class="svg-caption">θ / degree</text>
          <text x="14" y="38" class="svg-caption">Bres / T</text>
          <text x="54" y="267" class="svg-tick">0</text>
          <text x="286" y="267" class="svg-tick">45</text>
          <text x="515" y="267" class="svg-tick">90</text>
          <path id="epr-field-path" class="population-line lower-line" fill="none" d=""/>
          <line id="epr-marker-line" x1="294" y1="35" x2="294" y2="248" class="plot-marker"/>
          <circle id="epr-marker" cx="294" cy="142" r="5" class="plot-point upper-point"/>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">This plots the resonance condition for an axial \(g\)-tensor, not a simulated powder spectrum. A real powder spectrum also requires orientation weighting, transition probabilities, linewidths and any hyperfine or ZFS interactions.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Powder spectra</p><h2>A frozen sample contains all molecular orientations at once</h2></div>
  </div>

  <p>In a single crystal, you can rotate one known molecular orientation relative to the field. In a frozen solution or powder, every orientation is present. The spectrum therefore accumulates resonance contributions from the entire orientation sphere.</p>

  <p>Characteristic edges and turning points appear near principal tensor orientations, but the intensity is not just a histogram of \(B_\mathrm{res}(\theta)\). The correct spectrum also includes the orientational measure, transition matrix elements and broadening.</p>

  <aside class="teacher-note">
    <strong>This is an easy plotting mistake.</strong>
    <span>A curve of resonance field versus angle is useful for understanding anisotropy, but it is not itself a powder EPR spectrum.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Linewidths</p><h2>Relaxation determines how sharp a resonance can be</h2></div>
  </div>

  <p>For a simple exponentially decaying transverse coherence, the homogeneous absorption line is Lorentzian. Its frequency-domain full width at half maximum is</p>

  <div class="lecture-equation">
  \[
  \Delta\nu_{1/2}
  =
  \frac{1}{\pi T_2}.
  \]
  </div>

  <p>Real EPR lines can also contain unresolved hyperfine structure, \(g\)-strain, conformational distributions and other inhomogeneous broadening. Those contributions are often summarized through an effective \(T_2^\ast\), but \(T_2^\ast\) is not the same microscopic quantity as the true homogeneous \(T_2\).</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">Experimental modes</p><h2>“EPR” is not one experiment</h2></div>
  </div>

  <div class="method-ladder">
    <div><span>CW EPR</span><p>Continuously irradiate while sweeping field or frequency. Excellent for resonance positions, hyperfine patterns and steady-state lineshapes.</p></div>
    <div><span>Time-resolved EPR</span><p>Observe transient spin polarization after a photochemical or kinetic trigger. Particularly useful for radical pairs and triplet states.</p></div>
    <div><span>Pulse EPR</span><p>Manipulate coherences with microwave pulses and read out echoes or time-domain signals. Enables precise relaxation and distance measurements.</p></div>
    <div><span>RYDMR</span><p>Drive spin resonance but detect it through a change in reaction yield instead of conventional microwave absorption.</p></div>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">07</span>
    <div><p class="section-eyebrow">RYDMR</p><h2>Detect resonance through chemistry</h2></div>
  </div>

  <p>Reaction-yield detected magnetic resonance is especially natural for radical pairs. An RF or microwave field perturbs the spin evolution. If that changes how much singlet or triplet character reaches a spin-selective reaction channel, the resonance can be detected as a change in chemical yield.</p>

  <p>Conceptually, the chain is</p>

  <div class="lecture-equation">
  \[
  \text{resonant driving}
  \rightarrow
  \rho(t)
  \rightarrow
  P_S(t),P_T(t)
  \rightarrow
  \Phi_S,\Phi_T.
  \]
  </div>

  <p>This is magnetic resonance without requiring conventional inductive detection of the spin magnetization.</p>
</section>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">08</span>
    <div><p class="section-eyebrow">Selected reading</p><h2>Examples from my work</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>RYDMR</span><h3>Reaction-yield detected magnetic resonance spectroscopy of radical pairs in cryptochrome-4a</h3><p>Using reaction yield as the observable for a radical-pair magnetic-resonance experiment.</p><a href="https://doi.org/10.1016/j.freeradbiomed.2026.04.015" target="_blank" rel="noopener">Free Radic. Biol. Med. (2026) →</a></article>
    <article><span>g-anisotropy</span><h3>Revealing the Impact of g-Tensor Anisotropy on the Charge Recombination in Donor–Acceptor Dyads Under High Magnetic Fields</h3><p>Why anisotropic resonance physics can feed back into radical-pair kinetics.</p><a href="https://doi.org/10.1021/jacs.5c06173" target="_blank" rel="noopener">JACS (2025) →</a></article>
    <article><span>RF perturbations</span><h3>Weak Radiofrequency Field Effects on Biological Systems Mediated through the Radical Pair Mechanism</h3><p>How oscillating magnetic fields interact with radical-pair spin dynamics.</p><a href="https://doi.org/10.1021/acs.chemrev.5c00178" target="_blank" rel="noopener">Chemical Reviews (2025) →</a></article>
  </div>
</section>

{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-epr.js" defer></script>
