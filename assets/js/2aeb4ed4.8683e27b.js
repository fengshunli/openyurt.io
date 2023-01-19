"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"YurtTunnel"},i=void 0,l={unversionedId:"core-concepts/yurttunnel",id:"version-v1.0/core-concepts/yurttunnel",title:"YurtTunnel",description:"1. Background",source:"@site/versioned_docs/version-v1.0/core-concepts/yurttunnel.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurttunnel",permalink:"/docs/v1.0/core-concepts/yurttunnel",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurttunnel.md",tags:[],version:"v1.0",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1662715791,formattedLastUpdatedAt:"Sep 9, 2022",frontMatter:{title:"YurtTunnel"},sidebar:"version-v1.0/docs",previous:{title:"YurtHub",permalink:"/docs/v1.0/core-concepts/yurthub"},next:{title:"YurtAppManager",permalink:"/docs/v1.0/core-concepts/yurt-app-manager"}},s={},u=[{value:"1. Background",id:"1-background",level:2},{value:"2. Reverse Tunnel",id:"2-reverse-tunnel",level:2},{value:"3. Implementation",id:"3-implementation",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-background"},"1. Background"),(0,a.kt)("p",null,"During application deployment and maintenance, users often need to obtain application logs, or directly log in to the running environment of the application for debugging. In Kubernetes cluster, we usually use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl log"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl exec")," and other command to debug. As following picture, on ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," will act as a server, responsible for processing requests forwarded by ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," (KAS), which requires a network path between ",(0,a.kt)("inlineCode",{parentName:"p"},"KAS")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," to allow ",(0,a.kt)("inlineCode",{parentName:"p"},"KAS")," to actively access ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(73898).Z,width:"1570",height:"464"})),(0,a.kt)("p",null,"Cloud and edge are in different network domains, and edge nodes are inside the firewall. The cloud (center) edge collaborative architecture will lead to the following challenges in the maintenance monitoring capabilities of the native K8s system:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"K8s native maintenance capabilities are lacking (such as ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl logs/exec")," cannot be executed)"),(0,a.kt)("li",{parentName:"ul"},"Community monitoring maintenance components cannot work (such as Prometheus/metrics-server)")),(0,a.kt)("p",null,"In order to support the maintenance of edge applications through cloud nodes, we must establish a reverse maintenance tunnel between the cloud and the edge."),(0,a.kt)("h2",{id:"2-reverse-tunnel"},"2. Reverse Tunnel"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenYurt"),", we introduced a special component ",(0,a.kt)("inlineCode",{parentName:"p"},"YurtTunnel")," to deal with the cloud-side communication. ",(0,a.kt)("inlineCode",{parentName:"p"},"Reverse tunnel")," is a common way to solve cross-network communication, and ",(0,a.kt)("inlineCode",{parentName:"p"},"YurtTunnel")," is also a ",(0,a.kt)("inlineCode",{parentName:"p"},"reverse tunnel"),". It is a typical C/S structure component, consisting of ",(0,a.kt)("inlineCode",{parentName:"p"},"Yurt-Tunnel-Server")," deployed in the cloud and ",(0,a.kt)("inlineCode",{parentName:"p"},"Yurt-Tunnel-Agent")," deployed on edge nodes. The deployment structure of YurtTunnel is following picture. The whole workflow of the ",(0,a.kt)("inlineCode",{parentName:"p"},"reverse tunnel")," has the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deploy ",(0,a.kt)("inlineCode",{parentName:"li"},"Yurt-Tunnel-Server")," on the management and control network plane."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Yurt-Tunnel-Server")," opens an IP accessible from the public network."),(0,a.kt)("li",{parentName:"ul"},"Deploy a ",(0,a.kt)("inlineCode",{parentName:"li"},"Yurt-Tunnel-Agent")," on each edge node, and establish a long connection with the Server through the Server's public IP."),(0,a.kt)("li",{parentName:"ul"},"Access requests from the management and control components to edge nodes will be forwarded to ",(0,a.kt)("inlineCode",{parentName:"li"},"Yurt-Tunnel-Server"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Yurt-Tunnel-Server")," sends the request to the target node through the long connection.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(16879).Z,width:"2128",height:"1142"})),(0,a.kt)("h2",{id:"3-implementation"},"3. Implementation"),(0,a.kt)("p",null,"To create a secure, non-intrusive, and scalable reverse tunnel in the K8s cloud-edge architecture, it needs to include at least the following three capabilities."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tunnel"),(0,a.kt)("li",{parentName:"ul"},"Self-management of certificates at both ends of the tunnel"),(0,a.kt)("li",{parentName:"ul"},"Cloud component requests are forwarded to the tunnel")),(0,a.kt)("p",null,"Architecture of ",(0,a.kt)("inlineCode",{parentName:"p"},"YurtTunnel")," is as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(57553).Z,width:"2016",height:"1576"})),(0,a.kt)("p",null,"1) Tunnel"),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"Yurt-Tunnel-Agent")," on the edge starts up, it will establish a connection and register with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Yurt-Tunnel-Server")," according to the access address, and periodically check the health status of the connection and rebuild the connection."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Yurt-Tunnel-Agent")," registered is as follows\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Plain"},'"agentID": {NodeName}\n"agentIdentifiers": ipv4={nodeIP}&host={NodeName}"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"Yurt-Tunnel-Server")," receives a request from a cloud component, it needs to forward the request to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Yurt-Tunnel-Agent"),". Because in addition to forwarding the request, the ",(0,a.kt)("inlineCode",{parentName:"li"},"session")," is followed by data return or continuous data forwarding (such as ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl exec")," ). So it is necessary to forward data in both directions. At the same time, it is necessary to support concurrent forwarding of requests from cloud components, which means that an unique ID needs to be established for each request life cycle. So there are two designs.")),(0,a.kt)("p",null,"Option 1: The initial cloud-side connection only informs the forwarding request, and ",(0,a.kt)("inlineCode",{parentName:"p"},"Yurt-Tunnel-Agent")," will establish a new connection with the cloud to process the request. Through the new connection, the problem of requesting unique ID can be resolved, and concurrency can also be resolved. But a connection needs to be established for each request, which will consume a lot of resources."),(0,a.kt)("p",null,"Option 2: Only the initial cloud-edge connection is used to forward requests. In order to reuse the same connection for a large number of requests, it is necessary to encapsulate each request and add an unique ID to solve the concurrent forwarding. At the same time, since a connection needs to be reused, it is necessary to decouple connection management and request lifecycle management. That is to manage the transition of request forwarding. This option involves packet and unpacket, request processing state machine, etc. The option will be a little more complicated."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"ANP")," component selected by OpenYurt adapts the above option 2, which also satisfies our original design intention."),(0,a.kt)("li",{parentName:"ul"},"Request forwarding is encapsulated in ",(0,a.kt)("inlineCode",{parentName:"li"},"Packet_DialRequest")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Packet_DialResponse"),", where ",(0,a.kt)("inlineCode",{parentName:"li"},"Packet_DialResponse.ConnectID")," is used to identify ",(0,a.kt)("inlineCode",{parentName:"li"},"request"),", which is like ",(0,a.kt)("inlineCode",{parentName:"li"},"requestID")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"tunnel"),". The request and data are encapsulated in ",(0,a.kt)("inlineCode",{parentName:"li"},"Packet_Data"),". ",(0,a.kt)("inlineCode",{parentName:"li"},"Packet_CloseRequest")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Packet_CloseResponse")," are used to forward and recycle resource. For details, please refer to the following sequence diagram:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(4089).Z,width:"1080",height:"997"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"RequestInterceptor")," module"),(0,a.kt)("p",{parentName:"li"}," It can be seen from the above analysis that before ",(0,a.kt)("inlineCode",{parentName:"p"},"Yurt-Tunnel-Server")," forwards the request, the client needs to make an ",(0,a.kt)("inlineCode",{parentName:"p"},"Http Connect")," request to create a forwarding path. However, it is difficult to do some work for open source components such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheus")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics-server"),". Therefore, a request hijacking module ",(0,a.kt)("inlineCode",{parentName:"p"},"Interceptor")," is added to ",(0,a.kt)("inlineCode",{parentName:"p"},"Yurt-Tunnel-Server")," to make ",(0,a.kt)("inlineCode",{parentName:"p"},"Http Connect")," requests."))),(0,a.kt)("p",null,"2) Certificate management"),(0,a.kt)("p",null,"In order to keep long and secure communication of cloud-edge, and also to support https request forwarding, ",(0,a.kt)("inlineCode",{parentName:"p"},"YurtTunnel")," needs to generate its own certificate and maintain the automatic rotation of the certificate. The details are as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Plain"},'# 1. Yurt-Tunnel-Server server certificate:\n# https://github.com/openyurtio/openyurt/blob/master/cmd/yurt-tunnel-server/app/start.go#L120-L139\n- certificate path: /var/lib/yurt-tunnel-server/pki/yurt-tunnel-server-xxx.pem\n- SignerName: "kubernetes.io/kubelet-serving"\n- CommonName: "system:node:tunnel-server"\n- Organization: {"system:nodes"}\n- Subject Alternate Name values: {x-tunnel-server-svc, x-tunnel-server-internal-svc\u7684ips\u548cdns names}\n- KeyUsage: ["key encipherment", "digital signature", "server auth"]\n\n# 2. tunnel proxy client certificate: is used by yurt-tunnel-server in order to make connection with components on edge nodes(like kubelet) for forwarding requests.\n# https://github.com/openyurtio/openyurt/blob/master/cmd/yurt-tunnel-server/app/start.go#L146-L152\n- certificate path: /var/lib/yurt-tunnel-server/pki/yurt-tunnel-server-proxy-client-xxx.pem\n- SignerName: "kubernetes.io/kube-apiserver-client"\n- CommonName: "tunnel-proxy-client"\n- Organization: {"openyurt:yurttunnel"}\n- KeyUsage: ["key encipherment", "digital signature", "client auth"]\n\n# 3. Yurt-Tunnel-Agent client certificate\uff1a\n# https://github.com/openyurtio/openyurt/blob/master/cmd/yurt-tunnel-agent/app/start.go#L99-L107\n- certificate path: /var/lib/yurt-tunnel-agent/pki/yurt-tunnel-agent-xxx.pem\n- SignerName: "kubernetes.io/kube-apiserver-client"\n- CommonName: "tunnel-agent-client"\n- Organization: {"openyurt:yurttunnel"}\n- KeyUsage: ["key encipherment", "digital signature", "client auth"]\n\n# 4. Yurt-tunnel Certificate Signing Request (CSR) is approved by Yurt-Controller-Manager\n# https://github.com/openyurtio/openyurt/blob/master/pkg/controller/certificates/csrapprover.go\n\n# 5. certificate automatic rotation\n# https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/client-go/util/certificate/certificate_manager.go#L224\n')),(0,a.kt)("p",null,"3) transfer cloud component requests to the tunnel"),(0,a.kt)("p",null,"Because the request of the cloud component needs to be forwarded to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Yurt-Tunnel-Server"),", it also means that no modification to the cloud component is required. So it is necessary to analyze the requests of cloud components. Currently the maintenance requests of components have the following two types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type 1: access using IP address, such as: http://{nodeIP}:{port}/{path}"),(0,a.kt)("li",{parentName:"ul"},"type 2: access using domain name, such as: http://{NodeName}:{port}/{path}")),(0,a.kt)("p",null,"Different solutions need to be adopted for different types of requests."),(0,a.kt)("p",null,"Solution 1: Use iptables dnat rules to ensure that type 1 requests are forwarded to ",(0,a.kt)("inlineCode",{parentName:"p"},"Yurt-Tunnel-Server")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"# iptables rules code: https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/iptables/iptables.go\n# The iptables dnat rules maintained by Yurt-Tunnel-Server are as follows:\n[root@xxx /]# iptables -nv -t nat -L OUTPUT\nTUNNEL-PORT  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* edge tunnel server port */\n\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT\nTUNNEL-PORT-10255  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:10255 /* jump to port 10255 */\nTUNNEL-PORT-10250  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:10250 /* jump to port 10250 */\n\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT-10255\nRETURN     tcp  --  *      *       0.0.0.0/0            127.0.0.1            /* return request to access node directly */ tcp dpt:10255\nRETURN     tcp  --  *      *       0.0.0.0/0            172.16.6.156         /* return request to access node directly */ tcp dpt:10255\nDNAT       tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* dnat to tunnel for access node */ tcp dpt:10255 to:172.16.6.156:10264\n")),(0,a.kt)("p",null,"Solution 2: Use dns domain name to resolve NodeName as the access address of Yurt-Tunnel-Server, so that type 2 requests can be forwarded to yurt-tunnel. Its working principle is as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(84897).Z,width:"2582",height:"1358"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Yurt-Tunnel-Server")," maintains two Service addresses\uff1a ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"x-tunnel-server-svc: expose port 10262/10263 used to access from the public networkYurt-Tunnel-Server. Such as Yurt-Tunnel-Agent "),(0,a.kt)("li",{parentName:"ul"},"x-tunnel-server-internal-svc: cloud components is accessed from the internal network, such as prometheus, metrics-server"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Yurt-Tunnel-Server")," has a DNS Controller, dynamically configures Core DNS Host records, and maintains the mapping relationship between NodeName and IP (Cloud Node is directly reachable according to IP, directly mapped to Node IP; Edge Node needs to communicate through the Tunnel tunnel agent, mapping to the cluster ip of ",(0,a.kt)("inlineCode",{parentName:"li"},"Yurt-Tunnel-Server")," Internal Service)"),(0,a.kt)("li",{parentName:"ul"},"When the cloud component accesses the Edge node through NodeName, it will do domain name resolution through CoreDNS by default, and the request for the Edge Node will be directed to the ClusterIP of the internal service of ",(0,a.kt)("inlineCode",{parentName:"li"},"Yurt-Tunnel-Server"),", and then use the forwarding ability of kube-proxy to forward the request Load balancing to healthy Yurt-Tunnel-Server Pods"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Yurt-Tunnel-Server")," will check the requested Host. When the Host is NodeName, it will find the correct Agent backend through the node name and forward the data")),(0,a.kt)("p",null,"4) port extension"),(0,a.kt)("p",null,"If users need to access other ports(like 9051 for http requests) on the edge (other than 10250 and 10255), they need to add dnat rules in iptables or add port mapping in x-tunnel-server-internal-svc, as shown following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"\n# For example, access port 9051 of the edge\n# add iptables dnat rule:\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT\nTUNNEL-PORT-9051  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:9051 /* jump to port 9051 */\n\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT-9051\nRETURN     tcp  --  *      *       0.0.0.0/0            127.0.0.1            /* return request to access node directly */ tcp dpt:9051\nRETURN     tcp  --  *      *       0.0.0.0/0            172.16.6.156         /* return request to access node directly */ tcp dpt:9051\nDNAT       tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* dnat to tunnel for access node */ tcp dpt:9051 to:172.16.6.156:10264\n\n# add port mapping in x-tunnel-server-internal-svc\nspec:\n  ports:\n  - name: https\n    port: 10250\n    protocol: TCP\n    targetPort: 10263\n  - name: http\n    port: 10255\n    protocol: TCP\n    targetPort: 10264\n  - name: dnat-9051 # add port mapping\n    port: 9051\n    protocol: TCP\n    targetPort: 10264\n")),(0,a.kt)("p",null,"The above iptables dnat rules and service port mapping are automatically updated by ",(0,a.kt)("inlineCode",{parentName:"p"},"Yurt-Tunnel-Server"),". Users only need to add port configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server-cfg")," configmap in ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-system"),". details as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Yaml"},'apiVersion: v1\ndata:\n  http-proxy-ports: "9051" # ports for HTTP requests \n  https-proxy-ports: "" # ports for HTTPs requests\nkind: ConfigMap\nmetadata:\n  name: yurt-tunnel-server-cfg\n  namespace: kube-system\n')))}p.isMDXComponent=!0},73898:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kubectl-4a135b776e4058dae26cb98067a28d99.jpg"},16879:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tunnel_arch-f5523df0a26022bbc4a94960802f2c40.jpg"},57553:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tunnel_components-98b2297c73ddbafee663f1dacf5ec19d.jpg"},84897:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tunnel_dns-3f45c486b188e1dd9e5b254ba516e10f.jpg"},4089:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tunnel_sequence_diag-385d8a83150e7246026538e7948dd738.jpg"}}]);