const ie=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}};ie();var se=202209231523e-4,p="#808080",de=0,Q,E=0,F=120,h=!1;document.getElementById("colPalette").title=`build ${se}`;for(let e=0;e<F;e++)Q=`<div id="c${de+e}" class="paletteColor">
      <input class="inColor" type="color" value="${p}" >
      <div class="hexColor">${p}</div>
      <div class="rgbColor">${P(p).rgb}</div>
      <div class="hslColor100">${y(p).hsl100}</div>
      <div class="hslColor255">${y(p).hsl255}</div>
  </div>`,document.getElementById("colPalette").innerHTML+=Q;var ce=function(){var e=this.value,r=this.parentElement.id.substring(1);A("c",r,e),E=Math.max(E,r),document.getElementById("btSave").style.visibility="visible"},W=document.getElementById("colPalette").getElementsByClassName("inColor");for(var v=0;v<W.length;v++)W[v].addEventListener("change",ce);document.getElementById("btReset").addEventListener("click",Y);document.getElementById("btLoad").addEventListener("click",ee);document.getElementById("btSave").addEventListener("click",me);document.getElementById("btRandom").addEventListener("click",ve);document.getElementById("btFlipBG").addEventListener("click",ue);document.getElementById("btMix1").addEventListener("click",function(){_(0)});document.getElementById("btMix2").addEventListener("click",function(){_(1)});document.getElementById("inColorHslMix").addEventListener("change",x);document.getElementById("inHSLSteps").addEventListener("change",x);document.getElementById("inH").addEventListener("change",x);document.getElementById("inS").addEventListener("change",x);document.getElementById("inL").addEventListener("change",x);document.getElementById("inColorMix1").addEventListener("change",k);document.getElementById("inColorMix2").addEventListener("change",k);document.getElementById("inMix2Steps").addEventListener("change",k);document.getElementById("inMix2Mode").addEventListener("change",k);X();ee();x();k();function X(){var e=getComputedStyle(document.documentElement).getPropertyValue("--darkColor"),r=getComputedStyle(document.documentElement).getPropertyValue("--lightColor"),l=getComputedStyle(document.documentElement).getPropertyValue("--darkPannel"),o=getComputedStyle(document.documentElement).getPropertyValue("--lightPannel");document.body.style.backgroundColor=h?e:r,document.body.style.color=h?r:e;var t=document.querySelectorAll("#colPalette .paletteColor input");for(v=0;v<t.length;v++)t[v].style.backgroundColor=h?e:r,t[v].style.borderColor=h?e:r;for(t=document.querySelectorAll("#colorPanel .paletteColor input"),v=0;v<t.length;v++)t[v].style.backgroundColor=h?l:o,t[v].style.borderColor=h?l:o;document.querySelector("#btFlipBG span").title=h?"Light Mode":"Dark Mode",document.getElementById("colorPanel").style.backgroundColor=h?l:o}function Y(){for(var e=document.getElementById("colPalette").getElementsByClassName("inColor"),r=0;r<e.length;r++)A("c",r,p),E=0;document.getElementById("btSave").style.visibility="hidden"}function ue(){h=!h,X()}function A(e,r,l){var o=`${e}${r}`,t=document.getElementById(o),n=/[a-f\d]{6}/i.exec(l)[0];t.querySelector("input").value="#"+n,t.querySelector(".hexColor").innerText="#"+n,t.querySelector(".rgbColor").innerText=P(n).rgb,t.querySelector(".hslColor100").innerText=y(n).hsl100,t.querySelector(".hslColor255").innerText=y(n).hsl255}function y(e){var r=/#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(e),l=parseInt(r[1],16),o=parseInt(r[2],16),t=parseInt(r[3],16);l/=255,o/=255,t/=255;var n=Math.max(l,o,t),i=Math.min(l,o,t),c,d,a=(n+i)/2;if(n==i)c=d=0;else{var s=n-i;switch(d=a>.5?s/(2-n-i):s/(n+i),n){case l:c=(o-t)/s+(o<t?6:0);break;case o:c=(t-l)/s+2;break;case t:c=(l-o)/s+4;break}c/=6}var m=parseInt(c*3600)/10,f=parseInt(d*1e3)/10,g=parseInt(a*1e3)/10,S=parseInt(c*255),$=parseInt(f/100*255),I=parseInt(a*255);return{h360:m,s100:f,l100:g,hsl100:`hsl(${m},${f}%,${g}%)`,hsl255:`hsl(${S},${$},${I})`}}function Z(e,r,l){var o=r/100,t=l/100;let n=(1-Math.abs(2*t-1))*o,i=n*(1-Math.abs(e/60%2-1)),c=t-n/2,d=0,a=0,s=0;0<=e&&e<60?(d=n,a=i,s=0):60<=e&&e<120?(d=i,a=n,s=0):120<=e&&e<180?(d=0,a=n,s=i):180<=e&&e<240?(d=0,a=i,s=n):240<=e&&e<300?(d=i,a=0,s=n):300<=e&&e<360&&(d=n,a=0,s=i),d=Math.round((d+c)*255),a=Math.round((a+c)*255),s=Math.round((s+c)*255);var m=`${d.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}${s.toString(16).padStart(2,"0")}`;return{r:d,g:a,b:s,rgbHex:m,rgbCol:`#${m}`,hsl100:`hsl(${Math.round(e*10)/10},${Math.round(r*10)/10}%,${Math.round(l*10)/10}%)`,hsl255:`hsl(${Math.round(e/360*255)},${Math.round(o*255)},${Math.round(l/100*255)})`}}function _(e){const r=document.querySelectorAll(".aTab");var l=0;r.forEach(o=>{l==e?o.style.display="flex":o.style.display="none",l++})}function P(e){var r=/#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(e),l=parseInt(r[1],16),o=parseInt(r[2],16),t=parseInt(r[3],16);return{r:l,g:o,b:t,rgb:`rgb(${l},${o},${t})`}}function ee(){var e=he("colors");e===""&&(e="[]");var r=e.match(/#[0-9a-f]{6}/gi);Y();for(var l=0;l<r.length;l++)A("c",l,r[l]),E=l}function ve(){for(var e,r=0;r<F;r++)e=Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),A("c",r,e);E=F-1,document.getElementById("btSave").style.visibility="visible"}function me(){for(var e=[],r=document.getElementById("colPalette").getElementsByClassName("inColor"),l=0;l<=E;l++)e.push(r[l].value);var o=JSON.stringify(e);ge("colors",o,100)}function ge(e,r,l){const o=new Date;o.setTime(o.getTime()+l*24*60*60*1e3);let t="expires="+o.toUTCString();document.cookie=e+"="+r+";"+t}function he(e){let r=e+"=",l=document.cookie.split(";");for(let o=0;o<l.length;o++){let t=l[o];for(;t.charAt(0)==" ";)t=t.substring(1);if(t.indexOf(r)==0)return t.substring(r.length,t.length)}return""}function ye(e,r,l){return`${e.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}`}function k(){var e=parseInt(document.getElementById("inMix2Steps").value),r=parseInt(document.getElementById("inMix2Mode").value),l=document.getElementById("inColorMix1").value,o=document.getElementById("inColorMix2").value,t=document.getElementById("Mix2PaletteContainer");t.querySelectorAll(".paletteColor").forEach(u=>{u.remove()});var i=P(l),c=P(o),d=i.r,a=i.g,s=i.b,m=c.r,f=c.g,g=c.b,S=y(l),$=y(o),I=S.h360,G=S.s100,w=S.l100,J=$.h360,K=$.s100,U=$.l100,te=(m-d)/(e-1),re=(f-a)/(e-1),le=(g-s)/(e-1),oe=(J-I)/(e-1),ne=(K-G)/(e-1),ae=(U-w)/(e-1),b,M,B,L,T,H,q,R,N,O,C,V,D,j;z("mixC1",l),z("mixC2",o);for(let u=0;u<e;u++)u==0?(M=d,B=a,L=s,T=I,H=G,q=w):u==e-1?(M=m,B=f,L=g,T=J,H=K,q=U):(M=d+te*u,B=a+re*u,L=s+le*u,T=I+oe*u,H=G+ne*u,q=w+ae*u),r=="RGB"?(b=`#${ye(M,B,L)}`,R=M,N=B,O=L,V=y(b).hsl100,D=y(b).hsl255):(C=Z(T,H,q),b=C.rgbCol,R=C.r,N=C.g,O=C.b,V=C.hsl100,D=C.hsl255),j=`<div id="mixTwo${u+2}" class="paletteColor">
    <input class="inColor" type="color" value="${b}" disabled">
    <div class="hexColor">${b}</div>
    <div class="rgbColor">rgb(${R},${N},${O})</div>
    <div class="hslColor100">${V}</div>
    <div class="hslColor255">${D}</div>
  </div>`,Mix2PaletteContainer.innerHTML+=j}function z(e,r){document.querySelector(`#${e} .hexColor`).innerText=`${r}`;var l=P(r);document.querySelector(`#${e} .rgbColor`).innerText=`${l.rgb}`;var o=y(r);document.querySelector(`#${e} .hslColor100`).innerText=`${o.hsl100}`,document.querySelector(`#${e} .hslColor255`).innerText=`${o.hsl255}`}function x(){var e=document.querySelector("#mhsl1 input").value,r=parseInt(document.getElementById("inHSLSteps").value),l=parseInt(document.getElementById("inH").value),o=parseInt(document.getElementById("inS").value),t=parseInt(document.getElementById("inL").value),n=y(e),i=n.h360,c=n.s100,d=n.l100,a,s,m=document.getElementById("hslMixPaletteContainer");m.querySelectorAll(".paletteColor").forEach(g=>{g.remove()}),z("mhsl1",e);for(let g=0;g<r;g++)a=Z(i,c,d),s=`<div id="mhsl${g+2}" class="paletteColor">
    <input class="inColor" type="color" value="${a.rgbCol}" disabled">
    <div class="hexColor">${a.rgbCol}</div>
    <div class="rgbColor">rgb(${a.r},${a.g},${a.b})</div>
    <div class="hslColor100">${a.hsl100}</div>
    <div class="hslColor255">${a.hsl255}</div>
  </div>`,m.innerHTML+=s,i=Math.max(Math.min(i+l<0?360+(i+l):i+l,360),0),c=Math.max(Math.min(c+o,100),0),d=Math.max(Math.min(d+t,100),0)}
