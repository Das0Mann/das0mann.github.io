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
  <p class="module-context"><strong>Course thread:</strong> this is the microscopic starting point. The next module will discard most electronic degrees of freedom and keep only the low-energy magnetic parameters needed for an effective spin Hamiltonian.</p>
</header>
<section class="module-learning" aria-label="Learning goals">
  <div class="module-learning-head">
    <span>After this module</span>
    <strong>You should be able to…</strong>
  </div>
  <div class="module-learning-grid">
    <div><span>01</span><p>Distinguish the many-electron wavefunction, molecular orbitals and electron density.</p></div>
    <div><span>02</span><p>Explain what HF, DFT, correlation methods and basis sets approximate differently.</p></div>
    <div><span>03</span><p>Identify which electronic-structure outputs become parameters of a spin Hamiltonian.</p></div>
  </div>
</section>


<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">The electronic problem</p><h2>Freeze the nuclei for a moment</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Wavefunction and electron density describe the same electrons at different levels of information</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Many-electron wavefunction \(\Psi\)</strong>
        <p><b>What it is:</b> A complex quantum amplitude defined over the coordinates and spins of all electrons simultaneously.</p>
        <p><b>What it changes:</b> Its antisymmetry enforces fermionic exchange and, in principle, contains all electronic observables and correlations.</p>
        <p><b>What you observe:</b> The wavefunction itself is not directly measured; probabilities, densities, energies and response properties are derived from it.</p>
      </article>
      <article>
        <strong>Electron density \(\rho(\mathbf r)\)</strong>
        <p><b>What it is:</b> The electron number density around position \(\mathbf r\), obtained by integrating the many-electron probability density over all other electronic coordinates. It integrates to the number of electrons; the corresponding charge density is \(-e\rho(\mathbf r)\).</p>
        <p><b>What it changes:</b> It determines electrostatics, bonding patterns and—within ground-state DFT—the total energy in principle.</p>
        <p><b>What you observe:</b> Charge distributions, electrostatic potentials and density-derived quantities; experimentally it is related to X-ray/electron scattering rather than to an orbital picture.</p>
      </article>
      <article>
        <strong>Born–Oppenheimer separation</strong>
        <p><b>What it is:</b> The approximation that electrons adjust much faster than nuclei because nuclei are far heavier.</p>
        <p><b>What it changes:</b> It lets us solve an electronic problem at each fixed nuclear geometry and interpret the resulting energy as a potential-energy surface for nuclear motion.</p>
        <p><b>What you observe:</b> Molecular geometries, vibrational surfaces and reaction paths; breakdown appears in strongly nonadiabatic regions such as conical intersections.</p>
      </article>
    </div>
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

  <p>This is why independent-particle pictures are so useful. They replace one function of all electronic coordinates by a tractable set of one-electron objects, then recover the missing many-body physics approximately through exchange, correlation or configuration mixing. Orbitals are therefore computational degrees of freedom—not literal trajectories followed by individual electrons.</p>

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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Exchange and correlation are distinct consequences of having many electrons</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Exchange</strong>
        <p><b>What it is:</b> A purely quantum effect arising from antisymmetry of the many-electron wavefunction for identical fermions. Same-spin electrons avoid one another even without invoking classical electrostatic repulsion.</p>
        <p><b>What it changes:</b> It changes orbital energies, spin-state energetics and magnetic coupling, and is treated exactly within a Hartree–Fock determinant.</p>
        <p><b>What you observe:</b> Spin-state splittings, bond energetics and the strong dependence of many magnetic properties on the exchange treatment.</p>
      </article>
      <article>
        <strong>Electron correlation</strong>
        <p><b>What it is:</b> The additional correlated motion of electrons beyond the average-field picture, including dynamical avoidance from Coulomb repulsion and, in multireference cases, near-degenerate configurations.</p>
        <p><b>What it changes:</b> It corrects energies, charge distributions, bond breaking and magnetic couplings that a single determinant can misrepresent.</p>
        <p><b>What you observe:</b> Improved reaction energies, excitation energies and spin-state orderings; failures can be dramatic when static correlation is strong.</p>
      </article>
      <article>
        <strong>Exchange–correlation functional</strong>
        <p><b>What it is:</b> In Kohn–Sham DFT, the approximate energy functional that contains the many-body physics not represented by the non-interacting kinetic energy and classical Coulomb term.</p>
        <p><b>What it changes:</b> Its form controls self-interaction error, delocalization, spin densities and response properties.</p>
        <p><b>What you observe:</b> Functional dependence of geometries, charge-transfer energies, hyperfine couplings and magnetic tensors.</p>
      </article>
    </div>
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
          <path id="diabatic-1" class="diabatic-line" fill="none" d="M58.00 55.62 L60.61 56.56 L63.22 57.51 L65.83 58.46 L68.44 59.41 L71.06 60.36 L73.67 61.31 L76.28 62.26 L78.89 63.21 L81.50 64.15 L84.11 65.10 L86.72 66.05 L89.33 67.00 L91.94 67.95 L94.56 68.90 L97.17 69.85 L99.78 70.79 L102.39 71.74 L105.00 72.69 L107.61 73.64 L110.22 74.59 L112.83 75.54 L115.44 76.49 L118.06 77.44 L120.67 78.38 L123.28 79.33 L125.89 80.28 L128.50 81.23 L131.11 82.18 L133.72 83.13 L136.33 84.08 L138.94 85.03 L141.56 85.97 L144.17 86.92 L146.78 87.87 L149.39 88.82 L152.00 89.77 L154.61 90.72 L157.22 91.67 L159.83 92.62 L162.44 93.56 L165.06 94.51 L167.67 95.46 L170.28 96.41 L172.89 97.36 L175.50 98.31 L178.11 99.26 L180.72 100.21 L183.33 101.15 L185.94 102.10 L188.56 103.05 L191.17 104.00 L193.78 104.95 L196.39 105.90 L199.00 106.85 L201.61 107.79 L204.22 108.74 L206.83 109.69 L209.44 110.64 L212.06 111.59 L214.67 112.54 L217.28 113.49 L219.89 114.44 L222.50 115.38 L225.11 116.33 L227.72 117.28 L230.33 118.23 L232.94 119.18 L235.56 120.13 L238.17 121.08 L240.78 122.03 L243.39 122.97 L246.00 123.92 L248.61 124.87 L251.22 125.82 L253.83 126.77 L256.44 127.72 L259.06 128.67 L261.67 129.62 L264.28 130.56 L266.89 131.51 L269.50 132.46 L272.11 133.41 L274.72 134.36 L277.33 135.31 L279.94 136.26 L282.56 137.21 L285.17 138.15 L287.78 139.10 L290.39 140.05 L293.00 141.00 L295.61 141.95 L298.22 142.90 L300.83 143.85 L303.44 144.79 L306.06 145.74 L308.67 146.69 L311.28 147.64 L313.89 148.59 L316.50 149.54 L319.11 150.49 L321.72 151.44 L324.33 152.38 L326.94 153.33 L329.56 154.28 L332.17 155.23 L334.78 156.18 L337.39 157.13 L340.00 158.08 L342.61 159.03 L345.22 159.97 L347.83 160.92 L350.44 161.87 L353.06 162.82 L355.67 163.77 L358.28 164.72 L360.89 165.67 L363.50 166.62 L366.11 167.56 L368.72 168.51 L371.33 169.46 L373.94 170.41 L376.56 171.36 L379.17 172.31 L381.78 173.26 L384.39 174.21 L387.00 175.15 L389.61 176.10 L392.22 177.05 L394.83 178.00 L397.44 178.95 L400.06 179.90 L402.67 180.85 L405.28 181.79 L407.89 182.74 L410.50 183.69 L413.11 184.64 L415.72 185.59 L418.33 186.54 L420.94 187.49 L423.56 188.44 L426.17 189.38 L428.78 190.33 L431.39 191.28 L434.00 192.23 L436.61 193.18 L439.22 194.13 L441.83 195.08 L444.44 196.03 L447.06 196.97 L449.67 197.92 L452.28 198.87 L454.89 199.82 L457.50 200.77 L460.11 201.72 L462.72 202.67 L465.33 203.62 L467.94 204.56 L470.56 205.51 L473.17 206.46 L475.78 207.41 L478.39 208.36 L481.00 209.31 L483.61 210.26 L486.22 211.21 L488.83 212.15 L491.44 213.10 L494.06 214.05 L496.67 215.00 L499.28 215.95 L501.89 216.90 L504.50 217.85 L507.11 218.79 L509.72 219.74 L512.33 220.69 L514.94 221.64 L517.56 222.59 L520.17 223.54 L522.78 224.49 L525.39 225.44 L528.00 226.38"/>
          <path id="diabatic-2" class="diabatic-line" fill="none" d="M58.00 226.38 L60.61 225.44 L63.22 224.49 L65.83 223.54 L68.44 222.59 L71.06 221.64 L73.67 220.69 L76.28 219.74 L78.89 218.79 L81.50 217.85 L84.11 216.90 L86.72 215.95 L89.33 215.00 L91.94 214.05 L94.56 213.10 L97.17 212.15 L99.78 211.21 L102.39 210.26 L105.00 209.31 L107.61 208.36 L110.22 207.41 L112.83 206.46 L115.44 205.51 L118.06 204.56 L120.67 203.62 L123.28 202.67 L125.89 201.72 L128.50 200.77 L131.11 199.82 L133.72 198.87 L136.33 197.92 L138.94 196.97 L141.56 196.03 L144.17 195.08 L146.78 194.13 L149.39 193.18 L152.00 192.23 L154.61 191.28 L157.22 190.33 L159.83 189.38 L162.44 188.44 L165.06 187.49 L167.67 186.54 L170.28 185.59 L172.89 184.64 L175.50 183.69 L178.11 182.74 L180.72 181.79 L183.33 180.85 L185.94 179.90 L188.56 178.95 L191.17 178.00 L193.78 177.05 L196.39 176.10 L199.00 175.15 L201.61 174.21 L204.22 173.26 L206.83 172.31 L209.44 171.36 L212.06 170.41 L214.67 169.46 L217.28 168.51 L219.89 167.56 L222.50 166.62 L225.11 165.67 L227.72 164.72 L230.33 163.77 L232.94 162.82 L235.56 161.87 L238.17 160.92 L240.78 159.97 L243.39 159.03 L246.00 158.08 L248.61 157.13 L251.22 156.18 L253.83 155.23 L256.44 154.28 L259.06 153.33 L261.67 152.38 L264.28 151.44 L266.89 150.49 L269.50 149.54 L272.11 148.59 L274.72 147.64 L277.33 146.69 L279.94 145.74 L282.56 144.79 L285.17 143.85 L287.78 142.90 L290.39 141.95 L293.00 141.00 L295.61 140.05 L298.22 139.10 L300.83 138.15 L303.44 137.21 L306.06 136.26 L308.67 135.31 L311.28 134.36 L313.89 133.41 L316.50 132.46 L319.11 131.51 L321.72 130.56 L324.33 129.62 L326.94 128.67 L329.56 127.72 L332.17 126.77 L334.78 125.82 L337.39 124.87 L340.00 123.92 L342.61 122.97 L345.22 122.03 L347.83 121.08 L350.44 120.13 L353.06 119.18 L355.67 118.23 L358.28 117.28 L360.89 116.33 L363.50 115.38 L366.11 114.44 L368.72 113.49 L371.33 112.54 L373.94 111.59 L376.56 110.64 L379.17 109.69 L381.78 108.74 L384.39 107.79 L387.00 106.85 L389.61 105.90 L392.22 104.95 L394.83 104.00 L397.44 103.05 L400.06 102.10 L402.67 101.15 L405.28 100.21 L407.89 99.26 L410.50 98.31 L413.11 97.36 L415.72 96.41 L418.33 95.46 L420.94 94.51 L423.56 93.56 L426.17 92.62 L428.78 91.67 L431.39 90.72 L434.00 89.77 L436.61 88.82 L439.22 87.87 L441.83 86.92 L444.44 85.97 L447.06 85.03 L449.67 84.08 L452.28 83.13 L454.89 82.18 L457.50 81.23 L460.11 80.28 L462.72 79.33 L465.33 78.38 L467.94 77.44 L470.56 76.49 L473.17 75.54 L475.78 74.59 L478.39 73.64 L481.00 72.69 L483.61 71.74 L486.22 70.79 L488.83 69.85 L491.44 68.90 L494.06 67.95 L496.67 67.00 L499.28 66.05 L501.89 65.10 L504.50 64.15 L507.11 63.21 L509.72 62.26 L512.33 61.31 L514.94 60.36 L517.56 59.41 L520.17 58.46 L522.78 57.51 L525.39 56.56 L528.00 55.62"/>
          <path id="adiabatic-minus" class="adiabatic-line lower-line" fill="none" d="M58.00 229.01 L60.61 228.09 L63.22 227.17 L65.83 226.25 L68.44 225.34 L71.06 224.42 L73.67 223.50 L76.28 222.59 L78.89 221.67 L81.50 220.76 L84.11 219.84 L86.72 218.93 L89.33 218.02 L91.94 217.11 L94.56 216.20 L97.17 215.29 L99.78 214.38 L102.39 213.47 L105.00 212.57 L107.61 211.66 L110.22 210.76 L112.83 209.85 L115.44 208.95 L118.06 208.05 L120.67 207.15 L123.28 206.26 L125.89 205.36 L128.50 204.47 L131.11 203.57 L133.72 202.68 L136.33 201.79 L138.94 200.91 L141.56 200.02 L144.17 199.14 L146.78 198.26 L149.39 197.38 L152.00 196.50 L154.61 195.63 L157.22 194.75 L159.83 193.88 L162.44 193.02 L165.06 192.15 L167.67 191.29 L170.28 190.44 L172.89 189.58 L175.50 188.73 L178.11 187.88 L180.72 187.04 L183.33 186.20 L185.94 185.37 L188.56 184.54 L191.17 183.72 L193.78 182.90 L196.39 182.08 L199.00 181.28 L201.61 180.47 L204.22 179.68 L206.83 178.89 L209.44 178.11 L212.06 177.34 L214.67 176.58 L217.28 175.82 L219.89 175.08 L222.50 174.34 L225.11 173.62 L227.72 172.91 L230.33 172.21 L232.94 171.53 L235.56 170.85 L238.17 170.20 L240.78 169.56 L243.39 168.94 L246.00 168.34 L248.61 167.75 L251.22 167.19 L253.83 166.65 L256.44 166.14 L259.06 165.65 L261.67 165.19 L264.28 164.76 L266.89 164.36 L269.50 163.99 L272.11 163.66 L274.72 163.36 L277.33 163.09 L279.94 162.87 L282.56 162.68 L285.17 162.54 L287.78 162.43 L290.39 162.37 L293.00 162.35 L295.61 162.37 L298.22 162.43 L300.83 162.54 L303.44 162.68 L306.06 162.87 L308.67 163.09 L311.28 163.36 L313.89 163.66 L316.50 163.99 L319.11 164.36 L321.72 164.76 L324.33 165.19 L326.94 165.65 L329.56 166.14 L332.17 166.65 L334.78 167.19 L337.39 167.75 L340.00 168.34 L342.61 168.94 L345.22 169.56 L347.83 170.20 L350.44 170.85 L353.06 171.53 L355.67 172.21 L358.28 172.91 L360.89 173.62 L363.50 174.34 L366.11 175.08 L368.72 175.82 L371.33 176.58 L373.94 177.34 L376.56 178.11 L379.17 178.89 L381.78 179.68 L384.39 180.47 L387.00 181.28 L389.61 182.08 L392.22 182.90 L394.83 183.72 L397.44 184.54 L400.06 185.37 L402.67 186.20 L405.28 187.04 L407.89 187.88 L410.50 188.73 L413.11 189.58 L415.72 190.44 L418.33 191.29 L420.94 192.15 L423.56 193.02 L426.17 193.88 L428.78 194.75 L431.39 195.63 L434.00 196.50 L436.61 197.38 L439.22 198.26 L441.83 199.14 L444.44 200.02 L447.06 200.91 L449.67 201.79 L452.28 202.68 L454.89 203.57 L457.50 204.47 L460.11 205.36 L462.72 206.26 L465.33 207.15 L467.94 208.05 L470.56 208.95 L473.17 209.85 L475.78 210.76 L478.39 211.66 L481.00 212.57 L483.61 213.47 L486.22 214.38 L488.83 215.29 L491.44 216.20 L494.06 217.11 L496.67 218.02 L499.28 218.93 L501.89 219.84 L504.50 220.76 L507.11 221.67 L509.72 222.59 L512.33 223.50 L514.94 224.42 L517.56 225.34 L520.17 226.25 L522.78 227.17 L525.39 228.09 L528.00 229.01"/>
          <path id="adiabatic-plus" class="adiabatic-line upper-line" fill="none" d="M58.00 52.99 L60.61 53.91 L63.22 54.83 L65.83 55.75 L68.44 56.66 L71.06 57.58 L73.67 58.50 L76.28 59.41 L78.89 60.33 L81.50 61.24 L84.11 62.16 L86.72 63.07 L89.33 63.98 L91.94 64.89 L94.56 65.80 L97.17 66.71 L99.78 67.62 L102.39 68.53 L105.00 69.43 L107.61 70.34 L110.22 71.24 L112.83 72.15 L115.44 73.05 L118.06 73.95 L120.67 74.85 L123.28 75.74 L125.89 76.64 L128.50 77.53 L131.11 78.43 L133.72 79.32 L136.33 80.21 L138.94 81.09 L141.56 81.98 L144.17 82.86 L146.78 83.74 L149.39 84.62 L152.00 85.50 L154.61 86.37 L157.22 87.25 L159.83 88.12 L162.44 88.98 L165.06 89.85 L167.67 90.71 L170.28 91.56 L172.89 92.42 L175.50 93.27 L178.11 94.12 L180.72 94.96 L183.33 95.80 L185.94 96.63 L188.56 97.46 L191.17 98.28 L193.78 99.10 L196.39 99.92 L199.00 100.72 L201.61 101.53 L204.22 102.32 L206.83 103.11 L209.44 103.89 L212.06 104.66 L214.67 105.42 L217.28 106.18 L219.89 106.92 L222.50 107.66 L225.11 108.38 L227.72 109.09 L230.33 109.79 L232.94 110.47 L235.56 111.15 L238.17 111.80 L240.78 112.44 L243.39 113.06 L246.00 113.66 L248.61 114.25 L251.22 114.81 L253.83 115.35 L256.44 115.86 L259.06 116.35 L261.67 116.81 L264.28 117.24 L266.89 117.64 L269.50 118.01 L272.11 118.34 L274.72 118.64 L277.33 118.91 L279.94 119.13 L282.56 119.32 L285.17 119.46 L287.78 119.57 L290.39 119.63 L293.00 119.65 L295.61 119.63 L298.22 119.57 L300.83 119.46 L303.44 119.32 L306.06 119.13 L308.67 118.91 L311.28 118.64 L313.89 118.34 L316.50 118.01 L319.11 117.64 L321.72 117.24 L324.33 116.81 L326.94 116.35 L329.56 115.86 L332.17 115.35 L334.78 114.81 L337.39 114.25 L340.00 113.66 L342.61 113.06 L345.22 112.44 L347.83 111.80 L350.44 111.15 L353.06 110.47 L355.67 109.79 L358.28 109.09 L360.89 108.38 L363.50 107.66 L366.11 106.92 L368.72 106.18 L371.33 105.42 L373.94 104.66 L376.56 103.89 L379.17 103.11 L381.78 102.32 L384.39 101.53 L387.00 100.72 L389.61 99.92 L392.22 99.10 L394.83 98.28 L397.44 97.46 L400.06 96.63 L402.67 95.80 L405.28 94.96 L407.89 94.12 L410.50 93.27 L413.11 92.42 L415.72 91.56 L418.33 90.71 L420.94 89.85 L423.56 88.98 L426.17 88.12 L428.78 87.25 L431.39 86.37 L434.00 85.50 L436.61 84.62 L439.22 83.74 L441.83 82.86 L444.44 81.98 L447.06 81.09 L449.67 80.21 L452.28 79.32 L454.89 78.43 L457.50 77.53 L460.11 76.64 L462.72 75.74 L465.33 74.85 L467.94 73.95 L470.56 73.05 L473.17 72.15 L475.78 71.24 L478.39 70.34 L481.00 69.43 L483.61 68.53 L486.22 67.62 L488.83 66.71 L491.44 65.80 L494.06 64.89 L496.67 63.98 L499.28 63.07 L501.89 62.16 L504.50 61.24 L507.11 60.33 L509.72 59.41 L512.33 58.50 L514.94 57.58 L517.56 56.66 L520.17 55.75 L522.78 54.83 L525.39 53.91 L528.00 52.99"/>
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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>The magnetic parameters are response properties of the electronic state</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>\(\mathbf g\)-tensor</strong>
        <p><b>What it is:</b> The factor that converts an applied magnetic field into electron-spin Zeeman splitting. A free electron has \(g\approx2.0023\); a molecule deviates from this because orbital motion and excited electronic states admix through spin–orbit coupling.</p>
        <p><b>What it changes:</b> It sets the spin precession frequency and, when anisotropic, makes that frequency depend on molecular orientation.</p>
        <p><b>What you observe:</b> EPR resonance positions and their orientation dependence.</p>
      </article>
      <article>
        <strong>Hyperfine tensor \(\mathbf A\)</strong>
        <p><b>What it is:</b> The magnetic interaction between an electron spin and a nuclear spin. Its contact part probes spin density at the nucleus; its anisotropic part reflects the spatial distribution of the unpaired electron.</p>
        <p><b>What it changes:</b> It splits spin energy levels and creates different local magnetic fields for different nuclear-spin states.</p>
        <p><b>What you observe:</b> Hyperfine multiplets in EPR/ENDOR and nuclear-dependent singlet–triplet mixing in radical pairs.</p>
      </article>
      <article>
        <strong>Spin–orbit coupling (SOC)</strong>
        <p><b>What it is:</b> A relativistic interaction linking the electron's spin angular momentum to its orbital motion in the molecular electrostatic field.</p>
        <p><b>What it changes:</b> It mixes states of different spin character, shifts the \(g\)-tensor away from the free-electron value and can enable intersystem crossing.</p>
        <p><b>What you observe:</b> \(g\)-anisotropy, zero-field splitting, spin-forbidden intensity and singlet↔triplet population transfer.</p>
      </article>
      <article>
        <strong>Zero-field splitting (ZFS)</strong>
        <p><b>What it is:</b> A splitting of sublevels within an \(S>\tfrac12\) spin multiplet even when no external magnetic field is applied.</p>
        <p><b>What it changes:</b> It sets an intrinsic anisotropic energy scale through spin–spin and spin–orbit contributions.</p>
        <p><b>What you observe:</b> Field-independent level splittings and characteristic EPR transitions of triplets and higher-spin centres.</p>
      </article>
    </div>
  </div>


  <p>Magnetic observables are unusually demanding tests of this electronic description because they depend on small pieces of the wavefunction or density: spin density at a nucleus, weak spin–orbit-induced state mixing, near-degenerate excited states or subtle changes in orbital overlap. Two methods can predict similar total energies while giving meaningfully different hyperfine couplings, \(g\)-shifts or exchange interactions.</p>

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


<section class="lecture-section external-reading">
  <div class="lecture-section-head">
    <span class="lecture-index literature-index">L</span>
    <div><p class="section-eyebrow">Key external literature</p><h2>Where to read next</h2></div>
  </div>
  <p class="external-reading-intro">These are deliberately selected from outside my own work: foundational papers or reviews that are especially useful for this topic.</p>
  <div class="lecture-reading-grid external-literature-grid">
    <article>
      <span>Foundational DFT</span>
      <h3>Inhomogeneous Electron Gas</h3>
      <p>P. Hohenberg and W. Kohn · Physical Review (1964). The first Hohenberg–Kohn theorem establishes the density as a sufficient ground-state variable.</p>
      <a href="https://doi.org/10.1103/PhysRev.136.B864" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Kohn–Sham theory</span>
      <h3>Self-Consistent Equations Including Exchange and Correlation Effects</h3>
      <p>W. Kohn and L. J. Sham · Physical Review (1965). The practical construction underlying most modern density-functional calculations.</p>
      <a href="https://doi.org/10.1103/PhysRev.140.A1133" target="_blank" rel="noopener">Open DOI →</a>
    </article>
  </div>
</section>
{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-interactive.js" defer></script>
