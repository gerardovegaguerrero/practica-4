(this.webpackJsonppractica4=this.webpackJsonppractica4||[]).push([[0],{19:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),r=c(12),d=c.n(r),o=(c(19),c(5),c(13)),s=c(3),a=c(0),j=Object(i.createContext)(),l=function(e){var t=Object(i.useState)([]),c=Object(s.a)(t,2),n=c[0],r=c[1],d=Object(i.useState)([{codigo:1,titulo:"Programaci\xf3n",idioma:"ESP",desactivado:!1},{codigo:2,titulo:"Aprende Python",idioma:"ESP",desactivado:!1},{codigo:3,titulo:"Prec\xe1lculo",idioma:"ESP",desactivado:!1},{codigo:4,titulo:"Ingenieria De Software",idioma:"ESP",desactivado:!1}]),l=Object(s.a)(d,2),b=l[0],h=l[1];return Object(a.jsx)(j.Provider,{value:{libros:b,lsita:n,eliminar:function(e){var t=b,c=t.findIndex((function(t){return t.codigo===e.codigo}));t[c].desactivado=!1;var i=n.filter((function(t){return t.codigo!==e.codigo}));h(t),r(i)},agregar:function(e){var t=b,c=t.findIndex((function(t){return t.codigo===e.codigo}));t[c].desactivado=!0;var i=[].concat(Object(o.a)(n),[e]);h(t),r(i)}},children:e.children})},b=c(22),h=c(23);c(11);var O=function(){var e=Object(i.useContext)(j),t=e.libros,c=e.agregar;return Object(a.jsxs)("div",{className:"libreria",children:[Object(a.jsx)("h4",{children:"Libros disponibles"}),Object(a.jsxs)(b.a,{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Codigo"}),Object(a.jsx)("th",{children:"Titulo"}),Object(a.jsx)("th",{children:"Idioma"}),Object(a.jsx)("th",{})]})}),Object(a.jsx)("tbody",{children:t.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.codigo}),Object(a.jsx)("td",{children:e.titulo}),Object(a.jsx)("td",{children:e.idioma}),Object(a.jsx)("td",{children:Object(a.jsx)(h.a,{variant:"dark",disabled:e.desactivado,onClick:function(){return c(e)},children:"Agregar"})})]},t)}))})]})]})},u=c.p+"static/media/librerias-gandhi.6fd17556.png",x=function(){return Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)("img",{src:u,height:"60",alt:"logo"})})},g=function(){var e=Object(i.useContext)(j),t=e.lsita,c=e.eliminar;return Object(a.jsxs)("div",{className:"List",children:[Object(a.jsx)("h4",{children:"Lista de deseos"}),0===t.length?Object(a.jsx)("p",{children:"No tienes libros agregados"}):Object(a.jsxs)(b.a,{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Codigo"}),Object(a.jsx)("th",{children:"Titulo"}),Object(a.jsx)("th",{children:"Idioma"}),Object(a.jsx)("th",{})]})}),Object(a.jsx)("tbody",{children:t.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.codigo}),Object(a.jsx)("td",{children:e.titulo}),Object(a.jsx)("td",{children:e.idioma}),Object(a.jsx)("td",{children:Object(a.jsx)(h.a,{variant:"dark",onClick:function(){return c(e)},children:"Eliminar"})})]},t)}))})]})]})};var v=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l,{children:[Object(a.jsx)(x,{}),Object(a.jsxs)("div",{className:"Containers",children:[Object(a.jsx)(O,{}),Object(a.jsx)(g,{})]})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,d=t.getTTFB;c(e),i(e),n(e),r(e),d(e)}))};d.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),f()},5:function(e,t,c){}},[[21,1,2]]]);
//# sourceMappingURL=main.7d3b0db5.chunk.js.map