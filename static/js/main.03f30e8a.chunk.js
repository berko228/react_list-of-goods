(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s,c=n(4),r=n.n(c),i=n(5),o=n(6),a=n(9),l=n(7),u=n(8),b=n(1),h=(n(14),n(15),n(2)),d=n.n(h),j=n(0),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var N=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={sortType:s.NONE,isReversed:!1},t.handleResetButtonClick=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=function(t,e){var n=e.sortType,c=e.isReversed,r=Object(u.a)(t);return r.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return s.NONE}})),c&&r.reverse(),r}(p,this.state),n=this.state,c=n.sortType,r=n.isReversed,i=c!==s.NONE||r;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:d()("button is-info",{"is-light":1!==c}),onClick:function(){t.setState({sortType:s.ALPHABET})},children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:d()("button is-success",{"is-light":2!==c}),onClick:function(){t.setState({sortType:s.LENGTH})},children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:d()("button is-warning",{"is-light":!r}),onClick:this.handleResetButtonClick,children:"Reverse"}),i&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){t.setState({sortType:0}),t.setState({isReversed:!1})},children:"Reset"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),n}(b.Component);r.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.03f30e8a.chunk.js.map