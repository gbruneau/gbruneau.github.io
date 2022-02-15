import{$ as n,c as Z}from"./vendor.0b0a44e2.js";const H=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}};H();const P=[{name:"Rez-de-chauss\xE9e",file:"rez-de-chausse.png"},{name:"Sous-Sol",file:"sous-sol.png"},{name:"Entre-toit",file:"entre-toit.png"}];var I={planimages:P};/*!
	Wheelzoom 4.0.1
	license: MIT
	http://www.jacklmoore.com/wheelzoom
*/window.wheelzoom=function(){var s={zoom:.1,maxZoom:!1,initialZoom:1,initialX:.5,initialY:.5},d=function(e,a){if(!e||!e.nodeName||e.nodeName!=="IMG")return;var t={},r,l,c,i,u,f,h,v;function O(o){o.style.backgroundRepeat="no-repeat",o.style.backgroundImage='url("'+o.src+'")',v="data:image/svg+xml;base64,"+window.btoa('<svg xmlns="http://www.w3.org/2000/svg" width="'+o.naturalWidth+'" height="'+o.naturalHeight+'"></svg>'),o.src=v}function g(){u>0?u=0:u<r-c&&(u=r-c),f>0?f=0:f<l-i&&(f=l-i),e.style.backgroundSize=c+"px "+i+"px",e.style.backgroundPosition=u+"px "+f+"px"}function m(){c=r,i=l,u=f=0,g()}function L(o){var p=0;o.preventDefault(),o.deltaY?p=o.deltaY:o.wheelDelta&&(p=-o.wheelDelta);var x=e.getBoundingClientRect(),S=o.pageX-x.left-window.pageXOffset,z=o.pageY-x.top-window.pageYOffset,X=S-u,D=z-f,N=X/c,$=D/i;p<0?(c+=c*t.zoom,i+=i*t.zoom):(c-=c*t.zoom,i-=i*t.zoom),t.maxZoom&&(c=Math.min(r*t.maxZoom,c),i=Math.min(l*t.maxZoom,i)),u=S-c*N,f=z-i*$,c<=r||i<=l?m():g()}function b(o){o.preventDefault(),u+=o.pageX-h.pageX,f+=o.pageY-h.pageY,h=o,g()}function w(){document.removeEventListener("mouseup",w),document.removeEventListener("mousemove",b)}function E(o){o.preventDefault(),h=o,document.addEventListener("mousemove",b),document.addEventListener("mouseup",w)}function y(){var o=Math.max(t.initialZoom,1);if(e.src!==v){var p=window.getComputedStyle(e,null);r=parseInt(p.width,10),l=parseInt(p.height,10),c=r*o,i=l*o,u=-(c-r)*t.initialX,f=-(i-l)*t.initialY,O(e),e.style.backgroundSize=c+"px "+i+"px",e.style.backgroundPosition=u+"px "+f+"px",e.addEventListener("wheelzoom.reset",m),e.addEventListener("wheel",L),e.addEventListener("mousedown",E)}}var k=function(o){e.removeEventListener("wheelzoom.destroy",k),e.removeEventListener("wheelzoom.reset",m),e.removeEventListener("load",y),e.removeEventListener("mouseup",w),e.removeEventListener("mousemove",b),e.removeEventListener("mousedown",E),e.removeEventListener("wheel",L),e.style.backgroundImage=o.backgroundImage,e.style.backgroundRepeat=o.backgroundRepeat,e.src=o.src}.bind(null,{backgroundImage:e.style.backgroundImage,backgroundRepeat:e.style.backgroundRepeat,src:e.src});e.addEventListener("wheelzoom.destroy",k),a=a||{},Object.keys(s).forEach(function(o){t[o]=a[o]!==void 0?a[o]:s[o]}),e.complete&&y(),e.addEventListener("load",y)};return typeof window.btoa!="function"?function(e){return e}:function(e,a){return e&&e.length?Array.prototype.forEach.call(e,function(t){d(t,a)}):e&&e.nodeName&&d(e,a),e}}();n("#app").append("Hello world");n.each(I.planimages,function(s,d){var e="<div id='floor-"+s+"' class='btfl' data-floor='"+s+"'>"+d.name+"</div>";n("#floortabs").append(e)});var B="R\xE9f\xE9rencePlan.csv",R;n.get(B,function(s,d){Z.toObjects(s,{},function(e,a){e&&console.log(e);for(var t=0,r=a.length;t<r;t++)a[t].searchStr=a[t].ID+" "+a[t].Lieu+" "+a[t].Circuit+" "+a[t].Commentaire;R=a})});function Y(s){n(".btfl").removeClass("selectedfloor"),n("[data-floor='"+s+"']").addClass("selectedfloor"),n("#selfloorimg").prop("src",I.planimages[s].file)}n(".btfl").on("click",function(){var s=n(this).data("floor");Y(s)});wheelzoom(document.querySelectorAll("#selfloorimg"));n(".backbt").on("click",function(){mainpg,n(this).parent().fadeOut(),n("#mainpg").fadeIn()});function C(){var s=n("#searchStr").val().replace(" ",".+?"),d=new RegExp(s,"iu");if(console.log("GB: 10"),s.length>=1){var e=`<table class="searchresult" border="1" cellpadding="1" cellspacing="0">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">&Eacute;tage</th>
        <th scope="col">Circuit</th>
        <th scope="col">Lieu</th>
        <th scope="col">Ref.</th>
        <th scope="col">Commentaire</th>
      </tr>
    </thead>
    <tbody>`,a=`
    </tbody>
    </table>
    `,t=e;n.each(R,function(r,l){d.test(l.searchStr)&&(t+=`
         <tr>
         <td class="obHighlight">${l.ID}</td>
         <td>${l.Niveau}</td>
         <td class="obHighlight">${l.Circuit}</td>
         <td>${l.Lieu}</td>
         <td>${l.Li\u00E9}</td>
         <td>${l.Commentaire}</td>
       </tr>`)}),t+=a,n("#mainpg").fadeOut(),n("#searchdlg").fadeIn(),n("#searchresult").empty(),n("#searchresult").append(t)}}n("#searchinput img").on("click",C);n("#searchStr").on("change",C);n("#searchdlg").hide();Y(0);
