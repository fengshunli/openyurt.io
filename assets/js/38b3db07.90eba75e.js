"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[9465],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return g}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),p=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(r),g=o,h=d["".concat(i,".").concat(g)]||d[g]||u[g]||s;return r?t.createElement(h,l(l({ref:n},c),{},{components:r})):t.createElement(h,l({ref:n},c))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,l=new Array(s);l[0]=d;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<s;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3369:function(e,n,r){r.r(n),r.d(n,{assets:function(){return i},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return p}});var t=r(3117),o=(r(7294),r(3905));const s={title:"Edge Ingress"},l=void 0,a={unversionedId:"user-manuals/network/edge-ingress",id:"version-v0.6.0/user-manuals/network/edge-ingress",title:"Edge Ingress",description:"This document introduces how to access Edge services through Edge Ingress in Cloud Edge scenarios.",source:"@site/versioned_docs/version-v0.6.0/user-manuals/network/edge-ingress.md",sourceDirName:"user-manuals/network",slug:"/user-manuals/network/edge-ingress",permalink:"/docs/v0.6.0/user-manuals/network/edge-ingress",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/edge-ingress.md",tags:[],version:"v0.6.0",lastUpdatedBy:"zzguang",lastUpdatedAt:1650795156,formattedLastUpdatedAt:"4/24/2022",frontMatter:{title:"Edge Ingress"},sidebar:"version-v0.6.0/docs",previous:{title:"Service Topology",permalink:"/docs/v0.6.0/user-manuals/network/service-topology"},next:{title:"Edge Local Storage",permalink:"/docs/v0.6.0/user-manuals/storage/edge-local-storage"}},i={},p=[{value:"1.Enable the ingress feature on NodePools which provide your desired services",id:"1enable-the-ingress-feature-on-nodepools-which-provide-your-desired-services",level:2},{value:"2.Create and apply the ingress rule as K8S to access your desired services",id:"2create-and-apply-the-ingress-rule-as-k8s-to-access-your-desired-services",level:2}],c={toc:p};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document introduces how to access Edge services through Edge Ingress in Cloud Edge scenarios.\nUsers can access the Edge services from inside or outside of the NodePools, and for the condition\nfrom outside of the NodePools, only NodePort type ingress controller service is supported by now."),(0,o.kt)("p",null,"Generally, it only needs 2 steps to use the Edge Ingress feature:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enable the ingress feature on NodePools which provide your desired services."),(0,o.kt)("li",{parentName:"ol"},"Create and apply the ingress rule as K8S to access your desired services.")),(0,o.kt)("p",null,"Follow the steps below to try the Edge Ingress feature:"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"1enable-the-ingress-feature-on-nodepools-which-provide-your-desired-services"},"1.Enable the ingress feature on NodePools which provide your desired services"),(0,o.kt)("p",null,"YurtIngress operator is responsible for orchestrating multi ingress controllers to the corresponding NodePools.\nSuppose you have created 4 NodePools in your OpenYurt cluster: pool01, pool02, pool03, pool04, and you want to\nenable edge ingress feature on pool01 and pool03, you can create the YurtIngress CR as below:"),(0,o.kt)("p",null,"1). Create the YurtIngress CR yaml file:  "),(0,o.kt)("p",null,"1.1). A simple CR definition with some default configurations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  apiVersion: apps.openyurt.io/v1alpha1\n  kind: YurtIngress\n  metadata:\n    name: yurtingress-test\n  spec:\n      pools:\n        - name: pool01\n        - name: pool03\n")),(0,o.kt)("p",null,"The default nginx ingress controller replicas per pool is 1.",(0,o.kt)("br",{parentName:"p"}),"\n","The default nginx ingress controller image is controller:v0.48.1 from dockerhub.",(0,o.kt)("br",{parentName:"p"}),"\n","The default nginx ingress webhook certgen image is kube-webhook-certgen:v0.48.1 from dockerhub."),(0,o.kt)("p",null,"1.2). If users want to make personalized configurations about the default options, the YurtIngress CR can be defined as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  apiVersion: apps.openyurt.io/v1alpha1\n  kind: YurtIngress\n  metadata:\n    name: yurtingress-test\n  spec:\n      ingress_controller_replicas_per_pool: 2\n      ingress_controller_image: k8s.gcr.io/ingress-nginx/controller:v0.49.0\n      ingress_webhook_certgen_image: k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v0.49.0\n      pools:\n        - name: pool01\n          ingress_ips:\n            - xxx.xxx.xxx.xxx\n        - name: pool03\n")),(0,o.kt)("p",null,'"ingress_ips" represents the IPs if users want to expose the nginx ingress controller service through externalIPs for a specified nodepool.'),(0,o.kt)("p",null,"Notes:"),(0,o.kt)("p",null,"a). User can define different YurtIngress CRs for personalized configurations, for example set different ingress controller replicas\nfor different nodepools."),(0,o.kt)("p",null,'b). In spec, the "ingress_controller_replicas_per_pool" represents the ingress controller replicas deployed on every pool,\nIt is used for the HA usage scenarios.'),(0,o.kt)("p",null,'c). In spec, the "pools" represents the pools list on which you want to enable ingress feature.\nCurrently it supports the pool name and the nginx ingress controller service externalIPs.'),(0,o.kt)("p",null,"2). Apply the YurtIngress CR yaml file:",(0,o.kt)("br",{parentName:"p"}),"\n","Assume the file name is yurtingress-test.yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#kubectl apply -f yurtingress-test.yaml\nyurtingress.apps.openyurt.io/yurtingress-test created\n")),(0,o.kt)("p",null,"Then you can get the YurtIngress CR to check the status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#kubectl get ying\nNAME                  REPLICAS-PER-POOL   READYNUM   NOTREADYNUM   AGE\nyurtingress-test      1                   2          0             3m13s\n")),(0,o.kt)("p",null,"When the ingress controller is enabled successfully, a per-pool NodePort service is created to expose the ingress controller serivce:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#kubectl get svc -n ingress-nginx\ningress-nginx   pool01-ingress-nginx-controller   NodePort    192.167.107.123   <none>    80:32255/TCP,443:32275/TCP   53m\ningress-nginx   pool03-ingress-nginx-controller   NodePort    192.167.48.114    <none>    80:30531/TCP,443:30916/TCP   53m\n")),(0,o.kt)("p",null,"Notes:"),(0,o.kt)("p",null,'a). "ying" is the shortName of YurtIngress resource.'),(0,o.kt)("p",null,'b). When the "READYNUM" equals the pools number you defined in the YurtIngress CR, it represents the ingress feature is ready on all your spec pools.'),(0,o.kt)("p",null,'c). If the "NOTREADYNUM" is not 0 all the times, you can check the YurtIngress CR for the the status infomation.\nAlso you can check the corresponding deployments and pods to figure out why the ingress is not ready yet.'),(0,o.kt)("p",null,"d). For every NodePool which ingress is enabled successfully, it exposes a NodePort type service for users to access the nginx ingress controller."),(0,o.kt)("p",null,'e). When the ingress controllers are orchestrated to the specified NodePools, an "ingress-nginx" namespace will be created, and all the namespace\nrelated resources will be created under it.'),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"2create-and-apply-the-ingress-rule-as-k8s-to-access-your-desired-services"},"2.Create and apply the ingress rule as K8S to access your desired services"),(0,o.kt)("p",null,"When the step 1 above is done, you have successfully deployed the nginx ingress controller to the related NodePools, and the following\ningress user experience is totally consistent with K8S."),(0,o.kt)("p",null,"Suppose your app workload is deployed to several NodePools and it exposes a global service, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  apiVersion: apps/v1\n  kind: Deployment\n  metadata:\n    name: pool01-deployment\n    labels:\n      app: echo\n  spec:\n    replicas: 2\n    selector:\n      matchLabels:\n        app: echo\n    template:\n      metadata:\n        labels:\n          app: echo\n      spec:\n        containers:\n        - name: echo-app\n          image: hashicorp/http-echo\n          args:\n            - "-text=echo from nodepool pool01"\n          imagePullPolicy: IfNotPresent\n        nodeSelector:\n          apps.openyurt.io/nodepool: pool01\n  ---\n\n  apiVersion: apps/v1\n  kind: Deployment\n  metadata:\n    name: pool03-deployment\n    labels:\n      app: echo\n  spec:\n    replicas: 2\n    selector:\n      matchLabels:\n        app: echo\n    template:\n      metadata:\n        labels:\n          app: echo\n      spec:\n        containers:\n        - name: echo-app\n          image: hashicorp/http-echo\n          args:\n            - "-text=echo from nodepool pool03"\n          imagePullPolicy: IfNotPresent\n        nodeSelector:\n          apps.openyurt.io/nodepool: pool03\n  ---\n\n  kind: Service\n  apiVersion: v1\n  metadata:\n    name: echo-service\n  spec:\n    selector:\n      app: echo\n    ports:\n      - port: 5678\n')),(0,o.kt)("p",null,"If you want to access the service provided by pool01:"),(0,o.kt)("p",null,"1). Create the ingress rule yaml file:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  apiVersion: extensions/v1beta1\n  kind: Ingress\n  metadata:\n    name: ingress-pool01\n    annotations:\n      kubernetes.io/ingress.class: pool01\n      ingress.kubernetes.io/rewrite-target: /\n  spec:\n    rules:\n    - http:\n        paths:\n          - path: /echo\n            backend:\n              serviceName: echo-service\n              servicePort: 5678\n")),(0,o.kt)("p",null,"Notes:"),(0,o.kt)("p",null,"a). Ingress class decides which NodePool to provide the ingress capability, so you need to define the ingress class to your desired NodePool name."),(0,o.kt)("p",null,"b). The ingress CR definition may be different for different K8S versions, so you need ensure the CR definition matches with your cluster K8S version."),(0,o.kt)("p",null,"2). Apply the ingress rule yaml file:",(0,o.kt)("br",{parentName:"p"}),"\n","Assume the file name is ingress-myapp.yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  #kubectl apply -f ingress-myapp.yaml\n  ingress.extensions/ingress-myapp created\n")),(0,o.kt)("p",null,"After all the steps above are done successfully, you can verify the edge ingress feature through the ingress controller NodePort service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  #curl xxx:32255/echo\n\n  "xxx"     represents any NodeIP in NodePool pool01\n  "32255"   represents the NodePort which pool01 nginx ingress controller service exposes\n\n  It should return "echo from nodepool pool01" all the times.\n')))}u.isMDXComponent=!0}}]);