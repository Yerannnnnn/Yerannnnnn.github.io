"use strict";function asyncGeneratorStep(e,t,n,a,o,r,i){try{var c=e[r](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(a,o)}function _asyncToGenerator(c){return function(){var e=this,i=arguments;return new Promise(function(t,n){var a=c.apply(e,i);function o(e){asyncGeneratorStep(a,t,n,o,r,"next",e)}function r(e){asyncGeneratorStep(a,t,n,o,r,"throw",e)}o(void 0)})}}function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,r=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw r}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function loadWidget(e){var t=e.waifuPath,o=e.apiPath,r=e.cdnPath;function i(e){return Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e}"string"!=typeof o||o.endsWith("/")||(o+="/"),localStorage.removeItem("waifu-display"),sessionStorage.removeItem("waifu-text"),document.body.insertAdjacentHTML("beforeend",'<div id="waifu">\n            <div id="waifu-tips"></div>\n            <canvas id="live2d" width="800" height="800"></canvas>\n            <div id="waifu-tool">\n                <span class="fa fa-lg fa-comment"></span>\n                <span class="fa fa-lg fa-user-circle"></span>\n                <span class="fa fa-lg fa-street-view"></span>\n                <span class="fa fa-lg fa-camera-retro"></span>\n                <span class="fa fa-lg fa-info-circle"></span>\n                <span class="fa fa-lg fa-times"></span>\n            </div>\n        </div>'),setTimeout(function(){document.getElementById("waifu").style.bottom=0},0);var n,c,a,s,l,u,d,f=!1,m=["好久不见，日子过得好快呢……","大坏蛋！你都多久没理人家了呀，嘤嘤嘤～","嗨～快来逗我玩吧！","拿小拳拳锤你胸口！","记得把小家加入 Adblock 白名单哦！"];function p(){fetch("https://v1.hitokoto.cn").then(function(e){return e.json()}).then(function(e){g(e.hitokoto,6e3,9)})}function g(e,t,n){var a;!e||sessionStorage.getItem("waifu-text")&&sessionStorage.getItem("waifu-text")>n||(c&&(clearTimeout(c),c=null),e=i(e),sessionStorage.setItem("waifu-text",n),(a=document.getElementById("waifu-tips")).innerHTML=e,a.classList.add("waifu-tips-active"),c=setTimeout(function(){sessionStorage.removeItem("waifu-text"),a.classList.remove("waifu-tips-active")},t))}function v(e,t,n){return y.apply(this,arguments)}function y(){return(y=_asyncToGenerator(regeneratorRuntime.mark(function e(t,n,a){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("modelId",t),localStorage.setItem("modelTexturesId",n),g(a,4e3,10),loadlive2dfix({canvasId:"live2d",configPath:"".concat(o,"get/?id=").concat(t,"-").concat(n),modelPath:r,headPos:.5,callback:function(){console.log("嘻嘻 我来啦！")}}),console.log("Live2D 模型 ".concat(t,"-").concat(n," 加载中……"));case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(){return w.apply(this,arguments)}function w(){return(w=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem("modelId"),n=localStorage.getItem("modelTexturesId"),fetch("".concat(o,"rand_textures/?id=").concat(t,"-").concat(n)).then(function(e){return e.json()}).then(function(e){1!==e.textures.id||1!==n&&0!==n?v(t,e.textures.id,"我的新衣服好看嘛？"):g("我还没有其他衣服呢！",4e3,10)});case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function I(){return _.apply(this,arguments)}function _(){return(_=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem("modelId"),fetch("".concat(o,"switch/?id=").concat(t)).then(function(e){return e.json()}).then(function(e){v(e.model.id,0,e.model.message)});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}window.addEventListener("mousemove",function(){return f=!0}),window.addEventListener("keydown",function(){return f=!0}),setInterval(function(){n=f?(f=!1,clearInterval(n),null):n||setInterval(function(){g(i(m),6e3,9)},2e4)},1e3),function(){document.querySelector("#waifu-tool .fa-comment").addEventListener("click",p),document.querySelector("#waifu-tool .fa-user-circle").addEventListener("click",I),document.querySelector("#waifu-tool .fa-street-view").addEventListener("click",h),document.querySelector("#waifu-tool .fa-camera-retro").addEventListener("click",function(){g("照好了嘛，是不是很可爱呢？",6e3,9),Live2D.captureName="photo.png",Live2D.captureFrame=!0}),document.querySelector("#waifu-tool .fa-info-circle").addEventListener("click",function(){open("https://github.com/stevenjoezhang/live2d-widget")}),document.querySelector("#waifu-tool .fa-times").addEventListener("click",function(){localStorage.setItem("waifu-display",Date.now()),g("愿你有一天能与重要的人重逢。",2e3,11),document.getElementById("waifu").style.bottom="-500px",setTimeout(function(){document.getElementById("waifu").style.display="none",document.getElementById("waifu-toggle").classList.add("waifu-toggle-active")},3e3)});function e(){}console.log("%c",e),e.toString=function(){g("哈哈，你打开了控制台，是想要看看我的小秘密吗？",6e3,9)},window.addEventListener("copy",function(){g("你都复制了些什么呀，转载要记得加上出处哦！",6e3,9)}),window.addEventListener("visibilitychange",function(){document.hidden||g("哇，你终于回来了～",6e3,9)})}(),g("/"===location.pathname?5<(a=(new Date).getHours())&&a<=7?"早上好！一日之计在于晨，美好的一天就要开始了。":7<a&&a<=11?"上午好！工作顺利嘛，不要久坐，多起来走动走动哦！":11<a&&a<=13?"中午了，工作了一个上午，现在是午餐时间！":13<a&&a<=17?"午后很容易犯困呢，今天的运动目标完成了吗？":17<a&&a<=19?"傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～":19<a&&a<=21?"晚上好，今天过得怎么样？":21<a&&a<=23?"已经这么晚了呀，早点休息吧，晚安～":"你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？":""!==document.referrer?(l=(s=new URL(document.referrer)).hostname.split(".")[1],location.hostname===s.hostname?"欢迎阅读<span>「".concat(document.title.split(" - ")[0],"」</span>"):"baidu"===l?"Hello！来自 百度搜索 的朋友<br>你是搜索 <span>".concat(s.search.split("&wd=")[1].split("&")[0],"</span> 找到的我吗？"):"so"===l?"Hello！来自 360搜索 的朋友<br>你是搜索 <span>".concat(s.search.split("&q=")[1].split("&")[0],"</span> 找到的我吗？"):"google"===l?"Hello！来自 谷歌搜索 的朋友<br>欢迎阅读<span>「".concat(document.title.split(" - ")[0],"」</span>"):"Hello！来自 <span>".concat(s.hostname,"</span> 的朋友")):"欢迎阅读<span>「".concat(document.title.split(" - ")[0],"」</span>"),7e3,8),u=localStorage.getItem("modelId"),d=localStorage.getItem("modelTexturesId"),null===u&&(u=1,d=0),v(u,d),fetch(t).then(function(e){return e.json()}).then(function(o){window.addEventListener("mouseover",function(e){var t,n=_createForOfIteratorHelper(o.mouseover);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(e.target.matches(a.selector))return void g(i(a.text).replace("{text}",e.target.innerText),4e3,8)}}catch(e){n.e(e)}finally{n.f()}}),window.addEventListener("click",function(e){var t,n=_createForOfIteratorHelper(o.click);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(e.target.matches(a.selector))return void g(i(a.text).replace("{text}",e.target.innerText),4e3,8)}}catch(e){n.e(e)}finally{n.f()}}),o.seasons.forEach(function(e){var t,n=new Date,a=e.date.split("-")[0],o=e.date.split("-")[1]||a;a.split("/")[0]<=n.getMonth()+1&&n.getMonth()+1<=o.split("/")[0]&&a.split("/")[1]<=n.getDate()&&n.getDate()<=o.split("/")[1]&&(t=(t=i(e.text)).replace("{year}",n.getFullYear()),m.push(t))})})}function initWidget(e){document.body.insertAdjacentHTML("beforeend",'<div id="waifu-toggle">\n            <span>看板娘</span>\n        </div>');var t=document.getElementById("waifu-toggle");t.addEventListener("click",function(){t.classList.remove("waifu-toggle-active"),t.getAttribute("first-time")?(loadWidget(e),t.removeAttribute("first-time")):(localStorage.removeItem("waifu-display"),document.getElementById("waifu").style.display="",setTimeout(function(){document.getElementById("waifu").style.bottom=0},0))}),localStorage.getItem("waifu-display")&&Date.now()-localStorage.getItem("waifu-display")<=864e5?(t.setAttribute("first-time",!0),setTimeout(function(){t.classList.add("waifu-toggle-active")},0)):loadWidget(e)}console.log("\n  く__,.ヘヽ.        /  ,ー､ 〉\n           ＼ ', !-─‐-i  /  /´\n           ／｀ｰ'       L/／｀ヽ､\n         /   ／,   /|   ,   ,       ',\n       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i\n        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |\n          !,/7 '0'     ´0iソ|    |\n          |.从\"    _     ,,,, / |./    |\n          ﾚ'| i＞.､,,__  _,.イ /   .i   |\n            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |\n              | |/i 〈|/   i  ,.ﾍ |  i  |\n             .|/ /  ｉ：    ﾍ!    ＼  |\n              kヽ>､ﾊ    _,.ﾍ､    /､!\n              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'\n              ﾚ'ヽL__|___i,___,ンﾚ|ノ\n                  ﾄ-,/  |___./\n                  'ｰ'    !_,.:\n"),setTimeout(function(){initWidget({waifuPath:"/live2d_widget/ny.waifu-tips.json",apiPath:"https://yuanjiuzheng.com/live2d_api/",cdnPath:"//cdn.jsdelivr.net/gh/Yerannnnnn/Yerannnnnn.github.io@master/live2d_api/model/"})},0);