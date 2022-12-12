"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[9619],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},27886:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var a=t(87462),r=(t(67294),t(3905));const o={title:"Raven"},l=void 0,u={unversionedId:"user-manuals/network/raven",id:"user-manuals/network/raven",title:"Raven",description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u5b89\u88c5Raven\u548c\u4f7f\u7528Raven\u6765\u589e\u5f3a\u8fb9\u7f18\u96c6\u7fa4\u4e2d\u7684\u8fb9-\u8fb9\u548c\u8fb9-\u4e91\u7f51\u7edc\u6253\u901a\u80fd\u529b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/network/raven.md",sourceDirName:"user-manuals/network",slug:"/user-manuals/network/raven",permalink:"/zh/docs/next/user-manuals/network/raven",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/raven.md",tags:[],version:"current",lastUpdatedBy:"njucjc",lastUpdatedAt:1653538182,formattedLastUpdatedAt:"2022\u5e745\u670826\u65e5",frontMatter:{title:"Raven"},sidebar:"docs",previous:{title:"\u8282\u70b9\u81ea\u6cbb",permalink:"/zh/docs/next/user-manuals/autonomy/node-autonomy"},next:{title:"\u8fb9\u7f18Pod\u7f51\u7edc",permalink:"/zh/docs/next/user-manuals/network/edge-pod-network"}},i={},s=[{value:"1. \u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df",id:"1-\u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df",level:2},{value:"\u5b89\u88c5Raven Agent",id:"\u5b89\u88c5raven-agent",level:3},{value:"2. \u5982\u4f55\u4f7f\u7528",id:"2-\u5982\u4f55\u4f7f\u7528",level:2},{value:"2.1 Gateways",id:"21-gateways",level:3},{value:"2.2 \u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684Pod\u7f51\u7edc\u8054\u901a\u6027",id:"22-\u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684pod\u7f51\u7edc\u8054\u901a\u6027",level:3}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u5b89\u88c5Raven\u548c\u4f7f\u7528Raven\u6765\u589e\u5f3a\u8fb9\u7f18\u96c6\u7fa4\u4e2d\u7684\u8fb9-\u8fb9\u548c\u8fb9-\u4e91\u7f51\u7edc\u6253\u901a\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u4f60\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a\u8fb9\u7f18kubernetes\u96c6\u7fa4\uff0c\u8282\u70b9\u5206\u5e03\u5728\u4e0d\u540c\u7684\u7269\u7406\u533a\u57df\uff0c\u5e76\u4e14\u5df2\u7ecf\u5728\u8fd9\u4e2a\u96c6\u7fa4\u4e2d\u90e8\u7f72\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"Raven Controller Manager"),"\uff0c\u6709\u5173",(0,r.kt)("inlineCode",{parentName:"p"},"Raven Controller Manager"),"\u7684\u8be6\u7ec6\u4fe1\u606f\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/raven-controller-manager/blob/main/README.md"},"\u8fd9\u91cc"),"\u53ef\u4ee5\u627e\u5230\u3002"),(0,r.kt)("h2",{id:"1-\u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df"},"1. \u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df"),(0,r.kt)("p",null,"\u5982\u4e0b\u6240\u793a\uff0c\u5047\u8bbe\u4f60\u7684\u8fb9\u7f18\u96c6\u7fa4\u4e2d\u6709\u4e94\u4e2a\u8282\u70b9\uff0c\u5206\u5e03\u5728\u4e09\u4e2a\u4e0d\u540c\u7684\u7269\u7406\uff08\u7f51\u7edc\uff09\u533a\u57df\uff0c\u5176\u4e2d\u8282\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u8282\u70b9\u4e3a\u4e91\u7aef\u8282\u70b9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes -o wide\n\nNAME         STATUS   ROLES    AGE   VERSION   INTERNAL-IP    \nhhht-node1   Ready    <none>   20d   v1.16.2   10.48.115.9    \nhhht-node2   Ready    <none>   20d   v1.16.2   10.48.115.10\nmaster       Ready    master   20d   v1.16.2   10.48.115.8\nwlcb-node1   Ready    <none>   20d   v1.16.2   10.48.115.11\nwlcb-node2   Ready    <none>   20d   v1.16.2   10.48.115.12    \n")),(0,r.kt)("p",null,"\u6211\u4eec\u5bf9\u4f4d\u4e8e\u4e0d\u540c\u7269\u7406\uff08\u7f51\u7edc\uff09\u533a\u57df\u8282\u70b9\uff0c\u5206\u522b\u4f7f\u7528\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go"},"Gateway")," CR\u6765\u8fdb\u884c\u7ba1\u7406\u3002\u901a\u8fc7\u7ed9\u8282\u70b9\u6253\u6807\u7684\u65b9\u5f0f\uff0c\u6765\u6807\u8bc6\u8282\u70b9\u7531\u54ea\u4e2aGateway\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\uff0c\u6211\u4eec\u7ed9\u4f4d\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"cn-huhehaote"),"\u7684\u8282\u70b9\u6253",(0,r.kt)("inlineCode",{parentName:"p"},"gw-hhht"),"\u7684\u6807\u7b7e\uff0c\u6765\u8868\u660e\u8fd9\u4e9b\u8282\u70b9\u662f\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"gw-hhht"),"\u8fd9\u4e2aGateway CR\u6765\u7ba1\u7406\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label nodes hhht-node1 hhht-node2 raven.openyurt.io/gateway=gw-hhht\nhhht-node1 labeled\nhhht-node2 labeled\n")),(0,r.kt)("p",null,"\u540c\u6837\u5730\uff0c\u6211\u4eec\u5206\u522b\u4e3a\u4f4d\u4e8e\u4e91\u7aef\u8282\u70b9\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"cn-huhehaote"),"\u7684\u8282\u70b9\u6253\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},"gw-cloud"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"gw-wlcb"),"\u7684\u6807\u7b7e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label nodes master raven.openyurt.io/gateway=gw-cloud\nmaster labeled\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label nodes wlcb-node1 wlcb-node2 raven.openyurt.io/gateway=gw-wlcb\nwlcb-node1 labeled\nwlcb-node2 labeled\n")),(0,r.kt)("h3",{id:"\u5b89\u88c5raven-agent"},"\u5b89\u88c5Raven Agent"),(0,r.kt)("p",null,"\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5\u6700\u65b0\u7248\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openyurtio/raven.git\ncd raven\nmake deploy\n")),(0,r.kt)("p",null,"\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u68c0\u67e5\u76f8\u5e94\u7684Raven Agent\u7684Pod\u662f\u5426\u6210\u529f\u8fd0\u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -n kube-system | grep raven-agent-ds\nraven-agent-ds-2jw47                           1/1     Running   0          91s\nraven-agent-ds-bq8zc                           1/1     Running   0          91s\nraven-agent-ds-cj7k4                           1/1     Running   0          91s\nraven-agent-ds-p9fk9                           1/1     Running   0          91s\nraven-agent-ds-rlb9q                           1/1     Running   0          91s\n")),(0,r.kt)("h2",{id:"2-\u5982\u4f55\u4f7f\u7528"},"2. \u5982\u4f55\u4f7f\u7528"),(0,r.kt)("h3",{id:"21-gateways"},"2.1 Gateways"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u7684Gateway CR")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat <<EOF | kubectl apply -f -\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-hhht\nspec:\n  endpoints:\n    - nodeName: hhht-node1\n      underNAT: true\n    - nodeName: hhht-node2\n      underNAT: true\n      \n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-cloud\nspec:\n  endpoints:\n    - nodeName: master\n      underNAT: false\n      \n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-wlcb\nspec:\n  endpoints:\n    - nodeName: wlcb-node1\n      underNAT: true\n    - nodeName: wlcb-node2\n      underNAT: true\n\nEOF\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u5404\u4e2aGateway CR\u7684\u72b6\u6001")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get gateways\n\nNAME      ACTIVEENDPOINT\ngw-hhht   hhht-node1\ngw-master master\ngw-wlcb   wlcb-node1\n")),(0,r.kt)("h3",{id:"22-\u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684pod\u7f51\u7edc\u8054\u901a\u6027"},"2.2 \u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684Pod\u7f51\u7edc\u8054\u901a\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6d4b\u8bd5Pod")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: Pod\nmetadata:\n  name: fedora-1\nspec:\n  nodeName: hhht-node2\n  containers:\n    - name: fedora\n      image: njucjc/fedora:latest\n      imagePullPolicy: Always\n\n---\n\napiVersion: v1\nkind: Pod\nmetadata:\n  name: fedora-2\nspec:\n  nodeName: wlcb-node2\n  containers:\n    - name: fedora\n      image: njucjc/fedora:latest\n      imagePullPolicy: Always\n\n\nEOF\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u786e\u5b9a\u6d4b\u8bd5Pod\u6b63\u5e38\u8fd0\u884c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -o wide\nNAME       READY   STATUS    RESTARTS   AGE     IP            NODE                  NOMINATED NODE   READINESS GATES\nfedora-1   1/1     Running   0          46s     10.14.10.67   hhht-node2            <none>           <none>\nfedora-2   1/1     Running   0          46s     10.14.2.70    wlcb-node2            <none>           <none>\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u8de8\u7f51\u7edc\u57df\u7684Pod\u7f51\u7edc\u8054\u901a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl exec -it fedora-1 -- bash\n[root@fedora-1]# ping 10.14.2.70 -c 4\nPING 10.14.2.70 (10.14.2.70) 56(84) bytes of data.\n64 bytes from 10.14.2.70: icmp_seq=1 ttl=60 time=32.2 ms\n64 bytes from 10.14.2.70: icmp_seq=2 ttl=60 time=32.2 ms\n64 bytes from 10.14.2.70: icmp_seq=3 ttl=60 time=32.0 ms\n64 bytes from 10.14.2.70: icmp_seq=4 ttl=60 time=32.1 ms\n\n--- 10.14.2.70 ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss, time 3003ms\nrtt min/avg/max/mdev = 32.047/32.136/32.246/0.081 ms\n\n")))}d.isMDXComponent=!0}}]);