"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const read=file=>fs.readFileSync(file,"utf8");
const shared=read("assets/css/site-editorial.css");
const head=read("_includes/_head.html");
const nav=read("_includes/_navigation.html");
const footer=read("_includes/_footer.html");
const landing=read("index.md");
const route=read("_data/lecture_route.yml");
const pages={
  "/about/":"about/index.md",
  "/research/":"research/index.md",
  "/publications/":"publications/index.md",
  "/repositories/":"repositories/index.md",
  "/news/":"news/index.md",
  "/privacy/":"privacy/index.md",
  "/lecture/":"lecture/index.md"
};
const lectures=[...route.matchAll(/^  url: (\/lecture\/[^\s]+\/)$/gm)].map(m=>m[1]);
assert.equal(lectures.length,14);
const cssStyles=[
  "modern.css","iconic.css","site-editorial.css"
];
for(const file of cssStyles)assert(head.includes('assets/css/'+file),'Global stylesheet missing '+file);
for(const old of ["main_pretty.css","lecture-refresh.css","lecture-polish.css","lecture-audit.css","lecture-cidnp.css"])
  assert(!head.includes('href="{{ site.url }}/assets/css/'+old+'"'),'Obsolete public stylesheet still loaded '+old);
assert(head.includes('page.url contains \'/lecture/\''),"Chapter-only course stylesheet conditional lost");
assert(head.includes("lecture-system.css"),"Scientific lectures need their specialized model styles");
assert(nav.includes('href="#main-content"'),"Every public layout must offer a skip link");
assert(!nav.includes('unless page.layout == "full-page"'),"Full-page layouts cannot skip accessibility navigation");
assert(footer.includes("privacy-settings-trigger"),"Privacy preference control must remain in the footer");
assert(read("docs/design/site-design-rules.md").includes("Sitewide editorial design system"),
  "Document shared visual principles");
assert(shared.includes("--site-font: system-ui"),"Use one native text family");
assert(shared.includes("--site-reading: 72ch"),"Readable academic prose measure required");
assert(shared.includes("--site-stage: 1080px"),"A separate page width for data and visualizations required");
assert(shared.includes("--site-space-6: 72px"),"Use a limited 8px spacing system");
assert(shared.includes("hero-signature--animated"),"Keep the existing spin signature");
assert(shared.includes("@keyframes hero-coupling"),"Keep the homepage spin animation controls");
assert(shared.includes("hero-motion-toggle"),"Animation pause button must be styled");
assert(shared.includes(".page-publications"),"Provide a bibliography layout");
assert(shared.includes(".page-news"),"Provide a news archive layout");
assert(shared.includes(".page-lectures"),"Provide a lecture catalogue layout");
assert(shared.includes(".site-post-main"),"Individual news posts need editorial framing");
assert(shared.includes(".site-footer"),"Common footer styling missing");
assert(shared.includes("prefers-reduced-motion"),"Respect reduced-motion preferences");
assert(shared.includes("max-width:760px")||shared.includes("max-width:760px"),"Mobile reflow needed");
const authors=read("_includes/_author-bio.html");
assert(authors.includes('aria-label="Research profiles and contact"'),
  "Research profile links should be semantically grouped");
assert(!authors.includes('class="fa '),"Remove legacy icon-font dependencies from author bio");
assert(landing.includes("site.data.lecture_route.size"),
  "Homepage lecture count must track the real number of modules");
const catalogue=read("lecture/index.md");
assert(catalogue.includes("site.data.lecture_route.size"),
  "Search count must match course catalogue rather than hardcoded history");
for(const [url,source] of Object.entries(pages)){
  const text=read(source);
  assert(text.includes("layout: page"),"Page should retain standard content layout "+url);
  if(url==="/research/"||url==="/news/")assert(!/^### /m.test(text)&&!/<h3>/i.test(text),
    "Top-level document sections cannot skip H2: "+url);
}
const notFound=read("404.md");
assert(notFound.includes('mailto:luca.gerhards@uni-oldenburg.de'),
  "Fix the nonfunctional 404 contact link");
for(const template of ["_layouts/news.html","_layouts/news-index.html","_layouts/full-page.html"]){
 const s=read(template);
 assert(s.includes('id="main-content"'),"Provide a main landmark: "+template);
 assert(s.includes("{{ content }}"),"Template must not discard Jekyll page content: "+template);
 assert(s.includes("_navigation.html")&&s.includes("_footer.html"),"Use sitewide shell: "+template);
 assert(!s.includes('class="image-wrap"'),"Legacy decorative feature banner should not dominate posts");
}
function lum(hex) {
 const a=[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255).map(x=>x<=.04045?x/12.92:Math.pow((x+.055)/1.055,2.4));
 return a[0]*.2126+a[1]*.7152+a[2]*.0722;
}
const contrast=(a,b)=>{const x=lum(a),y=lum(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05);};
for(const color of ["#202f38","#40535e","#146172"])assert(contrast(color,"#ffffff")>=4.5,
  "Low contrast text color "+color);
if(process.argv.includes("--rendered")) {
 const urls=["/",...Object.keys(pages),...lectures,"/404.html"];
 const tested=new Set();
 for(const url of urls){
   const filepath=url==="/404.html"?"_site/404.html":url==="/"?"_site/index.html":path.join("_site",url.slice(1),"index.html");
   assert(fs.existsSync(filepath),"Jekyll page missing: "+filepath);
   const html=read(filepath);
   assert(html.includes("site-editorial.css"),"Missing global design on "+url);
   assert(html.includes("modern.css")&&html.includes("iconic.css"),"Global layout bases missing "+url);
   for(const old of ["main_pretty.css","lecture-polish.css","lecture-refresh.css"])
     assert(!html.includes('href="https://quantum-chemistry.org/assets/css/'+old+'"'),
       "Old CSS loaded on "+url+": "+old);
   assert(html.includes('href="#main-content"'),"Skip navigation missing "+url);
   assert(html.includes('class="site-header"'),"Common navigation missing "+url);
   assert(html.includes('class="site-footer"'),"Common footer missing "+url);
   assert.equal((html.match(/<h1\b/g)||[]).length,1,"Page should expose one main heading: "+url);
   if(lectures.includes(url))assert(html.includes("lecture-system.css"),"Lecture model style missing "+url);
   else assert(!html.includes('href="https://quantum-chemistry.org/assets/css/lecture-system.css"'),
     "General page loads specialist physics stylesheet "+url);
   tested.add(url);
 }
 const home=read("_site/index.html");
 assert(home.includes("hero-motion-toggle")&&home.includes("hero-spin.js"),
   "Animation and accessible playback toggle must remain");
 assert(home.includes(lectures.length+" interconnected lectures"),"Homepage course count must be current");
 const news=read("_site/news/index.html");
 assert(news.includes('class="news-list"')&&news.includes('class="news-item"'),
   "News chronology should retain published entries");
 const contentRoot="_site/news";
 assert(fs.existsSync(contentRoot),"News category root must exist");
 const walk=(root)=>fs.readdirSync(root,{withFileTypes:true}).flatMap(d=>
   d.isDirectory()?walk(path.join(root,d.name)):d.name.endsWith(".html")?[path.join(root,d.name)]:[]);
 const posts=walk(contentRoot).filter(file=>file!=="_site/news/index.html").map(read).filter(html=>html.includes("site-post-main"));
 assert(posts.length>=1,"Published individual news posts must use shared layout");
 for(const post of posts) {
  assert(post.includes('id="main-content"')&&post.includes("site-editorial.css"),"News posts should retain same editorial shell");
 }
 console.log("PASS: "+tested.size+" site routes + "+posts.length+" news posts use common editorial design");
}else console.log("PASS: shared type system, page templates, accessibility, privacy and homepage effects");
