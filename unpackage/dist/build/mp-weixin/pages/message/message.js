(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/message"],{"1a26":function(t,n,e){},"54d3":function(t,n,e){"use strict";e.r(n);var a=e("6cdd"),r=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=r.a},5887:function(t,n,e){"use strict";e.r(n);var a=e("98a5"),r=e("54d3");for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);e("a7fa");var i,u=e("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=c.exports},"6cdd":function(t,n,e){"use strict";(function(t){function e(t){return i(t)||o(t)||r(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"===typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function i(t){if(Array.isArray(t))return u(t)}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c={data:function(){return{info:[],params:{cityCode:"",deptCode:"",page:1,keyword:"",sort:0,caseCode:""},pageSize:20,header:{Authorization:"Bearer 4733a2eb-0723-41ef-bfa2-2ade373a37c0"},leftData:[],rightData:[],flag:!1}},components:{},methods:{getData:function(){var n=this;t.showLoading({title:"加载中...",mask:!0}),t.request({url:"https://api.jiukangguoji.cn/search/v2/recommend-doctor/list",data:this.params,header:this.header,method:"POST",success:function(a){t.hideLoading(),console.log(n.params),n.info=a.data.data,n.info=[].concat(e(n.info),e(a.data.data))},fail:function(n){t.hideLoading()},complete:function(){}})},onReachBottom:function(){if(console.log("触底请求下一页"),this.info.length<this.params.page*this.pageSize)return console.log(this.info.length),this.flag=!0;this.params.page++,this.getData()}},onLoad:function(){this.getData()}};n.default=c}).call(this,e("543d")["default"])},"8d9f":function(t,n,e){"use strict";(function(t){e("ecea");a(e("66fd"));var n=a(e("5887"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"98a5":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var a={uniCard:function(){return e.e("uni_modules/uni-card/components/uni-card/uni-card").then(e.bind(null,"0a51"))},uAvatar:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(e.bind(null,"5e48"))}},r=function(){var t=this,n=t.$createElement;t._self._c},o=[]},a7fa:function(t,n,e){"use strict";var a=e("1a26"),r=e.n(a);r.a}},[["8d9f","common/runtime","common/vendor"]]]);