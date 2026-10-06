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
<section class="module-learning" aria-label="Learning goals">
  <div class="module-learning-head"><span>After this module</span><strong>You should be able to…</strong></div>
  <div class="module-learning-grid">
    <div><span>01</span><p>Distinguish vertical excitation, excited-state relaxation and emission energies.</p></div>
    <div><span>02</span><p>Explain why conical intersections and nonadiabatic coupling enable efficient internal conversion.</p></div>
    <div><span>03</span><p>Relate spin–orbit coupling and vibronic overlap to intersystem crossing and triplet formation.</p></div>
  </div>
</section>

{% include lecture-connections.html %}


<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Franck–Condon picture</p><h2>Electronic excitation is fast compared with nuclear motion</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Absorption strength and nuclear geometry are separate parts of an optical transition</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Vertical excitation</strong>
        <p><b>What it is:</b> An electronic transition evaluated at essentially fixed nuclear coordinates because electrons respond much faster than nuclei move.</p>
        <p><b>What it changes:</b> It places the excited wavepacket away from the relaxed excited-state minimum whenever the two surfaces prefer different geometries.</p>
        <p><b>What you observe:</b> The absorption energy rather than the fully relaxed excited-state energy.</p>
      </article>
      <article>
        <strong>Oscillator strength</strong>
        <p><b>What it is:</b> A dimensionless measure of electric-dipole transition intensity derived from the transition dipole moment.</p>
        <p><b>What it changes:</b> It determines whether an electronic transition is optically bright or nearly dark for electric-dipole absorption.</p>
        <p><b>What you observe:</b> Integrated absorption intensity, not simply the excitation energy.</p>
      </article>
    </div>
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
        <input id="photo-d" type="range" min="0" max="0.80" step="0.01" value="0.50">

        <div class="demo-presets">
          <button type="button" data-photo-d="0">no displacement</button>
          <button type="button" data-photo-d="0.50">moderate</button>
          <button type="button" data-photo-d="0.80">large</button>
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
          <path id="photo-ground-path" class="population-line lower-line" fill="none" d="M58.00 209.53 L59.97 210.87 L61.93 212.19 L63.90 213.49 L65.87 214.79 L67.83 216.06 L69.80 217.32 L71.77 218.57 L73.73 219.80 L75.70 221.02 L77.67 222.22 L79.63 223.41 L81.60 224.58 L83.57 225.74 L85.53 226.88 L87.50 228.01 L89.47 229.12 L91.43 230.22 L93.40 231.30 L95.37 232.37 L97.33 233.42 L99.30 234.46 L101.27 235.48 L103.23 236.49 L105.20 237.48 L107.17 238.46 L109.13 239.42 L111.10 240.37 L113.07 241.30 L115.03 242.22 L117.00 243.12 L118.97 244.01 L120.93 244.89 L122.90 245.74 L124.87 246.59 L126.83 247.42 L128.80 248.23 L130.77 249.03 L132.73 249.81 L134.70 250.58 L136.67 251.34 L138.63 252.08 L140.60 252.80 L142.57 253.51 L144.53 254.20 L146.50 254.88 L148.47 255.55 L150.43 256.20 L152.40 256.83 L154.37 257.45 L156.33 258.06 L158.30 258.64 L160.27 259.22 L162.23 259.78 L164.20 260.32 L166.17 260.85 L168.13 261.37 L170.10 261.87 L172.07 262.36 L174.03 262.83 L176.00 263.28 L177.97 263.72 L179.93 264.15 L181.90 264.56 L183.87 264.95 L185.83 265.33 L187.80 265.70 L189.77 266.05 L191.73 266.39 L193.70 266.71 L195.67 267.01 L197.63 267.30 L199.60 267.58 L201.57 267.84 L203.53 268.09 L205.50 268.32 L207.47 268.54 L209.43 268.74 L211.40 268.92 L213.37 269.10 L215.33 269.25 L217.30 269.40 L219.27 269.52 L221.23 269.63 L223.20 269.73 L225.17 269.81 L227.13 269.88 L229.10 269.93 L231.07 269.97 L233.03 269.99 L235.00 270.00 L236.97 269.99 L238.93 269.97 L240.90 269.93 L242.87 269.88 L244.83 269.81 L246.80 269.73 L248.77 269.63 L250.73 269.52 L252.70 269.40 L254.67 269.25 L256.63 269.10 L258.60 268.92 L260.57 268.74 L262.53 268.54 L264.50 268.32 L266.47 268.09 L268.43 267.84 L270.40 267.58 L272.37 267.30 L274.33 267.01 L276.30 266.71 L278.27 266.39 L280.23 266.05 L282.20 265.70 L284.17 265.33 L286.13 264.95 L288.10 264.56 L290.07 264.15 L292.03 263.72 L294.00 263.28 L295.97 262.83 L297.93 262.36 L299.90 261.87 L301.87 261.37 L303.83 260.85 L305.80 260.32 L307.77 259.78 L309.73 259.22 L311.70 258.64 L313.67 258.06 L315.63 257.45 L317.60 256.83 L319.57 256.20 L321.53 255.55 L323.50 254.88 L325.47 254.20 L327.43 253.51 L329.40 252.80 L331.37 252.08 L333.33 251.34 L335.30 250.58 L337.27 249.81 L339.23 249.03 L341.20 248.23 L343.17 247.42 L345.13 246.59 L347.10 245.74 L349.07 244.89 L351.03 244.01 L353.00 243.12 L354.97 242.22 L356.93 241.30 L358.90 240.37 L360.87 239.42 L362.83 238.46 L364.80 237.48 L366.77 236.49 L368.73 235.48 L370.70 234.46 L372.67 233.42 L374.63 232.37 L376.60 231.30 L378.57 230.22 L380.53 229.12 L382.50 228.01 L384.47 226.88 L386.43 225.74 L388.40 224.58 L390.37 223.41 L392.33 222.22 L394.30 221.02 L396.27 219.80 L398.23 218.57 L400.20 217.32 L402.17 216.06 L404.13 214.79 L406.10 213.49 L408.07 212.19 L410.03 210.87 L412.00 209.53 L413.97 208.18 L415.93 206.81 L417.90 205.43 L419.87 204.03 L421.83 202.62 L423.80 201.20 L425.77 199.76 L427.73 198.30 L429.70 196.83 L431.67 195.34 L433.63 193.84 L435.60 192.33 L437.57 190.80 L439.53 189.25 L441.50 187.69 L443.47 186.12 L445.43 184.53 L447.40 182.92 L449.37 181.30 L451.33 179.67 L453.30 178.02 L455.27 176.35 L457.23 174.67 L459.20 172.98 L461.17 171.27 L463.13 169.54 L465.10 167.80 L467.07 166.05 L469.03 164.28 L471.00 162.50 L472.97 160.70 L474.93 158.88 L476.90 157.05 L478.87 155.21 L480.83 153.35 L482.80 151.48 L484.77 149.59 L486.73 147.69 L488.70 145.77 L490.67 143.83 L492.63 141.88 L494.60 139.92 L496.57 137.94 L498.53 135.95 L500.50 133.94 L502.47 131.92 L504.43 129.88 L506.40 127.83 L508.37 125.76 L510.33 123.68 L512.30 121.58 L514.27 119.47 L516.23 117.34 L518.20 115.20 L520.17 113.04 L522.13 110.87 L524.10 108.68 L526.07 106.48 L528.03 104.26 L530.00 102.03"/>
          <path id="photo-excited-path" class="population-line triplet-line" fill="none" d="M58.00 38.87 L59.97 40.65 L61.93 42.42 L63.90 44.18 L65.87 45.92 L67.83 47.64 L69.80 49.35 L71.77 51.04 L73.73 52.72 L75.70 54.39 L77.67 56.04 L79.63 57.67 L81.60 59.29 L83.57 60.90 L85.53 62.49 L87.50 64.06 L89.47 65.62 L91.43 67.17 L93.40 68.70 L95.37 70.22 L97.33 71.72 L99.30 73.20 L101.27 74.67 L103.23 76.13 L105.20 77.57 L107.17 79.00 L109.13 80.41 L111.10 81.80 L113.07 83.18 L115.03 84.55 L117.00 85.90 L118.97 87.24 L120.93 88.56 L122.90 89.86 L124.87 91.16 L126.83 92.43 L128.80 93.69 L130.77 94.94 L132.73 96.17 L134.70 97.39 L136.67 98.59 L138.63 99.78 L140.60 100.95 L142.57 102.11 L144.53 103.25 L146.50 104.38 L148.47 105.49 L150.43 106.59 L152.40 107.67 L154.37 108.74 L156.33 109.79 L158.30 110.83 L160.27 111.85 L162.23 112.86 L164.20 113.85 L166.17 114.83 L168.13 115.79 L170.10 116.74 L172.07 117.67 L174.03 118.59 L176.00 119.50 L177.97 120.38 L179.93 121.26 L181.90 122.12 L183.87 122.96 L185.83 123.79 L187.80 124.60 L189.77 125.40 L191.73 126.18 L193.70 126.95 L195.67 127.71 L197.63 128.45 L199.60 129.17 L201.57 129.88 L203.53 130.57 L205.50 131.25 L207.47 131.92 L209.43 132.57 L211.40 133.20 L213.37 133.82 L215.33 134.43 L217.30 135.02 L219.27 135.59 L221.23 136.15 L223.20 136.70 L225.17 137.23 L227.13 137.74 L229.10 138.24 L231.07 138.73 L233.03 139.20 L235.00 139.65 L236.97 140.09 L238.93 140.52 L240.90 140.93 L242.87 141.32 L244.83 141.71 L246.80 142.07 L248.77 142.42 L250.73 142.76 L252.70 143.08 L254.67 143.39 L256.63 143.68 L258.60 143.95 L260.57 144.21 L262.53 144.46 L264.50 144.69 L266.47 144.91 L268.43 145.11 L270.40 145.30 L272.37 145.47 L274.33 145.62 L276.30 145.77 L278.27 145.89 L280.23 146.01 L282.20 146.10 L284.17 146.18 L286.13 146.25 L288.10 146.30 L290.07 146.34 L292.03 146.36 L294.00 146.37 L295.97 146.36 L297.93 146.34 L299.90 146.30 L301.87 146.25 L303.83 146.18 L305.80 146.10 L307.77 146.01 L309.73 145.89 L311.70 145.77 L313.67 145.62 L315.63 145.47 L317.60 145.30 L319.57 145.11 L321.53 144.91 L323.50 144.69 L325.47 144.46 L327.43 144.21 L329.40 143.95 L331.37 143.68 L333.33 143.39 L335.30 143.08 L337.27 142.76 L339.23 142.42 L341.20 142.07 L343.17 141.71 L345.13 141.32 L347.10 140.93 L349.07 140.52 L351.03 140.09 L353.00 139.65 L354.97 139.20 L356.93 138.73 L358.90 138.24 L360.87 137.74 L362.83 137.23 L364.80 136.70 L366.77 136.15 L368.73 135.59 L370.70 135.02 L372.67 134.43 L374.63 133.82 L376.60 133.20 L378.57 132.57 L380.53 131.92 L382.50 131.25 L384.47 130.57 L386.43 129.88 L388.40 129.17 L390.37 128.45 L392.33 127.71 L394.30 126.95 L396.27 126.18 L398.23 125.40 L400.20 124.60 L402.17 123.79 L404.13 122.96 L406.10 122.12 L408.07 121.26 L410.03 120.38 L412.00 119.50 L413.97 118.59 L415.93 117.67 L417.90 116.74 L419.87 115.79 L421.83 114.83 L423.80 113.85 L425.77 112.86 L427.73 111.85 L429.70 110.83 L431.67 109.79 L433.63 108.74 L435.60 107.67 L437.57 106.59 L439.53 105.49 L441.50 104.38 L443.47 103.25 L445.43 102.11 L447.40 100.95 L449.37 99.78 L451.33 98.59 L453.30 97.39 L455.27 96.17 L457.23 94.94 L459.20 93.69 L461.17 92.43 L463.13 91.16 L465.10 89.86 L467.07 88.56 L469.03 87.24 L471.00 85.90 L472.97 84.55 L474.93 83.18 L476.90 81.80 L478.87 80.41 L480.83 79.00 L482.80 77.57 L484.77 76.13 L486.73 74.67 L488.70 73.20 L490.67 71.72 L492.63 70.22 L494.60 68.70 L496.57 67.17 L498.53 65.62 L500.50 64.06 L502.47 62.49 L504.43 60.90 L506.40 59.29 L508.37 57.67 L510.33 56.04 L512.30 54.39 L514.27 52.72 L516.23 51.04 L518.20 49.35 L520.17 47.64 L522.13 45.92 L524.10 44.18 L526.07 42.42 L528.03 40.65 L530.00 38.87"/>
          <line id="photo-abs-arrow" x1="235.00" y1="270.00" x2="235.00" y2="139.65" class="photo-transition-line"/>
          <line id="photo-em-arrow" x1="294.00" y1="146.37" x2="294.00" y2="263.28" class="photo-emission-line"/>
          <text id="photo-abs-label" x="243.00" y="204.83" class="svg-label">absorption</text>
          <text id="photo-em-label" x="302.00" y="204.83" class="svg-label">emission</text>
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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Nonadiabatic coupling lets nuclear motion change electronic identity</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Internal conversion (IC)</strong>
        <p><b>What it is:</b> Radiationless transfer between electronic states of the same spin multiplicity.</p>
        <p><b>What it changes:</b> Electronic excitation energy is converted into nuclear/vibrational motion instead of emitted as a photon.</p>
        <p><b>What you observe:</b> Shorter excited-state lifetimes, reduced fluorescence yield and ultrafast population transfer.</p>
      </article>
      <article>
        <strong>Conical intersection</strong>
        <p><b>What it is:</b> A multidimensional nuclear geometry where two adiabatic electronic states become degenerate and their electronic character changes rapidly.</p>
        <p><b>What it changes:</b> It creates an efficient funnel for nonadiabatic population transfer because the Born–Oppenheimer separation breaks down locally.</p>
        <p><b>What you observe:</b> Ultrafast internal conversion, branching between photochemical products and strong geometry dependence.</p>
      </article>
    </div>
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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>SOC makes spin multiplicity an approximate rather than exact label</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Spin–orbit coupling</strong>
        <p><b>What it is:</b> A relativistic coupling between spin angular momentum and orbital motion/electronic angular momentum in the molecular field.</p>
        <p><b>What it changes:</b> It mixes singlet and triplet character, allowing nominally spin-forbidden population transfer and modifying magnetic tensors.</p>
        <p><b>What you observe:</b> Intersystem crossing, phosphorescence intensity, \(g\)-shifts and ZFS.</p>
      </article>
      <article>
        <strong>Intersystem crossing (ISC)</strong>
        <p><b>What it is:</b> Nonradiative population transfer between electronic states of different spin multiplicity.</p>
        <p><b>What it changes:</b> It can populate long-lived triplet states that access different chemistry and spin dynamics from the initially excited singlet.</p>
        <p><b>What you observe:</b> Triplet yields, delayed emission, transient absorption and time-resolved EPR.</p>
      </article>
    </div>
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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Fluorescence and phosphorescence report different electronic spin pathways</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Fluorescence</strong>
        <p><b>What it is:</b> Radiative emission between electronic states of the same spin multiplicity, commonly \(S_1\rightarrow S_0\).</p>
        <p><b>What it changes:</b> It competes with internal conversion, intersystem crossing and photochemistry for the excited-state population.</p>
        <p><b>What you observe:</b> Prompt emission whose lifetime is typically set by the total decay rate out of the singlet excited state.</p>
      </article>
      <article>
        <strong>Phosphorescence</strong>
        <p><b>What it is:</b> Radiative emission from a triplet state to a singlet ground state, enabled by spin–orbit-induced mixing because the transition is spin-forbidden in the nonrelativistic limit.</p>
        <p><b>What it changes:</b> Its rate is usually much slower than an allowed fluorescence transition and is strongly influenced by SOC.</p>
        <p><b>What you observe:</b> Longer-lived emission associated with triplet population.</p>
      </article>
      <article>
        <strong>Quantum yield</strong>
        <p><b>What it is:</b> The fraction of absorbed photons that produce a chosen outcome such as fluorescence, triplet formation or a chemical product.</p>
        <p><b>What it changes:</b> It integrates all competing kinetic pathways rather than measuring only one microscopic rate.</p>
        <p><b>What you observe:</b> A branching ratio that connects excited-state kinetics to measurable photons or products.</p>
      </article>
    </div>
  </div>

  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>A triplet is a three-sublevel spin manifold, not just a 'long-lived excited state'</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Triplet multiplicity</strong>
        <p><b>What it is:</b> An \(S=1\) electronic state with three spin projections in the absence of additional mixing.</p>
        <p><b>What it changes:</b> The sublevels can be split by ZFS and populated non-equally by spin-selective ISC.</p>
        <p><b>What you observe:</b> Characteristic polarized triplet EPR spectra and often longer excited-state lifetimes.</p>
      </article>
      <article>
        <strong>Triplet precursor chemistry</strong>
        <p><b>What it is:</b> Electron transfer or bond chemistry initiated from a triplet excited state inherits different spin correlation from a singlet precursor.</p>
        <p><b>What it changes:</b> It changes the initial spin state of subsequent radical pairs and therefore their allowed reaction pathways.</p>
        <p><b>What you observe:</b> Different transient kinetics, spin polarization and magnetic-field response.</p>
      </article>
    </div>
  </div>


  <p>Triplet states are often longer lived than bright singlet excited states because direct radiative return to a singlet ground state is spin-forbidden in the nonrelativistic limit. That longer lifetime can open reaction pathways that are inaccessible from a rapidly decaying singlet state.</p>

  <p>For spin chemistry, a triplet precursor also matters because electron transfer from a triplet can prepare a radical pair with different initial spin character than electron transfer from a singlet precursor.</p>
</section>


<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">P</span>
    <div><p class="section-eyebrow">Competing excited-state channels</p><h2>Quantum yield is a branching problem between rates</h2></div>
  </div>

  <p>After a molecule is excited, fluorescence, internal conversion, intersystem crossing and chemical reaction can all compete. In a simple kinetic picture with first-order channels,</p>

  <div class="lecture-equation">
  \[
  k_\mathrm{tot}
  =
  k_f+k_\mathrm{IC}+k_\mathrm{ISC}+k_\mathrm{rxn}+\cdots,
  \qquad
  \Phi_i
  =
  \frac{k_i}{k_\mathrm{tot}}.
  \]
  </div>

  <p>This is why a large SOC matrix element does not automatically imply a high triplet yield: the ISC channel must still compete successfully with fluorescence, internal conversion and any ultrafast photochemistry. Likewise, a bright state can fluoresce weakly if a faster nonradiative pathway drains its population first.</p>

  <div class="interactive-card" id="photo-branch-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive kinetics</span><h3>Excited-state branching ratios</h3></div>
      <span class="interactive-model-note">first-order channels</span>
    </div>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>increase the ISC rate while leaving fluorescence fixed. The triplet yield rises only when ISC becomes competitive with the other decay channels.</span>
    </div>

    <div class="branching-controls">
      <label for="branch-kf"><span>Fluorescence \(k_f\)</span><output id="branch-kf-out">1.0 × 10⁸ s⁻¹</output></label>
      <input id="branch-kf" type="range" min="5" max="10" step="0.05" value="8">

      <label for="branch-kic"><span>Internal conversion \(k_\mathrm{IC}\)</span><output id="branch-kic-out">3.2 × 10⁷ s⁻¹</output></label>
      <input id="branch-kic" type="range" min="5" max="10" step="0.05" value="7.5">

      <label for="branch-kisc"><span>Intersystem crossing \(k_\mathrm{ISC}\)</span><output id="branch-kisc-out">1.0 × 10⁷ s⁻¹</output></label>
      <input id="branch-kisc" type="range" min="5" max="10" step="0.05" value="7">
    </div>

    <div class="branching-bar" aria-label="Excited-state branching fractions">
      <span id="branch-fluor-bar" class="branch-fluor"></span>
      <span id="branch-ic-bar" class="branch-ic"></span>
      <span id="branch-isc-bar" class="branch-isc"></span>
    </div>

    <div class="interactive-readout branching-readout">
      <span>Fluorescence yield <strong id="branch-fluor-out">72.1%</strong></span>
      <span>Internal-conversion yield <strong id="branch-ic-out">22.8%</strong></span>
      <span>Triplet / ISC yield <strong id="branch-isc-out">7.2%</strong></span>
      <span>Excited-state lifetime <strong id="branch-life-out">7.2 ns</strong></span>
    </div>

    <p class="interactive-footnote">The channels are treated as independent first-order processes from one excited state. Real photochemistry can involve multiple states, reversible transfer, vibronic relaxation and geometry-dependent rates.</p>
  </div>
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

  <aside class="research-connection">
    <span class="research-connection-label">Research connection</span>
    <p>For flavoproteins, the protein environment is part of the excited-state Hamiltonian. Electrostatic polarization and local hydrogen-bonding can shift the flavin states that later feed triplet and radical-pair pathways.</p>
    <div class="research-connection-links">
      <a href="https://doi.org/10.1021/acs.jpcb.4c02168" target="_blank" rel="noopener"><strong>Importance of Polarizable Embedding for Absorption Spectrum Calculations of Arabidopsis thaliana Cryptochrome 1</strong><span>J. Phys. Chem. B (2024)</span></a>
      <a href="https://doi.org/10.3390/biology13040262" target="_blank" rel="noopener"><strong>Activation of Cryptochrome 4 from Atlantic Herring</strong><span>Biology (2024)</span></a>
    </div>
  </aside>
</section>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">08</span>
    <div><p class="section-eyebrow">Selected reading</p><h2>Examples from my work</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>Environment &amp; excitation</span><h3>Importance of Polarizable Embedding for Absorption Spectrum Calculations of Arabidopsis thaliana Cryptochrome 1</h3><p>How the protein environment shifts flavin excitation energies.</p><a href="https://doi.org/10.1021/acs.jpcb.4c02168" target="_blank" rel="noopener">J. Phys. Chem. B (2024) →</a></article>
    <article><span>Flavin photochemistry</span><h3>Activation of Cryptochrome 4 from Atlantic Herring</h3><p>A study of cryptochrome-4 activation with direct relevance to flavin photochemistry.</p><a href="https://doi.org/10.3390/biology13040262" target="_blank" rel="noopener">Biology (2024) →</a></article>
    <article><span>Excited-state reactivity</span><h3>Theoretical investigation of CH-bond activation by photocatalytic excited SO₂ and the effects of C-, N-, S-, and Se-doped TiO₂</h3><p>Excited-state electronic structure applied to a photocatalytic reaction mechanism.</p><a href="https://doi.org/10.1039/D1CP04335H" target="_blank" rel="noopener">PCCP (2022) →</a></article>
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
      <span>Conical intersections</span>
      <h3>Isomerization Through Conical Intersections</h3>
      <p>B. G. Levine and T. J. Martínez · Annual Review of Physical Chemistry (2007). An accessible review of why conical intersections require a multidimensional picture of photochemistry.</p>
      <a href="https://doi.org/10.1146/annurev.physchem.57.032905.104612" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Intersystem crossing</span>
      <h3>Spin–orbit coupling and intersystem crossing in molecules</h3>
      <p>C. M. Marian · WIREs Computational Molecular Science (2012). A focused review of SOC, ISC mechanisms and practical quantum-chemical treatments.</p>
      <a href="https://doi.org/10.1002/wcms.83" target="_blank" rel="noopener">Open DOI →</a>
    </article>
  </div>
</section>
{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-photochemistry.js" defer></script>
