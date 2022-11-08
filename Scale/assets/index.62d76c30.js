var A=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var b=(i,e,t)=>(A(i,e,"read from private field"),t?t.call(i):e.get(i)),m=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},p=(i,e,t,n)=>(A(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t);import{$ as c}from"./vendor.62917bef.js";const D=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(l){if(l.ep)return;l.ep=!0;const r=t(l);fetch(l.href,r)}};D();function x(i,e){var t;i.addEventListener("input",function(s){var a,u,h,L=this.value;if(r(),!L)return!1;for(t=-1,a=document.createElement("DIV"),a.setAttribute("id",this.id+"autocomplete-list"),a.setAttribute("class","autocomplete-items"),this.parentNode.appendChild(a),h=0;h<e.length;h++){var j=e[h].toUpperCase().indexOf(L.toUpperCase());if(j!=-1){u=document.createElement("DIV");var z=new RegExp(L,"i");u.innerHTML=e[h].replace(z,"<strong>"+L+"</strong>"),u.innerHTML+='<input type="hidden" value="'+e[h]+'">',u.addEventListener("click",function(E){i.value=this.getElementsByTagName("input")[0].value,r();let d=new Event("change");i.dispatchEvent(d)}),a.appendChild(u)}}}),i.addEventListener("keydown",function(s){var a=document.getElementById(this.id+"autocomplete-list");a&&(a=a.getElementsByTagName("div")),s.keyCode==40?(t++,n(a)):s.keyCode==38?(t--,n(a)):s.keyCode==13&&(s.preventDefault(),t>-1&&a&&a[t].click())});function n(s){if(!s)return!1;l(s),t>=s.length&&(t=0),t<0&&(t=s.length-1),s[t].classList.add("autocomplete-active")}function l(s){for(var a=0;a<s.length;a++)s[a].classList.remove("autocomplete-active")}function r(s){for(var a=document.getElementsByClassName("autocomplete-items"),u=0;u<a.length;u++)s!=a[u]&&s!=i&&a[u].parentNode.removeChild(a[u])}document.addEventListener("click",function(s){r(s.target)})}var S;class F{constructor(e){m(this,S,void 0);p(this,S,new Map(e))}addLang(e,t){b(this,S).set(e,t)}Label(e){return b(this,S).get(e)}}S=new WeakMap;var U,O;class J{constructor(e){m(this,U,"FR");m(this,O,void 0);this.SupportedLanguages=[],p(this,O,new Map);for(var t=0;t<e.length;t++)this.SupportedLanguages.push(e[t].toUpperCase());this.SupportedLanguages.length>0&&p(this,U,this.SupportedLanguages[0]),this.CurLang=this.UserLang}get UserLang(){for(var e=navigator.language.split("-")[0].toUpperCase(),t=b(this,U),n=0;n<this.SupportedLanguages.length;n++)this.SupportedLanguages[n]==e&&(t=e);return t}setCurlang(e){this.CurLang=e}addLabel(e,t){b(this,O).set(e,t)}getLabel(e){var t=b(this,O).get(e);if(t!=null){let n=t.Label(this.CurLang);return n==null&&(n=t.Label(b(this,U))),n}}}U=new WeakMap,O=new WeakMap;class V{constructor(e,t){this.UnitSymbol=t,this.SizeInMeter=e}getUnitSymbol(e){return this.UnitSymbol.Label(e)}}class G{constructor(){this.UnitList=[]}addUnit(e,t){let n=new V(e,t);this.UnitList.push(n)}getBestUnit(e){for(var t=this.UnitList[0],n=0;n<this.UnitList.length;n++)Math.log10(this.UnitList[n].SizeInMeter)<=Math.log10(e)&&(t=this.UnitList[n]);return t}sortBySize(){this.UnitList.sort(function(e,t){return e.SizeInMeter<t.SizeInMeter?-1:e.SizeInMeter>t.SizeInMeter?1:0})}}var y,N;class K{constructor(e,t){m(this,y,void 0);m(this,N,void 0);var n=new F([["FR",e.ObjectFr],["EN",e.ObjectEn]]);p(this,N,n),this.SizeInMeter=e.SizeInMeter,this.URL=e.URL,p(this,y,t.getBestUnit(this.SizeInMeter)),this.SizeInUnit=this.SizeInMeter/b(this,y).SizeInMeter}getObjectName(e){return b(this,N).Label(e)}getUnitSymbol(e){return b(this,y).getUnitSymbol(e)}}y=new WeakMap,N=new WeakMap;class _{constructor(e){this.ObjectList=[],this.Units=e}addObject(e){var t=new K(e,this.Units);this.ObjectList.push(t)}sortBySize(){this.ObjectList.sort(function(e,t){return e.SizeInMeter<t.SizeInMeter?-1:e.SizeInMeter>t.SizeInMeter?1:0})}sortByName(e){this.ObjectList.sort(function(t,n){var l=t.getObjectName(e).toUpperCase(),r=n.getObjectName(e).toUpperCase();return l<r?-1:l>r?1:0})}getObjectByName(e,t){for(var n=-1,l,r=0;r<this.ObjectList.length;r++)l=this.ObjectList[r].getObjectName(t),l==e&&(n=r);return n!=-1?this.ObjectList[n]:null}getObjectBySize(e){var n=e*.9,l=e*(1+.1),r,s,a;for(r=0;r<this.ObjectList.length;r++)s=this.ObjectList[r],s.SizeInMeter>=n&&s.SizeInMeter<=l&&(a=s);return a}getNameList(e){var t=[];this.sortByName(e);for(var n=0;n<this.ObjectList.length;n++)t.push(this.ObjectList[n].getObjectName(e));return t}}function $(i,e){return c.getJSON(e,function(t){c.each(t.ObjectList,function(){i.addObject(this)})})}function Q(i,e){return c.getJSON(e,function(t){c.each(t.Labels,function(){var n=new F([["EN",this.LabelEn],["FR",this.LabelFr]]);i.addLabel(this.id,n)})})}function W(i,e){return c.getJSON(e,function(t){c.each(t.Units,function(){var n=new F([["FR",this.UnitSymbolFr],["EN",this.UnitSymbolEn]]);i.addUnit(this.SizeInMeter,n)})})}const X="./Objects.JSON",Y="./i18n.JSON",Z="./Units.JSON";var R=new G,g=new J(["EN","FR"]),f,ee=W(R,Z);function q(){f.sortBySize();var i=c("#obj1").val(),e=c("#obj2").val(),t,l,n,l,r,s,a,u,h,L,j,z,E,d,I,o,I,B,v=g.CurLang;if(i!=""&e!=""){let P=f.getObjectByName(i,v),T=f.getObjectByName(e,v);if(P!=null&&T!=null){var M=T.SizeInMeter/P.SizeInMeter;M<1?l="\u{1F817}  1 : "+(1/M).toPrecision(4):l="\u{1F815}  "+M.toPrecision(4)+" : 1",c("#fldRatio").text(l),c("tbody").remove();for(var C="<tr><td data-label='"+g.getLabel(6)+"'><a href='%ur' target='_blank'>%na</a></td><td data-label='"+g.getLabel(9)+"'>%m</td><td data-label='"+g.getLabel(7)+"'>%si</td><td data-label='"+g.getLabel(8)+"'>%sc</td><td data-label='"+g.getLabel(10)+"'>%on</td></tr>",w="scMicro",k="",t=0;t<f.ObjectList.length;t++)a=f.ObjectList[t],n=a.getObjectName(v),r=a.SizeInMeter,s=a.getUnitSymbol(v),u=a.SizeInUnit,h=a.URL,L=r*M,j=f.Units.getBestUnit(L),z=j.getUnitSymbol(v),E=L/j.SizeInMeter,r<=1e-4?d="scMicro":r<=100?d="scHuman":r<=12e6?d="scTravel":r<=1e10?d="scPlanet":r<=3e16?d="scSolar":r<=125e19?d="scGalaxy":d="scCosmic",t==0?o="<tbody class='"+w+"'>"+C:d!=w?(o="</tbody><tbody class='"+d+"'>"+C,w=d):o=C,B=f.getObjectBySize(L),B!=null?I=B.getObjectName(v):I="",o=o.replace("%na",n),o=o.replace("%si",u.toPrecision(4)+" "+s),o=o.replace("%sc",E.toPrecision(4)+" "+z),o=o.replace("%ur",h),o=o.replace("%m",r.toPrecision(4)+" m"),o=o.replace("%cl",d),o=o.replace("%on",I),t+1==f.length&&(o+="</tbody>"),k+=o;c("tfoot").before(k)}}}function H(){g.CurLang=c("#lang").val();var i=g.CurLang,e;e=f.getNameList(i),c(function(){x(document.getElementById("obj1"),e),x(document.getElementById("obj2"),e)}),c("[data-label-id]").each(function(){var t=parseInt(c(this).attr("data-label-id")),n=g.getLabel(t);c(this).text(n)})}function te(){for(var i=0;i<g.SupportedLanguages.length;i++){var e=g.SupportedLanguages[i],t="<option value='"+e+"'>"+e+"</option>";c("#lang").append(t)}c("#lang").val(g.CurLang)}ee.done(function(){R.sortBySize();var i=Q(g,Y);i.done(function(){f=new _(R);var e=$(f,X);e.done(function(){te(),H(),c("#lang").on("change",function(){H()}),document.getElementById("obj1").addEventListener("change",q),document.getElementById("obj2").addEventListener("change",q)})})});
