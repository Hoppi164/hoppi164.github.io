import{S as D,i as I,s as T,k as m,q as P,a as E,l as p,m as g,r as b,h as d,c as q,n as v,b as k,D as u,B as H,L as A,u as C}from"../../../chunks/index-2dffc822.js";function L(_,e,s){const r=_.slice();return r[1]=e[s],r}function M(_){let e,s,r,i=_[1].title+"",h,f,t,l=_[1].summary+"",c,a;return{c(){e=m("a"),s=m("article"),r=m("h3"),h=P(i),f=E(),t=m("p"),c=E(),this.h()},l(n){e=p(n,"A",{href:!0,class:!0});var o=g(e);s=p(o,"ARTICLE",{class:!0});var y=g(s);r=p(y,"H3",{class:!0});var x=g(r);h=b(x,i),x.forEach(d),f=q(y),t=p(y,"P",{class:!0});var B=g(t);B.forEach(d),y.forEach(d),c=q(o),o.forEach(d),this.h()},h(){v(r,"class","text-center"),v(t,"class","text-center post-summary svelte-19yc0nq"),v(s,"class","svelte-19yc0nq"),v(e,"href",a=_[1].url),v(e,"class","svelte-19yc0nq")},m(n,o){k(n,e,o),u(e,s),u(s,r),u(r,h),u(s,f),u(s,t),t.innerHTML=l,u(e,c)},p(n,o){o&1&&i!==(i=n[1].title+"")&&C(h,i),o&1&&l!==(l=n[1].summary+"")&&(t.innerHTML=l),o&1&&a!==(a=n[1].url)&&v(e,"href",a)},d(n){n&&d(e)}}}function S(_){let e,s,r,i,h,f=_[0].allPosts,t=[];for(let l=0;l<f.length;l+=1)t[l]=M(L(_,f,l));return{c(){e=m("div"),s=m("h2"),r=P("Welcome to My Blog"),i=E(),h=m("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=p(l,"DIV",{});var c=g(e);s=p(c,"H2",{class:!0});var a=g(s);r=b(a,"Welcome to My Blog"),a.forEach(d),i=q(c),h=p(c,"DIV",{class:!0});var n=g(h);for(let o=0;o<t.length;o+=1)t[o].l(n);n.forEach(d),c.forEach(d),this.h()},h(){v(s,"class","text-center"),v(h,"class","gallery svelte-19yc0nq")},m(l,c){k(l,e,c),u(e,s),u(s,r),u(e,i),u(e,h);for(let a=0;a<t.length;a+=1)t[a].m(h,null)},p(l,[c]){if(c&1){f=l[0].allPosts;let a;for(a=0;a<f.length;a+=1){const n=L(l,f,a);t[a]?t[a].p(n,c):(t[a]=M(n),t[a].c(),t[a].m(h,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=f.length}},i:H,o:H,d(l){l&&d(e),A(t,l)}}}function V(_,e,s){let{data:r}=e;return _.$$set=i=>{"data"in i&&s(0,r=i.data)},[r]}class w extends D{constructor(e){super(),I(this,e,V,S,T,{data:0})}}export{w as default};
