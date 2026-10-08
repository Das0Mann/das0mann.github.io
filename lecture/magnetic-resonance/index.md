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
<section class="module-learning" aria-label="Learning goals">
  <div class="module-learning-head">
    <span>After this module</span>
    <strong>You should be able to…</strong>
  </div>
  <div class="module-learning-grid">
    <div><span>01</span><p>Use the resonance condition to connect microwave frequency, magnetic field and effective g-value.</p></div>
    <div><span>02</span><p>Predict qualitatively how hyperfine coupling, anisotropy and linewidth shape an EPR spectrum.</p></div>
    <div><span>03</span><p>Distinguish CW, time-resolved, pulsed and reaction-yield detected magnetic resonance.</p></div>
  </div>
</section>

{% include lecture-connections.html %}


<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Resonance</p><h2>Match the photon energy to the spin splitting</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Resonance occurs when the drive matches an allowed energy difference</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Resonance condition</strong>
        <p><b>What it is:</b> A transition becomes efficient when the oscillating field frequency matches the energy gap between spin eigenstates.</p>
        <p><b>What it changes:</b> It allows the weak transverse microwave/RF field to coherently transfer population or create coherence between states.</p>
        <p><b>What you observe:</b> A peak, derivative line, echo response or reaction-yield change at a particular field/frequency.</p>
      </article>
      <article>
        <strong>Effective \(g\)-value</strong>
        <p><b>What it is:</b> The orientation-dependent magnetic response that converts field into electron-spin splitting.</p>
        <p><b>What it changes:</b> Changing \(g_\mathrm{eff}\) shifts the field required to satisfy \(h\nu=g_\mathrm{eff}\mu_BB\).</p>
        <p><b>What you observe:</b> Different resonance positions for different molecular orientations or electronic structures.</p>
      </article>
    </div>
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

  <aside class="lecture-analogy">
    <span class="lecture-analogy-label">Mental model</span>
    <h3>Resonance is radio tuning, but the transition matrix element is the antenna</h3>
    <p>The energy gap chooses the station: the microwave frequency must match it. But matching the station is not enough—the oscillating magnetic field must also couple the two states. The transition matrix element plays the role of an antenna orientation, and the population difference supplies the available signal strength.</p>
    <span class="analogy-limit"><strong>Where the analogy breaks:</strong> an EPR transition is coherent quantum evolution between spin eigenstates, not absorption by a classical radio circuit. The analogy only separates resonance condition from transition intensity.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Hyperfine structure</p><h2>Nuclear spins split electron-spin transitions</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Hyperfine lines are a map of which nuclei the electron spin can feel</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Hyperfine splitting</strong>
        <p><b>What it is:</b> Electron–nuclear coupling makes the electron-spin transition energy depend on the nuclear-spin projection.</p>
        <p><b>What it changes:</b> One electron resonance is divided into several transitions corresponding to different nuclear configurations.</p>
        <p><b>What you observe:</b> Multiplets whose spacing and anisotropy encode local spin density and geometry.</p>
      </article>
      <article>
        <strong>Equivalent vs inequivalent nuclei</strong>
        <p><b>What it is:</b> Symmetry-related nuclei share the same coupling; chemically or geometrically distinct nuclei generally do not.</p>
        <p><b>What it changes:</b> Equivalent nuclei create regular combinatorial patterns, whereas inequivalent nuclei generate many nonuniform lines.</p>
        <p><b>What you observe:</b> Characteristic EPR multiplets and resolved nuclear fingerprints.</p>
      </article>
    </div>
  </div>


  <p>For one electron coupled isotropically to one nucleus, it is often clearest to write the high-field secular Hamiltonian directly in ordinary-frequency units:</p>

  <div class="lecture-equation">
  \[
  \hat{\mathcal H}_\mathrm{sec}
  \equiv
  \frac{\hat H_\mathrm{sec}}{h}
  \approx
  \nu_e\hat S_z
  -
  \nu_n\hat I_z
  +
  a\,\hat S_z\hat I_z,
  \]
  \[
  \nu_e=\frac{g\mu_BB_0}{h},
  \qquad
  \nu_n=\frac{g_n\mu_NB_0}{h},
  \qquad
  a=\frac{A}{h}.
  \]
  </div>

  <p>To first order, the allowed EPR transitions obey \(\Delta m_S=\pm1\) and \(\Delta m_I=0\). One \(I=\tfrac12\) nucleus therefore gives two hyperfine components. Several equivalent nuclei produce the familiar multiplet patterns; inequivalent nuclei create more complicated splittings.</p>

  <div class="interactive-card" id="hyperfine-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Equivalent spin-½ hyperfine pattern</h3></div>
      <span class="interactive-model-note">first-order isotropic limit</span>
    </div>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>increase the number of equivalent nuclei. The line count becomes (n+1), while the relative intensities follow the binomial coefficients.</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="hf-count"><span class="control-name">Equivalent nuclei (n)</span><output id="hf-count-out">2</output></label>
        <input id="hf-count" type="range" min="1" max="4" step="1" value="2">

        <label for="hf-A"><span class="control-name">Isotropic coupling \(a=A/h\)</span><output id="hf-A-out">30 MHz</output></label>
        <input id="hf-A" type="range" min="5" max="100" step="1" value="30">

        <div class="demo-presets">
          <button type="button" data-hf-n="1">one nucleus</button>
          <button type="button" data-hf-n="2">two nuclei</button>
          <button type="button" data-hf-n="3">three nuclei</button>
          <button type="button" data-hf-n="4">four nuclei</button>
        </div>

        <div class="interactive-readout">
          <span>Number of lines <strong id="hf-lines-out">3</strong></span>
          <span>Adjacent spacing <strong id="hf-spacing-out">30 MHz</strong></span>
          <span>Relative intensities <strong id="hf-intensity-out">1 : 2 : 1</strong></span>
          <span>Outer-line span <strong id="hf-span-out">60 MHz</strong></span>
        </div>

        <p id="hf-explanation" class="demo-explanation">Two equivalent spin-\(\tfrac12\) nuclei create three electron-spin transitions with the familiar 1:2:1 intensity ratio.</p>
      </div>

      <div class="plot-wrap">
        <svg id="hyperfine-svg" class="lecture-svg" viewBox="0 0 560 260" role="img" aria-label="First-order hyperfine stick spectrum for equivalent spin one-half nuclei">
          <line x1="58" y1="210" x2="530" y2="210" class="plot-axis"/>
          <text x="205" y="245" class="svg-caption">frequency offset / MHz</text>
          <text id="hf-axis-left" x="48" y="228" class="svg-tick">−60</text>
          <text x="291" y="228" class="svg-tick">0</text>
          <text id="hf-axis-right" x="518" y="228" class="svg-tick">60</text>
          <g id="hf-stick-group">
            <line x1="176" y1="210" x2="176" y2="140" class="hyperfine-stick"/>
            <line x1="294" y1="210" x2="294" y2="70" class="hyperfine-stick"/>
            <line x1="412" y1="210" x2="412" y2="140" class="hyperfine-stick"/>
          </g>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">This stick model assumes \(n\) equivalent \(I=\tfrac12\) nuclei, identical isotropic coupling \(a=A/h\), first-order high-field selection rules and no linewidth. Real spectra can be anisotropic, broadened and mixed by additional interactions.</p>
  </div>

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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Anisotropy is a directional fingerprint of the electronic wavefunction</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Principal \(g\)-values</strong>
        <p><b>What it is:</b> The three values obtained when the symmetric part of the \(g\)-tensor is expressed in its principal-axis frame.</p>
        <p><b>What it changes:</b> They define the largest and smallest Zeeman responses available as the molecule is rotated.</p>
        <p><b>What you observe:</b> Characteristic turning points and edges in single-crystal or powder EPR spectra.</p>
      </article>
      <article>
        <strong>Effective \(g(\theta,\phi)\)</strong>
        <p><b>What it is:</b> The projection of the tensor response onto a particular laboratory-field direction.</p>
        <p><b>What it changes:</b> It changes the resonance field continuously with molecular orientation even though the molecular tensor itself is fixed.</p>
        <p><b>What you observe:</b> Angular dependence in single-crystal EPR and orientation-selected features in frozen samples.</p>
      </article>
      <article>
        <strong>\(g\)-strain</strong>
        <p><b>What it is:</b> A distribution of slightly different \(g\)-tensors caused by structural or electrostatic heterogeneity.</p>
        <p><b>What it changes:</b> Different molecules resonate at slightly different fields even at the same nominal orientation.</p>
        <p><b>What you observe:</b> Field-dependent inhomogeneous broadening that often grows toward higher microwave frequency/field.</p>
      </article>
    </div>
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
      <div><span class="interactive-kicker">Interactive model</span><h3>Axial g-tensor resonance</h3></div>
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
        <div class="sensitivity-meter">
          <div class="sensitivity-meter-head"><span>Absolute anisotropy span</span><strong id="epr-span-out">4.0 mT</strong></div>
          <div class="sensitivity-meter-track"><span id="epr-span-meter" class="sensitivity-meter-fill"></span></div>
        </div>
      </div>

      <div class="plot-wrap">
        <svg id="epr-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="EPR resonance field versus molecular orientation">
          <line x1="58" y1="248" x2="530" y2="248" class="plot-axis"/>
          <line x1="58" y1="35" x2="58" y2="248" class="plot-axis"/>
          <text x="478" y="278" class="svg-caption">θ / degree</text>
          <text x="10" y="38" class="svg-caption">ΔB / mT</text>
          <text id="epr-y-max" x="31" y="39" class="svg-tick">0.344</text>
          <text id="epr-y-min" x="31" y="249" class="svg-tick">0.337</text>
          <text x="54" y="267" class="svg-tick">0</text>
          <text x="286" y="267" class="svg-tick">45</text>
          <text x="515" y="267" class="svg-tick">90</text>
          <path id="epr-reference-path" class="plot-reference-line" fill="none" d=""/>
          <text x="336" y="55" class="svg-label">9.5 GHz reference</text>
          <path id="epr-field-path" class="population-line lower-line" fill="none" d="M58.00 78.73 L59.97 78.74 L61.93 78.75 L63.90 78.78 L65.87 78.82 L67.83 78.87 L69.80 78.93 L71.77 79.00 L73.73 79.08 L75.70 79.17 L77.67 79.28 L79.63 79.39 L81.60 79.52 L83.57 79.65 L85.53 79.80 L87.50 79.96 L89.47 80.13 L91.43 80.31 L93.40 80.50 L95.37 80.70 L97.33 80.91 L99.30 81.13 L101.27 81.36 L103.23 81.60 L105.20 81.86 L107.17 82.12 L109.13 82.39 L111.10 82.68 L113.07 82.97 L115.03 83.27 L117.00 83.59 L118.97 83.91 L120.93 84.25 L122.90 84.59 L124.87 84.95 L126.83 85.31 L128.80 85.69 L130.77 86.07 L132.73 86.46 L134.70 86.87 L136.67 87.28 L138.63 87.70 L140.60 88.13 L142.57 88.57 L144.53 89.02 L146.50 89.48 L148.47 89.95 L150.43 90.42 L152.40 90.91 L154.37 91.40 L156.33 91.90 L158.30 92.42 L160.27 92.94 L162.23 93.46 L164.20 94.00 L166.17 94.55 L168.13 95.10 L170.10 95.66 L172.07 96.23 L174.03 96.80 L176.00 97.39 L177.97 97.98 L179.93 98.58 L181.90 99.19 L183.87 99.80 L185.83 100.42 L187.80 101.05 L189.77 101.69 L191.73 102.33 L193.70 102.98 L195.67 103.63 L197.63 104.29 L199.60 104.96 L201.57 105.64 L203.53 106.32 L205.50 107.01 L207.47 107.70 L209.43 108.40 L211.40 109.10 L213.37 109.81 L215.33 110.53 L217.30 111.25 L219.27 111.97 L221.23 112.70 L223.20 113.44 L225.17 114.18 L227.13 114.92 L229.10 115.67 L231.07 116.43 L233.03 117.18 L235.00 117.95 L236.97 118.71 L238.93 119.48 L240.90 120.25 L242.87 121.03 L244.83 121.81 L246.80 122.60 L248.77 123.38 L250.73 124.17 L252.70 124.97 L254.67 125.76 L256.63 126.56 L258.60 127.36 L260.57 128.17 L262.53 128.97 L264.50 129.78 L266.47 130.59 L268.43 131.40 L270.40 132.21 L272.37 133.03 L274.33 133.84 L276.30 134.66 L278.27 135.48 L280.23 136.30 L282.20 137.12 L284.17 137.94 L286.13 138.76 L288.10 139.58 L290.07 140.40 L292.03 141.22 L294.00 142.04 L295.97 142.87 L297.93 143.69 L299.90 144.51 L301.87 145.33 L303.83 146.15 L305.80 146.96 L307.77 147.78 L309.73 148.60 L311.70 149.41 L313.67 150.23 L315.63 151.04 L317.60 151.85 L319.57 152.66 L321.53 153.46 L323.50 154.27 L325.47 155.07 L327.43 155.87 L329.40 156.67 L331.37 157.46 L333.33 158.25 L335.30 159.04 L337.27 159.83 L339.23 160.61 L341.20 161.39 L343.17 162.16 L345.13 162.93 L347.10 163.70 L349.07 164.47 L351.03 165.23 L353.00 165.98 L354.97 166.73 L356.93 167.48 L358.90 168.23 L360.87 168.96 L362.83 169.70 L364.80 170.43 L366.77 171.15 L368.73 171.87 L370.70 172.58 L372.67 173.29 L374.63 173.99 L376.60 174.69 L378.57 175.38 L380.53 176.07 L382.50 176.75 L384.47 177.42 L386.43 178.09 L388.40 178.75 L390.37 179.40 L392.33 180.05 L394.30 180.69 L396.27 181.33 L398.23 181.96 L400.20 182.58 L402.17 183.19 L404.13 183.80 L406.10 184.40 L408.07 184.99 L410.03 185.58 L412.00 186.15 L413.97 186.72 L415.93 187.29 L417.90 187.84 L419.87 188.39 L421.83 188.93 L423.80 189.46 L425.77 189.98 L427.73 190.49 L429.70 191.00 L431.67 191.50 L433.63 191.99 L435.60 192.47 L437.57 192.94 L439.53 193.40 L441.50 193.86 L443.47 194.30 L445.43 194.74 L447.40 195.17 L449.37 195.59 L451.33 195.99 L453.30 196.39 L455.27 196.79 L457.23 197.17 L459.20 197.54 L461.17 197.90 L463.13 198.25 L465.10 198.60 L467.07 198.93 L469.03 199.26 L471.00 199.57 L472.97 199.87 L474.93 200.17 L476.90 200.45 L478.87 200.73 L480.83 200.99 L482.80 201.25 L484.77 201.49 L486.73 201.73 L488.70 201.95 L490.67 202.17 L492.63 202.37 L494.60 202.56 L496.57 202.75 L498.53 202.92 L500.50 203.08 L502.47 203.24 L504.43 203.38 L506.40 203.51 L508.37 203.63 L510.33 203.74 L512.30 203.84 L514.27 203.93 L516.23 204.01 L518.20 204.08 L520.17 204.14 L522.13 204.18 L524.10 204.22 L526.07 204.25 L528.03 204.26 L530.00 204.27"/>
          <line id="epr-marker-line" x1="294.00" y1="35" x2="294.00" y2="248" class="plot-marker"/>
          <circle id="epr-marker" cx="294.00" cy="142.04" r="5" class="plot-point upper-point"/>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">The plot shows the orientation-dependent resonance-field offset around the centre of the axial pattern; the dashed curve is the same tensor at 9.5 GHz. This is not a simulated powder spectrum. A real powder spectrum also requires orientation weighting, transition probabilities, linewidths and any hyperfine or ZFS interactions.</p>
  </div>
</section>


<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">P</span>
    <div><p class="section-eyebrow">Selection rules &amp; field scale</p><h2>A resonance line also tells you which transition the microwave field can drive</h2></div>
  </div>

  <p>For an approximately isolated electron spin in the high-field limit, the dominant magnetic-dipole selection rule is</p>

  <div class="lecture-equation">
  \[
  \Delta m_S=\pm1,
  \qquad
  \Delta m_I=0
  \]
  </div>

  <p>for a transition driven primarily by the transverse microwave field. Hyperfine mixing, ZFS or low-field state mixing can relax this simple picture and redistribute intensity among transitions.</p>

  <p>Resonance position and resonance intensity are therefore different questions. A transition can satisfy the energy condition and still be weak if the microwave operator has a small matrix element or if the two levels have nearly equal populations. Schematically,</p>

  <div class="lecture-equation">
  \[
  I_{i\rightarrow j}
  \propto
  (p_i-p_j)
  \left|
  \langle j|
  \hat{\boldsymbol\mu}\cdot\mathbf B_1
  |i\rangle
  \right|^2.
  \]
  </div>

  <p>The first factor supplies the population difference; the second is the transition probability. This is why a simulated spectrum needs eigenstates, populations and transition matrix elements—not only a list of energy gaps.</p>

  <p>For \(g\approx2\), the resonance field is roughly 0.34 T at X-band (\(\sim9.5\) GHz) and 3.35 T at W-band (\(\sim94\) GHz). Moving to higher field magnifies \(g\)-anisotropy because a small difference in \(g\) corresponds to a larger absolute difference in Zeeman frequency.</p>

  <aside class="lecture-note">
    <strong>Why CW EPR often looks like a derivative:</strong>
    <span>conventional field-modulated CW EPR detects the response to a small modulation of the magnetic field, so the recorded signal is commonly the first derivative of the underlying absorption line.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Powder spectra</p><h2>A frozen sample contains all molecular orientations at once</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>A powder spectrum is an orientation integral, not a single-molecule trace</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Orientation distribution</strong>
        <p><b>What it is:</b> An isotropic frozen powder contains molecules whose principal axes sample every direction relative to the magnetic field.</p>
        <p><b>What it changes:</b> Each orientation contributes at its own resonance field and with an orientation-dependent transition probability.</p>
        <p><b>What you observe:</b> Broad powder patterns with edges/turning points rather than one narrow resonance line.</p>
      </article>
      <article>
        <strong>Turning point</strong>
        <p><b>What it is:</b> An orientation where the resonance field is stationary with respect to small angular changes.</p>
        <p><b>What it changes:</b> Many nearby orientations contribute at nearly the same field, enhancing spectral intensity.</p>
        <p><b>What you observe:</b> Sharp edges or maxima that often correspond approximately to tensor principal values.</p>
      </article>
    </div>
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
    <span class="lecture-index">I</span>
    <div><p class="section-eyebrow">Interactive</p><h2>Turn orientation-dependent resonance fields into a powder spectrum</h2></div>
  </div>

  <p>For an isotropic frozen powder, orientations are uniformly distributed on the sphere, so the polar-angle measure is not \(d\theta\) but</p>

  <div class="lecture-equation">
  \[
  dP
  \propto
  \sin\theta\,d\theta\,d\phi.
  \]
  </div>

  <p>For an axial \(g\)-tensor,</p>

  <div class="lecture-equation">
  \[
  g_\mathrm{eff}(\theta)
  =
  \sqrt{
  g_\perp^2\sin^2\theta+
  g_\parallel^2\cos^2\theta
  },
  \qquad
  B_\mathrm{res}(\theta)
  =
  \frac{h\nu}{\mu_Bg_\mathrm{eff}(\theta)}.
  \]
  </div>

  <div class="interactive-card" id="powder-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Powder-spectrum builder</span><h3>Orientation distribution + resonance condition + linewidth</h3></div>
      <span class="interactive-model-note">axial \(S=\tfrac12\), no hyperfine</span>
    </div>

    <div class="demo-prompt"><strong>Try this:</strong><span>compare X-band and W-band with the same \(g\)-anisotropy. The lower field locator shows the absolute shift that is hidden by zooming the spectrum. Then increase the linewidth until the principal-value structure is washed out.</span></div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="powder-frequency"><span class="control-name">Microwave frequency</span><output id="powder-frequency-out">9.50 GHz</output></label>
        <input id="powder-frequency" type="range" min="5" max="100" step="0.5" value="9.5">

        <label for="powder-gperp"><span class="control-name">\(g_\perp\)</span><output id="powder-gperp-out">2.0050</output></label>
        <input id="powder-gperp" type="range" min="1.90" max="2.20" step="0.0005" value="2.005">

        <label for="powder-gpar"><span class="control-name">\(g_\parallel\)</span><output id="powder-gpar-out">1.9800</output></label>
        <input id="powder-gpar" type="range" min="1.90" max="2.20" step="0.0005" value="1.98">

        <label for="powder-width"><span class="control-name">Gaussian FWHM</span><output id="powder-width-out">1.5 mT</output></label>
        <input id="powder-width" type="range" min="0.2" max="20" step="0.1" value="1.5">

        <div class="demo-presets">
          <button type="button" data-powder-frequency="9.5">X-band</button>
          <button type="button" data-powder-frequency="34">Q-band</button>
          <button type="button" data-powder-frequency="94">W-band</button>
          <button type="button" data-powder-isotropic="1">isotropic g</button>
        </div>

        <div class="interactive-readout">
          <span>\(B_\parallel\) <strong id="powder-bpar">343 mT</strong></span>
          <span>\(B_\perp\) <strong id="powder-bperp">339 mT</strong></span>
          <span>Principal-field span <strong id="powder-span">4.3 mT</strong></span>
          <span>Powder maximum <strong id="powder-peak">340 mT</strong></span>
        </div>

        <p id="powder-explanation" class="demo-explanation">The axial anisotropy produces a powder envelope whose intensity is concentrated near turning-point orientations.</p>
      </div>

      <div class="plot-wrap">
        <svg id="powder-svg" class="lecture-svg" viewBox="0 0 560 320" role="img" aria-label="Simulated axial g-tensor EPR powder absorption">
          <line x1="58" y1="270" x2="530" y2="270" class="plot-axis"/>
          <line x1="58" y1="34" x2="58" y2="270" class="plot-axis"/>
          <line x1="58" y1="152" x2="530" y2="152" class="plot-grid"/>
          <text x="470" y="300" class="svg-caption">B / mT</text>
          <text x="15" y="38" class="svg-caption">abs.</text>
          <path id="powder-path" class="powder-spectrum-line" fill="none" d=""/>
          <line id="powder-par-line" x1="0" y1="34" x2="0" y2="270" class="powder-principal-line"/>
          <line id="powder-perp-line" x1="0" y1="34" x2="0" y2="270" class="powder-principal-line"/>
          <text id="powder-x-min" x="54" y="290" class="svg-tick">330</text>
          <text id="powder-x-max" x="510" y="290" class="svg-tick">350</text>
        </svg>
        <svg id="powder-field-overview" class="lecture-svg" viewBox="0 0 560 86" role="img" aria-label="Absolute magnetic-field position of the powder principal resonances from zero to four tesla">
          <text x="58" y="15" class="svg-caption">Absolute resonance field (fixed 0–4 T)</text>
          <line x1="58" y1="48" x2="530" y2="48" class="plot-axis"/>
          <rect id="powder-overview-band" x="98" y="34" width="1" height="26" fill="currentColor" opacity="0.15"/>
          <line id="powder-overview-par" x1="98" x2="98" y1="31" y2="65" class="powder-principal-line"/>
          <line id="powder-overview-perp" x1="98" x2="98" y1="31" y2="65" class="powder-principal-line"/>
          <text x="58" y="80" class="svg-tick">0 T</text>
          <text x="286" y="80" class="svg-tick">2 T</text>
          <text x="507" y="80" class="svg-tick">4 T</text>
        </svg>
        <p class="interactive-footnote">Top: automatically zoomed powder line shape, normalized to its peak. Bottom: fixed absolute magnetic-field scale; closely spaced principal-field markers may overlap.</p>
      </div>
    </div>

    <p class="interactive-footnote">This pedagogical spectrum assumes an axial \(g\)-tensor, orientation-independent transition probability and Gaussian field broadening. Real powder simulations may also require hyperfine/ZFS tensors, transition-moment anisotropy, strain, multiple species and full Hamiltonian diagonalization.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Linewidths</p><h2>Relaxation determines how sharp a resonance can be</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>A spectral line has a width because phase coherence is finite</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Homogeneous linewidth</strong>
        <p><b>What it is:</b> Broadening experienced by every member of the ensemble because each spin loses phase coherence in time.</p>
        <p><b>What it changes:</b> Shorter \(T_2\) broadens the Lorentzian component of the line through the time–frequency uncertainty relation.</p>
        <p><b>What you observe:</b> A broader resonance even in a perfectly homogeneous sample.</p>
      </article>
      <article>
        <strong>Inhomogeneous broadening / \(T_2^*\)</strong>
        <p><b>What it is:</b> A distribution of static or slowly varying resonance frequencies caused by field inhomogeneity, \(g\)-strain, unresolved hyperfine or structural heterogeneity.</p>
        <p><b>What it changes:</b> Different spins dephase relative to each other without necessarily losing their individual microscopic coherence.</p>
        <p><b>What you observe:</b> Broadened ensemble lines that can often be partly refocused by an echo.</p>
      </article>
    </div>
  </div>


  <p>For a simple exponentially decaying transverse coherence, the homogeneous <em>absorption</em> line is Lorentzian. Its frequency-domain full width at half maximum is</p>

  <div class="lecture-equation">
  \[
  \Delta\nu_\mathrm{FWHM}
  =
  \frac{1}{\pi T_2}.
  \]
  </div>

  <p>That width is not the same quantity as the peak-to-peak separation of the first-derivative line commonly plotted in field-modulated CW EPR. For an ideal derivative Lorentzian, \(\Delta\nu_\mathrm{pp}=\Delta\nu_\mathrm{FWHM}/\sqrt3\).</p>

  <p>Real EPR lines can also contain unresolved hyperfine structure, \(g\)-strain, conformational distributions and other inhomogeneous broadening. Those contributions are often summarized through an effective \(T_2^\ast\), but \(T_2^\ast\) is not the same microscopic quantity as the true homogeneous \(T_2\), and mixed Lorentzian/Gaussian lines do not obey the simple derivative-width relation exactly.</p>
</section>


<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">I</span>
    <div><p class="section-eyebrow">Interactive</p><h2>Why does CW EPR so often look like a derivative?</h2></div>
  </div>

  <div class="lecture-flow-bridge">
    <p>This confused me the first time I saw an EPR spectrum: the physical absorption line is not necessarily the curve plotted by the instrument. In field-modulated CW EPR, a small sinusoidal field modulation plus phase-sensitive detection approximately measures the <strong>first derivative</strong> of the absorption line.</p>
  </div>

  <div class="interactive-card" id="cw-detection-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">CW detection explorer</span><h3>Absorption → field modulation → lock-in signal</h3></div>
      <span class="interactive-model-note">Gaussian teaching line</span>
    </div>

    <div class="demo-prompt"><strong>Try this:</strong><span>make the modulation amplitude much smaller than the linewidth. The lock-in output approaches a clean first derivative. Then increase the modulation until the spectrum visibly distorts.</span></div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="cw-width"><span class="control-name">Absorption FWHM</span><output id="cw-width-out">2.0 mT</output></label>
        <input id="cw-width" type="range" min="0.4" max="8" step="0.1" value="2">

        <label for="cw-mod"><span class="control-name">Field-modulation amplitude</span><output id="cw-mod-out">0.20 mT</output></label>
        <input id="cw-mod" type="range" min="0.02" max="5" step="0.02" value="0.2">

        <div class="demo-presets">
          <button type="button" data-cw="small">small modulation</button>
          <button type="button" data-cw="matched">moderate</button>
          <button type="button" data-cw="over">overmodulated</button>
        </div>

        <div class="interactive-readout">
          <span>\(B_\mathrm{mod}/\Delta B_\mathrm{FWHM}\) <strong id="cw-ratio">0.10</strong></span>
          <span>Derivative peak-to-peak <strong id="cw-pp">1.7 mT</strong></span>
          <span>Detection regime <strong id="cw-regime">near derivative limit</strong></span>
        </div>

        <p id="cw-explanation" class="demo-explanation">The modulation is small compared with the linewidth, so first-harmonic lock-in detection closely follows the derivative of the underlying absorption line.</p>
      </div>

      <div class="plot-wrap">
        <svg id="cw-svg" class="lecture-svg" viewBox="0 0 560 320" role="img" aria-label="CW EPR absorption and field-modulated lock-in signal">
          <line x1="58" y1="270" x2="530" y2="270" class="plot-axis"/>
          <line x1="58" y1="34" x2="58" y2="270" class="plot-axis"/>
          <line x1="58" y1="152" x2="530" y2="152" class="plot-grid"/>
          <text x="476" y="300" class="svg-caption">B − B₀ / mT</text>
          <text x="14" y="38" class="svg-caption">signal</text>
          <path id="cw-absorption-path" class="cw-absorption-line" fill="none" d=""/>
          <path id="cw-lockin-path" class="cw-lockin-line" fill="none" d=""/>
          <text x="78" y="55" class="svg-caption">absorption</text>
          <text x="78" y="74" class="svg-caption">lock-in / derivative-like</text>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">The lock-in signal is computed as the first harmonic of a sinusoidally field-modulated Gaussian absorption line. Real CW EPR may contain Lorentzian/Voigt components, saturation, phase mixing, unresolved hyperfine structure and instrumental response.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">Experimental modes</p><h2>“EPR” is not one experiment</h2></div>
  </div>

  <aside class="lecture-note">
    <strong>What is saturation?</strong>
    <span>If the microwave drive transfers population faster than longitudinal relaxation restores the thermal population difference, the transition partially saturates and the CW signal no longer increases linearly with microwave power. Saturation therefore depends on \(B_1\), \(T_1\) and \(T_2\), not just on how many spins are present.</span>
  </aside>

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

  <aside class="research-connection">
    <span class="research-connection-label">Research connection</span>
    <p>Reaction-yield detected magnetic resonance is a direct example of spectroscopy and chemistry becoming the same observable: resonant spin driving changes radical-pair dynamics, and a chemical yield reports the resonance.</p>
    <div class="research-connection-links">
      <a href="https://doi.org/10.1016/j.freeradbiomed.2026.04.015" target="_blank" rel="noopener"><strong>Reaction-yield detected magnetic resonance spectroscopy of radical pairs in cryptochrome-4a: a computational study</strong><span>Free Radic. Biol. Med. (2026)</span></a>
    </div>
  </aside>
</section>

<aside class="lecture-takeaway">
  <span class="lecture-takeaway-label">Take-home model</span>
  <h3>How a spectrum is generated</h3>
  <ul>
    <li>The Hamiltonian determines energy levels, but a spectral line appears only when the microwave operator connects two populated states with a non-zero transition matrix element.</li>
    <li>Tensor anisotropy maps molecular orientation onto resonance position and intensity; motion and disorder determine how that information is averaged.</li>
    <li>Linewidths and transient signals contain dynamical information and cannot be interpreted solely from static energy levels.</li>
  </ul>
</aside>

<aside class="landmark-study">
  <span class="landmark-label">Landmark practice</span>
  <h3>Modern EPR simulation is already a direct test of the spin Hamiltonian</h3>
  <p>EasySpin made it routine to calculate realistic EPR and ENDOR spectra from spin-Hamiltonian parameters. It is a useful reminder that g, A, D and linewidth are not abstract fitting symbols: together they predict a complete experimental lineshape.</p>
  <div class="landmark-footer">
    <a href="https://doi.org/10.1016/j.jmr.2005.08.013" target="_blank" rel="noopener">S. Stoll & A. Schweiger · Journal of Magnetic Resonance 178, 42–55 (2006) →</a>
    <span>Coherent Control extends the same resonance physics from passive detection to deliberate state manipulation.</span>
  </div>
</aside>

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


<section class="lecture-section external-reading">
  <div class="lecture-section-head">
    <span class="lecture-index literature-index">L</span>
    <div><p class="section-eyebrow">Key external literature</p><h2>Where to read next</h2></div>
  </div>
  <p class="external-reading-intro">These are deliberately selected from outside my own work: foundational papers or reviews that are especially useful for this topic.</p>
  <div class="lecture-reading-grid external-literature-grid">
    <article>
      <span>Foundational resonance</span>
      <h3>Nuclear Induction</h3>
      <p>F. Bloch · Physical Review (1946). A foundational treatment of driven spin precession, resonance and relaxation in magnetic resonance.</p>
      <a href="https://doi.org/10.1103/PhysRev.70.460" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>EPR simulation</span>
      <h3>EasySpin, a comprehensive software package for spectral simulation and analysis in EPR</h3>
      <p>S. Stoll and A. Schweiger · Journal of Magnetic Resonance (2006). A widely used practical and theoretical reference for modern EPR spectral simulation.</p>
      <a href="https://doi.org/10.1016/j.jmr.2005.08.013" target="_blank" rel="noopener">Open DOI →</a>
    </article>
  </div>
</section>
{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-epr.js" defer></script>
<script src="{{ site.url }}/assets/js/lecture-hyperfine.js" defer></script>
<script src="{{ site.url }}/assets/js/lecture-powder.js" defer></script>
<script src="{{ site.url }}/assets/js/lecture-cw-detection.js" defer></script>
