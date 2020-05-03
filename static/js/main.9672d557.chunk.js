(this.webpackJsonpadd_to_cart=this.webpackJsonpadd_to_cart||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),l=(a(88),a(89),a(34)),o=a(27),u=a(149),m=a(154),s=a(155),d=a(158),p=a(157),E=a(156),f=a(39),b=a(116),y=a(152),g=a(153),O=a(69),h=a.n(O),v=a(68),j=a.n(v),_=a(8),x=function(e){return{type:"REMOVE_FROM_CART",payload:e}},w=Object(u.a)({root:{border:"1px solid gray"},input:{textAlign:"center"}});function I(e){var t=w(),a=Object(_.b)(),n=Object(_.c)((function(e){return e.cart})),c=function(t){a(0===t?x(e.id):function(e,t){return{type:"ADD_TO_CART",payload:{id:e,count:t}}}(e.id,t))};if(!n[e.id])return r.a.createElement(b.a,{variant:"contained",color:"primary",fullWidth:!0,size:"small",onClick:function(){return c(1)}},"Add to Cart");var i=n[e.id].count;return r.a.createElement(y.a,{disableElevation:!0,variant:"outlined",size:"small",color:"primary",className:t.root},r.a.createElement(g.a,{onClick:function(){return c(i-1)}},r.a.createElement(j.a,null)),r.a.createElement(g.a,{disabled:!0},i),r.a.createElement(g.a,{onClick:function(){return c(i+1)}},r.a.createElement(h.a,null)))}var C=Object(u.a)({root:{height:300},price:{display:"flex",justifyContent:"space-between",fontWeight:"bold"},displayPrice:{textDecoration:"line-through",fontWeight:"bold"},discount:{color:"green",fontWeight:"bold"},media:{height:140,backgroundSize:"contain"},actionBtn:{justifyContent:"space-around"}});function k(e){var t=e.data,a=C();return r.a.createElement(m.a,{className:a.root},r.a.createElement(s.a,null,r.a.createElement(E.a,{className:a.media,image:t.image,title:t.name}),r.a.createElement(p.a,null,r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2",noWrap:!0},t.name),r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p",className:a.price},r.a.createElement("span",null,"\u20b9",t.price.actual),r.a.createElement("span",{className:a.displayPrice},"\u20b9",t.price.display),r.a.createElement("span",{className:a.discount},t.discount,"% off")))),r.a.createElement(d.a,{className:a.actionBtn},r.a.createElement(I,{id:t.id})))}var N=a(160),T=a(170),R=a(171);function S(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.item.filters.priceRange}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{gutterBottom:!0},"Filters"),r.a.createElement(R.a,{"aria-labelledby":"track-inverted-slider",onChange:function(t,a){e({type:"APPLY_FILTER",payload:{priceRange:a}})},marks:[{value:100,label:"100"},{value:1e5,label:"100000"}],value:t,max:1e5,min:100}))}var P=a(172),L=a(159);function D(){var e=Object(_.b)(),t=function(t){e({type:"APPLY_FILTER",payload:{sortBy:t}})};return r.a.createElement(P.a,{separator:"|",style:{padding:"10px 0"}},r.a.createElement(f.a,null,"Sort By: "),r.a.createElement(L.a,{color:"inherit",href:"#",onClick:function(){return t("PRICE_HIGH_TO_LOW")}},"Price -- High Low"),r.a.createElement(L.a,{color:"inherit",href:"#",onClick:function(){return t("PRICE_LOW_TO_HIGH")}},"Price -- Low High"),r.a.createElement(L.a,{color:"inherit",href:"#",onClick:function(){return t("DISCOUNT")}},"Discount"))}var A=a(48),W=a.n(A),B=a(70),M=a(71),G=a.n(M),H=function(){return function(){var e=Object(B.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING_ITEMS"}),e.prev=1,e.next=4,G.a.get("https://api.npoint.io/0c76acc63b2a5fa2d46b");case 4:a=e.sent,n=a.data,t({type:"SET_ITEMS",payload:{items:n.items,error:null}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:"SET_ITEMS",payload:{items:[],error:e.t0.message}});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},F=a(72),U=a.n(F),z=a(73),V=a.n(z);function X(){return r.a.createElement(y.a,{variant:"contained","aria-label":"contained primary button group",fullWidth:!0},r.a.createElement(b.a,{variant:"contained",startIcon:r.a.createElement(U.a,null)},"Sort By"),r.a.createElement(b.a,{variant:"contained",startIcon:r.a.createElement(V.a,null)},"Filter"))}function Y(e){var t=Object(_.b)(),a=Object(_.c)((function(e){return function(e){var t=e.filters,a=e.items;switch(t.sortBy){case"PRICE_LOW_TO_HIGH":a=a.sort((function(e,t){return e.price.actual-t.price.actual}));break;case"PRICE_HIGH_TO_LOW":a=a.sort((function(e,t){return t.price.actual-e.price.actual}));break;case"DISCOUNT":a=a.sort((function(e,t){return e.discount-t.discount}))}return t.priceRange&&(a=a.filter((function(e){return t.priceRange[0]<=e.price.actual&&e.price.actual<=t.priceRange[1]}))),t.search&&(a=a.filter((function(e){return e.name.toLowerCase().includes(t.search)}))),a}(e.item)}));return Object(n.useEffect)((function(){t(H())}),[t]),r.a.createElement(N.a,{container:!0,spacing:2},r.a.createElement(T.a,{smDown:!0},r.a.createElement(N.a,{item:!0,md:2,style:{padding:20}},r.a.createElement(S,null))),r.a.createElement(T.a,{mdUp:!0},r.a.createElement(N.a,{item:!0,xs:12},r.a.createElement(X,null))),r.a.createElement(N.a,{item:!0,xs:12,md:10,style:{padding:20}},r.a.createElement(T.a,{smDown:!0},r.a.createElement(D,null)),r.a.createElement(N.a,{container:!0,spacing:2},a.map((function(e){return r.a.createElement(N.a,{item:!0,xs:6,sm:4,md:3,key:e.id},r.a.createElement(k,{data:e}))})))))}var J=Object(u.a)((function(e){return{root:{display:"flex"},cover:{width:"100%",height:140,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundOrigin:"content-box"},price:{display:"flex",justifyContent:"space-between",fontWeight:"bold"},displayPrice:{fontWeight:"bold"},actualPrice:{textDecoration:"line-through",fontWeight:"bold"},discount:{color:"green",fontWeight:"bold"}}}));function $(e){var t=e.data,a=J(),n=Object(_.b)();return r.a.createElement(N.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},r.a.createElement(N.a,{item:!0,xs:4,className:a.cover,style:{backgroundImage:"url(".concat(t.image,")")}}),r.a.createElement(N.a,{item:!0,xs:8},r.a.createElement(N.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:2},r.a.createElement(N.a,{item:!0,xs:12,md:6},r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2",noWrap:!0},t.name),r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p",className:a.price},r.a.createElement("span",null,"\u20b9",t.price.actual),r.a.createElement("span",{className:a.actualPrice},"\u20b9",t.price.display),r.a.createElement("span",{className:a.discount},t.discount,"% off"))),r.a.createElement(N.a,{item:!0,xs:12,md:3},r.a.createElement(I,{id:t.id})),r.a.createElement(N.a,{item:!0,xs:12,md:3},r.a.createElement(b.a,{onClick:function(){return n(x(t.id))}},"Remove")))))}var q=a(78),K=a(161),Q=a(173),Z=a(163),ee=a(162),te=a(164),ae=Object(u.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},price:{textAlign:"right"}}}));function ne(){var e=ae(),t=Object(_.c)((function(e){return e.item.items})),a=Object(_.c)((function(e){return e.cart})),c=Object(n.useState)({}),i=Object(q.a)(c,2),l=i[0],o=i[1];return Object(n.useEffect)((function(){var e=Object.keys(a).reduce((function(e,n){var r=t.find((function(e){return e.id===n}));return{items:e.items+a[n].count,price:e.price+r.price.display,discount:e.discount+(r.price.display-r.price.actual),payable:e.payable+r.price.actual}}),{items:0,price:0,discount:0,payable:0});o(e)}),[t,a]),r.a.createElement(K.a,{subheader:r.a.createElement(ee.a,null,"PRICE DETAILS"),className:e.root},r.a.createElement(Q.a,null,r.a.createElement(Z.a,{primary:"Price (".concat(l.items," items) : ")}),r.a.createElement(Z.a,{primary:l.price,className:e.price})),r.a.createElement(Q.a,null,r.a.createElement(Z.a,{primary:"Discount : "}),r.a.createElement(Z.a,{primary:l.discount,className:e.price})),r.a.createElement(te.a,null),r.a.createElement(Q.a,null,r.a.createElement(Z.a,{primary:"Total Payble : "}),r.a.createElement(Z.a,{primary:l.payable,className:e.price})))}function re(e){var t=Object(_.b)(),a=Object(_.c)((function(e){return e.item.items})),c=Object(_.c)((function(e){return e.cart}));return Object(n.useEffect)((function(){t(H())}),[t]),r.a.createElement(N.a,{container:!0},r.a.createElement(N.a,{item:!0,xs:12,sm:8,style:{padding:20}},r.a.createElement(N.a,{container:!0,spacing:2,direction:"column"},Object.keys(c).map((function(e){return r.a.createElement(N.a,{item:!0},r.a.createElement($,{data:a.find((function(t){return t.id===e})),key:e}))})))),r.a.createElement(N.a,{item:!0,xs:12,sm:4,style:{padding:20}},r.a.createElement(ne,null)))}var ce=a(166),ie=a(167),le=a(165),oe=a(51),ue=a.n(oe),me=Object(u.a)({root:{textDecoration:"none",color:"white"}});function se(){var e=me(),t=Object(_.c)((function(e){return Object.keys(e.cart).reduce((function(t,a){return t+e.cart[a].count}),0)}));return r.a.createElement(l.b,{to:"/cart",className:e.root},r.a.createElement(g.a,{color:"inherit"},t?r.a.createElement(le.a,{badgeContent:t,color:"secondary"},r.a.createElement(ue.a,null)):r.a.createElement(ue.a,null)))}var de=a(169),pe=a(76),Ee=a.n(pe),fe=a(75),be=Object(u.a)((function(e){return{root:{display:"flex",flexGrow:1},input:{marginLeft:e.spacing(1),flexGrow:1,color:"inherit"}}}));function ye(){var e,t=Object(_.b)(),a=be();return r.a.createElement("div",{className:a.root},r.a.createElement(de.a,{className:a.input,placeholder:"Search...",color:"primary",onChange:function(a){a.persist(),e||(e=Object(fe.debounce)((function(){var e=a.target.value;t({type:"APPLY_FILTER",payload:{search:e.toLowerCase()}})}),300)),e()}}),r.a.createElement(g.a,{type:"submit","aria-label":"search",color:"inherit"},r.a.createElement(Ee.a,null)))}var ge=Object(u.a)((function(e){return{root:{flexGrow:1,alignItems:"center"},title:{flexGrow:1,textDecoration:"none",color:"white"},cart:{display:"flex",flexGrow:1,justifyContent:"flex-end"}}}));function Oe(){var e=ge();return r.a.createElement("div",{className:e.root},r.a.createElement(ce.a,{position:"static"},r.a.createElement(ie.a,null,r.a.createElement(l.b,{to:"/",className:e.title},r.a.createElement(f.a,{variant:"h6"},"Adobe")),r.a.createElement(ye,null),r.a.createElement("div",{className:e.cart},r.a.createElement(se,null)))))}var he=a(29),ve=a(77),je=a(43),_e=a(17),xe={},we={items:[],loading:!1,errors:null,filters:{sortBy:null,priceRange:[100,1e5]}},Ie=[ve.a],Ce=Object(he.c)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return Object(_e.a)(Object(_e.a)({},e),{},Object(je.a)({},t.payload.id,{count:t.payload.count}));case"REMOVE_FROM_CART":var a=Object(_e.a)({},e);return delete a[t.payload],a;default:return e}},item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_ITEMS":return Object(_e.a)(Object(_e.a)({},e),{},{loading:!0,errors:null});case"SET_ITEMS":return Object(_e.a)(Object(_e.a)({},e),{},{items:t.payload.items,loading:!0,errors:t.payload.errors||null});case"APPLY_FILTER":var a=Object(_e.a)(Object(_e.a)({},e.filters),t.payload);return Object(_e.a)(Object(_e.a)({},e),{},{filters:a});default:return e}}}),ke=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):he.d)(he.a.apply(void 0,Ie)),Ne=Object(he.e)(Ce,{},ke);var Te=function(){return r.a.createElement(_.a,{store:Ne},r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(Oe,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(Y,null)),r.a.createElement(o.a,{path:"/cart"},r.a.createElement(re,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=a(168);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Re.a,null),r.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){e.exports=a(115)},88:function(e,t,a){},89:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.9672d557.chunk.js.map