"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[45],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},i),{},{components:n})):a.createElement(h,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6901:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=(n(7294),n(3905));const o={title:"Manually Setup"},l=void 0,u={unversionedId:"installation/manually-setup",id:"installation/manually-setup",title:"Manually Setup",description:"This tutorial shows how to setup OpenYurt cluster manually. We assume you already have a Kubernetes cluster setup properly. If you want to create an OpenYurt cluster from scratch, please refer to yurtadm docs.",source:"@site/docs/installation/manually-setup.md",sourceDirName:"installation",slug:"/installation/manually-setup",permalink:"/docs/next/installation/manually-setup",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md",tags:[],version:"current",lastUpdatedBy:"Tomoya Fujita",lastUpdatedAt:1665296505,formattedLastUpdatedAt:"Oct 9, 2022",frontMatter:{title:"Manually Setup"},sidebar:"docs",previous:{title:"Summary",permalink:"/docs/next/installation/summary"},next:{title:"Yurtadm init",permalink:"/docs/next/installation/yurtadm-init"}},s={},p=[{value:"1. Precondition",id:"1-precondition",level:2},{value:"1.1 Label cloud nodes",id:"11-label-cloud-nodes",level:3},{value:"2.  OpenYurt Setup Preparation",id:"2--openyurt-setup-preparation",level:2},{value:"2.1 Adjust Kube-Controller-Manager",id:"21-adjust-kube-controller-manager",level:3},{value:"2.2 Deploy Yurt-Tunnel dedicated DNS",id:"22-deploy-yurt-tunnel-dedicated-dns",level:3},{value:"2.3 Adjust Kube-apiserver",id:"23-adjust-kube-apiserver",level:3},{value:"2.4 Adjust Addons",id:"24-adjust-addons",level:3},{value:"3. Setup Control-Plane components of OpenYurt",id:"3-setup-control-plane-components-of-openyurt",level:2},{value:"3.1 Setup <code>openyurt/yurt-app-manager</code> components",id:"31-setup-openyurtyurt-app-manager-components",level:3},{value:"3.1.1 Install yurt-app-manager",id:"311-install-yurt-app-manager",level:4},{value:"3.1.2 Create NodePool",id:"312-create-nodepool",level:4},{value:"3.1.3 Add node into NodePool",id:"313-add-node-into-nodepool",level:4},{value:"3.2 Setup <code>openyurt/openyurt</code> components",id:"32-setup-openyurtopenyurt-components",level:3},{value:"4. Attention",id:"4-attention",level:2}],i={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial shows how to setup OpenYurt cluster manually. We assume you already have a Kubernetes cluster setup properly. If you want to create an OpenYurt cluster from scratch, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/installation/yurtadm-init"},"yurtadm docs"),"."),(0,r.kt)("h2",{id:"1-precondition"},"1. Precondition"),(0,r.kt)("p",null,"Make sure you already have a Kubernetes cluster with at least one node. We recommend to create your Kubernetes cluster with ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"},"kubeadm")," tool."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11\n")),(0,r.kt)("h3",{id:"11-label-cloud-nodes"},"1.1 Label cloud nodes"),(0,r.kt)("p",null,"When disconnected from the apiserver, only the pod running on the autonomous edge node will\nbe prevented from being evicted from nodes. Therefore, we first need to divide nodes into two categories, the cloud node\nand the edge node, by using label ",(0,r.kt)("inlineCode",{parentName:"p"},"openyurt.io/is-edge-worker"),".\nwe will use node ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west-1.192.168.0.87")," as the cloud node. We label the cloud node with value ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),","),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node us-west-1.192.168.0.87 openyurt.io/is-edge-worker=false\nnode/us-west-1.192.168.0.87 labeled\n")),(0,r.kt)("h2",{id:"2--openyurt-setup-preparation"},"2.  OpenYurt Setup Preparation"),(0,r.kt)("h3",{id:"21-adjust-kube-controller-manager"},"2.1 Adjust Kube-Controller-Manager"),(0,r.kt)("p",null,"To make Yurt-Controller-Manager function properly, we need to disable the NodeLifeCycle controller in Kube-Controller-Manager. (Currently being optimized, this operation will not be needed in the future)"),(0,r.kt)("p",null,"The adjustment operation is as following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/installation/openyurt-prepare#2-kube-controller-manager-adjustment"},"Kube-Controller-Manager"))),(0,r.kt)("h3",{id:"22-deploy-yurt-tunnel-dedicated-dns"},"2.2 Deploy Yurt-Tunnel dedicated DNS"),(0,r.kt)("p",null,"When cloud components(such as Kube-apiserver, prometheus, metrics-server) access edge side through ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname:port"),", their ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname")," domain should resolve to ",(0,r.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server")," to make the requests pass through ",(0,r.kt)("inlineCode",{parentName:"p"},"yurt-tunnel")," to target edge node imperceptibly. We should make sure that these DNS domain resolution requests are sent to the Yurt-Tunnel dedicated DNS server (named yurt-tunnel-dns)."),(0,r.kt)("p",null,"Install yurt-tunnel-dns with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f config/setup/yurt-tunnel-dns.yaml\n")),(0,r.kt)("p",null,"After installation, we can check if yurt-tunnel-dns started successfully with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl -n kube-system get po"),". Also we can get the ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterIP")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-dns service")," which will be used later with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl -n kube-system get svc yurt-tunnel-dns"),"."),(0,r.kt)("h3",{id:"23-adjust-kube-apiserver"},"2.3 Adjust Kube-apiserver"),(0,r.kt)("p",null,"To ensure that the kube-apiserver on the Master node uses ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname:port")," to access the kubelet, and also to ensure that the domain name resolution of ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname")," is performed using the ",(0,r.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-dns pod"),". The relevant configuration of the kube-apiserver component needs to be adjusted."),(0,r.kt)("p",null,"The adjust operations are as following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/installation/openyurt-prepare#3-kube-apiserver-adjustment"},"Kube-apiserver"))),(0,r.kt)("h3",{id:"24-adjust-addons"},"2.4 Adjust Addons"),(0,r.kt)("p",null,"Kube-proxy and CoreDNS which are installed by kubeadm by default should also be adjusted to adapt to cloud-edge scenarios. The adjust operations are as following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/installation/openyurt-prepare#4-coredns-adjustment"},"CoreDNS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/installation/openyurt-prepare#5-kubeproxy-adjustment"},"KubeProxy"))),(0,r.kt)("h2",{id:"3-setup-control-plane-components-of-openyurt"},"3. Setup Control-Plane components of OpenYurt"),(0,r.kt)("p",null,"We recommend to install OpenYurt components with ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),", please make sure that ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},(0,r.kt)("inlineCode",{parentName:"a"},"helm CLI")," has been installed")," properly before moving on. All the helm charts used in this tutorial can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt-helm"},"openyurt-helm repo"),"."),(0,r.kt)("h3",{id:"31-setup-openyurtyurt-app-manager-components"},"3.1 Setup ",(0,r.kt)("inlineCode",{parentName:"h3"},"openyurt/yurt-app-manager")," components"),(0,r.kt)("h4",{id:"311-install-yurt-app-manager"},"3.1.1 Install yurt-app-manager"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/core-concepts/yurt-app-manager"},"Yurt-App-Manager")," is a functional component that provides united edge management capabilities for an OpenYurt cluster. You can install this component with helm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install  yurt-app-manager -n kube-system ./charts/yurt-app-manager --set image.tag=latest\n")),(0,r.kt)("p",null,"You can check if yurt-app-manager pod and service have been installed successfully with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n kube-system | grep yurt-app-manager\nkubectl get svc -n kube-system | grep yurt-app-manager\n")),(0,r.kt)("h4",{id:"312-create-nodepool"},"3.1.2 Create NodePool"),(0,r.kt)("p",null,"To better manage the nodes and the traffic on the nodes (e.g., Service traffic topology management), we recommend putting the nodes of the Layer 2 network interworking in the same node pool. In this example, a node pool is created for cloud side as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: master\nspec:\n  type: Cloud\nEOF\n")),(0,r.kt)("h4",{id:"313-add-node-into-nodepool"},"3.1.3 Add node into NodePool"),(0,r.kt)("p",null,"Add the cloud node into nodepool created in 3.1.2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node us-west-1.192.168.0.87 apps.openyurt.io/desired-nodepool=master\nnode/us-west-1.192.168.0.87 labeled\n")),(0,r.kt)("h3",{id:"32-setup-openyurtopenyurt-components"},"3.2 Setup ",(0,r.kt)("inlineCode",{parentName:"h3"},"openyurt/openyurt")," components"),(0,r.kt)("p",null,"Componentes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"openyurt/openyurt")," includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/core-concepts/yurt-controller-manager"},"yurt-controller-manager"),": it prevents apiserver from evicting pods running on the autonomous edge nodes during disconnection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/core-concepts/yurttunnel"},"yurt-tunnel-server"),": it constructs the cloud-edge tunnel on the server side"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/core-concepts/yurttunnel"},"yurt-tunnel-agent"),": it constructs the cloud-edge tunnel on the edge side")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If your cloud node and edge node are in different network domains, please overwrite the default parameters for yurt-tunnel components in ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'yurtTunnelAgent.parameters.tunnelserverAddr="ip:port"'),": the public ip along with port of tunnel server where tunnel agent can connect to"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'yurtTunnelServer.parameters.certIps="ip1,ip2"'),": the public ip of tunnel server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'yurtTunnelServer.parameters.certDnsNames="dns_name1,dns_name2"'),": the dns name of tunnel server ","[OPTIONAL]"))),(0,r.kt)("p",null,"We can install all the components above with helm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | helm install openyurt ./charts/openyurt -n kube-system -f -\nyurtTunnelServer:\n  image:\n    tag: latest\nyurtTunnelAgent:\n  image:\n    tag: latest\nyurtControllerManager:\n  image:\n    tag: latest\nEOF\n")),(0,r.kt)("p",null,"If everthing went well, you'll see something like this after typing ",(0,r.kt)("inlineCode",{parentName:"p"},"helm list -A")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm list -A \nNAME                NAMESPACE   REVISION    UPDATED                                 STATUS      CHART                   APP VERSION\nopenyurt            kube-system 1           2022-09-07 17:06:17.764754411 +0800 CST deployed    openyurt-1.0.0          1.0.0      \nyurt-app-manager    kube-system 1           2022-09-07 17:36:30.371904902 +0800 CST deployed    yurt-app-manager-0.1.2  0.8.0\n")),(0,r.kt)("h2",{id:"4-attention"},"4. Attention"),(0,r.kt)("p",null,"The above operation is only for the Master node, if there are other nodes in the cluster, additional adjustment is needed, the operation method can be referred to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/installation/yurtadm-join#2-install-openyurt-node-components"},"Install OpenYurt Node on Existing K8s Nodes"),"."))}d.isMDXComponent=!0}}]);