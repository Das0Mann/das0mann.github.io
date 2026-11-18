(() => {
  "use strict";
  // Legacy jQuery / Magnific Popup / FitVids are no longer required by the
  // learning platform. Native image links, responsive CSS and a simple local
  // image viewer replace them without external scripts.
  function init() {
    const images = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".gif"], a[href$=".webp"]');
    if (!images.length || !("HTMLDialogElement" in window)) return;
    const dialog = document.createElement("dialog");
    dialog.className = "site-image-dialog";
    dialog.setAttribute("aria-label", "Image preview");
    const close = document.createElement("button");
    close.className = "site-image-dialog-close";
    close.type = "button";
    close.setAttribute("aria-label", "Close image preview");
    close.textContent = "Close";
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.alt = "";
    figure.appendChild(img);
    dialog.append(close, figure);
    document.body.append(dialog);
    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => { img.removeAttribute("src"); });

    for (const anchor of images) {
      if (anchor.hasAttribute("download")) continue;
      anchor.addEventListener("click", (event) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey ||
            event.shiftKey || event.altKey) return;
        let url;
        try { url = new URL(anchor.href, window.location.href); }
        catch (_) { return; }
        // Never put external URLs into the preview or intercept external links.
        if (url.origin !== window.location.origin || !/^https?:$/.test(url.protocol)) return;
        event.preventDefault();
        const source = anchor.querySelector("img");
        img.alt = source ? (source.alt || "Full-size image") : "Full-size image";
        img.src = url.href;
        dialog.showModal();
        close.focus();
      });
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
