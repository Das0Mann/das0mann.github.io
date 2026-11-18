(() => {
  "use strict";

  function initModuleChecks() {
    document.querySelectorAll(".lecture-check-form").forEach((check) => {
      const options = Array.from(check.querySelectorAll('input[type="radio"]'));
      const button = check.querySelector(".lecture-check-submit");
      const status = check.querySelector(".lecture-check-status");
      const explanation = check.querySelector(".lecture-check-explanation");
      const correct = Number(check.dataset.answer);
      if (!button || !status || !explanation || options.length < 2 || !Number.isInteger(correct)) return;

      const reset = () => {
        status.textContent = "";
        status.classList.remove("is-correct", "is-incorrect");
        options.forEach((option) => option.closest(".lecture-check-choice")
          .classList.remove("is-correct", "is-incorrect"));
        explanation.hidden = true;
      };
      options.forEach((option) => option.addEventListener("change", reset));
      button.addEventListener("click", () => {
        const selected = options.find((option) => option.checked);
        if (!selected) {
          status.textContent = "Choose an answer to check your reasoning.";
          explanation.hidden = true;
          return;
        }
        const isCorrect = Number(selected.value) === correct;
        reset();
        status.classList.add(isCorrect ? "is-correct" : "is-incorrect");
        status.textContent = isCorrect
          ? "Correct. Compare your reasoning with the explanation."
          : "Not quite. Review the explanation, then try another option.";
        selected.closest(".lecture-check-choice")
          .classList.add(isCorrect ? "is-correct" : "is-incorrect");
        explanation.hidden = false;
      });
    });
  }

  function initLibrarySearch() {
    const input = document.getElementById("lecture-module-search");
    const grid = document.querySelector(".library-grid");
    const count = document.getElementById("lecture-result-count");
    const empty = document.getElementById("lecture-search-empty");
    if (!input || !grid || !count) return;
    const cards = Array.from(grid.querySelectorAll(".library-card"));
    const groups = Array.from(grid.querySelectorAll(".library-group-label"));

    const search = () => {
      const words = input.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
      let visible = 0;
      cards.forEach((card) => {
        const content = card.textContent.toLocaleLowerCase();
        card.hidden = !words.every((word) => content.includes(word));
        if (!card.hidden) visible++;
      });
      groups.forEach((group) => {
        let sibling = group.nextElementSibling;
        let hasVisible = false;
        while (sibling && !sibling.classList.contains("library-group-label")) {
          if (sibling.classList.contains("library-card") && !sibling.hidden) {
            hasVisible = true;
            break;
          }
          sibling = sibling.nextElementSibling;
        }
        group.hidden = !hasVisible;
      });
      count.textContent = words.length ? visible + " of " + cards.length + " modules" : cards.length + " modules";
      if (empty) empty.hidden = visible !== 0;
    };
    input.addEventListener("input", search);
    search();
  }

  function init() { initModuleChecks(); initLibrarySearch(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
