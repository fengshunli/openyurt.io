"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[5585],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),u=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,g=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},84233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={title:"EdgeX Foundry"},l=void 0,i={unversionedId:"user-manuals/iot/edgex-foundry",id:"version-v1.1/user-manuals/iot/edgex-foundry",title:"EdgeX Foundry",description:"This document demonstrates how to install Yurt-Device-Controller,Yurt-EdgeX-Manager, and manage edge leaf devices via cloud native style based on virtual devices.",source:"@site/versioned_docs/version-v1.1/user-manuals/iot/edgex-foundry.md",sourceDirName:"user-manuals/iot",slug:"/user-manuals/iot/edgex-foundry",permalink:"/docs/user-manuals/iot/edgex-foundry",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/iot/edgex-foundry.md",tags:[],version:"v1.1",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1669032432,formattedLastUpdatedAt:"Nov 21, 2022",frontMatter:{title:"EdgeX Foundry"},sidebar:"version-v1.1/docs",previous:{title:"Prometheus",permalink:"/docs/user-manuals/monitoring/prometheus"},next:{title:"YurtHub Performance Test",permalink:"/docs/test-report/yurthub-performance-test"}},d={},u=[],s={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document demonstrates how to install Yurt-Device-Controller,Yurt-EdgeX-Manager, and manage edge leaf devices via cloud native style based on virtual devices."),(0,a.kt)("p",null,"For more details about these two components, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurt-device-controller"},"Yurt-Device-Controller"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurt-edgex-manager"},"Yurt-EdgeX-Manager")),(0,a.kt)("p",null,"If you don't have an OpenYurt on hand, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/yurtctl.md"},"yurtctl")," to create one or convert from an exist Kubernetes cluster."),(0,a.kt)("h1",{id:"environment"},"Environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"OpenYurt v0.5.0+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You should first install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurt-app-manager"},"Yurt-app-manager"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Deploy CoreDNS for every edge node")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set ServiceTopology to ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes.io/hostname")," for CoreDNS service. For details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://openyurt.io/docs/user-manuals/network/service-topology"},"ServiceTopology")))),(0,a.kt)("h1",{id:"1-install-yurt-edgex-manager-and-create-an-edgex-insatnce"},"1. install yurt-edgex-manager and create an EdgeX insatnce"),(0,a.kt)("p",null,"install yurt-edgex-manager"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://github.com/openyurtio/yurt-edgex-manager/releases/download/v0.2.0/yurt-edgex-manager.yaml\n\n# check status of yurt-edgex-manager\n$ kubectl get pods -n edgex-system |grep edgex\nedgex-controller-manager-6c99fd9f9f-b9nnk   2/2     Running   0          6d22h\n")),(0,a.kt)("p",null,"Create a nodepool named hangzhou, join node into this nodepool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ export WORKER_NODEPOOL="hangzhou"\n$ export EDGE_NODE="node1"\n\n# create nodepool hangzhou\n$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: $WORKER_NODEPOOL\nspec:\n  type: Edge\nEOF\n\n# join edge node into nodepool hangzhou\n$ kubectl label node $EDGE_NODE apps.openyurt.io/desired-nodepool=hangzhou\n\n# check node status\n$ kubectl get nodepool\nNAME      TYPE   READYNODES   NOTREADYNODES   AGE\nhangzhou   Edge   0            1               6d22h\n')),(0,a.kt)("p",null,"create EdgeX Foundry instance in nodepool hangzhou and deploy ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/edgexfoundry/device-virtual-go"},"edgex-device-virtual")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: device.openyurt.io/v1alpha1\nkind: EdgeX\nmetadata:\n  name: edgex-sample-beijing\nspec:\n  version: jakarta\n  poolname: hangzhou\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    org.edgexfoundry.service: edgex-device-virtual\n  name: edgex-device-virtual\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      org.edgexfoundry.service: edgex-device-virtual\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        org.edgexfoundry.service: edgex-device-virtual\n    spec:\n      hostname: edgex-device-virtual\n      nodeSelector:\n        apps.openyurt.io/nodepool: hangzhou\n      containers:\n      - name: edgex-device-virtual\n        image: openyurt/device-virtual:2.1.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 59900\n          name: "tcp-59900"\n          protocol: TCP\n        env:\n        - name: MESSAGEQUEUE_HOST\n          value: edgex-redis\n        - name: SERVICE_HOST\n          value: edgex-device-virtual\n        envFrom:\n        - configMapRef:\n            name: common-variables\n        startupProbe:\n          tcpSocket:\n            port: 59900\n          periodSeconds: 1\n          failureThreshold: 120\n        livenessProbe:\n          tcpSocket:\n            port: 59900\n      restartPolicy: Always\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    org.edgexfoundry.service: edgex-device-virtual\n  name: edgex-device-virtual\nspec:\n  ports:\n  - name: "tcp-59900"\n    port: 59900\n    protocol: TCP\n    targetPort: 59900\n  selector:\n    org.edgexfoundry.service: edgex-device-virtual\n  type: NodePort\n')),(0,a.kt)("p",null,"check EdgeX instance status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get edgex\nNAME                    READY   SERVICE   READYSERVICE   DEPLOYMENT   READYDEPLOYMENT\nedgex-sample-hangzhou   true    9         9              9            9\n")),(0,a.kt)("h1",{id:"2-install-yurt-device-controller"},"2. install yurt-device-controller"),(0,a.kt)("p",null,"install CRDs of yurt-device-controller"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://raw.githubusercontent.com/openyurtio/yurt-device-controller/main/config/setup/crd.yaml\n")),(0,a.kt)("p",null,"use UnitedDeployment to deploy yurt-device-controller instance in nodepool hangzhou. It should be pointed out that we use cluster-admin ClusterRole just for demo purpose"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.openyurt.io/v1alpha1\nkind: UnitedDeployment\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: ud-device\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      app: ud-device\n  topology:\n    pools:\n      - name: hangzhou\n        nodeSelectorTerm:\n          matchExpressions:\n            - key: apps.openyurt.io/nodepool\n              operator: In\n              values:\n                - hangzhou\n        replicas: 1\n        tolerations:\n          - operator: Exists\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        creationTimestamp: null\n        labels:\n          app: ud-device\n      spec:\n        selector:\n          matchLabels:\n            app: ud-device\n        strategy: {}\n        template:\n          metadata:\n            creationTimestamp: null\n            labels:\n              app: ud-device\n              control-plane: controller-manager\n          spec:\n            containers:\n              - args:\n                  - --health-probe-bind-address=:8081\n                  - --metrics-bind-address=127.0.0.1:8080\n                  - --leader-elect=false\n                  - --namespace=default\n                  - --v=5\n                command:\n                  - /yurt-device-controller\n                image: openyurt/yurt-device-controller:v0.2.0\n                imagePullPolicy: IfNotPresent\n                livenessProbe:\n                  failureThreshold: 3\n                  httpGet:\n                    path: /healthz\n                    port: 8081\n                    scheme: HTTP\n                  initialDelaySeconds: 15\n                  periodSeconds: 20\n                  successThreshold: 1\n                  timeoutSeconds: 1\n                name: manager\n                readinessProbe:\n                  failureThreshold: 3\n                  httpGet:\n                    path: /readyz\n                    port: 8081\n                    scheme: HTTP\n                  initialDelaySeconds: 5\n                  periodSeconds: 10\n                  successThreshold: 1\n                  timeoutSeconds: 1\n                resources:\n                  limits:\n                    cpu: 100m\n                    memory: 512Mi\n                  requests:\n                    cpu: 100m\n                    memory: 512Mi\n                securityContext:\n                  allowPrivilegeEscalation: false\n            dnsPolicy: ClusterFirst\n            restartPolicy: Always\n            securityContext:\n              runAsUser: 65532\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: ud-rolebinding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n  - kind: ServiceAccount\n    name: default\n    namespace: default\n')),(0,a.kt)("p",null,"check whether yurt-device-controller has been deployed successful"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod |grep yurt-device-controller\nyurt-device-controller-xxxxxx-sf7xz-79c9cbf4b7-mbfds             1/1     Running   0          6d22h\n")),(0,a.kt)("h1",{id:"3-check-virtual-devices-synced-from-edgex"},"3. Check virtual devices synced from EdgeX"),(0,a.kt)("p",null,"The device-virtual-go driver will automatically create and register 5 virtual devices of different kinds upon start, yurt-device-controller will then sync them to OpenYurt. You can use kubectl to check it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get device\nNAME                                     NODEPOOL   SYNCED   AGE\nhangzhou-random-binary-device            hangzhou   true     19h\nhangzhou-random-boolean-device           hangzhou   true     19h\nhangzhou-random-float-device             hangzhou   true     19h\nhangzhou-random-integer-device           hangzhou   true     19h\nhangzhou-random-unsignedinteger-device   hangzhou   true     19h\n")),(0,a.kt)("h1",{id:"4-uninstall-and-cleanup"},"4. Uninstall and cleanup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ export WORKER_NODEPOOL="hangzhou"\n$ export EDGE_NODE="node1"\n\n# 1.1 delete all device, deviceservice, deviceprofile\u8d44\u6e90\n$ kubectl delete device --all\n$ kubectl delete deviceprofile --all\n$ kubectl delete deviceservice --all\n\n# 1.2 uninstall yurt-device-controller\n$ kubectl delete uniteddeployment yurt-device-controller\n$ kubectl delete clusterrolebinding ud-rolebinding\n\n# 1.3 delete CRDs of yurt-device-controller\n$ kubectl delete -f https://raw.githubusercontent.com/openyurtio/yurt-device-controller/main/config/setup/crd.yaml\n\n# 2.1 delete EdgeX instance\n$ kubectl delete edgex --all\n\n# 2.2 uninstall yurt-edgex-manager\n$ kubectl delete -f https://github.com/openyurtio/yurt-edgex-manager/releases/download/v0.2.0/yurt-edgex-manager.yaml\n\n# \uff08optional\uff09\n# 3.1 remove node from nodepool\n$ kubectl label node $EDGE_NODE apps.openyurt.io/desired-nodepool-\n# 3.2 delete nodepool\n$ kubectl delete nodepool $WORKER_NODEPOOL\n')))}c.isMDXComponent=!0}}]);