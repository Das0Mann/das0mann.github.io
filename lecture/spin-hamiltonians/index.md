---
layout: page
title: Spin Hamiltonians
excerpt: "Build the effective magnetic model term by term"
permalink: /lecture/spin-hamiltonians/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 02</span>
  <h2>The spin Hamiltonian is the bridge</h2>
  <p>Electronic-structure theory gives us molecular magnetic parameters. Spin dynamics needs those parameters arranged into an effective Hamiltonian. This module is about understanding what each term means physically, what assumptions hide inside it, and which conventions you must state before a number becomes meaningful.</p>
</header>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Overview</p><h2>Write only the physics you actually need</h2></div>
  </div>

  <p>A useful generic spin Hamiltonian is</p>

  <div class="lecture-equation">
  \[
  \hat H_\mathrm{spin}
  =
  \hat H_Z^\mathrm e
  +\hat H_Z^\mathrm n
  +\hat H_\mathrm{hf}
  +\hat H_\mathrm{ex}
  +\hat H_\mathrm{dd}
  +\hat H_Q
  +\hat H_\mathrm{ZFS}
  +\cdots .
  \]
  </div>

  <p>You rarely need every term at once. A radical pair of two organic \(S=\tfrac12\) radicals may need electron Zeeman, hyperfine, exchange and dipolar interactions. A transition-metal complex with \(S>1/2\) can instead make zero-field splitting central. A nucleus with \(I>1/2\) can add quadrupole structure.</p>

  <aside class="teacher-note">
    <strong>Do not confuse “more terms” with “more accurate”.</strong>
    <span>A spin Hamiltonian is useful because it is an effective model. Add a term when the physics or the experiment needs it—not because the equation looks more complete.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Zeeman interaction</p><h2>The external field defines the basic energy scale</h2></div>
  </div>

  <p>For an electron spin, the Zeeman term is usually written</p>

  <div class="lecture-equation">
  \[
  \hat H_Z^\mathrm e
  =
  \mu_B\,\mathbf B\cdot\mathbf g\cdot\hat{\mathbf S}.
  \]
  </div>

  <p>If \(\mathbf g=g\mathbf 1\), the interaction is isotropic. In a molecule, spin–orbit coupling and the local electronic structure generally make \(\mathbf g\) a tensor. The resonance therefore depends on how the molecule is oriented relative to the magnetic field.</p>

  <p>The nuclear Zeeman interaction is much smaller because the nuclear magneton is much smaller than the Bohr magneton:</p>

  <div class="lecture-equation">
  \[
  \hat H_Z^\mathrm n
  =
  -\sum_k g_{n,k}\mu_N\,\mathbf B\cdot\hat{\mathbf I}_k.
  \]
  </div>

  <aside class="teacher-note">
    <strong>A sign convention is hiding here.</strong>
    <span>Different communities absorb signs into gyromagnetic ratios or Hamiltonian definitions. Always check the convention used by a code or paper before comparing fitted parameters.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Hyperfine coupling</p><h2>Nuclei tell you where the unpaired electron lives</h2></div>
  </div>

  <p>The hyperfine interaction between an electron spin and a nucleus is</p>

  <div class="lecture-equation">
  \[
  \hat H_\mathrm{hf}
  =
  \sum_k
  \hat{\mathbf S}\cdot\mathbf A_k\cdot\hat{\mathbf I}_k.
  \]
  </div>

  <p>It is useful to split the tensor into an isotropic and a traceless anisotropic part,</p>

  <div class="lecture-equation">
  \[
  \mathbf A
  =
  A_\mathrm{iso}\mathbf 1+\mathbf T.
  \]
  </div>

  <p>The isotropic Fermi-contact contribution is closely related to the spin density at the nucleus. The anisotropic contribution reflects the spatial distribution of the unpaired spin and behaves like an electron–nuclear dipolar interaction.</p>

  <details class="lecture-details">
    <summary>Why can a proton far from the formal radical centre still have a hyperfine coupling?</summary>
    <p>Because spin density can be transferred through bonds or delocalized through a conjugated system. Hyperfine couplings are therefore often a much more sensitive probe of the actual electronic structure than a simple Lewis structure suggests.</p>
  </details>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Two electron spins</p><h2>Exchange and dipolar coupling are physically different</h2></div>
  </div>

  <p>For this lecture I will use the exchange convention</p>

  <div class="lecture-equation">
  \[
  \hat H_\mathrm{ex}
  =
  J\,\hat{\mathbf S}_1\cdot\hat{\mathbf S}_2.
  \]
  </div>

  <p>Exchange originates from the antisymmetry of the electronic wavefunction and orbital overlap. It can change extremely rapidly with geometry. Other communities use \(-2J\,\mathbf S_1\cdot\mathbf S_2\), so the sign and factor of two are not universal.</p>

  <p>The through-space magnetic dipolar interaction has a completely different origin. Using dimensionless spin operators and the point-dipole approximation,</p>

  <div class="lecture-equation">
  \[
  \hat H_\mathrm{dd}
  =
  \frac{\mu_0}{4\pi}
  \frac{g_1g_2\mu_B^2}{r^3}
  \left[
  \hat{\mathbf S}_1\cdot\hat{\mathbf S}_2
  -3(\hat{\mathbf S}_1\cdot\hat{\mathbf r})
   (\hat{\mathbf S}_2\cdot\hat{\mathbf r})
  \right].
  \]
  </div>

  <p>The key signatures are the \(r^{-3}\) distance dependence and the strong orientation dependence.</p>

  <div class="interactive-card" id="dipolar-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Electron–electron dipolar geometry</h3></div>
      <span class="interactive-model-note">point-dipole limit</span>
    </div>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>double the distance and watch the coupling collapse by a factor of eight. Then move the angle to \(54.74^\circ\): the secular orientation factor passes through zero.</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="dipolar-r"><span class="control-name">Electron separation \(r\)</span><output id="dipolar-r-out">1.00 nm</output></label>
        <input id="dipolar-r" type="range" min="0.5" max="4" step="0.05" value="1">

        <label for="dipolar-theta"><span class="control-name">Angle \(\theta\) to \(B_0\)</span><output id="dipolar-theta-out">90.0°</output></label>
        <input id="dipolar-theta" type="range" min="0" max="90" step="0.25" value="90">

        <div class="demo-presets">
          <button type="button" data-dipolar-r="1" data-dipolar-theta="0">parallel</button>
          <button type="button" data-dipolar-r="1" data-dipolar-theta="54.7356">magic angle</button>
          <button type="button" data-dipolar-r="1" data-dipolar-theta="90">perpendicular</button>
          <button type="button" data-dipolar-r="2" data-dipolar-theta="90">2 nm</button>
        </div>

        <div class="interactive-readout">
          <span>Point-dipole prefactor \(d/h\) <strong id="dipolar-prefactor-out">52.1 MHz</strong></span>
          <span>Orientation factor \(1-3\cos^2\theta\) <strong id="dipolar-factor-out">1.000</strong></span>
          <span>Secular scale <strong id="dipolar-secular-out">52.1 MHz</strong></span>
        </div>

        <p id="dipolar-explanation" class="demo-explanation">At \(90^\circ\), the secular orientation factor is positive and equal to one.</p>
      </div>

      <div class="plot-wrap">
        <svg id="dipolar-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="Dipolar orientation factor versus angle">
          <line x1="58" y1="248" x2="530" y2="248" class="plot-axis"/>
          <line x1="58" y1="35" x2="58" y2="248" class="plot-axis"/>
          <line x1="58" y1="177" x2="530" y2="177" class="plot-grid"/>
          <text x="478" y="278" class="svg-caption">θ / degree</text>
          <text x="12" y="38" class="svg-caption">1 − 3 cos²θ</text>
          <text x="54" y="267" class="svg-tick">0</text>
          <text x="286" y="267" class="svg-tick">45</text>
          <text x="515" y="267" class="svg-tick">90</text>
          <path id="dipolar-factor-path" class="population-line lower-line" fill="none" d=""/>
          <line id="dipolar-marker-line" x1="530" y1="35" x2="530" y2="248" class="plot-marker"/>
          <circle id="dipolar-marker" cx="530" cy="106" r="5" class="plot-point upper-point"/>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">The plotted angular factor is the familiar high-field secular orientation factor. The full dipolar Hamiltonian is tensorial; do not use this one number as a substitute for the full interaction when non-secular terms matter.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Higher spins &amp; nuclei</p><h2>Quadrupole and zero-field splitting add new structure</h2></div>
  </div>

  <p>Nuclei with \(I>1/2\) have an electric quadrupole moment that can interact with the electric-field gradient:</p>

  <div class="lecture-equation">
  \[
  \hat H_Q
  =
  \hat{\mathbf I}\cdot\mathbf Q\cdot\hat{\mathbf I}.
  \]
  </div>

  <p>For an electron spin \(S>1/2\), spin–spin and spin–orbit effects can split the spin sublevels even at zero external field. In a common principal-axis convention,</p>

  <div class="lecture-equation">
  \[
  \hat H_\mathrm{ZFS}
  =
  D\left[\hat S_z^2-\frac{S(S+1)}{3}\right]
  +E\left(\hat S_x^2-\hat S_y^2\right).
  \]
  </div>

  <p>\(D\) measures the axial part and \(E\) the rhombic part in this convention. The tensor form is more general, and—as always—the sign convention and units need to be stated explicitly.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">Orientation &amp; motion</p><h2>A tensor is only meaningful together with its molecular frame</h2></div>
  </div>

  <p>An anisotropic \(g\)-tensor or hyperfine tensor is not just three numbers. It has principal values <em>and principal axes</em>. Rotating the molecule relative to the field rotates the tensor into the laboratory frame and changes the observed interaction.</p>

  <div class="lecture-equation">
  \[
  \mathbf A_\mathrm{lab}(t)
  =
  \mathbf R(t)\,
  \mathbf A_\mathrm{mol}\,
  \mathbf R^\mathsf T(t).
  \]
  </div>

  <p>In a rigid crystal, \(\mathbf R\) is fixed. In a tumbling molecule or protein, it becomes time-dependent. That is the point where the spin Hamiltonian naturally connects to molecular dynamics and relaxation theory.</p>

  <aside class="lecture-note">
    <strong>Unit discipline matters.</strong>
    <span>EPR parameters may appear in MHz, GHz, mT, gauss or cm\(^{-1}\). A Hamiltonian written in angular-frequency units also differs by factors of \(2\pi\) from one written in ordinary frequency units. Always know whether a code is propagating \(H\), \(H/h\) or \(H/\hbar\).</span>
  </aside>
</section>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">07</span>
    <div><p class="section-eyebrow">Selected reading</p><h2>Examples from my work</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>g-tensor anisotropy</span><h3>Revealing the Impact of g-Tensor Anisotropy on the Charge Recombination in Donor–Acceptor Dyads Under High Magnetic Fields</h3><p>A direct example of an anisotropic spin-Hamiltonian term changing recombination kinetics.</p><a href="https://doi.org/10.1021/jacs.5c06173" target="_blank" rel="noopener">JACS (2025) →</a></article>
    <article><span>Electronic structure</span><h3>Peculiar Differences between Two Copper Complexes Containing Similar Redox-Active Ligands</h3><p>DFT and multiconfigurational electronic-structure analysis for transition-metal systems.</p><a href="https://doi.org/10.1021/acs.inorgchem.3c02949" target="_blank" rel="noopener">Inorg. Chem. (2024) →</a></article>
    <article><span>Multiscale connection</span><h3>Multiscale modeling approaches in biomolecular physics</h3><p>How molecular structure, electronic interactions and quantum observables are connected across scales.</p><a href="https://doi.org/10.1080/23746149.2026.2660655" target="_blank" rel="noopener">Advances in Physics: X (2026) →</a></article>
  </div>
</section>

{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-dipolar.js" defer></script>
