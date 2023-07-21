import"https://cdn.skypack.dev/leaflet@1.7.1";import"https://cdn.skypack.dev/leaflet-rotate@0.1.4";import"https://cdn.skypack.dev/jquery";import"https://maxwell-ilai.github.io/Leaflet.SidePanel/dist/leaflet-sidepanel.min.js";import"https://ppete2.github.io/Leaflet.PolylineMeasure/Leaflet.PolylineMeasure.js";import"https://unpkg.com/leaflet-geotag-photo/dist/Leaflet.GeotagPhoto.min.js";const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}};J();var Q=202307211533e-4,X="hsl(197, 100%, 60%)",j=window.location.search,l=new URLSearchParams(j),G=l.has("z")==!0?Number(l.get("z")):10,N=l.has("lat")==!0?Number(l.get("lat")):46.80960630088855,Z=l.has("lng")==!0?Number(l.get("lng")):-71.21267080307008,_=l.has("rot")==!0?Number(l.get("rot")):0,I=l.has("m")==!0?l.get("m").toString()=="true":!1,R=l.has("t")==!0?l.get("t"):"New Map";const z=1e3;var p="538d4534960f4226bb8ca146e7df3941",ee="e9xKxlmCUuPGGQvk3FYwqWWmXgyvomdDUECpkBfjQA1obipCjNRKwWlHd1pYr5K2",te="//{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",oe='Map data \xA9 <a href="http://openstreetmap.org">OpenStreetMap FR</a> contributors',re=new L.TileLayer(te,{minZoom:1,maxZoom:20,attribution:oe,BMname:"OSM France",BMicon:"osmFR.png"}),ae="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",ne='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',ie=new L.TileLayer(ae,{minZoom:1,maxZoom:19,attribution:ne,BMname:"Humanitarian OSM Team",BMicon:"osmHOT.png"}),se='OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap ORG</a>',le="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",ce=L.tileLayer(le,{maxZoom:19,attribution:se,BMname:"Open Street Map",BMicon:"Mapnik.png"}),pe=L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',subdomains:"abcd",minZoom:0,maxZoom:18,ext:"png",BMname:"Stamen Terrain Map",BMicon:"Stamen_Terrain.png"}),me=L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',subdomains:"abcd",minZoom:1,maxZoom:16,ext:"jpg",BMname:"Stamen Watercolor",BMicon:"Stamen_Watercolor.jpg"}),de=L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC",maxZoom:16,BMname:"National Geographic",BMicon:"Esri_NatGeoWorldMap.png"}),ue=L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012",BMname:"ESRI Street",BMicon:"ESRIMap.png"}),ge=L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community",BMname:"ESRI Topo",BMicon:"ESRITopo.png"}),ye=L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",{maxZoom:17,attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',BMname:"Open Topo Map",BMicon:"OpenTopoMap.png"}),fe=L.tileLayer("https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",{maxZoom:20,attribution:'<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',BMname:"Cyclo OSM",BMicon:"CyclOSM.png"}),he=L.tileLayer("https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:p,maxZoom:22,BMname:"Thunderforest Outdoors",BMicon:"Thunderforest_Outdoors.png"}),ve=L.tileLayer("https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:p,maxZoom:22,BMname:"Thunderforest Pioneer",BMicon:"Thunderforest_Pioneer.png"}),Me=L.tileLayer("https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:p,maxZoom:22,BMname:"Thunderforest Neighbourhood",BMicon:"Thunderforest_Neighbourhood.png"}),Be=L.tileLayer("https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:p,maxZoom:22,BMname:"Thunderforest Open Cycle Map",BMicon:"Thunderforest_OpenCycleMap.png"}),Le=L.tileLayer("https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:p,maxZoom:22,BMname:"Thunderforest Mobile Atlas",BMicon:"Thunderforest_MobileAtlas.png"}),we=L.tileLayer("https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:p,maxZoom:22,BMname:"Thunderforest Landscape",BMicon:"Thunderforest_Landscape.png"}),be=L.tileLayer("https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:p,maxZoom:22,BMname:"Thunderforest Transport",BMicon:"Thunderforest_Transport.png"}),Te=L.tileLayer("https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:p,maxZoom:22,BMname:"Thunderforest Transport Dark",BMicon:"Thunderforest_TransportDark.png"}),Ee=L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",BMname:"ESRI Image",BMicon:"ESRIImg.png"}),Ie=L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"],BMname:"Google Map",BMicon:"GoogleMap.png"}),ke=L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"],BMname:"Google Satellite",BMicon:"GoogleSat.png"}),Se=L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"],BMname:"Google Terrain",BMicon:"GoogleTerrain.png"}),Ce=L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:20,BMname:"CartoDB Voyager",BMicon:"CartoDB_VoyagerLabelsUnder.png"}),xe=L.tileLayer("https://tile.jawg.io/4284c312-895e-4aa5-9c79-c8974c53f9d3/{z}/{x}/{y}{r}.png?access-token={accessToken}",{attribution:'<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',minZoom:0,maxZoom:22,subdomains:"abcd",accessToken:ee,BMname:"Jawn GB",BMicon:"Jawg_GBMain.png"}),Oe=L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',subdomains:"abcd",minZoom:0,maxZoom:20,ext:"png",BMname:"Stamen Toner Lite",BMicon:"Stamen_TonerLite.png"}),m=[{category:"Base Map",layers:[ce,xe,Ie,re,ie,ue,de,Me]},{category:"Topo",layers:[ye,he,we,Se,pe,ge]},{category:"Imagery",layers:[ke,Ee]},{category:"Transport",layers:[Le,be,Te,fe,Be,Ce]},{category:"Miscelaneous",layers:[ve,Oe,me]}],o=L.map("map",{center:new L.LatLng(N,Z),zoom:G,zoomControl:!1,rotate:!0,touchRotate:!0,rotateControl:!1,BMHasMarker:!1,BMTitle:R,bearing:_,attributionControl:!1,BMHasMeasure:!1,BMHasTracker:!1}),c,A=l.has("l")==!0?l.get("l"):0;o.addLayer(E(A));document.getElementById("buildFld").value=Q;L.control.sidepanel("panelID",{panelPosition:"left",hasTabs:!0,tabsPosition:"top",pushControls:!0,darkMode:!0,startTab:"tab-layer"}).addTo(o);var P=L.control({position:"topright"});P.onAdd=function(e){var t=L.DomUtil.create("div","info legend nArrow");return t.innerHTML="\u27F4",t};P.addTo(o);var Ge=document.querySelector(".nArrow");Ge.addEventListener("click",function(e){o.setBearing(0)});let H=L.control.polylineMeasure({position:"topright",unit:"kilometres",showBearings:!1,clearMeasurementsOnStop:!0,showClearControl:!1,showUnitControl:!1,startCircle:{color:"#000",weight:2,fillColor:"#0f0",fillOpacity:1,radius:6},intermedCircle:{color:"#000",weight:2,fillColor:"#ff0",fillOpacity:1,radius:4},currentCircle:{color:"#000",weight:1,fillColor:"#f0f",fillOpacity:1,radius:3},endCircle:{color:"#000",weight:2,fillColor:"#f00",fillOpacity:1,radius:6},tempLine:{color:"#00f",weight:1},fixedLine:{color:"#00C",weight:3}});H.addTo(o);document.querySelector(".polyline-measure-unicode-icon").parentNode.style.display="none";o.on("rotate",function(e){v(B(o.getBearing()))});o.on("resizeend",function(e){u(b()),g(T()),M(F())});o.on("zoomend",function(e){M(o.getZoom())});o.on("moveend",function(e){u(b()),g(T())});I?Y():W(I);He();Ue();$e();De();We();D(R);v(_);u(N);g(Z);M(G);V(A);q(!1);K(!1);let U,$;function d(e,t){var r=new URLSearchParams(window.location.search);r.set(e,t),window.history.pushState({},o.options.BMTitle,`${location.pathname}?${r.toString()}`)}function Ne(){return o.options.BMTitle}function D(e){o.options.BMTitle=e,document.getElementById("fTitle").value=e,document.getElementById("curTitle").innerText=e,document.title=`BestMap: ${e}`,o.options.BMHasMarker&&c.setTooltipContent(e),d("t",e)}function Ze(){return B(o.getBearing())}function v(e){document.getElementById("fRot").value=e,d("rot",e);var t=document.querySelector(".nArrow");t.style.transform=`rotate(${e-90}deg)`,e==0?t.style.display="none":t.style.display="block"}function u(e){document.getElementById("fLat").value=e,d("lat",e)}function b(){var e;return o.options.BMHasMarker?e=c.getLatLng().lat:e=o.getCenter().lat,e}function T(){var e;return o.options.BMHasMarker?e=c.getLatLng().lng:e=o.getCenter().lng,e}function g(e){document.getElementById("fLng").value=e,d("lng",e)}function F(){return o.getZoom()}function M(e){document.getElementById("fZoom").value=e,d("z",e)}function W(e){e?(c.setTooltipContent(o.options.BMTitle),document.getElementById("btFlipMarker").style.backgroundImage="url('icons/removeMarker.png')"):document.getElementById("btFlipMarker").style.backgroundImage="url('icons/addMarker.png')",d("m",e)}function q(e){e?document.getElementById("btMeasure").style.backgroundImage="url('icons/removeMeasure.png')":document.getElementById("btMeasure").style.backgroundImage="url('icons/addMeasure.png')"}function K(e){e?document.getElementById("btTrack").style.backgroundImage="url('icons/removeTrack.png')":document.getElementById("btTrack").style.backgroundImage="url('icons/addTrack.png')"}function _e(e){var t=e.coords,r=Math.min(Math.max(Math.ceil(Math.log(t.accuracy)/Math.log(2)),0),20);r=14,o.flyTo(new L.LatLng(t.latitude,t.longitude),r)}function Re(e){e.code==1?console.log("getCurrentPosition Error: Access is denied!"):e.code==2&&console.log("getCurrentPosition Error: Position is unavailable!")}function B(e){var t=parseInt(e);return e<0?t=360- -e%360:t=e%360,parseInt(t)}function ze(e){var t=parseFloat(e);return t>90&&(t=90),t<-90&&(t=-90),t}function Ae(e){var t=parseFloat(e);return t>180&&(t=180),t<-180&&(t=-180),t}function Pe(e){var t=parseInt(e);return t>o.maxZoom&&(t=o.maxZoom),t<o.minZoom&&(t=o.minZoom),t}function k(e){var t=parseInt(e);isNaN(t)&&(t=0),o.eachLayer(function(r){"BMname"in r.options&&o.removeLayer(r)}),o.addLayer(E(t)),V(t)}function He(){for(var e=document.getElementById("BM-Layer-Nav-Panel"),t=0,r=0;r<m.length;r++){for(var a='<div class="BM-Layer-Nav-Container">',n=m[r].layers,i=0;i<n.length;i++){var s=`BMLayer-${t}`;a+=`<div class="BM-Layer-Bt" id="${s}">
            <img src='layerIcons/${n[i].options.BMicon}'
                 title='${m[r].layers[i].options.BMname}'>
            <div class="BM-Layer-Bt-Name">${m[r].layers[i].options.BMname}</div>
            </div>`,t++}a+="</div>";var y=`<div class="BM-Layer-Nav-Category">${m[r].category}</div>${a}`;e.innerHTML+=y}}function E(e){var t=0,r,a,n=parseInt(e);isNaN(n)&&(n=0);for(var i=0;i<m.length;i++){a=m[i].layers;for(var s=0;s<a.length;s++)i===0&&s===0&&(r=a[s]),t===n&&(r=a[s]),t++}return r}function V(e){for(var t=document.getElementsByClassName("BM-Layer-Bt"),r=0;r<t.length;r++){var a=t[r].getElementsByTagName("img")[0];r==e?a.style.borderColor=X:a.style.borderColor="black"}document.getElementById("fLayer").value=E(e).options.BMname,document.getElementById("fLayerID").value=e,d("l",e)}function Ue(){document.addEventListener("click",function(e){if(e.target.matches(".BM-Layer-Bt img")){var t=e.target.parentElement.id.split("-")[1];k(t)}if(e.target.matches(".BM-Layer-Bt div")){var t=e.target.parentElement.id.split("-")[1];k(t)}},!1)}function w(){return o.options.BMHasMarker?c.getLatLng():o.getCenter()}function $e(){document.getElementById("btGoOSM").addEventListener("click",function(){var e=w(),t=o.getZoom(),r=`https://www.openstreetmap.org/#map=${t}/${e.lat}/${e.lng}`;window.open(r)}),document.getElementById("btGoGoogle").addEventListener("click",function(){var e=w(),t=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;window.open(t)}),document.getElementById("btFlipMarker").addEventListener("click",function(){Y()}),document.getElementById("btTrack").addEventListener("click",function(){Qe()}),document.getElementById("btGoHere").addEventListener("click",function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(_e,Re)}),document.getElementById("shareToClipboard").addEventListener("click",function(){navigator.clipboard.writeText(window.location.href)}),document.getElementById("shareGmap").addEventListener("click",function(){var e=w(),t=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;navigator.clipboard.writeText(t)}),document.getElementById("shareToMail").addEventListener("click",function(){var e=encodeURIComponent(window.location.href),t=encodeURIComponent(o.options.BMTitle),r=`mailto:?subject=${t}&body=${t}%0A${e}`;document.location=r}),document.getElementById("btMeasure").addEventListener("click",function(){H._toggleMeasure(),o.options.BMHasMeasure=!o.options.BMHasMeasure,q(o.options.BMHasMeasure)})}function S(){document.getElementById("btEdit").style.display="inline-block",document.getElementById("btEditSave").style.display="none",document.getElementById("btEditCancel").style.display="none",document.getElementById("fTitle").disabled=!0,document.getElementById("fRot").disabled=!0,document.getElementById("fLat").disabled=!0,document.getElementById("fLng").disabled=!0,document.getElementById("fZoom").disabled=!0}function De(){var e,t,r,a,n;document.getElementById("btEdit").addEventListener("click",function(){e=Ne(),t=Ze(),r=b(),a=T(),n=F(),document.getElementById("btEdit").style.display="none",document.getElementById("btEditSave").style.display="inline-block",document.getElementById("btEditCancel").style.display="inline-block",document.getElementById("fTitle").disabled=!1,document.getElementById("fRot").disabled=!1,document.getElementById("fLat").disabled=!1,document.getElementById("fLng").disabled=!1,document.getElementById("fZoom").disabled=!1}),document.getElementById("btEditSave").addEventListener("click",function(){S();var i=document.getElementById("fTitle").value;i!=e&&D(i);var s=B(document.getElementById("fRot").value);console.log(`newRot: ${s} oldRot: ${t}`),s!=t&&(o.setBearing(s),v(s));var y=ze(document.getElementById("fLat").value),f=Ae(document.getElementById("fLng").value);(y!=r||f!=a)&&(o.panTo(new L.LatLng(y,f),h),y!=r&&u(y),f!=a&&g(f));var h=Pe(document.getElementById("fZoom").value);h!=n&&(o.setZoom(h),M(h))}),document.getElementById("btEditCancel").addEventListener("click",function(){S(),document.getElementById("fTitle").value=e,document.getElementById("fRot").value=t})}function Fe(e){if(console.log(e),Array.isArray(e.results)&&e.results.length>0){var t=e.results[0],r=t.geometry.lat,a=t.geometry.lng;o.panTo(new L.LatLng(r,a),{}),u(r),g(a)}}function We(){document.getElementById("fSearch").addEventListener("change",function(){var e=document.getElementById("fSearch").value,t="a1f15d3f6b834c55917fd7e435af418c",r=`https://api.opencagedata.com/geocode/v1/json?q=${e}&key=${t}`;console.log(e),fetch(r).then(a=>a.json()).then(a=>Fe(a))})}function Y(){o.options.BMHasMarker?o.removeLayer(c):(c=new L.Marker(o.getCenter(),{draggable:!0}),c.bindTooltip(o.options.BMTitle),c.on("dragend",function(e){var t=c.getLatLng().lat,r=c.getLatLng().lng;u(t),g(r)}),o.addLayer(c)),o.options.BMHasMarker=!o.options.BMHasMarker,W(o.options.BMHasMarker)}function C(){window.DeviceMotionEvent&&window.DeviceMotionEvent.requestPermission?window.DeviceMotionEvent.requestPermission().then(e=>{e==="granted"&&window.addEventListener("devicemotion",x)}).catch(console.error):window.DeviceOrientationEvent?window.addEventListener("deviceorientation",x):console.log("Device motion or orientation is not supported by this browser.")}function x(e){let t=null;if(e.rotationRate?t=e.rotationRate.alpha:e.alpha&&(t=e.alpha),t!==null){const r=360-t;B(r),console.log("Bearing: "+r),o.setBearing(r),v(r)}}function qe(){C(),$=setInterval(C,z)}function Ke(){clearInterval($)}function O(){navigator.geolocation?navigator.geolocation.getCurrentPosition(Ve):console.log("Geolocation is not supported by this browser.")}function Ve(e){var t=e.coords.latitude,r=e.coords.longitude;console.log(`lat=${t}  lng=${r}`),u(t),g(r),o.panTo({lng:r,lat:t})}function Ye(){O(),U=setInterval(O,z)}function Je(){clearInterval(U)}function Qe(){o.options.BMHasTracker?(L.geotagPhoto.crosshair().removeFrom(o),document.querySelectorAll(".leaflet-geotag-photo-crosshair").forEach(t=>t.remove()),Je(),Ke()):(L.geotagPhoto.crosshair().addTo(o).on("input",function(e){this.getCrosshairPoint()}),Ye(),qe()),o.options.BMHasTracker=!o.options.BMHasTracker,K(o.options.BMHasTracker)}
