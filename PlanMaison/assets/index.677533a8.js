import{$ as o,c as N}from"./vendor.0b0a44e2.js";const Z=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}};Z();const H=[{name:"Rez-de-chauss\xE9e",file:"rez-de-chausse.png"},{name:"Sous-Sol",file:"sous-sol.png"},{name:"Entre-toit",file:"entre-toit.png"}];var z={planimages:H};/*!
	Wheelzoom 4.0.1
	license: MIT
	http://www.jacklmoore.com/wheelzoom
*/window.wheelzoom=function(){var c={zoom:.1,maxZoom:!1,initialZoom:1,initialX:.5,initialY:.5},d=function(e,s){if(!e||!e.nodeName||e.nodeName!=="IMG")return;var t={},n,a,l,i,u,f,p,v;function Y(r){r.style.backgroundRepeat="no-repeat",r.style.backgroundImage='url("'+r.src+'")',v="data:image/svg+xml;base64,"+window.btoa('<svg xmlns="http://www.w3.org/2000/svg" width="'+r.naturalWidth+'" height="'+r.naturalHeight+'"></svg>'),r.src=v}function g(){u>0?u=0:u<n-l&&(u=n-l),f>0?f=0:f<a-i&&(f=a-i),e.style.backgroundSize=l+"px "+i+"px",e.style.backgroundPosition=u+"px "+f+"px"}function m(){l=n,i=a,u=f=0,g()}function E(r){var h=0;r.preventDefault(),r.deltaY?h=r.deltaY:r.wheelDelta&&(h=-r.wheelDelta);var k=e.getBoundingClientRect(),C=r.pageX-k.left-window.pageXOffset,I=r.pageY-k.top-window.pageYOffset,D=C-u,$=I-f,O=D/l,X=$/i;h<0?(l+=l*t.zoom,i+=i*t.zoom):(l-=l*t.zoom,i-=i*t.zoom),t.maxZoom&&(l=Math.min(n*t.maxZoom,l),i=Math.min(a*t.maxZoom,i)),u=C-l*O,f=I-i*X,l<=n||i<=a?m():g()}function b(r){r.preventDefault(),u+=r.pageX-p.pageX,f+=r.pageY-p.pageY,p=r,g()}function w(){document.removeEventListener("mouseup",w),document.removeEventListener("mousemove",b)}function x(r){r.preventDefault(),p=r,document.addEventListener("mousemove",b),document.addEventListener("mouseup",w)}function y(){var r=Math.max(t.initialZoom,1);if(e.src!==v){var h=window.getComputedStyle(e,null);n=parseInt(h.width,10),a=parseInt(h.height,10),l=n*r,i=a*r,u=-(l-n)*t.initialX,f=-(i-a)*t.initialY,Y(e),e.style.backgroundSize=l+"px "+i+"px",e.style.backgroundPosition=u+"px "+f+"px",e.addEventListener("wheelzoom.reset",m),e.addEventListener("wheel",E),e.addEventListener("mousedown",x)}}var S=function(r){e.removeEventListener("wheelzoom.destroy",S),e.removeEventListener("wheelzoom.reset",m),e.removeEventListener("load",y),e.removeEventListener("mouseup",w),e.removeEventListener("mousemove",b),e.removeEventListener("mousedown",x),e.removeEventListener("wheel",E),e.style.backgroundImage=r.backgroundImage,e.style.backgroundRepeat=r.backgroundRepeat,e.src=r.src}.bind(null,{backgroundImage:e.style.backgroundImage,backgroundRepeat:e.style.backgroundRepeat,src:e.src});e.addEventListener("wheelzoom.destroy",S),s=s||{},Object.keys(c).forEach(function(r){t[r]=s[r]!==void 0?s[r]:c[r]}),e.complete&&y(),e.addEventListener("load",y)};return typeof window.btoa!="function"?function(e){return e}:function(e,s){return e&&e.length?Array.prototype.forEach.call(e,function(t){d(t,s)}):e&&e.nodeName&&d(e,s),e}}();o("#app").append("Hello world");o.each(z.planimages,function(c,d){var e="<div id='floor-"+c+"' class='btfl' data-floor='"+c+"'>"+d.name+"</div>";o("#floortabs").append(e)});var P="R\xE9f\xE9rencePlan.csv",L;o.get(P,function(c,d){N.toObjects(c,{},function(e,s){e&&console.log(e);for(var t=0,n=s.length;t<n;t++)s[t].searchStr=s[t].ID+" "+s[t].Lieu+" "+s[t].Circuit+" "+s[t].Commentaire;L=s})});function R(c){o(".btfl").removeClass("selectedfloor"),o("[data-floor='"+c+"']").addClass("selectedfloor"),o("#selfloorimg").prop("src",z.planimages[c].file)}o("#searchdlg").hide();R(0);o(".btfl").on("click",function(){var c=o(this).data("floor");R(c)});wheelzoom(document.querySelectorAll("#selfloorimg"));o("#btsearch").on("click",function(){mainpg,o("#mainpg").fadeOut(),o("#searchdlg").fadeIn(),o("#searchStr").trigger("focus")});o(".backbt").on("click",function(){mainpg,o(this).parent().fadeOut(),o("#mainpg").fadeIn()});function j(){var c=o("#searchStr").val().replace(" ",".+?"),d=new RegExp(c,"iu");if(c.length>=1){var e=`<table class="searchresult" border="1" cellpadding="1" cellspacing="0">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">&Eacute;tage</th>
        <th scope="col">Circuit</th>
        <th scope="col">Lieu</th>
        <th scope="col">Commentaire</th>
      </tr>
    </thead>
    <tbody>`,s=`
    </tbody>
    </table>
    `,t=e;o.each(L,function(n,a){d.test(a.searchStr)&&(t+=`
         <tr>
         <td>${a.ID}</td>
         <td>${a.Niveau}</td>
         <td class="obCircuit">${a.Circuit}</td>
         <td>${a.Lieu}</td>
         <td>${a.Commentaire}</td>
       </tr>`)}),t+=s,o("#searchresult").empty(),o("#searchresult").append(t)}else o("#searchresult").empty()}o("#searchinput img").on("click",j());o("#searchStr").on("change",function(){var c=o("#searchStr").val().replace(" ",".+?"),d=new RegExp(c,"iu");if(c.length>=1){var e=`<table class="searchresult" border="1" cellpadding="1" cellspacing="0">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">&Eacute;tage</th>
        <th scope="col">Circuit</th>
        <th scope="col">Lieu</th>
        <th scope="col">Commentaire</th>
      </tr>
    </thead>
    <tbody>`,s=`
    </tbody>
    </table>
    `,t=e;o.each(L,function(n,a){d.test(a.searchStr)&&(t+=`
         <tr>
         <td class="obHighlight">${a.ID}</td>
         <td>${a.Niveau}</td>
         <td class="obHighlight">${a.Circuit}</td>
         <td>${a.Lieu}</td>
         <td>${a.Commentaire}</td>
       </tr>`)}),t+=s,o("#searchresult").empty(),o("#searchresult").append(t)}else o("#searchresult").empty()});
