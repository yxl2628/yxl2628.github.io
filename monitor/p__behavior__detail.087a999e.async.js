(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[613],{79611:function(_,J,r){"use strict";var R=r(67294),ee=r(20841),ce=r(23185),te=r(4322),de=r(24770),ue=r(26119),g=function(t,w){var E={};for(var Z in t)Object.prototype.hasOwnProperty.call(t,Z)&&w.indexOf(Z)<0&&(E[Z]=t[Z]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,Z=Object.getOwnPropertySymbols(t);P<Z.length;P++)w.indexOf(Z[P])<0&&Object.prototype.propertyIsEnumerable.call(t,Z[P])&&(E[Z[P]]=t[Z[P]]);return E},h=(0,R.forwardRef)(function(t,w){var E=t.chartRef,Z=t.style,P=Z===void 0?{height:"inherit"}:Z,ne=t.className,ae=t.loading,Q=t.loadingTemplate,X=t.errorTemplate,le=g(t,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),H=(0,ce.Z)(ee.$Q,le),V=H.chart,Y=H.container;return(0,R.useEffect)(function(){(0,te.J)(E,V.current)},[V.current]),(0,R.useImperativeHandle)(w,function(){return{getChart:function(){return V.current}}}),R.createElement(de.Z,{errorTemplate:X},ae&&R.createElement(ue.Z,{loadingTemplate:Q,theme:t.theme}),R.createElement("div",{className:ne,style:P,ref:Y}))});J.Z=h},69271:function(_){_.exports={content:"content___2Bekb",left:"left___119u8",center:"center___2jSyS",right:"right___2uO3K",detail:"detail___3jXGb",detailContent:"detailContent___1kx7F",detailInfo:"detailInfo___3Eo4W",detailDesc:"detailDesc___2RK21",detailTime:"detailTime___fNEis",page:"page___1M6_5"}},52953:function(){},57529:function(){},35817:function(_,J,r){"use strict";r.r(J),r.d(J,{default:function(){return qe}});var R=r(20228),ee=r(11382),ce=r(14781),te=r(40308),de=r(38663),ue=r(57529),g=r(22122),h=r(96156),t=r(67294),w=r(94184),E=r.n(w),Z=r(7085),P=r(65632),ne=function(l,e){var n={};for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&e.indexOf(a)<0&&(n[a]=l[a]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(l);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(l,a[i])&&(n[a[i]]=l[a[i]]);return n},ae=function(e){var n,a,i=e.prefixCls,d=e.className,c=e.color,f=c===void 0?"blue":c,m=e.dot,x=e.pending,v=x===void 0?!1:x,b=e.position,j=e.label,C=e.children,u=ne(e,["prefixCls","className","color","dot","pending","position","label","children"]),O=t.useContext(P.E_),A=O.getPrefixCls,s=A("timeline",i),M=E()((n={},(0,h.Z)(n,"".concat(s,"-item"),!0),(0,h.Z)(n,"".concat(s,"-item-pending"),v),n),d),D=E()((a={},(0,h.Z)(a,"".concat(s,"-item-head"),!0),(0,h.Z)(a,"".concat(s,"-item-head-custom"),!!m),(0,h.Z)(a,"".concat(s,"-item-head-").concat(f),!0),a));return t.createElement("li",(0,g.Z)({},u,{className:M}),j&&t.createElement("div",{className:"".concat(s,"-item-label")},j),t.createElement("div",{className:"".concat(s,"-item-tail")}),t.createElement("div",{className:D,style:{borderColor:/blue|red|green|gray/.test(f||"")?void 0:f}},m),t.createElement("div",{className:"".concat(s,"-item-content")},C))},Q=ae,X=r(96159),le=function(l,e){var n={};for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&e.indexOf(a)<0&&(n[a]=l[a]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(l);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(l,a[i])&&(n[a[i]]=l[a[i]]);return n},H=function(e){var n,a=t.useContext(P.E_),i=a.getPrefixCls,d=a.direction,c=e.prefixCls,f=e.pending,m=f===void 0?null:f,x=e.pendingDot,v=e.children,b=e.className,j=e.reverse,C=j===void 0?!1:j,u=e.mode,O=u===void 0?"":u,A=le(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),s=i("timeline",c),M=typeof m=="boolean"?null:m,D=m?t.createElement(Q,{pending:!!m,dot:x||t.createElement(Z.Z,null)},M):null,p=t.Children.toArray(v);p.push(D),C&&p.reverse();var B=function(y,se){return O==="alternate"?y.props.position==="right"?"".concat(s,"-item-right"):y.props.position==="left"||se%2==0?"".concat(s,"-item-left"):"".concat(s,"-item-right"):O==="left"?"".concat(s,"-item-left"):O==="right"||y.props.position==="right"?"".concat(s,"-item-right"):""},L=p.filter(function(S){return!!S}),T=t.Children.count(L),I="".concat(s,"-item-last"),z=t.Children.map(L,function(S,y){var se=y===T-2?I:"",_e=y===T-1?I:"";return(0,X.Tm)(S,{className:E()([S.props.className,!C&&!!m?se:_e,B(S,y)])})}),K=p.some(function(S){var y;return!!((y=S==null?void 0:S.props)===null||y===void 0?void 0:y.label)}),N=E()(s,(n={},(0,h.Z)(n,"".concat(s,"-pending"),!!m),(0,h.Z)(n,"".concat(s,"-reverse"),!!C),(0,h.Z)(n,"".concat(s,"-").concat(O),!!O&&!K),(0,h.Z)(n,"".concat(s,"-label"),K),(0,h.Z)(n,"".concat(s,"-rtl"),d==="rtl"),n),b);return t.createElement("ul",(0,g.Z)({},A,{className:N}),z)};H.Item=Q;var V=H,Y=V,et=r(58024),G=r(39144),tt=r(49111),be=r(19650),nt=r(22385),Oe=r(69713),at=r(52953),je=r(28481),me=r(90484),Ne=r(50344),k=r(24308),Pe=r(21687);function q(l){return l!=null}var Me=function(e){var n=e.itemPrefixCls,a=e.component,i=e.span,d=e.className,c=e.style,f=e.labelStyle,m=e.contentStyle,x=e.bordered,v=e.label,b=e.content,j=e.colon,C=a;if(x){var u;return t.createElement(C,{className:E()((u={},(0,h.Z)(u,"".concat(n,"-item-label"),q(v)),(0,h.Z)(u,"".concat(n,"-item-content"),q(b)),u),d),style:c,colSpan:i},q(v)&&t.createElement("span",{style:f},v),q(b)&&t.createElement("span",{style:m},b))}return t.createElement(C,{className:E()("".concat(n,"-item"),d),style:c,colSpan:i},t.createElement("div",{className:"".concat(n,"-item-container")},v&&t.createElement("span",{className:E()("".concat(n,"-item-label"),(0,h.Z)({},"".concat(n,"-item-no-colon"),!j)),style:f},v),b&&t.createElement("span",{className:E()("".concat(n,"-item-content")),style:m},b)))},re=Me;function oe(l,e,n){var a=e.colon,i=e.prefixCls,d=e.bordered,c=n.component,f=n.type,m=n.showLabel,x=n.showContent,v=n.labelStyle,b=n.contentStyle;return l.map(function(j,C){var u=j.props,O=u.label,A=u.children,s=u.prefixCls,M=s===void 0?i:s,D=u.className,p=u.style,B=u.labelStyle,L=u.contentStyle,T=u.span,I=T===void 0?1:T,z=j.key;return typeof c=="string"?t.createElement(re,{key:"".concat(f,"-").concat(z||C),className:D,style:p,labelStyle:(0,g.Z)((0,g.Z)({},v),B),contentStyle:(0,g.Z)((0,g.Z)({},b),L),span:I,colon:a,component:c,itemPrefixCls:M,bordered:d,label:m?O:null,content:x?A:null}):[t.createElement(re,{key:"label-".concat(z||C),className:D,style:(0,g.Z)((0,g.Z)((0,g.Z)({},v),p),B),span:1,colon:a,component:c[0],itemPrefixCls:M,bordered:d,label:O}),t.createElement(re,{key:"content-".concat(z||C),className:D,style:(0,g.Z)((0,g.Z)((0,g.Z)({},b),p),L),span:I*2-1,component:c[1],itemPrefixCls:M,bordered:d,content:A})]})}var Ae=function(e){var n=t.useContext(ve),a=e.prefixCls,i=e.vertical,d=e.row,c=e.index,f=e.bordered;return i?t.createElement(t.Fragment,null,t.createElement("tr",{key:"label-".concat(c),className:"".concat(a,"-row")},oe(d,e,(0,g.Z)({component:"th",type:"label",showLabel:!0},n))),t.createElement("tr",{key:"content-".concat(c),className:"".concat(a,"-row")},oe(d,e,(0,g.Z)({component:"td",type:"content",showContent:!0},n)))):t.createElement("tr",{key:c,className:"".concat(a,"-row")},oe(d,e,(0,g.Z)({component:f?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))},De=Ae,Le=function(e){var n=e.children;return n},Fe=Le,ve=t.createContext({}),fe={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function Te(l,e){if(typeof l=="number")return l;if((0,me.Z)(l)==="object")for(var n=0;n<k.c4.length;n++){var a=k.c4[n];if(e[a]&&l[a]!==void 0)return l[a]||fe[a]}return 3}function pe(l,e,n){var a=l;return(e===void 0||e>n)&&(a=(0,X.Tm)(l,{span:n}),(0,Pe.Z)(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),a}function Ie(l,e){var n=(0,Ne.Z)(l).filter(function(c){return c}),a=[],i=[],d=e;return n.forEach(function(c,f){var m,x=(m=c.props)===null||m===void 0?void 0:m.span,v=x||1;if(f===n.length-1){i.push(pe(c,x,d)),a.push(i);return}v<d?(d-=v,i.push(c)):(i.push(pe(c,v,d)),a.push(i),d=e,i=[])}),a}function he(l){var e,n=l.prefixCls,a=l.title,i=l.extra,d=l.column,c=d===void 0?fe:d,f=l.colon,m=f===void 0?!0:f,x=l.bordered,v=l.layout,b=l.children,j=l.className,C=l.style,u=l.size,O=l.labelStyle,A=l.contentStyle,s=t.useContext(P.E_),M=s.getPrefixCls,D=s.direction,p=M("descriptions",n),B=t.useState({}),L=(0,je.Z)(B,2),T=L[0],I=L[1],z=Te(c,T);t.useEffect(function(){var S=k.ZP.subscribe(function(y){(0,me.Z)(c)==="object"&&I(y)});return function(){k.ZP.unsubscribe(S)}},[]);var K=Ie(b,z),N=t.useMemo(function(){return{labelStyle:O,contentStyle:A}},[O,A]);return t.createElement(ve.Provider,{value:N},t.createElement("div",{className:E()(p,(e={},(0,h.Z)(e,"".concat(p,"-").concat(u),u&&u!=="default"),(0,h.Z)(e,"".concat(p,"-bordered"),!!x),(0,h.Z)(e,"".concat(p,"-rtl"),D==="rtl"),e),j),style:C},(a||i)&&t.createElement("div",{className:"".concat(p,"-header")},a&&t.createElement("div",{className:"".concat(p,"-title")},a),i&&t.createElement("div",{className:"".concat(p,"-extra")},i)),t.createElement("div",{className:"".concat(p,"-view")},t.createElement("table",null,t.createElement("tbody",null,K.map(function(S,y){return t.createElement(De,{key:y,index:y,colon:m,prefixCls:p,vertical:v==="vertical",bordered:x,row:S})}))))))}he.Item=Fe;var $=he,W=r(2824),U=r(28991),ze={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M312.1 591.5c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8 86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8a8.03 8.03 0 00-11.3 0L517 485.3l-86.1-86.2a8.03 8.03 0 00-11.3 0L275.3 543.4a8.03 8.03 0 000 11.3l36.8 36.8z"}},{tag:"path",attrs:{d:"M904 160H548V96c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H120c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h356.4v32L311.6 884.1a7.92 7.92 0 00-2.3 11l30.3 47.2v.1c2.4 3.7 7.4 4.7 11.1 2.3L512 838.9l161.3 105.8c3.7 2.4 8.7 1.4 11.1-2.3v-.1l30.3-47.2a8 8 0 00-2.3-11L548 776.3V744h356c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 512H160V232h704v440z"}}]},name:"fund-projection-screen",theme:"outlined"},Be=ze,ie=r(27029),ye=function(e,n){return t.createElement(ie.Z,(0,U.Z)((0,U.Z)({},e),{},{ref:n,icon:Be}))};ye.displayName="FundProjectionScreenOutlined";var Re=t.forwardRef(ye),we={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M952 474H829.8C812.5 327.6 696.4 211.5 550 194.2V72c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v122.2C327.6 211.5 211.5 327.6 194.2 474H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h122.2C211.5 696.4 327.6 812.5 474 829.8V952c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V829.8C696.4 812.5 812.5 696.4 829.8 550H952c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM512 756c-134.8 0-244-109.2-244-244s109.2-244 244-244 244 109.2 244 244-109.2 244-244 244z"}},{tag:"path",attrs:{d:"M512 392c-32.1 0-62.1 12.4-84.8 35.2-22.7 22.7-35.2 52.7-35.2 84.8s12.5 62.1 35.2 84.8C449.9 619.4 480 632 512 632s62.1-12.5 84.8-35.2C619.4 574.1 632 544 632 512s-12.5-62.1-35.2-84.8A118.57 118.57 0 00512 392z"}}]},name:"aim",theme:"outlined"},$e=we,ge=function(e,n){return t.createElement(ie.Z,(0,U.Z)((0,U.Z)({},e),{},{ref:n,icon:$e}))};ge.displayName="AimOutlined";var We=t.forwardRef(ge),Ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]},name:"send",theme:"outlined"},Ke=Ue,xe=function(e,n){return t.createElement(ie.Z,(0,U.Z)((0,U.Z)({},e),{},{ref:n,icon:Ke}))};xe.displayName="SendOutlined";var Ce=t.forwardRef(xe),He=r(38819),Ve=r(14283),Se=r(11849),Ee=r(79611),o=r(85893),Ge=function(e){var n={data:e.data,legend:!1,xField:"value",yField:"api",yAxis:!1,seriesField:"api",minBarWidth:20,maxBarWidth:20,height:140};return(0,o.jsx)(Ee.Z,(0,Se.Z)({},n))},Je=Ge,Qe=function(e){var n={data:e.data,legend:!1,xField:"value",yField:"second",seriesField:"second",minBarWidth:20,maxBarWidth:20,height:140};return(0,o.jsx)(Ee.Z,(0,Se.Z)({},n))},Xe=Qe,Ye=r(69271),F=r.n(Ye),Ze={view:{text:"\u9875\u9762\u6D4F\u89C8",component:(0,o.jsx)(Re,{style:{color:"rgb(49, 201, 204)",fontSize:18}})},click:{text:"\u70B9\u51FB",component:(0,o.jsx)(We,{style:{color:"rgb(255, 147, 38)",fontSize:18}})},request:{text:"request\u8BF7\u6C42",component:(0,o.jsx)(Ce,{style:{color:"rgb(33, 136, 255)",fontSize:18}})},response:{text:"response\u54CD\u5E94",component:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Ce,{style:{color:"rgb(33, 136, 255)",fontSize:18}}),(0,o.jsx)(He.Z,{style:{position:"absolute",right:0,bottom:0,fontSize:12,color:"rgb(40, 167, 69)"}})]})},error:{text:"\u53D1\u751F\u9519\u8BEF",component:(0,o.jsx)(Ve.Z,{style:{color:"rgb(248, 81, 73)",fontSize:18}})}},ke=function(){var e=(0,t.useState)(!1),n=(0,W.Z)(e,2),a=n[0],i=n[1],d=(0,t.useState)(1),c=(0,W.Z)(d,2),f=c[0],m=c[1],x=(0,t.useState)(5),v=(0,W.Z)(x,2),b=v[0],j=v[1],C=(0,t.useState)([]),u=(0,W.Z)(C,2),O=u[0],A=u[1],s=(0,t.useState)([]),M=(0,W.Z)(s,2),D=M[0],p=M[1],B=(0,t.useState)([]),L=(0,W.Z)(B,2),T=L[0],I=L[1],z=function(){A([{api:"/base/api/front/locale/all",value:Math.ceil(Math.random()*100)},{api:"/mdata/api/carousels/query/by/company",value:Math.ceil(Math.random()*100)},{api:"/workflow/api/workflow/my/document/detail/2",value:Math.ceil(Math.random()*100)},{api:"/mdata/api/my/department",value:Math.ceil(Math.random()*100)},{api:"/workflow/api/workflow/my",value:Math.ceil(Math.random()*100)}]),p([{second:"<1\u79D2",value:Math.ceil(Math.random()*100)},{second:"1-5\u79D2",value:Math.ceil(Math.random()*100)},{second:"5-10\u79D2",value:Math.ceil(Math.random()*100)},{second:"10-30\u79D2",value:Math.ceil(Math.random()*100)},{second:">30\u79D2",value:Math.ceil(Math.random()*100)}]),I([{id:7,type:"view",value:"/current_affairs/expense_current_affair_sponsor/expense_current_affair_detail/1585903126254526465",time:"2022-11-16 17:33:31"},{id:6,type:"error",value:"\u63A5\u53E3\u9519\u8BEF\uFF1A/workflow/api/workflow/my/document/detail/2",time:"2022-11-16 17:31:33"},{id:5,type:"response",value:"\u63A5\u53E3\u8FD4\u56DE\uFF1A/workflow/api/workflow/my/document/detail/2",duration:"1.2",time:"2022-11-16 17:31:33"},{id:4,type:"request",value:"\u63A5\u53E3\u8BF7\u6C42\uFF1A/workflow/api/workflow/my/document/detail/2",time:"2022-11-16 17:31:33"},{id:3,type:"click",value:"\u70B9\u51FBbutton\u6807\u7B7E \u6807\u7B7E\u5185\u5BB9\uFF1A\u65B0\u5EFA",time:"2022-11-16 17:32:11"},{id:2,type:"view",value:"/current_affairs/expense_current_affair_sponsor/expense_current_affair_detail/1585903126254526465",time:"2022-11-16 17:23:21"}])};(0,t.useEffect)(function(){i(!0),z(),setTimeout(function(){i(!1)},1e3)},[]);var K=function(S,y){m(S),j(y)};return(0,o.jsxs)(ee.Z,{spinning:a,children:[(0,o.jsxs)("div",{className:F().content,children:[(0,o.jsx)(G.Z,{title:"\u7528\u6237\u57FA\u672C\u4FE1\u606F",className:F().left,bodyStyle:{padding:"5px 15px"},children:(0,o.jsxs)($,{size:"small",column:1,children:[(0,o.jsx)($.Item,{label:"\u7528\u6237\u540D",children:"yangxiaolong-ghq"}),(0,o.jsx)($.Item,{label:"\u6D4F\u89C8\u5668",children:(0,o.jsxs)(be.Z,{children:[(0,o.jsx)("span",{children:"Chrome"}),(0,o.jsx)(Oe.Z,{title:"Mozilla/5.0 (Linux; U; Android 10; zh-CN; COL-AL10 Build/HUAWEICOL-AL10) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 UCBrowser/13.3.8.1118 Mobile Safari/537.36",children:(0,o.jsx)("a",{children:"\u8BE6\u60C5"})})]})}),(0,o.jsx)($.Item,{label:"\u7F51\u7EDC\u5730\u5740",children:"183.192.229.124"}),(0,o.jsx)($.Item,{label:"\u6240\u5728\u5730\u533A",children:"\u5317\u4EAC"}),(0,o.jsx)($.Item,{label:"\u672B\u6B21\u64CD\u4F5C\u65F6\u95F4",children:"2022\u5E7411\u670816\u65E5 16:27:35"})]})}),(0,o.jsx)(G.Z,{title:"\u9875\u9762\u5E73\u5747\u52A0\u8F7D\u65F6\u95F4",className:F().center,bodyStyle:{padding:"5px 15px"},children:(0,o.jsx)(Je,{data:O})}),(0,o.jsx)(G.Z,{title:"\u63A5\u53E3\u8017\u65F6\u533A\u95F4\u5206\u5E03",className:F().right,bodyStyle:{padding:"5px 15px"},children:(0,o.jsx)(Xe,{data:D})})]}),(0,o.jsxs)(G.Z,{title:"\u884C\u4E3A\u8BB0\u5F55\u8BE6\u60C5",className:F().detail,children:[(0,o.jsx)(Y,{children:T.map(function(N){return(0,o.jsx)(Y.Item,{dot:Ze[N.type].component,children:(0,o.jsx)(G.Z,{className:F().detailContent,bodyStyle:{padding:"5px 10px"},children:(0,o.jsxs)("div",{className:F().detailInfo,children:[(0,o.jsxs)("div",{className:F().detailDesc,children:[(0,o.jsx)("div",{children:Ze[N.type].text}),(0,o.jsxs)("div",{children:[N.value,N.type==="response"?(0,o.jsxs)("span",{style:{color:"rgb(82, 196, 26)",marginLeft:5},children:["\u8017\u65F6\uFF1A",N.duration,"s"]}):""]})]}),(0,o.jsx)("div",{className:F().detailTime,children:N.time})]})})},N.id)})}),(0,o.jsx)("div",{className:F().page,children:(0,o.jsx)(te.Z,{size:"small",current:f,pageSize:b,total:500,onChange:K})})]})]})},qe=ke}}]);