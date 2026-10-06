---
layout: page
title: Excited-State Photochemistry
excerpt: "Franck–Condon excitation, nonradiative decay, intersystem crossing and triplets"
permalink: /lecture/excited-state-photochemistry/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 11</span>
  <h2>Absorbing a photon is only the beginning</h2>
  <p>Photochemistry starts with an electronic excitation, but the molecule does not remain at the geometry at which the photon was absorbed. Nuclei move, electronic states approach one another, population can change electronic character, and spin–orbit coupling can transfer population between different spin manifolds.</p>
</header>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Franck–Condon picture</p><h2>Electronic excitation is fast compared with nuclear motion</h2></div>
  </div>

  <p>During an optical transition the nuclei are approximately frozen. On a potential-energy diagram this gives a nearly vertical transition from the ground-state nuclear geometry onto an excited-state surface.</p>

  <p>The vertical excitation energy and the relaxed excited-state energy are therefore different quantities. Geometry relaxation after excitation is one reason absorption and emission generally occur at different photon energies.</p>

  <aside class="teacher-note">
    <strong>Vertical does not mean “the molecule moves vertically”.</strong>
    <span>The vertical line is drawn in an energy-versus-nuclear-coordinate diagram because the nuclear coordinate is assumed not to change during the electronic transition.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Interactive</p><h2>A displaced harmonic model of absorption and emission</h2></div>
  </div>

  <p>A very simple model already explains reorganization and a Stokes shift. Take two harmonic surfaces with equal curvature:</p>

  <div class="lecture-equation">
  \[
  E_g(q)=\frac12 kq^2,
  \qquad
  E_e(q)=E_{00}+\frac12 k(q-d)^2.
  \]
  </div>

  <p>The reorganization energy in this model is</p>

  <div class="lecture-equation">
  \[
  \lambda=\frac12kd^2,
  \]
  </div>

  <p>so the vertical absorption and emission energies are \(E_\mathrm{abs}=E_{00}+\lambda\) and \(E_\mathrm{em}=E_{00}-\lambda\).</p>

  <div class="interactive-card" id="photo-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Displaced excited-state surface</h3></div>
      <span class="interactive-model-note">equal-curvature harmonic model</span>
    </div>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>increase the displacement \(d\). The adiabatic gap \(E_{00}\) stays fixed, but reorganization grows and absorption and emission separate.</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="photo-e00"><span class="control-name">Adiabatic gap \(E_{00}\)</span><output id="photo-e00-out">2.30 eV</output></label>
        <input id="photo-e00" type="range" min="1.2" max="4.0" step="0.01" value="2.30">

        <label for="photo-k"><span class="control-name">Curvature \(k\)</span><output id="photo-k-out">1.00 eV</output></label>
        <input id="photo-k" type="range" min="0.2" max="3.0" step="0.02" value="1.00">

        <label for="photo-d"><span class="control-name">Displacement \(d\)</span><output id="photo-d-out">0.50</output></label>
        <input id="photo-d" type="range" min="0" max="1.50" step="0.01" value="0.50">

        <div class="demo-presets">
          <button type="button" data-photo-d="0">no displacement</button>
          <button type="button" data-photo-d="0.50">moderate</button>
          <button type="button" data-photo-d="1.00">large</button>
        </div>

        <div class="interactive-readout">
          <span>Reorganization \(\lambda\) <strong id="photo-lambda-out">0.125 eV</strong></span>
          <span>Vertical absorption <strong id="photo-abs-out">2.425 eV</strong></span>
          <span>Vertical emission <strong id="photo-em-out">2.175 eV</strong></span>
          <span>Stokes shift <strong id="photo-stokes-out">0.250 eV</strong></span>
        </div>

        <p id="photo-explanation" class="demo-explanation">The two minima are displaced, so nuclear relaxation lowers the excited-state energy before emission.</p>
      </div>

      <div class="plot-wrap">
        <svg id="photo-svg" class="lecture-svg" viewBox="0 0 560 320" role="img" aria-label="Displaced harmonic ground and excited potential-energy surfaces">
          <line x1="58" y1="270" x2="530" y2="270" class="plot-axis"/>
          <line x1="58" y1="25" x2="58" y2="270" class="plot-axis"/>
          <text x="480" y="300" class="svg-caption">reaction coordinate q</text>
          <text x="13" y="31" class="svg-caption">energy</text>
          <path id="photo-ground-path" class="population-line lower-line" fill="none" d=""/>
          <path id="photo-excited-path" class="population-line triplet-line" fill="none" d=""/>
          <line id="photo-abs-arrow" x1="294" y1="240" x2="294" y2="90" class="photo-transition-line"/>
          <line id="photo-em-arrow" x1="360" y1="90" x2="360" y2="230" class="photo-emission-line"/>
          <text id="photo-abs-label" x="302" y="150" class="svg-label">absorption</text>
          <text id="photo-em-label" x="368" y="176" class="svg-label">emission</text>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">This is a teaching model with one effective nuclear coordinate and equal harmonic curvatures. Real spectra include many vibrational modes, anharmonicity, solvent/protein response and distributions of geometries.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Internal conversion</p><h2>Population can change electronic state without emitting a photon</h2></div>
  </div>

  <p>Nonradiative internal conversion transfers population between electronic states of the same spin multiplicity while nuclear motion accepts the energy difference. The Born–Oppenheimer separation becomes least useful where electronic states approach closely and nonadiabatic coupling becomes large.</p>

  <p>Conical intersections are especially important because two adiabatic potential-energy surfaces become degenerate in a multidimensional nuclear-coordinate space. They can act as efficient funnels for ultrafast population transfer.</p>

  <aside class="teacher-note">
    <strong>A conical intersection is not just an avoided crossing drawn in one dimension.</strong>
    <span>Its defining degeneracy requires at least two independent nuclear directions: one that tunes the energy gap and another that mixes the electronic states.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Intersystem crossing</p><h2>Spin–orbit coupling can connect different spin manifolds</h2></div>
  </div>

  <p>Intersystem crossing transfers population between states of different spin multiplicity, for example from a singlet excited state to a triplet state. Spin–orbit coupling supplies the interaction that mixes nominally different spin states.</p>

  <p>In a golden-rule picture the rate depends schematically on</p>

  <div class="lecture-equation">
  \[
  k_\mathrm{ISC}
  \propto
  \left|
  \langle S|\hat H_\mathrm{SO}|T\rangle
  \right|^2
  \rho_\mathrm{vib},
  \]
  </div>

  <p>where the vibronic density or Franck–Condon-weighted overlap determines whether nuclear motion can accommodate the energy mismatch. A large SOC matrix element alone therefore does not determine an ISC rate.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Triplet states</p><h2>Triplet formation changes both lifetime and spin physics</h2></div>
  </div>

  <p>Triplet states are often longer lived than bright singlet excited states because direct radiative return to a singlet ground state is spin-forbidden in the nonrelativistic limit. That longer lifetime can open reaction pathways that are inaccessible from a rapidly decaying singlet state.</p>

  <p>For spin chemistry, a triplet precursor also matters because electron transfer from a triplet can prepare a radical pair with different initial spin character than electron transfer from a singlet precursor.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">Electronic-structure methods</p><h2>Different excited-state questions need different approximations</h2></div>
  </div>

  <div class="method-ladder">
    <div><span>Vertical excitations</span><p>TD-DFT and excited-state wavefunction methods are common practical tools for excitation energies and oscillator strengths.</p></div>
    <div><span>Charge-transfer states</span><p>Long-range charge separation can be highly functional- and environment-sensitive; embedding and dielectric response may matter strongly.</p></div>
    <div><span>Near degeneracies</span><p>When several configurations become equally important, single-reference approaches may become qualitatively unreliable.</p></div>
    <div><span>Spin–orbit coupling</span><p>SOC matrix elements and state ordering must both be reasonable if the goal is to predict intersystem crossing or magnetic response.</p></div>
  </div>

  <p>The method should therefore be chosen for the state character and observable, not just by applying the same functional and basis set to every photochemical problem.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">07</span>
    <div><p class="section-eyebrow">Flavins</p><h2>Why this matters for flavoprotein photochemistry</h2></div>
  </div>

  <p>Flavin chromophores combine bright singlet excitation, intersystem crossing, electron-transfer chemistry and strong environmental sensitivity. Protein electrostatics and hydrogen bonding can change excitation energies and charge-transfer energetics, while the balance between singlet, triplet and radical-pair pathways controls which spin state is ultimately prepared.</p>

  <p>This is why excited-state electronic structure is directly upstream of the radical-pair and spin-dynamics modules in this library.</p>
</section>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">08</span>
    <div><p class="section-eyebrow">Selected reading</p><h2>Examples from my work</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>Environment &amp; excitation</span><h3>Importance of Polarizable Embedding for Absorption Spectrum Calculations of Arabidopsis thaliana Cryptochrome 1</h3><p>How the protein environment shifts flavin excitation energies.</p><a href="https://doi.org/10.1021/acs.jpcb.4c02168" target="_blank" rel="noopener">J. Phys. Chem. B (2024) →</a></article>
    <article><span>Flavin photochemistry</span><h3>Activation of Cryptochrome 4 from Atlantic Herring</h3><p>A multiscale view of structural and electronic changes associated with cryptochrome photoactivation.</p><a href="https://doi.org/10.3390/biology13040262" target="_blank" rel="noopener">Biology (2024) →</a></article>
    <article><span>Excited-state reactivity</span><h3>Theoretical investigation of CH-bond activation by photocatalytic excited SO₂ and the effects of C-, N-, S-, and Se-doped TiO₂</h3><p>Excited-state electronic structure applied to a photocatalytic reaction mechanism.</p><a href="https://doi.org/10.1039/D1CP04335H" target="_blank" rel="noopener">PCCP (2022) →</a></article>
  </div>
</section>

{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-photochemistry.js" defer></script>
