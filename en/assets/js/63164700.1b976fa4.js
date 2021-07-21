(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[2062],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(c,".").concat(m)]||u[m]||s[m]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},791:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),l={id:"Development_guide",title:"Development guide",sidebar_label:"Development guide"},i=void 0,c={unversionedId:"Development_guide",id:"Development_guide",isDocsHomePage:!1,title:"Development guide",description:"This section helps developers to quickly write, deploy and debug contracts on the Alaya network and develop various DApp applications based on the contracts.",source:"@site/docs/Development_guide.md",sourceDirName:".",slug:"/Development_guide",permalink:"/alaya-devdocs/en/Development_guide",editUrl:"https://github.com/luo-dahui/alaya-devdocs/tree/v2/website/docs/Development_guide.md",version:"current",frontMatter:{id:"Development_guide",title:"Development guide",sidebar_label:"Development guide"},sidebar:"docs",previous:{title:"Alaya Command line tools",permalink:"/alaya-devdocs/en/Command_Line_Tools"},next:{title:"Join the dev network",permalink:"/alaya-devdocs/en/Join_the_dev_network"}},p=[{value:"What is DApp?",id:"what-is-dapp",children:[]},{value:"What a DApp?",id:"what-a-dapp",children:[{value:"Set up local development environment",id:"set-up-local-development-environment",children:[]},{value:"How to Write Contracts?",id:"how-to-write-contracts",children:[]},{value:"Front-end or back-end development",id:"front-end-or-back-end-development",children:[]},{value:"PRC Token",id:"prc-token",children:[]}]}],d={toc:p};function s(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section helps developers to quickly write, deploy and debug contracts on the Alaya network and develop various DApp applications based on the contracts."),(0,r.kt)("h2",{id:"what-is-dapp"},"What is DApp?"),(0,r.kt)("p",null,"A DApp is a decentralized application built on the blockchain. It usually consists of a series of contracts, an interactive front-end and a back-end service."),(0,r.kt)("h2",{id:"what-a-dapp"},"What a DApp?"),(0,r.kt)("p",null,"A DApp is a decentralized application build on the blockchain, usually consisting of a series of smart contracts, an interactive interface, and backend services."),(0,r.kt)("h3",{id:"set-up-local-development-environment"},"Set up local development environment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Private_network"},"Private network")," - Build a private node or cluster network locally, which can help you debug your local application quickly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Join_the_dev_network"},"Join the dev network")," - Use the development network to test your application in a more open network environment.")),(0,r.kt)("h3",{id:"how-to-write-contracts"},"How to Write Contracts?"),(0,r.kt)("h4",{id:"tools-for-development"},"Tools for development"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Alaya-Truffle"},"Alaya-Truffle")," - A contract development framework that supports WASM and Solidity contracts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/IDE"},"IDE")," - An interface-based development tool that supports WASM and Solidity contracts.")),(0,r.kt)("h4",{id:"solidity-contract"},"Solidity contract"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Solidity_Getting_started"},"Getting started")," - An example of how to deploy, compile, publish, and call contracts on the Alaya network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Solidity_Best_practices/"},"Best practices")," - Learn about some of the specifications for writing contracts on trasaction fees."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/Solidity_Development_costs/"},"Development costs")," - Introduces the fee cost about Solidity contract deployment and call, and the comparative analysis of the fee with Ethereum."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Solidity_Contract_security"},"Contract security")," - A few writing specifications on how to improve the security of the contract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Solidity_Migration_tutorial"},"Migration tutorial")," - A tutorial on migrating Solidity contracts from Ethereum to the Alaya network.")),(0,r.kt)("h4",{id:"wasm-contract"},"WASM contract"),(0,r.kt)("p",null,"WASM currently supports contract development in ",(0,r.kt)("inlineCode",{parentName:"p"},"C++")," language, that would be welcome if you want to extend WASM to support contracts in other major languages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Wasm_Getting_started"},"Getting started")," - An example of how to deploy, compile, publish and invoke a WASM contract on the Alaya network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Wasm_Development_costs"},"Development costs")," - Introduction to the fee cost about WASM contract deployment and call."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Wasm_Best_practices"},"Best practices")," - Learn about some of the specifications for writing contracts on trasaction fees."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Wasm_API"},"Wasm_API")," - Introduction to WASM's contract library.")),(0,r.kt)("h3",{id:"front-end-or-back-end-development"},"Front-end or back-end development"),(0,r.kt)("p",null,"You can interact directly with the contract through the front-end directly, and the following documentation will help."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Samurai_API"},"Samurai API")," - Introduction to a Web Wallet API that supports the Alaya network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/JS_SDK"},"JS SDK")," - How to use JavaScrip to interact with contracts on the Alaya network.")),(0,r.kt)("p",null,"If you want to interact with the Alaya network by writing back-end services, the following SDKs in different languages can help."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Java_SDK"},"JAVA SDK"))),(0,r.kt)("h3",{id:"prc-token"},"PRC Token"),(0,r.kt)("p",null,"Since Alaya inherits EVM, the Alaya network is theoretically compatible with all standard Token protocols on Ethereum. Token protocols that are currently explicitly supported are ",(0,r.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/ARC20"},"ARC-20"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/ARC721"},"ARC-721"),"."))}s.isMDXComponent=!0}}]);