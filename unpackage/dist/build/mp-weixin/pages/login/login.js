(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"74c4":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return a}));var a={uAvatar:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(t.bind(null,"5e48"))}},o=function(){var e=this,n=e.$createElement;e._self._c},c=[]},7547:function(e,n,t){"use strict";(function(e){t("ecea");a(t("66fd"));var n=a(t("cc75"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"98b4":function(e,n,t){"use strict";t.r(n);var a=t("e315"),o=t.n(a);for(var c in a)"default"!==c&&function(e){t.d(n,e,(function(){return a[e]}))}(c);n["default"]=o.a},b8c9:function(e,n,t){},cc75:function(e,n,t){"use strict";t.r(n);var a=t("74c4"),o=t("98b4");for(var c in o)"default"!==c&&function(e){t.d(n,e,(function(){return o[e]}))}(c);t("e813");var i,r=t("f0c5"),u=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"20bea5f4",null,!1,a["a"],i);n["default"]=u.exports},e315:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=c(t("a34a")),o=t("0358");function c(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,a,o,c,i){try{var r=e[c](i),u=r.value}catch(s){return void t(s)}r.done?n(u):Promise.resolve(u).then(a,o)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(a,o){var c=e.apply(n,t);function r(e){i(c,a,o,r,u,"next",e)}function u(e){i(c,a,o,r,u,"throw",e)}r(void 0)}))}}var u={name:"Login",data:function(){return{tips:null,isShow:!1,SessionKey:"",openid:"",unionid:"",nickName:"",avatarUrl:"",code:"",pageOption:{backpage:"/pages/home/index",backtype:"1"},phone:e.getStorageSync("phone")||!1}},methods:{wxGetUserInfo:function(){var n=this;e.getSetting({success:function(t){t.authSetting["scope.userInfo"]?console.log("当前已授权"):console.log("当前未授权"),e.getUserProfile({desc:"Wexin",success:function(t){console.log(t),n.nickName=t.userInfo.nickName,n.avatarUrl=t.userInfo.avatarUrl,e.setStorageSync("nickName",t.userInfo.nickName),e.setStorageSync("avatarUrl",t.userInfo.avatarUrl),n.updateUserInfo(n.code)},fail:function(n){console.log(n),e.showModal({title:"温馨提示",content:"检测到您未进行用户授权，将无法获得该小程序的完整体验！",showCancel:!1,success:function(e){}})}})}})},login:function(){var n=this;e.showLoading({title:"登录中..."}),e.login({provider:"weixin",success:function(t){n.code=t.code,e.hideLoading()},fail:function(n){console.log("失败"),e.showModal({title:"温馨提示",content:n.errMsg,showCancel:!1,success:function(e){}})}})},updateUserInfo:function(){var n=arguments,t=this;return r(a.default.mark((function c(){var i,r,u,s;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=n.length>0&&void 0!==n[0]?n[0]:"",r=t,u={nickName:r.nickName,headUrl:r.avatarUrl},a.next=5,(0,o.login)(u,i);case 5:s=a.sent,s.data?(console.log(s.data),e.setStorageSync("token",s.data.accessToken),e.setStorageSync("unionid",s.data.unionid),e.setStorageSync("openId",s.data.openid),s.data.bindingStatus&&t.phone?(console.log(r.pageOption.backpage),1==r.pageOption.backtype?e.switchTab({url:r.pageOption.backpage}):e.redirectTo({url:r.pageOption.backpage})):e.redirectTo({url:"/pages/login/loginPhone?backpage="+r.pageOption.backpage+"&backtype="+r.pageOption.backtype})):e.switchTab({url:"/pages/home/index"});case 7:case"end":return a.stop()}}),c)})))()}},onLoad:function(e){e.backpage&&(this.pageOption.backpage=e.backpage),e.backtype&&(this.pageOption.backtype=e.backtype),this.login()}};n.default=u}).call(this,t("543d")["default"])},e813:function(e,n,t){"use strict";var a=t("b8c9"),o=t.n(a);o.a}},[["7547","common/runtime","common/vendor"]]]);