(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/github-logo.e45ebd52.png"},,function(e,t,n){e.exports=n(53)},,,,,,,,,,,,,,,,,,,function(e,t,n){var a={"./img (1).jpg":37,"./img (10).jpg":38,"./img (11).jpg":39,"./img (12).jpg":40,"./img (13).jpg":41,"./img (14).jpg":42,"./img (15).jpg":43,"./img (2).jpg":44,"./img (3).jpg":45,"./img (4).jpg":46,"./img (5).jpg":47,"./img (6).jpg":48,"./img (7).jpg":49,"./img (8).jpg":50,"./img (9).jpg":51};function r(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=36},function(e,t,n){e.exports=n.p+"static/media/img (1).ada31f53.jpg"},function(e,t,n){e.exports=n.p+"static/media/img (10).817d290f.jpg"},function(e,t,n){e.exports=n.p+"static/media/img (11).f49303e5.jpg"},function(e,t,n){e.exports=n.p+"static/media/img (12).bf995a1d.jpg"},function(e,t,n){e.exports=n.p+"static/media/img (13).f11a7873.jpg"},function(e,t,n){e.exports=n.p+"static/media/img (14).ac183f7d.jpg"},function(e,t,n){e.exports=n.p+"static/media/img (15).17a1ccf2.jpg"},function(e,t,n){e.exports=n.p+"static/media/img (2).9b0ae1af.jpg"},function(e,t,n){e.exports=n.p+"static/media/img (3).533cbb1c.jpg"},function(e,t,n){e.exports=n.p+"static/media/img (4).2b80bd21.jpg"},function(e,t,n){e.exports=n.p+"static/media/img (5).45bb874f.jpg"},function(e,t,n){e.exports=n.p+"static/media/img (6).e33b7e02.jpg"},function(e,t,n){e.exports=n.p+"static/media/img (7).ed895988.jpg"},function(e,t,n){e.exports=n.p+"static/media/img (8).992b64ba.jpg"},function(e,t,n){e.exports=n.p+"static/media/img (9).fdec6e42.jpg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r,i=n(0),c=n.n(i),o=n(10),p=n(3),u=n(1),l=n(2),s=n(11),g=n.n(s),m=Object(l.b)(a||(a=Object(u.a)(["\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n"]))),f=l.a.div(r||(r=Object(u.a)(["\n    height: 200px;\n    width: 200px;\n    border: 2px solid #af4144;\n    border-radius: 15px;\n    overflow: hidden;\n    transition: all 0.2s ease-in;\n    cursor: pointer;\n\n    animation: "," 0.5s linear 1;\n   \n    &:hover{\n      transform: scale(1.1);\n    }\n\n"])),m);var d,j=function(e){var t=e.src,n=e.handleCardClick;return c.a.createElement(f,{onClick:n},c.a.createElement("img",{src:t,alt:""}))},b=function(){return g.a.generate()},x=l.a.div(d||(d=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 200px 200px 200px 200px 200px;\n    gap: 20px;\n    justify-content: center;\n"])));var h,v,O=function(e){var t=e.cards,n=e.handleCardClick;return c.a.createElement(x,null,t&&t.map(function(e){return c.a.createElement(j,{key:b(),src:e,handleCardClick:n})}))},E=l.a.div(h||(h=Object(u.a)(["\n    width: 300px;\n    height: 60px;\n    background-color: #f37781;\n    color: white;\n    font-size: 2em;\n    text-align: center;\n    border-radius: 7px;\n    border: 2px solid #af4144;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),y=l.a.div(v||(v=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    gap: 10rem;\n"])));var k=function(e){var t=e.score,n=e.bestScore;return c.a.createElement(y,null,c.a.createElement(E,null,"Score :"," ",t),c.a.createElement(E,null,"Best Score :"," ",n))},w=function(){var e=Object(i.useState)(0),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(0),c=Object(p.a)(r,2),o=c[0],u=c[1];return[n,o,function(){a(function(e){var t=e+1;return t>o&&u(t),t})},function(){a(0)}]},C=n(16);var S,M,R=function(e){var t=[];return e.keys().forEach(function(n,a){t.push(e(n))}),t}(n(36)),U=function(){var e=Object(i.useState)(R),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)([]),c=Object(p.a)(r,2),o=c[0],u=c[1];return[n,o,function(){a(function(){for(var e=[],t=0,n=Math.floor(Math.random()*R.length);t<R.length;t+=1){for(;e.includes(R[n]);)n=Math.floor(Math.random()*R.length);e.push(R[n])}return e}())},function(e){u([].concat(Object(C.a)(o),[e]))},function(e){u([])}]},z=function(){var e=w(),t=Object(p.a)(e,4),n=t[0],a=t[1],r=t[2],i=t[3],c=U(),o=Object(p.a)(c,5),u=o[0],l=o[1],s=o[2],g=o[3],m=o[4];return[u,n,a,function(e){if(l.includes(e.target.src))i(),m();else{if(15===n)return i(),void m();r(),g(e.target.src)}s()}]},B=l.a.div(S||(S=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:1em;\n"]))),D=l.a.div(M||(M=Object(u.a)(["\n    color: #f37781;\n    font-size: 4em;\n    font-weight: 800;\n"])));var F=function(){return c.a.createElement(D,null,"FLEX YOUR MEMORY")},I=n(15),J=n.n(I);function L(){return c.a.createElement("a",{href:"github.com/fareedkamal"},c.a.createElement("img",{style:{height:"30px"},src:J.a,alt:""}))}var N=function(){return c.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"1em",width:"100%",justifyContent:"center",height:"100px",backgroundColor:"#f37781",border:"2px solid #af4144",color:"white"}},c.a.createElement("p",null,"Copyright \xa9 2022 fareedkamal"),c.a.createElement(L,null))};var Y=function(){var e=z(),t=Object(p.a)(e,4),n=t[0],a=t[1],r=t[2],i=t[3];return c.a.createElement(B,null,c.a.createElement(F,null),c.a.createElement(k,{score:a,bestScore:r}),c.a.createElement(O,{cards:n,handleCardClick:i}),c.a.createElement(N,null))},_=(n(52),document.getElementById("root"));Object(o.createRoot)(_).render(c.a.createElement(Y,null))}],[[17,1,2]]]);
//# sourceMappingURL=main.76d12a20.chunk.js.map