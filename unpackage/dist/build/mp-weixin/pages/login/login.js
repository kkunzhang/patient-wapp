(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"63bf":function(e,n,t){"use strict";var o=t("7067"),a=t.n(o);a.a},"69d7":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return o}));var o={uAvatar:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(t.bind(null,"5e48"))}},a=function(){var e=this,n=e.$createElement;e._self._c},c=[]},7067:function(e,n,t){},7547:function(e,n,t){"use strict";(function(e){t("ecea");o(t("66fd"));var n=o(t("cc75"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"98b4":function(e,n,t){"use strict";t.r(n);var o=t("e315"),a=t.n(o);for(var c in o)"default"!==c&&function(e){t.d(n,e,(function(){return o[e]}))}(c);n["default"]=a.a},cc75:function(e,n,t){"use strict";t.r(n);var o=t("69d7"),a=t("98b4");for(var c in a)"default"!==c&&function(e){t.d(n,e,(function(){return a[e]}))}(c);t("63bf");var i,r=t("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"aa9d1d4c",null,!1,o["a"],i);n["default"]=u.exports},e315:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=c(t("a34a")),a=t("0358");function c(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,o,a,c,i){try{var r=e[c](i),u=r.value}catch(s){return void t(s)}r.done?n(u):Promise.resolve(u).then(o,a)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(o,a){var c=e.apply(n,t);function r(e){i(c,o,a,r,u,"next",e)}function u(e){i(c,o,a,r,u,"throw",e)}r(void 0)}))}}var u={name:"Login",data:function(){return{tips:null,isShow:!1,SessionKey:"",openid:"",unionid:"",nickName:"",avatarUrl:"",code:"",pageOption:{backpage:"/pages/home/index",backtype:"1"},phone:e.getStorageSync("phone")||!1}},methods:{wxGetUserInfo:function(){var n=this;e.getSetting({success:function(t){t.authSetting["scope.userInfo"]?console.log("当前已授权"):console.log("当前未授权"),e.getUserProfile({desc:"Wexin",success:function(t){console.log(t),n.nickName=t.userInfo.nickName,n.avatarUrl=t.userInfo.avatarUrl,e.setStorageSync("nickName",t.userInfo.nickName),e.setStorageSync("avatarUrl",t.userInfo.avatarUrl),n.updateUserInfo(n.code)},fail:function(n){console.log(n),e.showModal({title:"温馨提示",content:"检测到您未进行用户授权，将无法获得该小程序的完整体验！",showCancel:!1,success:function(e){}})}})}})},login:function(){var n=this;e.showLoading({title:"登录中..."}),e.login({provider:"weixin",success:function(t){n.code=t.code,e.hideLoading()},fail:function(n){console.log("失败"),e.showModal({title:"温馨提示",content:n.errMsg,showCancel:!1,success:function(e){}})}})},updateUserInfo:function(){var n=arguments,t=this;return r(o.default.mark((function c(){var i,r,u,s;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return i=n.length>0&&void 0!==n[0]?n[0]:"",r=t,u={nickName:r.nickName,headUrl:r.avatarUrl},o.next=5,(0,a.login)(u,i);case 5:s=o.sent,s.data?(console.log(s.data),e.setStorageSync("token",s.data.accessToken),e.setStorageSync("unionid",s.data.unionid),e.setStorageSync("openId",s.data.openid),s.data.bindingStatus&&t.phone?(console.log(r.pageOption.backpage),1==r.pageOption.backtype?e.switchTab({url:r.pageOption.backpage}):e.redirectTo({url:r.pageOption.backpage})):e.redirectTo({url:"/pages/login/loginPhone?backpage="+r.pageOption.backpage+"&backtype="+r.pageOption.backtype})):t.$tools.message("登陆接口错误");case 7:case"end":return o.stop()}}),c)})))()}},onLoad:function(e){e&&(this.pageOption=e),this.login()}};n.default=u}).call(this,t("543d")["default"])}},[["7547","common/runtime","common/vendor"]]]);