(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-result-custom"],{"10bb":function(t,s,e){var i=e("5ba3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("967d").default;a("c98f39c4",i,!0,{sourceMap:!1,shadowMode:!1})},"162e":function(t,s,e){t.exports=e.p+"static/red.png"},1851:function(t,s,e){"use strict";var i=e("8bdb"),a=e("84d6"),n=e("1cb5");i({target:"Array",proto:!0},{fill:a}),n("fill")},"2ec5":function(t,s,e){"use strict";t.exports=function(t,s){return s||(s={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),s.hash&&(t+=s.hash),/["'() \t\n]/.test(t)||s.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},3471:function(t,s,e){"use strict";e("6a54"),Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(t,s){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=(0,i.default)(t))||s&&t&&"number"===typeof t.length){e&&(t=e);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,u=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){c=!0,l=t},f:function(){try{u||null==e["return"]||e["return"]()}finally{if(c)throw l}}}},e("01a2"),e("e39c"),e("bf0f"),e("844d"),e("18f7"),e("de6c"),e("7a76"),e("c9b5");var i=function(t){return t&&t.__esModule?t:{default:t}}(e("5d6b"))},"34bc":function(t,s,e){"use strict";e("6a54");var i=e("f5bd").default;Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a=i(e("3471")),n=i(e("9b1b"));e("fd3c"),e("f7a5"),e("bf0f"),e("2797"),e("aa9c"),e("5ef2"),e("473f"),e("c223"),e("22b6"),e("e966"),e("23f4"),e("7d2f"),e("5c47"),e("9c4e"),e("ab80"),e("a1c1"),e("4100"),e("dc8a"),e("1851"),e("4626"),e("5ac7"),e("0506");var l={data:function(){return{input:"",list:[],list20:[],handleList:{da:[],dan:[],dui:[],shun:[],tiao:[],fei:[],attack:[],diff:[],kua0:{count:0,last:0},kua1:{count:0,last:0},kua2:{count:0,last:0},kua3:{count:0,last:0},kua4:{count:0,last:0},kua5:{count:0,last:0}},hots:[],colds:[],dui:{count:0,last:0},shun:{count:0,last:0},tiao:{count:0,last:0},fei:{count:0,last:0},resultList:[],hosResultList:[],sameList:[],success:[],successPer:0,coldRecommend:{numbers:[],count:0},toRemoveList:[]}},onLoad:function(){this.init()},methods:{init:function(){this.input="",this.list=[],this.hots=[],this.colds=[],this.handleList={da:[],dan:[],dui:[],shun:[],tiao:[],fei:[],attack:[],diff:[],kua0:{count:0,last:0},kua1:{count:0,last:0},kua2:{count:0,last:0},kua3:{count:0,last:0},kua4:{count:0,last:0},kua5:{count:0,last:0}},this.resultList=[],this.hosResultList=[],this.sameList=[],this.dui={count:0,last:0},this.shun={count:0,last:0},this.tiao={count:0,last:0},this.fei={count:0,last:0},this.success=[],this.toRemoveList=[],this.successPer=0,this.$forceUpdate()},handle:function(){var t=this;if(this.list.length>2){this.handleList={da:[],dan:[],dui:[],shun:[],tiao:[],fei:[],attack:[],diff:[],kua0:{count:0,last:0},kua1:{count:0,last:0},kua2:{count:0,last:0},kua3:{count:0,last:0},kua4:{count:0,last:0},kua5:{count:0,last:0}},this.dui={count:0,last:0},this.shun={count:0,last:0},this.tiao={count:0,last:0},this.fei={count:0,last:0};var s=this.list;this.list20=s.slice(-20).map((function(t,e){return{number:t,class:s.length<15||s.length>=15&&(s.length<=20?s.length:20)-e<=15?"bg-green":"bg-grey",same:""}})),s.forEach((function(e,i){if(i>=1){var a=s[i-1];e===a||t.getDui(e)===a?(t.dui.count+=1,t.dui.last=0,t.shun.last+=1,t.tiao.last+=1,t.fei.last+=1,t.handleList.dui.push(1),t.handleList.shun.push(0),t.handleList.tiao.push(0),t.handleList.fei.push(0)):t.getShun(a).indexOf(e)>=0?(t.shun.count+=1,t.shun.last=0,t.dui.last+=1,t.tiao.last+=1,t.fei.last+=1,t.handleList.dui.push(0),t.handleList.shun.push(1),t.handleList.tiao.push(0),t.handleList.fei.push(0)):t.getTiao(a).indexOf(e)>=0?(t.tiao.count+=1,t.tiao.last=0,t.dui.last+=1,t.shun.last+=1,t.fei.last+=1,t.handleList.dui.push(0),t.handleList.shun.push(0),t.handleList.tiao.push(1),t.handleList.fei.push(0)):(t.fei.count+=1,t.fei.last=0,t.dui.last+=1,t.tiao.last+=1,t.shun.last+=1,t.handleList.dui.push(0),t.handleList.shun.push(0),t.handleList.tiao.push(0),t.handleList.fei.push(1)),e>=5?t.handleList.da.push(1):t.handleList.da.push(0),e%2===0?t.handleList.dan.push(0):t.handleList.dan.push(1);var n=t.getAttackArea(a);n.indexOf(e)>=0||e===a?t.handleList.attack.push(1):t.handleList.attack.push(0);for(var l=t.getDiff(a,e),u=0;u<=5;u++)l===u?(t.handleList["kua".concat(u)].count+=1,t.handleList["kua".concat(u)].last=0):t.handleList["kua".concat(u)].last+=1;t.handleList.diff.push(l),t.handleList.diff=t.handleList.diff.slice(-20)}})),this.count()}},count:function(){var t=this,s=this.list.slice(-20),e=this.list.slice(-15),i=s[s.length-1];this.resultList.map((function(t){return t.value})).indexOf(i)>=0?this.success.push(1):this.success.push(0),this.successPer=Math.floor(this.success.reduce((function(t,s){return t+s}),0)/this.success.length*100);var a=[];this.shun.last>5&&(a=a.concat(this.getShun(i).map((function(t){return{value:t,info:"顺子"}})))),this.tiao.last>5&&(a=a.concat(this.getTiao(i).map((function(t){return{value:t,info:"跳号"}})))),this.dui.last>=5&&(a=a.concat([i,this.getDui(i)].map((function(t){return{value:t,info:"对子"}}))));var l=this.colds.map((function(t){return t.number}));l.indexOf(i)>=0&&(this.coldRecommend={numbers:l,count:0}),this.coldRecommend.numbers.length>0&&this.coldRecommend.count<2&&(a=a.concat(this.coldRecommend.numbers.map((function(t){return{value:t,info:"防冷"}})))),this.coldRecommend.count+=1,this.hots=this.findHotNumbers(this.list),this.colds=this.findColdNumbers(this.list);var u=this.findABAC(s),c=this.findABCA(s),r=this.findAdd(s);this.toRemoveList=[];var o=[];if(u.length>1&&u.forEach((function(s){t.toRemoveList.push(s.join("")),o.push(s)})),c.length>1&&c.forEach((function(s){t.toRemoveList.push(s.join("")),o.push(s)})),r.length>1&&r.forEach((function(s){t.toRemoveList.push(s.join("")),o.push(s)})),o.length>0){for(var v=this.findIndexes(s,o),x=v.map((function(t){return t[0]})),d=0;d<s.length-3;d++)x.indexOf(d)>=0&&(this.list20[d].same="same",this.list20[d+1].same="same",this.list20[d+2].same="same",this.list20[d+3].same="same");var f=[];this.list20.slice(-15).forEach((function(t){!t.same&&f.indexOf(t.number)<0&&f.push(t.number)}))}else this.toRemoveList=[];if(0===a.length){var g=[];e.forEach((function(t,s){i===t&&(void 0!==e[s-1]&&g.indexOf(e[s-1])<0&&(g.push(e[s-1]),a.push({value:e[s-1],info:"历史相邻"})),void 0!==e[s+1]&&g.indexOf(e[s+1])<0&&(g.push(e[s+1]),a.push({value:e[s+1],info:"历史相邻"})))}))}var h={},b=this.colds.map((function(t){return t.number}));a.forEach((function(t){h[t.value]?h[t.value].info+="、".concat(t.info):h[t.value]=(0,n.default)((0,n.default)({},t),{},{cold:!1}),b.indexOf(t.value)>=0&&(h[t.value].cold=!0)})),this.resultList=Object.values(h),this.$forceUpdate()},findABAC:function(t){for(var s=[],e=0;e<t.length-3;e++)t[e]===t[e+2]&&(s.push([t[e],t[e+1],t[e+2],t[e+3]]),e+=3);return s},findABCA:function(t){for(var s=[],e=0;e<t.length-3;e++)t[e]===t[e+3]&&(s.push([t[e],t[e+1],t[e+2],t[e+3]]),e+=3);return s},findAdd:function(t){for(var s=[],e=[],i=0;i<t.length-1;i++)e.push(t[i]-t[i+1]);for(var a={},n=0;n<e.length-2;n++){var l="".concat(e[n],",").concat(e[n+2]);a[l]||(a[l]=0),a[l]+=1}var u=[];for(var c in a)a[c]>1&&u.push(c.split(",").map((function(t){return parseInt(t)})));u.forEach((function(i){for(var a=0;a<e.length-3;a++)e[a]===i[0]&&e[a+2]===i[1]&&(s.push([t[a],t[a+1],t[a+2],t[a+3]]),a+=3)}));for(var r=[],o=0;o<s.length-1;o++){var v=s[o],x=s[o+1];v&&x&&v[0]-v[1]===x[0]-x[1]&&v[2]-v[3]===x[2]-x[3]&&(r.push(v),r.push(x))}return r},filterStrings:function(t,s){return s.reduce((function(t,s){var e=new RegExp(s,"g");return t.replace(e,"")}),t)},findIndexes:function(t,s){var e,i=[],n=(0,a.default)(s);try{for(n.s();!(e=n.n()).done;){var l=e.value,u=[],c=0,r=0;while(c<t.length)t[c]===l[r]?(c++,r++):(c=c-r+1,r=0),r===l.length&&(u.push(c-r),r=0);i.push(u)}}catch(o){n.e(o)}finally{n.f()}return i},findHotNumbers:function(t){for(var s={},e={},i=t.length>20?t.length-20:0,a=i;a<t.length;a++){var n=t[a];s[n]?s[n]++:s[n]=1,e[n]=a}var l=Object.keys(s).sort((function(t,e){return s[e]-s[t]})).slice(0,3),u={},c={};l.forEach((function(t){u[t]=s[t],c[t]=e[t]}));var r=[];return l.forEach((function(s){r.push({number:s,count:u[s],last:t.length-c[s]-1})})),r},findColdNumbers:function(t){var s=new Array(10).fill(!1),e=new Array(10).fill(-1);t.forEach((function(t,i){s[t]=!0,e[t]=i}));for(var i=t.slice(-15),a=[],n=0;n<10;n++)i.includes(n)||a.push({number:n,last:e[n]>=0?t.length-e[n]-1:e[n]});return a},getDui:function(t){return t<5?t+5:t-5},getShun:function(t){switch(t){case 0:return[9,1];case 9:return[8,0];default:return[t-1,t+1]}},getTiao:function(t){switch(t){case 0:return[8,2];case 1:return[9,3];case 8:return[6,0];case 9:return[7,1];default:return[t-2,t+2]}},getAttackArea:function(t){var s=[];switch(t){case 0:s=[7,8,9,1,2,3];break;case 1:s=[8,9,0,2,3,4];break;case 2:s=[9,0,1,3,4,5];break;case 7:s=[4,5,6,8,9,0];break;case 8:s=[5,6,7,9,0,1];break;case 9:s=[0,1,2,6,7,8];break;default:s=[t-1,t-2,t-3,t+1,t+2,t+3]}return s},getDiff:function(t,s){var e=0;return e=t<s?s-t:t-s,e<=5&&e>=0?e:Math.abs(e-10)},showResult:function(){var t=this;uni.showModal({title:"当前结果",content:this.list.join(""),success:function(s){s.confirm&&uni.setClipboardData({data:t.list.join("")})}})},save:function(){if(this.input){/^(\d+?)+$/.test(this.input)?(this.list=this.list.concat(this.input.split("").map((function(t){return parseInt(t)}))),this.handle(),this.input=""):uni.showToast({title:"输入不合法，只允许输入数字",icon:"none"})}else uni.showToast({title:"请录入结果，可以一次录入多个",icon:"none"})},del:function(){this.list.length>0&&this.init()}}};s.default=l},"5ba3":function(t,s,e){var i=e("c86c"),a=e("2ec5"),n=e("162e"),l=e("944c");s=i(!1);var u=a(n),c=a(l);s.push([t.i,".body[data-v-ab47a1b4]{width:100vw;height:100vh;overflow-y:auto;white-space:nowrap}.body .title[data-v-ab47a1b4]{width:%?100?%;min-height:%?70?%;align-items:center;justify-content:center;padding:0 %?10?%}.body .title.text-xs[data-v-ab47a1b4]{min-height:%?40?%}.body .list[data-v-ab47a1b4]{padding-bottom:%?120?%}.body .box[data-v-ab47a1b4]{padding:%?10?% %?10?% %?5?% %?10?%;flex:1}.body .hot[data-v-ab47a1b4],\n.body .cold[data-v-ab47a1b4]{width:%?42?%;height:%?48?%;margin-right:%?10?%;color:#fff;display:flex;align-items:center;justify-content:center;background-position:50%;background-repeat:no-repeat;background-size:%?42?% %?48?%}.body .hot[data-v-ab47a1b4]{background-image:url("+u+")}.body .cold[data-v-ab47a1b4]{background-image:url("+c+')}.body .item[data-v-ab47a1b4]{margin-left:0;margin-bottom:%?4?%}.body .item[data-v-ab47a1b4]:not(:last-child){margin-right:%?4?%}.body .diff[data-v-ab47a1b4]{width:%?30?%;height:%?30?%}.body .flex-1[data-v-ab47a1b4]{flex:1}.body .no-ml[data-v-ab47a1b4]{margin-left:0}.body .bottom-bar[data-v-ab47a1b4]{position:fixed;bottom:%?100?%;left:0;width:100%;z-index:99}.body .same[data-v-ab47a1b4]{position:relative}.body .same[data-v-ab47a1b4]::after{content:"";width:100%;height:1px;background-color:#8b0000;position:absolute;top:50%;left:0}',""]),t.exports=s},"787a":function(t,s,e){"use strict";e.r(s);var i=e("34bc"),a=e.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(s,t,(function(){return i[t]}))}(n);s["default"]=a.a},"944c":function(t,s,e){t.exports=e.p+"static/blue.png"},beda:function(t,s,e){"use strict";e.r(s);var i=e("ddd39"),a=e("787a");for(var n in a)["default"].indexOf(n)<0&&function(t){e.d(s,t,(function(){return a[t]}))}(n);e("e03b");var l=e("828b"),u=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"ab47a1b4",null,!1,i["a"],void 0);s["default"]=u.exports},ddd39:function(t,s,e){"use strict";e.d(s,"b",(function(){return i})),e.d(s,"c",(function(){return a})),e.d(s,"a",(function(){}));var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-uni-view",{staticClass:"body"},[e("cu-custom",{attrs:{bgColor:"bg-blue",isBack:!1}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("正确率："+t._s(t.successPer)+"%")])],2),e("v-uni-view",{staticClass:"padding list"},[t.list20.length>0?[e("v-uni-view",{staticClass:"flex align-stretch"},[e("v-uni-view",{staticClass:"bg-gradual-blue flex title",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.showResult.apply(void 0,arguments)}}},[t._v("结果")]),e("v-uni-view",{staticClass:"solid flex align-center justify-start box"},[e("v-uni-view",{staticClass:"flex align-center flex-wrap"},t._l(t.list20,(function(s,i){return e("v-uni-view",{key:i,staticClass:"cu-tag item",class:s.class+" "+s.same},[t._v(t._s(s.number))])})),1)],1)],1),e("v-uni-view",{staticClass:"flex align-stretch margin-top-xs"},[e("v-uni-view",{staticClass:"bg-gradual-blue flex title text-xs"},[t._v("跨度")]),e("v-uni-view",{staticClass:"solid flex align-center justify-start box"},[e("v-uni-view",{staticClass:"flex align-center flex-wrap"},t._l(t.handleList.diff,(function(t,s){return e("v-uni-view",{key:s},[e("v-uni-image",{staticClass:"diff",attrs:{src:"../../static/shuzi"+t+".png"}})],1)})),1)],1)],1),e("v-uni-view",{staticClass:"flex align-stretch margin-top-xs"},[e("v-uni-view",{staticClass:"bg-gradual-blue flex title text-xs"},[t._v("大小")]),e("v-uni-view",{staticClass:"solid flex align-center justify-start box"},[e("v-uni-view",{staticClass:"flex align-center flex-wrap"},t._l(t.handleList.da,(function(t,s){return e("v-uni-view",{key:s,staticClass:"cu-tag item",class:{"bg-red":1===t,"bg-grey":1!==t}})})),1)],1)],1),e("v-uni-view",{staticClass:"flex align-stretch margin-top-xs"},[e("v-uni-view",{staticClass:"bg-gradual-blue flex title text-xs"},[t._v("单双")]),e("v-uni-view",{staticClass:"solid flex align-center justify-start box"},[e("v-uni-view",{staticClass:"flex align-center flex-wrap"},t._l(t.handleList.dan,(function(t,s){return e("v-uni-view",{key:s,staticClass:"cu-tag item",class:{"bg-red":1===t,"bg-grey":1!==t}})})),1)],1)],1),e("v-uni-view",{staticClass:"flex align-stretch margin-top-xs"},[e("v-uni-view",{staticClass:"bg-gradual-blue flex title text-xs"},[t._v("对子")]),e("v-uni-view",{staticClass:"solid flex align-center justify-start box"},[e("v-uni-view",{staticClass:"flex align-center flex-wrap"},t._l(t.handleList.dui,(function(t,s){return e("v-uni-view",{key:s,staticClass:"cu-tag item",class:{"bg-red":1===t,"bg-grey":1!==t}})})),1)],1)],1),e("v-uni-view",{staticClass:"flex align-stretch margin-top-xs"},[e("v-uni-view",{staticClass:"bg-gradual-blue flex title text-xs"},[t._v("顺子")]),e("v-uni-view",{staticClass:"solid flex align-center justify-start box"},[e("v-uni-view",{staticClass:"flex align-center flex-wrap"},t._l(t.handleList.shun,(function(t,s){return e("v-uni-view",{key:s,staticClass:"cu-tag item",class:{"bg-red":1===t,"bg-grey":1!==t}})})),1)],1)],1),e("v-uni-view",{staticClass:"flex align-stretch margin-top-xs"},[e("v-uni-view",{staticClass:"bg-gradual-blue flex title text-xs"},[t._v("跳号")]),e("v-uni-view",{staticClass:"solid flex align-center justify-start box"},[e("v-uni-view",{staticClass:"flex align-center flex-wrap"},t._l(t.handleList.tiao,(function(t,s){return e("v-uni-view",{key:s,staticClass:"cu-tag item",class:{"bg-red":1===t,"bg-grey":1!==t}})})),1)],1)],1),e("v-uni-view",{staticClass:"flex align-stretch margin-top-xs"},[e("v-uni-view",{staticClass:"bg-gradual-blue flex title text-xs"},[t._v("飞号")]),e("v-uni-view",{staticClass:"solid flex align-center justify-start box"},[e("v-uni-view",{staticClass:"flex align-center flex-wrap"},t._l(t.handleList.fei,(function(t,s){return e("v-uni-view",{key:s,staticClass:"cu-tag item",class:{"bg-red":1===t,"bg-grey":1!==t}})})),1)],1)],1),e("v-uni-view",{staticClass:"flex align-stretch margin-top-xs"},[e("v-uni-view",{staticClass:"bg-gradual-blue flex title text-xs"},[t._v("攻击区")]),e("v-uni-view",{staticClass:"solid flex align-center justify-start box"},[e("v-uni-view",{staticClass:"flex align-center flex-wrap"},t._l(t.handleList.attack,(function(t,s){return e("v-uni-view",{key:s,staticClass:"cu-tag item",class:{"bg-red":1===t,"bg-grey":1!==t}})})),1)],1)],1),e("v-uni-view",{staticClass:"flex align-stretch margin-top-xs"},[e("v-uni-view",{staticClass:"bg-gradual-blue flex title text-xs"},[t._v("正确率")]),e("v-uni-view",{staticClass:"solid flex align-center justify-start box"},[e("v-uni-view",{staticClass:"flex align-center flex-wrap"},t._l(t.success,(function(t,s){return e("v-uni-view",{key:s,staticClass:"cu-tag item",class:{"bg-green":1===t,"bg-grey":1!==t}})})),1)],1)],1),e("v-uni-view",{staticClass:"flex align-stretch margin-top-xs"},[e("v-uni-view",{staticClass:"bg-gradual-green flex title"},[t._v("统计")]),e("v-uni-view",{staticClass:"solid flex align-center justify-start flex-wrap box"},[e("v-uni-view",{staticClass:"margin-bottom-xs margin-right-xs"},[e("v-uni-view",{staticClass:"cu-tag bg-orange"},[t._v("对")]),e("v-uni-view",{staticClass:"cu-tag line-orange no-ml"},[e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("出")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.dui.count))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("次，")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.dui.last))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("把没出")])],1)],1),e("v-uni-view",{staticClass:"margin-bottom-xs margin-right-xs"},[e("v-uni-view",{staticClass:"cu-tag bg-orange"},[t._v("顺")]),e("v-uni-view",{staticClass:"cu-tag line-orange no-ml"},[e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("出")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.shun.count))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("次，")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.shun.last))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("把没出")])],1)],1),e("v-uni-view",{staticClass:"margin-bottom-xs margin-right-xs"},[e("v-uni-view",{staticClass:"cu-tag bg-orange"},[t._v("跳")]),e("v-uni-view",{staticClass:"cu-tag line-orange no-ml"},[e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("出")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.tiao.count))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("次，")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.tiao.last))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("把没出")])],1)],1),e("v-uni-view",{staticClass:"margin-bottom-xs"},[e("v-uni-view",{staticClass:"cu-tag bg-orange"},[t._v("飞")]),e("v-uni-view",{staticClass:"cu-tag line-orange no-ml"},[e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("出")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.fei.count))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("次，")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.fei.last))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("把没出")])],1)],1),e("v-uni-view",{staticClass:"margin-bottom-xs"},[e("v-uni-view",{staticClass:"cu-tag bg-orange"},[t._v("0跨")]),e("v-uni-view",{staticClass:"cu-tag line-orange no-ml"},[e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("出")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.handleList.kua0.count))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("次，")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.handleList.kua0.last))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("把没出")])],1)],1),e("v-uni-view",{staticClass:"margin-bottom-xs"},[e("v-uni-view",{staticClass:"cu-tag bg-orange"},[t._v("1跨")]),e("v-uni-view",{staticClass:"cu-tag line-orange no-ml"},[e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("出")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.handleList.kua1.count))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("次，")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.handleList.kua1.last))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("把没出")])],1)],1),e("v-uni-view",{staticClass:"margin-bottom-xs"},[e("v-uni-view",{staticClass:"cu-tag bg-orange"},[t._v("2跨")]),e("v-uni-view",{staticClass:"cu-tag line-orange no-ml"},[e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("出")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.handleList.kua2.count))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("次，")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.handleList.kua2.last))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("把没出")])],1)],1),e("v-uni-view",{staticClass:"margin-bottom-xs"},[e("v-uni-view",{staticClass:"cu-tag bg-orange"},[t._v("3跨")]),e("v-uni-view",{staticClass:"cu-tag line-orange no-ml"},[e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("出")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.handleList.kua3.count))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("次，")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.handleList.kua3.last))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("把没出")])],1)],1),e("v-uni-view",{staticClass:"margin-bottom-xs"},[e("v-uni-view",{staticClass:"cu-tag bg-orange"},[t._v("4跨")]),e("v-uni-view",{staticClass:"cu-tag line-orange no-ml"},[e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("出")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.handleList.kua4.count))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("次，")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.handleList.kua4.last))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("把没出")])],1)],1),e("v-uni-view",{staticClass:"margin-bottom-xs"},[e("v-uni-view",{staticClass:"cu-tag bg-orange"},[t._v("5跨")]),e("v-uni-view",{staticClass:"cu-tag line-orange no-ml"},[e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("出")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.handleList.kua5.count))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("次，")]),e("v-uni-text",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.handleList.kua5.last))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("把没出")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"flex align-stretch margin-top-xs"},[e("v-uni-view",{staticClass:"bg-gradual-red flex title"},[t._v("结果")]),e("v-uni-view",{staticClass:"solid flex align-center justify-start flex-wrap box"},t._l(t.resultList,(function(s){return e("v-uni-view",{staticClass:"margin-bottom-xs margin-right-xs"},[e("v-uni-view",{staticClass:"cu-tag",class:s.cold?"bg-blue":"bg-green"},[t._v(t._s(s.value))]),e("v-uni-view",{staticClass:"cu-tag line-orange no-ml"},[t._v(t._s(s.info))])],1)})),1)],1),e("v-uni-view",{staticClass:"flex align-stretch margin-top-xs"},[e("v-uni-view",{staticClass:"bg-gradual-blue flex title"},[t._v("冷热")]),e("v-uni-view",{staticClass:"solid box"},[e("v-uni-view",{staticClass:"flex align-center flex-wrap"},t._l(t.hots,(function(s,i){return e("v-uni-view",{key:"hot-"+i,staticClass:"flex align-center margin-bottom-xs margin-right-xs"},[e("v-uni-view",{staticClass:"cu-tag bg-red"},[t._v(t._s(s.number))]),e("v-uni-view",{staticClass:"cu-tag line-red no-ml"},[e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("出")]),e("v-uni-text",{staticClass:"text-red text-xs"},[t._v(t._s(s.count))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("次，")]),e("v-uni-text",{staticClass:"text-red text-xs"},[t._v(t._s(s.last))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("把没出")])],1)],1)})),1),e("v-uni-view",{staticClass:"flex align-center flex-wrap"},t._l(t.colds,(function(s,i){return e("v-uni-view",{key:"cold-"+i,staticClass:"flex align-center margin-bottom-xs margin-right-xs"},[e("v-uni-view",{staticClass:"cu-tag bg-blue"},[t._v(t._s(s.number))]),e("v-uni-view",{staticClass:"cu-tag line-blue no-ml"},[s.last<0?[e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("没出过")])]:[e("v-uni-text",{staticClass:"text-red text-xs"},[t._v(t._s(s.last))]),e("v-uni-text",{staticClass:"text-grey text-xs"},[t._v("把没出")])]],2)],1)})),1)],1)],1)]:[e("v-uni-view",{staticClass:"cu-card text-left text-xs text-grey padding"},[e("v-uni-view",[t._v("请录入结果，可以连续录入，比如：846215128021535，也支持单个数字录入")]),e("v-uni-view",{staticClass:"margin-tb-xs"},[e("v-uni-text",{staticClass:"text-red"},[t._v("注意：")]),t._v("如果录入错误，只支持清空后重新录入")],1)],1)]],2),e("v-uni-view",{staticClass:"cu-bar input foot bottom-bar"},[e("v-uni-input",{staticClass:"solid-bottom",attrs:{type:"number",placeholder:"输入结果(允许录入多个)",name:"input"},model:{value:t.input,callback:function(s){t.input=s},expression:"input"}}),e("v-uni-button",{staticClass:"cu-btn bg-green shadow-blur",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.save.apply(void 0,arguments)}}},[t._v("提交")]),e("v-uni-button",{staticClass:"cu-btn bg-red shadow-blur margin-left-xs",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.del.apply(void 0,arguments)}}},[t._v("清空")])],1)],1)},a=[]},e03b:function(t,s,e){"use strict";var i=e("10bb"),a=e.n(i);a.a}}]);