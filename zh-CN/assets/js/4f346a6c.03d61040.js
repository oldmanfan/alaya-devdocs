(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[375],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return c},kt:function(){return s}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),i=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=i(t.components);return n.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=i(a),s=r,d=m["".concat(u,".").concat(s)]||m[s]||k[s]||l;return a?n.createElement(d,o(o({ref:e},c),{},{components:a})):n.createElement(d,o({ref:e},c))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},962:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return i},default:function(){return k}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),o={id:"Intro_to_ATP",title:"\u4ec0\u4e48\u662fATP",sidebar_label:"\u4ec0\u4e48\u662fATP"},p=void 0,u={unversionedId:"Intro_to_ATP",id:"Intro_to_ATP",isDocsHomePage:!1,title:"\u4ec0\u4e48\u662fATP",description:"\u4ec0\u4e48\u662fATP\uff0c\u4ee5\u53ca\u5982\u4f55\u83b7\u5f97\uff1f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/Intro_to_ATP.md",sourceDirName:".",slug:"/Intro_to_ATP",permalink:"/alaya-devdocs/zh-CN/Intro_to_ATP",editUrl:"https://github.com/luo-dahui/alaya-devdocs/tree/v2/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/Intro_to_ATP.md",version:"current",frontMatter:{id:"Intro_to_ATP",title:"\u4ec0\u4e48\u662fATP",sidebar_label:"\u4ec0\u4e48\u662fATP"},sidebar:"docs",previous:{title:"\u5173\u4e8eAlaya",permalink:"/alaya-devdocs/zh-CN/Intro_to_Alaya"},next:{title:"\u8d28\u62bc&\u59d4\u6258",permalink:"/alaya-devdocs/zh-CN/staking_and_delegation"}},i=[{value:"\u4ec0\u4e48\u662fATP\uff0c\u4ee5\u53ca\u5982\u4f55\u83b7\u5f97\uff1f",id:"\u4ec0\u4e48\u662fatp\uff0c\u4ee5\u53ca\u5982\u4f55\u83b7\u5f97\uff1f",children:[]},{value:"ATP\u6709\u4ec0\u4e48\u7528\uff1f",id:"atp\u6709\u4ec0\u4e48\u7528\uff1f",children:[]},{value:"ATP\u5982\u4f55\u7ba1\u7406\uff1f",id:"atp\u5982\u4f55\u7ba1\u7406\uff1f",children:[]},{value:"\u6d4f\u89c8ATP\u4ea4\u6613",id:"\u6d4f\u89c8atp\u4ea4\u6613",children:[]}],c={toc:i};function k(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662fatp\uff0c\u4ee5\u53ca\u5982\u4f55\u83b7\u5f97\uff1f"},"\u4ec0\u4e48\u662fATP\uff0c\u4ee5\u53ca\u5982\u4f55\u83b7\u5f97\uff1f"),(0,l.kt)("p",null,"ATP\u662fAlaya\u7684\u539f\u751fToken\uff0c\u7c7b\u4f3c\u4e8e\u4ee5\u592a\u574a\u533a\u5757\u94fe\u7684\u539f\u751fToken(ETH)\u3002\u60a8\u53ef\u4ee5\u5728Alaya\u7f51\u7edc\u4e0a\u8fdb\u884c\u53d1\u9001\uff0c\u4e5f\u53ef\u4ee5\u5728Alaya\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"Alaya\u7f51\u7edc\u4e2d\u6700\u5c0f\u7684\u8bb0\u8d26\u5355\u4f4d\u662fVon\uff0c\u5e38\u89c4\u4f7f\u7528\u5355\u4f4dATP\uff0c\u6bcf\u4e2aATP\u7b49\u4e8e1e18Von"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5355\u4f4d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c0f\u6570\u4f4d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6bcf\u5355\u4f4d\u6298\u5408ATP"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Von"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000000000000000001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GVon"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000000001000000000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ATP"),(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null},"1.000000000000000000")))),(0,l.kt)("p",null,"\u76ee\u524d\u60a8\u53ef\u4ee5\u901a\u8fc7\u53c2\u4e0eLatticeX\u57fa\u91d1\u4f1a\u7684",(0,l.kt)("a",{parentName:"p",href:"https://latticex.foundation/grants"},"Grants\u8ba1\u5212"),"\u4ee5\u53ca\u540e\u7eed\u5176\u4ed6\u7684\u793e\u533a\u53d1\u5c55\u8ba1\u5212\u6765\u83b7\u53d6ATP\u3002"),(0,l.kt)("h2",{id:"atp\u6709\u4ec0\u4e48\u7528\uff1f"},"ATP\u6709\u4ec0\u4e48\u7528\uff1f"),(0,l.kt)("p",null,"ATP\u5728Alaya\u4e2d\u63d0\u4f9b\u4e09\u4e2a\u5173\u952e\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4fdd\u969cAlaya\u7f51\u7edc\u5b89\u5168"))),(0,l.kt)("p",null,"\u5f53\u60a8\u53d1\u9001ATP\u6216\u4f7f\u7528Alaya\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u60a8\u9700\u652f\u4ed8\u4e00\u5c0f\u7b14ATP\u8d39\u7528\uff0c\u8fd9\u7b14\u8d39\u7528\u7528\u4e8e\u6fc0\u52b1\u8282\u70b9\u5904\u7406\u548c\u9a8c\u8bc1\u60a8\u7684\u4ea4\u6613\u3002"),(0,l.kt)("p",null,"\u5728PPOS\u673a\u5236\u4e2d\uff0cATP\u5bf9\u7f51\u7edc\u975e\u5e38\u91cd\u8981\u3002ATP\u7528\u6765\u59d4\u6258\u8282\u70b9\uff0c\u6216\u8005\u81ea\u5df1\u8d28\u62bc\u6210\u4e3a\u9a8c\u8bc1\u8282\u70b9\uff0c\u4ee5\u6b64\u7ef4\u62a4Alaya\u7f51\u7edc\u5b89\u5168\u5e76\u83b7\u5f97ATP\u5956\u52b1\u3002",(0,l.kt)("a",{parentName:"p",href:"/alaya-devdocs/zh-CN/Intro_to_validator"},"\u66f4\u591a\u5173\u4e8eAlaya\u9a8c\u8bc1\u8282\u70b9\u4fe1\u606f"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u4e86\u89e3\u5173\u4e8eATP\u7684\u7ecf\u6d4e\u673a\u5236\uff0c",(0,l.kt)("a",{parentName:"p",href:"/alaya-devdocs/zh-CN/Economic_model#alaya%E7%9A%84%E7%BB%8F%E6%B5%8E%E6%96%B9%E6%A1%88"},"\u70b9\u51fb\u67e5\u770b\u66f4\u591a\u4ecb\u7ecd"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u53c2\u4e0eAlaya\u7f51\u7edc\u6cbb\u7406"))),(0,l.kt)("p",null,"Alaya\u7f51\u7edc\u8d4b\u4e88\u4e86\u6240\u6709ATP\u6301\u6709\u8005\u90fd\u6709\u6743\u53c2\u4e0eAlaya\u6cbb\u7406\uff0c\u5305\u542b\u51b3\u5b9aAlaya\u7f51\u7edc\u7684\u53d1\u5c55\u65b9\u5411\u3001\u66f4\u6539\u57fa\u7840\u534f\u8bae\u7b49\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u6301\u6709\u8005\u5982\u4f55\u53c2\u4e0e\u6cbb\u7406\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/alaya-devdocs/zh-CN/Governance_mechanism"},"Alaya\u6cbb\u7406\u65b9\u6848\u9875\u9762"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u652f\u6491DApp\u751f\u6001\u53d1\u5c55"))),(0,l.kt)("p",null,"Alaya\u5c06\u652f\u6301DApps\u7684\u53d1\u5c55\uff0c\u5f15\u5165DApps\u7684\u7ecf\u6d4e\u8026\u5408\u8bbe\u8ba1\u3002\u4f8b\u5982\uff0cDApps\u53ef\u4ee5\u53d1\u884c\u81ea\u5df1\u7684Token\uff0c\u800cDApp\u7684Token\u5fc5\u987b\u4ee5ATP\u50a8\u5907\u91d1\u4f5c\u4e3a\u652f\u6301\u3002\n\u672a\u6765Alaya\u8fd8\u5c06\u652f\u6301\u5f00\u53d1\u4ee5ATP\u4e3a\u62b5\u62bc\u7684\u7a33\u5b9a\u5e01\u3002"),(0,l.kt)("h2",{id:"atp\u5982\u4f55\u7ba1\u7406\uff1f"},"ATP\u5982\u4f55\u7ba1\u7406\uff1f"),(0,l.kt)("p",null,"\u94b1\u5305\u662f\u60a8\u521b\u5efa\u548c\u5b58\u50a8ATP\u8d26\u6237\u4ee5\u53ca\u4e0eDApp\u8fdb\u884c\u4ea4\u4e92\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u901a\u8fc7\u94b1\u5305\u53ef\u4ee5\u8f7b\u677e\u7684\u6301\u6709\u6216\u53d1\u9001ATP\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u521b\u5efa\u4e00\u4e2aATP\u8d26\u6237")),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5c0f\u767d\u7528\u6237\uff0c\u63a8\u8350\u4f7f\u7528\u4e0b\u5217\u94b1\u5305\u5e94\u7528\u521b\u5efaATP\u8d26\u6237\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://Alaya.network/developer/?lang=zh#aton"},"ATON")," -  \u4e3aiOS\u548cAndroid\u5e73\u53f0\u8bbe\u8ba1\u7684\u624b\u673a\u79fb\u52a8\u7aef\u94b1\u5305")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/AlayaNetwork/Samurai"},"Samurai\u63d2\u4ef6\u94b1\u5305")," -  \u7f51\u9875\u6d4f\u89c8\u5668\u63d2\u4ef6\u94b1\u5305"))),(0,l.kt)("p",null,"\u53e6\u5916\u975e\u56fe\u5f62\u5316\u7684\u5de5\u5177\uff1a",(0,l.kt)("a",{parentName:"p",href:"/alaya-devdocs/zh-CN/OnLine_MTool_Manual#%E5%88%9B%E5%BB%BA%E9%92%B1%E5%8C%85"},"MTool"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"/alaya-devdocs/zh-CN/Command_Line_Tools#personal"},"AlayaCLI")," \u3001",(0,l.kt)("a",{parentName:"p",href:"/alaya-devdocs/zh-CN/Alaya-Truffle"},"Alaya-Truffle")," \u4e5f\u652f\u6301\u60a8\u521b\u5efaATP\u8d26\u6237\u3002"),(0,l.kt)("p",null,"\u76f8\u5173ATP\u8f6c\u79fb\u64cd\u4f5c\u8bf7\u67e5\u770b\u5177\u4f53\u94b1\u5305\u5de5\u5177\u7684\u4f7f\u7528\u624b\u518c\u3002"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u6ce8\uff1a\u4e0a\u8ff0\u4fe1\u606f\u4ec5\u4e3a\u8d44\u6e90\u6c47\u603b\uff0c\u5e76\u4e0d\u4ee3\u8868\u6211\u4eec\u5bf9\u94b1\u5305\u4f7f\u7528\u7684\u5b89\u5168\u6027\u8d1f\u8d23"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4fdd\u62a4\u60a8\u7684ATP\u5b89\u5168")),(0,l.kt)("p",null,"\u533a\u5757\u94fe\u7684\u53bb\u4e2d\u5fc3\u5316\u4f7fAlaya\u548cATP\u4e0d\u53d7\u4efb\u4f55\u7ec4\u7ec7\u63a7\u5236\u3002\u56e0\u6b64ATP\u662f\u5f00\u653e\u7684\uff0c\u6bcf\u4e2a\u4eba\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u8fd9\u4e5f\u610f\u5473\u7740\u60a8\u9700\u8981\u8ba4\u771f\u5bf9\u5f85\u8d44\u91d1\u7684\u5b89\u5168\u6027\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u81ea\u5df1\u7684\u8d44\u91d1\u8d1f\u8d23")),(0,l.kt)("p",null,"\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240\u4f1a\u5c06\u60a8\u7684\u94b1\u5305\u4e0e\u7528\u6237\u540d\u53ca\u5bc6\u7801\u5173\u8054\u8d77\u6765\uff0c\u652f\u6301\u4f7f\u7528\u4f20\u7edf\u65b9\u5f0f\u6062\u590d\u94b1\u5305\u3002\u60a8\u9700\u8981\u9009\u62e9\u503c\u5f97\u4fe1\u4efb\u548c\u5b89\u5168\u7684\u4ea4\u6613\u6240\u3002\u5982\u679c\u8be5\u4ea4\u6613\u6240\u88ab\u653b\u51fb\u6216\u5012\u95ed\uff0c\u60a8\u7684\u8d44\u91d1\u53ef\u80fd\u5c31\u6709\u98ce\u9669\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5907\u4efd\u52a9\u8bb0\u8bcd\u3001\u79c1\u94a5")),(0,l.kt)("p",null,"\u94b1\u5305\u901a\u5e38\u4f1a\u7ed9\u60a8\u4e00\u4e2a\u52a9\u8bb0\u77ed\u8bed\u6216\u79c1\u94a5\uff0c\u60a8\u5fc5\u987b\u5728\u5b89\u5168\u7684\u5730\u65b9\u8bb0\u5f55\u4e0b\u6765\u3002\u8fd9\u662f\u60a8\u80fd\u591f\u6062\u590d\u94b1\u5305\u7684\u552f\u4e00\u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"\u52a9\u8bb0\u8bcd\u4f8b\u5b50\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"enlist goriia raw juice disagree toy kite tube behave video unusual may")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u5efa\u8bae\u4e0d\u8981\u628a\u5b83\u5b58\u50a8\u5728\u7535\u8111\u4e0a\uff0c\u628a\u5b83\u5199\u4e0b\u6765\u5e76\u4fdd\u7ba1\u597d\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ed4\u7ec6\u6838\u5bf9\u4e00\u5207")),(0,l.kt)("p",null,"\u8bf7\u8bb0\u4f4f\u4ea4\u6613\u4e00\u65e6\u53d1\u9001\u662f\u65e0\u6cd5\u64a4\u9500\u7684\uff0c\u94b1\u5305\u4e22\u5931\u4e5f\u662f\u4e0d\u80fd\u8f7b\u6613\u627e\u56de\u7684\uff0c\u8bf7\u4fdd\u6301\u8c28\u614e\u5c0f\u5fc3\u3002"),(0,l.kt)("p",null,"\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u94b1\u5305\u5b89\u5168\u4fe1\u606f\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://support.mycrypto.com/staying-safe/protecting-yourself-and-your-funds"},"Protecting Yourself and Your Funds")," ",(0,l.kt)("em",{parentName:"li"},"Updated often - MyCrypto")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.coinbase.com/the-keys-to-keeping-your-crypto-safe-96d497cce6cf"},"The keys to keeping your crypto safe")," ",(0,l.kt)("em",{parentName:"li"},"Jan 16, 2019 - Coinbase blog"))),(0,l.kt)("h2",{id:"\u6d4f\u89c8atp\u4ea4\u6613"},"\u6d4f\u89c8ATP\u4ea4\u6613"),(0,l.kt)("p",null,"\u968f\u7740\u7f51\u7edc\u5229\u7528\u7387\u7684\u589e\u957f\uff0c\u94fe\u4e0a\u6570\u636e\u5c06\u5b58\u5728\u8d8a\u6765\u8d8a\u591a\u6709\u4ef7\u503c\u7684\u4fe1\u606f\uff0c\u901a\u8fc7\u533a\u5757\u6d4f\u89c8\u5668\u53ef\u4ee5\u4e3a\u60a8\u63d0\u4f9b\u6d4f\u89c8\u533a\u5757\u3001\u4ea4\u6613\u3001\u8d26\u6237\u3001\u8282\u70b9\u548c\u5176\u4ed6\u94fe\u4e0a\u6d3b\u52a8\u7684\u5b9e\u65f6\u6570\u636e\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://scan.Alaya.network/"},"AlayaScan")," - Alaya\u533a\u5757\u94fe\u8d44\u6e90\u7ba1\u7406\u548c\u5206\u6790\u5e73\u53f0\uff0c\u652f\u6301\u4e2d\u6587\u3001\u82f1\u6587\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.alayascan.com/"},"PlatEye"))))}k.isMDXComponent=!0}}]);