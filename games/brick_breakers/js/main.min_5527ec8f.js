var __reflect=this&&this.__reflect||function(e,t,i){e.__class__=t,i?i.push(t):i=[t],e.__types__=e.__types__?i.concat(e.__types__):i},__extends=this&&this.__extends||function(e,t){function i(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);i.prototype=t.prototype,e.prototype=new i},__awaiter=this&&this.__awaiter||function(e,t,i,r){return new(i||(i=Promise))(function(n,a){function o(e){try{l(r.next(e))}catch(t){a(t)}}function s(e){try{l(r["throw"](e))}catch(t){a(t)}}function l(e){e.done?n(e.value):new i(function(t){t(e.value)}).then(o,s)}l((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function i(e){return function(t){return r([e,t])}}function r(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,a&&(o=a[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(a,i[1])).done)return o;switch(a=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,a=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(o=l.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(r){i=[6,r],a=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var n,a,o,s,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},BaseView=function(e){function t(){var t=e.call(this)||this;return t._needBlackBg=!0,t._needShowEffect=!0,t}return __extends(t,e),t.prototype.partAdded=function(t,i){e.prototype.partAdded.call(this,t,i)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.percentWidth=this.percentHeight=100,this.drawBlackBg()},t.prototype.drawBlackBg=function(){if(this._needBlackBg){var e=2*this.stage.stageWidth,t=2*this.stage.stageHeight;this._bgShape||(this._bgShape=new egret.Shape,this._bgShape.graphics.beginFill(0,.5),this._bgShape.graphics.drawRect(0,0,e,t),this._bgShape.graphics.endFill()),this._bgShape.x=(this.width-e)/2,this._bgShape.y=(this.height-t)/2,this.addChildAt(this._bgShape,0)}else func.removeFromParent(this._bgShape)},t.prototype.isShow=function(){return this.visible},t.prototype.show=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.visible=!0;var i=this.parent||this._parent;i&&(i.addChild(this),egret.Tween.removeTweens(this),this._needShowEffect&&(this.alpha=.2,this.scaleX=this.scaleY=.9,egret.Tween.get(this).to({alpha:1}),egret.Tween.get(this).to({scaleX:1,scaleY:1},500,egret.Ease.backInOut)))},t.prototype.hide=function(){for(var e=this,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];egret.Tween.removeTweens(this),egret.Tween.get(this).to({alpha:0,scaleX:.8,scaleY:.8},500).call(function(){e.visible=!1,e._parent=e.parent,func.removeFromParent(e)})},t.prototype.addTouchTapEvent=function(e,t,i,r){e.addEventListener(egret.TouchEvent.TOUCH_TAP,t,this,i,r)},t.prototype.hideBgShape=function(){this._bgShape&&(this._bgShape.visible=!1)},t.prototype.showBgShape=function(){this._bgShape&&(this._bgShape.visible=!0)},t.prototype.setParent=function(e){this._parent=e},t}(eui.Component);__reflect(BaseView.prototype,"BaseView",["eui.UIComponent","egret.DisplayObject"]);var SingletonClass=function(){function e(){}return e.ins=function(){return this._ins||(this._ins=new this),this._ins},e}();__reflect(SingletonClass.prototype,"SingletonClass");var BaseP2Body=function(e){function t(t){return e.call(this,t)||this}return __extends(t,e),t.prototype.dispose=function(){this.world&&this.world.removeBody(this);for(var e=0,t=this.displays||[];e<t.length;e++){var i=t[e];func.removeFromParent(i)}},t}(p2.Body);__reflect(BaseP2Body.prototype,"BaseP2Body");var GameStatus;!function(e){e[e.Ready=1]="Ready",e[e.Onfire=2]="Onfire"}(GameStatus||(GameStatus={}));var GameMgr=function(e){function t(){var t=e.call(this)||this;return t._world=new p2.World,t._balls=[],t._bricks=[],t._walls=[],t._ballInitPos=[375,1085],t._status=GameStatus.Ready,t._fireEndBallCount=0,t._p2wordFrame=1,t._fireTimer=egret.getTimer(),t}return __extends(t,e),t.ins=function(){return e.ins.call(this)},Object.defineProperty(t.prototype,"bricks",{get:function(){return this._bricks},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ballInitPos",{get:function(){return this._ballInitPos},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"world",{get:function(){return this._world},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"status",{get:function(){return this._status},set:function(e){switch(this._status=e,e){case GameStatus.Ready:this.fireEndBallCount=0,this._p2wordFrame=1,this.nextLevel();break;case GameStatus.Onfire:}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fireEndBallCount",{get:function(){return this._fireEndBallCount},set:function(e){this._fireEndBallCount=e},enumerable:!0,configurable:!0}),t.prototype.init=function(){this._mainView=Main.ins.mainView,this._gameView=this._mainView.getView(GameView),this.initWorld(),this.resetGame(),egret.startTick(this.enterFrame,this)},t.prototype.initWorld=function(){var e=this;this._world.gravity=[0,0],this._world.applyDamping=!1,this._walls=this.createWall(GameConst.map_Rectangle);var t={restitution:1,stiffness:Number.MAX_VALUE,friction:1};this._world.addContactMaterial(new p2.ContactMaterial(GameConst.material_ball,GameConst.material_wall,t)),this._world.addContactMaterial(new p2.ContactMaterial(GameConst.material_ball,GameConst.material_brick,t)),this._world.on("beginContact",function(t){var i,r=t.bodyA,n=t.bodyB;r instanceof BallItem&&n==e._walls[2]?i=r:n instanceof BallItem&&r==e._walls[2]&&(i=n),i&&i.status==BallStatus.onfire&&(i.status=BallStatus.onland,i.resetBall(),0==e.fireEndBallCount?e._ballInitPos[0]=i.position[0]:i.position=[e._ballInitPos[0],e._ballInitPos[1]],e.fireEndBallCount++),r instanceof BallItem&&n instanceof BrickItem?n.impactBall(r):n instanceof BallItem&&r instanceof BrickItem&&r.impactBall(n)})},t.prototype.resetGame=function(){GameModel.ins().resetData(),this._gameView.resetView(),this._ballInitPos=[GameConst.ball_InitPos[0],GameConst.ball_InitPos[1]];for(var e=0,t=this._balls;e<t.length;e++){var i=t[e];i.dispose()}for(var r=0,n=this._bricks;r<n.length;r++){var a=n[r];a.dispose()}this._bricks=[],this._balls=[],this.createBallItem(),this.status=GameStatus.Ready},t.prototype.nextLevel=function(){for(var e=GameConst.map_Rectangle,t=0,i=this._balls;t<i.length;t++){var r=i[t];r.resetBall(),r.status=BallStatus.ready,r.position=[this._ballInitPos[0],this._ballInitPos[1]]}this._gameView.updateBallCountView(this._balls.length,this._ballInitPos[0]);for(var n=0;n<this._bricks.length;n++){var a=this._bricks[n];a.world||(this._bricks.splice(n,1),n--)}for(var o=-3*GameConst.brick_radius+e.y+e.height,s=0,l=this._bricks;s<l.length;s++){var a=l[s];if(a.position[1]>=o){if(a.brickType==BrickType.normal)return void this.showGameOverView();a.dispose()}}GameModel.ins().level++;for(var h=0,c=this._bricks;h<c.length;h++){var a=c[h];a.position[1]+=2*GameConst.brick_radius}for(var p=e.width/(2*GameConst.brick_radius),u=RandomMgr.ins().randomNum(0,p-1),d=RandomMgr.ins().randomNum(0,3*p),n=0;p>n;n++){var _=[e.x+(2*n+1)*GameConst.brick_radius,e.y+3*GameConst.brick_radius];if(n==u)this.createBrickItem(_,1,BrickType.ball);else if(n==d)this.createBrickItem(_,1,RandomMgr.ins().randomNum(BrickType.row_and_col,BrickType.col));else if(RandomMgr.ins().randomNum(1,3)>1)var a=this.createBrickItem(_,RandomMgr.ins().randomNum(1*GameModel.ins().level,2*GameModel.ins().level))}this._gameView.nextLevelView()},t.prototype.showGameOverView=function(){var e=this._mainView.getView(GameOverView);e.show()},t.prototype.enterFrame=function(e){for(var t=egret.getTimer(),i=0;i<this._p2wordFrame;i++)this._world.step(.01);this._gameView.update();for(var i=0;i<this._world.bodies.length;i++){var r=this._world.bodies[i];if(r.displays)for(var n=0,a=r.displays;n<a.length;n++){var o=a[n];o.parent!=this._gameView.gp_map&&(this._gameView.gp_map.addChild(o),o.x=r.position[0],o.y=r.position[1]),(o.x!=r.position[0]||o.y!=r.position[1])&&(r instanceof BrickItem||r instanceof BallItem&&(r.status==BallStatus.onland||r.status==BallStatus.ready)?egret.Tween.get(o).to({x:r.position[0],y:r.position[1]},Math.sqrt(Math.pow(r.position[1]-o.y,2)+Math.pow(r.position[0]-o.x,2))):(o.x=r.position[0],o.y=r.position[1])),o.rotation=180*r.angle/Math.PI}}switch(this.status){case GameStatus.Ready:break;case GameStatus.Onfire:if(this.fireEndBallCount==this._balls.length&&(this.status=GameStatus.Ready),t-this._fireTimer>5e3){this._fireTimer=t,this._p2wordFrame++,this._gameView.playAddSpeedEffect();for(var s=0,l=this._balls;s<l.length;s++){var h=l[s];switch(h.status){case BallStatus.onland:break;case BallStatus.onfire:this._p2wordFrame>3&&Math.abs(h.velocity[1])<GameConst.ball_radius&&(h.velocity[1]=h.velocity[1]>=0?GameConst.ball_radius:-GameConst.ball_radius)}}}}},t.prototype.createWall=function(e){var t=[];return t.push(this.createPlane(0,e.x,e.y)),t.push(this.createPlane(-Math.PI/2,e.x,e.y)),t.push(this.createPlane(Math.PI,e.x,e.y+e.height)),t.push(this.createPlane(Math.PI/2,e.x+e.width,e.y)),t},t.prototype.createPlane=function(e,t,i){void 0===e&&(e=Math.PI);var r=new p2.Plane,n=new p2.Body({mass:0,type:p2.Body.STATIC});return r.collisionGroup=GameConst.collisionGroup_wall,r.material=GameConst.material_wall,n.addShape(r),n.angle=e,n.position[0]=t,n.position[1]=i,this.world.addBody(n),n},t.prototype.createBallItem=function(e,t){void 0===e&&(e=[this._ballInitPos[0],this._ballInitPos[1]]),void 0===t&&(t=[0,0]);var i=new BallItem({position:e,mass:1,velocity:t});return this._world.addBody(i),this._balls.push(i),i},t.prototype.createBrickItem=function(e,t,i){void 0===i&&(i=BrickType.normal);var r=new BrickItem({position:e,hp:t,brickType:i});this._world.addBody(r);for(var n=0,a=r.displays||[];n<a.length;n++){var o=a[n];this._gameView.gp_map.addChild(o),o.x=e[0],o.y=e[1]-2*GameConst.brick_radius}return this._bricks.push(r),r},t.prototype.fireBall=function(e,t){for(var i=this,r=0,n=this._balls.length,a=this._ballInitPos[0],o=function(o){egret.setTimeout(function(){n--,o.status=BallStatus.onfire;var r=e-o.position[0],s=t-o.position[1],l=GameConst.ball_fire_speed/Math.sqrt(r*r+s*s);o.velocity=[r*l,s*l],i._gameView.updateBallCountView(n,a)},s,100*r),r++},s=this,l=0,h=this._balls;l<h.length;l++){var c=h[l];o(c)}this._fireTimer=egret.getTimer(),this.status=GameStatus.Onfire},t}(SingletonClass);__reflect(GameMgr.prototype,"GameMgr");var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,i,r){function n(e){t.call(r,e)}function a(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),i.call(r))}"undefined"!=typeof generateEUI?egret.callLater(function(){t.call(r,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),RES.getResByUrl(e,n,this,RES.ResourceItem.TYPE_TEXT))},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,i){function r(r){t.call(i,r,e)}if(RES.hasRes(e)){var n=RES.getRes(e);n?r(n):RES.getResAsync(e,r,this)}else RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var func;!function(e){function t(e){e&&e.parent&&e.parent.removeChild(e)}function i(e,t,i,r,n){void 0===n&&(n=egret.HttpMethod.GET);var a=new egret.HttpRequest;a.responseType=egret.HttpResponseType.TEXT;var o="",s=!0;for(var l in t)s?s=!1:o+="&",o+=l+"="+t[l];a.open(n==egret.HttpMethod.GET?e+"?"+o:e,n),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n==egret.HttpMethod.GET?a.send():a.send(o),egret.log("sendUrl:"+e+"  \nsendParams:"+o),a.addEventListener(egret.Event.COMPLETE,function(e){var t=e.currentTarget;if(t&&t.response){var n=JSON.parse(t.response);egret.log("request.response:"+t.response);var a=n.error_code,o=n.error||"ERROR";n&&0==a?i(n):r(a,o)}else r(-2,"NO_REQUEST")},this),a.addEventListener(egret.IOErrorEvent.IO_ERROR,function(){r(-1,"IO_ERROR")},this)}function r(e,t,i){void 0===t&&(t=function(){}),e.anchorOffsetX=e.width/2,e.anchorOffsetY=e.height/2,e.x+=e.width/2,e.y+=e.height/2,e.anchorOffsetY=e.height/2;var r=i?i:e;e.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){egret.Tween.get(e).to({scaleX:.85,scaleY:.85},100)},r),e.addEventListener(egret.TouchEvent.TOUCH_CANCEL,function(){egret.Tween.get(e).to({scaleX:1,scaleY:1},100)},r),e.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,function(){egret.Tween.get(e).to({scaleX:1,scaleY:1},100)},r),e.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){egret.Tween.get(e).to({scaleX:1,scaleY:1},100),t&&t.call(r)},r)}function n(e){var t=e,i=window.screen.width/window.screen.height,r=egret.StageScaleMode.SHOW_ALL;egret.Capabilities.isMobile&&(r=egret.StageScaleMode.FIXED_WIDTH,(.56>i||i>.6)&&(r=egret.StageScaleMode.SHOW_ALL)),t.stage.scaleMode=r}function a(e,t){return(t.y-e.y)/(t.x-e.x)}e.removeFromParent=t,e.sendHttpRequest=i,e.addButtonClickByEff=r,e.screenAdaptation=n,e.getPonitSlope=a}(func||(func={}));var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),null==t.ins&&(t.ins=this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var i=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",i),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){egret.error(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadResource()];case 1:return e.sent(),[4,platform.getUserInfo()];case 2:return e.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 3:return e.sent(),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,5,,6]),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,RES.loadGroup("loading",0)];case 2:return i.sent(),[4,this.loadTheme()];case 3:return i.sent(),e=new LoadingUI,this.addChild(e),[4,RES.loadGroup("preload",0,e)];case 4:return i.sent(),this.removeChild(e),[3,6];case 5:return t=i.sent(),console.error(t),[3,6];case 6:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,i){var r=new eui.Theme("resource/default.thm.json",e.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){RandomMgr.ins().init(),SoundMgr.ins().init(),this.mainView=new MainView,this.addChild(this.mainView),GameModel.ins().init(),GameMgr.ins().init()},t}(eui.UILayer);__reflect(Main.prototype,"Main");var GameConst=function(){function e(){}return e.isDebug=!1,e.appVersion="0.18071101",e.randomSeed="0123456789ABCDEF",e.collisionGroup_ball=Math.pow(2,0),e.collisionGroup_wall=Math.pow(2,1),e.collisionGroup_brick=Math.pow(2,2),e.material_ball=new p2.Material(1),e.material_wall=new p2.Material(2),e.material_brick=new p2.Material(3),e.map_Rectangle=new egret.Rectangle(25,100,700,1e3),e.ball_radius=20,e.ball_fire_speed=2e3,e.ball_InitPos=[(e.map_Rectangle.width-e.map_Rectangle.x)/2,e.map_Rectangle.y+e.map_Rectangle.height-e.ball_radius-10],e.brick_radius=50,e}();__reflect(GameConst.prototype,"GameConst");var MainView=function(e){function t(){var t=e.call(this)||this;return t._views={},t.skinName="MainViewSkin",t}return __extends(t,e),t.prototype.partAdded=function(t,i){e.prototype.partAdded.call(this,t,i)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.percentWidth=this.percentHeight=100;for(var t=[{view:GameView,show:!0,parent:this.layer_base},{view:GameOverView,show:!1,parent:this.layer_base}],i=0,r=t;i<r.length;i++){var n=r[i],a=egret.getQualifiedClassName(n.view);this._views[a]=new n.view,this._views[a].setParent(n.parent),n.show&&this._views[a].show()}},t.prototype.getView=function(e){return"string"==typeof e?this._views[e]:this._views[egret.getQualifiedClassName(e)]},t}(eui.Component);__reflect(MainView.prototype,"MainView",["eui.UIComponent","egret.DisplayObject"]);var EffectMgr=function(e){function t(){var t=e.call(this)||this;return t._effectReses={},t._effectFactory={},t}return __extends(t,e),t.ins=function(){return e.ins.call(this)},t.prototype.init=function(){this._effectReses={}},t.prototype.getMovieClip=function(e){return this._effectReses[e]||(this._effectReses[e]=this.newMovieClip(e)),this._effectReses[e]},t.prototype.newMovieClip=function(e){if(!this._effectFactory[e]){var t=RES.getRes(e+"_json"),i=RES.getRes(e+"_png");this._effectFactory[e]=new egret.MovieClipDataFactory(t,i)}var r=this._effectFactory[e],n=new egret.MovieClip(r.generateMovieClipData(e));return n.addEventListener(egret.Event.COMPLETE,function(e){func.removeFromParent(n)},this),n.touchEnabled=!1,n},t.RES_EFFECT_COINT="effect_coin",t}(SingletonClass);__reflect(EffectMgr.prototype,"EffectMgr");var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.skinName="LoadingUISkin",t}return __extends(t,e),t.prototype.onProgress=function(e,t){this.img_progress&&(this.img_progress.width=596*(e/t))},t.prototype.partAdded=function(t,i){e.prototype.partAdded.call(this,t,i)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.horizontalCenter=this.verticalCenter=0,this.lb_version.text="version:"+GameConst.appVersion},t}(BaseView);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var LocalStorageMgr=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.ins=function(){return e.ins.call(this)},t.prototype.setLocal=function(e,t){egret.localStorage.setItem(e,t)},t.prototype.getLocal=function(e,t){var i=egret.localStorage.getItem(e);if(null==i)return t;switch(typeof t){case"boolean":return"true"==i;case"number":return Number(i)}return i},t.KEY_MUSIC_VOLUME="KEY_MUSIC_VOLUME",t.KEY_SOUND_VOLUME="KEY_SOUND_VOLUME",t}(SingletonClass);__reflect(LocalStorageMgr.prototype,"LocalStorageMgr");var RandomSeedType;!function(e){e[e.UNDEFINE=0]="UNDEFINE"}(RandomSeedType||(RandomSeedType={}));var RandomMgr=function(e){function t(){var t=e.call(this)||this;return t._seeds=[],t._seedIndex=[],t._selectedIndexes=[],t}return __extends(t,e),t.ins=function(){return e.ins.call(this)},t.prototype.init=function(){var e=[RandomSeedType.UNDEFINE];this._seeds=[],this._selectedIndexes=[],this._seedIndex=[];for(var t=0,i=e;t<i.length;t++){var r=i[t];this._seeds[r]=[],this._selectedIndexes[r]=[],this._seedIndex[r]=0}for(var n=0;n<GameConst.randomSeed.length;n++){var a=parseInt(GameConst.randomSeed[n],36)||0;a=(9301*a+49297)%1048576||0;for(var o=0,s=e;o<s.length;o++){var r=s[o];this._seeds[r].push(a)}}},t.prototype.randomNum=function(e,t,i){void 0===i&&(i=RandomSeedType.UNDEFINE),e>t&&(t=e);var r=this._seedIndex[i]%GameConst.randomSeed.length,n=e+this._seeds[i][r]%(t-e+1);return this._seeds[i][r]=(9301*this._seeds[i][r]+49297)%1048576||0,this._seedIndex[i]++,this._selectedIndexes[i].push(n),n},t}(SingletonClass);__reflect(RandomMgr.prototype,"RandomMgr");var SoundMgr=function(e){function t(){var t=e.call(this)||this;return t._isPlayMusic=!1,t._musicVolume=1,t._soundVolume=1,t._soundReses={},t}return __extends(t,e),Object.defineProperty(t.prototype,"musicVolume",{get:function(){return this._musicVolume},set:function(e){this._musicVolume=e,this._isPlayMusic&&(this._bgChannel.volume=e),LocalStorageMgr.ins().setLocal(LocalStorageMgr.KEY_MUSIC_VOLUME,e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"soundVolume",{get:function(){return this._soundVolume},set:function(e){this._soundVolume=e,this._isPlayMusic&&(this._bgChannel.volume=e),LocalStorageMgr.ins().setLocal(LocalStorageMgr.KEY_SOUND_VOLUME,e)},enumerable:!0,configurable:!0}),t.ins=function(){return e.ins.call(this)},t.prototype.init=function(){this._soundReses={};var e=RES.getRes(t.RES_BG);e&&e.play&&(this._bgChannel=e.play(),this._bgChannel.volume=0,this._isPlayMusic=!1),this.soundVolume=LocalStorageMgr.ins().getLocal(LocalStorageMgr.KEY_SOUND_VOLUME,1),this.musicVolume=LocalStorageMgr.ins().getLocal(LocalStorageMgr.KEY_MUSIC_VOLUME,1)},t.prototype.resetData=function(){this.changeBg(t.RES_BG)},t.prototype.playSoundEffect=function(e){this._soundReses[e]||(this._soundReses[e]=RES.getRes(e));var t=this._soundReses[e];if(t&&t.play){var i=t.play(0,1);i.volume=this._soundVolume}},t.prototype.playBg=function(e){void 0===e&&(e=!0),this._isPlayMusic=e,this._bgChannel&&(this._bgChannel.volume=e?this._musicVolume:0)},t.prototype.changeBg=function(e){this._bgChannel&&this._bgChannel.stop();var t=RES.getRes(e);t&&t.play&&(this._bgChannel=t.play(),this._bgChannel.volume=this._isPlayMusic?this._musicVolume:0)},t.RES_V_DOWN="v_down_mp3",t.RES_BG="bg_mp3",t}(SingletonClass);__reflect(SoundMgr.prototype,"SoundMgr");var GameModel=function(e){function t(){var t=e.call(this)||this;return t._level=0,t}return __extends(t,e),t.ins=function(){return e.ins.call(this)},Object.defineProperty(t.prototype,"level",{get:function(){return this._level},set:function(e){this._level;this._level=e,this._gameView.updateLevelView()},enumerable:!0,configurable:!0}),t.prototype.init=function(){this._gameView=Main.ins.mainView.getView(GameView),this.resetData()},t.prototype.resetData=function(){this.level=0},t}(SingletonClass);__reflect(GameModel.prototype,"GameModel");var GameOverView=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,i){e.prototype.partAdded.call(this,t,i)},t.prototype.childrenCreated=function(){var t=this;e.prototype.childrenCreated.call(this),this.addTouchTapEvent(this.btn_reset,function(){t.hide(),GameMgr.ins().resetGame()})},t}(BaseView);__reflect(GameOverView.prototype,"GameOverView");var GameView=function(e){function t(){var t=e.call(this)||this;return t._img_dangers=[],t._img_guide_points=[],t.skinName="GameViewSkin",t._needShowEffect=!1,t}return __extends(t,e),t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.createDebugView(),this.init(),this.lb_version.text="v."+GameConst.appVersion,this.gp_touch.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this),this.gp_touch.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this),this.gp_touch.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this),this.gp_touch.addEventListener(egret.TouchEvent.TOUCH_CANCEL,this.onTouchCancel,this),this.gp_touch.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onTouchCancel,this),this.addTouchTapEvent(this.btn_reset,function(){GameMgr.ins().resetGame()})},t.prototype.createDebugView=function(){this._p2DebugView=new P2DebugDrawView(GameMgr.ins().world);var e=new egret.Sprite;this.gp_test.addChild(e),this._p2DebugView.setSprite(e)},t.prototype.init=function(){var e=GameConst.map_Rectangle,t=GameConst.brick_radius;this.img_game_bg.x=this.gp_touch.x=GameConst.map_Rectangle.x,this.img_game_bg.y=this.gp_touch.y=GameConst.map_Rectangle.y,this.img_game_bg.width=this.gp_touch.width=GameConst.map_Rectangle.width,this.img_game_bg.height=this.gp_touch.height=GameConst.map_Rectangle.height,this.gp_touch.height=this.gp_touch.height-2*GameConst.ball_radius,this.img_game_bg.width+=20;for(var i=e.width/(2*t),r=0;i>r;r++){var n=[e.x+(2*r+1)*t,-1*t+e.y+e.height],a=new eui.Image("img_danger_png");a.visible=a.touchEnabled=!1,a.width=a.height=2*t,a.anchorOffsetX=a.anchorOffsetY=t,a.x=n[0],a.y=n[1],this.gp_map.addChild(a),this._img_dangers.push(a)}for(var r=0;40>r;r++){var a=new eui.Image("game_img_guildline_0_png");a.visible=a.touchEnabled=!1,a.width=a.height=16,a.anchorOffsetX=a.anchorOffsetY=8,this.gp_map.addChild(a),this._img_guide_points.push(a)}},t.prototype.updateLevelView=function(){var e=GameModel.ins().level;this.lb_level.text=""+e},t.prototype.updateBallCountView=function(e,t){this.lb_ball_count.x=t,this.lb_ball_count.text=""+e,this.lb_ball_count.y=GameConst.map_Rectangle.y+GameConst.map_Rectangle.height},t.prototype.resetView=function(){},t.prototype.nextLevelView=function(){for(var e=GameConst.map_Rectangle,t=-3*GameConst.brick_radius+e.y+e.height,i=0,r=this._img_dangers;i<r.length;i++){var n=r[i];n.visible=!1,egret.Tween.removeTweens(n),n.alpha=1}for(var a=0,o=GameMgr.ins().bricks;a<o.length;a++){var s=o[a];if(s.position[1]>=t&&s.brickType==BrickType.normal)for(var l=0,h=this._img_dangers;l<h.length;l++){var n=h[l];if(n.x==s.position[0]){n.visible=!0,egret.Tween.get(n,{loop:!0}).to({alpha:0},1e3);break}}}},t.prototype.playAddSpeedEffect=function(){for(var e=egret.Tween.get(this.img_add_speed),t=0;2>t;t++)e=e.to({alpha:1},500).to({alpha:0},500)},t.prototype.onTouchBegin=function(e){GameMgr.ins().status==GameStatus.Ready&&this.calculateGuidePointsLine(e.stageX,e.stageY)},t.prototype.onTouchMove=function(e){GameMgr.ins().status==GameStatus.Ready&&this.calculateGuidePointsLine(e.stageX,e.stageY)},t.prototype.onTouchTap=function(e){GameMgr.ins().status==GameStatus.Ready&&GameMgr.ins().fireBall(e.stageX,e.stageY);for(var t=0,i=this._img_guide_points;t<i.length;t++){var r=i[t];r.visible=!1}},t.prototype.onTouchCancel=function(e){for(var t=0,i=this._img_guide_points;t<i.length;t++){var r=i[t];r.visible=!1}},t.prototype.calculateGuidePointsLine=function(e,t){var i=GameConst.map_Rectangle,r=GameMgr.ins().ballInitPos,n=r[0],a=r[1],o=(t-a)/(e-n),s=a-n*o,l=(i.y-s)/o;l=l<i.x?i.x:l>i.x+i.width?i.x+i.width:l;for(var h=(l-n)/this._img_guide_points.length*1.5,c=0;c<this._img_guide_points.length;c++){var p=this._img_guide_points[c];p.x=n+h*c,p.y=o*p.x+s,p.x<i.x?p.x=2*i.x-p.x:p.x>i.x+i.width&&(p.x=2*(i.x+i.width)-p.x),p.y<i.y&&(p.y=2*i.y-p.y),p.visible=!0}},t.prototype.update=function(){this._p2DebugView.drawDebug()},t}(BaseView);__reflect(GameView.prototype,"GameView");var P2DebugDrawView=function(){function e(e){this.COLOR_D_SLEEP=10066329,this.COLOR_D_WAKE=15053490,this.COLOR_K=10329589,this.COLOR_S=8381823,this.lineWidth=1,this.world=e}return e.prototype.setSprite=function(e){this.sprite=e},e.prototype.setLineWidth=function(e){this.lineWidth=e},e.prototype.drawDebug=function(){this.sprite.graphics.clear();for(var e=this.world.bodies.length,t=0;e>t;t++)for(var i=this.world.bodies[t],r=0;r<i.shapes.length;r++){var n=i.shapes[r];n instanceof p2.Box?this.drawBox(n,i):n instanceof p2.Convex?this.drawConvex(n,i):n instanceof p2.Circle?this.drawCircle(n,i):n instanceof p2.Line?this.drawLine(n,i):n instanceof p2.Particle?this.drawParticle(n,i):n instanceof p2.Plane?this.drawPlane(n,i):n instanceof p2.Capsule?this.drawCapsule(n,i):n instanceof p2.Heightfield&&this.drawHeightfield(n,i)}},e.prototype.drawRay=function(e,t,i){var r=this.sprite.graphics;r.lineStyle(this.lineWidth,i),r.moveTo(e[0],e[1]),r.lineTo(t[0],t[1]),r.endFill()},e.prototype.drawBox=function(e,t){this.drawConvex(e,t)},e.prototype.drawCircle=function(e,t){var i=this.getColor(t),r=this.sprite.graphics;r.lineStyle(this.lineWidth,i),r.beginFill(i,.5);var n=e.position[0],a=e.position[1],o=[];t.toWorldFrame(o,[n,a]),r.drawCircle(o[0],o[1],e.radius);var s=n+e.radius,l=a+0,h=new Array;t.toWorldFrame(h,[s,l]),r.moveTo(o[0],o[1]),r.lineTo(h[0],h[1]),r.endFill()},e.prototype.drawCapsule=function(e,t){var i=this.getColor(t),r=e.position[0],n=e.position[1],a=e.angle,o=e.length,s=e.radius,l=new Array,h=new Array,c=new Array,p=new Array,u=new Array,d=new Array;p2.vec2.rotate(l,[-o/2,-s],a),p2.vec2.rotate(h,[o/2,-s],a),p2.vec2.rotate(c,[o/2,s],a),p2.vec2.rotate(p,[-o/2,s],a),p2.vec2.rotate(u,[o/2,0],a),p2.vec2.rotate(d,[-o/2,0],a);var _=new Array,g=new Array,f=new Array,m=new Array,y=new Array,v=new Array;t.toWorldFrame(_,[r+l[0],n+l[1]]),t.toWorldFrame(g,[r+h[0],n+h[1]]),t.toWorldFrame(f,[r+c[0],n+c[1]]),t.toWorldFrame(m,[r+p[0],n+p[1]]),t.toWorldFrame(y,[r+u[0],n+u[1]]),t.toWorldFrame(v,[r+d[0],n+d[1]]);var w=this.sprite.graphics;w.lineStyle(this.lineWidth,i),w.beginFill(i,.5),w.drawCircle(y[0],y[1],s),w.endFill(),w.lineStyle(this.lineWidth,i),w.beginFill(i,.5),w.drawCircle(v[0],v[1],s),w.endFill(),w.lineStyle(this.lineWidth,i),w.beginFill(i,.5),w.moveTo(_[0],_[1]),w.lineTo(g[0],g[1]),w.lineTo(f[0],f[1]),w.lineTo(m[0],m[1]),w.endFill()},e.prototype.drawLine=function(e,t){var i=this.getColor(t),r=e.position[0],n=e.position[1],a=e.angle,o=e.length,s=new Array,l=new Array;p2.vec2.rotate(s,[-o/2,0],a),p2.vec2.rotate(l,[o/2,0],a);var h=[],c=[];t.toWorldFrame(h,[r+s[0],n+s[1]]),t.toWorldFrame(c,[r+l[0],n+l[1]]);var p=this.sprite.graphics;p.lineStyle(this.lineWidth,i),p.moveTo(h[0],h[1]),p.lineTo(c[0],c[1]),p.endFill()},e.prototype.drawHeightfield=function(e,t){var i=this.getColor(t),r=e.heights,n=r.length,a=e.elementWidth;if(n>0){var o=e.position[0],s=e.position[1],l=[],h=[],c=0,p=this.sprite.graphics;p.lineStyle(this.lineWidth,i),p.beginFill(i,.5),t.toWorldFrame(h,[o+c,s-100]),p.moveTo(h[0],h[1]);for(var u=0;n>u;u++){var d=r[u];t.toWorldFrame(l,[o+c+u*a,s+d]),p.lineTo(l[0],l[1])}t.toWorldFrame(l,[o+c+n*a,s-100]),p.lineTo(l[0],l[1]),p.endFill()}},e.prototype.drawParticle=function(e,t){var i=this.getColor(t),r=this.sprite.graphics;r.lineStyle(this.lineWidth,i),r.beginFill(i,.5);var n=e.position[0],a=e.position[1],o=t.position[0]+n,s=t.position[1]+a;r.drawCircle(o,s,this.lineWidth),r.endFill(),r.lineStyle(this.lineWidth,i),r.drawCircle(o,s,5*this.lineWidth),r.endFill()},e.prototype.drawConvex=function(e,t){var i=this.getColor(t),r=e.vertices.length,n=this.sprite.graphics;n.lineStyle(this.lineWidth,i),n.beginFill(i,.5);var a=e.position[0],o=e.position[1],s=new Array;t.toWorldFrame(s,[a,o]);var l=e.vertices[0],h=[a+l[0],o+l[1]],c=new Array;t.toWorldFrame(c,h),n.moveTo(s[0],s[1]),n.lineTo(c[0],c[1]);for(var p=1;r>=p;p++)l=e.vertices[p%r],h=[a+l[0],o+l[1]],t.toWorldFrame(c,h),n.lineTo(c[0],c[1]);n.endFill()},e.prototype.drawPlane=function(e,t){var i=this.COLOR_D_SLEEP,r=this.sprite.graphics;r.lineStyle(this.lineWidth,i),r.beginFill(i,1);var n=e.position[0],a=e.position[1],o=e.angle,s=new Array,l=new Array,h=[],c=[];p2.vec2.rotate(s,[-1e3,0],o),t.toWorldFrame(h,[n+s[0],a+s[1]]),r.moveTo(h[0],h[1]),p2.vec2.rotate(l,[1e3,0],o),t.toWorldFrame(c,[n+l[0],a+l[1]]),r.lineTo(c[0],c[1]),p2.vec2.rotate(l,[1e3,-1e3],o),t.toWorldFrame(c,[n+l[0],a+l[1]]),r.lineTo(c[0],c[1]),p2.vec2.rotate(l,[-1e3,-1e3],o),t.toWorldFrame(c,[n+l[0],a+l[1]]),r.lineTo(c[0],c[1]),p2.vec2.rotate(l,[-1e3,-0],o),t.toWorldFrame(c,[n+l[0],a+l[1]]),r.lineTo(c[0],c[1]),r.endFill()},e.prototype.getColor=function(e){var t=this.COLOR_D_SLEEP;return e.type==p2.Body.KINEMATIC?t=this.COLOR_K:e.type==p2.Body.STATIC?t=this.COLOR_S:e.sleepState==p2.Body.AWAKE&&(t=this.COLOR_D_WAKE),t},e}();__reflect(P2DebugDrawView.prototype,"P2DebugDrawView");var BallStatus;!function(e){e[e.ready=1]="ready",e[e.onfire=2]="onfire",e[e.onland=3]="onland"}(BallStatus||(BallStatus={}));var BallItem=function(e){function t(t){var i=e.call(this,t)||this;i._status=BallStatus.ready,i.addShape(new p2.Circle({radius:GameConst.ball_radius,material:GameConst.material_ball})),i.shapes[0].collisionGroup=GameConst.collisionGroup_ball,i.shapes[0].collisionMask=GameConst.collisionGroup_wall|GameConst.collisionGroup_brick,i.inertia=0;var r=new eui.Image("ball_png");return r.touchEnabled=!1,r.width=r.height=2*GameConst.ball_radius,r.anchorOffsetX=r.anchorOffsetY=GameConst.ball_radius,i.displays=[r],i}return __extends(t,e),Object.defineProperty(t.prototype,"status",{get:function(){return this._status
},set:function(e){this._status=e},enumerable:!0,configurable:!0}),t.prototype.resetBall=function(){var e=GameConst.map_Rectangle;this.setZeroForce(),this.velocity=[0,0],this.position[0]<e.x+GameConst.ball_radius?this.position[0]=e.x+GameConst.ball_radius:this.position[0]>e.x+e.width-GameConst.ball_radius&&(this.position[0]=e.x+e.width-GameConst.ball_radius),this.position[1]=GameMgr.ins().ballInitPos[1]},t}(BaseP2Body);__reflect(BallItem.prototype,"BallItem");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,new Promise(function(e,t){GameConst.randomSeed=Math.round(1e3+8999*Math.random()).toString(),e()})]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var BrickType;!function(e){e[e.normal=1]="normal",e[e.ball=2]="ball",e[e.row_and_col=3]="row_and_col",e[e.row=4]="row",e[e.col=5]="col"}(BrickType||(BrickType={}));var BrickItem=function(e){function t(t){var i=e.call(this,t)||this;return i._hp=0,i._brickType=BrickType.normal,i.displays=[],i._brickType=t.brickType||BrickType.normal,i.getShape(),i.inertia=0,i._hp=t.hp||1,i._lb_hp=new eui.Label(""+i._hp),i._lb_hp.visible=i._brickType==BrickType.normal,i._lb_hp.width=i._lb_hp.height=200,i._lb_hp.verticalAlign=egret.VerticalAlign.MIDDLE,i._lb_hp.textAlign=egret.HorizontalAlign.CENTER,i._lb_hp.touchEnabled=!1,i._lb_hp.anchorOffsetX=i._lb_hp.anchorOffsetY=100,i.displays.push(i._lb_hp),i}return __extends(t,e),Object.defineProperty(t.prototype,"hp",{get:function(){return this._hp},set:function(e){var t=this._hp;this._hp=e,this._lb_hp.text=""+e,t>e&&egret.Tween.get(this.displays[0]).to({alpha:.2},100).to({alpha:1},100),0>=e&&this.dispose()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"brickType",{get:function(){return this._brickType},enumerable:!0,configurable:!0}),t.prototype.getShape=function(){var e,t=new eui.Image;switch(t.touchEnabled=!1,this._brickType){case BrickType.ball:e=new p2.Circle({radius:GameConst.ball_radius,material:GameConst.material_brick}),t.source="ball_png",t.width=t.height=2*GameConst.ball_radius,t.anchorOffsetX=t.anchorOffsetY=GameConst.ball_radius,e.collisionGroup=GameConst.collisionGroup_brick;break;case BrickType.row_and_col:e=new p2.Circle({radius:GameConst.ball_radius,material:GameConst.material_brick}),t.source="img_brick_effect_row_col_png",t.width=t.height=2*GameConst.ball_radius,t.anchorOffsetX=t.anchorOffsetY=GameConst.ball_radius,e.collisionGroup=GameConst.collisionGroup_brick;break;case BrickType.row:e=new p2.Circle({radius:GameConst.ball_radius,material:GameConst.material_brick}),t.source="img_brick_effect_row_png",t.width=t.height=2*GameConst.ball_radius,t.anchorOffsetX=t.anchorOffsetY=GameConst.ball_radius,e.collisionGroup=GameConst.collisionGroup_brick;break;case BrickType.col:e=new p2.Circle({radius:GameConst.ball_radius,material:GameConst.material_brick}),t.source="img_brick_effect_col_png",t.width=t.height=2*GameConst.ball_radius,t.anchorOffsetX=t.anchorOffsetY=GameConst.ball_radius,e.collisionGroup=GameConst.collisionGroup_brick;break;default:var i=RandomMgr.ins().randomNum(1,20),r=GameConst.brick_radius;switch(t.width=t.height=2*r,t.anchorOffsetX=t.anchorOffsetY=r,i){case 2:e=new p2.Convex({vertices:[[r,-r],[r,r],[-r,r]],material:GameConst.material_brick}),t.source="triangle_png",t.scaleX=-1;break;case 3:e=new p2.Convex({vertices:[[-r,-r],[r,r],[-r,r]],material:GameConst.material_brick}),t.source="triangle_png";break;case 4:e=new p2.Convex({vertices:[[-r,-r],[r,-r],[-r,r]],material:GameConst.material_brick}),t.source="triangle_png",t.scaleY=-1;break;case 5:e=new p2.Convex({vertices:[[-r,-r],[r,-r],[r,r]],material:GameConst.material_brick}),t.source="triangle_png",t.scaleY=t.scaleX=-1;break;case 6:case 7:case 8:case 9:e=new p2.Box({width:r*Math.sqrt(2),height:r*Math.sqrt(2),material:GameConst.material_brick}),t.source="square_png",t.width=t.height=r*Math.sqrt(2),t.anchorOffsetX=t.anchorOffsetY=r*Math.sqrt(2)/2,this.angularVelocity=RandomMgr.ins().randomNum(-5,5),this.fixedRotation=!1;break;default:e=new p2.Box({width:2*r,height:2*r,material:GameConst.material_brick}),t.source="square_png"}e.collisionGroup=GameConst.collisionGroup_brick}this.addShape(e),this.displays.push(t)},t.prototype.impactBall=function(e){var t=GameConst.map_Rectangle;switch(this._brickType){case BrickType.ball:this.hp--;var i=GameMgr.ins().createBallItem(this.position,[e.velocity[0],e.velocity[1]]);i.status=BallStatus.onfire;break;case BrickType.row_and_col:if(this.displays[0].parent){var r=new eui.Image("razer_v_png");this.displays[0].parent.addChild(r),r.height=t.height,r.width=this.displays[0].width,r.anchorOffsetX=r.width/2,r.x=this.displays[0].x,r.y=t.y,egret.Tween.get(r).to({alpha:0},500).call(function(){func.removeFromParent(r)});var n=new eui.Image("razer_h_png");this.displays[0].parent.addChild(n),n.height=this.displays[0].height,n.width=t.width,n.anchorOffsetY=n.height/2,n.y=this.displays[0].y,n.x=t.x,egret.Tween.get(n).to({alpha:0},500).call(function(){func.removeFromParent(n)})}for(var a=0,o=GameMgr.ins().bricks;a<o.length;a++){var s=o[a];s.brickType==BrickType.normal&&(s.position[0]===this.position[0]||s.position[1]===this.position[1])&&(s.hp=0)}this.hp--;break;case BrickType.col:if(this.displays[0].parent){var l=new eui.Image("razer_v_png");this.displays[0].parent.addChild(l),l.height=t.height,l.width=this.displays[0].width,l.anchorOffsetX=l.width/2,l.x=this.displays[0].x,l.y=t.y,egret.Tween.get(l).to({alpha:0},500).call(function(){func.removeFromParent(l)})}for(var h=0,c=GameMgr.ins().bricks;h<c.length;h++){var s=c[h];s.brickType==BrickType.normal&&s.position[0]===this.position[0]&&(s.hp=0)}this.hp--;break;case BrickType.row:if(this.displays[0].parent){var p=new eui.Image("razer_h_png");this.displays[0].parent.addChild(p),p.height=this.displays[0].height,p.width=t.width,p.anchorOffsetY=p.height/2,p.y=this.displays[0].y,p.x=t.x,egret.Tween.get(p).to({alpha:0},500).call(function(){func.removeFromParent(p)})}for(var u=0,d=GameMgr.ins().bricks;u<d.length;u++){var s=d[u];s.brickType==BrickType.normal&&s.position[1]===this.position[1]&&(s.hp=0)}this.hp--;break;case BrickType.normal:this.hp--}},t}(BaseP2Body);__reflect(BrickItem.prototype,"BrickItem");