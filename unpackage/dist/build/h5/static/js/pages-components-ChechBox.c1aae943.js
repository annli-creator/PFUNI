(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-ChechBox"],{"33b5":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"h2"},[e._v("Checkbox 多选")]),n("v-uni-view",{staticClass:"tip"},[e._v("Checkbox组件主要用于多选，无需用户交互。"),n("strong",[e._v("注:")]),e._v("由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过")]),n("Checkbox",{attrs:{labelList:e.labelList},on:{getCheckBox:function(t){arguments[0]=t=e.$handleEvent(t),e.getCheckBox.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"h2"},[e._v("第二中样式")]),n("Checkbox",{attrs:{labelList:e.labelLists,skin:"box"},on:{getCheckBox:function(t){arguments[0]=t=e.$handleEvent(t),e.getCheckBox.apply(void 0,arguments)}}})],1)},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},6756:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("3ede"),o={components:{Checkbox:a.Checkbox},data:function(){return{labelList:[{name:"可爱",value:"0",checked:!0},{name:"性感",value:"1",checked:!1},{name:"温柔",value:"2",checked:!1},{name:"体贴",value:"3",checked:!1},{name:"漂亮",value:"4",checked:!1},{name:"温柔",value:"5",checked:!1},{name:"体贴",value:"6",checked:!1},{name:"漂亮",value:"7",checked:!1}],labelLists:[{name:"漂亮",value:"11",checked:!1},{name:"体贴",value:"23",checked:!1}]}},onLoad:function(e){},created:function(){},methods:{getCheckBox:function(e){console.log(e),console.log("到这里啦~~")}}};t.default=o},"8a0d":function(e,t,n){"use strict";var a=n("d7c5"),o=n.n(a);o.a},"8d40":function(e,t,n){"use strict";n.r(t);var a=n("33b5"),o=n("b6d5");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("8a0d");var c=n("2877"),r=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,"1836ca55",null);t["default"]=r.exports},b6d5:function(e,t,n){"use strict";n.r(t);var a=n("6756"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},d7c5:function(e,t,n){var a=n("f041");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("4f06").default;o("4ea69f30",a,!0,{sourceMap:!1,shadowMode:!1})},f041:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-1836ca55]{padding:%?40?%;box-sizing:border-box;font-size:%?14?%}.content .bnt[data-v-1836ca55]{position:relative;width:100%;background:#2b9939;color:#fff;height:%?60?%;line-height:%?60?%;margin:0 auto %?40?%;text-align:center;font-size:%?16?%;border-radius:%?10?%}.content .h2[data-v-1836ca55]{font-size:%?24?%;margin-bottom:%?10?%;font-weight:700}.content .h3[data-v-1836ca55]{font-size:%?20?%;margin:%?20?% auto;font-weight:700;color:red}.content .tip[data-v-1836ca55]{font-size:%?14?%;text-indent:%?15?%;margin:%?20?% auto}.content .pre[data-v-1836ca55]{background:#eee;color:#000;padding:%?20?% %?20?%;border-radius:%?10?%;margin-bottom:%?10?%;box-sizing:border-box;overflow:auto;word-wrap:normal}.content .pre element[data-v-1836ca55]{width:100%;display:block;height:100%}.content .pre .isCopy[data-v-1836ca55]{position:absolute;right:%?10?%;bottom:%?5?%;background:#55a532;color:#fff;padding:%?5?%;border-radius:%?2?%}.content .html[data-v-1836ca55],.content .js[data-v-1836ca55]{position:relative}.content .html[data-v-1836ca55]:before{content:"HTML";position:absolute;top:0;right:%?12?%;color:#999}.content .js[data-v-1836ca55]:before{content:"JS";position:absolute;top:0;right:%?12?%;color:#999}.content .title[data-v-1836ca55]{margin:%?20?% auto}.content .list[data-v-1836ca55]{border:%?1?% solid #eee;border-right:0;border-bottom:0;margin:%?20?% auto}.content .th[data-v-1836ca55]{background:#f8f8f8;display:-webkit-box;display:-webkit-flex;display:flex}.content uni-text[data-v-1836ca55]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?50?%;line-height:%?50?%;text-align:center;border-right:%?1?% solid #eee}.content .td[data-v-1836ca55]{display:-webkit-box;display:-webkit-flex;display:flex}.content uni-text[data-v-1836ca55]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;min-height:%?50?%;line-height:%?50?%;border-right:%?1?% solid #eee;border-bottom:%?1?% solid #eee;padding:%?20?% auto;overflow:hidden}.content .swipe[data-v-1836ca55],.content .swiper-warp[data-v-1836ca55]{background:#2b9939}',""])}}]);