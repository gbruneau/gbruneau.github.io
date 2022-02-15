import{$ as n,c as H}from"./vendor.0b0a44e2.js";const P=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}};P();const Z=[{name:"Rez-de-chauss\xE9e",file:"rez-de-chausse.png"},{name:"Sous-Sol",file:"sous-sol.png"},{name:"Entre-toit",file:"entre-toit.png"}];var D={planimages:Z};/*!
	Wheelzoom 4.0.1
	license: MIT
	http://www.jacklmoore.com/wheelzoom
*/window.wheelzoom=function(){var l={zoom:.1,maxZoom:!1,initialZoom:1,initialX:.5,initialY:.5},s=function(e,r){if(!e||!e.nodeName||e.nodeName!=="IMG")return;var t={},a,c,i,d,u,f,v,g;function $(o){o.style.backgroundRepeat="no-repeat",o.style.backgroundImage='url("'+o.src+'")',g="data:image/svg+xml;base64,"+window.btoa('<svg xmlns="http://www.w3.org/2000/svg" width="'+o.naturalWidth+'" height="'+o.naturalHeight+'"></svg>'),o.src=g}function m(){u>0?u=0:u<a-i&&(u=a-i),f>0?f=0:f<c-d&&(f=c-d),e.style.backgroundSize=i+"px "+d+"px",e.style.backgroundPosition=u+"px "+f+"px"}function b(){i=a,d=c,u=f=0,m()}function k(o){var p=0;o.preventDefault(),o.deltaY?p=o.deltaY:o.wheelDelta&&(p=-o.wheelDelta);var S=e.getBoundingClientRect(),C=o.pageX-S.left-window.pageXOffset,z=o.pageY-S.top-window.pageYOffset,O=C-u,X=z-f,N=O/i,T=X/d;p<0?(i+=i*t.zoom,d+=d*t.zoom):(i-=i*t.zoom,d-=d*t.zoom),t.maxZoom&&(i=Math.min(a*t.maxZoom,i),d=Math.min(c*t.maxZoom,d)),u=C-i*N,f=z-d*T,i<=a||d<=c?b():m()}function w(o){o.preventDefault(),u+=o.pageX-v.pageX,f+=o.pageY-v.pageY,v=o,m()}function y(){document.removeEventListener("mouseup",y),document.removeEventListener("mousemove",w)}function x(o){o.preventDefault(),v=o,document.addEventListener("mousemove",w),document.addEventListener("mouseup",y)}function L(){var o=Math.max(t.initialZoom,1);if(e.src!==g){var p=window.getComputedStyle(e,null);a=parseInt(p.width,10),c=parseInt(p.height,10),i=a*o,d=c*o,u=-(i-a)*t.initialX,f=-(d-c)*t.initialY,$(e),e.style.backgroundSize=i+"px "+d+"px",e.style.backgroundPosition=u+"px "+f+"px",e.addEventListener("wheelzoom.reset",b),e.addEventListener("wheel",k),e.addEventListener("mousedown",x)}}var I=function(o){e.removeEventListener("wheelzoom.destroy",I),e.removeEventListener("wheelzoom.reset",b),e.removeEventListener("load",L),e.removeEventListener("mouseup",y),e.removeEventListener("mousemove",w),e.removeEventListener("mousedown",x),e.removeEventListener("wheel",k),e.style.backgroundImage=o.backgroundImage,e.style.backgroundRepeat=o.backgroundRepeat,e.src=o.src}.bind(null,{backgroundImage:e.style.backgroundImage,backgroundRepeat:e.style.backgroundRepeat,src:e.src});e.addEventListener("wheelzoom.destroy",I),r=r||{},Object.keys(l).forEach(function(o){t[o]=r[o]!==void 0?r[o]:l[o]}),e.complete&&L(),e.addEventListener("load",L)};return typeof window.btoa!="function"?function(e){return e}:function(e,r){return e&&e.length?Array.prototype.forEach.call(e,function(t){s(t,r)}):e&&e.nodeName&&s(e,r),e}}();n.each(D.planimages,function(l,s){var e="<div id='floor-"+l+"' class='btfl' data-floor='"+l+"'>"+s.name+"</div>";n("#floortabs").append(e)});var j="R\xE9f\xE9rencePlan.csv",E;n.get(j,function(l,s){H.toObjects(l,{},function(e,r){e&&console.log(e);for(var t=0,a=r.length;t<a;t++)r[t].searchStr=r[t].ID+" "+r[t].Lieu+" "+r[t].Circuit+" "+r[t].Type+" "+r[t].Commentaire;E=r})});function R(l){n(".btfl").removeClass("selectedfloor"),n("[data-floor='"+l+"']").addClass("selectedfloor"),n("#selfloorimg").prop("src",D.planimages[l].file)}n(".btfl").on("click",function(){var l=n(this).data("floor");R(l)});wheelzoom(document.querySelectorAll("#selfloorimg"));function h(l){n("[data-page]").fadeOut(),n("[data-page="+l+"]").fadeIn()}n("[data-page=2] .backbt").on("click",function(){h(1)});function Y(){var l=n("#searchStr").val().replace(" ",".+?"),s=new RegExp(l,"iu");if(l.length>=1){var e=`
    <table class="resultTable" border="1" cellpadding="1" cellspacing="0">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">&Eacute;tage</th>
          <th scope="col">Circuit</th>
          <th scope="col">Lieu</th>
          <th scope="col">Ref.</th>
        </tr>
      </thead>
      <tbody>`,r=`
      </tbody>
    </table>
    `,t=e;n.each(E,function(a,c){s.test(c.searchStr)&&(t+=`
         <tr>
            <td class="obHighlight">${c.ID}</td>
            <td>${c.Niveau}</td>
            <td class="obHighlight">${c.Circuit}</td>
            <td>${c.Lieu}</td>
            <td class="refElem">${c.Li\u00E9}</td>
         </tr>`)}),t+=r,n("#mainpg").fadeOut(),n("#searchdlg").fadeIn(),n("#searchresult").empty(),n("#searchresult").append(t),n(".resultTable tr").on("click",function(){var a=this.children[0].textContent;A(a),h(3)})}}n("#searchinput img").on("click",Y);n("#searchStr").on("change",Y);function A(l){n("#detailView").empty();var s=E.filter(r=>r.ID==l)[0],e=`
          <table class="detailTable" border="1" cellpadding="1" cellspacing="1" style="width:500px">
          <tbody>
            <tr>
              <th scope="row">ID</th>
              <td  class="obHighlight">${s.ID}</td>
            </tr>
            <tr>
            <th scope="row">Type</th>
            <td>${s.Type}</td>
          </tr>
            <tr>
            <th scope="row">Circuit</th>
            <td class="obHighlight">${s.Circuit}</td>
          </tr>

          <tr>
          <th scope="row">\xC9l\xE9ments Li\xE9s</th>
          <td class="refElem">${s.Li\u00E9}</td>
        </tr>


            <tr>
              <th scope="row">Niveau</th>
              <td>${s.Niveau}</td>
            </tr>
            <tr>
              <th scope="row">Lieu</th>
              <td>${s.Lieu}</td>
            </tr>

            <tr>
              <th scope="row">Commentaire</th>
              <td>${s.Commentaire}</td>
            </tr>
          </tbody>
        </table>
  `;n("#detailView").append(e),n(".refElem").on("click",function(){var r=this.textContent;r!=""&&(n("#searchStr").val(r),h(1))})}n("[data-page=3] .backbt").on("click",function(){h(2)});h(1);R(0);
