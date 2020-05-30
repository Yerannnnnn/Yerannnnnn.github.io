// const live2d_path = "https://cdn.jsdelivr.net/gh/Yerannnnnn/Yerannnnnn.github.io@master/live2d_widget/"
const live2d_path = "https://yuanjiuzheng.com/live2d_widget/"
const cdn_path    = "https://cdn.jsdelivr.net/gh/Yerannnnnn/Yerannnnnn.github.io@master/live2d_api/model/"
const api_path    = "https://yuanjiuzheng.com/live2d_api/"

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    let tag;

    if (type === "css") {
      tag = document.createElement("link");
      tag.rel = "stylesheet";
      tag.href = url;
    }
    else if (type === "js") {
      tag = document.createElement("script");
      tag.src = url;
    }
        else if (type === "jsmodule") {
            tag = document.createElement("script");
            tag.type = "module";
            tag.src = url;
        }
    if (tag) {
      tag.onload = () => resolve(url);
      tag.onerror = () => reject(url);
      document.head.appendChild(tag);
    }
  });
}

// if (screen.width >= 768) {
Promise.all([
      loadExternalResource( "//cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5/css/all.min.css", "css"),
      loadExternalResource(live2d_path + "ny.waifu.css", "css"),
      loadExternalResource(live2d_path + "ny.waifu.js", "js"),
]).then(() => {
  initWidget({
    waifuPath: live2d_path + "ny.waifu-tips.json",
          apiPath: api_path,
          cdnPath: cdn_path,
  });
});
// }

console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);