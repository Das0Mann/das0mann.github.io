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
<section class="module-learning" aria-label="Learning goals">
  <div class="module-learning-head">
    <span>After this module</span>
    <strong>You should be able to…</strong>
  </div>
  <div class="module-learning-grid">
    <div><span>01</span><p>Define diabatic donor/acceptor states, electronic coupling, reorganization energy and driving force.</p></div>
    <div><span>02</span><p>Locate a reaction in the normal, activationless or inverted Marcus regime.</p></div>
    <div><span>03</span><p>Understand what energy-gap sampling can—and cannot—determine from molecular ensembles.</p></div>
  </div>
</section>

{% include lecture-connections.html %}


<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Diabatic states</p><h2>Define donor and acceptor states before you talk about a rate</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Electron transfer is controlled by both energetic alignment and wavefunction communication</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Electronic coupling \(V=H_{DA}\)</strong>
        <p><b>What it is:</b> The off-diagonal matrix element connecting donor- and acceptor-localized electronic states.</p>
        <p><b>What it changes:</b> It sets how strongly the two charge-localized states mix; in the nonadiabatic Marcus limit the rate scales as \(|V|^2\).</p>
        <p><b>What you observe:</b> Strong distance/orientation dependence of ET rates and avoided-crossing gaps between coupled states.</p>
      </article>
      <article>
        <strong>Diabatic state</strong>
        <p><b>What it is:</b> An electronic state defined to preserve a chemically meaningful identity such as 'electron on donor' or 'electron on acceptor' as nuclei move.</p>
        <p><b>What it changes:</b> It provides a stable basis in which coupling and energy-gap fluctuations can be defined.</p>
        <p><b>What you observe:</b> Not directly measured; it is a modelling construction whose parameters predict rates and spectra.</p>
      </article>
    </div>
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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Reorganization energy measures how much the environment must reshape for a new charge distribution</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Reorganization energy \(\lambda\)</strong>
        <p><b>What it is:</b> The free-energy cost of taking the nuclei/environment from the equilibrium configuration of one charge state to the geometry appropriate for the other without transferring the electron yet.</p>
        <p><b>What it changes:</b> It controls the curvature/barrier of Marcus free-energy surfaces and sets the activationless condition \(\Delta G^\circ=-\lambda\).</p>
        <p><b>What you observe:</b> It is inferred from kinetics, spectroscopy or energy-gap statistics rather than observed as a single direct spectral line.</p>
      </article>
      <article>
        <strong>Driving force \(\Delta G^\circ\)</strong>
        <p><b>What it is:</b> The thermodynamic free-energy difference between product and reactant states.</p>
        <p><b>What it changes:</b> It shifts the relative vertical position of the Marcus parabolas and therefore changes the activation barrier.</p>
        <p><b>What you observe:</b> Changes in ET rate with redox potential, environment, mutation or molecular substitution.</p>
      </article>
    </div>
  </div>


  <p>When an electron moves, the preferred nuclear geometry and solvent polarization generally change. Marcus theory collects that energetic cost into the reorganization energy \(\lambda\).</p>

  <div class="method-ladder">
    <div><span>Inner-sphere reorganization</span><p>Changes in bond lengths, angles and intramolecular vibrational coordinates of donor and acceptor.</p></div>
    <div><span>Outer-sphere reorganization</span><p>Reorientation and polarization of the surrounding solvent, protein or dielectric environment.</p></div>
  </div>

  <div class="lecture-equation">
  \[
  \lambda
  =
  \lambda_\mathrm{in}
  +
  \lambda_\mathrm{out}.
  \]
  </div>

  <p>This decomposition is conceptually useful but not always numerically unique in a protein: intramolecular coordinates, local side chains, solvent polarization and collective protein motion can be coupled. What matters for the rate is the total free-energy cost associated with reorganizing all degrees of freedom that respond on the electron-transfer timescale.</p>

  <p>The reaction driving force is the standard free-energy change \(\Delta G^\circ\). With the usual sign convention, a negative \(\Delta G^\circ\) means the electron-transfer reaction is thermodynamically downhill.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Marcus surfaces</p><h2>Two parabolas are enough to understand the barrier</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>The activation barrier is the nuclear configuration the system must reach before electron transfer becomes energetically allowed</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Activation free energy \(\Delta G^\ddagger\)</strong>
        <p><b>What it is:</b> The free-energy cost of reaching the crossing region where reactant and product electronic states are energetically matched in the diabatic picture.</p>
        <p><b>What it changes:</b> It enters the rate exponentially, so small barrier changes can change electron-transfer kinetics by orders of magnitude.</p>
        <p><b>What you observe:</b> Strong temperature and environment dependence of ET rates.</p>
      </article>
      <article>
        <strong>Activationless condition</strong>
        <p><b>What it is:</b> The special case \(\Delta G^\circ=-\lambda\) in classical Marcus theory where the equilibrium reactant geometry can reach energetic degeneracy without a free-energy barrier.</p>
        <p><b>What it changes:</b> It maximizes the classical nonadiabatic Marcus rate for fixed coupling and temperature.</p>
        <p><b>What you observe:</b> A turnover from increasing to decreasing rate as the reaction is made progressively more exergonic.</p>
      </article>
      <article>
        <strong>Marcus inverted region</strong>
        <p><b>What it is:</b> The regime \(-\Delta G^\circ>\lambda\), where further thermodynamic driving moves the crossing away from the reactant minimum again.</p>
        <p><b>What it changes:</b> The activation barrier grows even though the reaction becomes more exergonic.</p>
        <p><b>What you observe:</b> Electron-transfer rates that decrease as the driving force becomes more negative.</p>
      </article>
    </div>
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

  <p>The formula becomes easier to understand if it is split into two pieces. Fermi's golden rule supplies the electronic part, while nuclear motion supplies the probability density for donor and acceptor states to become energetically resonant,</p>

  <div class="lecture-equation">
  \[
  k_\mathrm{ET}
  =
  \frac{2\pi}{\hbar}|V|^2
  \underbrace{\mathrm{FCWD}}_{\text{nuclear energy matching}}.
  \]
  </div>

  <p>In classical Marcus theory the Franck–Condon-weighted density of states becomes a Gaussian energy-gap distribution,</p>

  <div class="lecture-equation">
  \[
  \mathrm{FCWD}
  =
  \frac{1}{\sqrt{4\pi\lambda k_BT}}
  \exp\!\left[
  -\frac{(\Delta G^\circ+\lambda)^2}
  {4\lambda k_BT}
  \right].
  \]
  </div>

  <p>So the rate asks two distinct questions: <strong>can the electronic states talk to each other?</strong> through \(V\), and <strong>how often does nuclear motion bring them into energetic alignment?</strong> through the FCWD.</p>

  <aside class="lecture-analogy">
    <span class="lecture-analogy-label">Mental model</span>
    <h3>Two valleys and a bridge</h3>
    <p>The donor and acceptor free-energy surfaces are two valleys. Reorganization energy measures how much the landscape must reshape before the valleys become energetically aligned; \(\Delta G^\circ\) sets their relative altitude. The electronic coupling \(V\) is the width of the bridge connecting them. A perfect crossing with a vanishingly narrow bridge can still give slow transfer, while a wide bridge is useless if the nuclear landscape almost never reaches the crossing region.</p>
    <span class="analogy-limit"><strong>Where the analogy breaks:</strong> the reaction coordinate is a collective statistical coordinate, not a literal path through real space, and nonadiabatic transfer is a quantum transition rather than a particle mechanically crossing a bridge.</span>
  </aside>

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
          <span>Rate <strong id="marcus-rate-out">1.15 × 10^12 s⁻¹</strong></span>
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
          <text id="marcus-y-max" x="31" y="39" class="svg-tick">13</text>
          <text id="marcus-y-min" x="31" y="249" class="svg-tick">-7</text>
          <path id="marcus-reference-path" class="plot-reference-line" fill="none" d=""/>
          <text x="355" y="55" class="svg-label">10 meV reference</text>
          <path id="marcus-rate-path" class="population-line lower-line" fill="none" d="M58.00 248.00 L59.48 248.00 L60.95 248.00 L62.43 248.00 L63.90 248.00 L65.38 248.00 L66.85 248.00 L68.32 248.00 L69.80 248.00 L71.27 248.00 L72.75 248.00 L74.23 248.00 L75.70 248.00 L77.18 248.00 L78.65 248.00 L80.13 248.00 L81.60 248.00 L83.07 248.00 L84.55 248.00 L86.02 248.00 L87.50 248.00 L88.98 248.00 L90.45 248.00 L91.93 248.00 L93.40 248.00 L94.88 248.00 L96.35 248.00 L97.82 248.00 L99.30 248.00 L100.77 248.00 L102.25 248.00 L103.73 248.00 L105.20 248.00 L106.68 248.00 L108.15 248.00 L109.63 248.00 L111.10 248.00 L112.57 248.00 L114.05 248.00 L115.52 248.00 L117.00 248.00 L118.48 246.60 L119.95 243.76 L121.43 240.93 L122.90 238.13 L124.38 235.34 L125.85 232.57 L127.32 229.83 L128.80 227.10 L130.27 224.40 L131.75 221.71 L133.23 219.05 L134.70 216.40 L136.18 213.77 L137.65 211.17 L139.13 208.58 L140.60 206.02 L142.07 203.47 L143.55 200.94 L145.02 198.44 L146.50 195.95 L147.98 193.49 L149.45 191.04 L150.93 188.61 L152.40 186.21 L153.88 183.82 L155.35 181.46 L156.82 179.11 L158.30 176.78 L159.77 174.48 L161.25 172.19 L162.73 169.92 L164.20 167.68 L165.68 165.45 L167.15 163.25 L168.63 161.06 L170.10 158.89 L171.57 156.75 L173.05 154.62 L174.52 152.51 L176.00 150.43 L177.47 148.36 L178.95 146.31 L180.43 144.29 L181.90 142.28 L183.38 140.29 L184.85 138.33 L186.32 136.38 L187.80 134.45 L189.28 132.54 L190.75 130.66 L192.22 128.79 L193.70 126.94 L195.18 125.12 L196.65 123.31 L198.13 121.52 L199.60 119.76 L201.07 118.01 L202.55 116.28 L204.03 114.57 L205.50 112.89 L206.97 111.22 L208.45 109.57 L209.93 107.94 L211.40 106.34 L212.88 104.75 L214.35 103.18 L215.82 101.63 L217.30 100.11 L218.78 98.60 L220.25 97.11 L221.72 95.64 L223.20 94.20 L224.68 92.77 L226.15 91.36 L227.63 89.97 L229.10 88.61 L230.57 87.26 L232.05 85.93 L233.53 84.62 L235.00 83.33 L236.47 82.07 L237.95 80.82 L239.43 79.59 L240.90 78.38 L242.38 77.19 L243.85 76.03 L245.32 74.88 L246.80 73.75 L248.28 72.64 L249.75 71.55 L251.22 70.48 L252.70 69.44 L254.18 68.41 L255.65 67.40 L257.13 66.41 L258.60 65.44 L260.07 64.49 L261.55 63.57 L263.02 62.66 L264.50 61.77 L265.98 60.90 L267.45 60.05 L268.93 59.22 L270.40 58.41 L271.88 57.63 L273.35 56.86 L274.82 56.11 L276.30 55.38 L277.77 54.67 L279.25 53.98 L280.73 53.31 L282.20 52.66 L283.68 52.03 L285.15 51.43 L286.63 50.84 L288.10 50.27 L289.57 49.72 L291.05 49.19 L292.52 48.68 L294.00 48.19 L295.48 47.72 L296.95 47.27 L298.43 46.84 L299.90 46.43 L301.38 46.04 L302.85 45.67 L304.32 45.33 L305.80 45.00 L307.27 44.69 L308.75 44.40 L310.23 44.13 L311.70 43.88 L313.18 43.65 L314.65 43.44 L316.13 43.25 L317.60 43.08 L319.07 42.93 L320.55 42.80 L322.02 42.69 L323.50 42.60 L324.98 42.53 L326.45 42.48 L327.93 42.45 L329.40 42.44 L330.88 42.45 L332.35 42.48 L333.82 42.53 L335.30 42.60 L336.77 42.69 L338.25 42.80 L339.73 42.93 L341.20 43.08 L342.68 43.25 L344.15 43.44 L345.63 43.65 L347.10 43.88 L348.57 44.13 L350.05 44.40 L351.52 44.69 L353.00 45.00 L354.48 45.33 L355.95 45.67 L357.43 46.04 L358.90 46.43 L360.38 46.84 L361.85 47.27 L363.32 47.72 L364.80 48.19 L366.27 48.68 L367.75 49.19 L369.23 49.72 L370.70 50.27 L372.18 50.84 L373.65 51.43 L375.13 52.03 L376.60 52.66 L378.07 53.31 L379.55 53.98 L381.02 54.67 L382.50 55.38 L383.98 56.11 L385.45 56.86 L386.93 57.63 L388.40 58.41 L389.88 59.22 L391.35 60.05 L392.82 60.90 L394.30 61.77 L395.77 62.66 L397.25 63.57 L398.73 64.49 L400.20 65.44 L401.68 66.41 L403.15 67.40 L404.63 68.41 L406.10 69.44 L407.57 70.48 L409.05 71.55 L410.52 72.64 L412.00 73.75 L413.48 74.88 L414.95 76.03 L416.43 77.19 L417.90 78.38 L419.38 79.59 L420.85 80.82 L422.32 82.07 L423.80 83.33 L425.27 84.62 L426.75 85.93 L428.23 87.26 L429.70 88.61 L431.18 89.97 L432.65 91.36 L434.13 92.77 L435.60 94.20 L437.07 95.64 L438.55 97.11 L440.02 98.60 L441.50 100.11 L442.98 101.63 L444.45 103.18 L445.93 104.75 L447.40 106.34 L448.88 107.94 L450.35 109.57 L451.82 111.22 L453.30 112.89 L454.77 114.57 L456.25 116.28 L457.73 118.01 L459.20 119.76 L460.68 121.52 L462.15 123.31 L463.63 125.12 L465.10 126.94 L466.57 128.79 L468.05 130.66 L469.52 132.54 L471.00 134.45 L472.48 136.38 L473.95 138.33 L475.43 140.29 L476.90 142.28 L478.38 144.29 L479.85 146.31 L481.32 148.36 L482.80 150.43 L484.27 152.51 L485.75 154.62 L487.23 156.75 L488.70 158.89 L490.18 161.06 L491.65 163.25 L493.13 165.45 L494.60 167.68 L496.07 169.92 L497.55 172.19 L499.02 174.48 L500.50 176.78 L501.98 179.11 L503.45 181.46 L504.93 183.82 L506.40 186.21 L507.88 188.61 L509.35 191.04 L510.82 193.49 L512.30 195.95 L513.77 198.44 L515.25 200.94 L516.73 203.47 L518.20 206.02 L519.67 208.58 L521.15 211.17 L522.63 213.77 L524.10 216.40 L525.58 219.05 L527.05 221.71 L528.52 224.40 L530.00 227.10"/>
          <line id="marcus-optimal-line" x1="329.40" y1="35" x2="329.40" y2="248" class="plot-grid"/>
          <line id="marcus-marker-line" x1="353.00" y1="35" x2="353.00" y2="248" class="plot-marker"/>
          <circle id="marcus-marker" cx="353.00" cy="45.00" r="5" class="plot-point upper-point"/>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">The dashed reference uses \(V=10\,\mathrm{meV}\); the solid curve uses the selected coupling. This makes the \(k\propto V^2\) vertical shift visible instead of letting automatic y-axis scaling hide it. The model is still the classical nonadiabatic Marcus expression and does not automatically cover strong coupling, quantum vibrational effects, non-equilibrium solvent response or conformational gating.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Ensemble energetics</p><h2>How do you obtain λ and ΔG° from simulations?</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>The vertical energy gap turns a molecular ensemble into an electron-transfer coordinate</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Vertical energy gap \(X(\mathbf R)\)</strong>
        <p><b>What it is:</b> The electronic energy difference between product and reactant charge states evaluated at the same instantaneous nuclear geometry.</p>
        <p><b>What it changes:</b> Its fluctuations encode how solvent, protein and intramolecular coordinates stabilize one charge state relative to the other.</p>
        <p><b>What you observe:</b> A distribution over MD/QM snapshots rather than one directly measured scalar; its statistics can be related to free-energy parameters under additional assumptions.</p>
      </article>
      <article>
        <strong>Linear-response assumption</strong>
        <p><b>What it is:</b> The approximation that reactant and product free-energy surfaces have similar harmonic curvature and Gaussian energy-gap fluctuations.</p>
        <p><b>What it changes:</b> It allows the means of two gap distributions to be converted into \(\lambda\) and \(\Delta G^\circ\).</p>
        <p><b>What you observe:</b> Approximately Gaussian gap histograms with similar variances; strong skewness or state-dependent variance warns that simple Marcus linear response may fail.</p>
      </article>
      <article>
        <strong>Sampling both states</strong>
        <p><b>What it is:</b> Reactant and product ensembles generally relax around different nuclear configurations.</p>
        <p><b>What it changes:</b> Sampling only one state does not, by itself, provide the two equilibrium averages needed for the standard two-ensemble linear-response expressions.</p>
        <p><b>What you observe:</b> Different energy-gap distributions when trajectories are equilibrated on reactant versus product surfaces.</p>
      </article>
    </div>
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


<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">P</span>
    <div><p class="section-eyebrow">Distance and tunnelling</p><h2>Electron transfer can be exponentially sensitive to geometry before Marcus energetics even enter</h2></div>
  </div>

  <p>For weakly coupled donor–acceptor states, the electronic coupling often decreases approximately exponentially with displacement from a chosen reference geometry,</p>

  <div class="lecture-equation">
  \[
  |V(R)|
  \approx
  |V(R_0)|\,
  e^{-\beta(R-R_0)}.
  \]
  </div>

  <p>Writing the relation relative to \(R_0\) avoids assigning physical meaning to an extrapolated coupling at zero separation. In practice \(R\) is also only a proxy for a tunnelling pathway: orbital orientation and the chemical bridge can matter as much as a single donor–acceptor distance.</p>

  <p>The decay constant \(\beta\) is not universal: it depends on the intervening medium, orbital alignment and whether covalent bonds, hydrogen bonds or through-space contacts mediate the coupling. Because the nonadiabatic rate scales as \(|V|^2\), small conformational changes can therefore generate large rate changes even when \(\lambda\) and \(\Delta G^\circ\) barely move.</p>

  <div class="interactive-card" id="tunnelling-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Distance sensitivity of electronic coupling</h3></div>
      <span class="interactive-model-note">relative tunnelling model</span>
    </div>

    <div class="lecture-equation compact">
    \[
    \frac{V(R)}{V_0}=e^{-\beta\Delta R},
    \qquad
    \frac{k(R)}{k_0}\approx e^{-2\beta\Delta R}.
    \]
    </div>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>increase the donor–acceptor separation by only a few ångström. The coupling falls exponentially, and the nonadiabatic rate falls twice as fast on a logarithmic scale because \(k\propto V^2\).</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="tunnel-dr"><span class="control-name">Additional separation \(\Delta R\)</span><output id="tunnel-dr-out">2.0 Å</output></label>
        <input id="tunnel-dr" type="range" min="0" max="8" step="0.1" value="2">

        <label for="tunnel-beta"><span class="control-name">Decay constant \(\beta\)</span><output id="tunnel-beta-out">1.0 Å⁻¹</output></label>
        <input id="tunnel-beta" type="range" min="0.3" max="2.0" step="0.05" value="1">

        <div class="demo-presets">
          <button type="button" data-tunnel-beta="0.5">weak decay</button>
          <button type="button" data-tunnel-beta="1.0">typical scale</button>
          <button type="button" data-tunnel-beta="1.6">strong decay</button>
        </div>

        <div class="interactive-readout">
          <span>Coupling ratio \(V/V_0\) <strong id="tunnel-v-out">0.135</strong></span>
          <span>Rate ratio \(k/k_0\) <strong id="tunnel-k-out">0.0183</strong></span>
          <span>Rate suppression <strong id="tunnel-suppression-out">54.6×</strong></span>
        </div>

        <p id="tunnel-explanation" class="demo-explanation">A 2 Å increase already suppresses the nonadiabatic rate by more than one order of magnitude at this decay constant.</p>
      </div>

      <div class="plot-wrap">
        <svg id="tunnel-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="Relative electron-transfer rate versus additional donor acceptor separation">
          <line x1="58" y1="248" x2="530" y2="248" class="plot-axis"/>
          <line x1="58" y1="35" x2="58" y2="248" class="plot-axis"/>
          <line x1="58" y1="141.5" x2="530" y2="141.5" class="plot-grid"/>
          <text x="445" y="278" class="svg-caption">additional separation / Å</text>
          <text x="12" y="38" class="svg-caption">log₁₀(k/k₀)</text>
          <path id="tunnel-rate-path" class="population-line lower-line" fill="none" d="M58.00 35.00 L59.97 35.44 L61.93 35.88 L63.90 36.32 L65.87 36.76 L67.83 37.20 L69.80 37.64 L71.77 38.08 L73.73 38.52 L75.70 38.96 L77.67 39.40 L79.63 39.85 L81.60 40.29 L83.57 40.73 L85.53 41.17 L87.50 41.61 L89.47 42.05 L91.43 42.49 L93.40 42.93 L95.37 43.37 L97.33 43.81 L99.30 44.25 L101.27 44.69 L103.23 45.13 L105.20 45.57 L107.17 46.01 L109.13 46.45 L111.10 46.89 L113.07 47.33 L115.03 47.77 L117.00 48.21 L118.97 48.66 L120.93 49.10 L122.90 49.54 L124.87 49.98 L126.83 50.42 L128.80 50.86 L130.77 51.30 L132.73 51.74 L134.70 52.18 L136.67 52.62 L138.63 53.06 L140.60 53.50 L142.57 53.94 L144.53 54.38 L146.50 54.82 L148.47 55.26 L150.43 55.70 L152.40 56.14 L154.37 56.58 L156.33 57.02 L158.30 57.47 L160.27 57.91 L162.23 58.35 L164.20 58.79 L166.17 59.23 L168.13 59.67 L170.10 60.11 L172.07 60.55 L174.03 60.99 L176.00 61.43 L177.97 61.87 L179.93 62.31 L181.90 62.75 L183.87 63.19 L185.83 63.63 L187.80 64.07 L189.77 64.51 L191.73 64.95 L193.70 65.39 L195.67 65.83 L197.63 66.28 L199.60 66.72 L201.57 67.16 L203.53 67.60 L205.50 68.04 L207.47 68.48 L209.43 68.92 L211.40 69.36 L213.37 69.80 L215.33 70.24 L217.30 70.68 L219.27 71.12 L221.23 71.56 L223.20 72.00 L225.17 72.44 L227.13 72.88 L229.10 73.32 L231.07 73.76 L233.03 74.20 L235.00 74.64 L236.97 75.09 L238.93 75.53 L240.90 75.97 L242.87 76.41 L244.83 76.85 L246.80 77.29 L248.77 77.73 L250.73 78.17 L252.70 78.61 L254.67 79.05 L256.63 79.49 L258.60 79.93 L260.57 80.37 L262.53 80.81 L264.50 81.25 L266.47 81.69 L268.43 82.13 L270.40 82.57 L272.37 83.01 L274.33 83.45 L276.30 83.90 L278.27 84.34 L280.23 84.78 L282.20 85.22 L284.17 85.66 L286.13 86.10 L288.10 86.54 L290.07 86.98 L292.03 87.42 L294.00 87.86 L295.97 88.30 L297.93 88.74 L299.90 89.18 L301.87 89.62 L303.83 90.06 L305.80 90.50 L307.77 90.94 L309.73 91.38 L311.70 91.82 L313.67 92.26 L315.63 92.71 L317.60 93.15 L319.57 93.59 L321.53 94.03 L323.50 94.47 L325.47 94.91 L327.43 95.35 L329.40 95.79 L331.37 96.23 L333.33 96.67 L335.30 97.11 L337.27 97.55 L339.23 97.99 L341.20 98.43 L343.17 98.87 L345.13 99.31 L347.10 99.75 L349.07 100.19 L351.03 100.63 L353.00 101.07 L354.97 101.52 L356.93 101.96 L358.90 102.40 L360.87 102.84 L362.83 103.28 L364.80 103.72 L366.77 104.16 L368.73 104.60 L370.70 105.04 L372.67 105.48 L374.63 105.92 L376.60 106.36 L378.57 106.80 L380.53 107.24 L382.50 107.68 L384.47 108.12 L386.43 108.56 L388.40 109.00 L390.37 109.44 L392.33 109.88 L394.30 110.33 L396.27 110.77 L398.23 111.21 L400.20 111.65 L402.17 112.09 L404.13 112.53 L406.10 112.97 L408.07 113.41 L410.03 113.85 L412.00 114.29 L413.97 114.73 L415.93 115.17 L417.90 115.61 L419.87 116.05 L421.83 116.49 L423.80 116.93 L425.77 117.37 L427.73 117.81 L429.70 118.25 L431.67 118.69 L433.63 119.14 L435.60 119.58 L437.57 120.02 L439.53 120.46 L441.50 120.90 L443.47 121.34 L445.43 121.78 L447.40 122.22 L449.37 122.66 L451.33 123.10 L453.30 123.54 L455.27 123.98 L457.23 124.42 L459.20 124.86 L461.17 125.30 L463.13 125.74 L465.10 126.18 L467.07 126.62 L469.03 127.06 L471.00 127.50 L472.97 127.95 L474.93 128.39 L476.90 128.83 L478.87 129.27 L480.83 129.71 L482.80 130.15 L484.77 130.59 L486.73 131.03 L488.70 131.47 L490.67 131.91 L492.63 132.35 L494.60 132.79 L496.57 133.23 L498.53 133.67 L500.50 134.11 L502.47 134.55 L504.43 134.99 L506.40 135.43 L508.37 135.87 L510.33 136.31 L512.30 136.76 L514.27 137.20 L516.23 137.64 L518.20 138.08 L520.17 138.52 L522.13 138.96 L524.10 139.40 L526.07 139.84 L528.03 140.28 L530.00 140.72"/>
          <line id="tunnel-marker-line" x1="176.00" y1="35" x2="176.00" y2="248" class="plot-marker"/>
          <circle id="tunnel-marker" cx="176.00" cy="61.43" r="5" class="plot-point upper-point"/>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">This is a relative tunnelling model, not a full Marcus calculation. It isolates the structural sensitivity of \(V\). Real pathways can show interference, through-bond effects and non-exponential behaviour.</p>
  </div>


  <aside class="research-connection">
    <span class="research-connection-label">Conformational gating</span>
    <p>This is one reason an ensemble cannot always be replaced by its average geometry. Different conformers can occupy qualitatively different coupling and reaction regimes.</p>
    <div class="research-connection-links">
      <a href="https://doi.org/10.1021/jacs.5c22947" target="_blank" rel="noopener"><strong>Conformational Switching Controls Biradical Spin Dynamics in Flavin–Tryptophan Dyads</strong><span>JACS (2026)</span></a>
    </div>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">Beyond one number</p><h2>Proteins can gate electron transfer through conformational subensembles</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Conformational gating makes the rate a property of an ensemble, not a single optimized geometry</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Gating coordinate</strong>
        <p><b>What it is:</b> A slow structural variable—distance, orientation, hydrogen bonding or electrostatic arrangement—that modulates coupling or energetics.</p>
        <p><b>What it changes:</b> Electron transfer may occur mainly from a subset of conformations even if those conformations are not the most populated.</p>
        <p><b>What you observe:</b> Multi-exponential kinetics, heterogeneous rates or strong sensitivity to mutation/solvent/protein conformation.</p>
      </article>
      <article>
        <strong>Dynamic disorder</strong>
        <p><b>What it is:</b> Time-dependent variation of the instantaneous ET rate because the molecule explores different conformations.</p>
        <p><b>What it changes:</b> The observed kinetics may deviate from a single exponential and can depend on whether conformational exchange is faster or slower than ET.</p>
        <p><b>What you observe:</b> Rate distributions, kinetic memory and trajectory-dependent reaction propensity.</p>
      </article>
    </div>
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

  <aside class="research-connection">
    <span class="research-connection-label">Research connection</span>
    <p>A protein does not have one immutable electron-transfer geometry. Distinct conformational subensembles can change donor–acceptor energetics and magnetic interactions together, so kinetics and spin dynamics become structurally coupled.</p>
    <div class="research-connection-links">
      <a href="https://doi.org/10.1021/jacs.5c22947" target="_blank" rel="noopener"><strong>Conformational Switching Controls Biradical Spin Dynamics in Flavin–Tryptophan Dyads</strong><span>JACS (2026)</span></a>
    </div>
  </aside>
</section>


<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">P</span>
    <div><p class="section-eyebrow">Beyond the simplest Marcus limit</p><h2>Weak coupling gives hopping; strong coupling starts to look adiabatic</h2></div>
  </div>

  <div class="lecture-flow-bridge">
    <p>The standard Marcus expression on this page is the <strong>nonadiabatic</strong> limit. That just means the electronic coupling is weak enough that reaching the crossing region does not guarantee transfer. Nuclear motion brings the states into resonance; the electronic coupling then decides how efficiently the electron actually changes state.</p>
  </div>

  <div class="method-ladder">
    <div><span>Nonadiabatic / weak \(V\)</span><p>Electron transfer is well described as a transition between donor and acceptor diabatic states. The rate scales approximately as \(|V|^2\).</p></div>
    <div><span>Increasing \(V\)</span><p>The crossing becomes more strongly avoided. Once electronic mixing is strong, the simple golden-rule picture is no longer the natural limit.</p></div>
    <div><span>Adiabatic limit</span><p>The electron follows the lower adiabatic electronic surface as the nuclei move through the crossing region; nuclear barrier crossing becomes the dominant kinetic bottleneck.</p></div>
    <div><span>High-frequency vibrations</span><p>When important nuclear modes are quantum mechanical rather than classical, Marcus–Levich–Jortner-type descriptions can be more appropriate than one classical reorganization coordinate.</p></div>
  </div>

  <aside class="teacher-note">
    <strong>Do not ask “Is Marcus theory valid?” as one yes/no question.</strong>
    <span>Ask which Marcus assumptions are valid: weak electronic coupling, approximately harmonic free-energy surfaces, classical nuclear reorganization, near-equilibrium nuclear sampling, and a meaningful donor/acceptor state definition.</span>
  </aside>
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

<aside class="lecture-takeaway">
  <span class="lecture-takeaway-label">Take-home model</span>
  <h3>What controls an electron-transfer rate?</h3>
  <ul>
    <li>A Marcus rate is determined by driving force, reorganization energy and electronic coupling, each of which has a different microscopic origin.</li>
    <li>Geometry can influence the rate twice: through the free-energy landscape and through the often exponential distance/orientation dependence of electronic coupling.</li>
    <li>Protein ensembles therefore require both energetic sampling and a defensible treatment of conformationally varying coupling.</li>
  </ul>
</aside>

<aside class="landmark-study">
  <span class="landmark-label">Landmark biological ET</span>
  <h3>Long-range electron transfer in proteins is a structural tunnelling problem as well as a Marcus problem</h3>
  <p>Gray and Winkler emphasized that biological electron transfer depends strongly on donor–acceptor separation and the intervening tunnelling pathway. Energetics alone is therefore not enough: molecular structure controls the electronic coupling that multiplies the Marcus rate.</p>
  <div class="landmark-footer">
    <a href="https://doi.org/10.1073/pnas.0408029102" target="_blank" rel="noopener">H. B. Gray & J. R. Winkler · PNAS 102, 3534–3539 (2005) →</a>
    <span>This is why Electron Transfer connects naturally to Molecular Motion and to radical-pair formation in proteins.</span>
  </div>
</aside>

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


<section class="lecture-section external-reading">
  <div class="lecture-section-head">
    <span class="lecture-index literature-index">L</span>
    <div><p class="section-eyebrow">Key external literature</p><h2>Where to read next</h2></div>
  </div>
  <p class="external-reading-intro">These are deliberately selected from outside my own work: foundational papers or reviews that are especially useful for this topic.</p>
  <div class="lecture-reading-grid external-literature-grid">
    <article>
      <span>Foundational theory</span>
      <h3>On the Theory of Oxidation-Reduction Reactions Involving Electron Transfer. I</h3>
      <p>R. A. Marcus · The Journal of Chemical Physics (1956). The classic derivation of the electron-transfer free-energy framework that became Marcus theory.</p>
      <a href="https://doi.org/10.1063/1.1742723" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Tutorial review</span>
      <h3>Contemporary Issues in Electron Transfer Research</h3>
      <p>P. F. Barbara, T. J. Meyer and M. A. Ratner · The Journal of Physical Chemistry (1996). A highly useful overview of rates, free-energy surfaces, solvent response and the inverted region.</p>
      <a href="https://doi.org/10.1021/jp9605663" target="_blank" rel="noopener">Open DOI →</a>
    </article>
      <article>
      <span>Protein electron tunnelling</span>
      <h3>Long-range electron transfer</h3>
      <p>H. B. Gray and J. R. Winkler · PNAS (2005). A compact perspective on how distance, tunnelling pathways and protein structure control biological electron-transfer rates.</p>
      <a href="https://doi.org/10.1073/pnas.0408029102" target="_blank" rel="noopener">Open DOI →</a>
    </article>
  </div>
</section>
{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-marcus.js" defer></script>
<script src="{{ site.url }}/assets/js/lecture-tunnelling.js" defer></script>
