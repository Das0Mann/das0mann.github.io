---
layout: page
title: Pulse & Coherent Control
excerpt: "Rotating frames, Rabi oscillations, pulse area, detuning and echoes"
permalink: /lecture/coherent-control/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 12</span>
  <h2>Instead of watching the spin evolve, drive it deliberately</h2>
  <p>A resonant RF or microwave field can rotate a spin state in a controlled way. The language of pulses—\(\pi/2\), \(\pi\), phase, detuning and echo—comes from solving a driven two-level problem and then using those rotations as building blocks for spectroscopy and quantum control.</p>
</header>
<section class="module-learning" aria-label="Learning goals">
  <div class="module-learning-head"><span>After this module</span><strong>You should be able to…</strong></div>
  <div class="module-learning-grid">
    <div><span>01</span><p>Calculate Rabi oscillations and the duration of ideal π/2 and π pulses.</p></div>
    <div><span>02</span><p>Use the rotating-frame picture to understand resonance, detuning and pulse bandwidth.</p></div>
    <div><span>03</span><p>Explain what an echo refocuses and what irreversible decoherence it cannot reverse.</p></div>
  </div>
</section>

{% include lecture-connections.html %}


<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Driven spin</p><h2>Add an oscillating transverse field</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>The drive has two independent physical knobs: strength and frequency mismatch</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>\(B_1\) / Rabi frequency</strong>
        <p><b>What it is:</b> The transverse oscillating field couples the two spin states; its amplitude sets the on-resonance Rabi frequency.</p>
        <p><b>What it changes:</b> It controls how quickly the Bloch vector rotates during a pulse and therefore the pulse area.</p>
        <p><b>What you observe:</b> The period of Rabi oscillations and the required duration of \(\pi/2\) and \(\pi\) pulses.</p>
      </article>
      <article>
        <strong>Detuning \(\Delta\nu\)</strong>
        <p><b>What it is:</b> The difference between the applied drive frequency and the spin's resonance frequency.</p>
        <p><b>What it changes:</b> It tilts the effective field in the rotating frame and reduces the maximum achievable population transfer for a rectangular pulse.</p>
        <p><b>What you observe:</b> Off-resonance excitation, phase errors and frequency-selective pulse profiles.</p>
      </article>
    </div>
  </div>


  <p>For a spin-\(\tfrac12\) in a static field \(B_0\hat z\), add an oscillating field \(B_1(t)\) transverse to \(B_0\). In a rotating frame and under the rotating-wave approximation, a useful frequency-unit Hamiltonian is</p>

  <div class="lecture-equation">
  \[
  \frac{H_\mathrm{rot}}{h}
  =
  \frac12
  \begin{pmatrix}
  -\Delta\nu & \nu_1\\
  \nu_1 & +\Delta\nu
  \end{pmatrix},
  \]
  </div>

  <p>where \(\Delta\nu\) is the detuning from resonance and \(\nu_1\) is the on-resonance Rabi frequency in cycles per second.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Rabi oscillations</p><h2>On resonance, pulse duration becomes a rotation angle</h2></div>
  </div>

  <p>Starting from one basis state, the driven transition probability is</p>

  <div class="lecture-equation">
  \[
  P(t)
  =
  \frac{\nu_1^2}
  {\nu_1^2+\Delta\nu^2}
  \sin^2\!\left[
  \pi\sqrt{\nu_1^2+\Delta\nu^2}\,t
  \right].
  \]
  </div>

  <p>On resonance, a \(\pi\) pulse requires \(t_\pi=1/(2\nu_1)\), while a \(\pi/2\) pulse requires \(t_{\pi/2}=1/(4\nu_1)\).</p>

  <div class="interactive-card" id="rabi-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Pulse area and detuning</h3></div>
      <span class="interactive-model-note">RWA two-level system</span>
    </div>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>choose the \(\pi\)-pulse preset on resonance. Then add detuning without changing the pulse duration: the maximum transfer drops and the effective rotation axis tilts.</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="rabi-nu1"><span class="control-name">Rabi frequency \(\nu_1\)</span><output id="rabi-nu1-out">10.0 MHz</output></label>
        <input id="rabi-nu1" type="range" min="0.2" max="50" step="0.1" value="10">

        <label for="rabi-detuning"><span class="control-name">Detuning \(\Delta\nu\)</span><output id="rabi-detuning-out">0.0 MHz</output></label>
        <input id="rabi-detuning" type="range" min="-50" max="50" step="0.1" value="0">

        <label for="rabi-time"><span class="control-name">Pulse duration \(t_p\)</span><output id="rabi-time-out">50.0 ns</output></label>
        <input id="rabi-time" type="range" min="1" max="500" step="1" value="50">

        <div class="demo-presets">
          <button type="button" data-rabi-mode="pi2">π/2 pulse</button>
          <button type="button" data-rabi-mode="pi">π pulse</button>
          <button type="button" data-rabi-mode="detuned">detuned π-time</button>
        </div>

        <div class="interactive-readout">
          <span>Generalized frequency <strong id="rabi-general-out">10.0 MHz</strong></span>
          <span>On-resonance flip angle <strong id="rabi-angle-out">180.0°</strong></span>
          <span>Transition probability <strong id="rabi-prob-out">100.0%</strong></span>
          <span>\(t_\pi\) on resonance <strong id="rabi-pi-out">50.0 ns</strong></span>
        </div>

        <p id="rabi-explanation" class="demo-explanation">The pulse is resonant and has exactly the area of a π rotation.</p>
      </div>

      <div class="plot-wrap">
        <svg id="rabi-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="Rabi transition probability as a function of pulse duration">
          <line x1="58" y1="248" x2="530" y2="248" class="plot-axis"/>
          <line x1="58" y1="35" x2="58" y2="248" class="plot-axis"/>
          <line x1="58" y1="141.5" x2="530" y2="141.5" class="plot-grid"/>
          <text x="455" y="278" class="svg-caption">pulse time / ns</text>
          <text x="14" y="38" class="svg-caption">transition probability</text>
          <path id="rabi-path" class="population-line lower-line" fill="none" d="M58.00 248.00 L59.31 247.59 L60.62 246.38 L61.93 244.37 L63.24 241.58 L64.56 238.02 L65.87 233.73 L67.18 228.74 L68.49 223.08 L69.80 216.81 L71.11 209.96 L72.42 202.59 L73.73 194.75 L75.04 186.51 L76.36 177.93 L77.67 169.06 L78.98 159.99 L80.29 150.78 L81.60 141.50 L82.91 132.22 L84.22 123.01 L85.53 113.94 L86.84 105.07 L88.16 96.49 L89.47 88.25 L90.78 80.41 L92.09 73.04 L93.40 66.19 L94.71 59.92 L96.02 54.26 L97.33 49.27 L98.64 44.98 L99.96 41.42 L101.27 38.63 L102.58 36.62 L103.89 35.41 L105.20 35.00 L106.51 35.41 L107.82 36.62 L109.13 38.63 L110.44 41.42 L111.76 44.98 L113.07 49.27 L114.38 54.26 L115.69 59.92 L117.00 66.19 L118.31 73.04 L119.62 80.41 L120.93 88.25 L122.24 96.49 L123.56 105.07 L124.87 113.94 L126.18 123.01 L127.49 132.22 L128.80 141.50 L130.11 150.78 L131.42 159.99 L132.73 169.06 L134.04 177.93 L135.36 186.51 L136.67 194.75 L137.98 202.59 L139.29 209.96 L140.60 216.81 L141.91 223.08 L143.22 228.74 L144.53 233.73 L145.84 238.02 L147.16 241.58 L148.47 244.37 L149.78 246.38 L151.09 247.59 L152.40 248.00 L153.71 247.59 L155.02 246.38 L156.33 244.37 L157.64 241.58 L158.96 238.02 L160.27 233.73 L161.58 228.74 L162.89 223.08 L164.20 216.81 L165.51 209.96 L166.82 202.59 L168.13 194.75 L169.44 186.51 L170.76 177.93 L172.07 169.06 L173.38 159.99 L174.69 150.78 L176.00 141.50 L177.31 132.22 L178.62 123.01 L179.93 113.94 L181.24 105.07 L182.56 96.49 L183.87 88.25 L185.18 80.41 L186.49 73.04 L187.80 66.19 L189.11 59.92 L190.42 54.26 L191.73 49.27 L193.04 44.98 L194.36 41.42 L195.67 38.63 L196.98 36.62 L198.29 35.41 L199.60 35.00 L200.91 35.41 L202.22 36.62 L203.53 38.63 L204.84 41.42 L206.16 44.98 L207.47 49.27 L208.78 54.26 L210.09 59.92 L211.40 66.19 L212.71 73.04 L214.02 80.41 L215.33 88.25 L216.64 96.49 L217.96 105.07 L219.27 113.94 L220.58 123.01 L221.89 132.22 L223.20 141.50 L224.51 150.78 L225.82 159.99 L227.13 169.06 L228.44 177.93 L229.76 186.51 L231.07 194.75 L232.38 202.59 L233.69 209.96 L235.00 216.81 L236.31 223.08 L237.62 228.74 L238.93 233.73 L240.24 238.02 L241.56 241.58 L242.87 244.37 L244.18 246.38 L245.49 247.59 L246.80 248.00 L248.11 247.59 L249.42 246.38 L250.73 244.37 L252.04 241.58 L253.36 238.02 L254.67 233.73 L255.98 228.74 L257.29 223.08 L258.60 216.81 L259.91 209.96 L261.22 202.59 L262.53 194.75 L263.84 186.51 L265.16 177.93 L266.47 169.06 L267.78 159.99 L269.09 150.78 L270.40 141.50 L271.71 132.22 L273.02 123.01 L274.33 113.94 L275.64 105.07 L276.96 96.49 L278.27 88.25 L279.58 80.41 L280.89 73.04 L282.20 66.19 L283.51 59.92 L284.82 54.26 L286.13 49.27 L287.44 44.98 L288.76 41.42 L290.07 38.63 L291.38 36.62 L292.69 35.41 L294.00 35.00 L295.31 35.41 L296.62 36.62 L297.93 38.63 L299.24 41.42 L300.56 44.98 L301.87 49.27 L303.18 54.26 L304.49 59.92 L305.80 66.19 L307.11 73.04 L308.42 80.41 L309.73 88.25 L311.04 96.49 L312.36 105.07 L313.67 113.94 L314.98 123.01 L316.29 132.22 L317.60 141.50 L318.91 150.78 L320.22 159.99 L321.53 169.06 L322.84 177.93 L324.16 186.51 L325.47 194.75 L326.78 202.59 L328.09 209.96 L329.40 216.81 L330.71 223.08 L332.02 228.74 L333.33 233.73 L334.64 238.02 L335.96 241.58 L337.27 244.37 L338.58 246.38 L339.89 247.59 L341.20 248.00 L342.51 247.59 L343.82 246.38 L345.13 244.37 L346.44 241.58 L347.76 238.02 L349.07 233.73 L350.38 228.74 L351.69 223.08 L353.00 216.81 L354.31 209.96 L355.62 202.59 L356.93 194.75 L358.24 186.51 L359.56 177.93 L360.87 169.06 L362.18 159.99 L363.49 150.78 L364.80 141.50 L366.11 132.22 L367.42 123.01 L368.73 113.94 L370.04 105.07 L371.36 96.49 L372.67 88.25 L373.98 80.41 L375.29 73.04 L376.60 66.19 L377.91 59.92 L379.22 54.26 L380.53 49.27 L381.84 44.98 L383.16 41.42 L384.47 38.63 L385.78 36.62 L387.09 35.41 L388.40 35.00 L389.71 35.41 L391.02 36.62 L392.33 38.63 L393.64 41.42 L394.96 44.98 L396.27 49.27 L397.58 54.26 L398.89 59.92 L400.20 66.19 L401.51 73.04 L402.82 80.41 L404.13 88.25 L405.44 96.49 L406.76 105.07 L408.07 113.94 L409.38 123.01 L410.69 132.22 L412.00 141.50 L413.31 150.78 L414.62 159.99 L415.93 169.06 L417.24 177.93 L418.56 186.51 L419.87 194.75 L421.18 202.59 L422.49 209.96 L423.80 216.81 L425.11 223.08 L426.42 228.74 L427.73 233.73 L429.04 238.02 L430.36 241.58 L431.67 244.37 L432.98 246.38 L434.29 247.59 L435.60 248.00 L436.91 247.59 L438.22 246.38 L439.53 244.37 L440.84 241.58 L442.16 238.02 L443.47 233.73 L444.78 228.74 L446.09 223.08 L447.40 216.81 L448.71 209.96 L450.02 202.59 L451.33 194.75 L452.64 186.51 L453.96 177.93 L455.27 169.06 L456.58 159.99 L457.89 150.78 L459.20 141.50 L460.51 132.22 L461.82 123.01 L463.13 113.94 L464.44 105.07 L465.76 96.49 L467.07 88.25 L468.38 80.41 L469.69 73.04 L471.00 66.19 L472.31 59.92 L473.62 54.26 L474.93 49.27 L476.24 44.98 L477.56 41.42 L478.87 38.63 L480.18 36.62 L481.49 35.41 L482.80 35.00 L484.11 35.41 L485.42 36.62 L486.73 38.63 L488.04 41.42 L489.36 44.98 L490.67 49.27 L491.98 54.26 L493.29 59.92 L494.60 66.19 L495.91 73.04 L497.22 80.41 L498.53 88.25 L499.84 96.49 L501.16 105.07 L502.47 113.94 L503.78 123.01 L505.09 132.22 L506.40 141.50 L507.71 150.78 L509.02 159.99 L510.33 169.06 L511.64 177.93 L512.96 186.51 L514.27 194.75 L515.58 202.59 L516.89 209.96 L518.20 216.81 L519.51 223.08 L520.82 228.74 L522.13 233.73 L523.44 238.02 L524.76 241.58 L526.07 244.37 L527.38 246.38 L528.69 247.59 L530.00 248.00"/>
          <line id="rabi-marker-line" x1="105.20" y1="35" x2="105.20" y2="248" class="plot-marker"/>
          <circle id="rabi-marker" cx="105.20" cy="35.00" r="5" class="plot-point upper-point"/>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">The model assumes a coherent two-level system, a rectangular pulse and the rotating-wave approximation. Real pulse excitation profiles are modified by relaxation, inhomogeneity, additional levels and pulse shape.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Rotating frame</p><h2>Make the fast Larmor motion disappear</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>The rotating frame is a change of viewpoint, not an extra physical force</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Rotating frame</strong>
        <p><b>What it is:</b> A coordinate frame chosen to rotate near the microwave/RF frequency so the rapid laboratory-frame precession is factored out.</p>
        <p><b>What it changes:</b> A time-dependent drive becomes approximately a static effective field under the rotating-wave approximation.</p>
        <p><b>What you observe:</b> Simpler pulse trajectories and the intuitive effective-field picture used throughout magnetic resonance.</p>
      </article>
      <article>
        <strong>Rotating-wave approximation</strong>
        <p><b>What it is:</b> An approximation that neglects the counter-rotating drive component when the drive is near resonance and weak compared with the carrier frequency.</p>
        <p><b>What it changes:</b> It reduces the driven problem to slow dynamics around an effective field.</p>
        <p><b>What you observe:</b> Accurate standard pulse behaviour in its regime; systematic deviations for very strong or ultrabroadband driving.</p>
      </article>
    </div>
  </div>


  <p>In the laboratory frame the spin precesses rapidly around \(B_0\) while the microwave field oscillates. Transforming into a frame rotating near the drive frequency converts that problem into precession around an effective static field.</p>

  <div class="lecture-equation">
  \[
  \boldsymbol\Omega_\mathrm{eff}
  =
  \left(
  \Omega_1,\,
  0,\,
  \Delta\omega
  \right).
  \]
  </div>

  <p>On resonance the effective field lies in the transverse plane. Off resonance it tilts toward \(z\), which is why a pulse of the same duration no longer performs the intended rotation.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Pulse bandwidth</p><h2>Short pulses are spectrally broad</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Time resolution and frequency selectivity are Fourier partners</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Pulse duration \(t_p\)</strong>
        <p><b>What it is:</b> The time over which the coherent drive is applied.</p>
        <p><b>What it changes:</b> Shortening the pulse broadens its frequency spectrum, while lengthening it makes excitation more selective.</p>
        <p><b>What you observe:</b> How much of an inhomogeneously broadened spectrum is rotated by the pulse.</p>
      </article>
      <article>
        <strong>Excitation bandwidth</strong>
        <p><b>What it is:</b> The range of resonance offsets for which the pulse produces substantial rotation.</p>
        <p><b>What it changes:</b> It determines whether spins with different \(g\)-values, hyperfine shifts or orientations are excited uniformly.</p>
        <p><b>What you observe:</b> Frequency/field-selective pulse profiles and orientation selection in anisotropic EPR.</p>
      </article>
      <article>
        <strong>Pulse shape</strong>
        <p><b>What it is:</b> The time dependence of amplitude, phase and sometimes carrier frequency during the pulse.</p>
        <p><b>What it changes:</b> Shaping redistributes spectral power and can make rotations more robust to detuning or \(B_1\) inhomogeneity.</p>
        <p><b>What you observe:</b> Broader or more selective excitation, reduced pulse errors and improved echo/control fidelity.</p>
      </article>
    </div>
  </div>


  <p>A rectangular pulse of finite duration cannot be perfectly frequency selective. Its Fourier spectrum has a sinc-like envelope with characteristic width of order \(1/t_p\). Short, strong pulses therefore excite a broader range of resonance offsets; long, weak pulses are more selective.</p>

  <p>This time–frequency tradeoff is central in magnetic resonance: pulse length, \(B_1\), spectral bandwidth and relaxation cannot be optimized independently.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Echoes</p><h2>A \(\pi\) pulse can refocus static frequency offsets</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>An echo reverses reversible phase dispersion, not irreversible decoherence</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Inhomogeneous dephasing</strong>
        <p><b>What it is:</b> Different members of an ensemble precess at slightly different static frequencies.</p>
        <p><b>What it changes:</b> The ensemble transverse signal cancels even though individual spins can remain coherent.</p>
        <p><b>What you observe:</b> A short apparent \(T_2^*\) that can be refocused by a pulse sequence.</p>
      </article>
      <article>
        <strong>Hahn echo</strong>
        <p><b>What it is:</b> A \(\pi/2-\tau-\pi-\tau\) sequence that reverses static phase accumulation caused by frequency offsets.</p>
        <p><b>What it changes:</b> It rephases spins at the echo time while leaving truly irreversible stochastic decoherence unrecovered.</p>
        <p><b>What you observe:</b> An echo amplitude whose decay reports homogeneous coherence loss more directly than a free-induction signal.</p>
      </article>
    </div>
  </div>


  <p>In a Hahn echo, an initial \(\pi/2\) pulse creates transverse coherence. Different members of an ensemble then accumulate different phases. A \(\pi\) pulse reverses the effect of static frequency offsets, producing an echo after the same free-evolution delay.</p>

  <div class="lecture-equation">
  \[
  \frac{\pi}{2}
  \;-\;
  \tau
  \;-\;
  \pi
  \;-\;
  \tau
  \;-\;
  \text{echo}.
  \]
  </div>

  <p>Irreversible dephasing is not refocused. That distinction is why echo experiments can separate homogeneous coherence decay from static inhomogeneous broadening.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">Beyond rectangular pulses</p><h2>Pulse shape and phase are control variables</h2></div>
  </div>

  <div class="method-ladder">
    <div><span>Composite pulses</span><p>Sequences of rotations with different phases can compensate systematic pulse errors.</p></div>
    <div><span>Adiabatic / shaped pulses</span><p>Amplitude and frequency are varied smoothly to improve bandwidth or robustness.</p></div>
    <div><span>Phase cycling</span><p>Repeat the experiment with controlled pulse phases to select pathways and reject unwanted signals.</p></div>
    <div><span>Optimal control</span><p>Numerically optimize waveform parameters to achieve a target state transfer under realistic constraints.</p></div>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">07</span>
    <div><p class="section-eyebrow">Radical pairs &amp; RYDMR</p><h2>Coherent driving can be read out chemically</h2></div>
  </div>

  <p>In conventional EPR the pulse sequence is detected through magnetization or an echo. In a radical-pair experiment, the same resonant driving can instead change singlet–triplet dynamics and therefore a chemical reaction yield.</p>

  <p>This is the connection to reaction-yield detected magnetic resonance: coherent control acts on the spin system, while chemistry provides the detector.</p>

  <aside class="research-connection">
    <span class="research-connection-label">Research connection</span>
    <p>In reaction-yield detected magnetic resonance the pulse/control problem and the radical-pair chemistry are inseparable: the field drives a spin transition, and spin-selective chemistry converts that coherent perturbation into a yield.</p>
    <div class="research-connection-links">
      <a href="https://doi.org/10.1016/j.freeradbiomed.2026.04.015" target="_blank" rel="noopener"><strong>Reaction-yield detected magnetic resonance spectroscopy of radical pairs in cryptochrome-4a: a computational study</strong><span>Free Radic. Biol. Med. (2026)</span></a>
    </div>
  </aside>
</section>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">08</span>
    <div><p class="section-eyebrow">Selected reading</p><h2>Examples from my work</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>Driven radical pairs</span><h3>Reaction-yield detected magnetic resonance spectroscopy of radical pairs in cryptochrome-4a: a computational study</h3><p>Resonant driving of radical-pair spin dynamics with chemical-yield detection.</p><a href="https://doi.org/10.1016/j.freeradbiomed.2026.04.015" target="_blank" rel="noopener">Free Radic. Biol. Med. (2026) →</a></article>
    <article><span>Weak RF perturbations</span><h3>Weak Radiofrequency Field Effects on Biological Systems Mediated through the Radical Pair Mechanism</h3><p>How oscillating fields interact with radical-pair dynamics across different regimes.</p><a href="https://doi.org/10.1021/acs.chemrev.5c00178" target="_blank" rel="noopener">Chemical Reviews (2025) →</a></article>
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
      <span>Driven two-level systems</span>
      <h3>Space Quantization in a Gyrating Magnetic Field</h3>
      <p>I. I. Rabi · Physical Review (1937). The classic analysis underlying resonantly driven angular-momentum transitions and Rabi oscillations.</p>
      <a href="https://doi.org/10.1103/PhysRev.51.652" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Spin echoes</span>
      <h3>Spin Echoes</h3>
      <p>E. L. Hahn · Physical Review (1950). The foundational pulse experiment establishing spin echoes and refocusing of static frequency dispersion.</p>
      <a href="https://doi.org/10.1103/PhysRev.80.580" target="_blank" rel="noopener">Open DOI →</a>
    </article>
  </div>
</section>
{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-rabi.js" defer></script>
