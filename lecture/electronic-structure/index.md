---
layout: page
title: Electronic Structure
excerpt: "From the many-electron problem to magnetic parameters"
permalink: /lecture/electronic-structure/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 01</span>
  <h2>Start with the electrons</h2>
  <p>Before we talk about spin dynamics, we need to know what the electrons are doing. Electronic-structure theory is the layer that gives us energies, densities, excited states and ultimately the magnetic parameters that enter a spin Hamiltonian.</p>
</header>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">The electronic problem</p><h2>Freeze the nuclei for a moment</h2></div>
  </div>

  <p>Within the Born–Oppenheimer picture we first treat the nuclei as fixed. For that molecular geometry, the electronic Hamiltonian is</p>

  <div class="lecture-equation">
  \[
  \begin{aligned}
  \hat H_\mathrm{e}
  &=
  -\frac{1}{2}\sum_i\nabla_i^2
  -\sum_{iA}\frac{Z_A}{r_{iA}}\\
  &\quad+
  \sum_{i<j}\frac{1}{r_{ij}}
  +V_\mathrm{NN}.
  \end{aligned}
  \]
  </div>

  <p>The difficult term is the electron–electron repulsion. It couples the motion of all electrons, which is why the exact many-electron problem grows so quickly with system size.</p>

  <aside class="teacher-note">
    <strong>A useful way to think about it:</strong>
    <span>most electronic-structure methods are not different physical theories. They are different approximations to the same many-electron quantum problem.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Orbitals &amp; basis sets</p><h2>An orbital is a representation tool, not an electron trajectory</h2></div>
  </div>

  <p>A molecular orbital \(\phi_p(\mathbf r)\) is a one-electron function. In most quantum-chemistry codes it is expanded in atom-centred basis functions \(\chi_\mu\):</p>

  <div class="lecture-equation">
  \[
  \phi_p(\mathbf r)=\sum_\mu C_{\mu p}\chi_\mu(\mathbf r).
  \]
  </div>

  <p>The basis controls how flexibly the electronic wavefunction or density can respond. A minimal basis is cheap but restrictive; polarized and diffuse functions give the electrons more freedom. The important point is that a basis-set name is not just a technical label—it defines the variational space in which the electronic problem is solved.</p>

  <details class="lecture-details">
    <summary>What do polarization and diffuse functions actually do?</summary>
    <p>Polarization functions add angular flexibility, allowing the density to distort away from isolated-atom shapes. Diffuse functions add slowly decaying radial functions and are important for anions, Rydberg states and spatially extended charge-transfer states.</p>
  </details>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Approximations</p><h2>HF, DFT and correlation answer the same question differently</h2></div>
  </div>

  <div class="method-ladder">
    <div><span>Hartree–Fock</span><p>A single Slater determinant. Exchange is exact within that determinant, but dynamical electron correlation is absent.</p></div>
    <div><span>Density-functional theory</span><p>Uses the density and a Kohn–Sham reference system. The practical approximation is the exchange–correlation functional.</p></div>
    <div><span>Post-HF methods</span><p>MP2, coupled cluster and related methods recover correlation beyond a single determinant, at increasing computational cost.</p></div>
    <div><span>Multireference methods</span><p>Necessary when several electronic configurations are genuinely important and a single determinant is qualitatively insufficient.</p></div>
  </div>

  <p>There is no universal “best” method. The right level depends on the observable. Ground-state geometries, charge-transfer states, bond breaking and magnetic response can have very different sensitivities.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Interactive</p><h2>State mixing and avoided crossings</h2></div>
  </div>

  <p>Two states can have very different physical character and still mix strongly if they come close in energy. This tiny two-state model is a useful prototype:</p>

  <div class="interactive-card" id="orbital-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Two coupled electronic states</h3></div>
      <span class="interactive-model-note">2 × 2 Hamiltonian</span>
    </div>

    <div class="lecture-equation-grid">
      <div class="lecture-equation compact">
      \[
      H=
      \begin{pmatrix}
      -\Delta/2&t\\
      t&+\Delta/2
      \end{pmatrix}
      \]
      </div>
      <div class="lecture-equation compact">
      \[
      E_\pm=\pm\sqrt{(\Delta/2)^2+t^2}
      \]
      </div>
    </div>

    <div class="demo-prompt"><strong>Try this:</strong><span>set \(t=0\) first. The two diabatic states cross. Then increase \(t\): the crossing opens and the state character becomes mixed around \(\Delta=0\).</span></div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="orbital-delta"><span class="control-name">Current offset \(\Delta\)</span><output id="orbital-delta-out">1.00 eV</output></label>
        <input id="orbital-delta" type="range" min="-4" max="4" step="0.05" value="1">

        <label for="orbital-coupling"><span class="control-name">Coupling \(t\)</span><output id="orbital-coupling-out">0.50 eV</output></label>
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
          <path id="diabatic-1" class="diabatic-line" fill="none" d=""/>
          <path id="diabatic-2" class="diabatic-line" fill="none" d=""/>
          <path id="adiabatic-minus" class="adiabatic-line lower-line" fill="none" d=""/>
          <path id="adiabatic-plus" class="adiabatic-line upper-line" fill="none" d=""/>
          <line id="orbital-marker" x1="352" y1="30" x2="352" y2="252" class="plot-marker"/>
          <circle id="orbital-marker-minus" cx="352" cy="176" r="5" class="plot-point lower-point"/>
          <circle id="orbital-marker-plus" cx="352" cy="106" r="5" class="plot-point upper-point"/>
        </svg>
      </div>
    </div>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Excited &amp; magnetic states</p><h2>Electronic structure supplies the spin Hamiltonian</h2></div>
  </div>

  <p>For photochemistry, ground-state DFT is only the start. We also need excited-state energies, oscillator strengths, charge-transfer character and sometimes spin–orbit coupling between states. TD-DFT is often the practical workhorse, while multireference methods become important when several configurations matter simultaneously.</p>

  <p>For spin dynamics, the key output is often a set of effective magnetic parameters:</p>

  <div class="lecture-output-strip">
    <div><strong>\(\mathbf g\)-tensor</strong><span>how the electronic magnetic moment responds to an external field</span></div>
    <div><strong>Hyperfine tensor \(\mathbf A\)</strong><span>how electron spin couples to nearby nuclear spins</span></div>
    <div><strong>Exchange \(J\) and dipolar \(\mathbf D\)</strong><span>how two electron spins interact with one another</span></div>
    <div><strong>SOC &amp; ZFS</strong><span>spin–orbit-driven state mixing and zero-field splitting in higher-spin systems</span></div>
  </div>

  <aside class="teacher-note">
    <strong>This is the hand-off to spin dynamics:</strong>
    <span>once these quantities are known for a molecular structure, we can stop carrying the full electronic problem and propagate a much smaller effective spin Hamiltonian.</span>
  </aside>
</section>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">Selected reading</p><h2>Examples from my work</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>Environment &amp; excited states</span><h3>Importance of Polarizable Embedding for Absorption Spectrum Calculations of Arabidopsis thaliana Cryptochrome 1</h3><p>How the protein environment changes flavin excitation energies.</p><a href="https://doi.org/10.1021/acs.jpcb.4c02168" target="_blank" rel="noopener">J. Phys. Chem. B (2024) →</a></article>
    <article><span>Multiconfigurational theory</span><h3>Peculiar Differences between Two Copper Complexes Containing Similar Redox-Active Ligands</h3><p>DFT and multiconfigurational descriptions of electronically non-trivial transition-metal complexes.</p><a href="https://doi.org/10.1021/acs.inorgchem.3c02949" target="_blank" rel="noopener">Inorg. Chem. (2024) →</a></article>
    <article><span>Magnetic anisotropy</span><h3>Revealing the Impact of g-Tensor Anisotropy on the Charge Recombination in Donor–Acceptor Dyads Under High Magnetic Fields</h3><p>An electronic-structure-derived magnetic interaction controlling spin-dependent kinetics.</p><a href="https://doi.org/10.1021/jacs.5c06173" target="_blank" rel="noopener">JACS (2025) →</a></article>
  </div>
</section>

{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-interactive.js" defer></script>
