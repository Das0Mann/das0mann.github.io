# Coherent-control Rabi sensitivity QA — 2026-10-08

Baseline main commit: `30c98da0d7e6839ab840c738e2038a4312d35ae7`.

## Identified problem

The old Rabi plot set `tMax = max(500, 2 × 1000/sqrt(nu1²+detuning²), 1.25×pulseTime)` ns. At slow drives it expanded the time axis in inverse proportion to the oscillation frequency, hiding the main effect of changing `nu1`. For example, at resonance, nu1=0.2 MHz produced a 10,000 ns display window while nu1=10 MHz used 500 ns. This made both examples show a similar number of cycles even though the controls described different physical timescales.

## Correction

Use a constant 0–500 ns x-axis, matching the pulse-duration input. The full trace is sampled at 1201 points (n=1200). Even for the maximum generalized frequency `sqrt(50²+50²)=70.71 MHz`, the fastest oscillation has about 33.9 samples per cycle. No line-shape smoothing or parameter-dependent normalization is used; transition probability remains on the absolute [0,1] ordinate.

## Numerical sampling

Test the rotating-wave two-level expression

`P(t)=[nu1²/(nu1²+detuning²)] sin²(pi × sqrt(nu1²+detuning²) × t/1000)`

with MHz and ns units. Sample nu1=[0.2,1,2,5,10,20,35,50] MHz, detuning=[0,8,25,50] MHz, time=[1,25,50,250,500] ns: 160 combinations. All produce finite probabilities between 0 and 1. At nu1=10 MHz and zero detuning, 25 ns gives P=0.5 and 50 ns gives P=1. With detuning=8 MHz at 50 ns, P≈0.49875. The largest 1-nearest-grid-point discretization difference across these samples is ≈0.00744 absolute probability units.

This is targeted **formula sampling**, not a DOM/browser screenshot test. The previously recorded 73-control inventory is unchanged; full 73-control sensitivity certification remains outstanding.
