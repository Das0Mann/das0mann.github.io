(() => {
  "use strict";

  const SOURCES = [
    "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js",
    "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js",
    "https://unpkg.com/mathjax@3.2.2/es5/tex-mml-chtml.js"
  ];

  let settled = false;

  function markFailure() {
    document.documentElement.classList.add("mathjax-load-failed");
    console.error("MathJax could not be loaded from any configured source.");
  }

  async function typesetPage() {
    if (!window.MathJax || typeof window.MathJax.typesetPromise !== "function") {
      throw new Error("MathJax API is unavailable after script load.");
    }

    if (window.MathJax.startup && window.MathJax.startup.promise) {
      await window.MathJax.startup.promise;
    }

    await window.MathJax.typesetPromise([document.body]);
    document.documentElement.classList.add("mathjax-ready");
    settled = true;
  }

  function loadSource(index) {
    if (settled) return;
    if (index >= SOURCES.length) {
      markFailure();
      return;
    }

    const script = document.createElement("script");
    script.src = SOURCES[index];
    script.async = true;
    script.dataset.mathjaxFallback = String(index + 1);

    script.onload = () => {
      typesetPage().catch((error) => {
        console.warn("MathJax source loaded but typesetting failed:", error);
        script.remove();
        loadSource(index + 1);
      });
    };

    script.onerror = () => {
      script.remove();
      loadSource(index + 1);
    };

    document.head.appendChild(script);
  }

  function pageContainsTeX() {
    const text = document.body ? document.body.textContent : "";
    return /\\\(|\\\[/.test(text);
  }

  function start() {
    if (!pageContainsTeX()) return;

    if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
      typesetPage().catch(() => loadSource(0));
      return;
    }
    loadSource(0);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();