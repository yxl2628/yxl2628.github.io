(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[887],{70347:function(){},63668:function(O,i,a){"use strict";a.r(i);var c=a(58024),_=a(39144),n=a(8963),K=a(34441),P=a(2824),U=a(57663),C=a(71577),J=a(20136),W=a(19181),x=a(67294),S=a(21010),f=a(85893),j=[{dataIndex:"userId",title:"\u7528\u6237id",width:150},{dataIndex:"userName",title:"\u7528\u6237\u540D",width:150},{dataIndex:"pageTitle",title:"\u9875\u9762\u540D\u79F0",render:function(d,m){return(0,f.jsx)(W.Z,{content:m.page,children:(0,f.jsx)("a",{children:d})})}},{dataIndex:"ip",title:"\u7528\u6237ip\u5730\u5740",width:150},{dataIndex:"location",title:"\u4F4D\u7F6E",width:150},{dataIndex:"date",title:"\u53D1\u751F\u65F6\u95F4",width:180},{dataIndex:"operation",title:"\u64CD\u4F5C",width:100,render:function(d,m){return(0,f.jsx)(C.Z,{type:"link",onClick:function(){return S.m8.push("/behavior/detail?id=".concat(m.userId))},children:"\u7528\u6237\u7EC6\u67E5"})}}],B=function(){var d=(0,x.useState)([]),m=(0,P.Z)(d,2),A=m[0],w=m[1];return(0,x.useEffect)(function(){w([{userId:121231232132128,userName:"\u7528\u6237A",pageTitle:"\u5DE5\u4F5C\u53F0\u76D1\u63A7",page:"/workflow/api/workflow/approval/history",ip:"10.0.123.123",location:"\u5317\u4EAC",date:"2022-04-22 19:24:21"},{userId:234123123213212,userName:"\u7528\u6237B",pageTitle:"\u6211\u7684\u7968\u5939",page:"xpense/api/expense/report/checkResult/mark",ip:"172.0.231.43",location:"\u5929\u6D25",date:"2022-04-22 19:24:21"},{userId:523231232132137,userName:"\u7528\u6237C",pageTitle:"\u62A5\u8D26\u5355",page:"expense/api/expense/application/header/query/created",ip:"192.126.12.67",location:"\u4E0A\u6D77",date:"2022-04-22 19:24:21"},{userId:974123123213214,userName:"\u7528\u6237D",pageTitle:"\u8D39\u7528\u7533\u8BF7\u5355",page:"/workflow/api/workflow/approval/history",ip:"10.4.123.37",location:"\u5C71\u4E1C\u70DF\u53F0",date:"2022-04-22 19:24:21"},{userId:547123123213215,userName:"\u7528\u6237E",pageTitle:"\u62A5\u8D26\u5355\u8D22\u52A1\u67E5\u8BE2",page:"prepayment/api/cash/pay/requisition/types/by/exp/application",ip:"10.0.54.72",location:"\u798F\u5EFA\u53A6\u95E8",date:"2022-04-22 19:24:21"}])},[]),(0,f.jsx)(_.Z,{children:(0,f.jsx)(K.Z,{rowKey:"userId",columns:j,dataSource:A})})};i.default=B},39144:function(O,i,a){"use strict";a.d(i,{Z:function(){return re}});var c=a(96156),_=a(22122),n=a(67294),K=a(94184),P=a.n(K),U=a(98423),C=a(65632),J=function(e,l){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)l.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o},W=function(l){var o=l.prefixCls,t=l.className,r=l.hoverable,D=r===void 0?!0:r,g=J(l,["prefixCls","className","hoverable"]);return n.createElement(C.C,null,function(b){var h=b.getPrefixCls,p=h("card",o),u=P()("".concat(p,"-grid"),t,(0,c.Z)({},"".concat(p,"-grid-hoverable"),D));return n.createElement("div",(0,_.Z)({},g,{className:u}))})},x=W,S=function(e,l){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)l.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o},f=function(l){return n.createElement(C.C,null,function(o){var t=o.getPrefixCls,r=l.prefixCls,D=l.className,g=l.avatar,b=l.title,h=l.description,p=S(l,["prefixCls","className","avatar","title","description"]),u=t("card",r),G=P()("".concat(u,"-meta"),D),M=g?n.createElement("div",{className:"".concat(u,"-meta-avatar")},g):null,T=b?n.createElement("div",{className:"".concat(u,"-meta-title")},b):null,N=h?n.createElement("div",{className:"".concat(u,"-meta-description")},h):null,L=T||N?n.createElement("div",{className:"".concat(u,"-meta-detail")},T,N):null;return n.createElement("div",(0,_.Z)({},p,{className:G}),M,L)})},j=f,B=a(11029),E=a(71230),d=a(15746),m=a(97647),A=function(e,l){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)l.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};function w(e){var l=e.map(function(o,t){return n.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(t)},n.createElement("span",null,o))});return l}var z=n.forwardRef(function(e,l){var o,t,r=n.useContext(C.E_),D=r.getPrefixCls,g=r.direction,b=n.useContext(m.Z),h=function(R){var y;(y=e.onTabChange)===null||y===void 0||y.call(e,R)},p=function(){var R;return n.Children.forEach(e.children,function(y){y&&y.type&&y.type===x&&(R=!0)}),R},u=e.prefixCls,G=e.className,M=e.extra,T=e.headStyle,N=T===void 0?{}:T,L=e.bodyStyle,$=L===void 0?{}:L,F=e.title,Q=e.loading,V=e.bordered,le=V===void 0?!0:V,ce=e.size,X=e.type,Y=e.cover,H=e.actions,Z=e.tabList,oe=e.children,k=e.activeTabKey,se=e.defaultActiveTabKey,de=e.tabBarExtraContent,ie=e.hoverable,q=e.tabProps,_e=q===void 0?{}:q,ve=A(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),s=D("card",u),ue=$.padding===0||$.padding==="0px"?{padding:24}:void 0,v=n.createElement("div",{className:"".concat(s,"-loading-block")}),Ee=n.createElement("div",{className:"".concat(s,"-loading-content"),style:ue},n.createElement(E.Z,{gutter:8},n.createElement(d.Z,{span:22},v)),n.createElement(E.Z,{gutter:8},n.createElement(d.Z,{span:8},v),n.createElement(d.Z,{span:15},v)),n.createElement(E.Z,{gutter:8},n.createElement(d.Z,{span:6},v),n.createElement(d.Z,{span:18},v)),n.createElement(E.Z,{gutter:8},n.createElement(d.Z,{span:13},v),n.createElement(d.Z,{span:9},v)),n.createElement(E.Z,{gutter:8},n.createElement(d.Z,{span:4},v),n.createElement(d.Z,{span:3},v),n.createElement(d.Z,{span:16},v))),ee=k!==void 0,me=(0,_.Z)((0,_.Z)({},_e),(o={},(0,c.Z)(o,ee?"activeKey":"defaultActiveKey",ee?k:se),(0,c.Z)(o,"tabBarExtraContent",de),o)),te,ae=Z&&Z.length?n.createElement(B.Z,(0,_.Z)({size:"large"},me,{className:"".concat(s,"-head-tabs"),onChange:h}),Z.map(function(I){return n.createElement(B.Z.TabPane,{tab:I.tab,disabled:I.disabled,key:I.key})})):null;(F||M||ae)&&(te=n.createElement("div",{className:"".concat(s,"-head"),style:N},n.createElement("div",{className:"".concat(s,"-head-wrapper")},F&&n.createElement("div",{className:"".concat(s,"-head-title")},F),M&&n.createElement("div",{className:"".concat(s,"-extra")},M)),ae));var fe=Y?n.createElement("div",{className:"".concat(s,"-cover")},Y):null,ye=n.createElement("div",{className:"".concat(s,"-body"),style:$},Q?Ee:oe),Oe=H&&H.length?n.createElement("ul",{className:"".concat(s,"-actions")},w(H)):null,Pe=(0,U.Z)(ve,["onTabChange"]),ne=ce||b,Ce=P()(s,(t={},(0,c.Z)(t,"".concat(s,"-loading"),Q),(0,c.Z)(t,"".concat(s,"-bordered"),le),(0,c.Z)(t,"".concat(s,"-hoverable"),ie),(0,c.Z)(t,"".concat(s,"-contain-grid"),p()),(0,c.Z)(t,"".concat(s,"-contain-tabs"),Z&&Z.length),(0,c.Z)(t,"".concat(s,"-").concat(ne),ne),(0,c.Z)(t,"".concat(s,"-type-").concat(X),!!X),(0,c.Z)(t,"".concat(s,"-rtl"),g==="rtl"),t),G);return n.createElement("div",(0,_.Z)({ref:l},Pe,{className:Ce}),te,fe,ye,Oe)});z.Grid=x,z.Meta=j;var re=z},58024:function(O,i,a){"use strict";var c=a(38663),_=a.n(c),n=a(70347),K=a.n(n),P=a(18106),U=a(13062),C=a(89032)},15746:function(O,i,a){"use strict";var c=a(21584);i.Z=c.Z},89032:function(O,i,a){"use strict";var c=a(38663),_=a.n(c),n=a(6999)},71230:function(O,i,a){"use strict";var c=a(92820);i.Z=c.Z},13062:function(O,i,a){"use strict";var c=a(38663),_=a.n(c),n=a(6999)}}]);
