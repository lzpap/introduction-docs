(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[22],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(r),m=a,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||n;return r?i.createElement(d,l(l({ref:t},u),{},{components:r})):i.createElement(d,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<n;p++)l[p]=r[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1426:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var i=r(2122),a=r(9756),n=(r(7294),r(3905)),l=["components"],o={},s="IOTA Client Library",p={unversionedId:"libraries/client",id:"libraries/client",isDocsHomePage:!1,title:"IOTA Client Library",description:"The official client library for interacting with the IOTA Tangle allows you to:",source:"@site/docs/libraries/client.md",sourceDirName:"libraries",slug:"/libraries/client",permalink:"/libraries/client",editUrl:"https://github.com/iotaledger/chrysalis-docs/tree/main/docs/libraries/client.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Libraries",permalink:"/libraries/"},next:{title:"IOTA Wallet Library",permalink:"/libraries/wallet"}},u=[{value:"Rust",id:"rust",children:[]},{value:"Node.js",id:"nodejs",children:[]},{value:"Python",id:"python",children:[]},{value:"Java",id:"java",children:[]},{value:"C",id:"c",children:[]}],c={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,l);return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iota-client-library"},"IOTA Client Library"),(0,n.kt)("p",null,"The official client library for interacting with the IOTA Tangle allows you to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create messages and transactions."),(0,n.kt)("li",{parentName:"ul"},"Sign transactions."),(0,n.kt)("li",{parentName:"ul"},"Generate addresses."),(0,n.kt)("li",{parentName:"ul"},"Interact with an IOTA node.")),(0,n.kt)("p",null,"If you mainly intend to process value transfers, we recommend you use our stateful ",(0,n.kt)("a",{parentName:"p",href:"/libraries/wallet"},"wallet library")," instead."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/libraries/client"},"IOTA Client Library full documentation"),"."),(0,n.kt)("h2",{id:"rust"},"Rust"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/iota.rs/libraries/rust/getting_started"},"Getting Started")," - Getting Started with Rust and the IOTA Client Library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/iota.rs/libraries/rust/examples"},"Examples")," - Find starting points or inspiration in the examples."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.rs"},"Repository")," - Browse through the code and learn what's happening behind the scenes. Pull requests are very welcome!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/iota.rs/libraries/rust/api_reference"},"API Documentation")," - The IOTA Client Library Rust API Documentation.")),(0,n.kt)("h2",{id:"nodejs"},"Node.js"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/iota.rs/libraries/nodejs/getting_started"},"Getting Started")," - Getting Started with Node.js and the IOTA Client Library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/iota.rs/libraries/nodejs/examples"},"Examples")," - Find starting points or inspiration in the examples."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.rs"},"Repository")," - Browse through the code and learn what's happening behind the scenes. Pull requests are very welcome!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/iota.rs/libraries/nodejs/api_reference"},"API Documentation")," - The IOTA Client Library Node.js API Documentation.")),(0,n.kt)("h2",{id:"python"},"Python"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/iota.rs/libraries/python/getting_started"},"Getting Started")," - Getting Started with Python and the IOTA Client Library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/iota.rs/libraries/python/examples"},"Examples")," - Find starting points or inspiration in the examples."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.rs/tree/dev/bindings/python"},"Repository")," - Browse through the code and learn what's happening behind the scenes. Pull requests are very welcome!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/iota.rs/libraries/python/api_reference"},"API Documentation")," - The IOTA Client Library Python API Documentation.")),(0,n.kt)("h2",{id:"java"},"Java"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/iota.rs/libraries/java/getting_started"},"Getting Started")," - Getting Started with Java and the IOTA Client Library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/iota.rs/libraries/java/examples"},"Examples")," - Find starting points or inspiration in the examples."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.rs/tree/dev/bindings/java"},"Repository")," - Browse through the code and learn what's happening behind the scenes. Pull requests are very welcome!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/iota.rs/libraries/java/api_reference"},"API Documentation")," - The IOTA Client Library Java API Documentation.")),(0,n.kt)("h2",{id:"c"},"C"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://iota-c-client.readthedocs.io/en/latest/client_intro.html"},"Getting Started")," - Getting Started with C and the IOTA Client Library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://iota-c-client.readthedocs.io/en/latest/client_examples.html"},"Examples")," - Find starting points or inspiration in the examples."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.c"},"Repository")," - Browse through the code and learn what's happening behind the scenes. Pull requests are very welcome!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://iota-c-client.readthedocs.io/en/latest/api/client.html"},"API Documentation")," - The IOTA Client Library C API Documentation.")))}h.isMDXComponent=!0}}]);