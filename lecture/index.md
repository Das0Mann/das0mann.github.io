---
layout: page
title: Lecture
excerpt: "Electronic structure → spin Hamiltonians → quantum dynamics → observables"
permalink: /lecture/
---

<div class="lecture-shell">

<header class="lecture-lead">
  <p class="lecture-intro"><strong>Here is the way I usually think about the problem:</strong> we do not start with “spins” as isolated arrows. We start with electrons in a molecule. Electronic-structure theory tells us where those electrons are and how they interact. From that we build a spin Hamiltonian. Only then do we ask how the spin state evolves and what an experiment can actually observe.</p>

  <div class="lecture-map" aria-label="Conceptual path from molecular structure to experiment">
    <div><span>1</span><strong>Molecular structure</strong><small>nuclei, geometry, environment</small></div>
    <div class="map-arrow">→</div>
    <div><span>2</span><strong>Electronic structure</strong><small>states, densities, excitations</small></div>
    <div class="map-arrow">→</div>
    <div><span>3</span><strong>Spin Hamiltonian</strong><small>\(g\), \(A\), \(J\), \(D\), SOC</small></div>
    <div class="map-arrow">→</div>
    <div><span>4</span><strong>Spin dynamics</strong><small>\(\rho(t)\), coherence, relaxation</small></div>
    <div class="map-arrow">→</div>
    <div><span>5</span><strong>Observable</strong><small>EPR, MFE, RYDMR, CIDNP</small></div>
  </div>

  <nav class="lecture-route" aria-label="Lecture path">
    <a href="#electronic-structure"><span>01</span>Electronic structure</a>
    <a href="#spin-hamiltonian"><span>02</span>Spin Hamiltonian</a>
    <a href="#spin-dynamics"><span>03</span>Spin dynamics</a>
    <a href="#radical-pairs"><span>04</span>Radical pairs</a>
    <a href="#molecular-motion"><span>05</span>Molecular motion</a>
    <a href="#observables"><span>06</span>Observables</a>
  </nav>
</header>

<section class="lecture-section" id="electronic-structure">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div>
      <p class="section-eyebrow">Electronic structure</p>
      <h2>Start with the electrons</h2>
    </div>
  </div>

  <p>If I put a molecular geometry on the board, the first question is not yet “how does the spin precess?” It is: <strong>what electronic state does this geometry support?</strong> Within the Born–Oppenheimer approximation we freeze the nuclei for the moment and solve the electronic problem. In atomic units, a useful schematic Hamiltonian is</p>

  <div class="lecture-equation">
  \[
  \hat H_\mathrm{e}
  =
  -\frac{1}{2}\sum_i \nabla_i^2
  -\sum_{iA}\frac{Z_A}{r_{iA}}
  +\sum_{i<j}\frac{1}{r_{ij}}
  +V_\mathrm{NN}.
  \]
  </div>

  <p>The first two electronic terms are familiar: kinetic energy and attraction to the nuclei. The hard part is the electron–electron repulsion. Every practical electronic-structure method is, in one way or another, a strategy for dealing with this many-electron problem without explicitly solving the exact wavefunction for every electron coordinate.</p>

  <aside class="teacher-note">
    <strong>One useful mental correction:</strong>
    <span>molecular orbitals are extremely useful, but they are not little tracks on which individual electrons fly around. They are one-electron functions used to represent the many-electron state.</span>
  </aside>

  <h3 class="lecture-subhead">So what is the difference between HF, DFT and “correlated” methods?</h3>

  <div class="method-ladder">
    <div>
      <span>Hartree–Fock</span>
      <p>A single Slater determinant. Exchange is treated exactly within that determinant, but dynamical electron correlation is missing.</p>
    </div>
    <div>
      <span>Density-functional theory</span>
      <p>Works through the electron density and a Kohn–Sham reference system. In principle exact; in practice the exchange–correlation functional is the approximation.</p>
    </div>
    <div>
      <span>Post-HF correlation</span>
      <p>Methods such as MP2 or coupled cluster add correlation beyond a single determinant, usually at substantially higher computational cost.</p>
    </div>
    <div>
      <span>Multireference theory</span>
      <p>Needed when several electronic configurations are genuinely important—for example near bond breaking, degeneracies or strongly correlated states.</p>
    </div>
  </div>

  <p>For photochemistry we also need excited states. TD-DFT is often the practical workhorse, while wavefunction and multireference approaches become important when charge transfer, double-excitation character or near-degeneracy makes a single-reference description unreliable.</p>

  <div class="lecture-output-strip" aria-label="Electronic-structure outputs">
    <div><strong>Energies &amp; forces</strong><span>structures, reaction energetics and molecular motion</span></div>
    <div><strong>Charge &amp; spin density</strong><span>where charge and unpaired spin are actually localized</span></div>
    <div><strong>Excited states</strong><span>photoexcitation, charge transfer and state ordering</span></div>
    <div><strong>Magnetic parameters</strong><span>\(\mathbf g\), \(\mathbf A\), \(J\), \(\mathbf D\), SOC and ZFS</span></div>
  </div>

  <div class="interactive-card" id="orbital-demo">
    <div class="interactive-head">
      <div>
        <span class="interactive-kicker">Interactive</span>
        <h3>State mixing and an avoided crossing</h3>
      </div>
      <span class="interactive-model-note">two-state Hamiltonian</span>
    </div>

    <p>Here is the smallest model that already shows something important. Two localized states have an energy offset \(\Delta\) and interact through a coupling \(t\):</p>

    <div class="lecture-equation compact">
    \[
    H =
    \begin{pmatrix}
      -\Delta/2 & t\\
      t & +\Delta/2
    \end{pmatrix},
    \qquad
    E_\pm = \pm\sqrt{(\Delta/2)^2+t^2}.
    \]
    </div>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>first set \(t=0\): the states cross. Then increase \(t\). The crossing opens into a gap and the state character becomes mixed near \(\Delta=0\).</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="orbital-delta">Current offset \(\Delta\) <output id="orbital-delta-out">1.00 eV</output></label>
        <input id="orbital-delta" type="range" min="-4" max="4" step="0.05" value="1">

        <label for="orbital-coupling">Coupling \(t\) <output id="orbital-coupling-out">0.50 eV</output></label>
        <input id="orbital-coupling" type="range" min="0" max="1.2" step="0.025" value="0.5">

        <div class="demo-presets">
          <button type="button" data-orbital-delta="0" data-orbital-coupling="0">crossing</button>
          <button type="button" data-orbital-delta="0" data-orbital-coupling="0.25">weak mixing</button>
          <button type="button" data-orbital-delta="0" data-orbital-coupling="0.9">strong mixing</button>
        </div>

        <div class="interactive-readout">
          <span>Current gap <strong id="orbital-splitting">1.41 eV</strong></span>
          <span>Minimum gap <strong id="orbital-min-gap">1.00 eV</strong></span>
          <span>Ground-state character on state 1 <strong id="orbital-weight">85.4%</strong></span>
        </div>

        <div class="character-meter" aria-hidden="true"><span id="orbital-character-bar"></span></div>
        <p id="orbital-explanation" class="demo-explanation">Away from the crossing, the lower state is mostly localized on one diabatic state.</p>
      </div>

      <div class="plot-wrap">
        <svg id="orbital-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="Avoided crossing between two coupled electronic states">
          <line x1="58" y1="252" x2="528" y2="252" class="plot-axis"/>
          <line x1="58" y1="30" x2="58" y2="252" class="plot-axis"/>
          <line x1="58" y1="141" x2="528" y2="141" class="plot-grid"/>
          <line x1="293" y1="30" x2="293" y2="252" class="plot-grid"/>

          <text x="492" y="278" class="svg-caption">Δ / eV</text>
          <text x="15" y="34" class="svg-caption">E / eV</text>
          <text x="52" y="269" class="svg-tick">−4</text>
          <text x="169" y="269" class="svg-tick">−2</text>
          <text x="289" y="269" class="svg-tick">0</text>
          <text x="406" y="269" class="svg-tick">2</text>
          <text x="522" y="269" class="svg-tick">4</text>
          <text x="35" y="249" class="svg-tick">−2</text>
          <text x="42" y="144" class="svg-tick">0</text>
          <text x="42" y="40" class="svg-tick">2</text>

          <path id="diabatic-1" class="diabatic-line" fill="none" d=""/>
          <path id="diabatic-2" class="diabatic-line" fill="none" d=""/>
          <path id="adiabatic-minus" class="adiabatic-line lower-line" fill="none" d=""/>
          <path id="adiabatic-plus" class="adiabatic-line upper-line" fill="none" d=""/>
          <line id="orbital-marker" x1="352" y1="30" x2="352" y2="252" class="plot-marker"/>
          <circle id="orbital-marker-minus" cx="352" cy="176" r="5" class="plot-point lower-point"/>
          <circle id="orbital-marker-plus" cx="352" cy="106" r="5" class="plot-point upper-point"/>

          <g class="plot-legend">
            <line x1="335" y1="47" x2="362" y2="47" class="adiabatic-line upper-line"/>
            <text x="369" y="51" class="svg-label">coupled E±</text>
            <line x1="435" y1="47" x2="462" y2="47" class="diabatic-line"/>
            <text x="469" y="51" class="svg-label">uncoupled</text>
          </g>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">The model is deliberately tiny, but the lesson is general: interaction changes both energies and state character. That same logic appears in charge transfer, excited-state mixing and many effective Hamiltonians.</p>
  </div>
</section>

<section class="lecture-section" id="spin-hamiltonian">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div>
      <p class="section-eyebrow">Effective spin description</p>
      <h2>Now compress the electronic problem into spin interactions</h2>
    </div>
  </div>

  <p>Once the electronic state is known, we usually do not want to carry the full electronic wavefunction through a spin-dynamics simulation. Instead, we project the relevant physics onto a much smaller spin space. For a pair of radicals a useful schematic Hamiltonian is</p>

  <div class="lecture-equation">
  \[
  \hat H_\mathrm{spin}
  =
  \sum_i \mu_B\,\mathbf B\!\cdot\!\mathbf g_i\!\cdot\!\hat{\mathbf S}_i
  +\sum_{ik}\hat{\mathbf S}_i\!\cdot\!\mathbf A_{ik}\!\cdot\!\hat{\mathbf I}_{ik}
  +J\,\hat{\mathbf S}_1\!\cdot\!\hat{\mathbf S}_2
  +\hat{\mathbf S}_1\!\cdot\!\mathbf D\!\cdot\!\hat{\mathbf S}_2
  +\cdots .
  \]
  </div>

  <p>This is where electronic structure and spin dynamics meet. The symbols in this Hamiltonian are not arbitrary fitting decorations: they encode the underlying electron density, spin–orbit coupling and geometry.</p>

  <div class="hamiltonian-legend">
    <div><strong>Zeeman / \(g\)</strong><span>how an electron spin couples to the external field; deviations from the free-electron value arise mainly through spin–orbit coupling and electronic structure</span></div>
    <div><strong>Hyperfine / \(A\)</strong><span>electron–nuclear coupling; strongly connected to the spin density around a nucleus and often anisotropic</span></div>
    <div><strong>Exchange / \(J\)</strong><span>an electronic interaction between two spins that can vary extremely strongly with distance, overlap and electronic configuration</span></div>
    <div><strong>Dipolar / \(D\)</strong><span>anisotropic spin–spin interaction; in the point-dipole limit it scales approximately as \(r^{-3}\)</span></div>
  </div>

  <details class="lecture-details">
    <summary>What else can appear in the Hamiltonian?</summary>
    <p>Nuclear Zeeman interactions, nuclear quadrupole tensors for nuclei with \(I>1/2\), zero-field splitting for higher-spin states, microwave or radiofrequency driving fields, and additional exchange or anisotropic terms depending on the experiment.</p>
  </details>

  <aside class="lecture-note">
    <strong>A practical warning about \(J\).</strong>
    <span>Different communities use different exchange Hamiltonians and therefore different signs and prefactors. A quoted exchange coupling is incomplete unless the Hamiltonian convention is stated.</span>
  </aside>

  <aside class="teacher-note">
    <strong>The important point:</strong>
    <span>a “spin parameter” is often a molecular property. Change the geometry, protonation state, electronic state or solvent environment and the parameter can change as well.</span>
  </aside>
</section>

<section class="lecture-section" id="spin-dynamics">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div>
      <p class="section-eyebrow">Time evolution</p>
      <h2>What does the spin Hamiltonian actually do?</h2>
    </div>
  </div>

  <p>For a closed pure state, the answer is the time-dependent Schrödinger equation. In spin chemistry and magnetic resonance we very often deal with ensembles, incomplete information and environmental coupling, so the density matrix is usually the more useful language:</p>

  <div class="lecture-equation equation-pair">
    <div>\[
    i\hbar\frac{\partial}{\partial t}\lvert\psi(t)\rangle
    =\hat H\lvert\psi(t)\rangle
    \]</div>
    <div>\[
    \dot\rho
    =-\frac{i}{\hbar}[\hat H,\rho]
    +\mathcal R(\rho).
    \]</div>
  </div>

  <p>The commutator gives coherent evolution. The relaxation superoperator \(\mathcal R\) represents the fact that the spin system is not isolated from molecular motion, solvent, vibrations and the rest of its environment. Once \(\rho(t)\) is known, an observable follows from \(\langle O\rangle=\mathrm{Tr}[\rho\hat O]\).</p>

  <details class="lecture-details">
    <summary>Why not just propagate a wavefunction?</summary>
    <p>You can, if the problem is a pure closed state or if you use a stochastic unraveling of an open-system equation. But a density matrix naturally represents statistical mixtures, decoherence and ensemble averages. This is why Liouville-space formulations are so common in EPR, NMR and radical-pair theory.</p>
  </details>

  <h3 class="lecture-subhead">\(T_1\), \(T_2\) and dephasing are not the same thing</h3>

  <p>\(T_1\) describes longitudinal population relaxation toward equilibrium. \(T_2\) describes decay of transverse coherence. A useful decomposition is</p>

  <div class="lecture-equation">
  \[
  \frac{1}{T_2}
  =
  \frac{1}{2T_1}
  +
  \frac{1}{T_\phi},
  \]
  </div>

  <p>where \(T_\phi\) is the pure-dephasing time. So \(T_2\) is <strong>not simply defined by \(T_1\)</strong>. In the absence of pure dephasing one obtains the upper limit \(T_2=2T_1\); additional dephasing makes \(T_2\) shorter.</p>

  <div class="interactive-card" id="larmor-demo">
    <div class="interactive-head">
      <div>
        <span class="interactive-kicker">Interactive</span>
        <h3>Larmor precession of an electron spin</h3>
      </div>
      <button id="larmor-toggle" class="demo-toggle" type="button">Pause</button>
    </div>

    <p>Before adding hyperfine coupling, relaxation or a second electron, it is worth understanding the simplest motion. An approximately isotropic electron spin in a static field precesses at</p>

    <div class="lecture-equation compact">\[
    f_\mathrm{L}=\frac{g\mu_B B_0}{h}.
    \]</div>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>compare \(50~\mu\text{T}\), \(1~\text{mT}\) and \(10~\text{mT}\). The frequency changes linearly with field.</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="larmor-b">Magnetic field \(B_0\) <output id="larmor-b-out">1.00 mT</output></label>
        <input id="larmor-b" type="range" min="0.05" max="10" step="0.05" value="1">

        <label for="larmor-g"><em>g</em>-factor <output id="larmor-g-out">2.0023</output></label>
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
        <svg id="larmor-svg" class="lecture-svg" viewBox="0 0 520 300" role="img" aria-label="Schematic Larmor precession of an electron spin around an external magnetic field">
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
          <text x="276" y="243" class="svg-caption">spin origin</text>
          <text x="178" y="278" class="svg-caption">2D projection of a fixed-angle precession cone</text>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">The numerical frequency and period are physical. The animation itself is slowed down enormously so that the motion is visible.</p>
  </div>
</section>

<section class="lecture-section" id="radical-pairs">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div>
      <p class="section-eyebrow">Spin chemistry</p>
      <h2>How can spin motion change chemistry?</h2>
    </div>
  </div>

  <p>This is the key step in radical-pair chemistry. Photoexcitation or thermal electron transfer can create two radicals whose electron spins are correlated. The pair may start, for example, in a singlet state. Different magnetic interactions on the two radicals then change the spin character in time.</p>

  <details class="lecture-details">
    <summary>What do singlet and triplet actually mean?</summary>
    <p>For two electron spins \(1/2\), the singlet is \(\lvert S\rangle=(\lvert\alpha\beta\rangle-\lvert\beta\alpha\rangle)/\sqrt2\). The triplet manifold contains \(\lvert T_+\rangle=\lvert\alpha\alpha\rangle\), \(\lvert T_0\rangle=(\lvert\alpha\beta\rangle+\lvert\beta\alpha\rangle)/\sqrt2\), and \(\lvert T_-\rangle=\lvert\beta\beta\rangle\). The labels describe the coupled two-electron spin state, not two separate classical arrows.</p>
  </details>

  <div class="lecture-mechanism" aria-label="Radical pair mechanism">
    <div><span>1</span><strong>Create</strong><small>electron transfer forms a spin-correlated radical pair</small></div>
    <div class="mechanism-arrow">→</div>
    <div><span>2</span><strong>Evolve</strong><small>Zeeman, hyperfine, exchange and dipolar terms act</small></div>
    <div class="mechanism-arrow">→</div>
    <div><span>3</span><strong>Mix</strong><small>singlet and triplet character change with time</small></div>
    <div class="mechanism-arrow">→</div>
    <div><span>4</span><strong>React</strong><small>spin-selective chemistry converts dynamics into yield</small></div>
  </div>

  <p>If singlet and triplet radical pairs have different reaction channels, the chemical product yield depends on the spin dynamics. In a simple first-order picture, a singlet product yield can be written schematically as</p>

  <div class="lecture-equation">
  \[
  \Phi_S
  =
  k_S\int_0^\infty
  \mathrm{Tr}\!\left[\hat P_S\rho(t)\right]\,dt,
  \]
  </div>

  <p>provided the reaction kinetics are included consistently in the evolution of \(\rho(t)\). This equation is the bridge from an evolving quantum state to a chemical observable.</p>

  <div class="interactive-card" id="st-demo">
    <div class="interactive-head">
      <div>
        <span class="interactive-kicker">Interactive</span>
        <h3>A minimal singlet–triplet mixing model</h3>
      </div>
      <span class="interactive-model-note">effective two-level system</span>
    </div>

    <p>A real radical pair can contain many nuclear spins and four electronic spin states. But a two-level model is enough to see what coupling and detuning do:</p>

    <div class="lecture-equation compact">
    \[
    \frac{H}{h}=
    \begin{pmatrix}
      0 & V\\
      V & \Delta
    \end{pmatrix},
    \qquad
    P_T(t)=
    \frac{4V^2}{\Delta^2+4V^2}
    \sin^2\!\left(\pi\sqrt{\Delta^2+4V^2}\,t\right).
    \]
    </div>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>set \(\Delta=0\) and the transfer can reach 100%. Then increase \(\Delta\): the states become off-resonant and the maximum triplet population drops.</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="st-coupling">Effective coupling \(V\) <output id="st-coupling-out">3.00 MHz</output></label>
        <input id="st-coupling" type="range" min="0.1" max="10" step="0.1" value="3">

        <label for="st-detuning">Detuning \(\Delta\) <output id="st-detuning-out">2.00 MHz</output></label>
        <input id="st-detuning" type="range" min="0" max="20" step="0.1" value="2">

        <div class="demo-presets">
          <button type="button" data-st-v="3" data-st-delta="0">on resonance</button>
          <button type="button" data-st-v="3" data-st-delta="6">detuned</button>
          <button type="button" data-st-v="1" data-st-delta="12">weak transfer</button>
        </div>

        <div class="interactive-readout">
          <span>Oscillation frequency <strong id="st-frequency">6.32 MHz</strong></span>
          <span>Maximum triplet population <strong id="st-amplitude">90.0%</strong></span>
          <span>Displayed time window <strong id="st-window">0.63 μs</strong></span>
        </div>

        <p id="st-explanation" class="demo-explanation">Coupling is currently strong enough to overcome most of the detuning, so large-amplitude S–T oscillations remain possible.</p>
      </div>

      <div class="plot-wrap">
        <svg id="st-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="Singlet and triplet populations as a function of time">
          <line x1="58" y1="248" x2="530" y2="248" class="plot-axis"/>
          <line x1="58" y1="35" x2="58" y2="248" class="plot-axis"/>
          <line x1="58" y1="141.5" x2="530" y2="141.5" class="plot-grid"/>
          <text x="478" y="278" class="svg-caption">time / μs</text>
          <text x="12" y="38" class="svg-caption">population</text>
          <text x="41" y="252" class="svg-tick">0</text>
          <text x="34" y="145" class="svg-tick">0.5</text>
          <text x="41" y="39" class="svg-tick">1</text>
          <text id="st-time-0" x="54" y="268" class="svg-tick">0</text>
          <text id="st-time-mid" x="284" y="268" class="svg-tick">0.32</text>
          <text id="st-time-max" x="512" y="268" class="svg-tick">0.63</text>
          <path id="singlet-path" class="population-line singlet-line" fill="none" d=""/>
          <path id="triplet-path" class="population-line triplet-line" fill="none" d=""/>
          <g class="plot-legend">
            <line x1="350" y1="52" x2="378" y2="52" class="population-line singlet-line"/>
            <text x="386" y="56" class="svg-label">P<tspan baseline-shift="sub" font-size="8">S</tspan></text>
            <line x1="438" y1="52" x2="466" y2="52" class="population-line triplet-line"/>
            <text x="474" y="56" class="svg-label">P<tspan baseline-shift="sub" font-size="8">T</tspan></text>
          </g>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">This model is intentionally pedagogical. A realistic radical pair additionally contains \(T_+\), \(T_0\), \(T_-\), nuclear spins, anisotropy, orientation dependence, relaxation, molecular motion and spin-selective reaction kinetics.</p>
  </div>
</section>

<section class="lecture-section" id="molecular-motion">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div>
      <p class="section-eyebrow">Molecular motion &amp; open systems</p>
      <h2>The Hamiltonian is often moving too</h2>
    </div>
  </div>

  <p>In a protein, solvent or flexible donor–acceptor system, the geometry changes continuously. That means the magnetic interactions can become time-dependent:</p>

  <div class="lecture-equation">
  \[
  \hat H(t)=\hat H\!\left[\mathbf R(t)\right].
  \]
  </div>

  <p>This compact equation is easy to underestimate. A side-chain rotation can change a hyperfine tensor. A donor–acceptor distance can change exchange coupling by orders of magnitude. Protein motion can reorient anisotropic \(g\)- and dipolar tensors. So molecular dynamics is not merely “structural decoration” around the spin calculation—it can determine the spin dynamics itself.</p>

  <div class="timescale-strip">
    <div>
      <strong>Fast motion</strong>
      <span>\(\tau_c\ll\tau_\mathrm{spin}\)</span>
      <p>Interactions can be motionally averaged.</p>
    </div>
    <div>
      <strong>Comparable timescales</strong>
      <span>\(\tau_c\sim\tau_\mathrm{spin}\)</span>
      <p>Fluctuations can drive efficient relaxation and strongly modify coherent dynamics.</p>
    </div>
    <div>
      <strong>Slow motion</strong>
      <span>\(\tau_c\gg\tau_\mathrm{spin}\)</span>
      <p>The system behaves more like an ensemble of quasi-static conformations.</p>
    </div>
  </div>

  <aside class="teacher-note">
    <strong>A common modelling trap:</strong>
    <span>calculating one beautiful DFT spin Hamiltonian for one optimized geometry does not automatically describe a flexible protein. Sometimes the distribution and time correlation of the parameters matter more than their value at a single structure.</span>
  </aside>

  <div class="lecture-pipeline">
    <div><span>Structure</span><strong>MD &amp; conformational sampling</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Electrons</span><strong>DFT, TD-DFT &amp; multireference theory</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Spin model</span><strong>\(\mathbf g\), \(\mathbf A\), \(J\), \(\mathbf D\), SOC</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Dynamics</span><strong>\(\rho(t)\), relaxation &amp; stochastic propagation</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Experiment</span><strong>EPR, NMR, CIDNP, yields &amp; magnetic-field effects</strong></div>
  </div>

  <p>This multiscale connection is a recurring theme of my current work and of the development of <a href="https://molspin.eu" target="_blank" rel="noopener">MolSpin</a>.</p>
</section>

<section class="lecture-section" id="observables">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div>
      <p class="section-eyebrow">What do we actually measure?</p>
      <h2>Translate the dynamics into an experiment</h2>
    </div>
  </div>

  <p>A simulation becomes useful only when it predicts an observable. Different experiments interrogate different parts of the same Hamiltonian and dynamics.</p>

  <div class="observable-list">
    <div>
      <strong>EPR / ESR</strong>
      <span>Resonance positions, anisotropy, line shapes and transition intensities probe \(g\)-tensors, hyperfine interactions, ZFS and relaxation.</span>
    </div>
    <div>
      <strong>Magnetic-field effects</strong>
      <span>A reaction yield or kinetic observable changes with static field because the field modifies spin-state evolution.</span>
    </div>
    <div>
      <strong>RYDMR</strong>
      <span>Apply resonant RF or microwave fields and detect the response through a reaction yield rather than conventional microwave absorption.</span>
    </div>
    <div>
      <strong>CIDNP / photo-CIDNP</strong>
      <span>Spin-selective radical-pair chemistry creates non-Boltzmann nuclear spin polarization that is detected by NMR.</span>
    </div>
  </div>

  <aside class="lecture-note">
    <strong>This is why “the best model” depends on the experiment.</strong>
    <span>If you want an EPR line shape, relaxation and anisotropy can be central. If you want a magnetic-field-dependent chemical yield, reaction kinetics and singlet–triplet evolution may dominate. There is no single spin-dynamics model that is automatically optimal for every observable.</span>
  </aside>
</section>

<section class="lecture-section" id="selected-work">
  <div class="lecture-section-head">
    <span class="lecture-index">07</span>
    <div>
      <p class="section-eyebrow">Selected reading</p>
      <h2>Where these ideas appear in my work</h2>
    </div>
  </div>

  <div class="lecture-reading-grid">
    <article>
      <span>Spin dynamics</span>
      <h3>Modeling spin relaxation in complex radical systems using MolSpin</h3>
      <p>Open-system dynamics and relaxation in molecular spin systems.</p>
      <a href="https://doi.org/10.1002/jcc.27120" target="_blank" rel="noopener">J. Comput. Chem. (2023) →</a>
    </article>

    <article>
      <span>Spin dynamics</span>
      <h3>Spin Dynamics of Radical Pairs Using the Stochastic Schrödinger Equation in MolSpin</h3>
      <p>Stochastic state-vector propagation as an alternative route to radical-pair dynamics.</p>
      <a href="https://doi.org/10.1021/acs.jctc.4c00361" target="_blank" rel="noopener">J. Chem. Theory Comput. (2024) →</a>
    </article>

    <article>
      <span>Electronic structure</span>
      <h3>Importance of Polarizable Embedding for Absorption Spectrum Calculations of Arabidopsis thaliana Cryptochrome 1</h3>
      <p>How the molecular environment changes electronic excitation energies in a flavoprotein chromophore.</p>
      <a href="https://doi.org/10.1021/acs.jpcb.4c02168" target="_blank" rel="noopener">J. Phys. Chem. B (2024) →</a>
    </article>

    <article>
      <span>Electronic structure → spin</span>
      <h3>Revealing the Impact of g-Tensor Anisotropy on the Charge Recombination in Donor–Acceptor Dyads Under High Magnetic Fields</h3>
      <p>A direct example of an electronic-structure-derived magnetic interaction controlling spin-dependent kinetics.</p>
      <a href="https://doi.org/10.1021/jacs.5c06173" target="_blank" rel="noopener">JACS (2025) →</a>
    </article>

    <article>
      <span>Dynamic radical pairs</span>
      <h3>Magnetosensitivity of Model Flavin–Tryptophan Radical Pairs in a Dynamic Protein Environment</h3>
      <p>How molecular motion and fluctuating interactions influence magnetosensitivity.</p>
      <a href="https://doi.org/10.1021/acs.jpcb.5c01187" target="_blank" rel="noopener">J. Phys. Chem. B (2025) →</a>
    </article>

    <article>
      <span>Weak fields</span>
      <h3>Weak Radiofrequency Field Effects on Biological Systems Mediated through the Radical Pair Mechanism</h3>
      <p>A broader view of radical-pair physics, weak RF fields and biological magnetic-field effects.</p>
      <a href="https://doi.org/10.1021/acs.chemrev.5c00178" target="_blank" rel="noopener">Chemical Reviews (2025) →</a>
    </article>

    <article>
      <span>Magnetic resonance</span>
      <h3>Reaction-yield detected magnetic resonance spectroscopy of radical pairs in cryptochrome-4a</h3>
      <p>Connecting radical-pair spin dynamics to a reaction-yield-detected resonance experiment.</p>
      <a href="https://doi.org/10.1016/j.freeradbiomed.2026.04.015" target="_blank" rel="noopener">Free Radic. Biol. Med. (2026) →</a>
    </article>

    <article>
      <span>Multiscale theory</span>
      <h3>Multiscale modeling approaches in biomolecular physics</h3>
      <p>How atomistic simulation, electronic structure and quantum observables can be connected across scales.</p>
      <a href="https://doi.org/10.1080/23746149.2026.2660655" target="_blank" rel="noopener">Advances in Physics: X (2026) →</a>
    </article>
  </div>

  <p class="lecture-all-pubs"><a href="{{ site.url }}/publications/">View the complete publication list →</a></p>
</section>

</div>

<script src="{{ site.url }}/assets/js/lecture-interactive.js" defer></script>
