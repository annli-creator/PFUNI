(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/Swipe/Swipe"],{"0c12":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"0ee7":function(t,e,n){"use strict";n.r(e);var o=n("6b04"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a},"274e":function(t,e,n){},2932:function(t,e,n){"use strict";var o=n("274e"),i=n.n(o);i.a},"51a1":function(t,e,n){"use strict";n.r(e);var o=n("0c12"),i=n("0ee7");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("2932");var d=n("2877"),r=Object(d["a"])(i["default"],o["a"],o["b"],!1,null,"33d4b47e",null);e["default"]=r.exports},"6b04":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"swiper",props:{info:{type:Array,default:function(){return[]}},current:{info:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"none",border:"1px #fff solid",selectedBackgroundColor:"#f8f8f8",selectedBorder:"1px #fff solid"}}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}}};e.default=o}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/Swipe/Swipe-create-component',
    {
        'components/Swipe/Swipe-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("51a1"))
        })
    },
    [['components/Swipe/Swipe-create-component']]
]);                
