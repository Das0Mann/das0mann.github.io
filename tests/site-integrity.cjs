"use strict";
const fs = require("node:fs");
const assert = require("node:assert/strict");
const path = require("node:path");
const read = (f) => fs.readFileSync(f, "utf8");
const head = read("_includes/_head.html");
const styles = [
 "assets/css/modern.css",
 "assets/css/iconic.css",
 "assets/css/lecture-system.css",
 "assets/css/site-coherence.css",
 "assets/css/privacy-consent.css",
 "assets/css/site-interactions.css"
];
for (const css of styles) assert(head.includes(css), "Missing style layer "+css);
for (const legacy of ["main_pretty.css","lecture-refresh.css","lecture-polish.css","site-editorial.css"])
 assert(!head.includes(legacy),"Conflicting theme loaded: "+legacy);
assert(head.indexOf("lecture-system.css") < head.indexOf("site-coherence.css"),
 "Site refinements must follow lecture-specific styles");

const css = read("assets/css/site-coherence.css");
const consentCss = read("assets/css/privacy-consent.css");
assert(consentCss.includes(".privacy-banner-copy { flex: 0 0 auto"),"Mobile consent panel must not inherit the 300px desktop flex basis");
assert(consentCss.includes("max-height: min(55dvh, 330px)"),"Mobile consent panel must remain constrained to a manageable height");

for (const rule of [".home-hero",".page-publications",".page-research",".page-news",
 ".page-lectures",".lecture-page",".site-post-main","@media(max-width:640px)",
 "prefers-reduced-motion"]) {
 assert(css.includes(rule),"Missing sitewide styling "+rule);
}
let depth=0, comment=false, string=null;
for(let i=0;i<css.length;i++){
 const c=css[i],n=css[i+1];
 if(comment){if(c==="*"&&n==="/"){comment=false;i++;}continue;}
 if(string){if(c==="\\"){i++;continue;} if(c===string) string=null;continue;}
 if(c==="/"&&n==="*"){comment=true;i++;continue;}
 if(c==="'"||c==='"'){string=c;continue;}
 if(c==="{")depth++;
 if(c==="}")depth--;
 assert(depth>=0,"CSS closing brace without opener");
}
assert.equal(depth,0,"Unbalanced sitewide CSS");
assert(!comment&&!string,"Unclosed comment/string in sitewide CSS");
assert(css.includes(".skip-link:focus"),"Keyboard skip link needs an explicit focused state");
assert(css.includes("grid-template-columns:repeat(3,minmax(0,1fr))"),"Mobile navigation should expose all destinations, not horizontally hide the last links");
const layouts={
 "_layouts/home.html":['id="main-content"', "{{ content }}"],
 "_layouts/page.html":['id="main-content"', "{{ content }}"],
 "_layouts/full-page.html":['id="main-content"', "{{ content }}"],
 "_layouts/news.html":['id="main-content"', "{{ content }}"],
 "_layouts/news-index.html":['id="main-content"', "{{ content }}"],
};
for(const [file,tokens] of Object.entries(layouts)){
 const html=read(file);
 for(const token of tokens)assert(html.includes(token),file+" missing "+token);
 assert(html.includes("{% include _navigation.html %}"),file+" missing shared navigation");
 assert(html.includes("{% include _footer.html %}"),file+" missing shared footer");
}
const nav=read("_includes/_navigation.html");
assert(nav.includes('href="#main-content"'),"Skip navigation must work on all layouts");
const bio=read("_includes/_author-bio.html");
assert(!bio.includes('class="fa'),"Removed icon fonts must not be used by author component");
assert(bio.includes('class="author-links"'),"Profile links need a semantic layout");
const catalog=read("lecture/index.md");
const home=read("index.md");
assert(catalog.includes("site.data.lecture_route.size"),"Course count should be data derived");
assert(home.includes("site.data.lecture_route.size"),"Home course count should be data derived");

if(process.argv.includes("--rendered")){
 const pages=[
 "index.html","about/index.html","research/index.html","publications/index.html",
 "repositories/index.html","lecture/index.html","news/index.html","privacy/index.html",
 "404.html"
 ];
 const routes=[...read("_data/lecture_route.yml").matchAll(/^  url: (\/lecture\/[^\s]+\/)$/gm)].map(m=>m[1]);
 assert.equal(routes.length,14);
 for(const route of routes) pages.push(route.slice(1)+"index.html");
 for(const page of pages){
  const filename=path.join("_site",page);
  assert(fs.existsSync(filename),"Missing Jekyll route "+page);
  const html=read(filename);
  assert.equal((html.match(/<h1\b/g)||[]).length,1,"Expected one H1: "+page);
  assert(html.includes('id="main-content"'),"Missing main landmark: "+page);
  assert(html.includes("assets/css/site-coherence.css"),"Missing shared visual system: "+page);
  assert(!html.includes("assets/css/main_pretty.css"),"Old theme leaked: "+page);
  assert(!html.includes("assets/css/lecture-polish.css"),"Old lecture style leaked: "+page);
  assert(html.includes("Privacy settings"),"Footer/consent absent: "+page);
  const chapter=routeIsChapter(page,routes);
  if(chapter)assert(html.includes("assets/css/lecture-system.css"),"Missing lecture styles: "+page);
  else assert(!html.includes("assets/css/lecture-system.css"),"Lecture styles leaking onto public page: "+page);
 }
 const p404=read("_site/404.html");
 assert(p404.includes("homepage"),"404 recovery link missing");
}
function routeIsChapter(page,routes){
 return routes.some(route=>page===route.slice(1)+"index.html");
}
console.log("PASS: shared site typography, all page templates, layout responsiveness and 14 lecture routes");