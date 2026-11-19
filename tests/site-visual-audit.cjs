"use strict";
const { chromium } = require("playwright");
const fs=require("fs"),path=require("path");
const origin="https://quantum-chemistry.org";
const paths=["/","/research/","/publications/","/repositories/","/about/","/news/","/lecture/","/lecture/electronic-structure/","/lecture/magnetic-resonance/","/lecture/photo-cidnp/","/privacy/"];
const sizes=[{width:1440,height:900,label:"desktop"},{width:390,height:844,label:"mobile"}];
async function main(){
 fs.mkdirSync("visual-captures",{recursive:true});
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let issues=[];
 try{
  for(const vp of sizes){
   const page=await browser.newPage({viewport:{width:vp.width,height:vp.height},reducedMotion:"reduce"});
   for(const route of paths){
    const slug=route==="/"?"home":route.slice(1,-1).replaceAll("/","_");
    try{
     const resp=await page.goto(origin+route,{waitUntil:"domcontentloaded",timeout:25000});
     await page.waitForTimeout(400);
     const metrics=await page.evaluate(()=>{
      const els=[...document.body.querySelectorAll("*")];
      const overflow=els.filter(e=>{
       const s=getComputedStyle(e),r=e.getBoundingClientRect();
       return s.visibility!=="hidden" && s.display!=="none" && r.width>5 &&
         r.right>innerWidth+2 && r.left<innerWidth && r.top<innerHeight*2;
      }).slice(0,5).map(e=>({tag:e.tagName,cls:String(e.className).slice(0,60),right:Math.round(e.getBoundingClientRect().right)}));
      return {scrollWidth:document.documentElement.scrollWidth,width:innerWidth,
       h1:[...document.querySelectorAll("h1")].map(e=>e.textContent.trim().slice(0,70)),
       hasMain:!!document.querySelector("#main-content"),overflow,
       skipLinkVisible:(()=>{
         const el=document.querySelector(".skip-link");
         if(!el)return null;
         const r=el.getBoundingClientRect();
         return r.bottom>1 && r.top<innerHeight;
       })(),
       navClipped:[...document.querySelectorAll(".modern-nav a")]
         .filter(e=>{const r=e.getBoundingClientRect();return r.left<-2||r.right>innerWidth+2;})
         .map(e=>e.textContent.trim()),
       navCount:document.querySelectorAll(".modern-nav a").length,
       consentHeight:(()=>{
         const e=document.querySelector(".privacy-banner");
         if(!e||e.hidden)return null;
         return Math.round(e.getBoundingClientRect().height);
       })(),
       fonts:[...new Set([...document.querySelectorAll("h1,h2,.page-content p")].slice(0,10).map(e=>getComputedStyle(e).fontFamily))]};
     });
     const status=resp?.status();
     console.log(JSON.stringify({route,screen:vp.label,status,...metrics}));
     if(status!==200||metrics.scrollWidth>vp.width+3||metrics.h1.length!==1||!metrics.hasMain||metrics.skipLinkVisible!==false||metrics.navClipped.length||metrics.navCount!==5||(vp.label==="mobile"&&metrics.consentHeight!==null&&metrics.consentHeight>335)){
      issues.push({route,screen:vp.label,status,metrics});
     }
     const reject=page.locator(".privacy-reject");
     if(await reject.isVisible()){
       await page.screenshot({path:path.join("visual-captures",slug+"-consent-"+vp.label+".png"),animations:"disabled"});
       await reject.click();
     }
     await page.screenshot({path:path.join("visual-captures",slug+"-"+vp.label+".png"),animations:"disabled"});
    }catch(e){issues.push({route,screen:vp.label,error:String(e)});console.error("AUDIT_ERROR",route,vp.label,String(e));}
   }
   await page.close();
  }
 }finally{await browser.close();}
 fs.writeFileSync("visual-captures/audit.json",JSON.stringify(issues,null,2));
 if(issues.length){console.error("Visual/structural issues found",issues.length);process.exitCode=1;}
}
main().catch(e=>{console.error(e);process.exit(1);});