---
layout: page
title: Lecture
excerpt: "A growing library on electronic structure, spin dynamics and spin chemistry"
permalink: /lecture/
---

<div class="lecture-library">

<header class="library-intro">
  <p class="library-kicker">Lecture library</p>
  <h2>From electrons to quantum dynamics, spectroscopy and chemistry</h2>
  <p>I am building this as a set of short, connected lectures rather than one very long page. The core route starts with the electronic problem, reduces it to an effective Hamiltonian, propagates the quantum state in time and then connects the dynamics to spectroscopy, chemistry or a biological observable.</p>
  <p class="library-note">Each module starts with explicit learning goals. Important quantities are explained through short physical-meaning panels—what the quantity is, where it enters the dynamics and what an experiment actually sees because of it. Each lecture then ends with two reading layers: examples from my own work and a short list of foundational or review papers from other groups.</p>

  <div class="library-flow" aria-label="Lecture library concept">
    <span>electronic structure</span>
    <b>→</b>
    <span>magnetic parameters</span>
    <b>→</b>
    <span>spin Hamiltonian</span>
    <b>→</b>
    <span>spin dynamics &amp; motion</span>
    <b>→</b>
    <span>chemistry &amp; spectroscopy</span>
    <b>→</b>
    <span>molecular / biological applications</span>
  </div>

  <div class="library-use-grid" aria-label="Ways to use the lecture library">
    <div>
      <span>01 · Learn linearly</span>
      <strong>Follow the derivation</strong>
      <p>Start with Modules 01–03 and move from electronic structure to an effective spin Hamiltonian and finally to time evolution.</p>
    </div>
    <div>
      <span>02 · Enter by question</span>
      <strong>Jump to the physics you need</strong>
      <p>Use the module map and local contents to move directly to EPR, electron transfer, relaxation, photochemistry or biological mechanisms.</p>
    </div>
    <div>
      <span>03 · Learn by changing parameters</span>
      <strong>Use the interactives</strong>
      <p>Change fields, couplings, rates and timescales, then return to the equations and ask which term caused the observed response.</p>
    </div>
  

  <div class="library-recommended-route">
    <span>Recommended dependency route</span>
    <h3>Follow the physics, not just the module numbers</h3>
    <p>The module numbers are stable identifiers. For a first complete pass, this order follows the actual conceptual dependencies more closely and avoids learning an application before its underlying theory.</p>
    <div class="library-route-groups">
      <div class="library-route-row">
        <strong>Foundations</strong>
        <div class="library-route-links">
          <a href="{{ site.url }}/lecture/electronic-structure/">01 Electronic structure</a><b>→</b>
          <a href="{{ site.url }}/lecture/spin-hamiltonians/">02 Spin Hamiltonians</a><b>→</b>
          <a href="{{ site.url }}/lecture/spin-dynamics/">03 Spin Dynamics</a>
        </div>
      </div>
      <div class="library-route-row">
        <strong>Environment &amp; irreversibility</strong>
        <div class="library-route-links">
          <a href="{{ site.url }}/lecture/molecular-motion/">07 Molecular Motion</a><b>→</b>
          <a href="{{ site.url }}/lecture/open-systems/">09 Open Systems</a>
        </div>
      </div>
      <div class="library-route-row">
        <strong>Prepare reactive spin states</strong>
        <div class="library-route-links">
          <a href="{{ site.url }}/lecture/excited-state-photochemistry/">11 Photochemistry</a><b>→</b>
          <a href="{{ site.url }}/lecture/electron-transfer/">06 Electron Transfer</a><b>→</b>
          <a href="{{ site.url }}/lecture/radical-pairs/">04 Radical Pairs</a>
        </div>
      </div>
      <div class="library-route-row">
        <strong>Measure &amp; control</strong>
        <div class="library-route-links">
          <a href="{{ site.url }}/lecture/magnetic-resonance/">05 Magnetic Resonance</a><b>→</b>
          <a href="{{ site.url }}/lecture/coherent-control/">12 Coherent Control</a>
        </div>
      </div>
      <div class="library-route-row">
        <strong>Integrate &amp; implement</strong>
        <div class="library-route-links">
          <a href="{{ site.url }}/lecture/quantum-biology/">10 Quantum Biology</a>
          <b>·</b>
          <a href="{{ site.url }}/lecture/computational-lab/">08 Computational Lab</a><b>→</b>
          <a href="{{ site.url }}/lecture/molspin-notebooks/">13 MolSpin</a>
        </div>
      </div>
    </div>
  </div></div>
</header>

<section class="library-section">
  <p class="section-eyebrow">Available now</p>
  <h2>Lecture modules</h2>

  <div class="library-grid">
    <div class="library-group-label">
      <span>Path I</span><strong>Foundations</strong>
      <p>Build the electronic model, reduce it to a spin Hamiltonian and learn how that Hamiltonian generates dynamics.</p>
    </div>

    <article class="library-card">
      <div class="library-card-top">
        <span class="library-number">01</span>
        <span class="library-tag">1 interactive</span>
      </div>
      <h3>Electronic Structure</h3>
      <p>Start with the many-electron problem, then derive how energies, spin densities and response properties become \(g\), hyperfine, exchange, dipolar and ZFS parameters.</p>
      <ul>
        <li>Born–Oppenheimer picture</li>
        <li>HF, DFT &amp; correlation</li>
        <li>Basis sets &amp; excited states</li>
        <li>\(g\), hyperfine, \(J\), \(D\), SOC and ZFS</li>
      </ul>
      <div class="library-card-footer">
        <span>Fundamentals → advanced</span>
        <a href="{{ site.url }}/lecture/electronic-structure/">Open lecture →</a>
      </div>
    </article>

    <article class="library-card">
      <div class="library-card-top">
        <span class="library-number">02</span>
        <span class="library-tag">1 interactive</span>
      </div>
      <h3>Spin Hamiltonians</h3>
      <p>Map ab initio magnetic properties onto an effective spin Hamiltonian and then interpret Zeeman, hyperfine, exchange, dipolar, quadrupole and ZFS terms.</p>
      <ul>
        <li>electron &amp; nuclear Zeeman terms</li>
        <li>response tensors &amp; spin-density integrals</li>
        <li>energy-to-\(J\) and dipolar mapping</li>
        <li>quadrupole, ZFS &amp; conventions</li>
      </ul>
      <div class="library-card-footer">
        <span>Graduate foundation</span>
        <a href="{{ site.url }}/lecture/spin-hamiltonians/">Open lecture →</a>
      </div>
    </article>

    <article class="library-card">
      <div class="library-card-top">
        <span class="library-number">03</span>
        <span class="library-tag">2 interactives</span>
      </div>
      <h3>Spin Dynamics</h3>
      <p>What does a spin Hamiltonian actually do? We move from spin-\(\tfrac12\) and Larmor precession to density matrices, relaxation and open quantum systems.</p>
      <ul>
        <li>parameter-to-operator matrix construction</li>
        <li>density matrices &amp; observables</li>
        <li>\(T_1\), \(T_2\) and dephasing</li>
        <li>BRW, stochastic propagation &amp; memory effects</li>
      </ul>
      <div class="library-card-footer">
        <span>Fundamentals → graduate</span>
        <a href="{{ site.url }}/lecture/spin-dynamics/">Open lecture →</a>
      </div>
    </article>

    <div class="library-group-label">
      <span>Path II</span><strong>Spin chemistry &amp; molecular environment</strong>
      <p>Connect spin dynamics to reactions, spectroscopy, electron transfer and molecular motion.</p>
    </div>

    <article class="library-card">
      <div class="library-card-top">
        <span class="library-number">04</span>
        <span class="library-tag">1 interactive</span>
      </div>
      <h3>Radical-Pair Spin Chemistry</h3>
      <p>Here quantum spin dynamics becomes chemistry. We derive when a Hamiltonian can change singlet character, then connect that mixing to spin-selective reactions and magnetic-field effects.</p>
      <ul>
        <li>singlet &amp; triplet basis</li>
        <li>S–T mixing and reaction yields</li>
        <li>static and RF magnetic fields</li>
        <li>dynamic radical pairs &amp; biological systems</li>
      </ul>
      <div class="library-card-footer">
        <span>Graduate / research introduction</span>
        <a href="{{ site.url }}/lecture/radical-pairs/">Open lecture →</a>
      </div>
    </article>

    <article class="library-card">
      <div class="library-card-top">
        <span class="library-number">05</span>
        <span class="library-tag">2 interactives</span>
      </div>
      <h3>Magnetic Resonance</h3>
      <p>Connect spin-energy levels to experiment: EPR resonance, hyperfine structure, anisotropic g-tensors, powder patterns, linewidths and RYDMR.</p>
      <ul>
        <li>resonance condition &amp; EPR bands</li>
        <li>hyperfine splitting</li>
        <li>g-anisotropy &amp; powder spectra</li>
        <li>CW, trEPR, pulse concepts &amp; RYDMR</li>
      </ul>
      <div class="library-card-footer">
        <span>Graduate / experimental connection</span>
        <a href="{{ site.url }}/lecture/magnetic-resonance/">Open lecture →</a>
      </div>
    </article>

    <article class="library-card">
      <div class="library-card-top">
        <span class="library-number">06</span>
        <span class="library-tag">2 interactives</span>
      </div>
      <h3>Electron Transfer &amp; Marcus Theory</h3>
      <p>Connect free-energy landscapes, reorganization and electronic coupling to a quantitative nonadiabatic electron-transfer rate.</p>
      <ul>
        <li>diabatic states &amp; electronic coupling</li>
        <li>reorganization energy and driving force</li>
        <li>normal, activationless &amp; inverted regimes</li>
        <li>energy-gap sampling from molecular ensembles</li>
      </ul>
      <div class="library-card-footer">
        <span>Graduate / quantitative kinetics</span>
        <a href="{{ site.url }}/lecture/electron-transfer/">Open lecture →</a>
      </div>
    </article>

    <article class="library-card">
      <div class="library-card-top">
        <span class="library-number">07</span>
        <span class="library-tag">1 interactive</span>
      </div>
      <h3>Molecular Motion → Spin Dynamics</h3>
      <p>Follow the multiscale chain \(\mathbf R(t)\rightarrow p_k(t)\rightarrow H(t)\): molecular motion modulates spin parameters, correlation functions encode memory and spectral densities control relaxation.</p>
      <ul>
        <li>parameter trajectories &amp; fluctuations</li>
        <li>correlation functions</li>
        <li>spectral densities &amp; timescale matching</li>
        <li>motional narrowing and dynamic disorder</li>
      </ul>
      <div class="library-card-footer">
        <span>Graduate / multiscale dynamics</span>
        <a href="{{ site.url }}/lecture/molecular-motion/">Open lecture →</a>
      </div>
    </article>

    <div class="library-group-label">
      <span>Path III</span><strong>Numerical &amp; open-system methods</strong>
      <p>Understand how large spin problems are represented, propagated and coupled to environmental relaxation.</p>
    </div>

    <article class="library-card">
      <div class="library-card-top">
        <span class="library-number">08</span>
        <span class="library-tag">1 interactive</span>
      </div>
      <h3>Computational Laboratory</h3>
      <p>Turn formal spin dynamics into a numerical calculation: Hilbert-space scaling, propagation strategies, trace sampling and convergence.</p>
      <ul>
        <li>Hilbert versus Liouville space</li>
        <li>dense, sparse &amp; state-vector propagation</li>
        <li>Monte-Carlo trace sampling</li>
        <li>timestep and observable convergence</li>
      </ul>
      <div class="library-card-footer">
        <span>Practical numerical methods</span>
        <a href="{{ site.url }}/lecture/computational-lab/">Open lecture →</a>
      </div>
    </article>

    <article class="library-card">
      <div class="library-card-top">
        <span class="library-number">09</span>
        <span class="library-tag">1 interactive</span>
      </div>
      <h3>Advanced Open-System Methods</h3>
      <p>Go beyond phenomenological \(T_1/T_2\): derive how fluctuating operator channels and \(J_{\alpha\beta}(\omega)\) generate BRW relaxation, then compare Lindblad, memory-kernel and stochastic descriptions.</p>
      <ul>
        <li>Markovian master equations</li>
        <li>BRW assumptions</li>
        <li>memory kernels &amp; non-Markovianity</li>
        <li>stochastic state-vector methods</li>
      </ul>
      <div class="library-card-footer">
        <span>Advanced graduate / theory</span>
        <a href="{{ site.url }}/lecture/open-systems/">Open lecture →</a>
      </div>
    </article>

    <div class="library-group-label">
      <span>Path IV</span><strong>Applications, photochemistry &amp; control</strong>
      <p>Use the framework in biological mechanisms, excited-state chemistry, coherent control and real MolSpin workflows.</p>
    </div>

    <article class="library-card">
      <div class="library-card-top">
        <span class="library-number">10</span>
        <span class="library-tag">Case studies</span>
      </div>
      <h3>Quantum Biology Case Studies</h3>
      <p>Use the previous modules to dissect concrete biological proposals: cryptochromes, flavoproteins, magnetic-field effects and hyperpolarization.</p>
      <ul>
        <li>cryptochrome radical pairs</li>
        <li>weak RF-field perturbations</li>
        <li>photo-CIDNP &amp; hyperpolarization</li>
        <li>how to test mechanistic plausibility</li>
      </ul>
      <div class="library-card-footer">
        <span>Integrated research examples</span>
        <a href="{{ site.url }}/lecture/quantum-biology/">Open lecture →</a>
      </div>
    </article>

    <article class="library-card">
      <div class="library-card-top">
        <span class="library-number">11</span>
        <span class="library-tag">2 interactives</span>
      </div>
      <h3>Excited-State Photochemistry</h3>
      <p>Move from vertical excitation to derivative coupling, conical intersections, internal conversion, SOC-driven intersystem crossing and triplet formation.</p>
      <ul>
        <li>Franck–Condon picture</li>
        <li>excited-state potential surfaces</li>
        <li>internal conversion &amp; conical intersections</li>
        <li>SOC, ISC &amp; triplet formation</li>
      </ul>
      <div class="library-card-footer">
        <span>Photophysics / electronic structure</span>
        <a href="{{ site.url }}/lecture/excited-state-photochemistry/">Open lecture →</a>
      </div>
    </article>

    <article class="library-card">
      <div class="library-card-top">
        <span class="library-number">12</span>
        <span class="library-tag">1 interactive</span>
      </div>
      <h3>Pulse &amp; Coherent Control</h3>
      <p>Understand driven two-level systems, rotating frames, Rabi oscillations, \(\pi/2\) and \(\pi\) pulses, detuning and echo concepts.</p>
      <ul>
        <li>rotating-frame picture</li>
        <li>Rabi frequency &amp; pulse area</li>
        <li>detuning and excitation bandwidth</li>
        <li>echoes, phase and coherent control</li>
      </ul>
      <div class="library-card-footer">
        <span>Magnetic resonance / control</span>
        <a href="{{ site.url }}/lecture/coherent-control/">Open lecture →</a>
      </div>
    </article>

    <article class="library-card">
      <div class="library-card-top">
        <span class="library-number">13</span>
        <span class="library-tag">Verified examples</span>
      </div>
      <h3>Worked MolSpin Examples</h3>
      <p>Read real public MolSpin inputs as equations: interactions build \(\hat H\), states define \(\rho(0)\), transitions add kinetics and tasks choose the propagator and observable.</p>
      <ul>
        <li>input-file anatomy</li>
        <li>static radical-pair examples</li>
        <li>time-dependent interactions</li>
        <li>pulse and spectroscopy examples</li>
      </ul>
      <div class="library-card-footer">
        <span>Pinned public snapshot</span>
        <a href="{{ site.url }}/lecture/molspin-notebooks/">Open lecture →</a>
      </div>
    </article>
  </div>
</section>

<section class="library-section library-roadmap">
  <p class="section-eyebrow">Where the library can grow next</p>
  <h2>Future directions</h2>
  <div class="roadmap-list">
    <div><strong>Vibronic &amp; Nonadiabatic Dynamics</strong><span>Normal modes, vibronic coupling, surface hopping and beyond-Born–Oppenheimer dynamics.</span></div>
    <div><strong>Advanced Pulse EPR</strong><span>Echo modulation, shaped pulses, orientation selection and optimal-control examples.</span></div>
    <div><strong>Exercises &amp; Benchmarks</strong><span>Short problems, reference outputs and reproducible convergence exercises across the library.</span></div>
  </div>
</section>

<section class="library-section">
  <p class="section-eyebrow">How to use it</p>
  <h2>Read it linearly—or jump in where you need it</h2>
  <p class="library-closing">If you are new to the subject, I would start with Electronic Structure and then move through Spin Hamiltonians to Spin Dynamics. If you already know quantum chemistry, start with Spin Hamiltonians or Spin Dynamics. For cryptochromes and magnetic-field effects, Radical-Pair Spin Chemistry is the shortest route; for spectroscopy, jump directly to Magnetic Resonance. Electron Transfer and Molecular Motion extend the library toward quantitative photochemistry and multiscale dynamics; the Computational Laboratory and Open-System modules then focus on how those models are solved numerically, while the Quantum Biology section pulls the pieces together in concrete biological examples. The final three modules then extend the library into excited-state photochemistry, coherent control and verified MolSpin workflows.</p>
</section>

</div>
