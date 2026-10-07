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

{% include lecture-connections.html %}


<aside class="lecture-note molspin-version-note">
  <strong>Version note — public reference used here</strong>
  <span>This page was checked against the public <code>MolSpin-Group/MolSpin</code> <code>main</code> branch at commit <code>cc7cc7f3cd8580e074318b7baae960d84a054bb0</code> on 6 October 2026. Development branches can contain newer task architectures; this lecture intentionally follows the pinned public files below.</span>
</aside>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Input anatomy</p><h2>Seven object types carry most of the scientific meaning</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Every input object should answer a physical question</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Spin & interaction objects</strong>
        <p><b>What it is:</b> They define the degrees of freedom and the Hamiltonian terms acting between them.</p>
        <p><b>What it changes:</b> They determine the energy levels and coherent quantum dynamics before any reaction or relaxation model is added.</p>
        <p><b>What you observe:</b> All subsequent simulated spectra, populations and yields inherit these choices.</p>
      </article>
      <article>
        <strong>State object</strong>
        <p><b>What it is:</b> It defines how the spin system is prepared at the start of the calculation or reaction step.</p>
        <p><b>What it changes:</b> Changing the initial singlet/triplet/coherent state can qualitatively change the dynamics even with the same Hamiltonian.</p>
        <p><b>What you observe:</b> Different transient populations, spin polarization and reaction yields.</p>
      </article>
      <article>
        <strong>Transition object</strong>
        <p><b>What it is:</b> It represents kinetic loss, recombination or transfer between states/systems rather than a Hamiltonian interaction.</p>
        <p><b>What it changes:</b> It competes with coherent spin evolution and sets how long the system has to explore spin-state space.</p>
        <p><b>What you observe:</b> Lifetimes, product yields and kinetic branching.</p>
      </article>
      <article>
        <strong>Task</strong>
        <p><b>What it is:</b> It selects the numerical interpretation of the model: static yield, time evolution, eigenvalues, spectroscopy and so on.</p>
        <p><b>What it changes:</b> It determines what equations are solved and which approximation/propagator is used.</p>
        <p><b>What you observe:</b> The form and meaning of the output; the same physical input can produce very different observables under different tasks.</p>
      </article>
    </div>
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

  <div class="lecture-equation">
  \[
  \texttt{Interaction}_q
  \longrightarrow
  \hat H_q,
  \qquad
  \hat H
  =
  \sum_q \hat H_q.
  \]
  </div>

  <p>The remaining objects can be read in the same mathematical way:</p>

  <div class="lecture-equation">
  \[
  \texttt{State}
  \longrightarrow
  \rho(0),
  \qquad
  \texttt{Transition/Relaxation}
  \longrightarrow
  \mathcal K[\rho]\ \text{or}\ \mathcal R[\rho],
  \qquad
  \texttt{Task}
  \longrightarrow
  \text{propagator + requested observable}.
  \]
  </div>

  <p>A useful conceptual master equation is therefore</p>

  <div class="lecture-equation">
  \[
  \dot\rho
  =
  -\frac{i}{\hbar}[\hat H,\rho]
  +
  \mathcal R[\rho]
  +
  \mathcal K[\rho],
  \]
  </div>

  <p>with the important caveat that different MolSpin tasks implement different subsets, approximations and representations of this general structure. Reading the input this way lets you debug the physics before you debug the parser.</p>

  <aside class="lecture-analogy">
    <span class="lecture-analogy-label">Mental model</span>
    <h3>A MolSpin input is closer to a circuit diagram than to a settings file</h3>
    <p>The spins are the degrees of freedom, interactions wire them together into a Hamiltonian, the initial state charges the circuit, transitions and relaxation add non-unitary channels, and the task specifies how the circuit is driven or read out. Changing one object therefore changes the mathematical model, not merely a software preference.</p>
    <span class="analogy-limit"><strong>Where the analogy breaks:</strong> the underlying object is a quantum dynamical equation, not an electrical network. The analogy is useful only for seeing that syntax encodes physical connectivity and operations.</span>
  </aside>
</section>


<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">I</span>
    <div><p class="section-eyebrow">Interactive model builder</p><h2>Build the equation before you build the input file</h2></div>
  </div>

  <p>This simplified builder assumes spin-\(\tfrac12\) particles and translates modelling choices into the structure of the dynamical equation. It is deliberately not a MolSpin input generator: its purpose is to check the physics first.</p>

  <div class="interactive-card" id="molspin-builder">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Input-to-equation mapper</span><h3>Which choices belong in \(H\), and which do not?</h3></div>
      <span class="interactive-model-note">model anatomy</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="builder-electrons"><span class="control-name">Electron spins</span><output id="builder-electrons-out">2</output></label>
        <input id="builder-electrons" type="range" min="1" max="4" step="1" value="2">

        <label for="builder-nuclei"><span class="control-name">Nuclear spins</span><output id="builder-nuclei-out">2</output></label>
        <input id="builder-nuclei" type="range" min="0" max="8" step="1" value="2">

        <div class="builder-checks">
          <label><input id="builder-zeeman" type="checkbox" checked> Zeeman interaction</label>
          <label><input id="builder-hyperfine" type="checkbox" checked> Hyperfine interaction</label>
          <label><input id="builder-exchange" type="checkbox" checked> Electron exchange</label>
          <label><input id="builder-drive" type="checkbox"> Time-dependent RF / microwave drive</label>
          <label><input id="builder-relax" type="checkbox"> Relaxation / dephasing</label>
          <label><input id="builder-reaction" type="checkbox" checked> Spin-selective reaction</label>
        </div>

        <div class="interactive-readout">
          <span>Hilbert dimension \(D\) <strong id="builder-dim">16</strong></span>
          <span>Density-matrix elements \(D^2\) <strong id="builder-rho-dim">256</strong></span>
          <span>Dynamical class <strong id="builder-class">reactive spin dynamics</strong></span>
        </div>

        <p id="builder-explanation" class="demo-explanation">The Hamiltonian contains Zeeman, hyperfine and exchange terms; the reaction is a kinetic term and does not belong inside \(H\).</p>
      </div>

      <div>
        <pre class="molspin-code builder-equation"><code id="builder-equation">H = H_Z + H_hf + H_ex
dρ/dt = -(i/ħ)[H,ρ] + K_reaction[ρ]</code></pre>
        <div class="physical-concept-panel compact-panel">
          <div class="physical-concept-head"><span>Model check</span><h3 id="builder-check-title">The ingredients are physically consistent</h3></div>
          <div class="physical-concept-grid">
            <article><strong>Hamiltonian objects</strong><p id="builder-hamiltonian-note">Zeeman, hyperfine and exchange change coherent spin evolution and therefore belong in \(\hat H\).</p></article>
            <article><strong>Non-unitary objects</strong><p id="builder-nonunitary-note">The reaction changes population irreversibly and is represented outside the Hamiltonian.</p></article>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Most simulation mistakes are unit, frame or model-definition mistakes before they are algorithmic mistakes</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Units</strong>
        <p><b>What it is:</b> Spin parameters may be specified as energy, angular frequency, ordinary frequency, field units or code-specific scaled values.</p>
        <p><b>What it changes:</b> A missing factor of \(2\pi\), \(\hbar\) or a unit conversion changes the physical timescale even if the input parses correctly.</p>
        <p><b>What you observe:</b> Resonances, oscillation periods or relaxation times displaced by large systematic factors.</p>
      </article>
      <article>
        <strong>Tensor frame</strong>
        <p><b>What it is:</b> An anisotropic tensor has principal values and a specific orientation relative to the molecular/laboratory frame.</p>
        <p><b>What it changes:</b> Using the correct numbers in the wrong frame changes orientation-dependent dynamics and spectra.</p>
        <p><b>What you observe:</b> Wrong powder patterns, angular dependences and anisotropic radical-pair yields.</p>
      </article>
      <article>
        <strong>Initial-state convention</strong>
        <p><b>What it is:</b> The same labels such as singlet, triplet or polarized state must correspond to the spin ordering and basis used by the input.</p>
        <p><b>What it changes:</b> A mismatched state definition changes the entire transient even if the Hamiltonian is correct.</p>
        <p><b>What you observe:</b> Qualitatively wrong early-time populations, polarization or reaction yields.</p>
      </article>
    </div>
  </div>


  <div class="method-ladder">
    <div><span>1. Spins</span><p>Check quantum numbers, electron/nuclear identity and tensor definitions before touching the task.</p></div>
    <div><span>2. Hamiltonian</span><p>Check units, prefactors, groups and tensor frames. A numerically valid interaction can still represent the wrong physics.</p></div>
    <div><span>3. Initial state</span><p>Verify that the state or mixed ensemble corresponds to the preparation mechanism you intend to model.</p></div>
    <div><span>4. Kinetics</span><p>Check whether transitions are spin selective, spin independent or transfers between systems.</p></div>
    <div><span>5. Task capability</span><p>Use a task that supports the interactions, decay model and time dependence present in the system.</p></div>
    <div><span>6. Convergence</span><p>Only after the model is correct should you tune timestep, stochastic samples, orientation grids or propagator tolerances.</p></div>
  </div>

  <aside class="research-connection">
    <span class="research-connection-label">Research connection</span>
    <p>The public examples are easier to understand when read alongside the methods papers: the syntax mirrors a progression from a general spin-dynamics engine to explicit relaxation and stochastic propagation.</p>
    <div class="research-connection-links">
      <a href="https://doi.org/10.1002/jcc.27120" target="_blank" rel="noopener"><strong>Modeling spin relaxation in complex radical systems using MolSpin</strong><span>J. Comput. Chem. (2023)</span></a>
      <a href="https://doi.org/10.1021/acs.jctc.4c00361" target="_blank" rel="noopener"><strong>Spin Dynamics of Radical Pairs Using the Stochastic Schrödinger Equation in MolSpin</strong><span>J. Chem. Theory Comput. (2024)</span></a>
    </div>
  </aside>
</section>


<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">P</span>
    <div><p class="section-eyebrow">Reproducibility contract</p><h2>An input file is incomplete without units, conventions and software version</h2></div>
  </div>

  <div class="observable-list">
    <div><strong>Units</strong><span>Record whether magnetic interactions are entered as field, ordinary frequency, angular frequency or energy; factors of \(2\pi\), \(h\) and \(\hbar\) are not cosmetic.</span></div>
    <div><strong>Sign conventions</strong><span>State the exchange convention, gyromagnetic-ratio signs and tensor-axis conventions needed to interpret parameters.</span></div>
    <div><strong>Reference frames</strong><span>Record how molecular tensors are oriented relative to one another and to the laboratory frame.</span></div>
    <div><strong>Software state</strong><span>Keep the exact MolSpin commit/release, random seeds where relevant, and convergence settings with the scientific input.</span></div>
  </div>

  <p>A reproducible calculation should make it possible for another researcher to reconstruct the same Hamiltonian before they ever inspect the numerical output.</p>

  <aside class="teacher-note">
    <strong>Benchmark before complexity.</strong>
    <span>Before running a large radical-pair model, reduce the input to a limit with a known answer: one uncoupled spin, zero coupling, identical \(g\)-values, vanishing relaxation or a tiny system that can be solved by direct matrix exponentiation. Agreement in these limits tests the model definition and the numerical task separately from the complexity of the full calculation.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">07</span>
    <div><p class="section-eyebrow">Public main versus development branches</p><h2>Do not mix syntax from different generations of MolSpin</h2></div>
  </div>

  <p>The examples above are intentionally pinned to commit <code>cc7cc7f3cd8580e074318b7baae960d84a054bb0</code>, so the lecture remains reproducible even if the repository evolves later. Active development can introduce unified task classes, new stochastic methods or changed property names before those interfaces become the public reference.</p>

  <aside class="lecture-note">
    <strong>For reproducibility:</strong>
    <span>record the MolSpin commit or release together with the input file. A scientifically meaningful input is tied to the parser and task implementation that interpreted it.</span>
  </aside>
</section>

<aside class="lecture-takeaway">
  <span class="lecture-takeaway-label">Take-home model</span>
  <h3>Read every input file as an equation</h3>
  <ul>
    <li>Spin and Interaction objects define the Hilbert space and Hamiltonian; State defines the preparation; transitions and relaxation define non-unitary dynamics.</li>
    <li>The Task selects which mathematical problem is solved and which observable is reported, so syntax and numerical method cannot be separated from the physical model.</li>
    <li>A reproducible MolSpin calculation records units, tensor frames, sign conventions, stochastic settings and the exact software version together with the input.</li>
  </ul>
</aside>

<aside class="landmark-study">
  <span class="landmark-label">Simulation ecosystem</span>
  <h3>MolSpin sits in a broader ecosystem of spin-dynamics software</h3>
  <p>EasySpin and Spinach illustrate two complementary traditions: detailed EPR spectral simulation and large-scale spin-dynamics propagation. MolSpin's emphasis on general radical-pair/open-system workflows is easier to understand when viewed alongside both.</p>
  <div class="landmark-footer">
    <a href="https://doi.org/10.1016/j.jmr.2005.08.013" target="_blank" rel="noopener">S. Stoll & A. Schweiger (2006); H. J. Hogben et al. (2011) →</a>
    <span>The important transferable skill is therefore the model decomposition—spins, interactions, states, kinetics and propagation—not memorizing one program's syntax.</span>
  </div>
</aside>

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
<script src="{{ site.url }}/assets/js/lecture-molspin-builder.js" defer></script>
</div>
