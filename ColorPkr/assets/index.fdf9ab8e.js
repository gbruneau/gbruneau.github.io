const F=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(t){if(t.ep)return;t.ep=!0;const l=o(t);fetch(t.href,l)}};F();var z=202209301702e-4,x="#808080",w=1,G,k=120,m=!1,A;document.getElementById("colPalette").title=`build ${z}`;for(let e=0;e<k;e++)G=q(`c${w+e}`,x,x.slice(1),!0),document.getElementById("colPalette").innerHTML+=G;for(let e=0;e<k;e++)A=document.querySelector(`#c${w+e} .colTitle`),A.addEventListener("keypress",function(r){r.key==="Enter"&&r.preventDefault(),document.getElementById("btSave").style.visibility="visible"});var K=function(){var e=this.value,r=this.parentElement.id.substring(1);B("c",r,e,e.slice(1)),document.getElementById("btSave").style.visibility="visible"},V=document.getElementById("colPalette").getElementsByClassName("inColor");for(var P=0;P<V.length;P++)V[P].addEventListener("change",K);document.getElementById("btReset").addEventListener("click",R);document.getElementById("btLoad").addEventListener("click",j);document.getElementById("btSave").addEventListener("click",X);document.getElementById("btRandom").addEventListener("click",W);document.getElementById("btFlipBG").addEventListener("click",Q);document.getElementById("btMix1").addEventListener("click",function(){D(0)});document.getElementById("btMix2").addEventListener("click",function(){D(1)});document.getElementById("inColorHslMix").addEventListener("change",E);document.getElementById("inHSLSteps").addEventListener("change",E);document.getElementById("inH").addEventListener("change",E);document.getElementById("inS").addEventListener("change",E);document.getElementById("inL").addEventListener("change",E);document.getElementById("inColorMix1").addEventListener("change",M);document.getElementById("inColorMix2").addEventListener("change",M);document.getElementById("inMix2Steps").addEventListener("change",M);let C;const J="ColorPkr",N=indexedDB.open(J,1);N.onsuccess=e=>{C=e.target.result,j()};N.onupgradeneeded=e=>{C=e.target.result,C.createObjectStore("colors",{keyPath:"id",autoIncrement:!0})};O();E();M();function q(e,r,o,n){var t=`<div id="${e}" class="paletteColor">
  <input class="inColor" type="color" value="${r}" >
  ${n?'<div class="colTitle"   contenteditable="true">'+o+"</div>":""} 
  <div class="hexColor">${r}</div>
  <div class="rgbColor">${S(r).rgb}</div>
  <div class="hslColor100">${p(r).hsl100}</div>
  <div class="hslColor255">${p(r).hsl255}</div>
</div>`;return t}function O(){var e=getComputedStyle(document.documentElement).getPropertyValue("--darkBG"),r=getComputedStyle(document.documentElement).getPropertyValue("--darkColor"),o=getComputedStyle(document.documentElement).getPropertyValue("--darkPannel"),n=getComputedStyle(document.documentElement).getPropertyValue("--darkTitle"),t=getComputedStyle(document.documentElement).getPropertyValue("--lightBG"),l=getComputedStyle(document.documentElement).getPropertyValue("--lightColor"),a=getComputedStyle(document.documentElement).getPropertyValue("--lightPannel"),d=getComputedStyle(document.documentElement).getPropertyValue("--lightTitle");document.body.style.backgroundColor=m?e:t,document.body.style.color=m?r:l,document.getElementById("colorPanel").style.backgroundColor=m?o:a,c=document.querySelectorAll("#colorPanel .paletteColor input"),c.forEach(i=>{i.style.backgroundColor=m?o:a,i.style.borderColor=m?o:a});var c=document.querySelectorAll("#colPalette .paletteColor input");c.forEach(i=>{i.style.backgroundColor=m?e:t,i.style.borderColor=m?e:t});var c=document.querySelectorAll("#colPalette .paletteColor .colTitle");c.forEach(i=>{i.style.color=m?n:d}),document.querySelector("#btFlipBG span").title=m?"Light Mode":"Dark Mode"}function R(){for(var e=document.getElementById("colPalette").getElementsByClassName("inColor"),r=0;r<e.length;r++)B("c",r+1,x,x.slice(1));document.getElementById("btSave").style.visibility="hidden"}function Q(){m=!m,O()}function B(e,r,o,n){var t=`${e}${r}`,l=document.getElementById(t),a=/[a-f\d]{6}/i.exec(o)[0],d;l.querySelector("input").value="#"+a,l.querySelector(".hexColor").innerText="#"+a,d=l.querySelector(".colTitle"),d&&(d.innerText=n),l.querySelector(".rgbColor").innerText=S(a).rgb,l.querySelector(".hslColor100").innerText=p(a).hsl100,l.querySelector(".hslColor255").innerText=p(a).hsl255}function p(e){var r=/#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(e),o=parseInt(r[1],16),n=parseInt(r[2],16),t=parseInt(r[3],16);o/=255,n/=255,t/=255;var l=Math.max(o,n,t),a=Math.min(o,n,t),d,c,i=(l+a)/2;if(l==a)d=c=0;else{var s=l-a;switch(c=i>.5?s/(2-l-a):s/(l+a),l){case o:d=(n-t)/s+(n<t?6:0);break;case n:d=(t-o)/s+2;break;case t:d=(o-n)/s+4;break}d/=6}var u=parseInt(d*3600)/10,y=parseInt(c*1e3)/10,v=parseInt(i*1e3)/10,$=parseInt(d*255),L=parseInt(y/100*255),I=parseInt(i*255);return{h360:u,s100:y,l100:v,hsl100:`hsl(${u},${y}%,${v}%)`,hsl255:`hsl(${$},${L},${I})`}}function U(e,r,o){var n=r/100,t=o/100;let l=(1-Math.abs(2*t-1))*n,a=l*(1-Math.abs(e/60%2-1)),d=t-l/2,c=0,i=0,s=0;0<=e&&e<60?(c=l,i=a,s=0):60<=e&&e<120?(c=a,i=l,s=0):120<=e&&e<180?(c=0,i=l,s=a):180<=e&&e<240?(c=0,i=a,s=l):240<=e&&e<300?(c=a,i=0,s=l):300<=e&&e<360&&(c=l,i=0,s=a),c=Math.round((c+d)*255),i=Math.round((i+d)*255),s=Math.round((s+d)*255);var u=`${c.toString(16).padStart(2,"0")}${i.toString(16).padStart(2,"0")}${s.toString(16).padStart(2,"0")}`;return{r:c,g:i,b:s,rgbHex:u,rgbCol:`#${u}`,hsl100:`hsl(${Math.round(e*10)/10},${Math.round(r*10)/10}%,${Math.round(o*10)/10}%)`,hsl255:`hsl(${Math.round(e/360*255)},${Math.round(n*255)},${Math.round(o/100*255)})`}}function D(e){const r=document.querySelectorAll(".aTab");var o=0;r.forEach(t=>{o==e?t.style.display="flex":t.style.display="none",o++});const n=document.querySelectorAll(".btTab");o=0,n.forEach(t=>{o==e?t.classList.add("btTabOn"):t.classList.remove("btTabOn"),o++})}function S(e){var r=/#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(e),o=parseInt(r[1],16),n=parseInt(r[2],16),t=parseInt(r[3],16);return{r:o,g:n,b:t,rgb:`rgb(${o},${n},${t})`}}function j(){R();var e=C.transaction("colors","readonly"),r=e.objectStore("colors"),o=r.openCursor();o.onsuccess=function(n){var t=n.target.result;t&&(B("c",t.value.id,t.value.hexColor,t.value.title),t.continue())}}function W(){for(var e,r=0;r<k;r++)e=Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),B("c",r,e);document.getElementById("btSave").style.visibility="visible"}function X(){var e,r,o,n=document.getElementById("colPalette").getElementsByClassName("paletteColor");for(var t of n)r=t.querySelector(".colTitle").innerText,o=t.id.slice(1),e=t.querySelector(".inColor").value,Z(o,e,r);document.getElementById("btSave").style.visibility="hidden"}function Y(e,r,o){return`${e.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}${o.toString(16).padStart(2,"0")}`}function M(){var e=parseInt(document.getElementById("inMix2Steps").value),r=document.getElementById("inColorMix1").value,o=document.getElementById("inColorMix2").value,n=document.getElementById("Mix2PaletteContainer");n.querySelectorAll(".paletteColor").forEach(g=>{g.remove()});var l=S(r),a=S(o),d=l.r,c=l.g,i=l.b,s=a.r,u=a.g,y=a.b,v=(s-d)/(e-1),$=(u-c)/(e-1),L=(y-i)/(e-1),I,h,f,b,H;T("mixC1",r),T("mixC2",o);for(let g=0;g<e;g++)g==0?(h=d,f=c,b=i):g==e-1?(h=s,f=u,b=y):(h=d+v*g,f=c+$*g,b=i+L*g),h=Math.round(h),f=Math.round(f),b=Math.round(b),I=`#${Y(h,f,b)}`,H=q(`mixTwo${g+2}`,I,null,!1),Mix2PaletteContainer.innerHTML+=H}function T(e,r){document.querySelector(`#${e} .hexColor`).innerText=`${r}`;var o=S(r);document.querySelector(`#${e} .rgbColor`).innerText=`${o.rgb}`;var n=p(r);document.querySelector(`#${e} .hslColor100`).innerText=`${n.hsl100}`,document.querySelector(`#${e} .hslColor255`).innerText=`${n.hsl255}`}function E(){var e=document.querySelector("#mhsl1 input").value,r=Math.max(parseInt(document.getElementById("inHSLSteps").value),2),o=parseInt(document.getElementById("inH").value),n=parseInt(document.getElementById("inS").value),t=parseInt(document.getElementById("inL").value),l=p(e),a=l.h360,d=l.s100,c=l.l100,i,s,u=document.getElementById("hslMixPaletteContainer");u.querySelectorAll(".paletteColor").forEach(v=>{v.remove()}),T("mhsl1",e);for(let v=0;v<r;v++)i=U(a,d,c),s=q(`mhsl${v+2}`,i.rgbCol,null,!1),u.innerHTML+=s,a=Math.max(Math.min(a+o<0?360+(a+o):a+o,360),0),d=Math.max(Math.min(d+n,100),0),c=Math.max(Math.min(c+t,100),0)}function Z(e,r,o=""){const t=C.transaction("colors","readwrite").objectStore("colors").put({hexColor:r,title:o.trim()==""?r:o,id:e});t.onsuccess=function(l){return t.result},t.onerror=function(l){return null}}
