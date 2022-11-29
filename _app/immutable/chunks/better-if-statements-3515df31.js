import{S as ve,i as de,s as we,k as a,q as l,a as u,l as r,m as i,r as c,h as t,c as p,n as Z,b as s,D as n,B as $}from"./index-2dffc822.js";function ye(ce){let f,R,O,v,U,P,h,pe=`<code class="language-undefined">var response = &quot;error&quot;
var color = &quot;&quot;

if (response == &quot;success&quot;) &#123;
	color = &quot;text-green&quot;
&#125;
else if (response == &quot;warning&quot;) &#123;
	color = &quot;text-orange&quot;
&#125;
else if (response == &quot;error&quot;) &#123;
	color = &quot;text-red&quot;
&#125;
else &#123;
	color = &quot;text-black&quot;
&#125;</code>`,S,d,I,A,H,w,N,L,y,W,M,m,fe=`<code class="language-undefined">var response = &quot;warning&quot;
var color = &quot;&quot;

switch(response) &#123;
  case &quot;success&quot;:
    color = &quot;text-green&quot;
    break;
  case &quot;warning&quot;:
    color = &quot;text-orange&quot;
    break;
  case &quot;error&quot;:
    color = &quot;text-red&quot;
    break;
&#125;</code>`,B,_,j,z,J,E,F,C,k,G,D,q,he=`<code class="language-undefined">var response = &quot;success&quot;
var colorMap = &#123;
	&quot;success&quot;: &quot;text-green&quot;,
	&quot;warning&quot;: &quot;text-orange&quot;,
	&quot;error&quot;: &quot;text-red&quot;,
	&quot;&quot;: &quot;text-black&quot;
&#125;
var color = colorMap[response]</code>`,K,x,b,V,T,X,Y;return{c(){f=a("p"),R=l(`Don\u2019t use \u201Cif statements\u201D with lots of possible outcomes!
It\u2019s best to avoid this if possible, because \u201Cif statements\u201D can get very ugly and difficult to read; \u201Cswitch statements\u201D are better, but not by much.
The third option is much cleaner and exponentially more efficient.`),O=u(),v=a("h3"),U=l("Javascript - If Statement"),P=u(),h=a("pre"),S=u(),d=a("blockquote"),I=a("p"),A=l(`15 Lines and 235 characters to solve a simple problem.
Not only is this code ugly but can also be very innefficient as the number of operations increases.
IE: \u201Cerror\u201D will currently require 3 calculations to determine the color; if there was 15 possible colors this code could require 15 operations to determine the outcome.`),H=u(),w=a("p"),N=l(`In contrast the \u201Cswitch statement\u201D is far more efficient because it works on a map-based architecture.
This means that the operation will cost the same computationally no matter the number of possible colors.
However the \u201Cswitch statement\u201D is arguably ugly to read.`),L=u(),y=a("h3"),W=l("Javascript - Switch Statement"),M=u(),m=a("pre"),B=u(),_=a("blockquote"),j=a("p"),z=l("With 11 lines and 221 characters: this is an improvement over the multiple \u201Cif statements\u201D however there is a third option that is much cleaner and very efficient."),J=u(),E=a("p"),F=l(`If we store our \u201Cresponse\u201D and \u201Ccolor\u201D in a javascript object we can use it to quickly and neatly map our \u201Cinput\u201D to our \u201Coutput\u201D
In the below example we use the \u201Cresponse\u201D variable as an object key to determine our \u201Ccolor\u201D value.`),C=u(),k=a("h3"),G=l("Javascript - Object Map"),D=u(),q=a("pre"),K=u(),x=a("blockquote"),b=a("p"),V=l(`At 8 lines and 167 characters this is the shortest implementation.
In a high performance situation this solution ranks much higher than the \u201Cif statement\u201D option, the object map allows an `),T=a("code"),X=l("o1"),Y=l(` constant performance.
In my opinion this approach is much neater and tidier than both the \u201Cif statement\u201D and \u201Cswitch statement\u201D options.`),this.h()},l(e){f=r(e,"P",{});var o=i(f);R=c(o,`Don\u2019t use \u201Cif statements\u201D with lots of possible outcomes!
It\u2019s best to avoid this if possible, because \u201Cif statements\u201D can get very ugly and difficult to read; \u201Cswitch statements\u201D are better, but not by much.
The third option is much cleaner and exponentially more efficient.`),o.forEach(t),O=p(e),v=r(e,"H3",{});var g=i(v);U=c(g,"Javascript - If Statement"),g.forEach(t),P=p(e),h=r(e,"PRE",{class:!0});var me=i(h);me.forEach(t),S=p(e),d=r(e,"BLOCKQUOTE",{});var ee=i(d);I=r(ee,"P",{});var te=i(I);A=c(te,`15 Lines and 235 characters to solve a simple problem.
Not only is this code ugly but can also be very innefficient as the number of operations increases.
IE: \u201Cerror\u201D will currently require 3 calculations to determine the color; if there was 15 possible colors this code could require 15 operations to determine the outcome.`),te.forEach(t),ee.forEach(t),H=p(e),w=r(e,"P",{});var oe=i(w);N=c(oe,`In contrast the \u201Cswitch statement\u201D is far more efficient because it works on a map-based architecture.
This means that the operation will cost the same computationally no matter the number of possible colors.
However the \u201Cswitch statement\u201D is arguably ugly to read.`),oe.forEach(t),L=p(e),y=r(e,"H3",{});var se=i(y);W=c(se,"Javascript - Switch Statement"),se.forEach(t),M=p(e),m=r(e,"PRE",{class:!0});var qe=i(m);qe.forEach(t),B=p(e),_=r(e,"BLOCKQUOTE",{});var ae=i(_);j=r(ae,"P",{});var re=i(j);z=c(re,"With 11 lines and 221 characters: this is an improvement over the multiple \u201Cif statements\u201D however there is a third option that is much cleaner and very efficient."),re.forEach(t),ae.forEach(t),J=p(e),E=r(e,"P",{});var ie=i(E);F=c(ie,`If we store our \u201Cresponse\u201D and \u201Ccolor\u201D in a javascript object we can use it to quickly and neatly map our \u201Cinput\u201D to our \u201Coutput\u201D
In the below example we use the \u201Cresponse\u201D variable as an object key to determine our \u201Ccolor\u201D value.`),ie.forEach(t),C=p(e),k=r(e,"H3",{});var ne=i(k);G=c(ne,"Javascript - Object Map"),ne.forEach(t),D=p(e),q=r(e,"PRE",{class:!0});var be=i(q);be.forEach(t),K=p(e),x=r(e,"BLOCKQUOTE",{});var le=i(x);b=r(le,"P",{});var Q=i(b);V=c(Q,`At 8 lines and 167 characters this is the shortest implementation.
In a high performance situation this solution ranks much higher than the \u201Cif statement\u201D option, the object map allows an `),T=r(Q,"CODE",{});var ue=i(T);X=c(ue,"o1"),ue.forEach(t),Y=c(Q,` constant performance.
In my opinion this approach is much neater and tidier than both the \u201Cif statement\u201D and \u201Cswitch statement\u201D options.`),Q.forEach(t),le.forEach(t),this.h()},h(){Z(h,"class","language-undefined"),Z(m,"class","language-undefined"),Z(q,"class","language-undefined")},m(e,o){s(e,f,o),n(f,R),s(e,O,o),s(e,v,o),n(v,U),s(e,P,o),s(e,h,o),h.innerHTML=pe,s(e,S,o),s(e,d,o),n(d,I),n(I,A),s(e,H,o),s(e,w,o),n(w,N),s(e,L,o),s(e,y,o),n(y,W),s(e,M,o),s(e,m,o),m.innerHTML=fe,s(e,B,o),s(e,_,o),n(_,j),n(j,z),s(e,J,o),s(e,E,o),n(E,F),s(e,C,o),s(e,k,o),n(k,G),s(e,D,o),s(e,q,o),q.innerHTML=he,s(e,K,o),s(e,x,o),n(x,b),n(b,V),n(b,T),n(T,X),n(b,Y)},p:$,i:$,o:$,d(e){e&&t(f),e&&t(O),e&&t(v),e&&t(P),e&&t(h),e&&t(S),e&&t(d),e&&t(H),e&&t(w),e&&t(L),e&&t(y),e&&t(M),e&&t(m),e&&t(B),e&&t(_),e&&t(J),e&&t(E),e&&t(C),e&&t(k),e&&t(D),e&&t(q),e&&t(K),e&&t(x)}}}const Ee={layout:"post",title:'Better "If Statements"',date:"2021-08-23",slug:"better-if-statements"};class ke extends ve{constructor(f){super(),de(this,f,null,ye,we,{})}}export{ke as default,Ee as metadata};
