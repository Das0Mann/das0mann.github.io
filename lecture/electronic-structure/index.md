---
layout: page
title: Electronic Structure
excerpt: "From the many-electron problem to magnetic parameters"
permalink: /lecture/electronic-structure/
---

<div class="lecture-module">
{% include lecture-library-nav.html %}

<header class="module-intro">
  <span class="module-index">Module 01</span>
  <h2>Start with the electrons</h2>
  <p>Before we talk about spin dynamics, we need to know what the electrons are doing. Electronic-structure theory is the layer that gives us energies, densities, excited states and ultimately the magnetic parameters that enter a spin Hamiltonian.</p>
</header>
<section class="module-learning" aria-label="Learning goals">
  <div class="module-learning-head">
    <span>After this module</span>
    <strong>You should be able to…</strong>
  </div>
  <div class="module-learning-grid">
    <div><span>01</span><p>Distinguish the many-electron wavefunction, molecular orbitals and electron density.</p></div>
    <div><span>02</span><p>Explain the defining approximations of HF, Kohn–Sham DFT, post-HF ab initio and multiconfigurational methods, and choose an appropriate level for a given electronic-structure problem.</p></div>
    <div><span>03</span><p>Explain how electronic energies, spin densities and response derivatives are reduced to \(g\), hyperfine, exchange, dipolar and ZFS parameters.</p></div>
  </div>
</section>

{% include lecture-connections.html %}


<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">01</span>
    <div><p class="section-eyebrow">The electronic problem</p><h2>Freeze the nuclei for a moment</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Wavefunction and electron density describe the same electrons at different levels of information</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Many-electron wavefunction \(\Psi\)</strong>
        <p><b>What it is:</b> A complex quantum amplitude defined over the coordinates and spins of all electrons simultaneously.</p>
        <p><b>What it changes:</b> Its antisymmetry enforces fermionic exchange and, in principle, contains all electronic observables and correlations.</p>
        <p><b>What you observe:</b> The wavefunction itself is not directly measured; probabilities, densities, energies and response properties are derived from it.</p>
      </article>
      <article>
        <strong>Electron density \(\rho(\mathbf r)\)</strong>
        <p><b>What it is:</b> The electron number density around position \(\mathbf r\), obtained by integrating the many-electron probability density over all other electronic coordinates. It integrates to the number of electrons; the corresponding charge density is \(-e\rho(\mathbf r)\).</p>
        <p><b>What it changes:</b> It determines electrostatics, bonding patterns and—within ground-state DFT—the total energy in principle.</p>
        <p><b>What you observe:</b> Charge distributions, electrostatic potentials and density-derived quantities; experimentally it is related to X-ray/electron scattering rather than to an orbital picture.</p>
      </article>
      <article>
        <strong>Born–Oppenheimer separation</strong>
        <p><b>What it is:</b> The approximation that electrons adjust much faster than nuclei because nuclei are far heavier.</p>
        <p><b>What it changes:</b> It lets us solve an electronic problem at each fixed nuclear geometry and interpret the resulting energy as a potential-energy surface for nuclear motion.</p>
        <p><b>What you observe:</b> Molecular geometries, vibrational surfaces and reaction paths; breakdown appears in strongly nonadiabatic regions such as conical intersections.</p>
      </article>
    </div>
  </div>


  <p>Within the Born–Oppenheimer picture we first treat the nuclei as fixed. For that molecular geometry, the electronic Hamiltonian is</p>

  <div class="lecture-equation">
  \[
  \begin{aligned}
  \hat H_\mathrm{e}
  &=
  -\frac{1}{2}\sum_i\nabla_i^2
  -\sum_{iA}\frac{Z_A}{r_{iA}}\\
  &\quad+
  \sum_{i<j}\frac{1}{r_{ij}}
  +V_\mathrm{NN}.
  \end{aligned}
  \]
  </div>

  <p>The difficult term is the electron–electron repulsion. It couples the motion of all electrons, which is why the exact many-electron problem grows so quickly with system size.</p>

  <p>This is why independent-particle pictures are so useful. They replace one function of all electronic coordinates by a tractable set of one-electron objects, then recover the missing many-body physics approximately through exchange, correlation or configuration mixing. Orbitals are therefore computational degrees of freedom—not literal trajectories followed by individual electrons.</p>

  <aside class="teacher-note">
    <strong>A useful way to think about it:</strong>
    <span>most electronic-structure methods are not different physical theories. They are different approximations to the same many-electron quantum problem.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">02</span>
    <div><p class="section-eyebrow">Orbitals &amp; basis sets</p><h2>An orbital is a representation tool, not an electron trajectory</h2></div>
  </div>

  <p>A molecular orbital \(\phi_p(\mathbf r)\) is a one-electron function. In most quantum-chemistry codes it is expanded in atom-centred basis functions \(\chi_\mu\):</p>

  <div class="lecture-equation">
  \[
  \phi_p(\mathbf r)=\sum_\mu C_{\mu p}\chi_\mu(\mathbf r).
  \]
  </div>

  <p>The basis controls how flexibly the electronic wavefunction or density can respond. A minimal basis is cheap but restrictive; polarized and diffuse functions give the electrons more freedom. The important point is that a basis-set name is not just a technical label—it defines the variational space in which the electronic problem is solved.</p>

  <aside class="lecture-analogy">
    <span class="lecture-analogy-label">Mental model</span>
    <h3>A basis set is a vocabulary for describing the electron cloud</h3>
    <p>Imagine trying to describe a complicated shape with a limited vocabulary. A minimal basis gives only a few words, so the calculation can express the rough idea but not every distortion. Polarization functions add new kinds of words for directional deformation; diffuse functions add words for density that extends far from the nuclei. A larger vocabulary lets the same physical theory express a more flexible electronic state.</p>
    <span class="analogy-limit"><strong>Where the analogy breaks:</strong> basis functions are mathematical functions in a variational space, not pieces of the electron cloud. A larger basis also cannot repair a qualitatively wrong electronic-structure approximation.</span>
  </aside>

  <details class="lecture-details">
    <summary>What do polarization and diffuse functions actually do?</summary>
    <p>Polarization functions add angular flexibility, allowing the density to distort away from isolated-atom shapes. Diffuse functions add slowly decaying radial functions and are important for anions, Rydberg states and spatially extended charge-transfer states.</p>
  </details>

  <aside class="teacher-note">
    <strong>Converge the property, not just the SCF energy.</strong>
    <span>A basis set can give a seemingly stable total energy while a magnetic response, spin density, excitation energy or diffuse charge-transfer state is still changing appreciably. Basis-set convergence is therefore observable-specific; polarization, diffuse and sometimes core-correlating functions should be tested against the quantity you actually intend to report.</span>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">03</span>
    <div><p class="section-eyebrow">Approximations</p><h2>HF, DFT and correlated wavefunctions approximate the same many-electron problem differently</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>Exchange and correlation are distinct consequences of having many electrons</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Exchange</strong>
        <p><b>What it is:</b> A purely quantum effect arising from antisymmetry of the many-electron wavefunction for identical fermions. Same-spin electrons avoid one another even without invoking classical electrostatic repulsion.</p>
        <p><b>What it changes:</b> It changes orbital energies, spin-state energetics and magnetic coupling, and is treated exactly within a Hartree–Fock determinant.</p>
        <p><b>What you observe:</b> Spin-state splittings, bond energetics and the strong dependence of many magnetic properties on the exchange treatment.</p>
      </article>
      <article>
        <strong>Electron correlation</strong>
        <p><b>What it is:</b> The additional correlated motion of electrons beyond the average-field picture, including dynamical avoidance from Coulomb repulsion and, in multireference cases, near-degenerate configurations.</p>
        <p><b>What it changes:</b> It corrects energies, charge distributions, bond breaking and magnetic couplings that a single determinant can misrepresent.</p>
        <p><b>What you observe:</b> Improved reaction energies, excitation energies and spin-state orderings; failures can be dramatic when static correlation is strong.</p>
      </article>
      <article>
        <strong>Exchange–correlation functional</strong>
        <p><b>What it is:</b> In Kohn–Sham DFT, the approximate energy functional that contains the many-body physics not represented by the non-interacting kinetic energy and classical Coulomb term.</p>
        <p><b>What it changes:</b> Its form controls self-interaction error, delocalization, spin densities and response properties.</p>
        <p><b>What you observe:</b> Functional dependence of geometries, charge-transfer energies, hyperfine couplings and magnetic tensors.</p>
      </article>
    </div>
  </div>


  <div class="method-ladder">
    <div><span>Hartree–Fock · one determinant</span><p>Optimizes the best mean-field Slater determinant. Exchange is treated exactly inside that determinant; Coulomb correlation beyond the mean field is missing.</p></div>
    <div><span>Kohn–Sham DFT · one density</span><p>Replaces the interacting problem by non-interacting Kohn–Sham orbitals reproducing the density. In practice the unknown exchange–correlation functional is approximated.</p></div>
    <div><span>Post-HF ab initio · correlate the reference</span><p>MP2, coupled cluster and configuration-interaction methods start from a wavefunction reference and recover electron correlation systematically or hierarchically.</p></div>
    <div><span>Multiconfigurational · several references</span><p>CASSCF and related methods optimize several important configurations together when no single determinant represents the electronic state adequately.</p></div>
  </div>

  <p>There is no universal “best” method. The right level depends on the observable. Ground-state geometries, charge-transfer states, bond breaking and magnetic response can have very different sensitivities.</p>

  <details class="lecture-details">
    <summary>What does “self-consistent” actually mean in HF or Kohn–Sham DFT?</summary>
    <p>The orbitals determine an electron density, but that density also determines the effective one-electron potential in which the orbitals are solved. An SCF calculation therefore iterates <strong>orbitals → density → effective potential → new orbitals</strong> until the input and output densities agree within a chosen threshold. Failure to converge is not just a software nuisance: it can signal near-degeneracy, competing electronic states or an unstable reference solution.</p>
  </details>
</section>

<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">HF</span>
    <div><p class="section-eyebrow">Hartree–Fock theory</p><h2>Find the best single Slater determinant</h2></div>
  </div>

  <p>Hartree–Fock (HF) starts by approximating the \(N\)-electron wavefunction with one antisymmetrized product of spin orbitals,</p>

  <div class="lecture-equation">
  \[
  \Psi_\mathrm{HF}
  =
  \frac{1}{\sqrt{N!}}
  \det[
  \chi_i(x_j)
  ].
  \]
  </div>

  <p>The orbitals are chosen variationally: among all determinants allowed by the chosen one-particle basis, HF finds the determinant with the lowest energy. This leads to the self-consistent one-electron equations</p>

  <div class="lecture-equation">
  \[
  \hat F\,\chi_i
  =
  \varepsilon_i\chi_i,
  \qquad
  \hat F
  =
  \hat h
  +
  \sum_j^\mathrm{occ}
  \left(
  \hat J_j-\hat K_j
  \right),
  \]
  </div>

  <p>where \(\hat h\) contains the one-electron kinetic and electron–nuclear terms, \(\hat J_j\) is the Coulomb operator and \(\hat K_j\) is the non-local exchange operator.</p>

  <p>In an atom-centred non-orthogonal basis, the same equations become the generalized matrix eigenvalue problem</p>

  <div class="lecture-equation">
  \[
  \mathbf F\mathbf C
  =
  \mathbf S\mathbf C\boldsymbol\varepsilon,
  \]
  </div>

  <p>where \(\mathbf S\) is the basis-function overlap matrix. Because \(\mathbf F\) depends on the occupied orbitals that we are solving for, the equations must be iterated to self-consistency.</p>

  <p>For occupied spin orbitals, the HF energy can be written schematically as</p>

  <div class="lecture-equation">
  \[
  E_\mathrm{HF}
  =
  \sum_i
  \langle i|\hat h|i\rangle
  +
  \frac12
  \sum_{ij}
  \left[
  \langle ij|ij\rangle
  -
  \langle ij|ji\rangle
  \right]
  +
  V_\mathrm{NN}.
  \]
  </div>

  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>What HF assumes</span><h3>The approximation is not “electrons do not interact”—it is that one optimized determinant is enough</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>Mean field</strong>
        <p><b>Captured:</b> every electron feels the average Coulomb field of the others.</p>
        <p><b>Missing:</b> instantaneous correlated avoidance beyond what antisymmetry already imposes.</p>
      </article>
      <article>
        <strong>Exact exchange within the determinant</strong>
        <p><b>Captured:</b> the exchange effect required by fermionic antisymmetry is treated exactly for the chosen determinant.</p>
        <p><b>Missing:</b> correlation cannot be repaired merely by calling exchange “exact”.</p>
      </article>
      <article>
        <strong>Single-reference character</strong>
        <p><b>Captured:</b> systems dominated by one electronic configuration can have a qualitatively good reference state.</p>
        <p><b>Missing:</b> bond breaking, diradicals and near-degenerate states can require several determinants with comparable weight.</p>
      </article>
    </div>
  </div>

  <aside class="teacher-note">
    <strong>When is HF useful?</strong>
    <span>HF is an excellent conceptual reference, supplies orbitals for MP2 and coupled-cluster theory, and can be qualitatively useful for strongly single-reference states. It is rarely the final quantitative method for thermochemistry or magnetic response because its correlation energy is missing.</span>
  </aside>

  <aside class="lecture-note">
    <strong>Restricted versus unrestricted HF:</strong>
    <span>RHF pairs \(\alpha\) and \(\beta\) electrons in the same spatial orbitals and is natural for many closed shells. UHF allows different \(\alpha\) and \(\beta\) orbitals and is useful for open shells or bond breaking, but the determinant need not be an eigenfunction of \(\hat S^2\); spin contamination is therefore a diagnostic to inspect rather than ignore.</span>
  </aside>
</section>

<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">DFT</span>
    <div><p class="section-eyebrow">Kohn–Sham density-functional theory</p><h2>Replace the many-electron wavefunction problem by an exact-in-principle density problem</h2></div>
  </div>

  <p>The Hohenberg–Kohn theorems establish that the exact ground-state energy can, in principle, be written as a functional of the electron density.</p>

  <div class="lecture-equation">
  \[
  E_0
  =
  \min_{n\rightarrow N}
  E[n].
  \]
  </div>

  <p>Kohn and Sham make this variational statement practical by introducing non-interacting orbitals that reproduce the interacting ground-state density:</p>

  <div class="lecture-equation">
  \[
  \left[
  -\frac12\nabla^2
  +
  v_\mathrm{ext}(\mathbf r)
  +
  v_\mathrm H(\mathbf r)
  +
  v_\mathrm{xc}(\mathbf r)
  \right]
  \phi_i
  =
  \varepsilon_i\phi_i.
  \]
  </div>

  <p>The density is reconstructed from the occupied Kohn–Sham orbitals, \(n(\mathbf r)=\sum_i^\mathrm{occ}|\phi_i(\mathbf r)|^2\), while the total energy is decomposed as</p>

  <div class="lecture-equation">
  \[
  E[n]
  =
  T_s[n]
  +
  \int
  v_\mathrm{ext}(\mathbf r)n(\mathbf r)\,d\mathbf r
  +
  E_\mathrm H[n]
  +
  E_\mathrm{xc}[n]
  +
  V_\mathrm{NN}.
  \]
  </div>

  <p>Everything difficult is concentrated into the exchange–correlation functional \(E_\mathrm{xc}[n]\). With the exact functional, Kohn–Sham DFT would give the exact ground-state density and ground-state energy within the non-relativistic Born–Oppenheimer problem. In real calculations the functional is approximate, so practical DFT is a family of models rather than one unique method.</p>

  <div class="method-ladder">
    <div><span>GGA / meta-GGA</span><p>Semilocal functionals use the density, its gradients and sometimes kinetic-energy-density information. They are efficient but can suffer from delocalization, self-interaction and spin-state errors.</p></div>
    <div><span>Hybrid functionals</span><p>Mix a fraction of exact HF exchange with DFT exchange–correlation. They often improve localized spin densities and reaction barriers, but the optimal exchange fraction is property- and system-dependent.</p></div>
    <div><span>Range-separated hybrids</span><p>Treat short- and long-range exchange differently and can improve long-range charge transfer when appropriately chosen.</p></div>
    <div><span>Double hybrids</span><p>Add a perturbative correlation contribution on top of a hybrid functional. They can be accurate for single-reference energetics but are more expensive and still inherit reference-state limitations.</p></div>
  </div>

  <aside class="teacher-note">
    <strong>DFT is exact in principle, approximate in practice.</strong>
    <span>The approximation is not the use of Kohn–Sham orbitals itself; it is primarily the unknown \(E_\mathrm{xc}[n]\) that must be approximated. Also, individual Kohn–Sham orbital energies are not generally physical electron-removal or excitation energies.</span>
  </aside>

  <aside class="lecture-note">
    <strong>Important limitations to recognize:</strong>
    <span>Common functionals can show self-interaction/delocalization error, incorrect spin-state ordering, poor strong/static correlation and problematic long-range charge-transfer or double-excitation states in ordinary TD-DFT. Dispersion must also be present in the functional or added through a physically consistent correction.</span>
  </aside>

  <details class="lecture-details">
    <summary>Where does TD-DFT fit?</summary>
    <p>Ground-state Kohn–Sham DFT does not directly provide excited-state energies. Linear-response time-dependent DFT (TD-DFT) obtains excitation energies from the response of the density to a time-dependent perturbation. It is often the practical first choice for many valence excitations in medium and large molecules, but the quality depends strongly on the functional and the state character. Long-range charge transfer, Rydberg states and states with strong double-excitation or multireference character require particular caution.</p>
  </details>
</section>

<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">WF</span>
    <div><p class="section-eyebrow">Ab initio wavefunction methods</p><h2>Recover electron correlation systematically from a wavefunction reference</h2></div>
  </div>

  <aside class="lecture-note">
    <strong>“Ab initio” does not mean “exact”.</strong>
    <span>In conventional quantum-chemistry language, HF and post-HF wavefunction methods are often called ab initio because they start from the electronic Hamiltonian without molecule-specific fitted parameters. They still make approximations: finite basis sets, truncated excitation spaces, frozen cores, approximate relativistic Hamiltonians and sometimes a single-reference assumption.</span>
  </aside>

  <p>Correlation energy is conventionally defined relative to the Hartree–Fock limit,</p>

  <div class="lecture-equation">
  \[
  E_\mathrm{corr}
  =
  E_\mathrm{exact}
  -
  E_\mathrm{HF},
  \]
  </div>

  <p>where “exact” here means the exact non-relativistic electronic energy for the same Born–Oppenheimer Hamiltonian in the complete-basis limit. Post-HF methods differ mainly in how they reconstruct this missing correlation.</p>

  <h3 class="lecture-subhead">MP2: second-order correlation around the HF reference</h3>

  <p>For canonical HF spin orbitals, the second-order Møller–Plesset correlation energy is</p>

  <div class="lecture-equation">
  \[
  E_\mathrm{MP2}^{(2)}
  =
  \frac14
  \sum_{ij}^{\mathrm{occ}}
  \sum_{ab}^{\mathrm{virt}}
  \frac{
  |\langle ij||ab\rangle|^2
  }{
  \varepsilon_i+\varepsilon_j-\varepsilon_a-\varepsilon_b
  }.
  \]
  </div>

  <p>MP2 is inexpensive by correlated-wavefunction standards and often useful for ordinary closed-shell single-reference chemistry. But the denominator exposes its weakness: if occupied and virtual orbitals become nearly degenerate, the perturbative correction can become unphysically large. Strong correlation, bond breaking and many transition-metal situations are therefore poor MP2 territory.</p>


  <details class="lecture-details">
    <summary>Where does configuration interaction fit?</summary>
    <p>Configuration interaction (CI) expands the wavefunction linearly in excited determinants relative to a reference,</p>
    <div class="lecture-equation">
    \[
    |\Psi_\mathrm{CI}\rangle
    =
    c_0|\Phi_0\rangle
    +
    \sum_{ia}c_i^a|\Phi_i^a\rangle
    +
    \frac14\sum_{ijab}c_{ij}^{ab}|\Phi_{ij}^{ab}\rangle
    +\cdots .
    \]
    </div>
    <p>CIS retains only single substitutions and is mainly an excited-state model rather than a correlated ground-state method. CISD includes singles and doubles and is variational, but truncated CI is not size extensive: two non-interacting copies of a system do not acquire exactly twice the correlation energy. Full CI includes every determinant in the chosen orbital basis and is exact <em>within that finite basis</em>, but the determinant count grows combinatorially, so FCI is restricted to very small problems or small active spaces.</p>
  </details>

  <h3 class="lecture-subhead">Coupled cluster: exponentiate excitations from one dominant reference</h3>

  <div class="lecture-equation">
  \[
  |\Psi_\mathrm{CC}\rangle
  =
  e^{\hat T}
  |\Phi_0\rangle,
  \qquad
  \hat T
  =
  \hat T_1+\hat T_2+\hat T_3+\cdots .
  \]
  </div>

  <p>CCSD retains single and double excitation operators; CCSD(T) adds the leading effect of triple excitations perturbatively. For well-behaved single-reference molecules, CCSD(T) is a standard high-accuracy benchmark method because the exponential ansatz is size extensive and captures dynamical correlation very efficiently.</p>

  <div class="method-ladder">
    <div><span>MP2 · roughly \(N^5\)</span><p>Cheap correlated baseline. Useful when the HF reference is qualitatively good and near-degeneracy is weak.</p></div>
    <div><span>CCSD · roughly \(N^6\)</span><p>Robust dynamical correlation for single-reference states; significantly more expensive in memory and integral transformations.</p></div>
    <div><span>CCSD(T) · roughly \(N^7\)</span><p>Often the benchmark choice for small-to-medium single-reference molecules, but not a cure for genuine multireference character.</p></div>
    <div><span>Full CI · combinatorial/exponential</span><p>Exact diagonalization within a finite orbital basis. It is a definition of the basis-set limit, not a generally scalable molecular method.</p></div>
  </div>

  <aside class="teacher-note">
    <strong>When should you distrust a single-reference post-HF result?</strong>
    <span>Warning signs include bond dissociation, near-degenerate frontier orbitals, several configurations with comparable weights, strongly fractional natural-orbital occupations, large spin contamination in an unrestricted reference, or unusually large coupled-cluster diagnostics. No single diagnostic is universal; the electronic structure should be inspected physically.</span>
  </aside>
</section>

<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">MR</span>
    <div><p class="section-eyebrow">Multiconfigurational and multireference methods</p><h2>Use several configurations when one determinant cannot represent the state</h2></div>
  </div>

  <p>A multiconfigurational self-consistent-field wavefunction is expanded in several configuration state functions or determinants while the orbitals are optimized at the same time,</p>

  <div class="lecture-equation">
  \[
  |\Psi_\mathrm{MCSCF}\rangle
  =
  \sum_I
  C_I
  |\Phi_I(\boldsymbol\kappa)\rangle.
  \]
  </div>

  <p>Both the configuration coefficients and the orbital rotations are optimized variationally,</p>

  <div class="lecture-equation">
  \[
  E_\mathrm{CASSCF}
  =
  \min_{\mathbf C,\boldsymbol\kappa}
  \frac{
  \langle\Psi(\mathbf C,\boldsymbol\kappa)|
  \hat H
  |\Psi(\mathbf C,\boldsymbol\kappa)\rangle
  }{
  \langle\Psi(\mathbf C,\boldsymbol\kappa)|
  \Psi(\mathbf C,\boldsymbol\kappa)\rangle
  }.
  \]
  </div>

  <p>Complete Active Space SCF (CASSCF) makes this tractable by dividing the orbitals into three groups:</p>

  <div class="method-ladder">
    <div><span>Inactive orbitals</span><p>Kept doubly occupied in every active-space configuration.</p></div>
    <div><span>Active orbitals</span><p>All allowed occupations are included for the chosen active electrons. A CAS(\(n,m\)) contains \(n\) active electrons distributed among \(m\) active orbitals.</p></div>
    <div><span>External / virtual orbitals</span><p>Unoccupied in the CASSCF reference but available later when dynamical correlation is added.</p></div>
    <div><span>Orbital optimization</span><p>The CI coefficients and orbital rotations are optimized together, so the orbitals can adapt to several competing electronic configurations.</p></div>
  </div>

  <p>CASSCF is designed primarily to capture <strong>static or nondynamical correlation</strong>: the correlation associated with several nearly degenerate configurations that must all be present already in the zeroth-order description. It does not normally recover enough dynamical correlation for quantitatively accurate reaction or excitation energies by itself.</p>

  <div class="lecture-equation">
  \[
  E_\mathrm{quantitative}
  \approx
  E_\mathrm{CASSCF}
  +
  E_\mathrm{dynamic\ correlation},
  \]
  </div>

  <p>The second term is commonly added with multireference perturbation or configuration-interaction methods:</p>

  <div class="method-ladder">
    <div><span>CASPT2</span><p>Adds second-order dynamical correlation to a CASSCF reference. Powerful and widely used, but the zeroth-order Hamiltonian and possible intruder states require care.</p></div>
    <div><span>NEVPT2</span><p>A second-order multireference perturbation theory based on the Dyall Hamiltonian. Standard formulations avoid the conventional intruder-state divergence and are often numerically robust.</p></div>
    <div><span>MRCI</span><p>Builds an explicit correlated CI expansion from multiple reference configurations. Accurate for small systems, but expensive; truncated MRCI is not strictly size extensive.</p></div>
    <div><span>DMRG-SCF / RAS / GAS</span><p>Alternative active-space strategies that extend the reachable orbital space when a full CAS becomes combinatorially impossible.</p></div>
  </div>

  <aside class="teacher-note">
    <strong>The active space is part of the model.</strong>
    <span>Include the orbitals needed to represent the physical near-degeneracy: breaking/forming bonds, radical orbitals, relevant metal \(d\) shells, ligand orbitals, or the orbitals participating in low-lying excited states. A large but physically wrong active space is not automatically safer than a smaller well-motivated one.</span>
  </aside>

  <details class="lecture-details">
    <summary>Why use state-averaged CASSCF?</summary>
    <p>Near avoided crossings, conical intersections, intersystem-crossing regions or dense transition-metal manifolds, optimizing orbitals for only one root can bias the description and cause root switching. State-averaged CASSCF minimizes a weighted average \(E_\mathrm{SA}=\sum_K w_KE_K\) so several electronic states share one orbital set. This gives a more balanced common representation, although the chosen states and weights become additional modelling decisions.</p>
  </details>

  <aside class="lecture-note">
    <strong>When is multireference theory genuinely needed?</strong>
    <span>Typical cases are bond breaking, diradicals, strongly coupled transition-metal centres, low-lying states of different electronic character, conical intersections, important double excitations and spin-state manifolds in which several configurations are energetically competitive. The presence of a metal atom alone is not a sufficient reason.</span>
  </aside>
</section>

<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">?</span>
    <div><p class="section-eyebrow">Method selection</p><h2>Choose the method from the electronic structure and the property—not from a hierarchy of prestige</h2></div>
  </div>

  <div class="method-ladder">
    <div><span>Large ground-state molecule / routine geometry</span><p><strong>Start:</strong> a well-tested DFT functional. <strong>Escalate:</strong> if spin states, charge localization or reaction energetics depend strongly on the functional.</p></div>
    <div><span>Small or medium, single-reference benchmark</span><p><strong>Start:</strong> CCSD(T) with a converged basis or a validated local-correlation approximation. <strong>Avoid:</strong> treating CCSD(T) as automatically reliable when the reference becomes multiconfigurational.</p></div>
    <div><span>Cheap correlation for a closed-shell single-reference system</span><p><strong>Use:</strong> MP2 as a screening or baseline method. <strong>Avoid:</strong> small-gap systems, bond breaking and strong static correlation.</p></div>
    <div><span>Bond breaking, diradical, conical intersection, near-degeneracy</span><p><strong>Use:</strong> CASSCF or another multiconfigurational reference, normally followed by CASPT2, NEVPT2, MRCI or another dynamic-correlation treatment.</p></div>
    <div><span>Excited states dominated by single excitations</span><p><strong>Use:</strong> TD-DFT for larger systems or EOM-CC-type methods when single-reference accuracy is affordable. <strong>Escalate:</strong> to multireference theory for double excitations, crossings or strongly changing state character.</p></div>
    <div><span>Magnetic parameters \(A\), \(g\), \(J\), SOC, ZFS</span><p><strong>Use:</strong> property-specific benchmarking. DFT is often the practical starting point; coupled-cluster or multireference theory becomes important when spin density, state mixing or near-degeneracy is not described robustly. Basis-set and relativistic effects must be converged for the actual property.</p></div>
  </div>

  <aside class="teacher-note">
    <strong>A practical workflow:</strong>
    <span>Use the cheapest method that captures the correct qualitative electronic structure, then benchmark the property of interest with a higher-level method on a smaller model or representative geometries. Method agreement for total energies does not guarantee agreement for spin density, SOC, \(g\)-shifts or hyperfine couplings.</span>
  </aside>
</section>


<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">04</span>
    <div><p class="section-eyebrow">Interactive</p><h2>State mixing and avoided crossings</h2></div>
  </div>

  <p>Two states can have very different physical character and still mix strongly if they come close in energy. This tiny two-state model is a useful prototype:</p>

  <div class="interactive-card" id="orbital-demo">
    <div class="interactive-head">
      <div><span class="interactive-kicker">Interactive model</span><h3>Two coupled electronic states</h3></div>
      <span class="interactive-model-note">2 × 2 Hamiltonian</span>
    </div>

    <div class="lecture-equation-grid">
      <div class="lecture-equation compact">
      \[
      H=
      \begin{pmatrix}
      -\Delta/2&t\\
      t&+\Delta/2
      \end{pmatrix}
      \]
      </div>
      <div class="lecture-equation compact">
      \[
      E_\pm=\pm\sqrt{(\Delta/2)^2+t^2}
      \]
      </div>
    </div>

    <div class="demo-prompt"><strong>Try this:</strong><span>set \(t=0\) first. The two diabatic states cross. Then increase \(t\): the crossing opens and the state character becomes mixed around \(\Delta=0\).</span></div>

    <div class="interactive-layout">
      <div class="interactive-controls">
        <label for="orbital-delta"><span class="control-name">Current offset \(\Delta\)</span><output id="orbital-delta-out">1.00 eV</output></label>
        <input id="orbital-delta" type="range" min="-4" max="4" step="0.05" value="1">

        <label for="orbital-coupling"><span class="control-name">Coupling \(t\)</span><output id="orbital-coupling-out">0.50 eV</output></label>
        <input id="orbital-coupling" type="range" min="0" max="1.2" step="0.025" value="0.5">

        <div class="demo-presets">
          <button type="button" data-orbital-delta="0" data-orbital-coupling="0">crossing</button>
          <button type="button" data-orbital-delta="0" data-orbital-coupling="0.25">weak mixing</button>
          <button type="button" data-orbital-delta="0" data-orbital-coupling="0.9">strong mixing</button>
        </div>

        <div class="interactive-readout">
          <span>Current gap <strong id="orbital-splitting">1.41 eV</strong></span>
          <span>Minimum gap <strong id="orbital-min-gap">1.00 eV</strong></span>
          <span>Ground-state character on state 1 <strong id="orbital-weight">85.4%</strong></span>
        </div>
        <div class="character-meter" aria-hidden="true"><span id="orbital-character-bar"></span></div>
        <p id="orbital-explanation" class="demo-explanation">Away from the crossing, the lower state is mostly localized on one diabatic state.</p>
      </div>

      <div class="plot-wrap">
        <svg id="orbital-svg" class="lecture-svg" viewBox="0 0 560 300" role="img" aria-label="Avoided crossing between two coupled electronic states">
          <line x1="58" y1="252" x2="528" y2="252" class="plot-axis"/>
          <line x1="58" y1="30" x2="58" y2="252" class="plot-axis"/>
          <line x1="58" y1="141" x2="528" y2="141" class="plot-grid"/>
          <line x1="293" y1="30" x2="293" y2="252" class="plot-grid"/>
          <text x="492" y="278" class="svg-caption">Δ / eV</text>
          <text x="15" y="34" class="svg-caption">E / eV</text>
          <text x="52" y="269" class="svg-tick">−4</text>
          <text x="169" y="269" class="svg-tick">−2</text>
          <text x="289" y="269" class="svg-tick">0</text>
          <text x="406" y="269" class="svg-tick">2</text>
          <text x="522" y="269" class="svg-tick">4</text>
          <path id="diabatic-1" class="diabatic-line" fill="none" d="M58.00 55.62 L60.61 56.56 L63.22 57.51 L65.83 58.46 L68.44 59.41 L71.06 60.36 L73.67 61.31 L76.28 62.26 L78.89 63.21 L81.50 64.15 L84.11 65.10 L86.72 66.05 L89.33 67.00 L91.94 67.95 L94.56 68.90 L97.17 69.85 L99.78 70.79 L102.39 71.74 L105.00 72.69 L107.61 73.64 L110.22 74.59 L112.83 75.54 L115.44 76.49 L118.06 77.44 L120.67 78.38 L123.28 79.33 L125.89 80.28 L128.50 81.23 L131.11 82.18 L133.72 83.13 L136.33 84.08 L138.94 85.03 L141.56 85.97 L144.17 86.92 L146.78 87.87 L149.39 88.82 L152.00 89.77 L154.61 90.72 L157.22 91.67 L159.83 92.62 L162.44 93.56 L165.06 94.51 L167.67 95.46 L170.28 96.41 L172.89 97.36 L175.50 98.31 L178.11 99.26 L180.72 100.21 L183.33 101.15 L185.94 102.10 L188.56 103.05 L191.17 104.00 L193.78 104.95 L196.39 105.90 L199.00 106.85 L201.61 107.79 L204.22 108.74 L206.83 109.69 L209.44 110.64 L212.06 111.59 L214.67 112.54 L217.28 113.49 L219.89 114.44 L222.50 115.38 L225.11 116.33 L227.72 117.28 L230.33 118.23 L232.94 119.18 L235.56 120.13 L238.17 121.08 L240.78 122.03 L243.39 122.97 L246.00 123.92 L248.61 124.87 L251.22 125.82 L253.83 126.77 L256.44 127.72 L259.06 128.67 L261.67 129.62 L264.28 130.56 L266.89 131.51 L269.50 132.46 L272.11 133.41 L274.72 134.36 L277.33 135.31 L279.94 136.26 L282.56 137.21 L285.17 138.15 L287.78 139.10 L290.39 140.05 L293.00 141.00 L295.61 141.95 L298.22 142.90 L300.83 143.85 L303.44 144.79 L306.06 145.74 L308.67 146.69 L311.28 147.64 L313.89 148.59 L316.50 149.54 L319.11 150.49 L321.72 151.44 L324.33 152.38 L326.94 153.33 L329.56 154.28 L332.17 155.23 L334.78 156.18 L337.39 157.13 L340.00 158.08 L342.61 159.03 L345.22 159.97 L347.83 160.92 L350.44 161.87 L353.06 162.82 L355.67 163.77 L358.28 164.72 L360.89 165.67 L363.50 166.62 L366.11 167.56 L368.72 168.51 L371.33 169.46 L373.94 170.41 L376.56 171.36 L379.17 172.31 L381.78 173.26 L384.39 174.21 L387.00 175.15 L389.61 176.10 L392.22 177.05 L394.83 178.00 L397.44 178.95 L400.06 179.90 L402.67 180.85 L405.28 181.79 L407.89 182.74 L410.50 183.69 L413.11 184.64 L415.72 185.59 L418.33 186.54 L420.94 187.49 L423.56 188.44 L426.17 189.38 L428.78 190.33 L431.39 191.28 L434.00 192.23 L436.61 193.18 L439.22 194.13 L441.83 195.08 L444.44 196.03 L447.06 196.97 L449.67 197.92 L452.28 198.87 L454.89 199.82 L457.50 200.77 L460.11 201.72 L462.72 202.67 L465.33 203.62 L467.94 204.56 L470.56 205.51 L473.17 206.46 L475.78 207.41 L478.39 208.36 L481.00 209.31 L483.61 210.26 L486.22 211.21 L488.83 212.15 L491.44 213.10 L494.06 214.05 L496.67 215.00 L499.28 215.95 L501.89 216.90 L504.50 217.85 L507.11 218.79 L509.72 219.74 L512.33 220.69 L514.94 221.64 L517.56 222.59 L520.17 223.54 L522.78 224.49 L525.39 225.44 L528.00 226.38"/>
          <path id="diabatic-2" class="diabatic-line" fill="none" d="M58.00 226.38 L60.61 225.44 L63.22 224.49 L65.83 223.54 L68.44 222.59 L71.06 221.64 L73.67 220.69 L76.28 219.74 L78.89 218.79 L81.50 217.85 L84.11 216.90 L86.72 215.95 L89.33 215.00 L91.94 214.05 L94.56 213.10 L97.17 212.15 L99.78 211.21 L102.39 210.26 L105.00 209.31 L107.61 208.36 L110.22 207.41 L112.83 206.46 L115.44 205.51 L118.06 204.56 L120.67 203.62 L123.28 202.67 L125.89 201.72 L128.50 200.77 L131.11 199.82 L133.72 198.87 L136.33 197.92 L138.94 196.97 L141.56 196.03 L144.17 195.08 L146.78 194.13 L149.39 193.18 L152.00 192.23 L154.61 191.28 L157.22 190.33 L159.83 189.38 L162.44 188.44 L165.06 187.49 L167.67 186.54 L170.28 185.59 L172.89 184.64 L175.50 183.69 L178.11 182.74 L180.72 181.79 L183.33 180.85 L185.94 179.90 L188.56 178.95 L191.17 178.00 L193.78 177.05 L196.39 176.10 L199.00 175.15 L201.61 174.21 L204.22 173.26 L206.83 172.31 L209.44 171.36 L212.06 170.41 L214.67 169.46 L217.28 168.51 L219.89 167.56 L222.50 166.62 L225.11 165.67 L227.72 164.72 L230.33 163.77 L232.94 162.82 L235.56 161.87 L238.17 160.92 L240.78 159.97 L243.39 159.03 L246.00 158.08 L248.61 157.13 L251.22 156.18 L253.83 155.23 L256.44 154.28 L259.06 153.33 L261.67 152.38 L264.28 151.44 L266.89 150.49 L269.50 149.54 L272.11 148.59 L274.72 147.64 L277.33 146.69 L279.94 145.74 L282.56 144.79 L285.17 143.85 L287.78 142.90 L290.39 141.95 L293.00 141.00 L295.61 140.05 L298.22 139.10 L300.83 138.15 L303.44 137.21 L306.06 136.26 L308.67 135.31 L311.28 134.36 L313.89 133.41 L316.50 132.46 L319.11 131.51 L321.72 130.56 L324.33 129.62 L326.94 128.67 L329.56 127.72 L332.17 126.77 L334.78 125.82 L337.39 124.87 L340.00 123.92 L342.61 122.97 L345.22 122.03 L347.83 121.08 L350.44 120.13 L353.06 119.18 L355.67 118.23 L358.28 117.28 L360.89 116.33 L363.50 115.38 L366.11 114.44 L368.72 113.49 L371.33 112.54 L373.94 111.59 L376.56 110.64 L379.17 109.69 L381.78 108.74 L384.39 107.79 L387.00 106.85 L389.61 105.90 L392.22 104.95 L394.83 104.00 L397.44 103.05 L400.06 102.10 L402.67 101.15 L405.28 100.21 L407.89 99.26 L410.50 98.31 L413.11 97.36 L415.72 96.41 L418.33 95.46 L420.94 94.51 L423.56 93.56 L426.17 92.62 L428.78 91.67 L431.39 90.72 L434.00 89.77 L436.61 88.82 L439.22 87.87 L441.83 86.92 L444.44 85.97 L447.06 85.03 L449.67 84.08 L452.28 83.13 L454.89 82.18 L457.50 81.23 L460.11 80.28 L462.72 79.33 L465.33 78.38 L467.94 77.44 L470.56 76.49 L473.17 75.54 L475.78 74.59 L478.39 73.64 L481.00 72.69 L483.61 71.74 L486.22 70.79 L488.83 69.85 L491.44 68.90 L494.06 67.95 L496.67 67.00 L499.28 66.05 L501.89 65.10 L504.50 64.15 L507.11 63.21 L509.72 62.26 L512.33 61.31 L514.94 60.36 L517.56 59.41 L520.17 58.46 L522.78 57.51 L525.39 56.56 L528.00 55.62"/>
          <path id="adiabatic-minus" class="adiabatic-line lower-line" fill="none" d="M58.00 229.01 L60.61 228.09 L63.22 227.17 L65.83 226.25 L68.44 225.34 L71.06 224.42 L73.67 223.50 L76.28 222.59 L78.89 221.67 L81.50 220.76 L84.11 219.84 L86.72 218.93 L89.33 218.02 L91.94 217.11 L94.56 216.20 L97.17 215.29 L99.78 214.38 L102.39 213.47 L105.00 212.57 L107.61 211.66 L110.22 210.76 L112.83 209.85 L115.44 208.95 L118.06 208.05 L120.67 207.15 L123.28 206.26 L125.89 205.36 L128.50 204.47 L131.11 203.57 L133.72 202.68 L136.33 201.79 L138.94 200.91 L141.56 200.02 L144.17 199.14 L146.78 198.26 L149.39 197.38 L152.00 196.50 L154.61 195.63 L157.22 194.75 L159.83 193.88 L162.44 193.02 L165.06 192.15 L167.67 191.29 L170.28 190.44 L172.89 189.58 L175.50 188.73 L178.11 187.88 L180.72 187.04 L183.33 186.20 L185.94 185.37 L188.56 184.54 L191.17 183.72 L193.78 182.90 L196.39 182.08 L199.00 181.28 L201.61 180.47 L204.22 179.68 L206.83 178.89 L209.44 178.11 L212.06 177.34 L214.67 176.58 L217.28 175.82 L219.89 175.08 L222.50 174.34 L225.11 173.62 L227.72 172.91 L230.33 172.21 L232.94 171.53 L235.56 170.85 L238.17 170.20 L240.78 169.56 L243.39 168.94 L246.00 168.34 L248.61 167.75 L251.22 167.19 L253.83 166.65 L256.44 166.14 L259.06 165.65 L261.67 165.19 L264.28 164.76 L266.89 164.36 L269.50 163.99 L272.11 163.66 L274.72 163.36 L277.33 163.09 L279.94 162.87 L282.56 162.68 L285.17 162.54 L287.78 162.43 L290.39 162.37 L293.00 162.35 L295.61 162.37 L298.22 162.43 L300.83 162.54 L303.44 162.68 L306.06 162.87 L308.67 163.09 L311.28 163.36 L313.89 163.66 L316.50 163.99 L319.11 164.36 L321.72 164.76 L324.33 165.19 L326.94 165.65 L329.56 166.14 L332.17 166.65 L334.78 167.19 L337.39 167.75 L340.00 168.34 L342.61 168.94 L345.22 169.56 L347.83 170.20 L350.44 170.85 L353.06 171.53 L355.67 172.21 L358.28 172.91 L360.89 173.62 L363.50 174.34 L366.11 175.08 L368.72 175.82 L371.33 176.58 L373.94 177.34 L376.56 178.11 L379.17 178.89 L381.78 179.68 L384.39 180.47 L387.00 181.28 L389.61 182.08 L392.22 182.90 L394.83 183.72 L397.44 184.54 L400.06 185.37 L402.67 186.20 L405.28 187.04 L407.89 187.88 L410.50 188.73 L413.11 189.58 L415.72 190.44 L418.33 191.29 L420.94 192.15 L423.56 193.02 L426.17 193.88 L428.78 194.75 L431.39 195.63 L434.00 196.50 L436.61 197.38 L439.22 198.26 L441.83 199.14 L444.44 200.02 L447.06 200.91 L449.67 201.79 L452.28 202.68 L454.89 203.57 L457.50 204.47 L460.11 205.36 L462.72 206.26 L465.33 207.15 L467.94 208.05 L470.56 208.95 L473.17 209.85 L475.78 210.76 L478.39 211.66 L481.00 212.57 L483.61 213.47 L486.22 214.38 L488.83 215.29 L491.44 216.20 L494.06 217.11 L496.67 218.02 L499.28 218.93 L501.89 219.84 L504.50 220.76 L507.11 221.67 L509.72 222.59 L512.33 223.50 L514.94 224.42 L517.56 225.34 L520.17 226.25 L522.78 227.17 L525.39 228.09 L528.00 229.01"/>
          <path id="adiabatic-plus" class="adiabatic-line upper-line" fill="none" d="M58.00 52.99 L60.61 53.91 L63.22 54.83 L65.83 55.75 L68.44 56.66 L71.06 57.58 L73.67 58.50 L76.28 59.41 L78.89 60.33 L81.50 61.24 L84.11 62.16 L86.72 63.07 L89.33 63.98 L91.94 64.89 L94.56 65.80 L97.17 66.71 L99.78 67.62 L102.39 68.53 L105.00 69.43 L107.61 70.34 L110.22 71.24 L112.83 72.15 L115.44 73.05 L118.06 73.95 L120.67 74.85 L123.28 75.74 L125.89 76.64 L128.50 77.53 L131.11 78.43 L133.72 79.32 L136.33 80.21 L138.94 81.09 L141.56 81.98 L144.17 82.86 L146.78 83.74 L149.39 84.62 L152.00 85.50 L154.61 86.37 L157.22 87.25 L159.83 88.12 L162.44 88.98 L165.06 89.85 L167.67 90.71 L170.28 91.56 L172.89 92.42 L175.50 93.27 L178.11 94.12 L180.72 94.96 L183.33 95.80 L185.94 96.63 L188.56 97.46 L191.17 98.28 L193.78 99.10 L196.39 99.92 L199.00 100.72 L201.61 101.53 L204.22 102.32 L206.83 103.11 L209.44 103.89 L212.06 104.66 L214.67 105.42 L217.28 106.18 L219.89 106.92 L222.50 107.66 L225.11 108.38 L227.72 109.09 L230.33 109.79 L232.94 110.47 L235.56 111.15 L238.17 111.80 L240.78 112.44 L243.39 113.06 L246.00 113.66 L248.61 114.25 L251.22 114.81 L253.83 115.35 L256.44 115.86 L259.06 116.35 L261.67 116.81 L264.28 117.24 L266.89 117.64 L269.50 118.01 L272.11 118.34 L274.72 118.64 L277.33 118.91 L279.94 119.13 L282.56 119.32 L285.17 119.46 L287.78 119.57 L290.39 119.63 L293.00 119.65 L295.61 119.63 L298.22 119.57 L300.83 119.46 L303.44 119.32 L306.06 119.13 L308.67 118.91 L311.28 118.64 L313.89 118.34 L316.50 118.01 L319.11 117.64 L321.72 117.24 L324.33 116.81 L326.94 116.35 L329.56 115.86 L332.17 115.35 L334.78 114.81 L337.39 114.25 L340.00 113.66 L342.61 113.06 L345.22 112.44 L347.83 111.80 L350.44 111.15 L353.06 110.47 L355.67 109.79 L358.28 109.09 L360.89 108.38 L363.50 107.66 L366.11 106.92 L368.72 106.18 L371.33 105.42 L373.94 104.66 L376.56 103.89 L379.17 103.11 L381.78 102.32 L384.39 101.53 L387.00 100.72 L389.61 99.92 L392.22 99.10 L394.83 98.28 L397.44 97.46 L400.06 96.63 L402.67 95.80 L405.28 94.96 L407.89 94.12 L410.50 93.27 L413.11 92.42 L415.72 91.56 L418.33 90.71 L420.94 89.85 L423.56 88.98 L426.17 88.12 L428.78 87.25 L431.39 86.37 L434.00 85.50 L436.61 84.62 L439.22 83.74 L441.83 82.86 L444.44 81.98 L447.06 81.09 L449.67 80.21 L452.28 79.32 L454.89 78.43 L457.50 77.53 L460.11 76.64 L462.72 75.74 L465.33 74.85 L467.94 73.95 L470.56 73.05 L473.17 72.15 L475.78 71.24 L478.39 70.34 L481.00 69.43 L483.61 68.53 L486.22 67.62 L488.83 66.71 L491.44 65.80 L494.06 64.89 L496.67 63.98 L499.28 63.07 L501.89 62.16 L504.50 61.24 L507.11 60.33 L509.72 59.41 L512.33 58.50 L514.94 57.58 L517.56 56.66 L520.17 55.75 L522.78 54.83 L525.39 53.91 L528.00 52.99"/>
          <line id="orbital-marker" x1="352" y1="30" x2="352" y2="252" class="plot-marker"/>
          <circle id="orbital-marker-minus" cx="352" cy="176" r="5" class="plot-point lower-point"/>
          <circle id="orbital-marker-plus" cx="352" cy="106" r="5" class="plot-point upper-point"/>
        </svg>
      </div>
    </div>
  </div>
</section>


<section class="lecture-section concept-extension">
  <div class="lecture-section-head">
    <span class="lecture-index concept-index">P</span>
    <div><p class="section-eyebrow">Spin density</p><h2>Magnetic observables care about where the unpaired spin lives</h2></div>
  </div>

  <p>The ordinary electron density tells us where electronic charge is located. Magnetic interactions need one more piece of information: how the spin-up and spin-down densities differ. A common real-space quantity is the spin density</p>

  <div class="lecture-equation">
  \[
  m(\mathbf r)
  =
  \rho_\alpha(\mathbf r)
  -
  \rho_\beta(\mathbf r).
  \]
  </div>

  <p>A radical can therefore have a rather delocalized spin distribution even when a Lewis structure draws the unpaired electron on one atom. That distinction matters because the Fermi-contact hyperfine interaction probes spin density at a nucleus, whereas anisotropic hyperfine coupling and the \(g\)-tensor depend on the broader spatial and orbital character of the electronic state.</p>

  <aside class="lecture-note">
    <strong>Charge density and spin density are not interchangeable.</strong>
    <span>Two methods can produce similar total densities while differing noticeably in spin polarization around the nuclei; magnetic response properties can expose that difference.</span>
  </aside>

  <aside class="research-connection">
    <span class="research-connection-label">Magnetic electronic structure</span>
    <p>This sensitivity is one reason magnetic parameters are demanding electronic-structure benchmarks: they test the local spin density and response of the wavefunction, not only a total energy.</p>
    <div class="research-connection-links">
      <a href="https://doi.org/10.1021/acs.inorgchem.3c02949" target="_blank" rel="noopener"><strong>Peculiar Differences between Two Copper Complexes Containing Similar Redox-Active Ligands</strong><span>Inorg. Chem. (2024)</span></a>
    </div>
  </aside>
</section>

<section class="lecture-section">
  <div class="lecture-section-head">
    <span class="lecture-index">05</span>
    <div><p class="section-eyebrow">Excited &amp; magnetic states</p><h2>Electronic structure supplies the spin Hamiltonian</h2></div>
  </div>
  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>Physical meaning</span><h3>The magnetic parameters are response properties of the electronic state</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>\(\mathbf g\)-tensor</strong>
        <p><b>What it is:</b> The factor that converts an applied magnetic field into electron-spin Zeeman splitting. A free electron has \(g\approx2.0023\); a molecule deviates from this because orbital motion and excited electronic states admix through spin–orbit coupling.</p>
        <p><b>What it changes:</b> It sets the spin precession frequency and, when anisotropic, makes that frequency depend on molecular orientation.</p>
        <p><b>What you observe:</b> EPR resonance positions and their orientation dependence.</p>
      </article>
      <article>
        <strong>Hyperfine tensor \(\mathbf A\)</strong>
        <p><b>What it is:</b> The magnetic interaction between an electron spin and a nuclear spin. Its contact part probes spin density at the nucleus; its anisotropic part reflects the spatial distribution of the unpaired electron.</p>
        <p><b>What it changes:</b> It splits spin energy levels and creates different local magnetic fields for different nuclear-spin states.</p>
        <p><b>What you observe:</b> Hyperfine multiplets in EPR/ENDOR and nuclear-dependent singlet–triplet mixing in radical pairs.</p>
      </article>
      <article>
        <strong>Spin–orbit coupling (SOC)</strong>
        <p><b>What it is:</b> A relativistic interaction linking the electron's spin angular momentum to its orbital motion in the molecular electrostatic field.</p>
        <p><b>What it changes:</b> It mixes states of different spin character, shifts the \(g\)-tensor away from the free-electron value and can enable intersystem crossing.</p>
        <p><b>What you observe:</b> \(g\)-anisotropy, zero-field splitting, spin-forbidden intensity and singlet↔triplet population transfer.</p>
      </article>
      <article>
        <strong>Zero-field splitting (ZFS)</strong>
        <p><b>What it is:</b> A splitting of sublevels within an \(S>\tfrac12\) spin multiplet even when no external magnetic field is applied.</p>
        <p><b>What it changes:</b> It sets an intrinsic anisotropic energy scale through spin–spin and spin–orbit contributions.</p>
        <p><b>What you observe:</b> Field-independent level splittings and characteristic EPR transitions of triplets and higher-spin centres.</p>
      </article>
    </div>
  </div>


  <p>Magnetic observables are unusually demanding tests of this electronic description because they depend on small pieces of the wavefunction or density: spin density at a nucleus, weak spin–orbit-induced state mixing, near-degenerate excited states or subtle changes in orbital overlap. Two methods can predict similar total energies while giving meaningfully different hyperfine couplings, \(g\)-shifts or exchange interactions.</p>

  <p>For photochemistry, ground-state DFT is only the start. We also need excited-state energies, oscillator strengths, charge-transfer character and sometimes spin–orbit coupling between states. TD-DFT is often the practical workhorse, while multireference methods become important when several configurations matter simultaneously.</p>

  <p>For spin dynamics, the key output is often a set of effective magnetic parameters:</p>

  <div class="lecture-output-strip">
    <div><strong>\(\mathbf g\)-tensor</strong><span>how the electronic magnetic moment responds to an external field</span></div>
    <div><strong>Hyperfine tensor \(\mathbf A\)</strong><span>how electron spin couples to nearby nuclear spins</span></div>
    <div><strong>Exchange \(J\) and dipolar \(\mathbf D\)</strong><span>how two electron spins interact with one another</span></div>
    <div><strong>SOC &amp; ZFS</strong><span>spin–orbit-driven state mixing and zero-field splitting in higher-spin systems</span></div>
  </div>

  
  <section class="parameter-derivation">
    <p class="section-eyebrow">Mathematical reduction</p>
    <h3>From the electronic Hamiltonian to an effective spin Hamiltonian</h3>

    <p>The spin Hamiltonian is not a second, unrelated theory. It is a low-energy effective representation of the electronic problem. If \(P\) projects onto the magnetic states we want to keep and \(Q=1-P\) onto all other electronic states, perturbative downfolding gives schematically</p>

    <div class="lecture-equation">
    \[
    \hat H_\mathrm{eff}
    =
    P\hat H P
    +
    P\hat VQ
    \frac{1}{E_0-Q\hat H_0Q}
    Q\hat VP
    +\cdots .
    \]
    </div>

    <p>The first term contains interactions acting directly inside the chosen spin manifold. The second term shows how virtual coupling to electronically excited states feeds back into the low-energy spin physics. This is the mathematical origin of many apparently empirical spin-Hamiltonian parameters: SOC-induced \(g\)-shifts and ZFS, for example, are strongly controlled by matrix elements to excited states and by their energy denominators.</p>

    <p>After this projection, the effective operator is expanded in a small set of spin operators,</p>

    <div class="lecture-equation">
    \[
    \hat H_\mathrm{eff}
    =
    \sum_k p_k\,\hat O_k
    =
    \mu_B\mathbf B\cdot\mathbf g\cdot\hat{\mathbf S}
    +
    \sum_N
    \hat{\mathbf S}\cdot\mathbf A_N\cdot\hat{\mathbf I}_N
    +
    J\,\hat{\mathbf S}_1\cdot\hat{\mathbf S}_2
    +
    \hat{\mathbf S}\cdot\mathbf D\cdot\hat{\mathbf S}
    +\cdots .
    \]
    </div>

    <p>The quantum-chemistry problem is therefore to determine the coefficients \(p_k\). Depending on the parameter, this is done from expectation values, derivatives of the electronic energy with respect to external perturbations, response equations, differences between spin-state energies, or an effective-Hamiltonian fit to low-energy ab initio states.</p>
  </section>

  <div class="physical-concept-panel">
    <div class="physical-concept-head"><span>How the parameters are obtained</span><h3>Different spin parameters probe different pieces of the electronic state</h3></div>
    <div class="physical-concept-grid">
      <article>
        <strong>\(\mathbf g\): magnetic response + SOC</strong>
        <p>At the electronic-structure level the molecular \(g\)-tensor is a magnetic response property. A useful decomposition is \(\mathbf g=g_e\mathbf 1+\mathbf g^\mathrm{RMC}+\mathbf g^\mathrm{DSO}+\mathbf g^\mathrm{PSO}\).</p>
        <p>The dominant molecular anisotropy often comes from orbital-Zeeman/SOC response. In a sum-over-states picture, \(\Delta g\) contains terms proportional to \(\langle0|\hat L|n\rangle\langle n|\hat H_\mathrm{SO}|0\rangle/(E_0-E_n)\).</p>
      </article>
      <article>
        <strong>\(\mathbf A\): spin density at and around a nucleus</strong>
        <p>The contact part is proportional to the spin density at nucleus \(N\), \(A_N^\mathrm{FC}\propto\rho_s(\mathbf R_N)\).</p>
        <p>The anisotropic spin-dipolar part is a real-space integral over the spin density, schematically \(A_{N,\alpha\beta}^\mathrm{dip}\propto\int \rho_s(\mathbf r)[3r_\alpha r_\beta-r^2\delta_{\alpha\beta}]r^{-5}d\mathbf r\).</p>
      </article>
      <article>
        <strong>\(J\): map electronic spin-state energies onto a spin model</strong>
        <p>For two \(S=\tfrac12\) centres and the convention \(\hat H_\mathrm{ex}=J\hat{\mathbf S}_1\cdot\hat{\mathbf S}_2\), exact pure singlet/triplet energies obey \(E_T-E_S=J\).</p>
        <p>Broken-symmetry DFT instead gives a spin-contaminated determinant, so an explicit projection/mapping prescription such as a Noodleman- or Yamaguchi-type scheme is required before comparing \(J\) values.</p>
      </article>
      <article>
        <strong>\(\mathbf D\) and ZFS: direct spin–spin + SOC</strong>
        <p>For two localized spins the direct magnetic dipolar tensor follows from the spatial spin distribution and reduces in the point-dipole limit to the familiar \(r^{-3}\) tensor.</p>
        <p>For an \(S>\tfrac12\) multiplet, the ZFS tensor also contains SOC-mediated second-order contributions obtained by projecting coupled electronic states into the spin manifold.</p>
      </article>
    </div>
  </div>

  <aside class="lecture-note">
    <strong>Response property does not mean “read it from one orbital”.</strong>
    <span>Most magnetic tensors depend on the relaxation of the entire electronic state under a perturbation. In SCF-based methods this commonly leads to coupled-perturbed SCF/Kohn–Sham equations rather than a simple orbital-energy formula.</span>
  </aside>

<aside class="teacher-note">
    <strong>This is the hand-off to spin dynamics:</strong>
    <span>once these quantities are known for a molecular structure, we can stop carrying the full electronic problem and propagate a much smaller effective spin Hamiltonian.</span>
  </aside>

  <aside class="research-connection">
    <span class="research-connection-label">Research connection</span>
    <p>The abstract response properties on this page become measurable only after they are embedded in a molecular environment. In flavoproteins, for example, environmental polarization can shift excitation energies enough to change the photochemical landscape that feeds later spin chemistry.</p>
    <div class="research-connection-links">
      <a href="https://doi.org/10.1021/acs.jpcb.4c02168" target="_blank" rel="noopener"><strong>Importance of Polarizable Embedding for Absorption Spectrum Calculations of Arabidopsis thaliana Cryptochrome 1</strong><span>J. Phys. Chem. B (2024)</span></a>
    </div>
  </aside>
</section>

<aside class="lecture-takeaway">
  <span class="lecture-takeaway-label">Take-home model</span>
  <h3>What should remain after this module?</h3>
  <ul>
    <li>HF optimizes one determinant; Kohn–Sham DFT moves the unknown many-body physics into (E_mathrm{xc}[n]); post-HF methods correlate a usually single-reference wavefunction; multiconfigurational methods change the reference itself when several configurations are essential.</li>
    <li>Choose the method from the electronic structure and the property: DFT is the practical workhorse, CCSD(T) is a high-accuracy single-reference benchmark, and CASSCF plus dynamic correlation is the natural route when near-degeneracy or state mixing is intrinsic.</li>
    <li>Magnetic parameters are response or effective-Hamiltonian quantities, so errors in spin density, excited-state gaps, SOC or electronic-state character propagate directly into the later spin-dynamics model.</li>
  </ul>
</aside>

<aside class="landmark-study">
  <span class="landmark-label">Landmark theory</span>
  <h3>Kohn–Sham DFT turned the density theorem into a practical electronic-structure method</h3>
  <p>Kohn and Sham introduced a non-interacting reference system that reproduces the interacting ground-state density. That construction is why molecular DFT can use orbital-like equations while the formal target remains the electron density.</p>
  <div class="landmark-footer">
    <a href="https://doi.org/10.1103/PhysRev.140.A1133" target="_blank" rel="noopener">W. Kohn & L. J. Sham · Physical Review 140, A1133 (1965) →</a>
    <span>This is the computational layer from which the magnetic response parameters in Spin Hamiltonians are normally obtained.</span>
  </div>
</aside>

<section class="lecture-section module-reading">
  <div class="lecture-section-head">
    <span class="lecture-index">06</span>
    <div><p class="section-eyebrow">Selected reading</p><h2>Examples from my work</h2></div>
  </div>

  <div class="lecture-reading-grid">
    <article><span>Environment &amp; excited states</span><h3>Importance of Polarizable Embedding for Absorption Spectrum Calculations of Arabidopsis thaliana Cryptochrome 1</h3><p>How the protein environment changes flavin excitation energies.</p><a href="https://doi.org/10.1021/acs.jpcb.4c02168" target="_blank" rel="noopener">J. Phys. Chem. B (2024) →</a></article>
    <article><span>Multiconfigurational theory</span><h3>Peculiar Differences between Two Copper Complexes Containing Similar Redox-Active Ligands</h3><p>DFT and multiconfigurational descriptions of electronically non-trivial transition-metal complexes.</p><a href="https://doi.org/10.1021/acs.inorgchem.3c02949" target="_blank" rel="noopener">Inorg. Chem. (2024) →</a></article>
    <article><span>Magnetic anisotropy</span><h3>Revealing the Impact of g-Tensor Anisotropy on the Charge Recombination in Donor–Acceptor Dyads Under High Magnetic Fields</h3><p>An electronic-structure-derived magnetic interaction controlling spin-dependent kinetics.</p><a href="https://doi.org/10.1021/jacs.5c06173" target="_blank" rel="noopener">JACS (2025) →</a></article>
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
      <span>Foundational DFT</span>
      <h3>Inhomogeneous Electron Gas</h3>
      <p>P. Hohenberg and W. Kohn · Physical Review (1964). The first Hohenberg–Kohn theorem establishes the density as a sufficient ground-state variable.</p>
      <a href="https://doi.org/10.1103/PhysRev.136.B864" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Kohn–Sham theory</span>
      <h3>Self-Consistent Equations Including Exchange and Correlation Effects</h3>
      <p>W. Kohn and L. J. Sham · Physical Review (1965). The practical construction underlying most modern density-functional calculations.</p>
      <a href="https://doi.org/10.1103/PhysRev.140.A1133" target="_blank" rel="noopener">Open DOI →</a>
    </article>
      <article>
      <span>Practical DFT</span>
      <h3>Generalized Gradient Approximation Made Simple</h3>
      <p>J. P. Perdew, K. Burke and M. Ernzerhof · Physical Review Letters (1996). The foundational PBE paper and a useful reference point for how practical semilocal density functionals are constructed.</p>
      <a href="https://doi.org/10.1103/PhysRevLett.77.3865" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Basis-set design</span>
      <h3>Gaussian basis sets for use in correlated molecular calculations. I. The atoms boron through neon and hydrogen</h3>
      <p>T. H. Dunning Jr. · The Journal of Chemical Physics (1989). The foundational correlation-consistent basis-set paper and a useful entry point for systematic basis convergence.</p>
      <a href="https://doi.org/10.1063/1.456153" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Wavefunction correlation</span>
      <h3>Coupled-cluster theory in quantum chemistry</h3>
      <p>R. J. Bartlett and M. Musiał · Reviews of Modern Physics (2007). A comprehensive review of coupled-cluster theory and its role as a high-accuracy single-reference framework.</p>
      <a href="https://doi.org/10.1103/RevModPhys.79.291" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Effective spin Hamiltonians</span>
      <h3>Quantum Chemistry and EPR Parameters</h3>
      <p>F. Neese · eMagRes (2017). A compact derivation of how magnetic response and relativistic interactions are reduced from the electronic Hamiltonian to effective EPR spin-Hamiltonian parameters.</p>
      <a href="https://doi.org/10.1002/9780470034590.emrstm1505" target="_blank" rel="noopener">Open DOI →</a>
    </article>
  
    <article>
      <span>Multiconfigurational reference</span>
      <h3>A complete active space SCF method using a density-matrix formulated super-CI approach</h3>
      <p>B. O. Roos, P. R. Taylor and P. E. M. Siegbahn · Chemical Physics (1980). A foundational CASSCF formulation: all configurations within a chosen active orbital space are treated together while the orbitals are optimized.</p>
      <a href="https://doi.org/10.1016/0301-0104(80)80045-0" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Dynamic correlation after CASSCF</span>
      <h3>Second-order perturbation theory with a complete active space self-consistent field reference function</h3>
      <p>K. Andersson, P.-Å. Malmqvist and B. O. Roos · The Journal of Chemical Physics (1992). The foundational CASPT2 development for adding dynamical correlation to a multiconfigurational reference.</p>
      <a href="https://doi.org/10.1063/1.462209" target="_blank" rel="noopener">Open DOI →</a>
    </article>
    <article>
      <span>Multireference perturbation theory</span>
      <h3>N-electron valence state perturbation theory: a fast implementation of the strongly contracted variant</h3>
      <p>C. Angeli, R. Cimiraglia and J.-P. Malrieu · Chemical Physics Letters (2001). A foundational strongly contracted NEVPT2 implementation based on a multireference zeroth-order space.</p>
      <a href="https://doi.org/10.1016/S0009-2614(01)01303-3" target="_blank" rel="noopener">Open DOI →</a>
    </article>
</div>
</section>
{% include lecture-library-nav.html %}
</div>

<script src="{{ site.url }}/assets/js/lecture-interactive.js" defer></script>
