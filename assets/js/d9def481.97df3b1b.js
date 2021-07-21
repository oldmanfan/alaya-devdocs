(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[3068],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,k=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6362:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"Networks",title:"Networks",sidebar_label:"Networks"},l=void 0,c={unversionedId:"Networks",id:"Networks",isDocsHomePage:!1,title:"Networks",description:"Alaya is a protocol, which means that multiple independent \u201cnetworks\u201d can be built based on it.",source:"@site/docs/Networks.md",sourceDirName:".",slug:"/Networks",permalink:"/alaya-devdocs/Networks",editUrl:"https://github.com/luo-dahui/alaya-devdocs/tree/v2/website/docs/Networks.md",version:"current",frontMatter:{id:"Networks",title:"Networks",sidebar_label:"Networks"},sidebar:"docs",previous:{title:"Staking&Delegation",permalink:"/alaya-devdocs/staking_and_delegation"},next:{title:"Architecture",permalink:"/alaya-devdocs/Architecture"}},u=[{value:"Mainnet",id:"mainnet",children:[]},{value:"Development network",id:"development-network",children:[]},{value:"Development network faucet",id:"development-network-faucet",children:[]},{value:"Private network",id:"private-network",children:[]}],s={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Alaya is a protocol, which means that multiple independent \u201cnetworks\u201d can be built based on it."),(0,a.kt)("p",null,"You can use different Alaya networks depending on your purpose. Alaya mainnet and Alaya development network is currently available."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": The generation of the wallet account does not depend on the network. The same account can be used in different networks. When using the same account in different networks, you need to pay attention to the security of funds on the mainnet!")),(0,a.kt)("h2",{id:"mainnet"},"Mainnet"),(0,a.kt)("p",null,"The Alaya mainnet is a public chain with real economic value operated by the LatticeX Foundation. Anyone can create a mainnet wallet account and can query or create transactions with it, or verify transactions in progress."),(0,a.kt)("p",null,"If you want to install a full node of the main network, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/Run_a_fullnode"},"Run a fullnode"),"."),(0,a.kt)("h2",{id:"development-network"},"Development network"),(0,a.kt)("p",null,"The Alaya development network shares the same features with the mainnet and may be ahead of the mainnet in terms of version. It can be used for testing before version upgrade of the main network, and can also provide a development and testing environment for developers or validators."),(0,a.kt)("p",null,"If you want to connect to the development network as a validator, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/Run_a_dev_node"},"Run a dev node"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": Since the development network has the property of testing, network instability and resets may occur!")),(0,a.kt)("h2",{id:"development-network-faucet"},"Development network faucet"),(0,a.kt)("p",null,"If you need the ATP of the development network for testing, you can get it from the faucet at ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.Alaya.network/faucet/?id=39fa041c887f11eba4f000163e06ae15"},"https://faucet.Alaya.network/faucet/?id=39fa041c887f11eba4f000163e06ae15")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": ATP on the development network has no real value and is for testing only!")),(0,a.kt)("h2",{id:"private-network"},"Private network"),(0,a.kt)("p",null,"Alaya private network is an independent network that is not connected to the mainnet or development network. You can test your application by deploying a private network locally, which can speed up your testing progress."),(0,a.kt)("p",null,"For building a private test network, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/Private_network"},"Private Network "),"."))}p.isMDXComponent=!0}}]);