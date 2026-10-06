---
layout: page
title: Lecture
excerpt: "A growing library on electronic structure, spin dynamics and spin chemistry"
permalink: /lecture/
---

<div class="lecture-library">

<header class="library-intro">
  <p class="library-kicker">Lecture library</p>
  <h2>From electrons to spin-dependent chemistry</h2>
  <p>I am building this as a set of short, connected lectures rather than one very long page. The idea is to start with the electronic problem, reduce it to an effective spin Hamiltonian, propagate the spin state in time and finally connect the dynamics to an experiment or chemical yield.</p>

  <div class="library-flow" aria-label="Lecture library concept">
    <span>electronic structure</span>
    <b>→</b>
    <span>spin Hamiltonian</span>
    <b>→</b>
    <span>spin dynamics</span>
    <b>→</b>
    <span>chemistry &amp; experiment</span>
  </div>
</header>

<section class="library-section">
  <p class="section-eyebrow">Available now</p>
  <h2>Core modules</h2>

  <div class="library-grid">
    <article class="library-card">
      <div class="library-card-top">
        <span class="library-number">01</span>
        <span class="library-tag">Interactive</span>
      </div>
      <h3>Electronic Structure</h3>
      <p>Start with the many-electron problem. We build from orbitals and basis sets through HF, DFT and correlation to excited states and magnetic parameters.</p>
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
        <span class="library-tag">Interactive</span>
      </div>
      <h3>Spin Hamiltonians</h3>
      <p>Build the effective magnetic model term by term: Zeeman, hyperfine, exchange, dipolar coupling, quadrupole interactions and zero-field splitting.</p>
      <ul>
        <li>electron &amp; nuclear Zeeman terms</li>
        <li>hyperfine tensors &amp; spin density</li>
        <li>exchange and dipolar coupling</li>
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
        <li>spin operators &amp; Hilbert space</li>
        <li>density matrices &amp; observables</li>
        <li>\(T_1\), \(T_2\) and dephasing</li>
        <li>BRW, stochastic propagation &amp; memory effects</li>
      </ul>
      <div class="library-card-footer">
        <span>Fundamentals → graduate</span>
        <a href="{{ site.url }}/lecture/spin-dynamics/">Open lecture →</a>
      </div>
    </article>

    <article class="library-card">
      <div class="library-card-top">
        <span class="library-number">04</span>
        <span class="library-tag">Interactive</span>
      </div>
      <h3>Radical-Pair Spin Chemistry</h3>
      <p>Here quantum spin dynamics becomes chemistry. We introduce singlet–triplet states, spin-selective reactions, magnetic-field effects and radical pairs in proteins.</p>
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
        <span class="library-tag">Interactive</span>
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
  </div>
</section>

<section class="library-section library-roadmap">
  <p class="section-eyebrow">Next modules</p>
  <h2>Planned extensions</h2>
  <div class="roadmap-list">
    <div><strong>Electron Transfer</strong><span>Diabatic states, electronic coupling, Marcus theory and the inverted region.</span></div>
    <div><strong>Molecular Motion → Spin Dynamics</strong><span>Correlation functions, spectral densities, dynamic disorder and MD-derived Hamiltonians.</span></div>
    <div><strong>Computational Laboratory</strong><span>Worked MolSpin examples and practical numerical spin dynamics.</span></div>
  </div>
</section>

<section class="library-section">
  <p class="section-eyebrow">How to use it</p>
  <h2>Read it linearly—or jump in where you need it</h2>
  <p class="library-closing">If you are new to the subject, I would start with Electronic Structure and then move through Spin Hamiltonians to Spin Dynamics. If you already know quantum chemistry, start with Spin Hamiltonians or Spin Dynamics. For cryptochromes and magnetic-field effects, Radical-Pair Spin Chemistry is the shortest route; for spectroscopy, jump directly to Magnetic Resonance.</p>
</section>

</div>
