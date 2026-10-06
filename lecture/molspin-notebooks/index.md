---
layout: page
title: Worked MolSpin Examples
excerpt: "Read real public MolSpin input files as scientific models"
permalink: /lecture/molspin-notebooks/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 13</span>
  <h2>Read the input as a scientific model, not as configuration noise</h2>
  <p>A MolSpin input file encodes a physical problem: which spins exist, how they interact, how the state is prepared, which kinetic processes are present and which numerical task turns that model into an observable. This module walks through real examples from the public MolSpin repository.</p>
</header>
<section class="module-learning" aria-label="Learning goals">
  <div class="module-learning-head"><span>After this module</span><strong>You should be able to…</strong></div>
  <div class="module-learning-grid">
    <div><span>01</span><p>Map each MolSpin input object onto the physical model it represents.</p></div>
    <div><span>02</span><p>Choose a task whose numerical capabilities match the Hamiltonian, kinetics and time dependence.</p></div>
    <div><span>03</span><p>Record software versions, units and convergence settings so that a simulation remains reproducible.</p></div>
  </div>
</section>


<aside class="lecture-note molspin-version-note">
  <strong>Version note — public reference used here</strong>
  <span>This page was checked against the public <code>MolSpin-Group/MolSpin</code> <code>main</code> branch at commit <code>cc7cc7f3cd8580e074318b7baae960d84a054bb0</code> on 6 October 2026. Development branches can contain newer task architectures; this lecture intentionally follows the pinned public files below.</span>
</aside>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Input anatomy</p><h2>Seven object types carry most of the scientific meaning</h2></div>
  </div>

  <div class="observable-list">
    <div><strong>SpinSystem</strong><span>Defines one spin system and contains its spins, interactions, states, transitions and properties.</span></div>
    <div><strong>Spin</strong><span>Defines an electron or nuclear spin, its spin quantum number and optional tensor information.</span></div>
    <div><strong>Interaction</strong><span>Defines Zeeman, hyperfine, exchange or other Hamiltonian terms and the spins they act on.</span></div>
    <div><strong>State</strong><span>Defines projectors or named spin states such as singlet and triplet states.</span></div>
    <div><strong>Transition</strong><span>Adds kinetic processes such as sink reactions or transfers between spin systems.</span></div>
    <div><strong>Settings / Action / Output</strong><span>Controls scans and auxiliary values that should be changed or written during a calculation.</span></div>
    <div><strong>Run / Task</strong><span>Selects the numerical calculation and its output files.</span></div>
  </div>

  <p>The syntax is therefore easier to understand if you read it in the order <strong>physical system → Hamiltonian → state preparation → kinetics → numerical task</strong>.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Notebook A</p><h2>Static radical pair and orientation scan</h2></div>
  </div>

  <p>The public file <code>Example/standard_examples/example.msd</code> defines two electron spins, two nuclear spins, a Zeeman interaction and two hyperfine interactions. It then constructs singlet and triplet states, applies a spin-independent decay and rotates the magnetic field between calculation steps.</p>

  <p>A short anatomy excerpt looks like this:</p>

  <pre class="molspin-code"><code>Spin electron1
{
    type = electron;
}

Interaction zeeman1
{
    type = Zeeman;
    field = "0 0 0.05";
    spins = electron1, electron2;
    prefactor = 0.001;
}

State Singlet
{
    spins(electron1,electron2)
        = |1/2,-1/2> - |-1/2,1/2>;
}</code></pre>

  <p>The same public example demonstrates several task classes: <code>StaticSS</code>, <code>StaticHS-SymmetricDecay</code>, <code>RP-SymmetricUncoupled</code> and <code>Eigenvalues</code>. This is useful because the physical spin system stays almost the same while the numerical question changes.</p>

  <div class="notebook-links">
    <a href="https://github.com/MolSpin-Group/MolSpin/blob/cc7cc7f3cd8580e074318b7baae960d84a054bb0/Example/standard_examples/example.msd" target="_blank" rel="noopener">Open pinned example.msd →</a>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Notebook B</p><h2>Time-dependent fields and interactions</h2></div>
  </div>

  <p>The public <code>time_dependent_example.msd</code> shows that time dependence belongs to the interaction itself. The file contains linearly polarized and circularly polarized Zeeman fields, broadband modulation, Ornstein–Uhlenbeck modulation and time-dependent hyperfine tensors.</p>

  <pre class="molspin-code"><code>Interaction linearpolarized
{
    type = Zeeman;
    field = "0.0 0 0.05";
    spins = electron1, electron2;
    fieldtype = LinearPolarized;
    frequency = 1e-2;
    phase = 0;
}</code></pre>

  <p>Its run section uses the public task name <code>DynamicHS-Direct-TimeEvo</code>. The important modelling lesson is that a time-dependent simulation requires both a time-dependent Hamiltonian object and a task that actually supports time-dependent propagation.</p>

  <div class="notebook-links">
    <a href="https://github.com/MolSpin-Group/MolSpin/blob/cc7cc7f3cd8580e074318b7baae960d84a054bb0/Example/standard_examples/time_dependent_example.msd" target="_blank" rel="noopener">Open pinned time-dependent example →</a>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Notebook C</p><h2>Pulses and spectroscopy</h2></div>
  </div>

  <p>The public spectroscopy example introduces <code>Pulse</code> and <code>PulseSequence</code> objects. It contains instantaneous pulses, finite-duration pulses and a run task using <code>MultiStaticSS-timeevolution</code>.</p>

  <pre class="molspin-code"><code>Pulse pulse1
{
    type = InstantPulse;
    angle = 90;
    rotationaxis = "1 0 0";
    group = E1,E2,H1,H2;
}

PulseSequence seq
{
    tau1 = 10;
    tau2 = 15;
    sequence = pulse1, tau1, pulse2, tau2;
}</code></pre>

  <p>The same example enables chemically induced spin polarization through <code>cidsp = true</code> and specifies the spins for which polarization should be evaluated.</p>

  <div class="notebook-links">
    <a href="https://github.com/MolSpin-Group/MolSpin/blob/cc7cc7f3cd8580e074318b7baae960d84a054bb0/Example/spectroscopy/Spectroscopy_example.msd" target="_blank" rel="noopener">Open pinned spectroscopy example →</a>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Notebook D</p><h2>Multiple communicating radical-pair systems</h2></div>
  </div>

  <p>The public <code>TwoRadicalPairs-Example.msd</code> defines two separate <code>SpinSystem</code> blocks and uses transitions with <code>targetsystem</code> and <code>targetstate</code> to transfer population between them.</p>

  <p>This is the useful conceptual step: a kinetic network can contain several spin Hamiltonians rather than forcing the entire reaction sequence into one static spin system.</p>

  <div class="notebook-links">
    <a href="https://github.com/MolSpin-Group/MolSpin/blob/cc7cc7f3cd8580e074318b7baae960d84a054bb0/Example/RadicalPairs/TwoRadicalPairs-Example.msd" target="_blank" rel="noopener">Open pinned two-radical-pair example →</a>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">How to debug an input</p><h2>Work from physics outward</h2></div>
  </div>

  <div class="method-ladder">
    <div><span>1. Spins</span><p>Check quantum numbers, electron/nuclear identity and tensor definitions before touching the task.</p></div>
    <div><span>2. Hamiltonian</span><p>Check units, prefactors, groups and tensor frames. A numerically valid interaction can still represent the wrong physics.</p></div>
    <div><span>3. Initial state</span><p>Verify that the state or mixed ensemble corresponds to the preparation mechanism you intend to model.</p></div>
    <div><span>4. Kinetics</span><p>Check whether transitions are spin selective, spin independent or transfers between systems.</p></div>
    <div><span>5. Task capability</span><p>Use a task that supports the interactions, decay model and time dependence present in the system.</p></div>
    <div><span>6. Convergence</span><p>Only after the model is correct should you tune timestep, stochastic samples, orientation grids or propagator tolerances.</p></div>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">07</span>
    <div><p class="section-eyebrow">Public main versus development branches</p><h2>Do not mix syntax from different generations of MolSpin</h2></div>
  </div>

  <p>The public examples above describe the repository state pinned at commit <code>cc7cc7f3cd8580e074318b7baae960d84a054bb0</code>. Active development can introduce unified task classes, new stochastic methods or changed property names before those interfaces become the public reference.</p>

  <aside class="lecture-note">
    <strong>For reproducibility:</strong>
    <span>record the MolSpin commit or release together with the input file. A scientifically meaningful input is tied to the parser and task implementation that interpreted it.</span>
  </aside>
</section>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">08</span>
    <div><p class="section-eyebrow">Methods papers</p><h2>What the software is designed to solve</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>Foundational software</span><h3>MolSpin—Flexible and extensible general spin dynamics software</h3><p>The foundational MolSpin publication by Claus Nielsen and Ilia A. Solov’yov.</p><a href="https://doi.org/10.1063/1.5125043" target="_blank" rel="noopener">J. Chem. Phys. (2019) →</a></article>
    <article><span>Relaxation</span><h3>Modeling spin relaxation in complex radical systems using MolSpin</h3><p>Extends the framework toward open-system relaxation in complex radical systems.</p><a href="https://doi.org/10.1002/jcc.27120" target="_blank" rel="noopener">J. Comput. Chem. (2023) →</a></article>
    <article><span>Stochastic dynamics</span><h3>Spin Dynamics of Radical Pairs Using the Stochastic Schrödinger Equation in MolSpin</h3><p>Develops stochastic state-vector propagation for larger radical-pair spin systems.</p><a href="https://doi.org/10.1021/acs.jctc.4c00361" target="_blank" rel="noopener">J. Chem. Theory Comput. (2024) →</a></article>
  </div>

  <p class="lecture-all-pubs"><a href="https://github.com/MolSpin-Group/MolSpin/tree/cc7cc7f3cd8580e074318b7baae960d84a054bb0/Example" target="_blank" rel="noopener">Browse the pinned public Example directory →</a></p>
</section>


<section class="lecture-section external-reading">
  <div class="lecture-section-head">
    <span class="lecture-index literature-index">L</span>
    <div><p class="section-eyebrow">Key external literature</p><h2>Where to read next</h2></div>
  </div>
  <p class="external-reading-intro">These are deliberately selected from outside my own work: foundational papers or reviews that are especially useful for this topic.</p>
  <div class="lecture-reading-grid external-literature-grid">
    <article>
      <span>EPR software ecosystem</span>
      <h3>EasySpin, a comprehensive software package for spectral simulation and analysis in EPR</h3>
      <p>S. Stoll and A. Schweiger · Journal of Magnetic Resonance (2006). A complementary reference for EPR-oriented spin-Hamiltonian simulation and analysis.</p>
      <a href="https://doi.org/10.1016/j.jmr.2005.08.013" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Large-scale spin dynamics</span>
      <h3>Spinach – A software library for simulation of spin dynamics in large spin systems</h3>
      <p>H. J. Hogben et al. · Journal of Magnetic Resonance (2011). A useful comparison for numerical representations and large-system spin-dynamics strategies.</p>
      <a href="https://doi.org/10.1016/j.jmr.2010.11.008" target="_blank" rel="noopener">Open DOI →</a>
    </article>
  </div>
</section>
{% include lecture-library-nav.html %}
</div>
