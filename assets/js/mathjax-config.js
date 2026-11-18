// MathJax configuration, served from this domain rather than inline JavaScript.
// Keep ordinary source code and script execution out of the lecture content.
window.MathJax = {
  tex: { inlineMath: [['\\(', '\\)']], displayMath: [['\\[', '\\]']], processEscapes: true },
  chtml: { scale: 0.96, displayAlign: "center", displayIndent: "0" },
  options: { skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"] },
  startup: { typeset: false }
};
