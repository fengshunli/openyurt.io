"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[9188],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=i(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5853:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return i}});var r=n(7462),a=(n(7294),n(3905));const o={title:"Manually Setup"},l=void 0,u={unversionedId:"installation/manually-setup",id:"version-v0.7.0/installation/manually-setup",title:"Manually Setup",description:"This tutorial shows how to setup OpenYurt cluster manually. The cluster used in this tutorial is a",source:"@site/versioned_docs/version-v0.7.0/installation/manually-setup.md",sourceDirName:"installation",slug:"/installation/manually-setup",permalink:"/docs/v0.7.0/installation/manually-setup",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md",tags:[],version:"v0.7.0",lastUpdatedBy:"Tomoya Fujita",lastUpdatedAt:1665296505,formattedLastUpdatedAt:"Oct 9, 2022",frontMatter:{title:"Manually Setup"},sidebar:"version-v0.7.0/docs",previous:{title:"Summary",permalink:"/docs/v0.7.0/installation/summary"},next:{title:"Yurtadm init/join",permalink:"/docs/v0.7.0/installation/yurtadm-init-join"}},s={},i=[{value:"1. Precondition",id:"1-precondition",level:2},{value:"2. Label cloud nodes and edge nodes",id:"2-label-cloud-nodes-and-edge-nodes",level:2},{value:"3. Setup Control-Plane components of OpenYurt",id:"3-setup-control-plane-components-of-openyurt",level:2},{value:"3.1 Setup Yurt-controller-manager",id:"31-setup-yurt-controller-manager",level:3},{value:"Note:",id:"note",level:4},{value:"3.2 Setup Yurt-App-Manager",id:"32-setup-yurt-app-manager",level:3},{value:"3.3 Setup Yurt-tunnel",id:"33-setup-yurt-tunnel",level:3},{value:"3.4 Setup Yurthub Settings",id:"34-setup-yurthub-settings",level:3},{value:"4. Join Edge Nodes",id:"4-join-edge-nodes",level:2},{value:"4.1 Configure Joined Nodes",id:"41-configure-joined-nodes",level:3},{value:"4.1.1 Setup Yurthub",id:"411-setup-yurthub",level:4},{value:"4.1.2 Configure Kubelet",id:"412-configure-kubelet",level:4},{value:"4.1.3 Restart Pods",id:"413-restart-pods",level:4},{value:"4.2 Join Edge Nodes From Scratch",id:"42-join-edge-nodes-from-scratch",level:3}],p={toc:i};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial shows how to setup OpenYurt cluster manually. The cluster used in this tutorial is a\ntwo-nodes Kubernetes cluster, and all the yaml files used in this tutorial can be found\nat ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/tree/master/config/setup"},"openyurt repo")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurt-app-manager/tree/master/config/setup"},"yurt-app-manager repo"),"."),(0,a.kt)("h2",{id:"1-precondition"},"1. Precondition"),(0,a.kt)("p",null,"Make sure you already have installed a two-nodes Kubernetes cluster. like ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"},"kubeadm")," tool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11\nus-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11\n")),(0,a.kt)("p",null,"OpenYurt need to change kubernetes component configurations to adapt to edge environment. Please complete the following configurations for ",(0,a.kt)("inlineCode",{parentName:"p"},"Kube-Controller-Manager"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CoreDNS"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"KubeProxy"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.7.0/installation/openyurt-prepare#1-kube-controller-manager-adjustment"},"Kube-Controller-Manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.7.0/installation/openyurt-prepare#2-coredns-adjustment"},"CoreDNS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.7.0/installation/openyurt-prepare#3-kubeproxy-adjustment"},"KubeProxy"))),(0,a.kt)("h2",{id:"2-label-cloud-nodes-and-edge-nodes"},"2. Label cloud nodes and edge nodes"),(0,a.kt)("p",null,"When disconnected from the apiserver, only the pod running on the autonomous edge node will\nbe prevented from being evicted from nodes. Therefore, we first need to divide nodes into two categories, the cloud node\nand the edge node, by using label ",(0,a.kt)("inlineCode",{parentName:"p"},"openyurt.io/is-edge-worker"),".\nwe will use node ",(0,a.kt)("inlineCode",{parentName:"p"},"us-west-1.192.168.0.87")," as the cloud node."),(0,a.kt)("p",null,"We label the cloud node with value ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),","),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node us-west-1.192.168.0.87 openyurt.io/is-edge-worker=false\nnode/us-west-1.192.168.0.87 labeled\n")),(0,a.kt)("p",null,"and the edge node with value ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node us-west-1.192.168.0.88 openyurt.io/is-edge-worker=true\nnode/us-west-1.192.168.0.88 labeled\n")),(0,a.kt)("p",null,"To activate the autonomous mode, we annotate the edge node by typing following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl annotate node us-west-1.192.168.0.88 node.beta.openyurt.io/autonomy=true\nnode/us-west-1.192.168.0.88 annotated\n")),(0,a.kt)("h2",{id:"3-setup-control-plane-components-of-openyurt"},"3. Setup Control-Plane components of OpenYurt"),(0,a.kt)("h3",{id:"31-setup-yurt-controller-manager"},"3.1 Setup Yurt-controller-manager"),(0,a.kt)("p",null,"Next, we need to deploy the Yurt controller manager, which prevents apiserver from evicting pods running on the\nautonomous edge nodes during disconnection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f config/setup/yurt-controller-manager.yaml\ndeployment.apps/yurt-controller-manager created\n")),(0,a.kt)("h4",{id:"note"},"Note:"),(0,a.kt)("p",null,'Since Docker turn on pull rate limit on anonymous request. You may encounter error message like "You have reached your pull rate limit. xxxx". In that case you will need to create a docker-registry secret to pull the image.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl create secret docker-registry dockerpass --docker-username=your-docker-username --docker-password='your-docker-password' --docker-email='your-email-address' -n kube-system\n")),(0,a.kt)("p",null,"Then edit the config/setup/yurt-controller-manager.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n      containers:\n      - name: yurt-controller-manager\n        image: openyurt/yurt-controller-manager:latest\n        command:\n        - yurt-controller-manager\n      imagePullSecrets:\n      - name: dockerpass\n")),(0,a.kt)("h3",{id:"32-setup-yurt-app-manager"},"3.2 Setup Yurt-App-Manager"),(0,a.kt)("p",null,"please get ",(0,a.kt)("inlineCode",{parentName:"p"},"config/setup/all_in_one.yaml")," from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurt-app-manager/tree/master/config/setup"},"yurt-app-manager repo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl apply -f config/setup/all_in_one.yaml\n")),(0,a.kt)("p",null,"Wait for the yurt-app-manager operator to be created successfully"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get pod -n kube-system | grep yurt-app-manager\n$ kubectl get svc -n kube-system | grep yurt-app-manager\n")),(0,a.kt)("h3",{id:"33-setup-yurt-tunnel"},"3.3 Setup Yurt-tunnel"),(0,a.kt)("p",null,"Then, we can deploy the yurt-tunnel-server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f config/setup/yurt-tunnel-server.yaml\n")),(0,a.kt)("p",null,"And, apply the yurt-tunnel-agent yaml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f config/setup/yurt-tunnel-agent.yaml\n")),(0,a.kt)("p",null,"After the agent and the server are running, we should check if yurt-tunnel can work by executing command like ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs/exec")),(0,a.kt)("h3",{id:"34-setup-yurthub-settings"},"3.4 Setup Yurthub Settings"),(0,a.kt)("p",null,"Deploy global settings(i.e., RBAC, configmap) for yurthub."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f config/setup/yurthub-cfg.yaml\n")),(0,a.kt)("h2",{id:"4-join-edge-nodes"},"4. Join Edge Nodes"),(0,a.kt)("p",null,"we can install node components of OpenYurt on edge nodes that already have been joined in the Kubernetes cluster(like ",(0,a.kt)("inlineCode",{parentName:"p"},"node/us-west-1.192.168.0.88"),"). on the other hand,\nwe also can join new edge nodes from scratch into the OpenYurt cluster."),(0,a.kt)("h3",{id:"41-configure-joined-nodes"},"4.1 Configure Joined Nodes"),(0,a.kt)("p",null,"only setup node components of OpenYurt on edge nodes that already have been joined in the Kubernetes cluster."),(0,a.kt)("h4",{id:"411-setup-yurthub"},"4.1.1 Setup Yurthub"),(0,a.kt)("p",null,"Before proceeding, we need to prepare the following items:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Get the apiserver's address (i.e., ip:port) and a ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/"},"bootstrap token"),", which will be used to replace the placeholder in the template file ",(0,a.kt)("inlineCode",{parentName:"li"},"config/setup/yurthub.yaml"),".")),(0,a.kt)("p",null,"In the following command, we assume that the address of the apiserver is 1.2.3.4:5678 and bootstrap token is 07401b.f395accd246ae52d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat config/setup/yurthub.yaml |\nsed 's|__kubernetes_master_address__|1.2.3.4:5678|;\ns|__bootstrap_token__|07401b.f395accd246ae52d|' > /tmp/yurthub-ack.yaml &&\nscp -i <yourt-ssh-identity-file> /tmp/yurthub-ack.yaml root@us-west-1.192.168.0.88:/etc/kubernetes/manifests\n")),(0,a.kt)("p",null,"and the Yurthub will be ready in minutes."),(0,a.kt)("h4",{id:"412-configure-kubelet"},"4.1.2 Configure Kubelet"),(0,a.kt)("p",null,"we need to reset the kubelet service to let it access the apiserver through the yurthub (The following steps assume that we have logged on to the edge node as the root user).\nAs kubelet will connect to the Yurthub through HTTP, so we create a new kubeconfig file for the kubelet service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/lib/openyurt\ncat << EOF > /var/lib/openyurt/kubelet.conf\napiVersion: v1\nclusters:\n- cluster:\n    server: http://127.0.0.1:10261\n  name: default-cluster\ncontexts:\n- context:\n    cluster: default-cluster\n    namespace: default\n    user: default-auth\n  name: default-context\ncurrent-context: default-context\nkind: Config\npreferences: {}\nEOF\n")),(0,a.kt)("p",null,"In order for let kubelet to use the new kubeconfig, we edit the drop-in file of the kubelet service (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/kubelet.service.d/10-kubeadm.conf")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf")," for CentOS)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i "s|KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=\\/etc\\/kubernetes\\/bootstrap-kubelet.conf\\ --kubeconfig=\\/etc\\/kubernetes\\/kubelet.conf|KUBELET_KUBECONFIG_ARGS=--kubeconfig=\\/var\\/lib\\/openyurt\\/kubelet.conf|g" \\\n    /etc/systemd/system/kubelet.service.d/10-kubeadm.conf\n')),(0,a.kt)("p",null,"then, we restart the kubelet service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# assume we are logged in to the edge node already\n$ systemctl daemon-reload && systemctl restart kubelet\n")),(0,a.kt)("p",null,"Finally, we need to make sure node is ready after kubelet restart."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11\nus-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11\n")),(0,a.kt)("h4",{id:"413-restart-pods"},"4.1.3 Restart Pods"),(0,a.kt)("p",null,"After Yurthub installation and kubelet restart, all pods on this edge node should be recreated in order to make sure pods access kube-apiserver through Yurthub.\nBefore performing this operation, confirm the impact on the production environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get pod -A -o wide | grep us-west-1.192.168.0.88\nkube-system   yurt-hub-us-west-1.192.168.0.88           1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   coredns-qq6dk                             1/1     Running   0          19d     10.148.2.197   us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-flannel-ds-j698r                     1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-proxy-f5qvr                          1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\n\n// then delete all pods above except yurthub pod.\n$ kubectl -n kube-system delete pod coredns-qq6dk kube-flannel-ds-j698r kube-proxy-f5qvr\n")),(0,a.kt)("h3",{id:"42-join-edge-nodes-from-scratch"},"4.2 Join Edge Nodes From Scratch"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"yurtadm join")," command is used for joining new edge nodes into cluster. detail information is ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.7.0/installation/yurtadm-init-join#23joining-nodes-to-cluster"},"here")))}d.isMDXComponent=!0}}]);