(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n(7),i=n.n(a),s=(n(16),n(2)),u=n(9),o=function(t){var e=t.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],o=a[1];return Object(r.jsx)("form",{action:"",onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(t){return function(t){o(t.target.value)}(t)}})})},j=n(10),d=n(6),p=n.n(d),b=n(8),f=function(){var t=Object(b.a)(p.a.mark((function t(e){var n,r,c,a,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=0tgtMGQ77kKR73zwcuGJUW1V28PDQi9h&limit=10&q=".concat(encodeURI(e)),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(t){t.id;var e=t.title,n=t.url;return Object(r.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(r.jsx)("img",{src:n,alt:e}),Object(r.jsxs)("p",{children:[e," "]})]})},h=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){f(t).then((function(t){return a({data:t,loading:!1})}))}),[t]),r}(e),a=n.data,i=n.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h3",{children:[e," "]}),i&&Object(r.jsx)("p",{children:"Loading"}),Object(r.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(r.jsx)(l,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(c.useState)(["The 100"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GifExpertApp"}),Object(r.jsx)(o,{setCategories:a}),Object(r.jsx)("hr",{}),Object(r.jsx)("ol",{children:n.map((function(t){return Object(r.jsx)(h,{category:t},t)}))})]})};i.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.da266112.chunk.js.map