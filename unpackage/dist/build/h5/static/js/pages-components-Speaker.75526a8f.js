(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-Speaker"],{"0403":function(t,n,e){var i=e("8b3f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("2b7ae64f",i,!0,{sourceMap:!1,shadowMode:!1})},"33f6":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"h2"},[t._v("Speaker 滚动公告")]),e("v-uni-view",{staticClass:"tip"},[t._v("Speaker组件主要用于非模态信息提醒，无需用户交互。"),e("strong",[t._v("注:")]),t._v("由于此组件基于PFUIN实现，所以在使用之前，请确保自己了解过")]),e("v-uni-view",{staticClass:"h2"},[t._v("横向滚动")]),e("Speaker",{attrs:{vertical:!1,interval:5e3,iconClass:"icon-tubiao1jingyin",list:t.list}}),e("v-uni-view",{staticClass:"h2"},[t._v("竖向滚动")]),e("Speaker",{attrs:{vertical:!0,iconColor:"#E76B61",interval:5e3,iconClass:"icon-tubiao1jingyin",list:t.list}}),e("v-uni-view",{staticClass:"h2"},[t._v("无缝滚动")]),e("Speaker",{attrs:{scrolling:!0,iconColor:"#E76B61",iconClass:"icon-tubiao1jingyin"}},[e("v-uni-view",[t._v("PFUIN兼容微信小程序、uni-app，一套代码多端发布！完美兼容 helloUniApp 框架 !")])],1)],1)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"6fd7":function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("4db1")),o={components:{Speaker:a.default},data:function(){return{list:[{title:"PFUIN 更快、更好的前端UI",url:"../index/index",opentype:"navigate"},{title:"PFUIN- 精品 前端UI课程中心",url:"../index/index",opentype:"switchTab"}],htmlData:'\t<Speaker :vertical="true" iconColor="#E76B61" :interval="5000" iconClass="icon-youjian" :list="list"></Speaker>"\n        >\n        </Select>',jsData:"import Speaker from '../../components/Speaker/Speaker.vue'",jsData2:'export default {data(){\n\t\t\t\t\treturn{\n\t\t\t\t\tlist : [\n\t\t\t\t\t              { title: "PFUIN 更快、更好的前端UI", url:"../index/index", opentype: "navigate"},\n\t\t\t\t\t              { title: "PFUIN- 精品 前端UI课程中心", url: "../index/index", opentype: "switchTab"}\n\t\t\t\t\t            ]\n\t\t\t\t\t}\n\t\t\t\t  }\n\t\t\t\t}'}},onLoad:function(t){},created:function(){},methods:{}};n.default=o},"706c":function(t,n,e){"use strict";var i=e("0403"),a=e.n(i);a.a},"8b3f":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-a4c6bc62]{padding:%?40?%;box-sizing:border-box;font-size:%?14?%}.content .bnt[data-v-a4c6bc62]{position:relative;width:100%;background:#2b9939;color:#fff;height:%?60?%;line-height:%?60?%;margin:0 auto %?40?%;text-align:center;font-size:%?16?%;border-radius:%?10?%}.content .h2[data-v-a4c6bc62]{font-size:%?24?%;margin-bottom:%?10?%;font-weight:700}.content .h3[data-v-a4c6bc62]{font-size:%?20?%;margin:%?20?% auto;font-weight:700;color:red}.content .tip[data-v-a4c6bc62]{font-size:%?14?%;text-indent:%?15?%;margin:%?20?% auto}.content .title[data-v-a4c6bc62]{margin:%?20?% auto}',""])},cf9d:function(t,n,e){"use strict";e.r(n);var i=e("6fd7"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},dc9b:function(t,n,e){"use strict";e.r(n);var i=e("33f6"),a=e("cf9d");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("706c");var r=e("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"a4c6bc62",null);n["default"]=c.exports}}]);