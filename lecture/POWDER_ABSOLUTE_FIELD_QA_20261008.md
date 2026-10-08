# Magnetic-resonance powder field sensitivity check (2026-10-08)

Baseline main: `2646f395d6637555dec8766088565877a1e1608c`.

## Problem
The powder envelope uses an automatically fitted magnetic-field x-axis and normalized peak amplitude. This is appropriate for comparing shapes, but frequency changes between X- and W-band can appear similar because the whole spectrum translates while the plot recenters.

## Implemented change
Keep the original zoomed powder spectrum and add a second *fixed* 0–4 T absolute-field locator beneath it. Both principal resonance fields use `B_res[mT] = 1000 ν[GHz] / (13.99624555 g)`. The fixed scale displays frequency-induced shifts without sacrificing linewidth resolution. Tiny g-anisotropy may make the two locator lines visually overlap; the exact readouts remain above.

## Independent numerical checks
Across 80 combinations of ν in [5,9.5,34,94,100] GHz and principal g values in [1.9,1.98,2.005,2.2], all fields are finite and range from 162.38 to 3760.41 mT, inside the fixed 0–4000 mT scale. For g=2.005, increasing frequency from 9.5 to 94 GHz moves B_res from 338.53 mT to 3349.67 mT; on the 472 px locator width this corresponds to a 355.31 px displacement.

The zoomed spectrum retains its explicit assumptions: axial g, orientation-independent transitions, Gaussian field broadening and peak normalization. This source-level validation does not represent browser screenshot testing or an exhaustive audit of all 73 controls.
