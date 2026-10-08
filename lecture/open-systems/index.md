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
<section class="module-learning" aria-label="Learning goals">
  <div class="module-learning-head">
    <span>After this module</span>
    <strong>You should be able to…</strong>
  </div>
  <div class="module-learning-grid">
    <div><span>01</span><p>Distinguish phenomenological Lindblad dynamics from microscopic weak-coupling relaxation theory.</p></div>
    <div><span>02</span><p>State the physical content of the Born, Markov and secular approximations.</p></div>
    <div><span>03</span><p>Explain what a memory kernel changes and when a time-nonlocal description becomes relevant.</p></div>
  </div>
</section>

{% include lecture-connections.html %}


<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">System + environment</p><h2>Start from a larger closed problem</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Open-system language separates what you keep from what you average over</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>System</strong>
        <p><b>What it is:</b> The degrees of freedom whose quantum state you want to predict explicitly—for example the electron and nuclear spins of a radical pair.</p>
        <p><b>What it changes:</b> Its Hamiltonian defines the coherent part of the dynamics.</p>
        <p><b>What you observe:</b> System observables such as spin populations, coherence, magnetization or reaction yield.</p>
      </article>
      <article>
        <strong>Bath / environment</strong>
        <p><b>What it is:</b> All other degrees of freedom that interact with the system but are not propagated explicitly, such as molecular vibrations, solvent motion or protein fluctuations.</p>
        <p><b>What it changes:</b> It can exchange energy with the spin system and randomize phases, generating relaxation and memory effects.</p>
        <p><b>What you observe:</b> Finite \(T_1\), \(T_2\), line broadening, stochastic shifts and non-exponential decay.</p>
      </article>
    </div>
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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>A Lindblad operator names a relaxation channel, while its rate says how strongly it acts</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Jump / Lindblad operator \(L_k\)</strong>
        <p><b>What it is:</b> An operator specifying which state change or dephasing process the environment induces.</p>
        <p><b>What it changes:</b> It determines the structure of population transfer or coherence loss while preserving a valid density matrix in the GKSL form.</p>
        <p><b>What you observe:</b> Specific decay pathways, steady states and characteristic relaxation modes.</p>
      </article>
      <article>
        <strong>Rate \(\gamma_k\)</strong>
        <p><b>What it is:</b> The timescale assigned to that environmental channel.</p>
        <p><b>What it changes:</b> It controls how rapidly the corresponding dissipative process competes with coherent Hamiltonian motion.</p>
        <p><b>What you observe:</b> Exponential or multi-exponential decay constants and linewidth contributions.</p>
      </article>
    </div>
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

  <details class="lecture-details">
    <summary>Why does “complete positivity” matter?</summary>
    <p>A reduced density matrix must remain a valid quantum state: probabilities cannot become negative. Complete positivity is the stronger requirement that the map remains physical even when the system is entangled with an untouched auxiliary system. The Lindblad/GKSL structure guarantees this for a Markovian semigroup; an approximate Redfield generator does not automatically have the same guarantee outside its regime of validity.</p>
  </details>

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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>The common approximations are physical timescale statements</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Born / weak-coupling approximation</strong>
        <p><b>What it is:</b> The system–bath interaction is weak enough that the bath is only weakly perturbed by the system and correlations can be treated perturbatively.</p>
        <p><b>What it changes:</b> It allows relaxation rates to be expressed to low order in the fluctuating interaction.</p>
        <p><b>What you observe:</b> A regime where relaxation is slow compared with the microscopic bath dynamics.</p>
      </article>
      <article>
        <strong>Markov approximation</strong>
        <p><b>What it is:</b> The bath loses memory much faster than the system state changes.</p>
        <p><b>What it changes:</b> The future depends effectively on the current reduced state rather than its detailed history.</p>
        <p><b>What you observe:</b> Approximately exponential relaxation with no pronounced memory-induced revival.</p>
      </article>
      <article>
        <strong>Secular approximation</strong>
        <p><b>What it is:</b> Rapidly oscillating couplings between well-separated transition frequencies are neglected.</p>
        <p><b>What it changes:</b> It decouples many density-matrix components and often yields a simpler, more stable relaxation generator.</p>
        <p><b>What you observe:</b> Failure can appear near degeneracies where coherences and populations remain dynamically coupled.</p>
      </article>
    </div>
  </div>


  <p>BRW theory starts from a weak system–bath interaction and expresses relaxation through correlation functions or spectral densities of the fluctuating Hamiltonian. In schematic form,</p>

  <p>Write the fluctuating part of the spin Hamiltonian as operator channels,</p>

  <div class="lecture-equation">
  \[
  \delta\hat H(t)
  =
  \sum_\alpha
  \delta F_\alpha(t)\,\hat A_\alpha.
  \]
  </div>

  <p>If \(\delta F_\alpha\) carries energy units and \(\hat A_\alpha\) is dimensionless, define</p>

  <div class="lecture-equation">
  \[
  \begin{aligned}
  C_{\alpha\beta}(t)
  &=
  \left\langle
  \delta F_\alpha(0)\,
  \delta F_\beta(t)
  \right\rangle,\\
  J_{\alpha\beta}(\omega)
  &=
  \int_{-\infty}^{\infty}
  C_{\alpha\beta}(t)e^{i\omega t}\,dt.
  \end{aligned}
  \]
  </div>

  <p>In the eigenbasis of \(\hat H_S\), a transition-rate contribution then has the schematic dimensional structure</p>

  <div class="lecture-equation">
  \[
  k_{a\leftarrow b}
  \sim
  \frac{1}{\hbar^2}
  \sum_{\alpha\beta}
  \langle a|\hat A_\alpha|b\rangle
  \langle b|\hat A_\beta|a\rangle
  J_{\alpha\beta}(\omega_{ba}),
  \qquad
  \omega_{ba}=\frac{E_b-E_a}{\hbar}.
  \]
  </div>

  <p>This is the mathematical bridge from the Molecular Motion module to relaxation theory: electronic structure determines which Hamiltonian parameters fluctuate, molecular dynamics determines their correlation functions, and the spin eigenstates determine which spectral-density components can actually drive a transition.</p>

  <aside class="lecture-note">
    <strong>The prefactor follows the unit convention.</strong>
    <span>The \(1/\hbar^2\) factor appears here because \(\delta F_\alpha\) is written in energy units. If the fluctuating coefficients are written directly as angular frequencies, that conversion has already been absorbed into the spectral density.</span>
  </aside>

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

  <aside class="lecture-note">
    <strong>Redfield form is not automatically GKSL form.</strong>
    <span>A non-secular Redfield generator need not be completely positive for arbitrary states and times. Within its perturbative regime it can still be highly useful, but unphysical negative populations are a warning that the approximation, timestep or parameter regime should be examined rather than interpreted as chemistry.</span>
  </aside>
</section>


<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">I</span>
    <div><p class="section-eyebrow">Interactive</p><h2>When do non-secular terms actually average away?</h2></div>
  </div>

  <div class="lecture-flow-bridge">
    <p>The secular approximation sounds abstract until you watch the phase. Two relaxation pathways carrying transition frequencies \(\omega\) and \(\omega'\) produce cross terms oscillating as \(e^{i(\omega-\omega')t}\). If that phase winds many times during the coarse-graining window, the term averages toward zero. Near degeneracy, it does not.</p>
  </div>

  <div class="lecture-equation">
  \[
  R(T)
  =
  \left|
  \frac{1}{T}
  \int_0^T e^{i\Delta\omega t}\,dt
  \right|
  =
  \left|
  \frac{\sin(\Delta\omega T/2)}
       {\Delta\omega T/2}
  \right|,
  \qquad
  \Delta\omega=\omega-\omega'.
  \]
  </div>

  <div class="interactive-card" id="secular-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Secular-averaging explorer</span><h3>Frequency separation versus coarse-graining time</h3></div>
      <span class="interactive-model-note">phase-averaging toy model</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="secular-dnu"><span class="control-name">Transition separation \(\Delta\nu\)</span><output id="secular-dnu-out">0.35 MHz</output></label>
        <input id="secular-dnu" type="range" min="0" max="10" step="0.01" value="0.35">

        <label for="secular-time"><span class="control-name">Coarse-graining window \(T\)</span><output id="secular-time-out">2.00 μs</output></label>
        <input id="secular-time" type="range" min="0.05" max="5" step="0.05" value="2">

        <div class="demo-presets">
          <button type="button" data-secular="degenerate">near-degenerate</button>
          <button type="button" data-secular="border">borderline</button>
          <button type="button" data-secular="safe">well separated</button>
        </div>

        <div class="interactive-readout">
          <span>Relative phase cycles \(\Delta\nu T\) <strong id="secular-cycles">0.70</strong></span>
          <span>Residual phase average \(R(T)\) <strong id="secular-residual">0.368</strong></span>
          <span>Secular intuition <strong id="secular-regime">partial averaging</strong></span>
        </div>

        <p id="secular-explanation" class="demo-explanation">The relative phase evolves substantially but has not averaged away. This is exactly the kind of regime where secularization should be checked rather than assumed.</p>
      </div>

      <div class="plot-wrap">
        <svg id="secular-svg" class="lecture-svg" viewBox="0 0 560 320" role="img" aria-label="Residual secular cross-term versus transition-frequency separation">
          <line x1="58" y1="270" x2="530" y2="270" class="plot-axis"/>
          <line x1="58" y1="34" x2="58" y2="270" class="plot-axis"/>
          <line x1="58" y1="152" x2="530" y2="152" class="plot-grid"/>
          <text x="455" y="300" class="svg-caption">Δν / MHz</text>
          <text x="15" y="38" class="svg-caption">|R|</text>
          <path id="secular-path" class="secular-curve" fill="none" d=""/>
          <line id="secular-marker-line" x1="0" y1="34" x2="0" y2="270" class="plot-marker-line"/>
          <circle id="secular-marker" r="5" class="plot-marker" cx="0" cy="0"/>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">This sinc factor only illustrates phase averaging. It is not a complete validity test for Redfield theory or complete positivity; coupling strengths, bath correlation times and the structure of the relaxation tensor still matter.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Memory kernels</p><h2>Nakajima–Zwanzig keeps the past explicitly</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Non-Markovianity means the environment can feed information back on the relevant timescale</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Memory kernel \(\mathcal K(t)\)</strong>
        <p><b>What it is:</b> A function that weights how strongly earlier reduced states influence the present derivative.</p>
        <p><b>What it changes:</b> It makes the dynamics time-nonlocal and can produce non-exponential decay, oscillations or partial revivals.</p>
        <p><b>What you observe:</b> History-dependent relaxation and deviations from simple single-rate kinetics.</p>
      </article>
      <article>
        <strong>Initial correlations</strong>
        <p><b>What it is:</b> Correlations already present between system and environment at the chosen initial time.</p>
        <p><b>What it changes:</b> They can contribute an inhomogeneous term and invalidate the assumption of a factorized initial state.</p>
        <p><b>What you observe:</b> Early-time transients that cannot be reproduced by a memoryless model started from the same reduced state.</p>
      </article>
    </div>
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

  <p>A time-nonlocal kernel is a natural language for memory, but “non-Markovian” is not synonymous with “contains an integral over the past.” Exact time-local master equations can also encode non-Markovian behaviour through time-dependent rates, while some kernels reduce effectively to Markovian dynamics on the timescale of interest. Operational definitions therefore depend on what property—divisibility, information backflow or correlation structure—is being tested.</p>

  <aside class="lecture-analogy">
    <span class="lecture-analogy-label">Mental model</span>
    <h3>A Markovian bath is an anechoic room; a non-Markovian bath can echo</h3>
    <p>Imagine the spin system sending a sound into its environment. In an idealized Markovian limit the room absorbs the sound almost immediately, so the next moment depends only on the present state. If the room has long-lived echoes, information about earlier motion can return later and influence the present. The memory kernel is the mathematical weighting of those delayed echoes.</p>
    <span class="analogy-limit"><strong>Where the analogy breaks:</strong> open-system memory is encoded in system–environment correlations and reduced dynamical maps, not literal signals travelling through space. Non-Markovianity also has several inequivalent formal definitions.</span>
  </aside>
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
          <path id="memory-markov-path" class="population-line triplet-line" fill="none" d="M58.00 40.07 L59.12 41.51 L60.25 42.93 L61.37 44.33 L62.50 45.70 L63.62 47.06 L64.74 48.40 L65.87 49.72 L66.99 51.03 L68.11 52.31 L69.24 53.57 L70.36 54.82 L71.49 56.05 L72.61 57.26 L73.73 58.46 L74.86 59.64 L75.98 60.80 L77.10 61.94 L78.23 63.07 L79.35 64.18 L80.48 65.28 L81.60 66.36 L82.72 67.43 L83.85 68.48 L84.97 69.51 L86.10 70.53 L87.22 71.54 L88.34 72.53 L89.47 73.51 L90.59 74.47 L91.71 75.43 L92.84 76.36 L93.96 77.29 L95.09 78.20 L96.21 79.10 L97.33 79.98 L98.46 80.85 L99.58 81.71 L100.70 82.56 L101.83 83.40 L102.95 84.22 L104.08 85.03 L105.20 85.83 L106.32 86.62 L107.45 87.40 L108.57 88.17 L109.70 88.93 L110.82 89.67 L111.94 90.41 L113.07 91.13 L114.19 91.85 L115.31 92.55 L116.44 93.25 L117.56 93.93 L118.69 94.60 L119.81 95.27 L120.93 95.93 L122.06 96.57 L123.18 97.21 L124.30 97.84 L125.43 98.46 L126.55 99.07 L127.68 99.67 L128.80 100.26 L129.92 100.85 L131.05 101.42 L132.17 101.99 L133.30 102.55 L134.42 103.11 L135.54 103.65 L136.67 104.19 L137.79 104.72 L138.91 105.24 L140.04 105.75 L141.16 106.26 L142.29 106.76 L143.41 107.25 L144.53 107.74 L145.66 108.22 L146.78 108.69 L147.90 109.15 L149.03 109.61 L150.15 110.06 L151.28 110.51 L152.40 110.95 L153.52 111.38 L154.65 111.81 L155.77 112.23 L156.90 112.65 L158.02 113.06 L159.14 113.46 L160.27 113.86 L161.39 114.25 L162.51 114.64 L163.64 115.02 L164.76 115.39 L165.89 115.76 L167.01 116.13 L168.13 116.49 L169.26 116.84 L170.38 117.19 L171.50 117.54 L172.63 117.88 L173.75 118.21 L174.88 118.54 L176.00 118.87 L177.12 119.19 L178.25 119.51 L179.37 119.82 L180.50 120.13 L181.62 120.43 L182.74 120.73 L183.87 121.02 L184.99 121.31 L186.11 121.60 L187.24 121.88 L188.36 122.16 L189.49 122.43 L190.61 122.70 L191.73 122.97 L192.86 123.23 L193.98 123.49 L195.10 123.75 L196.23 124.00 L197.35 124.25 L198.48 124.49 L199.60 124.73 L200.72 124.97 L201.85 125.21 L202.97 125.44 L204.10 125.67 L205.22 125.89 L206.34 126.11 L207.47 126.33 L208.59 126.54 L209.71 126.76 L210.84 126.97 L211.96 127.17 L213.09 127.38 L214.21 127.58 L215.33 127.77 L216.46 127.97 L217.58 128.16 L218.70 128.35 L219.83 128.54 L220.95 128.72 L222.08 128.90 L223.20 129.08 L224.32 129.26 L225.45 129.43 L226.57 129.60 L227.70 129.77 L228.82 129.94 L229.94 130.10 L231.07 130.26 L232.19 130.42 L233.31 130.58 L234.44 130.73 L235.56 130.89 L236.69 131.04 L237.81 131.18 L238.93 131.33 L240.06 131.48 L241.18 131.62 L242.30 131.76 L243.43 131.90 L244.55 132.03 L245.68 132.17 L246.80 132.30 L247.92 132.43 L249.05 132.56 L250.17 132.68 L251.30 132.81 L252.42 132.93 L253.54 133.05 L254.67 133.17 L255.79 133.29 L256.91 133.41 L258.04 133.52 L259.16 133.64 L260.29 133.75 L261.41 133.86 L262.53 133.97 L263.66 134.07 L264.78 134.18 L265.90 134.28 L267.03 134.38 L268.15 134.49 L269.28 134.59 L270.40 134.68 L271.52 134.78 L272.65 134.88 L273.77 134.97 L274.90 135.06 L276.02 135.15 L277.14 135.24 L278.27 135.33 L279.39 135.42 L280.51 135.51 L281.64 135.59 L282.76 135.67 L283.89 135.76 L285.01 135.84 L286.13 135.92 L287.26 136.00 L288.38 136.08 L289.50 136.15 L290.63 136.23 L291.75 136.30 L292.88 136.38 L294.00 136.45 L295.12 136.52 L296.25 136.59 L297.37 136.66 L298.50 136.73 L299.62 136.80 L300.74 136.86 L301.87 136.93 L302.99 137.00 L304.11 137.06 L305.24 137.12 L306.36 137.18 L307.49 137.25 L308.61 137.31 L309.73 137.37 L310.86 137.42 L311.98 137.48 L313.10 137.54 L314.23 137.60 L315.35 137.65 L316.48 137.71 L317.60 137.76 L318.72 137.81 L319.85 137.86 L320.97 137.92 L322.10 137.97 L323.22 138.02 L324.34 138.07 L325.47 138.11 L326.59 138.16 L327.71 138.21 L328.84 138.26 L329.96 138.30 L331.09 138.35 L332.21 138.39 L333.33 138.44 L334.46 138.48 L335.58 138.52 L336.70 138.57 L337.83 138.61 L338.95 138.65 L340.08 138.69 L341.20 138.73 L342.32 138.77 L343.45 138.81 L344.57 138.84 L345.70 138.88 L346.82 138.92 L347.94 138.96 L349.07 138.99 L350.19 139.03 L351.31 139.06 L352.44 139.10 L353.56 139.13 L354.69 139.17 L355.81 139.20 L356.93 139.23 L358.06 139.26 L359.18 139.29 L360.30 139.33 L361.43 139.36 L362.55 139.39 L363.68 139.42 L364.80 139.45 L365.92 139.48 L367.05 139.50 L368.17 139.53 L369.30 139.56 L370.42 139.59 L371.54 139.62 L372.67 139.64 L373.79 139.67 L374.91 139.69 L376.04 139.72 L377.16 139.75 L378.29 139.77 L379.41 139.79 L380.53 139.82 L381.66 139.84 L382.78 139.87 L383.90 139.89 L385.03 139.91 L386.15 139.93 L387.28 139.96 L388.40 139.98 L389.52 140.00 L390.65 140.02 L391.77 140.04 L392.90 140.06 L394.02 140.08 L395.14 140.10 L396.27 140.12 L397.39 140.14 L398.51 140.16 L399.64 140.18 L400.76 140.20 L401.89 140.22 L403.01 140.24 L404.13 140.25 L405.26 140.27 L406.38 140.29 L407.50 140.31 L408.63 140.32 L409.75 140.34 L410.88 140.36 L412.00 140.37 L413.12 140.39 L414.25 140.40 L415.37 140.42 L416.50 140.44 L417.62 140.45 L418.74 140.47 L419.87 140.48 L420.99 140.49 L422.11 140.51 L423.24 140.52 L424.36 140.54 L425.49 140.55 L426.61 140.56 L427.73 140.58 L428.86 140.59 L429.98 140.60 L431.10 140.62 L432.23 140.63 L433.35 140.64 L434.48 140.65 L435.60 140.67 L436.72 140.68 L437.85 140.69 L438.97 140.70 L440.10 140.71 L441.22 140.72 L442.34 140.73 L443.47 140.74 L444.59 140.76 L445.71 140.77 L446.84 140.78 L447.96 140.79 L449.09 140.80 L450.21 140.81 L451.33 140.82 L452.46 140.83 L453.58 140.84 L454.70 140.85 L455.83 140.85 L456.95 140.86 L458.08 140.87 L459.20 140.88 L460.32 140.89 L461.45 140.90 L462.57 140.91 L463.70 140.92 L464.82 140.92 L465.94 140.93 L467.07 140.94 L468.19 140.95 L469.31 140.96 L470.44 140.96 L471.56 140.97 L472.69 140.98 L473.81 140.99 L474.93 140.99 L476.06 141.00 L477.18 141.01 L478.30 141.01 L479.43 141.02 L480.55 141.03 L481.68 141.04 L482.80 141.04 L483.92 141.05 L485.05 141.05 L486.17 141.06 L487.30 141.07 L488.42 141.07 L489.54 141.08 L490.67 141.09 L491.79 141.09 L492.91 141.10 L494.04 141.10 L495.16 141.11 L496.29 141.11 L497.41 141.12 L498.53 141.12 L499.66 141.13 L500.78 141.14 L501.90 141.14 L503.03 141.15 L504.15 141.15 L505.28 141.16 L506.40 141.16 L507.52 141.17 L508.65 141.17 L509.77 141.17 L510.90 141.18 L512.02 141.18 L513.14 141.19 L514.27 141.19 L515.39 141.20 L516.51 141.20 L517.64 141.21 L518.76 141.21 L519.89 141.21 L521.01 141.22 L522.13 141.22 L523.26 141.23 L524.38 141.23 L525.50 141.23 L526.63 141.24 L527.75 141.24 L528.88 141.24 L530.00 141.25"/>
          <path id="memory-kernel-path" class="population-line lower-line" fill="none" d="M58.00 40.07 L59.12 40.12 L60.25 40.27 L61.37 40.51 L62.50 40.82 L63.62 41.22 L64.74 41.69 L65.87 42.22 L66.99 42.82 L68.11 43.47 L69.24 44.17 L70.36 44.92 L71.49 45.72 L72.61 46.55 L73.73 47.42 L74.86 48.32 L75.98 49.25 L77.10 50.21 L78.23 51.19 L79.35 52.20 L80.48 53.22 L81.60 54.26 L82.72 55.31 L83.85 56.37 L84.97 57.45 L86.10 58.53 L87.22 59.63 L88.34 60.72 L89.47 61.82 L90.59 62.93 L91.71 64.03 L92.84 65.13 L93.96 66.24 L95.09 67.34 L96.21 68.44 L97.33 69.53 L98.46 70.62 L99.58 71.71 L100.70 72.79 L101.83 73.86 L102.95 74.92 L104.08 75.98 L105.20 77.03 L106.32 78.07 L107.45 79.10 L108.57 80.12 L109.70 81.13 L110.82 82.13 L111.94 83.12 L113.07 84.10 L114.19 85.07 L115.31 86.03 L116.44 86.98 L117.56 87.91 L118.69 88.83 L119.81 89.74 L120.93 90.64 L122.06 91.53 L123.18 92.41 L124.30 93.27 L125.43 94.12 L126.55 94.96 L127.68 95.79 L128.80 96.60 L129.92 97.41 L131.05 98.20 L132.17 98.98 L133.30 99.74 L134.42 100.50 L135.54 101.24 L136.67 101.98 L137.79 102.70 L138.91 103.41 L140.04 104.10 L141.16 104.79 L142.29 105.47 L143.41 106.13 L144.53 106.78 L145.66 107.43 L146.78 108.06 L147.90 108.68 L149.03 109.29 L150.15 109.89 L151.28 110.48 L152.40 111.06 L153.52 111.63 L154.65 112.19 L155.77 112.74 L156.90 113.28 L158.02 113.81 L159.14 114.33 L160.27 114.85 L161.39 115.35 L162.51 115.84 L163.64 116.33 L164.76 116.81 L165.89 117.28 L167.01 117.74 L168.13 118.19 L169.26 118.63 L170.38 119.07 L171.50 119.49 L172.63 119.91 L173.75 120.33 L174.88 120.73 L176.00 121.13 L177.12 121.52 L178.25 121.90 L179.37 122.28 L180.50 122.64 L181.62 123.01 L182.74 123.36 L183.87 123.71 L184.99 124.05 L186.11 124.39 L187.24 124.72 L188.36 125.04 L189.49 125.36 L190.61 125.67 L191.73 125.97 L192.86 126.27 L193.98 126.57 L195.10 126.85 L196.23 127.14 L197.35 127.41 L198.48 127.69 L199.60 127.95 L200.72 128.21 L201.85 128.47 L202.97 128.72 L204.10 128.97 L205.22 129.21 L206.34 129.45 L207.47 129.69 L208.59 129.91 L209.71 130.14 L210.84 130.36 L211.96 130.58 L213.09 130.79 L214.21 130.99 L215.33 131.20 L216.46 131.40 L217.58 131.59 L218.70 131.79 L219.83 131.98 L220.95 132.16 L222.08 132.34 L223.20 132.52 L224.32 132.70 L225.45 132.87 L226.57 133.03 L227.70 133.20 L228.82 133.36 L229.94 133.52 L231.07 133.67 L232.19 133.83 L233.31 133.98 L234.44 134.12 L235.56 134.27 L236.69 134.41 L237.81 134.54 L238.93 134.68 L240.06 134.81 L241.18 134.94 L242.30 135.07 L243.43 135.20 L244.55 135.32 L245.68 135.44 L246.80 135.56 L247.92 135.67 L249.05 135.79 L250.17 135.90 L251.30 136.01 L252.42 136.12 L253.54 136.22 L254.67 136.32 L255.79 136.42 L256.91 136.52 L258.04 136.62 L259.16 136.72 L260.29 136.81 L261.41 136.90 L262.53 136.99 L263.66 137.08 L264.78 137.16 L265.90 137.25 L267.03 137.33 L268.15 137.41 L269.28 137.49 L270.40 137.57 L271.52 137.65 L272.65 137.72 L273.77 137.80 L274.90 137.87 L276.02 137.94 L277.14 138.01 L278.27 138.08 L279.39 138.14 L280.51 138.21 L281.64 138.27 L282.76 138.34 L283.89 138.40 L285.01 138.46 L286.13 138.52 L287.26 138.58 L288.38 138.63 L289.50 138.69 L290.63 138.75 L291.75 138.80 L292.88 138.85 L294.00 138.90 L295.12 138.95 L296.25 139.00 L297.37 139.05 L298.50 139.10 L299.62 139.15 L300.74 139.19 L301.87 139.24 L302.99 139.28 L304.11 139.33 L305.24 139.37 L306.36 139.41 L307.49 139.45 L308.61 139.49 L309.73 139.53 L310.86 139.57 L311.98 139.61 L313.10 139.64 L314.23 139.68 L315.35 139.72 L316.48 139.75 L317.60 139.78 L318.72 139.82 L319.85 139.85 L320.97 139.88 L322.10 139.91 L323.22 139.95 L324.34 139.98 L325.47 140.01 L326.59 140.03 L327.71 140.06 L328.84 140.09 L329.96 140.12 L331.09 140.15 L332.21 140.17 L333.33 140.20 L334.46 140.22 L335.58 140.25 L336.70 140.27 L337.83 140.30 L338.95 140.32 L340.08 140.34 L341.20 140.37 L342.32 140.39 L343.45 140.41 L344.57 140.43 L345.70 140.45 L346.82 140.47 L347.94 140.49 L349.07 140.51 L350.19 140.53 L351.31 140.55 L352.44 140.57 L353.56 140.59 L354.69 140.61 L355.81 140.62 L356.93 140.64 L358.06 140.66 L359.18 140.67 L360.30 140.69 L361.43 140.71 L362.55 140.72 L363.68 140.74 L364.80 140.75 L365.92 140.77 L367.05 140.78 L368.17 140.79 L369.30 140.81 L370.42 140.82 L371.54 140.83 L372.67 140.85 L373.79 140.86 L374.91 140.87 L376.04 140.89 L377.16 140.90 L378.29 140.91 L379.41 140.92 L380.53 140.93 L381.66 140.94 L382.78 140.95 L383.90 140.96 L385.03 140.98 L386.15 140.99 L387.28 141.00 L388.40 141.01 L389.52 141.01 L390.65 141.02 L391.77 141.03 L392.90 141.04 L394.02 141.05 L395.14 141.06 L396.27 141.07 L397.39 141.08 L398.51 141.09 L399.64 141.09 L400.76 141.10 L401.89 141.11 L403.01 141.12 L404.13 141.12 L405.26 141.13 L406.38 141.14 L407.50 141.15 L408.63 141.15 L409.75 141.16 L410.88 141.17 L412.00 141.17 L413.12 141.18 L414.25 141.19 L415.37 141.19 L416.50 141.20 L417.62 141.20 L418.74 141.21 L419.87 141.22 L420.99 141.22 L422.11 141.23 L423.24 141.23 L424.36 141.24 L425.49 141.24 L426.61 141.25 L427.73 141.25 L428.86 141.26 L429.98 141.26 L431.10 141.27 L432.23 141.27 L433.35 141.28 L434.48 141.28 L435.60 141.28 L436.72 141.29 L437.85 141.29 L438.97 141.30 L440.10 141.30 L441.22 141.30 L442.34 141.31 L443.47 141.31 L444.59 141.32 L445.71 141.32 L446.84 141.32 L447.96 141.33 L449.09 141.33 L450.21 141.33 L451.33 141.34 L452.46 141.34 L453.58 141.34 L454.70 141.35 L455.83 141.35 L456.95 141.35 L458.08 141.35 L459.20 141.36 L460.32 141.36 L461.45 141.36 L462.57 141.37 L463.70 141.37 L464.82 141.37 L465.94 141.37 L467.07 141.38 L468.19 141.38 L469.31 141.38 L470.44 141.38 L471.56 141.39 L472.69 141.39 L473.81 141.39 L474.93 141.39 L476.06 141.39 L477.18 141.40 L478.30 141.40 L479.43 141.40 L480.55 141.40 L481.68 141.40 L482.80 141.41 L483.92 141.41 L485.05 141.41 L486.17 141.41 L487.30 141.41 L488.42 141.41 L489.54 141.42 L490.67 141.42 L491.79 141.42 L492.91 141.42 L494.04 141.42 L495.16 141.42 L496.29 141.43 L497.41 141.43 L498.53 141.43 L499.66 141.43 L500.78 141.43 L501.90 141.43 L503.03 141.43 L504.15 141.44 L505.28 141.44 L506.40 141.44 L507.52 141.44 L508.65 141.44 L509.77 141.44 L510.90 141.44 L512.02 141.44 L513.14 141.44 L514.27 141.45 L515.39 141.45 L516.51 141.45 L517.64 141.45 L518.76 141.45 L519.89 141.45 L521.01 141.45 L522.13 141.45 L523.26 141.45 L524.38 141.45 L525.50 141.46 L526.63 141.46 L527.75 141.46 L528.88 141.46 L530.00 141.46"/>
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


<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">P</span>
    <div><p class="section-eyebrow">Thermal directionality</p><h2>A thermal bath does more than broaden lines—it biases upward and downward transitions differently</h2></div>
  </div>

  <p>For a bath in thermal equilibrium, microscopic transition rates are constrained by detailed balance. For two levels separated by \(\hbar\omega\), one commonly encounters the relation</p>

  <div class="lecture-equation">
  \[
  \frac{k_\uparrow}{k_\downarrow}
  =
  e^{-\hbar\omega/(k_BT)}.
  \]
  </div>

  <p>At high temperature or very small splittings, upward and downward rates can be nearly equal. At low temperature or large splitting, downward relaxation dominates. A phenomenological dephasing model that only damps coherences cannot reproduce this population thermalization by itself.</p>

  <aside class="teacher-note">
    <strong>Dephasing and thermal relaxation are different pieces of bath physics.</strong>
    <span>One randomizes relative phase; the other exchanges energy and sets the long-time population distribution.</span>
  </aside>
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

  <aside class="research-connection">
    <span class="research-connection-label">Research connection</span>
    <p>Our MolSpin developments use complementary open-system strategies rather than assuming one relaxation model is universally appropriate: BRW-type relaxation for weak fluctuating interactions and stochastic state-vector propagation when trajectory-based dynamics is advantageous.</p>
    <div class="research-connection-links">
      <a href="https://doi.org/10.1002/jcc.27120" target="_blank" rel="noopener"><strong>Modeling spin relaxation in complex radical systems using MolSpin</strong><span>J. Comput. Chem. (2023)</span></a>
      <a href="https://doi.org/10.1021/acs.jctc.4c00361" target="_blank" rel="noopener"><strong>Spin Dynamics of Radical Pairs Using the Stochastic Schrödinger Equation in MolSpin</strong><span>J. Chem. Theory Comput. (2024)</span></a>
    </div>
  </aside>
</section>

<aside class="lecture-takeaway">
  <span class="lecture-takeaway-label">Take-home model</span>
  <h3>Choose the bath model from the physics</h3>
  <ul>
    <li>Relaxation rates arise from fluctuating operators, their correlation functions and spectral weight at the system transition frequencies.</li>
    <li>Lindblad, Redfield, stochastic-Hamiltonian and memory-kernel descriptions encode different assumptions about coupling strength, memory and coarse graining.</li>
    <li>The most elaborate formalism is not automatically the most accurate; the relevant question is whether its timescale assumptions match the system.</li>
  </ul>
</aside>

<aside class="landmark-study">
  <span class="landmark-label">Landmark open systems</span>
  <h3>Non-Markovianity is about retained dynamical memory, not simply 'complicated decay'</h3>
  <p>The Breuer–Laine–Piilo–Vacchini colloquium surveys modern ways of characterizing memory and information backflow in open quantum systems. It provides a useful conceptual complement to the Nakajima–Zwanzig kernel used here.</p>
  <div class="landmark-footer">
    <a href="https://doi.org/10.1103/RevModPhys.88.021002" target="_blank" rel="noopener">H.-P. Breuer et al. · Reviews of Modern Physics 88, 021002 (2016) →</a>
    <span>The practical question is whether the environmental memory time is short relative to the spin dynamics you want to predict.</span>
  </div>
</aside>

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


<section class="lecture-section external-reading">
  <div class="lecture-section-head">
    <span class="lecture-index literature-index">L</span>
    <div><p class="section-eyebrow">Key external literature</p><h2>Where to read next</h2></div>
  </div>
  <p class="external-reading-intro">These are deliberately selected from outside my own work: foundational papers or reviews that are especially useful for this topic.</p>
  <div class="lecture-reading-grid external-literature-grid">
    <article>
      <span>Projection operators</span>
      <h3>On Quantum Theory of Transport Phenomena: Steady Diffusion</h3>
      <p>S. Nakajima · Progress of Theoretical Physics (1958). One of the foundational projection-operator formulations behind non-Markovian reduced dynamics.</p>
      <a href="https://doi.org/10.1143/PTP.20.948" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Memory kernels</span>
      <h3>Ensemble Method in the Theory of Irreversibility</h3>
      <p>R. Zwanzig · The Journal of Chemical Physics (1960). The complementary projection-operator formulation leading to generalized kinetic equations with memory.</p>
      <a href="https://doi.org/10.1063/1.1731409" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Markovian generators</span>
      <h3>On the Generators of Quantum Dynamical Semigroups</h3>
      <p>G. Lindblad · Communications in Mathematical Physics (1976). The canonical characterization of completely positive Markovian quantum generators.</p>
      <a href="https://doi.org/10.1007/BF01608499" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Redfield positivity</span>
      <h3>Open-quantum-system dynamics: Recovering positivity of the Redfield equation via the partial secular approximation</h3>
      <p>D. Farina and V. Giovannetti · Physical Review A (2019). A focused analysis of why Redfield dynamics is not generically completely positive and how controlled coarse graining can restore positivity.</p>
      <a href="https://doi.org/10.1103/PhysRevA.100.012107" target="_blank" rel="noopener">Open DOI →</a>
    </article>
      <article>
      <span>Non-Markovian dynamics</span>
      <h3>Colloquium: Non-Markovian dynamics in open quantum systems</h3>
      <p>H.-P. Breuer, E.-M. Laine, J. Piilo and B. Vacchini · Reviews of Modern Physics (2016). A modern review of memory, information backflow and ways to characterize departures from Markovian dynamics.</p>
      <a href="https://doi.org/10.1103/RevModPhys.88.021002" target="_blank" rel="noopener">Open DOI →</a>
    </article>
  </div>
</section>
{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-memory.js" defer></script>
<script src="{{ site.url }}/assets/js/lecture-secular.js" defer></script>
