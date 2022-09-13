"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[1639],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=i(n),m=a,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(k,u(u({ref:t},s),{},{components:n})):r.createElement(k,u({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,u[1]=p;for(var i=2;i<l;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return i}});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u5728Kubernetes\u4e0a\u5b89\u88c5"},u=void 0,p={unversionedId:"installation/manually-setup",id:"version-v1.0/installation/manually-setup",title:"\u5728Kubernetes\u4e0a\u5b89\u88c5",description:"\u672c\u6559\u7a0b\u5c55\u793a\u4e86\u5982\u4f55\u624b\u52a8\u90e8\u7f72 OpenYurt \u96c6\u7fa4\u3002\u6211\u4eec\u5047\u8bbe\u7528\u6237\u5df2\u7ecf\u5b89\u88c5\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4\u3002\u5982\u679c\u60f3\u4ece\u5934\u5f00\u59cb\u521b\u5efaOpenYurt\u96c6\u7fa4\uff0c\u8bf7\u53c2\u8003yurtadm \u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/installation/manually-setup.md",sourceDirName:"installation",slug:"/installation/manually-setup",permalink:"/zh/docs/installation/manually-setup",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md",tags:[],version:"v1.0",lastUpdatedBy:"lu chen",lastUpdatedAt:1663058796,formattedLastUpdatedAt:"2022\u5e749\u670813\u65e5",frontMatter:{title:"\u5728Kubernetes\u4e0a\u5b89\u88c5"},sidebar:"version-v1.0/docs",previous:{title:"\u4ecb\u7ecd",permalink:"/zh/docs/installation/summary"},next:{title:"\u4ece\u96f6\u5f00\u59cb\u5b89\u88c5",permalink:"/zh/docs/installation/yurtadm-init"}},o={},i=[{value:"1 Kubernetes\u96c6\u7fa4\u73af\u5883",id:"1-kubernetes\u96c6\u7fa4\u73af\u5883",level:2},{value:"1.1 \u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e",id:"11-\u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e",level:3},{value:"2 OpenYurt\u5b89\u88c5\u51c6\u5907",id:"2-openyurt\u5b89\u88c5\u51c6\u5907",level:2},{value:"2.1 Kube-Controller-Manager\u8c03\u6574",id:"21-kube-controller-manager\u8c03\u6574",level:3},{value:"2.2 \u90e8\u7f72Yurt-Tunnel\u4e13\u7528DNS",id:"22-\u90e8\u7f72yurt-tunnel\u4e13\u7528dns",level:3},{value:"2.3 Kube-apiserver\u8c03\u6574",id:"23-kube-apiserver\u8c03\u6574",level:3},{value:"2.4 Addons\u8c03\u6574",id:"24-addons\u8c03\u6574",level:3},{value:"3 \u90e8\u7f72OpenYurt\u7684Control-Plane\u7ec4\u4ef6",id:"3-\u90e8\u7f72openyurt\u7684control-plane\u7ec4\u4ef6",level:2},{value:"3.1 \u90e8\u7f72<code>openyurt/yurt-app-manager</code>\u7ec4\u4ef6",id:"31-\u90e8\u7f72openyurtyurt-app-manager\u7ec4\u4ef6",level:3},{value:"3.1.1 \u5b89\u88c5 yurt-app-manager",id:"311-\u5b89\u88c5-yurt-app-manager",level:4},{value:"3.1.2 \u521b\u5efa\u8282\u70b9\u6c60",id:"312-\u521b\u5efa\u8282\u70b9\u6c60",level:4},{value:"3.1.3 \u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60",id:"313-\u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60",level:4},{value:"3.2 \u90e8\u7f72<code>openyurt/openyurt</code>\u7ec4\u4ef6",id:"32-\u90e8\u7f72openyurtopenyurt\u7ec4\u4ef6",level:3},{value:"4. \u6ce8\u610f",id:"4-\u6ce8\u610f",level:2}],s={toc:i};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6559\u7a0b\u5c55\u793a\u4e86\u5982\u4f55\u624b\u52a8\u90e8\u7f72 OpenYurt \u96c6\u7fa4\u3002\u6211\u4eec\u5047\u8bbe\u7528\u6237\u5df2\u7ecf\u5b89\u88c5\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4\u3002\u5982\u679c\u60f3\u4ece\u5934\u5f00\u59cb\u521b\u5efaOpenYurt\u96c6\u7fa4\uff0c\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/installation/yurtadm-init"},"yurtadm \u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"1-kubernetes\u96c6\u7fa4\u73af\u5883"},"1 Kubernetes\u96c6\u7fa4\u73af\u5883"),(0,a.kt)("p",null,"\u7528\u6237\u9700\u8981\u5148\u81ea\u884c\u51c6\u5907\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4(\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"},"kubeadm"),"\u5de5\u5177\u642d\u5efa)\uff0c\u672c\u6587\u6863\u4e2d\u4ee51\u8282\u70b9\u7684Kubernetes\u4e3a\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11\n")),(0,a.kt)("h3",{id:"11-\u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e"},"1.1 \u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e"),(0,a.kt)("p",null,"\u5f53\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"apiserver")," \u65ad\u5f00\u8fde\u63a5\u65f6\uff0c\u53ea\u6709\u8fd0\u884c\u5728\u8fb9\u7f18\u81ea\u6cbb\u7684\u8282\u70b9\u4e0a\u7684Pod\u624d\u4e0d\u4f1a\u88ab\u9a71\u9010\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u901a\u8fc7\u6253 ",(0,a.kt)("inlineCode",{parentName:"p"},"openyurt.io/is-edge-worker")," \u7684\u6807\u7b7e\u7684\u65b9\u5f0f\uff0c\u5c06\u8282\u70b9\u5206\u4e3a\u4e91\u7aef\u8282\u70b9\u548c\u8fb9\u7f18\u8282\u70b9\u3002\n\u6211\u4eec\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"us-west-1.192.168.0.87")," \u4f5c\u4e3a\u4e91\u7aef\u8282\u70b9\uff0c\u5c06\u6807\u7b7e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u503c\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node us-west-1.192.168.0.87 openyurt.io/is-edge-worker=false\nnode/us-west-1.192.168.0.87 labeled\n")),(0,a.kt)("h2",{id:"2-openyurt\u5b89\u88c5\u51c6\u5907"},"2 OpenYurt\u5b89\u88c5\u51c6\u5907"),(0,a.kt)("h3",{id:"21-kube-controller-manager\u8c03\u6574"},"2.1 Kube-Controller-Manager\u8c03\u6574"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1Yurt-Controller-Manager\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\uff0c\u9700\u8981\u5173\u95edKube-Controller-Manager\u4e2d\u7684NodeLifeCycle controller(\u76ee\u524d\u6b63\u5728\u4f18\u5316\uff0c\u540e\u7eedKube-Controller-Manager\u5c06\u65e0\u9700\u8c03\u6574)\u3002"),(0,a.kt)("p",null,"Kube-Controller-Manager\u914d\u7f6e\u8c03\u6574\u65b9\u6cd5\u5982\u4e0b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/installation/openyurt-prepare#2-kube-controller-manager%E8%B0%83%E6%95%B4"},"Kube-Controller-Manager"))),(0,a.kt)("h3",{id:"22-\u90e8\u7f72yurt-tunnel\u4e13\u7528dns"},"2.2 \u90e8\u7f72Yurt-Tunnel\u4e13\u7528DNS"),(0,a.kt)("p",null,"\u4e91\u7aef\u7ec4\u4ef6(\u5982Kube-apiserver, prometheus, metrics-server\u7b49)\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"hostname:port"),"\u8bbf\u95ee\u8fb9\u7f18\u65f6\uff0c\u4e3a\u4e86\u8ba9",(0,a.kt)("inlineCode",{parentName:"p"},"hostname"),"\u57df\u540d\u89e3\u6790\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server"),",\u4ece\u800c\u8ba9\u8bf7\u6c42\u65e0\u611f\u77e5\n\u7ecf\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server/yurt-tunnel-agent"),"\u5230\u8fbe\u8fb9\u7f18\u8282\u70b9\u3002\u9700\u8981\u786e\u4fdd\u7ec4\u4ef6\u7684DNS\u57df\u540d\u89e3\u6790\u8bf7\u6c42\u53d1\u9001\u5230Yurt-Tunnel\u4e13\u7528\u7684DNS(\u53d6\u540d\u4e3ayurt-tunnel-dns)\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5yurt-tunnel-dns:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f config/setup/yurt-tunnel-dns.yaml\n")),(0,a.kt)("p",null,"\u5f53\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl -n kube-system get po"),"\u7b49\u786e\u8ba4\u4e00\u4e0byurt-tunnel-dns\u7ec4\u4ef6\u662f\u5426\u6b63\u5e38\u542f\u52a8\u3002\u5e76\u4e14\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl -n kube-system get svc yurt-tunnel-dns"),"\u83b7\u53d6\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-dns service"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"clusterIP"),"."),(0,a.kt)("h3",{id:"23-kube-apiserver\u8c03\u6574"},"2.3 Kube-apiserver\u8c03\u6574"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1Master\u8282\u70b9\u4e0akube-apiserver\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"hostname:port"),"\u8bbf\u95eekubelet\uff0c\u540c\u65f6\u4fdd\u8bc1\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-dns pod"),"\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"hostname"),"\u8fdb\u884c\u57df\u540d\u89e3\u6790\u3002\u9700\u8981\u8c03\u6574kube-apiserver\u7ec4\u4ef6\u7684\u76f8\u5173\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"Kube-apiserver\u914d\u7f6e\u8c03\u6574\u65b9\u6cd5\u5982\u4e0b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/installation/openyurt-prepare#3-kube-apiserver%E8%B0%83%E6%95%B4"},"Kube-apiserver"))),(0,a.kt)("h3",{id:"24-addons\u8c03\u6574"},"2.4 Addons\u8c03\u6574"),(0,a.kt)("p",null,"kubeadm\u9ed8\u8ba4\u5b89\u88c5kube-proxy\u548cCoreDNS\u7684\u914d\u7f6e\u4e5f\u9700\u8981\u914d\u7f6e\uff0c\u4ece\u800c\u9002\u914d\u4e91\u8fb9\u534f\u540c\u573a\u666f\u3002\u8c03\u6574\u914d\u7f6e\u65b9\u6cd5\u5982\u4e0b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/installation/openyurt-prepare#4-coredns%E8%B0%83%E6%95%B4"},"CoreDNS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/installation/openyurt-prepare#5-kubeproxy%E8%B0%83%E6%95%B4"},"KubeProxy"))),(0,a.kt)("h2",{id:"3-\u90e8\u7f72openyurt\u7684control-plane\u7ec4\u4ef6"},"3 \u90e8\u7f72OpenYurt\u7684Control-Plane\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),"\u5b89\u88c5OpenYurt\u7ec4\u4ef6\u3002\u8bf7\u5148\u4fdd\u8bc1\u5728\u4f60\u7684\u73af\u5883\u4e2d\u5df2\u7ecf",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"\u5b89\u88c5helm"),"\u3002\u53e6\u5916\uff0c\u63a5\u4e0b\u6765\u8981\u7528\u5230\u7684\u6240\u6709helm charts\u90fd\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt-helm"},"openyurt-helm \u4ed3\u5e93"),"\u4e2d\u627e\u5230\u3002"),(0,a.kt)("h3",{id:"31-\u90e8\u7f72openyurtyurt-app-manager\u7ec4\u4ef6"},"3.1 \u90e8\u7f72",(0,a.kt)("inlineCode",{parentName:"h3"},"openyurt/yurt-app-manager"),"\u7ec4\u4ef6"),(0,a.kt)("h4",{id:"311-\u5b89\u88c5-yurt-app-manager"},"3.1.1 \u5b89\u88c5 yurt-app-manager"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/docs/core-concepts/yurt-app-manager"},"Yurt-App-Manager"),"\u662fOpenYurt\u96c6\u7fa4\u63d0\u4f9b\u8fb9\u7f18\u5355\u5143\u5316\u7ba1\u7406\u7684\u529f\u80fd\u7ec4\u4ef6\uff0c\u5168\u9762\u63d0\u5347\u5728\u8fb9\u7f18\u573a\u666f\u4e0b\u7684\u5e94\u7528\u90e8\u7f72\u6548\u7387\uff0c\u964d\u4f4e\u8fb9\u7f18\u8282\u70b9\u548c\u5e94\u7528\u8fd0\u7ef4\u7684\u590d\u6742\u5ea6\u3002\u901a\u8fc7helm\u5b89\u88c5\u8be5\u7ec4\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm install yurt-app-manager -n kube-system ./charts/yurt-app-manager/\n")),(0,a.kt)("p",null,"\u786e\u8ba4yurt-app-manager\u7ec4\u4ef6\u5df2\u7ecf\u6210\u529f\u521b\u5efa:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n kube-system | grep yurt-app-manager\n")),(0,a.kt)("h4",{id:"312-\u521b\u5efa\u8282\u70b9\u6c60"},"3.1.2 \u521b\u5efa\u8282\u70b9\u6c60"),(0,a.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u7ba1\u7406\u8282\u70b9\u548c\u8282\u70b9\u4e0a\u7684\u6d41\u91cf(\u5982Service\u6d41\u91cf\u62d3\u6251\u7ba1\u7406)\uff0c\u6211\u4eec\u63a8\u8350\u628a\u4e8c\u5c42\u7f51\u7edc\u4e92\u901a\u7684\u8282\u70b9\u653e\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u6c60\u3002\u672c\u4f8b\u4e2d\u4e3a\u4e91\u7aef\u521b\u5efa\u4e00\u4e2a\u8282\u70b9\u6c60\uff0c\u5177\u4f53\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: master\nspec:\n  type: Cloud\nEOF\n")),(0,a.kt)("h4",{id:"313-\u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60"},"3.1.3 \u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60"),(0,a.kt)("p",null,"\u5c06\u4e91\u7aef\u8282\u70b9\u52a0\u51653.1.2\u4e2d\u521b\u5efa\u7684\u4e91\u7aef\u8282\u70b9\u6c60\uff0c\u5177\u4f53\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node us-west-1.192.168.0.87 apps.openyurt.io/desired-nodepool=master\nnode/us-west-1.192.168.0.87 labeled\n")),(0,a.kt)("h3",{id:"32-\u90e8\u7f72openyurtopenyurt\u7ec4\u4ef6"},"3.2 \u90e8\u7f72",(0,a.kt)("inlineCode",{parentName:"h3"},"openyurt/openyurt"),"\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"openyurt/openyurt"),"\u4e2d\u7684\u7ec4\u4ef6\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/core-concepts/yurt-controller-manager"},"yurt-controller-manager"),": \u9632\u6b62apiserver\u5728\u65ad\u5f00\u8fde\u63a5\u65f6\u9a71\u9010\u8fd0\u884c\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684pod"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/core-concepts/yurttunnel"},"yurt-tunnel-server"),": \u5728\u4e91\u7aef\u6784\u5efa\u4e91\u8fb9\u96a7\u9053"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/core-concepts/yurttunnel"},"yurt-tunnel-agent"),": \u5728\u8fb9\u7f18\u4fa7\u6784\u5efa\u4e91\u8fb9\u96a7\u9053")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7helm\u5b89\u88c5\u4ee5\u4e0a\u7ec4\u4ef6:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm install openyurt -n kube-system ./charts/openyurt/\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"helm list -A"),"\u786e\u8ba4\u662f\u5426\u5b89\u88c5\u6210\u529f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm list -A \nNAME                NAMESPACE   REVISION    UPDATED                                 STATUS      CHART                   APP VERSION\nopenyurt            kube-system 1           2022-09-07 17:06:17.764754411 +0800 CST deployed    openyurt-1.0.0          1.0.0      \nyurt-app-manager    kube-system 1           2022-09-07 17:36:30.371904902 +0800 CST deployed    yurt-app-manager-0.1.2  0.8.0\n")),(0,a.kt)("h2",{id:"4-\u6ce8\u610f"},"4. \u6ce8\u610f"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u64cd\u4f5c\u4ec5\u9488\u5bf9Master\u8282\u70b9\uff0c\u5982\u679c\u96c6\u7fa4\u4e2d\u8fd8\u6709\u5176\u4ed6\u8282\u70b9\uff0c\u8fd8\u9700\u8981\u989d\u5916\u8c03\u6574\uff0c\u64cd\u4f5c\u65b9\u6cd5\u53ef\u4ee5\u53c2\u8003: ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/installation/yurtadm-join#2-%E5%9C%A8%E5%AD%98%E9%87%8F%E7%9A%84k8s%E8%8A%82%E7%82%B9%E4%B8%8A%E5%AE%89%E8%A3%85openyurt-node%E7%BB%84%E4%BB%B6"},"\u5728\u5b58\u91cf\u7684K8s\u8282\u70b9\u4e0a\u5b89\u88c5OpenYurt Node\u7ec4\u4ef6")))}d.isMDXComponent=!0}}]);