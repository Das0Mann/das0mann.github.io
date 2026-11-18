"use strict";
const fs = require("node:fs");
const assert = require("node:assert/strict");
const vm = require("node:vm");

const read = (name) => fs.readFileSync(name, "utf8");
const head = read("_includes/_head.html");
const scripts = read("_includes/_scripts.html");
const consentSource = read("assets/js/privacy-consent.js");
const loader = read("assets/js/mathjax-loader.js");
const action = read(".github/workflows/jekyll-gh-pages.yml");

assert(!head.includes("googletagmanager.com/gtag/js"), "Tracking script must never be in HTML");
assert(!head.includes("window.cookieconsent"), "The old CMP must be removed");
assert(!head.includes("cookieconsent2"), "Third-party CMP assets must be removed");
assert(!head.includes("fonts.googleapis.com"), "Google Fonts should not load before consent");
assert(!head.includes("<script>"), "Global scripts must be external, to support strict CSP");
assert(head.includes('http-equiv="Content-Security-Policy"'), "Meta CSP missing");
assert(head.includes("object-src 'none'"), "Object injection protection missing");
assert(scripts.includes("assets/js/privacy-consent.js"), "Consent loader missing");
assert(scripts.includes("assets/js/mathjax-config.js"), "First-party MathJax config missing");
assert(scripts.includes("assets/js/site-interactions.js"), "Vanilla site controls missing");
assert(!/jquery|scripts\.min\.js|ga\(|google-analytics\.com/i.test(scripts),
  "Legacy third-party scripts are still referenced");
assert(loader.includes("mathjax/3.2.2/"), "MathJax requires a fixed version");
assert(!loader.includes("unpkg.com") && !loader.includes("cdn.jsdelivr.net"),
  "Unexpected third-party MathJax mirrors remain");
assert(!/uses:\s+actions\/[\w-]+@v\d+\b/.test(action),
  "GitHub Actions must be pinned to commit hashes");
assert(!fs.existsSync("Gemfile.lock"), "Old vulnerable lock file is still committed");
assert(!fs.existsSync("package.json"), "Unused 2013 Grunt dependencies remain");
assert(!fs.existsSync("assets/js/scripts.min.js"), "Legacy jQuery bundle remains");
assert(fs.existsSync(".github/dependabot.yml"), "Automatic dependency updates missing");

function mock() {
  const emitted = [];
  const stored = new Map();
  const nodes = [];
  function element(tag) {
    const callbacks = new Map();
    const node = {
      tagName: tag.toUpperCase(), children: [], hidden: false, removed: false,
      append(...children) { this.children.push(...children); },
      appendChild(child) { this.children.push(child); if (this.tagName === "HEAD" && child.tagName === "SCRIPT") emitted.push(child); },
      setAttribute() {},
      addEventListener(event, callback) { callbacks.set(event, callback); },
      fire(event) { assert(callbacks.has(event), "No " + event + " event"); callbacks.get(event)(); },
      remove() { this.removed = true; },
      focus() { this.focused = true; }
    };
    nodes.push(node);
    return node;
  }
  const headEl = element("head");
  const body = element("body");
  const footerButton = element("button");
  const document = {
    readyState: "complete", body, head: headEl, cookie: "",
    createElement: element,
    getElementById: (id) => id === "privacy-settings-trigger" ? footerButton : null,
    addEventListener() {}
  };
  const window = { location: { hostname: "quantum-chemistry.org" } };
  const localStorage = {
    getItem: (key) => stored.has(key) ? stored.get(key) : null,
    setItem: (key, value) => stored.set(key, value)
  };
  vm.runInNewContext(consentSource, { document, window, localStorage, Date, JSON, Number,
    console, encodeURIComponent }, { filename: "privacy-consent.js", timeout: 1000 });
  const banner = body.children.find((n) => n.id === "privacy-consent");
  assert(banner, "Consent banner must be inserted locally");
  const actions = banner.children[1];
  return { window, document, stored, emitted, banner,
    reject: actions.children[0], accept: actions.children[1], footerButton };
}

const app = mock();
assert.equal(app.banner.hidden, false, "Without preference, choices must be visible");
assert.equal(app.emitted.length, 0, "No third-party script before opt-in");
assert.equal(app.window.gtag, undefined, "Analytics must not initialize before opt-in");
app.reject.fire("click");
assert.equal(app.banner.hidden, true, "Reject should dismiss banner");
assert.equal(app.emitted.length, 0, "Rejection must not load analytics");
assert.equal(app.window["ga-disable-G-RNH61RX63Z"], true);

app.footerButton.fire("click");
assert.equal(app.banner.hidden, false, "Footer control must reopen consent");
app.accept.fire("click");
assert.equal(app.emitted.length, 1, "Opt-in should load only one script");
assert.equal(app.emitted[0].src, "https://www.googletagmanager.com/gtag/js?id=G-RNH61RX63Z");
assert.equal(app.window["ga-disable-G-RNH61RX63Z"], false);
assert.equal(JSON.parse(app.stored.get("qc-analytics-consent-v1")).choice, "accepted");
app.emitted[0].onload();
app.footerButton.fire("click");
app.reject.fire("click");
assert.equal(app.window["ga-disable-G-RNH61RX63Z"], true, "Withdrawal must disable tracking");
assert.equal(app.emitted.length, 1, "Withdrawal must not send a new script request");

if (process.argv.includes("--rendered")) {
  const html = read("_site/index.html");
  const privacy = read("_site/privacy/index.html");
  assert(html.includes("privacy-consent.js"), "Published site must include consent control");
  assert(html.includes("Content-Security-Policy"), "Published site must contain CSP");
  assert(!html.includes("googletagmanager.com/gtag/js"), "Published HTML must not preload analytics");
  assert(!html.includes("cookieconsent2"), "Published HTML should not load an external CMP");
  assert(privacy.includes("Privacy settings"), "Privacy page must describe the preference control");
}
console.log("PASS: strict opt-in analytics, rejection, revocation, CSP, and legacy-script cleanup");
