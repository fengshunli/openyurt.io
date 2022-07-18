"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4743],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=c(n),f=i,y=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(y,a(a({ref:e},p),{},{components:n})):r.createElement(y,a({ref:e},p))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9094:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var r=n(3117),i=(n(7294),n(3905));const l={title:"\u521b\u5efaOpenYurt\u6d4b\u8bd5\u96c6\u7fa4(Yurtctl init/join)"},a=void 0,o={unversionedId:"installation/yurtctl-init-join",id:"version-v0.6.0/installation/yurtctl-init-join",title:"\u521b\u5efaOpenYurt\u6d4b\u8bd5\u96c6\u7fa4(Yurtctl init/join)",description:"1.\u80cc\u666f\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.6.0/installation/yurtctl-init-join.md",sourceDirName:"installation",slug:"/installation/yurtctl-init-join",permalink:"/zh/docs/v0.6.0/installation/yurtctl-init-join",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtctl-init-join.md",tags:[],version:"v0.6.0",lastUpdatedBy:"Peeknut",lastUpdatedAt:1645156159,formattedLastUpdatedAt:"2022/2/18",frontMatter:{title:"\u521b\u5efaOpenYurt\u6d4b\u8bd5\u96c6\u7fa4(Yurtctl init/join)"},sidebar:"version-v0.6.0/docs",previous:{title:"\u5982\u4f55\u4f7f\u7528`kubeconfig`\u4f53\u9a8cOpenYurt\u7684\u80fd\u529b",permalink:"/zh/docs/v0.6.0/installation/openyurt-experience-center/kubeconfig"},next:{title:"\u4f7f\u7528 YurtCluster Operator \u90e8\u7f72\u8fb9\u7f18\u96c6\u7fa4",permalink:"/zh/docs/v0.6.0/installation/yurtcluster"}},u={},c=[{value:"1.\u80cc\u666f\u8bf4\u660e",id:"1\u80cc\u666f\u8bf4\u660e",level:2},{value:"2.\u4f7f\u7528\u6d41\u7a0b",id:"2\u4f7f\u7528\u6d41\u7a0b",level:2},{value:"2.1\u7f16\u8bd1 Yurtctl",id:"21\u7f16\u8bd1-yurtctl",level:3},{value:"2.2\u521d\u59cb\u5316\u96c6\u7fa4",id:"22\u521d\u59cb\u5316\u96c6\u7fa4",level:3},{value:"2.4\u8282\u70b9\u52a0\u5165",id:"24\u8282\u70b9\u52a0\u5165",level:3},{value:"3.\u5b9e\u73b0\u7ec6\u8282",id:"3\u5b9e\u73b0\u7ec6\u8282",level:2},{value:"3.1 Yurtctl init",id:"31-yurtctl-init",level:3}],p={toc:c};function s(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1\u80cc\u666f\u8bf4\u660e"},"1.\u80cc\u666f\u8bf4\u660e"),(0,i.kt)("p",null,"\u4e3a\u4e86\u8ba9\u7528\u6237\u5feb\u901f\u62e5\u6709\u4e00\u4e2a OpenYurt \u6d4b\u8bd5\u96c6\u7fa4\uff0cOpenYurt \u63d0\u4f9b\u4e86\u547d\u4ee4 Yurtctl init \u521d\u59cb\u5316\u96c6\u7fa4\uff0c\u7528\u6237\u53ea\u9700\u8981\u9009\u62e9 OpenYurt \u96c6\u7fa4\u7684\u955c\u50cf\u7248\u672c\uff0c\u5c31\u53ef\u4ee5\u521b\u5efa\u5bf9\u5e94\u7248\u672c\u7684 OpenYurt\uff0cYurt -APP-Manager\u3001Yurt-Controller-Manager\u3001Yurttunnel-Server\u3001Yurttunnel-Agent \u7ec4\u4ef6\u4f1a\u81ea\u52a8\u90e8\u7f72\u3002"),(0,i.kt)("p",null,"\u540e\u7eed\u6269\u5c55\u96c6\u7fa4\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4 Yurtctl join\uff0c\u5c06\u8fb9\u7f18\u8282\u70b9\u6216\u8005\u4e91\u7aef\u8282\u70b9\u52a0\u5165\u96c6\u7fa4\u3002"),(0,i.kt)("h2",{id:"2\u4f7f\u7528\u6d41\u7a0b"},"2.\u4f7f\u7528\u6d41\u7a0b"),(0,i.kt)("h3",{id:"21\u7f16\u8bd1-yurtctl"},"2.1\u7f16\u8bd1 Yurtctl"),(0,i.kt)("p",null,"\u5728\u8fdb\u884c\u521d\u59cb\u5316\u96c6\u7fa4\u65f6\uff0c\u9700\u8981\u5148\u83b7\u53d6 Yurtctl \u53ef\u6267\u884c\u6587\u4ef6\u3002\n\u8981\u5feb\u901f\u6784\u5efa\u548c\u5b89\u88c5\u8bbe\u7f6e yurtctl \uff0c\u5728\u7f16\u8bd1\u7cfb\u7edf\u5df2\u5b89\u88c5\u4e86 golang 1.13+ \u548c bash \u7684\u524d\u63d0\u4e0b\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b8c\u6210\u5b89\u88c5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ git clone https://github.com/openyurtio/openyurt.git\n$ cd openyurt\n$ make build WHAT="yurtctl" ARCH="amd64" REGION=cn\n')),(0,i.kt)("p",null,"\u53ef\u6267\u884c\u6587\u4ef6\u5c06\u5b58\u653e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"_output/bin/")," \u76ee\u5f55\u4e0b\u3002"),(0,i.kt)("h3",{id:"22\u521d\u59cb\u5316\u96c6\u7fa4"},"2.2\u521d\u59cb\u5316\u96c6\u7fa4"),(0,i.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u521d\u59cb\u5316\u96c6\u7fa4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ _output/bin/yurtctl init --apiserver-advertise-address 1.2.3.4 --openyurt-version latest --passwd 1234\n")),(0,i.kt)("p",null,"\u5176\u4e2d\u4e3b\u8981\u53c2\u6570\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"}," --apiserver-advertise-address    master\u8282\u70b9\u7684IP\u5730\u5740\n --passwd                         master\u8282\u70b9\u7684ssh\u767b\u5165\u5bc6\u7801\n --openyurt-version               OpenYurt\u96c6\u7fa4\u7684\u7248\u672c\n")),(0,i.kt)("p",null,"\u5982\u679c\u60f3\u8981\u914d\u7f6e\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"-h"),"  \u6765\u83b7\u53d6\u3002"),(0,i.kt)("h3",{id:"24\u8282\u70b9\u52a0\u5165"},"2.4\u8282\u70b9\u52a0\u5165"),(0,i.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Yurtctl join \u5c06\u4e91\u7aef\u8282\u70b9\u3001\u8fb9\u7f18\u8282\u70b9\u52a0\u5165 OpenYurt \u96c6\u7fa4\u3002\u6ce8\u610f\uff0c\u5728\u52a0\u5165\u8282\u70b9\u65f6\uff0c\u9700\u8981\u5728\u8282\u70b9\u4e0a\u5b89\u88c5\u8fd0\u884c\u65f6\uff0c\u5e76\u5173\u95ed\u4ea4\u6362\u5206\u533a\u3002"),(0,i.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u52a0\u5165\u8fb9\u7f18\u8282\u70b9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --v=5\n")),(0,i.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u52a0\u5165\u4e91\u7aef\u8282\u70b9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=cloud --discovery-token-unsafe-skip-ca-verification --v=5\n")),(0,i.kt)("p",null,"\u5f53\u8fb9\u7f18\u8282\u70b9runtime\u4e3acontainerd\u65f6\uff0c\u9700\u8981\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"cri-socket"),"\u53c2\u6570\uff0c\u5982\u4e0a\u9762\u6267\u884c\u547d\u4ee4\u52a0\u5165\u8fb9\u7f18\u8282\u70b9\u6539\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --cri-socket=/run/containerd/containerd.sock --v=5\n")),(0,i.kt)("h2",{id:"3\u5b9e\u73b0\u7ec6\u8282"},"3.\u5b9e\u73b0\u7ec6\u8282"),(0,i.kt)("h3",{id:"31-yurtctl-init"},"3.1 Yurtctl init"),(0,i.kt)("p",null,"\u4e3a\u4e86\u964d\u4f4e Yurtctl init \u7684\u4f7f\u7528\u96be\u5ea6\uff0c\u63d0\u9ad8\u7684\u96c6\u7fa4\u5b89\u88c5\u6210\u529f\u6982\u7387\uff0cYurtctl init \u901a\u8fc7\u5f00\u6e90\u5de5\u5177 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/sealer"},"sealer"),"\n\u521d\u59cb\u5316 OpenYurt \u96c6\u7fa4\u3002\u5728\u5b9e\u73b0\u4e0a\uff0cYurtctl init \u4f1a\u4e0b\u8f7d sealer \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0csealer \u4f1a\u4e0b\u8f7d OpenYurt \u5b98\u65b9\u63d0\u4f9b\u7684\u96c6\u7fa4\u955c\u50cf\u5e76\u5b89\u88c5\u96c6\u7fa4\u3002\n\u6b64\u5916\uff0cYurtctl init \u4e5f\u652f\u6301\u7528\u6237\u4e2a\u6027\u5316\u914d\u7f6e OpenYurt \u96c6\u7fa4\u955c\u50cf\u3002"))}s.isMDXComponent=!0}}]);