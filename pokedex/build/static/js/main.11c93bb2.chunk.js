(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(16),s=n.n(c),o=(n(22),n(1)),i={header:{backgroundColor:"#003a70",display:"absolute",margin:"20"},headerTitle:{color:"#ffcb05",display:"absolute",margin:"0"}},l=function(){return Object(o.jsx)("div",{style:i.header,children:Object(o.jsx)("h1",{style:i.headerTitle,children:" Pokedex"})})},d=n(4),u=n.n(d),p=n(9),j=n(5),x=n(11),f=(n(13),{Canvas:{borderColor:"#272121",backgroundColor:"#003a70",margin:"6px",padding:"7px",boxShadow:"3px 3px 4px #ffcb05",minWidth:"225px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"10px"},font:{borderRadius:"5px",minWidth:"80%",padding:"2px",paddingTop:"2px",backgroundColor:"#3d7dca",color:"\t#ffcb05",margin:"5px",textAllign:"left"}}),b=function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],c=n[1],s=e.pokemon.name;return console.log("card rendered"),Object(r.useEffect)((function(){fetch("/getpokemon/".concat(s)).then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),Object(o.jsx)(o.Fragment,{children:void 0!==a&&Object(o.jsx)(x.DragDropContainer,{targetKey:"foo",dragData:a,children:Object(o.jsxs)("div",{style:f.Canvas,children:[Object(o.jsx)("img",{style:f.font,src:a.sprites.front_default,alt:"sprite"}),Object(o.jsx)("h5",{style:f.font,children:a.name}),Object(o.jsxs)("p",{style:f.font,children:[a.stats[0].stat.name,": ",a.stats[0].base_stat]}),Object(o.jsxs)("p",{style:f.font,children:["type: ",a.types[0].type.name]})]})})})},h=function(){var e=Object(p.a)(u.a.mark((function e(t,n){var r,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.name,e.t1=t.stats[0].base_stat,e.next=4,g(t.stats[1].stat.url);case 4:return e.t2=e.sent,r={name:e.t0,hp:e.t1,attacks:e.t2},e.t3=n.name,e.t4=n.stats[0].base_stat,e.next=10,g(n.stats[1].stat.url);case 10:e.t5=e.sent,a={name:e.t3,hp:e.t4,attacks:e.t5};case 12:if(c=y(r.attacks.length),a.hp=O(r.attacks[c],a),!(a.hp<1)){e.next=18;break}return console.log(r.name),e.abrupt("return",t);case 18:if(c=y(a.attacks.length),r.hp=O(a.attacks[c],r),!(r.hp<1)){e.next=23;break}return console.log(a),e.abrupt("return",n);case 23:e.next=12;break;case 25:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.affecting_moves.decrease);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e,t){return t.hp+e.change};function y(e){return Math.floor(Math.random()*Math.floor(e))}var m=h,v=n(6),k=n(30),C={header:{color:"#ffcb05",padding:"5px"},headerTitle:{color:"#387c6d",display:"absolute",margin:"0"},dragDiv:{color:"#387c6d",height:"200px",width:"200px",backgroundColor:"#003a70",borderRadius:"10px",alignItems:"center",textAllign:"center",display:"flex",justifyContent:"center"},Canvas:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"10px",border:"5px solid #003a70",margin:"5px"}},w=function(){var e=Object(r.useState)(),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),s=Object(j.a)(c,2),i=s[0],l=s[1],d=Object(r.useState)(),f=Object(j.a)(d,2),h=f[0],g=f[1],O=Object(r.useState)(!1),y=Object(j.a)(O,2),w=y[0],D=y[1],S=Object(v.c)({opacity:w?1:0,transform:"perspective(600px) rotateX(".concat(w?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),F=S.transform,T=S.opacity,W=function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n!==i){e.next=4;break}alert("please select 2 different pokemon"),e.next=14;break;case 4:if(!n||void 0===i){e.next=13;break}return e.next=7,m(n,i);case 7:t=e.sent,console.log(t),g(t),D((function(e){return!e})),e.next=14;break;case 13:alert("please select another pokemon");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("game reset"),g(void 0),a(void 0),l(void 0),D(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{style:{padding:"10px"},children:[Object(o.jsx)(v.a.div,{hidden:w,style:(C.Canvas,{opacity:T.interpolate((function(e){return 1-e})),transform:F}),children:Object(o.jsxs)("div",{style:C.Canvas,children:[Object(o.jsx)("h1",{style:C.header,children:" Battle"}),Object(o.jsxs)("div",{style:{display:"flex"},children:[Object(o.jsx)(x.DropTarget,{targetKey:"foo",onHit:function(e){a(e.dragData)},children:void 0!==n?Object(o.jsx)(b,{pokemon:n}):Object(o.jsx)("div",{style:C.dragDiv,children:Object(o.jsx)("h6",{style:C.header,children:"Drop something in me"})})}),Object(o.jsx)("h2",{style:C.header,children:"V.S."}),Object(o.jsx)(x.DropTarget,{targetKey:"foo",onHit:function(e){console.log(e.dragData),l(e.dragData)},children:void 0!==i?Object(o.jsx)(b,{pokemon:i}):Object(o.jsx)("div",{style:C.dragDiv,children:Object(o.jsx)("h6",{style:C.header,children:"Drop something in me"})})})]}),Object(o.jsx)(k.a,{onClick:W,variant:"danger",style:{margin:"5px"},children:"Battle!"}),Object(o.jsx)(k.a,{onClick:B,variant:"success",children:"reset"})]})}),Object(o.jsx)(v.a.div,{hidden:!w,style:(C.Canvas,{opacity:T,transform:F.interpolate((function(e){return"".concat(e," rotateX(180deg)")}))}),children:void 0!==h&&Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{style:C.Canvas,children:[Object(o.jsx)("h1",{style:C.header,children:" Winner!"}),Object(o.jsx)(b,{pokemon:h}),Object(o.jsx)(k.a,{onClick:B,variant:"success",style:{margin:"5px"},children:"reset"})]})})})]})})},D=n(15),S=n(17),F={wrapper:{display:"flex",flexWrap:"wrap",maxWidth:"50%"}},T=function(){var e=Object(r.useState)(),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(v.d)(20,{config:v.b,from:{opacity:0,x:20},to:{opacity:1,x:20}});return Object(r.useEffect)((function(){fetch("/getpokemon").then((function(e){return e.json()})).then((function(e){return a(e)})).then((function(e){return console.log(e)}))}),[]),Object(o.jsx)(o.Fragment,{children:void 0!==n&&Object(o.jsx)("div",{style:F.wrapper,children:c.map((function(e,t){var r=e.x,a=Object(S.a)(e,["x"]);return Object(o.jsx)(v.a.div,{style:Object(D.a)(Object(D.a)({},a),{},{transform:r.interpolate((function(e){return"translate3d(".concat(e,"px, 0, 0)")})),display:"flex",flexWrap:"wrap"}),className:"trails-text",children:Object(o.jsx)(b,{pokemon:n[t]})},n[t])}))})})};var W={BattleZoneStyle:{width:"50%",flexWrap:"wrap"},PokedexStyle:{display:"flex"}},B=function(){return document.body.style.backgroundColor="\t#3d7dca",Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsxs)("div",{style:W.PokedexStyle,children:[Object(o.jsx)(T,{}),Object(o.jsx)("div",{style:W.BattleZoneStyle,children:Object(o.jsx)(w,{style:{zIndex:"1"}})})]})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(25);s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(B,{})}),document.getElementById("root")),I()}},[[28,1,2]]]);
//# sourceMappingURL=main.11c93bb2.chunk.js.map