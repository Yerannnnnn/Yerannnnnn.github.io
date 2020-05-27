import { Live2DFramework } from "./lib/Live2DFramework.js"
import PlatformManager from "./PlatformManager"
import LAppModel from "./LAppModel"
import LAppDefine from "./LAppDefine"

export default function LAppLive2DManager() {
  // console.log("--> LAppLive2DManager()");


  this.models = [];


  this.count = -1;
  this.reloadFlg = false;

  Live2D.init();
  Live2DFramework.setPlatformManager(new PlatformManager);

}

LAppLive2DManager.prototype.createModel = function () {


  var model = new LAppModel();
  this.models.push(model);

  return model;
}


LAppLive2DManager.prototype.changeModel = function (gl, modelurl) {
  // console.log("--> LAppLive2DManager.update(gl)");

  if (this.reloadFlg) {

    this.reloadFlg = false;

    var thisRef = this;
    this.releaseModel(0, gl);
    this.createModel();
    this.models[0].load(gl, modelurl);
  }
};


LAppLive2DManager.prototype.getModel = function (no) {
  // console.log("--> LAppLive2DManager.getModel(" + no + ")");

  if (no >= this.models.length) return null;

  return this.models[no];
};



LAppLive2DManager.prototype.releaseModel = function (no, gl) {
  // console.log("--> LAppLive2DManager.releaseModel(" + no + ")");

  if (this.models.length 