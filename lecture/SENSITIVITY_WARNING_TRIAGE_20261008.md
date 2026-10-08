# Sensitivity-warning triage — 2026-10-08

Authority: GitHub Actions regression run 37766634770 on main commit 833e09099ccb7879ab5ee6d4aa9848bc35e332e4. Seven flagged mappings:

| Script/control | Reported plateau | Assessment |
|---|---|---|
| tunnelling / tunnel-dr | 44% of intervals, longest 7 | Rate falls exponentially; the formatted four-decimal relative-rate readout saturates near zero. Physical suppression remains measurable in the inverse suppression factor and logarithmic plot. |
| motion / motion-logf | 50%, longest 8 | Wide logarithmic frequency sweep and a *global* amplitude-derived flatness threshold; local changes in ωτ can be small relative to the full range, not zero. |
| motion / motion-logtau | 63%, longest 10 | Same dynamic-range threshold effect; log τ spans seven decades. |
| hyperfine / hf-count | 81%, longest 5 | **Test artifact**: integer count sampled at 17 fractional positions; code calls `parseInt`, so multiple samples give the same nucleus count. The new test uses exactly the four legal integer counts. |
| dipolar / dipolar-r | 44%, longest 7 | Genuine inverse-cube suppression over 0.5–4 nm; physically intended. |
| Marcus / marcus-temp | 63%, longest 9 | **Test artifact**: the old harness parsed only the mantissa of a `mantissa × 10^exponent` rate. The new parser uses base-10 log(rate), preserving exponential changes. |

The warnings are relative to 0.2% of the *full range*, so a large dynamic range naturally produces long apparently flat tails. This is not by itself justification to restrict the sliders; zoomed plots and additional log/ratio readouts can convey such tails. Future work should compare the SVG pixel displacement and the full-rate logarithm, and maintain a list of expected physical saturation cases.

A separate genuine risk remains: global numeric parsing of formatted readouts can mistake display formatting for physical observables. The test now parses Marcus scientific notation and tests integer counts at legal positions. With 55 continuous controls × 17 points plus 4 discrete values, the expected total is **939 evaluations**.
