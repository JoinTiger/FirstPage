document.write('<div id="qqonline" style="display:block;">')
document.write('<div id="divStayTopLeft" style="position:absolute;right:0px">')
//document.write('<layer name="divStayTopLeft" left="880" top="1055" id="divStayTopLeft">') 
document.write('<div style="position:absolute;right:0px"><a href="javascript:closeonline()"title="¹Ø±Õ"><img src="/images/4.gif"style="border:0px"></a></div>')
if (online[0]==0)
document.write("<a target=blank href='http://wpa.qq.com/msgrd?V=1&Uin="+qq+"&Site="+qqsitename+"&Menu="+qqmenu+"' title='"+offonline+"'><img src=/images/serviesoffline.gif border=0 align=middle></a>");
else
document.write("<a target=blank href='http://wpa.qq.com/msgrd?V=1&Uin="+qq+"&Site="+qqsitename+"&Menu="+qqmenu+"' title='"+ononline+"'><img src=/images/serviesonline.gif border=0 align=middle></a>");
//document.write('</layer>')
document.write('</div>')
document.write('</div>')
var verticalpos="frombottom"
if (!document.layers)
function JSFX_FloatTopDiv()
{
 var ns = (navigator.appName.indexOf("Netscape") != -1);
 var d = document;
 function ml(id)
 {
  var el=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];
  if(d.layers)el.style=el;
  el.sP=function(x,y){this.style.left=x;this.style.top=y;};
  el.x = startX;
  if (verticalpos=="fromtop")
  el.y = startY;
  else{
  el.y = ns ? pageYOffset + innerHeight : document.documentElement.scrollTop + document.documentElement.clientHeight;
  el.y -= startY;
  }
  return el;
 }
 window.stayTopLeft=function()
 {
  if (verticalpos=="fromtop"){
  var pY = ns ? pageYOffset : document.documentElement.scrollTop;
  ftlObj.y += (pY + startY - ftlObj.y)/8;
  }
  else{
  var pY = ns ? pageYOffset + innerHeight : document.documentElement.scrollTop + document.documentElement.clientHeight;
  ftlObj.y += (pY - startY - ftlObj.y)/8;
  }
  ftlObj.sP(ftlObj.x, ftlObj.y);
  setTimeout("stayTopLeft()", 10);
 }
 ftlObj = ml("divStayTopLeft");
 stayTopLeft();
}
JSFX_FloatTopDiv();
function closeonline(){document.all.qqonline.style.display= 'none';}