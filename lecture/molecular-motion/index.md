---
layout: page
title: Molecular Motion → Spin Dynamics
excerpt: "Correlation functions, spectral densities and time-dependent spin Hamiltonians"
permalink: /lecture/molecular-motion/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 07</span>
  <h2>The spin Hamiltonian is rarely truly static</h2>
  <p>In a protein, liquid or flexible molecular system, distances, orientations and electronic structure fluctuate continuously. That turns fixed spin parameters into time series and makes molecular motion part of the spin-dynamics problem rather than a separate background effect.</p>
</header>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">Time-dependent Hamiltonians</p><h2>Replace one structure by a trajectory</h2></div>
  </div>

  <p>If the molecular coordinates evolve as \(\mathbf R(t)\), then the spin Hamiltonian can inherit that motion:</p>

  <div class="lecture-equation">
  \[
  \hat H(t)
  =
  \hat H[\mathbf R(t)]
  =
  \overline H+\delta\hat H(t).
  \]
  </div>

  <p>Hyperfine tensors can change as spin density redistributes, exchange can change dramatically with donor–acceptor geometry, dipolar tensors rotate and change with distance, and anisotropic \(g\)-tensors move with the molecular frame.</p>

  <aside class="teacher-note">
    <strong>This is the multiscale step:</strong>
    <span>MD supplies \(\mathbf R(t)\); electronic-structure calculations map selected structures onto magnetic parameters; spin dynamics then propagates the resulting \(H(t)\) or an effective stochastic model derived from it.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Parameter trajectories</p><h2>First separate the mean from the fluctuation</h2></div>
  </div>

  <p>For any scalar interaction parameter \(A(t)\), define</p>

  <div class="lecture-equation">
  \[
  \delta A(t)=A(t)-\langle A\rangle.
  \]
  </div>

  <p>The mean determines the static part of the Hamiltonian. The fluctuation \(\delta A(t)\) contains the motion that can broaden lines, dephase coherences or drive relaxation.</p>

  <p>For tensors the same idea applies component by component—but only after the frames are handled consistently. Comparing tensor components from snapshots in unrelated molecular frames can manufacture artificial “fluctuations” that are purely rotational bookkeeping.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Correlation functions</p><h2>How long does the system remember a fluctuation?</h2></div>
  </div>

  <p>The autocorrelation function is</p>

  <div class="lecture-equation">
  \[
  C_A(t)
  =
  \left\langle
  \delta A(0)\,\delta A(t)
  \right\rangle.
  \]
  </div>

  <p>A rapidly decaying \(C_A(t)\) means the fluctuations lose memory quickly. A slowly decaying or multi-exponential correlation function indicates persistent structural memory or several dynamical processes.</p>

  <p>A common teaching model is a single exponential,</p>

  <div class="lecture-equation">
  \[
  C(t)=\sigma^2e^{-|t|/\tau_c},
  \]
  </div>

  <p>where \(\tau_c\) is the correlation time and \(\sigma^2=C(0)\) is the fluctuation variance.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Spectral density</p><h2>Relaxation cares about frequency content, not just fluctuation size</h2></div>
  </div>

  <p>The spectral density is the Fourier transform of the correlation function. Using the two-sided convention,</p>

  <div class="lecture-equation">
  \[
  J(\omega)
  =
  \int_{-\infty}^{\infty}
  C(t)e^{i\omega t}\,dt.
  \]
  </div>

  <p>For the single-exponential correlation model,</p>

  <div class="lecture-equation">
  \[
  J(\omega)
  =
  \frac{2\sigma^2\tau_c}
  {1+\omega^2\tau_c^2}.
  \]
  </div>

  <p>This tells us something important: large fluctuations are not automatically efficient at relaxing a particular spin transition. The motion must also contain spectral weight near the relevant transition frequency.</p>

  <div class="interactive-card" id="motion-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Timescale matching and spectral weight</h3></div>
      <span class="interactive-model-note">exponential correlation model</span>
    </div>

    <div class="demo-prompt">
      <strong>Try this:</strong>
      <span>choose a spin frequency and move \(\tau_c\) from very fast to very slow. For a fixed \(\omega\), \(J(\omega)\) is largest when \(\omega\tau_c\approx1\).</span>
    </div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="motion-logf"><span class="control-name">Spin frequency \(f\)</span><output id="motion-f-out">100 MHz</output></label>
        <input id="motion-logf" type="range" min="-1" max="4" step="0.01" value="2">

        <label for="motion-logtau"><span class="control-name">Correlation time \(\tau_c\)</span><output id="motion-tau-out">1.00 ns</output></label>
        <input id="motion-logtau" type="range" min="-3" max="4" step="0.01" value="0">

        <label for="motion-sigma"><span class="control-name">Fluctuation amplitude \(\sigma\)</span><output id="motion-sigma-out">5.0 MHz</output></label>
        <input id="motion-sigma" type="range" min="0.1" max="20" step="0.1" value="5">

        <div class="demo-presets">
          <button type="button" data-motion-regime="fast">fast motion</button>
          <button type="button" data-motion-regime="matched">matched</button>
          <button type="button" data-motion-regime="slow">slow motion</button>
          <button type="button" data-motion-frequency="1.4">1.4 MHz</button>
          <button type="button" data-motion-frequency="28">28 MHz</button>
          <button type="button" data-motion-frequency="9500">9.5 GHz</button>
        </div>

        <div class="interactive-readout">
          <span>\(\omega\tau_c\) <strong id="motion-x-out">0.628</strong></span>
          <span>Matching \(\tau_c=1/\omega\) <strong id="motion-match-out">1.59 ns</strong></span>
          <span>\(J(\omega)/\sigma^2\) <strong id="motion-jnorm-out">1.43 ns</strong></span>
          <span>\(J(\omega)\) <strong id="motion-jabs-out">35.8 MHz²·ns</strong></span>
        </div>

        <p id="motion-explanation" class="demo-explanation">The current fluctuation timescale is close to the region of strongest spectral overlap.</p>
      </div>

      <div class="plot-wrap">
        <svg id="motion-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="Normalized spectral weight versus correlation time">
          <line x1="58" y1="248" x2="530" y2="248" class="plot-axis"/>
          <line x1="58" y1="35" x2="58" y2="248" class="plot-axis"/>
          <line x1="58" y1="141.5" x2="530" y2="141.5" class="plot-grid"/>
          <text x="435" y="278" class="svg-caption">log₁₀(τc / ns)</text>
          <text x="13" y="38" class="svg-caption">J / Jmax</text>
          <text x="54" y="267" class="svg-tick">−3</text>
          <text x="287" y="267" class="svg-tick">0.5</text>
          <text x="522" y="267" class="svg-tick">4</text>
          <path id="motion-weight-path" class="population-line lower-line" fill="none" d=""/>
          <line id="motion-match-line" x1="329" y1="35" x2="329" y2="248" class="plot-grid"/>
          <line id="motion-marker-line" x1="260" y1="35" x2="260" y2="248" class="plot-marker"/>
          <circle id="motion-marker" cx="260" cy="90" r="5" class="plot-point upper-point"/>
        </svg>
      </div>
    </div>

    <p class="interactive-footnote">The plotted quantity is the spectral density at one chosen angular frequency, normalized to its maximum as a function of \(\tau_c\). Real relaxation rates generally combine several spectral-density values with operator-specific prefactors.</p>
  </div>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Dynamic regimes</p><h2>Fast and slow motion produce different physics</h2></div>
  </div>

  <div class="timescale-strip">
    <div><strong>Fast motion</strong><span>\(\omega\tau_c\ll1\)</span><p>Fluctuations average rapidly. This is the regime behind motional narrowing and many Markovian relaxation models.</p></div>
    <div><strong>Matched timescales</strong><span>\(\omega\tau_c\sim1\)</span><p>Spectral density at the transition frequency is large, so fluctuations can drive efficient relaxation.</p></div>
    <div><strong>Slow motion</strong><span>\(\omega\tau_c\gg1\)</span><p>The system begins to look like an ensemble of slowly changing or quasi-static Hamiltonians.</p></div>
  </div>

  <p>There is no single universal correlation time for a protein. Side-chain motion, global tumbling, loop rearrangements and conformational exchange can all live on different timescales and couple to different spin-Hamiltonian terms.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">From MD to spin parameters</p><h2>A trajectory is not yet a spin-dynamics model</h2></div>
  </div>

  <div class="lecture-pipeline">
    <div><span>Sample</span><strong>MD or enhanced sampling</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Evaluate</span><strong>QC-derived \(A(t)\), \(g(t)\), \(J(t)\), \(D(t)\)</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Analyse</span><strong>means, distributions &amp; correlation functions</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Model</span><strong>spectral densities or explicit \(H(t)\)</strong></div>
    <div class="pipeline-arrow">→</div>
    <div><span>Propagate</span><strong>relaxation or stochastic spin dynamics</strong></div>
  </div>

  <p>How densely you need quantum-chemical calculations depends on how rapidly the parameters vary and how transferable the electronic-structure model is. Interpolating a slowly varying dipolar interaction is very different from learning an exchange coupling that changes exponentially with geometry.</p>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">07</span>
    <div><p class="section-eyebrow">Practical pitfalls</p><h2>Correlation functions are easy to calculate badly</h2></div>
  </div>

  <div class="method-ladder">
    <div><span>Non-stationarity</span><p>If the trajectory drifts between states, a single stationary correlation function may not be meaningful.</p></div>
    <div><span>Insufficient sampling</span><p>Slow tails in \(C(t)\) are especially sensitive to trajectory length and the number of independent samples.</p></div>
    <div><span>Frame artefacts</span><p>Tensor components must be compared in a consistent molecular or laboratory frame.</p></div>
    <div><span>Overfitting one exponential</span><p>Real biomolecular correlations are often multi-timescale and can contain oscillatory or non-exponential structure.</p></div>
  </div>

  <aside class="teacher-note">
    <strong>The correlation function is a model diagnostic, not just an intermediate file.</strong>
    <span>If \(C(t)\) is strongly non-exponential or shows long memory, that is telling you something about whether a simple Markovian relaxation model is appropriate.</span>
  </aside>
</section>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">08</span>
    <div><p class="section-eyebrow">Selected reading</p><h2>Examples from my work</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>Dynamic protein environment</span><h3>Magnetosensitivity of Model Flavin–Tryptophan Radical Pairs in a Dynamic Protein Environment</h3><p>Directly connects protein motion and fluctuating radical-pair interactions to spin observables.</p><a href="https://doi.org/10.1021/acs.jpcb.5c01187" target="_blank" rel="noopener">J. Phys. Chem. B (2025) →</a></article>
    <article><span>Stochastic propagation</span><h3>Spin Dynamics of Radical Pairs Using the Stochastic Schrödinger Equation in MolSpin</h3><p>An efficient route for propagating large spin systems under stochastic dynamics.</p><a href="https://doi.org/10.1021/acs.jctc.4c00361" target="_blank" rel="noopener">J. Chem. Theory Comput. (2024) →</a></article>
    <article><span>Conformational subensembles</span><h3>Conformational Switching Controls Biradical Spin Dynamics in Flavin–Tryptophan Dyads</h3><p>Shows how distinct molecular conformations can control spin-dynamic pathways.</p><a href="https://doi.org/10.1021/jacs.5c22947" target="_blank" rel="noopener">JACS (2026) →</a></article>
    <article><span>Multiscale theory</span><h3>Multiscale modeling approaches in biomolecular physics</h3><p>A broader framework for linking atomistic motion to electronic and quantum observables.</p><a href="https://doi.org/10.1080/23746149.2026.2660655" target="_blank" rel="noopener">Advances in Physics: X (2026) →</a></article>
  </div>
</section>

{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-motion.js" defer></script>
