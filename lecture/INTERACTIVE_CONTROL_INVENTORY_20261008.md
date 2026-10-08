# Lecture Interactive Control Inventory — 2026-10-08

Baseline `main`: `8ee68468b2ed6616333bf5b0b5853e543998727b`. Inventory is source-derived, not a browser-rendered or exhaustive physical sensitivity certification. Values below are **HTML control attributes**; scripts may convert logarithmic values to physical quantities. Stable module URLs are unchanged.

## Landing page

Scripts: none referenced in literal src attributes (may be Jekyll references).

No matching input controls.

## electronic-structure

Scripts: `lecture-interactive.js`, `lecture-active-space.js`.

| Control ID | Type | Minimum | Maximum | Step | Default |
|---|---|---:|---:|---:|---:|
| `cas-orbitals` | range | 2 | 14 | 1 | 6 |
| `cas-electrons` | range | 1 | 12 | 1 | 6 |
| `orbital-delta` | range | -4 | 4 | 0.05 | 1 |
| `orbital-coupling` | range | 0 | 1.2 | 0.025 | 0.5 |

## spin-hamiltonians

Scripts: `lecture-dipolar.js`, `lecture-tensor.js`.

| Control ID | Type | Minimum | Maximum | Step | Default |
|---|---|---:|---:|---:|---:|
| `dipolar-r` | range | 0.5 | 4 | 0.05 | 1 |
| `dipolar-theta` | range | 0 | 90 | 0.25 | 90 |
| `tensor-tx` | range | -100 | 150 | 1 | 20 |
| `tensor-ty` | range | -100 | 150 | 1 | 50 |
| `tensor-tz` | range | -100 | 150 | 1 | 100 |
| `tensor-theta` | range | 0 | 90 | 1 | 45 |
| `tensor-phi` | range | 0 | 90 | 1 | 0 |

## spin-dynamics

Scripts: `lecture-interactive.js`, `lecture-relaxation.js`, `lecture-bloch.js`.

| Control ID | Type | Minimum | Maximum | Step | Default |
|---|---|---:|---:|---:|---:|
| `larmor-b` | range | -1.3010 | 1 | 0.01 | 0 |
| `larmor-g` | range | 1.8 | 2.2 | 0.0001 | 2.0023 |
| `bloch-theta` | range | 0 | 180 | 1 | 90 |
| `bloch-phi` | range | 0 | 360 | 1 | 0 |
| `bloch-eta` | range | 0 | 1 | 0.01 | 1 |
| `relax-t1` | range | 0.2 | 8 | 0.1 | 2 |
| `relax-tphi` | range | -0.6990 | 1.3010 | 0.01 | 0.4771 |

## radical-pairs

Scripts: `lecture-interactive.js`, `lecture-radical-levels.js`.

| Control ID | Type | Minimum | Maximum | Step | Default |
|---|---|---:|---:|---:|---:|
| `st-coupling` | range | 0.1 | 10 | 0.1 | 3 |
| `st-detuning` | range | 0 | 20 | 0.1 | 2 |
| `rp-level-field` | range | 0 | 1000 | 5 | 100 |
| `rp-level-j` | range | -60 | 60 | 0.5 | 10 |
| `rp-level-dg` | range | 0 | 0.02 | 0.0001 | 0.005 |
| `rp-level-v` | range | 0 | 20 | 0.2 | 1 |

## magnetic-resonance

Scripts: `lecture-epr.js`, `lecture-hyperfine.js`, `lecture-powder.js`, `lecture-cw-detection.js`.

| Control ID | Type | Minimum | Maximum | Step | Default |
|---|---|---:|---:|---:|---:|
| `hf-count` | range | 1 | 4 | 1 | 2 |
| `hf-A` | range | 5 | 100 | 1 | 30 |
| `epr-frequency` | range | 1 | 100 | 0.1 | 9.5 |
| `epr-gperp` | range | 1.85 | 2.20 | 0.0005 | 2.003 |
| `epr-gparallel` | range | 1.85 | 2.20 | 0.0005 | 1.98 |
| `epr-theta` | range | 0 | 90 | 0.5 | 45 |
| `powder-frequency` | range | 5 | 100 | 0.5 | 9.5 |
| `powder-gperp` | range | 1.90 | 2.20 | 0.0005 | 2.005 |
| `powder-gpar` | range | 1.90 | 2.20 | 0.0005 | 1.98 |
| `powder-width` | range | 0.2 | 20 | 0.1 | 1.5 |
| `cw-width` | range | 0.4 | 8 | 0.1 | 2 |
| `cw-mod` | range | 0.02 | 5 | 0.02 | 0.2 |

## electron-transfer

Scripts: `lecture-marcus.js`, `lecture-tunnelling.js`.

| Control ID | Type | Minimum | Maximum | Step | Default |
|---|---|---:|---:|---:|---:|
| `marcus-lambda` | range | 0.10 | 2.50 | 0.01 | 0.70 |
| `marcus-dg` | range | -3.00 | 1.00 | 0.01 | -0.50 |
| `marcus-v` | range | -1 | 2 | 0.01 | 1 |
| `marcus-temp` | range | 200 | 400 | 1 | 300 |
| `tunnel-dr` | range | 0 | 5 | 0.05 | 2 |
| `tunnel-beta` | range | 0.3 | 2.0 | 0.05 | 1 |

## molecular-motion

Scripts: `lecture-motion.js`.

| Control ID | Type | Minimum | Maximum | Step | Default |
|---|---|---:|---:|---:|---:|
| `motion-logf` | range | -1 | 4 | 0.01 | 2 |
| `motion-logtau` | range | -3 | 4 | 0.01 | 0 |
| `motion-sigma` | range | 1 | 10 | 0.1 | 5 |

## computational-lab

Scripts: `lecture-scaling.js`.

| Control ID | Type | Minimum | Maximum | Step | Default |
|---|---|---:|---:|---:|---:|
| `scale-spins` | range | 2 | 24 | 1 | 14 |
| `scale-samples` | range | 0 | 9 | 0.05 | 3.585 |

## open-systems

Scripts: `lecture-memory.js`, `lecture-secular.js`.

| Control ID | Type | Minimum | Maximum | Step | Default |
|---|---|---:|---:|---:|---:|
| `secular-dnu` | range | 0 | 1.5 | 0.01 | 0.35 |
| `secular-time` | range | 0.05 | 3 | 0.05 | 2 |
| `memory-gamma` | range | 0.1 | 5 | 0.05 | 1 |
| `memory-tau` | range | -2 | 0.3010 | 0.01 | -0.6990 |

## quantum-biology

Scripts: `lecture-qbio.js`.

| Control ID | Type | Minimum | Maximum | Step | Default |
|---|---|---:|---:|---:|---:|
| `qbio-loglife` | range | -2 | 2 | 0.01 | 0 |
| `qbio-logt2` | range | -2 | 2 | 0.01 | 0.3010 |
| `qbio-logf` | range | -2 | 2 | 0.01 | 0.3010 |

## excited-state-photochemistry

Scripts: `lecture-photochemistry.js`.

| Control ID | Type | Minimum | Maximum | Step | Default |
|---|---|---:|---:|---:|---:|
| `photo-e00` | range | 1.2 | 4.0 | 0.01 | 2.30 |
| `photo-k` | range | 0.2 | 3.0 | 0.02 | 1.00 |
| `photo-d` | range | 0 | 0.80 | 0.01 | 0.50 |
| `branch-kf` | range | 5 | 10 | 0.05 | 8 |
| `branch-kic` | range | 5 | 10 | 0.05 | 7.5 |
| `branch-kisc` | range | 5 | 10 | 0.05 | 7 |
| `branch-krxn` | range | 5 | 10 | 0.05 | 6.5 |

## coherent-control

Scripts: `lecture-rabi.js`, `lecture-pulse-bandwidth.js`.

| Control ID | Type | Minimum | Maximum | Step | Default |
|---|---|---:|---:|---:|---:|
| `rabi-nu1` | range | 0.2 | 50 | 0.1 | 10 |
| `rabi-detuning` | range | -50 | 50 | 0.1 | 0 |
| `rabi-time` | range | 1 | 500 | 1 | 50 |
| `pulse-duration` | range | 10 | 250 | 5 | 40 |

## molspin-notebooks

Scripts: `lecture-molspin-builder.js`.

| Control ID | Type | Minimum | Maximum | Step | Default |
|---|---|---:|---:|---:|---:|
| `builder-electrons` | range | 1 | 4 | 1 | 2 |
| `builder-nuclei` | range | 0 | 8 | 1 | 2 |
| `builder-zeeman` | checkbox | — | — | — | — |
| `builder-hyperfine` | checkbox | — | — | — | — |
| `builder-exchange` | checkbox | — | — | — | — |
| `builder-drive` | checkbox | — | — | — | — |
| `builder-relax` | checkbox | — | — | — | — |
| `builder-reaction` | checkbox | — | — | — | — |

## Targeted numerical tests and fixes

- Photochemical branching at declared defaults: Φ_f=69.1%, Φ_IC=21.8%, Φ_ISC=6.9%, Φ_rxn=2.2%; lifetime=6.91 ns. The old static HTML displayed inconsistent initial values (70.6%, 22.3%, 6.9%, 2.2%). HTML fallback readouts were corrected; JS already computes dynamic fractions from rates.
- Marcus inverted preset: `ΔG° = −1.6 λ` was outside the input's `[−3,+1] eV` range when `λ > 1.875 eV`. The preset now explicitly clamps to the displayed physical domain and remains in the inverted regime for all current λ ∈ [0.10,2.50] eV; λ=2.50 eV maps to ΔG°=−3.00 eV (< −λ).
- Marcus optimum: ΔG°=−λ is reachable throughout the current λ range. The nonadiabatic, classical golden-rule formula has known applicability limits at strong coupling; this pass does not claim to validate dynamics beyond those assumptions.
- Motion spectral density: `ω=2πf`, `J(ω)=2σ²τc/(1+(ωτc)²)`; the match is `τc=1/ω`. For default f=100 MHz, match τc≈1.592 ns, within the 0.001–10000 ns τc domain.
- Quantum-biology timescale explorer: the logarithmic control range 0.01–100 μs covers lifetime and T₂, while frequency 0.01–100 MHz gives periods 100–0.01 μs. Endpoint timescales are represented, but this is a necessary-timescale heuristic, not a radical-pair yield calculation.

## Remaining validation required

Full per-control 10–20-point numerical sampling, plot pixel/viewport verification, all-JavaScript parsing and MathJax/DOM validation have **not** been completed in this patch. Those checks are required before treating the full lecture library as comprehensively sensitivity-verified. Avoid inferring that every documented input yields a visible variation throughout its range.
