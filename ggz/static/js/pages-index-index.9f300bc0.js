(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"1de5":function(t,i,s){"use strict";t.exports=function(t,i){return i||(i={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),i.hash&&(t+=i.hash),/["'() \t\n]/.test(t)||i.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"2e1e":function(t,i,s){"use strict";s("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,s("fb6a"),s("d3b7"),s("159b"),s("4e82"),s("d81d"),s("b64b"),s("26e9"),s("ac1f"),s("00b4"),s("99af");var e={data:function(){return{click:0,list:[],hotNumber:[],coldNumber:[],dui:{count:0,last:0},shun:{count:0,last:0},tiao:{count:0,last:0},hui:{count:0,last:0},fei:{count:0,last:0},input:""}},computed:{showList:function(){return this.list.length>20?this.list.slice(-20):this.list}},onLoad:function(){this.reCount()},onUnload:function(){this.click=0},methods:{goResult:function(){this.click+=1,this.click>10&&uni.navigateTo({url:"/pages/result/result"})},init:function(){this.dui={count:0,last:0},this.shun={count:0,last:0},this.tiao={count:0,last:0},this.hui={count:0,last:0},this.fei={count:0,last:0}},reCount:function(){var t=this;this.init(),this.findHotCold();var i={0:5,1:6,2:7,3:8,4:9,5:0,6:1,7:2,8:3,9:4};this.showList.forEach((function(s,e){if(e>1){var a=t.showList[e-1],n=t.showList[e-2],l=Math.abs(s-a);Math.abs(s-n);console.log("当前数：".concat(s),"对数是：".concat(i[s]),"上一个：".concat(a),"上上个：".concat(n),"和上一个相差：".concat(l)),console.log(s==a,i[s]==a),s==a||i[s]==a?(t.dui.count+=1,t.dui.last=0,t.shun.last+=1,t.tiao.last+=1,t.hui.last+=1,t.fei.last+=1):1==l||0==s&&9==a||9==s&&0==a?(t.shun.count+=1,t.shun.last=0,t.dui.last+=1,t.tiao.last+=1,t.hui.last+=1,t.fei.last+=1):2==l?(t.tiao.count+=1,t.tiao.last=0,t.dui.last+=1,t.shun.last+=1,t.hui.last+=1,t.fei.last+=1):s===n?(t.hui.count+=1,t.hui.last=0,t.dui.last+=1,t.tiao.last+=1,t.shun.last+=1,t.fei.last+=1):(t.fei.count+=1,t.fei.last=0,t.dui.last+=1,t.tiao.last+=1,t.shun.last+=1,t.hui.last+=1)}}))},findHotCold:function(){var t={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};this.showList.forEach((function(i){t[i]=t[i]+1}));var i=Object.keys(t).map((function(i){return{key:i,value:t[i]}})).sort((function(t,i){return i.value-t.value}));this.hotNumber=i.slice(0,5),this.coldNumber=i.slice(-5).reverse()},save:function(){if(this.input){/^(\d+?)+$/.test(this.input)?(this.list=this.list.concat(this.input.split("")),this.reCount(),this.input=""):uni.showToast({title:"输入不合法，只允许输入数字",icon:"none"})}else uni.showToast({title:"请录入结果，可以一次录入多个",icon:"none"})},reSave:function(){this.list.length>0&&(this.list.pop(),this.reCount())}}};i.default=e},"3d5f":function(t,i,s){t.exports=s.p+"static/img/blue.d6f527b9.png"},"48c7":function(t,i,s){var e=s("e1c5");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=s("4f06").default;a("2403bd8a",e,!0,{sourceMap:!1,shadowMode:!1})},"5d21":function(t,i,s){"use strict";var e=s("48c7"),a=s.n(e);a.a},"69c2":function(t,i,s){"use strict";s.r(i);var e=s("b4cf"),a=s("a24b");for(var n in a)["default"].indexOf(n)<0&&function(t){s.d(i,t,(function(){return a[t]}))}(n);s("5d21");var l=s("f0c5"),u=Object(l["a"])(a["default"],e["b"],e["c"],!1,null,"5048d3b4",null,!1,e["a"],void 0);i["default"]=u.exports},"883e":function(t,i,s){t.exports=s.p+"static/img/red.dda38898.png"},a24b:function(t,i,s){"use strict";s.r(i);var e=s("2e1e"),a=s.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){s.d(i,t,(function(){return e[t]}))}(n);i["default"]=a.a},b4cf:function(t,i,s){"use strict";s.d(i,"b",(function(){return e})),s.d(i,"c",(function(){return a})),s.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",{staticClass:"body"},[s("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!1}},[s("template",{attrs:{slot:"content"},slot:"content"},[t._v("鬼谷子辅助")])],2),s("v-uni-view",{staticClass:"list"},t._l(t.showList,(function(i,e){return s("v-uni-view",{key:e,staticClass:"item"},[s("v-uni-view",{staticClass:"item-td"},[s("v-uni-view",{staticClass:"cu-tag",class:{"bg-cyan":i%2===0,"bg-yellow":i%2!==0}},[t._v(t._s(i%2===0?"双":"单"))])],1),s("v-uni-view",{staticClass:"item-td",class:{active:0==i}},[s("v-uni-view",{staticClass:"ball"},[t._v("0")])],1),s("v-uni-view",{staticClass:"item-td",class:{active:1==i}},[s("v-uni-view",{staticClass:"ball"},[t._v("1")])],1),s("v-uni-view",{staticClass:"item-td",class:{active:2==i}},[s("v-uni-view",{staticClass:"ball"},[t._v("2")])],1),s("v-uni-view",{staticClass:"item-td",class:{active:3==i}},[s("v-uni-view",{staticClass:"ball"},[t._v("3")])],1),s("v-uni-view",{staticClass:"item-td",class:{active:4==i}},[s("v-uni-view",{staticClass:"ball"},[t._v("4")])],1),s("v-uni-view",{staticClass:"item-td",class:{active:5==i}},[s("v-uni-view",{staticClass:"ball"},[t._v("5")])],1),s("v-uni-view",{staticClass:"item-td",class:{active:6==i}},[s("v-uni-view",{staticClass:"ball"},[t._v("6")])],1),s("v-uni-view",{staticClass:"item-td",class:{active:7==i}},[s("v-uni-view",{staticClass:"ball"},[t._v("7")])],1),s("v-uni-view",{staticClass:"item-td",class:{active:8==i}},[s("v-uni-view",{staticClass:"ball"},[t._v("8")])],1),s("v-uni-view",{staticClass:"item-td",class:{active:9==i}},[s("v-uni-view",{staticClass:"ball"},[t._v("9")])],1),s("v-uni-view",{staticClass:"item-td"},[s("v-uni-view",{staticClass:"cu-tag",class:{"bg-cyan":i%2===0,"bg-yellow":i%2!==0}},[t._v(t._s(i))])],1)],1)})),1),s("v-uni-view",{staticClass:"handle"},[s("v-uni-view",{staticClass:"result flex align-center"},[t.hotNumber.length>0?s("v-uni-view",{staticClass:"flex align-stretch flex-1"},[s("v-uni-view",{staticClass:"bg-gradual-red flex title"},[t._v("热号")]),s("v-uni-view",{staticClass:"solid flex align-center justify-center flex-1"},t._l(t.hotNumber,(function(i){return s("v-uni-view",{key:i.key},[s("v-uni-view",{staticClass:"hot"},[t._v(t._s(i.key))]),s("v-uni-view",{staticClass:"count"},[s("v-uni-view",{staticClass:"cu-tag bg-green"},[t._v(t._s(i.value))])],1)],1)})),1)],1):t._e(),t.coldNumber.length>0?s("v-uni-view",{staticClass:"flex align-stretch flex-1"},[s("v-uni-view",{staticClass:"bg-gradual-blue flex title",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goResult.apply(void 0,arguments)}}},[t._v("冷号")]),s("v-uni-view",{staticClass:"solid flex align-center justify-center flex-1"},t._l(t.coldNumber,(function(i){return s("v-uni-view",{key:i.key},[s("v-uni-view",{staticClass:"cold"},[t._v(t._s(i.key))]),s("v-uni-view",{staticClass:"count"},[s("v-uni-view",{staticClass:"cu-tag bg-green"},[t._v(t._s(i.value))])],1)],1)})),1)],1):t._e()],1),s("v-uni-view",{staticClass:"result flex align-center flex-wrap"},[s("v-uni-view",{staticClass:"flex align-stretch flex-1"},[s("v-uni-view",{staticClass:"bg-orange flex title"},[t._v("对")]),s("v-uni-view",{staticClass:"solid flex-1 padding-xs"},[s("v-uni-view",[t._v("出现"),s("v-uni-text",{staticClass:"text-red text-bold margin-lr-xs"},[t._v(t._s(t.dui.count))]),t._v("次")],1),s("v-uni-view",[s("v-uni-text",{staticClass:"text-blue text-bold margin-lr-xs"},[t._v(t._s(t.dui.last))]),t._v("轮未出")],1)],1)],1),s("v-uni-view",{staticClass:"flex align-stretch flex-1"},[s("v-uni-view",{staticClass:"bg-orange flex title"},[t._v("顺")]),s("v-uni-view",{staticClass:"solid flex-1 padding-xs"},[s("v-uni-view",[t._v("出现"),s("v-uni-text",{staticClass:"text-red text-bold margin-lr-xs"},[t._v(t._s(t.shun.count))]),t._v("次")],1),s("v-uni-view",[s("v-uni-text",{staticClass:"text-blue text-bold margin-lr-xs"},[t._v(t._s(t.shun.last))]),t._v("轮未出")],1)],1)],1),s("v-uni-view",{staticClass:"flex align-stretch flex-1"},[s("v-uni-view",{staticClass:"bg-orange flex title"},[t._v("跳")]),s("v-uni-view",{staticClass:"solid flex-1 padding-xs"},[s("v-uni-view",[t._v("出现"),s("v-uni-text",{staticClass:"text-red text-bold margin-lr-xs"},[t._v(t._s(t.tiao.count))]),t._v("次")],1),s("v-uni-view",[s("v-uni-text",{staticClass:"text-blue text-bold margin-lr-xs"},[t._v(t._s(t.tiao.last))]),t._v("轮未出")],1)],1)],1)],1),s("v-uni-view",{staticClass:"result flex align-center flex-wrap"},[s("v-uni-view",{staticClass:"flex align-stretch flex-1"},[s("v-uni-view",{staticClass:"bg-orange flex title"},[t._v("回")]),s("v-uni-view",{staticClass:"solid flex-1 padding-xs"},[s("v-uni-view",[t._v("出现"),s("v-uni-text",{staticClass:"text-red text-bold margin-lr-xs"},[t._v(t._s(t.hui.count))]),t._v("次")],1),s("v-uni-view",[s("v-uni-text",{staticClass:"text-blue text-bold margin-lr-xs"},[t._v(t._s(t.hui.last))]),t._v("轮未出")],1)],1)],1),s("v-uni-view",{staticClass:"flex align-stretch flex-1"},[s("v-uni-view",{staticClass:"bg-orange flex title"},[t._v("飞")]),s("v-uni-view",{staticClass:"solid flex-1 padding-xs"},[s("v-uni-view",[t._v("出现"),s("v-uni-text",{staticClass:"text-red text-bold margin-lr-xs"},[t._v(t._s(t.fei.count))]),t._v("次")],1),s("v-uni-view",[s("v-uni-text",{staticClass:"text-blue text-bold margin-lr-xs"},[t._v(t._s(t.fei.last))]),t._v("轮未出")],1)],1)],1),s("v-uni-view",{staticClass:"flex-1"})],1),s("v-uni-view",{staticClass:"flex align-center solid-top padding-top-xs margin-top-xs"},[s("v-uni-input",{staticClass:"flex-1 solid-bottom",staticStyle:{height:"48rpx","line-height":"48rpx"},attrs:{placeholder:"输入最新的结果",name:"input"},model:{value:t.input,callback:function(i){t.input=i},expression:"input"}}),s("v-uni-button",{staticClass:"cu-btn bg-green shadow",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.save.apply(void 0,arguments)}}},[t._v("提交")]),s("v-uni-button",{staticClass:"cu-btn bg-red shadow margin-left-xs",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.reSave.apply(void 0,arguments)}}},[t._v("撤销")])],1)],1)],1)},a=[]},e1c5:function(t,i,s){var e=s("24fb"),a=s("1de5"),n=s("883e"),l=s("3d5f");i=e(!1);var u=a(n),c=a(l);i.push([t.i,".body[data-v-5048d3b4]{position:relative;width:100vw;height:100vh;overflow:auto;background-color:#fff;box-sizing:border-box;font-size:%?28?%}.body .item[data-v-5048d3b4]{width:100%;display:flex;align-items:center;justify-content:space-around;margin-bottom:%?8?%}.body .item .item-td[data-v-5048d3b4]{flex:1;height:%?40?%;line-height:%?40?%;text-align:center;display:flex;align-items:center;justify-content:center;border-bottom:1px dashed #f0f0f0;padding-bottom:%?10?%}.body .item .item-td .ball[data-v-5048d3b4]{width:%?30?%;height:%?30?%;display:flex;text-align:center;align-items:center;justify-content:center;color:#fff;background-color:#d0d0d0;border-radius:50%;padding-top:%?3?%}.body .item .item-td.active .ball[data-v-5048d3b4]{color:#fff;background-color:red}.body .flex-1[data-v-5048d3b4]{flex:1}.body .result[data-v-5048d3b4]{margin-top:%?10?%}.body .result .title[data-v-5048d3b4]{align-items:center;justify-content:center;padding:0 %?10?%}.body .result .hot[data-v-5048d3b4],\n.body .result .cold[data-v-5048d3b4]{width:%?42?%;height:%?48?%;margin-right:%?10?%;color:#fff;display:flex;align-items:center;justify-content:center;background-position:50%;background-repeat:no-repeat;background-size:%?42?% %?48?%}.body .result .hot[data-v-5048d3b4]{background-image:url("+u+")}.body .result .cold[data-v-5048d3b4]{background-image:url("+c+")}.body .result .count[data-v-5048d3b4]{width:%?42?%;line-height:%?48?%;margin-right:%?10?%;text-align:center}.body .result .count .cu-tag[data-v-5048d3b4]{height:%?34?%;line-height:%?34?%}.body .list[data-v-5048d3b4]{margin-top:%?30?%;margin-bottom:%?440?%}.body .handle[data-v-5048d3b4]{position:fixed;z-index:99;background-color:#fff;border-top:1px solid #f0f0f0;width:100%;box-sizing:border-box;padding:%?20?%;bottom:0;left:0}",""]),t.exports=i}}]);