"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Introduction",slug:"/"},o=void 0,l={unversionedId:"introduction",id:"version-v1.0/introduction",title:"Introduction",description:"Welcome to the world of OpenYurt!",source:"@site/versioned_docs/version-v1.0/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/v1.0/",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/introduction.md",tags:[],version:"v1.0",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1662464199,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{title:"Introduction",slug:"/"},sidebar:"version-v1.0/docs",next:{title:"Resource and System Requirements",permalink:"/docs/v1.0/usage-conditions/resource-and-system-requirements"}},s={},c=[{value:"Key Features",id:"key-features",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the world of OpenYurt!"),(0,i.kt)("p",null,"OpenYurt is the intelligent edge computing platform which aims to extend the Cloud Native ecosystem to edge computing and IoT scenarios.\nBy making non-intrusive enhancements, it empowers customer to manage large scale edge computing workloads in different architecture (e.g., ARM and X86) in a native Kubernetes manner."),(0,i.kt)("p",null,"OpenYurt has been widely used in typical edge computing scenarios such as the IoT, distributed cloud , logistics, transportation, manufacturing, retail, CDN etc."),(0,i.kt)("h2",{id:"key-features"},"Key Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Out-of-the-box cloud-edge-device collaboration capability"))),(0,i.kt)("p",null,"Edge computing has the characteristics of typical resource heterogeneity, large-scale, and multi-regional distribution.\nOpenYurt adopts an integrated cloud-edge-device architecture, which enables the unified management of massive edge resources and services in the cloud.\nOn the one hand, it seamlessly integrates existing capabilities on the cloud such as elastic expansion, intelligent operation, logging, and DevOps,\nensuring high availability of edge services.On the other hand, with the help of the cloud-edge-device integration channel, a large number of cloud-based capabilities,\nincluding middleware, security, AI, storage, and network management capabilities, are sunk to the edge, reducing the cost of self-construction of common cloud services on the edge side."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Powerful edge service self-healing capability"))),(0,i.kt)("p",null,"In Kubernetes, if the edge node restarts when offline, the service will be disrupted because it cannot be automatically restored.\nWith the powerful edge service self-healing capability in OpenYurt, it can be easily resolved the impact of node offline and node restart\non edge services and ensure the service runs reliably. When the edge node network is restored, the status of edge services will be synchronized\nwith cloud management and data consistency will be maintained."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rich edge service orchestration capability"))),(0,i.kt)("p",null,"For edge scenarios, OpenYurt pioneers the concept of Pool, which can manage the node resources, applications, and service traffic in a pool.\nAt the resource level, the ability of NodePool is abstracted, and edge site resources can be classified and divided according to geographical distribution.\nAt the application management level, a set of application deployment models, such as YurtAppSet, YurtAppDaemon, and edge ingress(YurtIngress)\nmodels, are designed. At the traffic service level, traffic can be accessed in a closed loop within the node pool."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cloud-native device management capability"))),(0,i.kt)("p",null,"OpenYurt abstracts and defines a cloud native model of leaf devices in edge computing scenario from the following perspectives:\nbasic properties, main capabilities and what information can be transmitted. In addition, with good compatibility, OpenYurt seamlessly\nintegrates mainstream IoT device management solutions. Finally, through cloud native declarative API, OpenYurt provides developers\nthe ability of data collection, processing and control over edge devices."),(0,i.kt)("h2",{id:"whats-next"},"What's Next"),(0,i.kt)("p",null,"Here are some recommended next steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start to install ",(0,i.kt)("a",{parentName:"li",href:"/docs/v1.0/installation/summary"},"OpenYurt"),"."),(0,i.kt)("li",{parentName:"ul"},"Learn OpenYurt's ",(0,i.kt)("a",{parentName:"li",href:"/docs/v1.0/core-concepts/architecture"},"Architecture"),".")))}u.isMDXComponent=!0}}]);