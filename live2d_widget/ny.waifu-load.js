"use strict";var live2d_path="https://yuanjiuzheng.com/live2d_widget/",cdn_path="https://cdn.jsdelivr.net/gh/Yerannnnnn/Yerannnnnn.github.io@master/live2d_api/model/",api_path="https://yuanjiuzheng.com/live2d_api/";function loadExternalResource(i,a){return new Promise(function(n,e){var t;"css"===a?((t=document.createElement("link")).rel="stylesheet",t.href=i):"js"===a?(t=document.createElement("script")).src=i:"jsmodule"===a&&((t=document.createElement("script")).type="module",t.src=i),t&&(t.onload=function(){return n(i)},t.onerror=function(){return e(i)},document.head.appendChild(t))})}Promise.all([loadExternalResource("//cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5/css/all.min.css","css"),loadExternalResource(live2d_path+"ny.waifu.css","css"),loadExternalResource(live2d_path+"ny.waifu.js","js")]).then(function(){initWidget({waifuPath:live2d_path+"ny.waifu-tips.json",apiPath:api_path,cdnPath:cdn_path})}),console.log("\n  く__,.ヘヽ.        /  ,ー､ 〉\n           ＼ ', !-─‐-i  /  /´\n           ／｀ｰ'       L/／｀ヽ､\n         /   ／,   /|   ,   ,       ',\n       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i\n        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |\n          !,/7 '0'     ´0iソ|    |\n          |.从\"    _     ,,,, / |./    |\n          ﾚ'| i＞.､,,__  _,.イ /   .i   |\n            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |\n              | |/i 〈|/   i  ,.ﾍ |  i  |\n             .|/ /  ｉ：    ﾍ!    ＼  |\n              kヽ>､ﾊ    _,.ﾍ､    /､!\n              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'\n              ﾚ'ヽL__|___i,___,ンﾚ|ノ\n                  ﾄ-,/  |___./\n                  'ｰ'    !_,.:\n");