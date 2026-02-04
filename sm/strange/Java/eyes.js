var brOK = false, mie = false;
if (document.layers || document.all) brOK = true;
if (document.all) mie = true;
var ex = 0, ey = 0;
var ae, le, re, x0, y0, tid, realx, realy;
function navMove(e) {
ex = e.pageX; 
ey = e.pageY;
moveeye()
return routeEvent(e);
}
function mieMove() {
ex = document.body.scrollLeft + event.x;
ey = document.body.scrollTop + event.y;
moveeye();
}
function moveeye() {
dy = ey - y0 - 20;
dx1 = ex - x0 - 20;
dx2 = ex - x0 - 60;
r = Math.sqrt(dx1 * dx1 + dy * dy);
if (r < 20) r = 20;
dx1 = dx1 * 10 / r + x0 + 10;
dy1 = dy * 10 / r + y0 + 10;
r = Math.sqrt(dx2 * dx2 + dy * dy);
if (r < 20) r = 20;
dx2 = dx2 * 10 / r + x0 + 50;
ae.left = x0;
ae.top = y0;
le.left = dx1;
le.top = dy1;
re.left = dx2;
re.top = dy1;
}
function setHandlers() {
if (!mie) {
y0 = document.eyeballs.top;
x0 = document.eyeballs.left;
ae = document.eyeballs;
le = document.lefteye;   
re = document.righteye;   
window.captureEvents(Event.MOUSEMOVE);
window.onMouseMove = navMove;
} 
else {
y0 = document.all.eyeballs.style.pixelTop;
x0 = document.all.eyeballs.style.pixelLeft;
ae = document.all.eyeballs.style;
le = document.all.lefteye.style;
re = document.all.righteye.style;
window.document.onmousemove = mieMove;
}
realx = x0 + 0.1;
realy = y0 + 0.1;
moveall();
}
function moveall() {
rx = realx + 40;
ry = realy + 40;
rx += (ex - rx) * 0.1;
ry += (ey - ry) * 0.1;
realx = rx - 40;
realy = ry - 40;
x0 = Math.round(realx);
y0 = Math.round(realy);
moveeye();
tid = setTimeout('moveall()', 100);
}
function placeeyes(x, y) {
if (brOK) {
ex = x + 40;
ey = y + 40;
s = '<DIV ID ="dummy" STYLE="position:absolute; ' +
'top:'+y+'; left:'+x+'; width:10; height:10;"> </DIV>';
s += '<DIV ID="eyeballs" STYLE="position:absolute; ' +
'top:'+y+'; left:'+x+'; width:80; height:40;"><IMG SRC=' +
'"whites.gif" border=0></DIV>';
s += '<DIV ID="lefteye" STYLE="position:absolute; ' + 
'top:'+(y+10)+'; left:'+(x+10)+'; width:20; height:20;">' +
'<IMG SRC="pupil.gif" border=0></DIV>';
s += '<DIV ID="righteye" STYLE="position:absolute; ' +
'top:'+(y+10)+'; left:'+(x+50)+'; width:20; height:20;">' +
'<IMG SRC="pupil.gif" border=0></DIV>';
document.writeln(s); 
   }
}
function clearEyes()  {
if (tid) clearTimeout(tid);
}


placeeyes(200, 100);
window.onload = setHandlers;
window.onunload = clearEyes;



