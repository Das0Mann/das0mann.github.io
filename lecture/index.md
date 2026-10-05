---
layout: page
title: Lecture
excerpt: "Core principles of electronic-structure theory and molecular spin dynamics"
permalink: /lecture/
---

<div class="lecture-shell">

<p class="lecture-intro">This page is a compact, graduate-level introduction to two theoretical layers that underpin much of my research: <strong>electronic-structure theory</strong>, which determines molecular electronic states and magnetic interactions, and <strong>spin dynamics</strong>, which determines how those interactions generate time-dependent magnetic, spectroscopic and chemical observables.</p>

<nav class="lecture-toc" aria-label="Lecture contents">
  <a href="#electronic-structure">Electronic structure</a>
  <a href="#spin-hamiltonian">Spin Hamiltonian</a>
  <a href="#spin-dynamics">Spin dynamics</a>
  <a href="#radical-pairs">Radical pairs</a>
  <a href="#multiscale">Multiscale connection</a>
  <a href="#selected-work">Selected work</a>
</nav>

<section class="lecture-section" id="electronic-structure">
  <p class="section-eyebrow">Part I</p>
  <h2>Electronic structure: from nuclei and electrons to effective molecular parameters</h2>

  <p>Within the Born–Oppenheimer picture, the nuclei define a molecular geometry and the electronic problem is solved for that fixed nuclear configuration. In atomic units, a non-relativistic electronic Hamiltonian may be written schematically as</p>

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

  <p>The difficult term is electron–electron interaction. The exact many-electron wavefunction becomes prohibitively expensive as system size grows, so practical electronic-structure theory introduces controlled approximations. Hartree–Fock represents the electronic state by a single antisymmetrized determinant; correlated wavefunction methods improve on this reference; density-functional theory works with the electron density; time-dependent DFT treats many excited-state problems; and multireference methods are required when no single determinant provides a qualitatively adequate reference.</p>

  <div class="lecture-concept-grid">
    <article class="lecture-concept">
      <span class="lecture-number">01</span>
      <h3>Ground-state structure</h3>
      <p>Energies, forces, charge and spin densities, orbital character and electronic localization.</p>
    </article>
    <article class="lecture-concept">
      <span class="lecture-number">02</span>
      <h3>Excited states</h3>
      <p>Vertical excitations, charge-transfer states, transition properties and photochemical pathways.</p>
    </article>
    <article class="lecture-concept">
      <span class="lecture-number">03</span>
      <h3>Magnetic parameters</h3>
      <p>Hyperfine tensors, <em>g</em>-tensors, spin–orbit effects, zero-field splitting and exchange interactions.</p>
    </article>
  </div>

  <div class="interactive-card" id="orbital-demo">
    <div class="interactive-head">
      <div>
        <span class="interactive-kicker">Interactive model</span>
        <h3>Two-orbital mixing and avoided crossing</h3>
      </div>
      <span class="interactive-model-note">2 × 2 Hamiltonian</span>
    </div>

    <p>Consider two localized orbitals with energy difference \(\Delta\) and electronic coupling \(t\):</p>

    <div class="lecture-equation compact">
    \[
    \frac{H}{\mathrm{eV}} =
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
        <label for="orbital-delta">Site-energy difference \(\Delta\) <output id="orbital-delta-out">1.00 eV</output></label>
        <input id="orbital-delta" type="range" min="-4" max="4" step="0.05" value="1">

        <label for="orbital-coupling">Electronic coupling \(t\) <output id="orbital-coupling-out">0.50 eV</output></label>
        <input id="orbital-coupling" type="range" min="0" max="2" step="0.025" value="0.5">

        <div class="interactive-readout" aria-live="polite">
          <span>Energy splitting <strong id="orbital-splitting">1.41 eV</strong></span>
          <span>Lower-state weight on orbital 1 <strong id="orbital-weight">85.4%</strong></span>
        </div>
      </div>

      <svg id="orbital-svg" class="lecture-svg orbital-svg" viewBox="0 0 520 270" role="img" aria-label="Interactive two-orbital energy-level diagram">
        <text x="70" y="25" class="svg-caption">localized basis</text>
        <text x="350" y="25" class="svg-caption">eigenstates</text>

        <line id="site1-line" x1="50" x2="165" y1="165" y2="165" class="energy-line muted"/>
        <line id="site2-line" x1="50" x2="165" y1="105" y2="105" class="energy-line muted"/>
        <text id="site1-label" x="50" y="185" class="svg-label">ε₁</text>
        <text id="site2-label" x="50" y="94" class="svg-label">ε₂</text>

        <line id="bonding-line" x1="340" x2="470" y1="195" y2="195" class="energy-line active"/>
        <line id="antibonding-line" x1="340" x2="470" y1="75" y2="75" class="energy-line active"/>
        <text x="475" y="199" class="svg-label">E−</text>
        <text x="475" y="79" class="svg-label">E+</text>

        <path id="mix-path-1" d="M165 165 C240 165 275 195 340 195" class="mix-line"/>
        <path id="mix-path-2" d="M165 105 C240 105 275 75 340 75" class="mix-line"/>
        <path id="mix-path-3" d="M165 165 C245 165 275 75 340 75" class="mix-line faint"/>
        <path id="mix-path-4" d="M165 105 C245 105 275 195 340 195" class="mix-line faint"/>
      </svg>
    </div>

    <p class="interactive-footnote">This is intentionally a minimal model, but the same mathematical idea appears throughout molecular electronic structure: interaction mixes basis states, shifts energies and changes state character.</p>
  </div>
</section>

<section class="lecture-section" id="spin-hamiltonian">
  <p class="section-eyebrow">Part II</p>
  <h2>From electronic structure to a molecular spin Hamiltonian</h2>

  <p>Electronic-structure calculations can be compressed into an effective Hamiltonian acting only in the relevant spin space. For a radical pair, a common schematic form is</p>

  <div class="lecture-equation">
  \[
  \hat H =
  \sum_i \mu_B\,\mathbf B\!\cdot\!\mathbf g_i\!\cdot\!\hat{\mathbf S}_i
  +\sum_{ik}\hat{\mathbf S}_i\!\cdot\!\mathbf A_{ik}\!\cdot\!\hat{\mathbf I}_{ik}
  +J\,\hat{\mathbf S}_1\!\cdot\!\hat{\mathbf S}_2
  +\hat{\mathbf S}_1\!\cdot\!\mathbf D\!\cdot\!\hat{\mathbf S}_2
  +\cdots .
  \]
  </div>

  <div class="hamiltonian-legend">
    <div><strong>Zeeman</strong><span>external field and anisotropic \(\mathbf g\)</span></div>
    <div><strong>Hyperfine</strong><span>electron–nuclear spin coupling \(\mathbf A\)</span></div>
    <div><strong>Exchange</strong><span>short-range electron–electron coupling \(J\)</span></div>
    <div><strong>Dipolar</strong><span>anisotropic through-space coupling \(\mathbf D\)</span></div>
  </div>

  <p>The spin Hamiltonian is therefore the bridge between quantum chemistry and spin dynamics. Its parameters depend on electronic structure, geometry and environment. For flexible molecules and proteins they can fluctuate in time, so a single static Hamiltonian is often insufficient. Exchange-coupling sign and prefactor conventions also differ between communities; a quoted \(J\) value is meaningful only together with the Hamiltonian convention used.</p>
</section>

<section class="lecture-section" id="spin-dynamics">
  <p class="section-eyebrow">Part III</p>
  <h2>Spin dynamics: propagating quantum states in time</h2>

  <p>For an isolated pure state, dynamics follow the time-dependent Schrödinger equation. For ensembles and open systems, the density operator is the more general description:</p>

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

  <p>The commutator generates coherent quantum evolution. The superoperator \(\mathcal R\) represents environmental processes such as relaxation or dephasing. Any observable follows from \(\langle O\rangle=\mathrm{Tr}[\rho\hat O]\).</p>

  <div class="interactive-card" id="larmor-demo">
    <div class="interactive-head">
      <div>
        <span class="interactive-kicker">Interactive model</span>
        <h3>Electron-spin Larmor precession</h3>
      </div>
      <span class="interactive-model-note">single spin-½</span>
    </div>

    <p>For an approximately isotropic electron spin, the precession frequency is</p>
    <div class="lecture-equation compact">\[
    f_\mathrm{L}=\frac{g\mu_B B_0}{h}.
    \]</div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="larmor-b">Magnetic field \(B_0\) <output id="larmor-b-out">1.00 mT</output></label>
        <input id="larmor-b" type="range" min="0.05" max="10" step="0.05" value="1">

        <label for="larmor-g"><em>g</em>-factor <output id="larmor-g-out">2.0023</output></label>
        <input id="larmor-g" type="range" min="1.8" max="2.2" step="0.0001" value="2.0023">

        <div class="interactive-readout" aria-live="polite">
          <span>Larmor frequency <strong id="larmor-frequency">28.02 MHz</strong></span>
          <span>Precession period <strong id="larmor-period">35.69 ns</strong></span>
        </div>
      </div>

      <svg id="larmor-svg" class="lecture-svg larmor-svg" viewBox="0 0 420 270" role="img" aria-label="Animated electron-spin precession around an external magnetic field">
        <ellipse cx="205" cy="135" rx="112" ry="40" class="precession-orbit"/>
        <line x1="205" y1="235" x2="205" y2="43" class="field-axis"/>
        <path d="M205 27 L197 47 L213 47 Z" class="field-arrow"/>
        <text x="220" y="46" class="svg-label">B₀</text>

        <line id="spin-projection" x1="205" y1="135" x2="300" y2="135" class="spin-projection"/>
        <circle id="spin-tip" cx="300" cy="135" r="6" class="spin-tip"/>
        <line id="spin-vector" x1="205" y1="193" x2="300" y2="135" class="spin-vector-demo"/>
        <path id="spin-arrowhead" d="M300 135 L285 137 L292 149 Z" class="spin-arrow-demo"/>

        <circle cx="205" cy="193" r="7" class="spin-origin"/>
        <text x="222" y="207" class="svg-caption">electron spin</text>
      </svg>
    </div>

    <p class="interactive-footnote">The numerical frequency is physical. The animation speed is deliberately rescaled so MHz precession remains visible on a web page.</p>
  </div>
</section>

<section class="lecture-section" id="radical-pairs">
  <p class="section-eyebrow">Part IV</p>
  <h2>Radical pairs: when spin dynamics changes chemical reactivity</h2>

  <p>A spin-correlated radical pair can be created by photoinduced or thermal electron transfer. If it is formed in a singlet state, differences in the local magnetic interactions of the two radicals generate coherent singlet–triplet mixing. Because singlet and triplet states can have different reaction pathways, spin evolution can change chemical yields. External magnetic fields alter the energy-level structure and therefore the spin dynamics.</p>

  <div class="lecture-flow" aria-label="Radical pair mechanism">
    <div><span>1</span><strong>Photoexcitation / electron transfer</strong><small>create a correlated radical pair</small></div>
    <div><span>2</span><strong>Spin evolution</strong><small>Zeeman + hyperfine + exchange + dipolar</small></div>
    <div><span>3</span><strong>S ↔ T mixing</strong><small>coherent dynamics compete with relaxation</small></div>
    <div><span>4</span><strong>Spin-selective reaction</strong><small>magnetic interactions become chemical observables</small></div>
  </div>

  <div class="interactive-card" id="st-demo">
    <div class="interactive-head">
      <div>
        <span class="interactive-kicker">Interactive model</span>
        <h3>Pedagogical singlet–triplet mixing</h3>
      </div>
      <span class="interactive-model-note">effective two-state model</span>
    </div>

    <p>Projecting a complex radical-pair problem onto an effective singlet/triplet subspace gives a useful minimal model:</p>

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
        <label for="st-coupling">Effective S–T coupling \(V\) <output id="st-coupling-out">3.00 MHz</output></label>
        <input id="st-coupling" type="range" min="0.1" max="10" step="0.1" value="3">

        <label for="st-detuning">S–T detuning \(\Delta\) <output id="st-detuning-out">2.00 MHz</output></label>
        <input id="st-detuning" type="range" min="0" max="20" step="0.1" value="2">

        <div class="interactive-readout" aria-live="polite">
          <span>Oscillation frequency <strong id="st-frequency">6.32 MHz</strong></span>
          <span>Maximum triplet population <strong id="st-amplitude">90.0%</strong></span>
        </div>
      </div>

      <div class="plot-wrap">
        <svg id="st-svg" class="lecture-svg st-svg" viewBox="0 0 560 250" role="img" aria-label="Interactive singlet and triplet populations over time">
          <line x1="50" y1="205" x2="535" y2="205" class="plot-axis"/>
          <line x1="50" y1="30" x2="50" y2="205" class="plot-axis"/>
          <text x="492" y="229" class="svg-caption">time / μs</text>
          <text x="14" y="35" class="svg-caption">population</text>
          <text x="25" y="208" class="svg-tick">0</text>
          <text x="18" y="38" class="svg-tick">1</text>
          <path id="singlet-path" class="population-line singlet-line" d=""/>
          <path id="triplet-path" class="population-line triplet-line" d=""/>
          <g class="plot-legend">
            <line x1="365" y1="46" x2="390" y2="46" class="population-line singlet-line"/>
            <text x="397" y="50" class="svg-label">P<tspan baseline-shift="sub" font-size="8">S</tspan></text>
            <line x1="445" y1="46" x2="470" y2="46" class="population-line triplet-line"/>
            <text x="477" y="50" class="svg-label">P<tspan baseline-shift="sub" font-size="8">T</tspan></text>
          </g>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">This two-level model is pedagogical, not a quantitative radical-pair simulation. Real systems contain multiple triplet sublevels, many nuclear spins, orientation dependence, relaxation, molecular motion and spin-selective reaction kinetics.</p>
  </div>
</section>

<section class="lecture-section" id="multiscale">
  <p class="section-eyebrow">Part V</p>
  <h2>Why molecular motion matters: connecting electronic structure and spin dynamics</h2>

  <p>In realistic molecular and biological environments, magnetic interactions are not constants. Protein motion changes radical distances and orientations; hydrogen bonds and electrostatics modify spin density; and conformational transitions alter exchange, dipolar and hyperfine interactions. A useful multiscale workflow therefore looks like this:</p>

  <div class="lecture-pipeline">
    <div><span>Structure &amp; dynamics</span><strong>MD / enhanced sampling</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Electronic structure</span><strong>DFT / TD-DFT / multireference</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Spin Hamiltonian</span><strong>g, A, J, D, SOC</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Quantum dynamics</span><strong>ρ(t), relaxation, stochastic propagation</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Observables</span><strong>EPR, NMR, yields, MFE, CIDNP</strong></div>
  </div>

  <p>This connection between molecular motion and spin dynamics is central to my current work and to the development of <a href="https://molspin.eu" target="_blank" rel="noopener">MolSpin</a>.</p>
</section>

<section class="lecture-section" id="selected-work">
  <p class="section-eyebrow">Further reading</p>
  <h2>Selected work connected to these concepts</h2>

  <div class="lecture-paper-grid">
    <article class="lecture-paper">
      <span>Spin relaxation · 2023</span>
      <h3>Modeling spin relaxation in complex radical systems using MolSpin</h3>
      <p>Density-matrix dynamics and relaxation theory for complex molecular spin systems.</p>
      <a href="https://doi.org/10.1002/jcc.27120" target="_blank" rel="noopener">J. Comput. Chem. →</a>
    </article>

    <article class="lecture-paper">
      <span>Stochastic dynamics · 2024</span>
      <h3>Spin Dynamics of Radical Pairs Using the Stochastic Schrödinger Equation in MolSpin</h3>
      <p>State-vector stochastic propagation as an alternative route to open-system radical-pair dynamics.</p>
      <a href="https://doi.org/10.1021/acs.jctc.4c00361" target="_blank" rel="noopener">J. Chem. Theory Comput. →</a>
    </article>

    <article class="lecture-paper">
      <span>Electronic structure · 2024</span>
      <h3>Importance of Polarizable Embedding for Absorption Spectrum Calculations of Arabidopsis thaliana Cryptochrome 1</h3>
      <p>How the molecular environment affects electronic excitation energies in a flavoprotein chromophore.</p>
      <a href="https://doi.org/10.1021/acs.jpcb.4c02168" target="_blank" rel="noopener">J. Phys. Chem. B →</a>
    </article>

    <article class="lecture-paper">
      <span>Electronic structure · 2024</span>
      <h3>Peculiar Differences between Two Copper Complexes Containing Similar Redox-Active Ligands</h3>
      <p>DFT and multiconfigurational calculations applied to electronically non-trivial transition-metal complexes.</p>
      <a href="https://doi.org/10.1021/acs.inorgchem.3c02949" target="_blank" rel="noopener">Inorg. Chem. →</a>
    </article>

    <article class="lecture-paper">
      <span>Dynamic radical pairs · 2025</span>
      <h3>Magnetosensitivity of Model Flavin–Tryptophan Radical Pairs in a Dynamic Protein Environment</h3>
      <p>How protein dynamics and fluctuating magnetic interactions influence radical-pair magnetosensitivity.</p>
      <a href="https://doi.org/10.1021/acs.jpcb.5c01187" target="_blank" rel="noopener">J. Phys. Chem. B →</a>
    </article>

    <article class="lecture-paper">
      <span>g-tensor anisotropy · 2025</span>
      <h3>Revealing the Impact of g-Tensor Anisotropy on the Charge Recombination in Donor–Acceptor Dyads Under High Magnetic Fields</h3>
      <p>An example of electronic-structure-derived magnetic anisotropy directly controlling spin-dependent kinetics.</p>
      <a href="https://doi.org/10.1021/jacs.5c06173" target="_blank" rel="noopener">JACS →</a>
    </article>

    <article class="lecture-paper">
      <span>Radical-pair mechanism · 2025</span>
      <h3>Weak Radiofrequency Field Effects on Biological Systems Mediated through the Radical Pair Mechanism</h3>
      <p>A broader theoretical and experimental perspective on weak-field effects in radical-pair chemistry.</p>
      <a href="https://doi.org/10.1021/acs.chemrev.5c00178" target="_blank" rel="noopener">Chemical Reviews →</a>
    </article>

    <article class="lecture-paper">
      <span>RYDMR · 2026</span>
      <h3>Reaction-yield detected magnetic resonance spectroscopy of radical pairs in cryptochrome-4a</h3>
      <p>Connecting spin Hamiltonians and radical-pair dynamics to a magnetic-resonance observable.</p>
      <a href="https://doi.org/10.1016/j.freeradbiomed.2026.04.015" target="_blank" rel="noopener">Free Radic. Biol. Med. →</a>
    </article>

    <article class="lecture-paper">
      <span>Multiscale theory · 2026</span>
      <h3>Multiscale modeling approaches in biomolecular physics</h3>
      <p>An overview of how molecular simulation, electronic structure and quantum-level descriptions can be connected across scales.</p>
      <a href="https://doi.org/10.1080/23746149.2026.2660655" target="_blank" rel="noopener">Advances in Physics: X →</a>
    </article>
  </div>
</section>

</div>

<script src="{{ site.url }}/assets/js/lecture-interactive.js" defer></script>
