"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[5910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Raven"},l=void 0,i={unversionedId:"core-concepts/raven",id:"version-v1.1/core-concepts/raven",title:"Raven",description:"1. Background",source:"@site/versioned_docs/version-v1.1/core-concepts/raven.md",sourceDirName:"core-concepts",slug:"/core-concepts/raven",permalink:"/docs/core-concepts/raven",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/raven.md",tags:[],version:"v1.1",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1669032432,formattedLastUpdatedAt:"Nov 21, 2022",frontMatter:{title:"Raven"},sidebar:"version-v1.1/docs",previous:{title:"Architecture",permalink:"/docs/core-concepts/architecture"},next:{title:"YurtHub",permalink:"/docs/core-concepts/yurthub"}},c={},p=[{value:"1. Background",id:"1-background",level:2},{value:"2. Architecture",id:"2-architecture",level:2},{value:"3. Features and Advantages",id:"3-features-and-advantages",level:2},{value:"4. Version",id:"4-version",level:2},{value:"5. \u672a\u6765\u8ba1\u5212",id:"5-\u672a\u6765\u8ba1\u5212",level:2}],s={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-background"},"1. Background"),(0,r.kt)("p",null,"In edge computing, edge-edge and edge-cloud are common network communication scenarios. In OpenYurt, we have introduced ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtTunnel")," to deal with the network problems of maintenance and monitoring in edge-cloud collaboration, providing the capibility of ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl exec/logs")," on edge nodes and collecting monitoring indicators from edge nodes. But the problems solved by ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtTunnel")," are only a part of edge-cloud communication. We also need to provide solutions for edge-edge and edge-cloud container network communication."),(0,r.kt)("p",null,"In OpenYurt cluster, pods in different physical regions may need to use Pod IP, Service IP or Service name to communicate with other Pods. Although these pods are in a single K8s cluster, they are in different physical regions (network domains) and cannot communicate directly. So we create ",(0,r.kt)("inlineCode",{parentName:"p"},"Raven")," project to solve this problem."),(0,r.kt)("h2",{id:"2-architecture"},"2. Architecture"),(0,r.kt)("p",null,"As following picture, the architecture of ",(0,r.kt)("inlineCode",{parentName:"p"},"Raven")," have two components:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(40751).Z,width:"924",height:"566"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Raven Controller Manager"),"\uff1aThe native Kubernetes controller is deployed in some nodes on the cloud as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment"),", monitoring the status of edge nodes, selecting an egress for cross-edge traffic as a gateway node for each edge node pool. When the current gateway node is dead and other node will be switched. All cross-edge traffic will be forwarded by the gateway node of each edge node pool;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Raven Agent"),"\uff1aIt is deployed as a ",(0,r.kt)("inlineCode",{parentName:"p"},"DaemonSet")," and runs on each node of the K8s cluster. It configures route or VPN tunnel on the node according to the role of each node (gateway or non-gateway);"))),(0,r.kt)("p",null,"The above two components are connected by a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go"},"Gateway CRD")," to exchange routes and VPN tunnels, as shown in the following picture:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(48882).Z,width:"1444",height:"756"})),(0,r.kt)("p",null,"For more details, please refer to the code repository of the Raven project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openyurtio/raven-controller-manager"},"raven-controller-manager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openyurtio/raven"},"raven"))),(0,r.kt)("h2",{id:"3-features-and-advantages"},"3. Features and Advantages"),(0,r.kt)("p",null,"Features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No intrusion: No intrusion into the native K8s CNI network, only cross-edge traffic is hijacked for forwarding"),(0,r.kt)("li",{parentName:"ul"},"Security: Use stable ",(0,r.kt)("inlineCode",{parentName:"li"},"IPsec")," to encrypt cross-edge traffic")),(0,r.kt)("p",null,"Advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Raven")," will try to use the network capabilities of the edge itself, create edge-to-edge VPN tunnels as possible, and will not forward all cross-edge traffic through the cloud center"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Raven")," does not hijack the traffic in the same edge node pool, and keeps the CNI capabilities of the cluster itself")),(0,r.kt)("h2",{id:"4-version"},"4. Version"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Raven Controller Manager"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"version"),(0,r.kt)("th",{parentName:"tr",align:null},"image"),(0,r.kt)("th",{parentName:"tr",align:null},"release"),(0,r.kt)("th",{parentName:"tr",align:null},"content"),(0,r.kt)("th",{parentName:"tr",align:null},"comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v0.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"openyurt/raven-controller-manager:v0.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"2022.05"),(0,r.kt)("td",{parentName:"tr",align:null},"first"),(0,r.kt)("td",{parentName:"tr",align:null},"support Gateway Node election")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Raven Agent"),"\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"version"),(0,r.kt)("th",{parentName:"tr",align:null},"image"),(0,r.kt)("th",{parentName:"tr",align:null},"release"),(0,r.kt)("th",{parentName:"tr",align:null},"content"),(0,r.kt)("th",{parentName:"tr",align:null},"comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v0.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"openyurt/raven-agent:v0.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"2022.05"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9996\u6b21\u53d1\u5e03"),(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301 IPSec \u4f5c\u4e3aVPN \u540e\u7aef")))),(0,r.kt)("h2",{id:"5-\u672a\u6765\u8ba1\u5212"},"5. \u672a\u6765\u8ba1\u5212"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e91\u7aef\u652f\u6301LB\u7684\u516c\u7f51\u66b4\u9732\u65b9\u5f0f \u3010",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openyurtio/raven/issues/22"},"issue #22"),"\u3011 "),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301NAT\u7a7f\u8d8a \u3010",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openyurtio/raven/issues/13"},"issue #13"),"\u3011 "),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5206\u5e03\u5f0f\u8def\u7531\u51b3\u7b56 \u3010",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openyurtio/raven/issues/14"},"issue #14"),"\u3011",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8def\u7531\u8def\u5f84\u7684cost\u8ba1\u7b97 "),(0,r.kt)("li",{parentName:"ul"},"\u6839\u636ecost\u8ba1\u7b97\u6700\u77ed\u8def\u5f84 "),(0,r.kt)("li",{parentName:"ul"},"\u5728\u8def\u5f84\u66f4\u6539\u671f\u95f4\u4fdd\u6301\u7f51\u7edc\u8fde\u63a5\u5904\u4e8eactive\u72b6\u6001")))),(0,r.kt)("p",null,"\u6b22\u8fce\u611f\u5174\u8da3\u7684\u540c\u5b66\u52a0\u5165\u6211\u4eec\uff0c\u8d21\u732e\u4ee3\u7801\uff01\uff01\uff01"))}u.isMDXComponent=!0},48882:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/raven-sequence-diag-21e979ba2e0c41f82407121704b13eb7.png"},40751:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/raven-017b384aa3ec05a762c21c4370c73174.png"}}]);