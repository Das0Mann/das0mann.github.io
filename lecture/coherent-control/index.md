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

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Driven spin</p><h2>Add an oscillating transverse field</h2></div>
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
          <path id="rabi-path" class="population-line lower-line" fill="none" d=""/>
          <line id="rabi-marker-line" x1="294" y1="35" x2="294" y2="248" class="plot-marker"/>
          <circle id="rabi-marker" cx="294" cy="35" r="5" class="plot-point upper-point"/>
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

  <p>A rectangular pulse of finite duration cannot be perfectly frequency selective. Its Fourier spectrum has a sinc-like envelope with characteristic width of order \(1/t_p\). Short, strong pulses therefore excite a broader range of resonance offsets; long, weak pulses are more selective.</p>

  <p>This time–frequency tradeoff is central in magnetic resonance: pulse length, \(B_1\), spectral bandwidth and relaxation cannot be optimized independently.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Echoes</p><h2>A \(\pi\) pulse can refocus static frequency offsets</h2></div>
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

{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-rabi.js" defer></script>
