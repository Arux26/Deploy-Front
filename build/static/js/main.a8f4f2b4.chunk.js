(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){e.exports={containerG:"about_containerG__gTd76",container:"about_container__1L3WH",title:"about_title__knT_y",foot:"about_foot__1O6UD",spanDetail:"about_spanDetail__2shYC",ull:"about_ull__22zOp",btn:"about_btn__e1CJt",contact:"about_contact__23Wi-",icons:"about_icons__1M7Fu",buttonA:"about_buttonA__9Z5o6"}},17:function(e,t,n){e.exports={cardContainer:"home_cardContainer__3wVL1",contenedorPrinc:"home_contenedorPrinc__1sif5",title:"home_title__x3Gmu",containerSelects:"home_containerSelects__3QvgG",label:"home_label__3RDSH",select:"home_select__2OXAC",buttonAll:"home_buttonAll__mehQd"}},18:function(e,t,n){e.exports={containerG:"detail_containerG__3SX6d",container1:"detail_container1__1pksM",container2:"detail_container2__3_0e2",img:"detail_img__oZDMV",pais:"detail_pais__1mWLR",detail:"detail_detail__2s7oj",textAct:"detail_textAct__1tcLL",activities:"detail_activities__3PXP0",ull:"detail_ull__3wfPW",btn:"detail_btn__2QOU-"}},19:function(e,t,n){e.exports={home:"landingPage_home__HTQwO",anim:"landingPage_anim__3CcbG",button:"landingPage_button__3z51j",foot:"landingPage_foot__27DnK",contact:"landingPage_contact__3akcn",icons:"landingPage_icons__3XBDB",buttonA:"landingPage_buttonA___dl_d"}},22:function(e,t,n){e.exports={cardContainer:"paginado_cardContainer__Uq_ju",button:"paginado_button__2d8g9",button2:"paginado_button2__2R6IR",prev:"paginado_prev__2eI11",prevMax:"paginado_prevMax__1Cb9_",next:"paginado_next__2CwfL",nextMax:"paginado_nextMax__bhFIr"}},24:function(e,t,n){e.exports={card:"card_card__3erC_",vibrate:"card_vibrate__4jdty",nombre:"card_nombre__1Ijvn",continente:"card_continente__pH0q0",button:"card_button___LBSE",link:"card_link__25iBf",img:"card_img__39SRH"}},28:function(e,t,n){e.exports={searchBar:"searchBar_searchBar__2NCRQ",input:"searchBar_input__3eMq9",btn:"searchBar_btn__21539"}},29:function(e,t,n){e.exports={container:"NavBar_container__3eCHn",link:"NavBar_link__309bB"}},30:function(e,t,n){e.exports={container:"notFound_container__3GLJE",h3:"notFound_h3__2w_Ej",img:"notFound_img__3Cb5X",btn:"notFound_btn__1biLL"}},50:function(e,t,n){},51:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(32),r=n.n(i),o=(n(50),n(51),n(6)),s=n(7),l=n(19),u=n.n(l),b=n(0);var j=function(){return Object(b.jsxs)("div",{className:u.a.home,children:[Object(b.jsx)("h2",{children:"Welcome to the App Countries"}),Object(b.jsx)(s.b,{to:"/home",children:Object(b.jsx)("button",{className:u.a.button,children:"Enter"})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("footer",{className:u.a.foot,children:[Object(b.jsx)("h1",{className:u.a.contact,children:"Contact:"}),Object(b.jsxs)("div",{className:u.a.icons,children:[Object(b.jsx)("a",{className:u.a.buttonA,href:"https://www.linkedin.com/in/ariel-trangoni-web-developer/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),Object(b.jsx)("a",{className:u.a.buttonA,href:"https://github.com/Arux26",target:"_blank",rel:"noreferrer",children:" GitHub"}),Object(b.jsx)("b",{className:u.a.buttonA,children:" Gmail: arieltrangoni1@gmail.com"}),Object(b.jsx)("b",{className:u.a.buttonA,children:" \ud83d\udcf1+54 9 364 4365838"})]})]})]})},d=n(13),h=n(9),O=n(15),p=n(23),m=n(66),_="GET_COUNTRIES",x="LOADING",v="ORDER_BY_NAME",f="GET_COUNTRIE_BY_NAME",g="POST_ACTIVITY",y="ORDER_BY_POPULATION",N="FILTER_BY_CONTINENT",C="FILTER_BY_ACTIVITY",A="GET_ACTIVITIES",w="GET_COUNTRY_DETAIL",S="RESET_DETAIL";function E(){return function(){var e=Object(p.a)(Object(O.a)().mark((function e(t){var n;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.a)("/countries");case 3:return n=e.sent,e.abrupt("return",t({type:_,payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),window.location.href="http://localhost:3000/countries/",alert("Something happened when fetching the data from the Server, try to refresh the web");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function T(){return function(){var e=Object(p.a)(Object(O.a)().mark((function e(t){var n;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)("/activities");case 2:return n=e.sent,e.abrupt("return",t({type:A,payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var B=n(24),I=n.n(B);var k=function(e){var t=e.imagen,n=e.nombre,a=e.continente,c=e.id;return Object(b.jsxs)("div",{className:I.a.card,children:[Object(b.jsx)("h3",{className:I.a.nombre,children:n}),Object(b.jsx)("h4",{className:I.a.continente,children:a}),Object(b.jsx)("img",{src:t,alt:"img not found",className:I.a.img}),Object(b.jsx)(s.b,{to:"/countries/".concat(c),className:I.a.link,children:Object(b.jsx)("button",{className:I.a.button,children:"Detail"})})]})};var D=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://media.tenor.com/0iK9a1WkT40AAAAM/loading-white.gif",alt:"Cargando..."})})},P=n(28),R=n.n(P);var L=function(e){var t=e.setCurrentPage,n=Object(o.f)(),c=Object(h.b)(),i=Object(a.useState)(""),r=Object(d.a)(i,2),s=r[0],l=r[1],u=Object(h.c)((function(e){return e.allCountries}));return Object(b.jsx)("div",{className:R.a.searchBar,children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a,i=u.filter((function(e){return e.nombre.toLowerCase().includes(s.toLowerCase())}));if(!s)return window.confirm("You must enter a country");i.length?(t(1),c((a=s,function(){var e=Object(p.a)(Object(O.a)().mark((function e(t){var n;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.a)("/countries?name=".concat(a));case 3:return n=e.sent,e.abrupt("return",t({type:f,payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),window.location.href="http://localhost:3000/countries/",console.log("There are no Countries with the combination of Characters entered: ".concat(a)),alert("There are no Countries with the combination of Characters entered: ".concat(a));case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),l("")):(n.push("/notFound"),l(""))},className:R.a.searchBar,children:[Object(b.jsx)("input",{className:R.a.input,type:"text",value:s,placeholder:"Enter country...",onChange:function(e){return function(e){l(e.target.value)}(e)}}),Object(b.jsx)("input",{className:R.a.btn,type:"submit",value:"Search"})]})})},G=n(29),M=n.n(G);var F=function(e){var t=e.setCurrentPage,n=Object(h.b)(),a=document.getElementById("Continent"),c=document.getElementById("Tourist Activity"),i=document.getElementById("Population"),r=document.getElementById("Alphabet");return Object(b.jsxs)("div",{className:M.a.container,children:[Object(b.jsx)(s.b,{to:"/home",onClick:function(e){return function(e){e.preventDefault(),n(E()),n(T()),t(1),a.value="Continent",c.value="Tourist Activity",i.value="Population",r.value="Alphabet"}(e)},className:M.a.link,children:" HOME"}),Object(b.jsx)(L,{setCurrentPage:t}),Object(b.jsx)(s.b,{to:"/about",className:M.a.link,children:"ABOUT"}),Object(b.jsx)(s.b,{to:"/create",className:M.a.link,children:"CREATE ACTIVITY"})]})},H=n(22),X=n.n(H);var Y=function(e){var t=e.countriesPerPage,n=e.allCountries,c=e.currentPage,i=e.setCurrentPage,r=Object(a.useState)([]),o=Object(d.a)(r,2),s=o[0],l=o[1];return Object(a.useEffect)((function(){for(var e=[1],a=n-9,c=2;c<=Math.ceil(a/t)+1;c++)e.push(c);l(e)}),[n,t]),Object(b.jsxs)("div",{className:X.a.cardContainer,children:[Object(b.jsx)("button",{disabled:c<=1,className:c<=1?X.a.prevMax:X.a.prev,onClick:function(){c>1&&i(c-1)},children:"\u2190prev"}),s.map((function(e){return Object(b.jsx)("input",{type:"submit",value:e,className:c===e?X.a.button2:X.a.button,onClick:function(){return i(e)}},e)})),Object(b.jsx)("button",{disabled:c>=s.length,className:c>=s.length?X.a.nextMax:X.a.next,onClick:function(){c<=s.length-1&&i(c+1)},children:"next\u2192"})]})},U=n(17),W=n.n(U);var Z=function(){var e,t,n=Object(h.b)(),c=Object(h.c)((function(e){return e.countries})),i=Object(h.c)((function(e){return e.activities})),r=Object(a.useState)(""),o=Object(d.a)(r,2)[1],s=Object(a.useState)(1),l=Object(d.a)(s,2),u=l[0],j=l[1],_=Object(a.useState)(10),x=Object(d.a)(_,1)[0];1===u?(e=0,t=9):e=(t=u*x-1)-x;var f=c.slice(e,t);Object(a.useEffect)((function(){n(E()),n(T())}),[n]);var g=function(e){var t;n((t=e.target.value,{type:v,payload:t})),j(1),o(e.target.value)},A=function(e){var t;n((t=e.target.value,{type:y,payload:t})),j(1),o(e.target.value)},w=function(e){var t;"All"===e.target.value?n(E()):n((t=e.target.value,function(){var e=Object(p.a)(Object(O.a)().mark((function e(n){var a,c;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/countries/continent/".concat(t),e.prev=1,e.next=4,Object(m.a)(a);case 4:return c=e.sent,e.abrupt("return",n({type:N,payload:c.data}));case 8:e.prev=8,e.t0=e.catch(1),window.location.href="http://localhost:3000/countries/",console.log("Something happened when filtering by continent: ".concat(t)),alert("Something happened when filtering by continent: ".concat(t));case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())),j(1)},S=function(e){var t;n((t=e.target.value,{type:C,payload:t})),j(1)};return Object(b.jsxs)("div",{className:W.a.contenedorPrinc,children:[Object(b.jsx)(F,{setCurrentPage:j}),Object(b.jsx)("div",{}),Object(b.jsxs)("div",{className:W.a.containerSelects,children:[Object(b.jsx)("div",{className:W.a.containerOrder,children:Object(b.jsxs)("label",{className:W.a.label,children:["SORT BY:",Object(b.jsxs)("select",{id:"Alphabet",className:W.a.select,onChange:function(e){return g(e)},children:[Object(b.jsx)("option",{hidden:!0,children:"Alphabet"}),Object(b.jsx)("option",{value:"AZ",children:"A - Z"}),Object(b.jsx)("option",{value:"ZA",children:"Z - A"})]}),Object(b.jsxs)("select",{id:"Population",className:W.a.select,onChange:function(e){return A(e)},children:[Object(b.jsx)("option",{hidden:!0,children:"Population"}),Object(b.jsx)("option",{value:"Higher",children:"Higher"}),Object(b.jsx)("option",{value:"Minor",children:"Minor"})]})]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("label",{className:W.a.label,children:["FILTER BY:",Object(b.jsxs)("select",{id:"Continent",className:W.a.select,onChange:function(e){return w(e)},children:[Object(b.jsx)("option",{hidden:!0,children:"Continent"}),Object(b.jsx)("option",{value:"All",children:"All"}),Object(b.jsx)("option",{value:"Africa",children:"Africa"}),Object(b.jsx)("option",{value:"Antarctic",children:"Antarctic"}),Object(b.jsx)("option",{value:"Asia",children:"Asia"}),Object(b.jsx)("option",{value:"Europe",children:"Europe"}),Object(b.jsx)("option",{value:"North America",children:"North America"}),Object(b.jsx)("option",{value:"South America",children:"South America"}),Object(b.jsx)("option",{value:"Oceania",children:"Oceania"})]}),Object(b.jsxs)("select",{id:"Tourist Activity",className:W.a.select,onChange:function(e){return S(e)},children:[Object(b.jsx)("option",{hidden:!0,children:"Tourist Activity"}),Object(b.jsx)("option",{value:"All",children:"All"}),null===i||void 0===i?void 0:i.map((function(e){return Object(b.jsx)("option",{value:e.nombre,children:e.nombre},e.nombre)}))]})]})})]}),Object(b.jsx)(Y,{countriesPerPage:x,allCountries:c.length,currentPage:u,setCurrentPage:j}),Object(b.jsx)("div",{className:W.a.cardContainer,children:f.length?f.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(k,{id:e.id,imagen:e.imagen,nombre:e.nombre,continente:e.continente},e.id)},e.id)})):Object(b.jsx)(D,{})})]})},q=n(12),V=n.n(q);var z=function(){return Object(b.jsxs)("div",{className:V.a.containerG,children:[Object(b.jsx)(s.b,{to:"/home",children:Object(b.jsx)("button",{className:V.a.btn,children:"\u2190 Back"})}),Object(b.jsxs)("div",{className:V.a.container,children:[Object(b.jsx)("h1",{className:V.a.title,children:"Hello, thanks for viewing my project!\ud83d\ude0a"}),Object(b.jsxs)("span",{className:V.a.spanDetail,children:["My name is An\xedbal Ariel Trangoni and this my Individual Project for Henry's Web Development Course.",Object(b.jsx)("br",{}),"In this project i develop a single page application integrating several technologies that I learned in the course."]}),Object(b.jsx)("h2",{children:"This website was developed with:"}),Object(b.jsxs)("ul",{className:V.a.ull,children:[Object(b.jsx)("li",{children:"Javascript"}),Object(b.jsx)("li",{children:"HTML/CSS"}),Object(b.jsx)("li",{children:"React & Redux (Front-End)"}),Object(b.jsx)("li",{children:"Node Express (Back-End)"}),Object(b.jsx)("li",{children:"Sequelize (Database)"}),Object(b.jsx)("li",{children:"Jest (Testing)"})]}),Object(b.jsxs)("footer",{className:V.a.foot,children:[Object(b.jsx)("h1",{className:V.a.contact,children:"Contact:"}),Object(b.jsxs)("div",{className:V.a.icons,children:[Object(b.jsx)("a",{className:V.a.buttonA,href:"https://www.linkedin.com/in/ariel-trangoni-web-developer/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),Object(b.jsx)("a",{className:V.a.buttonA,href:"https://github.com/Arux26",target:"_blank",rel:"noreferrer",children:" GitHub"}),Object(b.jsx)("b",{className:V.a.buttonA,children:" Gmail: arieltrangoni1@gmail.com"}),Object(b.jsx)("b",{className:V.a.buttonA,children:" \ud83d\udcf1+54 9 364 4365838"})]})]})]})]})},J=n(35),Q=n(21),K=n(3),$=n(8),ee=n.n($);function te(e){var t={};return e.countries.length?e.nombre?/^[a-zA-Z\xc0-\xff\u00f1\u00d1]+(\s*[a-zA-Z\xc0-\xff\u00f1\u00d1]*)*[a-zA-Z\xc0-\xff\u00f1\u00d1]+$/g.test(e.nombre.trim())?e.dificultad?e.duracion?e.duracion>12||e.duracion<=0?t.duracion="Select min 1hs max 12hs":e.temporada||(t.temporada="Select a season"):t.duracion="Duration is required":t.dificultad="Enter a difficulty":t.nombre="cannot contain symbols or numbers":t.nombre="Write an activity":t.countries="Select at least one country",t}var ne=function(){var e=Object(h.c)((function(e){return e.allCountries})),t=Object(h.b)(),n=Object(o.f)();Object(a.useEffect)((function(){t(E())}),[t]);var c=Object(a.useState)({nombre:"",dificultad:"",duracion:"",temporada:"",countries:[]}),i=Object(d.a)(c,2),r=i[0],l=i[1],u=Object(a.useState)({}),j=Object(d.a)(u,2),_=j[0],x=j[1],v=function(e){var t=e.target,n=t.name,a=t.value;l(Object(K.a)(Object(K.a)({},r),{},Object(Q.a)({},n,a))),x(te(Object(K.a)(Object(K.a)({},r),{},Object(Q.a)({},e.target.name,e.target.value))))},f=function(e){v(e),x(te(Object(K.a)(Object(K.a)({},r),{},Object(Q.a)({},e.target.name,e.target.value))))},y=function(e){var a;e.preventDefault(),x(te(Object(K.a)(Object(K.a)({},r),{},Object(Q.a)({},e.target.name,e.target.value)))),t((a=r,function(){var e=Object(p.a)(Object(O.a)().mark((function e(t){var n;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/activities",a);case 2:return n=e.sent,e.abrupt("return",t({type:g,payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),n.push("/home",alert("Activity created successfully \u2713"))};return Object(b.jsx)("div",{className:ee.a.container,children:Object(b.jsxs)("form",{className:ee.a.form,onSubmit:function(e){return y(e)},children:[Object(b.jsx)("div",{children:Object(b.jsx)(s.b,{to:"/home",children:Object(b.jsx)("button",{className:ee.a.btn,children:"\u2190 Back"})})}),Object(b.jsx)("h2",{className:ee.a.title,children:"Create Activity"}),Object(b.jsx)("span",{children:"Country:"}),Object(b.jsxs)("select",{className:ee.a.createActivitySelect,onChange:function(e){return function(e){if(r.countries.includes(e.target.value))return null;l(Object(K.a)(Object(K.a)({},r),{},{countries:[].concat(Object(J.a)(r.countries),[e.target.value])})),x(te(Object(K.a)(Object(K.a)({},r),{},Object(Q.a)({},e.target.name,e.target.value))))}(e)},name:"countries",children:[Object(b.jsx)("option",{hidden:!0,children:"Select Country"}),e.map((function(e){return Object(b.jsx)("option",{onBlur:f,value:e.nombre,children:e.nombre},e.nombre)}))]}),_.countries&&Object(b.jsx)("p",{className:"danger",children:_.countries}),Object(b.jsx)("ul",{className:ee.a.containerArr,children:r.countries.map((function(e){return Object(b.jsxs)("b",{className:ee.a.bCountry,children:[e,Object(b.jsx)("button",{onClick:function(){return function(e){l(Object(K.a)(Object(K.a)({},r),{},{countries:r.countries.filter((function(t){return t!==e}))}))}(e)},className:ee.a.btnX,children:"X"})]},e)}))}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Activity:"}),Object(b.jsx)("input",{autoFocus:!0,className:ee.a.createActivityInputs,type:"text",name:"nombre",value:r.nombre,placeholder:"Enter activity",onChange:function(e){return v(e)},onBlur:f}),_.nombre&&Object(b.jsx)("p",{className:"danger",style:{visibility:_.nombre?"visible":"hidden"},children:_.nombre})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Difficulty:"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:ee.a.inputRadio,type:"radio",name:"dificultad",value:"1",onChange:function(e){return v(e)},onBlur:f}),"1/5",Object(b.jsx)("input",{className:ee.a.inputRadio,type:"radio",name:"dificultad",value:"2",onChange:function(e){return v(e)},onBlur:f}),"2/5",Object(b.jsx)("input",{className:ee.a.inputRadio,type:"radio",name:"dificultad",value:"3",onChange:function(e){return v(e)},onBlur:f}),"3/5",Object(b.jsx)("input",{className:ee.a.inputRadio,type:"radio",name:"dificultad",value:"4",onChange:function(e){return v(e)},onBlur:f}),"4/5",Object(b.jsx)("input",{className:ee.a.inputRadio,type:"radio",name:"dificultad",value:"5",onChange:function(e){return v(e)},onBlur:f}),"5/5",_.dificultad&&Object(b.jsx)("p",{className:"danger",style:{visibility:_.dificultad?"visible":"hidden"},children:_.dificultad})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Duration:"}),Object(b.jsx)("input",{className:ee.a.createActivityInputs,type:"number",name:"duracion",value:r.duracion,placeholder:"Enter duration (hs)",onChange:function(e){return v(e)},onBlur:f}),_.duracion&&Object(b.jsx)("p",{className:"danger",style:{visibility:_.duracion?"visible":"hidden"},children:_.duracion})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Season:"}),Object(b.jsxs)("select",{className:ee.a.createActivitySelect,name:"temporada",onChange:function(e){return v(e)},onBlur:f,children:[Object(b.jsx)("option",{hidden:!0,children:"Select"}),Object(b.jsx)("option",{name:"temporada",value:"All",children:"All"}),Object(b.jsx)("option",{name:"temporada",value:"Summer",children:"Summer"}),Object(b.jsx)("option",{name:"temporada",value:"Fall",children:"Fall"}),Object(b.jsx)("option",{name:"temporada",value:"Winter",children:"Winter"}),Object(b.jsx)("option",{name:"temporada",value:"Spring",children:"Spring"})]}),_.temporada&&Object(b.jsx)("p",{className:"danger",style:{visibility:_.temporada?"visible":"hidden"},children:_.temporada})]}),Object(b.jsx)("button",{type:"submit",disabled:!r.countries.length||_.nombre||!r.nombre||!r.dificultad||!r.duracion||!r.temporada||"Select"===r.temporada,className:r.countries.length&&!_.nombre&&r.nombre&&r.dificultad&&r.duracion&&!_.duracion&&r.temporada&&"Select"!==r.temporada?ee.a.btnCreate:ee.a.btnCreateDisabled,children:"Create"})]})})},ae=n.p+"static/media/img404.f2efc57f.jpeg",ce=n(30),ie=n.n(ce);var re=function(){return Object(b.jsxs)("div",{className:ie.a.container,children:[Object(b.jsx)(s.b,{to:"/home",children:Object(b.jsx)("button",{className:ie.a.btn,children:"\u2190 Home"})}),Object(b.jsx)("h3",{className:ie.a.h3,children:"Oops, nothing match with your request"}),Object(b.jsx)("img",{className:ie.a.img,src:ae,alt:"img not found"})]})},oe=n(18),se=n.n(oe);var le=function(){var e=Object(h.c)((function(e){return e.countryDetail})),t=Object(h.c)((function(e){return e.loading})),n=Object(h.b)(),c=Object(o.g)().id;return Object(a.useEffect)((function(){return n(function(e){return function(){var t=Object(p.a)(Object(O.a)().mark((function t(n){var a;return Object(O.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:x}),t.next=4,Object(m.a)("/countries/".concat(e));case 4:return a=t.sent,t.abrupt("return",n({type:w,payload:a.data}));case 8:t.prev=8,t.t0=t.catch(0),window.location.href="http://localhost:3000/countries/",console.log("Something happened when filtering by id: ".concat(e)),alert("Something happened when filtering by id: ".concat(e));case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(c)),function(){n({type:S})}}),[n,c]),Object(b.jsx)("div",{children:t?Object(b.jsx)(D,{}):e.length?e.map((function(e){return Object(b.jsxs)("div",{className:se.a.containerG,children:[Object(b.jsxs)("div",{className:se.a.container1,children:[Object(b.jsx)(s.b,{to:"/home",children:Object(b.jsx)("button",{className:se.a.btn,children:"\u2190 BACK"})}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:se.a.detail,children:[Object(b.jsx)("h2",{className:se.a.pais,children:e.nombre}),Object(b.jsx)("img",{className:se.a.img,src:e.imagen,alt:"img not found",witdh:"200px",height:"200px"}),Object(b.jsx)("br",{}),Object(b.jsxs)("h3",{children:["Country Code: ",Object(b.jsx)("span",{children:e.id})]}),Object(b.jsxs)("h3",{children:["Capital: ",Object(b.jsx)("span",{children:e.capital})]}),Object(b.jsxs)("h3",{children:["Continent: ",Object(b.jsx)("span",{children:e.continente})]}),Object(b.jsxs)("h3",{children:["Subregion: ",Object(b.jsx)("span",{children:e.subregion})]}),Object(b.jsxs)("h3",{children:["Area: ",Object(b.jsxs)("span",{children:[e.area,"km\xb2"]})]}),Object(b.jsxs)("h3",{children:["Population: ",Object(b.jsx)("span",{children:e.poblacion})]})]})]}),Object(b.jsx)("div",{className:se.a.container2,children:Object(b.jsxs)("div",{className:se.a.activities,children:[Object(b.jsx)("h3",{className:se.a.textAct,children:"Tourist activities: "}),e.activities.length?e.activities.map((function(e){return Object(b.jsxs)("ul",{className:se.a.ull,children:[Object(b.jsxs)("li",{children:["Name: ",Object(b.jsx)("span",{children:e.nombre})]}),Object(b.jsxs)("li",{children:["Difficulty: ",Object(b.jsxs)("span",{children:[e.dificultad,"/5"]})]}),Object(b.jsxs)("li",{children:["Duration: ",Object(b.jsxs)("span",{children:[e.duracion,"hs."]})]}),Object(b.jsxs)("li",{children:["Season: ",Object(b.jsx)("span",{children:e.temporada})]})]},e.id)})):Object(b.jsx)("span",{children:"Has no activities"})]})})]},e.id)})):Object(b.jsx)(re,{})})};var ue=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(j,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/home",children:Object(b.jsx)(Z,{})}),Object(b.jsx)(o.a,{path:"/about",children:Object(b.jsx)(z,{})}),Object(b.jsx)(o.a,{path:"/create",children:Object(b.jsx)(ne,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/countries/:id",children:Object(b.jsx)(le,{})}),Object(b.jsx)(o.a,{path:"*",children:Object(b.jsx)(re,{})})]})})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},je=n(36),de={countries:[],allCountries:[],activities:[],countryDetail:[],loading:!1};var he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(K.a)(Object(K.a)({},e),{},{countries:t.payload,allCountries:t.payload});case x:return Object(K.a)(Object(K.a)({},e),{},{loading:!0});case f:return Object(K.a)(Object(K.a)({},e),{},{countries:t.payload});case v:var n="AZ"===t.payload?e.countries.sort((function(e,t){return e.nombre>t.nombre?1:t.nombre>e.nombre?-1:0})):e.countries.sort((function(e,t){return e.nombre>t.nombre?-1:t.nombre>e.nombre?1:0}));return Object(K.a)(Object(K.a)({},e),{},{countries:n});case y:var a="Higher"===t.payload?e.countries.sort((function(e,t){return e.poblacion>t.poblacion?-1:t.poblacion>e.poblacion?1:0})):e.countries.sort((function(e,t){return e.poblacion>t.poblacion?1:t.poblacion>e.poblacion?-1:0}));return Object(K.a)(Object(K.a)({},e),{},{countries:a});case N:return Object(K.a)(Object(K.a)({},e),{},{countries:t.payload});case C:var c=Object(J.a)(e.allCountries),i="All"===t.payload?c.filter((function(e){return 0!==e.activities.length})):c.filter((function(e){return e.activities.map((function(e){return e.nombre})).includes(t.payload)}));return Object(K.a)(Object(K.a)({},e),{},{countries:i});case A:return Object(K.a)(Object(K.a)({},e),{},{activities:t.payload});case g:return Object(K.a)({},e);case w:return Object(K.a)(Object(K.a)({},e),{},{loading:!1,countryDetail:t.payload});case S:return Object(K.a)(Object(K.a)({},e),{},{countryDetail:[]});default:return Object(K.a)({},e)}},Oe=n(44),pe=Object(je.c)(he,Object(je.b)(Object(je.a)(Oe.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));m.a.defaults.baseURL="https://deploy-back-production-0fc5.up.railway.app/",r.a.render(Object(b.jsx)(h.a,{store:pe,children:Object(b.jsx)(s.a,{children:Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(ue,{})})})}),document.getElementById("root")),be()},8:function(e,t,n){e.exports={container:"activity_container__1M-bh",title:"activity_title__2G_X1",anim:"activity_anim__1CxRW",containerArr:"activity_containerArr__1CNCE",bCountry:"activity_bCountry__CRxmD",btnX:"activity_btnX__7GulN",form:"activity_form__37v1e",createActivityInputs:"activity_createActivityInputs__2C7ta",createActivitySelect:"activity_createActivitySelect__3OXsT",inputRadio:"activity_inputRadio__3EB8f",btn:"activity_btn__1Za43",btnCreateDisabled:"activity_btnCreateDisabled__3qtDx",btnCreate:"activity_btnCreate__2qYPh"}}},[[65,1,2]]]);
//# sourceMappingURL=main.a8f4f2b4.chunk.js.map