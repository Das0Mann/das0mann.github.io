---
layout: page
title: Advanced Open-System Methods
excerpt: "Markovian master equations, memory kernels and stochastic unravelings"
permalink: /lecture/open-systems/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 09</span>
  <h2>What changes when the spin system remembers its environment?</h2>
  <p>The \(T_1/T_2\) picture is useful, but it hides the microscopic origin of relaxation. Open-system theory asks how a selected spin subsystem evolves when it is coupled to degrees of freedom that we do not explicitly keep.</p>
</header>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">System + environment</p><h2>Start from a larger closed problem</h2></div>
  </div>

  <p>Conceptually, divide the full Hamiltonian into system, bath and coupling terms:</p>

  <div class="lecture-equation">
  \[
  \hat H_\mathrm{tot}
  =
  \hat H_S+\hat H_B+\hat H_{SB}.
  \]
  </div>

  <p>The reduced density operator is obtained by tracing over the bath,</p>

  <div class="lecture-equation">
  \[
  \rho_S(t)=\mathrm{Tr}_B\,\rho_\mathrm{tot}(t).
  \]
  </div>

  <p>The hard part is that eliminating the bath generally leaves both dissipation and memory in the remaining equation of motion.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Markovian dynamics</p><h2>Lindblad form gives a controlled time-local generator</h2></div>
  </div>

  <p>A widely used Markovian master equation has the Gorini–Kossakowski–Sudarshan–Lindblad form</p>

  <div class="lecture-equation">
  \[
  \dot\rho
  =
  -\frac{i}{\hbar}[\hat H,\rho]
  +
  \sum_k\gamma_k
  \left(
  L_k\rho L_k^\dagger
  -\frac12\{L_k^\dagger L_k,\rho\}
  \right).
  \]
  </div>

  <p>The dissipator is constructed so that the dynamics remains trace preserving and completely positive. The operators \(L_k\) encode specific channels such as relaxation or dephasing.</p>

  <aside class="teacher-note">
    <strong>But “Lindblad” is not a microscopic explanation.</strong>
    <span>It tells you a mathematically safe form of a Markovian generator. You still need physics to determine which operators and rates are appropriate.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Bloch–Redfield–Wangsness</p><h2>Connect fluctuating interactions to relaxation rates</h2></div>
  </div>

  <p>BRW theory starts from a weak system–bath interaction and expresses relaxation through correlation functions or spectral densities of the fluctuating Hamiltonian. In schematic form,</p>

  <div class="lecture-equation">
  \[
  \dot\rho
  =
  -\frac{i}{\hbar}[\hat H_S,\rho]
  +
  \mathcal R_\mathrm{BRW}\rho.
  \]
  </div>

  <p>The standard derivation uses weak coupling and a Born–Markov approximation. A secular approximation is often added, but it is a separate approximation and should not be silently assumed when near-degenerate levels make non-secular terms important.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Memory kernels</p><h2>Nakajima–Zwanzig keeps the past explicitly</h2></div>
  </div>

  <p>Projection-operator methods can produce a time-nonlocal equation of the schematic form</p>

  <div class="lecture-equation">
  \[
  \dot\rho_S(t)
  =
  \mathcal L_S\rho_S(t)
  +
  \int_0^t
  \mathcal K(t-s)\rho_S(s)\,ds
  +
  I(t).
  \]
  </div>

  <p>The memory kernel \(\mathcal K\) says that the derivative at the current time can depend on the state at earlier times. The inhomogeneous term \(I(t)\) contains effects of initial system–bath correlations in the general formulation.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Interactive</p><h2>What does finite memory do to a simple decay law?</h2></div>
  </div>

  <div class="interactive-card" id="memory-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Toy memory model</span><h3>Markovian versus finite-memory decay</h3></div>
      <span class="interactive-model-note">scalar Volterra equation</span>
    </div>

    <div class="lecture-equation compact">
    \[
    \dot x(t)
    =
    -\int_0^t
    \frac{\gamma}{\tau_m}
    e^{-(t-s)/\tau_m}
    x(s)\,ds.
    \]
    </div>

    <p>This scalar model is not a complete quantum master equation. It is a deliberately simple way to see how a finite memory time changes an otherwise exponential decay.</p>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>make \(\tau_m\) very short first. Then increase it until \(\gamma\tau_m>1/4\): the finite-memory solution becomes underdamped and can overshoot.</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="memory-gamma"><span class="control-name">Markov rate \(\gamma\)</span><output id="memory-gamma-out">1.00 μs⁻¹</output></label>
        <input id="memory-gamma" type="range" min="0.1" max="5" step="0.05" value="1">

        <label for="memory-tau"><span class="control-name">Memory time \(\tau_m\)</span><output id="memory-tau-out">0.20 μs</output></label>
        <input id="memory-tau" type="range" min="0.01" max="2" step="0.01" value="0.20">

        <div class="demo-presets">
          <button type="button" data-memory-tau="0.02">Markov-like</button>
          <button type="button" data-memory-tau="0.20">finite memory</button>
          <button type="button" data-memory-tau="0.60">underdamped</button>
        </div>

        <div class="interactive-readout">
          <span>\(\gamma\tau_m\) <strong id="memory-product-out">0.200</strong></span>
          <span>Kernel regime <strong id="memory-regime-out">overdamped</strong></span>
          <span>Displayed time <strong id="memory-window-out">6.00 μs</strong></span>
        </div>

        <p id="memory-explanation" class="demo-explanation">The memory is finite but still short enough that the response remains overdamped.</p>
      </div>

      <div class="plot-wrap">
        <svg id="memory-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="Markovian and finite-memory decay comparison">
          <line x1="58" y1="248" x2="530" y2="248" class="plot-axis"/>
          <line x1="58" y1="35" x2="58" y2="248" class="plot-axis"/>
          <line x1="58" y1="141.5" x2="530" y2="141.5" class="plot-grid"/>
          <text x="479" y="278" class="svg-caption">time / μs</text>
          <text x="14" y="38" class="svg-caption">x(t)</text>
          <path id="memory-markov-path" class="population-line triplet-line" fill="none" d=""/>
          <path id="memory-kernel-path" class="population-line lower-line" fill="none" d=""/>
          <g class="plot-legend">
            <line x1="335" y1="51" x2="363" y2="51" class="population-line triplet-line"/>
            <text x="371" y="55" class="svg-label">Markov</text>
            <line x1="430" y1="51" x2="458" y2="51" class="population-line lower-line"/>
            <text x="466" y="55" class="svg-label">memory</text>
          </g>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">For the exponential kernel, the scalar equation is equivalent to \(\tau_m\ddot x+\dot x+\gamma x=0\) with \(x(0)=1\) and \(\dot x(0)=0\). Negative values in the underdamped regime are why \(x\) should be read as an amplitude-like toy variable, not automatically as a population.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">Stochastic unravelings</p><h2>One density-matrix equation can correspond to many trajectory pictures</h2></div>
  </div>

  <p>Some Markovian master equations can be represented by an ensemble of stochastic pure-state trajectories. Quantum-jump and diffusive stochastic Schrödinger equations are examples. Averaging the trajectories recovers the density operator,</p>

  <div class="lecture-equation">
  \[
  \rho(t)
  =
  \mathbb E\!\left[
  \lvert\psi_\xi(t)\rangle
  \langle\psi_\xi(t)\rvert
  \right].
  \]
  </div>

  <p>This can be computationally attractive because each trajectory contains \(D\) amplitudes instead of \(D^2\) density-matrix elements. The tradeoff is stochastic sampling error.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">07</span>
    <div><p class="section-eyebrow">Choosing a method</p><h2>Match the approximation to the timescales</h2></div>
  </div>

  <div class="method-ladder">
    <div><span>Phenomenological Lindblad</span><p>Good when the relevant decay channels and rates are known and a Markovian description is adequate.</p></div>
    <div><span>BRW</span><p>Useful for weak fluctuating interactions with sufficiently short bath memory and known spectral densities.</p></div>
    <div><span>Nakajima–Zwanzig</span><p>Useful when memory is central and a time-nonlocal description is needed.</p></div>
    <div><span>Explicit stochastic \(H(t)\)</span><p>Useful when molecular trajectories directly provide the fluctuating interactions and you want to propagate that time dependence.</p></div>
  </div>

  <aside class="teacher-note">
    <strong>The most sophisticated formalism is not automatically the best one.</strong>
    <span>A method is useful when its assumptions match the actual separation—or lack of separation—between spin and environmental timescales.</span>
  </aside>
</section>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">08</span>
    <div><p class="section-eyebrow">Selected reading</p><h2>Examples from my work</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>Relaxation theory</span><h3>Modeling spin relaxation in complex radical systems using MolSpin</h3><p>Open-system spin dynamics and relaxation in complex radical systems.</p><a href="https://doi.org/10.1002/jcc.27120" target="_blank" rel="noopener">J. Comput. Chem. (2023) →</a></article>
    <article><span>Stochastic propagation</span><h3>Spin Dynamics of Radical Pairs Using the Stochastic Schrödinger Equation in MolSpin</h3><p>Stochastic state-vector propagation as an efficient open-system route.</p><a href="https://doi.org/10.1021/acs.jctc.4c00361" target="_blank" rel="noopener">J. Chem. Theory Comput. (2024) →</a></article>
    <article><span>Weak-field spin dynamics</span><h3>Weak Radiofrequency Field Effects on Biological Systems Mediated through the Radical Pair Mechanism</h3><p>A broader view of coherence, relaxation and RF perturbations in radical-pair systems.</p><a href="https://doi.org/10.1021/acs.chemrev.5c00178" target="_blank" rel="noopener">Chemical Reviews (2025) →</a></article>
  </div>
</section>

{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-memory.js" defer></script>
