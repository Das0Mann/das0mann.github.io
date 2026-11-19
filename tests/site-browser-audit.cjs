"use strict";
// Real-browser responsive audit of the rendered Jekyll site.
// Screenshots and layout metrics are retained as CI artifacts for visual review.
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const { chromium } = require("playwright");
const ROOT = path.resolve("_site");
const OUT = path.resolve("visual-audit");
const MIME = {".html":"text/html;charset=utf-8",".css":"text/css;charset=utf-8",".js":"text/javascript;charset=utf-8",".json":"application/json",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".woff":"font/woff",".woff2":"font/woff2",".ico":"image/x-icon"};
const routes = ["/","/about/","/research/","/publications/","/repositories/","/lecture/","/news/","/privacy/","/404.html"];
const routeYaml=fs.readFileSync("_data/lecture_route.yml","utf8");
for(const m of routeYaml.matchAll(/^  url:\s*(\/lecture\/[^\s]+\/)$/gm)) routes.push(m[1]);
assert.equal(routes.length,23,"Expected nine public pages plus fourteen lecture chapters.");
fs.mkdirSync(OUT,{recursive:true});
const server=http.createServer((req,res)=>{
 let target=new URL(req.url,"http://localhost").pathname;
 try { target=decodeURIComponent(target); } catch {res.writeHead(400).end();return;}
 if(target.endsWith("/")) target+="index.html";
 const full=path.resolve(ROOT,"."+target);
 if(!(full===ROOT||full.startsWith(ROOT+path.sep))||!fs.existsSync(full)||!fs.statSync(full).isFile()){res.writeHead(404).end("Not found");return;}
 const ext=path.extname(full).toLowerCase();
 let body=fs.readFileSync(full);
 if(ext===".html")body=Buffer.from(body.toString().replaceAll("https://quantum-chemistry.org/","http://127.0.0.1:"+server.address().port+"/"));
 res.writeHead(200,{"Content-Type":MIME[ext]||"application/octet-stream","Cache-Control":"no-store"}).end(body);
});
(async()=>{
 await new Promise(resolve=>server.listen(0,"127.0.0.1",resolve));
 const base="http://127.0.0.1:"+server.address().port;
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const report=[];
 try{
   for(const width of [1440,390]){
     const context=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1,reducedMotion:"reduce"});
     for(const route of routes){
       const page=await context.newPage();
       const errors=[];
       page.on("pageerror",e=>errors.push(String(e).slice(0,180)));
       await page.goto(base+route,{waitUntil:"domcontentloaded",timeout:30000});
       await page.locator("main").first().waitFor({state:"attached"});
       const result=await page.evaluate(()=>{
         const width=document.documentElement.clientWidth;
         const main=document.querySelector("main");
         const nav=[...document.querySelectorAll(".modern-nav a")];
         const probe=[...document.querySelectorAll("h1,h2,p")].find(e=>e.getBoundingClientRect().width>100&&getComputedStyle(e).display!=="none");
         const offenders=[...document.querySelectorAll("body *")].filter(el=>{
           if(el.closest("script,style,svg,mjx-container"))return false;
           const cs=getComputedStyle(el);
           if(cs.position==="fixed"||cs.position==="absolute"||cs.visibility==="hidden"||cs.display==="none")return false;
           const r=el.getBoundingClientRect();
           return r.width>0&&(r.right>width+4||r.left< -4)&&cs.overflowX!=="auto"&&cs.overflowX!=="scroll";
         }).slice(0,10).map(el=>({tag:el.tagName.toLowerCase(),className:String(el.className).slice(0,60),right:Math.round(el.getBoundingClientRect().right)}));
         return {
           h1:document.querySelectorAll("h1").length,
           mainVisible:!!main&&main.getBoundingClientRect().height>20,
           docOverflow:Math.round(document.documentElement.scrollWidth-width),
           navCount:nav.length,
           navVisible:nav.filter(a=>{const r=a.getBoundingClientRect(),cs=getComputedStyle(a);return r.width>=36&&r.height>=32&&cs.visibility!=="hidden"&&cs.display!=="none";}).length,
           font:probe?getComputedStyle(probe).fontFamily:"",
           offenders,
           rightEdge:[...document.querySelectorAll("body *")].filter(el=>{
             const r=el.getBoundingClientRect(),cs=getComputedStyle(el);
             return r.width>5&&r.right>width+3&&cs.display!=="none"&&cs.visibility!=="hidden";
           }).slice(0,15).map(el=>({tag:el.tagName.toLowerCase(),className:String(el.className).slice(0,75),
              right:Math.round(el.getBoundingClientRect().right),position:getComputedStyle(el).position,
              overflow:getComputedStyle(el).overflowX})),
           broadScroll:[...document.querySelectorAll("body *")].filter(el=>
              el.clientWidth>10&&el.scrollWidth>el.clientWidth+8&&getComputedStyle(el).overflowX==="visible")
             .slice(0,15).map(el=>({tag:el.tagName.toLowerCase(),className:String(el.className).slice(0,75),
               client:el.clientWidth,scroll:el.scrollWidth}))
         };
       });
       const id=route==="/"?"home":route==="/404.html"?"404":route.replace(/^\/|\/$/g,"").replaceAll("/","-");
       await page.screenshot({path:path.join(OUT,id+"-"+width+".png"),animations:"disabled",fullPage:false});
       if(route==="/"){
         const links=page.locator(".home-learning-links");
         await links.scrollIntoViewIfNeeded();
         const linkInfo=await links.evaluate(el=>{
           const items=[...el.querySelectorAll(":scope > a")];
           const rects=items.map(a=>a.getBoundingClientRect());
           return {count:items.length,display:getComputedStyle(el).display,
             first:rects[0]?{height:Math.round(rects[0].height),width:Math.round(rects[0].width)}:null,
             vertical:rects.length<2||rects[1].top>=rects[0].bottom-2};
         });
         result.homeLearning=linkInfo;
         await page.screenshot({path:path.join(OUT,"home-lecture-links-"+width+".png"),animations:"disabled",fullPage:false});
       }
       if(route.startsWith("/lecture/")&&route!=="/lecture/"){
         const widget=page.locator(".interactive-card,.cidnp-widget").first();
         if(await widget.count()){
           await widget.scrollIntoViewIfNeeded();
           await page.screenshot({path:path.join(OUT,id+"-widget-"+width+".png"),animations:"disabled",fullPage:false});
         }
       }
       report.push({route,width,...result,errors});
       await page.close();
     }
     await context.close();
   }
 }finally{await browser.close();server.close();}
 fs.writeFileSync(path.join(OUT,"report.json"),JSON.stringify(report,null,2));
 const failed=report.filter(r=>r.h1!==1||!r.mainVisible||r.docOverflow>4||r.navVisible!==5||(r.route==="/"&&(r.homeLearning?.count!==3||r.homeLearning?.display!=="grid"||!r.homeLearning?.vertical)));
 console.log(JSON.stringify({pages:routes.length,viewports:[1440,390],failed:failed.length,diagnostics:failed,fonts:[...new Set(report.map(r=>r.font))],pageErrors:report.filter(r=>r.errors.length).map(r=>({route:r.route,width:r.width,errors:r.errors}))},null,2));
 if(failed.length)process.exitCode=1;
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
