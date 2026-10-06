---
layout: page
title: Spin Dynamics
excerpt: "From spin-1/2 and Larmor precession to relaxation and open quantum systems"
permalink: /lecture/spin-dynamics/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 02</span>
  <h2>What does a spin Hamiltonian do in time?</h2>
  <p>Once the electronic structure has been reduced to a spin Hamiltonian, the problem changes. We are no longer solving for the electrons in real space; we are propagating amplitudes, populations and coherences in spin space.</p>
</header>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Spin-\(\tfrac12\)</p><h2>The smallest non-trivial spin</h2></div>
  </div>

  <p>A spin-\(\tfrac12\) system has a two-dimensional Hilbert space. Choosing the \(z\)-axis as quantization axis gives the basis states \(\lvert\alpha\rangle\) and \(\lvert\beta\rangle\). The corresponding spin operators are</p>

  <div class="lecture-equation">
  \[
  \hat S_x=\frac{\hbar}{2}
  \begin{pmatrix}0&1\\1&0\end{pmatrix},
  \quad
  \hat S_y=\frac{\hbar}{2}
  \begin{pmatrix}0&-i\\i&0\end{pmatrix},
  \quad
  \hat S_z=\frac{\hbar}{2}
  \begin{pmatrix}1&0\\0&-1\end{pmatrix}.
  \]
  </div>

  <p>These are not three independent classical components. They are non-commuting operators. That non-commutativity is what gives spin dynamics its genuinely quantum character.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Many spins</p><h2>Hilbert spaces multiply very quickly</h2></div>
  </div>

  <p>For several spins the total Hilbert space is a tensor product. Two electron spins already give four basis states; adding nuclear spins multiplies the dimension again. For \(N\) spin-\(\tfrac12\) particles,</p>

  <div class="lecture-equation">
  \[
  \dim\mathcal H=2^N.
  \]
  </div>

  <p>This exponential growth is the basic scaling problem behind large radical-pair and magnetic-resonance simulations. It is also why stochastic trace sampling, sparse representations and carefully chosen propagators become useful.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Coherent dynamics</p><h2>Start with Larmor precession</h2></div>
  </div>

  <p>For one approximately isotropic electron spin in a static field, the Zeeman Hamiltonian is enough to generate precession. The frequency is</p>

  <div class="lecture-equation">
  \[
  f_\mathrm L=\frac{g\mu_B B_0}{h}.
  \]
  </div>

  <div class="interactive-card" id="larmor-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Electron-spin Larmor precession</h3></div>
      <button id="larmor-toggle" class="demo-toggle" type="button">Pause</button>
    </div>

    <div class="demo-prompt"><strong>Try this:</strong><span>compare \(50~\mu\mathrm T\), \(1~\mathrm{mT}\) and \(10~\mathrm{mT}\). The physical frequency scales linearly with the field.</span></div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="larmor-b"><span class="control-name">Magnetic field \(B_0\)</span><output id="larmor-b-out">1.00 mT</output></label>
        <input id="larmor-b" type="range" min="0.05" max="10" step="0.05" value="1">
        <label for="larmor-g"><span class="control-name"><em>g</em>-factor</span><output id="larmor-g-out">2.0023</output></label>
        <input id="larmor-g" type="range" min="1.8" max="2.2" step="0.0001" value="2.0023">

        <div class="demo-presets">
          <button type="button" data-larmor-b="0.05">50 μT</button>
          <button type="button" data-larmor-b="1">1 mT</button>
          <button type="button" data-larmor-b="10">10 mT</button>
        </div>

        <div class="interactive-readout">
          <span>Larmor frequency <strong id="larmor-frequency">28.02 MHz</strong></span>
          <span>Precession period <strong id="larmor-period">35.69 ns</strong></span>
        </div>
        <p id="larmor-explanation" class="demo-explanation">At 1 mT an electron with \(g\approx2\) precesses at roughly 28 MHz.</p>
      </div>

      <div class="plot-wrap">
        <svg id="larmor-svg" class="lecture-svg" viewBox="0 0 520 300" role="img" aria-label="Schematic Larmor precession">
          <line x1="260" y1="246" x2="260" y2="39" class="field-axis"/>
          <path d="M260 25 L251 45 L269 45 Z" class="field-arrow"/>
          <text x="276" y="46" class="svg-label">B₀</text>
          <ellipse cx="260" cy="92" rx="82" ry="24" class="precession-orbit" fill="none"/>
          <line x1="260" y1="230" x2="178" y2="92" class="cone-edge"/>
          <line x1="260" y1="230" x2="342" y2="92" class="cone-edge"/>
          <line id="spin-projection" x1="260" y1="92" x2="342" y2="92" class="spin-projection"/>
          <circle id="spin-tip" cx="342" cy="92" r="5.5" class="spin-tip"/>
          <line id="spin-vector" x1="260" y1="230" x2="342" y2="92" class="spin-vector-demo"/>
          <path id="spin-arrowhead" d="M342 92 L327 99 L336 108 Z" class="spin-arrow-demo"/>
          <circle cx="260" cy="230" r="7" class="spin-origin"/>
          <text x="260" y="278" text-anchor="middle" class="svg-caption">schematic precession cone</text>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">The numerical frequency is physical; the visual rotation rate is slowed down enormously so that you can see it.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Density matrices</p><h2>Populations and coherences in one object</h2></div>
  </div>

  <p>A state vector is enough for a pure closed state. For ensembles and open systems, the density operator is more convenient:</p>

  <div class="lecture-equation-grid">
    <div class="lecture-equation compact">
    \[
    \rho=\lvert\psi\rangle\langle\psi\rvert
    \]
    </div>
    <div class="lecture-equation compact">
    \[
    \langle O\rangle=\mathrm{Tr}(\rho\hat O).
    \]
    </div>
  </div>

  <p>Diagonal elements of \(\rho\) encode populations in the chosen basis; off-diagonal elements encode coherences. The closed-system equation of motion is the Liouville–von Neumann equation</p>

  <div class="lecture-equation">
  \[
  \dot\rho=-\frac{i}{\hbar}[\hat H,\rho].
  \]
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Relaxation</p><h2>\(T_1\), \(T_2\) and pure dephasing</h2></div>
  </div>

  <p>Real spin systems are not isolated. Longitudinal relaxation changes populations, while transverse relaxation destroys phase coherence. A useful relation is</p>

  <div class="lecture-equation">
  \[
  \frac{1}{T_2}=\frac{1}{2T_1}+\frac{1}{T_\phi}.
  \]
  </div>

  <p>\(T_\phi\) is the pure-dephasing time. So \(T_2\) is not simply “the same relaxation as \(T_1\)”. Even if pure dephasing vanished completely, the largest possible value would be \(T_2=2T_1\).</p>

  <div class="interactive-card" id="relaxation-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Bloch-type relaxation explorer</h3></div>
      <span class="interactive-model-note">\(T_1\), \(T_\phi\) → \(T_2\)</span>
    </div>

    <div class="demo-prompt"><strong>Try this:</strong><span>make \(T_\phi\) very long first. Then shorten it: \(T_1\) hardly changes, while transverse coherence disappears much faster.</span></div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="relax-t1"><span class="control-name">Longitudinal time \(T_1\)</span><output id="relax-t1-out">2.00 μs</output></label>
        <input id="relax-t1" type="range" min="0.2" max="8" step="0.1" value="2">

        <label for="relax-tphi"><span class="control-name">Pure dephasing \(T_\phi\)</span><output id="relax-tphi-out">3.00 μs</output></label>
        <input id="relax-tphi" type="range" min="0.2" max="20" step="0.1" value="3">

        <div class="demo-presets">
          <button type="button" data-relax-t1="2" data-relax-tphi="20">little pure dephasing</button>
          <button type="button" data-relax-t1="2" data-relax-tphi="3">moderate</button>
          <button type="button" data-relax-t1="2" data-relax-tphi="0.5">strong dephasing</button>
        </div>

        <div class="interactive-readout">
          <span>Derived \(T_2\) <strong id="relax-t2-out">1.71 μs</strong></span>
          <span>Displayed time <strong id="relax-window-out">8.00 μs</strong></span>
        </div>
        <p id="relax-explanation" class="demo-explanation">Population recovery and coherence decay occur on different timescales.</p>
      </div>

      <div class="plot-wrap">
        <svg id="relaxation-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="Longitudinal recovery and transverse coherence decay">
          <line x1="58" y1="248" x2="530" y2="248" class="plot-axis"/>
          <line x1="58" y1="35" x2="58" y2="248" class="plot-axis"/>
          <line x1="58" y1="141.5" x2="530" y2="141.5" class="plot-grid"/>
          <text x="480" y="278" class="svg-caption">time / μs</text>
          <text x="12" y="38" class="svg-caption">normalized signal</text>
          <path id="relax-mz-path" class="population-line lower-line" fill="none" d=""/>
          <path id="relax-mxy-path" class="population-line triplet-line" fill="none" d=""/>
          <g class="plot-legend">
            <line x1="337" y1="52" x2="365" y2="52" class="population-line lower-line"/>
            <text x="373" y="56" class="svg-label">M<tspan baseline-shift="sub" font-size="8">z</tspan></text>
            <line x1="430" y1="52" x2="458" y2="52" class="population-line triplet-line"/>
            <text x="466" y="56" class="svg-label">|M<tspan baseline-shift="sub" font-size="8">xy</tspan>|</text>
          </g>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">This is the phenomenological Bloch picture: \(M_z(t)=1-e^{-t/T_1}\) after saturation and \(|M_{xy}(t)|=e^{-t/T_2}\). Microscopic relaxation theory asks where those rates come from.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">Open quantum systems</p><h2>Where do relaxation rates come from?</h2></div>
  </div>

  <p>At the microscopic level, relaxation comes from fluctuating interactions. Molecular rotation, vibrations, conformational motion and solvent dynamics modulate the spin Hamiltonian. Different theories make different assumptions about those fluctuations.</p>

  <div class="method-ladder">
    <div><span>Bloch–Redfield–Wangsness</span><p>A perturbative, usually Markovian treatment that connects correlation functions and spectral densities to relaxation.</p></div>
    <div><span>Nakajima–Zwanzig</span><p>A projection-operator framework that retains memory through a time-nonlocal kernel and is useful when Markovian assumptions become questionable.</p></div>
    <div><span>Stochastic Schrödinger propagation</span><p>Represents open-system evolution through ensembles of stochastic state-vector trajectories rather than propagating the full density matrix directly.</p></div>
    <div><span>Explicit time-dependent Hamiltonians</span><p>Use \(H(t)\) obtained from molecular motion when the fluctuating interactions themselves are available along a trajectory.</p></div>
  </div>

  <aside class="teacher-note"><strong>The practical question is not “which theory is most advanced?”</strong><span>It is: which assumptions are justified for the correlation times, coupling strengths and observable of the system you actually have?</span></aside>
</section>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">07</span>
    <div><p class="section-eyebrow">Selected reading</p><h2>Examples from my work</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>Relaxation theory</span><h3>Modeling spin relaxation in complex radical systems using MolSpin</h3><p>Open-system density-matrix dynamics for complex radical systems.</p><a href="https://doi.org/10.1002/jcc.27120" target="_blank" rel="noopener">J. Comput. Chem. (2023) →</a></article>
    <article><span>Stochastic propagation</span><h3>Spin Dynamics of Radical Pairs Using the Stochastic Schrödinger Equation in MolSpin</h3><p>Stochastic state-vector propagation for large radical-pair spin systems.</p><a href="https://doi.org/10.1021/acs.jctc.4c00361" target="_blank" rel="noopener">J. Chem. Theory Comput. (2024) →</a></article>
    <article><span>Multiscale dynamics</span><h3>Multiscale modeling approaches in biomolecular physics</h3><p>Connecting atomistic motion, electronic structure and quantum observables.</p><a href="https://doi.org/10.1080/23746149.2026.2660655" target="_blank" rel="noopener">Advances in Physics: X (2026) →</a></article>
  </div>
</section>

{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-interactive.js" defer></script>
<script src="{{ site.url }}/assets/js/lecture-relaxation.js" defer></script>
