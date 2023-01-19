"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[8044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=u(n),y=r,d=m["".concat(s,".").concat(y)]||m[y]||c[y]||o;return n?a.createElement(d,p(p({ref:t},i),{},{components:n})):a.createElement(d,p({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var u=2;u<o;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"YurtAppSet"},p=void 0,l={unversionedId:"user-manuals/workload/yurt-app-set",id:"user-manuals/workload/yurt-app-set",title:"YurtAppSet",description:"\u5728\u4e0a\u4e00\u7bc7\u6587\u7ae0 \u4e2d\u6211\u4eec\u4ecb\u7ecd\u4e86\u8282\u70b9\u6c60\u7684\u4f7f\u7528\uff0c\u4e3b\u8981\u662f\u8282\u70b9\u6c60\u7684\u521b\u5efa\u548c\u7ba1\u7406\uff0c\u8fdb\u4e00\u6b65\uff0c\u6211\u4eec\u5f00\u53d1\u4e86\u57fa\u4e8e\u8282\u70b9\u6c60\u7684\u5e94\u7528\u5355\u5143\u5316\u90e8\u7f72\u80fd\u529b\uff0c\u63d0\u9ad8\u7528\u6237\u7684\u8fd0\u7ef4\u6548\u7387\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/workload/yurt-app-set.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/yurt-app-set",permalink:"/zh/docs/next/user-manuals/workload/yurt-app-set",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/yurt-app-set.md",tags:[],version:"current",lastUpdatedBy:"hxcGit",lastUpdatedAt:1656909461,formattedLastUpdatedAt:"2022\u5e747\u67084\u65e5",frontMatter:{title:"YurtAppSet"},sidebar:"docs",previous:{title:"\u8282\u70b9\u6c60\u7ba1\u7406",permalink:"/zh/docs/next/user-manuals/workload/node-pool-management"},next:{title:"YurtAppDaemon",permalink:"/zh/docs/next/user-manuals/workload/yurt-app-daemon"}},s={},u=[{value:"YurtAppSet\u7528\u6237\u624b\u518c",id:"yurtappset\u7528\u6237\u624b\u518c",level:2},{value:"\u521b\u5efaYurtAppSet",id:"\u521b\u5efayurtappset",level:3},{value:"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment",id:"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment",level:3},{value:"\u4e3aYurtAppSet\u6dfb\u52a0patch\u529f\u80fd",id:"\u4e3ayurtappset\u6dfb\u52a0patch\u529f\u80fd",level:3}],i={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/user-manuals/workload/node-pool-management"},"\u4e0a\u4e00\u7bc7\u6587\u7ae0")," \u4e2d\u6211\u4eec\u4ecb\u7ecd\u4e86\u8282\u70b9\u6c60\u7684\u4f7f\u7528\uff0c\u4e3b\u8981\u662f\u8282\u70b9\u6c60\u7684\u521b\u5efa\u548c\u7ba1\u7406\uff0c\u8fdb\u4e00\u6b65\uff0c\u6211\u4eec\u5f00\u53d1\u4e86\u57fa\u4e8e\u8282\u70b9\u6c60\u7684\u5e94\u7528\u5355\u5143\u5316\u90e8\u7f72\u80fd\u529b\uff0c\u63d0\u9ad8\u7528\u6237\u7684\u8fd0\u7ef4\u6548\u7387\u3002"),(0,r.kt)("p",null,"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u5c55\u793ayurt-app-manager\u5982\u4f55\u5e2e\u52a9\u7528\u6237\u7ba1\u7406\u5de5\u4f5c\u8d1f\u8f7d\u3002\u5047\u8bbe\u6211\u4eec\u5df2\u7ecf\u62e5\u6709\u4e00\u4e2a\u57fa\u4e8e\u539f\u751fkubernetes\u642d\u5efa\u8d77\u6765\u7684OpenYurt\u96c6\u7fa4\uff0c\u4e14\u81f3\u5c11\u6709\u4e24\u4e2a\u8282\u70b9\u3002"),(0,r.kt)("h2",{id:"yurtappset\u7528\u6237\u624b\u518c"},"YurtAppSet\u7528\u6237\u624b\u518c"),(0,r.kt)("h3",{id:"\u521b\u5efayurtappset"},"\u521b\u5efaYurtAppSet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"yurtappset_test.yaml"),"\u521b\u5efa\u4e00\u4e2aYurtAppSet")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppSet\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: yas-test\nspec:\n  selector:\n    matchLabels:\n      app: yas-test\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: yas-test\n      spec:\n        template:\n          metadata:\n            labels:\n              app: yas-test\n          spec:\n            containers:\n              - name: nginx\n                image: nginx:1.19.3\n  topology:\n    pools:\n    - name: beijing \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - beijing \n      replicas: 1\n    - name: hangzhou \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou \n      replicas: 2\n      tolerations:\n      - effect: NoSchedule\n        key: apps.openyurt.io/example\n        operator: Exists\n  revisionHistoryLimit: 5 \n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770bYurtAppSet")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get yas\n\nNAME       READY   WORKLOADTEMPLATE   AGE\nyas-test   3       Deployment         43s\n")),(0,r.kt)("h3",{id:"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment"},"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy\n\nNAME                      READY   UP-TO-DATE   AVAILABLE   AGE\nyas-test-beijing-k5st4    1/1     1            1           54s\nyas-test-hangzhou-2jkj5   2/2     2            2           54s\n$ kubectl get pod -l app=yas-test\n\nNAME                                       READY   STATUS    RESTARTS   AGE\nyas-test-beijing-k5st4-56bc98cc7d-h7h86    1/1     Running   0          72s\nyas-test-hangzhou-2jkj5-64588c484b-8mvn8   1/1     Running   0          72s\nyas-test-hangzhou-2jkj5-64588c484b-vx85t   1/1     Running   0          72s\n")),(0,r.kt)("h3",{id:"\u4e3ayurtappset\u6dfb\u52a0patch\u529f\u80fd"},"\u4e3aYurtAppSet\u6dfb\u52a0patch\u529f\u80fd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u6587\u4ef6yurtappset_test.yaml\u4e2d\u6dfb\u52a0patch\u5b57\u6bb5\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u6587\u4ef636\u523041\u884c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get yas yas-test -o yaml\n   \n  topology:\n    pools:\n    - name: beijing \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - beijing \n      replicas: 1\n      patch:\n        spec:\n          template:\n            spec:\n              containers:\n                - name: nginx\n                  image: nginx:1.19.0\n    - name: hangzhou \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou \n      replicas: 2\n      tolerations:\n  *** \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"patch\u80fd\u591f\u4f7f\u5f97\u7531YurtAppSet\u521b\u5efa\u7684\u4f4d\u4e8e\u5317\u4eac\u8282\u70b9\u6c60\u7684deployment\u548cpod\u4e2dnginx\u955c\u50cf\u7248\u672c\u4e3a1.19.0\uff0c\u800c\u5176\u4ed6\u5730\u533a\u7684nginx\u955c\u50cf\u7248\u672c\u4e3a1.19.3\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy yas-test-beijing-k5st4 -o yaml\n\ncontainers:\n  - image: nginx:1.19.0\n$ kubectl get deploy yas-test-hangzhou-2jkj5 -o yaml\n\ncontainers:\n  - image: nginx:1.19.3\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5220\u9664\u540e\uff0c\u6240\u6709\u7531YurtAppSet\u521b\u5efa\u7684pod\u53c8\u6062\u590d\u4f7f\u7528\u76f8\u540c\u7684\u955c\u50cfnginx1.19.3")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pod yas-test-beijing-k5st4-974b6958c-t2kfn -o yaml\n\ncontainers:\n  - image: nginx:1.19.3\n$ kubectl get pod yas-test-hangzhou-2jkj5-64588c484b-8mvn8 -o yaml\ncontainers:\n  - image: nginx:1.19.3\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ed3\u8bba\uff1aPatch\u529f\u80fd\u89e3\u51b3\u4e86nodepool\u5355\u5c5e\u6027\u7684\u5347\u7ea7\u548c\u5e94\u7528\u5b8c\u6574\u53d1\u5e03\u3002")))}c.isMDXComponent=!0}}]);