---
layout: page
title: Computational Laboratory
excerpt: "Numerical scaling, propagation, trace sampling and convergence"
permalink: /lecture/computational-lab/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 08</span>
  <h2>From a Hamiltonian to a calculation you can trust</h2>
  <p>Formal spin dynamics is only half the problem. The other half is numerical: how large is the Hilbert space, which representation should we propagate, how do we avoid constructing impossible matrices, and how do we know that a stochastic or time-discretized result is converged?</p>
</header>
<section class="module-learning" aria-label="Learning goals">
  <div class="module-learning-head">
    <span>After this module</span>
    <strong>You should be able to…</strong>
  </div>
  <div class="module-learning-grid">
    <div><span>01</span><p>Estimate Hilbert-, operator- and Liouville-space scaling before choosing a numerical method.</p></div>
    <div><span>02</span><p>Understand when sparse/Krylov or state-vector methods avoid impossible dense representations.</p></div>
    <div><span>03</span><p>Design convergence tests for timestep, stochastic trace samples, orientations and molecular ensembles.</p></div>
  </div>
</section>

{% include lecture-connections.html %}


<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Representation</p><h2>Count the Hilbert space before choosing an algorithm</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>The numerical representation is part of the physical modelling strategy</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Hilbert space</strong>
        <p><b>What it is:</b> The vector space containing all pure spin states. Its dimension is the product of the dimensions of the individual spins.</p>
        <p><b>What it changes:</b> It sets the size of state vectors and the fundamental cost of exact propagation.</p>
        <p><b>What you observe:</b> Not a laboratory observable; it determines whether a proposed simulation is computationally feasible.</p>
      </article>
      <article>
        <strong>Density matrix / Liouville space</strong>
        <p><b>What it is:</b> The density matrix stores populations and coherences for ensembles or mixed states; vectorizing it creates a Liouville-space object of dimension \(D^2\).</p>
        <p><b>What it changes:</b> It makes relaxation and ensemble dynamics natural to express but increases memory and propagation cost dramatically.</p>
        <p><b>What you observe:</b> It is the numerical object from which populations, coherences and expectation values are calculated.</p>
      </article>
    </div>
  </div>


  <p>For independent spins \(I_k\), the Hilbert-space dimension is</p>

  <div class="lecture-equation">
  \[
  D=\prod_k(2I_k+1).
  \]
  </div>

  <p>For \(N\) spin-\(\tfrac12\) particles this becomes \(D=2^N\). A state vector contains \(D\) complex amplitudes. A dense operator or density matrix contains \(D^2\) complex numbers. A dense Liouville-space superoperator would contain \(D^4\).</p>

  <aside class="teacher-note">
    <strong>The scaling lesson:</strong>
    <span>the density matrix is not “twice as large” as a state vector. Its storage grows quadratically with Hilbert-space dimension, while an explicitly stored Liouvillian grows quadratically again.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Interactive</p><h2>See when dense representations become impossible</h2></div>
  </div>

  <div class="interactive-card" id="scaling-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Spin-space scaling explorer</h3></div>
      <span class="interactive-model-note">spin-\(\tfrac12\) model</span>
    </div>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>increase the number of spins one at a time. Then compare a state vector, a dense operator and an explicitly stored Liouvillian. The difference is not subtle.</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="scale-spins"><span class="control-name">Number of spin-\(\tfrac12\) particles \(N\)</span><output id="scale-spins-out">14</output></label>
        <input id="scale-spins" type="range" min="2" max="24" step="1" value="14">

        <label for="scale-samples"><span class="control-name">Trace samples \(M\)</span><output id="scale-samples-out">12</output></label>
        <input id="scale-samples" type="range" min="1" max="500" step="1" value="12">

        <div class="demo-presets">
          <button type="button" data-scale-n="8">8 spins</button>
          <button type="button" data-scale-n="14">14 spins</button>
          <button type="button" data-scale-n="20">20 spins</button>
          <button type="button" data-scale-m="100">100 samples</button>
        </div>

        <div class="interactive-readout">
          <span>Hilbert dimension \(D\) <strong id="scale-d-out">16,384</strong></span>
          <span>State vector <strong id="scale-state-out">256 KiB</strong></span>
          <span>Dense \(D\times D\) operator <strong id="scale-operator-out">4.00 GiB</strong></span>
          <span>Dense \(D^2\times D^2\) Liouvillian <strong id="scale-liouville-out">1.00 EiB</strong></span>
          <span>Sampling standard-error factor <strong id="scale-se-out">0.289 σ</strong></span>
        </div>

        <p id="scale-explanation" class="demo-explanation">At this size a state-vector method is still modest, while a dense operator is already expensive and a dense Liouvillian is completely impractical.</p>
        <div class="sensitivity-meter">
          <div class="sensitivity-meter-head"><span>Sampling noise \(\propto1/\sqrt M\)</span><strong id="scale-sampling-gain">1.0× baseline</strong></div>
          <div class="sensitivity-meter-track"><span id="scale-sampling-meter" class="sensitivity-meter-fill"></span></div>
        </div>
      </div>

      <div class="plot-wrap">
        <svg id="scaling-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="Memory scaling with number of spin one-half particles">
          <line x1="58" y1="248" x2="530" y2="248" class="plot-axis"/>
          <line x1="58" y1="35" x2="58" y2="248" class="plot-axis"/>
          <text x="475" y="278" class="svg-caption">number of spins</text>
          <text x="11" y="38" class="svg-caption">log₁₀ bytes</text>
          <path id="scale-state-path" class="population-line triplet-line" fill="none" d="M58.00 242.46 L79.45 240.39 L100.91 238.32 L122.36 236.26 L143.82 234.19 L165.27 232.12 L186.73 230.05 L208.18 227.98 L229.64 225.91 L251.09 223.85 L272.55 221.78 L294.00 219.71 L315.45 217.64 L336.91 215.57 L358.36 213.50 L379.82 211.44 L401.27 209.37 L422.73 207.30 L444.18 205.23 L465.64 203.16 L487.09 201.09 L508.55 199.03 L530.00 196.96"/>
          <path id="scale-operator-path" class="population-line lower-line" fill="none" d="M58.00 238.32 L79.45 234.19 L100.91 230.05 L122.36 225.91 L143.82 221.78 L165.27 217.64 L186.73 213.50 L208.18 209.37 L229.64 205.23 L251.09 201.09 L272.55 196.96 L294.00 192.82 L315.45 188.68 L336.91 184.55 L358.36 180.41 L379.82 176.27 L401.27 172.14 L422.73 168.00 L444.18 163.86 L465.64 159.73 L487.09 155.59 L508.55 151.45 L530.00 147.32"/>
          <path id="scale-liouville-path" class="diabatic-line scale-liouville-line" fill="none" d="M58.00 230.05 L79.45 221.78 L100.91 213.50 L122.36 205.23 L143.82 196.96 L165.27 188.68 L186.73 180.41 L208.18 172.14 L229.64 163.86 L251.09 155.59 L272.55 147.32 L294.00 139.04 L315.45 130.77 L336.91 122.50 L358.36 114.22 L379.82 105.95 L401.27 97.68 L422.73 89.40 L444.18 81.13 L465.64 72.85 L487.09 64.58 L508.55 56.31 L530.00 48.03"/>
          <line id="scale-marker-line" x1="315.45" y1="35" x2="315.45" y2="248" class="plot-marker"/>
          <g class="plot-legend">
            <line x1="292" y1="51" x2="320" y2="51" class="population-line triplet-line"/>
            <text x="328" y="55" class="svg-label">state</text>
            <line x1="383" y1="51" x2="411" y2="51" class="population-line lower-line"/>
            <text x="419" y="55" class="svg-label">operator</text>
            <line x1="476" y1="51" x2="504" y2="51" class="diabatic-line scale-liouville-line"/>
            <text x="510" y="55" class="svg-label">L</text>
          </g>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">Memory estimates assume 16 bytes per complex double. The Monte-Carlo number is \(\sigma/\sqrt M\): the standard error relative to the single-sample standard deviation, not a guaranteed relative error in the final observable.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Propagation strategies</p><h2>Do not build a matrix just because the equation contains one</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Numerical efficiency comes from applying the generator without representing every zero explicitly</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Sparsity</strong>
        <p><b>What it is:</b> Most spin Hamiltonians contain local or few-spin terms, so many matrix elements in a product basis are exactly zero.</p>
        <p><b>What it changes:</b> Sparse storage and matrix–vector products can reduce memory and work dramatically compared with dense linear algebra.</p>
        <p><b>What you observe:</b> Much larger spin systems become tractable without changing the underlying physical Hamiltonian.</p>
      </article>
      <article>
        <strong>Krylov propagation</strong>
        <p><b>What it is:</b> A method that approximates \(e^{-iHt}|\psi\rangle\) inside a low-dimensional subspace generated by repeated actions of \(H\) on the current state.</p>
        <p><b>What it changes:</b> It avoids constructing the full matrix exponential and concentrates effort on the part of Hilbert space explored during that step.</p>
        <p><b>What you observe:</b> Controlled propagation error with far lower memory cost for large sparse systems.</p>
      </article>
      <article>
        <strong>Integrator tolerance / timestep</strong>
        <p><b>What it is:</b> A numerical accuracy parameter controlling how closely the discrete propagation follows the continuous equation of motion.</p>
        <p><b>What it changes:</b> Too coarse a step can distort phase, populations or decay even when the physical model is correct.</p>
        <p><b>What you observe:</b> A result that changes when \(\Delta t\) is halved is a numerical result that is not yet converged.</p>
      </article>
    </div>
  </div>


  <div class="method-ladder">
    <div><span>Dense diagonalization / exponentiation</span><p>Simple and accurate for small systems. Becomes memory- and compute-limited quickly as \(D\) grows.</p></div>
    <div><span>Sparse / Krylov propagation</span><p>Exploit the action of \(H\) or a sparse generator on a vector without constructing a full matrix exponential.</p></div>
    <div><span>State-vector trajectories</span><p>Propagate \(D\)-component vectors rather than \(D^2\)-component density matrices when an appropriate stochastic or pure-state formulation exists.</p></div>
    <div><span>Operator-space propagation</span><p>Useful when the density matrix or superoperator structure is essential, but it requires more aggressive sparsity or symmetry exploitation.</p></div>
  </div>

  <aside class="research-connection">
    <span class="research-connection-label">Research connection</span>
    <p>The motivation for state-vector and stochastic formulations is not aesthetic: for realistic radical pairs the density-matrix representation can become the bottleneck before the underlying physics does.</p>
    <div class="research-connection-links">
      <a href="https://doi.org/10.1021/acs.jctc.4c00361" target="_blank" rel="noopener"><strong>Spin Dynamics of Radical Pairs Using the Stochastic Schrödinger Equation in MolSpin</strong><span>J. Chem. Theory Comput. (2024)</span></a>
    </div>
  </aside>
</section>


<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">P</span>
    <div><p class="section-eyebrow">Matrix-free thinking</p><h2>You often need the action of an operator, not the operator itself</h2></div>
  </div>

  <p>Krylov and related propagation methods exploit a simple numerical fact: to approximate \(e^{-iHt}|\psi\rangle\), it can be enough to evaluate repeated products \(H|\psi\rangle\) without ever constructing or storing the full matrix exponential. If \(H\) itself is sparse or can be applied as a sum of local spin operators, the memory saving can be enormous.</p>

  <div class="observable-list">
    <div><strong>Closed-system check</strong><span>Verify norm conservation and, when appropriate, energy conservation or reversibility.</span></div>
    <div><strong>Density-matrix check</strong><span>Verify trace preservation and monitor Hermiticity; physical generators should not create obviously negative populations.</span></div>
    <div><strong>Observable check</strong><span>Converge the quantity you report, not only an internal solver tolerance.</span></div>
  </div>

  <aside class="teacher-note">
    <strong>Numerical stability is not the same as physical correctness.</strong>
    <span>A calculation can converge perfectly to the wrong answer if the Hamiltonian, units, initial state or reaction model is wrong.</span>
  </aside>


  <aside class="lecture-analogy">
    <span class="lecture-analogy-label">Mental model</span>
    <h3>Do not print the entire road atlas when you only need the next turn</h3>
    <p>A dense Hamiltonian stores every matrix element, even if a Krylov propagator only needs repeated products \(\hat H|\psi\rangle\). Matrix-free methods act like a route planner: they evaluate the local action needed to advance the state without materializing the complete map of every possible connection.</p>
    <span class="analogy-limit"><strong>Where the analogy breaks:</strong> the operator is still mathematically the same Hamiltonian. Matrix-free propagation changes the representation and numerical algorithm, not the underlying physics, and its approximation error still has to be converged.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Trace sampling</p><h2>Stochastic trace estimation trades memory for variance</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Random sampling here is a numerical approximation, not necessarily physical noise</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Trace sampling</strong>
        <p><b>What it is:</b> A Monte-Carlo estimator that approximates a high-dimensional trace by averaging expectation values over random vectors.</p>
        <p><b>What it changes:</b> It replaces an exact sum over a huge basis by a controllable statistical error that decreases roughly as \(M^{-1/2}\).</p>
        <p><b>What you observe:</b> Run-to-run sampling fluctuations and convergence of the final observable as the number of samples increases.</p>
      </article>
      <article>
        <strong>Physical stochasticity</strong>
        <p><b>What it is:</b> Random trajectories used to represent environmental noise or a stochastic Schrödinger equation describe actual model dynamics rather than merely estimating a trace.</p>
        <p><b>What it changes:</b> They change the time evolution being modelled, not just how efficiently a deterministic quantity is evaluated.</p>
        <p><b>What you observe:</b> Noise-induced relaxation, dephasing or distribution of trajectories after ensemble averaging.</p>
      </article>
    </div>
  </div>


  <p>If random normalized states satisfy \(\mathbb E[\lvert r\rangle\langle r\rvert]=\mathbb I_D/D\), then the trace of an operator \(\hat A\) can be estimated as</p>

  <div class="lecture-equation">
  \[
  \operatorname{Tr}(\hat A)
  \approx
  \frac{D}{M}
  \sum_{m=1}^{M}
  \langle r_m|\hat A|r_m\rangle.
  \]
  </div>

  <p>The standard error decreases asymptotically as \(M^{-1/2}\), but the prefactor is observable-dependent. Twelve samples do not mean “12-fold accuracy”, and they do not guarantee a specific percentage error.</p>

  <aside class="lecture-note">
    <strong>Important distinction:</strong>
    <span>Monte-Carlo trace sampling is a numerical estimator of a trace. A stochastic Schrödinger equation represents physical open-system dynamics. Both use random trajectories, but the randomness has a different meaning.</span>
  </aside>
</section>


<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">P</span>
    <div><p class="section-eyebrow">A habit worth keeping</p><h2>Solve a tiny version exactly before trusting the large one</h2></div>
  </div>

  <div class="lecture-flow-bridge">
    <p>This is probably the least glamorous and most useful numerical trick in the whole library: <strong>make the model small enough that you know the answer</strong>. Then compare the clever method against that reference before scaling up.</p>
  </div>

  <div class="lecture-checklist">
    <div><strong>Reduce the Hilbert space</strong><span>Remove nuclei or interactions until direct diagonalization or dense propagation is easy.</span></div>
    <div><strong>Take a known limit</strong><span>Set \(J=0\), make two \(g\)-values identical, remove relaxation, or choose a single uncoupled spin whose motion is analytic.</span></div>
    <div><strong>Compare observables</strong><span>Check the quantity you actually care about—population, yield, spectrum, polarization—not only an internal solver residual.</span></div>
    <div><strong>Add complexity back</strong><span>Turn on one ingredient at a time. When the answer changes, you know which piece caused it.</span></div>
  </div>

  <aside class="teacher-note">
    <strong>Numerical error and model error are different.</strong>
    <span>A perfectly converged calculation can still solve the wrong Hamiltonian. A physically correct Hamiltonian can also be propagated badly. Good validation keeps those two failure modes separate.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Convergence</p><h2>Converge the observable, not just the propagator</h2></div>
  </div>

  <p>A reliable numerical result should be tested against the knobs that can change it:</p>

  <div class="observable-list">
    <div><strong>Timestep / integrator tolerance</strong><span>halve \(\Delta t\) or tighten the tolerance and verify that the observable no longer changes appreciably.</span></div>
    <div><strong>Trace samples</strong><span>repeat with larger \(M\) and, ideally, independent random seeds to estimate sampling uncertainty.</span></div>
    <div><strong>Orientation grid</strong><span>powder and anisotropic observables need converged angular averaging.</span></div>
    <div><strong>Trajectory ensemble</strong><span>for dynamic Hamiltonians, convergence can be limited by molecular sampling rather than quantum propagation.</span></div>
  </div>

  <p>Plotting a result as a function of \(M\), \(\Delta t\), orientation count or trajectory number is much more informative than reporting one calculation and assuming it is converged.</p>

  <p>For stochastic sampling, convergence should also carry an uncertainty estimate whenever possible. If independent samples give values \(x_m\), a practical standard error is</p>

  <div class="lecture-equation">
  \[
  \mathrm{SE}(\bar x)
  =
  \frac{s_x}{\sqrt{M}},
  \]
  </div>

  <p>where \(s_x\) is the sample standard deviation. Reporting \(M\) without the variance can be misleading: twelve exceptionally consistent samples can be more informative than one hundred highly variable ones, while correlated samples reduce the effective sample size.</p>


  <aside class="teacher-note">
    <strong>There is no universal “enough samples” number for a given spin count.</strong>
    <span>A 14-spin system does not intrinsically require 12, 100 or 1000 trace vectors. The required \(M\) is set by the variance of the specific observable, the desired confidence interval and whether the samples are independent. Demonstrate convergence of the quantity you publish.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">MolSpin</p><h2>Use the software as a laboratory, not a black box</h2></div>
  </div>

  <p><a href="https://molspin.eu" target="_blank" rel="noopener">MolSpin</a> is designed around general spin systems and multiple propagation strategies. The important skill is not memorizing an input file; it is understanding which Hamiltonian, state, relaxation model, numerical method and observable the input represents.</p>

  <p>For released syntax and examples, use the <a href="{{ site.url }}/repositories/">Software page</a> and the public MolSpin documentation rather than copying teaching pseudocode from this lecture.</p>
</section>

<aside class="lecture-takeaway">
  <span class="lecture-takeaway-label">Take-home model</span>
  <h3>A trustworthy calculation needs two kinds of convergence</h3>
  <ul>
    <li>Numerical convergence means the propagator, timestep, trace sampling and orientation grid no longer change the reported observable appreciably.</li>
    <li>Physical convergence means the Hamiltonian, initial state, units, kinetics and approximations represent the intended experiment or mechanism.</li>
    <li>A large calculation is not more reliable than a small benchmark unless both kinds of convergence have been demonstrated.</li>
  </ul>
</aside>

<aside class="landmark-study">
  <span class="landmark-label">Landmark computation</span>
  <h3>Large spin systems are usually solved by exploiting structure, not by storing every matrix element</h3>
  <p>Spinach is a useful complementary example of large-scale spin simulation based on sparse/restricted representations. It illustrates the general principle behind this module: the tractable object is often a compressed state space or an operator action rather than a dense Liouvillian.</p>
  <div class="landmark-footer">
    <a href="https://doi.org/10.1016/j.jmr.2010.11.008" target="_blank" rel="noopener">H. J. Hogben et al. · Journal of Magnetic Resonance 208, 179–194 (2011) →</a>
    <span>The same scaling logic motivates state-vector and stochastic strategies in MolSpin.</span>
  </div>
</aside>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">07</span>
    <div><p class="section-eyebrow">Selected reading</p><h2>Methods behind the calculations</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>Stochastic state vectors</span><h3>Spin Dynamics of Radical Pairs Using the Stochastic Schrödinger Equation in MolSpin</h3><p>State-vector propagation and stochastic methods for large radical-pair spin systems.</p><a href="https://doi.org/10.1021/acs.jctc.4c00361" target="_blank" rel="noopener">J. Chem. Theory Comput. (2024) →</a></article>
    <article><span>Open-system propagation</span><h3>Modeling spin relaxation in complex radical systems using MolSpin</h3><p>Relaxation theory and practical density-matrix spin dynamics.</p><a href="https://doi.org/10.1002/jcc.27120" target="_blank" rel="noopener">J. Comput. Chem. (2023) →</a></article>
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
      <span>Matrix exponentials</span>
      <h3>EXPOKIT: A Software Package for Computing Matrix Exponentials</h3>
      <p>R. B. Sidje · ACM Transactions on Mathematical Software (1998). A classic reference for matrix-free Krylov evaluation of exponential propagators.</p>
      <a href="https://doi.org/10.1145/285861.285868" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Trace estimation</span>
      <h3>A Stochastic Estimator of the Trace of the Influence Matrix for Laplacian Smoothing Splines</h3>
      <p>M. F. Hutchinson · Communications in Statistics—Simulation and Computation (1989). The historical source of the random-vector trace estimator now widely known as Hutchinson estimation.</p>
      <a href="https://doi.org/10.1080/03610918908812806" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Large spin systems</span>
      <h3>Spinach – A software library for simulation of spin dynamics in large spin systems</h3>
      <p>H. J. Hogben et al. · Journal of Magnetic Resonance (2011). A useful comparison point for sparse and restricted-state-space strategies in large spin simulations.</p>
      <a href="https://doi.org/10.1016/j.jmr.2010.11.008" target="_blank" rel="noopener">Open DOI →</a>
    </article>
  </div>
</section>
{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-scaling.js" defer></script>
