(window["webpackJsonpchat-app"]=window["webpackJsonpchat-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a(55)},36:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(9),c=a.n(s),u=(a(36),a(10)),o=a(1),i=a(27),l=a(30),m=a(28),d="LOAD_DATA",g="ADD_FAROVITE",f="EDIT_MESSAGE",v="CHANGE_MODE",p="DELETE_MESSAGE",h="ADD_MESSAGE";function E(){return function(e){fetch("https://api.dev.buki.com.ua/frontend_test").then(function(e){return e.json()}).then(function(t){var a=t.map(function(e){return"Taylor"===e.user?{messageId:e.id,userName:e.user,created_at:e.created_at,messageText:e.message,currentUser:!0,edit:!1}:{messageId:e.id,userName:e.user,created_at:e.created_at,messageText:e.message,currentUser:!1,favorite:!1}}),r=t.map(function(e){return{name:e.user,avatar:e.avatar}}),n={},s=r.filter(function(e){return!n[e.name]&&(n[e.name]=!0,!0)});e(function(e,t){return{type:d,messages:e,users:t}}(a,s))})}}var b={messages:null,users:null,currentUser:{name:"Taylor",avatar:"https://i.pravatar.cc/300?img=12"},loadData:!1};function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}a(41);var O=a(3),y=a(4),j=a(6),_=a(5),w=a(7);var S=Object(o.b)(function(e,t){return{avatar:t.avatar,userName:t.userName,messageText:t.messageText,created_at:t.created_at,messageId:t.messageId,favorite:t.favorite}},function(e){return{addFavorite:function(t){return e(function(e){return{type:g,id:e}}(t))}}})(function(e){var t=e.avatar,a=e.userName,r=e.messageText,s=e.created_at,c=e.messageId,u=e.favorite,o=e.addFavorite;return n.a.createElement("section",{className:"userMessage"},n.a.createElement("div",{className:"userMessage-wrapper"},n.a.createElement("div",{className:"userMessage-image"},n.a.createElement("img",{src:t,alt:"user"})),n.a.createElement("div",{className:"userMessage-info"},n.a.createElement("h1",{className:"userMessage-name"},a),n.a.createElement("p",{className:"userMessage-text"},r)),n.a.createElement("span",{className:"userMessage-date"},s),n.a.createElement("span",{className:"userMessage-favorite ".concat(u?"userMessage-favorite__like":""),onClick:function(){return o(c)}})))}),T=function(e){function t(){var e,a;Object(O.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(j.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(n)))).state={value:a.props.value},a.editHandler=function(){var e=a.props,t=e.editMessage,r=e.changeMode,n=e.id;t(n,a.state.value),r(n)},a.changeValue=function(e){var t=e.target;return""!==t.value.trim()&&a.setState({value:t.value}),null},a}return Object(w.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.changeMode;return n.a.createElement("div",{className:"edit"},n.a.createElement("textarea",{defaultValue:this.state.value,onChange:this.changeValue,className:"edit-message"}),n.a.createElement("div",{className:"edit-controller"},n.a.createElement("button",{onClick:this.editHandler,className:"edit-save"},"Save"),n.a.createElement("button",{onClick:function(){return a(t)},className:"edit-cancel"},"Cancel")))}}]),t}(r.Component);var D=Object(o.b)(function(e,t){return{avatar:t.avatar,userName:t.userName,messageText:t.messageText,created_at:t.created_at,messageId:t.messageId,edit:t.edit}},function(e){return{editMessage:function(t,a){return e(function(e,t){return console.log(t),{type:f,id:e,value:t}}(t,a))},changeMode:function(t){return e(function(e){return{type:v,id:e}}(t))},deleteMessage:function(t){return e(function(e){return{type:p,id:e}}(t))}}})(function(e){var t=e.avatar,a=e.userName,r=e.messageText,s=e.created_at,c=e.messageId,u=e.edit,o=e.changeMode,i=e.editMessage,l=e.deleteMessage;return n.a.createElement("section",{className:"userMessage userMessage__curentUser"},n.a.createElement("div",{className:"userMessage-wrapper ".concat(u?"userMessage-wrapper__edit":"")},n.a.createElement("div",{className:"userMessage-image"},n.a.createElement("img",{src:t,alt:"user"})),n.a.createElement("div",{className:"userMessage-info"},n.a.createElement("h1",{className:"userMessage-name"},a),u?n.a.createElement(T,{value:r,changeMode:o,editMessage:i,id:c}):n.a.createElement("p",{className:"userMessage-text"},r)),n.a.createElement("span",{className:"userMessage-date"},s),n.a.createElement("span",{style:{display:u?"none":""},className:"userMessage-edit",onClick:function(){return o(c)}}),n.a.createElement("span",{onClick:function(){return l(c)},className:"userMessage-delete ".concat(u?"userMessage-delete__position":"")},"\xd7")))}),k=(a(42),function(e){function t(){var e,a;Object(O.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(s)))).myRef=n.a.createRef(),a}return Object(w.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,this.myRef.current.scrollHeight+10)}},{key:"render",value:function(){var e=this.props,t=e.users,a=e.messages;return n.a.createElement("div",{ref:this.myRef,className:"chatList"},a.map(function(e){var a=e.userName,r=e.created_at,s=e.messageText,c=e.currentUser,u=e.favorite,o=e.messageId,i=e.edit,l=t.find(function(t){return t.name===e.userName}).avatar;return c?n.a.createElement(D,{userName:a,avatar:l,created_at:r,messageText:s,messageId:o,edit:i,key:o}):n.a.createElement(S,{userName:a,avatar:l,created_at:r,messageText:s,favorite:u,messageId:o,key:o})}))}}]),t}(r.Component));var x=Object(o.b)(function(e){return{users:e.users,messages:e.messages}},function(){return{}})(k);a(43);var I=Object(o.b)(function(e){var t=e.users,a=e.messages;return{countUsers:t.length,countMessages:a.length,lastMessageTime:a[a.length-1].created_at}},function(e){return{}})(function(e){var t=e.countUsers,a=e.countMessages,r=e.lastMessageTime;return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"header-conteinerLeft"},n.a.createElement("h1",{className:"header-logo"},"My Chat"),n.a.createElement("p",{className:"header-info"},t," users ",a," messages")),n.a.createElement("div",{className:"header-conteinerRight"},n.a.createElement("p",{className:"header-lastTimeMessage"},"Last message: ",r)))}),C=a(29),A=(a(53),function(e){function t(){var e,a;Object(O.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(j.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(n)))).state={value:"",error:!1},a.textareaHandler=function(e){var t=e.target;a.setState({value:t.value})},a.addMessageHandler=function(){var e=a.props,t=e.id,r=e.currentUser,n=e.addMessage,s={},c=a.getTime();s.messageId=t,s.userName=r,s.created_at=c,s.currentUser=!0,s.edit=!1,s.messageText=a.state.value,""!==a.state.value?(a.setState({error:!1,value:""}),n(s),C.animateScroll.scrollToBottom()):a.setState({error:!0})},a.getTime=function(){var e=new Date,t=e.getFullYear().toString(),a=e.getMonth()+1,r=e.getDate().toString().padStart(2,0),n=e.getHours().toString().padStart(2,0),s=e.getMinutes().toString().padStart(2,0),c=e.getSeconds().toString().padStart(2,0);return"".concat(t,"-").concat(a.toString().padStart(2,0),"-").concat(r," ").concat(n,":").concat(s,":").concat(c)},a}return Object(w.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"inputMessage"},n.a.createElement("input",{type:"text",placeholder:"Type something...",value:this.state.value,onChange:function(t){return e.textareaHandler(t)},className:this.state.error?"error":""}),n.a.createElement("button",{onClick:this.addMessageHandler}," Send "))}}]),t}(r.Component));var U=Object(o.b)(function(e){var t=e.messages;return{currentUser:e.currentUser.name,id:t[t.length-1].messageId+1}},function(e){return{addMessage:function(t){return e(function(e){return{type:h,message:e}}(t))}}})(A);a(54);function H(){return n.a.createElement("footer",null,n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Home"),n.a.createElement("li",null,"About"),n.a.createElement("li",null,"Contact us"))),n.a.createElement("div",null,n.a.createElement("p",null,"@ Copyright 2019")))}var P=function(e){function t(){return Object(O.a)(this,t),Object(j.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.fetch()}},{key:"render",value:function(){return this.props.loadData?n.a.createElement("div",{ref:this.myRef},n.a.createElement(I,null),n.a.createElement(x,null),n.a.createElement(U,null),n.a.createElement(H,null)):n.a.createElement("div",{className:"preloader"},n.a.createElement("div",{className:"preloader-1"}),n.a.createElement("div",{className:"preloader-2"}),n.a.createElement("div",{className:"preloader-3"}))}}]),t}(r.Component);var R=Object(o.b)(function(e){return{loadData:e.loadData}},function(e){return{fetch:function(){return e(E())}}})(P),L=Object(u.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return N({},e,{messages:t.messages,users:t.users,loadData:!0});case g:return N({},e,{messages:e.messages.map(function(e){return e.messageId===t.id?N({},e,{favorite:!e.favorite}):e})});case f:return N({},e,{messages:e.messages.map(function(e){return e.messageId===t.id?N({},e,{messageText:t.value}):e})});case v:return N({},e,{messages:e.messages.map(function(e){return e.messageId===t.id?N({},e,{edit:!e.edit}):e})});case p:return N({},e,{messages:e.messages.filter(function(e){return e.messageId!==t.id})});case h:var a=Object(l.a)(e.messages);return a.push(t.message),N({},e,{messages:a});default:return e}},Object(u.a)(i.a));var F=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o.a,{store:L},n.a.createElement(R,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.4b490c96.chunk.js.map