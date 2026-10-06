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
<section class="module-learning" aria-label="Learning goals">
  <div class="module-learning-head">
    <span>After this module</span>
    <strong>You should be able to…</strong>
  </div>
  <div class="module-learning-grid">
    <div><span>01</span><p>Read a spin Hamiltonian term by term and state the associated units and sign convention.</p></div>
    <div><span>02</span><p>Distinguish Zeeman, hyperfine, exchange, dipolar, quadrupole and zero-field-splitting physics.</p></div>
    <div><span>03</span><p>Map ab initio energies and response tensors onto the operator coefficients used in a spin Hamiltonian.</p></div>
  </div>
</section>

{% include lecture-connections.html %}


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

  <p>In this module the spin operators are taken to be <em>dimensionless</em>, with eigenvalues such as \(m_s=\pm\tfrac12\). With that convention the coefficients multiplying them carry energy units (or, after division by \(h\) or \(\hbar\), frequency units). If instead one uses angular-momentum operators containing explicit factors of \(\hbar\), the Hamiltonian prefactors must change accordingly. Module 03 will make that alternative matrix convention explicit.</p>

  <p>You rarely need every term at once. A radical pair of two organic \(S=\tfrac12\) radicals may need electron Zeeman, hyperfine, exchange and dipolar interactions. A transition-metal complex with \(S>1/2\) can instead make zero-field splitting central. A nucleus with \(I>1/2\) can add quadrupole structure.</p>

  <aside class="teacher-note">
    <strong>Do not confuse “more terms” with “more accurate”.</strong>
    <span>A spin Hamiltonian is useful because it is an effective model. Add a term when the physics or the experiment needs it—not because the equation looks more complete.</span>
  </aside>
</section>

<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">M</span>
    <div><p class="section-eyebrow">Parameter extraction</p><h2>Every spin parameter is a coefficient obtained by matching electronic physics to a spin operator</h2></div>
  </div>

  <p>The common structure is</p>

  <div class="lecture-equation">
  \[
  \hat H_\mathrm{eff}
  =
  \sum_k p_k\,\hat O_k.
  \]
  </div>

  <p>The operator \(\hat O_k\) is chosen from the spin model; the coefficient \(p_k\) is supplied by electronic structure. The parameter can be obtained by a response derivative, an expectation value, an energy difference or an effective-Hamiltonian projection. This distinction matters: \(A^\mathrm{FC}\) is tied directly to spin density at a nucleus, \(g\) is primarily a response/SOC property, and \(J\) is usually inferred from the relative energies of different spin arrangements.</p>

  <div class="method-ladder">
    <div><span>\(g\)-tensor</span><p>Magnetic-field response of the electronic state, including relativistic/SOC contributions. At SCF level this normally requires coupled-perturbed response equations.</p></div>
    <div><span>Hyperfine \(\mathbf A_N\)</span><p>Contact spin density plus anisotropic electron–nuclear spin-dipolar and smaller orbital/relativistic terms.</p></div>
    <div><span>Exchange \(J\)</span><p>Map electronic high-spin/low-spin energies—or projected broken-symmetry energies—onto a chosen Heisenberg convention.</p></div>
    <div><span>Dipolar / ZFS \(\mathbf D\)</span><p>Project direct spin–spin and SOC-mediated interactions into the selected spin manifold.</p></div>
  </div>

  <aside class="teacher-note">
    <strong>The operator convention is part of the parameter definition.</strong>
    <span>The same electronic energy splitting can correspond to different numerical \(J\) values if one paper uses \(J\mathbf S_1\!\cdot\!\mathbf S_2\) and another uses \(-2J\mathbf S_1\!\cdot\!\mathbf S_2\). Never copy a number without copying its Hamiltonian convention.</span>
  </aside>
</section>


<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Zeeman interaction</p><h2>The external field defines the basic energy scale</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Why the g-factor is more than a fitting number</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Magnetic moment</strong>
        <p><b>What it is:</b> Electron spin carries a magnetic moment, so an external field lifts the degeneracy of spin projections.</p>
        <p><b>What it changes:</b> The energy separation grows approximately linearly with field: this is the Zeeman splitting that sets the Larmor frequency.</p>
        <p><b>What you observe:</b> The field/frequency position of magnetic-resonance transitions.</p>
      </article>
      <article>
        <strong>\(g\)-factor / \(\mathbf g\)-tensor</strong>
        <p><b>What it is:</b> The proportionality between magnetic field and electron-spin magnetic energy. Molecular orbital character and SOC make it molecule-specific and often anisotropic.</p>
        <p><b>What it changes:</b> Different principal \(g\)-values give different precession frequencies for different molecular orientations.</p>
        <p><b>What you observe:</b> Orientation-dependent EPR resonance fields and \(g\)-strain when conformations have slightly different tensors.</p>
      </article>
    </div>
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


<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">P</span>
    <div><p class="section-eyebrow">Origin of g-anisotropy</p><h2>The g-tensor remembers nearby excited electronic states</h2></div>
  </div>

  <p>For a purely spin-only free electron, \(g\) is almost isotropic. In a molecule, spin–orbit coupling admixes orbital character from excited electronic states into the ground spin state. Schematically, the molecular shift can be viewed as a second-order response,</p>

  <div class="lecture-equation">
  \[
  \Delta g
  \sim
  \sum_n
  \frac{
  \langle 0|\hat L|n\rangle
  \langle n|\hat H_\mathrm{SO}|0\rangle
  }{E_0-E_n}.
  \]
  </div>

  <p>This is not meant as a universal computational formula; it shows the physics. The size and direction of the \(g\)-shift depend on orbital angular-momentum matrix elements, SOC and energy gaps to excited states. Heavy atoms, low-lying excited states and strongly anisotropic orbital environments can therefore produce much larger \(g\)-anisotropy than typical light-atom organic radicals.</p>

  <aside class="research-connection">
    <span class="research-connection-label">Why it matters dynamically</span>
    <p>Once two radicals have different or anisotropic \(g\)-tensors, an external field can make their precession frequencies diverge. At high field this \(\Delta g\) mechanism can compete directly with hyperfine-driven singlet–triplet mixing.</p>
    <div class="research-connection-links">
      <a href="https://doi.org/10.1021/jacs.5c06173" target="_blank" rel="noopener"><strong>Revealing the Impact of g-Tensor Anisotropy on the Charge Recombination in Donor–Acceptor Dyads Under High Magnetic Fields</strong><span>JACS (2025)</span></a>
    </div>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Hyperfine coupling</p><h2>Nuclei tell you where the unpaired electron lives</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Hyperfine coupling turns electronic spin density into a nuclear fingerprint</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Fermi contact term</strong>
        <p><b>What it is:</b> An isotropic interaction proportional, in the simplest picture, to the unpaired spin density at the nucleus.</p>
        <p><b>What it changes:</b> It shifts electron-spin energies according to the nuclear-spin projection but does not depend on molecular orientation.</p>
        <p><b>What you observe:</b> Isotropic hyperfine splittings in solution EPR and NMR-related spin-polarization effects.</p>
      </article>
      <article>
        <strong>Dipolar hyperfine term</strong>
        <p><b>What it is:</b> The anisotropic magnetic interaction between the distributed electron spin density and the nuclear magnetic moment.</p>
        <p><b>What it changes:</b> It makes the coupling depend on the orientation of the electron–nucleus geometry relative to the field.</p>
        <p><b>What you observe:</b> Anisotropic EPR/ENDOR patterns and orientation-dependent radical-pair dynamics.</p>
      </article>
    </div>
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

  <p>The isotropic Fermi-contact contribution is closely related to the spin density at the nucleus. The anisotropic contribution reflects the spatial distribution of the unpaired spin and behaves like an electron–nuclear dipolar interaction. When comparing values, check whether \(\mathbf A\) is reported in energy, ordinary-frequency, angular-frequency or magnetic-field units; the numerical tensor changes with that convention even though the physics does not.</p>

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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Two mechanisms couple electron spins—and they scale very differently with geometry</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Exchange \(J\)</strong>
        <p><b>What it is:</b> A quantum-mechanical interaction arising from antisymmetry of the many-electron wavefunction together with orbital overlap and electron correlation.</p>
        <p><b>What it changes:</b> It changes the singlet–triplet energy separation and can suppress or enhance singlet–triplet mixing.</p>
        <p><b>What you observe:</b> Singlet–triplet gaps, magnetic coupling constants and strong geometry sensitivity, often approaching exponential distance dependence.</p>
      </article>
      <article>
        <strong>Dipolar coupling \(\mathbf D\)</strong>
        <p><b>What it is:</b> The direct magnetic interaction between two spatially separated electron magnetic moments.</p>
        <p><b>What it changes:</b> It depends on distance as roughly \(r^{-3}\) and on the orientation of the inter-spin vector.</p>
        <p><b>What you observe:</b> Orientation-dependent splittings, distance information in EPR and radical-pair anisotropy.</p>
      </article>
    </div>
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

  <aside class="lecture-note">
    <strong>The point-dipole picture has a spatial-resolution limit.</strong>
    <span>At long range, treating each unpaired electron as a localized magnetic point moment is often excellent. At short range or for strongly delocalized spin density, the full electron–electron dipolar tensor depends on the spatial spin-density distributions; a single centre-to-centre distance can then be misleading.</span>
  </aside>

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
          <line x1="58" y1="110.18" x2="530" y2="110.18" class="plot-grid"/>
          <text x="478" y="278" class="svg-caption">θ / degree</text>
          <text x="12" y="38" class="svg-caption">1 − 3 cos²θ</text>
          <text x="54" y="267" class="svg-tick">0</text>
          <text x="286" y="267" class="svg-tick">45</text>
          <text x="515" y="267" class="svg-tick">90</text>
          <path id="dipolar-factor-path" class="population-line lower-line" fill="none" d="M58.00 235.47 L59.97 235.46 L61.93 235.44 L63.90 235.40 L65.87 235.34 L67.83 235.27 L69.80 235.18 L71.77 235.08 L73.73 234.96 L75.70 234.82 L77.67 234.67 L79.63 234.50 L81.60 234.31 L83.57 234.11 L85.53 233.90 L87.50 233.66 L89.47 233.42 L91.43 233.15 L93.40 232.87 L95.37 232.58 L97.33 232.27 L99.30 231.94 L101.27 231.60 L103.23 231.24 L105.20 230.87 L107.17 230.48 L109.13 230.08 L111.10 229.66 L113.07 229.23 L115.03 228.78 L117.00 228.32 L118.97 227.84 L120.93 227.35 L122.90 226.84 L124.87 226.32 L126.83 225.78 L128.80 225.23 L130.77 224.66 L132.73 224.08 L134.70 223.49 L136.67 222.88 L138.63 222.26 L140.60 221.62 L142.57 220.97 L144.53 220.31 L146.50 219.63 L148.47 218.94 L150.43 218.24 L152.40 217.52 L154.37 216.79 L156.33 216.05 L158.30 215.30 L160.27 214.53 L162.23 213.75 L164.20 212.96 L166.17 212.15 L168.13 211.33 L170.10 210.50 L172.07 209.66 L174.03 208.81 L176.00 207.95 L177.97 207.07 L179.93 206.19 L181.90 205.29 L183.87 204.38 L185.83 203.46 L187.80 202.53 L189.77 201.59 L191.73 200.64 L193.70 199.68 L195.67 198.71 L197.63 197.72 L199.60 196.73 L201.57 195.73 L203.53 194.73 L205.50 193.71 L207.47 192.68 L209.43 191.64 L211.40 190.60 L213.37 189.55 L215.33 188.49 L217.30 187.42 L219.27 186.34 L221.23 185.25 L223.20 184.16 L225.17 183.06 L227.13 181.96 L229.10 180.84 L231.07 179.72 L233.03 178.59 L235.00 177.46 L236.97 176.32 L238.93 175.18 L240.90 174.02 L242.87 172.87 L244.83 171.71 L246.80 170.54 L248.77 169.37 L250.73 168.19 L252.70 167.01 L254.67 165.82 L256.63 164.63 L258.60 163.44 L260.57 162.24 L262.53 161.04 L264.50 159.83 L266.47 158.62 L268.43 157.41 L270.40 156.20 L272.37 154.98 L274.33 153.77 L276.30 152.55 L278.27 151.32 L280.23 150.10 L282.20 148.87 L284.17 147.65 L286.13 146.42 L288.10 145.19 L290.07 143.96 L292.03 142.73 L294.00 141.50 L295.97 140.27 L297.93 139.04 L299.90 137.81 L301.87 136.58 L303.83 135.35 L305.80 134.13 L307.77 132.90 L309.73 131.68 L311.70 130.45 L313.67 129.23 L315.63 128.02 L317.60 126.80 L319.57 125.59 L321.53 124.38 L323.50 123.17 L325.47 121.96 L327.43 120.76 L329.40 119.56 L331.37 118.37 L333.33 117.18 L335.30 115.99 L337.27 114.81 L339.23 113.63 L341.20 112.46 L343.17 111.29 L345.13 110.13 L347.10 108.98 L349.07 107.82 L351.03 106.68 L353.00 105.54 L354.97 104.41 L356.93 103.28 L358.90 102.16 L360.87 101.04 L362.83 99.94 L364.80 98.84 L366.77 97.75 L368.73 96.66 L370.70 95.58 L372.67 94.51 L374.63 93.45 L376.60 92.40 L378.57 91.36 L380.53 90.32 L382.50 89.29 L384.47 88.27 L386.43 87.27 L388.40 86.27 L390.37 85.28 L392.33 84.29 L394.30 83.32 L396.27 82.36 L398.23 81.41 L400.20 80.47 L402.17 79.54 L404.13 78.62 L406.10 77.71 L408.07 76.81 L410.03 75.93 L412.00 75.05 L413.97 74.19 L415.93 73.34 L417.90 72.50 L419.87 71.67 L421.83 70.85 L423.80 70.04 L425.77 69.25 L427.73 68.47 L429.70 67.70 L431.67 66.95 L433.63 66.21 L435.60 65.48 L437.57 64.76 L439.53 64.06 L441.50 63.37 L443.47 62.69 L445.43 62.03 L447.40 61.38 L449.37 60.74 L451.33 60.12 L453.30 59.51 L455.27 58.92 L457.23 58.34 L459.20 57.77 L461.17 57.22 L463.13 56.68 L465.10 56.16 L467.07 55.65 L469.03 55.16 L471.00 54.68 L472.97 54.22 L474.93 53.77 L476.90 53.34 L478.87 52.92 L480.83 52.52 L482.80 52.13 L484.77 51.76 L486.73 51.40 L488.70 51.06 L490.67 50.73 L492.63 50.42 L494.60 50.13 L496.57 49.85 L498.53 49.58 L500.50 49.34 L502.47 49.10 L504.43 48.89 L506.40 48.69 L508.37 48.50 L510.33 48.33 L512.30 48.18 L514.27 48.04 L516.23 47.92 L518.20 47.82 L520.17 47.73 L522.13 47.66 L524.10 47.60 L526.07 47.56 L528.03 47.54 L530.00 47.53"/>
          <line id="dipolar-marker-line" x1="530" y1="35" x2="530" y2="248" class="plot-marker"/>
          <circle id="dipolar-marker" cx="530" cy="47.53" r="5" class="plot-point upper-point"/>
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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Higher spin quantum numbers introduce interactions that do not exist for spin-1/2</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Nuclear quadrupole interaction</strong>
        <p><b>What it is:</b> Nuclei with \(I>\tfrac12\) possess a non-spherical electric quadrupole moment that interacts with the local electric-field gradient.</p>
        <p><b>What it changes:</b> It splits nuclear-spin sublevels even without changing the electron-spin state and can mix nuclear projections.</p>
        <p><b>What you observe:</b> Additional EPR/ENDOR/ESEEM structure and nuclear-frequency shifts.</p>
      </article>
      <article>
        <strong>ZFS parameters \(D,E\)</strong>
        <p><b>What it is:</b> A compact description of anisotropic splitting inside an electron-spin multiplet with \(S>\tfrac12\).</p>
        <p><b>What it changes:</b> \(D\) sets the dominant axial splitting and \(E\) measures rhombicity in the principal-axis convention.</p>
        <p><b>What you observe:</b> Zero-field and low-field level separations and characteristic triplet/high-spin EPR patterns.</p>
      </article>
    </div>
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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Anisotropy means that the interaction depends on direction</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Tensor</strong>
        <p><b>What it is:</b> A direction-dependent generalization of a scalar coupling. Its principal values describe the interaction along three mutually orthogonal principal axes.</p>
        <p><b>What it changes:</b> Rotating the molecule changes the component of the interaction projected onto the laboratory magnetic-field direction.</p>
        <p><b>What you observe:</b> Orientation-dependent resonance fields, splittings and relaxation rates in crystals, powders and partially ordered samples.</p>
      </article>
      <article>
        <strong>Principal axes</strong>
        <p><b>What it is:</b> The molecular directions in which a symmetric interaction tensor is diagonal and can be described by its principal values.</p>
        <p><b>What it changes:</b> They determine how electronic structure is geometrically tied to the measured anisotropy.</p>
        <p><b>What you observe:</b> Angular patterns in single-crystal EPR and characteristic turning points in powder spectra.</p>
      </article>
      <article>
        <strong>Molecular tumbling</strong>
        <p><b>What it is:</b> Time-dependent rotation of the molecular frame relative to the laboratory field.</p>
        <p><b>What it changes:</b> Fast tumbling averages anisotropic interactions; intermediate motion modulates them and contributes to relaxation.</p>
        <p><b>What you observe:</b> Motional narrowing in solution and temperature/viscosity-dependent linewidths.</p>
      </article>
    </div>
  </div>


  <p>An anisotropic \(g\)-tensor or hyperfine tensor is not just three numbers. It has principal values <em>and principal axes</em>. Rotating the molecule relative to the field rotates the tensor into the laboratory frame and changes the observed interaction.</p>

  <p>The principal values themselves are rotational invariants: changing coordinate axes changes the matrix elements but not its eigenvalues. For a symmetric hyperfine tensor, for example,</p>

  <div class="lecture-equation">
  \[
  A_\mathrm{iso}
  =
  \frac{\mathrm{Tr}(\mathbf A)}{3},
  \qquad
  \mathbf T
  =
  \mathbf A-A_\mathrm{iso}\mathbf 1.
  \]
  </div>

  <p>This separation is useful because \(A_\mathrm{iso}\) survives rapid isotropic tumbling, whereas the traceless anisotropic part averages to zero in the extreme fast-motion limit but can still drive relaxation while it fluctuates.</p>

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

  <aside class="research-connection">
    <span class="research-connection-label">Research connection</span>
    <p>A tensor becomes chemically important when its orientation changes an observable. We used precisely this idea to show how g-tensor anisotropy can alter charge-recombination dynamics in donor–acceptor dyads at high magnetic field.</p>
    <div class="research-connection-links">
      <a href="https://doi.org/10.1021/jacs.5c06173" target="_blank" rel="noopener"><strong>Revealing the Impact of g-Tensor Anisotropy on the Charge Recombination in Donor–Acceptor Dyads Under High Magnetic Fields</strong><span>JACS (2025)</span></a>
    </div>
  </aside>
</section>

<aside class="landmark-study">
  <span class="landmark-label">Landmark connection</span>
  <h3>Electronic structure becomes spectroscopy through effective magnetic parameters</h3>
  <p>Neese's review is a useful example of the full reduction step used throughout this library: an electronic wavefunction or density is converted into g-tensors, hyperfine couplings and related parameters that can be compared directly with EPR observables.</p>
  <div class="landmark-footer">
    <a href="https://doi.org/10.1016/S1367-5931(02)00006-6" target="_blank" rel="noopener">F. Neese · Current Opinion in Chemical Biology 7, 125–135 (2003) →</a>
    <span>The next step is Spin Dynamics: once the Hamiltonian is defined, these parameters generate time evolution.</span>
  </div>
</aside>

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


<section class="lecture-section external-reading">
  <div class="lecture-section-head">
    <span class="lecture-index literature-index">L</span>
    <div><p class="section-eyebrow">Key external literature</p><h2>Where to read next</h2></div>
  </div>
  <p class="external-reading-intro">These are deliberately selected from outside my own work: foundational papers or reviews that are especially useful for this topic.</p>
  <div class="lecture-reading-grid external-literature-grid">
    <article>
      <span>Spectroscopic parameters</span>
      <h3>Quantum chemical calculations of spectroscopic properties of metalloproteins and model compounds: EPR and Mössbauer properties</h3>
      <p>F. Neese · Current Opinion in Chemical Biology (2003). A concise bridge between electronic structure and experimentally fitted spin-Hamiltonian parameters.</p>
      <a href="https://doi.org/10.1016/S1367-5931(02)00006-6" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>DFT & magnetic properties</span>
      <h3>Prediction of molecular properties and molecular spectroscopy with density functional theory: From fundamental theory to exchange-coupling</h3>
      <p>F. Neese · Coordination Chemistry Reviews (2009). A broader review of magnetic response, spectroscopy and exchange coupling from DFT.</p>
      <a href="https://doi.org/10.1016/j.ccr.2008.05.014" target="_blank" rel="noopener">Open DOI →</a>
    </article>
  </div>
</section>
{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-dipolar.js" defer></script>
