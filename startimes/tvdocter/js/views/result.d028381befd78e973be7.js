webpackJsonp([1],{"0jG4":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var a=n("oAV5"),s=n("VsUZ"),i=n.n(s),r=function(t,e,n){Object(a.d)(i.a.baseUrl+i.a.addCase+"?"+Object(a.c)(t),{},"POST",e,n)},o=function(t,e,n){Object(a.d)(i.a.baseUrl+i.a.getInquiryRecord+"?"+Object(a.c)(t),{},"POST",e,n)}},BQ5I:function(t,e,n){t.exports=n.p+"static/img/user.35e732e.jpg"},GSX7:function(t,e,n){t.exports=n.p+"static/img/admin.7276b48.jpg"},NoX5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("zRHb"),i=new a.a({el:"#app",render:function(t){return t(s.a)}});a.a.use({app:i})},UMJL:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"dialog-header"},[t._v("自助诊疗")]),t._v(" "),a("div",{staticClass:"dialog-body",staticStyle:{background:"url('../static/bg.jpg')",padding:"0"}},[a("div",{staticClass:"dialog",attrs:{id:"dialog"}},[t._l(t.resultList,function(e){return["response"==e.action||"upload_image"==e.action?a("div",{staticClass:"message me"},[a("img",{staticClass:"avatar",attrs:{src:n("BQ5I")}}),t._v(" "),a("div",{staticClass:"dialog-content"},[a("div",{staticClass:"bubble bubble_primary right"},[a("div",{staticClass:"bubble_cont"},["response"==e.action||"取消上传"==e.content?a("div",{staticClass:"plain"},[t._v(t._s(e.content))]):t._e(),t._v(" "),"upload_image"==e.action&&"取消上传"!=e.content?a("img",{attrs:{src:e.content,height:"200px"}}):t._e()])])])]):t._e(),t._v(" "),"question"==e.action||"conclusion"==e.action?a("div",{staticClass:"message"},[a("img",{staticClass:"avatar",attrs:{src:n("GSX7")}}),t._v(" "),a("div",{staticClass:"dialog-content"},[a("div",{staticClass:"bubble bubble_default left"},[a("div",{staticClass:"bubble_cont"},["question"==e.action?a("div",{staticClass:"plain"},[t._v(t._s(e.content))]):t._e(),t._v(" "),"conclusion"==e.action?a("div",{staticClass:"plain",domProps:{innerHTML:t._s(e.content)}}):t._e()])])])]):t._e()]})],2)]),t._v(" "),t.debug?a("div",{directives:[{name:"show",rawName:"v-show",value:t.errorMessage,expression:"errorMessage"}],staticClass:"error"},[t._v("\r\n    "+t._s(t.errorMessage)+"\r\n  ")]):t._e()])},s=[],i={render:a,staticRenderFns:s};e.a=i},VsUZ:function(t,e){t.exports={baseUrl:window.baseUrl||"",addCase:"/fushionbaby-app/inquiry/addCase",getInquiryRecord:"/fushionbaby-app/inquiry/getInquiryRecord"}},enU8:function(t,e,n){"use strict";var a=n("mvHQ"),s=n.n(a),i=n("0jG4"),r=null;e.a={data:function(){return{debug:!0,errorMessage:"",resultList:[]}},mounted:function(){this.sessionid=localStorage.getItem("sessionid"),this.casecode=localStorage.getItem("casecode"),this.localDate="",this.getResult()},updated:function(){var t=document.getElementById("dialog");t.scrollTop=t.scrollHeight},methods:{getResult:function(){var t=this;r=setInterval(function(){Object(i.b)({sessionid:t.sessionid,casecode:t.casecode,localDate:t.localDate},function(e){var n="string"==typeof e?JSON.parse(e):e;if("0"===n.responseCode){if("finish"===n.data.finish&&n.data.InquiryList.length>0){t.localDate=n.data.localDate,t.resultList=t.resultList.concat(n.data.InquiryList);for(var a=0;a<n.data.InquiryList.length;a++){var i=n.data.InquiryList[a];"conclusion"===i.action&&clearInterval(r)}}}else t.errorMessage="请求结果返回错误，结果为："+s()(n)},function(e){t.errorMessage="请求服务器错误，错误日志为："+e})},3e3)}}}},g8a3:function(t,e){},oAV5:function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return c});var a=n("mvHQ"),s=(n.n(a),n("vLgD")),i=function(t,e,n,a,i){s.a.ajax({url:t,data:e,method:n,dataType:"json",success:function(t){a&&a(t)},error:function(t){i&&i(t)}})},r=function(){var t=new Date,e=t.getMonth()+1,n=t.getDate();return e>=1&&e<=9&&(e="0"+e),n>=0&&n<=9&&(n="0"+n),t.getFullYear()+"-"+e+"-"+n+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},o=function(t){var e=new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[""];return e.length>1?decodeURIComponent(e[1].replace(/\+/g,"%20"))||null:""},c=function(t){if(t&&t instanceof Object){var e=[];for(var n in t)if(t.hasOwnProperty(n)){if("token"===n)continue;"function"==typeof t[n]&&(t[n]=t[n]()),null===t[n]&&(t[n]=""),e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]))}return e.join("&")}return t}},vLgD:function(t,e,n){"use strict";function a(t){function e(){}function n(t){if(t&&t instanceof Object){var e=[];for(var n in t)if(t.hasOwnProperty(n)){if("token"===n)continue;"function"==typeof t[n]&&(t[n]=t[n]()),null===t[n]&&(t[n]=""),e.push(escape(n)+"="+escape(t[n]))}return e.join("&")}return t}var a={url:"",sync:!0,method:"GET",data:null,username:null,password:null,dataType:null,success:e,error:e,timeout:0};for(var s in t)t.hasOwnProperty(s)&&(a[s]=t[s]);var r={script:"text/javascript, application/javascript, application/x-javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},o=null,c=new XMLHttpRequest;c.onreadystatechange=function(){if(4===c.readyState){c.onreadystatechange=e,clearTimeout(o);var t,n;if(c.status>=200&&c.status<300||304===c.status||0===c.status){if("arraybuffer"===c.responseType||"blob"===c.responseType)t=c.response;else{t=c.responseText,n=a.dataType?a.dataType:c.getResponseHeader("content-type").split("",1)[0];for(var s in r)r.hasOwnProperty(s)&&r[s].indexOf(n)>-1&&(n=s);try{"script"===n?console.log("不允许执行script代码"):"xml"===n?t=c.responseXML:"json"===n&&(t=""===t.trim()?null:JSON.parse(t))}catch(t){a.error(t,c),c.abort()}}a.success(t,c)}else a.error(c.statusText,c)}},"GET"===a.method&&(a.url=a.url+"?"+n(a.data)),c.open(a.method,a.url,a.sync,a.username,a.password),a.timeout>0&&(o=setTimeout(function(){c.onreadystatechange=e,c.abort(),a.error("timeout",c)},a.timeout)),c.send("POST"===a.method?i()(a.data):n(a.data))}var s=n("mvHQ"),i=n.n(s);e.a={ajax:a}},zRHb:function(t,e,n){"use strict";function a(t){n("g8a3")}var s=n("enU8"),i=n("UMJL"),r=n("VU/8"),o=a,c=r(s.a,i.a,!1,o,null,null);e.a=c.exports}},["NoX5"]);
//# sourceMappingURL=result.d028381befd78e973be7.js.map