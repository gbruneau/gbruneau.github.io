const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};W();var X=202211102335e-4,T="#808080",j=1,V,A=250,v=!1,N,P=!1;for(let e=0;e<A;e++)V=D(`c${j+e}`,T,T.slice(1),!0,!1),document.getElementById("colPalette").innerHTML+=V;for(let e=0;e<A;e++)N=document.querySelector(`#c${j+e} .colTitle`),N.addEventListener("keypress",function(t){t.key==="Enter"&&t.preventDefault(),document.getElementById("btSave").style.visibility="visible"});var Y=function(){var e=this.value,t=this.parentElement.id.substring(1);I("c",t,e,e.slice(1)),document.getElementById("btSave").style.visibility="visible"},R=document.getElementById("colPalette").getElementsByClassName("inColor");for(var k=0;k<R.length;k++)R[k].addEventListener("change",Y);document.getElementById("btReset").addEventListener("click",Q);document.getElementById("btLoad").addEventListener("click",U);document.getElementById("btSave").addEventListener("click",de);document.getElementById("btRandom").addEventListener("click",ce);document.getElementById("btFlipBG").addEventListener("click",ae);document.getElementById("btAbout").addEventListener("click",K);document.getElementById("aboutBox").addEventListener("click",K);document.getElementById("btMix1").addEventListener("click",function(){G(0)});document.getElementById("btMix2").addEventListener("click",function(){G(1)});document.getElementById("btTextTry").addEventListener("click",function(){G(2)});document.getElementById("inColorHslMix").addEventListener("change",C);document.getElementById("inHSLSteps").addEventListener("change",C);document.getElementById("inH").addEventListener("change",C);document.getElementById("inS").addEventListener("change",C);document.getElementById("inL").addEventListener("change",C);document.getElementById("inColorMix1").addEventListener("change",M);document.getElementById("inColorMix2").addEventListener("change",M);document.getElementById("inMix2Steps").addEventListener("change",M);document.getElementById("inColorText1").addEventListener("change",H);document.getElementById("inColorText2").addEventListener("change",H);let S;const Z="ColorPkr",F=indexedDB.open(Z,1);F.onsuccess=e=>{S=e.target.result,U()};F.onupgradeneeded=e=>{S=e.target.result,S.createObjectStore("colors",{keyPath:"id",autoIncrement:!0})};document.getElementById("aboutBoxBuild").innerText=X;J();C();M();H();le();var z;window.dragSrcEl=null;w("input[type=color]");z=document.querySelectorAll("#colPalette input,#inColorHslMix,#inColorMix1,#inColorMix2,#inColorText1,#inColorText2");z.forEach(function(e){e.addEventListener("dragover",re),e.addEventListener("dragenter",ne),e.addEventListener("dragleave",oe),e.addEventListener("drop",_)});function K(){P?document.getElementById("aboutBox").style.display="none":document.getElementById("aboutBox").style.display="block",P=!P}function w(e){var t=document.querySelectorAll(e);t.forEach(function(n){n.addEventListener("dragstart",ee),n.addEventListener("dragend",te)})}function _(e){if(e.stopPropagation(),dragSrcEl!==this){var t=dragSrcEl.parentElement.id.charAt(0)=="c",n=this.parentElement.id.charAt(0)=="c";if(t&&n){var l=dragSrcEl.value,r=dragSrcEl.parentElement.querySelector(".colTitle").innerText,o=this.value,a=this.parentElement.querySelector(".colTitle").innerText;dragSrcEl.value=o,this.value=l;const d=new Event("change");this.dispatchEvent(d),dragSrcEl.dispatchEvent(d),this.parentElement.querySelector(".colTitle").innerText=r,dragSrcEl.parentElement.querySelector(".colTitle").innerText=a}else if(n){var l=dragSrcEl.value;this.value=l;const i=new Event("change");this.dispatchEvent(i)}else if(t){var l=dragSrcEl.value;this.value=l;const i=new Event("change");this.dispatchEvent(i)}else{var l=dragSrcEl.value;this.value=l;const i=new Event("change");this.dispatchEvent(i)}}return!1}function ee(e){this.classList.add("selectedDragSource"),dragSrcEl=this,e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("text/html",this.innerHTML)}function te(e){this.classList.remove("selectedDragSource");var t=document.querySelectorAll("#colPalette input,#inColorHslMix,#inColorMix1,#inColorMix2,#inColorText1,#inColorText2");t.forEach(function(n){n.classList.remove("dragOver")})}function re(e){return e.preventDefault(),!1}function ne(e){this.classList.add("dragOver")}function oe(e){this.classList.remove("dragOver")}function D(e,t,n,l,r){var o=`<div id="${e}" class="paletteColor">
  <input class="inColor" type="color" value="${t}" draggable="true" ${r?"disabled='true'":""}">
  ${l?'<div class="colTitle"   contenteditable="true"   >'+n+"</div>":""} 
  <div class="hexColor">${t}</div>
  <div class="rgbColor">${x(t).rgb}</div>
  <div class="hslColor100">${b(t).hsl100}</div>
  <div class="hslColor255">${b(t).hsl255}</div>
</div>`;return o}function h(e,t,n){var l=document.getElementById(e);l.style.backgroundColor=n,l.style.color=t}function le(){var e=document.querySelectorAll(".textColorBox");for(const t of e)t.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. \u{1FB41}\u{1FB4C}"}function H(){var e=document.getElementById("inColorText1").value,t=document.getElementById("inColorText2").value;h("tb01",e,"black"),h("tb02",t,"black"),h("tb03",e,"white"),h("tb04",t,"white"),h("tb05","black",e),h("tb06","white",e),h("tb07",t,e),h("tb08","black",t),h("tb09","white",t),h("tb10",e,t)}function J(){var e=getComputedStyle(document.documentElement).getPropertyValue("--darkBG"),t=getComputedStyle(document.documentElement).getPropertyValue("--darkColor"),n=getComputedStyle(document.documentElement).getPropertyValue("--darkPannel"),l=getComputedStyle(document.documentElement).getPropertyValue("--darkTitle"),r=getComputedStyle(document.documentElement).getPropertyValue("--lightBG"),o=getComputedStyle(document.documentElement).getPropertyValue("--lightColor"),a=getComputedStyle(document.documentElement).getPropertyValue("--lightPannel"),d=getComputedStyle(document.documentElement).getPropertyValue("--lightTitle");document.body.style.backgroundColor=v?e:r,document.body.style.color=v?t:o,document.getElementById("colorPanel").style.backgroundColor=v?n:a,i=document.querySelectorAll("#colorPanel .paletteColor input"),i.forEach(c=>{c.style.backgroundColor=v?n:a,c.style.borderColor=v?n:a});var i=document.querySelectorAll("#colPalette .paletteColor input");i.forEach(c=>{c.style.backgroundColor=v?e:r,c.style.borderColor=v?e:r});var i=document.querySelectorAll("#colPalette .paletteColor .colTitle");i.forEach(c=>{c.style.color=v?l:d}),document.querySelector("#btFlipBG span").title=v?"Light Mode":"Dark Mode"}function Q(){for(var e=document.getElementById("colPalette").getElementsByClassName("inColor"),t=0;t<e.length;t++)I("c",t+1,T,T.slice(1));document.getElementById("btSave").style.visibility="hidden"}function ae(){v=!v,J()}function I(e,t,n,l){var r=`${e}${t}`,o=document.getElementById(r),a=/[a-f\d]{6}/i.exec(n)[0],d;o.querySelector("input").value="#"+a,o.querySelector(".hexColor").innerText="#"+a,d=o.querySelector(".colTitle"),d&&(d.innerText=l),o.querySelector(".rgbColor").innerText=x(a).rgb,o.querySelector(".hslColor100").innerText=b(a).hsl100,o.querySelector(".hslColor255").innerText=b(a).hsl255}function b(e){var t=/#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(e),n=parseInt(t[1],16),l=parseInt(t[2],16),r=parseInt(t[3],16);n/=255,l/=255,r/=255;var o=Math.max(n,l,r),a=Math.min(n,l,r),d,i,c=(o+a)/2;if(o==a)d=i=0;else{var s=o-a;switch(i=c>.5?s/(2-o-a):s/(o+a),o){case n:d=(l-r)/s+(l<r?6:0);break;case l:d=(r-n)/s+2;break;case r:d=(n-l)/s+4;break}d/=6}var u=parseInt(d*3600)/10,y=parseInt(i*1e3)/10,m=parseInt(c*1e3)/10,L=parseInt(d*255),$=parseInt(y/100*255),B=parseInt(c*255);return{h360:u,s100:y,l100:m,hsl100:`hsl(${u},${y}%,${m}%)`,hsl255:`hsl(${L},${$},${B})`}}function ie(e,t,n){var l=t/100,r=n/100;let o=(1-Math.abs(2*r-1))*l,a=o*(1-Math.abs(e/60%2-1)),d=r-o/2,i=0,c=0,s=0;0<=e&&e<60?(i=o,c=a,s=0):60<=e&&e<120?(i=a,c=o,s=0):120<=e&&e<180?(i=0,c=o,s=a):180<=e&&e<240?(i=0,c=a,s=o):240<=e&&e<300?(i=a,c=0,s=o):300<=e&&e<360&&(i=o,c=0,s=a),i=Math.round((i+d)*255),c=Math.round((c+d)*255),s=Math.round((s+d)*255);var u=`${i.toString(16).padStart(2,"0")}${c.toString(16).padStart(2,"0")}${s.toString(16).padStart(2,"0")}`;return{r:i,g:c,b:s,rgbHex:u,rgbCol:`#${u}`,hsl100:`hsl(${Math.round(e*10)/10},${Math.round(t*10)/10}%,${Math.round(n*10)/10}%)`,hsl255:`hsl(${Math.round(e/360*255)},${Math.round(l*255)},${Math.round(n/100*255)})`}}function G(e){const t=document.querySelectorAll(".aTab");var n=0;t.forEach(r=>{n==e?r.style.display="flex":r.style.display="none",n++});const l=document.querySelectorAll(".btTab");n=0,l.forEach(r=>{n==e?r.classList.add("btTabOn"):r.classList.remove("btTabOn"),n++})}function x(e){var t=/#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(e),n=parseInt(t[1],16),l=parseInt(t[2],16),r=parseInt(t[3],16);return{r:n,g:l,b:r,rgb:`rgb(${n},${l},${r})`}}function U(){Q();var e=S.transaction("colors","readonly"),t=e.objectStore("colors"),n=t.openCursor();n.onsuccess=function(l){var r=l.target.result;r&&(I("c",r.value.id,r.value.hexColor,r.value.title),r.continue())}}function ce(){for(var e,t=0;t<A;t++)e=Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),I("c",t+1,e);document.getElementById("btSave").style.visibility="visible"}function de(){var e,t,n,l=document.getElementById("colPalette").getElementsByClassName("paletteColor");for(var r of l)t=r.querySelector(".colTitle").innerText,n=r.id.slice(1),e=r.querySelector(".inColor").value,ue(n,e,t);document.getElementById("btSave").style.visibility="hidden"}function se(e,t,n){return`${e.toString(16).padStart(2,"0")}${t.toString(16).padStart(2,"0")}${n.toString(16).padStart(2,"0")}`}function M(){var e=parseInt(document.getElementById("inMix2Steps").value),t=document.getElementById("inColorMix1").value,n=document.getElementById("inColorMix2").value,l=document.getElementById("Mix2PaletteContainer");l.querySelectorAll(".paletteColor").forEach(g=>{g.remove()});var o=x(t),a=x(n),d=o.r,i=o.g,c=o.b,s=a.r,u=a.g,y=a.b,m=(s-d)/(e-1),L=(u-i)/(e-1),$=(y-c)/(e-1),B,f,E,p,O;q("mixC1",t),q("mixC2",n);for(let g=0;g<e;g++)g==0?(f=d,E=i,p=c):g==e-1?(f=s,E=u,p=y):(f=d+m*g,E=i+L*g,p=c+$*g),f=Math.round(f),E=Math.round(E),p=Math.round(p),B=`#${se(f,E,p)}`,O=D(`mixTwo${g+2}`,B,null,!1,!0),Mix2PaletteContainer.innerHTML+=O;w("#Mix2PaletteContainer input[type=color]")}function q(e,t){document.querySelector(`#${e} .hexColor`).innerText=`${t}`;var n=x(t);document.querySelector(`#${e} .rgbColor`).innerText=`${n.rgb}`;var l=b(t);document.querySelector(`#${e} .hslColor100`).innerText=`${l.hsl100}`,document.querySelector(`#${e} .hslColor255`).innerText=`${l.hsl255}`}function C(){var e=document.querySelector("#mhsl1 input").value,t=Math.max(parseInt(document.getElementById("inHSLSteps").value),2),n=parseInt(document.getElementById("inH").value),l=parseInt(document.getElementById("inS").value),r=parseInt(document.getElementById("inL").value),o=b(e),a=o.h360,d=o.s100,i=o.l100,c,s,u=document.getElementById("hslMixPaletteContainer");u.querySelectorAll(".paletteColor").forEach(m=>{m.remove()}),q("mhsl1",e);for(let m=0;m<t;m++)c=ie(a,d,i),s=D(`mhsl${m+2}`,c.rgbCol,null,!1,!0),u.innerHTML+=s,a=Math.max(Math.min(a+n<0?360+(a+n):a+n,360),0),d=Math.max(Math.min(d+l,100),0),i=Math.max(Math.min(i+r,100),0);w("#hslMixPaletteContainer input[type=color]")}function ue(e,t,n=""){const r=S.transaction("colors","readwrite").objectStore("colors").put({hexColor:t,title:n.trim()==""?t:n,id:e});r.onsuccess=function(o){return r.result},r.onerror=function(o){return null}}
