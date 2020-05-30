// runtime
"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var runtime=function(a){var l,t=Object.prototype,h=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",e=r.asyncIterator||"@@asyncIterator",n=r.toStringTag||"@@toStringTag";function c(t,r,e,n){var i,a,c,u,o=r&&r.prototype instanceof g?r:g,f=Object.create(o.prototype),h=new O(n||[]);return f._invoke=(i=t,a=e,c=h,u=p,function(t,r){if(u===v)throw new Error("Generator is already running");if(u===d){if("throw"===t)throw r;return k()}for(c.method=t,c.arg=r;;){var e=c.delegate;if(e){var n=function t(r,e){var n=r.iterator[e.method];if(n===l){if(e.delegate=null,"throw"===e.method){if(r.iterator.return&&(e.method="return",e.arg=l,t(r,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=s(n,r.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var i=o.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=l),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}(e,c);if(n){if(n===m)continue;return n}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===p)throw u=d,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=v;var o=s(i,a,c);if("normal"===o.type){if(u=c.done?d:y,o.arg===m)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=d,c.method="throw",c.arg=o.arg)}}),f}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var p="suspendedStart",y="suspendedYield",v="executing",d="completed",m={};function g(){}function i(){}function u(){}var f={};f[o]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(S([])));L&&L!==t&&h.call(L,o)&&(f=L);var x=u.prototype=g.prototype=Object.create(f);function b(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function E(u,f){var r;this._invoke=function(e,n){function t(){return new f(function(t,r){!function r(t,e,n,o){var i=s(u[t],u,e);if("throw"!==i.type){var a=i.arg,c=a.value;return c&&"object"===_typeof(c)&&h.call(c,"__await")?f.resolve(c.__await).then(function(t){r("next",t,n,o)},function(t){r("throw",t,n,o)}):f.resolve(c).then(function(t){a.value=t,n(a)},function(t){return r("throw",t,n,o)})}o(i.arg)}(e,n,t,r)})}return r=r?r.then(t,t):t()}}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(r){if(r){var t=r[o];if(t)return t.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var e=-1,n=function t(){for(;++e<r.length;)if(h.call(r,e))return 0="==o&&(o=Promise);var" t.value="r[e],t.done=!1,t;return" n.next="n}}return{next:k}}function" k(){return{value:l,done:!0}}return(i.prototype="x.constructor=u).constructor=i,u[n]=i.displayName="GeneratorFunction",a.isGeneratorFunction=function(t){var" r="function" =="typeof" t&&t.constructor;return!!r&&(r="==i||"GeneratorFunction"===(r.displayName||r.name))},a.mark=function(t){return" object.setprototypeof?object.setprototypeof(t,u):(t.__proto__="u,n" in t||(t[n]="GeneratorFunction" )),t.prototype="Object.create(x),t},a.awrap=function(t){return{__await:t}},b(E.prototype),E.prototype[e]=function(){return" this},a.asynciterator="E,a.async=function(t,r,e,n,o){void" i="new" e(c(t,r,e,n),o);return a.isgeneratorfunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(x),x[n]="Generator" ,x[o]="function(){return" this},x.tostring="function(){return"[object" generator]"},a.keys="function(e){var" n="[];for(var" t e)n.push(t);return n.reverse(),function t(){for(;n.length;){var e)return t.done="!0,t}},a.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(j),!t)for(var" this)"t"="==r.charAt(0)&&h.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=l)},stop:function(){this.done=!0;var" t.arg;return this.rval},dispatchexception:function(e){if(this.done)throw e;var t(t,r){return i.type="throw" ,i.arg="e,n.next=t,r&&(n.method="next",n.arg=l),!!r}for(var" o="this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return" t("end");if(o.tryloc<="this.prev){var" a="h.call(o,"catchLoc"),c=h.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return" t(o.catchloc,!0);if(this.prev<o.finallyloc)return t(o.finallyloc)}else if(a){if(this.prev<o.catchloc)return t(o.catchloc,!0)}else{if(!c)throw new error("try statement without catch or finally");if(this.prev<o.finallyloc)return t(o.finallyloc)}}}},abrupt:function(t,r){for(var e="this.tryEntries.length-1;0<=e;--e){var" t.arg;return"break"="==t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var" this.complete(e.completion,e.afterloc),j(e),m}},catch:function(t){for(var n,o="e.completion;return"throw"===o.type&&(n=o.arg,j(e)),n}}throw" error("illegal attempt")},delegateyield:function(t,r,e){return this.delegate="{iterator:S(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=l),m}},a}("object"===("undefined"==typeof" module?"undefined":_typeof(module))?module.exports:{});try{regeneratorruntime="runtime}catch(t){Function("r","regeneratorRuntime" r")(runtime)} live2d (function(){var j="true;function" aa(){if(j){return;}this._$mt="null;this._$5S=null;this._$NP=0;aa._$42++;this._$5S=new" y(this);}aa._$0s="1;aa._$4s=2;aa._$42=0;aa._$62=function(aQ,aU){try{if(aU" instanceof arraybuffer){au="new" dataview(au);}if(!(au dataview)){throw j("_$ss#loadmodel(b) b _$x be dataview arraybuffer");}var as="new" k(au);var am="aS._$ST();var" ak="aS._$ST();var" aj="aS._$ST();var" an;if(am="=109&&aK==111&&aJ==99){aN=aS._$ST();}else{throw" j("_$gi _$c _$li , _$q0 _$p0.");}as._$gr(an);if(an>ay._$T7){aQ._$NP|=aa._$4s;var aR=ay._$T7;var aI="_$gi _$C _$li , _$n0 _$_ version _$li ( SDK : "+aR+" < _$f0 : "+aN+" )@_$SS#loadModel()\n";throw new J(aI);}var aL=aS._$nP();if(aN>=ay._$s7){var aH=aS._$9T();var aT=aS._$9T();if(aH!=-30584||aT!=-30584){aQ._$NP|=aa._$0s;throw new J("_$gi _$C _$li , _$0 _$6 _$Ui.");}}aQ._$KS(aL);var aP=aQ.getModelContext();aP.setDrawParam(aQ.getDrawParam());aP.init();}catch(aO){q._$Rb(aO);}};aa.prototype._$KS=function(aH){this._$MT=aH;};aa.prototype.getModelImpl=function(){if(this._$MT==null){this._$MT=new w();this._$MT._$zP();}return this._$MT;};aa.prototype.getCanvasWidth=function(){if(this._$MT==null){return 0;}return this._$MT.getCanvasWidth();};aa.prototype.getCanvasHeight=function(){if(this._$MT==null){return 0;}return this._$MT.getCanvasHeight();};aa.prototype.getParamFloat=function(aH){if(typeof aH!="number"){aH=this._$5S.getParamIndex(z.getID(aH));}return this._$5S.getParamFloat(aH);};aa.prototype.setParamFloat=function(aH,aJ,aI){if(typeof aH!="number"){aH=this._$5S.getParamIndex(z.getID(aH));}if(arguments.length<3){aI=1;}this._$5S.setParamFloat(aH,this._$5S.getParamFloat(aH)*(1-aI)+aJ*aI);};aa.prototype.addToParamFloat=function(aH,aJ,aI){if(typeof ah!="number" ){ah="this._$5S.getParamIndex(z.getID(aH));}if(arguments.length<3){aI=1;}this._$5S.setParamFloat(aH,this._$5S.getParamFloat(aH)+aJ*aI);};aa.prototype.multParamFloat=function(aH,aJ,aI){if(typeof" this._$5s.getparamindex(z.getid(ah));};aa.prototype.loadparam="function(){this._$5S.loadParam();};aa.prototype.saveParam=function(){this._$5S.saveParam();};aa.prototype.init=function(){this._$5S.init();};aa.prototype.update=function(){this._$5S.update();};aa.prototype._$Rs=function(){q._$li("_$60" _$pt _$rs()");return -1;};aa.prototype._$ds="function(aH){q._$li("_$60" _$ss#_$ds() \n");};aa.prototype._$k2="function(){};aa.prototype.draw=function(){};aa.prototype.getModelContext=function(){return" this._$5s;};aa.prototype._$s2="function(){return" this._$np;};aa.prototype._$p7="function(aK,aR,aH,a0){var" au="-1;var" ay="0;var" am="this;var" aj="0.5;var" ai="0.15;var" ax="true;if(aH==0){for(var" av="0;aV<aK.length;aV++){var" ap="aK[aV];var" ao="aR[aV];var" as="(aM.getParamFloat(aP)!=0);aM.setPartsOpacity(aO,(aS?1:0));}return;}else{if(aK.length==1){var" at="(aM.getParamFloat(aP)!=0);var" aq="aM.getPartsOpacity(aO);var" aw="aH/a0;if(aT){aQ+=aW;if(aQ">1){aQ=1;}}else{aQ-=aW;if(aQ<0){aQ=0;}}aM.setPartsOpacity(aO,aQ);}else{for(var av="0;aV<aK.length;aV++){var" ap="aK[aV];var" as="(aM.getParamFloat(aP)!=0);if(aS){if(aU">=0){break;}aU=aV;var aO=aR[aV];aY=aM.getPartsOpacity(aO);aY+=aH/a0;if(aY>1){aY=1;}}}if(aU<0){console.log("No _$wi _$q0 _$u default[%s]",ak[0]);au="0;aY=1;aM.loadParam();aM.setParamFloat(aK[aU],aY);aM.saveParam();}for(var" av="0;aV<aK.length;aV++){var" ao="aR[aV];if(aU==aV){aM.setPartsOpacity(aO,aY);}else{var" al="aM.getPartsOpacity(aO);var" az;if(ay<aj){az="aY*(aJ-1)/aJ+1;}else{aZ=(1-aY)*aJ/(1-aJ);}if(aX){var" an="(1-aZ)*(1-aY);if(aN">aI){aZ=1-aI/(1-aY);}}if(aL>aZ){aL=aZ;}aM.setPartsOpacity(aO,aL);}}}}};aa.prototype.setPartsOpacity=function(aI,aH){if(typeof aI!="number"){aI=this._$5S.getPartsDataIndex(i.getID(aI));}this._$5S.setPartsOpacity(aI,aH);};aa.prototype.getPartsDataIndex=function(aH){if(!(aH instanceof i)){aH=i.getID(aH);}return this._$5S.getPartsDataIndex(aH);};aa.prototype.getPartsOpacity=function(aH){if(typeof aH!="number"){aH=this._$5S.getPartsDataIndex(i.getID(aH));}if(aH<0){return 0;}return this._$5s.getpartsopacity(ah);};aa.prototype.getdrawparam="function(){};aa.prototype.getDrawDataIndex=function(aH){return" this._$5s.getdrawdataindex(z.getid(ah));};aa.prototype.getdrawdata="function(aH){return" this._$5s.getdrawdata(ah);};aa.prototype.gettransformedpoints="function(aH){var" ai="this._$5S._$C2(aH);if(aI" instanceof ag){return(ai).gettransformedpoints();}return null;};aa.prototype.getindexarray="function(aI){if(aI<0||aI">=this._$5S._$aS.length){return null;}var aH=this._$5S._$aS[aI];if(aH!=null&&aH.getType()==a._$wb){if(aH instanceof b){return aH.getIndexArray();}}return null;};function W(aJ){if(j){return;}this.clipContextList=new Array();this.glcontext=aJ.gl;this.dp_webgl=aJ;this.curFrameNo=0;this.firstError_clipInNotUpdate=true;this.colorBuffer=0;this.isInitGLFBFunc=false;this.tmpBoundsOnModel=new av();if(Q.glContext.length>Q.frameBuffers.length){this.curFrameNo=this.getMaskRenderTexture();}else{}this.tmpModelToViewMatrix=new ac();this.tmpMatrix2=new ac();this.tmpMatrixForMask=new ac();this.tmpMatrixForDraw=new ac();this.CHANNEL_COLORS=new Array();var aI=new o();aI=new o();aI.r=0;aI.g=0;aI.b=0;aI.a=1;this.CHANNEL_COLORS.push(aI);aI=new o();aI.r=1;aI.g=0;aI.b=0;aI.a=0;this.CHANNEL_COLORS.push(aI);aI=new o();aI.r=0;aI.g=1;aI.b=0;aI.a=0;this.CHANNEL_COLORS.push(aI);aI=new o();aI.r=0;aI.g=0;aI.b=1;aI.a=0;this.CHANNEL_COLORS.push(aI);for(var aH=0;aH<this.CHANNEL_COLORS.length;aH++){this.dp_webgl.setChannelFlagAsColor(aH,this.CHANNEL_COLORS[aH]);}}W.CHANNEL_COUNT=4;W.RENDER_TEXTURE_USE_MIPMAP=false;W.NOT_USED_FRAME=-100;W.prototype._$L7=function(){if(this.tmpModelToViewMatrix){this.tmpModelToViewMatrix=null;}if(this.tmpMatrix2){this.tmpMatrix2=null;}if(this.tmpMatrixForMask){this.tmpMatrixForMask=null;}if(this.tmpMatrixForDraw){this.tmpMatrixForDraw=null;}if(this.tmpBoundsOnModel){this.tmpBoundsOnModel=null;}if(this.CHANNEL_COLORS){for(var ah="this.CHANNEL_COLORS.length-1;aH">=0;--aH){this.CHANNEL_COLORS.splice(aH,1);}this.CHANNEL_COLORS=[];}this.releaseShader();};W.prototype.releaseShader=function(){var aI=Q.frameBuffers.length;for(var aH=0;aH<aI;aH++){this.gl.deleteFramebuffer(Q.frameBuffers[aH].framebuffer);}Q.frameBuffers=[];Q.glContext=[];};W.prototype.init=function(aO,aN,aL){for(var am="0;aM<aN.length;aM++){var" ah="aN[aM].getClipIDList();if(aH==null){continue;}var" aj="this.findSameClip(aH);if(aJ==null){aJ=new" u(this,ao,ah);this.clipcontextlist.push(aj);}var ai="aN[aM].getDrawDataID();var" ak="aO.getDrawDataIndex(aI);aJ.addClippedDrawData(aI,aK);var" ap="aL[aM];aP.clipBufPre_clipContext=aJ;}};W.prototype.getMaskRenderTexture=function(){var" this.dp_webgl.glno;};w.prototype.setupclip="function(a1,aQ){var" ao="0;aO<this.clipContextList.length;aO++){var">0){var aM=aQ.gl.getParameter(aQ.gl.FRAMEBUFFER_BINDING);var aW=new Array(4);aW[0]=0;aW[1]=0;aW[2]=aQ.gl.canvas.width;aW[3]=aQ.gl.canvas.height;aQ.gl.viewport(0,0,Q.clippingMaskBufferSize,Q.clippingMaskBufferSize);this.setupLayoutBounds(aK);aQ.gl.bindFramebuffer(aQ.gl.FRAMEBUFFER,Q.frameBuffers[this.curFrameNo].framebuffer);aQ.gl.clearColor(0,0,0,0);aQ.gl.clear(aQ.gl.COLOR_BUFFER_BIT);for(var aO=0;aO<this.clipContextList.length;aO++){var ap="this.clipContextList[aO];var" at="aP.allClippedDrawRect;var" an="aP.layoutChannelNo;var" av="aP.layoutBounds;var" aj="0.05;this.tmpBoundsOnModel._$jL(aT);this.tmpBoundsOnModel.expand(aT.width*aJ,aT.height*aJ);var" az="aV.width/this.tmpBoundsOnModel.width;var" ay="aV.height/this.tmpBoundsOnModel.height;this.tmpMatrix2.identity();this.tmpMatrix2.translate(-1,-1,0);this.tmpMatrix2.scale(2,2,1);this.tmpMatrix2.translate(aV.x,aV.y,0);this.tmpMatrix2.scale(aZ,aY,1);this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x,-this.tmpBoundsOnModel.y,0);this.tmpMatrixForMask.setMatrix(this.tmpMatrix2.m);this.tmpMatrix2.identity();this.tmpMatrix2.translate(aV.x,aV.y,0);this.tmpMatrix2.scale(aZ,aY,1);this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x,-this.tmpBoundsOnModel.y,0);this.tmpMatrixForDraw.setMatrix(this.tmpMatrix2.m);var" ah="this.tmpMatrixForMask.getArray();for(var" ax="0;aX<16;aX++){aP.matrixForMask[aX]=aH[aX];}var" a0="this.tmpMatrixForDraw.getArray();for(var" as="aP.clippingMaskDrawIndexList.length;for(var" au="0;aU<aS;aU++){var" ar="aP.clippingMaskDrawIndexList[aU];var" ai="a1.getDrawData(aR);var" al="a1._$C2(aR);aQ.setClipBufPre_clipContextForMask(aP);aI.draw(aQ,a1,aL);}}aQ.gl.bindFramebuffer(aQ.gl.FRAMEBUFFER,aM);aQ.setClipBufPre_clipContextForMask(null);aQ.gl.viewport(aW[0],aW[1],aW[2],aW[3]);}};W.prototype.getColorBuffer=function(){return" this.colorbuffer;};w.prototype.findsameclip="function(aK){for(var" ao="this.clipContextList[aN];var" am="0;aM<aH;aM++){var" ao;}}return null;};w.prototype.calcclippeddrawtotalbounds="function(a6,aV){var" a5="a6._$Ri.getModelImpl().getCanvasHeight();var">a5?aU:a5;var aT=aJ;var aR=aJ;var aS=0;var aP=0;var aL=aV.clippedDrawContextList.length;for(var aM=0;aM<aL;aM++){var aw="aV.clippedDrawContextList[aM];var" an="aW.drawDataIndex;var" ak="a6._$C2(aN);if(aK._$yo()){var" ax="aK.getTransformedPoints();var" a4="aX.length;var" ai="[];var" ah="[];var" ao="0;for(var" a3="aw._$i2;a3<a4;a3+=aw._$No){aI[aO]=aX[a3];aH[aO]=aX[a3+1];aO++;}var" a2="Math.min.apply(null,aI);var" a1="Math.min.apply(null,aH);var" a0="Math.max.apply(null,aI);var" az="Math.max.apply(null,aH);if(a2<aT){aT=a2;}if(a1<aR){aR=a1;}if(a0">aS){aS=a0;}if(aZ>aP){aP=aZ;}}}if(aT==aJ){aV.allClippedDrawRect.x=0;aV.allClippedDrawRect.y=0;aV.allClippedDrawRect.width=0;aV.allClippedDrawRect.height=0;aV.isUsing=false;}else{var aQ=aS-aT;var aY=aP-aR;aV.allClippedDrawRect.x=aT;aV.allClippedDrawRect.y=aR;aV.allClippedDrawRect.width=aQ;aV.allClippedDrawRect.height=aY;aV.isUsing=true;}};W.prototype.setupLayoutBounds=function(aQ){var aI=aQ/W.CHANNEL_COUNT;var aP=aQ%W.CHANNEL_COUNT;aI=~~aI;aP=~~aP;var aH=0;for(var aJ=0;aJ<W.CHANNEL_COUNT;aJ++){var am="aI+(aJ<aP?1:0);if(aM==0){}else{if(aM==1){var" al="this.clipContextList[aH++];aL.layoutChannelNo=aJ;aL.layoutBounds.x=0;aL.layoutBounds.y=0;aL.layoutBounds.width=1;aL.layoutBounds.height=1;}else{if(aM==2){for(var" ao="0;aO<aM;aO++){var" an="aO%2;var" ak="0;aN=~~aN;var" _$0p mask count : %d",am);}}}}}}};function u(ah,ak,ai){this.clipidlist="new" array();this.clipidlist="aI;this.clippingMaskDrawIndexList=new" array();for(var aj="0;aJ<aI.length;aJ++){this.clippingMaskDrawIndexList.push(aK.getDrawDataIndex(aI[aJ]));}this.clippedDrawContextList=new" array();this.isusing="true;this.layoutChannelNo=0;this.layoutBounds=new" av();this.allclippeddrawrect="new" av();this.matrixformask="new" float32array(16);this.matrixfordraw="new" float32array(16);this.owner="aH;}U.prototype.addClippedDrawData=function(aJ,aI){var" ah="new" r(aj,ai);this.clippeddrawcontextlist.push(ah);};function r(ai,ah){this._$gp="aI;this.drawDataIndex=aH;}function" i(){if(j){return;}this.color="null;}function" ah(){if(j){return;}this._$dp="null;this._$eo=null;this._$V0=null;this._$dP=1000;this._$eo=1000;this._$V0=1;this._$a0();}ah._$JT=function(aP,aN,aO){var" aq="aP/aN;var" a1="aO/aN;var" au="a1;var" az="1/3;var" ar="2/3;var" a0="1-(1-a1)*(1-a1);var" a2="1-(1-aU)*(1-aU);var" ay="aJ-3*aK+3*aL-aM;var" ax="3*aK-6*aL+3*aM;var" aw="3*aL-3*aM;var" av="aM;if(aQ<=0){return" 0;}else{if(aq>=1){return 1;}}var aS=aQ;var aI=aS*aS;var aH=aS*aI;var aT=aY*aH+aX*aI+aW*aS+aV;return aT;};ah.prototype._$a0=function(){};ah.prototype.setFadeIn=function(aH){this._$dP=aH;};ah.prototype.setFadeOut=function(aH){this._$eo=aH;};ah.prototype._$pT=function(aH){this._$V0=aH;};ah.prototype.getFadeOut=function(){return this._$eo;};ah.prototype._$4T=function(){return this._$eo;};ah.prototype._$mT=function(){return this._$V0;};ah.prototype.getDurationMSec=function(){return -1;};ah.prototype.getLoopDurationMSec=function(){return -1;};ah.prototype.updateParam=function(aJ,aN){if(!aN._$AT||aN._$9L){return;}var aL=P.getUserTimeMSec();if(aN._$z2<0){aN._$z2=aL;aN._$bs=aL;var am="this.getDurationMSec();if(aN._$Do<0){aN._$Do=(aM<=0)?-1:aN._$z2+aM;}}var" ai="this._$V0;var" ah="(this._$dP==0)?1:A._$r2(((aL-aN._$bs)/(this._$dP)));var" ak="(this._$eo==0||aN._$Do<0)?1:A._$r2(((aN._$Do-aL)/(this._$eo)));aI=aI*aH*aK;if(!((0<=aI&&aI<=1))){console.log("###" assert!! ### ");}this.updateparamexe(aj,al,ai,an);if(an._$do>0&&aN._$Do<aL){aN._$9L=true;}};ah.prototype.updateParamExe=function(aH,aI,aJ,aK){};function q(){}q._$8s="0;q._$fT=new" object();q.start="function(aI){var" ah="q._$fT[aI];if(aH==null){aH=new" af();ah._$r="aI;q._$fT[aI]=aH;}aH._$0S=P.getSystemTimeMSec();};q.dump=function(aJ){var" ai="P.getSystemTimeMSec();var" ak="aI-aH._$0S;console.log(aJ+"" : "+ak+"ms");return ak;}else{return -1;}};q.end="function(aJ){var" ai-ah._$0s;}else{return -1;}};q._$li="function(aI,aH){console.log("_$li" "+ai+"\n",ah);};q._$ji="function(aI,aH){console.log(aI,aH);};q._$dL=function(aI,aH){console.log(aI,aH);console.log("\n");};q._$KL=function(aJ,aI){for(var">0){console.log("\n");}else{if(aH%8==0&&aH>0){console.log("  ");}}console.log("%02X ",(aJ[aH]&255));}console.log("\n");};q._$nr=function(aL,aI,aK){console.log("%s\n",aL);var aH=aI.length;for(var aJ=0;aJ<aH;++aJ){console.log("%5d",aI[aJ]);console.log("%s\n",aK);console.log(",");}console.log("\n");};q._$Rb=function(aH){console.log("dump exception : "+ah);console.log("stack :: "+ah.stack);};function af(){this._$r="null;this._$0S=null;}function" f(){if(j){return;}this.x="null;this.y=null;this.width=null;this.height=null;}F.prototype._$8P=function(){return" 0.5*(this.x+this.x+this.width);};f.prototype._$6p="function(){return" 0.5*(this.y+this.y+this.height);};f.prototype._$el="function(){return" this.x+this.width;};f.prototype._$5t="function(){return" this.y+this.height;};f.prototype._$jl="function(aI,aK,aJ,aH){this.x=aI;this.y=aK;this.width=aJ;this.height=aH;};F.prototype._$jL=function(aH){this.x=aH.x;this.y=aH.y;this.width=aH.width;this.height=aH.height;};function" i(ah){if(j){return;}ak.prototype.constructor.call(this,ah);}i.prototype="new" ak();i._$tp="new" object();i._$27="function(){i._$tP.clear();};i.getID=function(aH){var" ai="i._$tP[aH];if(aI==null){aI=new" i(ah);i._$tp[ah]="aI;}return" ai;};i.prototype._$3s="function(){return" new i();};function s(){}function z(ah){if(j){return;}ak.prototype.constructor.call(this,ah);}z.prototype="new" ak();z._$tp="new" object();z._$27="function(){z._$tP.clear();};z.getID=function(aH){var" z(ah);z._$tp[ah]="aI;}return" ai;};z.prototype._$3s="function(){return" z();};function w(){if(j){return;}this._$vo="null;this._$F2=null;this._$ao=400;this._$1S=400;w._$42++;}w._$42=0;w.prototype._$zP=function(){if(this._$vo==null){this._$vo=new" an();}if(this._$f2="=null){this._$F2=new" array();}};w.prototype.getcanvaswidth="function(){return" this._$ao;};w.prototype.getcanvasheight="function(){return" this._$1s;};w.prototype._$f0="function(aH){this._$vo=aH._$nP();this._$F2=aH._$nP();this._$ao=aH._$6L();this._$1S=aH._$6L();};w.prototype._$6S=function(aH){this._$F2.push(aH);};w.prototype._$Xr=function(){return" this._$f2;};w.prototype._$e2="function(){return" this._$vo;};function u(){if(j){return;}this.p1="new" n();this.p2="new" n();this._$fo="0;this._$Db=0;this._$L2=0;this._$M2=0;this._$ks=0;this._$9b=0;this._$iP=0;this._$iT=0;this._$lL=new" array();this._$qp="new" array();this.setup(0.3,0.5,0.1);}u.prototype.setup="function(aJ,aI,aH){this._$ks=this._$Yb();this.p2._$xT();if(arguments.length==3){this._$Fo=aJ;this._$L2=aI;this.p1._$p=aH;this.p2._$p=aH;this.p2.y=aJ;this.setup();}};u.prototype.getPhysicsPoint1=function(){return" this.p1;};u.prototype.getphysicspoint2="function(){return" this.p2;};u.prototype._$qr="function(){return" this._$db;};u.prototype._$pr="function(aH){this._$Db=aH;};u.prototype._$5r=function(){return" this._$m2;};u.prototype._$cs="function(){return" this._$9b;};u.prototype._$yb="function(){return(-180*(Math.atan2(this.p1.x-this.p2.x,-(this.p1.y-this.p2.y)))/Math.PI);};u.prototype.addSrcParam=function(aJ,aH,aL,aI){var" ak="new" h(aj,ah,al,ai);this._$ll.push(ak);};u.prototype.addtargetparam="function(aJ,aH,aK,aI){var" al="new" af(aj,ah,ak,ai);this._$qp.push(al);};u.prototype.update="function(aI,aL){if(this._$iP==0){this._$iP=this._$iT=aL;this._$Fo=(Math.sqrt((this.p1.x-this.p2.x)*(this.p1.x-this.p2.x)+(this.p1.y-this.p2.y)*(this.p1.y-this.p2.y)));return;}var" aj="this._$lL.length-1;aJ">=0;--aJ){var aM=this._$lL[aJ];aM._$oP(aI,this);}this._$oo(aI,aK);this._$M2=this._$Yb();this._$9b=(this._$M2-this._$ks)/aK;this._$ks=this._$M2;}for(var aJ=this._$qP.length-1;aJ>=0;--aJ){var aH=this._$qP[aJ];aH._$YS(aI,this);}this._$iT=aL;};u.prototype._$oo=function(aN,aI){if(aI<0.033){aI=0.033;}var au="1/aI;this.p1.vx=(this.p1.x-this.p1._$s0)*aU;this.p1.vy=(this.p1.y-this.p1._$70)*aU;this.p1.ax=(this.p1.vx-this.p1._$7L)*aU;this.p1.ay=(this.p1.vy-this.p1._$HL)*aU;this.p1.fx=this.p1.ax*this.p1._$p;this.p1.fy=this.p1.ay*this.p1._$p;this.p1._$xT();var" am="-(Math.atan2((this.p1.y-this.p2.y),this.p1.x-this.p2.x));var" al;var av;var ar="Math.cos(aM);var" ah="Math.sin(aM);var" aw="9.8*this.p2._$p;var" aq="(this._$Db*aC._$bS);var" ap="(aW*Math.cos(aM-aQ));aL=(aP*aH);aV=(aP*aR);var" ak="(-this.p1.fx*aH*aH);var" at="(-this.p1.fy*aH*aR);var" aj="((-this.p2.vx*this._$L2));var" as="((-this.p2.vy*this._$L2));this.p2.fx=((aL+aK+aJ));this.p2.fy=((aV+aT+aS));this.p2.ax=this.p2.fx/this.p2._$p;this.p2.ay=this.p2.fy/this.p2._$p;this.p2.vx+=this.p2.ax*aI;this.p2.vy+=this.p2.ay*aI;this.p2.x+=this.p2.vx*aI;this.p2.y+=this.p2.vy*aI;var" ao="(Math.sqrt((this.p1.x-this.p2.x)*(this.p1.x-this.p2.x)+(this.p1.y-this.p2.y)*(this.p1.y-this.p2.y)));this.p2.x=this.p1.x+this._$Fo*(this.p2.x-this.p1.x)/aO;this.p2.y=this.p1.y+this._$Fo*(this.p2.y-this.p1.y)/aO;this.p2.vx=(this.p2.x-this.p2._$s0)*aU;this.p2.vy=(this.p2.y-this.p2._$70)*aU;this.p2._$xT();};function" n(){this._$p="1;this.x=0;this.y=0;this.vx=0;this.vy=0;this.ax=0;this.ay=0;this.fx=0;this.fy=0;this._$s0=0;this._$70=0;this._$7L=0;this._$HL=0;}N.prototype._$xT=function(){this._$s0=this.x;this._$70=this.y;this._$7L=this.vx;this._$HL=this.vy;};function" at(aj,ai,ah){this._$wl="null;this.scale=null;this._$V0=null;this._$wL=aJ;this.scale=aI;this._$V0=aH;}at.prototype._$oP=function(aI,aH){};function" h(aj,ak,ai,ah){at.prototype.constructor.call(this,ak,ai,ah);this._$tl="null;this._$tL=aJ;}h.prototype=new" at();h.prototype._$op="function(aJ,aH){var" al="aH.getPhysicsPoint1();switch(this._$tL){default:case" u.src.src_to_x:al.x="aL.x+(aK-aL.x)*this._$V0;break;case" u.src.src_to_y:al.y="aL.y+(aK-aL.y)*this._$V0;break;case" u.src.src_to_g_angle:var ai="aH._$qr();aI=aI+(aK-aI)*this._$V0;aH._$pr(aI);break;}};function" d(aj,ai,ah){this._$wl="null;this.scale=null;this._$V0=null;this._$wL=aJ;this.scale=aI;this._$V0=aH;}d.prototype._$YS=function(aI,aH){};function" af(ai,ak,aj,ah){d.prototype.constructor.call(this,ak,aj,ah);this._$yp="null;this._$YP=aI;}aF.prototype=new" d();af.prototype._$ys="function(aI,aH){switch(this._$YP){default:case" u.target.target_from_angle:ai.setparamfloat(this._$wl,this.scale*ah._$5r(),this._$v0);break;case u.target.target_from_angle_v:ai.setparamfloat(this._$wl,this.scale*ah._$cs(),this._$v0);break;}};u.src="function(){};u.Src.SRC_TO_X="SRC_TO_X";u.Src.SRC_TO_Y="SRC_TO_Y";u.Src.SRC_TO_G_ANGLE="SRC_TO_G_ANGLE";u.Target=function(){};u.Target.TARGET_FROM_ANGLE="TARGET_FROM_ANGLE";u.Target.TARGET_FROM_ANGLE_V="TARGET_FROM_ANGLE_V";function" x(){if(j){return;}this._$fl="0;this._$gL=0;this._$B0=1;this._$z0=1;this._$qT=0;this.reflectX=false;this.reflectY=false;}X.prototype.init=function(aH){this._$fL=aH._$fL;this._$gL=aH._$gL;this._$B0=aH._$B0;this._$z0=aH._$z0;this._$qT=aH._$qT;this.reflectX=aH.reflectX;this.reflectY=aH.reflectY;};X.prototype._$F0=function(aH){this._$fL=aH._$_T();this._$gL=aH._$_T();this._$B0=aH._$_T();this._$z0=aH._$_T();this._$qT=aH._$_T();if(aH.getFormatVersion()">=ay.LIVE2D_FORMAT_VERSION_V2_10_SDK2){this.reflectX=aH._$po();this.reflectY=aH._$po();}};X.prototype._$e=function(){};var ad=function(){};ad._$ni=function(aL,aJ,aR,aQ,aK,aI,aH,aS,aN){var aM=(aH*aI-aS*aK);if(aM==0){return null;}else{var aO=((aL-aR)*aI-(aJ-aQ)*aK)/aM;var aP;if(aK!=0){aP=(aL-aR-aO*aH)/aK;}else{aP=(aJ-aQ-aO*aS)/aI;}if(isNaN(aP)){aP=(aL-aR-aO*aH)/aK;if(isNaN(aP)){aP=(aJ-aQ-aO*aS)/aI;}if(isNaN(aP)){console.log("a is NaN @UtVector#_$ni() ");console.log("v1x : "+aK);console.log("v1x != 0 ? "+(aK!=0));}}if(aN==null){return new Array(aP,aO);}else{aN[0]=aP;aN[1]=aO;return aN;}}};function av(){if(j){return;}this.x=null;this.y=null;this.width=null;this.height=null;}av.prototype._$8P=function(){return this.x+0.5*this.width;};av.prototype._$6P=function(){return this.y+0.5*this.height;};av.prototype._$EL=function(){return this.x+this.width;};av.prototype._$5T=function(){return this.y+this.height;};av.prototype._$jL=function(aI,aK,aJ,aH){this.x=aI;this.y=aK;this.width=aJ;this.height=aH;};av.prototype._$jL=function(aH){this.x=aH.x;this.y=aH.y;this.width=aH.width;this.height=aH.height;};av.prototype.contains=function(aH,aI){return this.x<=this.x&&this.y<=this.y&&(this.x<=this.x+this.width)&&(this.y<=this.y+this.height);};av.prototype.expand=function(aH,aI){this.x-=aH;this.y-=aI;this.width+=aH*2;this.height+=aI*2;};function ag(){}ag._$z2="function(bb,bo,bp,a2){var" a1="bo._$Q2(bb,bp);var" a3="bb._$vs();var" ba="bb._$Tr();bo._$zr(a3,ba,a1);if(a1<=0){return" a2[a3[0]];}else{if(a1="=1){var" bj="a2[a3[0]];var" bi="a2[a3[1]];var" a9="ba[0];return(bj+(bi-bj)*a9)|0;}else{if(a1==2){var" a0="a2[a3[2]];var" az="a2[a3[3]];var" a8="ba[1];var" br="(bj+(bi-bj)*a9)|0;var" bq="(a0+(aZ-a0)*a9)|0;return(br+(bq-br)*a8)|0;}else{if(a1==3){var" ap="a2[a3[0]];var" ao="a2[a3[1]];var" bn="a2[a3[2]];var" bm="a2[a3[3]];var" ak="a2[a3[4]];var" aj="a2[a3[5]];var" bg="a2[a3[6]];var" bf="a2[a3[7]];var" a6="ba[2];var" at="a2[a3[0]];var" as="a2[a3[1]];var" bu="a2[a3[2]];var" bt="a2[a3[3]];var" an="a2[a3[4]];var" am="a2[a3[5]];var" bl="a2[a3[6]];var" bk="a2[a3[7]];var" be="a2[a3[8]];var" bc="a2[a3[9]];var" ax="a2[a3[10]];var" aw="a2[a3[11]];var" a7="a2[a3[12]];var" a5="a2[a3[13]];var" ar="a2[a3[14]];var" aq="a2[a3[15]];var" a4="ba[3];var" av="1<<a1;var" ay="new" float32array(av);for(var bh="0;bh<aV;bh++){var" ai="bh;var" ah="1;for(var" al="0;aL<a1;aL++){aH*=(aI%2==0)?(1-ba[aL]):ba[aL];aI/=2;}aY[bh]=aH;}var" bs="new" au="0;aU<aV;aU++){bs[aU]=a2[a3[aU]];}var" bd="0;for(var" a2="ba._$vs();var" bg[a2[0]];}else{if(a1="=1){var" bj+(bi-bj)*a8;}else{if(a1="=2){var" bb="bg[a2[9]];var" bc;}}}}}};ag._$vr="function(bV,bW,a5,aI,bC,a3,bX,bH){var" bw="bV._$vs();var" bp="bC[bw[1]];var" b3="a2[0];var" b1="a2[1];var" b2="bP*bT;var" b0="bP*b3;var" bz="a2[2];var" b8="bN*bP*bT;var" b7="bN*bP*b3;var" b6="bZ*bP*bT;var" b5="bZ*bP*b3;var" bo="bZ*b1*b3;for(var" by="bC[bw[4]];var" bx="bC[bw[5]];var" bv="bC[bw[10]];var" b4="1<<aN;var" float32array(b4);for(var e(){if(j){return;}this.x="null;this.y=null;}e.prototype._$HT=function(aH,aI){this.x=aH;this.y=aI;};e.prototype._$HT=function(aH){this.x=aH.x;this.y=aH.y;};function" ae(){if(j){return;}this._$gp="null;this._$dr=null;this._$GS=null;this._$qb=null;this._$Lb=null;this._$mS=null;this.clipID=null;this.clipIDList=new" array();}ae._$ur="-2;ae._$ES=500;ae._$wb=2;ae._$8S=3;ae._$52=ae._$ES;ae._$R2=ae._$ES;ae._$or=function(){return" ae._$52;};ae._$pr="function(){return" ae._$r2;};ae.prototype.convertclipidforv2_11="function(aI){var" null;}if(ai.length="=0){return" null;}if(! , .test(ai)){ah.push(ai.id);return ah;}ah="aI.id.split(",");return" ah;};ae.prototype._$f0="function(aH){this._$gP=aH._$nP();this._$dr=aH._$nP();this._$GS=aH._$nP();this._$qb=aH._$6L();this._$Lb=aH._$cS();this._$mS=aH._$Tb();if(aH.getFormatVersion()">=ay._$T7){this.clipID=aH._$nP();this.clipIDList=this.convertClipIDForV2_11(this.clipID);}else{this.clipIDList=[];}this._$MS(this._$Lb);};ae.prototype.getClipIDList=function(){return this.clipIDList;};ae.prototype.init=function(aH){};ae.prototype._$Nr=function(aH,aI){aI._$IS[0]=false;aI._$Us=aG._$Z2(aH,this._$GS,aI._$IS,this._$Lb);if(Q._$Zs){}else{if(aI._$IS[0]){return;}}aI._$7s=aG._$br(aH,this._$GS,aI._$IS,this._$mS);};ae.prototype._$2b=function(aH,aI){};ae.prototype.getDrawDataID=function(){return this._$gP;};ae.prototype._$j2=function(aH){this._$gP=aH;};ae.prototype.getOpacity=function(aH,aI){return aI._$7s;};ae.prototype._$zS=function(aH,aI){return aI._$Us;};ae.prototype._$MS=function(aJ){for(var aI=aJ.length-1;aI>=0;--aI){var aH=aJ[aI];if(aH<ae._$52){ae._$52=aH;}else{if(aH>ae._$R2){ae._$R2=aH;}}}};ae.prototype.getTargetBaseDataID=function(){return this._$dr;};ae.prototype._$gs=function(aH){this._$dr=aH;};ae.prototype._$32=function(){return(this._$dr!=null&&(this._$dr!=n._$2o()));};ae.prototype.preDraw=function(aJ,aH,aI){};ae.prototype.draw=function(aJ,aH,aI){};ae.prototype.getType=function(){};ae.prototype._$B2=function(aI,aH,aJ){};function ax(){if(j){return;}this._$Eb=ax._$ps;this._$lT=1;this._$C0=1;this._$tT=1;this._$WL=1;this.culling=false;this.matrix4x4=new Float32Array(16);this.premultipliedAlpha=false;this.anisotropy=0;this.clippingProcess=ax.CLIPPING_PROCESS_NONE;this.clipBufPre_clipContextMask=null;this.clipBufPre_clipContextDraw=null;this.CHANNEL_COLORS=new Array();}ax._$ps=32;ax.CLIPPING_PROCESS_NONE=0;ax.CLIPPING_PROCESS_OVERWRITE_ALPHA=1;ax.CLIPPING_PROCESS_MULTIPLY_ALPHA=2;ax.CLIPPING_PROCESS_DRAW=3;ax.CLIPPING_PROCESS_CLEAR_ALPHA=4;ax.prototype.setChannelFlagAsColor=function(aH,aI){this.CHANNEL_COLORS[aH]=aI;};ax.prototype.getChannelFlagAsColor=function(aH){return this.CHANNEL_COLORS[aH];};ax.prototype._$ZT=function(){};ax.prototype._$Uo=function(aM,aK,aJ,aL,aN,aI,aH){};ax.prototype._$Rs=function(){return -1;};ax.prototype._$Ds=function(aH){};ax.prototype.setBaseColor=function(aK,aJ,aI,aH){if(aK<0){aK=0;}else{if(aK>1){aK=1;}}if(aJ<0){aJ=0;}else{if(aJ>1){aJ=1;}}if(aI<0){aI=0;}else{if(aI>1){aI=1;}}if(aH<0){aH=0;}else{if(aH>1){aH=1;}}this._$lT=aK;this._$C0=aJ;this._$tT=aI;this._$WL=aH;};ax.prototype._$WP=function(aH){this.culling=aH;};ax.prototype.setMatrix=function(aH){for(var aI=0;aI<16;aI++){this.matrix4x4[aI]=aH[aI];}};ax.prototype._$IT=function(){return this.matrix4x4;};ax.prototype.setpremultipliedalpha="function(aH){this.premultipliedAlpha=aH;};ax.prototype.isPremultipliedAlpha=function(){return" this.premultipliedalpha;};ax.prototype.setanisotropy="function(aH){this.anisotropy=aH;};ax.prototype.getAnisotropy=function(){return" this.anisotropy;};ax.prototype.getclippingprocess="function(){return" this.clippingprocess;};ax.prototype.setclippingprocess="function(aH){this.clippingProcess=aH;};ax.prototype.setClipBufPre_clipContextForMask=function(aH){this.clipBufPre_clipContextMask=aH;};ax.prototype.getClipBufPre_clipContextMask=function(){return" this.clipbufpre_clipcontextmask;};ax.prototype.setclipbufpre_clipcontextfordraw="function(aH){this.clipBufPre_clipContextDraw=aH;};ax.prototype.getClipBufPre_clipContextDraw=function(){return" this.clipbufpre_clipcontextdraw;};function o(){if(j){return;}this.a="1;this.r=1;this.g=1;this.b=1;this.scale=1;this._$ho=1;this.blendMode=Q.L2D_COLOR_BLEND_MODE_MULT;}function" c(){if(j){return;}this._$kp="null;this._$dr=null;this._$Ai=true;this._$mS=null;}c._$ur=-2;c._$c2=1;c._$_b=2;c.prototype._$F0=function(aH){this._$kP=aH._$nP();this._$dr=aH._$nP();};c.prototype.readV2_opacity=function(aH){if(aH.getFormatVersion()">=ay.LIVE2D_FORMAT_VERSION_V2_10_SDK2){this._$mS=aH._$Tb();}};c.prototype.init=function(aH){};c.prototype._$Nr=function(aI,aH){};c.prototype.interpolateOpacity=function(aJ,aK,aI,aH){if(this._$mS==null){aI.setInterpolatedOpacity(1);}else{aI.setInterpolatedOpacity(aG._$br(aJ,aK,aH,this._$mS));}};c.prototype._$2b=function(aI,aH){};c.prototype._$nb=function(aL,aK,aM,aH,aI,aJ,aN){};c.prototype.getType=function(){};c.prototype._$gs=function(aH){this._$dr=aH;};c.prototype._$a2=function(aH){this._$kP=aH;};c.prototype.getTargetBaseDataID=function(){return this._$dr;};c.prototype.getBaseDataID=function(){return this._$kP;};c.prototype._$32=function(){return(this._$dr!=null&&(this._$dr!=n._$2o()));};function P(){}P._$W2=0;P._$CS=P._$W2;P._$Mo=function(){return true;};P._$XP=function(aI){try{var aJ=getTimeMSec();while(getTimeMSec()-aJ<aI){}}catch(aH){aH._$Rb();}};P.getUserTimeMSec=function(){return(P._$CS==P._$W2)?P.getSystemTimeMSec():P._$CS;};P.setUserTimeMSec=function(aH){P._$CS=aH;};P.updateUserTimeMSec=function(){return(P._$CS=P.getSystemTimeMSec());};P.getTimeMSec=function(){return new date().gettime();};p.getsystemtimemsec="function(){return" date().gettime();};p._$q="function(aH){};P._$jT=function(aM,aJ,aI,aL,aH){for(var" ak="0;aK<aH;aK++){aI[aL+aK]=aM[aJ+aK];}};function" aa(){if(j){return;}this._$vp="0;this._$wL=null;this._$GP=null;this._$8o=aA._$ds;this._$2r=-1;this._$O2=0;this._$ri=0;}aA._$ds=-2;aA.prototype._$F0=function(aH){this._$wL=aH._$nP();this._$VP=aH._$6L();this._$GP=aH._$nP();};aA.prototype.getParamIndex=function(aH){if(this._$2r!=aH){this._$8o=aA._$ds;}return" this._$8o;};aa.prototype._$pb="function(aI,aH){this._$8o=aI;this._$2r=aH;};aA.prototype.getParamID=function(){return" this._$wl;};aa.prototype._$yp="function(aH){this._$wL=aH;};aA.prototype._$N2=function(){return" this._$vp;};aa.prototype._$d2="function(){return" this._$gp;};aa.prototype._$t2="function(aI,aH){this._$VP=aI;this._$GP=aH;};aA.prototype._$Lr=function(){return" this._$o2;};aa.prototype._$wr="function(aH){this._$O2=aH;};aA.prototype._$SL=function(){return" this._$ri;};aa.prototype._$al="function(aH){this._$ri=aH;};function" g(){}g.startswith="function(aJ,aL,aK){var" ah="aL+aK.length;if(aH">=aJ.length){return false;}for(var aI=aL;aI<aH;aI++){if(G.getChar(aJ,aI)!=aK.charAt(aI-aL)){return false;}}return true;};g.getchar="function(aI,aH){return" string.fromcharcode(ai.getuint8(ah));};g.createstring="function(aM,aL,aJ){var" ah="new" arraybuffer(aj*2);var ak="new" uint16array(ah);for(var ai="0;aI<aJ;aI++){aK[aI]=aM.getUint8(aL+aI);}return" string.fromcharcode.apply(null,ak);};g._$ls="function(aP,aM,aR,aK){if(aP" instanceof arraybuffer){ap="new" dataview(ap);}var al="aR;var" aj="false;var" aq="false;var" as="0;var" ao="G.getChar(aP,aL);if(aO=="-"){aJ=true;aL++;}var" an="false;for(;aL<aM;aL++){aO=G.getChar(aP,aL);switch(aO){case"0":aS=aS*10;break;case"1":aS=aS*10+1;break;case"2":aS=aS*10+2;break;case"3":aS=aS*10+3;break;case"4":aS=aS*10+4;break;case"5":aS=aS*10+5;break;case"6":aS=aS*10+6;break;case"7":aS=aS*10+7;break;case"8":aS=aS*10+8;break;case"9":aS=aS*10+9;break;case".":aQ=true;aL++;aN=true;break;default:aN=true;break;}if(aN){break;}}if(aQ){var" as;};function g(){if(j){return;}this._$ob="null;}g.prototype._$zP=function(){this._$Ob=new" array();};g.prototype._$f0="function(aH){this._$Ob=aH._$nP();};g.prototype._$Ur=function(aK){if(aK._$WS()){return" true;}var>=0;--aJ){var aI=this._$Ob[aJ].getParamIndex(aH);if(aI==aA._$ds){aI=aK.getParamIndex(this._$Ob[aJ].getParamID());}if(aK._$Xb(aI)){return true;}}return false;};g.prototype._$Q2=function(aL,aV){var aX=this._$Ob.length;var aJ=aL._$v2();var aN=0;var aI;var aQ;for(var aK=0;aK<aX;aK++){var 23242 ah="this._$Ob[aK];aI=aH.getParamIndex(aJ);if(aI==aA._$ds){aI=aL.getParamIndex(aH.getParamID());aH._$Pb(aI,aJ);}if(aI<0){throw" new exception("err : "+ah.getparamid());}var au="aI<0?0:aL.getParamFloat(aI);aQ=aH._$N2();var" am="aH._$d2();var" ap="-1;var" at="0;var" as;var ar;if(aq<1){}else{if(aq="=1){aS=aM[0];if(aS-aw._$J<aU&&aU<aS+aw._$J){aP=0;aT=0;}else{aP=0;aV[0]=true;}}else{aS=aM[0];if(aU<aS-aw._$J){aP=0;aV[0]=true;}else{if(aU<aS+aw._$J){aP=0;}else{var" aw="false;for(var" ao="1;aO<aQ;++aO){aR=aM[aO];if(aU<aR+aw._$J){if(aR-aw._$J<aU){aP=aO;}else{aP=aO-1;aT=(aU-aS)/(aR-aS);aN++;}aW=true;break;}aS=aR;}if(!aW){aP=aQ-1;aT=0;aV[0]=true;}}}}}aH._$wr(aP);aH._$AL(aT);}return" an;};g.prototype._$zr="function(aN,aT,aP){var" ar="1<<aP;if(aR+1">aw._$Qb){console.log("err 23245\n");}var aS=this._$Ob.length;var aK=1;var aH=1;var aJ=0;for(var aQ=0;aQ<aR;++aQ){aN[aQ]=0;}for(var al="0;aL<aS;++aL){var" ai="this._$Ob[aL];if(aI._$SL()==0){var" ao="aI._$Lr()*aK;if(aO<0&&Q._$3T){throw" new exception("err 23246");}for(var aq="0;aQ<aR;++aQ){aN[aQ]+=aO;}}else{var" am="aK*(aI._$Lr()+1);for(var" float32array(ah);for(var aa();ai._$yp(aj);ai._$t2(ah,am);this._$ob.push(ai);};g.prototype._$j2="function(aO){var" an="aO;var" ak="0;aK<aM;++aK){var" ah="aI._$N2();var" aj="aN%aI._$N2();var" ",ai.getparamid(),aj,al);an =ah;}console.log("\n");};g.prototype.getparamcount="function(){return" this._$ob.length;};g.prototype._$zs="function(){return" this._$ob;};function ac(){this.m="new" float32array(16);this.identity();}ac.prototype.identity="function(){for(var" this.m;};ac.prototype.getcopymatrix="function(){return" float32array(this.m);};ac.prototype.setmatrix="function(aI){if(aI==null||aI.length!=16){return;}for(var" null;}if(this="=aJ){this.mult_safe(this.m,aH.m,aJ.m,aI);}else{this.mult_fast(this.m,aH.m,aJ.m,aI);}return" aj;};ac.prototype.mult_safe="function(aI,aH,aM,aJ){if(aI==aM){var" array(16);this.mult_fast(ai,ah,al,aj);for(var>=0;--aK){aM[aK]=aL[aK];}}else{this.mult_fast(aI,aH,aM,aJ);}};ac.prototype.mult_fast=function(aI,aH,aK,aJ){if(aJ){aK[0]=aI[0]*aH[0]+aI[4]*aH[1]+aI[8]*aH[2];aK[4]=aI[0]*aH[4]+aI[4]*aH[5]+aI[8]*aH[6];aK[8]=aI[0]*aH[8]+aI[4]*aH[9]+aI[8]*aH[10];aK[12]=aI[0]*aH[12]+aI[4]*aH[13]+aI[8]*aH[14]+aI[12];aK[1]=aI[1]*aH[0]+aI[5]*aH[1]+aI[9]*aH[2];aK[5]=aI[1]*aH[4]+aI[5]*aH[5]+aI[9]*aH[6];aK[9]=aI[1]*aH[8]+aI[5]*aH[9]+aI[9]*aH[10];aK[13]=aI[1]*aH[12]+aI[5]*aH[13]+aI[9]*aH[14]+aI[13];aK[2]=aI[2]*aH[0]+aI[6]*aH[1]+aI[10]*aH[2];aK[6]=aI[2]*aH[4]+aI[6]*aH[5]+aI[10]*aH[6];aK[10]=aI[2]*aH[8]+aI[6]*aH[9]+aI[10]*aH[10];aK[14]=aI[2]*aH[12]+aI[6]*aH[13]+aI[10]*aH[14]+aI[14];aK[3]=aK[7]=aK[11]=0;aK[15]=1;}else{aK[0]=aI[0]*aH[0]+aI[4]*aH[1]+aI[8]*aH[2]+aI[12]*aH[3];aK[4]=aI[0]*aH[4]+aI[4]*aH[5]+aI[8]*aH[6]+aI[12]*aH[7];aK[8]=aI[0]*aH[8]+aI[4]*aH[9]+aI[8]*aH[10]+aI[12]*aH[11];aK[12]=aI[0]*aH[12]+aI[4]*aH[13]+aI[8]*aH[14]+aI[12]*aH[15];aK[1]=aI[1]*aH[0]+aI[5]*aH[1]+aI[9]*aH[2]+aI[13]*aH[3];aK[5]=aI[1]*aH[4]+aI[5]*aH[5]+aI[9]*aH[6]+aI[13]*aH[7];aK[9]=aI[1]*aH[8]+aI[5]*aH[9]+aI[9]*aH[10]+aI[13]*aH[11];aK[13]=aI[1]*aH[12]+aI[5]*aH[13]+aI[9]*aH[14]+aI[13]*aH[15];aK[2]=aI[2]*aH[0]+aI[6]*aH[1]+aI[10]*aH[2]+aI[14]*aH[3];aK[6]=aI[2]*aH[4]+aI[6]*aH[5]+aI[10]*aH[6]+aI[14]*aH[7];aK[10]=aI[2]*aH[8]+aI[6]*aH[9]+aI[10]*aH[10]+aI[14]*aH[11];aK[14]=aI[2]*aH[12]+aI[6]*aH[13]+aI[10]*aH[14]+aI[14]*aH[15];aK[3]=aI[3]*aH[0]+aI[7]*aH[1]+aI[11]*aH[2]+aI[15]*aH[3];aK[7]=aI[3]*aH[4]+aI[7]*aH[5]+aI[11]*aH[6]+aI[15]*aH[7];aK[11]=aI[3]*aH[8]+aI[7]*aH[9]+aI[11]*aH[10]+aI[15]*aH[11];aK[15]=aI[3]*aH[12]+aI[7]*aH[13]+aI[11]*aH[14]+aI[15]*aH[15];}};ac.prototype.translate=function(aH,aJ,aI){this.m[12]=this.m[0]*aH+this.m[4]*aJ+this.m[8]*aI+this.m[12];this.m[13]=this.m[1]*aH+this.m[5]*aJ+this.m[9]*aI+this.m[13];this.m[14]=this.m[2]*aH+this.m[6]*aJ+this.m[10]*aI+this.m[14];this.m[15]=this.m[3]*aH+this.m[7]*aJ+this.m[11]*aI+this.m[15];};ac.prototype.scale=function(aJ,aI,aH){this.m[0]*=aJ;this.m[4]*=aI;this.m[8]*=aH;this.m[1]*=aJ;this.m[5]*=aI;this.m[9]*=aH;this.m[2]*=aJ;this.m[6]*=aI;this.m[10]*=aH;this.m[3]*=aJ;this.m[7]*=aI;this.m[11]*=aH;};ac.prototype.rotateX=function(aH){var aK=aC.fcos(aH);var aJ=aC._$9(aH);var aI=this.m[4];this.m[4]=aI*aK+this.m[8]*aJ;this.m[8]=aI*-aJ+this.m[8]*aK;aI=this.m[5];this.m[5]=aI*aK+this.m[9]*aJ;this.m[9]=aI*-aJ+this.m[9]*aK;aI=this.m[6];this.m[6]=aI*aK+this.m[10]*aJ;this.m[10]=aI*-aJ+this.m[10]*aK;aI=this.m[7];this.m[7]=aI*aK+this.m[11]*aJ;this.m[11]=aI*-aJ+this.m[11]*aK;};ac.prototype.rotateY=function(aH){var aK=aC.fcos(aH);var aJ=aC._$9(aH);var aI=this.m[0];this.m[0]=aI*aK+this.m[8]*-aJ;this.m[8]=aI*aJ+this.m[8]*aK;aI=this.m[1];this.m[1]=aI*aK+this.m[9]*-aJ;this.m[9]=aI*aJ+this.m[9]*aK;aI=m[2];this.m[2]=aI*aK+this.m[10]*-aJ;this.m[10]=aI*aJ+this.m[10]*aK;aI=m[3];this.m[3]=aI*aK+this.m[11]*-aJ;this.m[11]=aI*aJ+this.m[11]*aK;};ac.prototype.rotateZ=function(aH){var aK=aC.fcos(aH);var aJ=aC._$9(aH);var aI=this.m[0];this.m[0]=aI*aK+this.m[4]*aJ;this.m[4]=aI*-aJ+this.m[4]*aK;aI=this.m[1];this.m[1]=aI*aK+this.m[5]*aJ;this.m[5]=aI*-aJ+this.m[5]*aK;aI=this.m[2];this.m[2]=aI*aK+this.m[6]*aJ;this.m[6]=aI*-aJ+this.m[6]*aK;aI=this.m[3];this.m[3]=aI*aK+this.m[7]*aJ;this.m[7]=aI*-aJ+this.m[7]*aK;};function Z(aH){if(j){return;}ak.prototype.constructor.call(this,aH);}Z.prototype=new ak();Z._$tP=new Object();Z._$27=function(){Z._$tP.clear();};Z.getID=function(aH){var aI=Z._$tP[aH];if(aI==null){aI=new Z(aH);Z._$tP[aH]=aI;}return aI;};Z.prototype._$3s=function(){return new Z();};function aD(){if(j){return;}this._$7=1;this._$f=0;this._$H=0;this._$g=1;this._$k=0;this._$w=0;this._$hi=STATE_IDENTITY;this._$Z=_$pS;}aD._$kS=-1;aD._$pS=0;aD._$hb=1;aD.STATE_IDENTITY=0;aD._$gb=1;aD._$fo=2;aD._$go=4;aD.prototype.transform=function(aK,aI,aH){var aT,aS,aR,aM,aL,aJ;var aQ=0;var aN=0;switch(this._$hi){default:return;case (aD._$go|aD._$fo|aD._$gb):aT=this._$7;aS=this._$H;aR=this._$k;aM=this._$f;aL=this._$g;aJ=this._$w;while(--aH>=0){var aP=aK[aQ++];var aO=aK[aQ++];aI[aN++]=(aT*aP+aS*aO+aR);aI[aN++]=(aM*aP+aL*aO+aJ);}return;case (aD._$go|aD._$fo):aT=this._$7;aS=this._$H;aM=this._$f;aL=this._$g;while(--aH>=0){var aP=aK[aQ++];var aO=aK[aQ++];aI[aN++]=(aT*aP+aS*aO);aI[aN++]=(aM*aP+aL*aO);}return;case (aD._$go|aD._$gb):aS=this._$H;aR=this._$k;aM=this._$f;aJ=this._$w;while(--aH>=0){var aP=aK[aQ++];aI[aN++]=(aS*aK[aQ++]+aR);aI[aN++]=(aM*aP+aJ);}return;case (aD._$go):aS=this._$H;aM=this._$f;while(--aH>=0){var aP=aK[aQ++];aI[aN++]=(aS*aK[aQ++]);aI[aN++]=(aM*aP);}return;case (aD._$fo|aD._$gb):aT=this._$7;aR=this._$k;aL=this._$g;aJ=this._$w;while(--aH>=0){aI[aN++]=(aT*aK[aQ++]+aR);aI[aN++]=(aL*aK[aQ++]+aJ);}return;case (aD._$fo):aT=this._$7;aL=this._$g;while(--aH>=0){aI[aN++]=(aT*aK[aQ++]);aI[aN++]=(aL*aK[aQ++]);}return;case (aD._$gb):aR=this._$k;aJ=this._$w;while(--aH>=0){aI[aN++]=(aK[aQ++]+aR);aI[aN++]=(aK[aQ++]+aJ);}return;case (aD.STATE_IDENTITY):if(aK!=aI||aQ!=aN){P._$jT(aK,aQ,aI,aN,aH*2);}return;}};aD.prototype.update=function(){if(this._$H==0&&this._$f==0){if(this._$7==1&&this._$g==1){if(this._$k==0&&this._$w==0){this._$hi=aD.STATE_IDENTITY;this._$Z=aD._$pS;}else{this._$hi=aD._$gb;this._$Z=aD._$hb;}}else{if(this._$k==0&&this._$w==0){this._$hi=aD._$fo;this._$Z=aD._$kS;}else{this._$hi=(aD._$fo|aD._$gb);this._$Z=aD._$kS;}}}else{if(this._$7==0&&this._$g==0){if(this._$k==0&&this._$w==0){this._$hi=aD._$go;this._$Z=aD._$kS;}else{this._$hi=(aD._$go|aD._$gb);this._$Z=aD._$kS;}}else{if(this._$k==0&&this._$w==0){this._$hi=(aD._$go|aD._$fo);this._$Z=aD._$kS;}else{this._$hi=(aD._$go|aD._$fo|aD._$gb);this._$Z=aD._$kS;}}}};aD.prototype._$RT=function(aK){this._$IT(aK);var aJ=aK[0];var aH=aK[2];var aN=aK[1];var aM=aK[3];var aI=Math.sqrt(aJ*aJ+aN*aN);var aL=aJ*aM-aH*aN;if(aI==0){if(Q._$so){console.log("affine._$RT() / rt==0");}}else{aK[0]=aI;aK[1]=aL/aI;aK[2]=(aN*aM+aJ*aH)/aL;aK[3]=Math.atan2(aN,aJ);}};aD.prototype._$ho=function(aN,aM,aI,aH){var aL=new Float32Array(6);var aK=new Float32Array(6);aN._$RT(aL);aM._$RT(aK);var aJ=new Float32Array(6);aJ[0]=aL[0]+(aK[0]-aL[0])*aI;aJ[1]=aL[1]+(aK[1]-aL[1])*aI;aJ[2]=aL[2]+(aK[2]-aL[2])*aI;aJ[3]=aL[3]+(aK[3]-aL[3])*aI;aJ[4]=aL[4]+(aK[4]-aL[4])*aI;aJ[5]=aL[5]+(aK[5]-aL[5])*aI;aH._$CT(aJ);};aD.prototype._$CT=function(aJ){var aI=Math.cos(aJ[3]);var aH=Math.sin(aJ[3]);this._$7=aJ[0]*aI;this._$f=aJ[0]*aH;this._$H=aJ[1]*(aJ[2]*aI-aH);this._$g=aJ[1]*(aJ[2]*aH+aI);this._$k=aJ[4];this._$w=aJ[5];this.update();};aD.prototype._$IT=function(aH){aH[0]=this._$7;aH[1]=this._$f;aH[2]=this._$H;aH[3]=this._$g;aH[4]=this._$k;aH[5]=this._$w;};function Y(){if(j){return;}ah.prototype.constructor.call(this);this.motions=new Array();this._$7r=null;this._$7r=Y._$Co++;this._$D0=30;this._$yT=0;this._$E=true;this.loopFadeIn=true;this._$AS=-1;_$a0();}Y.prototype=new ah();Y._$cs="VISIBLE:";Y._$ar="LAYOUT:";Y._$Co=0;Y._$D2=[];Y._$1T=1;Y.loadMotion=function(aR){var aM=new Y();var aI=[0];var aP=aR.length;aM._$yT=0;for(var aJ=0;aJ<aP;++aJ){var aq="(aR[aJ]&255);if(aQ=="\n"||aQ=="\r"){continue;}if(aQ=="#"){for(;aJ<aP;++aJ){if(aR[aJ]=="\n"||aR[aJ]=="\r"){break;}}continue;}if(aQ=="$"){var" at="aJ;var" ak="-1;for(;aJ<aP;++aJ){aQ=(aR[aJ]&255);if(aQ=="\r"||aQ=="\n"){break;}if(aQ=="="){aK=aJ;break;}}var" ao="false;if(aK">=0){if(aK==aT+4&&aR[aT+1]=="f"&&aR[aT+2]=="p"&&aR[aT+3]=="s"){aO=true;}for(aJ=aK+1;aJ<aP;++aJ){aQ=(aR[aJ]&255);if(aQ=="\r"||aQ=="\n"){break;}if(aQ==","||aQ==" "||aq="="\t"){continue;}var" al="G._$LS(aR,aP,aJ,aI);if(aI[0]">0){if(aO&&5<aL&&aL<121){aM._$D0=aL;}}aJ=aI[0];}}for(;aJ<aP;++aJ){if(aR[aJ]=="\n"||aR[aJ]=="\r"){break;}}continue;}if(("a"<=aQ&&aQ<="z")||("A"<=aQ&&aQ<="Z")||aQ=="_"){var at="aJ;var" ak="-1;for(;aJ<aP;++aJ){aQ=(aR[aJ]&255);if(aQ=="\r"||aQ=="\n"){break;}if(aQ=="="){aK=aJ;break;}}if(aK">=0){var aN=new t();if(G.startsWith(aR,aT,Y._$cs)){aN._$RP=t._$hs;aN._$4P=new String(aR,aT,aK-aT);}else{if(G.startsWith(aR,aT,Y._$ar)){aN._$4P=new String(aR,aT+7,aK-aT-7);if(G.startsWith(aR,aT+7,"ANCHOR_X")){aN._$RP=t._$xs;}else{if(G.startsWith(aR,aT+7,"ANCHOR_Y")){aN._$RP=t._$us;}else{if(G.startsWith(aR,aT+7,"SCALE_X")){aN._$RP=t._$qs;}else{if(G.startsWith(aR,aT+7,"SCALE_Y")){aN._$RP=t._$Ys;}else{if(G.startsWith(aR,aT+7,"X")){aN._$RP=t._$ws;}else{if(G.startsWith(aR,aT+7,"Y")){aN._$RP=t._$Ns;}}}}}}}else{aN._$RP=t._$Fr;aN._$4P=new String(aR,aT,aK-aT);}}aM.motions.push(aN);var aS=0;Y._$D2.clear();for(aJ=aK+1;aJ<aP;++aJ){aQ=(aR[aJ]&255);if(aQ=="\r"||aQ=="\n"){break;}if(aQ==","||aQ==" "||aq="="\t"){continue;}var" al="G._$LS(aR,aP,aJ,aI);if(aI[0]">0){Y._$D2.push(aL);aS++;var aH=aI[0];if(aH<aJ){console.log("_$n0 _$hi . @live2dmotion loadmotion()\n");break;}aj="aH;}}aN._$I0=Y._$D2._$BL();if(aS">aM._$yT){aM._$yT=aS;}}}}aM._$AS=((1000*aM._$yT)/aM._$D0)|0;return aM;};Y.prototype.getDurationMSec=function(){return this._$AS;};Y.prototype.dump=function(){for(var aJ=0;aJ<this.motions.length;aJ++){var ah="this.motions[aJ];console.log("_$wL[%s]" [%d]. ",ah._$4p,ah._$i0.length);for(var ai="0;aI<aH._$I0.length&&aI<10;aI++){console.log("%5.2f" ,",ah._$i0[ai]);}console.log("\n");}};y.prototype.updateparamexe="function(aH,aL,aO,aX){var" am="aL-aX._$z2;var" av="aM*this._$D0/1000;var" aj="aV|0;var" ap="aV-aJ;for(var" au="0;aU<this.motions.length;aU++){var" as="this.motions[aU];var" ak="aS._$I0.length;var" aq="aS._$4P;if(aS._$RP==t._$hs){var" at="aS._$I0[(aJ">=aK?aK-1:aJ)];aH.setParamFloat(aQ,aT);}else{if(t._$ws<=aS._$RP&&aS._$RP<=t._$Ys){}else{var ar="aH.getParamFloat(aQ);var" ay="aS._$I0[(aJ">=aK?aK-1:aJ)];var aW=aS._$I0[(aJ+1>=aK?aK-1:aJ+1)];var aI=aY+(aW-aY)*aP;var aN=aR+(aI-aR)*aO;aH.setParamFloat(aQ,aN);}}}if(aJ>=this._$yT){if(this._$E){aX._$z2=aL;if(this.loopFadeIn){aX._$bs=aL;}}else{aX._$9L=true;}}};Y.prototype._$r0=function(){return this._$E;};Y.prototype._$aL=function(aH){this._$E=aH;};Y.prototype.isLoopFadeIn=function(){return this.loopFadeIn;};Y.prototype.setLoopFadeIn=function(aH){this.loopFadeIn=aH;};function aE(){this._$P=new Float32Array(100);this.size=0;}aE.prototype.clear=function(){this.size=0;};aE.prototype.add=function(aI){if(this._$P.length<=this.size){var ah="new" float32array(this.size*2);p._$jt(this._$p,0,ah,0,this.size);this._$p="aH;}this._$P[this.size++]=aI;};aE.prototype._$BL=function(){var" float32array(this.size);p._$jt(this._$p,0,ah,0,this.size);return ah;};function t(){this._$4p="null;this._$I0=null;this._$RP=null;}t._$Fr=0;t._$hs=1;t._$ws=100;t._$Ns=101;t._$xs=102;t._$us=103;t._$qs=104;t._$Ys=105;function" aw(){}aw._$ms="1;aw._$Qs=2;aw._$i2=0;aw._$No=2;aw._$do=aw._$Ms;aw._$Ls=true;aw._$1r=5;aw._$Qb=65;aw._$J=0.0001;aw._$FT=0.001;aw._$Ss=3;function" ay(){}ay._$o7="6;ay._$S7=7;ay._$s7=8;ay._$77=9;ay.LIVE2D_FORMAT_VERSION_V2_10_SDK2=10;ay.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1=11;ay._$T7=ay.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1;ay._$Is=-2004318072;ay._$h0=0;ay._$4L=23;ay._$7P=33;ay._$uT=function(aH){console.log("_$bo" :: _$6 _$mo _$e0 : %d\n",ah);};ay._$9o="function(aH){if(aH<40){ay._$uT(aH);return" null;}else{if(ah<50){ay._$ut(ah);return null;}else{if(ah<60){ay._$ut(ah);return null;}else{if(ah<100){switch(ah){case 65:return new e();case 66:return g();case 67:return aa();case 68:return ab();case 69:return x();case 70:return b();default:ay._$ut(ah);return null;}}else{if(ah<150){switch(ah){case 131:return f();case 133:return s();case 136:return w();case 137:return an();case 142:return aq();}}}}}}ay._$ut(ah);return null;};function y(ah){if(j){return;}this._$qt="true;this._$co=-1;this._$qo=0;this._$pb=new" array(y._$is);this._$_2="new" float32array(y._$is);this._$vr="new" float32array(y._$is);this._$rr="new" float32array(y._$is);this._$or="new" float32array(y._$is);this._$fs="new" float32array(y._$is);this._$js="new" array(y._$is);this._$3s="new" array();this._$as="new" array();this._$bo="null;this._$F2=new" array();this._$db="new" array();this._$8b="new" array();this._$hr="new" array();this._$ws="null;this._$Vs=null;this._$Er=null;this._$Es=new" int16array(aw._$qb);this._$zp="new" float32array(aw._$1r*2);this._$ri="aH;this._$b0=y._$HP++;this.clipManager=null;this.dp_webgl=null;}y._$HP=0;y._$_0=true;y._$V2=-1;y._$W0=-1;y._$jr=false;y._$ZS=true;y._$tr=(-1000000);y._$lr=(1000000);y._$is=32;y._$e=false;y.prototype.getDrawDataIndex=function(aI){for(var">=0;--aH){if(this._$aS[aH]!=null&&this._$aS[aH].getDrawDataID()==aI){return aH;}}return -1;};y.prototype.getDrawData=function(aH){if(aH instanceof Z){if(this._$Bo==null){this._$Bo=new Object();var aJ=this._$aS.length;for(var aI=0;aI<aJ;aI++){var al="this._$aS[aI];var" ak="aL.getDrawDataID();if(aK==null){continue;}this._$Bo[aK]=aL;}}return" this._$bo[id];}else{if(ah<this._$as.length){return this._$as[ah];}else{return null;}}};y.prototype.release="function(){this._$3S.clear();this._$aS.clear();this._$F2.clear();if(this._$Bo!=null){this._$Bo.clear();}this._$db.clear();this._$8b.clear();this._$Hr.clear();};y.prototype.init=function(){this._$co++;if(this._$F2.length">0){this.release();}var aO=this._$Ri.getModelImpl();var aT=aO._$Xr();var aS=aT.length;var aH=new Array();var a3=new Array();for(var aV=0;aV<aS;++aV){var a4="aT[aV];this._$F2.push(a4);this._$Hr.push(a4.init(this));var" ak="a4.getBaseData();var" ar="aK.length;for(var" au="0;aU<aR;++aU){aH.push(aK[aU]);}for(var" am="aK[aU].init(this);aM._$l2(aV);a3.push(aM);}var" a1="a4.getDrawData();var" ap="a1.length;for(var" az="a1[aU];var" a0="aZ.init(this);a0._$IP=aV;this._$aS.push(aZ);this._$8b.push(a0);}}var" ay="aH.length;var" an="n._$2o();while(true){var" ax="false;for(var" av="0;aV<aY;++aV){var" al="aH[aV];if(aL==null){continue;}var" a2="aL.getTargetBaseDataID();if(a2==null||a2==aN||this.getBaseDataIndex(a2)">=0){this._$3S.push(aL);this._$db.push(a3[aV]);aH[aV]=null;aX=true;}}if(!aX){break;}}var aI=aO._$E2();if(aI!=null){var aJ=aI._$1s();if(aJ!=null){var aW=aJ.length;for(var aV=0;aV<aW;++aV){var aq="aJ[aV];if(aQ==null){continue;}this._$02(aQ.getParamID(),aQ.getDefaultValue(),aQ.getMinValue(),aQ.getMaxValue());}}}this.clipManager=new" w(this.dp_webgl);this.clipmanager.init(this,this._$as,this._$8b);this._$qt="true;};y.prototype.update=function(){if(y._$e){q.start("_$zL");}var" ak="this._$_2.length;for(var" aw="0;aW<aK;aW++){if(this._$_2[aW]!=this._$vr[aW]){this._$Js[aW]=y._$ZS;this._$vr[aW]=this._$_2[aW];}}var" ax="false;var" an="this._$aS.length;var" as="a._$or();var" az="a._$Pr();var" au="aZ-aS+1;if(this._$Ws==null||this._$Ws.length<aU){this._$Ws=new" int16array(au);this._$vs="new" int16array(au);}for(var int16array(an);}for(var al="null;for(var" av="0;aV<aQ;++aV){var" aj="this._$3S[aV];var" ah="this._$db[aV];try{aJ._$Nr(this,aH);aJ._$2b(this,aH);}catch(aY){if(aL==null){aL=aY;}}}if(aL!=null){if(y._$_0){q._$Rb(aL);}}if(y._$e){q.dump("_$UL");}if(y._$e){q.start("_$DL");}var" ar="null;for(var" ao="0;aO<aN;++aO){var" am="this._$aS[aO];var" ai="this._$8b[aO];try{aM._$Nr(this,aI);if(aI._$u2()){continue;}aM._$2b(this,aI);var" at="Math.floor(aM._$zS(this,aI)-aS);var" ap;try{ap="this._$Vs[aT];}catch(aY){console.log("_$li" :: %s @@_$fs\n",ay.tostring(),am.getdrawdataid().tostring());at="Math.floor(aM._$zS(this,aI)-aS);continue;}if(aP==y._$V2){this._$Ws[aT]=aO;}else{this._$Er[aP]=aO;}this._$Vs[aT]=aO;}catch(aY){if(aR==null){aR=aY;Q._$sT(Q._$H7);}}}if(aR!=null){if(y._$_0){q._$Rb(aR);}}if(y._$e){q.dump("_$DL");}if(y._$e){q.start("_$eL");}for(var">=0;aW--){this._$Js[aW]=y._$jr;}this._$QT=false;if(y._$e){q.dump("_$eL");}return aX;};y.prototype.preDraw=function(aH){if(this.clipManager!=null){aH._$ZT();this.clipManager.setupClip(this,aH);}};y.prototype.draw=function(aM){if(this._$Ws==null){q._$li("call _$Ri.update() before _$Ri.draw() ");return;}var aP=this._$Ws.length;aM._$ZT();for(var aK=0;aK<aP;++aK){var an="this._$Ws[aK];if(aN==y._$V2){continue;}do{var" ah="this._$aS[aN];var" ai="this._$8b[aN];if(aI._$yo()){var" aj="aI._$IP;var" al="this._$Hr[aJ];aI._$VS=aL.getPartsOpacity();aH.draw(aM,this,aI);}var" ao="this._$Er[aN];if(aO<=aN||aO==y._$W0){break;}aN=aO;}while(true);}};y.prototype.getParamIndex=function(aH){for(var">=0;--aI){if(this._$pb[aI]==aH){return aI;}}return this._$02(aH,0,y._$tr,y._$lr);};y.prototype._$BS=function(aH){return this.getBaseDataIndex(aH);};y.prototype.getBaseDataIndex=function(aH){for(var aI=this._$3S.length-1;aI>=0;--aI){if(this._$3S[aI]!=null&&this._$3S[aI].getBaseDataID()==aH){return aI;}}return -1;};y.prototype._$UT=function(aJ,aH){var aI=new Float32Array(aH);P._$jT(aJ,0,aI,0,aJ.length);return aI;};y.prototype._$02=function(aN,aM,aL,aH){if(this._$qo>=this._$pb.length){var aK=this._$pb.length;var aJ=new Array(aK*2);P._$jT(this._$pb,0,aJ,0,aK);this._$pb=aJ;this._$_2=this._$UT(this._$_2,aK*2);this._$vr=this._$UT(this._$vr,aK*2);this._$Rr=this._$UT(this._$Rr,aK*2);this._$Or=this._$UT(this._$Or,aK*2);var aI=new Array();P._$jT(this._$Js,0,aI,0,aK);this._$Js=aI;}this._$pb[this._$qo]=aN;this._$_2[this._$qo]=aM;this._$vr[this._$qo]=aM;this._$Rr[this._$qo]=aL;this._$Or[this._$qo]=aH;this._$Js[this._$qo]=y._$ZS;return this._$qo++;};y.prototype._$Zo=function(aI,aH){this._$3S[aI]=aH;};y.prototype.setParamFloat=function(aH,aI){if(aI<this._$Rr[aH]){aI=this._$Rr[aH];}if(aI>this._$Or[aH]){aI=this._$Or[aH];}this._$_2[aH]=aI;};y.prototype.loadParam=function(){var aH=this._$_2.length;if(aH>this._$fs.length){aH=this._$fs.length;}P._$jT(this._$fs,0,this._$_2,0,aH);};y.prototype.saveParam=function(){var aH=this._$_2.length;if(aH>this._$fs.length){this._$fs=new Float32Array(aH);}P._$jT(this._$_2,0,this._$fs,0,aH);};y.prototype._$v2=function(){return this._$co;};y.prototype._$WS=function(){return this._$QT;};y.prototype._$Xb=function(aH){return this._$Js[aH]==y._$ZS;};y.prototype._$vs=function(){return this._$Es;};y.prototype._$Tr=function(){return this._$ZP;};y.prototype.getBaseData=function(aH){return this._$3S[aH];};y.prototype.getParamFloat=function(aH){return this._$_2[aH];};y.prototype.getParamMax=function(aH){return this._$Or[aH];};y.prototype.getParamMin=function(aH){return this._$Rr[aH];};y.prototype.setPartsOpacity=function(aJ,aH){var aI=this._$Hr[aJ];aI.setPartsOpacity(aH);};y.prototype.getPartsOpacity=function(aI){var aH=this._$Hr[aI];return aH.getPartsOpacity();};y.prototype.getPartsDataIndex=function(aI){for(var aH=this._$F2.length-1;aH>=0;--aH){if(this._$F2[aH]!=null&&this._$F2[aH]._$p2()==aI){return aH;}}return -1;};y.prototype._$q2=function(aH){return this._$db[aH];};y.prototype._$C2=function(aH){return this._$8b[aH];};y.prototype._$Bb=function(aH){return this._$Hr[aH];};y.prototype._$5s=function(aO,aK){var aJ=this._$Ws.length;var aN=aO;for(var aL=0;aL<aJ;++aL){var ai="this._$Ws[aL];if(aI==y._$V2){continue;}do{var" am="this._$8b[aI];if(aM._$yo()){aM._$GT()._$B2(this,aM,aN);aN+=aK;}var" ah="this._$Er[aI];if(aH<=aI||aH==y._$W0){break;}aI=aH;}while(true);}};y.prototype.setDrawParam=function(aH){this.dp_webgl=aH;};y.prototype.getDrawParam=function(){return" this.dp_webgl;};function ap(){}ap._$0t="function(aH){return" ap._$0t(new _$5(ah));};ap._$0t="function(aJ){if(!aJ.exists()){throw" new _$ls(aj._$3b());}var int8array(ah);var _$xs(new _$kb(aj),8192);var ak;var al="0;while((aK=aM.read(aI,aL,aH-aL))">0){aL+=aK;}return aI;};ap._$C=function(aJ){var aI=null;var aL=null;try{aI=(aJ instanceof Array)?aJ:new _$Xs(aJ,8192);aL=new _$js();var aM=1000;var aK;var aH=new Int8Array(aM);while((aK=aI.read(aH))>0){aL.write(aH,0,aK);}return aL._$TS();}finally{if(aJ!=null){aJ.close();}if(aL!=null){aL.flush();aL.close();}}};function ar(){if(j){return;}this._$12=null;this._$bb=null;this._$_L=null;this._$jo=null;this._$iL=null;this._$0L=null;this._$Br=null;this._$Dr=null;this._$Cb=null;this._$mr=null;this._$_L=az.STATE_FIRST;this._$Br=4000;this._$Dr=100;this._$Cb=50;this._$mr=150;this._$jo=true;this._$iL="PARAM_EYE_L_OPEN";this._$0L="PARAM_EYE_R_OPEN";}ar.prototype._$T2=function(){var aI=P.getUserTimeMSec();var aH=Math._$10();return(aI+aH*(2*this._$Br-1));};ar.prototype._$uo=function(aH){this._$Br=aH;};ar.prototype._$QS=function(aI,aH,aJ){this._$Dr=aI;this._$Cb=aH;this._$mr=aJ;};ar.prototype._$7T=function(aI){var aK=P.getUserTimeMSec();var aH;var aJ=0;switch(this._$_L){case STATE_CLOSING:aJ=(aK-this._$bb)/this._$Dr;if(aJ>=1){aJ=1;this._$_L=az.STATE_CLOSED;this._$bb=aK;}aH=1-aJ;break;case STATE_CLOSED:aJ=(aK-this._$bb)/this._$Cb;if(aJ>=1){this._$_L=az.STATE_OPENING;this._$bb=aK;}aH=0;break;case STATE_OPENING:aJ=(aK-this._$bb)/this._$mr;if(aJ>=1){aJ=1;this._$_L=az.STATE_INTERVAL;this._$12=this._$T2();}aH=aJ;break;case STATE_INTERVAL:if(this._$12<aK){this._$_L=az.STATE_CLOSING;this._$bb=aK;}aH=1;break;case state_first:default:this._$_l="az.STATE_INTERVAL;this._$12=this._$T2();aH=1;break;}if(!this._$jo){aH=-aH;}aI.setParamFloat(this._$iL,aH);aI.setParamFloat(this._$0L,aH);};var" az="function(){};az.STATE_FIRST="STATE_FIRST";az.STATE_INTERVAL="STATE_INTERVAL";az.STATE_CLOSING="STATE_CLOSING";az.STATE_CLOSED="STATE_CLOSED";az.STATE_OPENING="STATE_OPENING";function" x(){if(j){return;}ax.prototype.constructor.call(this);this._$sb="new" int32array(x._$as);this._$u2="new" array();this.transform="null;this.gl=null;if(x._$NT==null){x._$NT=x._$9r(256);x._$vS=x._$9r(256);x._$no=x._$vb(256);}}x.prototype=new" ax();x._$as="32;x._$Gr=false;x._$NT=null;x._$vS=null;x._$no=null;x._$9r=function(aH){var" ai="new" float32array(ah);return ai;};x._$vb="function(aH){var" int16array(ah);return ai;};x._$cr="function(aI,aH){if(aI==null||aI._$yL()<aH.length){aI=x._$9r(aH.length*2);aI.put(aH);aI._$oT(0);}else{aI.clear();aI.put(aH);aI._$oT(0);}return" ai;};x._$mb="function(aI,aH){if(aI==null||aI._$yL()<aH.length){aI=x._$vb(aH.length*2);aI.put(aH);aI._$oT(0);}else{aI.clear();aI.put(aH);aI._$oT(0);}return" ai;};x._$hs="function(){return" x._$gr;};x._$as="function(aH){x._$Gr=aH;};x.prototype.setGL=function(aH){this.gl=aH;};x.prototype.setTransform=function(aH){this.transform=aH;};x.prototype._$ZT=function(){};x.prototype._$Uo=function(aO,aH,aP,aI,aQ,aM,aK,aJ){if(aM<0.01){return;}var" al="this._$U2[aO];var" an="aM">0.9?Q.EXPAND_W:0;this.gl.drawElements(aL,aP,aI,aQ,aM,aN,this.transform,aJ);};x.prototype._$Rs=function(){throw new Error("_$Rs");};x.prototype._$Ds=function(aH){throw new Error("_$Ds");};x.prototype._$K2=function(){for(var aH=0;aH<this._$sb.length;aH++){var ai="this._$sb[aH];if(aI!=0){this.gl._$Sr(1,this._$sb,aH);this._$sb[aH]=0;}}};x.prototype.setTexture=function(aI,aH){if(this._$sb.length<aI+1){this._$nS(aI);}this._$sb[aI]=aH;};x.prototype.setTexture=function(aH,aI){if(this._$sb.length<aH+1){this._$nS(aH);}this._$U2[aH]=aI;};x.prototype._$nS=function(aH){var" ak="Math.max(this._$sb.length*2,aH+1+10);var" int32array(ak);p._$jt(this._$sb,0,ai,0,this._$sb.length);this._$sb="aI;var" aj="new" array();p._$jt(this._$u2,0,aj,0,this._$u2.length);this._$u2="aJ;};function" ab(){if(j){return;}c.prototype.constructor.call(this);this._$gs="null;this._$Y0=null;}ab.prototype=new" c();ab._$xo="new" float32array(2);ab._$io="new" float32array(2);ab._$0o="new" float32array(2);ab._$lo="new" float32array(2);ab._$to="new" float32array(2);ab._$po="new" float32array(2);ab._$gt="new" array();ab.prototype._$zp="function(){this._$GS=new" g();this._$gs._$zp();this._$y0="new" array();};ab.prototype.gettype="function(){return" c._$c2;};ab.prototype._$f0="function(aH){c.prototype._$F0.call(this,aH);this._$GS=aH._$nP();this._$Y0=aH._$nP();c.prototype.readV2_opacity.call(this,aH);};ab.prototype.init=function(aH){var" al(this);ai._$yr="new" x();if(this._$32()){ai._$wr="new" x();}return ai;};ab.prototype._$nr="function(bf,bx){if(!((this==bx._$GT()))){console.log("###" assert!! ### ");}var bm="bx;if(!this._$GS._$Ur(bf)){return;}var" bw="ab._$gT;bw[0]=false;var" a2="this._$GS._$Q2(bf,bw);bx._$Ib(bw[0]);this.interpolateOpacity(bf,this._$GS,bx,bw);var" a3="bf._$vs();var" ba="bf._$Tr();this._$GS._$zr(a3,ba,a2);if(a2<=0){var" bn="this._$Y0[a3[0]];bm._$Yr.init(bn);}else{if(a2==1){var" bl="this._$Y0[a3[1]];var" a9="ba[0];bm._$Yr._$fL=bn._$fL+(bl._$fL-bn._$fL)*a9;bm._$Yr._$gL=bn._$gL+(bl._$gL-bn._$gL)*a9;bm._$Yr._$B0=bn._$B0+(bl._$B0-bn._$B0)*a9;bm._$Yr._$z0=bn._$z0+(bl._$z0-bn._$z0)*a9;bm._$Yr._$qT=bn._$qT+(bl._$qT-bn._$qT)*a9;}else{if(a2==2){var" a1="this._$Y0[a3[2]];var" a0="this._$Y0[a3[3]];var" a8="ba[1];var" bc="bn._$fL+(bl._$fL-bn._$fL)*a9;var" bb="a1._$fL+(a0._$fL-a1._$fL)*a9;bm._$Yr._$fL=bC+(bB-bC)*a8;bC=bn._$gL+(bl._$gL-bn._$gL)*a9;bB=a1._$gL+(a0._$gL-a1._$gL)*a9;bm._$Yr._$gL=bC+(bB-bC)*a8;bC=bn._$B0+(bl._$B0-bn._$B0)*a9;bB=a1._$B0+(a0._$B0-a1._$B0)*a9;bm._$Yr._$B0=bC+(bB-bC)*a8;bC=bn._$z0+(bl._$z0-bn._$z0)*a9;bB=a1._$z0+(a0._$z0-a1._$z0)*a9;bm._$Yr._$z0=bC+(bB-bC)*a8;bC=bn._$qT+(bl._$qT-bn._$qT)*a9;bB=a1._$qT+(a0._$qT-a1._$qT)*a9;bm._$Yr._$qT=bC+(bB-bC)*a8;}else{if(a2==3){var" ap="this._$Y0[a3[0]];var" ao="this._$Y0[a3[1]];var" bu="this._$Y0[a3[2]];var" bs="this._$Y0[a3[3]];var" bj="this._$Y0[a3[6]];var" bi="this._$Y0[a3[7]];var" a6="ba[2];var" bz="aK._$fL+(aJ._$fL-aK._$fL)*a9;var" by="bj._$fL+(bi._$fL-bj._$fL)*a9;bm._$Yr._$fL=(1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8);bC=aP._$gL+(aO._$gL-aP._$gL)*a9;bB=bu._$gL+(bs._$gL-bu._$gL)*a9;bz=aK._$gL+(aJ._$gL-aK._$gL)*a9;by=bj._$gL+(bi._$gL-bj._$gL)*a9;bm._$Yr._$gL=(1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8);bC=aP._$B0+(aO._$B0-aP._$B0)*a9;bB=bu._$B0+(bs._$B0-bu._$B0)*a9;bz=aK._$B0+(aJ._$B0-aK._$B0)*a9;by=bj._$B0+(bi._$B0-bj._$B0)*a9;bm._$Yr._$B0=(1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8);bC=aP._$z0+(aO._$z0-aP._$z0)*a9;bB=bu._$z0+(bs._$z0-bu._$z0)*a9;bz=aK._$z0+(aJ._$z0-aK._$z0)*a9;by=bj._$z0+(bi._$z0-bj._$z0)*a9;bm._$Yr._$z0=(1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8);bC=aP._$qT+(aO._$qT-aP._$qT)*a9;bB=bu._$qT+(bs._$qT-bu._$qT)*a9;bz=aK._$qT+(aJ._$qT-aK._$qT)*a9;by=bj._$qT+(bi._$qT-bj._$qT)*a9;bm._$Yr._$qT=(1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8);}else{if(a2==4){var" at="this._$Y0[a3[0]];var" as="this._$Y0[a3[1]];var" be="this._$Y0[a3[2]];var" bd="this._$Y0[a3[3]];var" an="this._$Y0[a3[4]];var" am="this._$Y0[a3[5]];var" bp="this._$Y0[a3[6]];var" bo="this._$Y0[a3[7]];var" bh="this._$Y0[a3[8]];var" bg="this._$Y0[a3[9]];var" ay="this._$Y0[a3[10]];var" aw="this._$Y0[a3[11]];var" a7="this._$Y0[a3[12]];var" a5="this._$Y0[a3[13]];var" ar="this._$Y0[a3[14]];var" aq="this._$Y0[a3[15]];var" a4="ba[3];var" bv="bh._$fL+(bg._$fL-bh._$fL)*a9;var" bt="aY._$fL+(aW._$fL-aY._$fL)*a9;var" br="a7._$fL+(a5._$fL-a7._$fL)*a9;var" bq="aR._$fL+(aQ._$fL-aR._$fL)*a9;bm._$Yr._$fL=(1-a4)*((1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8))+a4*((1-a6)*(bv+(bt-bv)*a8)+a6*(br+(bq-br)*a8));bC=aT._$gL+(aS._$gL-aT._$gL)*a9;bB=bE._$gL+(bD._$gL-bE._$gL)*a9;bz=aN._$gL+(aM._$gL-aN._$gL)*a9;by=bp._$gL+(bo._$gL-bp._$gL)*a9;bv=bh._$gL+(bg._$gL-bh._$gL)*a9;bt=aY._$gL+(aW._$gL-aY._$gL)*a9;br=a7._$gL+(a5._$gL-a7._$gL)*a9;bq=aR._$gL+(aQ._$gL-aR._$gL)*a9;bm._$Yr._$gL=(1-a4)*((1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8))+a4*((1-a6)*(bv+(bt-bv)*a8)+a6*(br+(bq-br)*a8));bC=aT._$B0+(aS._$B0-aT._$B0)*a9;bB=bE._$B0+(bD._$B0-bE._$B0)*a9;bz=aN._$B0+(aM._$B0-aN._$B0)*a9;by=bp._$B0+(bo._$B0-bp._$B0)*a9;bv=bh._$B0+(bg._$B0-bh._$B0)*a9;bt=aY._$B0+(aW._$B0-aY._$B0)*a9;br=a7._$B0+(a5._$B0-a7._$B0)*a9;bq=aR._$B0+(aQ._$B0-aR._$B0)*a9;bm._$Yr._$B0=(1-a4)*((1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8))+a4*((1-a6)*(bv+(bt-bv)*a8)+a6*(br+(bq-br)*a8));bC=aT._$z0+(aS._$z0-aT._$z0)*a9;bB=bE._$z0+(bD._$z0-bE._$z0)*a9;bz=aN._$z0+(aM._$z0-aN._$z0)*a9;by=bp._$z0+(bo._$z0-bp._$z0)*a9;bv=bh._$z0+(bg._$z0-bh._$z0)*a9;bt=aY._$z0+(aW._$z0-aY._$z0)*a9;br=a7._$z0+(a5._$z0-a7._$z0)*a9;bq=aR._$z0+(aQ._$z0-aR._$z0)*a9;bm._$Yr._$z0=(1-a4)*((1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8))+a4*((1-a6)*(bv+(bt-bv)*a8)+a6*(br+(bq-br)*a8));bC=aT._$qT+(aS._$qT-aT._$qT)*a9;bB=bE._$qT+(bD._$qT-bE._$qT)*a9;bz=aN._$qT+(aM._$qT-aN._$qT)*a9;by=bp._$qT+(bo._$qT-bp._$qT)*a9;bv=bh._$qT+(bg._$qT-bh._$qT)*a9;bt=aY._$qT+(aW._$qT-aY._$qT)*a9;br=a7._$qT+(a5._$qT-a7._$qT)*a9;bq=aR._$qT+(aQ._$qT-aR._$qT)*a9;bm._$Yr._$qT=(1-a4)*((1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8))+a4*((1-a6)*(bv+(bt-bv)*a8)+a6*(br+(bq-br)*a8));}else{var" av="Math.pow(2,a2)|0;var" az="new" float32array(av);for(var bk="0;bk<aV;bk++){var" ah="1;for(var" al="0;aL<a2;aL++){aH*=(aI%2==0)?(1-ba[aL]):ba[aL];aI/=2;}aZ[bk]=aH;}var" array();for(var au="0;aU<aV;aU++){bA[aU]=this._$Y0[a3[aU]];}var" _$0p _$g :: %s",at);}ar._$hs(false);}else{var ax="aU._$gL;var" an,am;var to transform _$sp\n");}};function al(ah){b.prototype.constructor.call(this,ah);this._$8r="c._$ur;this._$Yr=null;this._$Wr=null;}al.prototype=new" b();function a(){if(j){return;}ae.prototype.constructor.call(this);this._$gp="null;this._$dr=null;this._$GS=null;this._$qb=null;this._$Lb=null;this._$mS=null;}a.prototype=new" ae();a._$ur="-2;a._$ES=500;a._$wb=2;a._$8S=3;a._$os=4;a._$52=a._$ES;a._$R2=a._$ES;a._$Sb=function(aJ){for(var">=0;--aI){var aH=aJ[aI];if(aH<a._$52){a._$52=aH;}else{if(aH>a._$R2){a._$R2=aH;}}}};a._$or=function(){return a._$52;};a._$Pr=function(){return a._$R2;};a.prototype._$F0=function(aH){this._$gP=aH._$nP();this._$dr=aH._$nP();this._$GS=aH._$nP();this._$qb=aH._$6L();this._$Lb=aH._$cS();this._$mS=aH._$Tb();if(aH.getFormatVersion()>=ay._$T7){this.clipID=aH._$nP();this.clipIDList=this.convertClipIDForV2_11(this.clipID);}else{this.clipIDList=null;}a._$Sb(this._$Lb);};a.prototype.getClipIDList=function(){return this.clipIDList;};a.prototype._$Nr=function(aI,aH){aH._$IS[0]=false;aH._$Us=aG._$Z2(aI,this._$GS,aH._$IS,this._$Lb);if(Q._$Zs){}else{if(aH._$IS[0]){return;}}aH._$7s=aG._$br(aI,this._$GS,aH._$IS,this._$mS);};a.prototype._$2b=function(aH){};a.prototype.getDrawDataID=function(){return this._$gP;};a.prototype._$j2=function(aH){this._$gP=aH;};a.prototype.getOpacity=function(aH,aI){return aI._$7s;};a.prototype._$zS=function(aH,aI){return aI._$Us;};a.prototype.getTargetBaseDataID=function(){return this._$dr;};a.prototype._$gs=function(aH){this._$dr=aH;};a.prototype._$32=function(){return(this._$dr!=null&&(this._$dr!=n._$2o()));};a.prototype.getType=function(){};function aq(){if(j){return;}this._$NL=null;this._$3S=null;this._$aS=null;aq._$42++;}aq._$42=0;aq.prototype._$1b=function(){return this._$3S;};aq.prototype.getDrawDataList=function(){return this._$aS;};aq.prototype._$F0=function(aH){this._$NL=aH._$nP();this._$aS=aH._$nP();this._$3S=aH._$nP();};aq.prototype._$kr=function(aH){aH._$Zo(this._$3S);aH._$xo(this._$aS);this._$3S=null;this._$aS=null;};function v(){if(j){return;}aa.prototype.constructor.call(this);this._$zo=new x();}v.prototype=new aa();v.loadModel=function(aI){var aH=new v();aa._$62(aH,aI);return aH;};v.loadModel=function(aI){var aH=new v();aa._$62(aH,aI);return aH;};v._$to=function(){var aH=new v();return aH;};v._$er=function(aM){var aJ=new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");if(aJ.exists()==false){throw new _$ls("_$t0 _$_ _$6 _$Ui :: "+aJ._$PL());}var aH=["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1","../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1","../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1","../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"];var aK=v.loadModel(aJ._$3b());for(var aI=0;aI<aH.length;aI++){var al="new" _$5(ah[ai]);if(al.exists()="=false){throw" new _$ls("_$t0 _$_ _$6 _$ui :: "+al._$pl());}ak.settexture(ai,_$nl._$_o(am,al._$3b()));}return ak;};v.prototype.setgl="function(aH){this._$zo.setGL(aH);};v.prototype.setTransform=function(aH){this._$zo.setTransform(aH);};v.prototype.draw=function(){this._$5S.draw(this._$zo);};v.prototype._$K2=function(){this._$zo._$K2();};v.prototype.setTexture=function(aI,aH){if(this._$zo==null){q._$li("_$Yi" for qt _$ki _$xs() is _$ui!!");}this._$zo.settexture(ai,ah);};v.prototype.settexture="function(aI,aH){if(this._$zo==null){q._$li("_$Yi" _$ui!!");}this._$zo.settexture(ai,ah);};v.prototype._$rs="function(){return" this._$zo._$rs();};v.prototype._$ds="function(aH){this._$zo._$Ds(aH);};v.prototype.getDrawParam=function(){return" this._$zo;};function ao(){if(j){return;}ah.prototype.constructor.call(this);this.motions="new" array();this._$o2="null;this._$7r=ao._$Co++;this._$D0=30;this._$yT=0;this._$E=false;this.loopFadeIn=true;this._$rr=-1;this._$eP=0;}ao.prototype=new" ah();ao._$cs="VISIBLE:" ;ao._$ar="LAYOUT:" ;ao.mtn_prefix_fadein="FADEIN:" ;ao.mtn_prefix_fadeout="FADEOUT:" ;ao._$co="0;ao._$1T=1;ao.loadMotion=function(aJ){var" ai="ap._$C(aJ);var" ah="ao.loadMotion(aI);return" ah;};function p(ai,ah){return string.fromcharcode(ai.getuint8(ah));}ao.loadmotion="function(aT){if(aT" instanceof arraybuffer){at="new" dataview(at);}var an="new" ao();var aq="aT.byteLength;aN._$yT=0;for(var" aj="0;aJ<aQ;++aJ){var" as="p(aT,aJ);var" av="aJ;var" ak="-1;for(;aJ<aQ;++aJ){aS=p(aT,aJ);if(aS=="\r"||aS=="\n"){break;}if(aS=="="){aK=aJ;break;}}var" ap="false;if(aK">=0){if(aK==aV+4&&p(aT,aV+1)=="f"&&p(aT,aV+2)=="p"&&p(aT,aV+3)=="s"){aP=true;}for(aJ=aK+1;aJ<aQ;++aJ){aS=p(aT,aJ);if(aS=="\r"||aS=="\n"){break;}if(aS==","||aS==" "||as="="\t"){continue;}var" am="G._$LS(aT,aQ,aJ,aI);if(aI[0]">0){if(aP&&5<aM&&aM<121){aN._$D0=aM;}}aJ=aI[0];}}for(;aJ<aQ;++aJ){if(p(aT,aJ)=="\n"||p(aT,aJ)=="\r"){break;}}continue;}if((97<=aL&&aL<=122)||(65<=aL&&aL<=90)||aS=="_"){var av="aJ;var" ak="-1;for(;aJ<aQ;++aJ){aS=p(aT,aJ);if(aS=="\r"||aS=="\n"){break;}if(aS=="="){aK=aJ;break;}}if(aK">=0){var aO=new t();if(G.startsWith(aT,aV,ao._$cs)){aO._$RP=t._$hs;aO._$4P=G.createString(aT,aV,aK-aV);}else{if(G.startsWith(aT,aV,ao._$ar)){aO._$4P=G.createString(aT,aV+7,aK-aV-7);if(G.startsWith(aT,aV+7,"ANCHOR_X")){aO._$RP=t._$xs;}else{if(G.startsWith(aT,aV+7,"ANCHOR_Y")){aO._$RP=t._$us;}else{if(G.startsWith(aT,aV+7,"SCALE_X")){aO._$RP=t._$qs;}else{if(G.startsWith(aT,aV+7,"SCALE_Y")){aO._$RP=t._$Ys;}else{if(G.startsWith(aT,aV+7,"X")){aO._$RP=t._$ws;}else{if(G.startsWith(aT,aV+7,"Y")){aO._$RP=t._$Ns;}}}}}}}else{aO._$RP=t._$Fr;aO._$4P=G.createString(aT,aV,aK-aV);}}aN.motions.push(aO);var aU=0;var aR=[];for(aJ=aK+1;aJ<aQ;++aJ){aS=p(aT,aJ);if(aS=="\r"||aS=="\n"){break;}if(aS==","||aS==" "||as="="\t"){continue;}var" am="G._$LS(aT,aQ,aJ,aI);if(aI[0]">0){aR.push(aM);aU++;var aH=aI[0];if(aH<aJ){console.log("_$n0 _$hi . @live2dmotion loadmotion()\n");break;}aj="aH-1;}}aO._$I0=new" float32array(ar);if(au>aN._$yT){aN._$yT=aU;}}}}aN._$rr=((1000*aN._$yT)/aN._$D0)|0;return aN;};ao.prototype.getDurationMSec=function(){return this._$E?-1:this._$rr;};ao.prototype.getLoopDurationMSec=function(){return this._$rr;};ao.prototype.dump=function(){for(var aJ=0;aJ<this.motions.length;aJ++){var ah="this.motions[aJ];console.log("_$wL[%s]" [%d]. ",ah._$4p,ah._$i0.length);for(var ai="0;aI<aH._$I0.length&&aI<10;aI++){console.log("%5.2f" ,",ah._$i0[ai]);}console.log("\n");}};ao.prototype.updateparamexe="function(aJ,aN,aQ,a3){var" ao="aN-a3._$z2;var" a0="aO*this._$D0/1000;var" ak="a0|0;var" ar="a0-aK;for(var" az="0;aZ<this.motions.length;aZ++){var" av="this.motions[aZ];var" al="aV._$I0.length;var" at="aV._$4P;if(aV._$RP==t._$hs){var" ax="aV._$I0[(aK">=aL?aL-1:aK)];aJ.setParamFloat(aT,aX);}else{if(t._$ws<=aV._$RP&&aV._$RP<=t._$Ys){}else{var ah="aJ.getParamIndex(aT);var" a4="aJ.getModelContext();var" ay="a4.getParamMax(aH);var" aw="a4.getParamMin(aH);var" am="0.4;var" as="aM*(aY-aW);var" au="a4.getParamFloat(aH);var" a2="aV._$I0[(aK">=aL?aL-1:aK)];var a1=aV._$I0[(aK+1>=aL?aL-1:aK+1)];var aI;if((a2<a1&&a1-a2>aS)||(a2>a1&&a2-a1>aS)){aI=a2;}else{aI=a2+(a1-a2)*aR;}var aP=aU+(aI-aU)*aQ;aJ.setParamFloat(aT,aP);}}}if(aK>=this._$yT){if(this._$E){a3._$z2=aN;if(this.loopFadeIn){a3._$bs=aN;}}else{a3._$9L=true;}}this._$eP=aQ;};ao.prototype._$r0=function(){return this._$E;};ao.prototype._$aL=function(aH){this._$E=aH;};ao.prototype._$S0=function(){return this._$D0;};ao.prototype._$U0=function(aH){this._$D0=aH;};ao.prototype.isLoopFadeIn=function(){return this.loopFadeIn;};ao.prototype.setLoopFadeIn=function(aH){this.loopFadeIn=aH;};function aE(){this._$P=new Float32Array(100);this.size=0;}aE.prototype.clear=function(){this.size=0;};aE.prototype.add=function(aI){if(this._$P.length<=this.size){var ah="new" float32array(this.size*2);p._$jt(this._$p,0,ah,0,this.size);this._$p="aH;}this._$P[this.size++]=aI;};aE.prototype._$BL=function(){var" float32array(this.size);p._$jt(this._$p,0,ah,0,this.size);return ah;};function t(){this._$4p="null;this._$I0=null;this._$RP=null;}t._$Fr=0;t._$hs=1;t._$ws=100;t._$Ns=101;t._$xs=102;t._$us=103;t._$qs=104;t._$Ys=105;function" e(){if(j){return;}c.prototype.constructor.call(this);this._$o="0;this._$A=0;this._$GS=null;this._$Eo=null;}E.prototype=new" c();e._$gt="new" array();e.prototype._$zp="function(){this._$GS=new" g();this._$gs._$zp();};e.prototype._$f0="function(aH){c.prototype._$F0.call(this,aH);this._$A=aH._$6L();this._$o=aH._$6L();this._$GS=aH._$nP();this._$Eo=aH._$nP();c.prototype.readV2_opacity.call(this,aH);};E.prototype.init=function(aH){var" ai="new" h(this);var aj="(this._$o+1)*(this._$A+1);if(aI._$Cr!=null){aI._$Cr=null;}aI._$Cr=new" float32array(aj*2);if(ai._$hr!="null){aI._$hr=null;}if(this._$32()){aI._$hr=new" float32array(aj*2);}else{ai._$hr="null;}return" ai;};e.prototype._$nr="function(aJ,aI){var" ak="aI;if(!this._$GS._$Ur(aJ)){return;}var" al="this._$VT();var" _$0p _$g :: %s",ah);}al._$hs(false);}else{var an="aK.getBaseData(aL._$8r);var" am="aI.getTotalScale();aL.setTotalScale_notForClient(aM);var" ao="aI.getTotalOpacity();aL.setTotalOpacity(aO*aL.getInterpolatedOpacity());aN._$nb(aK,aI,aL._$Cr,aL._$hr,this._$VT(),0,2);aL._$hS(true);}else{aL._$hS(false);}}}};E.prototype._$nb=function(aL,aI,aH,aM,aO,aK,aJ){if(true){var" ap="(aN._$hr!=null)?aN._$hr:aN._$Cr;E.transformPoints_sdk2(aH,aM,aO,aK,aJ,aP,this._$o,this._$A);}else{this.transformPoints_sdk1(aL,aI,aH,aM,aO,aK,aJ);}};E.transformPoints_sdk2=function(a0,bc,a5,aP,aI,aR,aQ,aU){var" aw="a5*aI;var" av;var bn,bm;var at="0;var" as="0;var" bl="0;var" bk="0;var" bf="0;var" be="0;var" az="false;for(var" ba="aP;ba<aW;ba+=aI){var" bd,a7,a4,ax;a4="a0[ba];aX=a0[ba+1];bd=a4*aQ;a7=aX*aU;if(bd<0||a7<0||aQ<=bd||aU<=a7){var" a1="aQ+1;if(!aZ){aZ=true;aT=0.25*(aR[((0)+(0)*a1)*2]+aR[((aQ)+(0)*a1)*2]+aR[((0)+(aU)*a1)*2]+aR[((aQ)+(aU)*a1)*2]);aS=0.25*(aR[((0)+(0)*a1)*2+1]+aR[((aQ)+(0)*a1)*2+1]+aR[((0)+(aU)*a1)*2+1]+aR[((aQ)+(aU)*a1)*2+1]);var" bh="aR[((aQ)+(0)*a1)*2]-aR[((0)+(aU)*a1)*2];var" bg="aR[((aQ)+(0)*a1)*2+1]-aR[((0)+(aU)*a1)*2+1];bl=(aM+bh)*0.5;bk=(aL+bg)*0.5;bf=(aM-bh)*0.5;be=(aL-bg)*0.5;if(bl==0&&bk==0){}if(bf==0&&be==0){}aT-=0.5*(bl+bf);aS-=0.5*(bk+be);}if((-2<a4&&a4<3)&&(-2<aX&&aX<3)){if(a4<=0){if(aX<=0){var" a3="aR[((0)+(0)*a1)*2];var" a2="aR[((0)+(0)*a1)*2+1];var" a8="aT-2*bl;var" a6="aS-2*bk;var" bj="0.5*(a4-(-2));var" bi="0.5*(aX-(-2));if(bj+bi<=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}else{if(aX">=1){var aK=aR[((0)+(aU)*a1)*2];var aJ=aR[((0)+(aU)*a1)*2+1];var aO=aT-2*bl+1*bf;var aN=aS-2*bk+1*be;var a3=aT+3*bf;var a2=aS+3*be;var a8=aT-2*bl+3*bf;var a6=aS-2*bk+3*be;var bj=0.5*(a4-(-2));var bi=0.5*(aX-(1));if(bj+bi<=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}else{var ah="(a7|0);if(aH==aU){aH=aU-1;}var" bj="0.5*(a4-(-2));var" bi="a7-aH;var" bb="aH/aU;var" a9="(aH+1)/aU;var" ak="aR[((0)+(aH)*a1)*2];var" aj="aR[((0)+(aH)*a1)*2+1];var" a3="aR[((0)+(aH+1)*a1)*2];var" a2="aR[((0)+(aH+1)*a1)*2+1];var" ao="aT-2*bl+bb*bf;var" an="aS-2*bk+bb*be;var" a8="aT-2*bl+a9*bf;var" a6="aS-2*bk+a9*be;if(bj+bi<=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}}}else{if(1<=a4){if(aX<=0){var">=1){var aO=aR[((aQ)+(aU)*a1)*2];var aN=aR[((aQ)+(aU)*a1)*2+1];var aK=aT+3*bl+1*bf;var aJ=aS+3*bk+1*be;var a8=aT+1*bl+3*bf;var a6=aS+1*bk+3*be;var a3=aT+3*bl+3*bf;var a2=aS+3*bk+3*be;var bj=0.5*(a4-(1));var bi=0.5*(aX-(1));if(bj+bi<=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}else{var ah="(a7|0);if(aH==aU){aH=aU-1;}var" bj="0.5*(a4-(1));var" bi="a7-aH;var" bb="aH/aU;var" a9="(aH+1)/aU;var" ao="aR[((aQ)+(aH)*a1)*2];var" an="aR[((aQ)+(aH)*a1)*2+1];var" a8="aR[((aQ)+(aH+1)*a1)*2];var" a6="aR[((aQ)+(aH+1)*a1)*2+1];var" ak="aT+3*bl+bb*bf;var" aj="aS+3*bk+bb*be;var" a3="aT+3*bl+a9*bf;var" a2="aS+3*bk+a9*be;if(bj+bi<=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}}}else{if(aX<=0){var" ay="(bd|0);if(aY==aQ){aY=aQ-1;}var" bp="aY/aQ;var" bo="(aY+1)/aQ;var">=1){var aY=(bd|0);if(aY==aQ){aY=aQ-1;}var bj=bd-aY;var bi=0.5*(aX-(1));var bp=aY/aQ;var bo=(aY+1)/aQ;var aO=aR[((aY)+(aU)*a1)*2];var aN=aR[((aY)+(aU)*a1)*2+1];var aK=aR[((aY+1)+(aU)*a1)*2];var aJ=aR[((aY+1)+(aU)*a1)*2+1];var a8=aT+bp*bl+3*bf;var a6=aS+bp*bk+3*be;var a3=aT+bo*bl+3*bf;var a2=aS+bo*bk+3*be;if(bj+bi<=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}else{System.err.printf("_$li calc : %.4f , @@bdboxgrid\n",a4,ax);}}}}}else{bc[ba]="aT+a4*bl+aX*bf;bc[ba+1]=aS+a4*bk+aX*be;}}else{bn=bd-(bd|0);bm=a7-(a7|0);aV=2*((bd|0)+((a7|0))*(aQ+1));if(bn+bm<1){bc[ba]=aR[aV]*(1-bn-bm)+aR[aV+2]*bn+aR[aV+2*(aQ+1)]*bm;bc[ba+1]=aR[aV+1]*(1-bn-bm)+aR[aV+3]*bn+aR[aV+2*(aQ+1)+1]*bm;}else{bc[ba]=aR[aV+2*(aQ+1)+2]*(bn-1+bm)+aR[aV+2*(aQ+1)]*(1-bn)+aR[aV+2]*(1-bm);bc[ba+1]=aR[aV+2*(aQ+1)+3]*(bn-1+bm)+aR[aV+2*(aQ+1)+1]*(1-bn)+aR[aV+3]*(1-bm);}}}};E.prototype.transformPoints_sdk1=function(aJ,aR,aL,a0,aU,aP,aZ){var" ah="aR;var" ao,an;var am="this._$o;var" aq="this._$A;var" ai="aU*aZ;var" as,ay;var av;var ax,aw;var at="(aH._$hr!=null)?aH._$hr:aH._$Cr;for(var" ak="aP;aK<aI;aK+=aZ){if(Q._$ts){aO=aL[aK];aN=aL[aK+1];if(aO<0){aO=0;}else{if(aO">1){aO=1;}}if(aN<0){aN=0;}else{if(aN>1){aN=1;}}aO*=aM;aN*=aQ;aS=(aO|0);aY=(aN|0);if(aS>aM-1){aS=aM-1;}if(aY>aQ-1){aY=aQ-1;}aX=aO-aS;aW=aN-aY;aV=2*(aS+aY*(aM+1));}else{aO=aL[aK]*aM;aN=aL[aK+1]*aQ;aX=aO-(aO|0);aW=aN-(aN|0);aV=2*((aO|0)+(aN|0)*(aM+1));}if(aX+aW<1){a0[aK]=aT[aV]*(1-aX-aW)+aT[aV+2]*aX+aT[aV+2*(aM+1)]*aW;a0[aK+1]=aT[aV+1]*(1-aX-aW)+aT[aV+3]*aX+aT[aV+2*(aM+1)+1]*aW;}else{a0[aK]=aT[aV+2*(aM+1)+2]*(aX-1+aW)+aT[aV+2*(aM+1)]*(1-aX)+aT[aV+2]*(1-aW);a0[aK+1]=aT[aV+2*(aM+1)+3]*(aX-1+aW)+aT[aV+2*(aM+1)+1]*(1-aX)+aT[aV+3]*(1-aW);}}};E.prototype._$VT=function(){return(this._$o+1)*(this._$A+1);};E.prototype.getType=function(){return c._$_b;};function h(ah){b.prototype.constructor.call(this,ah);this._$8r="c._$ur;this._$Cr=null;this._$hr=null;}H.prototype=new" b();function s(){if(j){return;}this.visible="true;this._$g0=false;this._$NL=null;this._$3S=null;this._$aS=null;s._$42++;}s._$42=0;s.prototype._$zP=function(){this._$3S=new" array();this._$as="new" array();};s.prototype._$f0="function(aH){this._$g0=aH._$8L();this.visible=aH._$8L();this._$NL=aH._$nP();this._$3S=aH._$nP();this._$aS=aH._$nP();};s.prototype.init=function(aI){var" ah="new" aj(this);ah.setpartsopacity(this.isvisible()?1:0);return ah;};s.prototype._$6o="function(aH){if(this._$3S==null){throw" new error("_$3s _$6 _$wo@_$6o");}this._$3s.push(ah);};s.prototype._$3o="function(aH){if(this._$aS==null){throw" error("_$as _$wo@_$3o");}this._$as.push(ah);};s.prototype._$zo="function(aH){this._$3S=aH;};s.prototype._$xo=function(aH){this._$aS=aH;};s.prototype.isVisible=function(){return" this.visible;};s.prototype._$ul="function(){return" this._$g0;};s.prototype._$kp="function(aH){this.visible=aH;};s.prototype._$ET=function(aH){this._$g0=aH;};s.prototype.getBaseData=function(){return" this._$3s;};s.prototype.getdrawdata="function(){return" this._$as;};s.prototype._$p2="function(){return" this._$nl;};s.prototype._$ob="function(aH){this._$NL=aH;};s.prototype.getPartsID=function(){return" this._$nl;};s.prototype._$mp="function(aH){this._$NL=aH;};function" aj(ah){this._$vs="null;this._$e0=null;this._$e0=aH;}aj.prototype=new" s();aj.prototype.getpartsopacity="function(){return" this._$vs;};aj.prototype.setpartsopacity="function(aH){this._$VS=aH;};function" ak(ah){if(j){return;}this.id="aH;}ak._$L7=function(){z._$27();n._$27();Z._$27();i._$27();};ak.prototype.toString=function(){return" this.id;};function d(){}d.prototype._$f0="function(aH){};function" an(){if(j){return;}this._$4s="null;}an.prototype._$1s=function(){return" this._$4s;};an.prototype._$zp="function(){this._$4S=new" array();};an.prototype._$f0="function(aH){this._$4S=aH._$nP();};an.prototype._$Ks=function(aH){this._$4S.push(aH);};function" au(ah,ai){this.canvas="aH;this.context=aI;this.viewport=new" array(0,0,ah.width,ah.height);this._$6r="1;this._$xP=0;this._$3r=1;this._$uP=0;this._$Qo=-1;this.cacheImages={};}au.tr=new" am();au._$50="new" am();au._$ti="new" array(0,0);au._$pi="new" array(0,0);au._$b="new" array(0,0);au.prototype._$lp="function(aI,aK,aJ,aH){this.viewport=new" array(ai,ak,aj,ah);};au.prototype._$bl="function(){this.context.save();var" a2="bm.length;var" ap="bc.width;var" a5="bc.height;var" be="this.context;var" a7="this._$xP;var" a6="this._$uP;var" a1="this._$6r;var" az="this._$3r;var" bd="au.tr;var" ai="au._$Ti;var" bu="au._$B;for(var" by="0;by<a2;by+=3){bE.save();var" aw="bm[by];var" av="bm[by+1];var" at="bm[by+2];var" al="a7+a1*aX[aW*2];var" ak="a6+aZ*aX[aW*2+1];var" br="a7+a1*aX[aV*2];var" bp="a6+aZ*aX[aV*2+1];var" bh="a7+a1*aX[aT*2];var" bf="a6+aZ*aX[aT*2+1];if(bl){bl._$PS(aL,aK,bu);aL=bu[0];aK=bu[1];bl._$PS(br,bp,bu);br=bu[0];bp=bu[1];bl._$PS(bh,bf,bu);bh=bu[0];bf=bu[1];}var" as="aP*aJ[aW*2];var" aq="a5-a5*aJ[aW*2+1];var" bx="aP*aJ[aV*2];var" bw="a5-a5*aJ[aV*2+1];var" bk="aP*aJ[aT*2];var" bj="a5-a5*aJ[aT*2+1];var" a3="Math.atan2(bw-aQ,bx-aS);var" a0="Math.atan2(bp-aK,br-aL);var" ao="br-aL;var" an="bp-aK;var" bi="Math.sqrt(aO*aO+aN*aN);var" au="bx-aS;var" ar="bw-aQ;var" bt="Math.sqrt(aU*aU+aR*aR);var" bv="bi/bt;ad._$ni(bk,bj,aS,aQ,(bx-aS),(bw-aQ),-(bw-aQ),(bx-aS),aI);ad._$ni(bh,bf,aL,aK,(br-aL),(bp-aK),-(bp-aK),(br-aL),aH);var" ay="(aH[0]-aI[0])/aI[1];var" bs="Math.min(aS,bx,bk);var" bg="Math.max(aS,bx,bk);var" bq="Math.min(aQ,bw,bj);var" bo="Math.floor(bs);var" bb="Math.floor(bq);var" a4="Math.ceil(bg);var" bc="Math.ceil(be);bD.identity();bD.translate(aL,aK);bD.rotate(a0);bD.scale(1,aH[1]/aI[1]);bD.shear(aY,0);bD.scale(bv,bv);bD.rotate(-a3);bD.translate(-aS,-aQ);bD.setContext(bE);var" a8="true;var" a9="1.2;if(!aM){aM=a8?a9:0;}if(Q.IGNORE_EXPAND){aM=0;}if(Q.USE_CACHED_POLYGON_IMAGE){var" bn="au.createCanvas(a4-bo,bC-bb);Q.DEBUG_DATA.LDGL_CANVAS_MB=Q.DEBUG_DATA.LDGL_CANVAS_MB||0;Q.DEBUG_DATA.LDGL_CANVAS_MB+=(a4-bo)*(bC-bb)*4;var" ba="bn.getContext("2d");ba.translate(-bo,-bb);au.clip(ba,bD,aM,bi,aS,aQ,bx,bw,bk,bj,aL,aK,br,bp,bh,bf);ba.drawImage(bc,0,0);bd.gl_cacheImage[by]={cacheCanvas:bn,cacheContext:ba};}bE.drawImage(bd.gl_cacheImage[by]["cacheCanvas"],bo,bb);}else{if(!Q.IGNORE_CLIP){au.clip(bE,bD,aM,bi,aS,aQ,bx,bw,bk,bj,aL,aK,br,bp,bh,bf);}if(Q.USE_ADJUST_TRANSLATION){bs=0;bg=aP;bq=0;be=a5;}bE.drawImage(bc,bs,bq,bg-bs,be-bq,bs,bq,bg-bs,be-bq);}bE.restore();}}catch(bB){q._$Rb(bB);}};au.clip=function(aK,aJ,aV,aI,aM,aL,aU,aT,aQ,aP,aO,aN,aH,aW,aS,aR){if(aV">0.02){au.expandClip(aK,aJ,aV,aI,aO,aN,aH,aW,aS,aR);}else{au.clipWithTransform(aK,null,aM,aL,aU,aT,aQ,aP);}};au.expandClip=function(aV,bg,aK,a3,aJ,aI,be,ba,aZ,aX){var aP=be-aJ;var aO=ba-aI;var bi=aZ-aJ;var bh=aX-aI;var bj=aP*bh-aO*bi>0?aK:-aK;var aL=-aO;var aH=aP;var bc=aZ-be;var a8=aX-ba;var a7=-a8;var a6=bc;var aQ=Math.sqrt(bc*bc+a8*a8);var bf=-bh;var bb=bi;var a2=Math.sqrt(bi*bi+bh*bh);var bd=aJ-bj*aL/a3;var a9=aI-bj*aH/a3;var aY=be-bj*aL/a3;var aW=ba-bj*aH/a3;var a5=be-bj*a7/aQ;var a4=ba-bj*a6/aQ;var aS=aZ-bj*a7/aQ;var aR=aX-bj*a6/aQ;var aN=aJ+bj*bf/a2;var aM=aI+bj*bb/a2;var a1=aZ+bj*bf/a2;var a0=aX+bj*bb/a2;var aU=au._$50;var aT=bg._$P2(aU);if(aT==null){return false;}au.clipWithTransform(aV,aU,bd,a9,aY,aW,a5,a4,aS,aR,a1,a0,aN,aM);return true;};au.clipWithTransform=function(aH,aI,aS,aN,aQ,aK,aP,aJ){if(arguments.length<(1+3*2)){q._$li("err : @ldgl.clip()");return;}if(!(arguments[1] instanceof am)){q._$li("err a[0] is _$6 ldtransform @ldgl.clip()");return;}var am="au._$B;var" ao="aI;var" ar="arguments;aH.beginPath();if(aO){aO._$PS(aR[2],aR[3],aM);aH.moveTo(aM[0],aM[1]);for(var" al="4;aL<aR.length;aL+=2){aO._$PS(aR[aL],aR[aL+1],aM);aH.lineTo(aM[0],aM[1]);}}else{aH.moveTo(aR[2],aR[3]);for(var" ai="document.createElement("canvas");aI.setAttribute("width",aH);aI.setAttribute("height",aJ);if(!aI){q._$li("err" "+ai);}return ai;};au.dumpvalues="function(){var" ;for(var ah="0;aH<arguments.length;aH++){aI+="["+aH+"]=" "+arguments[ah].tofixed(3)+" , ";}console.log(ai);};function f(){if(j){return;}this._$tt="null;this._$LT=null;this._$FS=null;this._$wL=null;}f.prototype._$F0=function(aH){this._$TT=aH._$_T();this._$LT=aH._$_T();this._$FS=aH._$_T();this._$wL=aH._$nP();};f.prototype.getMinValue=function(){return" this._$tt;};f.prototype.getmaxvalue="function(){return" this._$lt;};f.prototype.getdefaultvalue="function(){return" this._$fs;};f.prototype.getparamid="function(){return" this._$wl;};function b(ah){if(j){return;}this._$e0="null;this._$IP=null;this._$JS=false;this._$AT=true;this._$e0=aH;this.totalScale=1;this._$7s=1;this.totalOpacity=1;}B.prototype._$yo=function(){return" this._$at&&!this._$js;};b.prototype._$hs="function(aH){this._$AT=aH;};B.prototype._$GT=function(){return" this._$e0;};b.prototype._$l2="function(aH){this._$IP=aH;};B.prototype.getPartsIndex=function(){return" this._$ip;};b.prototype._$x2="function(){return" this._$js;};b.prototype._$ib="function(aH){this._$JS=aH;};B.prototype.getTotalScale=function(){return" this.totalscale;};b.prototype.settotalscale_notforclient="function(aH){this.totalScale=aH;};B.prototype.getInterpolatedOpacity=function(){return" this._$7s;};b.prototype.setinterpolatedopacity="function(aH){this._$7s=aH;};B.prototype.getTotalOpacity=function(aH){return" this.totalopacity;};b.prototype.settotalopacity="function(aH){this.totalOpacity=aH;};function" q(){}q._$2s="2.1.00_1" ;q._$kr="201001000;Q._$sP=true;Q._$so=true;Q._$cb=false;Q._$3T=true;Q._$Ts=true;Q._$fb=true;Q._$ts=true;Q.L2D_DEFORMER_EXTEND=true;Q._$Wb=false;Q._$yr=false;Q._$Zs=false;Q.L2D_NO_ERROR=0;Q._$i7=1000;Q._$9s=1001;Q._$es=1100;Q._$r7=2000;Q._$07=2001;Q._$b7=2002;Q._$H7=4000;Q.L2D_COLOR_BLEND_MODE_MULT=0;Q.L2D_COLOR_BLEND_MODE_ADD=1;Q.L2D_COLOR_BLEND_MODE_INTERPOLATE=2;Q._$6b=true;Q._$cT=0;Q.clippingMaskBufferSize=256;Q.glContext=new" array();q.framebuffers="new" array();q.ftexture="new" array();q.ignore_clip="false;Q.IGNORE_EXPAND=false;Q.EXPAND_W=2;Q.USE_ADJUST_TRANSLATION=true;Q.USE_CANVAS_TRANSFORM=true;Q.USE_CACHED_POLYGON_IMAGE=false;Q.DEBUG_DATA={};Q.PROFILE_IOS_SPEED={PROFILE_NAME:"iOS" speed",use_adjust_translation:true,use_cached_polygon_image:true,expand_w:4};q.profile_ios_quality="{PROFILE_NAME:"iOS" hiq",use_adjust_translation:true,use_cached_polygon_image:false,expand_w:2};q.profile_ios_default="Q.PROFILE_IOS_QUALITY;Q.PROFILE_ANDROID={PROFILE_NAME:"Android",USE_ADJUST_TRANSLATION:false,USE_CACHED_POLYGON_IMAGE:false,EXPAND_W:2};Q.PROFILE_DESKTOP={PROFILE_NAME:"Desktop",USE_ADJUST_TRANSLATION:false,USE_CACHED_POLYGON_IMAGE:false,EXPAND_W:2};Q.initProfile=function(){if(r.isIOS()){Q.setupProfile(Q.PROFILE_IOS_DEFAULT);}else{if(r.isAndroid()){Q.setupProfile(Q.PROFILE_ANDROID);}else{Q.setupProfile(Q.PROFILE_DESKTOP);}}};Q.setupProfile=function(aI,aJ){if(typeof" 9901:ai="Q.PROFILE_IOS_SPEED;break;case" 9902:ai="Q.PROFILE_IOS_QUALITY;break;case" 9903:ai="Q.PROFILE_IOS_DEFAULT;break;case" 9904:ai="Q.PROFILE_ANDROID;break;case" 9905:ai="Q.PROFILE_DESKTOP;break;default:alert("profile" _$ui "+ai);break;}}if(arguments.length<2){aj="true;}if(aJ){console.log("profile" "+ai.profile_name);}for(var in ai){q[ah]="aI[aH];if(aJ){console.log("" ["+ah+"]="+aI[aH]);}}};Q.init=function(){if(Q._$6b){console.log(" live2d %s",q._$2s);q._$6b="false;var" q._$2s;};q.getversionno="function(){return" q._$kr;};q._$st="function(aH){Q._$cT=aH;};Q.getError=function(){var" ah;};q.dispose="function(){Q.glContext=[];Q.frameBuffers=[];Q.fTexture=[];};Q.setGL=function(aJ,aI){var" q.glcontext[ah];};q.setclippingmaskbuffersize="function(aH){Q.clippingMaskBufferSize=aH;};Q.getClippingMaskBufferSize=function(){return" q.clippingmaskbuffersize;};q.deletebuffer="function(aI){var" q.framebuffers[ai];delete q.glcontext[ai];};function a(){}a._$r2="function(aH){if(aH<0){return" 0;}else{if(ah>1){return 1;}}return(0.5-0.5*Math.cos(aH*aC.PI_F));};function J(aH){if(j){return;}this._$ib=aH;}J._$fr=-1;J.prototype.toString=function(){return this._$ib;};function b(){if(j){return;}a.prototype.constructor.call(this);this._$LP=-1;this._$d0=0;this._$Yo=0;this._$JP=null;this._$5P=null;this._$BP=null;this._$Eo=null;this._$Qi=null;this._$6s=b._$ms;this.culling=true;this.gl_cacheImage=null;this.instanceNo=b._$42++;}b.prototype=new a();b._$42=0;b._$Os=30;b._$ms=0;b._$ns=1;b._$_s=2;b._$gT=new Array();b.prototype._$_S=function(aH){this._$LP=aH;};b.prototype.getTextureNo=function(){return this._$LP;};b.prototype._$ZL=function(){return this._$Qi;};b.prototype._$H2=function(){return this._$JP;};b.prototype.getNumPoints=function(){return this._$d0;};b.prototype.getType=function(){return a._$wb;};b.prototype._$B2=function(aL,aH,aO){var aM=aH;var aN=(aM._$hr!=null)?aM._$hr:aM._$Cr;var aK=aw._$do;switch(aK){default:case aw._$Ms:throw new Error("_$L _$ro ");case aw._$Qs:for(var aJ=this._$d0-1;aJ>=0;--aJ){var aI=aJ*aw._$No;aN[aI+4]=aO;}break;}};b.prototype._$zP=function(){this._$GS=new g();this._$GS._$zP();};b.prototype._$F0=function(aK){a.prototype._$F0.call(this,aK);this._$LP=aK._$6L();this._$d0=aK._$6L();this._$Yo=aK._$6L();var aH=aK._$nP();this._$BP=new Int16Array(this._$Yo*3);for(var aJ=this._$Yo*3-1;aJ>=0;--aJ){this._$BP[aJ]=aH[aJ];}this._$Eo=aK._$nP();this._$Qi=aK._$nP();if(aK.getFormatVersion()>=ay._$s7){this._$JP=aK._$6L();if(this._$JP!=0){if((this._$JP&1)!=0){var aI=aK._$6L();if(this._$5P==null){this._$5P=new Object();}this._$5P._$Hb=parseInt(aI);}if((this._$JP&b._$Os)!=0){this._$6s=(this._$JP&b._$Os)>>1;}else{this._$6s=b._$ms;}if((this._$JP&32)!=0){this.culling=false;}}}else{this._$JP=0;}};b.prototype.init=function(aL){var aN=new ag(this);var aI=this._$d0*aw._$No;var aH=this._$32();if(aN._$Cr!=null){aN._$Cr=null;}aN._$Cr=new Float32Array(aI);if(aN._$hr!=null){aN._$hr=null;}aN._$hr=aH?new Float32Array(aI):null;var aM=aw._$do;switch(aM){default:case aw._$Ms:if(aw._$Ls){for(var aJ=this._$d0-1;aJ>=0;--aJ){var aO=aJ<<1;this._$Qi[aO+1]=1-this._$Qi[aO+1];}}break;case aw._$qs:for(var aj="this._$d0-1;aJ">=0;--aJ){var aO=aJ<<1;var ak="aJ*aw._$No;var" aq="this._$Qi[aO];var" ap="this._$Qi[aO+1];aN._$Cr[aK]=aQ;aN._$Cr[aK+1]=aP;aN._$Cr[aK+4]=0;if(aH){aN._$hr[aK]=aQ;aN._$hr[aK+1]=aP;aN._$hr[aK+4]=0;}}break;}return" an;};b.prototype._$nr="function(aJ,aH){var" assert!! ### ");}if(!this._$gs._$ur(aj)){return;}a.prototype._$nr.call(this,aj,ak);if(ak._$is[0]){return;}var ai="b._$gT;aI[0]=false;aG._$Vr(aJ,this._$GS,aI,this._$d0,this._$Eo,aK._$Cr,aw._$i2,aw._$No);};b.prototype._$2b=function(aK,aI){try{if(!((this==aI._$GT()))){console.log("###" ");}var al="false;if(aI._$IS[0]){aL=true;}var" am="aI;if(!aL){a.prototype._$2b.call(this,aK);if(this._$32()){var" ah="this.getTargetBaseDataID();if(aM._$8r==a._$ur){aM._$8r=aK.getBaseDataIndex(aH);}if(aM._$8r<0){if(Q._$so){q._$li("_$L" _$0p _$g :: %s",ah);}}else{var ao="aK.getBaseData(aM._$8r);var" aj="aK._$q2(aM._$8r);if(aO!=null&&!aJ._$x2()){aO._$nb(aK,aJ,aM._$Cr,aM._$hr,this._$d0,aw._$i2,aw._$No);aM._$AT=true;}else{aM._$AT=false;}aM.baseOpacity=aJ.getTotalOpacity();}}}}catch(aN){throw" an;}};b.prototype.draw="function(aN,aK,aI){if(!((this==aI._$GT()))){console.log("###" ");}if(ai._$is[0]){return;}var _$yi( %d ) , _$d0( _$yo( \n",this._$lp,this._$d0,this._$yo);console.log(" _$oi _$di="{" ");for(var ,",this._$bp[aj]);}console.log("\n _$5i _$30");for(var _$30[%d]=",aJ);var aH=this._$Eo[aJ];for(var aI=0;aI<aH.length;aI++){console.log(" %6.2f, ",ah[ai]);}}console.log("\n");};b.prototype._$72="function(aH){if(this._$5P==null){return" null;}return this._$5p[ah];};b.prototype.getindexarray="function(){return" this._$bp;};function ag(ah){ab.prototype.constructor.call(this,ah);this._$8r="a._$ur;this._$Cr=null;this._$hr=null;}ag.prototype=new" ab();ag.prototype.gettransformedpoints="function(){return(this._$hr!=null)?this._$hr:this._$Cr;};function" k(){if(j){return;}this.x="null;this.y=null;}k.prototype._$HT=function(aH){this.x=aH.x;this.y=aH.y;};k.prototype._$HT=function(aH,aI){this.x=aH;this.y=aI;};function" l(ah){if(j){return;}aa.prototype.constructor.call(this);this.drawparamwebgl="new" c(ah);this.drawparamwebgl.setgl(q.getgl(ah));}l.prototype="new" aa();l.loadmodel="function(aI){var" l();aa._$62(ah,ai);return ah;};l.loadmodel="function(aI,aK){var" l(aj);aa._$62(ah,ai);return ah;};l._$to="function(){var" l();return ah;};l._$er="function(aM){var" _$5(".. _$_r _$t0 _$ri _$_p._$d");if(aj.exists()="=false){throw" new _$ls("_$t0 _$_ _$6 _$ui "+aj._$pl());}var _$5(ah[ai]);if(al.exists()="=false){throw" "+al._$pl());}ak.settexture(ai,_$nl._$_o(am,al._$3b()));}return ak;};l.prototype.setgl="function(aH){Q.setGL(aH);};l.prototype.setTransform=function(aH){this.drawParamWebGL.setTransform(aH);};l.prototype.update=function(){this._$5S.update();this._$5S.preDraw(this.drawParamWebGL);};l.prototype.draw=function(){this._$5S.draw(this.drawParamWebGL);};l.prototype._$K2=function(){this.drawParamWebGL._$K2();};l.prototype.setTexture=function(aI,aH){if(this.drawParamWebGL==null){q._$li("_$Yi" for qt _$ki _$xs() is _$ui!!");}this.drawparamwebgl.settexture(ai,ah);};l.prototype.settexture="function(aI,aH){if(this.drawParamWebGL==null){q._$li("_$Yi" _$ui!!");}this.drawparamwebgl.settexture(ai,ah);};l.prototype._$rs="function(){return" this.drawparamwebgl._$rs();};l.prototype._$ds="function(aH){this.drawParamWebGL._$Ds(aH);};l.prototype.getDrawParam=function(){return" this.drawparamwebgl;};l.prototype.setmatrix="function(aH){this.drawParamWebGL.setMatrix(aH);};l.prototype.setPremultipliedAlpha=function(aH){this.drawParamWebGL.setPremultipliedAlpha(aH);};l.prototype.isPremultipliedAlpha=function(){return" this.drawparamwebgl.ispremultipliedalpha();};l.prototype.setanisotropy="function(aH){this.drawParamWebGL.setAnisotropy(aH);};l.prototype.getAnisotropy=function(){return" this.drawparamwebgl.getanisotropy();};function v(){if(j){return;}this.motions="null;this._$eb=false;this.motions=new" array();}v.prototype._$tb="function(){return" this.motions;};v.prototype.startmotion="function(aJ,aI){var">startMotion() / start _$K _$3 (m%d)\n",aH,aL._$sr);}}if(aJ==null){return -1;}aL=new M();aL._$w0=aJ;this.motions.push(aL);var aN=aL._$sr;if(this._$eb){q._$Ji("MotionQueueManager[size:%2d]->startMotion() / new _$w0 (m%d)\n",aH,aN);}return aN;};V.prototype.updateParam=function(aJ){try{var aI=false;for(var aK=0;aK<this.motions.length;aK++){var al="this.motions[aK];if(aL==null){this.motions.splice(aK,1);aK--;continue;}var" ah="aL._$w0;if(aH==null){this.motions=this.motions.splice(aK,1);aK--;continue;}aH.updateParam(aJ,aL);aI=true;if(aL.isFinished()){if(this._$eb){q._$Ji("MotionQueueManager[size:%2d]-">updateParam() / _$T0 _$w0 (m%d)\n",this.motions.length-1,aL._$sr);}this.motions.splice(aK,1);aK--;}else{}}return aI;}catch(aM){q._$li(aM);return true;}};V.prototype.isFinished=function(aK){if(arguments.length>=1){for(var aI=0;aI<this.motions.length;aI++){var aj="this.motions[aI];if(aJ==null){continue;}if(aJ._$sr==aK&&!aJ.isFinished()){return" false;}}return true;}else{for(var ai="0;aI<this.motions.length;aI++){var" ah="aJ._$w0;if(aH==null){this.motions.splice(aI,1);aI--;continue;}if(!aJ.isFinished()){return" true;}};v.prototype.stopallmotions="function(){for(var" _$r --\n");for(var :: %s\n",this.motions.length,aj.tostring());}};function m(){this._$w0="null;this._$AT=true;this._$9L=false;this._$z2=-1;this._$bs=-1;this._$Do=-1;this._$sr=null;this._$sr=M._$Gs++;}M._$Gs=0;M.prototype.isFinished=function(){return" this._$9l;};m.prototype._$qs="function(aJ){var" this._$sr;};function am(){this.m="new" array(1,0,0,0,1,0,0,0,1);}am.prototype.setcontext="function(aI){var" ;for(var ,";}ai+=" }" ;return ai;};am.prototype.identity="function(){var" array(0,0);}var aj;};am.prototype._$p2="function(aK){if(!aK){aK=new" am();}var at="aI[0];var" as="aI[1];var" ar="aI[2];var" aq="aI[3];var" ap="aI[4];var" ao="aI[5];var" an="aI[6];var" am="aI[7];var" al="aI[8];var" null;}else{var ak;}};am.prototype.transform="function(aI,aK,aJ){if(aJ==null){aJ=new" aj;};am.prototype.translate="function(aI,aJ){var" ak="aH[0]+aH[3]*aL;var" n(ah){if(j){return;}ak.prototype.constructor.call(this,ah);}n.prototype="new" ak();n._$et="null;n._$tP=new" object();n._$2o="function(){if(n._$eT==null){n._$eT=n.getID("DST_BASE");}return" n._$et;};n._$27="function(){n._$tP.clear();n._$eT=null;};n.getID=function(aH){var" n(ah);n._$tp[ah]="aI;}return" ai;};n.prototype._$3s="function(){return" new n();};function c(ah){if(j){return;}ax.prototype.constructor.call(this);this.textures="new" array();this.transform="null;this.gl=null;this.glno=aH;this.firstDraw=true;this.anisotropyExt=null;this.maxAnisotropy=0;this._$As=32;this._$Gr=false;this._$NT=null;this._$vS=null;this._$no=null;this.vertShader=null;this.fragShader=null;this.vertShaderOff=null;this.fragShaderOff=null;}C.prototype=new" ax();c._$9r="function(aH){var" float32array(ah);return ai;};c._$vb="function(aH){var" int16array(ah);return ai;};c._$cr="function(aI,aH){if(aI==null||aI._$yL()<aH.length){aI=C._$9r(aH.length*2);aI.put(aH);aI._$oT(0);}else{aI.clear();aI.put(aH);aI._$oT(0);}return" ai;};c._$mb="function(aI,aH){if(aI==null||aI._$yL()<aH.length){aI=C._$vb(aH.length*2);aI.put(aH);aI._$oT(0);}else{aI.clear();aI.put(aH);aI._$oT(0);}return" ai;};c._$hs="function(){return" this._$gr;};c._$as="function(aH){this._$Gr=aH;};C.prototype.getGL=function(){return" this.gl;};c.prototype.setgl="function(aH){this.gl=aH;};C.prototype.setTransform=function(aH){this.transform=aH;};C.prototype._$ZT=function(){var">0.9?Q.EXPAND_W:0;var a0=this.gl;if(this.gl==null){throw new Error("gl is null");}var a1=false;var aQ=1;var aP=1;var a3=1;var aZ=1;var aW=this._$C0*aP*aN;var a2=this._$tT*a3*aN;var a5=this._$WL*aZ*aN;var a7=this._$lT*aN;if(this.clipBufPre_clipContextMask!=null){a0.frontFace(a0.CCW);a0.useProgram(this.shaderProgram);this._$vS=T(a0,this._$vS,aU);this._$no=L(a0,this._$no,aL);a0.enableVertexAttribArray(this.a_position_Loc);a0.vertexAttribPointer(this.a_position_Loc,2,a0.FLOAT,false,0,0);this._$NT=T(a0,this._$NT,aV);a0.activeTexture(a0.TEXTURE1);a0.bindTexture(a0.TEXTURE_2D,this.textures[aS]);a0.uniform1i(this.s_texture0_Loc,1);a0.enableVertexAttribArray(this.a_texCoord_Loc);a0.vertexAttribPointer(this.a_texCoord_Loc,2,a0.FLOAT,false,0,0);a0.uniformMatrix4fv(this.u_matrix_Loc,false,this.getClipBufPre_clipContextMask().matrixForMask);var aY=this.getClipBufPre_clipContextMask().layoutChannelNo;var a4=this.getChannelFlagAsColor(aY);a0.uniform4f(this.u_channelFlag,a4.r,a4.g,a4.b,a4.a);var aI=this.getClipBufPre_clipContextMask().layoutBounds;a0.uniform4f(this.u_baseColor_Loc,aI.x*2-1,aI.y*2-1,aI._$EL()*2-1,aI._$5T()*2-1);a0.uniform1i(this.u_maskFlag_Loc,true);}else{a1=this.getClipBufPre_clipContextDraw()!=null;if(a1){a0.useProgram(this.shaderProgramOff);this._$vS=T(a0,this._$vS,aU);this._$no=L(a0,this._$no,aL);a0.enableVertexAttribArray(this.a_position_Loc_Off);a0.vertexAttribPointer(this.a_position_Loc_Off,2,a0.FLOAT,false,0,0);this._$NT=T(a0,this._$NT,aV);a0.activeTexture(a0.TEXTURE1);a0.bindTexture(a0.TEXTURE_2D,this.textures[aS]);a0.uniform1i(this.s_texture0_Loc_Off,1);a0.enableVertexAttribArray(this.a_texCoord_Loc_Off);a0.vertexAttribPointer(this.a_texCoord_Loc_Off,2,a0.FLOAT,false,0,0);a0.uniformMatrix4fv(this.u_clipMatrix_Loc_Off,false,this.getClipBufPre_clipContextDraw().matrixForDraw);a0.uniformMatrix4fv(this.u_matrix_Loc_Off,false,this.matrix4x4);a0.activeTexture(a0.TEXTURE2);a0.bindTexture(a0.TEXTURE_2D,Q.fTexture[this.glno]);a0.uniform1i(this.s_texture1_Loc_Off,2);var aY=this.getClipBufPre_clipContextDraw().layoutChannelNo;var a4=this.getChannelFlagAsColor(aY);a0.uniform4f(this.u_channelFlag_Loc_Off,a4.r,a4.g,a4.b,a4.a);a0.uniform4f(this.u_baseColor_Loc_Off,aW,a2,a5,a7);}else{a0.useProgram(this.shaderProgram);this._$vS=T(a0,this._$vS,aU);this._$no=L(a0,this._$no,aL);a0.enableVertexAttribArray(this.a_position_Loc);a0.vertexAttribPointer(this.a_position_Loc,2,a0.FLOAT,false,0,0);this._$NT=T(a0,this._$NT,aV);a0.activeTexture(a0.TEXTURE1);a0.bindTexture(a0.TEXTURE_2D,this.textures[aS]);a0.uniform1i(this.s_texture0_Loc,1);a0.enableVertexAttribArray(this.a_texCoord_Loc);a0.vertexAttribPointer(this.a_texCoord_Loc,2,a0.FLOAT,false,0,0);a0.uniformMatrix4fv(this.u_matrix_Loc,false,this.matrix4x4);a0.uniform4f(this.u_baseColor_Loc,aW,a2,a5,a7);a0.uniform1i(this.u_maskFlag_Loc,false);}}if(this.culling){this.gl.enable(a0.CULL_FACE);}else{this.gl.disable(a0.CULL_FACE);}this.gl.enable(a0.BLEND);var a6;var aX;var aR;var aK;if(this.clipBufPre_clipContextMask!=null){a6=a0.ONE;aX=a0.ONE_MINUS_SRC_ALPHA;aR=a0.ONE;aK=a0.ONE_MINUS_SRC_ALPHA;}else{switch(aM){case b._$ms:a6=a0.ONE;aX=a0.ONE_MINUS_SRC_ALPHA;aR=a0.ONE;aK=a0.ONE_MINUS_SRC_ALPHA;break;case b._$ns:a6=a0.ONE;aX=a0.ONE;aR=a0.ZERO;aK=a0.ONE;break;case b._$_s:a6=a0.DST_COLOR;aX=a0.ONE_MINUS_SRC_ALPHA;aR=a0.ZERO;aK=a0.ONE;break;}}a0.blendEquationSeparate(a0.FUNC_ADD,a0.FUNC_ADD);a0.blendFuncSeparate(a6,aX,aR,aK);if(this.anisotropyExt){a0.texParameteri(a0.TEXTURE_2D,this.anisotropyExt.TEXTURE_MAX_ANISOTROPY_EXT,this.maxAnisotropy);}var aJ=aL.length;a0.drawElements(a0.TRIANGLES,aJ,a0.UNSIGNED_SHORT,0);a0.bindTexture(a0.TEXTURE_2D,null);};function T(aJ,aH,aI){if(aH==null){aH=aJ.createBuffer();}aJ.bindBuffer(aJ.ARRAY_BUFFER,aH);aJ.bufferData(aJ.ARRAY_BUFFER,aI,aJ.DYNAMIC_DRAW);return aH;}function L(aJ,aH,aI){if(aH==null){aH=aJ.createBuffer();}aJ.bindBuffer(aJ.ELEMENT_ARRAY_BUFFER,aH);aJ.bufferData(aJ.ELEMENT_ARRAY_BUFFER,aI,aJ.DYNAMIC_DRAW);return aH;}C.prototype._$Rs=function(){throw new Error("_$Rs");};C.prototype._$Ds=function(aH){throw new Error("_$Ds");};C.prototype._$K2=function(){for(var aH=0;aH<this.textures.length;aH++){var ai="this.textures[aH];if(aI!=0){this.gl._$K2(1,this.textures,aH);this.textures[aH]=null;}}};C.prototype.setTexture=function(aH,aI){this.textures[aH]=aI;};C.prototype.initShader=function(){var" ah="this.gl;this.loadShaders2();this.a_position_Loc=aH.getAttribLocation(this.shaderProgram,"a_position");this.a_texCoord_Loc=aH.getAttribLocation(this.shaderProgram,"a_texCoord");this.u_matrix_Loc=aH.getUniformLocation(this.shaderProgram,"u_mvpMatrix");this.s_texture0_Loc=aH.getUniformLocation(this.shaderProgram,"s_texture0");this.u_channelFlag=aH.getUniformLocation(this.shaderProgram,"u_channelFlag");this.u_baseColor_Loc=aH.getUniformLocation(this.shaderProgram,"u_baseColor");this.u_maskFlag_Loc=aH.getUniformLocation(this.shaderProgram,"u_maskFlag");this.a_position_Loc_Off=aH.getAttribLocation(this.shaderProgramOff,"a_position");this.a_texCoord_Loc_Off=aH.getAttribLocation(this.shaderProgramOff,"a_texCoord");this.u_matrix_Loc_Off=aH.getUniformLocation(this.shaderProgramOff,"u_mvpMatrix");this.u_clipMatrix_Loc_Off=aH.getUniformLocation(this.shaderProgramOff,"u_ClipMatrix");this.s_texture0_Loc_Off=aH.getUniformLocation(this.shaderProgramOff,"s_texture0");this.s_texture1_Loc_Off=aH.getUniformLocation(this.shaderProgramOff,"s_texture1");this.u_channelFlag_Loc_Off=aH.getUniformLocation(this.shaderProgramOff,"u_channelFlag");this.u_baseColor_Loc_Off=aH.getUniformLocation(this.shaderProgramOff,"u_baseColor");};C.prototype.disposeShader=function(){var" am="this.gl;var" ah;var al="aN;var" ak="aM.createShader(aJ);if(aK==null){q._$Ji("_$L0" to create shader");return null;}am.shadersource(ak,al);am.compileshader(ak);var compile shader : "+ai);am.deleteshader(ak);return null;}return ak;};c.prototype.loadshaders2="function(){var" an="this.gl;this.shaderProgram=aN.createProgram();if(!this.shaderProgram){return" false;}this.shaderprogramoff="aN.createProgram();if(!this.shaderProgramOff){return" false;}var ;var aj="precision mediump float ;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;uniform vec4       u_channelFlag;uniform vec4       u_baseColor ;void main(){    vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;    vec4 clipMask = texture2D(s_texture1, v_ClipPos.xy / v_ClipPos.w) * u_channelFlag;    float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;    col_formask = col_formask * maskVal;    gl_FragColor = col_formask;}" ;this.vertshader="this.compileShader(aN.VERTEX_SHADER,aK);if(!this.vertShader){q._$Ji("Vertex" _$li!");return false;}this.vertshaderoff="this.compileShader(aN.VERTEX_SHADER,aL);if(!this.vertShaderOff){q._$Ji("OffVertex" false;}this.fragshader="this.compileShader(aN.FRAGMENT_SHADER,aM);if(!this.fragShader){q._$Ji("Fragment" false;}this.fragshaderoff="this.compileShader(aN.FRAGMENT_SHADER,aJ);if(!this.fragShaderOff){q._$Ji("OffFragment" false;}an.attachshader(this.shaderprogram,this.vertshader);an.attachshader(this.shaderprogram,this.fragshader);an.attachshader(this.shaderprogramoff,this.vertshaderoff);an.attachshader(this.shaderprogramoff,this.fragshaderoff);an.linkprogram(this.shaderprogram);an.linkprogram(this.shaderprogramoff);var link program: "+ai);if(this.vertshader){an.deleteshader(this.vertshader);this.vertshader="0;}if(this.fragShader){aN.deleteShader(this.fragShader);this.fragShader=0;}if(this.shaderProgram){aN.deleteProgram(this.shaderProgram);this.shaderProgram=0;}if(this.vertShaderOff){aN.deleteShader(this.vertShaderOff);this.vertShaderOff=0;}if(this.fragShaderOff){aN.deleteShader(this.fragShaderOff);this.fragShaderOff=0;}if(this.shaderProgramOff){aN.deleteProgram(this.shaderProgramOff);this.shaderProgramOff=0;}return" false;}return true;};c.prototype.createframebuffer="function(){var" k(ah){if(j){return;}this._$p="new" int8array(8);this._$r0="new" dataview(this._$p.buffer);this._$3i="new" int8array(1000);this._$hl="0;this._$v0=0;this._$S2=0;this._$Ko=new" array();this._$t="aH;this._$F=0;}K.prototype._$fP=function(){var" aj,ai,ah;if((ak&128)="=0){return" ak&255;}else{if(((aj="this._$ST())&128)==0){return((aK&127)<<7)|(aJ&127);}else{if(((aI=this._$ST())&128)==0){return((aK&127)<<14)|((aJ&127)<<7)|(aI&255);}else{if(((aH=this._$ST())&128)==0){return((aK&127)<<21)|((aJ&127)<<14)|((aI&127)<<7)|(aH&255);}else{throw" new j("_$l _$0p _");}}}}};k.prototype.getformatversion="function(){return" this._$s2;};k.prototype._$gr="function(aH){this._$S2=aH;};K.prototype._$3L=function(){return" this._$fp();};k.prototype._$mp="function(){this._$zT();this._$F+=8;return" this._$t.getfloat64(this._$f-8);};k.prototype._$_t="function(){this._$zT();this._$F+=4;return" this._$t.getfloat32(this._$f-4);};k.prototype._$6l="function(){this._$zT();this._$F+=4;return" this._$t.getint32(this._$f-4);};k.prototype._$st="function(){this._$zT();return" this._$t.getint8(this._$f++);};k.prototype._$9t="function(){this._$zT();this._$F+=2;return" this._$t.getint16(this._$f-2);};k.prototype._$2t="function(){this._$zT();this._$F+=8;throw" _$q read long");};k.prototype._$po="function(){this._$zT();return" this._$t.getint8(this._$f++)!="0;};var" o="true;K.prototype._$bT=function(){this._$zT();var" arraybuffer(ah*2);ak="new" uint16array(am);for(var string.fromcharcode.apply(null,ak);}catch(al){o="false;}}try{var" array();if(ak="=null){for(var" string.fromcharcode.apply(null,ai);}catch(al){console.log("read utf8 _$rt _$l0 !! "+al);}};k.prototype._$cs="function(){this._$zT();var" int32array(ai);for(var ah;};k.prototype._$tb="function(){this._$zT();var" float32array(ai);for(var ah;};k.prototype._$5b="function(){this._$zT();var" float64array(ai);for(var ah;};k.prototype._$np="function(){return" this._$jb(-1);};k.prototype._$jb="function(aJ){this._$zT();if(aJ<0){aJ=this._$3L();}if(aJ==ay._$7P){var" this._$ko[ah];}else{throw j("_$sl _$4i @_$m0");}}else{var ai;}};k.prototype._$4b="function(aN){if(aN==0){return" null;}if(an="=50){var" ai;}else{if(an="=51){var" ai;}}}}if(an>=48){var aL=ay._$9o(aN);if(aL!=null){aL._$F0(this);return aL;}else{return null;}}switch(aN){case 1:return this._$bT();case 10:var aM=this._$6L();return new I(aM,true);case 11:return new av(this._$mP(),this._$mP(),this._$mP(),this._$mP());case 12:return new av(this._$_T(),this._$_T(),this._$_T(),this._$_T());case 13:return new e(this._$mP(),this._$mP());case 14:return new e(this._$_T(),this._$_T());case 15:var aH=this._$3L();var aI=new Array(aH);for(var aJ=0;aJ<aH;aJ++){aI[aJ]=this._$nP();}return ai;case 17:var ai="new" ad(this._$mp(),this._$mp(),this._$mp(),this._$mp(),this._$mp(),this._$mp());return 21:return new f(this._$6l(),this._$6l(),this._$6l(),this._$6l());case 22:return k(this._$6l(),this._$6l());case 23:throw error("_$l _$ro ");case 16:case 25:return this._$cs();case 26:return this._$5b();case 27:return this._$tb();case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 18:case 19:case 20:case 24:case 28:throw j("_$6 _$q : _$np() of 2-9 ,18,19,20,24,28 "+an);default:throw no _$i "+an);}};k.prototype._$8l="function(){if(this._$hL==0){this._$v0=this._$ST();}else{if(this._$hL==8){this._$v0=this._$ST();this._$hL=0;}}return((this._$v0">>(7-this._$hL++))&1)==1;};K.prototype._$zT=function(){if(this._$hL!=0){this._$hL=0;}};function ai(){}ai.prototype._$wP=function(aM,aI,aK){for(var aL=0;aL<aK;aL++){for(var ah="0;aH<aI;aH++){var" aj="2*(aH+aL*aI);console.log("(%" 7.3f , % 7.3f) ",am[aj],am[aj+1]);}console.log("\n");}console.log("\n");};function ac(){}ac._$2s="Math.PI/180;aC._$bS=(Math.PI/180);aC._$wS=180/Math.PI;aC._$NS=(180/Math.PI);aC.PI_F=Math.PI;aC._$kT=[0,0.012368,0.024734,0.037097,0.049454,0.061803,0.074143,0.086471,0.098786,0.111087,0.12337,0.135634,0.147877,0.160098,0.172295,0.184465,0.196606,0.208718,0.220798,0.232844,0.244854,0.256827,0.268761,0.280654,0.292503,0.304308,0.316066,0.327776,0.339436,0.351044,0.362598,0.374097,0.385538,0.396921,0.408243,0.419502,0.430697,0.441826,0.452888,0.463881,0.474802,0.485651,0.496425,0.507124,0.517745,0.528287,0.538748,0.549126,0.559421,0.56963,0.579752,0.589785,0.599728,0.609579,0.619337,0.629,0.638567,0.648036,0.657406,0.666676,0.675843,0.684908,0.693867,0.70272,0.711466,0.720103,0.72863,0.737045,0.745348,0.753536,0.76161,0.769566,0.777405,0.785125,0.792725,0.800204,0.807561,0.814793,0.821901,0.828884,0.835739,0.842467,0.849066,0.855535,0.861873,0.868079,0.874153,0.880093,0.885898,0.891567,0.897101,0.902497,0.907754,0.912873,0.917853,0.922692,0.92739,0.931946,0.936359,0.940629,0.944755,0.948737,0.952574,0.956265,0.959809,0.963207,0.966457,0.96956,0.972514,0.97532,0.977976,0.980482,0.982839,0.985045,0.987101,0.989006,0.990759,0.992361,0.993811,0.995109,0.996254,0.997248,0.998088,0.998776,0.999312,0.999694,0.999924,1];aC._$92=function(aK,aI){var" ac._$ts(ah,aj);};ac._$ts="function(aI,aH){var">Math.PI){aJ-=2*Math.PI;}return aJ;};aC._$9=function(aH){return Math.sin(aH);};aC.fcos=function(aH){return Math.cos(aH);};function aB(aH){if(j){return;}this._$e0=null;this._$IP=null;this._$Us=null;this._$7s=null;this._$IS=[false];this._$VS=null;this._$AT=true;this.baseOpacity=1;this.clipBufPre_clipContext=null;this._$e0=aH;}aB.prototype._$u2=function(){return this._$IS[0];};aB.prototype._$yo=function(){return this._$AT&&!this._$IS[0];};aB.prototype._$GT=function(){return this._$e0;};function r(){}r._$W2=0;r.SYSTEM_INFO=null;r.USER_AGENT=navigator.userAgent;r.isIPhone=function(){if(!r.SYSTEM_INFO){r.setup();}return r.SYSTEM_INFO._isIPhone;};r.isIOS=function(){if(!r.SYSTEM_INFO){r.setup();}return r.SYSTEM_INFO._isIPhone||r.SYSTEM_INFO._isIPad;};r.isAndroid=function(){if(!r.SYSTEM_INFO){r.setup();}return r.SYSTEM_INFO._isAndroid;};r.getOSVersion=function(){if(!r.SYSTEM_INFO){r.setup();}return r.SYSTEM_INFO.version;};r.getOS=function(){if(!r.SYSTEM_INFO){r.setup();}if(r.SYSTEM_INFO._isIPhone||r.SYSTEM_INFO._isIPad){return"iOS";}if(r.SYSTEM_INFO._isAndroid){return"Android";}else{return"_$Q0 OS";}};r.setup=function(){var aK=r.USER_AGENT;function aI(aO,aR){var aN=aO.substring(aR).split(/[ _,;\.]/);var aQ=0;for(var aM=0;aM<=2;aM++){if(isNaN(aN[aM])){break;}var ap="parseInt(aN[aM]);if(aP<0||aP">999){q._$li("err : "+aP+" @UtHtml5.setup()");aQ=0;break;}aQ+=aP*Math.pow(1000,(2-aM));}return aQ;}var aL;var aH;var aJ=r.SYSTEM_INFO={userAgent:aK};if((aL=aK.indexOf("iPhone OS "))>=0){aJ.os="iPhone";aJ._isIPhone=true;aJ.version=aI(aK,aL+"iPhone OS ".length);}else{if((aL=aK.indexOf("iPad"))>=0){aL=aK.indexOf("CPU OS");if(aL<0){q._$li(" err : "+ak+" @uthtml5.setup()");return;}aj.os="iPad" ;aj._isipad="true;aJ.version=aI(aK,aL+"CPU" os ".length);}else{if((al="aK.indexOf("Android"))">=0){aJ.os="Android";aJ._isAndroid=true;aJ.version=aI(aK,aL+"Android ".length);}else{aJ.os="-";aJ.version=-1;}}}};window.UtSystem=P;window.UtDebug=q;window.LDTransform=am;window.LDGL=au;window.Live2D=Q;window.Live2DModelWebGL=l;window.Live2DModelJS=v;window.Live2DMotion=ao;window.MotionQueueManager=V;window.PhysicsHair=u;window.AMotion=ah;window.PartsDataID=i;window.DrawDataID=Z;window.BaseDataID=n;window.ParamID=z;Q.init();var j=false;})();


//============================================================
//============================================================
//  class LAppModel     extends L2DBaseModel
//============================================================
//============================================================
function LAppModel()
{
    //L2DBaseModel.apply(this, arguments);
    L2DBaseModel.prototype.constructor.call(this);

    this.modelHomeDir = "";
    this.modelSetting = null;
    this.tmpMatrix = [];
}

LAppModel.prototype = new L2DBaseModel();


LAppModel.prototype.load = function(gl, configPath, basePath, callback)
{

    this.setUpdating(true);
    this.setInitialized(false);

    if (basePath == undefined) {
        this.modelHomeDir = configPath.substring(0, configPath.lastIndexOf("/") + 1);
        console.log('configPath '+configPath)
        console.log('home'+this.modelHomeDir)
    }else{
        this.modelHomeDir = basePath;
    }
    this.modelSetting = new ModelSettingJson();

    var thisRef = this;


    this.modelSetting.loadModelSetting(configPath, function(){

        var modelDataPath = thisRef.modelHomeDir + thisRef.modelSetting.getModelFile();

        thisRef.loadModelData(modelDataPath, function(model){

            for (var i = 0; i < thisRef.modelSetting.getTextureNum(); i++)
            {

                if( /^https?:\/\/|^\/\//i.test(thisRef.modelSetting.getTextureFile(i)) )
                {
                    var texPaths = thisRef.modelSetting.getTextureFile(i);
                }
                else
                {
                var texPaths = thisRef.modelHomeDir +
                    thisRef.modelSetting.getTextureFile(i);
                }

                thisRef.loadTexture(i, texPaths, function() {

                    if( thisRef.isTexLoaded ) {

                        if (thisRef.modelSetting.getExpressionNum() > 0)
                        {

                            thisRef.expressions = {};

                            for (var j = 0; j < thisRef.modelSetting.getExpressionNum(); j++)
                            {
                                var expName = thisRef.modelSetting.getExpressionName(j);
                                var expFilePath = thisRef.modelHomeDir +
                                    thisRef.modelSetting.getExpressionFile(j);

                                thisRef.loadExpression(expName, expFilePath);
                            }
                        }
                        else
                        {
                            thisRef.expressionManager = null;
                            thisRef.expressions = {};
                        }



                        if (thisRef.eyeBlink == null)
                        {
                            //thisRef.eyeBlink = new L2DEyeBlink();
                        }


                        if (thisRef.modelSetting.getPhysicsFile() != null)
                        {
                            thisRef.loadPhysics(thisRef.modelHomeDir +
                                                thisRef.modelSetting.getPhysicsFile());
                        }
                        else
                        {
                            thisRef.physics = null;
                        }



                        if (thisRef.modelSetting.getPoseFile() != null)
                        {
                            thisRef.loadPose(
                                thisRef.modelHomeDir +
                                thisRef.modelSetting.getPoseFile(),
                                function() {
                                    thisRef.pose.updateParam(thisRef.live2DModel);
                                }
                            );
                        }
                        else
                        {
                            thisRef.pose = null;
                        }



                        if (thisRef.modelSetting.getLayout() != null)
                        {
                            var layout = thisRef.modelSetting.getLayout();
                            if (layout["width"] != null)
                                thisRef.modelMatrix.setWidth(layout["width"]);
                            if (layout["height"] != null)
                                thisRef.modelMatrix.setHeight(layout["height"]);

                            if (layout["x"] != null)
                                thisRef.modelMatrix.setX(layout["x"]);
                            if (layout["y"] != null)
                                thisRef.modelMatrix.setY(layout["y"]);
                            if (layout["center_x"] != null)
                                thisRef.modelMatrix.centerX(layout["center_x"]);
                            if (layout["center_y"] != null)
                                thisRef.modelMatrix.centerY(layout["center_y"]);
                            if (layout["top"] != null)
                                thisRef.modelMatrix.top(layout["top"]);
                            if (layout["bottom"] != null)
                                thisRef.modelMatrix.bottom(layout["bottom"]);
                            if (layout["left"] != null)
                                thisRef.modelMatrix.left(layout["left"]);
                            if (layout["right"] != null)
                                thisRef.modelMatrix.right(layout["right"]);
                        }

                        if (thisRef.modelSetting.getHitAreasCustom() != null)
                        {
                            var hit_areas_custom = thisRef.modelSetting.getHitAreasCustom();
                            if (hit_areas_custom["head_x"] != null)
                                LAppDefine.hit_areas_custom_head_x = hit_areas_custom["head_x"];
                            if (hit_areas_custom["head_y"] != null)
                                LAppDefine.hit_areas_custom_head_y = hit_areas_custom["head_y"];
                            if (hit_areas_custom["body_x"] != null)
                                LAppDefine.hit_areas_custom_body_x = hit_areas_custom["body_x"];
                            if (hit_areas_custom["body_y"] != null)
                                LAppDefine.hit_areas_custom_body_y = hit_areas_custom["body_y"];
                }

                        for (var j = 0; j < thisRef.modelSetting.getInitParamNum(); j++)
                        {

                            thisRef.live2DModel.setParamFloat(
                                thisRef.modelSetting.getInitParamID(j),
                                thisRef.modelSetting.getInitParamValue(j)
                            );
                        }

                        for (var j = 0; j < thisRef.modelSetting.getInitPartsVisibleNum(); j++)
                        {

                            thisRef.live2DModel.setPartsOpacity(
                                thisRef.modelSetting.getInitPartsVisibleID(j),
                                thisRef.modelSetting.getInitPartsVisibleValue(j)
                            );
                        }



                        thisRef.live2DModel.saveParam();
                        // thisRef.live2DModel.setGL(gl);


                        thisRef.preloadMotionGroup(LAppDefine.MOTION_GROUP_IDLE);
                        thisRef.preloadMotionGroup(LAppDefine.MOTION_GROUP_SLEEPY);
                        thisRef.mainMotionManager.stopAllMotions();

                        thisRef.setUpdating(false);
                        thisRef.setInitialized(true);

                        if (typeof callback == "function") callback();

                    }
                });
            }
        });
    });
};



LAppModel.prototype.release = function(gl)
{
    // this.live2DModel.deleteTextures();
    var pm = Live2DFramework.getPlatformManager();

    gl.deleteTexture(pm.texture);
}



LAppModel.prototype.preloadMotionGroup = function(name)
{
    var thisRef = this;

    for (var i = 0; i < this.modelSetting.getMotionNum(name); i++)
    {
        var file = this.modelSetting.getMotionFile(name, i);
        this.loadMotion(file, this.modelHomeDir + file, function(motion) {
            motion.setFadeIn(thisRef.modelSetting.getMotionFadeIn(name, i));
            motion.setFadeOut(thisRef.modelSetting.getMotionFadeOut(name, i));
        });

    }
}


LAppModel.prototype.update = function()
{
    // console.log("--> LAppModel.update()");

    if(this.live2DModel == null)
    {
        if (LAppDefine.DEBUG_LOG) console.error("Failed to update.");

        return;
    }

    var timeMSec = UtSystem.getUserTimeMSec() - this.startTimeMSec;
    var timeSec = timeMSec / 1000.0;
    var t = timeSec * 2 * Math.PI;


    if (this.mainMotionManager.isFinished())
    {
        var Sleepy = sessionStorage.getItem('Sleepy');
        if(Sleepy === '1') {
            this.startRandomMotion(LAppDefine.MOTION_GROUP_SLEEPY, LAppDefine.PRIORITY_SLEEPY);
        }else {
            this.startRandomMotion(LAppDefine.MOTION_GROUP_IDLE, LAppDefine.PRIORITY_IDLE);
        }
    }

    //-----------------------------------------------------------------


    this.live2DModel.loadParam();



    var update = this.mainMotionManager.updateParam(this.live2DModel);
    if (!update) {

        if(this.eyeBlink != null) {
            this.eyeBlink.updateParam(this.live2DModel);
        }
    }


    this.live2DModel.saveParam();

    //-----------------------------------------------------------------


    if (this.expressionManager != null &&
        this.expressions != null &&
        !this.expressionManager.isFinished())
    {
        this.expressionManager.updateParam(this.live2DModel);
    }



    this.live2DModel.addToParamFloat("PARAM_ANGLE_X", this.dragX * 30, 1);
    this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", this.dragY * 30, 1);
    this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", (this.dragX * this.dragY) * -30, 1);



    this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", this.dragX*10, 1);



    this.live2DModel.addToParamFloat("PARAM_EYE_BALL_X", this.dragX, 1);
    this.live2DModel.addToParamFloat("PARAM_EYE_BALL_Y", this.dragY, 1);



    this.live2DModel.addToParamFloat("PARAM_ANGLE_X",
                                     Number((15 * Math.sin(t / 6.5345))), 0.5);
    this.live2DModel.addToParamFloat("PARAM_ANGLE_Y",
                                     Number((8 * Math.sin(t / 3.5345))), 0.5);
    this.live2DModel.addToParamFloat("PARAM_ANGLE_Z",
                                     Number((10 * Math.sin(t / 5.5345))), 0.5);
    this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X",
                                     Number((4 * Math.sin(t / 15.5345))), 0.5);
    this.live2DModel.setParamFloat("PARAM_BREATH",
                                   Number((0.5 + 0.5 * Math.sin(t / 3.2345))), 1);


    if (this.physics != null)
    {
        this.physics.updateParam(this.live2DModel);
    }


    if (this.lipSync == null)
    {
        this.live2DModel.setParamFloat("PARAM_MOUTH_OPEN_Y",
                                       this.lipSyncValue);
    }


    if( this.pose != null ) {
        this.pose.updateParam(this.live2DModel);
    }

    this.live2DModel.update();
};



LAppModel.prototype.setRandomExpression = function()
{
    var tmp = [];
    for (var name in this.expressions)
    {
        tmp.push(name);
    }

    var no = parseInt(Math.random() * tmp.length);

    this.setExpression(tmp[no]);
}



LAppModel.prototype.startRandomMotion = function(name, priority)
{
    var max = this.modelSetting.getMotionNum(name);
    var no = parseInt(Math.random() * max);
    this.startMotion(name, no, priority);
}



LAppModel.prototype.startMotion = function(name, no, priority)
{
    // console.log("startMotion : " + name + " " + no + " " + priority);

    var motionName = this.modelSetting.getMotionFile(name, no);

    if (motionName == null || motionName == "")
    {
        if (LAppDefine.DEBUG_LOG)
            console.error("Failed to motion.");
        return;
    }

    if (priority == LAppDefine.PRIORITY_FORCE)
    {
        this.mainMotionManager.setReservePriority(priority);
    }
    else if (!this.mainMotionManager.reserveMotion(priority))
    {
        if (LAppDefine.DEBUG_LOG)
            console.log("Motion is running.")
        return;
    }

    var thisRef = this;
    var motion;

    if (this.motions[name] == null)
    {
        this.loadMotion(null, this.modelHomeDir + motionName, function(mtn) {
            motion = mtn;


            thisRef.setFadeInFadeOut(name, no, priority, motion);

        });
    }
    else
    {
        motion = this.motions[name];


        thisRef.setFadeInFadeOut(name, no, priority, motion);
    }
}


LAppModel.prototype.setFadeInFadeOut = function(name, no, priority, motion)
{
    var motionName = this.modelSetting.getMotionFile(name, no);

    motion.setFadeIn(this.modelSetting.getMotionFadeIn(name, no));
    motion.setFadeOut(this.modelSetting.getMotionFadeOut(name, no));


    if (LAppDefine.DEBUG_LOG)
            console.log("Start motion : " + motionName);

    if (this.modelSetting.getMotionSound(name, no) == null)
    {
        this.mainMotionManager.startMotionPrio(motion, priority);
    }
    else
    {
        var soundName = this.modelSetting.getMotionSound(name, no);
        // var player = new Sound(this.modelHomeDir + soundName);

        var snd = document.createElement("audio");
        snd.src = this.modelHomeDir + soundName;

        if (LAppDefine.DEBUG_LOG)
            console.log("Start sound : " + soundName);

        snd.play();
        this.mainMotionManager.startMotionPrio(motion, priority);
    }
}



LAppModel.prototype.setExpression = function(name)
{
    var motion = this.expressions[name];

    if (LAppDefine.DEBUG_LOG)
        console.log("Expression : " + name);

    this.expressionManager.startMotion(motion, false);
}



LAppModel.prototype.draw = function(gl)
{
    //console.log("--> LAppModel.draw()");

    // if(this.live2DModel == null) return;


    MatrixStack.push();

    MatrixStack.multMatrix(this.modelMatrix.getArray());

    this.tmpMatrix = MatrixStack.getMatrix()
    this.live2DModel.setMatrix(this.tmpMatrix);
    this.live2DModel.draw();

    MatrixStack.pop();

};



LAppModel.prototype.hitTest = function(id, testX, testY)
{
    var len = this.modelSetting.getHitAreaNum();
    for (var i = 0; i < len; i++)
    {
        if (id == this.modelSetting.getHitAreaName(i))
        {
            var drawID = this.modelSetting.getHitAreaID(i);

            return this.hitTestSimple(drawID, testX, testY);
        }
    }

    return false;
}


LAppModel.prototype.hitTestCustom = function(type, testX, testY)
{
    if (type == 'head'){
        return this.hitTestSimpleCustom(LAppDefine.hit_areas_custom_head_x, LAppDefine.hit_areas_custom_head_y, testX, testY);
    }else if (type == 'body'){
        return this.hitTestSimpleCustom(LAppDefine.hit_areas_custom_body_x, LAppDefine.hit_areas_custom_body_y, testX, testY);
    }else{
        return false;
    }
}


//============================================================
//============================================================
//  class PlatformManager     extend IPlatformManager
//============================================================
//============================================================
 function PlatformManager()
{

}

var requestCache = {};
//============================================================
//    PlatformManager # loadBytes()
//============================================================
PlatformManager.prototype.loadBytes       = function(path/*String*/, callback)
{
    if (requestCache[path] !== undefined) {
      callback(requestCache[path]);
      return;
    }
    var request = new XMLHttpRequest();
    request.open("GET", path, true);
    request.responseType = "arraybuffer";
    request.onload = function(){
        switch(request.status){
        case 200:
            requestCache[path] = request.response;
            callback(request.response);
            break;
        default:
            console.error("Failed to load (" + request.status + ") : " + path);
            break;
        }
    }
    request.send(null);
    //return request;
}

//============================================================
//    PlatformManager # loadString()
//============================================================
PlatformManager.prototype.loadString      = function(path/*String*/)
{

    this.loadBytes(path, function(buf) {
        return buf;
    });

}

//============================================================
//    PlatformManager # loadLive2DModel()
//============================================================
PlatformManager.prototype.loadLive2DModel = function(path/*String*/, callback)
{
    var model = null;

    // load moc
    this.loadBytes(path, function(buf){
        model = Live2DModelWebGL.loadModel(buf);
        callback(model);
    });

}

//============================================================
//    PlatformManager # loadTexture()
//============================================================
PlatformManager.prototype.loadTexture     = function(model/*ALive2DModel*/, no/*int*/, path/*String*/, callback)
{
    // load textures
    var loadedImage = new Image();
    loadedImage.crossOrigin = 'Anonymous';
    loadedImage.src = path;

    var thisRef = this;
    loadedImage.onload = function() {
        // create texture
        var gl = getContext();
        var texture = gl.createTexture();
        if (!texture){ console.error("Failed to generate gl texture name."); return -1; }

        if(model.isPremultipliedAlpha() == false){
            // 乗算済アルファテクスチャ以外の場合
            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
        }
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,
                      gl.UNSIGNED_BYTE, loadedImage);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);



        model.setTexture(no, texture);

        // テクスチャオブジェクトを解放
        texture = null;

        if (typeof callback == "function") callback();
    };

    loadedImage.onerror = function() {
        console.error("Failed to load image : " + path);
    }
}


//============================================================
//    PlatformManager # parseFromBytes(buf)

//============================================================
PlatformManager.prototype.jsonParseFromBytes = function(buf){

    var jsonStr;

    var bomCode = new Uint8Array(buf, 0, 3);
    if (bomCode[0] == 239 && bomCode[1] == 187 && bomCode[2] == 191) {
        jsonStr = String.fromCharCode.apply(null, new Uint8Array(buf, 3));
    } else {
        jsonStr = String.fromCharCode.apply(null, new Uint8Array(buf));
    }

    var jsonObj = JSON.parse(jsonStr);

    return jsonObj;
};


//============================================================
//    PlatformManager # log()
//============================================================
PlatformManager.prototype.log             = function(txt/*String*/)
{
    //console.log(txt);
}

/**
 * EYHN 基于 live2d 官方 Live2DFramework.js 修改
 *
 * Copyright © 2016 - 2017 EYHN
 */
//============================================================
//============================================================
//  class L2DBaseModel
//============================================================
//============================================================
function L2DBaseModel() {
    this.live2DModel = null; // ALive2DModel
    this.modelMatrix = null; // L2DModelMatrix
    this.eyeBlink = null; // L2DEyeBlink
    this.physics = null; // L2DPhysics
    this.pose = null; // L2DPose
    this.debugMode = false;
    this.initialized = false;
    this.updating = false;
    this.alpha = 1;
    this.accAlpha = 0;
    this.lipSync = false;
    this.lipSyncValue = 0;
    this.accelX = 0;
    this.accelY = 0;
    this.accelZ = 0;
    this.dragX = 0;
    this.dragY = 0;
    this.startTimeMSec = null;
    this.mainMotionManager = new L2DMotionManager(); //L2DMotionManager
    this.expressionManager = new L2DMotionManager(); //L2DMotionManager
    this.motions = {};
    this.expressions = {};

    this.isTexLoaded = false;
}

var texCounter = 0;

//============================================================
//    L2DBaseModel # getModelMatrix()
//============================================================
L2DBaseModel.prototype.getModelMatrix = function () {
    return this.modelMatrix;
}

//============================================================
//    L2DBaseModel # setAlpha()
//============================================================
L2DBaseModel.prototype.setAlpha = function (a/*float*/) {
    if (a > 0.999) a = 1;
    if (a < 0.001) a = 0;
    this.alpha = a;
}

//============================================================
//    L2DBaseModel # getAlpha()
//============================================================
L2DBaseModel.prototype.getAlpha = function () {
    return this.alpha;
}

//============================================================
//    L2DBaseModel # isInitialized()
//============================================================
L2DBaseModel.prototype.isInitialized = function () {
    return this.initialized;
}

//============================================================
//    L2DBaseModel # setInitialized()
//============================================================
L2DBaseModel.prototype.setInitialized = function (v/*boolean*/) {
    this.initialized = v;
}

//============================================================
//    L2DBaseModel # isUpdating()
//============================================================
L2DBaseModel.prototype.isUpdating = function () {
    return this.updating;
}

//============================================================
//    L2DBaseModel # setUpdating()
//============================================================
L2DBaseModel.prototype.setUpdating = function (v/*boolean*/) {
    this.updating = v;
}

//============================================================
//    L2DBaseModel # getLive2DModel()
//============================================================
L2DBaseModel.prototype.getLive2DModel = function () {
    return this.live2DModel;
}

//============================================================
//    L2DBaseModel # setLipSync()
//============================================================
L2DBaseModel.prototype.setLipSync = function (v/*boolean*/) {
    this.lipSync = v;
}

//============================================================
//    L2DBaseModel # setLipSyncValue()
//============================================================
L2DBaseModel.prototype.setLipSyncValue = function (v/*float*/) {
    this.lipSyncValue = v;
}

//============================================================
//    L2DBaseModel # setAccel()
//============================================================
L2DBaseModel.prototype.setAccel = function (x/*float*/, y/*float*/, z/*float*/) {
    this.accelX = x;
    this.accelY = y;
    this.accelZ = z;
}

//============================================================
//    L2DBaseModel # setDrag()
//============================================================
L2DBaseModel.prototype.setDrag = function (x/*float*/, y/*float*/) {
    this.dragX = x;
    this.dragY = y;
}

//============================================================
//    L2DBaseModel # getMainMotionManager()
//============================================================
L2DBaseModel.prototype.getMainMotionManager = function () {
    return this.mainMotionManager;
}

//============================================================
//    L2DBaseModel # getExpressionManager()
//============================================================
L2DBaseModel.prototype.getExpressionManager = function () {
    return this.expressionManager;
}

//============================================================
//    L2DBaseModel # loadModelData()
//============================================================
L2DBaseModel.prototype.loadModelData = function (path/*String*/, callback) {
    /*
    if( this.live2DModel != null ) {
        this.live2DModel.deleteTextures();
    }
    */
    var pm = Live2DFramework.getPlatformManager(); //IPlatformManager
    if (this.debugMode) pm.log("Load model : " + path);

    var thisRef = this;
    pm.loadLive2DModel(path, function (l2dModel) {
        thisRef.live2DModel = l2dModel;
        thisRef.live2DModel.saveParam();

        var _err = Live2D.getError();

        if (_err != 0) {
            console.error("Error : Failed to loadModelData().");
            return;
        }

        thisRef.modelMatrix = new L2DModelMatrix(
            thisRef.live2DModel.getCanvasWidth(),
            thisRef.live2DModel.getCanvasHeight()); //L2DModelMatrix
        thisRef.modelMatrix.setWidth(2);
        thisRef.modelMatrix.setCenterPosition(0, 0);

        callback(thisRef.live2DModel);
    });
}


//============================================================
//    L2DBaseModel # loadTexture()
//============================================================
L2DBaseModel.prototype.loadTexture = function (no/*int*/, path/*String*/, callback) {
    texCounter++;

    var pm = Live2DFramework.getPlatformManager(); //IPlatformManager

    if (this.debugMode) pm.log("Load Texture : " + path);

    var thisRef = this;
    pm.loadTexture(this.live2DModel, no, path, function () {
        texCounter--;
        if (texCounter == 0) thisRef.isTexLoaded = true;
        if (typeof callback == "function") callback();
    });

}

//============================================================
//    L2DBaseModel # loadMotion()
//============================================================
L2DBaseModel.prototype.loadMotion = function (name/*String*/, path /*String*/, callback) {
    var pm = Live2DFramework.getPlatformManager(); //IPlatformManager

    if (this.debugMode) pm.log("Load Motion : " + path);

    var motion = null; //Live2DMotion

    var thisRef = this;
    pm.loadBytes(path, function (buf) {
        motion = Live2DMotion.loadMotion(buf);
        if (name != null) {
            thisRef.motions[name] = motion;
        }
        callback(motion);
    });

}

//============================================================
//    L2DBaseModel # loadExpression()
//============================================================
L2DBaseModel.prototype.loadExpression = function (name/*String*/, path /*String*/, callback) {
    var pm = Live2DFramework.getPlatformManager(); //IPlatformManager

    if (this.debugMode) pm.log("Load Expression : " + path);

    var thisRef = this;
    pm.loadBytes(path, function (buf) {
        if (name != null) {
            thisRef.expressions[name] = L2DExpressionMotion.loadJson(buf);
        }
        if (typeof callback == "function") callback();
    });
}

//============================================================
//    L2DBaseModel # loadPose()
//============================================================
L2DBaseModel.prototype.loadPose = function (path /*String*/, callback) {
    var pm = Live2DFramework.getPlatformManager(); //IPlatformManager
    if (this.debugMode) pm.log("Load Pose : " + path);
    var thisRef = this;
    try {
        pm.loadBytes(path, function (buf) {
            thisRef.pose = L2DPose.load(buf);
            if (typeof callback == "function") callback();
        });
    }
    catch (e) {
        console.warn(e);
    }
}

//============================================================
//    L2DBaseModel # loadPhysics()
//============================================================
L2DBaseModel.prototype.loadPhysics = function (path/*String*/) {
    var pm = Live2DFramework.getPlatformManager(); //IPlatformManager
    if (this.debugMode) pm.log("Load Physics : " + path);
    var thisRef = this;
    try {
        pm.loadBytes(path, function (buf) {
            thisRef.physics = L2DPhysics.load(buf);
        });
    }
    catch (e) {
        console.warn(e);
    }
}

//============================================================
//    L2DBaseModel # hitTestSimple()
//============================================================
L2DBaseModel.prototype.hitTestSimple = function (drawID, testX, testY) {

    if(this.live2DModel === null) return !1;

    var drawIndex = this.live2DModel.getDrawDataIndex(drawID);

    if (drawIndex < 0) return false;

    var points = this.live2DModel.getTransformedPoints(drawIndex);
    var left = this.live2DModel.getCanvasWidth();
    var right = 0;
    var top = this.live2DModel.getCanvasHeight();
    var bottom = 0;

    for (var j = 0; j < points.length; j = j + 2) {
        var x = points[j];
        var y = points[j + 1];

        if (x < left) left = x;
        if (x > right) right = x;
        if (y < top) top = y;
        if (y > bottom) bottom = y;
    }
    var tx = this.modelMatrix.invertTransformX(testX);
    var ty = this.modelMatrix.invertTransformY(testY);

    return (left <= tx && <="right" top ty } =="==========================================================" l2dbasemodel # hittestsimplecustom() l2dbasemodel.prototype.hittestsimplecustom="function" (x, y, testx, testy) { if(this.live2dmodel="==" null) return !1; if(testx>= x[0] && testX <= y[0]) if(testy <="x[1]" && testy>= y[1])
            return true;
    return false;
}

/**
 *
 *  You can modify and use this source freely
 *  only for the development of application related Live2D.
 *
 *  (c) Live2D Inc. All rights reserved.
 */

//============================================================
//============================================================
//  class L2DExpressionMotion  extends     AMotion
//============================================================
//============================================================
function L2DExpressionMotion() {
    AMotion.prototype.constructor.call(this);
    this.paramList = new Array(); //ArrayList<L2DExpressionParam>
}

L2DExpressionMotion.prototype = new AMotion(); // L2DExpressionMotion extends AMotion

//============================================================
L2DExpressionMotion.EXPRESSION_DEFAULT = "DEFAULT";
L2DExpressionMotion.TYPE_SET = 0;
L2DExpressionMotion.TYPE_ADD = 1;
L2DExpressionMotion.TYPE_MULT = 2;

//============================================================
//    static L2DExpressionMotion.loadJson()
//============================================================
L2DExpressionMotion.loadJson = function (buf) {
    var ret = new L2DExpressionMotion();

    var pm = Live2DFramework.getPlatformManager();
    var json = pm.jsonParseFromBytes(buf);

    ret.setFadeIn(parseInt(json.fade_in) > 0 ? parseInt(json.fade_in) : 1000);
    ret.setFadeOut(parseInt(json.fade_out) > 0 ? parseInt(json.fade_out) : 1000);

    if (json.params == null) {
        return ret;
    }

    var params = json.params;
    var paramNum = params.length;
    ret.paramList = []; //ArrayList<L2DExpressionParam>
    for (var i = 0; i < paramNum; i++) {
        var param = params[i];
        var paramID = param.id.toString();
        var value = parseFloat(param.val);
        var calcTypeInt = L2DExpressionMotion.TYPE_ADD;
        var calc = param.calc != null ? param.calc.toString() : "add";
        if (calc === "add") {
            calcTypeInt = L2DExpressionMotion.TYPE_ADD;
        }
        else if (calc === "mult") {
            calcTypeInt = L2DExpressionMotion.TYPE_MULT;
        }
        else if (calc === "set") {
            calcTypeInt = L2DExpressionMotion.TYPE_SET;
        }
        else {
            calcTypeInt = L2DExpressionMotion.TYPE_ADD;
        }
        if (calcTypeInt == L2DExpressionMotion.TYPE_ADD) {
            var defaultValue = param.def == null ? 0 : parseFloat(param.def);
            value = value - defaultValue;
        }
        else if (calcTypeInt == L2DExpressionMotion.TYPE_MULT) {
            var defaultValue = param.def == null ? 1 : parseFloat(param.def);
            if (defaultValue == 0) defaultValue = 1;
            value = value / defaultValue;
        }

        var item = new L2DExpressionParam();
        item.id = paramID;
        item.type = calcTypeInt;
        item.value = value;

        ret.paramList.push(item);
    }

    return ret;
}


//============================================================
//    L2DExpressionMotion # updateParamExe()
//============================================================
L2DExpressionMotion.prototype.updateParamExe = function (model /*ALive2DModel*/, timeMSec/*long*/, weight /*float*/, motionQueueEnt /*MotionQueueEnt*/) {
    for (var i = this.paramList.length - 1; i >= 0; --i) {
        var param = this.paramList[i]; //L2DExpressionParam
        // if (!param || !param.type) continue;
        if (param.type == L2DExpressionMotion.TYPE_ADD) {
            model.addToParamFloat(param.id, param.value, weight);
        }
        else if (param.type == L2DExpressionMotion.TYPE_MULT) {
            model.multParamFloat(param.id, param.value, weight);
        }
        else if (param.type == L2DExpressionMotion.TYPE_SET) {
            model.setParamFloat(param.id, param.value, weight);
        }
    }
}

//============================================================
//============================================================
//  class L2DExpressionParam
//============================================================
//============================================================
function L2DExpressionParam() {
    this.id = "";
    this.type = -1;
    this.value = null;
}

/**
 *
 *  You can modify and use this source freely
 *  only for the development of application related Live2D.
 *
 *  (c) Live2D Inc. All rights reserved.
 */

//============================================================
//============================================================
//  class L2DEyeBlink
//============================================================
//============================================================
function L2DEyeBlink() {
    this.nextBlinkTime = null /* TODO NOT INIT */; //
    this.stateStartTime = null /* TODO NOT INIT */; //
    this.blinkIntervalMsec = null /* TODO NOT INIT */; //
    this.eyeState = EYE_STATE.STATE_FIRST;
    this.blinkIntervalMsec = 4000;
    this.closingMotionMsec = 100;
    this.closedMotionMsec = 50;
    this.openingMotionMsec = 150;
    this.closeIfZero = true;
    this.eyeID_L = "PARAM_EYE_L_OPEN";
    this.eyeID_R = "PARAM_EYE_R_OPEN";
}

//============================================================
//    L2DEyeBlink # calcNextBlink()
//============================================================
L2DEyeBlink.prototype.calcNextBlink = function () {
    var time /*long*/ = UtSystem.getUserTimeMSec();
    var r /*Number*/ = Math.random();
    return  /*(long)*/ (time + r * (2 * this.blinkIntervalMsec - 1));
}

//============================================================
//    L2DEyeBlink # setInterval()
//============================================================
L2DEyeBlink.prototype.setInterval = function (blinkIntervalMsec /*int*/) {
    this.blinkIntervalMsec = blinkIntervalMsec;
}

//============================================================
//    L2DEyeBlink # setEyeMotion()
//============================================================
L2DEyeBlink.prototype.setEyeMotion = function (closingMotionMsec/*int*/, closedMotionMsec/*int*/, openingMotionMsec/*int*/) {
    this.closingMotionMsec = closingMotionMsec;
    this.closedMotionMsec = closedMotionMsec;
    this.openingMotionMsec = openingMotionMsec;
}

//============================================================
//    L2DEyeBlink # updateParam()
//============================================================
L2DEyeBlink.prototype.updateParam = function (model/*ALive2DModel*/) {
    var time /*:long*/ = UtSystem.getUserTimeMSec();
    var eyeParamValue /*:Number*/;
    var t /*:Number*/ = 0;
    switch (this.eyeState) {
        case EYE_STATE.STATE_CLOSING:
            t = (time - this.stateStartTime) / this.closingMotionMsec;
            if (t >= 1) {
                t = 1;
                this.eyeState = EYE_STATE.STATE_CLOSED;
                this.stateStartTime = time;
            }
            eyeParamValue = 1 - t;
            break;
        case EYE_STATE.STATE_CLOSED:
            t = (time - this.stateStartTime) / this.closedMotionMsec;
            if (t >= 1) {
                this.eyeState = EYE_STATE.STATE_OPENING;
                this.stateStartTime = time;
            }
            eyeParamValue = 0;
            break;
        case EYE_STATE.STATE_OPENING:
            t = (time - this.stateStartTime) / this.openingMotionMsec;
            if (t >= 1) {
                t = 1;
                this.eyeState = EYE_STATE.STATE_INTERVAL;
                this.nextBlinkTime = this.calcNextBlink();
            }
            eyeParamValue = t;
            break;
        case EYE_STATE.STATE_INTERVAL:
            if (this.nextBlinkTime < time) {
                this.eyeState = EYE_STATE.STATE_CLOSING;
                this.stateStartTime = time;
            }
            eyeParamValue = 1;
            break;
        case EYE_STATE.STATE_FIRST:
        default:
            this.eyeState = EYE_STATE.STATE_INTERVAL;
            this.nextBlinkTime = this.calcNextBlink();
            eyeParamValue = 1;
            break;
    }
    if (!this.closeIfZero) eyeParamValue = -eyeParamValue;
    model.setParamFloat(this.eyeID_L, eyeParamValue);
    model.setParamFloat(this.eyeID_R, eyeParamValue);
}

//== enum EYE_STATE ==
var EYE_STATE = function () { };

EYE_STATE.STATE_FIRST = "STATE_FIRST"
EYE_STATE.STATE_INTERVAL = "STATE_INTERVAL"
EYE_STATE.STATE_CLOSING = "STATE_CLOSING"
EYE_STATE.STATE_CLOSED = "STATE_CLOSED"
EYE_STATE.STATE_OPENING = "STATE_OPENING"
/**
 *
 *  You can modify and use this source freely
 *  only for the development of application related Live2D.
 *
 *  (c) Live2D Inc. All rights reserved.
 */

//============================================================
//============================================================
//  class L2DMatrix44
//============================================================
//============================================================
function L2DMatrix44() {
    this.tr = new Float32Array(16); //
    this.identity();
}

//============================================================
//    static L2DMatrix44.mul()
//============================================================
L2DMatrix44.mul = function (a/*float[]*/, b/*float[]*/, dst/*float[]*/) {
    var c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var n = 4;
    var i, j, k;
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            for (k = 0; k < n; k++) {
                c[i + j * 4] += a[i + k * 4] * b[k + j * 4];
            }
        }
    }
    for (i = 0; i < 16; i++) {
        dst[i] = c[i];
    }
}

//============================================================
//    L2DMatrix44 # identity()
//============================================================
L2DMatrix44.prototype.identity = function () {
    for (var i/*:int*/ = 0; i < 16; i++)
        this.tr[i] = ((i % 5) == 0) ? 1 : 0;
}

//============================================================
//    L2DMatrix44 # getArray()
//============================================================
L2DMatrix44.prototype.getArray = function () {
    return this.tr;
}

//============================================================
//    L2DMatrix44 # getCopyMatrix()
//============================================================
L2DMatrix44.prototype.getCopyMatrix = function () {
    return new Float32Array(this.tr); // this.tr.clone();
}

//============================================================
//    L2DMatrix44 # setMatrix()
//============================================================
L2DMatrix44.prototype.setMatrix = function (tr/*float[]*/) {
    if (this.tr == null || this.tr.length != this.tr.length) return;
    for (var i/*:int*/ = 0; i < 16; i++) this.tr[i] = tr[i];
}

//============================================================
//    L2DMatrix44 # getScaleX()
//============================================================
L2DMatrix44.prototype.getScaleX = function () {
    return this.tr[0];
}

//============================================================
//    L2DMatrix44 # getScaleY()
//============================================================
L2DMatrix44.prototype.getScaleY = function () {
    return this.tr[5];
}

//============================================================
//    L2DMatrix44 # transformX()
//============================================================
L2DMatrix44.prototype.transformX = function (src/*float*/) {
    if(ny_css_fix){
        return this.tr[0] * src*8/3 + this.tr[12];
    }else{
        return this.tr[0] * src + this.tr[12];
    }
}

//============================================================
//    L2DMatrix44 # transformY()
//============================================================
L2DMatrix44.prototype.transformY = function (src/*float*/) {
    if(ny_css_fix){
        return this.tr[5] * src*8/3 + this.tr[13];
    }else{
        return this.tr[5] * src + this.tr[13];
    }
}

//============================================================
//    L2DMatrix44 # invertTransformX()
//============================================================
L2DMatrix44.prototype.invertTransformX = function (src/*float*/) {
    return (src - this.tr[12]) / this.tr[0];
}

//============================================================
//    L2DMatrix44 # invertTransformY()
//============================================================
L2DMatrix44.prototype.invertTransformY = function (src/*float*/) {
    return (src - this.tr[13]) / this.tr[5];
}

//============================================================
//    L2DMatrix44 # multTranslate()
//============================================================
L2DMatrix44.prototype.multTranslate = function (shiftX/*float*/, shiftY/*float*/) {
    var tr1 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, shiftX, shiftY, 0, 1];
    L2DMatrix44.mul(tr1, this.tr, this.tr);
}

//============================================================
//    L2DMatrix44 # translate()
//============================================================
L2DMatrix44.prototype.translate = function (x/*float*/, y/*float*/) {
    this.tr[12] = x;
    this.tr[13] = y;
}

//============================================================
//    L2DMatrix44 # translateX()
//============================================================
L2DMatrix44.prototype.translateX = function (x/*float*/) {
    this.tr[12] = x;
}

//============================================================
//    L2DMatrix44 # translateY()
//============================================================
L2DMatrix44.prototype.translateY = function (y/*float*/) {
    this.tr[13] = y;
}

//============================================================
//    L2DMatrix44 # multScale()
//============================================================
L2DMatrix44.prototype.multScale = function (scaleX/*float*/, scaleY/*float*/) {
    var tr1 = [scaleX, 0, 0, 0, 0, scaleY, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    L2DMatrix44.mul(tr1, this.tr, this.tr);
}

//============================================================
//    L2DMatrix44 # scale()
//============================================================
L2DMatrix44.prototype.scale = function (scaleX/*float*/, scaleY/*float*/) {
    this.tr[0] = scaleX;
    this.tr[5] = scaleY;
}
/**
 *
 *  You can modify and use this source freely
 *  only for the development of application related Live2D.
 *
 *  (c) Live2D Inc. All rights reserved.
 */

//============================================================
//============================================================
//  class L2DModelMatrix       extends     L2DMatrix44
//============================================================
//============================================================
function L2DModelMatrix(w/*float*/, h/*float*/) {
    L2DMatrix44.prototype.constructor.call(this);
    this.width = w;
    this.height = h;
}

//L2DModelMatrix extends L2DMatrix44
L2DModelMatrix.prototype = new L2DMatrix44();

//============================================================
//    L2DModelMatrix # setPosition()
//============================================================
L2DModelMatrix.prototype.setPosition = function (x/*float*/, y/*float*/) {
    this.translate(x, y);
}

//============================================================
//    L2DModelMatrix # setCenterPosition()
//============================================================
L2DModelMatrix.prototype.setCenterPosition = function (x/*float*/, y/*float*/) {
    var w = this.width * this.getScaleX();
    var h = this.height * this.getScaleY();
    this.translate(x - w / 2, y - h / 2);
}

//============================================================
//    L2DModelMatrix # top()
//============================================================
L2DModelMatrix.prototype.top = function (y/*float*/) {
    this.setY(y);
}

//============================================================
//    L2DModelMatrix # bottom()
//============================================================
L2DModelMatrix.prototype.bottom = function (y/*float*/) {
    var h = this.height * this.getScaleY();
    this.translateY(y - h);
}

//============================================================
//    L2DModelMatrix # left()
//============================================================
L2DModelMatrix.prototype.left = function (x/*float*/) {
    this.setX(x);
}

//============================================================
//    L2DModelMatrix # right()
//============================================================
L2DModelMatrix.prototype.right = function (x/*float*/) {
    var w = this.width * this.getScaleX();
    this.translateX(x - w);
}

//============================================================
//    L2DModelMatrix # centerX()
//============================================================
L2DModelMatrix.prototype.centerX = function (x/*float*/) {
    var w = this.width * this.getScaleX();
    this.translateX(x - w / 2);
}

//============================================================
//    L2DModelMatrix # centerY()
//============================================================
L2DModelMatrix.prototype.centerY = function (y/*float*/) {
    var h = this.height * this.getScaleY();
    this.translateY(y - h / 2);
}

//============================================================
//    L2DModelMatrix # setX()
//============================================================
L2DModelMatrix.prototype.setX = function (x/*float*/) {
    this.translateX(x);
}

//============================================================
//    L2DModelMatrix # setY()
//============================================================
L2DModelMatrix.prototype.setY = function (y/*float*/) {
    this.translateY(y);
}

//============================================================
//    L2DModelMatrix # setHeight()
//============================================================
L2DModelMatrix.prototype.setHeight = function (h/*float*/) {
    var scaleX = h / this.height;
    var scaleY = -scaleX;
    this.scale(scaleX, scaleY);
}

//============================================================
//    L2DModelMatrix # setWidth()
//============================================================
L2DModelMatrix.prototype.setWidth = function (w/*float*/) {
    var scaleX = w / this.width;
    var scaleY = -scaleX;
    this.scale(scaleX, scaleY);
}

/**
 *
 *  You can modify and use this source freely
 *  only for the development of application related Live2D.
 *
 *  (c) Live2D Inc. All rights reserved.
 */

//============================================================
//============================================================
//  class L2DMotionManager     extends     MotionQueueManager
//============================================================
//============================================================
function L2DMotionManager() {
    MotionQueueManager.prototype.constructor.call(this);
    this.currentPriority = null;
    this.reservePriority = null;

    this.super = MotionQueueManager.prototype;
}


L2DMotionManager.prototype = new MotionQueueManager();

//============================================================
//    L2DMotionManager # getCurrentPriority()
//============================================================
L2DMotionManager.prototype.getCurrentPriority = function () {
    return this.currentPriority;
}

//============================================================
//    L2DMotionManager # getReservePriority()
//============================================================
L2DMotionManager.prototype.getReservePriority = function () {
    return this.reservePriority;
}

//============================================================
//    L2DMotionManager # reserveMotion()
//============================================================
L2DMotionManager.prototype.reserveMotion = function (priority/*int*/) {
    if (this.reservePriority >= priority) {
        return false;
    }
    if (this.currentPriority >= priority) {
        return false;
    }

    this.reservePriority = priority;

    return true;
}

//============================================================
//    L2DMotionManager # setReservePriority()
//============================================================
L2DMotionManager.prototype.setReservePriority = function (val/*int*/) {
    this.reservePriority = val;
}

//============================================================
//    L2DMotionManager # updateParam()
//============================================================
L2DMotionManager.prototype.updateParam = function (model/*ALive2DModel*/) {
    var updated = MotionQueueManager.prototype.updateParam.call(this, model);

    if (this.isFinished()) {
        this.currentPriority = 0;
    }

    return updated;
}

//============================================================
//    L2DMotionManager # startMotionPrio()
//============================================================
L2DMotionManager.prototype.startMotionPrio = function (motion/*AMotion*/, priority/*int*/) {
    if (priority == this.reservePriority) {
        this.reservePriority = 0;
    }
    this.currentPriority = priority;
    return this.startMotion(motion, false);
}

/**
 *
 *  You can modify and use this source freely
 *  only for the development of application related Live2D.
 *
 *  (c) Live2D Inc. All rights reserved.
 */

//============================================================
//============================================================
//  class L2DPhysics
//============================================================
//============================================================
function L2DPhysics() {
    this.physicsList = new Array(); //ArrayList<PhysicsHair>
    this.startTimeMSec = UtSystem.getUserTimeMSec();
}

//============================================================
//    static L2DPhysics.load()
//============================================================
L2DPhysics.load = function (buf /*byte[]*/) {
    var ret = new L2DPhysics(); //L2DPhysicsL2DPhysics
    var pm = Live2DFramework.getPlatformManager();
    var json = pm.jsonParseFromBytes(buf);
    var params = json.physics_hair;
    var paramNum = params.length;
    for (var i = 0; i < paramNum; i++) {
        var param = params[i]; //Value
        var physics = new PhysicsHair(); //PhysicsHairPhysicsHair
        var setup = param.setup; //Value
        var length = parseFloat(setup.length);
        var resist = parseFloat(setup.regist);
        var mass = parseFloat(setup.mass);
        physics.setup(length, resist, mass);
        var srcList = param.src; //Value
        var srcNum = srcList.length;
        for (var j = 0; j < srcNum; j++) {
            var src = srcList[j]; //Value
            var id = src.id; //String
            var type = PhysicsHair.Src.SRC_TO_X;
            var typeStr = src.ptype; //String
            if (typeStr === "x") {
                type = PhysicsHair.Src.SRC_TO_X;
            }
            else if (typeStr === "y") {
                type = PhysicsHair.Src.SRC_TO_Y;
            }
            else if (typeStr === "angle") {
                type = PhysicsHair.Src.SRC_TO_G_ANGLE;
            }
            else {
                UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Src");
            }
            var scale = parseFloat(src.scale);
            var weight = parseFloat(src.weight);
            physics.addSrcParam(type, id, scale, weight);
        }
        var targetList = param.targets; //Value
        var targetNum = targetList.length;
        for (var j = 0; j < targetNum; j++) {
            var target = targetList[j]; //Value
            var id = target.id; //String
            var type = PhysicsHair.Target.TARGET_FROM_ANGLE;
            var typeStr = target.ptype; //String
            if (typeStr === "angle") {
                type = PhysicsHair.Target.TARGET_FROM_ANGLE;
            }
            else if (typeStr === "angle_v") {
                type = PhysicsHair.Target.TARGET_FROM_ANGLE_V;
            }
            else {
                UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Target");
            }
            var scale = parseFloat(target.scale);
            var weight = parseFloat(target.weight);
            physics.addTargetParam(type, id, scale, weight);
        }
        ret.physicsList.push(physics);
    }
    return ret;
}

//============================================================
//    L2DPhysics # updateParam()
//============================================================
L2DPhysics.prototype.updateParam = function (model/*ALive2DModel*/) {
    var timeMSec = UtSystem.getUserTimeMSec() - this.startTimeMSec;
    for (var i = 0; i < this.physicsList.length; i++) {
        this.physicsList[i].update(model, timeMSec);
    }
}

/**
 *
 *  You can modify and use this source freely
 *  only for the development of application related Live2D.
 *
 *  (c) Live2D Inc. All rights reserved.
 */

//============================================================
//============================================================
//  class L2DPose
//============================================================
//============================================================
function L2DPose() {
    this.lastTime = 0;
    this.lastModel = null; //ALive2DModel
    this.partsGroups = new Array(); //ArrayList<L2DPartsParam[]>
}


//============================================================
//    static L2DPose.load()
//============================================================
L2DPose.load = function (buf/*byte[]*/) {
    var ret = new L2DPose(); //L2DPose
    var pm = Live2DFramework.getPlatformManager();
    var json = pm.jsonParseFromBytes(buf);
    var poseListInfo = json.parts_visible; //Value
    var poseNum = poseListInfo.length;
    for (var i_pose = 0; i_pose < poseNum; i_pose++) {
        var poseInfo = poseListInfo[i_pose]; //Value
        var idListInfo = poseInfo.group; //Value
        var idNum = idListInfo.length;
        var partsGroup/*L2DPartsParam*/ = new Array();
        for (var i_group = 0; i_group < idNum; i_group++) {
            var partsInfo = idListInfo[i_group]; //Value
            var parts = new L2DPartsParam(partsInfo.id); //L2DPartsParamL2DPartsParam
            partsGroup[i_group] = parts;
            if (partsInfo.link == null) continue;
            var linkListInfo = partsInfo.link; //Value
            var linkNum = linkListInfo.length;
            parts.link = new Array(); //ArrayList<L2DPartsParam>
            for (var i_link = 0; i_link < linkNum; i_link++) {
                var linkParts = new L2DPartsParam(linkListInfo[i_link]); //L2DPartsParamL2DPartsParam
                parts.link.push(linkParts);
            }
        }
        ret.partsGroups.push(partsGroup);
    }

    return ret;
}

//============================================================
//    L2DPose # updateParam()
//============================================================
L2DPose.prototype.updateParam = function (model/*ALive2DModel*/) {
    if (model == null) return;

    if (!(model == this.lastModel)) {
        this.initParam(model);
    }
    this.lastModel = model;

    var curTime = UtSystem.getUserTimeMSec();
    var deltaTimeSec = ((this.lastTime == 0) ? 0 : (curTime - this.lastTime) / 1000.0);
    this.lastTime = curTime;
    if (deltaTimeSec < 0) deltaTimeSec = 0;
    for (var i = 0; i < this.partsGroups.length; i++) {
        this.normalizePartsOpacityGroup(model, this.partsGroups[i], deltaTimeSec);
        this.copyOpacityOtherParts(model, this.partsGroups[i]);
    }
}

//============================================================
//    L2DPose # initParam()
//============================================================
L2DPose.prototype.initParam = function (model/*ALive2DModel*/) {
    if (model == null) return;
    for (var i = 0; i < this.partsGroups.length; i++) {
        var partsGroup = this.partsGroups[i]; //L2DPartsParam
        for (var j = 0; j < partsGroup.length; j++) {
            partsGroup[j].initIndex(model);
            var partsIndex = partsGroup[j].partsIndex;
            var paramIndex = partsGroup[j].paramIndex;
            if (partsIndex < 0) continue;
            var v/*:Boolean*/ = (model.getParamFloat(paramIndex) != 0);
            model.setPartsOpacity(partsIndex, (v ? 1.0 : 0.0));
            model.setParamFloat(paramIndex, (v ? 1.0 : 0.0));
            if (partsGroup[j].link == null) continue;
            for (var k = 0; k < partsGroup[j].link.length; k++) {
                partsGroup[j].link[k].initIndex(model);
            }
        }
    }
}

//============================================================
//    L2DPose # normalizePartsOpacityGroup()
//============================================================
L2DPose.prototype.normalizePartsOpacityGroup = function (model/*ALive2DModel*/, partsGroup/*L2DPartsParam[]*/, deltaTimeSec/*float*/) {
    var visibleParts = -1;
    var visibleOpacity = 1.0;
    var CLEAR_TIME_SEC = 0.5;
    var phi = 0.5;
    var maxBackOpacity = 0.15;
    for (var i = 0; i < partsGroup.length; i++) {
        var partsIndex = partsGroup[i].partsIndex;
        var paramIndex = partsGroup[i].paramIndex;
        if (partsIndex < 0) continue; if (model.getParamFloat(paramIndex) != 0) {
            if (visibleParts >= 0) {
                break;
            }
            visibleParts = i;
            visibleOpacity = model.getPartsOpacity(partsIndex);
            visibleOpacity += deltaTimeSec / CLEAR_TIME_SEC;
            if (visibleOpacity > 1) {
                visibleOpacity = 1;
            }
        }
    }
    if (visibleParts < 0) {
        visibleParts = 0;
        visibleOpacity = 1;
    }
    for (var i = 0; i < partsGroup.length; i++) {
        var partsIndex = partsGroup[i].partsIndex;
        if (partsIndex < 0) continue; if (visibleParts == i) {
            model.setPartsOpacity(partsIndex, visibleOpacity);
        }
        else {
            var opacity = model.getPartsOpacity(partsIndex);
            var a1;
            if (visibleOpacity < phi) {
                a1 = visibleOpacity * (phi - 1) / phi + 1;
            }
            else {
                a1 = (1 - visibleOpacity) * phi / (1 - phi);
            }
            var backOp = (1 - a1) * (1 - visibleOpacity);
            if (backOp > maxBackOpacity) {
                a1 = 1 - maxBackOpacity / (1 - visibleOpacity);
            }
            if (opacity > a1) {
                opacity = a1;
            }
            model.setPartsOpacity(partsIndex, opacity);
        }
    }
}

//============================================================
//    L2DPose # copyOpacityOtherParts()
//============================================================
L2DPose.prototype.copyOpacityOtherParts = function (model/*ALive2DModel*/, partsGroup/*L2DPartsParam[]*/) {
    for (var i_group = 0; i_group < partsGroup.length; i_group++) {
        var partsParam = partsGroup[i_group]; //L2DPartsParam
        if (partsParam.link == null) continue;
        if (partsParam.partsIndex < 0) continue;
        var opacity = model.getPartsOpacity(partsParam.partsIndex);
        for (var i_link = 0; i_link < partsParam.link.length; i_link++) {
            var linkParts = partsParam.link[i_link]; //L2DPartsParam
            if (linkParts.partsIndex < 0) continue;
            model.setPartsOpacity(linkParts.partsIndex, opacity);
        }
    }
}

//============================================================
//============================================================
//  class L2DPartsParam
//============================================================
//============================================================
function L2DPartsParam(id/*String*/) {
    this.paramIndex = -1;
    this.partsIndex = -1;
    this.link = null; // ArrayList<L2DPartsParam>
    this.id = id;
}

//============================================================
//    L2DPartsParam # initIndex()
//============================================================
L2DPartsParam.prototype.initIndex = function (model/*ALive2DModel*/) {
    this.paramIndex = model.getParamIndex("VISIBLE:" + this.id);
    this.partsIndex = model.getPartsDataIndex(PartsDataID.getID(this.id));
    model.setParamFloat(this.paramIndex, 1);
}
/**
 *
 *  You can modify and use this source freely
 *  only for the development of application related Live2D.
 *
 *  (c) Live2D Inc. All rights reserved.
 */

//============================================================
//============================================================
//  class L2DTargetPoint
//============================================================
//============================================================
function L2DTargetPoint() {
    this.EPSILON = 0.01; // 変化の最小値（この値以下は無視される）
    this.faceTargetX = 0;
    this.faceTargetY = 0;
    this.faceX = 0;
    this.faceY = 0;
    this.faceVX = 0;
    this.faceVY = 0;
    this.lastTimeSec = 0;
}

//============================================================
L2DTargetPoint.FRAME_RATE = 30;

//============================================================
//    L2DTargetPoint # set()
//============================================================
L2DTargetPoint.prototype.setPoint = function (x/*float*/, y/*float*/) {
    this.faceTargetX = x;
    this.faceTargetY = y;
}

//============================================================
//    L2DTargetPoint # getX()
//============================================================
L2DTargetPoint.prototype.getX = function () {
    return this.faceX;
}

//============================================================
//    L2DTargetPoint # getY()
//============================================================
L2DTargetPoint.prototype.getY = function () {
    return this.faceY;
}

//============================================================
//    L2DTargetPoint # update()
//============================================================
L2DTargetPoint.prototype.update = function () {
    var TIME_TO_MAX_SPEED = 0.15;
    var FACE_PARAM_MAX_V = 40.0 / 7.5;
    var MAX_V = FACE_PARAM_MAX_V / L2DTargetPoint.FRAME_RATE;
    if (this.lastTimeSec == 0) {
        this.lastTimeSec = UtSystem.getUserTimeMSec();
        return;
    }
    var curTimeSec = UtSystem.getUserTimeMSec();
    var deltaTimeWeight = (curTimeSec - this.lastTimeSec) * L2DTargetPoint.FRAME_RATE / 1000.0;
    this.lastTimeSec = curTimeSec;
    var FRAME_TO_MAX_SPEED = TIME_TO_MAX_SPEED * L2DTargetPoint.FRAME_RATE;
    var MAX_A = deltaTimeWeight * MAX_V / FRAME_TO_MAX_SPEED;
    var dx = (this.faceTargetX - this.faceX);
    var dy = (this.faceTargetY - this.faceY);
    // if(dx == 0 && dy == 0) return;
    if (Math.abs(dx) <= this.epsilon && math.abs(dy) <="this.EPSILON)" return; var d="Math.sqrt(dx" * dx + dy dy); vx="MAX_V" d; vy="MAX_V" ax="vx" - this.facevx; ay="vy" this.facevy; a="Math.sqrt(ax" ay); if (a -max_a ||> MAX_A) {
        ax *= MAX_A / a;
        ay *= MAX_A / a;
        a = MAX_A;
    }
    this.faceVX += ax;
    this.faceVY += ay;
    {
        var max_v = 0.5 * (Math.sqrt(MAX_A * MAX_A + 16 * MAX_A * d - 8 * MAX_A * d) - MAX_A);
        var cur_v = Math.sqrt(this.faceVX * this.faceVX + this.faceVY * this.faceVY);
        if (cur_v > max_v) {
            this.faceVX *= max_v / cur_v;
            this.faceVY *= max_v / cur_v;
        }
    }
    this.faceX += this.faceVX;
    this.faceY += this.faceVY;
}
/**
 *
 *  You can modify and use this source freely
 *  only for the development of application related Live2D.
 *
 *  (c) Live2D Inc. All rights reserved.
 */

//============================================================
//============================================================
//  class L2DViewMatrix        extends     L2DMatrix44
//============================================================
//============================================================
function L2DViewMatrix() {
    L2DMatrix44.prototype.constructor.call(this);
    this.screenLeft = null;
    this.screenRight = null;
    this.screenTop = null;
    this.screenBottom = null;
    this.maxLeft = null;
    this.maxRight = null;
    this.maxTop = null;
    this.maxBottom = null;
    this.max = Number.MAX_VALUE;
    this.min = 0;
}

L2DViewMatrix.prototype = new L2DMatrix44(); //L2DViewMatrix extends L2DMatrix44

//============================================================
//    L2DViewMatrix # getMaxScale()
//============================================================
L2DViewMatrix.prototype.getMaxScale = function () {
    return this.max;
}

//============================================================
//    L2DViewMatrix # getMinScale()
//============================================================
L2DViewMatrix.prototype.getMinScale = function () {
    return this.min;
}

//============================================================
//    L2DViewMatrix # setMaxScale()
//============================================================
L2DViewMatrix.prototype.setMaxScale = function (v/*float*/) {
    this.max = v;
}

//============================================================
//    L2DViewMatrix # setMinScale()
//============================================================
L2DViewMatrix.prototype.setMinScale = function (v/*float*/) {
    this.min = v;
}

//============================================================
//    L2DViewMatrix # isMaxScale()
//============================================================
L2DViewMatrix.prototype.isMaxScale = function () {
    return this.getScaleX() == this.max;
}

//============================================================
//    L2DViewMatrix # isMinScale()
//============================================================
L2DViewMatrix.prototype.isMinScale = function () {
    return this.getScaleX() == this.min;
}

//============================================================
//    L2DViewMatrix # adjustTranslate()
//============================================================
L2DViewMatrix.prototype.adjustTranslate = function (shiftX/*float*/, shiftY/*float*/) {
    if (this.tr[0] * this.maxLeft + (this.tr[12] + shiftX) > this.screenLeft)
        shiftX = this.screenLeft - this.tr[0] * this.maxLeft - this.tr[12];
    if (this.tr[0] * this.maxRight + (this.tr[12] + shiftX) < this.screenRight)
        shiftX = this.screenRight - this.tr[0] * this.maxRight - this.tr[12];
    if (this.tr[5] * this.maxTop + (this.tr[13] + shiftY) < this.screenTop)
        shiftY = this.screenTop - this.tr[5] * this.maxTop - this.tr[13];
    if (this.tr[5] * this.maxBottom + (this.tr[13] + shiftY) > this.screenBottom)
        shiftY = this.screenBottom - this.tr[5] * this.maxBottom - this.tr[13];

    var tr1 = [1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        shiftX, shiftY, 0, 1];
    L2DMatrix44.mul(tr1, this.tr, this.tr);
}

//============================================================
//    L2DViewMatrix # adjustScale()
//============================================================
L2DViewMatrix.prototype.adjustScale = function (cx/*float*/, cy/*float*/, scale/*float*/) {
    var targetScale = scale * this.tr[0];
    if (targetScale < this.min) {
        if (this.tr[0] > 0) scale = this.min / this.tr[0];
    }
    else if (targetScale > this.max) {
        if (this.tr[0] > 0) scale = this.max / this.tr[0];
    }
    var tr1 = [1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        cx, cy, 0, 1];
    var tr2 = [scale, 0, 0, 0,
        0, scale, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1];
    var tr3 = [1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        -cx, -cy, 0, 1];
    L2DMatrix44.mul(tr3, this.tr, this.tr);
    L2DMatrix44.mul(tr2, this.tr, this.tr);
    L2DMatrix44.mul(tr1, this.tr, this.tr);
}

//============================================================
//    L2DViewMatrix # setScreenRect()
//============================================================
L2DViewMatrix.prototype.setScreenRect = function (left/*float*/, right/*float*/, bottom/*float*/, top/*float*/) {
    this.screenLeft = left;
    this.screenRight = right;
    this.screenTop = top;
    this.screenBottom = bottom;
}

//============================================================
//    L2DViewMatrix # setMaxScreenRect()
//============================================================
L2DViewMatrix.prototype.setMaxScreenRect = function (left/*float*/, right/*float*/, bottom/*float*/, top/*float*/) {
    this.maxLeft = left;
    this.maxRight = right;
    this.maxTop = top;
    this.maxBottom = bottom;
}

//============================================================
//    L2DViewMatrix # getScreenLeft()
//============================================================
L2DViewMatrix.prototype.getScreenLeft = function () {
    return this.screenLeft;
}

//============================================================
//    L2DViewMatrix # getScreenRight()
//============================================================
L2DViewMatrix.prototype.getScreenRight = function () {
    return this.screenRight;
}

//============================================================
//    L2DViewMatrix # getScreenBottom()
//============================================================
L2DViewMatrix.prototype.getScreenBottom = function () {
    return this.screenBottom;
}

//============================================================
//    L2DViewMatrix # getScreenTop()
//============================================================
L2DViewMatrix.prototype.getScreenTop = function () {
    return this.screenTop;
}

//============================================================
//    L2DViewMatrix # getMaxLeft()
//============================================================
L2DViewMatrix.prototype.getMaxLeft = function () {
    return this.maxLeft;
}

//============================================================
//    L2DViewMatrix # getMaxRight()
//============================================================
L2DViewMatrix.prototype.getMaxRight = function () {
    return this.maxRight;
}

//============================================================
//    L2DViewMatrix # getMaxBottom()
//============================================================
L2DViewMatrix.prototype.getMaxBottom = function () {
    return this.maxBottom;
}

//============================================================
//    L2DViewMatrix # getMaxTop()
//============================================================
L2DViewMatrix.prototype.getMaxTop = function () {
    return this.maxTop;
}

/**
 *
 *  You can modify and use this source freely
 *  only for the development of application related Live2D.
 *
 *  (c) Live2D Inc. All rights reserved.
 */

//============================================================
//============================================================
//  class Live2DFramework
//============================================================
//============================================================
function Live2DFramework() {
}

//============================================================
Live2DFramework.platformManager = null;

//============================================================
//    static Live2DFramework.getPlatformManager()
//============================================================
Live2DFramework.getPlatformManager = function () {
    return Live2DFramework.platformManager;
}

//============================================================
//    static Live2DFramework.setPlatformManager()
//============================================================
Live2DFramework.setPlatformManager = function (platformManager /*IPlatformManager*/) {
    Live2DFramework.platformManager = platformManager;
}

 function ModelSettingJson()
{
    this.NAME               = "name";
    this.ID                 = "id";
    this.MODEL              = "model";
    this.TEXTURES           = "textures";
    this.HIT_AREAS          = "hit_areas";
    this.PHYSICS            = "physics";
    this.POSE               = "pose";
    this.EXPRESSIONS        = "expressions";
    this.MOTION_GROUPS      = "motions";
    this.SOUND              = "sound";
    this.FADE_IN            = "fade_in";
    this.FADE_OUT           = "fade_out";
    this.LAYOUT             = "layout";
    this.HIT_AREAS_CUSTOM   = "hit_areas_custom";
    this.INIT_PARAM         = "init_param";
    this.INIT_PARTS_VISIBLE = "init_parts_visible";
    this.VALUE              = "val";
    this.FILE               = "file";
    this.json               = {};
}


ModelSettingJson.prototype.loadModelSetting = function(path, callback)
{
    var thisRef = this;
    var pm = Live2DFramework.getPlatformManager();
    pm.loadBytes(path, function(buf) {
        var str = String.fromCharCode.apply(null,new Uint8Array(buf));
        thisRef.json = JSON.parse(str);
        callback();
    });
};


ModelSettingJson.prototype.getTextureFile = function(n)
{
    if (this.json[this.TEXTURES] == null || this.json[this.TEXTURES][n] == null)
        return null;

    return this.json[this.TEXTURES][n];
}


ModelSettingJson.prototype.getModelFile = function()
{
    return this.json[this.MODEL];
};


ModelSettingJson.prototype.getTextureNum = function()
{
    if (this.json[this.TEXTURES] == null) return 0;

    return this.json[this.TEXTURES].length;
}


ModelSettingJson.prototype.getHitAreaNum = function()
{
    if (this.json[this.HIT_AREAS] == null)
        return 0;

    return this.json[this.HIT_AREAS].length;
}


ModelSettingJson.prototype.getHitAreaID = function(n)
{
    if (this.json[this.HIT_AREAS] == null ||
        this.json[this.HIT_AREAS][n] == null)
        return null;

    return this.json[this.HIT_AREAS][n][this.ID];
}


ModelSettingJson.prototype.getHitAreaName = function(n)
{
    if (this.json[this.HIT_AREAS] == null ||
        this.json[this.HIT_AREAS][n] == null)
        return null;

    return this.json[this.HIT_AREAS][n][this.NAME];
}


ModelSettingJson.prototype.getPhysicsFile = function()
{
    return this.json[this.PHYSICS];
}


ModelSettingJson.prototype.getPoseFile = function()
{
    return this.json[this.POSE];
}


ModelSettingJson.prototype.getExpressionNum = function()
{
    return (this.json[this.EXPRESSIONS] == null) ? 0 : this.json[this.EXPRESSIONS].length;
}


ModelSettingJson.prototype.getExpressionFile = function(n)
{
    if (this.json[this.EXPRESSIONS] == null)
        return null;
    return this.json[this.EXPRESSIONS][n][this.FILE];
}


ModelSettingJson.prototype.getExpressionName = function(n)
{
    if (this.json[this.EXPRESSIONS] == null)
        return null;
    return this.json[this.EXPRESSIONS][n][this.NAME];
}


ModelSettingJson.prototype.getLayout = function()
{
    return this.json[this.LAYOUT];
}


ModelSettingJson.prototype.getHitAreasCustom = function()
{
    return this.json[this.HIT_AREAS_CUSTOM];
}


ModelSettingJson.prototype.getInitParamNum = function()
{
    return (this.json[this.INIT_PARAM] == null) ? 0 : this.json[this.INIT_PARAM].length;
}


ModelSettingJson.prototype.getMotionNum = function(name)
{
    if (this.json[this.MOTION_GROUPS] == null ||
        this.json[this.MOTION_GROUPS][name] == null)
        return 0;

    return this.json[this.MOTION_GROUPS][name].length;
}


ModelSettingJson.prototype.getMotionFile = function(name, n)
{
    if (this.json[this.MOTION_GROUPS] == null ||
        this.json[this.MOTION_GROUPS][name] == null ||
        this.json[this.MOTION_GROUPS][name][n] == null)
        return null;

    return this.json[this.MOTION_GROUPS][name][n][this.FILE];
}


ModelSettingJson.prototype.getMotionSound = function(name, n)
{
    if (this.json[this.MOTION_GROUPS] == null ||
        this.json[this.MOTION_GROUPS][name] == null ||
        this.json[this.MOTION_GROUPS][name][n] == null ||
        this.json[this.MOTION_GROUPS][name][n][this.SOUND] == null)
        return null;

    return this.json[this.MOTION_GROUPS][name][n][this.SOUND];
}


ModelSettingJson.prototype.getMotionFadeIn = function(name, n)
{
    if (this.json[this.MOTION_GROUPS] == null ||
        this.json[this.MOTION_GROUPS][name] == null ||
        this.json[this.MOTION_GROUPS][name][n] == null ||
        this.json[this.MOTION_GROUPS][name][n][this.FADE_IN] == null)
        return 1000;

    return this.json[this.MOTION_GROUPS][name][n][this.FADE_IN];
}


ModelSettingJson.prototype.getMotionFadeOut = function(name, n)
{
    if (this.json[this.MOTION_GROUPS] == null ||
        this.json[this.MOTION_GROUPS][name] == null ||
        this.json[this.MOTION_GROUPS][name][n] == null ||
        this.json[this.MOTION_GROUPS][name][n][this.FADE_OUT] == null)
        return 1000;

    return this.json[this.MOTION_GROUPS][name][n][this.FADE_OUT];
}


ModelSettingJson.prototype.getInitParamID = function(n)
{
    if (this.json[this.INIT_PARAM] == null ||
        this.json[this.INIT_PARAM][n] == null)
        return null;

    return this.json[this.INIT_PARAM][n][this.ID];
}


ModelSettingJson.prototype.getInitParamValue = function(n)
{
    if (this.json[this.INIT_PARAM] == null || this.json[this.INIT_PARAM][n] == null)
        return NaN;

    return this.json[this.INIT_PARAM][n][this.VALUE];
}


ModelSettingJson.prototype.getInitPartsVisibleNum = function()
{
    return (this.json[this.INIT_PARTS_VISIBLE] == null) ? 0 : this.json[this.INIT_PARTS_VISIBLE].length;
}


ModelSettingJson.prototype.getInitPartsVisibleID = function(n)
{
    if (this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][n] == null)
        return null;
    return this.json[this.INIT_PARTS_VISIBLE][n][this.ID];
}


ModelSettingJson.prototype.getInitPartsVisibleValue = function(n)
{
    if (this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][n] == null)
        return NaN;

    return this.json[this.INIT_PARTS_VISIBLE][n][this.VALUE];
}

/**
 *
 *  You can modify and use this source freely
 *  only for the development of application related Live2D.
 *
 *  (c) Live2D Inc. All rights reserved.
 */
/**
 * EYHN 修改
 *
 * Copyright © 2016 - 2017 EYHN
 */

function MatrixStack() {}


MatrixStack.matrixStack = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];


MatrixStack.depth = 0;


MatrixStack.currentMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];


MatrixStack.tmp = new Array(16);



MatrixStack.reset = function()
{
    this.depth = 0;
}



MatrixStack.loadIdentity = function()
{
    for (var i = 0; i < 16; i++)
    {
        this.currentMatrix[i] = (i % 5 == 0) ? 1 : 0;
    }
}



MatrixStack.push = function()
{
    var offset = this.depth * 16;
    var nextOffset = (this.depth + 1) * 16;

    if (this.matrixStack.length < nextOffset + 16)
    {
        this.matrixStack.length = nextOffset + 16;
    }

    for (var i = 0; i < 16; i++)
    {
        this.matrixStack[nextOffset + i] = this.currentMatrix[i];
    }

    this.depth++;
}



MatrixStack.pop = function()
{
    this.depth--;
    if (this.depth < 0)
    {
        myError("Invalid matrix stack.");
        this.depth = 0;
    }

    var offset = this.depth * 16;
    for (var i = 0; i < 16; i++)
    {
        this.currentMatrix[i] = this.matrixStack[offset + i];
    }
}



MatrixStack.getMatrix = function()
{
    return this.currentMatrix;
}



MatrixStack.multMatrix = function(matNew)
{
    var i, j, k;

    for (i = 0; i < 16; i++)
    {
        this.tmp[i] = 0;
    }

    for (i = 0; i < 4; i++)
    {
        for (j = 0; j < 4; j++)
        {
            for (k = 0; k < 4; k++)
            {
                this.tmp[i + j * 4] += this.currentMatrix[i + k * 4] * matNew[k + j * 4];
            }
        }
    }
    for (i = 0; i < 16; i++)
    {
        this.currentMatrix[i] = this.tmp[i];
    }
}


 function LAppLive2DManager() {
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


LAppLive2DManager.prototype.changeModel = function (gl, configPath, basePath) {
  // console.log("--> LAppLive2DManager.update(gl)");

  if (this.reloadFlg) {

    this.reloadFlg = false;

    var thisRef = this;
    this.releaseModel(0, gl);
    this.createModel();
    this.models[0].load(gl, configPath, basePath);
  }
};


LAppLive2DManager.prototype.getModel = function (no) {
  // console.log("--> LAppLive2DManager.getModel(" + no + ")");

  if (no >= this.models.length) return null;

  return this.models[no];
};



LAppLive2DManager.prototype.releaseModel = function (no, gl) {
  // console.log("--> LAppLive2DManager.releaseModel(" + no + ")");

  if (this.models.length <= no) return; this.models[no].release(gl); delete this.models[no]; this.models.splice(no, 1); }; lapplive2dmanager.prototype.nummodels="function" () { return this.models.length; lapplive2dmanager.prototype.setdrag="function" (x, y) for (var i="0;" < i++) this.models[i].setdrag(x, y); } lapplive2dmanager.prototype.maxscaleevent="function" if (lappdefine.debug_log) console.log("max scale event."); this.models[i].startrandommotion(lappdefine.motion_group_pinch_in, lappdefine.priority_normal); lapplive2dmanager.prototype.minscaleevent="function" console.log("min this.models[i].startrandommotion(lappdefine.motion_group_pinch_out, lapplive2dmanager.prototype.tapevent="function" console.log("tapevent view x:" + x " y:" (this.models[i].hittest(lappdefine.hit_area_head, x, y)) console.log("tap face."); this.models[i].setrandomexpression(); }else (this.models[i].hittest(lappdefine.hit_area_body, body." models[" "]"); this.models[i].startrandommotion(lappdefine.motion_group_tap_body, (this.models[i].hittestcustom('head', this.models[i].startrandommotion(lappdefine.motion_group_flick_head, (this.models[i].hittestcustom('body', true; var lappdefine="{" debug_log : false, debug_mouse_log debug_draw_hit_area debug_draw_alpha_model view_max_scale 10, view_min_scale 0.1, view_logical_left -1, view_logical_right 1, view_logical_max_left -2, view_logical_max_right 2, view_logical_max_bottom view_logical_max_top priority_none 0, priority_idle priority_sleepy priority_normal 3, priority_force 4, motion_group_idle "idle", motion_group_sleepy "sleepy", motion_group_tap_body "tap_body", motion_group_flick_head "flick_head", motion_group_pinch_in "pinch_in", motion_group_pinch_out "pinch_out", motion_group_shake "shake", hit_area_head "head", hit_area_body "body" context="undefined;" function setcontext(webglcontext) getcontext() context; window.onerror="function" (msg, url, line, col, error) let errmsg="file:" url "<br>line:" + line + " " + msg;
//   console.error(errmsg);
// }

const platform = window.navigator.platform.toLowerCase();

const live2DMgr = new LAppLive2DManager();

let isDrawStart = false;

let gl = null;

let canvas = null;

let dragMgr = null;

let viewMatrix = null;

let projMatrix = null;

let deviceToScreen = null;

let drag = false;

let oldLen = 0;

let lastMouseX = 0;

let lastMouseY = 0;

let isModelShown = 0;

let modelurl = "";

let head_pos = 0.5;

let ny_css_fix = 0;

function initL2dCanvas(canvasId) {
  canvas = document.getElementById(canvasId);
  if (canvas.addEventListener) {
    // canvas.addEventListener("mousewheel", mouseEvent);
    window.addEventListener("click", mouseEvent);
    window.addEventListener("mousedown", mouseEvent);
    window.addEventListener("mousemove", mouseEvent);
    window.addEventListener("mouseup", mouseEvent);
    document.addEventListener("mouseout", mouseEvent);
    //canvas.addEventListener("contextmenu", mouseEvent);
    window.addEventListener("touchstart", touchEvent);
    window.addEventListener("touchend", touchEvent);
    window.addEventListener("touchmove", touchEvent);
  }
}

function init() {
  let width = canvas.width;
  let height = canvas.height;

  dragMgr = new L2DTargetPoint();

  let ratio = height / width;
  let left = LAppDefine.VIEW_LOGICAL_LEFT;
  let right = LAppDefine.VIEW_LOGICAL_RIGHT;
  let bottom = -ratio;
  let top = ratio;

  window.Live2D.captureFrame = false;

  viewMatrix = new L2DViewMatrix();


  viewMatrix.setScreenRect(left, right, bottom, top);

  viewMatrix.setMaxScreenRect(LAppDefine.VIEW_LOGICAL_MAX_LEFT,
    LAppDefine.VIEW_LOGICAL_MAX_RIGHT,
    LAppDefine.VIEW_LOGICAL_MAX_BOTTOM,
    LAppDefine.VIEW_LOGICAL_MAX_TOP);

  viewMatrix.setMaxScale(LAppDefine.VIEW_MAX_SCALE);
  viewMatrix.setMinScale(LAppDefine.VIEW_MIN_SCALE);

  projMatrix = new L2DMatrix44();
  projMatrix.multScale(1, (width / height));

  deviceToScreen = new L2DMatrix44();
  deviceToScreen.multTranslate(-width / 2.0, -height / 2.0);
  deviceToScreen.multScale(2 / width, -2 / width);

  gl = getWebGLContext();
  setContext(gl);
  if (!gl) {
    console.error("Failed to create WebGL context.");
    if(!!window.WebGLRenderingContext){
      console.error("Your browser don't support WebGL, check https://get.webgl.org/ for futher information.");
    }
    return;
  }
  window.Live2D.setGL(gl);
  gl.clearColor(0.0, 0.0, 0.0, 0.0);

}

function startDraw() {
  if (!isDrawStart) {
    isDrawStart = true;
    (function tick() {
      draw();
      let requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

        if (window.Live2D.captureFrame) {
            window.Live2D.captureFrame = false;
            var link = document.createElement('a');
            document.body.appendChild(link);
            link.setAttribute("type", "hidden");
            link.href = canvas.toDataURL();
            link.download = window.Live2D.captureName || 'live2d.png';
            link.click();
        }

      requestAnimationFrame(tick, canvas);
    })();
  }
}

function draw()
{
    MatrixStack.reset();
    MatrixStack.loadIdentity();
    dragMgr.update();
    live2DMgr.setDrag(dragMgr.getX(), dragMgr.getY());

    gl.clear(gl.COLOR_BUFFER_BIT);

    MatrixStack.multMatrix(projMatrix.getArray());
    MatrixStack.multMatrix(viewMatrix.getArray());
    MatrixStack.push();

    for (let i = 0; i < live2DMgr.numModels(); i++)
    {
        let model = live2DMgr.getModel(i);

        if(model == null) return;

        if (model.initialized && !model.updating)
        {
            model.update();
            model.draw(gl);
        }
    }
    MatrixStack.pop();
}

function changeModel(configPath, basePath)
{
    live2DMgr.reloadFlg = true;
    live2DMgr.count++;
    live2DMgr.changeModel(gl,configPath, basePath);
}

function modelScaling(scale)
{
    let isMaxScale = viewMatrix.isMaxScale();
    let isMinScale = viewMatrix.isMinScale();

    viewMatrix.adjustScale(0, 0, scale);

    if (!isMaxScale)
    {
        if (viewMatrix.isMaxScale())
        {
            live2DMgr.maxScaleEvent();
        }
    }

    if (!isMinScale)
    {
        if (viewMatrix.isMinScale())
        {
            live2DMgr.minScaleEvent();
        }
    }
}

function transformRange(center, transform, range)
{
    let a = {
        x: transform.x - center.x,
        y: transform.y - center.y
    }
    let r = Math.sqrt(Math.pow(a.x,2) + Math.pow(a.y,2));
    if (r > range) {
        a = {
            x: a.x / r * range + center.x,
            y: a.y / r * range + center.y
        };
        return a;
    } else {
        return transform;
    }
}

function dot(A,B)
{
    return A.x * B.x + A.y * B.y;
}

function normalize(x,y)
{
    let length = Math.sqrt(x * x + y * y)
    return {
        x: x / length,
        y: y / length
    }
}

function transformRect(center, transform, rect)
{
    if (transform.x < rect.left + rect.width && transform.y < rect.top + rect.height &&
        transform.x > rect.left && transform.y > rect.top) return transform;
    let Len_X = center.x - transform.x;
    let Len_Y = center.y - transform.y;

    function angle(Len_X, Len_Y)
    {
        return Math.acos(dot({
            x: 0,
            y: 1
        }, normalize(Len_X, Len_Y))) * 180 / Math.PI
    }

    let angleTarget = angle(Len_X, Len_Y);
    if (transform.x < center.x) angleTarget = 360 - angleTarget;
    let angleLeftTop = 360 - angle(rect.left - center.x, (rect.top - center.y) * -1);
    let angleLeftBottom = 360 - angle(rect.left - center.x, (rect.top + rect.height - center.y) * -1);
    let angleRightTop = angle(rect.left + rect.width - center.x, (rect.top - center.y) * -1);
    let angleRightBottom = angle(rect.left + rect.width - center.x, (rect.top + rect.height - center.y) * -1);
    let scale = Len_Y / Len_X;
    let res = {};

    if (angleTarget < angleRightTop) {
        let y3 = rect.top - center.y;
        let x3 = y3 / scale;
        res = {
            y: center.y + y3,
            x: center.x + x3
        }
    } else if(angleTarget < angleRightBottom) {
        let x3 = rect.left + rect.width - center.x;
        let y3 = x3 * scale;
        res = {
            y: center.y + y3,
            x: center.x + x3
        }
    } else if (angleTarget < angleLeftBottom) {
        let y3 = rect.top + rect.height - center.y;
        let x3 = y3 / scale;
        res = {
            y: center.y + y3,
            x: center.x + x3
        }
    } else if (angleTarget < angleLeftTop) {
        let x3 = center.x - rect.left;
        let y3 = x3 * scale;
        res = {
            y: center.y - y3,
            x: center.x - x3
        }
    } else {
        let y3 = rect.top - center.y;
        let x3 = y3 / scale;
        res = {
            y: center.y + y3,
            x: center.x + x3
        }
    }

    return res;
}

function modelTurnHead(event)
{
    drag = true;

    let rect = canvas.getBoundingClientRect();

    let sx = transformScreenX(event.clientX - rect.left);
    let sy = transformScreenY(event.clientY - rect.top);

    let target = transformRect({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height * head_pos
    }, {
        x: event.clientX,
        y: event.clientY
    }, rect)
    let vx = transformViewX(target.x - rect.left);
    let vy = transformViewY(target.y - rect.top);

    if (LAppDefine.DEBUG_MOUSE_LOG)
        console.log("onMouseMove device( x:" + event.clientX + " y:" + event.clientY + " ) view( x:" + vx + " y:" + vy + ")");

    lastMouseX = sx;
    lastMouseY = sy;

    dragMgr.setPoint(vx, vy);

    //live2DMgr.tapEvent(vx, vy);
}

function modelTapEvent(event)
{
    drag = true;

    let rect = canvas.getBoundingClientRect();

    let sx = transformScreenX(event.clientX - rect.left);
    let sy = transformScreenY(event.clientY - rect.top);
    let target = transformRect({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height * head_pos
    }, {
        x: event.clientX,
        y: event.clientY
    }, rect)
    let vx = transformViewX(target.x - rect.left);
    let vy = transformViewY(target.y - rect.top);

    if (LAppDefine.DEBUG_MOUSE_LOG)
        console.log("onMouseDown device( x:" + event.clientX + " y:" + event.clientY + " ) view( x:" + vx + " y:" + vy + ")");

    lastMouseX = sx;
    lastMouseY = sy;

    //dragMgr.setPoint(vx, vy);

    live2DMgr.tapEvent(vx, vy);
}

function followPointer(event)
{
    let rect = canvas.getBoundingClientRect();

    let sx = transformScreenX(event.clientX - rect.left);
    let sy = transformScreenY(event.clientY - rect.top);
    let target = transformRect({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height * head_pos
    }, {
        x: event.clientX,
        y: event.clientY
    }, rect)
    let vx = transformViewX(target.x - rect.left);
    let vy = transformViewY(target.y - rect.top);

    if (LAppDefine.DEBUG_MOUSE_LOG)
        console.log("onMouseMove device( x:" + event.clientX + " y:" + event.clientY + " ) view( x:" + vx + " y:" + vy + ")");

    if (drag)
    {
        lastMouseX = sx;
        lastMouseY = sy;
        dragMgr.setPoint(vx, vy);
    }
}

function lookFront()
{
    if (drag)
    {
        drag = false;
    }
    dragMgr.setPoint(0, 0);
}

function sleepy()
{
    if (LAppDefine.DEBUG_LOG)
        console.log("Set Session Storage.");

    sessionStorage.setItem('Sleepy', '1');
}

function mouseEvent(e)
{
    //e.preventDefault();
    if (e.type == "mousewheel") {
        // if (e.clientX < 0 || canvas.clientWidth < e.clientX ||
        // e.clientY < 0 || canvas.clientHeight < e.clientY)
        // {
        //     return;
        // }
        // if (e.wheelDelta > 0) modelScaling(1.1);
        // else modelScaling(0.9);
    } else if (e.type == "mousedown") {
        // if("button" in e && e.button != 0) return;
        // modelTurnHead(e);
        modelTapEvent(e);
    } else if (e.type == "mousemove") {
        var Sleepy = sessionStorage.getItem('Sleepy');
        if(Sleepy === '1') {
            sessionStorage.setItem('Sleepy', '0');
        }
        modelTurnHead(e);
    } else if (e.type == "mouseup") {
        // if("button" in e && e.button != 0) return;
        // lookFront();
    } else if (e.type == "mouseout") {
        if (LAppDefine.DEBUG_LOG)
            console.log("Mouse out Window.");
        lookFront();
        var SleepyTimer = sessionStorage.getItem('SleepyTimer');
        window.clearTimeout(SleepyTimer);

        SleepyTimer = window.setTimeout(sleepy, 50000);
        sessionStorage.setItem('SleepyTimer', SleepyTimer);
    }
}

function touchEvent(e)
{
    var touch = e.touches[0];
    if (e.type == "touchstart") {
        if (e.touches.length == 1) modelTurnHead(touch);
        // onClick(touch);
    } else if (e.type == "touchmove") {
        followPointer(touch);
    } else if (e.type == "touchend") {
        lookFront();
    }
}

function transformViewX(deviceX)
{
    var screenX = deviceToScreen.transformX(deviceX);
    return viewMatrix.invertTransformX(screenX);
}


function transformViewY(deviceY)
{
    var screenY = deviceToScreen.transformY(deviceY);
    return viewMatrix.invertTransformY(screenY);
}


function transformScreenX(deviceX)
{
    return deviceToScreen.transformX(deviceX);
}


function transformScreenY(deviceY)
{
    return deviceToScreen.transformY(deviceY);
}
function getWebGLContext()
{
    var NAMES = [ "webgl" , "experimental-webgl" , "webkit-3d" , "moz-webgl"];
    for( var i = 0; i < NAMES.length; i++ ){
        try{
            var ctx = canvas.getContext(NAMES[i], {premultipliedAlpha : true});
            if(ctx) return ctx;
        }
        catch(e){}
    }
    return null;
};

function loadlive2d(id,configPath,headPos,basePath) {
    head_pos = typeof headPos === 'undefined' ? 0.5 : headPos;
    initL2dCanvas(id);
    init();
    changeModel(configPath, basePath);
    startDraw();
}
function loadlive2dfix(id,configPath,headPos,basePath) {
    ny_css_fix = 1;
    loadlive2d(id,configPath,headPos,basePath);
}

window.loadlive2d = loadlive2d;
window.loadlive2dfix = loadlive2dfix;

/*
 * Live2D Widget
 * https://github.com/stevenjoezhang/live2d-widget
 */

function loadWidget(config) {
    let waifuPath = config.waifuPath;
    let apiPath = config.apiPath;
    let cdnPath = config.cdnPath;
    if ((typeof apiPath === "string")&&(!apiPath.endsWith("/"))) apiPath += "/";
    let  modelList;

    localStorage.removeItem("waifu-display");
    sessionStorage.removeItem("waifu-text");
    document.body.insertAdjacentHTML("beforeend", `<div id="waifu">
            <div id="waifu-tips"></div>
            <canvas id="live2d" width="800" height="800"></canvas>
            <div id="waifu-tool">
                <span class="fa fa-lg fa-comment"></span>
                <span class="fa fa-lg fa-user-circle"></span>
                <span class="fa fa-lg fa-street-view"></span>
                <span class="fa fa-lg fa-camera-retro"></span>
                <span class="fa fa-lg fa-info-circle"></span>
                <span class="fa fa-lg fa-times"></span>
            </div>
        </div>`);
    // https://stackoverflow.com/questions/24148403/trigger-css-transition-on-appended-element
    setTimeout(() => {
        document.getElementById("waifu").style.bottom = 0;
    }, 0);

    function randomSelection(obj) {
        return Array.isArray(obj) ? obj[Math.floor(Math.random() * obj.length)] : obj;
    }

    // 检测用户活动状态，并在空闲时显示消息
    let userAction = false;
    let userActionTimer;
    let messageTimer;
    let messageArray = ["好久不见，日子过得好快呢……", "大坏蛋！你都多久没理人家了呀，嘤嘤嘤～", "嗨～快来逗我玩吧！", "拿小拳拳锤你胸口！", "记得把小家加入 Adblock 白名单哦！"];
    window.addEventListener("mousemove", () => userAction = true);
    window.addEventListener("keydown", () => userAction = true);
    setInterval(() => {
        if (userAction) {
            userAction = false;
            clearInterval(userActionTimer);
            userActionTimer = null;
        } else if (!userActionTimer) {
            userActionTimer = setInterval(() => {
                showMessage(randomSelection(messageArray), 6000, 9);
            }, 20000);
        }
    }, 1000);

    (function registerEventListener() {
        document.querySelector("#waifu-tool .fa-comment").addEventListener("click", showHitokoto);
        document.querySelector("#waifu-tool .fa-user-circle").addEventListener("click", loadOtherModel);
        document.querySelector("#waifu-tool .fa-street-view").addEventListener("click", loadRandModel);
        document.querySelector("#waifu-tool .fa-camera-retro").addEventListener("click", () => {
            showMessage("照好了嘛，是不是很可爱呢？", 6000, 9);
            Live2D.captureName = "photo.png";
            Live2D.captureFrame = true;
        });
        document.querySelector("#waifu-tool .fa-info-circle").addEventListener("click", () => {
            open("https://github.com/stevenjoezhang/live2d-widget");
        });
        document.querySelector("#waifu-tool .fa-times").addEventListener("click", () => {
            localStorage.setItem("waifu-display", Date.now());
            showMessage("愿你有一天能与重要的人重逢。", 2000, 11);
            document.getElementById("waifu").style.bottom = "-500px";
            setTimeout(() => {
                document.getElementById("waifu").style.display = "none";
                document.getElementById("waifu-toggle").classList.add("waifu-toggle-active");
            }, 3000);
        });
        let devtools = () => {};
        console.log("%c", devtools);
        devtools.toString = () => {
            showMessage("哈哈，你打开了控制台，是想要看看我的小秘密吗？", 6000, 9);
        };
        window.addEventListener("copy", () => {
            showMessage("你都复制了些什么呀，转载要记得加上出处哦！", 6000, 9);
        });
        window.addEventListener("visibilitychange", () => {
            if (!document.hidden) showMessage("哇，你终于回来了～", 6000, 9);
        });
    })();

    (function welcomeMessage() {
        let text;
        if (location.pathname === "/") { // 如果是主页
            let now = new Date().getHours();
            if (now > 5 && now <= 7) text="早上好！一日之计在于晨，美好的一天就要开始了。" ; else if (now> 7 && now <= 11) text="上午好！工作顺利嘛，不要久坐，多起来走动走动哦！" ; else if (now> 11 && now <= 13) text="中午了，工作了一个上午，现在是午餐时间！" ; else if (now> 13 && now <= 17) text="午后很容易犯困呢，今天的运动目标完成了吗？" ; else if (now> 17 && now <= 19) text="傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～" ; else if (now> 19 && now <= 21) text="晚上好，今天过得怎么样？" ; else if (now> 21 && now <= 23) text="["已经这么晚了呀，早点休息吧，晚安～"," "深夜时要爱护眼睛呀！"]; else if (now> 21 && now <= 23) text="已经这么晚了呀，早点休息吧，晚安～" ; else } if (document.referrer !="=" "") { let referrer="new" url(document.referrer), domain="referrer.hostname.split(".")[1];" (location.hostname="==" referrer.hostname)>「${document.title.split(" - ")[0]}」`;
            else if (domain === "baidu") text = `Hello！来自 百度搜索 的朋友<br>你是搜索 <span>${referrer.search.split("&wd=")[1].split("&")[0]}</span> 找到的我吗？`;
            else if (domain === "so") text = `Hello！来自 360搜索 的朋友<br>你是搜索 <span>${referrer.search.split("&q=")[1].split("&")[0]}</span> 找到的我吗？`;
            else if (domain === "google") text = `Hello！来自 谷歌搜索 的朋友<br>欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;
            else text = `Hello！来自 <span>${referrer.hostname}</span> 的朋友`;
        } else {
            text = `欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;
        }
        showMessage(text, 7000, 8);
    })();

    function showHitokoto() {
        // 增加 hitokoto.cn 的 API
        fetch("https://v1.hitokoto.cn")
            .then(response => response.json())
            .then(result => {
                // let text = `这句一言来自 <span>「${result.from}」</span>，是 <span>${result.creator}</span> 在 hitokoto.cn 投稿的。`;
                showMessage(result.hitokoto, 6000, 9);
                // setTimeout(() => {
                //     showMessage(text, 4000, 9);
                // }, 6000);
            });
    }

    function showMessage(text, timeout, priority) {
        if (!text || (sessionStorage.getItem("waifu-text") && sessionStorage.getItem("waifu-text") > priority)) return;
        if (messageTimer) {
            clearTimeout(messageTimer);
            messageTimer = null;
        }
        text = randomSelection(text);
        sessionStorage.setItem("waifu-text", priority);
        let tips = document.getElementById("waifu-tips");
        tips.innerHTML = text;
        tips.classList.add("waifu-tips-active");
        messageTimer = setTimeout(() => {
            sessionStorage.removeItem("waifu-text");
            tips.classList.remove("waifu-tips-active");
        }, timeout);
    }

    (function initModel() {
        let modelId = localStorage.getItem("modelId"),
            modelTexturesId = localStorage.getItem("modelTexturesId");
        if (modelId === null) {
            // 首次访问加载 指定模型 的 指定材质
            // modelId = 1; // 模型 ID
            // modelTexturesId = 20; // 材质 ID 46(jk) 72(粉白蝴蝶裙)
            modelId = 1;
            modelTexturesId = 0;
        }
        loadModel(modelId, modelTexturesId);
        fetch(waifuPath)
            .then(response => response.json())
            .then(result => {
                window.addEventListener("mouseover", event => {
                    for (let tips of result.mouseover) {
                        if (!event.target.matches(tips.selector)) continue;
                        let text = randomSelection(tips.text);
                        text = text.replace("{text}", event.target.innerText);
                        showMessage(text, 4000, 8);
                        return;
                    }
                });
                window.addEventListener("click", event => {
                    for (let tips of result.click) {
                        if (!event.target.matches(tips.selector)) continue;
                        let text = randomSelection(tips.text);
                        text = text.replace("{text}", event.target.innerText);
                        showMessage(text, 4000, 8);
                        return;
                    }
                });
                result.seasons.forEach(tips => {
                    let now = new Date(),
                        after = tips.date.split("-")[0],
                        before = tips.date.split("-")[1] || after;
                    if ((after.split("/")[0] <= 1 now.getmonth() + && <="before.split("/")[0])" (after.split(" ")[1] now.getdate() { let text="randomSelection(tips.text);" now.getfullyear()); showmessage(text, 7000, true); messagearray.push(text); } }); })(); async function loadmodel(modelid, modeltexturesid, message) localstorage.setitem("modelid", modelid); localstorage.setitem("modeltexturesid", modeltexturesid); showmessage(message, 4000, 10); loadlive2dfix("live2d", `${apipath}get ?id="${modelId}-${modelTexturesId}`,0.5,cdnPath);" console.log(`live2d 模型 ${modelid}-${modeltexturesid} 加载完成`); loadrandmodel() modelid="localStorage.getItem("modelId");" modeltexturesid="localStorage.getItem("modelTexturesId");" 可选 "rand_textures"(随机), "switch_textures"(顺序) fetch(`${apipath}rand_textures .then(response> response.json())
            .then(result => {
                if (result.textures.id === 1 && (modelTexturesId === 1 || modelTexturesId === 0)) showMessage("我还没有其他衣服呢！", 4000, 10);
                else loadModel(modelId, result.textures.id, "我的新衣服好看嘛？");
            });
    }

    async function loadOtherModel() {
        let modelId = localStorage.getItem("modelId");
        fetch(`${apiPath}switch/?id=${modelId}`)
            .then(response => response.json())
            .then(result => {
                loadModel(result.model.id, 0, result.model.message);
            });
    }
}

function initWidget(config) {

    document.body.insertAdjacentHTML("beforeend", `<div id="waifu-toggle">
            <span>看板娘</span>
        </div>`);

    let toggle = document.getElementById("waifu-toggle");
    toggle.addEventListener("click", () => {
        toggle.classList.remove("waifu-toggle-active");
        if (toggle.getAttribute("first-time")) {
            loadWidget(config);
            toggle.removeAttribute("first-time");
        } else {
            localStorage.removeItem("waifu-display");
            document.getElementById("waifu").style.display = "";
            setTimeout(() => {
                document.getElementById("waifu").style.bottom = 0;
            }, 0);
        }
    });

    if (localStorage.getItem("waifu-display") && Date.now() - localStorage.getItem("waifu-display") <= 86400000) { toggle.setattribute("first-time", true); settimeout(()> {
            toggle.classList.add("waifu-toggle-active");
        }, 0);
    } else {
        loadWidget(config);
    }
}
</=></=></=></=></=></=></=></=></=></=></=></=></L2DPartsParam></L2DPartsParam></L2DPartsParam[]></PhysicsHair></L2DExpressionParam></L2DExpressionParam></=></=></0){q._$li("></=2;aM++){if(isNaN(aN[aM])){break;}var></aK;aL++){for(var></aH;aJ++){aI[aJ]=this._$nP();}return></this.textures.length;aH++){var></this.motions.length;aI++){var></this.motions.length;aK++){var></1;var></1;this._$Qi[aO+1]=1-this._$Qi[aO+1];}}break;case></(1+3*2)){q._$li("err></1){a0[aK]=aT[aV]*(1-aX-aW)+aT[aV+2]*aX+aT[aV+2*(aM+1)]*aW;a0[aK+1]=aT[aV+1]*(1-aX-aW)+aT[aV+3]*aX+aT[aV+2*(aM+1)+1]*aW;}else{a0[aK]=aT[aV+2*(aM+1)+2]*(aX-1+aW)+aT[aV+2*(aM+1)]*(1-aX)+aT[aV+2]*(1-aW);a0[aK+1]=aT[aV+2*(aM+1)+3]*(aX-1+aW)+aT[aV+2*(aM+1)+1]*(1-aX)+aT[aV+3]*(1-aW);}}};E.prototype._$VT=function(){return(this._$o+1)*(this._$A+1);};E.prototype.getType=function(){return></0){aN=0;}else{if(aN></=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}else{System.err.printf("_$li></=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}else{var></=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}else{var></=this.size){var></a1&&a1-a2></=aV._$RP&&aV._$RP<=t._$Ys){}else{var></this.motions.length;aJ++){var></aJ){console.log("_$n0></aQ;++aJ){aS=p(aT,aJ);if(aS=="\r"||aS=="\n"){break;}if(aS==","||aS=="></aM&&aM<121){aN._$D0=aM;}}aJ=aI[0];}}for(;aJ<aQ;++aJ){if(p(aT,aJ)=="\n"||p(aT,aJ)=="\r"){break;}}continue;}if((97<=aL&&aL<=122)||(65<=aL&&aL<=90)||aS=="_"){var></aQ;++aJ){aS=p(aT,aJ);if(aS=="\r"||aS=="\n"){break;}if(aS==","||aS=="></aH.length;aI++){var></a._$52){a._$52=aH;}else{if(aH></this._$sb.length;aH++){var></aK){this._$_L=az.STATE_CLOSING;this._$bb=aK;}aH=1;break;case></aJ;++aL){var></this._$Rr[aH]){aI=this._$Rr[aH];}if(aI></aP;++aK){var></aW;++aV){var></aS;++aV){var></aJ;aI++){var></=this.size){var></=aS._$RP&&aS._$RP<=t._$Ys){}else{var></this.motions.length;aJ++){var></aJ){console.log("_$n0></aP;++aJ){aQ=(aR[aJ]&255);if(aQ=="\r"||aQ=="\n"){break;}if(aQ==","||aQ=="></aL&&aL<121){aM._$D0=aL;}}aJ=aI[0];}}for(;aJ<aP;++aJ){if(aR[aJ]=="\n"||aR[aJ]=="\r"){break;}}continue;}if(("a"<=aQ&&aQ<="z")||("A"<=aQ&&aQ<="Z")||aQ=="_"){var></aP;++aJ){aQ=(aR[aJ]&255);if(aQ=="\r"||aQ=="\n"){break;}if(aQ==","||aQ=="></aP;++aJ){var></aR;++aQ){aN[aQ]=0;}for(var></aX;aK++){var></aH;aI++){if(G.getChar(aJ,aI)!=aK.charAt(aI-aL)){return></aI){}}catch(aH){aH._$Rb();}};P.getUserTimeMSec=function(){return(P._$CS==P._$W2)?P.getSystemTimeMSec():P._$CS;};P.setUserTimeMSec=function(aH){P._$CS=aH;};P.updateUserTimeMSec=function(){return(P._$CS=P.getSystemTimeMSec());};P.getTimeMSec=function(){return></16;aI++){this.matrix4x4[aI]=aH[aI];}};ax.prototype._$IT=function(){return></0){aH=0;}else{if(aH></0){aI=0;}else{if(aI></0){aJ=0;}else{if(aJ></0){aK=0;}else{if(aK></ae._$52){ae._$52=aH;}else{if(aH></=this.x&&this.y<=this.y&&(this.x<=this.x+this.width)&&(this.y<=this.y+this.height);};av.prototype.expand=function(aH,aI){this.x-=aH;this.y-=aI;this.width+=aH*2;this.height+=aI*2;};function></0.033){aI=0.033;}var></aH;++aJ){console.log("%5d",aI[aJ]);console.log("%s\n",aK);console.log(",");}console.log("\n");};q._$Rb=function(aH){console.log("dump></aL){aN._$9L=true;}};ah.prototype.updateParamExe=function(aH,aI,aJ,aK){};function></0){aN._$z2=aL;aN._$bs=aL;var></W.CHANNEL_COUNT;aJ++){var></aL;aM++){var></this.clipContextList.length;aO++){var></aI;aH++){this.gl.deleteFramebuffer(Q.frameBuffers[aH].framebuffer);}Q.frameBuffers=[];Q.glContext=[];};W.prototype.init=function(aO,aN,aL){for(var></this.CHANNEL_COLORS.length;aH++){this.dp_webgl.setChannelFlagAsColor(aH,this.CHANNEL_COLORS[aH]);}}W.CHANNEL_COUNT=4;W.RENDER_TEXTURE_USE_MIPMAP=false;W.NOT_USED_FRAME=-100;W.prototype._$L7=function(){if(this.tmpModelToViewMatrix){this.tmpModelToViewMatrix=null;}if(this.tmpMatrix2){this.tmpMatrix2=null;}if(this.tmpMatrixForMask){this.tmpMatrixForMask=null;}if(this.tmpMatrixForDraw){this.tmpMatrixForDraw=null;}if(this.tmpBoundsOnModel){this.tmpBoundsOnModel=null;}if(this.CHANNEL_COLORS){for(var></0){return></0){console.log("No></0){aQ=0;}}aM.setPartsOpacity(aO,aQ);}else{for(var></3){aI=1;}this._$5S.setParamFloat(aH,this._$5S.getParamFloat(aH)*(1-aI)+aJ*aI);};aa.prototype.addToParamFloat=function(aH,aJ,aI){if(typeof></r.length;)if(h.call(r,e))return>