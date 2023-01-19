"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[3953],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(k,s(s({ref:n},p),{},{components:t})):o.createElement(k,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61964:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={title:"OpenYurt Precondition"},s=void 0,l={unversionedId:"installation/openyurt-prepare",id:"installation/openyurt-prepare",title:"OpenYurt Precondition",description:"1.Background",source:"@site/docs/installation/openyurt-prepare.md",sourceDirName:"installation",slug:"/installation/openyurt-prepare",permalink:"/docs/next/installation/openyurt-prepare",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-prepare.md",tags:[],version:"current",lastUpdatedBy:"lu chen",lastUpdatedAt:1662636520,formattedLastUpdatedAt:"Sep 8, 2022",frontMatter:{title:"OpenYurt Precondition"}},i={},c=[{value:"1.Background",id:"1background",level:2},{value:"2. Kube-Controller-Manager Adjustment",id:"2-kube-controller-manager-adjustment",level:2},{value:"3. Kube-apiserver Adjustment",id:"3-kube-apiserver-adjustment",level:2},{value:"4. CoreDNS Adjustment",id:"4-coredns-adjustment",level:2},{value:"4.1 Configure CoreDNS Service",id:"41-configure-coredns-service",level:3},{value:"4.2 Use CoreDNS DaemonSet",id:"42-use-coredns-daemonset",level:3},{value:"4.3 Scale Down CoreDNS Deployment Replicas",id:"43-scale-down-coredns-deployment-replicas",level:3},{value:"5. KubeProxy Adjustment",id:"5-kubeproxy-adjustment",level:2},{value:"5.1 KubeProxy Service Topology",id:"51-kubeproxy-service-topology",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1background"},"1.Background"),(0,r.kt)("p",null,"OpenYurt need to change kubernetes component configurations to adapt to edge environment. The components include:Kube-apiserver, Kube-Controller-Manager, CoreDNS,KubeProxy etc\u3002"),(0,r.kt)("h2",{id:"2-kube-controller-manager-adjustment"},"2. Kube-Controller-Manager Adjustment"),(0,r.kt)("p",null,"In order to make the yurt-controller-mamanger work properly, we need to turn off the default nodelifecycle controller in Kube-Controller-Manager.\nThe nodelifecycle controller can be disabled by restarting the kube-controller-manager with a proper ",(0,r.kt)("inlineCode",{parentName:"p"},"--controllers"),"option.\nAssume that the original option looks like ",(0,r.kt)("inlineCode",{parentName:"p"},"--controllers=*,bootstrapsigner,tokencleaner"),", to disable\nthe nodelifecycle controller, we change the option to ",(0,r.kt)("inlineCode",{parentName:"p"},"--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner"),"."),(0,r.kt)("p",null,"If the kube-controller-manager is deployed as a static pod on the master node, and you have the permission to log in to the master node,\nthen above operations can be done by revising the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/manifests/kube-controller-manager.yaml"),". After revision, the kube-controller-manager will be\nrestarted automatically."),(0,r.kt)("h2",{id:"3-kube-apiserver-adjustment"},"3. Kube-apiserver Adjustment"),(0,r.kt)("p",null,"To make sure kube-apiserver on the master node use ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname:port")," to access kubelet, and at the same time this hostname resolution request should be handled by ",(0,r.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-dns")," pod. We should apply some adjustments to kube-apiserver configurations."),(0,r.kt)("p",null,"We assume your kube-apiserver is installed through static pod(/etc/kubernetes/manifests/kube-apiserver.yaml)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'modifiy dnsPolicy="None"'),(0,r.kt)("li",{parentName:"ol"},"add dnsConfig configurations which set the ",(0,r.kt)("inlineCode",{parentName:"li"},"nameservers")," as the ",(0,r.kt)("inlineCode",{parentName:"li"},"clusterIP")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"yurt-tunnel-dns service")," (assumed to be ",(0,r.kt)("inlineCode",{parentName:"li"},"1.2.3.4")," here)"),(0,r.kt)("li",{parentName:"ol"},"modify startup parameters ",(0,r.kt)("inlineCode",{parentName:"li"},"--kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP"),", to make sure that Kube-apiserver prefers to use Hostname to access kubelet"),(0,r.kt)("li",{parentName:"ol"},"delete startup parameters ",(0,r.kt)("inlineCode",{parentName:"li"},"--kubelet-certificate-authority"),", to make sure that kube-apisever don't calibrate TLS certificate of yurt-tunnel-server (If you create your cluster from kubeadm, this step can be omitted since it don't have this settings by default)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ vi /etc/kubernetes/manifests/kube-apiserver.yaml\napiVersion: v1\nkind: Pod\n...\nspec:\n  dnsPolicy: "None" # 1. dnsPolicy\u4fee\u6539\u4e3aNone\n  dnsConfig:        # 2. \u589e\u52a0dnsConfig\u914d\u7f6e\n    nameservers:\n      - 1.2.3.4 # \u4f7f\u7528yurt-tunnel-dns service\u7684clusterIP\u66ff\u6362\n    searches:\n      - kube-system.svc.cluster.local\n      - svc.cluster.local\n      - cluster.local\n    options:\n      - name: ndots\n        value: "5"\n  containers:\n  - command:\n    - kube-apiserver\n  ...\n    - --kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP # 3. \u628aHostname\u653e\u5728\u7b2c\u4e00\u4f4d\n  ...\n')),(0,r.kt)("h2",{id:"4-coredns-adjustment"},"4. CoreDNS Adjustment"),(0,r.kt)("p",null,"In general, CoreDNS uses deployment as workload. But in cloud-edge scenario, domain name resolution could not cross ",(0,r.kt)("inlineCode",{parentName:"p"},"NodePool"),", so CoreDNS need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Daemonset")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtAppDaemon")," to deploy. At the same time, we should also set the topologyKeys of kube-dns service as NodePool."),(0,r.kt)("h3",{id:"41-configure-coredns-service"},"4.1 Configure CoreDNS Service"),(0,r.kt)("p",null,"Add annotation to coredns service, which could use openyurt\u2019s ability to choose local endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl annotate svc kube-dns -n kube-system openyurt.io/topologyKeys='openyurt.io/nodepool'\n")),(0,r.kt)("p",null,"The results of modifications:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    openyurt.io/topologyKeys: openyurt.io/nodepool\n    prometheus.io/port: "9153"\n    prometheus.io/scrape: "true"\n  creationTimestamp: "2022-02-14T10:13:37Z"\n  labels:\n    k8s-app: kube-dns\n    kubernetes.io/cluster-service: "true"\n    kubernetes.io/name: KubeDNS\n  name: kube-dns\n  namespace: kube-system\n  resourceVersion: "65474309"\n  selfLink: /api/v1/namespaces/kube-system/services/kube-dns\n  uid: ee23195f-44c3-4c70-99e2-aff4d5cf0ae1\nspec:\n  clusterIP: xx.xx.xx.xx\n  ports:\n  - name: dns\n    port: 53\n    protocol: UDP\n    targetPort: 53\n  - name: dns-tcp\n    port: 53\n    protocol: TCP\n    targetPort: 53\n  - name: metrics\n    port: 9153\n    protocol: TCP\n    targetPort: 9153\n  selector:\n    k8s-app: kube-dns\n  sessionAffinity: None\n  type: ClusterIP\n')),(0,r.kt)("h3",{id:"42-use-coredns-daemonset"},"4.2 Use CoreDNS DaemonSet"),(0,r.kt)("p",null,"The original CoreDNS is deployed by ",(0,r.kt)("inlineCode",{parentName:"p"},"DaemonSet"),", please modify the settings manually (the CoreDNS image version can be adjusted to demand)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  labels:\n    k8s-app: kube-dns\n  name: coredns\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n      k8s-app: kube-dns\n  template:\n    metadata:\n      labels:\n        k8s-app: kube-dns\n    spec:\n      containers:\n      - args:\n        - -conf\n        - /etc/coredns/Corefile\n        image: registry.aliyuncs.com/google_containers/coredns:1.7.0\n        livenessProbe:\n          failureThreshold: 5\n          httpGet:\n            path: /health\n            port: 8080\n            scheme: HTTP\n          initialDelaySeconds: 60\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 5\n        name: coredns\n        ports:\n        - containerPort: 53\n          name: dns\n          protocol: UDP\n        - containerPort: 53\n          name: dns-tcp\n          protocol: TCP\n        - containerPort: 9153\n          name: metrics\n          protocol: TCP\n        readinessProbe:\n          failureThreshold: 3\n          httpGet:\n            path: /ready\n            port: 8181\n            scheme: HTTP\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 1\n        resources:\n          limits:\n            memory: 170Mi\n          requests:\n            cpu: 100m\n            memory: 70Mi\n        securityContext:\n          allowPrivilegeEscalation: false\n          capabilities:\n            add:\n            - NET_BIND_SERVICE\n            drop:\n            - all\n          readOnlyRootFilesystem: true\n        volumeMounts:\n        - mountPath: /etc/coredns\n          name: config-volume\n          readOnly: true\n      dnsPolicy: Default\n      nodeSelector:\n        kubernetes.io/os: linux\n      priorityClassName: system-cluster-critical\n      serviceAccount: coredns\n      serviceAccountName: coredns\n      tolerations:\n      - operator: Exists\n      - key: CriticalAddonsOnly\n        operator: Exists\n      - effect: NoSchedule\n        key: node-role.kubernetes.io/master\n      volumes:\n      - configMap:\n          defaultMode: 420\n          items:\n          - key: Corefile\n            path: Corefile\n          name: coredns\n        name: config-volume\n")),(0,r.kt)("h3",{id:"43-scale-down-coredns-deployment-replicas"},"4.3 Scale Down CoreDNS Deployment Replicas"),(0,r.kt)("p",null,"Only support when CoreDNS is deployed by deployment workload."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl scale --replicas=0 deployment/coredns -n kube-system\n")),(0,r.kt)("h2",{id:"5-kubeproxy-adjustment"},"5. KubeProxy Adjustment"),(0,r.kt)("p",null,"The k8s cluster created by kubeadm will generate a kubeconfig for kubeproxy. If we do not modify default configuration like ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service-topology/"},(0,r.kt)("inlineCode",{parentName:"a"},"Service Topology"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/topology-aware-hints/"},(0,r.kt)("inlineCode",{parentName:"a"},"Topology Aware Hints")),", KubeProxy will use the kubeconfig to get all endpoints."),(0,r.kt)("p",null,"In cloud-edge scenario, edge node could not communicate with each other, so endpoints need implement nodepool topology."),(0,r.kt)("h3",{id:"51-kubeproxy-service-topology"},"5.1 KubeProxy Service Topology"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl edit cm -n kube-system kube-proxy\n")),(0,r.kt)("p",null,"Comment ",(0,r.kt)("inlineCode",{parentName:"p"},"config.conf")," file's property ",(0,r.kt)("inlineCode",{parentName:"p"},"clientConnection.kubeconfig"),"\uff0cso kube-proxy will use ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/access-api-from-pod/#directly-accessing-the-rest-api"},"InClusterConfig")," to access kube-apiserver. the modification result\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\ndata:\n  config.conf: |-\n    apiVersion: kubeproxy.config.k8s.io/v1alpha1\n    bindAddress: 0.0.0.0\n    bindAddressHardFail: false\n    clientConnection:\n      acceptContentTypes: ""\n      burst: 0\n      contentType: ""\n      #kubeconfig: /var/lib/kube-proxy/kubeconfig.conf\n      qps: 0\n    clusterCIDR: 100.64.0.0/10\n    configSyncPeriod: 0s\n// ...\n')))}u.isMDXComponent=!0}}]);