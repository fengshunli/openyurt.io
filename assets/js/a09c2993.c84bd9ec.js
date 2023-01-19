"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"Introduction",slug:"/"},i=void 0,l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Welcome to the world of OpenYurt!",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/next/",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/introduction.md",tags:[],version:"current",lastUpdatedBy:"lu chen",lastUpdatedAt:1674131655,formattedLastUpdatedAt:"Jan 19, 2023",frontMatter:{title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Resource and System Requirements",permalink:"/docs/next/usage-conditions/resource-and-system-requirements"}},s={},c=[{value:"Key Features",id:"key-features",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to the world of OpenYurt!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OpenYurt is the first edge computing platform that is non-intrusive to cloud-native systems in the industry"),". It unifies the management of scattered massive edge heterogeneous resources (such as CDN sites, IoT all-in-one machines and other edge computing power) from the control side (located in the cloud or central server room, etc.).\nIt helps users to easily complete large-scale application delivery, operation and maintenance, and control on massive edge resources.\nOpenYurt has the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Non-instrusive to Kubernetes"),(0,a.kt)("p",{parentName:"li"},"In the cloud-edge scenario, users can follow up on new Kubernetes community releases or resolve CVEs in an inexpensive way, and easily share the technical dividends of the Kubernetes ecosystem.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cloud-Edge-Device Fully Collaboration"),(0,a.kt)("p",{parentName:"li"},"  By building edge autonomy, cross-regional network communication, multi-regional application arrangement, application upgrade model, cross-platform (such as amd64, arm, arm64) edge resource management, cloud native device management and other capabilities, cloud-edge-device can work together efficiently.\nAt the same time, users can get a consistent experience with the data center Kubernetes cluster.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Declarative Device Management"),(0,a.kt)("p",{parentName:"li"},"OpenYurt supports loosely coupled integrated IoT device management solutions (such as EdgeX Foundry) and provides a cloud-native way to manage end devices, effectively solving the management and operation problems of end devices in the edge computing scenario of the Internet of Things."))),(0,a.kt)("p",null,"OpenYurt will continue to work on exploring cloud-native edge computing platform standards for cloud-edge-device collaboration, and will also combine community mainstream computing, networking, storage, application orchestration, security, AI, IoT and other projects or solutions to build a complete upstream and downstream ecology."),(0,a.kt)("h2",{id:"key-features"},"Key Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Powerful edge autonomy capability"))),(0,a.kt)("p",null,"In edge computing scenario, the network connections between edge and cloud are diversified (e.g. 5G, WIFI, etc.). Network jitter or node offline will lead to node heartbeat cannot be reported to the cloud in real time, which triggers the eviction and reconstruction of edge services.\nAt the same time, in the abnormal state of cloud-edge network connection, edge services on the nodes will not be automatically restored when the edge nodes restart due to the inability to obtain workload data from the cloud, which leads to service interruption of the edge services.\nOpenYurt provides strong autonomy capability for edge services by enhancing the workload eviction control capability in the cloud and introducing local caching and heartbeat proxy reporting mechanisms at the edge to ensure the continuous and reliable operation of edge services.\nAt the same time, when the edge node network is restored, the state of the edge service will be synchronized with the cloud control and ensure the data consistency."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cross-region network communication capability"))),(0,a.kt)("p",null,"In the cloud edge scenario, the cloud to edge / edge to edge are in different physical network planes. Generally only the cloud side exposes public network service addresses, and the native CNI container network can only address data-plane communication in a single region (layer 2 or layer 3 connectivity scenario).\nThe cloud to edge / edge to edge network communication capability built by raven not only elegantly solves the data-plane communication needs across geographies, but also maintains seamless compatibility with the native CNI container network solution.\nAt the same time, the cloud-edge traffic reuse capability provided by pool-coordinator significantly reduces the amount of control plane communication data between cloud-edges."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Multi-region resource and application management"))),(0,a.kt)("p",null,"For edge scenarios, OpenYurt pioneers the concept of Pool, which can manage the node resources, applications, and service traffic in a pool.\nAt the resource level, the ability of NodePool is abstracted, and edge site resources can be classified and divided according to geographical distribution.\nAt the application management level, a set of application deployment models, such as YurtAppSet, YurtAppDaemon, and edge ingress(YurtIngress)\nmodels, are designed. At the traffic service level, traffic can be accessed in a closed loop within the node pool. At the application upgrading level, OTA and Auto upgrading strategies are designed which allow edge application owners to intervene in upgrade decisions\naddressings the issue that NodeNotReady may cause the native rolling upgrade model to block."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cloud-native device management capability"))),(0,a.kt)("p",null,"OpenYurt abstracts and defines a cloud native model of leaf devices in edge computing scenario from the following perspectives:\nbasic properties, main capabilities and what information can be transmitted. In addition, with good compatibility, OpenYurt seamlessly\nintegrates mainstream IoT device management solutions. Finally, through cloud native declarative API, OpenYurt provides developers\nthe ability of data collection, processing and control over edge devices."),(0,a.kt)("h2",{id:"whats-next"},"What's Next"),(0,a.kt)("p",null,"Here are some recommended next steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start to install ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/installation/summary"},"OpenYurt"),"."),(0,a.kt)("li",{parentName:"ul"},"Learn OpenYurt's ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/core-concepts/architecture"},"Architecture"),".")))}u.isMDXComponent=!0}}]);