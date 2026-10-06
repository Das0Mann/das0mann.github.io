(() => {
  "use strict";

  function slugify(text, index) {
    const base = text
      .toLowerCase()
      .replace(/&amp;/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return base || ("section-" + (index + 1));
  }

  function initLectureToc() {
    const lecture = document.querySelector(".lecture-module");
    if (!lecture) return;

    const sections = Array.from(
      lecture.querySelectorAll(".lecture-section")
    ).filter((section) => !section.classList.contains("external-reading"));

    if (sections.length < 3) return;

    const items = [];
    const used = new Set();

    sections.forEach((section, index) => {
      const heading = section.querySelector(".lecture-section-head h2");
      const badge = section.querySelector(".lecture-index");
      if (!heading) return;

      let id = section.id || slugify(heading.textContent.trim(), index);
      let candidate = id;
      let suffix = 2;
      while (used.has(candidate) || (document.getElementById(candidate) && document.getElementById(candidate) !== section)) {
        candidate = id + "-" + suffix++;
      }
      id = candidate;
      used.add(id);
      section.id = id;

      items.push({
        id,
        title: heading.textContent.trim(),
        number: badge ? badge.textContent.trim() : String(index + 1).padStart(2, "0")
      });
    });

    if (items.length < 3) return;

    const toc = document.createElement("nav");
    toc.className = "lecture-local-toc";
    toc.setAttribute("aria-label", "On this page");

    const title = document.createElement("span");
    title.className = "lecture-local-toc-title";
    title.textContent = "On this page";

    const links = document.createElement("div");
    links.className = "lecture-local-toc-links";

    items.forEach((item) => {
      const a = document.createElement("a");
      a.href = "#" + item.id;
      a.dataset.section = item.id;

      const n = document.createElement("span");
      n.textContent = item.number;

      const t = document.createElement("strong");
      t.textContent = item.title;

      a.append(n, t);
      links.appendChild(a);
    });

    toc.append(title, links);

    const connection = lecture.querySelector(".lecture-connections");
    const learning = lecture.querySelector(".module-learning");
    const anchor = connection || learning || lecture.querySelector(".module-intro");
    if (anchor) anchor.insertAdjacentElement("afterend", toc);

    const linkMap = new Map(
      Array.from(links.querySelectorAll("a")).map((a) => [a.dataset.section, a])
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (!visible.length) return;
        linkMap.forEach((link) => link.classList.remove("is-active"));
        const active = linkMap.get(visible[0].target.id);
        if (active) {
          active.classList.add("is-active");
          const rail = links;
          const left = active.offsetLeft - rail.clientWidth / 2 + active.clientWidth / 2;
          if (window.innerWidth < 760) rail.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
        }
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLectureToc);
  } else {
    initLectureToc();
  }
})();
