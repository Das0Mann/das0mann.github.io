---
layout: page
title: Electron Transfer & Marcus Theory
excerpt: "From free-energy surfaces and electronic coupling to quantitative rates"
permalink: /lecture/electron-transfer/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 06</span>
  <h2>How fast does an electron move from donor to acceptor?</h2>
  <p>Electron transfer sits exactly at the interface between electronic structure, nuclear motion and kinetics. The electronic states tell us where the electron can be; the environment controls how costly it is to reorganize; the coupling determines how efficiently the two states communicate.</p>
</header>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Diabatic states</p><h2>Define donor and acceptor states before you talk about a rate</h2></div>
  </div>

  <p>For an electron-transfer problem it is often useful to work with diabatic states: states whose charge localization retains a clear chemical meaning as the nuclei move. Schematically,</p>

  <div class="lecture-equation">
  \[
  \lvert D\rangle
  \rightleftharpoons
  \lvert A\rangle.
  \]
  </div>

  <p>The two diabatic states are coupled by an electronic matrix element, often written \(V\) or \(H_{DA}\):</p>

  <div class="lecture-equation">
  \[
  H_\mathrm{dia}
  =
  \begin{pmatrix}
  E_D & V\\
  V & E_A
  \end{pmatrix}.
  \]
  </div>

  <p>Weak coupling gives predominantly localized donor and acceptor states and leads naturally to a nonadiabatic golden-rule description. Strong coupling mixes the states substantially and can push the problem toward the adiabatic regime.</p>

  <aside class="teacher-note">
    <strong>A practical warning:</strong>
    <span>“The coupling” is not always uniquely defined unless you also say how the diabatic states were constructed. Different diabatization procedures can assign slightly different \(V\) values.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Reorganization</p><h2>The nuclei have to rearrange too</h2></div>
  </div>

  <p>When an electron moves, the preferred nuclear geometry and solvent polarization generally change. Marcus theory collects that energetic cost into the reorganization energy \(\lambda\).</p>

  <div class="method-ladder">
    <div><span>Inner-sphere reorganization</span><p>Changes in bond lengths, angles and intramolecular vibrational coordinates of donor and acceptor.</p></div>
    <div><span>Outer-sphere reorganization</span><p>Reorientation and polarization of the surrounding solvent, protein or dielectric environment.</p></div>
  </div>

  <p>The reaction driving force is the standard free-energy change \(\Delta G^\circ\). With the usual sign convention, a negative \(\Delta G^\circ\) means the electron-transfer reaction is thermodynamically downhill.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Marcus surfaces</p><h2>Two parabolas are enough to understand the barrier</h2></div>
  </div>

  <p>Classical Marcus theory approximates the reactant and product free-energy surfaces as harmonic functions of an effective solvent or nuclear reaction coordinate. The activation free energy is</p>

  <div class="lecture-equation">
  \[
  \Delta G^\ddagger
  =
  \frac{(\lambda+\Delta G^\circ)^2}{4\lambda}.
  \]
  </div>

  <p>This equation already contains the central result. As the reaction becomes more exergonic, the barrier first becomes smaller. It vanishes when \(\Delta G^\circ=-\lambda\). If the reaction is made even more exergonic, the barrier grows again: the Marcus inverted region.</p>

  <div class="timescale-strip">
    <div><strong>Normal region</strong><span>\(\Delta G^\circ>-\lambda\)</span><p>Making the reaction more exergonic lowers the activation barrier.</p></div>
    <div><strong>Activationless point</strong><span>\(\Delta G^\circ=-\lambda\)</span><p>The classical activation barrier reaches zero.</p></div>
    <div><strong>Inverted region</strong><span>\(\Delta G^\circ<-\lambda\)</span><p>More negative driving force now increases the barrier again.</p></div>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Rate theory</p><h2>The standard nonadiabatic Marcus rate</h2></div>
  </div>

  <p>In the weak-coupling, classical high-temperature limit, the electron-transfer rate is</p>

  <div class="lecture-equation">
  \[
  k_\mathrm{ET}
  =
  \frac{2\pi}{\hbar}|V|^2
  \frac{1}{\sqrt{4\pi\lambda k_BT}}
  \exp\!\left[
  -\frac{(\Delta G^\circ+\lambda)^2}
  {4\lambda k_BT}
  \right].
  \]
  </div>

  <p>The rate depends quadratically on the electronic coupling \(V\), exponentially on the activation free energy, and only more gently on temperature through the prefactor and Boltzmann factor.</p>

  <div class="interactive-card" id="marcus-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Marcus-rate explorer</h3></div>
      <span class="interactive-model-note">nonadiabatic classical limit</span>
    </div>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>set \(\Delta G^\circ=-\lambda\) to reach the activationless point. Then make \(\Delta G^\circ\) more negative and watch the rate fall again in the inverted region.</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="marcus-lambda"><span class="control-name">Reorganization energy \(\lambda\)</span><output id="marcus-lambda-out">0.70 eV</output></label>
        <input id="marcus-lambda" type="range" min="0.10" max="2.50" step="0.01" value="0.70">

        <label for="marcus-dg"><span class="control-name">Driving force \(\Delta G^\circ\)</span><output id="marcus-dg-out">−0.50 eV</output></label>
        <input id="marcus-dg" type="range" min="-3.00" max="1.00" step="0.01" value="-0.50">

        <label for="marcus-v"><span class="control-name">Electronic coupling \(V\)</span><output id="marcus-v-out">10.0 meV</output></label>
        <input id="marcus-v" type="range" min="0.1" max="100" step="0.1" value="10">

        <label for="marcus-temp"><span class="control-name">Temperature \(T\)</span><output id="marcus-temp-out">300 K</output></label>
        <input id="marcus-temp" type="range" min="200" max="400" step="1" value="300">

        <div class="demo-presets">
          <button type="button" data-marcus-mode="normal">normal</button>
          <button type="button" data-marcus-mode="activationless">activationless</button>
          <button type="button" data-marcus-mode="inverted">inverted</button>
        </div>

        <div class="interactive-readout">
          <span>Activation barrier <strong id="marcus-barrier-out">0.014 eV</strong></span>
          <span>Rate <strong id="marcus-rate-out">—</strong></span>
          <span>Regime <strong id="marcus-regime-out">normal</strong></span>
        </div>

        <p id="marcus-explanation" class="demo-explanation">The current driving force is exergonic but not yet beyond the activationless point.</p>
      </div>

      <div class="plot-wrap">
        <svg id="marcus-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="Marcus electron-transfer rate versus driving force">
          <line x1="58" y1="248" x2="530" y2="248" class="plot-axis"/>
          <line x1="58" y1="35" x2="58" y2="248" class="plot-axis"/>
          <text x="464" y="278" class="svg-caption">ΔG° / eV</text>
          <text x="11" y="38" class="svg-caption">log₁₀ k / s⁻¹</text>
          <text x="54" y="267" class="svg-tick">−3</text>
          <text x="283" y="267" class="svg-tick">−1</text>
          <text x="522" y="267" class="svg-tick">1</text>
          <text id="marcus-y-max" x="31" y="39" class="svg-tick">14</text>
          <text id="marcus-y-min" x="31" y="249" class="svg-tick">−4</text>
          <path id="marcus-rate-path" class="population-line lower-line" fill="none" d=""/>
          <line id="marcus-optimal-line" x1="329" y1="35" x2="329" y2="248" class="plot-grid"/>
          <line id="marcus-marker-line" x1="352" y1="35" x2="352" y2="248" class="plot-marker"/>
          <circle id="marcus-marker" cx="352" cy="110" r="5" class="plot-point upper-point"/>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">This is the classical nonadiabatic Marcus expression. It does not automatically cover strong electronic coupling, quantum vibrational effects, non-equilibrium solvent response or conformational gating.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Ensemble energetics</p><h2>How do you obtain \(\lambda\) and \(\Delta G^\circ\) from simulations?</h2></div>
  </div>

  <p>One useful route is vertical energy-gap sampling. Define the instantaneous energy gap</p>

  <div class="lecture-equation">
  \[
  X(\mathbf R)=E_P(\mathbf R)-E_R(\mathbf R),
  \]
  </div>

  <p>where the two electronic states are evaluated at the same nuclear geometry \(\mathbf R\). If both reactant and product ensembles are sampled and the linear-response Marcus assumptions hold,</p>

  <div class="lecture-equation">
  \[
  \lambda
  =
  \frac{\langle X\rangle_R-\langle X\rangle_P}{2},
  \qquad
  \Delta G^\circ
  =
  \frac{\langle X\rangle_R+\langle X\rangle_P}{2}.
  \]
  </div>

  <aside class="lecture-note">
    <strong>The definition of \(X\) fixes the signs.</strong>
    <span>If you define the gap in the opposite direction, the corresponding signs change. This is one reason energy-gap analyses should always state the gap convention explicitly.</span>
  </aside>

  <p>A single ensemble of vertical gaps is therefore not, by itself, enough to determine both \(\lambda\) and \(\Delta G^\circ\) without extra assumptions. Two properly equilibrated state-specific ensembles give a much cleaner Marcus construction.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">Beyond one number</p><h2>Proteins can gate electron transfer through conformational subensembles</h2></div>
  </div>

  <p>In a flexible protein, \(V\), \(\Delta G^\circ\) and even the effective reorganization energy can depend on conformation. Because the rate depends on \(V^2\) and exponentially on the activation barrier, averaging structures first and calculating one rate afterwards can be very misleading.</p>

  <p>In general,</p>

  <div class="lecture-equation">
  \[
  k\!\left(\langle \mathbf R\rangle\right)
  \neq
  \left\langle k[\mathbf R]\right\rangle.
  \]
  </div>

  <p>A small fraction of strongly coupled or nearly activationless conformations can dominate the ensemble-averaged kinetics. This is why electron-transfer calculations in proteins naturally connect to conformational sampling.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">07</span>
    <div><p class="section-eyebrow">When Marcus is not enough</p><h2>Know which assumption is breaking</h2></div>
  </div>

  <div class="method-ladder">
    <div><span>Strong electronic coupling</span><p>The weak-coupling golden-rule treatment can fail and the dynamics becomes more adiabatic.</p></div>
    <div><span>Quantum vibrations</span><p>High-frequency intramolecular modes may require vibronic or Marcus–Levich–Jortner-type treatments.</p></div>
    <div><span>Non-equilibrium environments</span><p>The solvent or protein may not relax to the equilibrium distribution assumed by standard Marcus theory.</p></div>
    <div><span>Conformational gating</span><p>Slow structural motion can create kinetic bottlenecks or distinct subensembles with different transfer rates.</p></div>
  </div>
</section>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">08</span>
    <div><p class="section-eyebrow">Selected reading</p><h2>Examples from my work</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>Conformational gating</span><h3>Conformational Switching Controls Biradical Spin Dynamics in Flavin–Tryptophan Dyads</h3><p>How conformational subensembles reshape radical-pair kinetics and spin evolution.</p><a href="https://doi.org/10.1021/jacs.5c22947" target="_blank" rel="noopener">JACS (2026) →</a></article>
    <article><span>Dynamic protein environment</span><h3>Magnetosensitivity of Model Flavin–Tryptophan Radical Pairs in a Dynamic Protein Environment</h3><p>Connecting fluctuating molecular structure to radical-pair parameters and observables.</p><a href="https://doi.org/10.1021/acs.jpcb.5c01187" target="_blank" rel="noopener">J. Phys. Chem. B (2025) →</a></article>
    <article><span>Multiscale modelling</span><h3>Multiscale modeling approaches in biomolecular physics</h3><p>Broader strategies for connecting molecular sampling, quantum chemistry and kinetic observables.</p><a href="https://doi.org/10.1080/23746149.2026.2660655" target="_blank" rel="noopener">Advances in Physics: X (2026) →</a></article>
  </div>
</section>

{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-marcus.js" defer></script>
