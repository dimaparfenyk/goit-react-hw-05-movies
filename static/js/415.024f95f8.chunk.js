"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{398:function(n,t,e){e.d(t,{Gv:function(){return f},l5:function(){return l},r6:function(){return s},xD:function(){return p}});var r,i,a,c,u=e(168),o=e(6444),s=o.ZP.li(r||(r=(0,u.Z)(["\ndisplay:flex;\nalign-items:center;\nflex-direction:column;\nwidth:360px;\nmargin-right:40px;\nmargin-bottom:40px;\nborder-radius:8px;\n"]))),p=o.ZP.div(i||(i=(0,u.Z)(["\ndisplay:flex;\nflex-direction:row;\nalign-items: baseline;\njustify-content: space-around;\n"]))),f=o.ZP.p(a||(a=(0,u.Z)(["\ndisplay: inline-block;\nfont-size: 22px;\ncolor:black;\nfont-weight: 700;\ntext-transform: uppercase;\nmargin-bottom:15px;\n"]))),l=o.ZP.p(c||(c=(0,u.Z)(["\nfont-size: 20px;\nfont-weight: 600;\n"])))},3510:function(n,t,e){e.d(t,{O:function(){return s}});e(2791);var r=e(501),i=e(398),a=e(184),c=function(n){return(0,a.jsx)(i.r6,{children:(0,a.jsxs)(r.rU,{to:"/movies/".concat(n.id),style:{textDecoration:"none"},children:[(0,a.jsx)("img",{src:n.src,alt:n.title,width:360,style:{marginBottom:"20px"}}),(0,a.jsx)(i.xD,{children:(0,a.jsxs)(i.Gv,{children:[n.title," (",new Date(n.release).getFullYear(),")"]})})]},n.id)})},u=e(1544),o=e(7468),s=function(n){var t=n.movies;return(0,a.jsx)("main",{children:(0,a.jsx)(u.M,{children:t.map((function(n){var t=n.id,e=n.title,r=n.poster_path,i=n.release_date,u=n.vote_average;return(0,a.jsx)(c,{id:t,src:r?"https://image.tmdb.org/t/p/w500/".concat(r):o,title:e,release:i,vote:u},t)}))})})}},1544:function(n,t,e){e.d(t,{M:function(){return o},V:function(){return u}});var r,i,a=e(168),c=e(6444),u=c.ZP.h1(r||(r=(0,a.Z)(["\ntext-transform:uppercase;\n    text-align: center;\n    margin-top:40px;\n    margin-bottom:40px;\n"]))),o=c.ZP.ul(i||(i=(0,a.Z)(["\ndisplay:flex;\nflex-wrap: wrap;\njustify-content: center;\nflex-direction:row;\nmargin-right:-30px;\nmargin-bottom:-30px;\nlist-style: none;\n"])))},5415:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(885),i=e(2791),a=e(1066),c=e(3510),u=e(1544),o=e(184);function s(){var n=(0,i.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1];return(0,i.useEffect)((function(){(0,a._L)().then((function(n){return s(n.results)}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.V,{children:"Trending today"}),(0,o.jsx)(c.O,{movies:e})]})}},1066:function(n,t,e){e.d(t,{IQ:function(){return m},Jh:function(){return v},TP:function(){return h},_L:function(){return p},qF:function(){return l}});var r=e(5861),i=e(7757),a=e.n(i),c=e(4569),u=e.n(c),o="https://api.themoviedb.org/3/",s="7ab62af97d9519a1533e4099d15ee467";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(o,"/trending/movie/day?api_key=").concat(s)).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(o,"search/movie?api_key=").concat(s,"&page=1&include_adult=false&query=").concat(t)).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(o,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US")).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US")).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US")).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},7468:function(n,t,e){n.exports=e.p+"static/media/defaultMovie.efef4f097220ac08e7f3.png"}}]);
//# sourceMappingURL=415.024f95f8.chunk.js.map