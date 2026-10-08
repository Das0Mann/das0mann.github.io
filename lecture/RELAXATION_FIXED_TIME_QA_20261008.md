# Relaxation fixed-time numerical QA (2026-10-08)

Baseline `main`: `330d21eaa397a7baa06ef002c60a01c8e4b64b9d`.

The Bloch relaxation explorer uses an adaptive time window `tmax=clamp(4 max(T1,T2),1,32)` microseconds, which supports readable exponential curves but inhibits absolute visual comparison of timescales across input settings. Retain this zoomed plot, and add normalized absolute-time observables at `t=1 μs`: `M_z(t)=1-exp(-t/T1)` and `M_xy(t)=exp(-t/T2)`, with `1/T2=1/(2T1)+1/Tphi`. These refer to the toy model's zero-initial-population-recovery and unit-initial-transverse-coherence assumptions.

Numerical sweep: `T1=[0.2,0.5,1,2,4,8] μs`, `Tphi=[0.2,0.5,1,3,10,20] μs`. All 36 combinations gave finite values with normalized observables in [0,1] and `T2<=2T1`. At defaults `T1=2 μs`, `Tphi=3 μs`: `T2=1.7143 μs`, recovered longitudinal amplitude at 1 μs `39.3469%`, remaining transverse amplitude at 1 μs `55.8035%`; HTML fallback rounds to 39.3% and 55.8%.

The inventory remains 73 controls and is not yet exhaustively evaluated; this is an incremental 36-case quantitative test and source-level review, not a pixel-level browser inspection.
