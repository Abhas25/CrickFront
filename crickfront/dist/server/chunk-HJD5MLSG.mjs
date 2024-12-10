import './polyfills.server.mjs';
import{A as m,B as h,C as P,D as Y,E as G,F as K,G as X,H as Z,O as tt,Q as et,R as f,S as nt,T as it,U as ot,V as rt,Y as st,a as j,aa as at,b as H,c as R,d as u,da as pt,e as q,ea as lt,f as $,fa as ct,g as J,h as V,i as l,j as T,k as y,l as d,m as x,n as g,o as w,p as k,q as E,r as s,s as r,t as S,u as z,v as U,w as C,x as W,y as Q,z as p}from"./chunk-ZTT2OJYP.mjs";var O={apiUrl:"http://localhost:8080"};var _=(()=>{let e=class e{constructor(n){this.httpClient=n}getLiveScore(){return this.httpClient.get(`${O.apiUrl}/cricket/live`)}getAllMatches(){return this.httpClient.get(`${O.apiUrl}/cricket`)}getCWC2023PointTable(){return this.httpClient.get(`${O.apiUrl}/cricket/point-table`)}};e.\u0275fac=function(o){return new(o||e)(R(nt))},e.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var ut=(()=>{let e=class e{constructor(n){this._api=n,this.title="crickfront"}ngOnInit(){}};e.\u0275fac=function(o){return new(o||e)(T(_))},e.\u0275cmp=u({type:e,selectors:[["app-root"]],standalone:!0,features:[h],decls:17,vars:2,consts:[[1,"bg-gray-100","h-[100vh]"],[1,"bg-blue-500","p-4"],[1,"container","mx-auto","flex","items-center","justify-between"],["href","#",1,"text-white","text-lg","font-semibold"],[1,"flex","space-x-4"],[1,"text-white","cursor-pointer",3,"routerLink"],["routerLink","/point-table",1,"text-white","cursor-pointer"],["routerLink","/",1,"text-white","cursor-pointer"],[1,"container","mx-auto","px-16"]],template:function(o,a){o&1&&(s(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3),p(4," CrickInfomer "),r(),s(5,"div",4)(6,"a",5),p(7,"Live Score"),r(),s(8,"a",5),p(9,"All Matches"),r(),s(10,"a",6),p(11,"CWC2023 Point Table"),r(),s(12,"a",7),p(13,"Home"),r()(),S(14,"div"),r()(),s(15,"div",8),S(16,"router-outlet"),r()()),o&2&&(l(6),d("routerLink","/live"),l(2),d("routerLink","/all-matches"))},dependencies:[f,at,ct,pt]});let i=e;return i})();function wt(i,e){if(i&1&&(s(0,"div",1)(1,"div",2)(2,"h1",3),p(3),r(),s(4,"p",4),p(5),r()(),s(6,"div",5)(7,"h1",6),p(8),r(),s(9,"h1",3),p(10),r()(),s(11,"div",5)(12,"h1",6),p(13),r(),s(14,"h1",3),p(15),r()(),s(16,"div")(17,"p",7),p(18),r(),s(19,"p",8),p(20),r()()()),i&2){let t=C();l(3),m(t.data.teamHeading),l(2),m(t.data.matchNumberVenue),l(3),m(t.data.battingTeam),l(2),m(t.data.battingTeamScore),l(3),m(t.data.bowlTeam),l(2),m(t.data.bowlTeamScore),l(3),m(t.data.liveText),l(2),m(t.data.textComplete)}}var L=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-live-match-card"]],inputs:{data:"data"},standalone:!0,features:[h],decls:1,vars:1,consts:[["class","bg-white transition-all hover:bg-blue-500 hover:text-white hover:border-b-orange-300 card h-full shadow border rounded-xl border-b-8 border-b-blue-400 cursor-pointer p-3 space-y-2"],[1,"bg-white","transition-all","hover:bg-blue-500","hover:text-white","hover:border-b-orange-300","card","h-full","shadow","border","rounded-xl","border-b-8","border-b-blue-400","cursor-pointer","p-3","space-y-2"],[1,"py-3","border-b-2"],[1,"font-bold"],[1,"font-light"],[1,"flex","justify-between"],[1,"font-bold","text-gray-600"],[1,"text-red-500"],[1,"text-green-800"]],template:function(o,a){o&1&&x(0,wt,21,8,"div",0),o&2&&g(0,a.data?0:-1)},dependencies:[f]});let i=e;return i})();function A(){return A=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},A.apply(this,arguments)}var kt={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(i){},onComplete:function(i){},preStringTyped:function(i,e){},onStringTyped:function(i,e){},onLastStringBackspaced:function(i){},onTypingPaused:function(i,e){},onTypingResumed:function(i,e){},onReset:function(i){},onStop:function(i,e){},onStart:function(i,e){},onDestroy:function(i){}},Et=new(function(){function i(){}var e=i.prototype;return e.load=function(t,n,o){if(t.el=typeof o=="string"?document.querySelector(o):o,t.options=A({},kt,n),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(M){return M.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var a=Array.prototype.slice.apply(t.stringsElement.children),c=a.length;if(c)for(var v=0;v<c;v+=1)t.strings.push(a[v].innerHTML.trim())}for(var b in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[b]=b;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var n="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+n+"]")){var o=document.createElement("style");o.setAttribute(n,"true"),o.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(o)}},e.appendFadeOutAnimationCss=function(t){var n="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+n+"]")){var o=document.createElement("style");o.setAttribute(n,"true"),o.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(o)}},i}()),dt=new(function(){function i(){}var e=i.prototype;return e.typeHtmlChars=function(t,n,o){if(o.contentType!=="html")return n;var a=t.substring(n).charAt(0);if(a==="<"||a==="&"){var c;for(c=a==="<"?">":";";t.substring(n+1).charAt(0)!==c&&!(1+ ++n>t.length););n++}return n},e.backSpaceHtmlChars=function(t,n,o){if(o.contentType!=="html")return n;var a=t.substring(n).charAt(0);if(a===">"||a===";"){var c;for(c=a===">"?"<":"&";t.substring(n-1).charAt(0)!==c&&!(--n<0););n--}return n},i}()),mt=function(){function i(t,n){Et.load(this,n,t),this.begin()}var e=i.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,n){var o=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var a=this.humanizer(this.typeSpeed),c=1;this.pause.status!==!0?this.timeout=setTimeout(function(){n=dt.typeHtmlChars(t,n,o);var v=0,b=t.substring(n);if(b.charAt(0)==="^"&&/^\^\d+/.test(b)){var M=1;M+=(b=/\d+/.exec(b)[0]).length,v=parseInt(b),o.temporaryPause=!0,o.options.onTypingPaused(o.arrayPos,o),t=t.substring(0,n)+t.substring(n+M),o.toggleBlinking(!0)}if(b.charAt(0)==="`"){for(;t.substring(n+c).charAt(0)!=="`"&&(c++,!(n+c>t.length)););var N=t.substring(0,n),St=t.substring(N.length+1,n+c),Tt=t.substring(n+c+1);t=N+St+Tt,c--}o.timeout=setTimeout(function(){o.toggleBlinking(!1),n>=t.length?o.doneTyping(t,n):o.keepTyping(t,n,c),o.temporaryPause&&(o.temporaryPause=!1,o.options.onTypingResumed(o.arrayPos,o))},v)},a):this.setPauseStatus(t,n,!0)},e.keepTyping=function(t,n,o){n===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var a=t.substring(0,n+=o);this.replaceText(a),this.typewrite(t,n)},e.doneTyping=function(t,n){var o=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){o.backspace(t,n)},this.backDelay))},e.backspace=function(t,n){var o=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var a=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){n=dt.backSpaceHtmlChars(t,n,o);var c=t.substring(0,n);if(o.replaceText(c),o.smartBackspace){var v=o.strings[o.arrayPos+1];o.stopNum=v&&c===v.substring(0,n)?n:0}n>o.stopNum?(n--,o.backspace(t,n)):n<=o.stopNum&&(o.arrayPos++,o.arrayPos===o.strings.length?(o.arrayPos=0,o.options.onLastStringBackspaced(),o.shuffleStringsIfNeeded(),o.begin()):o.typewrite(o.strings[o.sequence[o.arrayPos]],n))},a)}else this.setPauseStatus(t,n,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,n,o){this.pause.typewrite=o,this.pause.curString=t,this.pause.curStrPos=n},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(n){t.stop()}),this.el.addEventListener("blur",function(n){t.el.value&&t.el.value.length!==0||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},i}();var _t=["wrapper"],It=["*"],F=(()=>{class i{constructor(){this.typeSpeed=30,this.completed=new y,this.preStringTyped=new y,this.stringTyped=new y,this.lastStringBackspaced=new y,this.typingPaused=new y,this.typingResumed=new y,this.reset=new y,this.stopped=new y,this.started=new y,this.destroyed=new y}ngAfterViewInit(){this.typed=new mt(this.content.nativeElement.querySelector(".typing"),this.options),this.showCursor!==!1&&this.updateCursorStyle()}toggle(){this.typed.toggle()}stop(){this.typed.stop()}start(){this.typed.start()}destroy(){this.typed.destroy()}doReset(t){this.typed.reset(t)}get options(){let t=a=>()=>a.emit(),n=a=>c=>a.emit(c),o={strings:this.strings??[""],stringsElement:this.stringsElement,typeSpeed:this.typeSpeed,startDelay:this.startDelay,backSpeed:this.backSpeed,smartBackspace:this.smartBackspace,shuffle:this.shuffle,backDelay:this.backDelay,fadeOut:this.fadeOut,fadeOutClass:this.fadeOutClass,fadeOutDelay:this.fadeOutDelay,loop:this.loop,loopCount:this.loopCount,showCursor:this.showCursor,autoInsertCss:this.autoInsertCss,attr:this.attr,bindInputFocusEvents:this.bindInputFocusEvents,contentType:this.contentType,onComplete:t(this.completed),preStringTyped:n(this.preStringTyped),onStringTyped:n(this.stringTyped),onLastStringBackspaced:t(this.lastStringBackspaced),onTypingPaused:n(this.typingPaused),onTypingResumed:n(this.typingResumed),onReset:t(this.reset),onStop:n(this.stopped),onStart:n(this.started),onDestroy:t(this.destroyed)};return Object.keys(o).forEach(a=>{o[a]===void 0&&delete o[a]}),o}updateCursorStyle(){let t=getComputedStyle(this.content.nativeElement.querySelector(".typing")),n=this.content.nativeElement.querySelector(".typed-cursor").style;n.fontSize=t.fontSize,n.color=this.cursorColor||t.color}ngOnChanges(t){this.typed&&(this.typed.destroy(),this.ngAfterViewInit())}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["ngx-typed-js"]],viewQuery:function(t,n){if(t&1&&X(_t,7),t&2){let o;K(o=Z())&&(n.content=o.first)}},inputs:{cursorColor:"cursorColor",strings:"strings",stringsElement:"stringsElement",typeSpeed:"typeSpeed",startDelay:"startDelay",backSpeed:"backSpeed",smartBackspace:"smartBackspace",shuffle:"shuffle",backDelay:"backDelay",fadeOut:"fadeOut",fadeOutClass:"fadeOutClass",fadeOutDelay:"fadeOutDelay",loop:"loop",loopCount:"loopCount",showCursor:"showCursor",cursorChar:"cursorChar",autoInsertCss:"autoInsertCss",attr:"attr",bindInputFocusEvents:"bindInputFocusEvents",contentType:"contentType"},outputs:{completed:"completed",preStringTyped:"preStringTyped",stringTyped:"stringTyped",lastStringBackspaced:"lastStringBackspaced",typingPaused:"typingPaused",typingResumed:"typingResumed",reset:"reset",stopped:"stopped",started:"started",destroyed:"destroyed"},features:[$],ngContentSelectors:It,decls:3,vars:0,consts:[["wrapper",""]],template:function(t,n){t&1&&(W(),s(0,"div",null,0),Q(2),r())},styles:["[_nghost-%COMP%] > .typing[_ngcontent-%COMP%]{display:inline}"]}),i})(),B=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=q({type:i}),i.\u0275inj=H({imports:[[]]}),i})();function Mt(i,e){i&1&&(s(0,"h1",1),p(1,"Loading..."),r())}function Pt(i,e){if(i&1&&(s(0,"div",8),S(1,"app-live-match-card",9),r()),i&2){let t=e.$implicit;l(1),d("data",t)}}var Ot=()=>["Score","Commentry"];function Dt(i,e){if(i&1){let t=z();s(0,"div",2)(1,"h1",3)(2,"ngx-typed-js",4),p(3," Live "),S(4,"span",5),r()(),s(5,"button",6),U("click",function(){J(t);let o=C();return V(o.refreshScore())}),p(6,"Refresh"),r()(),s(7,"div",7),k(8,Pt,2,1,"div",10,w),r()}if(i&2){let t=C();l(2),d("typeSpeed",50)("loop",!0)("strings",P(3,Ot)),E(8,t.liveData)}}var ft=(()=>{let e=class e{constructor(n){this._api=n,this.loading=!1}ngOnInit(){this.loadScore()}loadScore(){this.loading=!0,this._api.getLiveScore().subscribe({next:n=>{this.liveData=n,console.log(this.liveData),this.loading=!1},error:n=>{console.log(n),this.loading=!1}})}refreshScore(){this.loadScore()}};e.\u0275fac=function(o){return new(o||e)(T(_))},e.\u0275cmp=u({type:e,selectors:[["app-live-score"]],standalone:!0,features:[h],decls:2,vars:2,consts:[["class"," p-4  text-2xl text-center"],[1,"p-4","text-2xl","text-center"],[1,"flex","py-3","px-10","justify-between"],[1,"text-gray-600","font-extrabold","text-4xl"],[3,"typeSpeed","loop","strings"],[1,"typing"],[1,"px-3","py-2","bg-blue-500","hover:bg-blue-700","rounded-full","text-white",3,"click"],[1,"flex","flex-wrap","items-stretch"],[1,"w-full","md:w-[33%]","p-3"],[3,"data"],["class"," w-full md:w-[33%] p-3 "]],template:function(o,a){o&1&&x(0,Mt,2,0,"h1",0)(1,Dt,10,4),o&2&&(g(0,a.loading?0:-1),l(1),g(1,a.loading?-1:1))},dependencies:[f,L,B,F]});let i=e;return i})();var yt=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-home"]],standalone:!0,features:[h],decls:2,vars:0,template:function(o,a){o&1&&(s(0,"p"),p(1,"home works!"),r())},dependencies:[f]});let i=e;return i})();function Lt(i,e){if(i&1&&(s(0,"th",2),p(1),r()),i&2){let t=e.$implicit;l(1),m(t)}}var Ft=i=>({"font-bold":i});function Bt(i,e){if(i&1&&(s(0,"td",4),p(1),r()),i&2){let t=e.$implicit,n=e.$index;d("ngClass",Y(2,Ft,n==0)),l(1),m(t)}}var At=(i,e)=>({"bg-green-100 text-black":i,"bg-red-100 text-black":e});function Nt(i,e){if(i&1&&(s(0,"tr",3),k(1,Bt,2,4,"td",5,w),r()),i&2){let t=e.$implicit,n=e.$index;d("ngClass",G(1,At,n<=4,n>4)),E(1,t)}}function jt(i,e){if(i&1&&(s(0,"h1",0),p(1,"CWC2023 Point Table"),r(),s(2,"table",1)(3,"thead")(4,"tr"),k(5,Lt,2,1,"th",6,w),r()(),s(7,"tbody"),k(8,Nt,3,4,"tr",7,w),r()()),i&2){let t=C();E(5,t.pointTableRow),E(8,t.pointTable)}}var gt=(()=>{let e=class e{constructor(n){this._api=n}ngOnInit(){this.loadTable()}loadTable(){this._api.getCWC2023PointTable().subscribe({next:n=>{this.pointTable=n,console.log(this.pointTable),this.pointTableRow=[...this.pointTable[0]],this.pointTable=this.pointTable.filter((o,a)=>a>0)}})}};e.\u0275fac=function(o){return new(o||e)(T(_))},e.\u0275cmp=u({type:e,selectors:[["app-point-table"]],standalone:!0,features:[h],decls:2,vars:1,consts:[[1,"px-3","py-2","text-4xl"],[1,"mt-2","shadow","rounded","min-w-full","bg-white","border","border-gray-300"],[1,"py-2","px-4","border-b"],[1,"cursor-pointer","hover:bg-blue-500","hover:text-white","transition-all",3,"ngClass"],[1,"py-2","px-4","border-b",3,"ngClass"],["class","py-2 px-4 border-b",3,"ngClass"],["class","py-2 px-4 border-b"],["class","cursor-pointer hover:bg-blue-500 hover:text-white transition-all",3,"ngClass"]],template:function(o,a){o&1&&(s(0,"div"),x(1,jt,10,0),r()),o&2&&(l(1),g(1,a.pointTable?1:-1))},dependencies:[f,et]});let i=e;return i})();function Ht(i,e){i&1&&(s(0,"h1",1),p(1,"Loading..."),r())}function Rt(i,e){if(i&1&&(s(0,"div",8),S(1,"app-live-match-card",9),r()),i&2){let t=C().$implicit;l(1),d("data",t)}}function qt(i,e){if(i&1&&x(0,Rt,2,1,"div",7),i&2){let t=e.$implicit;g(0,t.status==="COMPLETED"?0:-1)}}var $t=()=>["History","Completed"];function Jt(i,e){if(i&1&&(s(0,"div",2)(1,"h1",3)(2,"ngx-typed-js",4),p(3," Match "),S(4,"span",5),r()()(),s(5,"div",6),k(6,qt,1,1,null,null,w),r()),i&2){let t=C();l(2),d("typeSpeed",50)("loop",!0)("strings",P(3,$t)),E(6,t.allMatches)}}var Ct=(()=>{let e=class e{constructor(n){this._api=n,this.loading=!1}ngOnInit(){this.loadMatchHistory()}loadMatchHistory(){this._api.getAllMatches().subscribe({next:n=>{this.allMatches=n}})}};e.\u0275fac=function(o){return new(o||e)(T(_))},e.\u0275cmp=u({type:e,selectors:[["app-all-matches"]],standalone:!0,features:[h],decls:2,vars:2,consts:[["class","p-4 text-2xl text-center"],[1,"p-4","text-2xl","text-center"],[1,"flex","py-3","px-10","justify-between"],[1,"text-gray-600","font-extrabold","text-4xl"],[3,"typeSpeed","loop","strings"],[1,"typing"],[1,"flex","flex-wrap","items-stretch"],["class","w-full md:w-[33%] p-3"],[1,"w-full","md:w-[33%]","p-3"],[3,"data"]],template:function(o,a){o&1&&x(0,Ht,2,0,"h1",0)(1,Jt,8,4),o&2&&(g(0,a.loading?0:-1),l(1),g(1,a.loading?-1:1))},dependencies:[f,B,F,L]});let i=e;return i})();var vt=[{path:"",redirectTo:"live",pathMatch:"full"},{path:"live",component:ft,title:"Live Score"},{path:"home",component:yt,title:"Home"},{path:"point-table",component:gt,title:"CWC2023 Point Table"},{path:"all-matches",component:Ct,title:"Matches History"}];var bt={providers:[lt(vt),rt(),it()]};var Vt={providers:[st()]},xt=tt(bt,Vt);var zt=()=>ot(ut,xt),He=zt;export{He as a};
