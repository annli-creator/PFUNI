(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-loadmore-loading"],{"1c98":function(t,e,o){var n=o("c4a0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("4f06").default;a("27731e5a",n,!0,{sourceMap:!1,shadowMode:!1})},"255b":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"content"},[o("v-uni-view",{staticClass:"LoadMore",staticStyle:{transform:"translateY(+top+ 'px')"},attrs:{id:"LoadMore"},on:{touchstart:function(e){e=t.$handleEvent(e),t.touchStart(e)},touchmove:function(e){e=t.$handleEvent(e),t.touchMove(e)},touchend:function(e){e=t.$handleEvent(e),t.touchEnd(e)}}},[t.isPullDown?o("v-uni-view",{staticClass:"loading"},[o("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:"loading"==t.status,expression:"status=='loading'"}],staticClass:"loadingimg",attrs:{src:"../../static/loading.gif"}}),t._v(t._s("more"===t.status?t.pullDownText.contentdown:"loading"===t.status?t.pullDownText.contentrefresh:t.pullDownText.contentnomore))],1):t._e(),t._l(t.items,function(e,n){return o("v-uni-view",{key:n,staticClass:"loade-more-con"},[o("v-uni-view",{staticClass:"left"},[o("v-uni-view",{staticClass:"img"})],1),o("v-uni-view",{staticClass:"righ"},[o("v-uni-view",[t._v(t._s(e.name))]),o("v-uni-view",[t._v(t._s(e.export))])],1)],1)}),t.isPullingUp?o("v-uni-view",{staticClass:"loading"},[o("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:"loading"==t.status,expression:"status == 'loading'"}],staticClass:"loadingimg",attrs:{src:"../../static/loading.gif"}}),t._v(t._s("more"===t.status?t.pullingUpText.contentdown:"loading"===t.status?t.pullingUpText.contentrefresh:t.pullingUpText.contentnomore))],1):t._e()],2)],1)},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},"2b66":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},data:function(){return{items:[{name:"小張",export:"我是小明不是小张"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"}],page:1,startPageY:"",movepageY:"",isPullingUp:!1,isPullDown:!1,status:"more",top:0,isTouch:!1,pullDownText:{contentdown:"下拉刷新...",contentrefresh:"正在加载...",contentnomore:"更新成功..."},pullingUpText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(t){},created:function(){},onPageScroll:function(t){var e=this;console.log(t);var o=wx.createSelectorQuery();o.select("#LoadMore").boundingClientRect(),o.selectViewport().scrollOffset(),o.exec(function(o){o[0].top,o[1].scrollTop,console.log("打印demo的元素的信息",o),console.log("打印高度",o[0].height);var n=o[0].height-100,a=uni.getSystemInfoSync().screenHeight,i=t.scrollTop;console.log(n+" "+a+" "+i),console.log(e.status),"loading"!=e.status&&n<a+i&&(e.status="loading",e.isPullingUp=!0,e.pullingUp())})},methods:{getLoadMore:function(){this.isShow=!0},setState:function(t){var e=this;this.status=t,"noPullDow"===t&&setTimeout(function(){e.isPullDown=!1},500)},touchStart:function(t){this.startPageY=t.touches[0].pageY,this.isTouch=!0},touchMove:function(t){if(this.movepageY=t.touches[0].pageY,this.isTouch){var e=this.movepageY-this.startPageY;e>0&&(t.preventDefault(),this.top=Math.floor(.25*e)+("loading"===this.status?40:0),this.top>=40?(this.isPullDown=!0,this.status="loading"):this.isPullDown=!0)}},touchEnd:function(t){this.isTouch=!1,"noPullDow"!==this.status?this.top>=40?(this.isPullDown=!0,this.status="loading",this.pullDown()):this.top=0:this.top=40},pullDown:function(){var t=this;this.page=1,setTimeout(function(e){t.setState("noPullDow")},2e3)},pullingUp:function(){var t=this;this.page++,console.log(this.page+"===================="),this.page>20?this.setState("noPullUp"):setTimeout(function(e){var o=[{name:"王八"+t.page,export:"王八是新加的哦"},{name:"王八",export:"王八是新加的哦"}];t.items=t.items.concat(o),t.setState("noPullUp")},5e3)}}};e.default=n},"67f8":function(t,e,o){"use strict";var n=o("1c98"),a=o.n(n);a.a},"87c5":function(t,e,o){"use strict";o.r(e);var n=o("2b66"),a=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=a.a},c4a0:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.LoadMore[data-v-31bbdea6]{position:relative;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#eee;font-size:%?14?%}.LoadMore .loade-more-con[data-v-31bbdea6]{background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:%?1?% solid #eee}.LoadMore .loade-more-con .left[data-v-31bbdea6]{width:20%}.LoadMore .loade-more-con .left .img[data-v-31bbdea6]{background:#eee;height:%?80?%;width:%?80?%;margin:0 auto}.LoadMore .loade-more-con .right[data-v-31bbdea6]{width:80%}.LoadMore .loading[data-v-31bbdea6]{text-align:center;width:100%;padding:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:middle}.LoadMore .loading .loadingimg[data-v-31bbdea6]{width:%?30?%;height:%?30?%;vertical-align:middle}.LoadMore .loade-more-con[data-v-31bbdea6]{background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:%?1?% solid #eee}.LoadMore .loade-more-con .left[data-v-31bbdea6]{width:20%}.LoadMore .loade-more-con .left .img[data-v-31bbdea6]{background:#eee;height:%?80?%;width:%?80?%;margin:0 auto}.LoadMore .loade-more-con .right[data-v-31bbdea6]{width:80%}',""])},f8d8:function(t,e,o){"use strict";o.r(e);var n=o("255b"),a=o("87c5");for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);o("67f8");var s=o("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"31bbdea6",null);e["default"]=r.exports}}]);