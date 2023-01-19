"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[1699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),i=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),h=a,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<r;i++)s[i]=n[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var o=n(87462),a=(n(67294),n(3905));const r={title:"Edge Pod Network"},s=void 0,l={unversionedId:"user-manuals/network/edge-pod-network",id:"version-v0.6.0/user-manuals/network/edge-pod-network",title:"Edge Pod Network",description:"Background",source:"@site/versioned_docs/version-v0.6.0/user-manuals/network/edge-pod-network.md",sourceDirName:"user-manuals/network",slug:"/user-manuals/network/edge-pod-network",permalink:"/docs/v0.6.0/user-manuals/network/edge-pod-network",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/edge-pod-network.md",tags:[],version:"v0.6.0",lastUpdatedBy:"zzguang",lastUpdatedAt:1656847541,formattedLastUpdatedAt:"Jul 3, 2022",frontMatter:{title:"Edge Pod Network"},sidebar:"version-v0.6.0/docs",previous:{title:"Node Autonomy",permalink:"/docs/v0.6.0/user-manuals/autonomy/node-autonomy"},next:{title:"Service Topology",permalink:"/docs/v0.6.0/user-manuals/network/service-topology"}},d={},i=[{value:"Background",id:"background",level:2},{value:"Flannel: VTEP MAC address kept",id:"flannel-vtep-mac-address-kept",level:2},{value:"use case",id:"use-case",level:3},{value:"Solution: Add Mac address kept capability in Flannel",id:"solution-add-mac-address-kept-capability-in-flannel",level:3},{value:"IPAM: Pod IP address kept",id:"ipam-pod-ip-address-kept",level:2},{value:"user case",id:"user-case",level:3},{value:"Solution: Pod IP address kept",id:"solution-pod-ip-address-kept",level:3},{value:"Add &quot;get node&quot; permission for Flannel",id:"add-get-node-permission-for-flannel",level:2}],c={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"In Cloud Edge usage scenarios\uff0cin order to ensure the workloads on the edge nodes can still work stably even in condition of the cloud edge network is disconnected, openyurt provides the edge node autonomy capability. It can realize the automatic restart for the abnormal pod and the auto start of the pods when the edge node is restarted. However, in order to ensure that the node and pod restart will not affect the edge container network when the cloud edge network is disconnected, some network configurations need to be adapted."),(0,a.kt)("h2",{id:"flannel-vtep-mac-address-kept"},"Flannel: VTEP MAC address kept"),(0,a.kt)("h3",{id:"use-case"},"use case"),(0,a.kt)("p",null,"If we adopt flannel as CNI plugin and VXLAN as the backend, when a VTEP device is created on a node\uff08generally named: flannel.1\uff09, the VNI and VTEP info will be record in the node annotations\uff0cso that other nodes can create the related route and forward rules.\nFlannel arch is shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"flannel-architecture",src:n(86489).Z,width:"1404",height:"1096"})),(0,a.kt)("p",null,"Let's take an example with 2 edge nodes\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'node2 creates flannel.1 device\uff0cMAC address is "9e:c9:07:f9:b3:8b"\uff0cIP address is "172.30.133.0", the related info will be record in node2 annotations:')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# node2 annotations with vtep info.\nflannel.alpha.coreos.com/backend-data: \'{"VtepMAC":"9e:c9:07:f9:b3:8b"}\'\nflannel.alpha.coreos.com/public-ip: 10.0.0.20\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"node1 will leverage the related info in node2 to configure the fdb/arp/routing info in host network:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# node1 host network namespace.\nfdb:   9e:c9:07:f9:b3:8b dev flannel.1 dst 10.0.0.20 self permanent\narp:   ? (172.30.133.0) at 9e:c9:07:f9:b3:8b [ether] PERM on flannel.1\nroute: 172.30.133.0/26 via 172.30.133.0 dev flannel.1 onlink\n")),(0,a.kt)("p",null,"Every time node2 restarts, flannel will re-create the vtep device, and the MAC address of vtep will also be changed and updated to node2 annotations. However, if node2 or node1 is disconnected from the cloud network at this time, node1 will not be notified about the change of node2's MAC address, which will cause the pod on node1 and node2 to fail to communicate normally."),(0,a.kt)("h3",{id:"solution-add-mac-address-kept-capability-in-flannel"},"Solution: Add Mac address kept capability in Flannel"),(0,a.kt)("p",null,"Every time the edge node restarts, flannel firstly reads the MAC address information in the node's annotations (from the local cache of apiserver or yurthub). If it exists, it uses this MAC address as the VTEP MAC address."),(0,a.kt)("p",null,"In order to implement this capability, the flannel source code modifications reference:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git clone https://github.com/flannel-io/flannel.git;\ncd flannel;\ngit reset --hard e634dabe0af446b765db3b729085b32f97ff6fe6;\nwget https://raw.githubusercontent.com/openyurtio/openyurt/master/docs/tutorial/0001-flannel-keep-vtep-mac.patch;\ngit am 0001-flannel-keep-vtep-mac.patch;\n")),(0,a.kt)("p",null,"flannel-edge image location:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Docker image location: docker.io/openyurt/flannel-edge:v0.14.0-1\nAliyun image location: registry.cn-hangzhou.aliyuncs.com/openyurt/flannel-edge:v0.14.0-1\n")),(0,a.kt)("h2",{id:"ipam-pod-ip-address-kept"},"IPAM: Pod IP address kept"),(0,a.kt)("h3",{id:"user-case"},"user case"),(0,a.kt)("p",null,"In most scenarios, the pod is assigned an IP address through host-local. Host-local selects the idle IP address from nodecidr and assigns it to the new pod, and records the allocated IP address information in the local file."),(0,a.kt)("p",null,"For example, if the IPAM data directory is /var/lib/cni/networks/cbr0, its record information is as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ ls /var/lib/cni/networks/cbr0\n172.30.132.194  172.30.132.198  172.30.132.201\n")),(0,a.kt)("p",null,"When the cloud edge network is disconnected, pod restart will cause the host-local to reassign an IP address, and the change of pod IP address cannot be synchronized to the cloud. Components such as Kube proxy on other edge nodes cannot be notified about the change of pod IP, so the cluster IP address cannot be used to access the pod."),(0,a.kt)("h3",{id:"solution-pod-ip-address-kept"},"Solution: Pod IP address kept"),(0,a.kt)("p",null,"To solve this problem, you need to adjust the host-local code: the format of recording IP address is {ip}-{pod namespace}-{pod name}. When the pod restarts, host-local will firstly assign the IP address of the pod with the same name in the record."),(0,a.kt)("p",null,"The assigned pod IP records are changed as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ ls /var/lib/cni/networks/cbr0\n172.30.132.194_kube-system_coredns-vstxh  172.30.132.198_kube-system_nginx-76df748b9-4cz95  172.30.132.201_kube-system_nginx-76df748b9-nf5l9\n")),(0,a.kt)("p",null,"host-local source code modifications reference:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git clone https://github.com/containernetworking/plugins.git ;\ncd plugins;\ngit reset --hard 9ebe139e77e82afb122e335328007bca86905ae4;\nwget https://raw.githubusercontent.com/openyurtio/openyurt/master/docs/tutorial/0002-ipam-keep-pod-ip.patch;\ngit am 0002-ipam-keep-pod-ip.patch;\n")),(0,a.kt)("p",null,"host-local cni rpm update:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rpm -ivh https://github.com/openyurtio/openyurt/releases/download/v0.6.0/openyurt-cni-0.8.7-0.x86_64.rpm\n")),(0,a.kt)("h2",{id:"add-get-node-permission-for-flannel"},'Add "get node" permission for Flannel'),(0,a.kt)("p",null,'After the flannel is adjusted, the permission of "get node" needs to be added along with the original RBAC, below is the modification reference:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1beta1\nmetadata:\n  name: flannel\nrules:\n  - apiGroups:\n      - ""\n    resources:\n      - pods\n    verbs:\n      - get\n  - apiGroups:\n      - ""\n    resources:\n      - nodes\n    verbs:\n+     - get\n      - list\n      - watch\n  - apiGroups:\n      - ""\n    resources:\n      - nodes/status\n    verbs:\n      - patch\n')))}p.isMDXComponent=!0},86489:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flannel-architecture-7a63d6356df43834c25d46ad20805f84.png"}}]);