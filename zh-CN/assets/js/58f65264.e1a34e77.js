(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[6787],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),c=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},y={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=c(a),d=r,f=s["".concat(u,".").concat(d)]||s[d]||y[d]||l;return a?n.createElement(f,o(o({ref:e},p),{},{components:a})):n.createElement(f,o({ref:e},p))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6161:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return y}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),o={id:"Intro_to_Alaya",title:"\u5173\u4e8eAlaya",sidebar_label:"\u5173\u4e8eAlaya"},i=void 0,u={unversionedId:"Intro_to_Alaya",id:"Intro_to_Alaya",isDocsHomePage:!1,title:"\u5173\u4e8eAlaya",description:"Alaya\u662f\u4ec0\u4e48",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/Intro_to_Alaya.md",sourceDirName:".",slug:"/Intro_to_Alaya",permalink:"/alaya-devdocs/zh-CN/Intro_to_Alaya",editUrl:"https://github.com/luo-dahui/alaya-devdocs/tree/v2/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/Intro_to_Alaya.md",version:"current",frontMatter:{id:"Intro_to_Alaya",title:"\u5173\u4e8eAlaya",sidebar_label:"\u5173\u4e8eAlaya"},sidebar:"docs",previous:{title:"\u672f\u8bed\u8868",permalink:"/alaya-devdocs/zh-CN/Glossary"},next:{title:"\u4ec0\u4e48\u662fATP",permalink:"/alaya-devdocs/zh-CN/Intro_to_ATP"}},c=[{value:"<strong>Alaya\u662f\u4ec0\u4e48</strong>",id:"alaya\u662f\u4ec0\u4e48",children:[]},{value:"<strong>PlatON\u548cAlaya\u6709\u4ec0\u4e48\u5173\u7cfb</strong>",id:"platon\u548calaya\u6709\u4ec0\u4e48\u5173\u7cfb",children:[]},{value:"Alaya\u751f\u6001\u672a\u6765",id:"alaya\u751f\u6001\u672a\u6765",children:[]}],p={toc:c};function y(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"alaya\u662f\u4ec0\u4e48"},(0,l.kt)("strong",{parentName:"h2"},"Alaya\u662f\u4ec0\u4e48")),(0,l.kt)("p",null,"Alaya\u5b9a\u4f4d\u4e8e\u5168\u7403\u9886\u5148\u7684\u65b0\u4e00\u4ee3\u5206\u5e03\u5f0f\u91d1\u878d\u57fa\u7840\u8bbe\u65bd\uff0c\u81f4\u529b\u4e8e\u4e3a\u5f00\u53d1\u8005\u3001\u8282\u70b9\u3001\u6570\u636e\u63d0\u4f9b\u65b9\u548c\u5176\u4ed6\u53c2\u4e0e\u65b9\u63d0\u4f9b\u5b89\u5168\u3001\u9ad8\u6027\u80fd\u3001\u53ef\u6269\u5c55\u7684\u5206\u5e03\u5f0f\u91d1\u878d\u5e94\u7528\u201c\u6c99\u76d2\u201d\u3002"),(0,l.kt)("p",null,"Alaya\u7ed3\u5408\u533a\u5757\u94fe\u4e0e\u9690\u79c1\u8ba1\u7b97\u80fd\u529b\uff0c\u4fc3\u8fdb\u91d1\u878d\u6570\u636e\u5b89\u5168\u3001\u9690\u79c1\u3001\u5408\u89c4\u7684\u5206\u4eab\u548c\u4ef7\u503c\u4ea4\u6362\uff0c\u6700\u7ec8\u5b9e\u73b0\u670d\u52a1\u4e8e\u4e0e\u5168\u7403\u8303\u56f4\u7684\u666e\u60e0\u91d1\u878d\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\uff0cAlaya\u4e5f\u662f\u5168\u7403\u4e0b\u4e00\u4ee3\u9690\u79c1AI\u8ba1\u7b97\u57fa\u7840\u8bbe\u65bdPlatON",(0,l.kt)("strong",{parentName:"p"},"\u5148\u884c\u8bd5\u9a8c\u533a"),"\uff0c\u4e0ePlatON\u4e00\u8d77\u5171\u540c\u5efa\u8bbe\u6570\u636e\u8981\u7d20\u5168\u6d41\u901a\u670d\u52a1\u57fa\u5c42\u8bbe\u65bd\u3002"),(0,l.kt)("h2",{id:"platon\u548calaya\u6709\u4ec0\u4e48\u5173\u7cfb"},(0,l.kt)("strong",{parentName:"h2"},"PlatON\u548cAlaya\u6709\u4ec0\u4e48\u5173\u7cfb")),(0,l.kt)("p",null,"Alaya\u65e2\u662fPlatON\u7684\u5148\u884c\u8bd5\u9a8c\u533a\uff0c\u5171\u4eab\u540c\u6837\u7684\u6280\u672f\u5e95\u5c42\uff0c\u540c\u65f6Alaya\u53c8\u662f\u72ec\u7acb\u7684\u201c\u6570\u5b57\u751f\u547d\u4f53\u201d\u3002"),(0,l.kt)("p",null,"PlatON\u5b9a\u4f4d\u4e8e\u5168\u7403\u9886\u5bfc\u6027\u7684\u5206\u5e03\u5f0f\u9690\u79c1AI\u7f51\u7edc\uff0c\u805a\u7126\u4e8e\u670d\u52a1\u6570\u636e\u8d44\u4ea7+\u6a21\u578b\u7b97\u6cd5+\u7b97\u529b\u4ea4\u6613\u5e73\u53f0\uff1b\u662f\u4ece\u8ba4\u77e5\u5230\u51b3\u7b56\u9636\u6bb5\u6570\u636e\u8981\u7d20\u8d44\u4ea7\u5316\u7684\u5b8c\u6574\u751f\u6001\u3002PlatON\u672c\u8d28\u4e0a\u662f\u670d\u52a1\u4e8e\u6570\u636e\u8d44\u4ea7\uff0c\u9762\u5411AI\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u4eba\u7c7b\u7684\u5927\u8111\uff0c\u672a\u6765\u53ef\u4ee5\u9762\u5411\u91d1\u878d\u3001\u533b\u7597BioTech\u3001\u653f\u52a1\u7b49\u4eba\u7c7b\u6570\u636e\u5e7f\u6cdb\u5e94\u7528\u7684\u5404\u4e2a\u9886\u57df\u3002"),(0,l.kt)("p",null,"Alaya\u5b9a\u4f4d\u4e8e\u5206\u5e03\u5f0f\u91d1\u878d\u57fa\u7840\u8bbe\u65bd\uff0c\u51ed\u501f\u5728\u91d1\u878d\u9886\u57df\u3001\u5bc6\u7801\u5b66\u6280\u672f\u7b49\u4f18\u52bf\uff0c\u6784\u7b51\u5b89\u5168\u5408\u89c4\u3001\u9690\u79c1\u9ad8\u6548\u7684\u5206\u5e03\u5f0f\u91d1\u878d\u5e94\u7528\u4f53\u7cfb\u3002Alaya\u672c\u8d28\u4e0a\u662f\u91d1\u878d\u57fa\u7840\u8bbe\u65bd\u548c\u4ea4\u6613\u4f53\u7cfb\uff0c\u9762\u5411\u4ea4\u6613\u548c\u4e8b\u52a1\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u4eba\u7c7b\u7684\u624b\u811a\u548c\u611f\u77e5\uff0c\u5b8c\u5168\u805a\u7126\u4e8e\u5bf9\u73b0\u6709\u534e\u5c14\u8857\u4f53\u7cfb\u7684\u91d1\u878d\u8303\u5f0f\u91cd\u6784\u548c\u5347\u7ea7\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\uff0cAlaya\u4f5c\u4e3aPlatON\u7684\u5148\u884c\u8bd5\u9a8c\u7f51\u7edc\uff0c\u5927\u91cf\u7684\u6280\u672f\u3001\u4e1a\u52a1\u548c\u793e\u533a\u5b9e\u8df5\u90fd\u4f1a\u4f18\u5148\u5728Alaya\u5b9e\u73b0\uff0c\u518d\u9010\u6b65\u5411PlatON\u8fc1\u79fb\u3002"),(0,l.kt)("p",null,"\u4e24\u8005\u5171\u4eab\u5171\u540c\u7684LatticeX\u57fa\u91d1\u4f1a\u7684\u7406\u5ff5\u613f\u666f\u3001\u5408\u89c4\u3001\u878d\u8d44\u548c\u793e\u533a\uff0c\u4f46\u6709\u5404\u81ea\u4e0d\u540c\u7684\u5b9a\u4f4d\u548c\u5e94\u7528\u573a\u666f\u3002"),(0,l.kt)("h2",{id:"alaya\u751f\u6001\u672a\u6765"},"Alaya\u751f\u6001\u672a\u6765"),(0,l.kt)("p",null,"\u76ee\u524d\uff0cAlaya\u53d1\u5e03\u8fd8\u4e0d\u52301\u5e74\u7684\u65f6\u95f4\uff0c\u6211\u4eec\u4e00\u76f4\u79c9\u6301\u7740\u201c\u79ef\u6781\u3001\u7a33\u5065\u548c\u5ba1\u614e\u201d\u7684\u539f\u5219\u5f00\u5c55Alaya\u751f\u6001\u5efa\u8bbe\u3002\u6211\u4eec\u751f\u6001\u7684\u57fa\u7840\u8bbe\u65bd\u5df2\u9010\u6b65\u5f00\u59cb\u5b8c\u5584\uff0c\u5df2\u7ecf\u6709\u4e86\u591a\u4e2a\u7b80\u5355\u6613\u7528\u7684\u5ba2\u6237\u7aef\u94b1\u5305\uff0c\u7a33\u5b9a\u7684\u533a\u5757\u94fe\u6d4f\u89c8\u5668\uff0c\u8de8\u94fe\u3001\u501f\u8d37\u7b49\u5404\u5177\u7279\u8272\u7684DApp\u7b49\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u90fd\u79bb\u4e0d\u5f00Alaya\u793e\u533a\u4e2d\u51fa\u8272\u7684\u793e\u533a\u5f00\u53d1\u8005\uff0c\u672a\u6765\uff0c\u6211\u4eec\u5c06\u5728\u5f00\u6e90\u793e\u533a\u6cbb\u7406\u7406\u5ff5\u4e0b\uff0c\u6301\u7eed\u5728\u4ee5\u4e0b\u65b9\u5411\u8fdb\u884c\u53d1\u5c55\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5584\u5f00\u53d1\u8005\u57fa\u7840\u8bbe\u65bd\u5efa\u8bbe"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4ee5\u592a\u574a\u5e94\u7528\u8fdb\u884c\u5168\u90e8\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"\u9690\u79c1\u8ba1\u7b97\u6280\u672f\u96c6\u6210\uff0c\u4e3aDapp\u63d0\u4f9b\u66f4\u6709\u4ef7\u503c\u7684\u5e94\u7528\u573a\u666f"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u5206\u5e03\u5f0f\u91d1\u878d\u57fa\u7840\u8bbe\u65bd\u9886\u57df\u505a\u66f4\u591a\u79ef\u6781\u63a2\u7d22")))}y.isMDXComponent=!0}}]);