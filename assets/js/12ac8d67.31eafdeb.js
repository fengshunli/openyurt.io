"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[7222],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=p(r),b=a,y=g["".concat(l,".").concat(b)]||g[b]||s[b]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},52996:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={slug:"Edge-gateway-caching-capabilities",title:"Elegant realization of edge gateway caching capabilities",authors:["rambohe-ch"],tags:["yurthub"]},o=void 0,c={permalink:"/blog/Edge-gateway-caching-capabilities",editUrl:"https://github.com/openyurtio/openyurt.io/tree/master/blog/blog/2021-03-29-Edge-gateway-caching-capabilities.md",source:"@site/blog/2021-03-29-Edge-gateway-caching-capabilities.md",title:"Elegant realization of edge gateway caching capabilities",description:"image",date:"2021-03-29T00:00:00.000Z",formattedDate:"March 29, 2021",tags:[{label:"yurthub",permalink:"/blog/tags/yurthub"}],readingTime:6.935,hasTruncateMarker:!0,authors:[{name:"rambohe",title:"Maintainer of OpenYurt",url:"https://github.com/rambohe-ch",imageURL:"https://github.com/rambohe-ch.png",key:"rambohe-ch"}],frontMatter:{slug:"Edge-gateway-caching-capabilities",title:"Elegant realization of edge gateway caching capabilities",authors:["rambohe-ch"],tags:["yurthub"]},prevItem:{title:"How Openyurt runs the business pod in edge scenarios",permalink:"/blog/How-run-business-pod-in-edge-scenarios"},nextItem:{title:"Getting Started with OpenYurt:play with OpenYurt on Raspberry Pi",permalink:"/blog/Play-with-OpenYurt-on-Raspberry-Pi"}},l={authorsImageUrls:[void 0]},p=[{value:"OpenYurt\u5982\u4f55\u89e3\u51b3\u8fb9\u7f18\u81ea\u6cbb\u95ee\u9898",id:"openyurt\u5982\u4f55\u89e3\u51b3\u8fb9\u7f18\u81ea\u6cbb\u95ee\u9898",level:2}],u={toc:p};function s(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:r(73467).Z,width:"865",height:"203"})),(0,a.kt)("h2",{id:"openyurt\u5982\u4f55\u89e3\u51b3\u8fb9\u7f18\u81ea\u6cbb\u95ee\u9898"},"OpenYurt\u5982\u4f55\u89e3\u51b3\u8fb9\u7f18\u81ea\u6cbb\u95ee\u9898"),(0,a.kt)("p",null,"\u60f3\u8981\u5b9e\u73b0\u5c06 Kubernetes \u7cfb\u7edf\u5ef6\u5c55\u5230\u8fb9\u7f18\u8ba1\u7b97\u573a\u666f\uff0c\u90a3\u4e48\u8fb9\u7f18\u8282\u70b9\u5c06\u901a\u8fc7\u516c\u7f51\u548c\u4e91\u7aef\u8fde\u63a5\uff0c\u7f51\u7edc\u8fde\u63a5\u6709\u5f88\u5927\u4e0d\u53ef\u63a7\u56e0\u7d20\uff0c\u53ef\u80fd\u5e26\u6765\u8fb9\u7f18\u4e1a\u52a1\u8fd0\u884c\u7684\u4e0d\u7a33\u5b9a\u56e0\u7d20\uff0c\u8fd9\u662f\u4e91\u539f\u751f\u548c\u8fb9\u7f18\u8ba1\u7b97\u878d\u5408\u7684\u4e3b\u8981\u96be\u70b9\u4e4b\u4e00\u3002"),(0,a.kt)("p",null,"\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u9700\u8981\u4f7f\u8fb9\u7f18\u4fa7\u5177\u6709\u81ea\u6cbb\u80fd\u529b\uff0c\u5373\u5f53\u4e91\u8fb9\u7f51\u7edc\u65ad\u5f00\u6216\u8005\u8fde\u63a5\u4e0d\u7a33\u5b9a\u65f6\uff0c\u786e\u4fdd\u8fb9\u7f18\u4e1a\u52a1\u53ef\u4ee5\u6301\u7eed\u8fd0\u884c\u3002\u5728 OpenYurt \u4e2d\uff0c\u8be5\u80fd\u529b\u7531 yurt-controller-manager \u548c YurtHub \u7ec4\u4ef6\u63d0\u4f9b\u3002"))}s.isMDXComponent=!0},73467:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/OpenYurt-de0f93f0c16ddb05b6782cbe66107b22.png"}}]);