"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[8106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Summary"},l=void 0,i={unversionedId:"installation/summary",id:"installation/summary",title:"Summary",description:"OpenYurt Cluster installation is divided into two parts: Install OpenYurt Control Plane components and join nodes.",source:"@site/docs/installation/summary.md",sourceDirName:"installation",slug:"/installation/summary",permalink:"/docs/next/installation/summary",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/summary.md",tags:[],version:"current",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1674114208,formattedLastUpdatedAt:"Jan 19, 2023",frontMatter:{title:"Summary"},sidebar:"docs",previous:{title:"Resource and System Requirements",permalink:"/docs/next/usage-conditions/resource-and-system-requirements"},next:{title:"Manually Setup",permalink:"/docs/next/installation/manually-setup"}},s={},p=[{value:"Part 1: Install Control Plane Components",id:"part-1-install-control-plane-components",level:3},{value:"Part 2: Join Nodes",id:"part-2-join-nodes",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OpenYurt Cluster installation is divided into two parts: Install OpenYurt Control Plane components and join nodes."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Some common problems you may encounter have been listed in the ",(0,a.kt)("a",{parentName:"em",href:"/docs/next/faq"},"FAQ"),"."))),(0,a.kt)("h3",{id:"part-1-install-control-plane-components"},"Part 1: Install Control Plane Components"),(0,a.kt)("p",null,"For different situations, there are several ways to install OpenYurt Control Plane components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/next/installation/manually-setup"},"Manually Setup")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Recommend to use in a production environment"),(0,a.kt)("li",{parentName:"ul"},"Need to prepare a Kubernetes Control Plane"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/next/installation/openyurt-experience-center/overview"},"OpenYurt Experience Center")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use in a test environment"),(0,a.kt)("li",{parentName:"ul"},"Users can directly obtain a cluster(only include control plane components) with limited permissions after applying for an account on the webpage."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"YurtCluster"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use in a test environment, and will be deprecated in the future."),(0,a.kt)("li",{parentName:"ul"},"Need to prepare a Kubernetes Control Plane")))),(0,a.kt)("h3",{id:"part-2-join-nodes"},"Part 2: ",(0,a.kt)("a",{parentName:"h3",href:"/docs/next/installation/yurtadm-join"},"Join Nodes")),(0,a.kt)("p",null,"End users can join nodes into an OpenYurt cluster directly with ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/installation/yurtadm-join#1-joining-nodes-from-scratch"},(0,a.kt)("inlineCode",{parentName:"a"},"yurtadm join")," command")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/installation/yurtadm-join#2-install-openyurt-node-components"},"install OpenYurt node components manually")," on the already joined node."))}c.isMDXComponent=!0}}]);