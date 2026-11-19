# Lecture design rules — Editorial Science

The lecture experience is a scientific reading environment, not a collection of UI cards. This document sets enforceable defaults for every module in the learning path. It applies to lecture pages under `/lecture/<module>/`; experimental controls retain their scientific-specific design where required for correct interpretation.

## 1. Visual hierarchy

- The chapter question is the **only** primary page heading. A section has one concise H2; an H3 belongs only to its subsection. Avoid duplicate eyebrow/headline/badge combinations describing the same thing.
- Use **one system UI text family** for headings, body text, labels and controls. Retain MathJax for mathematical notation and monospace for runnable code. Do not add display or decorative fonts.
- Use a small typographic scale: chapter title ~31–41 px, section heading ~23–26 px, subsections ~18 px, body ~17 px, secondary explanations ~14 px. Use size **and proximity**, not six colors or font variations, to establish emphasis.
- Section numbers are plain metadata, not filled badges. Links and actionable controls use teal; ordinary text and explanatory labels use neutral ink.

## 2. Reading measure and spacing

- Target a `72ch` maximum prose width (approximately 65–75 characters in typical text). Interactive models, data tables, equations and plots can expand to `990px`. Neither text paragraphs nor small notes should stretch to full display width.
- Use an 8-pixel spacing rhythm: 8, 16, 24, 32 and 48 px for related controls, paragraphs, examples, subsections and sections. Avoid arbitrarily selected spacing values.
- Align headings, explanatory text and scientific annotations to the same left axis. Allow figures to become wider deliberately, never through accidental margins.
- Maintain a mobile reading width with `14px` outer padding at narrow breakpoints. Tables or long equations may scroll inside their own region, but the entire page must not require horizontal scrolling.

## 3. Use no more visual framing than required

- The default content is **plain text on white**. There are three meaningful treatments: normal prose; a subtle left-rule for a qualifying explanation or worked example; a single-bordered surface for an interactive simulation.
- Equations have generous white space, a faint left alignment cue, correct mathematical typesetting, and no decorative card, background gradient or shadow.
- Definitions should be presented as simple aligned text. Nested concept panels and one colored box per formula are prohibited.
- Advanced derivations may use native `<details>` disclosures, but do not hide an essential definition, assumption or mathematical result required for the next step.
- Never use color without informational meaning: chart curves need a label or non-color cue; ordinary section labels should not use distinct accent colors.

## 4. Scientific narrative

Each important equation should satisfy the following pedagogical contract:

1. **Question:** What physical prediction or conceptual gap requires the equation?
2. **Assumptions:** Which regime, spin convention, system or approximation is relevant?
3. **Equation and units:** Define the variables and maintain dimensional consistency.
4. **Interpretation:** Explain what the mathematical terms do and which changes matter.
5. **Application:** Provide a small limiting case, worked example, diagram or interactive experiment.
6. **Transition:** Show what the equation allows us to ask next.

Short equations can be explained in surrounding prose. A long derivation can be optional, but its physical meaning must remain readable without expanding it.

## 5. Interactive figures

- An interactive widget must have a short task, controls connected to the visual output, a stable legend, readable axes including units, and a concise interpretation.
- When a graph rescales, disclose the numerical scale; fixed axes are preferable when the lesson compares amplitudes or rates.
- Use the same font family, accessible focus styles, control sizing and section spacing across widgets.
- Preserve physical meaning when color is lost: use labels or differentiated line patterns as appropriate.
- Keep interaction and testing separate from cosmetic CSS changes; never alter a propagation model to make a plot appear smoother.

## 6. Accessibility and regression

- Target at least **4.5:1 contrast** for regular text and **3:1** for graphical control boundaries and required interface states.
- Provide visible `:focus-visible` outlines and functional keyboard access to disclosures and controls.
- Preserve meaningful `alt`/accessible labels, and support reflow and 200% text zoom without clipping important content.
- Respect `prefers-reduced-motion`.
- Validate all lecture interactions numerically and all generated pages before merging. Browser-based screenshot review at desktop and mobile widths remains a separate required visual-acceptance check.

## External design foundations

- Nielsen Norman Group, *Good Visual Design, Explained*: https://www.nngroup.com/articles/good-visual-design/
- Nielsen Norman Group, *Aesthetic and Minimalist Design*: https://www.nngroup.com/articles/aesthetic-minimalist-design/
- U.S. Web Design System, *Typography*: https://designsystem.digital.gov/components/typography/
- U.S. Web Design System, *Design Tokens*: https://designsystem.digital.gov/design-tokens/
- W3C, *Web Content Accessibility Guidelines 2.2*: https://www.w3.org/TR/wcag/

This document adopts those general principles for the specific demands of undergraduate and advanced quantum-chemistry teaching; the numeric choices are the site's own design decisions, not prescriptions made verbatim by those sources.
