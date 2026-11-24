# Lecture physics and teaching audit — 24 November 2026

## Scope and acceptance criteria

The review covers **all 14 published lecture chapters**, in the order defined by `_data/lecture_route.yml`. It prioritizes: (i) equations with declared units and frames; (ii) an explicit chain from microscopic preparation to observable; (iii) correctly scoped approximations; (iv) interaction-driven widgets, not decoration; (v) responsive diagrams and keyboard-readable explanations.

The strongest new interactive demonstrations are concentrated where they teach mathematics difficult to convey in prose. Existing, separately tested science widgets remain unchanged.

## Full course order and qualification notes

| Sequence | Chapter | Equation / chronology check | Interpretation and boundary |
| --- | --- | --- | --- |
| 1 | Electronic structure | Fixed nuclei → many-electron Hamiltonian → basis → HF/KS-DFT/post-HF/MCSCF → CAS roots → observables | Finite-basis FCI is not the complete-basis limit. CAS(2,2) has 6 spin-orbital determinants, 3 singlet CSFs, and 3 singlet CI roots in the full singlet sector. Root and configuration are not synonyms. Ground-root variation is not the same as excited-root optimization. |
| 2 | Spin Hamiltonians | Electronic properties → spin operators, tensor units and frames → Zeeman/HFC/exchange/dipolar/ZFS | New 4×4 spin-pair and 3×3 spin-1 matrices are built from explicit dimensionless angular-momentum operators. Dipolar sign convention is stated. |
| 3 | Spin dynamics | Spin matrices → tensor-product basis → `U(t)`, density operator and coherences → open dynamics | New 16×16 / 9×9 coherent Liouvillian links Hamiltonian elements to density-matrix components; 4×4 dissipative generator separates (T_1), (T_2), pure dephasing, stationary populations and trace. |
| 4 | Molecular motion | MD geometry → fluctuating parameters → correlations → spectral densities → relaxation | The local derivative/Taylor map is valid only near its reference geometry; major conformational changes require explicit sampling. Rotation rank and reference frames matter. |
| 5 | Open systems | Reduced state → GKSL → bath correlations/BRW → secularization → NZ memory | Correlation operator ordering is fixed to match the downward-transition spectral convention. GKSL with nonnegative rates is a specific Markovian structure, not a generic Redfield/memory generator. |
| 6 | Excited-state photochemistry | Vertical transition → displaced surfaces/reorganization → nonadiabatic transitions → ISC → branching | The equal-curvature model's (E_{00}) and Stokes-shift construction is schematic; it is not an ab initio vibronic spectrum. |
| 7 | Electron transfer | Diabatic states and Hermitian (2\times2) coupling → nuclear reorganization → nonadiabatic Marcus rates → conformations | (V) and (V^*) are related by Hermiticity; \\(\lvert D\rangle\\) and \\(\lvert A\rangle\\) denote physical diabatic states, not kinetic rate operators. Linear energy-gap formulas rely on their stated Gaussian response assumptions. |
| 8 | Radical pairs | State preparation → S/T basis → Zeeman/HFC mixing and exchange splittings → spin-selective yield | Mixing and splitting are not interchangeable. Haberkorn loss is trace-decreasing for the radical-pair subspace; it is not a trace-preserving closed-system propagator. |
| 9 | Photo-CIDNP | Nuclear-spin sorting → conditional Kaptein sign rule → explicit two-state mixing → products | High-field sign rules have restricted conventions. The numerical two-level demonstration is not a general multi-nuclear CIDNP calculation. |
| 10 | Magnetic resonance | Eigenenergies → selection rules and matrix elements → oriented resonance → powder averaging → line shape | \\(1/(\pi T_2)\\) is the **homogeneous Lorentzian absorption** FWHM (ordinary-frequency units), not a generic powder/inhomogeneous width or derivative peak-to-peak separation. |
| 11 | Coherent control | Driven Hamiltonian → RWA detuning → Rabi/pulse area → bandwidth → echo | The rotating field amplitude, lab field amplitude, ordinary frequencies and angular frequencies must not be silently interchanged. |
| 12 | Quantum biology | Physical effect → quantified molecular mechanism → causal intervention → biological role | Magnetic-field dependence is not automatically evidence of an evolved physiological quantum sensor. |
| 13 | Computational laboratory | Hilbert dimension (D) → dense density (D^2) → dense Liouvillian (D^4) → stochastic/sparse approaches | Complexity and random trace estimators have explicit normalizations; a memory estimate is not a benchmark of solver runtime. |
| 14 | MolSpin examples | Physical spin system → Hamiltonian → initial state → kinetics → numerical task → observable | Chemical reaction generator is distinguished from environmental relaxation and a time-nonlocal bath-memory kernel. The simplified builder is not a guaranteed MolSpin input generator. |

## New first-party teaching components

- Molecular potential slice and atom/molecule diagrams: H, H₂⁺, H₂; softened 1D electron–nucleus potential **is not** an electron wavefunction or a computed molecular PES.
- Scientific approximation diagrams: HF determinant; KS density/potential; post-HF expansions; multiconfigurational CI roots.
- Toy CAS(2,2) roots: diagonalize a documented symmetric 3×3 CSF Hamiltonian and show three orthogonal electronic roots with variable configuration weights.
- Two-spin and spin-1 operator explorer: Zeeman, exchange, anisotropic hyperfine, signed dipolar, axial/rhombic ZFS; 4×4 or 3×3 Hilbert-space matrix and 16×16 or 9×9 coherent Liouvillian.
- Single-spin GKSL matrix: explicit rates, (T_1), (T_2), stationary spin populations and trace preservation.

## Verification and limitations

The `tests/lecture-physics-labs.cjs` tests toy CAS eigenvector orthogonality, exchange and hyperfine matrix entries, spin-1 ZFS eigenenergies, row-major coherent Liouvillian structure, dissipative trace preservation and relaxation-rate conventions. Source and Jekyll HTML integration are checked; the 23-route browser suite exercises controls and screenshots at 1440px and 390px. The prior science-widget sensitivity tests remain part of CI.

These checks **do not establish numerical accuracy against a specific molecule**, nor do they formally prove all of the several hundred pedagogical statements in the course. For real systems, compare against a verified electronic-structure package, measured spectra and MolSpin's documented version-specific input syntax.

## External scientific references

- OpenMolcas tutorial: [Computing excited states and state-averaged CASSCF](https://molcas.gitlab.io/OpenMolcas/sphinx/tutorials/tut_ex.html).
- Manzano, [A short introduction to the Lindblad master equation](https://doi.org/10.1063/1.5115323), AIP Advances 10, 025106 (2020).
- Hogben, Krivdin and coauthors, [Large-scale magnetic resonance simulations: A tutorial](https://doi.org/10.1002/mrc.5018), Magnetic Resonance in Chemistry (2020).

Scientific figures here are original educational SVG illustrations. Their scales and assumptions are shown alongside each visualization.
