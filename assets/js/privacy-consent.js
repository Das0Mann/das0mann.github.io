(() => {
  "use strict";

  // No analytics library, network request, or tracking cookie is created before
  // explicit opt-in. The saved preference is solely for remembering this choice.
  const ANALYTICS_ID = "G-RNH61RX63Z";
  const KEY = "qc-analytics-consent-v1";
  const VALID_MS = 180 * 24 * 60 * 60 * 1000;
  let consent = "unset";
  let analyticsStarted = false;
  let analyticsLoaded = false;
  let analyticsScript = null;

  function readPreference() {
    try {
      const record = JSON.parse(localStorage.getItem(KEY) || "null");
      if (record && (record.choice === "accepted" || record.choice === "rejected") &&
          Number.isFinite(record.at) && record.at <= Date.now() &&
          Date.now() - record.at < VALID_MS) return record.choice;
    } catch (_) { /* Privacy mode / denied local storage => no tracking. */ }
    return "unset";
  }

  function savePreference(choice) {
    try { localStorage.setItem(KEY, JSON.stringify({ choice, at: Date.now() })); }
    catch (_) { /* Choice applies to the current page only if storage is blocked. */ }
  }

  function clearAnalyticsCookies() {
    const names = document.cookie.split(";").map((part) => part.trim().split("=")[0])
      .filter((name) => /^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name));
    const host = window.location.hostname;
    // Cookies can be host-only or set at the parent domain.
    const domains = ["", host, "." + host];
    const labels = host.split(".");
    if (labels.length > 2) {
      const parent = labels.slice(-2).join(".");
      domains.push(parent, "." + parent);
    }
    for (const name of names) {
      for (const domain of domains) {
        document.cookie = name + "=; Max-Age=0; Path=/; SameSite=Lax; Secure" +
          (domain ? "; Domain=" + domain : "");
      }
    }
  }

  function revokeAnalytics() {
    window["ga-disable-" + ANALYTICS_ID] = true;
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied", ad_storage: "denied",
        ad_user_data: "denied", ad_personalization: "denied"
      });
    }
    if (analyticsScript && !analyticsLoaded) {
      // Cancel a pending fetch; loaded Google code cannot be unloaded, so
      // the ga-disable flag and denied consent must also remain active.
      analyticsScript.remove();
      analyticsScript = null;
      analyticsStarted = false;
    }
    clearAnalyticsCookies();
  }

  function enableAnalytics() {
    if (analyticsStarted) {
      window["ga-disable-" + ANALYTICS_ID] = false;
      if (typeof window.gtag === "function") {
        window.gtag("consent", "update", { analytics_storage: "granted" });
        window.gtag("config", ANALYTICS_ID, {
          anonymize_ip: true, allow_google_signals: false,
          allow_ad_personalization_signals: false
        });
      }
      return;
    }
    analyticsStarted = true;
    window["ga-disable-" + ANALYTICS_ID] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };

    window.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
    window.gtag("js", new Date());
    window.gtag("config", ANALYTICS_ID, {
      anonymize_ip: true, allow_google_signals: false,
      allow_ad_personalization_signals: false
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" +
      encodeURIComponent(ANALYTICS_ID);
    script.onload = function () { analyticsLoaded = true; };
    script.onerror = function () {
      analyticsStarted = false;
      console.warn("Optional analytics unavailable.");
    };
    analyticsScript = script;
    document.head.appendChild(script);
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function createInterface() {
    const banner = element("section", "privacy-banner");
    banner.id = "privacy-consent";
    banner.setAttribute("aria-label", "Optional website analytics");
    banner.hidden = true;

    const body = element("div", "privacy-banner-copy");
    body.appendChild(element("strong", "", "Optional analytics"));
    body.appendChild(element("p", "",
      "This site uses optional Google Analytics only with your permission. " +
      "Rejecting does not affect any lectures or interactive simulations. " +
      "Your choice is saved on this device for up to 180 days."));

    const actions = element("div", "privacy-banner-actions");
    const reject = element("button", "privacy-reject", "Reject analytics");
    reject.type = "button";
    const accept = element("button", "privacy-accept", "Allow analytics");
    accept.type = "button";
    actions.append(reject, accept);
    banner.append(body, actions);
    document.body.appendChild(banner);

    const settings = document.getElementById("privacy-settings-trigger");
    function show() {
      banner.hidden = false;
    }
    function choose(choice) {
      consent = choice;
      savePreference(choice);
      if (choice === "accepted") enableAnalytics();
      else revokeAnalytics();
      banner.hidden = true;
      if (settings) settings.focus();
    }
    accept.addEventListener("click", () => choose("accepted"));
    reject.addEventListener("click", () => choose("rejected"));
    if (settings) settings.addEventListener("click", show);

    consent = readPreference();
    if (consent === "accepted") enableAnalytics();
    else if (consent === "unset") show();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createInterface, { once: true });
  } else createInterface();
})();
