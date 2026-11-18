(() => {
  "use strict";

  function slugify(text, index) {
    const base = text.toLowerCase().replace(/&amp;/g, "and")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return base || "section-" + (index + 1);
  }

  function initLectureContents() {
    const lecture = document.querySelector(".lecture-module");
    if (!lecture) return;

    const sections = Array.from(lecture.querySelectorAll(".lecture-section"))
      .filter((section) => !section.classList.contains("external-reading"));
    if (sections.length < 3) return;

    const items = [], used = new Set();
    sections.forEach((section, index) => {
      const heading = section.querySelector(".lecture-section-head h2");
      const badge = section.querySelector(".lecture-index");
      if (!heading) return;
      const original = section.id || slugify(heading.textContent.trim(), index);
      let id = original, suffix = 2;
      while (used.has(id) || (document.getElementById(id) && document.getElementById(id) !== section)) {
        id = original + "-" + suffix++;
      }
      used.add(id);
      section.id = id;
      items.push({
        section,
        id,
        title: heading.textContent.trim(),
        number: badge ? badge.textContent.trim() : String(index + 1).padStart(2, "0")
      });
    });
    if (items.length < 3) return;

    const toc = document.createElement("details");
    toc.className = "lecture-local-toc";
    const summary = document.createElement("summary");
    summary.className = "lecture-local-toc-summary";

    const title = document.createElement("span");
    title.className = "lecture-local-toc-title";
    title.textContent = "Jump to a section";

    const count = document.createElement("span");
    count.className = "lecture-local-toc-count";
    count.textContent = items.length + " sections";

    const arrow = document.createElement("span");
    arrow.className = "lecture-local-toc-chevron";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "⌄";
    summary.append(title, count, arrow);

    const nav = document.createElement("nav");
    nav.className = "lecture-local-toc-links";
    nav.setAttribute("aria-label", "Sections in this lecture");
    const byId = new Map();

    for (const [index, item] of items.entries()) {
      const link = document.createElement("a");
      link.href = "#" + item.id;
      link.dataset.section = item.id;
      const number = document.createElement("span");
      number.textContent = item.number;
      const label = document.createElement("strong");
      label.textContent = item.title;
      link.append(number, label);
      link.addEventListener("click", () => {
        if (window.matchMedia && window.matchMedia("(max-width: 720px)").matches) {
          toc.open = false;
        }
      });
      nav.append(link);
      byId.set(item.id, { link, index });
    }
    toc.append(summary, nav);

    const anchor = lecture.querySelector(".lecture-connections") ||
      lecture.querySelector(".module-learning") || lecture.querySelector(".module-intro");
    if (anchor) anchor.insertAdjacentElement("afterend", toc);

    function mark(id) {
      byId.forEach(({ link }) => {
        link.classList.toggle("is-active", link.dataset.section === id);
        if (link.dataset.section === id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }
    mark(items[0].id);

    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      const candidates = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (candidates.length) mark(candidates[0].target.id);
    }, { rootMargin: "-18% 0px -67% 0px", threshold: 0 });
    items.forEach(({ section }) => observer.observe(section));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLectureContents);
  } else initLectureContents();
})();
