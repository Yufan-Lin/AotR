(function(t){function e(e){for(var a,s,r=e[0],c=e[1],h=e[2],l=0,g=[];l<r.length;l++)s=r[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&g.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(g.length)g.shift()();return o.push.apply(o,h||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/AotR/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var h=0;h<r.length;h++)e(r[h]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"15dc":function(t,e,n){t.exports=n.p+"img/main_page_bg.735e26e4.png"},2154:function(t,e,n){"use strict";n("ed34")},"3d7c":function(t,e,n){t.exports=n.p+"img/btn_left_hand.da9e9522.png"},"410f":function(t,e,n){},"44aa":function(t,e,n){t.exports=n.p+"img/img_answer_text_01.0a477c9e.png"},5226:function(t,e,n){t.exports=n.p+"img/img_share_result_diamond.14203b25.jpg"},"536d":function(t,e,n){"use strict";n("d5b1")},"569b":function(t,e,n){"use strict";n("62ff")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showBlock,expression:"showBlock"}],attrs:{id:"block-view"}},[n("h1",[t._v("請翻轉成直式來體驗遊戲呦～")])])],1)},o=[],s={data:function(){return{showBlock:!1}},mounted:function(){var t=this;window.onresize=function(){t.detectSizeChange()}},methods:{detectSizeChange:function(){console.log(window.orientation),window.innerHeight<window.innerWidth?this.showBlock=!0:this.showBlock=!1}}},r=s,c=(n("034f"),n("2877")),h=Object(c["a"])(r,i,o,!1,null,null,null),d=h.exports,l=n("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"imgbox"},[a("img",{staticClass:"center-fit",attrs:{src:n("15dc"),alt:""}}),a("div",{staticClass:"centered",attrs:{id:"main_view_container"}},[a("img",{attrs:{id:"main_view_image",src:n("9dff"),alt:""}}),a("router-link",{attrs:{to:"/camera-shot",id:"start_btn"}},[a("button",{staticClass:"red-btn-style"},[t._v("尋找真愛")])])],1)])])},u=[],m={name:"Home",components:{},mounted:function(){},methods:{preloadImages:function(){for(var t=[p,f,v,b],e=0;e<t.length;e++){var n=new Image;n.src=t[e]}}}},p=n("44aa"),f=n("c151"),v=n("ea10"),b=n("7fb8"),w=m,_=(n("569b"),n("2154"),Object(c["a"])(w,g,u,!1,null,"b7a4ca7a",null)),I=_.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"base-container"}},[n("video",{ref:"video",attrs:{id:"video-view",autoplay:"true",playsinline:""}}),n("canvas",{ref:"canvas",attrs:{id:"video-canvas"}}),n("img",{directives:[{name:"show",rawName:"v-show",value:1==t.status,expression:"status == 1"}],attrs:{id:"img-hand",src:t.handShapeImageUrl,alt:""}}),n("img",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:"img-answer-text",src:t.selectedSloganImg,alt:""}}),t._m(0),n("button",{staticClass:"red-btn-style",attrs:{id:"btn-confirm"},on:{click:t.onConfirmBtn}},[t._v(t._s(t.confirmText))]),n("button",{attrs:{id:"btn-hand-side"},on:{click:t.changeHandSide}},[n("img",{attrs:{src:t.handImageBtnUrl,alt:""}})])])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"photo-container"}},[a("img",{attrs:{id:"hbo-logo",src:n("e9ac"),alt:""}}),a("img",{attrs:{id:"program-logo",src:n("cf05"),alt:""}})])}],R=(n("99af"),n("729e")),y=n.n(R),C={name:"Camera",data:function(){return{status:1,isLeftHanded:!0,handImageBtnUrl:E,handShapeImageUrl:U,sloganImgs:[L,M,B,A],lhRingImgs:[D,P,j],rhRingImgs:[H,$,O],selectedRingId:0,selectedSloganId:0,isResultShown:!1,countdownTime:50,cameraPhoto:y.a,videoEl:Element,canvasEl:Element,ringEl:Element,context:CanvasRenderingContext2D,photoDataUri:""}},mounted:function(){var t=this;this.videoEl=this.$refs.video,this.ringEl=this.$refs.ring,this.canvasEl=this.$refs.canvas,this.canvasEl.width=this.screenMinLength,this.canvasEl.height=this.screenMaxLength,this.context=this.canvasEl.getContext("2d"),this.videoEl.control=!1,console.log("max length: "+this.screenMaxLength),console.log("min length: "+this.screenMinLength),this.cameraPhoto=new y.a(this.videoEl),this.cameraPhoto.startCamera(R["FACING_MODES"].ENVIRONMENT,{width:640,height:480}).then((function(e){console.log(e),console.log("video: "+t.videoEl.videoWidth+", "+t.videoEl.videoHeight),t.timerCallBack()})).catch(this.timerCallBack())},computed:{selectedRingImg:function(){return this.isLeftHanded?this.lhRingImgs[this.selectedRingId]:this.rhRingImgs[this.selectedRingId]},selectedSloganImg:function(){return this.sloganImgs[this.selectedSloganId]},confirmText:function(){return 1==this.status?"開始":2==this.status?"選取中":3==this.status?"拍照":"N/A"},isPortrait:function(){return 0==window.orientation},cameraSettings:function(){return this.cameraPhoto.getCameraSettings()},ringImage:function(){var t=new Image;return t.src=this.selectedRingImg,t},sloganImage:function(){var t=new Image;return t.src=this.selectedSloganImg,t}},methods:{getScreenWidth:function(){return window.innerWidth},getScreenHeight:function(){return window.innerHeight},changeHandSide:function(){this.isLeftHanded=!this.isLeftHanded,this.handImageBtnUrl=this.isLeftHanded?E:k,this.handShapeImageUrl=this.isLeftHanded?U:T;var t=this;this.ringImage.onload=function(){t.computeFrame()}},getRandomRingId:function(){var t=0;do{t=Math.floor(10*Math.random())}while(t>=this.rhRingImgs.length||t==this.selectedRingId);return t},getRandomSloganId:function(){var t=0;do{t=Math.floor(10*Math.random())}while(t>=this.sloganImgs.length||t==this.selectedSloganId);return t},onConfirmBtn:function(){1==this.status?(this.startCountdown(),this.status=2):3==this.status&&(this.getCameraPhoto(),""!=this.photoDataUri?this.$router.push({name:"Result",params:{result_id:this.selectedRingId,photoDataUri:this.photoDataUri}}):this.$router.push({path:"/result-view/result_".concat(this.selectedRingId,"/slogan_").concat(this.selectedSloganId)}))},startCountdown:function(){var t=this,e=setInterval((function(){console.log("Count time: "+t.countdownTime),t.countdownTime<=0?(clearInterval(e),t.status=3,t.countdownTime=100,t.computeFrame()):t.countdownTime<30?(t.countdownTime-=1,t.countdownTime%2==0&&(t.selectedRingId=t.getRandomRingId(),t.selectedSloganId=t.getRandomSloganId(),t.computeFrame())):t.countdownTime<20?(t.countdownTime-=1,t.countdownTime%3==0&&(t.selectedRingId=t.getRandomRingId(),t.selectedSloganId=t.getRandomSloganId(),t.computeFrame())):t.countdownTime<10?(t.countdownTime-=1,t.countdownTime%4==0&&(t.selectedRingId=t.getRandomRingId(),t.selectedSloganId=t.getRandomSloganId(),t.computeFrame())):(t.selectedRingId=t.getRandomRingId(),t.selectedSloganId=t.getRandomSloganId(),t.computeFrame(),t.countdownTime-=1)}),100)},getHtmlImage:function(){},getCameraPhoto:function(){var t=this.canvasEl.toDataURL();this.photoDataUri=t,this.status=3},imageToDataUri:function(t,e,n){var a=document.createElement("canvas"),i=a.getContext("2d");return a.width=e,a.height=n,i.drawImage(t,0,0,e,n),a.toDataURL()},timerCallBack:function(){this.computeFrame();var t=this;setTimeout((function(){t.timerCallBack()}),1e3/30)},computeFrame:function(){this.canvasEl.width=this.getScreenWidth(),this.canvasEl.height=this.getScreenHeight();var t=.75,e=this.getScreenWidth(),n=this.getScreenHeight(),a=n*t;if(console.log("canvas: "+this.canvasEl.width+", "+this.canvasEl.height),this.context.drawImage(this.videoEl,0,0,480,640,0,0,a,this.getScreenHeight()),1!=this.status){var i=.19*e,o=i/this.ringImage.width,s=.28,r=this.isLeftHanded?e*s:e*(1-s)-i,c=n/2-n/2*.4;this.context.drawImage(this.ringImage,0,0,this.ringImage.width,this.ringImage.height,r,c,i,this.ringImage.height*o);var h=this.getScreenWidth(),d=h/this.sloganImage.width,l=0,g=(this.getScreenHeight()-this.sloganImage.height*d)/2-100;this.context.drawImage(this.sloganImage,0,0,this.sloganImage.width,this.sloganImage.height,l,g,h,this.sloganImage.height*d)}}}},E=n("3d7c"),k=n("7615"),U=n("ca7a"),T=n("9dde"),D=n("aff4"),H=n("ec82"),P=n("6ca1"),$=n("d9e3"),j=n("93ff"),O=n("aec8"),L=n("44aa"),M=n("c151"),B=n("ea10"),A=n("7fb8"),F=C,N=(n("aba3"),Object(c["a"])(F,x,S,!1,null,"f91ad31a",null)),W=N.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"base-container"}},[n("img",{attrs:{id:"result-img-bg",src:t.selectedResult,alt:""}}),n("div",{attrs:{id:"result-text-container"}},[n("p",{domProps:{innerHTML:t._s(t.detailTexts[this.selectedRingId])}})]),n("button",{staticClass:"red-btn-style",attrs:{id:"next-btn"},on:{click:t.onConfirmAction}},[t._v(t._s(t.confirmText))])])},G=[],V=(n("a9e3"),{name:"result-view",props:{resultNumber:Number},mounted:function(){var t=this.$route.params.result_id;this.selectedResult=this.resultImgs[t],this.photoDataUri=this.$route.params.photoDataUri},data:function(){return{resultImgs:[J,q,Q],answerTextImgs:[K,X,Y,Z],selectedRingId:this.$route.params.result_id,selectedSloganId:this.$route.params.slogan_id,selectedResult:"",detailTexts:tt,photoDataUri:""}},computed:{confirmText:function(){return null==this.photoDataUri||""==this.photoDataUri?"馬上試玩":"下一步"}},methods:{onConfirmAction:function(){null==this.photoDataUri||""==this.photoDataUri?this.$router.push({name:"Home"}):this.$router.push({name:"Share",params:{selectedRingId:this.selectedRingId,photoDataUri:this.photoDataUri,selectedSloganId:this.selectedSloganId}})}}}),J=n("7cbd"),q=n("a567"),Q=n("8033"),K=n("44aa"),X=n("c151"),Y=n("ea10"),Z=n("7fb8"),tt=["非常喜歡數字，<br>有超強的記憶力和演算能力，<br>喜歡秩序和整齊到甚至有點強迫症的程度。<br>不善人際關係，為人耿直，<br>是虔敬與誠實的象徵。<br>生活充滿井然有序的規律性，<br>直到他的公式化世界出現變數——<br>遇見熱情美麗的空服員麗莎，<br>有如上帝把天灰撥開一道曙光……。]<br>鑽石代表著慈愛、誠實、德望，深藍、清澈是貞節之愛的保證。","善良熱情美麗大方的麗莎<br>從小在爸爸肩頭上造飛機，<br>夢想飛上天空。<br>如願進入航空業成為空服員，<br>看到乘客臉上的笑容就是她的快樂來源，<br>享受飛往世界各地冒險闖蕩。<br>不按牌理出牌的麗莎，<br>只有對浪漫求婚的憧憬無法妥協，<br>卻愛上了一板一眼的奕之……。<br>紅酒般璀璨奪目的紅寶石，<br>也被稱為「愛情之石」，<br>象徵能為人帶來幸福。","迷人有魅力的Rossy，身為知名兩性作家，<br>時常在廣播節目上暢談婚姻、愛情相處之道。<br>與餐廳老闆思敬擁有一段令人欣羨的<br>幸福婚姻生活。<br>她的聲音彷彿是這座城市的心靈雞湯，<br>卻對自己與丈夫日益惡化的關係無能為力，<br>愛情即將在日常瑣事中逐漸被消磨殆盡了嗎？<br>紫水晶是社交之石，<br>也代表著「愛的守護石」，主宰直覺與潛意識，<br>有助於開發智慧與潛能。"],et=V,nt=(n("536d"),Object(c["a"])(et,z,G,!1,null,"58853c99",null)),at=nt.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"base-container"}},[n("img",{ref:"backgroundImage",attrs:{id:"background-image",src:t.backgroundImage,alt:""}}),n("img",{attrs:{id:"result-photo",src:t.photoDataUri,alt:""}}),n("div",{attrs:{id:"buttons-group"}},[n("button",{staticClass:"red-btn-style",staticStyle:{"margin-right":"10px"},on:{click:t.onPlayAgain}},[t._v("再玩一次")]),t._v(" "),n("button",{staticClass:"red-btn-style",staticStyle:{"margin-left":"10px","margin-bottom":"10px"},on:{click:t.onShareResult}},[t._v("分享結果")]),n("br"),n("button",{staticClass:"red-btn-style",staticStyle:{"margin-right":"10px"},on:{click:t.onSavePhoto}},[t._v("儲存照片")]),t._v(" "),n("button",{staticClass:"red-btn-style",staticStyle:{"margin-left":"10px"},on:{click:t.onGoPreview}},[t._v("觀看預告")])])])},ot=[],st=(n("ac1f"),n("5319"),{data:function(){return{resultImgs:[rt,ct,ht],resultId:this.$route.params.selectedRingId,photoDataUri:this.$route.params.photoDataUri,photoImage:Image}},computed:{backgroundImage:function(){return this.resultImgs[this.resultId]}},mounted:function(){null!=this.photoDataUri&&""!=this.photoDataUri||this.$router.push({name:"Home"});var t=new Image;t.src=this.photoDataUri,this.photoImage=t},methods:{onPlayAgain:function(){this.$router.push({name:"CameraShot"})},onShareResult:function(){var t=window.location.hostname,e="https://".concat(t,"/AotR/%23/result-view/result_").concat(this.resultId,"/slogan_0"),n=this.getShareLink(e,"".concat(t).concat(rt),"戒指流浪記");console.log(n),window.open(n)},onSavePhoto:function(){var t=this.createSreenshotPhoto(),e=document.createElement("A");e.setAttribute("download","AR.png");var n=t.replace(/^data:image\/[^;]/,"data:application/octet-stream");e.setAttribute("href",n),e.click()},onGoPreview:function(){var t="https://www.youtube.com/watch?v=dElRVQFqj-k&ab_channel=BrunoMars";window.open(t,"_blank")},getShareLink:function(t,e,n){var a="https://www.facebook.com/sharer/sharer.php?u=".concat(t,"%2F&picture=").concat(e,"&hashtag=%23").concat(encodeURIComponent(n),', "_blank", "toolbar=0,status=0');return a},createSreenshotPhoto:function(){var t=document.createElement("CANVAS");t.width=800,t.height=1731;var e=t.getContext("2d"),n=this.$refs.backgroundImage;console.log(n.height),e.drawImage(n,0,0,1284,2778,0,0,800,1731);var a=this.photoImage;return e.drawImage(a,0,10,a.width,.65*a.height,0,160,800,950),t.toDataURL()}}}),rt=n("5226"),ct=n("8cf8"),ht=n("6372"),dt=st,lt=(n("7aaf"),Object(c["a"])(dt,it,ot,!1,null,"0fd76c15",null)),gt=lt.exports;a["a"].use(l["a"]);var ut=[{path:"/",name:"Home",component:I},{path:"/camera-shot",name:"CameraShot",component:W},{path:"/result-view/result_:result_id/slogan_:slogan_id",name:"Result",component:at},{path:"/share-view",name:"Share",component:gt}],mt=new l["a"]({routes:ut,mode:"hash",base:"/"}),pt=mt;a["a"].config.productionTip=!1,new a["a"]({router:pt,render:function(t){return t(d)}}).$mount("#app")},"62ff":function(t,e,n){},6372:function(t,e,n){t.exports=n.p+"img/img_share_result_amtheyst.99f7033e.jpg"},"6ca1":function(t,e,n){t.exports=n.p+"img/img_lh_ruby_s.0e568814.png"},7615:function(t,e,n){t.exports=n.p+"img/btn_right_hand.ab1af4ec.png"},"7aaf":function(t,e,n){"use strict";n("410f")},"7cbd":function(t,e,n){t.exports=n.p+"img/img_result_diamond.d9d64ee1.jpg"},"7dda":function(t,e,n){},"7fb8":function(t,e,n){t.exports=n.p+"img/img_answer_text_04.7e828d4d.png"},8033:function(t,e,n){t.exports=n.p+"img/img_result_amethyst.e6e5360f.jpg"},"85ec":function(t,e,n){},"8cf8":function(t,e,n){t.exports=n.p+"img/img_share_result_ruby.4c53a061.jpg"},"93ff":function(t,e,n){t.exports=n.p+"img/img_lh_amethyst_s.c224e891.png"},"9dde":function(t,e,n){t.exports=n.p+"img/img_right_hand.616ee745.png"},"9dff":function(t,e,n){t.exports=n.p+"img/main_page_view.c2079bea.jpg"},a567:function(t,e,n){t.exports=n.p+"img/img_result_ruby.6f9fe620.jpg"},aba3:function(t,e,n){"use strict";n("7dda")},aec8:function(t,e,n){t.exports=n.p+"img/img_rh_amethyst_s.e3a6fa89.png"},aff4:function(t,e,n){t.exports=n.p+"img/img_lh_diamond_s.8eb1fcf4.png"},c151:function(t,e,n){t.exports=n.p+"img/img_answer_text_02.ea68494a.png"},ca7a:function(t,e,n){t.exports=n.p+"img/img_left_hand.97e81afb.png"},cf05:function(t,e,n){t.exports=n.p+"img/logo.a40a776b.png"},d5b1:function(t,e,n){},d9e3:function(t,e,n){t.exports=n.p+"img/img_rh_ruby_s.66446c67.png"},e9ac:function(t,e,n){t.exports=n.p+"img/logo_hbo.6d59477a.png"},ea10:function(t,e,n){t.exports=n.p+"img/img_answer_text_03.e9f50ab1.png"},ec82:function(t,e,n){t.exports=n.p+"img/img_rh_diamond_s.f413e34c.png"},ed34:function(t,e,n){}});
//# sourceMappingURL=app.ef813999.js.map