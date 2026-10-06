---
layout: page
title: Radical-Pair Spin Chemistry
excerpt: "When quantum spin dynamics changes a chemical reaction"
permalink: /lecture/radical-pairs/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 03</span>
  <h2>Turn spin dynamics into chemistry</h2>
  <p>A radical pair is one of the cleanest places where quantum spin dynamics becomes chemically observable. The spins evolve coherently, but the singlet and triplet parts of the state can react differently. Change the spin evolution and you can change the reaction yield.</p>
</header>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Formation</p><h2>How do we get a spin-correlated radical pair?</h2></div>
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

  <p>A useful schematic radical-pair Hamiltonian is</p>

  <div class="lecture-equation">
  \[
  \hat H_\mathrm{RP}
  =
  \hat H_Z+\hat H_\mathrm{hf}+\hat H_J+\hat H_D+\cdots.
  \]
  </div>

  <p>The crucial ingredient is usually a <strong>difference</strong> between the magnetic environments of the two radicals. If both electron spins experienced exactly the same Hamiltonian, there would be much less opportunity to change the total singlet/triplet character. Hyperfine asymmetry, \(g\)-tensor differences and anisotropic interactions provide the required inequivalence.</p>

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

  <p>This model deliberately throws away most of the real radical-pair complexity. It keeps only one effective singlet state, one effective triplet state, a coupling \(V\) and a detuning \(\Delta\). That is enough to see resonance and off-resonance behaviour.</p>

  <div class="interactive-card" id="st-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Coupling versus detuning</h3></div>
      <span class="interactive-model-note">effective two-level system</span>
    </div>

    <div class="lecture-equation-grid">
      <div class="lecture-equation compact">
      \[
      \frac{H}{h}=
      \begin{pmatrix}
      0&V\\
      V&\Delta
      \end{pmatrix}
      \]
      </div>
      <div class="lecture-equation compact">
      \[
      \begin{aligned}
      P_T(t)&=A\sin^2(\pi\Omega t),\\
      A&=\frac{4V^2}{\Delta^2+4V^2},\\
      \Omega&=\sqrt{\Delta^2+4V^2}.
      \end{aligned}
      \]
      </div>
    </div>

    <div class="demo-prompt"><strong>Try this:</strong><span>put the states on resonance with \(\Delta=0\), then increase detuning. The oscillation can remain fast while the maximum transfer amplitude collapses.</span></div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="st-coupling"><span class="control-name">Effective coupling \(V\)</span><output id="st-coupling-out">3.00 MHz</output></label>
        <input id="st-coupling" type="range" min="0.1" max="10" step="0.1" value="3">
        <label for="st-detuning"><span class="control-name">Detuning \(\Delta\)</span><output id="st-detuning-out">2.00 MHz</output></label>
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
          <path id="singlet-path" class="population-line singlet-line" fill="none" d=""/>
          <path id="triplet-path" class="population-line triplet-line" fill="none" d=""/>
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
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Spin-selective reaction</p><h2>The observable is usually not the spin state itself</h2></div>
  </div>

  <p>If singlet and triplet radical pairs react through different channels, the time-dependent spin character controls product formation. Schematically,</p>

  <div class="lecture-equation">
  \[
  \Phi_S=k_S\int_0^\infty
  \mathrm{Tr}\!\left[\hat P_S\rho(t)\right]\,dt,
  \]
  </div>

  <p>with the reaction kinetics included consistently in the propagation of \(\rho(t)\). This is the important conceptual bridge: a quantum spin state evolves on nanosecond or microsecond timescales, but we may observe only a final chemical yield.</p>
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
</section>

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

{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-interactive.js" defer></script>
