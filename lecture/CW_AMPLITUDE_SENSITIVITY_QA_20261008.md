# CW first-harmonic amplitude sensitivity QA — 2026-10-08

Baseline main: `d5b7f59dff8b0c1b77c6695567ca0b5cd2f07267`.

The existing CW plot rescales the detected first-harmonic signal to unit maximum, masking amplitude variation while displaying shape changes. The revised readout exposes the pre-normalization first-harmonic peak, with absorption Gaussian peak fixed to one; this magnitude is a relative response, not calibrated instrument voltage. The plot itself remains shape-normalized.

The quadrature samples `S_1(B)= (2/72) Σ_k exp[-(B+Bmod cos φ_k)²/(2σ²)] cos φ_k`, `φ_k=2π(k+0.5)/72`, `σ=FWHM/2.354820045`. Field grid: 361 points over `[-max(4 FWHM,3 Bmod,2.5), +max(...)]`.

Independent sampling for five FWHMs [0.4,1,2,4,8] mT and six modulation amplitudes [0.02,0.1,0.2,0.6,2.5,5] mT gives 30 examples; computed magnitudes stay finite, nonnegative and below 1. Default 2 mT linewidth and 0.2 mT modulation gives 0.14084494, displayed as 0.1408. At 2 mT width, reducing modulation to 0.02 mT reduces relative first-harmonic amplitude to 0.01428, a factor of ~9.86, although separately normalized shape curves can resemble each other.

Source-level numerical sampling only; browser render and all-73-controls QA remain outstanding.
