(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),m=(a(29),a(30),a(6)),o=a(1),s=a(22),u=a(23),i=a(11),p=a(13),h=a.n(p),E=a(19),b=function(){var e=Object(E.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io/react_people-table/api","/people.json"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=a(20),d=a.n(f),N=function(e){var t=e.person,a=t.name,n=t.sex,c=t.born,l=t.died,s=t.slug,u=t.fatherName,i=t.motherName,p=t.father,h=t.mother,E=Object(o.i)().personSlug;return r.a.createElement("tr",{key:a,className:d()("has-text-white",{"has-background-info":"m"===n&&E!==s,"has-background-danger":"f"===n&&E!==s,"has-background-warning":E===s})},r.a.createElement("td",null,r.a.createElement(m.b,{to:"/people/".concat(s)},a)),r.a.createElement("td",null,n),r.a.createElement("td",null,c),r.a.createElement("td",null,l),r.a.createElement("td",null,p?r.a.createElement(m.b,{to:"/people/".concat(p.slug)},u):r.a.createElement("span",{className:"has-text-black"},u)),r.a.createElement("td",null,h?r.a.createElement(m.b,{to:"/people/".concat(h.slug)},i):r.a.createElement("span",{className:"has-text-black"},i)))},v=function(){var e=Object(o.g)(),t=Object(o.h)(),a=new URLSearchParams(t.search),c=Object(n.useState)(a.get("sortBy")),l=Object(i.a)(c,2),m=l[0],p=l[1],h=Object(n.useState)(a.get("query")||""),E=Object(i.a)(h,2),f=E[0],d=E[1],v=Object(n.useState)([]),g=Object(i.a)(v,2),y=g[0],j=g[1];Object(n.useEffect)((function(){b().then((function(e){j(e.map((function(t){return Object(u.a)({},t,{mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})})))}))}),[]);var x=y.filter((function(e){if(f){var t=new RegExp(f,"i");return e.name.match(t)||e.motherName&&e.motherName.match(t)||e.fatherName&&e.fatherName.match(t)}return e}));m&&(x=Object(s.a)(x).sort((function(e,t){var a=e[m],n=t[m];return"string"===typeof a&&"string"===typeof n?n.localeCompare(a):"number"===typeof a&&"number"===typeof n?n-a:0})));return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"input",type:"text",placeholder:"Find a person",value:f,onChange:function(t){var n=t.currentTarget.value;d(n),a.set("query",n),e.push({search:a.toString()})}}),r.a.createElement("table",{className:"table is-striped is-fullwidth"},r.a.createElement("thead",null,r.a.createElement("tr",null,["name","sex","born","died","motherName","fatherName"].map((function(t){return r.a.createElement("th",{key:t},r.a.createElement("button",{className:"button is-small",type:"button",onClick:function(){return p(n=t),a.set("sortBy",n),void e.push({search:a.toString()});var n}},m===t&&r.a.createElement(r.a.Fragment,null,"*"),t))})))),r.a.createElement("tbody",null,x.map((function(e){return r.a.createElement(N,{key:e.name,person:e})})))))},g=function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"People page"),r.a.createElement(v,null))))},y=function(){return r.a.createElement("nav",{className:"navbar is-primary",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-menu"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement(m.c,{className:"navbar-item",activeClassName:"is-active",to:"/",exact:!0},"Home"),r.a.createElement(m.c,{className:"navbar-item",activeClassName:"is-active",to:"/people",exact:!0},"People"))))},j=function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Home page"))))},x=function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Page not found"))))},O=function(){return r.a.createElement(m.a,null,r.a.createElement(y,null),r.a.createElement(o.d,null,r.a.createElement(o.a,{from:"/home",to:"/"}),r.a.createElement(o.b,{path:"/",exact:!0,component:j}),r.a.createElement(o.b,{path:"/people/:personSlug?",component:g}),r.a.createElement(o.b,{component:x})))};l.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.ebad3d0a.chunk.js.map