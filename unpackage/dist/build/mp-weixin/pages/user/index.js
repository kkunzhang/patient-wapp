(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/index"],{"0a4f":function(n,t,i){"use strict";i.r(t);var e=i("43a4"),o=i.n(e);for(var a in e)"default"!==a&&function(n){i.d(t,n,(function(){return e[n]}))}(a);t["default"]=o.a},"2daf":function(n,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return e}));var e={uAvatar:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(i.bind(null,"5e48"))},uniTitle:function(){return i.e("uni_modules/uni-title/components/uni-title/uni-title").then(i.bind(null,"a5d8"))},uniCard:function(){return i.e("uni_modules/uni-card/components/uni-card/uni-card").then(i.bind(null,"0a51"))},uniIcons:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(i.bind(null,"06f5"))}},o=function(){var n=this,t=n.$createElement;n._self._c},a=[]},"303b":function(n,t,i){"use strict";var e=i("e996"),o=i.n(e);o.a},"43a4":function(n,t,i){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=i("31d4"),o=i("4f40"),a=getApp().globalData,c=function(){i.e("pages/user/components/patien-card").then(function(){return resolve(i("f901"))}.bind(null,i)).catch(i.oe)},s={components:{patienCard:c},mixins:[o.getTenantPatientList],data:function(){return{openid:"",unionid:"",accessToken:a.accessToken,src:"/static/images/doctor.jpeg",nickName:n.getStorageSync("nickName")||!1,avatarUrl:n.getStorageSync("avatarUrl"),phone:n.getStorageSync("phone")||!1,navs:[{icon:"iconfont icon-ziyuan",title:" 就诊卡 ",path:"/static/images/register.png"},{icon:"iconfont icon-guanyuwomen",title:"健康档案",path:"/static/images/remote-outpatient.png"},{icon:"iconfont icon-tupian",title:"电子病历",path:"/static/images/remote-consultation.png"}],navs2:[{icon:"iconfont icon-ziyuan",title:"预约挂号",path:"/static/images/register.png"},{icon:"iconfont icon-guanyuwomen",title:"远程门诊",path:"/static/images/remote-outpatient.png"},{icon:"iconfont icon-tupian",title:"远程会诊",path:"/static/images/remote-consultation.png"},{icon:"iconfont icon-shipin",title:"处方订单",path:"/static/images/prescription.png"}],navs3:[{icon:"iconfont icon-ziyuan",title:"我的医生",path:"/static/images/my-doctor.png"},{icon:"iconfont icon-guanyuwomen",title:"我的关注",path:"/static/images/my-follow.png"},{icon:"iconfont icon-tupian",title:"我的评价",path:"/static/images/my-assess.png"},{icon:"iconfont icon-shipin",title:"系统设置",path:"/static/images/setting.png"},{icon:"iconfont icon-shipin",title:"电子发票",path:"/static/images/e-invoice.png"},{icon:"iconfont icon-shipin",title:"医保报销",path:"/static/images/insurance.png"},{icon:"iconfont icon-shipin",title:"地址管理",path:"/static/images/address.png"}]}},methods:{onEdit:function(){this.onNavigateTo("/pages/user/manage/index",2)},onClick:(0,e.debounce)((function(n){switch(n.title){case"预约挂号":this.onNavigateTo("/pages/registrationOrders/index");break;case"处方订单":this.onNavigateTo("/pages/prescriptionOrders/index");break;default:this.$tools.toast("敬请期待")}})),onLogin:function(){this.onNavigateTo("/pages/user/index",1)},onNavigateTo:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;this.checkLogin(t,i)&&n.navigateTo({url:t})}},onShow:function(){n.getStorageSync("phone")&&this.getTenantPatientList()}};t.default=s}).call(this,i("543d")["default"])},a416:function(n,t,i){"use strict";i.r(t);var e=i("2daf"),o=i("0a4f");for(var a in o)"default"!==a&&function(n){i.d(t,n,(function(){return o[n]}))}(a);i("303b");var c,s=i("f0c5"),u=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);t["default"]=u.exports},ca71:function(n,t,i){"use strict";(function(n){i("ecea");e(i("66fd"));var t=e(i("a416"));function e(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=i,n(t.default)}).call(this,i("543d")["createPage"])},e996:function(n,t,i){}},[["ca71","common/runtime","common/vendor"]]]);