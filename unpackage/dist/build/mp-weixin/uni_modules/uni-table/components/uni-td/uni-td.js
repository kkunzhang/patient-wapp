(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-table/components/uni-td/uni-td"],{"51d9":function(t,n,e){"use strict";var r=e("633d"),u=e.n(r);u.a},"633d":function(t,n,e){},"7bf3":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"uniTd",options:{virtualHost:!0},props:{width:{type:[String,Number],default:""},align:{type:String,default:"left"},rowspan:{type:[Number,String],default:1},colspan:{type:[Number,String],default:1}},data:function(){return{border:!1}},created:function(){this.root=this.getTable(),this.border=this.root.border},methods:{getTable:function(){var t=this.$parent,n=t.$options.name;while("uniTable"!==n){if(t=t.$parent,!t)return!1;n=t.$options.name}return t}}};n.default=r},9679:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=[]},ae5c:function(t,n,e){"use strict";e.r(n);var r=e("7bf3"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a},bec9:function(t,n,e){"use strict";e.r(n);var r=e("9679"),u=e("ae5c");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("51d9");var i,o=e("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);n["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-table/components/uni-td/uni-td-create-component',
    {
        'uni_modules/uni-table/components/uni-td/uni-td-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bec9"))
        })
    },
    [['uni_modules/uni-table/components/uni-td/uni-td-create-component']]
]);
