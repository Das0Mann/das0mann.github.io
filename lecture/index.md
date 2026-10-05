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

          <path id="diabatic-1" class="diabatic-line" d="M58.00 55.62 L60.61 56.56 L63.22 57.51 L65.83 58.46 L68.44 59.41 L71.06 60.36 L73.67 61.31 L76.28 62.26 L78.89 63.21 L81.50 64.15 L84.11 65.10 L86.72 66.05 L89.33 67.00 L91.94 67.95 L94.56 68.90 L97.17 69.85 L99.78 70.79 L102.39 71.74 L105.00 72.69 L107.61 73.64 L110.22 74.59 L112.83 75.54 L115.44 76.49 L118.06 77.44 L120.67 78.38 L123.28 79.33 L125.89 80.28 L128.50 81.23 L131.11 82.18 L133.72 83.13 L136.33 84.08 L138.94 85.03 L141.56 85.97 L144.17 86.92 L146.78 87.87 L149.39 88.82 L152.00 89.77 L154.61 90.72 L157.22 91.67 L159.83 92.62 L162.44 93.56 L165.06 94.51 L167.67 95.46 L170.28 96.41 L172.89 97.36 L175.50 98.31 L178.11 99.26 L180.72 100.21 L183.33 101.15 L185.94 102.10 L188.56 103.05 L191.17 104.00 L193.78 104.95 L196.39 105.90 L199.00 106.85 L201.61 107.79 L204.22 108.74 L206.83 109.69 L209.44 110.64 L212.06 111.59 L214.67 112.54 L217.28 113.49 L219.89 114.44 L222.50 115.38 L225.11 116.33 L227.72 117.28 L230.33 118.23 L232.94 119.18 L235.56 120.13 L238.17 121.08 L240.78 122.03 L243.39 122.97 L246.00 123.92 L248.61 124.87 L251.22 125.82 L253.83 126.77 L256.44 127.72 L259.06 128.67 L261.67 129.62 L264.28 130.56 L266.89 131.51 L269.50 132.46 L272.11 133.41 L274.72 134.36 L277.33 135.31 L279.94 136.26 L282.56 137.21 L285.17 138.15 L287.78 139.10 L290.39 140.05 L293.00 141.00 L295.61 141.95 L298.22 142.90 L300.83 143.85 L303.44 144.79 L306.06 145.74 L308.67 146.69 L311.28 147.64 L313.89 148.59 L316.50 149.54 L319.11 150.49 L321.72 151.44 L324.33 152.38 L326.94 153.33 L329.56 154.28 L332.17 155.23 L334.78 156.18 L337.39 157.13 L340.00 158.08 L342.61 159.03 L345.22 159.97 L347.83 160.92 L350.44 161.87 L353.06 162.82 L355.67 163.77 L358.28 164.72 L360.89 165.67 L363.50 166.62 L366.11 167.56 L368.72 168.51 L371.33 169.46 L373.94 170.41 L376.56 171.36 L379.17 172.31 L381.78 173.26 L384.39 174.21 L387.00 175.15 L389.61 176.10 L392.22 177.05 L394.83 178.00 L397.44 178.95 L400.06 179.90 L402.67 180.85 L405.28 181.79 L407.89 182.74 L410.50 183.69 L413.11 184.64 L415.72 185.59 L418.33 186.54 L420.94 187.49 L423.56 188.44 L426.17 189.38 L428.78 190.33 L431.39 191.28 L434.00 192.23 L436.61 193.18 L439.22 194.13 L441.83 195.08 L444.44 196.03 L447.06 196.97 L449.67 197.92 L452.28 198.87 L454.89 199.82 L457.50 200.77 L460.11 201.72 L462.72 202.67 L465.33 203.62 L467.94 204.56 L470.56 205.51 L473.17 206.46 L475.78 207.41 L478.39 208.36 L481.00 209.31 L483.61 210.26 L486.22 211.21 L488.83 212.15 L491.44 213.10 L494.06 214.05 L496.67 215.00 L499.28 215.95 L501.89 216.90 L504.50 217.85 L507.11 218.79 L509.72 219.74 L512.33 220.69 L514.94 221.64 L517.56 222.59 L520.17 223.54 L522.78 224.49 L525.39 225.44 L528.00 226.38"/>
          <path id="diabatic-2" class="diabatic-line" d="M58.00 226.38 L60.61 225.44 L63.22 224.49 L65.83 223.54 L68.44 222.59 L71.06 221.64 L73.67 220.69 L76.28 219.74 L78.89 218.79 L81.50 217.85 L84.11 216.90 L86.72 215.95 L89.33 215.00 L91.94 214.05 L94.56 213.10 L97.17 212.15 L99.78 211.21 L102.39 210.26 L105.00 209.31 L107.61 208.36 L110.22 207.41 L112.83 206.46 L115.44 205.51 L118.06 204.56 L120.67 203.62 L123.28 202.67 L125.89 201.72 L128.50 200.77 L131.11 199.82 L133.72 198.87 L136.33 197.92 L138.94 196.97 L141.56 196.03 L144.17 195.08 L146.78 194.13 L149.39 193.18 L152.00 192.23 L154.61 191.28 L157.22 190.33 L159.83 189.38 L162.44 188.44 L165.06 187.49 L167.67 186.54 L170.28 185.59 L172.89 184.64 L175.50 183.69 L178.11 182.74 L180.72 181.79 L183.33 180.85 L185.94 179.90 L188.56 178.95 L191.17 178.00 L193.78 177.05 L196.39 176.10 L199.00 175.15 L201.61 174.21 L204.22 173.26 L206.83 172.31 L209.44 171.36 L212.06 170.41 L214.67 169.46 L217.28 168.51 L219.89 167.56 L222.50 166.62 L225.11 165.67 L227.72 164.72 L230.33 163.77 L232.94 162.82 L235.56 161.87 L238.17 160.92 L240.78 159.97 L243.39 159.03 L246.00 158.08 L248.61 157.13 L251.22 156.18 L253.83 155.23 L256.44 154.28 L259.06 153.33 L261.67 152.38 L264.28 151.44 L266.89 150.49 L269.50 149.54 L272.11 148.59 L274.72 147.64 L277.33 146.69 L279.94 145.74 L282.56 144.79 L285.17 143.85 L287.78 142.90 L290.39 141.95 L293.00 141.00 L295.61 140.05 L298.22 139.10 L300.83 138.15 L303.44 137.21 L306.06 136.26 L308.67 135.31 L311.28 134.36 L313.89 133.41 L316.50 132.46 L319.11 131.51 L321.72 130.56 L324.33 129.62 L326.94 128.67 L329.56 127.72 L332.17 126.77 L334.78 125.82 L337.39 124.87 L340.00 123.92 L342.61 122.97 L345.22 122.03 L347.83 121.08 L350.44 120.13 L353.06 119.18 L355.67 118.23 L358.28 117.28 L360.89 116.33 L363.50 115.38 L366.11 114.44 L368.72 113.49 L371.33 112.54 L373.94 111.59 L376.56 110.64 L379.17 109.69 L381.78 108.74 L384.39 107.79 L387.00 106.85 L389.61 105.90 L392.22 104.95 L394.83 104.00 L397.44 103.05 L400.06 102.10 L402.67 101.15 L405.28 100.21 L407.89 99.26 L410.50 98.31 L413.11 97.36 L415.72 96.41 L418.33 95.46 L420.94 94.51 L423.56 93.56 L426.17 92.62 L428.78 91.67 L431.39 90.72 L434.00 89.77 L436.61 88.82 L439.22 87.87 L441.83 86.92 L444.44 85.97 L447.06 85.03 L449.67 84.08 L452.28 83.13 L454.89 82.18 L457.50 81.23 L460.11 80.28 L462.72 79.33 L465.33 78.38 L467.94 77.44 L470.56 76.49 L473.17 75.54 L475.78 74.59 L478.39 73.64 L481.00 72.69 L483.61 71.74 L486.22 70.79 L488.83 69.85 L491.44 68.90 L494.06 67.95 L496.67 67.00 L499.28 66.05 L501.89 65.10 L504.50 64.15 L507.11 63.21 L509.72 62.26 L512.33 61.31 L514.94 60.36 L517.56 59.41 L520.17 58.46 L522.78 57.51 L525.39 56.56 L528.00 55.62"/>
          <path id="adiabatic-minus" class="adiabatic-line lower-line" d="M58.00 229.01 L60.61 228.09 L63.22 227.17 L65.83 226.25 L68.44 225.34 L71.06 224.42 L73.67 223.50 L76.28 222.59 L78.89 221.67 L81.50 220.76 L84.11 219.84 L86.72 218.93 L89.33 218.02 L91.94 217.11 L94.56 216.20 L97.17 215.29 L99.78 214.38 L102.39 213.47 L105.00 212.57 L107.61 211.66 L110.22 210.76 L112.83 209.85 L115.44 208.95 L118.06 208.05 L120.67 207.15 L123.28 206.26 L125.89 205.36 L128.50 204.47 L131.11 203.57 L133.72 202.68 L136.33 201.79 L138.94 200.91 L141.56 200.02 L144.17 199.14 L146.78 198.26 L149.39 197.38 L152.00 196.50 L154.61 195.63 L157.22 194.75 L159.83 193.88 L162.44 193.02 L165.06 192.15 L167.67 191.29 L170.28 190.44 L172.89 189.58 L175.50 188.73 L178.11 187.88 L180.72 187.04 L183.33 186.20 L185.94 185.37 L188.56 184.54 L191.17 183.72 L193.78 182.90 L196.39 182.08 L199.00 181.28 L201.61 180.47 L204.22 179.68 L206.83 178.89 L209.44 178.11 L212.06 177.34 L214.67 176.58 L217.28 175.82 L219.89 175.08 L222.50 174.34 L225.11 173.62 L227.72 172.91 L230.33 172.21 L232.94 171.53 L235.56 170.85 L238.17 170.20 L240.78 169.56 L243.39 168.94 L246.00 168.34 L248.61 167.75 L251.22 167.19 L253.83 166.65 L256.44 166.14 L259.06 165.65 L261.67 165.19 L264.28 164.76 L266.89 164.36 L269.50 163.99 L272.11 163.66 L274.72 163.36 L277.33 163.09 L279.94 162.87 L282.56 162.68 L285.17 162.54 L287.78 162.43 L290.39 162.37 L293.00 162.35 L295.61 162.37 L298.22 162.43 L300.83 162.54 L303.44 162.68 L306.06 162.87 L308.67 163.09 L311.28 163.36 L313.89 163.66 L316.50 163.99 L319.11 164.36 L321.72 164.76 L324.33 165.19 L326.94 165.65 L329.56 166.14 L332.17 166.65 L334.78 167.19 L337.39 167.75 L340.00 168.34 L342.61 168.94 L345.22 169.56 L347.83 170.20 L350.44 170.85 L353.06 171.53 L355.67 172.21 L358.28 172.91 L360.89 173.62 L363.50 174.34 L366.11 175.08 L368.72 175.82 L371.33 176.58 L373.94 177.34 L376.56 178.11 L379.17 178.89 L381.78 179.68 L384.39 180.47 L387.00 181.28 L389.61 182.08 L392.22 182.90 L394.83 183.72 L397.44 184.54 L400.06 185.37 L402.67 186.20 L405.28 187.04 L407.89 187.88 L410.50 188.73 L413.11 189.58 L415.72 190.44 L418.33 191.29 L420.94 192.15 L423.56 193.02 L426.17 193.88 L428.78 194.75 L431.39 195.63 L434.00 196.50 L436.61 197.38 L439.22 198.26 L441.83 199.14 L444.44 200.02 L447.06 200.91 L449.67 201.79 L452.28 202.68 L454.89 203.57 L457.50 204.47 L460.11 205.36 L462.72 206.26 L465.33 207.15 L467.94 208.05 L470.56 208.95 L473.17 209.85 L475.78 210.76 L478.39 211.66 L481.00 212.57 L483.61 213.47 L486.22 214.38 L488.83 215.29 L491.44 216.20 L494.06 217.11 L496.67 218.02 L499.28 218.93 L501.89 219.84 L504.50 220.76 L507.11 221.67 L509.72 222.59 L512.33 223.50 L514.94 224.42 L517.56 225.34 L520.17 226.25 L522.78 227.17 L525.39 228.09 L528.00 229.01"/>
          <path id="adiabatic-plus" class="adiabatic-line upper-line" d="M58.00 52.99 L60.61 53.91 L63.22 54.83 L65.83 55.75 L68.44 56.66 L71.06 57.58 L73.67 58.50 L76.28 59.41 L78.89 60.33 L81.50 61.24 L84.11 62.16 L86.72 63.07 L89.33 63.98 L91.94 64.89 L94.56 65.80 L97.17 66.71 L99.78 67.62 L102.39 68.53 L105.00 69.43 L107.61 70.34 L110.22 71.24 L112.83 72.15 L115.44 73.05 L118.06 73.95 L120.67 74.85 L123.28 75.74 L125.89 76.64 L128.50 77.53 L131.11 78.43 L133.72 79.32 L136.33 80.21 L138.94 81.09 L141.56 81.98 L144.17 82.86 L146.78 83.74 L149.39 84.62 L152.00 85.50 L154.61 86.37 L157.22 87.25 L159.83 88.12 L162.44 88.98 L165.06 89.85 L167.67 90.71 L170.28 91.56 L172.89 92.42 L175.50 93.27 L178.11 94.12 L180.72 94.96 L183.33 95.80 L185.94 96.63 L188.56 97.46 L191.17 98.28 L193.78 99.10 L196.39 99.92 L199.00 100.72 L201.61 101.53 L204.22 102.32 L206.83 103.11 L209.44 103.89 L212.06 104.66 L214.67 105.42 L217.28 106.18 L219.89 106.92 L222.50 107.66 L225.11 108.38 L227.72 109.09 L230.33 109.79 L232.94 110.47 L235.56 111.15 L238.17 111.80 L240.78 112.44 L243.39 113.06 L246.00 113.66 L248.61 114.25 L251.22 114.81 L253.83 115.35 L256.44 115.86 L259.06 116.35 L261.67 116.81 L264.28 117.24 L266.89 117.64 L269.50 118.01 L272.11 118.34 L274.72 118.64 L277.33 118.91 L279.94 119.13 L282.56 119.32 L285.17 119.46 L287.78 119.57 L290.39 119.63 L293.00 119.65 L295.61 119.63 L298.22 119.57 L300.83 119.46 L303.44 119.32 L306.06 119.13 L308.67 118.91 L311.28 118.64 L313.89 118.34 L316.50 118.01 L319.11 117.64 L321.72 117.24 L324.33 116.81 L326.94 116.35 L329.56 115.86 L332.17 115.35 L334.78 114.81 L337.39 114.25 L340.00 113.66 L342.61 113.06 L345.22 112.44 L347.83 111.80 L350.44 111.15 L353.06 110.47 L355.67 109.79 L358.28 109.09 L360.89 108.38 L363.50 107.66 L366.11 106.92 L368.72 106.18 L371.33 105.42 L373.94 104.66 L376.56 103.89 L379.17 103.11 L381.78 102.32 L384.39 101.53 L387.00 100.72 L389.61 99.92 L392.22 99.10 L394.83 98.28 L397.44 97.46 L400.06 96.63 L402.67 95.80 L405.28 94.96 L407.89 94.12 L410.50 93.27 L413.11 92.42 L415.72 91.56 L418.33 90.71 L420.94 89.85 L423.56 88.98 L426.17 88.12 L428.78 87.25 L431.39 86.37 L434.00 85.50 L436.61 84.62 L439.22 83.74 L441.83 82.86 L444.44 81.98 L447.06 81.09 L449.67 80.21 L452.28 79.32 L454.89 78.43 L457.50 77.53 L460.11 76.64 L462.72 75.74 L465.33 74.85 L467.94 73.95 L470.56 73.05 L473.17 72.15 L475.78 71.24 L478.39 70.34 L481.00 69.43 L483.61 68.53 L486.22 67.62 L488.83 66.71 L491.44 65.80 L494.06 64.89 L496.67 63.98 L499.28 63.07 L501.89 62.16 L504.50 61.24 L507.11 60.33 L509.72 59.41 L512.33 58.50 L514.94 57.58 L517.56 56.66 L520.17 55.75 L522.78 54.83 L525.39 53.91 L528.00 52.99"/>
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
          <path id="singlet-path" class="population-line singlet-line" d="M58.00 35.00 L59.31 35.23 L60.62 35.93 L61.93 37.09 L63.24 38.71 L64.56 40.78 L65.87 43.29 L67.18 46.22 L68.49 49.56 L69.80 53.31 L71.11 57.42 L72.42 61.90 L73.73 66.71 L75.04 71.84 L76.36 77.25 L77.67 82.92 L78.98 88.83 L80.29 94.94 L81.60 101.23 L82.91 107.66 L84.22 114.21 L85.53 120.83 L86.84 127.50 L88.16 134.20 L89.47 140.87 L90.78 147.49 L92.09 154.04 L93.40 160.47 L94.71 166.76 L96.02 172.87 L97.33 178.77 L98.64 184.45 L99.96 189.86 L101.27 194.99 L102.58 199.80 L103.89 204.28 L105.20 208.39 L106.51 212.14 L107.82 215.48 L109.13 218.41 L110.44 220.92 L111.76 222.99 L113.07 224.61 L114.38 225.77 L115.69 226.47 L117.00 226.70 L118.31 226.47 L119.62 225.77 L120.93 224.61 L122.24 222.99 L123.56 220.92 L124.87 218.41 L126.18 215.48 L127.49 212.14 L128.80 208.39 L130.11 204.28 L131.42 199.80 L132.73 194.99 L134.04 189.86 L135.36 184.45 L136.67 178.77 L137.98 172.87 L139.29 166.76 L140.60 160.47 L141.91 154.04 L143.22 147.49 L144.53 140.87 L145.84 134.20 L147.16 127.50 L148.47 120.83 L149.78 114.21 L151.09 107.66 L152.40 101.23 L153.71 94.94 L155.02 88.83 L156.33 82.92 L157.64 77.25 L158.96 71.84 L160.27 66.71 L161.58 61.90 L162.89 57.42 L164.20 53.31 L165.51 49.56 L166.82 46.22 L168.13 43.29 L169.44 40.78 L170.76 38.71 L172.07 37.09 L173.38 35.93 L174.69 35.23 L176.00 35.00 L177.31 35.23 L178.62 35.93 L179.93 37.09 L181.24 38.71 L182.56 40.78 L183.87 43.29 L185.18 46.22 L186.49 49.56 L187.80 53.31 L189.11 57.42 L190.42 61.90 L191.73 66.71 L193.04 71.84 L194.36 77.25 L195.67 82.93 L196.98 88.83 L198.29 94.94 L199.60 101.23 L200.91 107.66 L202.22 114.21 L203.53 120.83 L204.84 127.50 L206.16 134.20 L207.47 140.87 L208.78 147.49 L210.09 154.04 L211.40 160.47 L212.71 166.76 L214.02 172.87 L215.33 178.77 L216.64 184.45 L217.96 189.86 L219.27 194.99 L220.58 199.80 L221.89 204.28 L223.20 208.39 L224.51 212.14 L225.82 215.48 L227.13 218.41 L228.44 220.92 L229.76 222.99 L231.07 224.61 L232.38 225.77 L233.69 226.47 L235.00 226.70 L236.31 226.47 L237.62 225.77 L238.93 224.61 L240.24 222.99 L241.56 220.92 L242.87 218.41 L244.18 215.48 L245.49 212.14 L246.80 208.39 L248.11 204.28 L249.42 199.80 L250.73 194.99 L252.04 189.86 L253.36 184.45 L254.67 178.77 L255.98 172.87 L257.29 166.76 L258.60 160.47 L259.91 154.04 L261.22 147.49 L262.53 140.87 L263.84 134.20 L265.16 127.50 L266.47 120.83 L267.78 114.21 L269.09 107.66 L270.40 101.23 L271.71 94.94 L273.02 88.83 L274.33 82.93 L275.64 77.25 L276.96 71.84 L278.27 66.71 L279.58 61.90 L280.89 57.42 L282.20 53.31 L283.51 49.56 L284.82 46.22 L286.13 43.29 L287.44 40.78 L288.76 38.71 L290.07 37.09 L291.38 35.93 L292.69 35.23 L294.00 35.00 L295.31 35.23 L296.62 35.93 L297.93 37.09 L299.24 38.71 L300.56 40.78 L301.87 43.29 L303.18 46.22 L304.49 49.56 L305.80 53.31 L307.11 57.42 L308.42 61.90 L309.73 66.71 L311.04 71.84 L312.36 77.25 L313.67 82.93 L314.98 88.83 L316.29 94.94 L317.60 101.23 L318.91 107.66 L320.22 114.21 L321.53 120.83 L322.84 127.50 L324.16 134.20 L325.47 140.87 L326.78 147.49 L328.09 154.04 L329.40 160.47 L330.71 166.76 L332.02 172.87 L333.33 178.78 L334.64 184.45 L335.96 189.86 L337.27 194.99 L338.58 199.80 L339.89 204.28 L341.20 208.39 L342.51 212.14 L343.82 215.48 L345.13 218.41 L346.44 220.92 L347.76 222.99 L349.07 224.61 L350.38 225.77 L351.69 226.47 L353.00 226.70 L354.31 226.47 L355.62 225.77 L356.93 224.61 L358.24 222.99 L359.56 220.92 L360.87 218.41 L362.18 215.48 L363.49 212.14 L364.80 208.39 L366.11 204.28 L367.42 199.80 L368.73 194.99 L370.04 189.86 L371.36 184.45 L372.67 178.78 L373.98 172.87 L375.29 166.76 L376.60 160.47 L377.91 154.04 L379.22 147.49 L380.53 140.87 L381.84 134.20 L383.16 127.50 L384.47 120.83 L385.78 114.21 L387.09 107.66 L388.40 101.23 L389.71 94.94 L391.02 88.83 L392.33 82.92 L393.64 77.25 L394.96 71.84 L396.27 66.71 L397.58 61.90 L398.89 57.42 L400.20 53.31 L401.51 49.56 L402.82 46.22 L404.13 43.29 L405.44 40.78 L406.76 38.71 L408.07 37.09 L409.38 35.93 L410.69 35.23 L412.00 35.00 L413.31 35.23 L414.62 35.93 L415.93 37.09 L417.24 38.71 L418.56 40.78 L419.87 43.29 L421.18 46.22 L422.49 49.56 L423.80 53.31 L425.11 57.42 L426.42 61.90 L427.73 66.71 L429.04 71.84 L430.36 77.25 L431.67 82.93 L432.98 88.83 L434.29 94.94 L435.60 101.23 L436.91 107.66 L438.22 114.21 L439.53 120.83 L440.84 127.50 L442.16 134.20 L443.47 140.87 L444.78 147.49 L446.09 154.04 L447.40 160.47 L448.71 166.76 L450.02 172.87 L451.33 178.77 L452.64 184.45 L453.96 189.86 L455.27 194.99 L456.58 199.80 L457.89 204.28 L459.20 208.39 L460.51 212.14 L461.82 215.48 L463.13 218.41 L464.44 220.92 L465.76 222.99 L467.07 224.61 L468.38 225.77 L469.69 226.47 L471.00 226.70 L472.31 226.47 L473.62 225.77 L474.93 224.61 L476.24 222.99 L477.56 220.92 L478.87 218.41 L480.18 215.48 L481.49 212.14 L482.80 208.39 L484.11 204.28 L485.42 199.80 L486.73 194.99 L488.04 189.86 L489.36 184.45 L490.67 178.78 L491.98 172.87 L493.29 166.76 L494.60 160.47 L495.91 154.04 L497.22 147.49 L498.53 140.87 L499.84 134.20 L501.16 127.50 L502.47 120.83 L503.78 114.21 L505.09 107.66 L506.40 101.23 L507.71 94.94 L509.02 88.83 L510.33 82.92 L511.64 77.25 L512.96 71.84 L514.27 66.71 L515.58 61.90 L516.89 57.42 L518.20 53.31 L519.51 49.56 L520.82 46.22 L522.13 43.29 L523.44 40.78 L524.76 38.71 L526.07 37.09 L527.38 35.93 L528.69 35.23 L530.00 35.00"/>
          <path id="triplet-path" class="population-line triplet-line" d="M58.00 248.00 L59.31 247.77 L60.62 247.07 L61.93 245.91 L63.24 244.29 L64.56 242.22 L65.87 239.71 L67.18 236.78 L68.49 233.44 L69.80 229.69 L71.11 225.58 L72.42 221.10 L73.73 216.29 L75.04 211.16 L76.36 205.75 L77.67 200.08 L78.98 194.17 L80.29 188.06 L81.60 181.77 L82.91 175.34 L84.22 168.79 L85.53 162.17 L86.84 155.50 L88.16 148.80 L89.47 142.13 L90.78 135.51 L92.09 128.96 L93.40 122.53 L94.71 116.24 L96.02 110.13 L97.33 104.23 L98.64 98.55 L99.96 93.14 L101.27 88.01 L102.58 83.20 L103.89 78.72 L105.20 74.61 L106.51 70.86 L107.82 67.52 L109.13 64.59 L110.44 62.08 L111.76 60.01 L113.07 58.39 L114.38 57.23 L115.69 56.53 L117.00 56.30 L118.31 56.53 L119.62 57.23 L120.93 58.39 L122.24 60.01 L123.56 62.08 L124.87 64.59 L126.18 67.52 L127.49 70.86 L128.80 74.61 L130.11 78.72 L131.42 83.20 L132.73 88.01 L134.04 93.14 L135.36 98.55 L136.67 104.23 L137.98 110.13 L139.29 116.24 L140.60 122.53 L141.91 128.96 L143.22 135.51 L144.53 142.13 L145.84 148.80 L147.16 155.50 L148.47 162.17 L149.78 168.79 L151.09 175.34 L152.40 181.77 L153.71 188.06 L155.02 194.17 L156.33 200.08 L157.64 205.75 L158.96 211.16 L160.27 216.29 L161.58 221.10 L162.89 225.58 L164.20 229.69 L165.51 233.44 L166.82 236.78 L168.13 239.71 L169.44 242.22 L170.76 244.29 L172.07 245.91 L173.38 247.07 L174.69 247.77 L176.00 248.00 L177.31 247.77 L178.62 247.07 L179.93 245.91 L181.24 244.29 L182.56 242.22 L183.87 239.71 L185.18 236.78 L186.49 233.44 L187.80 229.69 L189.11 225.58 L190.42 221.10 L191.73 216.29 L193.04 211.16 L194.36 205.75 L195.67 200.07 L196.98 194.17 L198.29 188.06 L199.60 181.77 L200.91 175.34 L202.22 168.79 L203.53 162.17 L204.84 155.50 L206.16 148.80 L207.47 142.13 L208.78 135.51 L210.09 128.96 L211.40 122.53 L212.71 116.24 L214.02 110.13 L215.33 104.23 L216.64 98.55 L217.96 93.14 L219.27 88.01 L220.58 83.20 L221.89 78.72 L223.20 74.61 L224.51 70.86 L225.82 67.52 L227.13 64.59 L228.44 62.08 L229.76 60.01 L231.07 58.39 L232.38 57.23 L233.69 56.53 L235.00 56.30 L236.31 56.53 L237.62 57.23 L238.93 58.39 L240.24 60.01 L241.56 62.08 L242.87 64.59 L244.18 67.52 L245.49 70.86 L246.80 74.61 L248.11 78.72 L249.42 83.20 L250.73 88.01 L252.04 93.14 L253.36 98.55 L254.67 104.23 L255.98 110.13 L257.29 116.24 L258.60 122.53 L259.91 128.96 L261.22 135.51 L262.53 142.13 L263.84 148.80 L265.16 155.50 L266.47 162.17 L267.78 168.79 L269.09 175.34 L270.40 181.77 L271.71 188.06 L273.02 194.17 L274.33 200.07 L275.64 205.75 L276.96 211.16 L278.27 216.29 L279.58 221.10 L280.89 225.58 L282.20 229.69 L283.51 233.44 L284.82 236.78 L286.13 239.71 L287.44 242.22 L288.76 244.29 L290.07 245.91 L291.38 247.07 L292.69 247.77 L294.00 248.00 L295.31 247.77 L296.62 247.07 L297.93 245.91 L299.24 244.29 L300.56 242.22 L301.87 239.71 L303.18 236.78 L304.49 233.44 L305.80 229.69 L307.11 225.58 L308.42 221.10 L309.73 216.29 L311.04 211.16 L312.36 205.75 L313.67 200.07 L314.98 194.17 L316.29 188.06 L317.60 181.77 L318.91 175.34 L320.22 168.79 L321.53 162.17 L322.84 155.50 L324.16 148.80 L325.47 142.13 L326.78 135.51 L328.09 128.96 L329.40 122.53 L330.71 116.24 L332.02 110.13 L333.33 104.22 L334.64 98.55 L335.96 93.14 L337.27 88.01 L338.58 83.20 L339.89 78.72 L341.20 74.61 L342.51 70.86 L343.82 67.52 L345.13 64.59 L346.44 62.08 L347.76 60.01 L349.07 58.39 L350.38 57.23 L351.69 56.53 L353.00 56.30 L354.31 56.53 L355.62 57.23 L356.93 58.39 L358.24 60.01 L359.56 62.08 L360.87 64.59 L362.18 67.52 L363.49 70.86 L364.80 74.61 L366.11 78.72 L367.42 83.20 L368.73 88.01 L370.04 93.14 L371.36 98.55 L372.67 104.22 L373.98 110.13 L375.29 116.24 L376.60 122.53 L377.91 128.96 L379.22 135.51 L380.53 142.13 L381.84 148.80 L383.16 155.50 L384.47 162.17 L385.78 168.79 L387.09 175.34 L388.40 181.77 L389.71 188.06 L391.02 194.17 L392.33 200.08 L393.64 205.75 L394.96 211.16 L396.27 216.29 L397.58 221.10 L398.89 225.58 L400.20 229.69 L401.51 233.44 L402.82 236.78 L404.13 239.71 L405.44 242.22 L406.76 244.29 L408.07 245.91 L409.38 247.07 L410.69 247.77 L412.00 248.00 L413.31 247.77 L414.62 247.07 L415.93 245.91 L417.24 244.29 L418.56 242.22 L419.87 239.71 L421.18 236.78 L422.49 233.44 L423.80 229.69 L425.11 225.58 L426.42 221.10 L427.73 216.29 L429.04 211.16 L430.36 205.75 L431.67 200.07 L432.98 194.17 L434.29 188.06 L435.60 181.77 L436.91 175.34 L438.22 168.79 L439.53 162.17 L440.84 155.50 L442.16 148.80 L443.47 142.13 L444.78 135.51 L446.09 128.96 L447.40 122.53 L448.71 116.24 L450.02 110.13 L451.33 104.23 L452.64 98.55 L453.96 93.14 L455.27 88.01 L456.58 83.20 L457.89 78.72 L459.20 74.61 L460.51 70.86 L461.82 67.52 L463.13 64.59 L464.44 62.08 L465.76 60.01 L467.07 58.39 L468.38 57.23 L469.69 56.53 L471.00 56.30 L472.31 56.53 L473.62 57.23 L474.93 58.39 L476.24 60.01 L477.56 62.08 L478.87 64.59 L480.18 67.52 L481.49 70.86 L482.80 74.61 L484.11 78.72 L485.42 83.20 L486.73 88.01 L488.04 93.14 L489.36 98.55 L490.67 104.22 L491.98 110.13 L493.29 116.24 L494.60 122.53 L495.91 128.96 L497.22 135.51 L498.53 142.13 L499.84 148.80 L501.16 155.50 L502.47 162.17 L503.78 168.79 L505.09 175.34 L506.40 181.77 L507.71 188.06 L509.02 194.17 L510.33 200.08 L511.64 205.75 L512.96 211.16 L514.27 216.29 L515.58 221.10 L516.89 225.58 L518.20 229.69 L519.51 233.44 L520.82 236.78 L522.13 239.71 L523.44 242.22 L524.76 244.29 L526.07 245.91 L527.38 247.07 L528.69 247.77 L530.00 248.00"/>
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
