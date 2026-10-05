---
layout: page
title: Lecture
excerpt: "Electronic structure → spin Hamiltonians → quantum dynamics → observables"
permalink: /lecture/
---

<div class="lecture-shell">

<header class="lecture-lead">
  <p class="lecture-intro">The central idea is simple: <strong>electronic structure determines the interactions</strong>, and <strong>spin dynamics determines what those interactions do in time</strong>. The experimentally accessible signal comes only after these two levels are connected.</p>

  <nav class="lecture-route" aria-label="Lecture path">
    <a href="#electronic-structure"><span>01</span>Electronic structure</a>
    <a href="#spin-hamiltonian"><span>02</span>Spin Hamiltonian</a>
    <a href="#spin-dynamics"><span>03</span>Spin dynamics</a>
    <a href="#radical-pairs"><span>04</span>Radical pairs</a>
    <a href="#multiscale"><span>05</span>Multiscale connection</a>
  </nav>
</header>

<section class="lecture-section" id="electronic-structure">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div>
      <p class="section-eyebrow">Electronic structure</p>
      <h2>What electronic state does the molecule have?</h2>
    </div>
  </div>

  <p>For fixed nuclear coordinates, electronic-structure theory solves an approximate form of the many-electron problem. In atomic units, the non-relativistic electronic Hamiltonian can be written schematically as</p>

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

  <p>The electron–electron term makes the exact solution difficult. Hartree–Fock, density-functional theory, correlated wavefunction methods and multireference approaches are different approximations to this same underlying problem. Which approximation is appropriate depends on the physics: ground-state energetics, charge transfer, excited states, near-degeneracy or magnetic interactions.</p>

  <div class="lecture-output-strip" aria-label="Electronic-structure outputs">
    <div><strong>Energies &amp; forces</strong><span>structures and reaction energetics</span></div>
    <div><strong>Charge &amp; spin density</strong><span>where electrons and unpaired spin reside</span></div>
    <div><strong>Excited states</strong><span>photoexcitation and charge transfer</span></div>
    <div><strong>Magnetic parameters</strong><span>\(\mathbf g\), \(\mathbf A\), \(J\), \(\mathbf D\), SOC, ZFS</span></div>
  </div>

  <div class="interactive-card" id="orbital-demo">
    <div class="interactive-head">
      <div>
        <span class="interactive-kicker">Interactive</span>
        <h3>State mixing and an avoided crossing</h3>
      </div>
      <span class="interactive-model-note">two-state Hamiltonian</span>
    </div>

    <p>Two localized electronic states with energy offset \(\Delta\) become mixed by a coupling \(t\):</p>

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

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="orbital-delta">Current offset \(\Delta\) <output id="orbital-delta-out">1.00 eV</output></label>
        <input id="orbital-delta" type="range" min="-4" max="4" step="0.05" value="1">

        <label for="orbital-coupling">Coupling \(t\) <output id="orbital-coupling-out">0.50 eV</output></label>
        <input id="orbital-coupling" type="range" min="0" max="1.2" step="0.025" value="0.5">

        <div class="interactive-readout">
          <span>Current gap <strong id="orbital-splitting">1.41 eV</strong></span>
          <span>Minimum gap <strong id="orbital-min-gap">1.00 eV</strong></span>
          <span>Ground-state character on state 1 <strong id="orbital-weight">85.4%</strong></span>
        </div>

        <div class="character-meter" aria-hidden="true"><span id="orbital-character-bar"></span></div>
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

          <path id="diabatic-1" class="diabatic-line" d=""/>
          <path id="diabatic-2" class="diabatic-line" d=""/>
          <path id="adiabatic-minus" class="adiabatic-line lower-line" d=""/>
          <path id="adiabatic-plus" class="adiabatic-line upper-line" d=""/>
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

    <p class="interactive-footnote">At \(t=0\), the diabatic states cross at \(\Delta=0\). Finite coupling mixes the states and opens a minimum gap of \(2|t|\). This simple model is the local mathematical prototype for many state-mixing problems in molecular electronic structure.</p>
  </div>
</section>

<section class="lecture-section" id="spin-hamiltonian">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div>
      <p class="section-eyebrow">Effective spin description</p>
      <h2>Project the electronic problem onto the relevant spin space</h2>
    </div>
  </div>

  <p>Once the electronic states are known, their magnetic interactions can be represented by a much smaller effective Hamiltonian. For two radicals, a useful schematic form is</p>

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

  <div class="hamiltonian-legend">
    <div><strong>Zeeman</strong><span>interaction with the external field through \(\mathbf g\)</span></div>
    <div><strong>Hyperfine</strong><span>electron–nuclear coupling through \(\mathbf A\)</span></div>
    <div><strong>Exchange</strong><span>short-range electron–electron interaction \(J\)</span></div>
    <div><strong>Dipolar</strong><span>anisotropic through-space interaction \(\mathbf D\)</span></div>
  </div>

  <aside class="lecture-note">
    <strong>Important convention.</strong>
    <span>Exchange-coupling signs and prefactors differ between Hamiltonian conventions. A numerical value of \(J\) is therefore incomplete unless the Hamiltonian definition is stated.</span>
  </aside>
</section>

<section class="lecture-section" id="spin-dynamics">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div>
      <p class="section-eyebrow">Time evolution</p>
      <h2>How does the spin state evolve?</h2>
    </div>
  </div>

  <p>For a closed system, the Hamiltonian generates unitary time evolution. For an ensemble or an open system, the density operator is usually the more useful description:</p>

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

  <p>The commutator produces coherent evolution; \(\mathcal R\) represents environmental relaxation or dephasing. Measurable quantities are expectation values, \(\langle O\rangle=\mathrm{Tr}[\rho\hat O]\).</p>

  <details class="lecture-details">
    <summary>Why use a density matrix?</summary>
    <p>A state vector describes a pure quantum state. The density matrix also represents statistical mixtures and provides the natural language for tracing out environmental degrees of freedom, adding relaxation models and computing ensemble observables.</p>
  </details>

  <div class="interactive-card" id="larmor-demo">
    <div class="interactive-head">
      <div>
        <span class="interactive-kicker">Interactive</span>
        <h3>Larmor precession of an electron spin</h3>
      </div>
      <button id="larmor-toggle" class="demo-toggle" type="button">Pause</button>
    </div>

    <p>For an approximately isotropic electron spin,</p>
    <div class="lecture-equation compact">\[
    f_\mathrm{L}=\frac{g\mu_B B_0}{h}.
    \]</div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="larmor-b">Magnetic field \(B_0\) <output id="larmor-b-out">1.00 mT</output></label>
        <input id="larmor-b" type="range" min="0.05" max="10" step="0.05" value="1">

        <label for="larmor-g"><em>g</em>-factor <output id="larmor-g-out">2.0023</output></label>
        <input id="larmor-g" type="range" min="1.8" max="2.2" step="0.0001" value="2.0023">

        <div class="interactive-readout">
          <span>Larmor frequency <strong id="larmor-frequency">28.02 MHz</strong></span>
          <span>Precession period <strong id="larmor-period">35.69 ns</strong></span>
        </div>
      </div>

      <div class="plot-wrap">
        <svg id="larmor-svg" class="lecture-svg" viewBox="0 0 520 300" role="img" aria-label="Schematic Larmor precession of an electron spin around an external magnetic field">
          <line x1="260" y1="246" x2="260" y2="39" class="field-axis"/>
          <path d="M260 25 L251 45 L269 45 Z" class="field-arrow"/>
          <text x="276" y="46" class="svg-label">B₀</text>

          <ellipse cx="260" cy="92" rx="82" ry="24" class="precession-orbit"/>
          <line x1="260" y1="230" x2="178" y2="92" class="cone-edge"/>
          <line x1="260" y1="230" x2="342" y2="92" class="cone-edge"/>
          <line id="spin-projection" x1="260" y1="92" x2="342" y2="92" class="spin-projection"/>
          <circle id="spin-tip" cx="342" cy="92" r="5.5" class="spin-tip"/>
          <line id="spin-vector" x1="260" y1="230" x2="342" y2="92" class="spin-vector-demo"/>
          <path id="spin-arrowhead" d="M342 92 L327 99 L336 108 Z" class="spin-arrow-demo"/>
          <circle cx="260" cy="230" r="7" class="spin-origin"/>
          <text x="276" y="243" class="svg-caption">spin origin</text>
          <text x="178" y="278" class="svg-caption">schematic projection of a fixed-angle precession cone</text>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">The frequency and period are physical. The visual animation rate is deliberately compressed to human timescales; it is not the real MHz rotation speed.</p>
  </div>
</section>

<section class="lecture-section" id="radical-pairs">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div>
      <p class="section-eyebrow">Spin chemistry</p>
      <h2>When spin evolution changes a chemical yield</h2>
    </div>
  </div>

  <p>Photoinduced or thermal electron transfer can create a spin-correlated radical pair. Different magnetic interactions on the two radicals drive singlet–triplet interconversion. If singlet and triplet states react differently, the spin dynamics becomes chemically observable.</p>

  <div class="lecture-mechanism" aria-label="Radical pair mechanism">
    <div><span>1</span><strong>Create</strong><small>electron transfer forms a correlated radical pair</small></div>
    <div class="mechanism-arrow">→</div>
    <div><span>2</span><strong>Evolve</strong><small>Zeeman, hyperfine, exchange and dipolar interactions act</small></div>
    <div class="mechanism-arrow">→</div>
    <div><span>3</span><strong>Mix</strong><small>singlet and triplet character changes with time</small></div>
    <div class="mechanism-arrow">→</div>
    <div><span>4</span><strong>React</strong><small>spin-selective pathways convert dynamics into yield</small></div>
  </div>

  <div class="interactive-card" id="st-demo">
    <div class="interactive-head">
      <div>
        <span class="interactive-kicker">Interactive</span>
        <h3>Minimal singlet–triplet mixing model</h3>
      </div>
      <span class="interactive-model-note">effective two-level system</span>
    </div>

    <p>A two-state projection is not a full radical-pair Hamiltonian, but it isolates the basic role of coupling and detuning:</p>

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

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="st-coupling">Effective coupling \(V\) <output id="st-coupling-out">3.00 MHz</output></label>
        <input id="st-coupling" type="range" min="0.1" max="10" step="0.1" value="3">

        <label for="st-detuning">Detuning \(\Delta\) <output id="st-detuning-out">2.00 MHz</output></label>
        <input id="st-detuning" type="range" min="0" max="20" step="0.1" value="2">

        <div class="interactive-readout">
          <span>Oscillation frequency <strong id="st-frequency">6.32 MHz</strong></span>
          <span>Maximum triplet population <strong id="st-amplitude">90.0%</strong></span>
          <span>Displayed time window <strong id="st-window">0.63 μs</strong></span>
        </div>
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
          <path id="singlet-path" class="population-line singlet-line" d=""/>
          <path id="triplet-path" class="population-line triplet-line" d=""/>
          <g class="plot-legend">
            <line x1="350" y1="52" x2="378" y2="52" class="population-line singlet-line"/>
            <text x="386" y="56" class="svg-label">P<tspan baseline-shift="sub" font-size="8">S</tspan></text>
            <line x1="438" y1="52" x2="466" y2="52" class="population-line triplet-line"/>
            <text x="474" y="56" class="svg-label">P<tspan baseline-shift="sub" font-size="8">T</tspan></text>
          </g>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">The plot automatically adjusts its time window so the oscillation remains readable. A real radical pair additionally contains multiple triplet sublevels, nuclear spins, orientation dependence, relaxation, molecular motion and spin-selective reaction kinetics.</p>
  </div>
</section>

<section class="lecture-section" id="multiscale">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div>
      <p class="section-eyebrow">From molecules to observables</p>
      <h2>Why electronic structure and spin dynamics must be connected</h2>
    </div>
  </div>

  <p>In a protein or flexible molecular system, magnetic interactions are not fixed numbers. Structural fluctuations change distances, orientations, electrostatics and spin density. The effective spin Hamiltonian therefore inherits molecular motion.</p>

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

<section class="lecture-section" id="selected-work">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
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
      <p>Stochastic state-vector propagation for radical-pair dynamics.</p>
      <a href="https://doi.org/10.1021/acs.jctc.4c00361" target="_blank" rel="noopener">J. Chem. Theory Comput. (2024) →</a>
    </article>
    <article>
      <span>Electronic structure</span>
      <h3>Importance of Polarizable Embedding for Absorption Spectrum Calculations of Arabidopsis thaliana Cryptochrome 1</h3>
      <p>Environmental effects on electronic excitation energies in a flavoprotein chromophore.</p>
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
      <p>How molecular dynamics and fluctuating interactions affect magnetosensitivity.</p>
      <a href="https://doi.org/10.1021/acs.jpcb.5c01187" target="_blank" rel="noopener">J. Phys. Chem. B (2025) →</a>
    </article>
    <article>
      <span>Multiscale theory</span>
      <h3>Multiscale modeling approaches in biomolecular physics</h3>
      <p>Connecting molecular simulation, electronic structure and quantum observables across scales.</p>
      <a href="https://doi.org/10.1080/23746149.2026.2660655" target="_blank" rel="noopener">Advances in Physics: X (2026) →</a>
    </article>
  </div>

  <p class="lecture-all-pubs"><a href="{{ site.url }}/publications/">View the complete publication list →</a></p>
</section>

</div>

<script src="{{ site.url }}/assets/js/lecture-interactive.js" defer></script>
