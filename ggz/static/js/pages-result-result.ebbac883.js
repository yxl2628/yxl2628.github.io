(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-result-result"],{"0c98":function(t,e,s){"use strict";s("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,s("f7a5"),s("bf0f"),s("2797"),s("5ef2"),s("aa9c"),s("f3f7"),s("18f7"),s("de6c"),s("8f71"),s("5c47"),s("0506"),s("c223"),s("fd3c"),s("e966");var i={data:function(){return{input:"",list:[],result:[],statistics:{},big:0,odd:0,attack:0,successPer:0,next:[]}},methods:{init:function(){var t=this;this.result=[],this.big=0,this.odd=0,this.attack=0,this.statistics=this.getInitData();var e=this.list.slice(-15);e.forEach((function(s,i){var a=e[i-1];t.statistics[s].value+=1,t.statistics[s].last=0;for(var n=0;n<=9;n++)s!==n&&(t.statistics[n].last+=1);var r=s>=5;r?(t.statistics.big.value+=1,t.statistics.big.last=0,t.statistics.small.last+=1):(t.statistics.small.value+=1,t.statistics.small.last=0,t.statistics.big.last+=1);var l=s%2!==0;l?(t.statistics.odd.value+=1,t.statistics.odd.last=0,t.statistics.even.last+=1):(t.statistics.even.value+=1,t.statistics.even.last=0,t.statistics.odd.last+=1),i%2===0&&(r&&(t.big+=1),l&&(t.odd+=1));for(var u=t.getDiff(a,s),c=0;c<=5;c++)u===c?(t.statistics["kua".concat(c)].value+=1,t.statistics["kua".concat(c)].last=0):t.statistics["kua".concat(c)].last+=1;var o=t.getAttackArea(a);console.log(s,a,o);var v=o.indexOf(s)>=0;v?(t.attack+=1,t.statistics.attack.value+=1,t.statistics.attack.last=0,t.statistics.noAttack.last+=1):(t.statistics.noAttack.value+=1,t.statistics.noAttack.last=0,t.statistics.attack.last+=1),t.result.push({value:s,big:r,odd:l,diff:u,attack:v})})),this.count()},count:function(){var t=this.list[this.list.length-1],e=[];this.big>5&&(e[0]="small"),this.big<3&&(e[0]="big"),this.odd>5&&(e[1]="even"),this.odd<3&&(e[1]="odd"),console.log(this.list.join("")),console.log("大",this.big,"单",this.odd);var s=0,i=0;this.list.slice(-4).forEach((function(t,e){t>=5&&(s+=1),t%2!==0&&(i+=1)})),0===s&&(console.log("连小"),e[0]="small"),4===s&&(console.log("连大"),e[0]="big"),0===i&&(console.log("连双"),e[1]="even"),4===i&&(console.log("连单"),e[1]="odd");var a=[];"big"===e[0]?(console.log("出大"),a=[5,6,7,8,9]):"small"===e[0]?(console.log("出小"),a=[0,1,2,3,4]):a=[0,1,2,3,4,5,6,7,8,9];var n=[];"odd"===e[1]?(console.log("出单"),n=[1,3,5,7,9]):"even"===e[1]?(console.log("出双"),n=[0,2,4,6,8]):n=[0,1,2,3,4,5,6,7,8,9];var r=new Set(a);this.next=n.filter((function(t){return r.has(t)}));var l=[];if(0===this.statistics.noAttack.last){console.log("只打攻区"),l=this.getAttackArea(t);var u=new Set(l);this.next=this.next.filter((function(t){return u.has(t)}))}10===this.next.length&&(this.next=[]),this.$forceUpdate()},getDui:function(t){return t<5?t+5:t-5},getAttackArea:function(t){var e=[];switch(t){case"0":e=[7,8,9,1,2,3];break;case 1:e=[8,9,0,2,3,4];break;case 2:e=[9,0,1,3,4,5];break;case 7:e=[4,5,6,8,9,0];break;case 8:e=[5,6,7,9,0,1];break;case 9:e=[0,1,2,6,7,8];break;default:e=[t-1,t-2,t-3,t+1,t+2,t+3]}return e},getDiff:function(t,e){if(void 0===t)return-1;var s=0;return s=t<e?e-t:t-e,s<=5&&s>=0?s:Math.abs(s-10)},save:function(){if(this.input){/^(\d+?)+$/.test(this.input)?(this.list=this.list.concat(this.input.split("").map((function(t){return parseInt(t)}))),this.init(),this.input=""):uni.showToast({title:"输入不合法，只允许输入数字",icon:"none"})}else uni.showToast({title:"请录入结果，可以一次录入多个",icon:"none"})},del:function(){this.list.length>0&&(this.init(),this.list=[],this.successList=[],this.success=0,this.error=0,this.successPercent=0,this.$forceUpdate())},getInitData:function(){return{0:{value:0,last:0},1:{value:0,last:0},2:{value:0,last:0},3:{value:0,last:0},4:{value:0,last:0},5:{value:0,last:0},6:{value:0,last:0},7:{value:0,last:0},8:{value:0,last:0},9:{value:0,last:0},big:{value:0,last:0},small:{value:0,last:0},odd:{value:0,last:0},even:{value:0,last:0},attack:{value:0,last:0},noAttack:{value:0,last:0},kua0:{value:0,last:0},kua1:{value:0,last:0},kua2:{value:0,last:0},kua3:{value:0,last:0},kua4:{value:0,last:0},kua5:{value:0,last:0}}}}};e.default=i},"1ea2":function(t,e,s){"use strict";var i=s("af9e"),a=s("1c06"),n=s("ada5"),r=s("5d6e"),l=Object.isExtensible,u=i((function(){l(1)}));t.exports=u||r?function(t){return!!a(t)&&((!r||"ArrayBuffer"!==n(t))&&(!l||l(t)))}:l},3911:function(t,e,s){"use strict";s.r(e);var i=s("0c98"),a=s.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(n);e["default"]=a.a},5075:function(t,e,s){"use strict";var i=s("ae5c"),a=s("71e9"),n=s("e7e3"),r=s("52df"),l=s("81a7"),u=s("1fc1"),c=s("1297"),o=s("d67c"),v=s("5112"),f=s("7e91"),d=TypeError,g=function(t,e){this.stopped=t,this.result=e},h=g.prototype;t.exports=function(t,e,s){var b,p,x,w,k,y,_,m=s&&s.that,C=!(!s||!s.AS_ENTRIES),E=!(!s||!s.IS_RECORD),A=!(!s||!s.IS_ITERATOR),O=!(!s||!s.INTERRUPTED),j=i(e,m),S=function(t){return b&&f(b,"normal",t),new g(!0,t)},I=function(t){return C?(n(t),O?j(t[0],t[1],S):j(t[0],t[1])):O?j(t,S):j(t)};if(E)b=t.iterator;else if(A)b=t;else{if(p=v(t),!p)throw new d(r(t)+" is not iterable");if(l(p)){for(x=0,w=u(t);w>x;x++)if(k=I(t[x]),k&&c(h,k))return k;return new g(!1)}b=o(t,p)}y=E?t.next:b.next;while(!(_=a(y,b)).done){try{k=I(_.value)}catch(z){f(b,"throw",z)}if("object"==typeof k&&k&&c(h,k))return k}return new g(!1)}},"53f7":function(t,e,s){"use strict";var i=s("7658"),a=s("57e7");i("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},"57e7":function(t,e,s){"use strict";var i=s("e37c"),a=s("e4ca"),n=s("a74c"),r=s("ae5c"),l=s("b720"),u=s("1eb8"),c=s("5075"),o=s("0cc2"),v=s("97ed"),f=s("437f"),d=s("ab4a"),g=s("d0b1").fastKey,h=s("235c"),b=h.set,p=h.getterFor;t.exports={getConstructor:function(t,e,s,o){var v=t((function(t,a){l(t,f),b(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),d||(t.size=0),u(a)||c(a,t[o],{that:t,AS_ENTRIES:s})})),f=v.prototype,h=p(e),x=function(t,e,s){var i,a,n=h(t),r=w(t,e);return r?r.value=s:(n.last=r={index:a=g(e,!0),key:e,value:s,previous:i=n.last,next:void 0,removed:!1},n.first||(n.first=r),i&&(i.next=r),d?n.size++:t.size++,"F"!==a&&(n.index[a]=r)),t},w=function(t,e){var s,i=h(t),a=g(e);if("F"!==a)return i.index[a];for(s=i.first;s;s=s.next)if(s.key===e)return s};return n(f,{clear:function(){var t=h(this),e=t.first;while(e)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),e=e.next;t.first=t.last=void 0,t.index=i(null),d?t.size=0:this.size=0},delete:function(t){var e=h(this),s=w(this,t);if(s){var i=s.next,a=s.previous;delete e.index[s.index],s.removed=!0,a&&(a.next=i),i&&(i.previous=a),e.first===s&&(e.first=i),e.last===s&&(e.last=a),d?e.size--:this.size--}return!!s},forEach:function(t){var e,s=h(this),i=r(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:s.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!w(this,t)}}),n(f,s?{get:function(t){var e=w(this,t);return e&&e.value},set:function(t,e){return x(this,0===t?0:t,e)}}:{add:function(t){return x(this,t=0===t?0:t,t)}}),d&&a(f,"size",{configurable:!0,get:function(){return h(this).size}}),v},setStrong:function(t,e,s){var i=e+" Iterator",a=p(e),n=p(i);o(t,e,(function(t,e){b(this,{type:i,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=n(this),e=t.kind,s=t.last;while(s&&s.removed)s=s.previous;return t.target&&(t.last=s=s?s.next:t.state.first)?v("keys"===e?s.key:"values"===e?s.value:[s.key,s.value],!1):(t.target=void 0,v(void 0,!0))}),s?"entries":"values",!s,!0),f(e)}}},"5d6e":function(t,e,s){"use strict";var i=s("af9e");t.exports=i((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},6955:function(t,e,s){"use strict";var i=s("c4dd"),a=s.n(i);a.a},"6d67":function(t,e,s){"use strict";s.r(e);var i=s("ee46"),a=s("3911");for(var n in a)["default"].indexOf(n)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(n);s("6955");var r=s("828b"),l=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"1230f15c",null,!1,i["a"],void 0);e["default"]=l.exports},7658:function(t,e,s){"use strict";var i=s("8bdb"),a=s("85c1"),n=s("bb80"),r=s("8466"),l=s("81a9"),u=s("d0b1"),c=s("5075"),o=s("b720"),v=s("474f"),f=s("1eb8"),d=s("1c06"),g=s("af9e"),h=s("29ba"),b=s("181d"),p=s("dcda");t.exports=function(t,e,s){var x=-1!==t.indexOf("Map"),w=-1!==t.indexOf("Weak"),k=x?"set":"add",y=a[t],_=y&&y.prototype,m=y,C={},E=function(t){var e=n(_[t]);l(_,t,"add"===t?function(t){return e(this,0===t?0:t),this}:"delete"===t?function(t){return!(w&&!d(t))&&e(this,0===t?0:t)}:"get"===t?function(t){return w&&!d(t)?void 0:e(this,0===t?0:t)}:"has"===t?function(t){return!(w&&!d(t))&&e(this,0===t?0:t)}:function(t,s){return e(this,0===t?0:t,s),this})},A=r(t,!v(y)||!(w||_.forEach&&!g((function(){(new y).entries().next()}))));if(A)m=s.getConstructor(e,t,x,k),u.enable();else if(r(t,!0)){var O=new m,j=O[k](w?{}:-0,1)!==O,S=g((function(){O.has(1)})),I=h((function(t){new y(t)})),z=!w&&g((function(){var t=new y,e=5;while(e--)t[k](e,e);return!t.has(-0)}));I||(m=e((function(t,e){o(t,_);var s=p(new y,t,m);return f(e)||c(e,s[k],{that:s,AS_ENTRIES:x}),s})),m.prototype=_,_.constructor=m),(S||z)&&(E("delete"),E("has"),x&&E("get")),(z||j)&&E(k),w&&_.clear&&delete _.clear}return C[t]=m,i({global:!0,constructor:!0,forced:m!==y},C),b(m,t),w||s.setStrong(m,t,x),m}},c238:function(t,e,s){"use strict";var i=s("af9e");t.exports=!i((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c4dd:function(t,e,s){var i=s("d04e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=s("967d").default;a("02c788b6",i,!0,{sourceMap:!1,shadowMode:!1})},d04e:function(t,e,s){var i=s("c86c");e=i(!1),e.push([t.i,".body[data-v-1230f15c]{width:100vw;overflow-y:auto;font-size:%?24?%;line-height:%?50?%}.body .no-ml[data-v-1230f15c]{margin-left:0}.body .no-padding[data-v-1230f15c]{padding-left:0;padding-right:0}.body .solid-right[data-v-1230f15c]{border-right:1px solid transparent}.body .bottom-bar[data-v-1230f15c]{bottom:%?100?%}",""]),t.exports=e},d0b1:function(t,e,s){"use strict";var i=s("8bdb"),a=s("bb80"),n=s("11bf"),r=s("1c06"),l=s("338c"),u=s("d6b1").f,c=s("80bb"),o=s("8449"),v=s("1ea2"),f=s("d7b4"),d=s("c238"),g=!1,h=f("meta"),b=0,p=function(t){u(t,h,{value:{objectID:"O"+b++,weakData:{}}})},x=t.exports={enable:function(){x.enable=function(){},g=!0;var t=c.f,e=a([].splice),s={};s[h]=1,t(s).length&&(c.f=function(s){for(var i=t(s),a=0,n=i.length;a<n;a++)if(i[a]===h){e(i,a,1);break}return i},i({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:o.f}))},fastKey:function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!l(t,h)){if(!v(t))return"F";if(!e)return"E";p(t)}return t[h].objectID},getWeakData:function(t,e){if(!l(t,h)){if(!v(t))return!0;if(!e)return!1;p(t)}return t[h].weakData},onFreeze:function(t){return d&&g&&v(t)&&!l(t,h)&&p(t),t}};n[h]=!0},ee46:function(t,e,s){"use strict";s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return a})),s.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"body"},[s("cu-custom",{attrs:{bgColor:"bg-gradual-pink"}},[s("template",{attrs:{slot:"content"},slot:"content"},[t._v("正确率："+t._s(t.successPer)+"%")])],2),s("v-uni-view",{staticClass:"list"},[t.result.length>0?s("v-uni-view",{staticClass:"shadow-warp"},t._l(t.result,(function(e,i){return s("v-uni-view",{staticClass:"flex align-center text-center"},[t._l(10,(function(a){return s("v-uni-view",{staticClass:"flex-sub solid-right",class:{"bg-red":a-1===e.value,"bg-yellow":a-1!==e.value&&i%2===0,"bg-yellow light":a-1!==e.value&&i%2!==0}},[t._v(t._s(a-1))])})),s("v-uni-view",{staticClass:"flex-sub solid-right",class:{"bg-red":e.big,"bg-yellow":!e.big&&i%2===0,"bg-yellow light":!e.big&&i%2!==0}},[t._v(t._s(e.big?"大":"小"))]),s("v-uni-view",{staticClass:"flex-sub solid-right",class:{"bg-red":e.odd,"bg-yellow":!e.odd&&i%2===0,"bg-yellow light":!e.odd&&i%2!==0}},[t._v(t._s(e.odd?"单":"双"))]),s("v-uni-view",{staticClass:"flex-sub",class:{"bg-red":e.attack,"bg-yellow":!e.attack}},[t._v(t._s(e.attack?"攻":"跳"))]),s("v-uni-view",{staticClass:"bg-blue flex-sub solid-right"},[t._v(t._s(e.diff<0?" ":e.diff))])],2)})),1):[s("v-uni-view",{staticClass:"cu-card text-left text-xs text-grey padding"},[s("v-uni-view",[t._v("请录入结果，可以连续录入，比如：846215128021535，也支持单个数字录入")]),s("v-uni-view",{staticClass:"margin-tb-xs"},[s("v-uni-text",{staticClass:"text-red"},[t._v("注意：")]),t._v("如果录入错误，只支持清空后重新录入")],1)],1)]],2),t.result.length>0?s("v-uni-view",{staticClass:"flex align-stretch margin-top-xs"},[s("v-uni-view",{staticClass:"bg-gradual-green flex align-center nav padding-lr-sm"},[t._v("统计")]),s("v-uni-view",{staticClass:"flex align-center justify-start flex-wrap padding-sm solid"},[t._l(10,(function(e){return s("v-uni-view",{key:e-1,staticClass:"margin-bottom-xs margin-right-xs"},[s("v-uni-view",{staticClass:"cu-tag",class:{"bg-red":t.statistics[e-1].value>=4,"bg-blue":0==t.statistics[e-1].value,"bg-orange":t.statistics[e-1].value<4&&t.statistics[e-1].value>0}},[t._v(t._s(e-1))]),s("v-uni-view",{staticClass:"cu-tag line-orange no-ml"},[s("v-uni-view",{staticClass:"text-red text-xs padding-lr-xs"},[t._v(t._s(t.statistics[e-1].value))])],1)],1)})),t._l(6,(function(e){return s("v-uni-view",{key:"kua"+(e-1),staticClass:"margin-bottom-xs margin-right-xs"},[s("v-uni-view",{staticClass:"cu-tag bg-orange"},[t._v(t._s(e-1)+"跨")]),s("v-uni-view",{staticClass:"cu-tag line-orange no-ml no-padding"},[s("v-uni-view",{staticClass:"text-red text-xs padding-lr-xs solid-right"},[t._v(t._s(t.statistics["kua"+(e-1)].value))]),s("v-uni-view",{staticClass:"text-blue text-xs padding-lr-xs"},[t._v(t._s(t.statistics["kua"+(e-1)].last))])],1)],1)}))],2)],1):t._e(),t.result.length>0?s("v-uni-view",{staticClass:"flex align-stretch margin-top-xs"},[s("v-uni-view",{staticClass:"bg-gradual-green flex align-center nav padding-lr-sm"},[t._v("结果")]),s("v-uni-view",{staticClass:"flex align-center justify-start flex-wrap padding-sm solid flex-sub"},[t.next.length>0?s("v-uni-view",t._l(t.next,(function(e){return s("v-uni-view",{key:"next"+e,staticClass:"cu-tag bg-green"},[t._v(t._s(e))])})),1):s("v-uni-view",{staticClass:"text-red flex-sub text-center"},[t._v("号码不规律，暂缓押注")])],1)],1):t._e(),s("v-uni-view",{staticClass:"cu-bar input foot bottom-bar"},[s("v-uni-input",{staticClass:"solid-bottom",attrs:{placeholder:"输入结果(允许录入多个)",name:"input"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),s("v-uni-button",{staticClass:"cu-btn bg-green shadow-blur",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v("提交")]),s("v-uni-button",{staticClass:"cu-btn bg-red shadow-blur margin-left-xs",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.del.apply(void 0,arguments)}}},[t._v("清空")])],1)],1)},a=[]},f3f7:function(t,e,s){"use strict";s("53f7")}}]);