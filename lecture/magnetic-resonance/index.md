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
          <text id="epr-y-max" x="31" y="39" class="svg-tick">0.344</text>
          <text id="epr-y-min" x="31" y="249" class="svg-tick">0.337</text>
          <text x="54" y="267" class="svg-tick">0</text>
          <text x="286" y="267" class="svg-tick">45</text>
          <text x="515" y="267" class="svg-tick">90</text>
          <path id="epr-field-path" class="population-line lower-line" fill="none" d="M58.00 78.73 L59.97 78.74 L61.93 78.75 L63.90 78.78 L65.87 78.82 L67.83 78.87 L69.80 78.93 L71.77 79.00 L73.73 79.08 L75.70 79.17 L77.67 79.28 L79.63 79.39 L81.60 79.52 L83.57 79.65 L85.53 79.80 L87.50 79.96 L89.47 80.13 L91.43 80.31 L93.40 80.50 L95.37 80.70 L97.33 80.91 L99.30 81.13 L101.27 81.36 L103.23 81.60 L105.20 81.86 L107.17 82.12 L109.13 82.39 L111.10 82.68 L113.07 82.97 L115.03 83.27 L117.00 83.59 L118.97 83.91 L120.93 84.25 L122.90 84.59 L124.87 84.95 L126.83 85.31 L128.80 85.69 L130.77 86.07 L132.73 86.46 L134.70 86.87 L136.67 87.28 L138.63 87.70 L140.60 88.13 L142.57 88.57 L144.53 89.02 L146.50 89.48 L148.47 89.95 L150.43 90.42 L152.40 90.91 L154.37 91.40 L156.33 91.90 L158.30 92.42 L160.27 92.94 L162.23 93.46 L164.20 94.00 L166.17 94.55 L168.13 95.10 L170.10 95.66 L172.07 96.23 L174.03 96.80 L176.00 97.39 L177.97 97.98 L179.93 98.58 L181.90 99.19 L183.87 99.80 L185.83 100.42 L187.80 101.05 L189.77 101.69 L191.73 102.33 L193.70 102.98 L195.67 103.63 L197.63 104.29 L199.60 104.96 L201.57 105.64 L203.53 106.32 L205.50 107.01 L207.47 107.70 L209.43 108.40 L211.40 109.10 L213.37 109.81 L215.33 110.53 L217.30 111.25 L219.27 111.97 L221.23 112.70 L223.20 113.44 L225.17 114.18 L227.13 114.92 L229.10 115.67 L231.07 116.43 L233.03 117.18 L235.00 117.95 L236.97 118.71 L238.93 119.48 L240.90 120.25 L242.87 121.03 L244.83 121.81 L246.80 122.60 L248.77 123.38 L250.73 124.17 L252.70 124.97 L254.67 125.76 L256.63 126.56 L258.60 127.36 L260.57 128.17 L262.53 128.97 L264.50 129.78 L266.47 130.59 L268.43 131.40 L270.40 132.21 L272.37 133.03 L274.33 133.84 L276.30 134.66 L278.27 135.48 L280.23 136.30 L282.20 137.12 L284.17 137.94 L286.13 138.76 L288.10 139.58 L290.07 140.40 L292.03 141.22 L294.00 142.04 L295.97 142.87 L297.93 143.69 L299.90 144.51 L301.87 145.33 L303.83 146.15 L305.80 146.96 L307.77 147.78 L309.73 148.60 L311.70 149.41 L313.67 150.23 L315.63 151.04 L317.60 151.85 L319.57 152.66 L321.53 153.46 L323.50 154.27 L325.47 155.07 L327.43 155.87 L329.40 156.67 L331.37 157.46 L333.33 158.25 L335.30 159.04 L337.27 159.83 L339.23 160.61 L341.20 161.39 L343.17 162.16 L345.13 162.93 L347.10 163.70 L349.07 164.47 L351.03 165.23 L353.00 165.98 L354.97 166.73 L356.93 167.48 L358.90 168.23 L360.87 168.96 L362.83 169.70 L364.80 170.43 L366.77 171.15 L368.73 171.87 L370.70 172.58 L372.67 173.29 L374.63 173.99 L376.60 174.69 L378.57 175.38 L380.53 176.07 L382.50 176.75 L384.47 177.42 L386.43 178.09 L388.40 178.75 L390.37 179.40 L392.33 180.05 L394.30 180.69 L396.27 181.33 L398.23 181.96 L400.20 182.58 L402.17 183.19 L404.13 183.80 L406.10 184.40 L408.07 184.99 L410.03 185.58 L412.00 186.15 L413.97 186.72 L415.93 187.29 L417.90 187.84 L419.87 188.39 L421.83 188.93 L423.80 189.46 L425.77 189.98 L427.73 190.49 L429.70 191.00 L431.67 191.50 L433.63 191.99 L435.60 192.47 L437.57 192.94 L439.53 193.40 L441.50 193.86 L443.47 194.30 L445.43 194.74 L447.40 195.17 L449.37 195.59 L451.33 195.99 L453.30 196.39 L455.27 196.79 L457.23 197.17 L459.20 197.54 L461.17 197.90 L463.13 198.25 L465.10 198.60 L467.07 198.93 L469.03 199.26 L471.00 199.57 L472.97 199.87 L474.93 200.17 L476.90 200.45 L478.87 200.73 L480.83 200.99 L482.80 201.25 L484.77 201.49 L486.73 201.73 L488.70 201.95 L490.67 202.17 L492.63 202.37 L494.60 202.56 L496.57 202.75 L498.53 202.92 L500.50 203.08 L502.47 203.24 L504.43 203.38 L506.40 203.51 L508.37 203.63 L510.33 203.74 L512.30 203.84 L514.27 203.93 L516.23 204.01 L518.20 204.08 L520.17 204.14 L522.13 204.18 L524.10 204.22 L526.07 204.25 L528.03 204.26 L530.00 204.27"/>
          <line id="epr-marker-line" x1="294.00" y1="35" x2="294.00" y2="248" class="plot-marker"/>
          <circle id="epr-marker" cx="294.00" cy="142.04" r="5" class="plot-point upper-point"/>
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
