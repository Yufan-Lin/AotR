(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(t,e,n){t.exports=n("56d7")},"0316":function(t,e,n){t.exports=n.p+"img/main_page_bg.a42b0df3.jpg"},"034f":function(t,e,n){"use strict";n("85ec")},2154:function(t,e,n){"use strict";n("ed34")},2463:function(t,e,n){"use strict";n("9d60")},"2eab":function(t,e,n){},"31a8":function(t,e,n){"use strict";n("adaa")},"3d7c":function(t,e,n){t.exports=n.p+"img/btn_left_hand.da9e9522.png"},"44aa":function(t,e,n){t.exports=n.p+"img/img_answer_text_01.0a477c9e.png"},5226:function(t,e,n){t.exports=n.p+"img/img_share_result_diamond.4c052fc1.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showBlock&&"Result"!==t.$route.name,expression:"showBlock && $route.name !== 'Result'"}],attrs:{id:"block-view"}},[n("h1",[t._v("使用手機並翻轉成直式來體驗遊戲呦～")])])],1)},s=[],o={data:function(){return{showBlock:!1}},mounted:function(){var t=this,e=window.innerWidth/window.innerHeight;this.showBlock=e>.8,window.onresize=function(){t.detectSizeChange()}},methods:{detectSizeChange:function(){var t=window.innerWidth/window.innerHeight;this.showBlock=t>.8}}},r=o,c=(n("034f"),n("2877")),h=Object(c["a"])(r,a,s,!1,null,null,null),d=h.exports,g=n("8c4f"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"imgbox"},[i("img",{staticClass:"center-fit",attrs:{id:"main-background",src:n("0316"),alt:""}}),i("div",{staticClass:"centered",attrs:{id:"main_view_container"}},[i("img",{attrs:{id:"main_view_image",src:n("9dff"),alt:""}}),i("router-link",{attrs:{to:"/camera-shot",id:"start_btn"}},[i("button",{staticClass:"red-btn-style"},[t._v("尋找真愛")])])],1)])])},l=[],m=[n("3d7c"),n("7615"),n("ca7a"),n("9dde"),n("aff4"),n("ec82"),n("6ca1"),n("d9e3"),n("93ff"),n("aec8"),n("44aa"),n("c151"),n("ea10"),n("7fb8"),n("7cbd"),n("a567"),n("8033"),n("5226"),n("8cf8"),n("6372")],f={name:"Home",components:{},mounted:function(){this.preloadImages()},methods:{preloadImages:function(){var t=m;console.log(t);for(var e=0;e<t.length;e++){var n=new Image;n.src=t[e]}}}},p=f,v=(n("31a8"),n("2154"),Object(c["a"])(p,u,l,!1,null,"6f069c3a",null)),w=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"base-container"}},[n("video",{ref:"video",attrs:{id:"video-view",autoplay:"true",playsinline:""}}),n("canvas",{ref:"canvas",attrs:{id:"video-canvas"}}),n("img",{directives:[{name:"show",rawName:"v-show",value:1==t.status,expression:"status == 1"}],attrs:{id:"img-hand",src:t.handShapeImageUrl,alt:""}}),n("img",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:"img-answer-text",src:t.selectedSloganImg,alt:""}}),t._m(0),n("button",{staticClass:"red-btn-style",attrs:{id:"btn-confirm"},on:{click:t.onConfirmBtn}},[t._v(t._s(t.confirmText))]),n("button",{attrs:{id:"btn-hand-side"},on:{click:t.changeHandSide}},[n("img",{attrs:{src:t.handImageBtnUrl,alt:""}})])])},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"photo-container"}},[i("img",{attrs:{id:"hbo-logo",src:n("e9ac"),alt:""}}),i("img",{attrs:{id:"program-logo",src:n("cf05"),alt:""}})])}],I=(n("99af"),n("729e")),x=n.n(I),S={name:"Camera",data:function(){return{status:1,isLeftHanded:!0,handImageBtnUrl:R,handShapeImageUrl:k,sloganImgs:[B,L,P,W],lhRingImgs:[E,H,T],rhRingImgs:[U,D,$],selectedRingId:0,selectedSloganId:0,isResultShown:!1,countdownTime:50,cameraPhoto:x.a,videoEl:Element,canvasEl:Element,ringEl:Element,context:CanvasRenderingContext2D,photoDataUri:""}},mounted:function(){var t=this;this.videoEl=this.$refs.video,this.ringEl=this.$refs.ring,this.canvasEl=this.$refs.canvas,this.canvasEl.width=this.screenMinLength,this.canvasEl.height=this.screenMaxLength,this.context=this.canvasEl.getContext("2d"),this.videoEl.control=!1,console.log("max length: "+this.screenMaxLength),console.log("min length: "+this.screenMinLength),this.cameraPhoto=new x.a(this.videoEl),this.cameraPhoto.startCamera(I["FACING_MODES"].ENVIRONMENT,{width:640,height:480}).then((function(e){console.log(e),console.log("video: "+t.videoEl.videoWidth+", "+t.videoEl.videoHeight),t.timerCallBack()})).catch(this.timerCallBack())},computed:{selectedRingImg:function(){return this.isLeftHanded?this.lhRingImgs[this.selectedRingId]:this.rhRingImgs[this.selectedRingId]},selectedSloganImg:function(){return this.sloganImgs[this.selectedSloganId]},confirmText:function(){return 1==this.status?"開始":2==this.status?"選取中":3==this.status?"拍照":"N/A"},isPortrait:function(){return 0==window.orientation},cameraSettings:function(){return this.cameraPhoto.getCameraSettings()},ringImage:function(){var t=new Image;return t.src=this.selectedRingImg,t},sloganImage:function(){var t=new Image;return t.src=this.selectedSloganImg,t}},methods:{getScreenWidth:function(){return window.innerWidth},getScreenHeight:function(){return window.innerHeight},changeHandSide:function(){this.isLeftHanded=!this.isLeftHanded,this.handImageBtnUrl=this.isLeftHanded?R:C,this.handShapeImageUrl=this.isLeftHanded?k:y;var t=this;this.ringImage.onload=function(){t.computeFrame()}},getRandomRingId:function(){var t=0;do{t=Math.floor(10*Math.random())}while(t>=this.rhRingImgs.length||t==this.selectedRingId);return t},getRandomSloganId:function(){var t=0;do{t=Math.floor(10*Math.random())}while(t>=this.sloganImgs.length||t==this.selectedSloganId);return t},onConfirmBtn:function(){1==this.status?(this.startCountdown(),this.status=2):3==this.status&&(this.getCameraPhoto(),""!=this.photoDataUri?this.$router.push({name:"Result",params:{result_id:this.selectedRingId,photoDataUri:this.photoDataUri}}):this.$router.push({path:"/result-view/result_".concat(this.selectedRingId,"/slogan_").concat(this.selectedSloganId)}))},startCountdown:function(){var t=this,e=setInterval((function(){t.countdownTime<=0?(clearInterval(e),t.status=3,t.countdownTime=100,t.computeFrame()):t.countdownTime<30?(t.countdownTime-=1,t.countdownTime%2==0&&(t.selectedRingId=t.getRandomRingId(),t.selectedSloganId=t.getRandomSloganId(),t.computeFrame())):t.countdownTime<20?(t.countdownTime-=1,t.countdownTime%3==0&&(t.selectedRingId=t.getRandomRingId(),t.selectedSloganId=t.getRandomSloganId(),t.computeFrame())):t.countdownTime<10?(t.countdownTime-=1,t.countdownTime%4==0&&(t.selectedRingId=t.getRandomRingId(),t.selectedSloganId=t.getRandomSloganId(),t.computeFrame())):(t.selectedRingId=t.getRandomRingId(),t.selectedSloganId=t.getRandomSloganId(),t.computeFrame(),t.countdownTime-=1)}),100)},getHtmlImage:function(){},getCameraPhoto:function(){var t=this.canvasEl.toDataURL();this.photoDataUri=t,this.status=3},imageToDataUri:function(t,e,n){var i=document.createElement("canvas"),a=i.getContext("2d");return i.width=e,i.height=n,a.drawImage(t,0,0,e,n),i.toDataURL()},timerCallBack:function(){this.computeFrame();var t=this;setTimeout((function(){t.timerCallBack()}),1e3/30)},computeFrame:function(){this.canvasEl.width=this.getScreenWidth(),this.canvasEl.height=this.getScreenHeight();var t=.75,e=this.getScreenWidth(),n=this.getScreenHeight(),i=n*t;if(this.context.drawImage(this.videoEl,0,0,480,640,0,0,i,this.getScreenHeight()),1!=this.status){var a=.19*e,s=a/this.ringImage.width,o=.28,r=this.isLeftHanded?e*o:e*(1-o)-a,c=n/2-n/2*.4;this.context.drawImage(this.ringImage,0,0,this.ringImage.width,this.ringImage.height,r,c,a,this.ringImage.height*s);var h=this.getScreenWidth(),d=h/this.sloganImage.width,g=0,u=(this.getScreenHeight()-this.sloganImage.height*d)/2-100;this.context.drawImage(this.sloganImage,0,0,this.sloganImage.width,this.sloganImage.height,g,u,h,this.sloganImage.height*d)}}}},R=n("3d7c"),C=n("7615"),k=n("ca7a"),y=n("9dde"),E=n("aff4"),U=n("ec82"),H=n("6ca1"),D=n("d9e3"),T=n("93ff"),$=n("aec8"),B=n("44aa"),L=n("c151"),P=n("ea10"),W=n("7fb8"),O=S,j=(n("2463"),Object(c["a"])(O,b,_,!1,null,"9809458a",null)),G=j.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"base-container"}},[n("img",{ref:"resultImage",attrs:{id:"result-img-bg",src:t.selectedResult,alt:""}}),n("div",{attrs:{id:"result-text-container"}},[n("p",{style:{width:.7*t.contentWidth+"px"},domProps:{innerHTML:t._s(t.detailTexts[this.selectedRingId])}})]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.isShowButton,expression:"isShowButton"}],staticClass:"red-btn-style",attrs:{id:"next-btn"},on:{click:t.onConfirmAction}},[t._v(t._s(t.confirmText))])])},A=[],F=(n("a9e3"),{name:"result-view",props:{resultNumber:Number},mounted:function(){var t=this.$route.params.result_id;this.selectedResult=this.resultImgs[t],this.photoDataUri=this.$route.params.photoDataUri;var e=this,n=new ResizeObserver((function(t){var n=t[0].contentRect,i=n.width;e.contentWidth=i}));n.observe(this.$refs.resultImage)},data:function(){return{resultImgs:[M,z,J],answerTextImgs:[V,Q,q,K],selectedRingId:this.$route.params.result_id,selectedSloganId:this.$route.params.slogan_id,selectedResult:"",detailTexts:X,photoDataUri:"",contentWidth:50}},computed:{confirmText:function(){return"下一步"},isShowButton:function(){return!(null==this.photoDataUri||""==this.photoDataUri)}},methods:{onConfirmAction:function(){null==this.photoDataUri||""==this.photoDataUri?this.$router.push({name:"Home"}):this.$router.push({name:"Share",params:{selectedRingId:this.selectedRingId,photoDataUri:this.photoDataUri,selectedSloganId:this.selectedSloganId}})}}}),M=n("7cbd"),z=n("a567"),J=n("8033"),V=n("44aa"),Q=n("c151"),q=n("ea10"),K=n("7fb8"),X=["非常喜歡數字，<br>有超強的記憶力和演算能力，<br>喜歡秩序和整齊到甚至有點強迫症的程度。<br>不善人際關係，為人耿直，<br>是虔敬與誠實的象徵。<br>生活充滿井然有序的規律性，<br>直到他的公式化世界出現變數——<br>遇見熱情美麗的空服員麗莎，<br>有如上帝把天灰撥開一道曙光……。]<br>鑽石代表著慈愛、誠實、德望，深藍、清澈是貞節之愛的保證。","善良熱情美麗大方的麗莎<br>從小在爸爸肩頭上造飛機，<br>夢想飛上天空。<br>如願進入航空業成為空服員，<br>看到乘客臉上的笑容就是她的快樂來源，<br>享受飛往世界各地冒險闖蕩。<br>不按牌理出牌的麗莎，<br>只有對浪漫求婚的憧憬無法妥協，<br>卻愛上了一板一眼的奕之……。<br>紅酒般璀璨奪目的紅寶石，<br>也被稱為「愛情之石」，<br>象徵能為人帶來幸福。","迷人有魅力的Rossy<br>，身為知名兩性作家，<br>時常在廣播節目上暢談婚姻<br>、愛情相處之道。<br>與餐廳老闆思敬擁有一段令人欣羨的<br>幸福婚姻生活。<br>她的聲音彷彿是這座城市的心靈雞湯，<br>卻對自己與丈夫日益惡化的關係無能為力，<br>愛情即將在日常瑣事中逐漸被消磨殆盡了嗎？<br>紫水晶是社交之石，<br>也代表著「愛的守護石」<br>，主宰直覺與潛意識，<br>有助於開發智慧與潛能。"],Y=F,Z=(n("ff85"),Object(c["a"])(Y,N,A,!1,null,"2f67e043",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"base-container"}},[n("img",{ref:"backgroundImage",attrs:{id:"background-image",src:t.backgroundImage,alt:""}}),n("div",{attrs:{id:"photo-container"}},[n("img",{style:{width:t.contentWidth+"px"},attrs:{id:"result-photo",src:t.photoDataUri,alt:""}})]),n("div",{attrs:{id:"buttons-group"}},[n("button",{staticClass:"red-btn-style",staticStyle:{"margin-right":"10px"},on:{click:t.onPlayAgain}},[t._v("再玩一次")]),t._v(" "),n("button",{staticClass:"red-btn-style",staticStyle:{"margin-left":"10px","margin-bottom":"10px"},on:{click:t.onShareResult}},[t._v("分享結果")]),n("br"),n("button",{staticClass:"red-btn-style",staticStyle:{"margin-right":"10px"},on:{click:t.onSavePhoto}},[t._v("儲存照片")]),t._v(" "),n("button",{staticClass:"red-btn-style",staticStyle:{"margin-left":"10px"},on:{click:t.onGoPreview}},[t._v("觀看預告")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowGuide,expression:"isShowGuide"}],attrs:{id:"guide-view"}},[n("div",{attrs:{id:"guide-container"}},[n("p",{staticClass:"center",style:{width:.8*t.contentWidth+"px"}},[t._v("完成【尋戒啟示】AR活動，就有機會贏得免費一個月的 HBO GO 通行證！連續五週，週週選出十名最有創意參賽者！"),n("br"),n("br"),t._v("將結果頁公開上傳至FB或IG，完成標籤與留言："),n("br"),t._v("IG：成功標柱 @hboasiatw 和一位好友，並留下追愛宣言"),n("br"),t._v("FB：成功標柱 @HBOAsiaTW 和一位好友，並留下追愛宣言"),n("br"),t._v("最後標籤 #找回戒指_找回愛"),n("br"),t._v("就有機會贏得 HBO GO 一個月免費通行證")]),n("button",{staticClass:"red-btn-style",on:{click:t.onGuideConfirm}},[t._v("確認")])])])])},nt=[],it={data:function(){return{resultImgs:[at,st,ot],resultId:this.$route.params.selectedRingId,photoDataUri:this.$route.params.photoDataUri,photoImage:Image,contentWidth:100,isShowGuide:!0}},computed:{backgroundImage:function(){return this.resultImgs[this.resultId]}},mounted:function(){null!=this.photoDataUri&&""!=this.photoDataUri||this.$router.push({name:"Home"});var t=new Image;t.src=this.photoDataUri,this.photoImage=t;var e=this,n=new ResizeObserver((function(t){var n=t[0].contentRect,i=n.width;e.contentWidth=i}));n.observe(this.$refs.backgroundImage)},methods:{onPlayAgain:function(){this.$router.push({name:"CameraShot"})},onShareResult:function(){var t=window.location.hostname,e="https://".concat(t,"/AotR/result_").concat(this.resultId,".html%23/result-view/result_").concat(this.resultId,"/slogan_0"),n=this.getShareLink(e,"".concat(t).concat(at),"找回戒指_找回愛");window.open(n)},onSavePhoto:function(){var t=this.createSreenshotPhoto(),e=new Image;e.src=t,e.setAttribute("style","-webkit-user-select:none; display:block; margin:auto; padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);");var n=window.open("");n.document.write(e.outerHTML)},onGoPreview:function(){var t="https://youtu.be/xR8fDa8Oy_Q";window.open(t,"_blank")},onGuideConfirm:function(){this.isShowGuide=!1},getShareLink:function(t,e,n){var i="https://www.facebook.com/sharer/sharer.php?u=".concat(t,"%2F&picture=").concat(e,"&hashtag=%23").concat(encodeURIComponent(n),', "_blank", "toolbar=0,status=0');return i},createSreenshotPhoto:function(){var t=document.createElement("CANVAS");t.width=800,t.height=1731;var e=t.getContext("2d"),n=this.$refs.backgroundImage;e.drawImage(n,0,0,1284,2778,0,0,800,1731);var i=this.photoImage;return e.drawImage(i,0,10,i.width,.65*i.height,0,160,800,950),t.toDataURL()}}},at=n("5226"),st=n("8cf8"),ot=n("6372"),rt=it,ct=(n("a162"),Object(c["a"])(rt,et,nt,!1,null,"f1aba852",null)),ht=ct.exports;i["a"].use(g["a"]);var dt=[{path:"/",name:"Home",component:w},{path:"/camera-shot",name:"CameraShot",component:G},{path:"/result-view/result_:result_id/slogan_:slogan_id",name:"Result",component:tt},{path:"/share-view",name:"Share",component:ht}],gt=new g["a"]({routes:dt,mode:"hash",base:"/"}),ut=gt;i["a"].config.productionTip=!1,new i["a"]({router:ut,render:function(t){return t(d)}}).$mount("#app")},6372:function(t,e,n){t.exports=n.p+"img/img_share_result_amtheyst.95d42e8c.jpg"},"6ca1":function(t,e,n){t.exports=n.p+"img/img_lh_ruby_s.0e568814.png"},7615:function(t,e,n){t.exports=n.p+"img/btn_right_hand.ab1af4ec.png"},"7cbd":function(t,e,n){t.exports=n.p+"img/img_result_diamond.aec1ed49.jpg"},"7fb8":function(t,e,n){t.exports=n.p+"img/img_answer_text_04.0354b892.png"},8033:function(t,e,n){t.exports=n.p+"img/img_result_amethyst.0d3f00d9.jpg"},"85ec":function(t,e,n){},"8cf8":function(t,e,n){t.exports=n.p+"img/img_share_result_ruby.531e8010.jpg"},"93ff":function(t,e,n){t.exports=n.p+"img/img_lh_amethyst_s.c224e891.png"},"9d60":function(t,e,n){},"9dde":function(t,e,n){t.exports=n.p+"img/img_right_hand.616ee745.png"},"9dff":function(t,e,n){t.exports=n.p+"img/main_page_view.f2d1a8c5.jpg"},a162:function(t,e,n){"use strict";n("2eab")},a567:function(t,e,n){t.exports=n.p+"img/img_result_ruby.60293210.jpg"},adaa:function(t,e,n){},aec8:function(t,e,n){t.exports=n.p+"img/img_rh_amethyst_s.e3a6fa89.png"},aff4:function(t,e,n){t.exports=n.p+"img/img_lh_diamond_s.8eb1fcf4.png"},b239:function(t,e,n){},c151:function(t,e,n){t.exports=n.p+"img/img_answer_text_02.ea68494a.png"},ca7a:function(t,e,n){t.exports=n.p+"img/img_left_hand.97e81afb.png"},cf05:function(t,e,n){t.exports=n.p+"img/logo.18c2e3e9.png"},d9e3:function(t,e,n){t.exports=n.p+"img/img_rh_ruby_s.66446c67.png"},e9ac:function(t,e,n){t.exports=n.p+"img/logo_hbo.6d59477a.png"},ea10:function(t,e,n){t.exports=n.p+"img/img_answer_text_03.e9f50ab1.png"},ec82:function(t,e,n){t.exports=n.p+"img/img_rh_diamond_s.f413e34c.png"},ed34:function(t,e,n){},ff85:function(t,e,n){"use strict";n("b239")}}]);
//# sourceMappingURL=chunk-common.0bf59ba9.js.map