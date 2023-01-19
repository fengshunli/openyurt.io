"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[2384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"YurtControllerManager"},l=void 0,c={unversionedId:"core-concepts/yurt-controller-manager",id:"version-v1.1/core-concepts/yurt-controller-manager",title:"YurtControllerManager",description:"1.Introduction",source:"@site/versioned_docs/version-v1.1/core-concepts/yurt-controller-manager.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurt-controller-manager",permalink:"/docs/core-concepts/yurt-controller-manager",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-controller-manager.md",tags:[],version:"v1.1",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1669032432,formattedLastUpdatedAt:"Nov 21, 2022",frontMatter:{title:"YurtControllerManager"},sidebar:"version-v1.1/docs",previous:{title:"YurtAppManager",permalink:"/docs/core-concepts/yurt-app-manager"},next:{title:"NodeResourceManager",permalink:"/docs/core-concepts/node-resource-manager"}},i={},u=[{value:"1.Introduction",id:"1introduction",level:2},{value:"1.1 Taking Over Node Life Cycle Management",id:"11-taking-over-node-life-cycle-management",level:3},{value:"1.2 Certificates Approval for OpenYurt Components",id:"12-certificates-approval-for-openyurt-components",level:3}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1introduction"},"1.Introduction"),(0,o.kt)("p",null,"As an extension of Kube Controller Manager, Yurt Controller Manager is used to keep other components functioning properly and provide node autonomy feature. "),(0,o.kt)("h3",{id:"11-taking-over-node-life-cycle-management"},"1.1 Taking Over Node Life Cycle Management"),(0,o.kt)("p",null,"In vanilla Kubernetes, pods on node in NotReady or Unknown state will be evicted and rescheduled."),(0,o.kt)("p",null,"In edge computing, the network connection between cloud and edge is unstable, the edge nodes could lose connection to the cloud frequently,\nwhich makes pod eviction and rescheduling happen frequently on edge nodes. To deal with that, OpenYurt provides node autonomy feature.\nFor node with node autonomy feature enabled, control plane on the cloud will not evict pods on the node, which ensure the workloads will not be disrupted."),(0,o.kt)("p",null,'Yurt controller manager takes over the work of nodelicycle controller in Kube-controller-manager, constantly monitors the state of nodes in the cluster.\nFor node in NotReady or Unknown state, if the node autonomy feature is enabled, the pods are prevented from being evicted by removing the "node.kubernetes.io/unscheduled" taint on the node.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notice: When installing Yurt Controller Manager, the nodelicycle controller in kube-controller-manager need to be disabled")),(0,o.kt)("h3",{id:"12-certificates-approval-for-openyurt-components"},"1.2 Certificates Approval for OpenYurt Components"),(0,o.kt)("p",null,"The OpenYurt components Yurttunnel Server and Yurthub are the server side to Yurttunnel Agent and pods respectively.\nDue to the strict approval policy for CSR(Certificate Signing Request) in Kubernetes,\nthe CSRs created by Yurttunnel Server and Yurthub will not auto-approve by kube-controller-manager.\nTherefore, Yurt Controller Manager undertakes the work of approving the CSRs of Yurttunnel Server and Yurthub."))}s.isMDXComponent=!0}}]);