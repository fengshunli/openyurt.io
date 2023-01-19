"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[2469],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Architecture"},l=void 0,i={unversionedId:"core-concepts/architecture",id:"version-v0.7.0/core-concepts/architecture",title:"Architecture",description:"Below is the architecture of OpenYurt.",source:"@site/versioned_docs/version-v0.7.0/core-concepts/architecture.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture",permalink:"/docs/v0.7.0/core-concepts/architecture",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/architecture.md",tags:[],version:"v0.7.0",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1656667584,formattedLastUpdatedAt:"Jul 1, 2022",frontMatter:{title:"Architecture"},sidebar:"version-v0.7.0/docs",previous:{title:"How to use `kubeconfig` to experience OpenYurt capabilities",permalink:"/docs/v0.7.0/installation/openyurt-experience-center/kubeconfig"},next:{title:"Raven",permalink:"/docs/v0.7.0/core-concepts/raven"}},c={},u=[{value:"Node category",id:"node-category",level:3},{value:"Traffic from edge to cloud kube-apiserver",id:"traffic-from-edge-to-cloud-kube-apiserver",level:3},{value:"Traffic from cloud to edge",id:"traffic-from-cloud-to-edge",level:3},{value:"OpenYurt Components",id:"openyurt-components",level:3}],p={toc:u};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Below is the architecture of OpenYurt."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(62857).Z,width:"1672",height:"1120"})),(0,o.kt)("p",null,"The blue box represents the original Kubernetes components, and the orange box represents the OpenYurt components."),(0,o.kt)("h3",{id:"node-category"},"Node category"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cloud Node\uff1aThe nodes running in cloud side, connecting to master with cloud intranet. Centralized control plane components are deployed in cloud side. The nodes are labeled with ",(0,o.kt)("inlineCode",{parentName:"li"},"openyurt.io/is-edge-worker: false"),"."),(0,o.kt)("li",{parentName:"ul"},"Edge Node\uff1aThe nodes running in edge side, connecting to master with public internet. They are usually close to edge production environment, and thus contains the mainly edge workloads. The nodes are labeled with ",(0,o.kt)("inlineCode",{parentName:"li"},"openyurt.io/is-edge-worker: true"),".")),(0,o.kt)("h3",{id:"traffic-from-edge-to-cloud-kube-apiserver"},"Traffic from edge to cloud kube-apiserver"),(0,o.kt)("p",null,"YurtHub manages the network traffic from edge to cloud kube-apiserver and caches cloud data.\nComponents in edge nodes such as kubelet, kube-proxy and flannel access the cloud kube-apiserver via YurtHub.\nWhen the edge nodes are disconnected from cloud, the caches are used to resume status to avoid workload disruption."),(0,o.kt)("h3",{id:"traffic-from-cloud-to-edge"},"Traffic from cloud to edge"),(0,o.kt)("p",null,"YurtTunnel manages the network traffic from cloud to edge.\nIn most cases, edge nodes are running in private network, and are not directly accessible from cloud.\nYurtTunnel consists of cloud side ",(0,o.kt)("inlineCode",{parentName:"p"},"tunnel-server")," and edge side ",(0,o.kt)("inlineCode",{parentName:"p"},"tunnel-agent"),", which form a secure and reliable reverse tunnel.\nWith this feature, it's easily to send operate instructions from cloud to edge, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl exec"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl logs"),"."),(0,o.kt)("h3",{id:"openyurt-components"},"OpenYurt Components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Raven-Controller-Manager/Raven:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Raven is component of the OpenYurt to enhance cluster networking capabilities. This enhancement is focused on edge-edge and edge-cloud communication in OpenYurt.\nIn short, it will provide layer 3 network connectivity among pods in different physical regions, as there are in one vanilla Kubernetes cluster."),(0,o.kt)("li",{parentName:"ul"},"Deployment pattern: Deployment for Raven-Controller-Manager in cloud nodes, DaemonSet for Raven in all nodes. "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"YurtHub:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"YurtHub is a sidecar in node level, it performs the role of traffic proxy between kube nodes and kube-apiserver.\nIt has two running modes: edge and cloud. In edge mode, it will cache the data returned from cloud, and store in local disk."),(0,o.kt)("li",{parentName:"ul"},"Deployment pattern: Static pod in each node."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"YurtControllerManager\uff1a")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"YurtControllerManager is centralized controller, which consists of NodeLifeCycle Controller(for not evicting pods in autonomy nodes) and YurtCSRController(for approval of edge certificates)."),(0,o.kt)("li",{parentName:"ul"},"Deployment pattern: Deployment in cloud nodes."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"YurtAppManager:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"YurtAppManager is application controller for managing cross region workloads. It consists of the management of Nodepools(node groups), YurtAppSet(previous named UnitedDeployment)(nodepool level workloads), YurtAppDaemon(nodepool level daemonset), and YurtIngress(nodepool level ingress)."),(0,o.kt)("li",{parentName:"ul"},"Deployment pattern: Deployment in cloud nodes."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"YurtTunnel(Server/Agent):")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"YurtTunnel constructs a secure and reliable edge-tunnel reverse tunnel, for forwarding cloud to edge operation traffic."),(0,o.kt)("li",{parentName:"ul"},"Deployment pattern: Deployment for YurtTunnel Server in cloud nodes, DaemonSet for YurtTunnel Agent in edge nodes."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"YurtDeviceController/YurtEdgeXManager:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"YurtDeviceController and YurtEdgeXManager manage edge devices in cloud native way, they combine EdgeX Foundry and OpenYurt seamlessly, providing IOT solutions in an easy, efficient way."),(0,o.kt)("li",{parentName:"ul"},"Deployment pattern: Deployment for YurtEdgeXManager in cloud nodes, YurtAppSet for YurtDeviceController in each edge nodepool."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"NodeResourceManager:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"NodeResourceManager manages local resources in cluster nodes, user can modify the local resource definitions with configmap dynamically."),(0,o.kt)("li",{parentName:"ul"},"Deployment pattern: DaemonSet in Edge nodes.")))))}s.isMDXComponent=!0},62857:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/arch-60039437b48b6277786490ab44c373da.png"}}]);