(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[40],{79611:function(S,P,a){"use strict";var p=a(67294),C=a(20841),A=a(23185),E=a(4322),H=a(24770),F=a(26119),L=function(r,y){var j={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&y.indexOf(i)<0&&(j[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,i=Object.getOwnPropertySymbols(r);e<i.length;e++)y.indexOf(i[e])<0&&Object.prototype.propertyIsEnumerable.call(r,i[e])&&(j[i[e]]=r[i[e]]);return j},O=(0,p.forwardRef)(function(r,y){var j=r.chartRef,i=r.style,e=i===void 0?{height:"inherit"}:i,s=r.className,g=r.loading,T=r.loadingTemplate,u=r.errorTemplate,B=L(r,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),t=(0,A.Z)(C.$Q,B),Z=t.chart,R=t.container;return(0,p.useEffect)(function(){(0,E.J)(j,Z.current)},[Z.current]),(0,p.useImperativeHandle)(y,function(){return{getChart:function(){return Z.current}}}),p.createElement(H.Z,{errorTemplate:u},g&&p.createElement(F.Z,{loadingTemplate:T,theme:r.theme}),p.createElement("div",{className:s,style:e,ref:R}))});P.Z=O},83972:function(S){S.exports={item:"item___3AtC2",info:"info___1VIty"}},4784:function(S){S.exports={content:"content___RHzJZ",left:"left___2VVUR",stat:"stat___Zn_IT",right:"right___1Uyor"}},22482:function(S,P,a){"use strict";a.r(P),a.d(P,{default:function(){return st}});var p=a(58024),C=a(39144),A=a(20228),E=a(11382),H=a(48736),F=a(27049),L=a(57663),O=a(71577),r=a(49111),y=a(19650),j=a(95300),i=a(7277),e=a(2824),s=a(67294),g=a(11849),T=a(30381),u=a.n(T),B=a(78677),t=a(85893),Z=function(){var h={xField:"date",yField:"count",height:180,xAxis:{label:{autoHide:!0,autoRotate:!0}},meta:{date:{alias:"\u65E5\u671F"},count:{alias:"\u9875\u9762\u8017\u65F6"}}},c=(0,s.useState)([]),l=(0,e.Z)(c,2),x=l[0],f=l[1];return(0,s.useEffect)(function(){for(var n=u()().subtract(1,"month"),m=u()(),o=[];u()(n).isBefore(m);)o.push({date:n.format("MM-DD"),count:Math.ceil(Math.random()*100)}),n=u()(n).add(1,"days");f(o)},[]),(0,t.jsx)("div",{style:{margin:"0 20px"},children:(0,t.jsx)(B.Z,(0,g.Z)((0,g.Z)({},h),{},{data:x}))})},R=Z,V=a(64183),J=function(){var h={xField:"date",yField:"count",height:180,color:"#a07e16",xAxis:{label:{autoHide:!0,autoRotate:!0}},meta:{date:{alias:"\u65F6\u95F4"},count:{alias:"\u9875\u9762\u8017\u65F6"}}},c=(0,s.useState)([]),l=(0,e.Z)(c,2),x=l[0],f=l[1];return(0,s.useEffect)(function(){for(var n=u()().subtract(1,"day"),m=u()(),o=[];u()(n).isBefore(m);)o.push({date:n.format("HH:00"),count:Math.ceil(Math.random()*100)}),n=u()(n).add(1,"hour");f(o)},[]),(0,t.jsx)("div",{style:{margin:"0 20px"},children:(0,t.jsx)(V.Z,(0,g.Z)((0,g.Z)({},h),{},{data:x}))})},Q=J,$=function(){var h={xField:"date",yField:"count",height:180,color:"#F4664A",xAxis:{label:{autoHide:!0,autoRotate:!0}},meta:{date:{alias:"\u65E5\u671F"},count:{alias:"\u9875\u9762\u8017\u65F6"}}},c=(0,s.useState)([]),l=(0,e.Z)(c,2),x=l[0],f=l[1];return(0,s.useEffect)(function(){for(var n=u()().subtract(1,"hour"),m=u()(),o=[];u()(n).isBefore(m);)o.push({date:n.format("HH:mm"),count:Math.ceil(Math.random()*100)}),n=u()(n).add(2,"minute");f(o)},[]),(0,t.jsx)("div",{style:{margin:"0 20px"},children:(0,t.jsx)(B.Z,(0,g.Z)((0,g.Z)({},h),{},{data:x}))})},G=$,X=a(4784),v=a.n(X),ct=a(22385),Y=a(69713),b=a(8812),k=a(83972),I=a.n(k),w=function(h){var c=(0,s.useState)(0),l=(0,e.Z)(c,2),x=l[0],f=l[1],n=(0,s.useState)([]),m=(0,e.Z)(n,2),o=m[0],N=m[1];return(0,s.useEffect)(function(){var d=[{id:0,title:"/workflow/api/workflow/approval/history",count:13},{id:1,title:"api/userRole/query/user/status",count:19},{id:2,title:"prepayment/api/cash/prepayment/requisitionHead/get/by/applicationHeaderId",count:11},{id:3,title:"prepayment/api/cash/pay/requisition/types/by/exp/application",count:11},{id:4,title:"xpense/api/expense/report/checkResult/mark",count:21},{id:5,title:"expense/api/expense/application/header/query/created",count:5}];N(d),f(d[0].id)},[]),(0,t.jsx)("div",{children:o.map(function(d){return(0,t.jsx)(Y.Z,{title:d.title,children:(0,t.jsxs)("div",{className:I().item,style:{backgroundColor:d.id===x?"rgba(24,144,255, 0.4)":"transparent"},onClick:function(){f(d.id),h.onChange(d.id)},children:[(0,t.jsx)("div",{className:I().info,children:d.title}),"\uFF08",d.count,"\uFF09",(0,t.jsx)(b.Z,{})]})},d.id)})})},q=w,_=a(79611),tt=function(h){var c={data:h.data,xField:"value",yField:"http",seriesField:"http",minBarWidth:20,maxBarWidth:20,height:220};return(0,t.jsx)(_.Z,(0,g.Z)({},c))},at=tt,et=["<1","1-5","5-10","10-30",">30"],nt=function(){var h=(0,s.useState)("5-10"),c=(0,e.Z)(h,2),l=c[0],x=c[1],f=(0,s.useState)(!1),n=(0,e.Z)(f,2),m=n[0],o=n[1],N=(0,s.useState)(!1),d=(0,e.Z)(N,2),U=d[0],W=d[1],rt=(0,s.useState)(0),K=(0,e.Z)(rt,2),it=K[0],ut=K[1],lt=(0,s.useState)([]),z=(0,e.Z)(lt,2),ot=z[0],dt=z[1];return(0,s.useEffect)(function(){o(!0),setTimeout(function(){o(!1)},1e3)},[l]),(0,s.useEffect)(function(){W(!0),setTimeout(function(){var D=[{http:"TCP\u8FDE\u63A5",value:Math.ceil(Math.random()*100)},{http:"DNS\u89E3\u6790",value:Math.ceil(Math.random()*100)},{http:"\u53D1\u8D77\u8BF7\u6C42",value:Math.ceil(Math.random()*100)},{http:"\u8BF7\u6C42\u54CD\u5E94",value:Math.ceil(Math.random()*100)},{http:"DOM\u89E3\u6790",value:Math.ceil(Math.random()*100)},{http:"\u9875\u9762\u52A0\u8F7D",value:Math.ceil(Math.random()*100)}];dt(D),W(!1)},1e3)},[it]),(0,t.jsx)(C.Z,{children:(0,t.jsxs)(E.Z,{spinning:m,children:[(0,t.jsxs)("div",{className:v().content,children:[(0,t.jsxs)("div",{className:v().left,children:[(0,t.jsx)("h3",{children:"\u9875\u9762\u8017\u65F6\u5206\u6BB5"}),(0,t.jsxs)(y.Z,{size:"large",children:[(0,t.jsx)(i.Z,{title:"\u53D1\u751F\u6B21\u6570",value:1232,suffix:"\u6B21"}),(0,t.jsx)(i.Z,{title:"\u767E\u5206\u6BD4",value:1.24,suffix:"%"})]}),(0,t.jsx)(y.Z,{className:v().stat,children:et.map(function(D){return(0,t.jsxs)(O.Z,{type:l===D?"primary":"default",size:"large",onClick:function(){return x(D)},children:[D,"\u79D2"]},D)})})]}),(0,t.jsxs)("div",{className:v().right,children:[(0,t.jsx)("h3",{children:"1\u6708\u5185\u53D8\u5316\u8D8B\u52BF"}),(0,t.jsx)(R,{})]})]}),(0,t.jsx)(F.Z,{}),(0,t.jsxs)("div",{className:v().content,children:[(0,t.jsxs)("div",{className:v().left,children:[(0,t.jsx)("h3",{children:"1\u5929\u5185\u53D8\u5316\u8D8B\u52BF"}),(0,t.jsx)(Q,{})]}),(0,t.jsxs)("div",{className:v().right,children:[(0,t.jsx)("h3",{children:"1\u5C0F\u65F6\u5185\u53D8\u5316\u8D8B\u52BF"}),(0,t.jsx)(G,{})]})]}),(0,t.jsx)(F.Z,{}),(0,t.jsxs)("div",{className:v().content,children:[(0,t.jsxs)("div",{className:v().left,children:[(0,t.jsx)("h3",{children:"\u9875\u9762\u5217\u8868"}),(0,t.jsx)(q,{onChange:ut})]}),(0,t.jsxs)("div",{className:v().right,children:[(0,t.jsx)("h3",{children:"\u52A0\u8F7D\u8BA1\u65F6\uFF08ms\uFF09"}),(0,t.jsx)(E.Z,{spinning:U,children:(0,t.jsx)(at,{data:ot})})]})]})]})})},st=nt}}]);