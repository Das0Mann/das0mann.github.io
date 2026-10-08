# Tensor orientation sensitivity — targeted numerical QA (2026-10-08)

Baseline `main`: `25507fa4cbd57afc2d847c5bcab4d89b34ab102e`.

## Diagnosed behavior
The previous tensor plot recalculated its vertical limits from the minimum and maximum principal values. Consequently, isotropic shifts and differences in interaction magnitude could look similar after rescaling. The new plot uses a fixed ordinate from −120 to +170 MHz for all allowed `T_x,T_y,T_z ∈ [−100,150]` MHz.

Azimuthal variation is fundamentally zero at θ=0° and whenever `T_x=T_y`. Rather than forcing a nonphysical change, the lecture now displays the attainable azimuth span at the selected polar angle:

`ΔT_phi(θ) = sin²(θ) |T_x−T_y|`

for φ spanning 0–90°, with principal-axis tensor `T_eff=nᵀTn`. The starting rhombic values (20,50,100 MHz; θ=45°) yield 15.0 MHz; axial and polar-aligned cases yield zero.

## Independent sampling
The projection formula was sampled at 320 combinations of eigenvalues (4 choices per principal component) and polar angle (5 choices), with 19 azimuths each (6080 evaluations). No projection fell outside the fixed ordinate and none was nonfinite. Maximum absolute discrepancy between sampled φ span and `sin²θ |Tx−Ty|`: 5.7×10⁻¹⁴ MHz (floating-point roundoff).

This validates the targeted projection and span formulas, not the browser rendering or the entire 73-control lecture inventory.
