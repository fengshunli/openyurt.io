"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[7196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(y,o(o({ref:t},s),{},{components:n})):a.createElement(y,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u5728Kubernetes\u4e0a\u5b89\u88c5"},o=void 0,p={unversionedId:"installation/manually-setup",id:"installation/manually-setup",title:"\u5728Kubernetes\u4e0a\u5b89\u88c5",description:"\u672c\u6559\u7a0b\u5c55\u793a\u4e86\u5982\u4f55\u624b\u52a8\u90e8\u7f72 OpenYurt \u96c6\u7fa4\u3002\u6211\u4eec\u5047\u8bbe\u7528\u6237\u5df2\u7ecf\u5b89\u88c5\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4\u3002\u5982\u679c\u60f3\u4ece\u5934\u5f00\u59cb\u521b\u5efaOpenYurt\u96c6\u7fa4\uff0c\u8bf7\u53c2\u8003yurtadm \u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/manually-setup.md",sourceDirName:"installation",slug:"/installation/manually-setup",permalink:"/zh/docs/next/installation/manually-setup",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md",tags:[],version:"current",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1674114208,formattedLastUpdatedAt:"2023\u5e741\u670819\u65e5",frontMatter:{title:"\u5728Kubernetes\u4e0a\u5b89\u88c5"},sidebar:"docs",previous:{title:"\u4ecb\u7ecd",permalink:"/zh/docs/next/installation/summary"},next:{title:"\u4f53\u9a8c\u4e2d\u5fc3\u7b80\u4ecb",permalink:"/zh/docs/next/installation/openyurt-experience-center/overview"}},u={},i=[{value:"1 Kubernetes\u96c6\u7fa4\u73af\u5883",id:"1-kubernetes\u96c6\u7fa4\u73af\u5883",level:2},{value:"1.1 \u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e",id:"11-\u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e",level:3},{value:"2 OpenYurt\u5b89\u88c5\u524d\u7f6e\u6761\u4ef6",id:"2-openyurt\u5b89\u88c5\u524d\u7f6e\u6761\u4ef6",level:2},{value:"3 \u90e8\u7f72OpenYurt\u7684Control-Plane\u7ec4\u4ef6",id:"3-\u90e8\u7f72openyurt\u7684control-plane\u7ec4\u4ef6",level:2},{value:"3.1 \u90e8\u7f72<code>openyurt/yurt-app-manager</code>\u7ec4\u4ef6",id:"31-\u90e8\u7f72openyurtyurt-app-manager\u7ec4\u4ef6",level:3},{value:"3.1.1 \u5b89\u88c5 yurt-app-manager",id:"311-\u5b89\u88c5-yurt-app-manager",level:4},{value:"3.1.2 \u521b\u5efa\u8282\u70b9\u6c60",id:"312-\u521b\u5efa\u8282\u70b9\u6c60",level:4},{value:"3.1.3 \u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60",id:"313-\u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60",level:4},{value:"3.2 \u90e8\u7f72<code>openyurt/yurt-controller-manager</code>\u7ec4\u4ef6",id:"32-\u90e8\u7f72openyurtyurt-controller-manager\u7ec4\u4ef6",level:3},{value:"4 \u90e8\u7f72OpenYurt\u7684\u8de8\u7f51\u7edc\u57df\u901a\u4fe1\u7ec4\u4ef6",id:"4-\u90e8\u7f72openyurt\u7684\u8de8\u7f51\u7edc\u57df\u901a\u4fe1\u7ec4\u4ef6",level:2},{value:"4.1 \u90e8\u7f72<code>raven-controller-manager</code>\u7ec4\u4ef6",id:"41-\u90e8\u7f72raven-controller-manager\u7ec4\u4ef6",level:3},{value:"4.2 \u90e8\u7f72<code>raven-agent</code>\u7ec4\u4ef6",id:"42-\u90e8\u7f72raven-agent\u7ec4\u4ef6",level:3},{value:"5. \u6ce8\u610f",id:"5-\u6ce8\u610f",level:2}],s={toc:i};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6559\u7a0b\u5c55\u793a\u4e86\u5982\u4f55\u624b\u52a8\u90e8\u7f72 OpenYurt \u96c6\u7fa4\u3002\u6211\u4eec\u5047\u8bbe\u7528\u6237\u5df2\u7ecf\u5b89\u88c5\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4\u3002\u5982\u679c\u60f3\u4ece\u5934\u5f00\u59cb\u521b\u5efaOpenYurt\u96c6\u7fa4\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/installation/yurtadm-init"},"yurtadm \u6587\u6863"),"\u3002"),(0,r.kt)("h2",{id:"1-kubernetes\u96c6\u7fa4\u73af\u5883"},"1 Kubernetes\u96c6\u7fa4\u73af\u5883"),(0,r.kt)("p",null,"\u7528\u6237\u9700\u8981\u5148\u81ea\u884c\u51c6\u5907\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4(\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"},"kubeadm"),"\u5de5\u5177\u642d\u5efa)\uff0c\u672c\u6587\u6863\u4e2d\u4ee51\u8282\u70b9\u7684Kubernetes\u4e3a\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME                      STATUS   ROLES                  AGE     VERSION\nizwz9dohcv74iegqecp4axz   Ready    control-plane,master   6d1h    v1.22.11\n")),(0,r.kt)("h3",{id:"11-\u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e"},"1.1 \u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e"),(0,r.kt)("p",null,"\u5f53\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"apiserver")," \u65ad\u5f00\u8fde\u63a5\u65f6\uff0c\u53ea\u6709\u8fd0\u884c\u5728\u8fb9\u7f18\u81ea\u6cbb\u7684\u8282\u70b9\u4e0a\u7684Pod\u624d\u4e0d\u4f1a\u88ab\u9a71\u9010\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u901a\u8fc7\u6253 ",(0,r.kt)("inlineCode",{parentName:"p"},"openyurt.io/is-edge-worker")," \u7684\u6807\u7b7e\u7684\u65b9\u5f0f\uff0c\u5c06\u8282\u70b9\u5206\u4e3a\u4e91\u7aef\u8282\u70b9\u548c\u8fb9\u7f18\u8282\u70b9\u3002\n\u6211\u4eec\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"izwz9dohcv74iegqecp4axz")," \u4f5c\u4e3a\u4e91\u7aef\u8282\u70b9\uff0c\u5c06\u6807\u7b7e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," \u503c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node izwz9dohcv74iegqecp4axz openyurt.io/is-edge-worker=false\nizwz9dohcv74iegqecp4axz labeled\n")),(0,r.kt)("h2",{id:"2-openyurt\u5b89\u88c5\u524d\u7f6e\u6761\u4ef6"},"2 OpenYurt\u5b89\u88c5\u524d\u7f6e\u6761\u4ef6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4fdd\u8bc1\u96c6\u7fa4\u4e2d\u6240\u6709\u8282\u70b9IP\u4e0d\u51b2\u7a81\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u91c7\u7528docker\u4f5c\u4e3a\u5bb9\u5668\u8fd0\u884c\u65f6\u5219\u9700\u8981\u505a\u4ee5\u4e0b\u8c03\u6574\uff0c\u907f\u514dDocker\u4fee\u6539iptables FORWARD\u94fe\u9ed8\u8ba4\u89c4\u5219\u4e3aDROP\uff0c\u4ece\u800c\u5bfc\u81f4Raven Gateway\u8282\u70b9\u6d41\u91cf\u8f6c\u53d1\u5931\u8d25\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"iptables -w -P FORWARD ACCEPT\n sed -i 's#^After=network-online.target firewalld.service$#After=network-online.target firewalld.service containerd.service#g' \\\n /lib/systemd/system/docker.service\n")))),(0,r.kt)("h2",{id:"3-\u90e8\u7f72openyurt\u7684control-plane\u7ec4\u4ef6"},"3 \u90e8\u7f72OpenYurt\u7684Control-Plane\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),"\u5b89\u88c5OpenYurt\u7ec4\u4ef6\u3002\u8bf7\u5148\u4fdd\u8bc1\u5728\u4f60\u7684\u73af\u5883\u4e2d\u5df2\u7ecf",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"\u5b89\u88c5helm"),"\u3002\u53e6\u5916\uff0c\u63a5\u4e0b\u6765\u8981\u7528\u5230\u7684\u6240\u6709helm charts\u90fd\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt-helm"},"openyurt-helm \u4ed3\u5e93"),"\u4e2d\u627e\u5230\u3002"),(0,r.kt)("h3",{id:"31-\u90e8\u7f72openyurtyurt-app-manager\u7ec4\u4ef6"},"3.1 \u90e8\u7f72",(0,r.kt)("inlineCode",{parentName:"h3"},"openyurt/yurt-app-manager"),"\u7ec4\u4ef6"),(0,r.kt)("h4",{id:"311-\u5b89\u88c5-yurt-app-manager"},"3.1.1 \u5b89\u88c5 yurt-app-manager"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/core-concepts/yurt-app-manager"},"Yurt-App-Manager"),"\u662fOpenYurt\u96c6\u7fa4\u63d0\u4f9b\u8fb9\u7f18\u5355\u5143\u5316\u7ba1\u7406\u7684\u529f\u80fd\u7ec4\u4ef6\uff0c\u5168\u9762\u63d0\u5347\u5728\u8fb9\u7f18\u573a\u666f\u4e0b\u7684\u5e94\u7528\u90e8\u7f72\u6548\u7387\uff0c\u964d\u4f4e\u8fb9\u7f18\u8282\u70b9\u548c\u5e94\u7528\u8fd0\u7ef4\u7684\u590d\u6742\u5ea6\u3002\u901a\u8fc7helm\u5b89\u88c5\u8be5\u7ec4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install yurt-app-manager -n kube-system . --set image.tag=latest\n")),(0,r.kt)("p",null,"\u786e\u8ba4yurt-app-manager\u7ec4\u4ef6\u7684pod\u548cservice\u914d\u7f6e\u5df2\u7ecf\u6210\u529f\u521b\u5efa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n kube-system | grep yurt-app-manager\nkubectl get svc -n kube-system | grep yurt-app-manager\n")),(0,r.kt)("h4",{id:"312-\u521b\u5efa\u8282\u70b9\u6c60"},"3.1.2 \u521b\u5efa\u8282\u70b9\u6c60"),(0,r.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u7ba1\u7406\u8282\u70b9\u548c\u8282\u70b9\u4e0a\u7684\u6d41\u91cf(\u5982Service\u6d41\u91cf\u62d3\u6251\u7ba1\u7406)\uff0c\u6211\u4eec\u63a8\u8350\u628a\u4e8c\u5c42\u7f51\u7edc\u4e92\u901a\u7684\u8282\u70b9\u653e\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u6c60\u3002\u672c\u4f8b\u4e2d\u4e3a\u4e91\u7aef\u521b\u5efa\u4e00\u4e2a\u8282\u70b9\u6c60\uff0c\u5177\u4f53\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: master\nspec:\n  type: Cloud\nEOF\n")),(0,r.kt)("h4",{id:"313-\u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60"},"3.1.3 \u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60"),(0,r.kt)("p",null,"\u5c06\u4e91\u7aef\u8282\u70b9\u52a0\u51653.1.2\u4e2d\u521b\u5efa\u7684\u4e91\u7aef\u8282\u70b9\u6c60\uff0c\u5177\u4f53\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node izwz9dohcv74iegqecp4axz apps.openyurt.io/desired-nodepool=master\nizwz9dohcv74iegqecp4axz labeled\n")),(0,r.kt)("h3",{id:"32-\u90e8\u7f72openyurtyurt-controller-manager\u7ec4\u4ef6"},"3.2 \u90e8\u7f72",(0,r.kt)("inlineCode",{parentName:"h3"},"openyurt/yurt-controller-manager"),"\u7ec4\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/core-concepts/yurt-controller-manager"},"yurt-controller-manager"),"\u9632\u6b62apiserver\u5728\u65ad\u5f00\u8fde\u63a5\u65f6\u9a71\u9010\u8fd0\u884c\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684pod\n\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7helm\u5b89\u88c5\u4ee5\u4e0a\u7ec4\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | helm install openyurt ./openyurt -n kube-system -f -\nyurtControllerManager:\n  image:\n    tag: latest\nEOF\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"helm list -A"),"\u786e\u8ba4\u662f\u5426\u5b89\u88c5\u6210\u529f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm list -A \nNAME                NAMESPACE   REVISION    UPDATED                                 STATUS      CHART                   APP VERSION\nopenyurt            kube-system 1           2022-09-07 17:06:17.764754411 +0800 CST deployed    openyurt-1.0.0          1.0.0      \nyurt-app-manager    kube-system 1           2022-09-07 17:36:30.371904902 +0800 CST deployed    yurt-app-manager-0.1.2  0.8.0\n")),(0,r.kt)("h2",{id:"4-\u90e8\u7f72openyurt\u7684\u8de8\u7f51\u7edc\u57df\u901a\u4fe1\u7ec4\u4ef6"},"4 \u90e8\u7f72OpenYurt\u7684\u8de8\u7f51\u7edc\u57df\u901a\u4fe1\u7ec4\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/core-concepts/raven"},"Raven"),"\u63d0\u4f9b\u4e86\u4e91\u3001\u8fb9\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u533a\u57df\u7684\u7f51\u7edc\u901a\u4fe1\u80fd\u529b\uff0craven\u9879\u76ee\u5305\u542b\u4e24\u4e2a\u7ec4\u4ef6raven-controller-manager\u548craven-agent\u6784\u6210\uff1a"),(0,r.kt)("h3",{id:"41-\u90e8\u7f72raven-controller-manager\u7ec4\u4ef6"},"4.1 \u90e8\u7f72",(0,r.kt)("inlineCode",{parentName:"h3"},"raven-controller-manager"),"\u7ec4\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/raven-controller-manager"},"raven-controller-manager"),"\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49CR Gateway\u7684\u6807\u51c6kubernetes\u63a7\u5236\u5668\uff0c\u88ab\u90e8\u7f72\u5728\u4e91\u7aef\u8282\u70b9\uff08\u53ef\u4e3amaster\u6216cloud\u8282\u70b9\uff09\uff0cGateway CR\u7ba1\u7406\u4e0d\u540c\u7269\u7406\u533a\u57df\u7684\u8282\u70b9\uff0c\u52a8\u6001\u9009\u4e3e\u7269\u7406\u533a\u57df\u5185\u4e00\u4e2a\u5408\u683c\u8282\u70b9\u4f5c\u4e3aGateway\u8282\u70b9\u3002 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openyurtio/raven-controller-manager.git\ncd raven-controller-manager\ngit checkout v0.3.0\nmake generate-deploy-yaml\nkubectl apply -f _output/yamls/raven-controller-manager.yaml\n")),(0,r.kt)("h3",{id:"42-\u90e8\u7f72raven-agent\u7ec4\u4ef6"},"4.2 \u90e8\u7f72",(0,r.kt)("inlineCode",{parentName:"h3"},"raven-agent"),"\u7ec4\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openyurtio/raven.git\ncd raven\ngit checkout v0.3.0\nFORWARD_NODE_IP=true make deploy\n")),(0,r.kt)("h2",{id:"5-\u6ce8\u610f"},"5. \u6ce8\u610f"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u64cd\u4f5c\u4ec5\u9488\u5bf9Master\u8282\u70b9\uff0c\u5982\u679c\u96c6\u7fa4\u4e2d\u8fd8\u6709\u5176\u4ed6\u8282\u70b9\uff0c\u8fd8\u9700\u8981\u989d\u5916\u8c03\u6574\uff0c\u64cd\u4f5c\u65b9\u6cd5\u53ef\u4ee5\u53c2\u8003: ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/installation/yurtadm-join#2-%E5%9C%A8%E5%AD%98%E9%87%8F%E7%9A%84k8s%E8%8A%82%E7%82%B9%E4%B8%8A%E5%AE%89%E8%A3%85openyurt-node%E7%BB%84%E4%BB%B6"},"\u5728\u5b58\u91cf\u7684K8s\u8282\u70b9\u4e0a\u5b89\u88c5OpenYurt Node\u7ec4\u4ef6")))}c.isMDXComponent=!0}}]);