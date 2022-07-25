"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[9399],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),b=o,m=s["".concat(u,".").concat(b)]||s[b]||f[b]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1181:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var n=r(3117),o=(r(7294),r(3905));const i={slug:"Build-side-efficient-collaborative-network",title:"How to build Kubernetes Native Cloud side efficient collaborative network",authors:["charleszheng44"],tags:["yurttunnel"]},a=void 0,l={permalink:"/blog/Build-side-efficient-collaborative-network",editUrl:"https://github.com/openyurtio/openyurt.io/tree/master/blog/blog/2020-11-06-Build-side-efficient-collaborative-network.md",source:"@site/blog/2020-11-06-Build-side-efficient-collaborative-network.md",title:"How to build Kubernetes Native Cloud side efficient collaborative network",description:"\u5bfc\u8bfb\uff1aOpenYurt\u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u4e91\u8fb9\u534f\u540c\u4e00\u4f53\u5316\u67b6\u6784\uff0c\u4e0e\u540c\u7c7b\u5f00\u6e90\u65b9\u6848\u76f8\u6bd4\uff0cOpenYurt\u62e5\u6709\u53ef\u5b9e\u73b0\u8fb9\u7f18\u8ba1\u7b97\u5168\u573a\u666f\u8986\u76d6\u7684\u80fd\u529b\u3002",date:"2020-11-06T00:00:00.000Z",formattedDate:"November 6, 2020",tags:[{label:"yurttunnel",permalink:"/blog/tags/yurttunnel"}],readingTime:20.1,truncated:!0,authors:[{name:"Chao Zheng",title:"Maintainer of OpenYurt",url:"https://github.com/charleszheng44",imageURL:"https://github.com/charleszheng44.png",key:"charleszheng44"}],frontMatter:{slug:"Build-side-efficient-collaborative-network",title:"How to build Kubernetes Native Cloud side efficient collaborative network",authors:["charleszheng44"],tags:["yurttunnel"]},prevItem:{title:"Getting Started with OpenYurt:play with OpenYurt on Raspberry Pi",permalink:"/blog/Play-with-OpenYurt-on-Raspberry-Pi"},nextItem:{title:"Viewing Expansion Ability of YurtHub from Edge Autonomy",permalink:"/blog/Expansion-capability-of-Yurthub"}},u={authorsImageUrls:[void 0]},c=[],p={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5bfc\u8bfb\uff1aOpenYurt\u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u4e91\u8fb9\u534f\u540c\u4e00\u4f53\u5316\u67b6\u6784\uff0c\u4e0e\u540c\u7c7b\u5f00\u6e90\u65b9\u6848\u76f8\u6bd4\uff0cOpenYurt\u62e5\u6709\u53ef\u5b9e\u73b0\u8fb9\u7f18\u8ba1\u7b97\u5168\u573a\u666f\u8986\u76d6\u7684\u80fd\u529b\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OpenYurt\u662f\u5982\u4f55\u5728\u5f31\u7f51\u548c\u65ad\u7f51\u73af\u5883\u4e0b\u5b9e\u73b0\u8fb9\u7f18\u81ea\u6cbb\u7684\u2014\u2014",(0,o.kt)("a",{parentName:"li",href:"/blog/Edge-gateway-caching-capabilities"},"YurtHub")),(0,o.kt)("li",{parentName:"ul"},"OpenYurt\u53e6\u4e00\u4e2a\u6838\u5fc3\u80fd\u529b\u2014\u2014\u4e91\u8fb9\u901a\u4fe1\uff0c\u4ee5\u53ca\u76f8\u5173\u7ec4\u4ef6Yurttunnel")))}f.isMDXComponent=!0}}]);