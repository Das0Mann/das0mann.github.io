---
layout: page
title: Radical-Pair Spin Chemistry
excerpt: "When quantum spin dynamics changes a chemical reaction"
permalink: /lecture/radical-pairs/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 04</span>
  <h2>Turn spin dynamics into chemistry</h2>
  <p>A radical pair is one of the cleanest places where quantum spin dynamics becomes chemically observable. The spins evolve coherently, but the singlet and triplet parts of the state can react differently. Change the spin evolution and you can change the reaction yield.</p>
</header>
<section class="module-learning" aria-label="Learning goals">
  <div class="module-learning-head">
    <span>After this module</span>
    <strong>You should be able to…</strong>
  </div>
  <div class="module-learning-grid">
    <div><span>01</span><p>Construct the singlet/triplet basis for two electron spins and explain why it is not a classical arrow picture.</p></div>
    <div><span>02</span><p>Identify the magnetic interactions that generate singlet–triplet interconversion.</p></div>
    <div><span>03</span><p>Connect spin evolution to spin-selective reaction yields and magnetic-field effects.</p></div>
  </div>
</section>

{% include lecture-connections.html %}


<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Formation</p><h2>How do we get a spin-correlated radical pair?</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>A radical pair is both a chemical intermediate and a coupled two-spin quantum system</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Radical</strong>
        <p><b>What it is:</b> A molecular species with at least one unpaired electron, giving it an electron spin and a magnetic moment.</p>
        <p><b>What it changes:</b> The unpaired electron makes the species paramagnetic and sensitive to Zeeman, hyperfine and spin–spin interactions.</p>
        <p><b>What you observe:</b> EPR signals, characteristic reactivity and spin-dependent transient spectroscopy.</p>
      </article>
      <article>
        <strong>Radical pair</strong>
        <p><b>What it is:</b> Two radicals created or brought together within one reaction sequence, often by photoinduced electron transfer.</p>
        <p><b>What it changes:</b> Their two electron spins can retain correlation from the precursor state and evolve coherently before the radicals separate or recombine.</p>
        <p><b>What you observe:</b> Magnetic-field-dependent reaction yields, transient EPR and spin-selective products.</p>
      </article>
      <article>
        <strong>Spin correlation</strong>
        <p><b>What it is:</b> A non-classical relation between the two electron spins inherited from how the pair was formed, commonly singlet or triplet character.</p>
        <p><b>What it changes:</b> It determines which spin-selective reaction channels are initially allowed and provides the starting condition for singlet–triplet dynamics.</p>
        <p><b>What you observe:</b> Initial spin polarization and different recombination behaviour for singlet-born versus triplet-born pairs.</p>
      </article>
    </div>
  </div>


  <p>Photoexcitation followed by electron transfer is a common route. If a singlet precursor undergoes spin-conserving electron transfer, the newly formed radical pair starts with strong singlet character. A triplet precursor can instead populate a triplet-born radical pair.</p>

  <div class="lecture-mechanism">
    <div><span>1</span><strong>Excite</strong><small>create an electronically excited donor or acceptor</small></div>
    <div class="mechanism-arrow">→</div>
    <div><span>2</span><strong>Transfer</strong><small>move one electron and create two radicals</small></div>
    <div class="mechanism-arrow">→</div>
    <div><span>3</span><strong>Evolve</strong><small>magnetic interactions change the spin state</small></div>
    <div class="mechanism-arrow">→</div>
    <div><span>4</span><strong>React</strong><small>spin-selective pathways create different products</small></div>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Two electron spins</p><h2>Singlet and triplet are coupled two-spin states</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>The singlet–triplet basis describes correlation between two spins</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Singlet \(S\)</strong>
        <p><b>What it is:</b> An antisymmetric two-electron spin state with total spin \(S=0\). The individual electrons do not have independent fixed up/down labels.</p>
        <p><b>What it changes:</b> It can react through singlet-selective chemical channels and can coherently mix with triplet character when the two radicals experience different magnetic interactions.</p>
        <p><b>What you observe:</b> Singlet-product yield and singlet-selective recombination probability.</p>
      </article>
      <article>
        <strong>Triplet manifold \(T_+,T_0,T_-\)</strong>
        <p><b>What it is:</b> Three symmetric two-electron spin states with total spin \(S=1\).</p>
        <p><b>What it changes:</b> Triplet character opens different reaction pathways and responds differently to Zeeman, exchange and dipolar interactions.</p>
        <p><b>What you observe:</b> Triplet products, triplet EPR signatures and field-dependent reaction yields.</p>
      </article>
    </div>
  </div>


  <p>For two spin-\(\tfrac12\) electrons there are four coupled states:</p>

  <div class="lecture-equation">
  \[
  \begin{aligned}
  \lvert S\rangle&=\frac{1}{\sqrt2}
  \left(\lvert\alpha\beta\rangle-\lvert\beta\alpha\rangle\right),\\
  \lvert T_0\rangle&=\frac{1}{\sqrt2}
  \left(\lvert\alpha\beta\rangle+\lvert\beta\alpha\rangle\right),\\
  \lvert T_+\rangle&=\lvert\alpha\alpha\rangle,\qquad
  \lvert T_-\rangle=\lvert\beta\beta\rangle.
  \end{aligned}
  \]
  </div>

  <aside class="teacher-note"><strong>Do not picture this too classically.</strong><span>The singlet is not simply “one arrow up and one arrow down”. It is a coherent superposition of two product states with a definite exchange symmetry.</span></aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Hamiltonian</p><h2>What drives singlet–triplet interconversion?</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Singlet–triplet mixing requires the two radicals to become magnetically distinguishable</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Hyperfine asymmetry</strong>
        <p><b>What it is:</b> Different nuclei and spin-density patterns create different local magnetic fields on the two electron spins.</p>
        <p><b>What it changes:</b> The electrons accumulate different phases, converting singlet character into triplet character and back.</p>
        <p><b>What you observe:</b> Nuclear-spin-dependent oscillations and magnetic-field effects in reaction yield.</p>
      </article>
      <article>
        <strong>\(\Delta g\) mechanism</strong>
        <p><b>What it is:</b> If the two radicals have different effective \(g\)-values, their Zeeman precession frequencies differ in an external field.</p>
        <p><b>What it changes:</b> The relative electron-spin phase grows at a field-dependent rate, especially important at higher fields.</p>
        <p><b>What you observe:</b> Field-strength-dependent singlet–triplet mixing and high-field magnetic effects.</p>
      </article>
      <article>
        <strong>Exchange</strong>
        <p><b>What it is:</b> A short-range electronic interaction that directly changes the singlet–triplet energy gap.</p>
        <p><b>What it changes:</b> Large \(|J|\) can energetically isolate singlet and triplet states and suppress weak hyperfine-driven mixing.</p>
        <p><b>What you observe:</b> Distance/conformation-sensitive reaction kinetics and shifted spin-transition conditions.</p>
      </article>
      <article>
        <strong>Dipolar coupling</strong>
        <p><b>What it is:</b> A through-space magnetic interaction between the two electron spins.</p>
        <p><b>What it changes:</b> It introduces orientation-dependent splittings and can mix or separate triplet sublevels depending on geometry.</p>
        <p><b>What you observe:</b> Directional magnetic response and geometry-sensitive radical-pair dynamics.</p>
      </article>
    </div>
  </div>


  <p>A useful schematic radical-pair Hamiltonian is</p>

  <div class="lecture-equation">
  \[
  \hat H_\mathrm{RP}
  =
  \hat H_Z+\hat H_\mathrm{hf}+\hat H_J+\hat H_D+\cdots.
  \]
  </div>

  <p>The crucial ingredient is usually a <strong>difference</strong> between the magnetic environments of the two radicals. If both electron spins experienced exactly the same Hamiltonian, there would be much less opportunity to change the total singlet/triplet character. Hyperfine asymmetry, \(g\)-tensor differences and anisotropic interactions provide the required inequivalence.</p>

  <p>A compact mathematical test is to ask whether the Hamiltonian commutes with the singlet projector \(\hat P_S=|S\rangle\langle S|\). Under closed dynamics,</p>

  <div class="lecture-equation">
  \[
  \frac{d}{dt}\langle \hat P_S\rangle
  =
  \frac{i}{\hbar}
  \left\langle
  [\hat H,\hat P_S]
  \right\rangle.
  \]
  </div>

  <p>If \([\hat H,\hat P_S]=0\), that Hamiltonian term cannot by itself change the singlet population. Terms that make the two radicals magnetically inequivalent generate non-zero matrix elements between singlet and triplet sectors and therefore drive S–T interconversion.</p>

  <p>For the simplest isotropic \(\Delta g\) mechanism, the relative electron precession frequency is</p>

  <div class="lecture-equation">
  \[
  \Delta\omega_g
  =
  \frac{\mu_B}{\hbar}\,\Delta g\,B,
  \qquad
  \Delta\nu_g
  =
  \frac{\Delta\omega_g}{2\pi}
  =
  \frac{\mu_B}{h}\,\Delta g\,B.
  \]
  </div>

  <p>This shows why \(\Delta g\)-driven mixing strengthens with magnetic field, whereas hyperfine-driven mixing can already be efficient at low field.</p>

  <aside class="lecture-analogy">
    <span class="lecture-analogy-label">Mental model</span>
    <h3>Think of the two electron spins as two clocks feeding a spin-selective gate</h3>
    <p>If both clocks tick at exactly the same rate, their relative phase changes little. Hyperfine fields or different \(g\)-values make the clocks drift relative to one another. That changing relative phase moves the radical pair between singlet-like and triplet-like character, while the chemical reaction acts like a gate that removes population differently depending on which spin character is present at that instant.</p>
    <span class="analogy-limit"><strong>Where the analogy breaks:</strong> the singlet is an entangled two-electron state, not two independent classical clock hands. The clock picture is only a way to visualize relative phase accumulation.</span>
  </aside>

  <div class="hamiltonian-legend">
    <div><strong>Hyperfine</strong><span>couples each electron to its local nuclei and is often the main source of low-field S–T mixing</span></div>
    <div><strong>\(\Delta g\)</strong><span>different electron Zeeman frequencies can drive relative spin phase evolution, especially at higher fields</span></div>
    <div><strong>Exchange \(J\)</strong><span>shifts singlet and triplet energies and can suppress mixing if the splitting becomes too large</span></div>
    <div><strong>Dipolar coupling</strong><span>anisotropic electron–electron interaction that depends strongly on geometry and orientation</span></div>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Interactive</p><h2>A minimal S–T mixing model</h2></div>
  </div>

  <p>This model deliberately throws away most of the real radical-pair complexity. It keeps only one effective singlet state, one effective triplet state, an ordinary-frequency coupling \(v\) and detuning \(\delta\), both expressed in Hz or MHz. That is enough to see resonance and off-resonance behaviour.</p>

  <div class="interactive-card" id="st-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Coupling versus detuning</h3></div>
      <span class="interactive-model-note">effective two-level system</span>
    </div>

    <div class="lecture-equation-grid">
      <div class="lecture-equation compact">
      \[
      \hat{\mathcal H}_{2\mathrm{lvl}}
      \equiv
      \frac{\hat H}{h}
      =
      \begin{pmatrix}
      0&v\\
      v&\delta
      \end{pmatrix},
      \]
      </div>
      <div class="lecture-equation compact">
      \[
      \begin{aligned}
      P_T(t)&=A\sin^2(\pi\Omega t),\\
      A&=\frac{4v^2}{\delta^2+4v^2},\\
      \Omega&=\sqrt{\delta^2+4v^2}.
      \end{aligned}
      \]
      </div>
    </div>

    <div class="demo-prompt"><strong>Try this:</strong><span>put the states on resonance with \(\delta=0\), then increase detuning. The oscillation can remain fast while the maximum transfer amplitude collapses.</span></div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="st-coupling"><span class="control-name">Effective coupling \(v\)</span><output id="st-coupling-out">3.00 MHz</output></label>
        <input id="st-coupling" type="range" min="0.1" max="10" step="0.1" value="3">
        <label for="st-detuning"><span class="control-name">Detuning \(\delta\)</span><output id="st-detuning-out">2.00 MHz</output></label>
        <input id="st-detuning" type="range" min="0" max="20" step="0.1" value="2">

        <div class="demo-presets">
          <button type="button" data-st-v="3" data-st-delta="0">on resonance</button>
          <button type="button" data-st-v="3" data-st-delta="6">detuned</button>
          <button type="button" data-st-v="1" data-st-delta="12">weak transfer</button>
        </div>

        <div class="interactive-readout">
          <span>Oscillation frequency <strong id="st-frequency">6.32 MHz</strong></span>
          <span>Maximum triplet population <strong id="st-amplitude">90.0%</strong></span>
          <span>Displayed time window <strong id="st-window">0.63 μs</strong></span>
        </div>
        <p id="st-explanation" class="demo-explanation">Coupling is currently strong enough to overcome most of the detuning.</p>
      </div>

      <div class="plot-wrap">
        <svg id="st-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="Singlet and triplet populations">
          <line x1="58" y1="248" x2="530" y2="248" class="plot-axis"/>
          <line x1="58" y1="35" x2="58" y2="248" class="plot-axis"/>
          <line x1="58" y1="141.5" x2="530" y2="141.5" class="plot-grid"/>
          <text x="478" y="278" class="svg-caption">time / μs</text>
          <text x="12" y="38" class="svg-caption">population</text>
          <text id="st-time-0" x="54" y="268" class="svg-tick">0</text>
          <text id="st-time-mid" x="284" y="268" class="svg-tick">0.32</text>
          <text id="st-time-max" x="512" y="268" class="svg-tick">0.63</text>
          <path id="singlet-path" class="population-line singlet-line" fill="none" d="M58.00 35.00 L59.31 35.23 L60.62 35.93 L61.93 37.09 L63.24 38.71 L64.56 40.78 L65.87 43.29 L67.18 46.22 L68.49 49.56 L69.80 53.31 L71.11 57.42 L72.42 61.90 L73.73 66.71 L75.04 71.84 L76.36 77.25 L77.67 82.92 L78.98 88.83 L80.29 94.94 L81.60 101.23 L82.91 107.66 L84.22 114.21 L85.53 120.83 L86.84 127.50 L88.16 134.20 L89.47 140.87 L90.78 147.49 L92.09 154.04 L93.40 160.47 L94.71 166.76 L96.02 172.87 L97.33 178.77 L98.64 184.45 L99.96 189.86 L101.27 194.99 L102.58 199.80 L103.89 204.28 L105.20 208.39 L106.51 212.14 L107.82 215.48 L109.13 218.41 L110.44 220.92 L111.76 222.99 L113.07 224.61 L114.38 225.77 L115.69 226.47 L117.00 226.70 L118.31 226.47 L119.62 225.77 L120.93 224.61 L122.24 222.99 L123.56 220.92 L124.87 218.41 L126.18 215.48 L127.49 212.14 L128.80 208.39 L130.11 204.28 L131.42 199.80 L132.73 194.99 L134.04 189.86 L135.36 184.45 L136.67 178.77 L137.98 172.87 L139.29 166.76 L140.60 160.47 L141.91 154.04 L143.22 147.49 L144.53 140.87 L145.84 134.20 L147.16 127.50 L148.47 120.83 L149.78 114.21 L151.09 107.66 L152.40 101.23 L153.71 94.94 L155.02 88.83 L156.33 82.92 L157.64 77.25 L158.96 71.84 L160.27 66.71 L161.58 61.90 L162.89 57.42 L164.20 53.31 L165.51 49.56 L166.82 46.22 L168.13 43.29 L169.44 40.78 L170.76 38.71 L172.07 37.09 L173.38 35.93 L174.69 35.23 L176.00 35.00 L177.31 35.23 L178.62 35.93 L179.93 37.09 L181.24 38.71 L182.56 40.78 L183.87 43.29 L185.18 46.22 L186.49 49.56 L187.80 53.31 L189.11 57.42 L190.42 61.90 L191.73 66.71 L193.04 71.84 L194.36 77.25 L195.67 82.93 L196.98 88.83 L198.29 94.94 L199.60 101.23 L200.91 107.66 L202.22 114.21 L203.53 120.83 L204.84 127.50 L206.16 134.20 L207.47 140.87 L208.78 147.49 L210.09 154.04 L211.40 160.47 L212.71 166.76 L214.02 172.87 L215.33 178.77 L216.64 184.45 L217.96 189.86 L219.27 194.99 L220.58 199.80 L221.89 204.28 L223.20 208.39 L224.51 212.14 L225.82 215.48 L227.13 218.41 L228.44 220.92 L229.76 222.99 L231.07 224.61 L232.38 225.77 L233.69 226.47 L235.00 226.70 L236.31 226.47 L237.62 225.77 L238.93 224.61 L240.24 222.99 L241.56 220.92 L242.87 218.41 L244.18 215.48 L245.49 212.14 L246.80 208.39 L248.11 204.28 L249.42 199.80 L250.73 194.99 L252.04 189.86 L253.36 184.45 L254.67 178.77 L255.98 172.87 L257.29 166.76 L258.60 160.47 L259.91 154.04 L261.22 147.49 L262.53 140.87 L263.84 134.20 L265.16 127.50 L266.47 120.83 L267.78 114.21 L269.09 107.66 L270.40 101.23 L271.71 94.94 L273.02 88.83 L274.33 82.93 L275.64 77.25 L276.96 71.84 L278.27 66.71 L279.58 61.90 L280.89 57.42 L282.20 53.31 L283.51 49.56 L284.82 46.22 L286.13 43.29 L287.44 40.78 L288.76 38.71 L290.07 37.09 L291.38 35.93 L292.69 35.23 L294.00 35.00 L295.31 35.23 L296.62 35.93 L297.93 37.09 L299.24 38.71 L300.56 40.78 L301.87 43.29 L303.18 46.22 L304.49 49.56 L305.80 53.31 L307.11 57.42 L308.42 61.90 L309.73 66.71 L311.04 71.84 L312.36 77.25 L313.67 82.93 L314.98 88.83 L316.29 94.94 L317.60 101.23 L318.91 107.66 L320.22 114.21 L321.53 120.83 L322.84 127.50 L324.16 134.20 L325.47 140.87 L326.78 147.49 L328.09 154.04 L329.40 160.47 L330.71 166.76 L332.02 172.87 L333.33 178.78 L334.64 184.45 L335.96 189.86 L337.27 194.99 L338.58 199.80 L339.89 204.28 L341.20 208.39 L342.51 212.14 L343.82 215.48 L345.13 218.41 L346.44 220.92 L347.76 222.99 L349.07 224.61 L350.38 225.77 L351.69 226.47 L353.00 226.70 L354.31 226.47 L355.62 225.77 L356.93 224.61 L358.24 222.99 L359.56 220.92 L360.87 218.41 L362.18 215.48 L363.49 212.14 L364.80 208.39 L366.11 204.28 L367.42 199.80 L368.73 194.99 L370.04 189.86 L371.36 184.45 L372.67 178.78 L373.98 172.87 L375.29 166.76 L376.60 160.47 L377.91 154.04 L379.22 147.49 L380.53 140.87 L381.84 134.20 L383.16 127.50 L384.47 120.83 L385.78 114.21 L387.09 107.66 L388.40 101.23 L389.71 94.94 L391.02 88.83 L392.33 82.92 L393.64 77.25 L394.96 71.84 L396.27 66.71 L397.58 61.90 L398.89 57.42 L400.20 53.31 L401.51 49.56 L402.82 46.22 L404.13 43.29 L405.44 40.78 L406.76 38.71 L408.07 37.09 L409.38 35.93 L410.69 35.23 L412.00 35.00 L413.31 35.23 L414.62 35.93 L415.93 37.09 L417.24 38.71 L418.56 40.78 L419.87 43.29 L421.18 46.22 L422.49 49.56 L423.80 53.31 L425.11 57.42 L426.42 61.90 L427.73 66.71 L429.04 71.84 L430.36 77.25 L431.67 82.93 L432.98 88.83 L434.29 94.94 L435.60 101.23 L436.91 107.66 L438.22 114.21 L439.53 120.83 L440.84 127.50 L442.16 134.20 L443.47 140.87 L444.78 147.49 L446.09 154.04 L447.40 160.47 L448.71 166.76 L450.02 172.87 L451.33 178.77 L452.64 184.45 L453.96 189.86 L455.27 194.99 L456.58 199.80 L457.89 204.28 L459.20 208.39 L460.51 212.14 L461.82 215.48 L463.13 218.41 L464.44 220.92 L465.76 222.99 L467.07 224.61 L468.38 225.77 L469.69 226.47 L471.00 226.70 L472.31 226.47 L473.62 225.77 L474.93 224.61 L476.24 222.99 L477.56 220.92 L478.87 218.41 L480.18 215.48 L481.49 212.14 L482.80 208.39 L484.11 204.28 L485.42 199.80 L486.73 194.99 L488.04 189.86 L489.36 184.45 L490.67 178.78 L491.98 172.87 L493.29 166.76 L494.60 160.47 L495.91 154.04 L497.22 147.49 L498.53 140.87 L499.84 134.20 L501.16 127.50 L502.47 120.83 L503.78 114.21 L505.09 107.66 L506.40 101.23 L507.71 94.94 L509.02 88.83 L510.33 82.92 L511.64 77.25 L512.96 71.84 L514.27 66.71 L515.58 61.90 L516.89 57.42 L518.20 53.31 L519.51 49.56 L520.82 46.22 L522.13 43.29 L523.44 40.78 L524.76 38.71 L526.07 37.09 L527.38 35.93 L528.69 35.23 L530.00 35.00"/>
          <path id="triplet-path" class="population-line triplet-line" fill="none" d="M58.00 248.00 L59.31 247.77 L60.62 247.07 L61.93 245.91 L63.24 244.29 L64.56 242.22 L65.87 239.71 L67.18 236.78 L68.49 233.44 L69.80 229.69 L71.11 225.58 L72.42 221.10 L73.73 216.29 L75.04 211.16 L76.36 205.75 L77.67 200.08 L78.98 194.17 L80.29 188.06 L81.60 181.77 L82.91 175.34 L84.22 168.79 L85.53 162.17 L86.84 155.50 L88.16 148.80 L89.47 142.13 L90.78 135.51 L92.09 128.96 L93.40 122.53 L94.71 116.24 L96.02 110.13 L97.33 104.23 L98.64 98.55 L99.96 93.14 L101.27 88.01 L102.58 83.20 L103.89 78.72 L105.20 74.61 L106.51 70.86 L107.82 67.52 L109.13 64.59 L110.44 62.08 L111.76 60.01 L113.07 58.39 L114.38 57.23 L115.69 56.53 L117.00 56.30 L118.31 56.53 L119.62 57.23 L120.93 58.39 L122.24 60.01 L123.56 62.08 L124.87 64.59 L126.18 67.52 L127.49 70.86 L128.80 74.61 L130.11 78.72 L131.42 83.20 L132.73 88.01 L134.04 93.14 L135.36 98.55 L136.67 104.23 L137.98 110.13 L139.29 116.24 L140.60 122.53 L141.91 128.96 L143.22 135.51 L144.53 142.13 L145.84 148.80 L147.16 155.50 L148.47 162.17 L149.78 168.79 L151.09 175.34 L152.40 181.77 L153.71 188.06 L155.02 194.17 L156.33 200.08 L157.64 205.75 L158.96 211.16 L160.27 216.29 L161.58 221.10 L162.89 225.58 L164.20 229.69 L165.51 233.44 L166.82 236.78 L168.13 239.71 L169.44 242.22 L170.76 244.29 L172.07 245.91 L173.38 247.07 L174.69 247.77 L176.00 248.00 L177.31 247.77 L178.62 247.07 L179.93 245.91 L181.24 244.29 L182.56 242.22 L183.87 239.71 L185.18 236.78 L186.49 233.44 L187.80 229.69 L189.11 225.58 L190.42 221.10 L191.73 216.29 L193.04 211.16 L194.36 205.75 L195.67 200.07 L196.98 194.17 L198.29 188.06 L199.60 181.77 L200.91 175.34 L202.22 168.79 L203.53 162.17 L204.84 155.50 L206.16 148.80 L207.47 142.13 L208.78 135.51 L210.09 128.96 L211.40 122.53 L212.71 116.24 L214.02 110.13 L215.33 104.23 L216.64 98.55 L217.96 93.14 L219.27 88.01 L220.58 83.20 L221.89 78.72 L223.20 74.61 L224.51 70.86 L225.82 67.52 L227.13 64.59 L228.44 62.08 L229.76 60.01 L231.07 58.39 L232.38 57.23 L233.69 56.53 L235.00 56.30 L236.31 56.53 L237.62 57.23 L238.93 58.39 L240.24 60.01 L241.56 62.08 L242.87 64.59 L244.18 67.52 L245.49 70.86 L246.80 74.61 L248.11 78.72 L249.42 83.20 L250.73 88.01 L252.04 93.14 L253.36 98.55 L254.67 104.23 L255.98 110.13 L257.29 116.24 L258.60 122.53 L259.91 128.96 L261.22 135.51 L262.53 142.13 L263.84 148.80 L265.16 155.50 L266.47 162.17 L267.78 168.79 L269.09 175.34 L270.40 181.77 L271.71 188.06 L273.02 194.17 L274.33 200.07 L275.64 205.75 L276.96 211.16 L278.27 216.29 L279.58 221.10 L280.89 225.58 L282.20 229.69 L283.51 233.44 L284.82 236.78 L286.13 239.71 L287.44 242.22 L288.76 244.29 L290.07 245.91 L291.38 247.07 L292.69 247.77 L294.00 248.00 L295.31 247.77 L296.62 247.07 L297.93 245.91 L299.24 244.29 L300.56 242.22 L301.87 239.71 L303.18 236.78 L304.49 233.44 L305.80 229.69 L307.11 225.58 L308.42 221.10 L309.73 216.29 L311.04 211.16 L312.36 205.75 L313.67 200.07 L314.98 194.17 L316.29 188.06 L317.60 181.77 L318.91 175.34 L320.22 168.79 L321.53 162.17 L322.84 155.50 L324.16 148.80 L325.47 142.13 L326.78 135.51 L328.09 128.96 L329.40 122.53 L330.71 116.24 L332.02 110.13 L333.33 104.22 L334.64 98.55 L335.96 93.14 L337.27 88.01 L338.58 83.20 L339.89 78.72 L341.20 74.61 L342.51 70.86 L343.82 67.52 L345.13 64.59 L346.44 62.08 L347.76 60.01 L349.07 58.39 L350.38 57.23 L351.69 56.53 L353.00 56.30 L354.31 56.53 L355.62 57.23 L356.93 58.39 L358.24 60.01 L359.56 62.08 L360.87 64.59 L362.18 67.52 L363.49 70.86 L364.80 74.61 L366.11 78.72 L367.42 83.20 L368.73 88.01 L370.04 93.14 L371.36 98.55 L372.67 104.22 L373.98 110.13 L375.29 116.24 L376.60 122.53 L377.91 128.96 L379.22 135.51 L380.53 142.13 L381.84 148.80 L383.16 155.50 L384.47 162.17 L385.78 168.79 L387.09 175.34 L388.40 181.77 L389.71 188.06 L391.02 194.17 L392.33 200.08 L393.64 205.75 L394.96 211.16 L396.27 216.29 L397.58 221.10 L398.89 225.58 L400.20 229.69 L401.51 233.44 L402.82 236.78 L404.13 239.71 L405.44 242.22 L406.76 244.29 L408.07 245.91 L409.38 247.07 L410.69 247.77 L412.00 248.00 L413.31 247.77 L414.62 247.07 L415.93 245.91 L417.24 244.29 L418.56 242.22 L419.87 239.71 L421.18 236.78 L422.49 233.44 L423.80 229.69 L425.11 225.58 L426.42 221.10 L427.73 216.29 L429.04 211.16 L430.36 205.75 L431.67 200.07 L432.98 194.17 L434.29 188.06 L435.60 181.77 L436.91 175.34 L438.22 168.79 L439.53 162.17 L440.84 155.50 L442.16 148.80 L443.47 142.13 L444.78 135.51 L446.09 128.96 L447.40 122.53 L448.71 116.24 L450.02 110.13 L451.33 104.23 L452.64 98.55 L453.96 93.14 L455.27 88.01 L456.58 83.20 L457.89 78.72 L459.20 74.61 L460.51 70.86 L461.82 67.52 L463.13 64.59 L464.44 62.08 L465.76 60.01 L467.07 58.39 L468.38 57.23 L469.69 56.53 L471.00 56.30 L472.31 56.53 L473.62 57.23 L474.93 58.39 L476.24 60.01 L477.56 62.08 L478.87 64.59 L480.18 67.52 L481.49 70.86 L482.80 74.61 L484.11 78.72 L485.42 83.20 L486.73 88.01 L488.04 93.14 L489.36 98.55 L490.67 104.22 L491.98 110.13 L493.29 116.24 L494.60 122.53 L495.91 128.96 L497.22 135.51 L498.53 142.13 L499.84 148.80 L501.16 155.50 L502.47 162.17 L503.78 168.79 L505.09 175.34 L506.40 181.77 L507.71 188.06 L509.02 194.17 L510.33 200.08 L511.64 205.75 L512.96 211.16 L514.27 216.29 L515.58 221.10 L516.89 225.58 L518.20 229.69 L519.51 233.44 L520.82 236.78 L522.13 239.71 L523.44 242.22 L524.76 244.29 L526.07 245.91 L527.38 247.07 L528.69 247.77 L530.00 248.00"/>
          <g class="plot-legend">
            <line x1="350" y1="52" x2="378" y2="52" class="population-line singlet-line"/>
            <text x="386" y="56" class="svg-label">P<tspan baseline-shift="sub" font-size="8">S</tspan></text>
            <line x1="438" y1="52" x2="466" y2="52" class="population-line triplet-line"/>
            <text x="474" y="56" class="svg-label">P<tspan baseline-shift="sub" font-size="8">T</tspan></text>
          </g>
        </svg>
      </div>
    </div>
  </div>
</section>




<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">I</span>
    <div><p class="section-eyebrow">Interactive</p><h2>See how exchange competes with field-driven \(\Delta g\) mixing</h2></div>
  </div>

  <p>The previous widget treats coupling and detuning abstractly. A more physical reduced \(\{|S\rangle,|T_0\rangle\}\) model separates two roles: exchange produces an S–T energy gap, while magnetic inequivalence produces an off-diagonal coupling. For the simplest isotropic \(\Delta g\) contribution,</p>

  <div class="lecture-equation">
  \[
  \hat{\mathcal H}_\mathrm{ST}(B)
  \equiv
  \frac{\hat H_\mathrm{ST}(B)}{h}
  =
  \begin{pmatrix}
  -j/2&v(B)\\
  v(B)&+j/2
  \end{pmatrix},
  \]
  </div>

  <div class="lecture-equation">
  \[
  j\equiv\frac{J}{h},
  \qquad
  \Delta\nu_g(B)
  =
  \frac{\mu_B}{h}\,\Delta g\,B,
  \qquad
  v(B)
  =
  v_\mathrm{hf}+\frac{\Delta\nu_g(B)}{2}.
  \]
  </div>

  <p>Here \(v_\mathrm{hf}\) is a <em>signed projected matrix element</em> of a field-independent interaction in this chosen \(S/T_0\) subspace; hyperfine asymmetry is one possible source. The differential Zeeman term contributes \(\Delta\nu_g/2\) to the same off-diagonal matrix element and grows linearly with field. The scalar sum is therefore specific to this reduced real two-state representation—not a general rule for adding full hyperfine and Zeeman Hamiltonians. The eigenvalue gap, also in ordinary-frequency units, is</p>

  <div class="lecture-equation">
  \[
  \Omega(B)
  =
  \sqrt{
  j^2+4v(B)^2
  }.
  \]
  </div>

  <div class="interactive-card" id="rp-level-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Radical-pair level explorer</span><h3>Exchange separates S and T; magnetic inequivalence mixes them</h3></div>
      <span class="interactive-model-note">reduced \(S/T_0\) model</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="rp-level-field"><span class="control-name">Magnetic field \(B\)</span><output id="rp-level-field-out">100 mT</output></label>
        <input id="rp-level-field" type="range" min="0" max="1000" step="5" value="100">

        <label for="rp-level-j"><span class="control-name">Exchange gap \(J/h\)</span><output id="rp-level-j-out">10.0 MHz</output></label>
        <input id="rp-level-j" type="range" min="-60" max="60" step="0.5" value="10">

        <label for="rp-level-dg"><span class="control-name">\(\Delta g\)</span><output id="rp-level-dg-out">0.0050</output></label>
        <input id="rp-level-dg" type="range" min="-0.02" max="0.02" step="0.0001" value="0.005">

        <label for="rp-level-v"><span class="control-name">Field-independent mixing \(v_0\)</span><output id="rp-level-v-out">1.0 MHz</output></label>
        <input id="rp-level-v" type="range" min="0" max="20" step="0.2" value="1">

        <div class="demo-presets">
          <button type="button" data-rp-level="hyperfine">low-field mixing</button>
          <button type="button" data-rp-level="exchange">exchange dominated</button>
          <button type="button" data-rp-level="dg">high-field Δg mixing</button>
          <button type="button" data-rp-level="cancellation">signed cancellation</button>
        </div>

        <div class="interactive-readout">
          <span>Differential Zeeman \(\Delta\nu_g\) <strong id="rp-level-dg-split">7.0 MHz</strong></span>
          <span>Total mixing \(v(B)\) <strong id="rp-level-mixing">4.5 MHz</strong></span>
          <span>Adiabatic gap \(\Omega\) <strong id="rp-level-gap">13.5 MHz</strong></span>
          <span>Hybridization measure <strong id="rp-level-mixfrac">44.7%</strong></span>
        </div>

        <p id="rp-level-explanation" class="demo-explanation">Exchange still defines a substantial S–T energy gap, but field-dependent \(\Delta g\) mixing is no longer negligible.</p>
      </div>

      <div class="plot-wrap">
        <svg id="rp-level-svg" class="lecture-svg" viewBox="0 0 560 320" role="img" aria-label="Singlet-triplet levels versus magnetic field with field-dependent mixing">
          <line x1="58" y1="270" x2="530" y2="270" class="plot-axis"/>
          <line x1="58" y1="34" x2="58" y2="270" class="plot-axis"/>
          <line x1="58" y1="152" x2="530" y2="152" class="plot-grid"/>
          <text x="480" y="300" class="svg-caption">B / mT</text>
          <text x="10" y="38" class="svg-caption">E / h</text>
          <path id="rp-diabatic-s" class="rp-diabatic-line" fill="none" d=""/>
          <path id="rp-diabatic-t" class="rp-diabatic-line" fill="none" d=""/>
          <path id="rp-adiabatic-low" class="rp-adiabatic-line" fill="none" d=""/>
          <path id="rp-adiabatic-high" class="rp-adiabatic-line" fill="none" d=""/>
          <line id="rp-level-marker-line" x1="0" y1="34" x2="0" y2="270" class="rp-level-marker-line"/>
          <circle id="rp-level-marker-low" r="5" class="plot-marker" cx="0" cy="0"/>
          <circle id="rp-level-marker-high" r="5" class="plot-marker" cx="0" cy="0"/>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">The differential Zeeman contribution is represented in the \(S/T_0\) basis as an off-diagonal coupling. Real radical pairs additionally contain \(T_\pm\), nuclear-spin manifolds, anisotropic tensors, electron–electron dipolar coupling and often time-dependent \(J\) and \(D\).</p>
  </div>
</section>



<div class="lecture-flow-bridge">
  <p><strong>This is the point where the subject becomes chemistry.</strong> A radical pair can oscillate beautifully between spin characters, but nobody measures “the singlet coefficient” directly in a flask. The spin information matters because the singlet and triplet parts are allowed to react differently.</p>
</div>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Spin-selective reaction</p><h2>The observable is usually not the spin state itself</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Chemical kinetics acts as the detector of the quantum spin state</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Spin-selective recombination</strong>
        <p><b>What it is:</b> A chemical reaction whose rate depends on whether the radical pair has singlet or triplet spin character because orbital symmetry and spin conservation favour different product channels.</p>
        <p><b>What it changes:</b> It continuously converts spin populations into chemical loss, so reaction kinetics and spin dynamics compete on the same timescale.</p>
        <p><b>What you observe:</b> Different singlet/triplet product yields and field-dependent recombination kinetics.</p>
      </article>
      <article>
        <strong>Reaction rate \(k\)</strong>
        <p><b>What it is:</b> The probability per unit time for a particular chemical channel to remove or transform the radical pair.</p>
        <p><b>What it changes:</b> A very fast rate can terminate the pair before substantial spin mixing; a very slow rate allows more coherent evolution but also more time for relaxation.</p>
        <p><b>What you observe:</b> Radical-pair lifetime, transient decay and integrated reaction yield.</p>
      </article>
      <article>
        <strong>Reaction yield \(\Phi\)</strong>
        <p><b>What it is:</b> The time-integrated amount of product formed through a chosen spin-selective channel.</p>
        <p><b>What it changes:</b> It compresses the entire history of spin evolution and reaction into an experimentally accessible scalar observable.</p>
        <p><b>What you observe:</b> Magnetic-field effects reported as changes in fluorescence, absorption, product concentration or related chemical signals.</p>
      </article>
    </div>
  </div>


  <p>If singlet and triplet radical pairs react through different channels, the time-dependent spin character controls product formation. The key modelling point is that chemistry must act <em>during</em> the spin propagation rather than being attached only after a closed-system trajectory has finished.</p>

  <p>This is the important conceptual bridge: a quantum spin state evolves on nanosecond or microsecond timescales, while the experiment may report only a final chemical yield. The next section makes that simultaneous spin–reaction dynamics explicit.</p>
</section>

<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">P</span>
    <div><p class="section-eyebrow">From spin state to product yield</p><h2>Reaction kinetics continuously measures the evolving singlet and triplet character</h2></div>
  </div>

  <p>A useful way to connect the density matrix to chemistry is through singlet and triplet projectors, \(\hat P_S\) and \(\hat P_T\). In the standard Haberkorn description of first-order spin-selective loss, the reaction operator enters the equation of motion itself:</p>

  <div class="lecture-equation">
  \[
  \dot\rho
  =
  -\frac{i}{\hbar}[\hat H,\rho]
  -\frac12
  \left\{
  k_S\hat P_S+k_T\hat P_T,\rho
  \right\}.
  \]
  </div>

  <p>The corresponding integrated singlet yield is then</p>

  <div class="lecture-equation">
  \[
  \Phi_S
  =
  k_S
  \int_0^\infty
  \mathrm{Tr}\!\left[
  \hat P_S\,\rho(t)
  \right]dt.
  \]
  </div>

  <p>The reaction therefore does not wait until spin evolution is finished. Increasing \(k_S\) can increase the instantaneous probability of singlet reaction while simultaneously shortening the time available for further singlet–triplet mixing. This competition is why a reaction rate cannot be interpreted independently of the Hamiltonian and relaxation timescales.</p>

  <aside class="lecture-note">
    <strong>Reaction models are part of the physics.</strong>
    <span>The Haberkorn equation is a widely used effective description, not a universal microscopic law. Alternative radical-pair reaction operators make different assumptions about measurement, coherence and reaction products, so the chosen kinetic model should be stated when it can influence the observable.</span>
  </aside>

  
  <aside class="teacher-note">
    <strong>The yield is a time integral, not a snapshot.</strong>
    <span>Two radical pairs can have the same singlet probability at one instant and still produce different final yields if their lifetimes, relaxation or earlier spin history differ.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">Magnetic fields</p><h2>Why can weak fields matter at all?</h2></div>
  </div>

  <p>A magnetic field does not need to supply the reaction energy. It only needs to change the relative spin evolution before the radicals react or separate. That can alter the fraction of time spent in reactive singlet or triplet character.</p>

  <p>Static fields change Zeeman splittings and level structure. Oscillating RF or microwave fields can drive transitions when they are resonant with spin-energy differences. Whether an effect survives depends on the competition between coherent dynamics, relaxation, molecular motion and reaction kinetics.</p>

  <aside class="teacher-note"><strong>This is why “the field is too weak compared with \(k_BT\)” is not a decisive argument.</strong><span>The field is not competing thermodynamically with thermal energy; it is perturbing coherent spin evolution in a non-equilibrium reaction intermediate.</span></aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">07</span>
    <div><p class="section-eyebrow">Dynamic environments</p><h2>Proteins make the Hamiltonian time-dependent</h2></div>
  </div>

  <p>In a protein, \(J\), \(\mathbf D\), hyperfine tensors and even \(g\)-tensors fluctuate because the molecular geometry fluctuates. A compact way to write this is</p>

  <div class="lecture-equation">
  \[
  \hat H(t)=\hat H[\mathbf R(t)].
  \]
  </div>

  <p>This is where molecular dynamics, electronic structure and spin dynamics have to meet. A single optimized structure can be informative, but it may miss the distribution and time correlation of the interactions that actually control the spin evolution.</p>

  <aside class="research-connection">
    <span class="research-connection-label">Research connection</span>
    <p>The radical-pair Hamiltonian is not fixed inside a protein. In model flavin–tryptophan systems we explicitly connected protein motion and fluctuating magnetic interactions to the resulting magnetosensitivity.</p>
    <div class="research-connection-links">
      <a href="https://doi.org/10.1021/acs.jpcb.5c01187" target="_blank" rel="noopener"><strong>Magnetosensitivity of Model Flavin–Tryptophan Radical Pairs in a Dynamic Protein Environment</strong><span>J. Phys. Chem. B (2025)</span></a>
    </div>
  </aside>
</section>

<aside class="lecture-takeaway">
  <span class="lecture-takeaway-label">Take-home model</span>
  <h3>What actually creates a magnetic-field effect?</h3>
  <ul>
    <li>Singlet–triplet conversion requires Hamiltonian terms that do not commute with the singlet projector; magnetic inequivalence between the two radicals is central.</li>
    <li>Reaction kinetics competes continuously with coherent spin evolution, so lifetime and recombination rates are part of the magnetic-response mechanism.</li>
    <li>Hyperfine, Δg, exchange, dipolar coupling, relaxation and molecular motion all act on different field and time scales.</li>
  </ul>
</aside>

<aside class="landmark-study">
  <span class="landmark-label">Landmark spin chemistry</span>
  <h3>Spin-selective chemistry can make weak magnetic interactions chemically visible</h3>
  <p>The Steiner–Ulrich review consolidated the physical basis of magnetic-field effects in radical reactions: coherent spin evolution changes the probability of entering spin-selective chemical channels, so tiny magnetic energy scales can be amplified into a reaction yield.</p>
  <div class="landmark-footer">
    <a href="https://doi.org/10.1021/cr00091a003" target="_blank" rel="noopener">U. E. Steiner & T. Ulrich · Chemical Reviews 89, 51–147 (1989) →</a>
    <span>Magnetic Resonance deliberately drives the same spin transitions; Quantum Biology asks whether such chemistry can remain functionally relevant in proteins.</span>
  </div>
</aside>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">08</span>
    <div><p class="section-eyebrow">Selected reading</p><h2>Examples from my work</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>Dynamic radical pairs</span><h3>Magnetosensitivity of Model Flavin–Tryptophan Radical Pairs in a Dynamic Protein Environment</h3><p>How fluctuating protein environments influence magnetic-field sensitivity.</p><a href="https://doi.org/10.1021/acs.jpcb.5c01187" target="_blank" rel="noopener">J. Phys. Chem. B (2025) →</a></article>
    <article><span>Weak RF fields</span><h3>Weak Radiofrequency Field Effects on Biological Systems Mediated through the Radical Pair Mechanism</h3><p>A broad theoretical and experimental perspective on weak-field radical-pair effects.</p><a href="https://doi.org/10.1021/acs.chemrev.5c00178" target="_blank" rel="noopener">Chemical Reviews (2025) →</a></article>
    <article><span>Magnetic anisotropy</span><h3>Revealing the Impact of g-Tensor Anisotropy on the Charge Recombination in Donor–Acceptor Dyads Under High Magnetic Fields</h3><p>How \(g\)-tensor anisotropy modifies spin-dependent recombination.</p><a href="https://doi.org/10.1021/jacs.5c06173" target="_blank" rel="noopener">JACS (2025) →</a></article>
    <article><span>RYDMR</span><h3>Reaction-yield detected magnetic resonance spectroscopy of radical pairs in cryptochrome-4a</h3><p>Detecting spin resonance through a chemical reaction yield.</p><a href="https://doi.org/10.1016/j.freeradbiomed.2026.04.015" target="_blank" rel="noopener">Free Radic. Biol. Med. (2026) →</a></article>
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
      <span>Classic review</span>
      <h3>Magnetic field effects in chemical kinetics and related phenomena</h3>
      <p>U. E. Steiner and T. Ulrich · Chemical Reviews (1989). A foundational review of spin chemistry and magnetic-field effects in radical reactions.</p>
      <a href="https://doi.org/10.1021/cr00091a003" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Biological radical pairs</span>
      <h3>The Radical-Pair Mechanism of Magnetoreception</h3>
      <p>P. J. Hore and H. Mouritsen · Annual Review of Biophysics (2016). A tutorial review connecting radical-pair spin chemistry to biological magnetoreception.</p>
      <a href="https://doi.org/10.1146/annurev-biophys-032116-094545" target="_blank" rel="noopener">Open DOI →</a>
    </article>
      <article>
      <span>Spin-selective reaction operator</span>
      <h3>Density matrix description of spin-selective radical pair reactions</h3>
      <p>R. Haberkorn · Molecular Physics 32, 1491–1493 (1976). A foundational density-matrix formulation of spin-selective radical-pair reaction kinetics.</p>
      <a href="https://doi.org/10.1080/00268977600102851" target="_blank" rel="noopener">Open DOI →</a>
    </article>
  </div>
</section>
{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-interactive.js" defer></script>
<script src="{{ site.url }}/assets/js/lecture-radical-levels.js" defer></script>
