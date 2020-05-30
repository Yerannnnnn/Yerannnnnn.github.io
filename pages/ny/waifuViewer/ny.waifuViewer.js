const cdnPath ="//cdn.jsdelivr.net/gh/Yerannnnnn/Yerannnnnn.github.io@master/live2d_api/model/";
const apiPath ="https://yuanjiuzheng.com/live2d_api/get/?id=";
var charData = {
"mengxiang/sagiri"                       : apiPath+"01-0" ,
"mengxiang/snow_miku"                    : apiPath+"02-0" ,
"mengxiang/chino"                        : apiPath+"03-0" ,
"Potion-Maker/Pio"                       : apiPath+"04-20" ,
"Potion-Maker/Tia"                       : apiPath+"05-0" ,
"HyperdimensionNeptunia/histoirenohover" : apiPath+"06-1" ,
"HyperdimensionNeptunia/noireswim"       : apiPath+"06-2" ,
"HyperdimensionNeptunia/nepswim"         : apiPath+"06-3" ,
"HyperdimensionNeptunia/noir"            : apiPath+"06-4" ,
"HyperdimensionNeptunia/noir_santa"      : apiPath+"06-5" ,
"HyperdimensionNeptunia/blanc_normal"    : apiPath+"06-6" ,
"HyperdimensionNeptunia/blanc_swimwear"  : apiPath+"06-7" ,
"HyperdimensionNeptunia/vert_classic"    : apiPath+"06-8" ,
"HyperdimensionNeptunia/vert_normal"     : apiPath+"06-9" ,
"HyperdimensionNeptunia/vert_swimwear"   : apiPath+"06-10" ,
"HyperdimensionNeptunia/nepgear_extra"   : apiPath+"06-11" ,
"HyperdimensionNeptunia/nepgearswim"     : apiPath+"06-12" ,
"HyperdimensionNeptunia/histoire"        : apiPath+"06-13" ,
"mengxiang/bronya"                       : apiPath+"07-0" ,
};

var view;
window.onload =function() {
    view = new Viewer(cdnPath);
};
class Viewer{
    constructor(cdnPath){

        // close the origin waifu
        localStorage.setItem("waifu-display", Date.now());
        let orign_waifu =document.getElementById("waifu");
        if(orign_waifu!=null){
            orign_waifu.style.bottom = "-500px";
            setTimeout(() => {
                document.getElementById("waifu").style.display = "none";
                document.getElementById("waifu-toggle").classList.add("waifu-toggle-active");
            }, 1000);
        }

        // init canvas
        this.canvas = document.getElementById("live2d");
        // this.canvas.width  = (document.documentElement.clientWidth>document.documentElement.clientHeight)?document.documentElement.clientHeight:document.documentElement.clientWidth;
        // this.canvas.height  = this.canvas.width = this.canvas.width -10;

        // init waifulist
        this.waifulist = document.getElementsByClassName("waifulist")[0];
        for (let val in charData) {
            this.htmlInsert("waifulist",val,"button");
        }
        // this.waifulist.style.height=document.documentElement.clientHeight+'px';



        // init module
        this.module = charData["mengxiang/sagiri"];
        loadlive2d("live2d", this.module, 0.5 ,cdnPath);
    }



    htmlInsert(t,thenew,type){
        let child = document.createElement(type);
        const waifuname= thenew.substring(thenew.lastIndexOf("/") + 1);
        const waifupath= charData[thenew];
        child.setAttribute("class","nybtn");
        child.setAttribute("value",charData[thenew]);
        child.setAttribute("onclick","view.btn_click()");

        let span = document.createElement("span");
        span.appendChild(document.createTextNode(waifuname.substring(0,9)));
        span.setAttribute("onclick",null);
        child.appendChild(span);

        // child.appendChild(document.createTextNode(name));


        let target = document.getElementsByClassName(t)[0];
        target.appendChild(child);
        // target.appendChild(document.createElement("br"));
        // target.appendChild(document.createElement("br"));
    }
    htmlPushBack(s){
        document.body.insertAdjacentHTML("beforeend", s);
    }

    btn_click(){
        this.module = event.currentTarget.value;
        loadlive2d("live2d", this.module, 0.5 ,cdnPath);
    }
}

