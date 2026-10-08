# Sensitivity-plateau QA (2026-10-08)

The source-level runner tests 56 widget control/output mappings at 17 uniformly spaced control positions each. It now also measures consecutive readout differences.

Definition: `A = max(readouts) - min(readouts)`; interval is deemed *approximately flat* when `|y[i]-y[i-1]| <= max(1e-9, 0.002 A)`. A warning is emitted if more than half of the 16 intervals are flat or if seven or more consecutive intervals are flat. The diagnostic does not fail CI: quantization, physical symmetry, rounded outputs, and sign-symmetric observables can all produce flat regions without malfunction. Every warning should be reviewed against the model physics.

These tests are observational and specifically **not** proofs of physical sensitivity: a saturated yield can be meaningful, whereas a nominally varying readout can still be imperceptible in an SVG curve. More advanced work should introduce widget-specific thresholds, paired SVG pixel displacement and comparisons of physical invariants, along with real browser screenshots.
