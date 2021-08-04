(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[22],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(r),m=i,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1426:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),l=["components"],o={},s="IOTA Client Library",c={unversionedId:"libraries/client",id:"libraries/client",isDocsHomePage:!1,title:"IOTA Client Library",description:"The official client library for interacting with the IOTA Tangle allows you to:",source:"@site/docs/libraries/client.md",sourceDirName:"libraries",slug:"/libraries/client",permalink:"/libraries/client",editUrl:"https://github.com/iotaledger/chrysalis-docs/tree/main/docs/libraries/client.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Libraries",permalink:"/libraries/"},next:{title:"IOTA Wallet Library",permalink:"/libraries/wallet"}},p=[{value:"Rust",id:"rust",children:[]},{value:"Node.js",id:"nodejs",children:[]},{value:"Python",id:"python",children:[]},{value:"C",id:"c",children:[]}],u={toc:p};function h(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iota-client-library"},"IOTA Client Library"),(0,a.kt)("p",null,"The official client library for interacting with the IOTA Tangle allows you to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create messages and transactions."),(0,a.kt)("li",{parentName:"ul"},"Sign transactions."),(0,a.kt)("li",{parentName:"ul"},"Generate addresses."),(0,a.kt)("li",{parentName:"ul"},"Interact with an IOTA node.")),(0,a.kt)("p",null,"If you mainly intend to process value transfers, we recommend you use our stateful ",(0,a.kt)("a",{parentName:"p",href:"/libraries/wallet"},"wallet library")," instead."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://client-lib.docs.iota.org"},"IOTA Client Library full documentation"),"."),(0,a.kt)("h2",{id:"rust"},"Rust"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://client-lib.docs.iota.org/libraries/rust/getting_started.html"},"Getting Started")," - Getting Started with Rust and the IOTA Client Library."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://client-lib.docs.iota.org/libraries/rust/examples.html"},"Examples")," - Find starting points or inspiration in the examples."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.rs"},"Repository")," - Browse through the code and learn what's happening behind the scenes. Pull requests are very welcome!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://client-lib.docs.iota.org/docs/iota/index.html"},"API Documentation")," - The IOTA Client Library Rust API Documentation.")),(0,a.kt)("h2",{id:"nodejs"},"Node.js"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://client-lib.docs.iota.org/libraries/nodejs/getting_started.html"},"Getting Started")," - Getting Started with Node.js and the IOTA Client Library."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://client-lib.docs.iota.org/libraries/nodejs/examples.html"},"Examples")," - Find starting points or inspiration in the examples."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.rs"},"Repository")," - Browse through the code and learn what's happening behind the scenes. Pull requests are very welcome!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://client-lib.docs.iota.org/libraries/nodejs/api_reference.html"},"API Documentation")," - The IOTA Client Library Node.js API Documentation.")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://client-lib.docs.iota.org/libraries/python/getting_started.html"},"Getting Started")," - Getting Started with Python and the IOTA Client Library."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://client-lib.docs.iota.org/libraries/python/examples.html"},"Examples")," - Find starting points or inspiration in the examples."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.rs/tree/dev/bindings/python"},"Repository")," - Browse through the code and learn what's happening behind the scenes. Pull requests are very welcome!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://client-lib.docs.iota.org/libraries/python/api_reference.html"},"API Documentation")," - The IOTA Client Library Python API Documentation.")),(0,a.kt)("h2",{id:"c"},"C"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://iota-c-client.readthedocs.io/en/latest/index.html"},"Getting Started")," - Getting Started with C and the IOTA Client Library."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://iota-c-client.readthedocs.io/en/latest/client_examples.html"},"Examples")," - Find starting points or inspiration in the examples."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.c"},"Repository")," - Browse through the code and learn what's happening behind the scenes. Pull requests are very welcome!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://iota-c-client.readthedocs.io/en/latest/api/client.html"},"API Documentation")," - The IOTA Client Library C API Documentation.")))}h.isMDXComponent=!0}}]);