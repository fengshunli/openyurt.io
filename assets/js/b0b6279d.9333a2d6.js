"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[7316],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=o.createContext({}),i=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=i(e.components);return o.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(t),c=a,y=m["".concat(u,".").concat(c)]||m[c]||d[c]||r;return t?o.createElement(y,l(l({ref:n},s),{},{components:t})):o.createElement(y,l({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<r;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2656:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return i}});var o=t(3117),a=(t(7294),t(3905));const r={title:"UnitedDeployment"},l=void 0,p={unversionedId:"user-manuals/workload/uniteddeployment",id:"version-v0.6.0/user-manuals/workload/uniteddeployment",title:"UnitedDeployment",description:"\u5728\u4e0a\u4e00\u7bc7\u6587\u7ae0 \u4e2d\u6211\u4eec\u4ecb\u7ecd\u4e86\u8282\u70b9\u6c60\u7684\u4f7f\u7528\uff0c\u4e3b\u8981\u662f\u8282\u70b9\u6c60\u7684\u521b\u5efa\u548c\u7ba1\u7406\uff0c\u8fdb\u4e00\u6b65\uff0c\u6211\u4eec\u5f00\u53d1\u4e86\u57fa\u4e8e\u8282\u70b9\u6c60\u7684\u5e94\u7528\u5355\u5143\u5316\u90e8\u7f72\u80fd\u529b\uff0c\u63d0\u9ad8\u7528\u6237\u7684\u8fd0\u7ef4\u6548\u7387\u3002",source:"@site/versioned_docs/version-v0.6.0/user-manuals/workload/uniteddeployment.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/uniteddeployment",permalink:"/docs/v0.6.0/user-manuals/workload/uniteddeployment",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/uniteddeployment.md",tags:[],version:"v0.6.0",lastUpdatedBy:"Peeknut",lastUpdatedAt:1642145865,formattedLastUpdatedAt:"1/14/2022",frontMatter:{title:"UnitedDeployment"},sidebar:"version-v0.6.0/docs",previous:{title:"Node Pool Management",permalink:"/docs/v0.6.0/user-manuals/workload/node-pool-management"},next:{title:"YurtAppDaemon",permalink:"/docs/v0.6.0/user-manuals/workload/yurt-app-daemon"}},u={},i=[{value:"UnitedDeployment\u7528\u6237\u624b\u518c",id:"uniteddeployment\u7528\u6237\u624b\u518c",level:2},{value:"\u521b\u5efaUnitedDeployment",id:"\u521b\u5efauniteddeployment",level:3},{value:"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment",id:"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment",level:3},{value:"\u4e3aUnitedDeployment\u6dfb\u52a0patch\u529f\u80fd",id:"\u4e3auniteddeployment\u6dfb\u52a0patch\u529f\u80fd",level:3}],s={toc:i};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.6.0/user-manuals/workload/node-pool-management"},"\u4e0a\u4e00\u7bc7\u6587\u7ae0")," \u4e2d\u6211\u4eec\u4ecb\u7ecd\u4e86\u8282\u70b9\u6c60\u7684\u4f7f\u7528\uff0c\u4e3b\u8981\u662f\u8282\u70b9\u6c60\u7684\u521b\u5efa\u548c\u7ba1\u7406\uff0c\u8fdb\u4e00\u6b65\uff0c\u6211\u4eec\u5f00\u53d1\u4e86\u57fa\u4e8e\u8282\u70b9\u6c60\u7684\u5e94\u7528\u5355\u5143\u5316\u90e8\u7f72\u80fd\u529b\uff0c\u63d0\u9ad8\u7528\u6237\u7684\u8fd0\u7ef4\u6548\u7387\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u5c55\u793ayurt-app-manager\u5982\u4f55\u5e2e\u52a9\u7528\u6237\u7ba1\u7406\u5de5\u4f5c\u8d1f\u8f7d\u3002\u5047\u8bbe\u6211\u4eec\u5df2\u7ecf\u62e5\u6709\u4e00\u4e2a\u57fa\u4e8e\u539f\u751fkubernetes\u642d\u5efa\u8d77\u6765\u7684OpenYurt\u96c6\u7fa4\uff0c\u4e14\u81f3\u5c11\u6709\u4e24\u4e2a\u8282\u70b9\u3002"),(0,a.kt)("h2",{id:"uniteddeployment\u7528\u6237\u624b\u518c"},"UnitedDeployment\u7528\u6237\u624b\u518c"),(0,a.kt)("h3",{id:"\u521b\u5efauniteddeployment"},"\u521b\u5efaUnitedDeployment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5229\u7528deployment template\u521b\u5efa\u4e00\u4e2aUnitedDeployment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: UnitedDeployment\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: ud-test\nspec:\n  selector:\n    matchLabels:\n      app: ud-test\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: ud-test\n      spec:\n        template:\n          metadata:\n            labels:\n              app: ud-test\n          spec:\n            containers:\n              - name: nginx\n                image: nginx:1.19.3\n  topology:\n    pools:\n    - name: beijing \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - beijing \n      replicas: 1\n    - name: hangzhou \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou \n      replicas: 2\n      tolerations:\n      - effect: NoSchedule\n        key: apps.openyurt.io/example\n        operator: Exists\n  revisionHistoryLimit: 5 \nEOF\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770bUnitedDeployment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get ud\n\nNAME      READY   WORKLOADTEMPLATE   AGE\nud-test   3       Deployment         120m\n")),(0,a.kt)("h3",{id:"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment"},"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy\n\nNAME                     READY   UP-TO-DATE   AVAILABLE   AGE\nud-test-beijing-fp58z    1/1     1            1           122m\nud-test-hangzhou-xv454   2/2     2            2           122m\n$ kubectl get pod -l app=ud-test\n\n  NAME                                      READY   STATUS    RESTARTS   AGE\nud-test-beijing-fp58z-787d5b6b54-g4jk6    1/1     Running   0          100m\nud-test-hangzhou-xv454-5cd9c4f6b5-b5tsr   1/1     Running   0          124m\nud-test-hangzhou-xv454-5cd9c4f6b5-gmbgp   1/1     Running   0          124m\n")),(0,a.kt)("h3",{id:"\u4e3auniteddeployment\u6dfb\u52a0patch\u529f\u80fd"},"\u4e3aUnitedDeployment\u6dfb\u52a0patch\u529f\u80fd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u6587\u4ef6uniteddeployment_deployment_test.yaml\u4e2d\u6dfb\u52a0patch\u5b57\u6bb5\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u6587\u4ef636\u523041\u884c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get ud ud-test -o yaml\n   \n  topology:\n    pools:\n    - name: beijing \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - beijing \n      replicas: 1\n      patch:\n        spec:\n          template:\n            spec:\n              containers:\n                - name: nginx\n                  image: nginx:1.19.0\n    - name: hangzhou \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou \n      replicas: 2\n      tolerations:\n  *** \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"patch\u80fd\u591f\u4f7f\u5f97\u7531UnitedDeployment\u521b\u5efa\u7684\u4f4d\u4e8e\u5317\u4eac\u8282\u70b9\u6c60\u7684deployment\u548cpod\u4e2dnginx\u955c\u50cf\u7248\u672c\u4e3a1.19.0\uff0c\u800c\u5176\u4ed6\u5730\u533a\u7684nginx\u955c\u50cf\u7248\u672c\u4e3a1.19.3\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy ud-test-beijing-fp58z -o yaml\n\ncontainers:\n  - image: nginx:1.19.0\n$ kubectl get deploy ud-test-hangzhou-xv454 -o yaml\n\ncontainers:\n  - image: nginx:1.19.3\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5220\u9664\u540e\uff0c\u6240\u6709\u7531UnitedDeployment\u521b\u5efa\u7684pod\u53c8\u6062\u590d\u4f7f\u7528\u76f8\u540c\u7684\u955c\u50cfnginx1.19.3")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pod ud-test-beijing-fp58z-787d5b6b54-g4jk6 -o yaml\n\ncontainers:\n  - image: nginx:1.19.3\n$ kubectl get pod ud-test-hangzhou-xv454-5cd9c4f6b5-b5tsr -o yaml\ncontainers:\n  - image: nginx:1.19.3\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ed3\u8bba\uff1aPatch\u529f\u80fd\u89e3\u51b3\u4e86nodepool\u5355\u5c5e\u6027\u7684\u5347\u7ea7\u548c\u5e94\u7528\u5b8c\u6574\u53d1\u5e03\u3002")))}d.isMDXComponent=!0}}]);