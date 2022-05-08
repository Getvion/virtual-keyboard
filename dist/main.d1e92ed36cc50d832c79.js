!function(){"use strict";var e,t={7774:function(){var e=[["Backquote","`","~","ё","Ё"],["Digit1","1","!","1","!"],["Digit2","2","@","2",'"'],["Digit3","3","#","3","№"],["Digit4","4","$","4",";"],["Digit5","5","%","5","%"],["Digit6","6","^","6",":"],["Digit7","7","&","7","?"],["Digit8","8","*","8","*"],["Digit9","9","(","9","("],["Digit0","0",")","0",")"],["Minus","-","_","-","_"],["Equal","=","+","=","+"],["Backspace","Backspace","Backspace","Backspace","Backspace"]],t=[["Tab","Tab","Tab","Tab","Tab"],["KeyQ","q","Q","й","Й"],["KeyW","w","W","ц","Ц"],["KeyE","e","E","у","У"],["KeyR","r","R","к","К"],["KeyT","t","T","е","Е"],["KeyY","y","Y","н","Н"],["KeyU","u","U","г","Г"],["KeyI","i","I","ш","Ш"],["KeyO","o","O","щ","Щ"],["KeyP","p","P","з","З"],["BracketLeft","[","{","х","Х"],["BracketRight","]","}","ъ","Ъ"],["Delete","Delete","Delete","Delete","Delete"]],a=[["CapsLock","CapsLock","CapsLock","CapsLock","CapsLock"],["KeyA","a","A","ф","Ф"],["KeyS","s","S","ы","Ы"],["KeyD","d","D","в","В"],["KeyF","f","F","а","А"],["KeyG","g","G","п","П"],["KeyH","h","H","р","Р"],["KeyJ","j","J","о","О"],["KeyK","k","K","л","Л"],["KeyL","l","L","д","Д"],["Semicolon",";",":","ж","Ж"],["Quote","'",'"',"э","Э"],["Backslash","\\","|","\\","/"],["Enter","Enter","Enter","Enter","Enter"]],n=[["ShiftLeft","Shift","Shift","Shift","Shift"],["KeyZ","z","Z","я","Я"],["KeyX","x","X","ч","Ч"],["KeyC","c","C","с","С"],["KeyV","v","V","м","М"],["KeyB","b","B","и","И"],["KeyN","n","N","т","Т"],["KeyM","m","M","ь","Ь"],["Comma",",","<","б","Б"],["Period",".",">","ю","Ю"],["Slash","/","?",".",","],["ShiftRight","Shift","Shift","Shift","Shift"]],i=[["ControlLeft","Ctrl","Ctrl","Ctrl","Ctrl"],["AltLeft","Alt","Alt","Alt","Alt"],["Space"," "," "," "," "],["AltRight","Alt","Alt","Alt","Alt"],["ControlRight","Ctrl","Ctrl","Ctrl","Ctrl"]];function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}window.onload=function(){var r=document.body;null===localStorage.getItem("language")&&localStorage.setItem("language","en");var c=localStorage.getItem("language"),s=document.createElement("textarea");s.className="textarea";var o=document.createElement("div");o.className="keyboard",function(){var e=document.body,t=document.createElement("div");t.classList.add("container");var a=document.createElement("h1");a.classList.add("title"),a.textContent="Virtual Keyboard";var n=document.createElement("p");n.classList.add("descr"),n.textContent="Разработка велась на Windows, для смены языка нажмите Shift + Alt",t.append(a,n),e.append(t)}(),r.append(s,o);for(var u=[],d=0;d<5;d++)u[d]=document.createElement("div"),u[d].className="row",document.body.append(u[d]);for(var p=[],h=[],f=[],S=[],v=[],m=l((function e(t,a,n,i,r,l){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.parent=l,this.enSpanValue=a,this.enShiftSpanValue=n,this.ruSpanValue=i,this.ruShiftSpanValue=r,this.createKey=function(){s.div=document.createElement("div"),s.div.className="key",s.div.id=t,s.parent.append(s.div),s.enSpan=document.createElement("span"),s.enSpan.innerHTML=s.enSpanValue,"en"==c?(s.enSpan.className="show",s.curSpan=a):s.enSpan.className="hide",s.div.append(s.enSpan),s.enShiftSpan=document.createElement("span"),s.enShiftSpan.innerHTML=s.enShiftSpanValue,s.enShiftSpan.className="hide",s.div.append(s.enShiftSpan),s.ruSpan=document.createElement("span"),s.ruSpan.innerHTML=s.ruSpanValue,"ru"==c?(s.ruSpan.className="show",s.curSpan=i):s.ruSpan.className="hide",s.div.append(s.ruSpan),s.ruShiftSpan=document.createElement("span"),s.ruShiftSpan.innerHTML=s.ruShiftSpanValue,s.ruShiftSpan.className="hide",s.div.append(s.ruShiftSpan),s.spans=s.div.children},this.switchLanguage=function(){"show"==s.enSpan.className?(s.enSpan.className="hide",s.ruSpan.className="show",s.curSpan=i,localStorage.setItem("language","ru"),c="ru"):"show"==s.ruSpan.className?(s.ruSpan.className="hide",s.enSpan.className="show",s.curSpan=a,localStorage.setItem("language","en"),c="en"):"show"==s.enShiftSpan.className?(s.enShiftSpan.className="hide",s.ruShiftSpan.className="show",s.curSpan=r,localStorage.setItem("language","ru"),c="ru"):"show"==s.ruShiftSpan.className&&(s.ruShiftSpan.className="hide",s.enShiftSpan.className="show",s.curSpan=n,localStorage.setItem("language","en"),c="en")},this.switchCase=function(){"en"==c?"show"==s.enSpan.className?(s.enSpan.className="hide",s.enShiftSpan.className="show",s.curSpan=n):(s.enSpan.className="show",s.curSpan=a,s.enShiftSpan.className="hide"):"show"==s.ruSpan.className?(s.ruSpan.className="hide",s.ruShiftSpan.className="show",s.curSpan=r):(s.ruSpan.className="show",s.curSpan=i,s.ruShiftSpan.className="hide")}})),y=0;y<e.length;y++)p[y]=new m(e[y][0],e[y][1],e[y][2],e[y][3],e[y][4],u[0]),p[y].createKey();p[e.length-1].div.style.width="100px",p[e.length-1].div.style.fontSize="16px";for(var g=0;g<t.length;g++)h[g]=new m(t[g][0],t[g][1],t[g][2],t[g][3],t[g][4],u[1]),h[g].createKey();h[0].div.style.width="75px",h[0].div.style.fontSize="24px",h[t.length-1].div.style.width="75px",h[t.length-1].div.style.fontSize="16px";for(var w=0;w<a.length;w++)f[w]=new m(a[w][0],a[w][1],a[w][2],a[w][3],a[w][4],u[2]),f[w].createKey();f[0].div.style.width="75px",f[0].div.style.fontSize="12px",f[a.length-1].div.style.width="75px",f[a.length-1].div.style.fontSize="16px";for(var K=0;K<n.length;K++)S[K]=new m(n[K][0],n[K][1],n[K][2],n[K][3],n[K][4],u[3]),S[K].createKey();S[0].div.style.width="130px",S[0].div.style.fontSize="20px",S[n.length-1].div.style.width="130px",S[n.length-1].div.style.fontSize="20px";for(var b=0;b<i.length;b++)v[b]=new m(i[b][0],i[b][1],i[b][2],i[b][3],i[b][4],u[4]),v[b].createKey(),v[b].div.style.width="75px",v[b].div.style.fontSize="16px";v[2].div.style.width="490px";var k=[];k=p.concat(h,f,S,v);var E=!1,N=!1;document.addEventListener("keydown",(function(e){k.forEach((function(t){if(e.code===t.name){if("CapsLock"===e.code){if(N){if(N){t.div.style.background="black",t.div.style.transform="scale(1)",N=!1;for(var a=13;a<k.length;a++)k[a].switchCase()}}else{t.div.style.background="blue",t.div.style.transform="scale(0.9)",N=!0;for(var n=13;n<k.length;n++)k[n].switchCase()}return}t.div.style.background="blue",t.div.style.transform="scale(0.9)",e.altKey&&e.shiftKey&&k.forEach((function(e){e.switchLanguage()})),"Tab"===e.code?(e.preventDefault(),s.value=s.value+"\t"):"Enter"===e.code?(e.preventDefault(),s.value=s.value+"\n"):"ShiftLeft"===e.code||"ShiftRight"===e.code?E||(E=!0,k.forEach((function(e){e.switchCase()}))):"Delete"===e.code?(e.preventDefault(),s.value=s.value.substr(1,s.value.length)):"Backspace"===e.code?(e.preventDefault(),s.value=s.value.substr(0,s.value.length-1)):"ControlLeft"===e.code||"ControlRight"===e.code||"AltLeft"===e.code||"AltRight"===e.code?e.preventDefault():e.target!=s&&(s.value=s.value+t.curSpan)}}))})),document.addEventListener("keyup",(function(e){k.forEach((function(t){e.code===t.name&&"CapsLock"!=e.code&&(t.div.style.background="black",t.div.style.transform="scale(1)","ShiftLeft"!==e.code&&"ShiftRight"!==e.code||(E=!1,k.forEach((function(e){e.switchCase()}))))}))}));var C="";document.addEventListener("mousedown",(function(e){var t=new Event("keydown");t.code=e.target.id,C=e.target.id,document.dispatchEvent(t)})),document.addEventListener("mouseup",(function(e){var t=new Event("keyup");t.code=C,document.dispatchEvent(t)}))}}},a={};function n(e){var i=a[e];if(void 0!==i)return i.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=function(t,a,i,r){if(!a){var l=1/0;for(u=0;u<e.length;u++){a=e[u][0],i=e[u][1],r=e[u][2];for(var c=!0,s=0;s<a.length;s++)(!1&r||l>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(c=!1,r<l&&(l=r));if(c){e.splice(u--,1);var o=i();void 0!==o&&(t=o)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,i,r]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,r,l=a[0],c=a[1],s=a[2],o=0;if(l.some((function(t){return 0!==e[t]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(s)var u=s(n)}for(t&&t(a);o<l.length;o++)r=l[o],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}(),n.O(void 0,[202],(function(){return n(1202)}));var i=n.O(void 0,[202],(function(){return n(7774)}));i=n.O(i)}();