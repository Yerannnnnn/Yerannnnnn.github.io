"use strict";
var __ny_view;
var Viewer = class Viewer{
  constructor(){
    this.cdnPath ="//cdn.jsdelivr.net/gh/Yerannnnnn/Yerannnnnn.github.io@master/live2d_api/model/";
    this.apiPath ="https://yuanjiuzheng.com/live2d_api/get/?id=";
    this.charData = {
    "mengxiang/sagiri"                       : this.apiPath+"01-0" ,
    "mengxiang/snow_miku"                    : this.apiPath+"02-0" ,
    "mengxiang/chino"                        : this.apiPath+"03-0" ,
    "Potion-Maker/Pio"                       : this.apiPath+"04-20" ,
    "Potion-Maker/Tia"                       : this.apiPath+"05-0" ,
    "HyperdimensionNeptunia/histoirenohover" : this.apiPath+"06-1" ,
    "HyperdimensionNeptunia/noireswim"       : this.apiPath+"06-2" ,
    "HyperdimensionNeptunia/nepswim"         : this.apiPath+"06-3" ,
    "HyperdimensionNeptunia/noir"            : this.apiPath+"06-4" ,
    "HyperdimensionNeptunia/noir_santa"      : this.apiPath+"06-5" ,
    "HyperdimensionNeptunia/blanc_normal"    : this.apiPath+"06-6" ,
    "HyperdimensionNeptunia/blanc_swimwear"  : this.apiPath+"06-7" ,
    "HyperdimensionNeptunia/vert_classic"    : this.apiPath+"06-8" ,
    "HyperdimensionNeptunia/vert_normal"     : this.apiPath+"06-9" ,
    "HyperdimensionNeptunia/vert_swimwear"   : this.apiPath+"06-10" ,
    "HyperdimensionNeptunia/nepgear_extra"   : this.apiPath+"06-11" ,
    "HyperdimensionNeptunia/nepgearswim"     : this.apiPath+"06-12" ,
    "HyperdimensionNeptunia/histoire"        : this.apiPath+"06-13" ,
    "mengxiang/bronya"                       : this.apiPath+"07-0" ,
    };


    // init params
    this.canvas = document.getElementById("waifuViewer");
    this.loading= document.getElementById("nywaifuloading");
    this.waifulist = document.getElementsByClassName("waifulist")[0];
    this.moduleConfig = this.charData["mengxiang/sagiri"];

    // close the origin waifu
    let orign_waifu =document.getElementById("waifu");
    if(orign_waifu!=null){
      localStorage.setItem("waifu-display", Date.now());
      orign_waifu.style.bottom = "-500px";
      setTimeout(() => {
        document.getElementById("waifu").style.display = "none";
        document.getElementById("waifu-toggle").classList.add("waifu-toggle-active");
      }, 0);
    }

    // init waifulist
    for (let val in this.charData) {
      this.htmlInsert("waifulist",val,"button");
    }
    // this.waifulist.style.height=document.documentElement.clientHeight+'px';

    // init module
    this.loadwaifu()
  }

  loadwaifu(){
    if(this.loading) {
      //显示loading
      this.loading.className = "nywaifuloading fadein";
    }
    setTimeout(() => {
      loadlive2d({
          canvasId   : "waifuViewer"     ,
          configPath : this.moduleConfig ,
          modelPath  : this.cdnPath      ,
          headPos    : 0.5               ,
          callback   : ()=>{
            if(this.loading) {
              //当页面加载完成后将loading隐藏
              this.loading.className = "nywaifuloading";
            }
            console.log("嘻嘻 我来啦~");
          },
      });
    }, 1);
  }

  htmlInsert(t,thenew,type){
    let child = document.createElement(type);
    const waifuname= thenew.substring(thenew.lastIndexOf("/") + 1);
    const waifupath= this.charData[thenew];
    child.setAttribute("class","nybtn");
    child.setAttribute("value",this.charData[thenew]);
    child.setAttribute("onclick","__ny_view.btn_click()");

    let span = document.createElement("span");
    span.appendChild(document.createTextNode(waifuname.substring(0,9)));
    span.setAttribute("onclick",null);
    child.appendChild(span);


    let target = document.getElementsByClassName(t)[0];
    target.appendChild(child);
  }
  htmlPushBack(s){
    document.body.insertAdjacentHTML("beforeend", s);
  }

  btn_click(){
    this.moduleConfig = event.currentTarget.value;
    this.loadwaifu();
  }
}

// var global
!function waifuViewer() {
   setTimeout(() => {
      if(window.loadlive2d) {
          __ny_view = new Viewer();
      } else {
        const promise = new Promise((resolve, reject) => {
          let tag = document.createElement("script");
          let url = '//cdn.jsdelivr.net/gh/Yerannnnnn/Yerannnnnn.github.io@master/live2d_widget/ny.waifu.js';
          tag.src = url;
          tag.onload = () => resolve(url);
          tag.onerror = () => reject(url);
          document.head.appendChild(tag);
        });
        promise.then( ()=>{
          __ny_view = new Viewer();
        });
      }
   }, 0);
}();

