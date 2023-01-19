"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[7603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(g,c(c({ref:t},u),{},{components:n})):o.createElement(g,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={title:"NodeResourceManager"},c=void 0,i={unversionedId:"core-concepts/node-resource-manager",id:"version-v1.1/core-concepts/node-resource-manager",title:"NodeResourceManager",description:"abstract",source:"@site/versioned_docs/version-v1.1/core-concepts/node-resource-manager.md",sourceDirName:"core-concepts",slug:"/core-concepts/node-resource-manager",permalink:"/docs/core-concepts/node-resource-manager",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/node-resource-manager.md",tags:[],version:"v1.1",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1669032432,formattedLastUpdatedAt:"Nov 21, 2022",frontMatter:{title:"NodeResourceManager"},sidebar:"version-v1.1/docs",previous:{title:"YurtControllerManager",permalink:"/docs/core-concepts/yurt-controller-manager"},next:{title:"YurtDeviceController",permalink:"/docs/core-concepts/yurt-device-controller"}},s={},l=[{value:"abstract",id:"abstract",level:3},{value:"architecture",id:"architecture",level:3},{value:"samples",id:"samples",level:3},{value:"Create Configmap",id:"create-configmap",level:4},{value:"Installation of node-resource-manager",id:"installation-of-node-resource-manager",level:4},{value:"Best practices of Edge local storage",id:"best-practices-of-edge-local-storage",level:3}],u={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"abstract"},"abstract"),(0,r.kt)("p",null,"Node-resource-manager is a component used to manage local resources in an OpenYurt cluster, user can dynamically configure local resources on hosts in a cluster by modifying a ConfigMap resource."),(0,r.kt)("p",null," Node-resource-manager can initialize an existing block device or persistent memory device on the host into the following two local storage devices:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An LVM created based on a block device or persistent memory device"),(0,r.kt)("li",{parentName:"ul"},"QuotaPath created on a block device or persistent memory device")),(0,r.kt)("p",null,"Any changes to ConfigMap will be treated as changes to local resources on woker nodes in the cluster. For data security reasons, the plug-in will not delete any local resources"),(0,r.kt)("p",null,"At the same time, with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/alibaba-cloud-csi-driver"},"csi")," component, local storage devices can be used quickly and easily in Openyurt cluster."),(0,r.kt)("h3",{id:"architecture"},"architecture"),(0,r.kt)("p",null," This component consists of two main parts, one is the Node-resource-Topo ConfigMap defined in the kube-system namespace in the cluster, One is the Node-Resource-manager Daemonset, which is deployed under the Kube-system namespace in the cluster. The Node-resource-manager on each Node produces and manages user-defined local resources by mounting node-resource-Topo ConfigMap."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(67410).Z,width:"1784",height:"898"})),(0,r.kt)("h3",{id:""}),(0,r.kt)("h3",{id:"samples"},"samples"),(0,r.kt)("h4",{id:"create-configmap"},"Create Configmap"),(0,r.kt)("p",null,"Create a ConfigMap in a cluster. This section shows a generic ConfigMap configuration. For details, see\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/node-resource-manager/blob/main/docs/configmap.zh.md"},"https://github.com/openyurtio/node-resource-manager/blob/main/docs/configmap.zh.md")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: node-resource-topo\n  namespace: kube-system\ndata:\n  volumegroup: |-\n    volumegroup:\n    - name: volumegroup1\n      key: kubernetes.io/hostname\n      operator: In\n      value: cn-zhangjiakou.192.168.3.114\n      topology:\n        type: device\n        devices:\n        - /dev/vdb\n        - /dev/vdc\n  quotapath: |-\n    quotapath:\n    - name: /mnt/path1\n      key: kubernetes.io/hostname\n      operator: In\n      value: cn-beijing.192.168.3.35\n      topology:\n        type: device\n        options: prjquota\n        fstype: ext4\n        devices:\n        - /dev/vdb\n")),(0,r.kt)("p",null,"The previous configuration provides the following functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'In the test cluster,  we used two pieces of equipment : /dev/VDB & / dev/VDC  to create an LVM volumegroup on the worker node: "cn - zhangjiakou. 192.168.3.114 ".  Devices here can add paths that do not exist,  because the plug-in will automatically ignore this path during the node initialisation .'),(0,r.kt)("li",{parentName:"ul"},'Meanwhile, we format the block device "/dev/vdb" to prjquota format on worker node "cn-beijing.192.168.3.35", and  mount it to path "/mnt/path1",  and then subdirectories created under this path can set the maximum quota for each directory. Devices here can also add paths that do not exist, the component will automatically select the first existing block device for formatting and binding. ')),(0,r.kt)("h4",{id:"installation-of-node-resource-manager"},"Installation of node-resource-manager"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl apply -f https://raw.githubusercontent.com/openyurtio/node-resource-manager/main/deploy/nrm.yaml\n")),(0,r.kt)("h3",{id:"best-practices-of-edge-local-storage"},"Best practices of Edge local storage"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/294460.html?spm=5176.2020520152.help.dexternal.52a116ddm4F9Z4"},"https://help.aliyun.com/document_detail/294460.html?spm=5176.2020520152.help.dexternal.52a116ddm4F9Z4")))}p.isMDXComponent=!0},67410:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node-resource-manager-19892b3a311102bad89b5a37336c826a.png"}}]);