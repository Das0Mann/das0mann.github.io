(() => {
  "use strict";
  const model = window.CIDNPModel;
  if (!model) return;

  function byId(id) { return document.getElementById(id); }
  function samplePath(fn, count = 260) {
    let path = "";
    for (let i = 0; i <= count; i++) {
      const point = fn(i / count);
      if (!Number.isFinite(point[0]) || !Number.isFinite(point[1])) continue;
      path += (path ? " L" : "M") + point[0].toFixed(2) + " " + point[1].toFixed(2);
    }
    return path;
  }
  const signed = (value, decimals = 1) =>
    (value >= 0 ? "+" : "") + value.toFixed(decimals);

  function initKaptein() {
    const root = byId("cidnp-sign-lab");
    if (!root) return;
    const precursor = byId("cidnp-precursor");
    const channel = byId("cidnp-exit");
    const deltaG = byId("cidnp-dg");
    const hfi = byId("cidnp-a");
    const signLabel = byId("cidnp-sign");
    const factors = byId("cidnp-sign-math");
    const spectrum = byId("cidnp-nmr-path");

    function update() {
      const value = model.kaptein(precursor.value, channel.value, deltaG.value, hfi.value);
      signLabel.classList.toggle("cidnp-sign-positive", value.sign > 0);
      signLabel.classList.toggle("cidnp-sign-negative", value.sign < 0);
      signLabel.textContent = value.sign > 0 ?
        "+ · enhanced absorption" : "− · emission";
      const factor = (x) => x > 0 ? "+1" : "−1";
      factors.textContent = value.factors.map((x) => "(" + factor(x) + ")").join(" × ") +
        " = " + factor(value.sign);

      spectrum.setAttribute("d", samplePath((u) => {
        const x = 28 + 467 * u;
        const centered = (x - 260) / 23;
        const envelope = 1 / (1 + centered * centered);
        return [x, 76 - value.sign * 55 * envelope];
      }, 240));
      spectrum.classList.toggle("is-emissive", value.sign < 0);
    }

    [precursor, channel, deltaG, hfi].forEach((control) =>
      control.addEventListener("change", update));
    update();
  }

  function initSpinSorting() {
    const root = byId("cidnp-spin-sort-lab");
    if (!root) return;
    const controls = {
      field: byId("cidnp-field"),
      hfi: byId("cidnp-hfi"),
      exchange: byId("cidnp-exchange"),
      lifetime: byId("cidnp-lifetime")
    };
    const outputs = {
      field: byId("cidnp-field-out"),
      hfi: byId("cidnp-hfi-out"),
      exchange: byId("cidnp-exchange-out"),
      lifetime: byId("cidnp-lifetime-out")
    };
    const tracePlus = byId("cidnp-time-plus");
    const traceMinus = byId("cidnp-time-minus");
    const fieldCurve = byId("cidnp-field-selected");
    const referenceCurve = byId("cidnp-field-encounter");
    const marker = byId("cidnp-field-marker");
    const timeMax = byId("cidnp-time-max");
    const result = {
      plus: byId("cidnp-weight-plus"),
      minus: byId("cidnp-weight-minus"),
      difference: byId("cidnp-difference"),
      q: byId("cidnp-q")
    };
    const explanation = byId("cidnp-model-explanation");

    function update() {
      const B = Number(controls.field.value);
      const A = Number(controls.hfi.value);
      const J = Number(controls.exchange.value);
      const k = Number(controls.lifetime.value);
      if (![B,A,J,k].every(Number.isFinite)) return;
      outputs.field.textContent = B.toFixed(1) + " T";
      outputs.hfi.textContent = signed(A, 1) + " MHz";
      outputs.exchange.textContent = J.toFixed(0) + " MHz";
      outputs.lifetime.textContent = k.toFixed(1) + " μs⁻¹";

      const state = model.evaluate(B, A, J, k);
      result.plus.textContent = state.wPlus.toFixed(4);
      result.minus.textContent = state.wMinus.toFixed(4);
      result.difference.textContent = signed(state.difference, 4);
      result.q.textContent = state.q === null ? "undefined (no weighted signal)" :
        signed(100 * state.q, 1) + "%";

      // Show roughly three oscillations of the fastest conditional sector.
      const maxFrequency = Math.max(state.fPlus, state.fMinus, 0.8);
      const tMax = Math.min(1.2, 3.5 / maxFrequency);
      timeMax.textContent = tMax.toFixed(tMax < 0.1 ? 3 : 2);
      const xFrom = (u) => 54 + 510 * u;
      const yFrom = (population) => 194 - 176 * population;
      tracePlus.setAttribute("d", samplePath((u) =>
        [xFrom(u), yFrom(model.singletPopulation(tMax * u, state.plus, J))], 320));
      traceMinus.setAttribute("d", samplePath((u) =>
        [xFrom(u), yFrom(model.singletPopulation(tMax * u, state.minus, J))], 320));

      // Signed imbalance is compared directly, on a SHARED and AUTO-SCALED axis.
      const curve = [], reference = [];
      let maxMagnitude = 1e-5;
      const samples = 230;
      for (let i = 0; i <= samples; i++) {
        const b = 14 * i / samples;
        const target = model.evaluate(b, A, J, k).difference;
        const encounter = model.evaluate(b, A, 0, k).difference;
        maxMagnitude = Math.max(maxMagnitude, Math.abs(target), Math.abs(encounter));
        curve.push([b, target]);
        reference.push([b, encounter]);
      }
      const normalized = (item) =>
        [54 + 510 * item[0] / 14, 106 - 82 * item[1] / (1.12 * maxMagnitude)];
      fieldCurve.setAttribute("d", samplePath((u) =>
        normalized(curve[Math.round(samples * u)]), samples));
      referenceCurve.setAttribute("d", samplePath((u) =>
        normalized(reference[Math.round(samples * u)]), samples));
      const xMarker = 54 + 510 * B / 14;
      marker.setAttribute("x1", xMarker.toFixed(2));
      marker.setAttribute("x2", xMarker.toFixed(2));

      if (Math.abs(A) < 0.01) {
        explanation.textContent = "Without this nucleus’s hyperfine coupling, the two conditional electron-spin Hamiltonians coincide and the model generates no nuclear-spin contrast.";
      } else if (B < 0.01) {
        explanation.textContent = "At zero external field the two conditional detunings have opposite signs but equal magnitudes. This restricted model therefore predicts no net nuclear sorting at B = 0; real low-field CIDNP can involve additional levels and nuclei.";
      } else if (J > 1.5 * Math.max(Math.abs(state.plus),Math.abs(state.minus))) {
        explanation.textContent = "The imposed singlet–triplet separation is large compared with the nuclear-dependent detuning, suppressing conditional mixing. Exchange-dependent low-field peaks lie outside this two-level approximation.";
      } else {
        explanation.textContent = "The two nuclear projections experience distinct S–T₀ detunings. Their singlet-weighted signals differ, yielding a signed nuclear population imbalance. Real CIDNP also depends on spin-selective reaction channels and relaxation.";
      }
    }

    Object.values(controls).forEach((input) => input.addEventListener("input", update));
    root.querySelectorAll("[data-cidnp-preset]").forEach((button) => {
      button.addEventListener("click", () => {
        const preset = button.dataset.cidnpPreset;
        if (preset === "encounter") {
          controls.field.value = "4";
          controls.hfi.value = "6";
          controls.exchange.value = "0";
          controls.lifetime.value = "5";
        } else if (preset === "compact") {
          controls.field.value = "4";
          controls.hfi.value = "6";
          controls.exchange.value = "90";
          controls.lifetime.value = "5";
        } else if (preset === "opposite") {
          controls.hfi.value = (-Number(controls.hfi.value) || -6).toString();
        }
        update();
      });
    });
    update();
  }

  function init() {
    initKaptein();
    initSpinSorting();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else init();
})();
