(this["webpackJsonpfriends-list-app"]=this["webpackJsonpfriends-list-app"]||[]).push([[0],{35:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(11),a=c.n(s),i=(c(35),c(7)),l=c(28),r=c(30),o=c(12),d=c(14),j=c(15),u=c(13),f="ADD_FRIEND",m="REMOVE_FREIND",b="TOGGLE_BEST_FRIEND",h="SEARCH_FRIEND",x="CHANGE_PAGE_NUMBER",g="OPEN_DELETE_MODAL",O="CLOSE_DELETE_MODAL",v=function e(t){Object(u.a)(this,e),this.name=t,this.isFavorite=!1,this.id=Date.now()},p=c(1);var y=function(e){var t=e.data,c=e.dispatch;return Object(p.jsx)(r.a,{body:!0,className:"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 card-spacing",children:Object(p.jsxs)("div",{className:"d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row justify-content-between align-items-center",children:[Object(p.jsxs)("div",{className:"d-flex justify-content-center flex-column col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8 friend-card-left-section",children:[Object(p.jsx)("div",{className:"d-flex justify-content-center justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start   friend-card-name-section h5",children:t.name}),Object(p.jsx)("div",{className:"d-flex justify-content-center justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start   friend-card-desc-section ",children:t.isFavorite?"This is a Best friend!!!":"This is a friend"})]}),Object(p.jsxs)("div",{className:" col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4 friend-card-right-section justify-content-end",children:[Object(p.jsx)(o.a,{variant:t.isFavorite?"btn btn-success":"outline-success",className:" col-6 col-sm-6 col-md-6 col-lg-6",onClick:function(e){e.preventDefault(),c({type:b,value:t}),console.log("clicked")},children:Object(p.jsx)(d.a,{icon:j.c})}),Object(p.jsx)(o.a,{variant:"outline-danger",className:" col-6 col-sm-6 col-md-6 col-lg-6",onClick:function(){c({type:g,value:t})},children:Object(p.jsx)(d.a,{icon:j.d})})]})]})})};var N=function(e){var t=e.state,c=e.dispatch,s=t.currentPage*t.itemsPerPage,a=s-t.itemsPerPage,i=t.displayList.slice(a,s);return Object(n.useState)((function(){s=t.currentPage*t.itemsPerPage,a=s-t.itemsPerPage,i=t.displayList.slice(a,s)}),[t.displayList,t.currentPage,t.itemsPerPage]),0===i.length&&""===t.searchString?Object(p.jsxs)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center greyed-out-div",children:[" ",Object(p.jsx)(d.a,{icon:j.a,className:"empty-icon-spacing"}),"Please Add some Friends"]}):0===i.length&&""!==t.searchString?Object(p.jsxs)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center greyed-out-div",children:[" ",Object(p.jsx)(d.a,{icon:j.b,className:"empty-icon-spacing"}),"Searched Friends not Found"]}):Object(p.jsx)("ul",{className:"list-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex flex-column justify-content-center align-items-center",children:i.map((function(e){return Object(p.jsx)(y,{dispatch:c,data:e},e.id)}))})},F=function(e){for(var t=e.state,c=e.dispatch,n=[],s=1;s<=Math.ceil(t.displayList.length/t.itemsPerPage);s++)n.push(s);return 1===n.length?null:Object(p.jsx)("nav",{className:" pagination-spacing fixed-bottom col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 flex-fill d-flex justify-content-center",children:Object(p.jsx)("ul",{className:"pagination",children:n.map((function(e){return Object(p.jsx)("li",{className:t.currentPage===e?"page-item active":"page-item",children:Object(p.jsx)("a",{onClick:function(){return c({type:x,value:e})},className:"page-link",children:e})},e)}))})})},L=c(29),P=c(23);var w=function(e){var t=e.dispatch,c=Object(n.useState)(""),s=Object(i.a)(c,2),a=s[0],l=s[1],r=Object(n.useState)(!1),d=Object(i.a)(r,2),j=d[0],u=d[1],m=function(){if(""===a)u(!0);else{var e=new v(a);t({type:f,value:e}),l("")}};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"d-flex col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 input-spacing",children:[Object(p.jsxs)(P.a,{controlId:"floatingInput",label:"Add a friend",className:"col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 ",children:[Object(p.jsx)(L.a.Control,{onKeyPress:function(e){return"Enter"===e.key&&m()},type:"input",placeholder:"Add a friend",value:a,onChange:function(e){u(!1),l(e.target.value)}}),j?Object(p.jsx)("p",{children:" Please fill the Name to add a friend "}):""]}),Object(p.jsx)(o.a,{className:"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 add-button-spacing ",onClick:function(){return m()},children:"Add"})]})})},E=c(16),C=c(2),S={itemsPerPage:4,friendsList:[],displayList:[],searchString:"",currentPage:1,showModal:!1,seletedFriend:[]},D=function(e,t){var c=t.type,n=t.value;switch(c){case f:return Object(C.a)(Object(C.a)({},e),{},{showLoader:!1,friendsList:[].concat(Object(E.a)(e.friendsList),[n]),displayList:[].concat(Object(E.a)(e.friendsList),[n])});case g:return Object(C.a)(Object(C.a)({},e),{},{showModal:!0,seletedFriend:[n]});case O:return Object(C.a)(Object(C.a)({},e),{},{showModal:!1,seletedFriend:[]});case m:var s=e.friendsList.filter((function(e){return e.id!==n.id}));return Object(C.a)(Object(C.a)({},e),{},{friendsList:s,displayList:k(s,e.searchString)});case b:var a=e.friendsList.map((function(e){return e.id===n.id&&(e.isFavorite=!n.isFavorite),e})).sort(A);return Object(C.a)(Object(C.a)({},e),{},{friendsList:a,displayList:k(a,e.searchString)});case x:return Object(C.a)(Object(C.a)({},e),{},{currentPage:n});case h:return Object(C.a)(Object(C.a)({},e),{},{searchString:n,currentPage:1,displayList:k(e.friendsList,n)});default:return e}};function k(e,t){var c;if(""===t)c=Object(E.a)(e);else{var n=t.toLowerCase();c=e.filter((function(e){return e.name.toLowerCase().includes(n)}))}return c}function A(e,t){var c=0;return(e.isFavorite||t.isFavorite)&&(e.isFavorite&&t.isFavorite?c=0:e.isFavorite?c=-1:t.isFavorite&&(c=1)),c}var _=function(e){var t=e.state,c=e.dispatch;return Object(p.jsx)("nav",{className:"navbar nav-bar-color ",children:Object(p.jsxs)("div",{className:"container-fluid justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between",children:[Object(p.jsx)("div",{className:"navbar-header",children:Object(p.jsx)("a",{className:"navbar-brand app-logo-div",href:"#",children:"My Friends List"})}),Object(p.jsx)("nav",{className:"navbar col-10 col-sm-4 col-md-3 col-lg-3 col-xl-3",children:Object(p.jsx)("form",{className:"form-inline nav navbar-nav col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 navbar-right",children:Object(p.jsx)("input",{className:"form-control mr-sm-2",type:"search",value:t.searchString,onChange:function(e){c({type:h,value:e.target.value})},placeholder:"Search","aria-label":"Search"})})})]})})},M=c(17);var T=function(e){var t,c=e.state,n=e.dispatch,s=function(){n({type:O})};return Object(p.jsxs)(M.a,{show:c.showModal,onHide:function(){return s()},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(p.jsx)(M.a.Header,{closeButton:!0,children:Object(p.jsx)(M.a.Title,{id:"contained-modal-title-vcenter",children:"Delete Confirmation"})}),Object(p.jsx)(M.a.Body,{children:Object(p.jsxs)("p",{children:["Are you sure you want to delete from"," ",Object(p.jsx)("b",{children:null===c||void 0===c||null===(t=c.seletedFriend[0])||void 0===t?void 0:t.name})," "," ","your friends List???"]})}),Object(p.jsxs)(M.a.Footer,{children:[Object(p.jsx)(o.a,{onClick:function(){return s()},children:"Close"}),Object(p.jsx)(o.a,{variant:"btn btn-danger",onClick:function(){return s(),void n({type:m,value:c.seletedFriend[0]})},children:"Delete"})]})]})},I=(c(42),function(){var e=Object(n.useReducer)(D,S),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(_,{state:c,dispatch:s}),Object(p.jsxs)(l.a,{fluid:"xxl",className:"d-flex flex-column justify-content-center align-items-center",children:[Object(p.jsx)(w,{dispatch:s}),Object(p.jsx)(N,{state:c,dispatch:s})]}),Object(p.jsx)(F,{state:c,dispatch:s}),Object(p.jsx)(T,{state:c,dispatch:s})]})}),R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};c(43);a.a.render(Object(p.jsx)(I,{}),document.getElementById("root")),R()}},[[44,1,2]]]);
//# sourceMappingURL=main.7145c519.chunk.js.map