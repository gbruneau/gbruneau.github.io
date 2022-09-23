const ae=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}};ae();var ie=202209222232e-4,b="#808080",se=0,j,E=0,F=120,h=!1;document.getElementById("toolbar").title=`build ${ie}`;for(let e=0;e<F;e++)j=`<div id="c${se+e}" class="paletteColor">
      <input class="inColor" type="color" value="${b}" >
      <div class="hexColor">${b}</div>
      <div class="rgbColor">${q(b).rgb}</div>
      <div class="hslColor100">${y(b).hsl100}</div>
      <div class="hslColor255">${y(b).hsl255}</div>
  </div>`,document.getElementById("colPalette").innerHTML+=j;var de=function(){var e=this.value,r=this.parentElement.id.substring(1);P("c",r,e),E=Math.max(E,r),document.getElementById("btSave").style.visibility="visible"},Q=document.getElementById("colPalette").getElementsByClassName("inColor");for(var u=0;u<Q.length;u++)Q[u].addEventListener("change",de);document.getElementById("btReset").addEventListener("click",X);document.getElementById("btLoad").addEventListener("click",_);document.getElementById("btSave").addEventListener("click",ue);document.getElementById("btRandom").addEventListener("click",ve);document.getElementById("btFlipBG").addEventListener("click",ce);document.getElementById("btMix1").addEventListener("click",function(){Z(0)});document.getElementById("btMix2").addEventListener("click",function(){Z(1)});document.getElementById("inColorHslMix").addEventListener("change",I);document.getElementById("inHSLSteps").addEventListener("change",I);document.getElementById("inH").addEventListener("change",I);document.getElementById("inS").addEventListener("change",I);document.getElementById("inL").addEventListener("change",I);document.getElementById("inColorMix1").addEventListener("change",A);document.getElementById("inColorMix2").addEventListener("change",A);document.getElementById("inMix2Steps").addEventListener("change",A);document.getElementById("inMix2Mode").addEventListener("change",A);W();_();P("mhsl",1,"#808080");I();function W(){var e=getComputedStyle(document.documentElement).getPropertyValue("--darkColor"),r=getComputedStyle(document.documentElement).getPropertyValue("--lightColor"),l=getComputedStyle(document.documentElement).getPropertyValue("--darkPannel"),o=getComputedStyle(document.documentElement).getPropertyValue("--lightPannel");document.body.style.backgroundColor=h?e:r,document.body.style.color=h?r:e;var t=document.querySelectorAll("#colPalette .paletteColor input");for(u=0;u<t.length;u++)t[u].style.backgroundColor=h?e:r,t[u].style.borderColor=h?e:r;for(t=document.querySelectorAll("#colorPanel .paletteColor input"),u=0;u<t.length;u++)t[u].style.backgroundColor=h?l:o,t[u].style.borderColor=h?l:o;document.getElementById("colorPanel").style.backgroundColor=h?l:o}function X(){for(var e=document.getElementById("colPalette").getElementsByClassName("inColor"),r=0;r<e.length;r++)P("c",r,b),E=0;document.getElementById("btSave").style.visibility="hidden"}function ce(){h=!h,W()}function P(e,r,l){var o=`${e}${r}`,t=document.getElementById(o),n=/[a-f\d]{6}/i.exec(l)[0];t.querySelector("input").value="#"+n,t.querySelector(".hexColor").innerText="#"+n,t.querySelector(".rgbColor").innerText=q(n).rgb,t.querySelector(".hslColor100").innerText=y(n).hsl100,t.querySelector(".hslColor255").innerText=y(n).hsl255}function y(e){var r=/#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(e),l=parseInt(r[1],16),o=parseInt(r[2],16),t=parseInt(r[3],16);l/=255,o/=255,t/=255;var n=Math.max(l,o,t),i=Math.min(l,o,t),c,d,a=(n+i)/2;if(n==i)c=d=0;else{var s=n-i;switch(d=a>.5?s/(2-n-i):s/(n+i),n){case l:c=(o-t)/s+(o<t?6:0);break;case o:c=(t-l)/s+2;break;case t:c=(l-o)/s+4;break}c/=6}var m=parseInt(c*3600)/10,f=parseInt(d*1e3)/10,g=parseInt(a*1e3)/10,x=parseInt(c*255),M=parseInt(f/100*255),S=parseInt(a*255);return{h360:m,s100:f,l100:g,hsl100:`hsl(${m},${f}%,${g}%)`,hsl255:`hsl(${x},${M},${S})`}}function Y(e,r,l){var o=r/100,t=l/100;let n=(1-Math.abs(2*t-1))*o,i=n*(1-Math.abs(e/60%2-1)),c=t-n/2,d=0,a=0,s=0;0<=e&&e<60?(d=n,a=i,s=0):60<=e&&e<120?(d=i,a=n,s=0):120<=e&&e<180?(d=0,a=n,s=i):180<=e&&e<240?(d=0,a=i,s=n):240<=e&&e<300?(d=i,a=0,s=n):300<=e&&e<360&&(d=n,a=0,s=i),d=Math.round((d+c)*255),a=Math.round((a+c)*255),s=Math.round((s+c)*255);var m=`${d.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}${s.toString(16).padStart(2,"0")}`;return{r:d,g:a,b:s,rgbHex:m,rgbCol:`#${m}`,hsl100:`hsl(${Math.round(e*10)/10},${Math.round(r*10)/10}%,${Math.round(l*10)/10}%)`,hsl255:`hsl(${Math.round(e/360*255)},${Math.round(o*255)},${Math.round(l/100*255)})`}}function Z(e){const r=document.querySelectorAll(".aTab");var l=0;r.forEach(o=>{l==e?o.style.display="flex":o.style.display="none",l++})}function q(e){var r=/#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(e),l=parseInt(r[1],16),o=parseInt(r[2],16),t=parseInt(r[3],16);return{r:l,g:o,b:t,rgb:`rgb(${l},${o},${t})`}}function _(){var e=ge("colors");e===""&&(e="[]");var r=e.match(/#[0-9a-f]{6}/gi);X();for(var l=0;l<r.length;l++)P("c",l,r[l]),E=l}function ve(){for(var e,r=0;r<F;r++)e=Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),P("c",r,e);E=F-1,document.getElementById("btSave").style.visibility="visible"}function ue(){for(var e=[],r=document.getElementById("colPalette").getElementsByClassName("inColor"),l=0;l<=E;l++)e.push(r[l].value);var o=JSON.stringify(e);me("colors",o,100)}function me(e,r,l){const o=new Date;o.setTime(o.getTime()+l*24*60*60*1e3);let t="expires="+o.toUTCString();document.cookie=e+"="+r+";"+t}function ge(e){let r=e+"=",l=document.cookie.split(";");for(let o=0;o<l.length;o++){let t=l[o];for(;t.charAt(0)==" ";)t=t.substring(1);if(t.indexOf(r)==0)return t.substring(r.length,t.length)}return""}function he(e,r,l){return`${e.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}`}function A(){var e=parseInt(document.getElementById("inMix2Steps").value),r=parseInt(document.getElementById("inMix2Mode").value),l=document.getElementById("inColorMix1").value,o=document.getElementById("inColorMix2").value,t=document.getElementById("Mix2PaletteContainer");t.querySelectorAll(".paletteColor").forEach(v=>{v.remove()});var i=q(l),c=q(o),d=i.r,a=i.g,s=i.b,m=c.r,f=c.g,g=c.b,x=y(l),M=y(o),S=x.h360,w=x.s100,G=x.l100,z=M.h360,J=M.s100,K=M.l100,ee=(m-d)/e,te=(f-a)/e,re=(g-s)/e,le=(z-S)/e,oe=(J-w)/e,ne=(K-G)/e,p,$,B,L,k,H,T,R,N,O,C,D,V,U;for(let v=0;v<e;v++)v==0?($=d,B=a,L=s,k=S,H=w,T=G):v==e-1?($=m,B=f,L=g,k=z,H=J,T=K):($=d+ee*v,B=a+te*v,L=s+re*v,k=S+le*v,H=w+oe*v,T=G+ne*v),r=="RGB"?(p=`#${he($,B,L)}`,R=$,N=B,O=L,D=y(p).hsl100,V=y(p).hsl255):(C=Y(k,H,T),p=C.rgbCol,R=C.r,N=C.g,O=C.b,D=C.hsl100,V=C.hsl255),U=`<div id="mixTwo${v+2}" class="paletteColor">
    <input class="inColor" type="color" value="${p}" disabled">
    <div class="hexColor">${p}</div>
    <div class="rgbColor">rgb(${R},${N},${O})</div>
    <div class="hslColor100">${D}</div>
    <div class="hslColor255">${V}</div>
  </div>`,Mix2PaletteContainer.innerHTML+=U}function I(){var e=document.querySelector("#mhsl1 input").value,r=parseInt(document.getElementById("inHSLSteps").value),l=parseInt(document.getElementById("inH").value),o=parseInt(document.getElementById("inS").value),t=parseInt(document.getElementById("inL").value),n=y(e),i=n.h360,c=n.s100,d=n.l100,a,s,m=document.getElementById("hslMixPaletteContainer");m.querySelectorAll(".paletteColor").forEach(g=>{g.remove()});for(let g=0;g<r;g++)a=Y(i,c,d),s=`<div id="mhsl${g+2}" class="paletteColor">
    <input class="inColor" type="color" value="${a.rgbCol}" disabled">
    <div class="hexColor">${a.rgbCol}</div>
    <div class="rgbColor">rgb(${a.r},${a.g},${a.b})</div>
    <div class="hslColor100">${a.hsl100}</div>
    <div class="hslColor255">${a.hsl255}</div>
  </div>`,m.innerHTML+=s,i=Math.max(Math.min(i+l<0?360+(i+l):i+l,360),0),c=Math.max(Math.min(c+o,100),0),d=Math.max(Math.min(d+t,100),0)}