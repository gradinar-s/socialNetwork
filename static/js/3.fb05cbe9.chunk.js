(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{295:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__2pSFg",dialogItem:"Dialogs_dialogItem__1vw3e",senderDialog:"Dialogs_senderDialog__1EV5Z",active:"Dialogs_active__1YbVO",messageItem:"Dialogs_messageItem__1Izmh",item:"Dialogs_item__26I8G",messageWrapper:"Dialogs_messageWrapper__3Dems",messageBody:"Dialogs_messageBody__2N5er",message:"Dialogs_message__3RK_h",photoItem:"Dialogs_photoItem__Zbcjd",mainMessageWrapper:"Dialogs_mainMessageWrapper__2nO-z"}},296:function(e,a,s){e.exports={form:"SendMessageForm_form__b6kH0",buttonSend:"SendMessageForm_buttonSend__lK0TB"}},299:function(e,a,s){"use strict";s.r(a);var t=s(1),n=s(34),c=s(59),o=s(0),i=s(295),r=s.n(i),m=s(296),g=s.n(m),d=s(136),l=s(137),b=s(46),j=s(27),u=Object(b.b)(g.a.buttonSend,"Send"),_=Object(l.a)({form:"message"})((function(e){return Object(o.jsx)("form",{className:g.a.form,onSubmit:e.handleSubmit,children:Object(o.jsx)(d.a,{component:u,name:"textMessage",validate:[j.c]})})})),p=s(11),O=Object(p.b)((function(e){return{dialogsPage:e.dialogsPage,newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{}}))(_),h=function(e){return Object(o.jsxs)("div",{className:r.a.mainMessageWrapper,children:[Object(o.jsxs)("div",{className:r.a.wrapperPhoto,children:[Object(o.jsx)("img",{src:e.photo,className:r.a.photoItem,alt:""}),Object(o.jsx)("span",{children:e.userName})]}),Object(o.jsx)("div",{className:r.a.item,children:Object(o.jsx)("span",{className:r.a.message,children:e.message})})]})},f=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),x=function(e){e.dialogsPage;var a=Object(t.useState)([]),s=Object(c.a)(a,2),i=s[0],m=s[1],g=Object(t.useState)(""),d=Object(c.a)(g,2),l=(d[0],d[1]);Object(t.useEffect)((function(){f.addEventListener("message",(function(e){var a=JSON.parse(e.data);m((function(e){return[].concat(Object(n.a)(e),Object(n.a)(a))}))}))}),[]);var b=i.map((function(e){return Object(o.jsx)(h,{userName:e.userName,photo:e.photo,id:e.userId,message:e.message},e.userId)}));return Object(o.jsx)("div",{className:r.a.dialogs,children:Object(o.jsxs)("div",{className:r.a.messageItem,children:[Object(o.jsx)("div",{className:r.a.messageWrapper,children:Object(o.jsx)("div",{className:r.a.messageBody,children:b})}),Object(o.jsx)(O,{onSubmit:function(e){f.send(e.textMessage),l("")}})]})})},v=s(134),N=s(8),D=s(135);a.default=Object(N.d)(Object(p.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(a){e(Object(D.a)(a))}}})),v.a)(x)}}]);
//# sourceMappingURL=3.fb05cbe9.chunk.js.map