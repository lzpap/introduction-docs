(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[188],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4154:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],c={},l="Mainnet",u={unversionedId:"mainnet",id:"mainnet",isDocsHomePage:!1,title:"Mainnet",description:"Public Infrastructure",source:"@site/docs/mainnet.md",sourceDirName:".",slug:"/mainnet",permalink:"/mainnet",editUrl:"https://github.com/iotaledger/chrysalis-docs/tree/main/docs/docs/mainnet.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Chrysalis Snapshot Validation/Boostrapping",permalink:"/guides/snapshot_validation_bootstrapping"},next:{title:"Testnet",permalink:"/testnet"}},p=[{value:"Public Infrastructure",id:"public-infrastructure",children:[]},{value:"Developer Tools",id:"developer-tools",children:[]}],s={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mainnet"},"Mainnet"),(0,i.kt)("h2",{id:"public-infrastructure"},"Public Infrastructure"),(0,i.kt)("p",null,"The IOTA Foundation provides following loadbalanced public mainnet endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"chrysalis-nodes.iota.org."),(0,i.kt)("li",{parentName:"ul"},"chrysalis-nodes.iota.cafe.")),(0,i.kt)("p",null,"These endpoints have MQTT (via WebSockets) exposed and offer the HTTP REST API (according to this ",(0,i.kt)("a",{parentName:"p",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/rufsam/protocol-rfcs/master/text/0026-rest-api/rest-api.yaml"},"specification"),")\nover TLS."),(0,i.kt)("h2",{id:"developer-tools"},"Developer Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://explorer.iota.org/mainnet"},"Explorer."))))}f.isMDXComponent=!0}}]);