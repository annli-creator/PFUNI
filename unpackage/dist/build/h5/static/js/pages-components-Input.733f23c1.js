(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-Input"],{"1bfc":function(n,t,e){"use strict";var a=e("da8e"),i=e.n(a);i.a},"577a":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("3ede"),i={components:{Input:a.Input},data:function(){return{}},onLoad:function(n){},created:function(){},methods:{input:function(n){var t=n.detail.value;console.log(t)}}};t.default=i},c79d:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-0f1af4f3]{padding:%?40?%;box-sizing:border-box;font-size:%?14?%}.content .bnt[data-v-0f1af4f3]{position:relative;width:100%;background:#2b9939;color:#fff;height:%?60?%;line-height:%?60?%;margin:0 auto %?40?%;text-align:center;font-size:%?16?%;border-radius:%?10?%}.content .h2[data-v-0f1af4f3]{font-size:%?24?%;margin-bottom:%?10?%;font-weight:700}.content .h3[data-v-0f1af4f3]{font-size:%?20?%;margin:%?20?% auto;font-weight:700;color:red}.content .tip[data-v-0f1af4f3]{font-size:%?14?%;text-indent:%?15?%;margin:%?20?% auto}.content .title[data-v-0f1af4f3]{margin:%?20?% auto}',""])},da8e:function(n,t,e){var a=e("c79d");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("05554fb2",a,!0,{sourceMap:!1,shadowMode:!1})},e690:function(n,t,e){"use strict";e.r(t);var a=e("577a"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=i.a},f537:function(n,t,e){"use strict";e.r(t);var a=e("fc44"),i=e("e690");for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);e("1bfc");var u=e("2877"),r=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"0f1af4f3",null);t["default"]=r.exports},fc44:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"h2"},[n._v("input 表单")]),e("v-uni-view",{staticClass:"tip"},[n._v("input组件主要用于input输入框，无需用户交互。"),e("strong",[n._v("注:")]),n._v("由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过")]),e("v-uni-view",{staticClass:"h3"},[n._v("示例")]),e("Input",{attrs:{placeholder:"请输入内容",title:"标题:",value:"请输入您的姓名",name:"name",disabled:!1},on:{input:function(t){arguments[0]=t=n.$handleEvent(t),n.input.apply(void 0,arguments)}}}),e("Input",{attrs:{placeholder:"请输入内容",value:"请输入您的年龄",name:"name",disabled:!1,iconLeft:"icon-compose"},on:{input:function(t){arguments[0]=t=n.$handleEvent(t),n.input.apply(void 0,arguments)}}}),e("Input",{attrs:{placeholder:"请输入您的手机号",type:"number",name:"name",disabled:!1,iconRight:"icon-sousuo"},on:{input:function(t){arguments[0]=t=n.$handleEvent(t),n.input.apply(void 0,arguments)}}}),e("Input",{attrs:{placeholder:"请输入您的邮箱",value:"我的姓名",name:"name",disabled:!1},on:{input:function(t){arguments[0]=t=n.$handleEvent(t),n.input.apply(void 0,arguments)}}})],1)},i=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return i})}}]);