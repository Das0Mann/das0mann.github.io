# Reduced radical-pair signed-mixing sensitivity QA — 2026-10-08

Baseline main: `6e8e08d60f91526ca2c003b5db25a14ef76b4534`.

The reduced signed S/T₀ frequency Hamiltonian uses diagonal entries −J/(2h), +J/(2h), and signed projected off-diagonal term `v(B)=v0+(13.99624555 MHz/mT) Δg B /2`. This is a selected matrix element, **not** a scalar addition law for full hyperfine and Zeeman Hamiltonians.

The previous Δg range `[0,0.02]` and nonnegative v0 excluded destructive cancellation for positive B. The revised Δg range `[-0.02,0.02]` and dedicated cancellation preset `B=100 mT, J/h=10 MHz, Δg=−0.005, v0=3.5 MHz` gives `v(B)=0.0009386 MHz`, gap `10.00000018 MHz`, and hybridization `0.000003524%`. Exact cancellation occurs near `100.0268 mT`; the example lies within a single 5 mT B step of it. The v0 slider step was refined to 0.1 MHz so the preset is exactly representable.

Independent formula sweep: B in `[0,5,20,100,250,500,1000]` mT, exchange in `[-60,-10,0,10,60]` MHz, Δg in `[-0.02,-0.005,0,0.005,0.02]`, v0 in `[0,1,3.5,10,20]` MHz: **875 cases**, zero nonfinite outputs and zero hybridization fraction out of `[0,1]`. At exact J=v=0 the code defines the displayed fraction as zero by convention; the degenerate eigenstate mixing is not uniquely defined physically.

This is targeted source-level numerical QA, not a complete 73-control numerical/browser audit.
