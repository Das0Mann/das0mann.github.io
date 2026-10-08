---
layout: page
title: Molecular Motion → Spin Dynamics
excerpt: "Correlation functions, spectral densities and time-dependent spin Hamiltonians"
permalink: /lecture/molecular-motion/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 07</span>
  <h2>The spin Hamiltonian is rarely truly static</h2>
  <p>In a protein, liquid or flexible molecular system, distances, orientations and electronic structure fluctuate continuously. That turns fixed spin parameters into time series and makes molecular motion part of the spin-dynamics problem rather than a separate background effect.</p>
</header>
<section class="module-learning" aria-label="Learning goals">
  <div class="module-learning-head">
    <span>After this module</span>
    <strong>You should be able to…</strong>
  </div>
  <div class="module-learning-grid">
    <div><span>01</span><p>Turn a trajectory of molecular structures into fluctuations of spin-Hamiltonian parameters.</p></div>
    <div><span>02</span><p>Interpret autocorrelation functions and spectral densities in terms of dynamical timescales.</p></div>
    <div><span>03</span><p>Decide whether motion is fast, resonant with a spin transition, or effectively quasi-static.</p></div>
  </div>
</section>

{% include lecture-connections.html %}


<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Time-dependent Hamiltonians</p><h2>Replace one structure by a trajectory</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Motion can either average an interaction or modulate it strongly enough to drive relaxation</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Static disorder</strong>
        <p><b>What it is:</b> Different molecules or conformations have different Hamiltonian parameters, but each parameter is effectively constant during the experiment.</p>
        <p><b>What it changes:</b> It broadens an ensemble distribution without providing time-dependent transitions for an individual member.</p>
        <p><b>What you observe:</b> Inhomogeneous linewidth, \(T_2^*\) shortening and orientation/conformation distributions.</p>
      </article>
      <article>
        <strong>Dynamic modulation</strong>
        <p><b>What it is:</b> A Hamiltonian parameter changes during the spin evolution because molecular coordinates move in time.</p>
        <p><b>What it changes:</b> Fluctuations can randomize phase or induce transitions when they contain spectral weight at relevant spin frequencies.</p>
        <p><b>What you observe:</b> Homogeneous relaxation, motional narrowing and frequency-dependent \(T_1/T_2\).</p>
      </article>
      <article>
        <strong>Internal vs global motion</strong>
        <p><b>What it is:</b> Side chains, local chromophore motion and protein tumbling occur on different length and time scales.</p>
        <p><b>What it changes:</b> Different modes modulate different tensor components and therefore need not share one universal correlation time.</p>
        <p><b>What you observe:</b> Multi-timescale correlation functions and distinct field/temperature dependence of relaxation channels.</p>
      </article>
    </div>
  </div>


  <p>If the molecular coordinates evolve as \(\mathbf R(t)\), then the spin Hamiltonian can inherit that motion:</p>

  <div class="lecture-equation">
  \[
  \hat H(t)
  =
  \hat H[\mathbf R(t)]
  =
  \overline{\hat H}
  +
  \delta\hat H(t).
  \]
  </div>

  <p>Hyperfine tensors can change as spin density redistributes, exchange can change dramatically with donor–acceptor geometry, dipolar tensors rotate and change with distance, and anisotropic \(g\)-tensors move with the molecular frame.</p>

  <p>More explicitly, write the Hamiltonian as a sum of operator channels whose coefficients depend on geometry,</p>

  <div class="lecture-equation">
  \[
  \hat H[\mathbf R(t)]
  =
  \sum_k
  p_k[\mathbf R(t)]\,\hat O_k.
  \]
  </div>

  <p>Near a reference structure \(\mathbf R_0\), a useful first approximation is a linear response of each spin parameter to nuclear displacement,</p>

  <div class="lecture-equation">
  \[
  \delta p_k(t)
  \approx
  \sum_a
  \left.
  \frac{\partial p_k}{\partial R_a}
  \right|_{\mathbf R_0}
  \delta R_a(t).
  \]
  </div>

  <p>This makes the multiscale connection explicit: molecular motion supplies \(\delta R_a(t)\), electronic structure supplies the derivatives or snapshot values of \(p_k\), and spin dynamics propagates the resulting time-dependent operator.</p>

  <aside class="teacher-note">
    <strong>This is the multiscale step:</strong>
    <span>MD supplies \(\mathbf R(t)\); electronic-structure calculations map selected structures onto magnetic parameters; spin dynamics then propagates the resulting \(H(t)\) or an effective stochastic model derived from it.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Parameter trajectories</p><h2>First separate the mean from the fluctuation</h2></div>
  </div>

  <p>For any scalar interaction parameter \(A(t)\), define</p>

  <div class="lecture-equation">
  \[
  \delta A(t)=A(t)-\langle A\rangle.
  \]
  </div>

  <p>The mean determines the static part of the Hamiltonian. The fluctuation \(\delta A(t)\) contains the motion that can broaden lines, dephase coherences or drive relaxation.</p>

  <p>For tensors the same idea applies component by component—but only after the frames are handled consistently. Comparing tensor components from snapshots in unrelated molecular frames can manufacture artificial “fluctuations” that are purely rotational bookkeeping.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Correlation functions</p><h2>How long does the system remember a fluctuation?</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>A correlation function measures memory, not merely amplitude</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Variance \(\sigma^2\)</strong>
        <p><b>What it is:</b> The mean-square size of the fluctuation around its average value.</p>
        <p><b>What it changes:</b> It sets how strongly a fluctuating Hamiltonian parameter can perturb the spin system.</p>
        <p><b>What you observe:</b> Broader parameter distributions and, together with timescale, stronger relaxation/dephasing.</p>
      </article>
      <article>
        <strong>Correlation time \(\tau_c\)</strong>
        <p><b>What it is:</b> A characteristic time over which the sign and magnitude of a fluctuation remain statistically related to their earlier values.</p>
        <p><b>What it changes:</b> It determines where the fluctuation power sits in frequency space.</p>
        <p><b>What you observe:</b> Whether motion appears motionally averaged, relaxation-efficient or quasi-static on the spin timescale.</p>
      </article>
    </div>
  </div>


  <p>The autocorrelation function is</p>

  <div class="lecture-equation">
  \[
  C_A(t)
  =
  \left\langle
  \delta A(0)\,\delta A(t)
  \right\rangle.
  \]
  </div>

  <p>A rapidly decaying \(C_A(t)\) means the fluctuations lose memory quickly. A slowly decaying or multi-exponential correlation function indicates persistent structural memory or several dynamical processes.</p>

  <p>For a general stationary process, a useful integral correlation time is</p>

  <div class="lecture-equation">
  \[
  \tau_\mathrm{int}
  =
  \frac{1}{C(0)}
  \int_0^\infty C(t)\,dt,
  \]
  </div>

  <p>provided the integral is well behaved. For a single exponential this reduces exactly to the parameter \(\tau_c\), but a multi-timescale protein trajectory need not be representable by one unique decay constant.</p>

  <p>A common teaching model is a single exponential,</p>

  <div class="lecture-equation">
  \[
  C(t)=\sigma^2e^{-|t|/\tau_c},
  \]
  </div>

  <p>where \(\tau_c\) is the correlation time and \(\sigma^2=C(0)\) is the fluctuation variance.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Spectral density</p><h2>Relaxation cares about frequency content, not just fluctuation size</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>The spectral density tells the spin which parts of molecular motion it can 'hear'</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Spectral density \(J(\omega)\)</strong>
        <p><b>What it is:</b> The frequency-domain distribution of fluctuation power obtained from the correlation function.</p>
        <p><b>What it changes:</b> Relaxation is efficient when the fluctuating interaction contains power near an energy-gap frequency of the spin system.</p>
        <p><b>What you observe:</b> Frequency- and field-dependent relaxation rates such as \(T_1^{-1}\) and contributions to \(T_2^{-1}\).</p>
      </article>
      <article>
        <strong>Timescale matching</strong>
        <p><b>What it is:</b> The condition that molecular motion and spin precession occur on comparable timescales, often summarized as \(\omega\tau_c\sim1\) for a simple exponential model.</p>
        <p><b>What it changes:</b> It maximizes spectral weight at that transition frequency for the single-timescale model.</p>
        <p><b>What you observe:</b> A relaxation maximum as field/frequency or molecular correlation time is varied.</p>
      </article>
    </div>
  </div>


  <p>The spectral density is the Fourier transform of the correlation function. Using the two-sided convention,</p>

  <div class="lecture-equation">
  \[
  J(\omega)
  =
  \int_{-\infty}^{\infty}
  C(t)e^{i\omega t}\,dt.
  \]
  </div>

  <p>For the single-exponential correlation model and this two-sided Fourier convention,</p>

  <div class="lecture-equation">
  \[
  J(\omega)
  =
  \frac{2\sigma^2\tau_c}
  {1+\omega^2\tau_c^2}.
  \]
  </div>

  <aside class="lecture-note">
    <strong>Check the spectral-density convention before comparing formulas.</strong>
    <span>One-sided transforms and alternative normalization choices are also common and can differ by factors of two. The physical relaxation rate is unchanged when the transform convention and its prefactors are used consistently.</span>
  </aside>

  <p>This tells us something important: large fluctuations are not automatically efficient at relaxing a particular spin transition. The motion must also contain spectral weight near the relevant transition frequency.</p>

  <aside class="lecture-analogy">
    <span class="lecture-analogy-label">Mental model</span>
    <h3>A spin transition is a narrow-band listener</h3>
    <p>Molecular motion produces a broad spectrum of fluctuation frequencies, like a noisy radio broadcast. A particular spin transition is most sensitive to the part of that spectrum near its own transition frequency. The variance tells you how loud the overall noise is; \(J(\omega)\) tells you how much of that noise is actually being broadcast on the frequency the spin can hear.</p>
    <span class="analogy-limit"><strong>Where the analogy breaks:</strong> real relaxation involves operator-specific matrix elements, multiple transition frequencies and cross-correlations between fluctuating interactions. A single scalar \(J(\omega)\) is only the simplest channel.</span>
  </aside>

  <div class="interactive-card" id="motion-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Timescale matching and spectral weight</h3></div>
      <span class="interactive-model-note">exponential correlation model</span>
    </div>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>choose a spin frequency and move \(\tau_c\) from very fast to very slow. For a fixed \(\omega\), \(J(\omega)\) is largest when \(\omega\tau_c\approx1\).</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="motion-logf"><span class="control-name">Spin frequency \(f\)</span><output id="motion-f-out">100 MHz</output></label>
        <input id="motion-logf" type="range" min="-1" max="4" step="0.01" value="2">

        <label for="motion-logtau"><span class="control-name">Correlation time \(\tau_c\)</span><output id="motion-tau-out">1.00 ns</output></label>
        <input id="motion-logtau" type="range" min="-3" max="4" step="0.01" value="0">

        <label for="motion-sigma"><span class="control-name">Fluctuation amplitude \(\sigma\)</span><output id="motion-sigma-out">5.0 MHz</output></label>
        <input id="motion-sigma" type="range" min="0.1" max="20" step="0.1" value="5">

        <div class="demo-presets">
          <button type="button" data-motion-regime="fast">fast motion</button>
          <button type="button" data-motion-regime="matched">matched</button>
          <button type="button" data-motion-regime="slow">slow motion</button>
          <button type="button" data-motion-frequency="1.4">1.4 MHz</button>
          <button type="button" data-motion-frequency="28">28 MHz</button>
          <button type="button" data-motion-frequency="9500">9.5 GHz</button>
        </div>

        <div class="interactive-readout">
          <span>\(\omega\tau_c\) <strong id="motion-x-out">0.628</strong></span>
          <span>Matching \(\tau_c=1/\omega\) <strong id="motion-match-out">1.59 ns</strong></span>
          <span>\(J(\omega)/\sigma^2\) <strong id="motion-jnorm-out">1.43 ns</strong></span>
          <span>\(J(\omega)\) <strong id="motion-jabs-out">35.8 MHz²·ns</strong></span>
        </div>

        <p id="motion-explanation" class="demo-explanation">The current fluctuation timescale is close to the region of strongest spectral overlap.</p>
      </div>

      <div class="plot-wrap">
        <svg id="motion-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="Normalized spectral weight versus correlation time">
          <line x1="58" y1="248" x2="530" y2="248" class="plot-axis"/>
          <line x1="58" y1="35" x2="58" y2="248" class="plot-axis"/>
          <line x1="58" y1="141.5" x2="530" y2="141.5" class="plot-grid"/>
          <text x="435" y="278" class="svg-caption">log₁₀(τc / ns)</text>
          <text x="13" y="38" class="svg-caption">J / Jmax</text>
          <text x="54" y="267" class="svg-tick">−3</text>
          <text x="287" y="267" class="svg-tick">0.5</text>
          <text x="522" y="267" class="svg-tick">4</text>
          <path id="motion-weight-path" class="population-line lower-line" fill="none" d="M58.00 247.75 L59.48 247.73 L60.95 247.72 L62.42 247.70 L63.90 247.69 L65.38 247.67 L66.85 247.66 L68.33 247.64 L69.80 247.62 L71.27 247.60 L72.75 247.58 L74.23 247.56 L75.70 247.53 L77.17 247.51 L78.65 247.48 L80.13 247.46 L81.60 247.43 L83.08 247.40 L84.55 247.37 L86.02 247.34 L87.50 247.30 L88.98 247.27 L90.45 247.23 L91.92 247.19 L93.40 247.15 L94.88 247.10 L96.35 247.06 L97.83 247.01 L99.30 246.96 L100.77 246.90 L102.25 246.84 L103.73 246.79 L105.20 246.72 L106.67 246.66 L108.15 246.59 L109.63 246.51 L111.10 246.44 L112.58 246.36 L114.05 246.27 L115.52 246.18 L117.00 246.09 L118.48 245.99 L119.95 245.89 L121.42 245.78 L122.90 245.66 L124.38 245.54 L125.85 245.41 L127.33 245.28 L128.80 245.14 L130.27 244.99 L131.75 244.84 L133.23 244.67 L134.70 244.50 L136.18 244.32 L137.65 244.13 L139.13 243.93 L140.60 243.72 L142.07 243.50 L143.55 243.27 L145.02 243.02 L146.50 242.77 L147.98 242.50 L149.45 242.21 L150.93 241.91 L152.40 241.60 L153.88 241.27 L155.35 240.92 L156.82 240.55 L158.30 240.17 L159.77 239.77 L161.25 239.34 L162.73 238.89 L164.20 238.42 L165.68 237.93 L167.15 237.41 L168.63 236.86 L170.10 236.29 L171.57 235.69 L173.05 235.05 L174.52 234.38 L176.00 233.68 L177.48 232.95 L178.95 232.17 L180.43 231.35 L181.90 230.50 L183.38 229.60 L184.85 228.65 L186.32 227.66 L187.80 226.61 L189.28 225.51 L190.75 224.36 L192.22 223.15 L193.70 221.87 L195.17 220.54 L196.65 219.13 L198.13 217.66 L199.60 216.11 L201.08 214.48 L202.55 212.78 L204.03 210.99 L205.50 209.11 L206.97 207.14 L208.45 205.08 L209.92 202.91 L211.40 200.65 L212.88 198.27 L214.35 195.79 L215.83 193.19 L217.30 190.47 L218.78 187.63 L220.25 184.66 L221.72 181.57 L223.20 178.34 L224.67 174.98 L226.15 171.48 L227.63 167.84 L229.10 164.06 L230.58 160.14 L232.05 156.08 L233.53 151.88 L235.00 147.55 L236.47 143.09 L237.95 138.51 L239.42 133.81 L240.90 129.01 L242.38 124.11 L243.85 119.13 L245.33 114.09 L246.80 109.00 L248.28 103.90 L249.75 98.79 L251.22 93.72 L252.70 88.71 L254.17 83.80 L255.65 79.01 L257.13 74.39 L258.60 69.98 L260.08 65.81 L261.55 61.92 L263.02 58.36 L264.50 55.15 L265.98 52.34 L267.45 49.96 L268.92 48.03 L270.40 46.58 L271.88 45.62 L273.35 45.18 L274.83 45.25 L276.30 45.83 L277.77 46.91 L279.25 48.49 L280.73 50.54 L282.20 53.04 L283.67 55.95 L285.15 59.26 L286.63 62.91 L288.10 66.88 L289.58 71.11 L291.05 75.59 L292.52 80.25 L294.00 85.08 L295.48 90.02 L296.95 95.05 L298.42 100.13 L299.90 105.24 L301.38 110.34 L302.85 115.41 L304.33 120.44 L305.80 125.40 L307.27 130.28 L308.75 135.05 L310.23 139.72 L311.70 144.28 L313.17 148.70 L314.65 153.00 L316.13 157.16 L317.60 161.18 L319.07 165.06 L320.55 168.80 L322.02 172.41 L323.50 175.87 L324.98 179.20 L326.45 182.39 L327.93 185.45 L329.40 188.39 L330.88 191.19 L332.35 193.88 L333.82 196.45 L335.30 198.91 L336.78 201.25 L338.25 203.49 L339.72 205.63 L341.20 207.66 L342.68 209.61 L344.15 211.46 L345.63 213.23 L347.10 214.92 L348.57 216.52 L350.05 218.05 L351.53 219.51 L353.00 220.89 L354.47 222.21 L355.95 223.47 L357.43 224.67 L358.90 225.81 L360.38 226.89 L361.85 227.92 L363.32 228.90 L364.80 229.84 L366.28 230.73 L367.75 231.57 L369.22 232.38 L370.70 233.14 L372.18 233.87 L373.65 234.56 L375.13 235.22 L376.60 235.85 L378.07 236.44 L379.55 237.01 L381.03 237.55 L382.50 238.06 L383.97 238.55 L385.45 239.01 L386.93 239.45 L388.40 239.87 L389.88 240.27 L391.35 240.65 L392.82 241.01 L394.30 241.36 L395.78 241.68 L397.25 241.99 L398.72 242.29 L400.20 242.57 L401.68 242.83 L403.15 243.09 L404.63 243.33 L406.10 243.56 L407.57 243.78 L409.05 243.98 L410.53 244.18 L412.00 244.37 L413.47 244.55 L414.95 244.72 L416.43 244.88 L417.90 245.03 L419.38 245.18 L420.85 245.32 L422.32 245.45 L423.80 245.57 L425.28 245.69 L426.75 245.81 L428.22 245.91 L429.70 246.02 L431.18 246.11 L432.65 246.21 L434.13 246.29 L435.60 246.38 L437.07 246.46 L438.55 246.53 L440.03 246.61 L441.50 246.67 L442.97 246.74 L444.45 246.80 L445.93 246.86 L447.40 246.92 L448.88 246.97 L450.35 247.02 L451.82 247.07 L453.30 247.11 L454.78 247.16 L456.25 247.20 L457.72 247.24 L459.20 247.28 L460.68 247.31 L462.15 247.34 L463.63 247.38 L465.10 247.41 L466.57 247.44 L468.05 247.46 L469.53 247.49 L471.00 247.52 L472.47 247.54 L473.95 247.56 L475.43 247.58 L476.90 247.60 L478.38 247.62 L479.85 247.64 L481.32 247.66 L482.80 247.68 L484.28 247.69 L485.75 247.71 L487.22 247.72 L488.70 247.74 L490.18 247.75 L491.65 247.76 L493.13 247.77 L494.60 247.78 L496.07 247.79 L497.55 247.80 L499.03 247.81 L500.50 247.82 L501.97 247.83 L503.45 247.84 L504.93 247.85 L506.40 247.86 L507.88 247.86 L509.35 247.87 L510.82 247.88 L512.30 247.88 L513.78 247.89 L515.25 247.89 L516.72 247.90 L518.20 247.90 L519.67 247.91 L521.15 247.91 L522.63 247.92 L524.10 247.92 L525.58 247.92 L527.05 247.93 L528.53 247.93 L530.00 247.94"/>
          <line id="motion-match-line" x1="273.89" y1="35" x2="273.89" y2="248" class="plot-grid"/>
          <line id="motion-marker-line" x1="260.29" y1="35" x2="260.29" y2="248" class="plot-marker"/>
          <circle id="motion-marker" cx="260.29" cy="65.23" r="5" class="plot-point upper-point"/>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">The plotted quantity is the spectral density at one chosen angular frequency, normalized to its maximum as a function of \(\tau_c\). Real relaxation rates generally combine several spectral-density values with operator-specific prefactors.</p>
  </div>
</section>


<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">P</span>
    <div><p class="section-eyebrow">Rotational motion</p><h2>Anisotropic spin interactions usually care about second-rank rotation</h2></div>
  </div>

  <div class="lecture-flow-bridge">
    <p>A small but important detail: for \(g\), hyperfine, dipolar and ZFS tensors, it is usually not enough to track whether a molecular axis “points the same way.” These interactions transform as tensors, so their rotational relaxation naturally involves second-rank angular correlations.</p>
  </div>

  <div class="lecture-equation">
  \[
  C_2(t)
  =
  \left\langle
  P_2\!\left[
  \mathbf u(0)\!\cdot\!\mathbf u(t)
  \right]
  \right\rangle,
  \qquad
  P_2(x)=\frac12(3x^2-1).
  \]
  </div>

  <p>This is why rotational correlation times quoted for dielectric relaxation, translational diffusion or a simple vector autocorrelation are not automatically the correlation times needed for spin relaxation. The rank and the fluctuating interaction have to match.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Dynamic regimes</p><h2>Fast and slow motion produce different physics</h2></div>
  </div>

  <div class="timescale-strip">
    <div><strong>Fast motion</strong><span>\(\omega\tau_c\ll1\)</span><p>Fluctuations average rapidly. This is the regime behind motional narrowing and many Markovian relaxation models.</p></div>
    <div><strong>Matched timescales</strong><span>\(\omega\tau_c\sim1\)</span><p>Spectral density at the transition frequency is large, so fluctuations can drive efficient relaxation.</p></div>
    <div><strong>Slow motion</strong><span>\(\omega\tau_c\gg1\)</span><p>The system begins to look like an ensemble of slowly changing or quasi-static Hamiltonians.</p></div>
  </div>

  <p>There is no single universal correlation time for a protein. Side-chain motion, global tumbling, loop rearrangements and conformational exchange can all live on different timescales and couple to different spin-Hamiltonian terms.</p>
</section>


<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">P</span>
    <div><p class="section-eyebrow">Global versus internal motion</p><h2>A protein does not have one correlation time</h2></div>
  </div>

  <p>For a bond vector or tensor axis in a macromolecule, overall tumbling and internal flexibility can contribute separately. A simple model-free correlation function can be written schematically as</p>

  <div class="lecture-equation">
  \[
  \frac{C(t)}{C(0)}
  =
  S^2e^{-t/\tau_m}
  +
  (1-S^2)
  e^{-t(1/\tau_m+1/\tau_e)}.
  \]
  </div>

  <p>Here \(S^2\) is an order parameter between 0 and 1, \(\tau_m\) describes global molecular reorientation and \(\tau_e\) an effective internal-motion timescale. \(S^2\approx1\) means the local vector is relatively rigid in the molecular frame; smaller \(S^2\) means larger-amplitude internal motion.</p>

  <aside class="lecture-note">
    <strong>Why this matters for spin dynamics:</strong>
    <span>two motions with the same RMS amplitude can relax spins very differently if their spectral weight falls at different frequencies. Separating amplitudes from timescales is therefore essential.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">From MD to spin parameters</p><h2>A trajectory is not yet a spin-dynamics model</h2></div>
  </div>

  <div class="lecture-pipeline">
    <div><span>Sample</span><strong>MD or enhanced sampling</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Evaluate</span><strong>QC-derived \(A(t)\), \(g(t)\), \(J(t)\), \(D(t)\)</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Analyse</span><strong>means, distributions &amp; correlation functions</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Model</span><strong>spectral densities or explicit \(H(t)\)</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Propagate</span><strong>relaxation or stochastic spin dynamics</strong></div>
  </div>

  <p>How densely you need quantum-chemical calculations depends on how rapidly the parameters vary and how transferable the electronic-structure model is. Interpolating a slowly varying dipolar interaction is very different from learning an exchange coupling that changes exponentially with geometry.</p>

  <aside class="lecture-note">
    <strong>An ensemble of static Hamiltonians is not the same as one fluctuating Hamiltonian.</strong>
    <span>In general,
    \(\left\langle e^{-i\hat H(\xi)t/\hbar}\right\rangle
    \neq
    e^{-i\langle\hat H\rangle t/\hbar}\).
    Averaging final observables over frozen conformations describes static disorder; propagating a single \(\hat H(t)\) describes dynamical modulation. They coincide only in special limits.</span>
  </aside>

  <aside class="research-connection">
    <span class="research-connection-label">Research connection</span>
    <p>This MD → quantum chemistry → spin-dynamics chain is the central multiscale workflow used in our recent protein and biomolecular spin-chemistry studies.</p>
    <div class="research-connection-links">
      <a href="https://doi.org/10.1021/acs.jpcb.5c01187" target="_blank" rel="noopener"><strong>Magnetosensitivity of Model Flavin–Tryptophan Radical Pairs in a Dynamic Protein Environment</strong><span>J. Phys. Chem. B (2025)</span></a>
      <a href="https://doi.org/10.1080/23746149.2026.2660655" target="_blank" rel="noopener"><strong>Multiscale modeling approaches in biomolecular physics</strong><span>Advances in Physics: X (2026)</span></a>
    </div>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">07</span>
    <div><p class="section-eyebrow">Practical pitfalls</p><h2>Correlation functions are easy to calculate badly</h2></div>
  </div>

  <div class="method-ladder">
    <div><span>Non-stationarity</span><p>If the trajectory drifts between states, a single stationary correlation function may not be meaningful.</p></div>
    <div><span>Insufficient sampling</span><p>Slow tails in \(C(t)\) are especially sensitive to trajectory length and the number of independent samples.</p></div>
    <div><span>Frame artefacts</span><p>Tensor components must be compared in a consistent molecular or laboratory frame.</p></div>
    <div><span>Overfitting one exponential</span><p>Real biomolecular correlations are often multi-timescale and can contain oscillatory or non-exponential structure.</p></div>
  </div>

  <aside class="teacher-note">
    <strong>The correlation function is a model diagnostic, not just an intermediate file.</strong>
    <span>If \(C(t)\) is strongly non-exponential or shows long memory, that is telling you something about whether a simple Markovian relaxation model is appropriate.</span>
  </aside>
</section>

<aside class="lecture-takeaway">
  <span class="lecture-takeaway-label">Take-home model</span>
  <h3>From molecular dynamics to spin relaxation</h3>
  <ul>
    <li>A molecular trajectory matters only through the Hamiltonian parameters it modulates: R(t) must be mapped to A(t), g(t), J(t), D(t) or other coefficients.</li>
    <li>Correlation functions quantify memory; spectral densities determine how much fluctuation power exists at the spin-transition frequencies that matter.</li>
    <li>Static ensemble averaging and explicit time-dependent propagation describe different physical limits and should not be interchanged silently.</li>
  </ul>
</aside>

<aside class="landmark-study">
  <span class="landmark-label">Landmark dynamics</span>
  <h3>Relaxation can report molecular motion only through a dynamical model</h3>
  <p>The Lipari–Szabo model-free framework became influential because it separated overall tumbling from internal motion while connecting both to spectral densities. The broader lesson applies here too: relaxation is sensitive to amplitudes and timescales, not merely to structural fluctuations.</p>
  <div class="landmark-footer">
    <a href="https://doi.org/10.1021/ja00381a009" target="_blank" rel="noopener">G. Lipari & A. Szabo · JACS 104, 4546–4559 (1982) →</a>
    <span>Open-System Methods then turns these fluctuation statistics into reduced quantum dynamics.</span>
  </div>
</aside>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">08</span>
    <div><p class="section-eyebrow">Selected reading</p><h2>Examples from my work</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>Dynamic protein environment</span><h3>Magnetosensitivity of Model Flavin–Tryptophan Radical Pairs in a Dynamic Protein Environment</h3><p>Directly connects protein motion and fluctuating radical-pair interactions to spin observables.</p><a href="https://doi.org/10.1021/acs.jpcb.5c01187" target="_blank" rel="noopener">J. Phys. Chem. B (2025) →</a></article>
    <article><span>Stochastic propagation</span><h3>Spin Dynamics of Radical Pairs Using the Stochastic Schrödinger Equation in MolSpin</h3><p>An efficient route for propagating large spin systems under stochastic dynamics.</p><a href="https://doi.org/10.1021/acs.jctc.4c00361" target="_blank" rel="noopener">J. Chem. Theory Comput. (2024) →</a></article>
    <article><span>Conformational subensembles</span><h3>Conformational Switching Controls Biradical Spin Dynamics in Flavin–Tryptophan Dyads</h3><p>Shows how distinct molecular conformations can control spin-dynamic pathways.</p><a href="https://doi.org/10.1021/jacs.5c22947" target="_blank" rel="noopener">JACS (2026) →</a></article>
    <article><span>Multiscale theory</span><h3>Multiscale modeling approaches in biomolecular physics</h3><p>A broader framework for linking atomistic motion to electronic and quantum observables.</p><a href="https://doi.org/10.1080/23746149.2026.2660655" target="_blank" rel="noopener">Advances in Physics: X (2026) →</a></article>
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
      <span>Molecular timescales</span>
      <h3>Model-free approach to the interpretation of nuclear magnetic resonance relaxation in macromolecules. 1. Theory and range of validity</h3>
      <p>G. Lipari and A. Szabo · JACS (1982). A classic connection between molecular correlation times, spectral densities and relaxation observables.</p>
      <a href="https://doi.org/10.1021/ja00381a009" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Relaxation from fluctuations</span>
      <h3>On the Theory of Relaxation Processes</h3>
      <p>A. G. Redfield · IBM Journal of Research and Development (1957). The foundational route from fluctuating interactions to reduced spin relaxation dynamics.</p>
      <a href="https://doi.org/10.1147/rd.11.0019" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Stochastic line shapes</span>
      <h3>Note on the Stochastic Theory of Resonance Absorption</h3>
      <p>R. Kubo · Journal of the Physical Society of Japan (1954). A classic treatment of how random frequency modulation produces resonance line-shape changes and motional narrowing.</p>
      <a href="https://doi.org/10.1143/JPSJ.9.935" target="_blank" rel="noopener">Open DOI →</a>
    </article>
  </div>
</section>
{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-motion.js" defer></script>
