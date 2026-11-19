# Sitewide editorial design system

This document extends the [lecture design rules](/docs/design/lecture-design-rules.md) across the **entire** public quantum-chemistry.org website. It governs the homepage, research, publications, software, about, lecture catalogue, privacy, news archive, individual news posts, not-found pages and future general/full-page templates.

## The one-page experience

A researcher should be able to move from the homepage to research, publications, software and lectures without having to learn a new visual language. The common pieces are the primary navigation, simple title hierarchy, body type, link treatment, focus indication, 8px spacing units and an unobtrusive footer.

1. **One main heading, then a logical hierarchy.** The hero on general pages has the sole `h1`. A news post uses its title as `h1`; the homepage uses the researcher’s name; lecture pages retain their scientific question; the catalogue has a distinct introduction. Sections use `h2` rather than arbitrary heading jumps.
2. **One text family.** All prose and interface components use native/system UI typography. Technical equations use MathJax; runnable code uses monospace. An author portrait and original scientific figures are not decorative substitutes for clear typography.
3. **Two intentional widths.** Prose is constrained to about 72 characters; bibliographies, figure grids and interactive models may extend to the wider 990–1080px content stage.
4. **Spacing instead of decoration.** Use the 8/16/24/32/48/72px rhythm. Prefer a thin divider and whitespace to a shadow, brightly colored card, outline icon or gradient.
5. **Color indicates purpose.** Body text is deep slate; supporting information is slate gray; teal marks navigation and important actions. The only retained dark feature is the restrained homepage spin illustration and the MolSpin callout.
6. **Preserve meaningful identity.** The homepage animated spin signature remains interactive and respects reduced-motion settings. Physics widgets retain their verified unit scales, data models and accessibility labels. Publications remain a clean bibliography rather than a commercial product grid.
7. **Accessibility is structural.** Every public template must have a visible skip link, a main landmark, keyboard-operable controls, meaningful reading order, 4.5:1 contrast for regular body text, visible focus, and functional reflow. All page content must be present even when optional CSS or JS fails.
8. **Privacy behavior is independent of design.** The cookie consent component and associated scripts keep their strict opt-in behavior; style changes must never cause analytics requests before consent.

## Page-specific applications

| Page | Reading hierarchy | Visual emphasis |
| --- | --- | --- |
| Homepage | Name → research summary → themes → selected outputs → software → learning | One retained spin demonstration; minimal treatment of research and publication lists |
| Research | Scope and approach → each scientific workstream | Numbered-free editorial sections, no decorative hero |
| Publications | Index/profiles → publication year → citations | Thin-row bibliography, legible DOI links, no card shadows |
| Software | MolSpin overview → capabilities → publications → related projects | Link to released software and cited scholarly work |
| About | Biography → teaching → professional links | Readable bio and simple contact links |
| Lectures | Question → derivation → figures → bridge to next | Separate teaching stylesheet nested on the shared foundation |
| Lecture catalogue | One introductory question → search → module list | Searchable flat catalogue and visible course order |
| News/archive | Date → activity title → evidence/link | Chronological separators, no stacked cards |
| Privacy / 404 | Direct title → practical explanation/action | Plain reading text, useful navigation |

## Implementation rules

- Load `modern.css`, `iconic.css` and `site-editorial.css` for all public pages. Add `lecture-system.css` only for individual scientific lectures. Do not reintroduce `main_pretty.css`, `lecture-refresh.css` or `lecture-polish.css` to a public layout.
- Use `_layouts/page.html` for current information pages and `_layouts/home.html` for the homepage. `_layouts/news.html`, `_layouts/news-index.html`, and `_layouts/full-page.html` must share the same site navigation, footer, main landmark and text scale.
- Separate design tokens and page semantics from scientific simulation JavaScript; test each independently. Future improvements should replace legacy rules in the foundation rather than append many page-specific `!important` overrides.
- Audit visual screenshots at desktop and mobile widths before final aesthetic acceptance, and confirm keyboard interaction and contrast on real rendered pages. Automated Jekyll tests complement but cannot replace a browser visual review.

## References

The general principles follow [NN/g visual design](https://www.nngroup.com/articles/good-visual-design/), [USWDS typography](https://designsystem.digital.gov/components/typography/), and [W3C WCAG 2.2](https://www.w3.org/TR/wcag/). Widths and tokens above are this website’s deliberate implementation choices rather than direct quotations from those sources.
