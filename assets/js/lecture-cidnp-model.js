/* Analytic teaching models for the photo-CIDNP lecture.
   All frequencies below are CYCLIC MHz, time is microseconds and B is tesla.
   Restricted S/T0 sector; neither a complete radical-pair model nor a fit. */
(function (root, make) {
  "use strict";
  const api = make();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.CIDNPModel = api;
})(typeof window !== "undefined" ? window : null, function () {
  "use strict";

  // mu_B / h in MHz/T (CODATA value rounded at teaching precision).
  const BOHR_MHZ_PER_T = 13996.24555;
  const PI2 = 2 * Math.PI;

  function kaptein(precursor, channel, deltaGSign, hyperfineSign) {
    const mu = precursor === "triplet" ? 1 : precursor === "singlet" ? -1 : NaN;
    const epsilon = channel === "recombination" ? 1 : channel === "escape" ? -1 : NaN;
    const dg = deltaGSign === "positive" ? 1 : deltaGSign === "negative" ? -1 : NaN;
    const a = hyperfineSign === "positive" ? 1 : hyperfineSign === "negative" ? -1 : NaN;
    if (![mu, epsilon, dg, a].every(Number.isFinite)) {
      throw new TypeError("Unknown Kaptein choice");
    }
    return { sign: mu * epsilon * dg * a, factors: [mu, epsilon, dg, a] };
  }

  function deltaFrequency(B, A, deltaG, m) {
    return BOHR_MHZ_PER_T * deltaG * B + m * A;
  }

  function transitionFrequency(delta, J) {
    return Math.hypot(2 * J, delta);
  }

  // From T0, for H/h = [[-J,delta/2],[delta/2,+J]] in S,T0 basis.
  function singletPopulation(t, delta, J) {
    const freq = transitionFrequency(delta, J);
    if (freq === 0) return 0;
    const amplitude = delta * delta / (freq * freq);
    return amplitude * Math.sin(Math.PI * freq * t) ** 2;
  }

  // k ∫ exp(-k*t) P_S(t) dt, with a COMMON, spin-independent
  // survival envelope. This is a proxy, not an exact reactive yield.
  function weightedSinglet(delta, J, k) {
    if (!(k > 0)) throw new RangeError("Lifetime rate must be positive.");
    return 0.5 * Math.pow(PI2 * delta, 2) /
      (k * k + Math.pow(PI2 * transitionFrequency(delta, J), 2));
  }

  function evaluate(B, A, J, k, deltaG = 0.0008) {
    const plus = deltaFrequency(B, A, deltaG, +0.5);
    const minus = deltaFrequency(B, A, deltaG, -0.5);
    const wPlus = weightedSinglet(plus, J, k);
    const wMinus = weightedSinglet(minus, J, k);
    const difference = wPlus - wMinus;
    const total = wPlus + wMinus;
    return {
      plus, minus, wPlus, wMinus, difference, total,
      q: total > 1e-12 ? difference / total : null,
      fPlus: transitionFrequency(plus, J),
      fMinus: transitionFrequency(minus, J)
    };
  }

  return Object.freeze({
    BOHR_MHZ_PER_T,
    kaptein, deltaFrequency, transitionFrequency,
    singletPopulation, weightedSinglet, evaluate
  });
});
