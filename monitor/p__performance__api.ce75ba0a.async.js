(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[252],{19308:function(p){p.exports={body:"body___1FF5e",card:"card___1Zp92",info:"info___2d05W",icon1:"icon1___1B21M",icon2:"icon2___2GrHp",icon3:"icon3___aZWmO",list:"list___3UdZp"}},83972:function(p){p.exports={item:"item___3AtC2",info:"info___1VIty"}},4784:function(p){p.exports={content:"content___RHzJZ",left:"left___2VVUR",stat:"stat___Zn_IT",right:"right___1Uyor"}},31228:function(p,N,e){"use strict";e.r(N),e.d(N,{default:function(){return ot}});var pt=e(58024),P=e(39144),gt=e(20228),D=e(11382),jt=e(48736),y=e(27049),Zt=e(57663),L=e(71577),yt=e(49111),S=e(19650),St=e(95300),A=e(7277),c=e(2824),a=e(67294),g=e(11849),I=e(30381),o=e.n(I),C=e(78677),t=e(85893),V=function(){var r={xField:"date",yField:"count",height:180,xAxis:{label:{autoHide:!0,autoRotate:!0}},meta:{date:{alias:"\u65E5\u671F"},count:{alias:"\u63A5\u53E3\u8017\u65F6"}}},i=(0,a.useState)([]),l=(0,c.Z)(i,2),f=l[0],m=l[1];return(0,a.useEffect)(function(){for(var s=o()().subtract(1,"month"),h=o()(),u=[];o()(s).isBefore(h);)u.push({date:s.format("MM-DD"),count:Math.ceil(Math.random()*100)}),s=o()(s).add(1,"days");m(u)},[]),(0,t.jsx)("div",{style:{margin:"0 20px"},children:(0,t.jsx)(C.Z,(0,g.Z)((0,g.Z)({},r),{},{data:f}))})},U=V,W=e(64183),G=function(){var r={xField:"date",yField:"count",height:180,color:"#a07e16",xAxis:{label:{autoHide:!0,autoRotate:!0}},meta:{date:{alias:"\u65F6\u95F4"},count:{alias:"\u63A5\u53E3\u8017\u65F6"}}},i=(0,a.useState)([]),l=(0,c.Z)(i,2),f=l[0],m=l[1];return(0,a.useEffect)(function(){for(var s=o()().subtract(1,"day"),h=o()(),u=[];o()(s).isBefore(h);)u.push({date:s.format("HH:00"),count:Math.ceil(Math.random()*100)}),s=o()(s).add(1,"hour");m(u)},[]),(0,t.jsx)("div",{style:{margin:"0 20px"},children:(0,t.jsx)(W.Z,(0,g.Z)((0,g.Z)({},r),{},{data:f}))})},J=G,K=function(){var r={xField:"date",yField:"count",height:180,color:"#F4664A",xAxis:{label:{autoHide:!0,autoRotate:!0}},meta:{date:{alias:"\u65E5\u671F"},count:{alias:"\u63A5\u53E3\u8017\u65F6"}}},i=(0,a.useState)([]),l=(0,c.Z)(i,2),f=l[0],m=l[1];return(0,a.useEffect)(function(){for(var s=o()().subtract(1,"hour"),h=o()(),u=[];o()(s).isBefore(h);)u.push({date:s.format("HH:mm"),count:Math.ceil(Math.random()*100)}),s=o()(s).add(2,"minute");m(u)},[]),(0,t.jsx)("div",{style:{margin:"0 20px"},children:(0,t.jsx)(C.Z,(0,g.Z)((0,g.Z)({},r),{},{data:f}))})},Q=K,X=e(4784),v=e.n(X),Ft=e(22385),Y=e(69713),$=e(8812),b=e(83972),M=e.n(b),k=function(r){var i=(0,a.useState)(0),l=(0,c.Z)(i,2),f=l[0],m=l[1],s=(0,a.useState)([]),h=(0,c.Z)(s,2),u=h[0],F=h[1];return(0,a.useEffect)(function(){var d=[{id:0,title:"/workflow/api/workflow/approval/history",count:13},{id:1,title:"api/userRole/query/user/status",count:19},{id:2,title:"prepayment/api/cash/prepayment/requisitionHead/get/by/applicationHeaderId",count:11},{id:3,title:"prepayment/api/cash/pay/requisition/types/by/exp/application",count:11},{id:4,title:"xpense/api/expense/report/checkResult/mark",count:21},{id:5,title:"expense/api/expense/application/header/query/created",count:5}];F(d),m(d[0].id)},[]),(0,t.jsx)("div",{children:u.map(function(d){return(0,t.jsx)(Y.Z,{title:d.title,children:(0,t.jsxs)("div",{className:M().item,style:{backgroundColor:d.id===f?"rgba(24,144,255, 0.4)":"transparent"},onClick:function(){m(d.id),r.onChange(d.id)},children:[(0,t.jsx)("div",{className:M().info,children:d.title}),"\uFF08",d.count,"\uFF09",(0,t.jsx)($.Z,{})]})},d.id)})})},w=k,Z=e(28991),q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c.1-6.2-5-11.2-11.1-11.2z"}},{tag:"path",attrs:{d:"M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7a321 321 0 01-44.5 55.7 317.17 317.17 0 01-101.3 68.3c-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3a321 321 0 0144.5 55.7c3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8a9.18 9.18 0 00-8.2-13.3z"}}]},name:"field-time",theme:"outlined"},_=q,B=e(27029),T=function(r,i){return a.createElement(B.Z,(0,Z.Z)((0,Z.Z)({},r),{},{ref:i,icon:_}))};T.displayName="FieldTimeOutlined";var tt=a.forwardRef(T),et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"}}]},name:"team",theme:"outlined"},at=et,H=function(r,i){return a.createElement(B.Z,(0,Z.Z)((0,Z.Z)({},r),{},{ref:i,icon:at}))};H.displayName="TeamOutlined";var st=a.forwardRef(H),nt=e(99165),it=e(19308),n=e.n(it),lt=function(r){return(0,t.jsxs)("div",{className:n().body,children:[(0,t.jsxs)(S.Z,{size:"large",children:[(0,t.jsxs)("div",{className:n().card,style:{backgroundColor:"#e0b226"},children:[(0,t.jsxs)("div",{className:n().info,children:[(0,t.jsx)("div",{className:n().title,children:"\u5E73\u5747\u7F51\u7EDC\u8017\u65F6"}),(0,t.jsx)("div",{className:n().value,children:"17.21s"})]}),(0,t.jsx)("div",{className:n().icon1,children:(0,t.jsx)(tt,{})})]}),(0,t.jsxs)("div",{className:n().card,style:{backgroundColor:"#ff7956"},children:[(0,t.jsxs)("div",{className:n().info,children:[(0,t.jsx)("div",{className:n().title,children:"\u5F71\u54CD\u7528\u6237"}),(0,t.jsx)("div",{className:n().value,children:"2\u4EBA"})]}),(0,t.jsx)("div",{className:n().icon2,children:(0,t.jsx)(st,{})})]}),(0,t.jsxs)("div",{className:n().card,style:{backgroundColor:"#2196f3"},children:[(0,t.jsxs)("div",{className:n().info,children:[(0,t.jsx)("div",{className:n().title,children:"\u53D1\u751F\u9875\u9762"}),(0,t.jsx)("div",{className:n().value,children:"6"})]}),(0,t.jsx)("div",{className:n().icon3,children:(0,t.jsx)(nt.Z,{})})]})]}),(0,t.jsx)(y.Z,{children:"\u5F71\u54CD\u9875\u9762\u5217\u8868"}),r.data.map(function(i,l){return(0,t.jsxs)("div",{className:n().list,children:[(0,t.jsx)("div",{className:n().info,children:i.url}),(0,t.jsxs)("div",{children:["\uFF08",i.count,"\uFF09"]})]},l)})]})},rt=lt,ut=["<1","1-5","5-10","10-30",">30"],dt=function(){var r=(0,a.useState)("5-10"),i=(0,c.Z)(r,2),l=i[0],f=i[1],m=(0,a.useState)(!1),s=(0,c.Z)(m,2),h=s[0],u=s[1],F=(0,a.useState)(!1),d=(0,c.Z)(F,2),O=d[0],E=d[1],ct=(0,a.useState)(0),z=(0,c.Z)(ct,2),vt=z[0],mt=z[1],ht=(0,a.useState)([]),R=(0,c.Z)(ht,2),ft=R[0],xt=R[1];return(0,a.useEffect)(function(){u(!0),setTimeout(function(){u(!1)},1e3)},[l]),(0,a.useEffect)(function(){E(!0),setTimeout(function(){var j=[{url:"http://10.7.132.237:9081/#/expense_management/document_management/expense_requisition/expense_requisition",count:18},{url:"http://10.7.132.237:9081/#/expense_management/document_management/expense_report/expense_report",count:4},{url:"http://10.7.132.237:9081/#/expense_management/document_management/expense_invoice_pocket/expense_invoice_pocket",count:23},{url:"http://10.7.132.237:9081/#/expense_management/document_management/expense_requisition/expense_requisition_detail/1515975140781772801",count:17},{url:"http://10.7.132.237:9081/#/expense_management/document_management/expense_report/expense_report_detail/1518134820379480066",count:2},{url:"http://10.7.132.237:9081/#/workflow_approval/workflow_management/workflow_backlog/workflow_backlog_log/to-do/0",count:6}];xt(j.slice(0,Math.floor(Math.random()*5)+1)),E(!1)},1e3)},[vt]),(0,t.jsx)(P.Z,{children:(0,t.jsxs)(D.Z,{spinning:h,children:[(0,t.jsxs)("div",{className:v().content,children:[(0,t.jsxs)("div",{className:v().left,children:[(0,t.jsx)("h3",{children:"\u63A5\u53E3\u8017\u65F6\u5206\u6BB5"}),(0,t.jsxs)(S.Z,{size:"large",children:[(0,t.jsx)(A.Z,{title:"\u53D1\u751F\u6B21\u6570",value:1232,suffix:"\u6B21"}),(0,t.jsx)(A.Z,{title:"\u767E\u5206\u6BD4",value:1.24,suffix:"%"})]}),(0,t.jsx)(S.Z,{className:v().stat,children:ut.map(function(j){return(0,t.jsxs)(L.Z,{type:l===j?"primary":"default",size:"large",onClick:function(){return f(j)},children:[j,"\u79D2"]},j)})})]}),(0,t.jsxs)("div",{className:v().right,children:[(0,t.jsx)("h3",{children:"1\u6708\u5185\u53D8\u5316\u8D8B\u52BF"}),(0,t.jsx)(U,{})]})]}),(0,t.jsx)(y.Z,{}),(0,t.jsxs)("div",{className:v().content,children:[(0,t.jsxs)("div",{className:v().left,children:[(0,t.jsx)("h3",{children:"1\u5929\u5185\u53D8\u5316\u8D8B\u52BF"}),(0,t.jsx)(J,{})]}),(0,t.jsxs)("div",{className:v().right,children:[(0,t.jsx)("h3",{children:"1\u5C0F\u65F6\u5185\u53D8\u5316\u8D8B\u52BF"}),(0,t.jsx)(Q,{})]})]}),(0,t.jsx)(y.Z,{}),(0,t.jsxs)("div",{className:v().content,children:[(0,t.jsxs)("div",{className:v().left,children:[(0,t.jsx)("h3",{children:"Api\u63A5\u53E3\u5217\u8868"}),(0,t.jsx)(w,{onChange:mt})]}),(0,t.jsx)("div",{className:v().right,children:(0,t.jsx)(D.Z,{spinning:O,children:(0,t.jsx)(rt,{data:ft})})})]})]})})},ot=dt}}]);