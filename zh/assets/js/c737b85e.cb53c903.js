"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[3468],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(t),m=o,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(k,s(s({ref:n},u),{},{components:t})):r.createElement(k,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},339:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return i}});var r=t(3117),o=(t(7294),t(3905));const a={title:"OpenYurt \u5b89\u88c5\u524d\u7f6e\u6761\u4ef6"},s=void 0,l={unversionedId:"installation/openyurt-prepare",id:"version-v0.7.0/installation/openyurt-prepare",title:"OpenYurt \u5b89\u88c5\u524d\u7f6e\u6761\u4ef6",description:"1.\u80cc\u666f\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.7.0/installation/openyurt-prepare.md",sourceDirName:"installation",slug:"/installation/openyurt-prepare",permalink:"/zh/docs/installation/openyurt-prepare",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-prepare.md",tags:[],version:"v0.7.0",lastUpdatedBy:"huiwq1990",lastUpdatedAt:1657507317,formattedLastUpdatedAt:"2022/7/11",frontMatter:{title:"OpenYurt \u5b89\u88c5\u524d\u7f6e\u6761\u4ef6"},sidebar:"version-v0.7.0/docs",previous:{title:"\u521b\u5efaOpenYurt\u6d4b\u8bd5\u96c6\u7fa4(Yurtadm init/join)",permalink:"/zh/docs/installation/yurtadm-init-join"},next:{title:"\u4f7f\u7528 YurtCluster Operator \u90e8\u7f72\u8fb9\u7f18\u96c6\u7fa4",permalink:"/zh/docs/installation/yurtcluster"}},p={},i=[{value:"1.\u80cc\u666f\u8bf4\u660e",id:"1\u80cc\u666f\u8bf4\u660e",level:2},{value:"2. CoreDNS\u8c03\u6574",id:"2-coredns\u8c03\u6574",level:2},{value:"2.1 CoreDNS \u914d\u7f6e\u4fee\u6539",id:"21-coredns-\u914d\u7f6e\u4fee\u6539",level:3},{value:"2.2 CoreDNS \u652f\u6301\u670d\u52a1\u62d3\u6251",id:"22-coredns-\u652f\u6301\u670d\u52a1\u62d3\u6251",level:3},{value:"2.2 CoreDNS DaemonSet\u90e8\u7f72",id:"22-coredns-daemonset\u90e8\u7f72",level:3},{value:"2.4 \u51cf\u5c11CoreDNS Deployment \u526f\u672c\u6570",id:"24-\u51cf\u5c11coredns-deployment-\u526f\u672c\u6570",level:3},{value:"3. KubeProxy\u8c03\u6574",id:"3-kubeproxy\u8c03\u6574",level:2},{value:"KubeProxy\u652f\u6301\u6d41\u91cf\u62d3\u6251",id:"kubeproxy\u652f\u6301\u6d41\u91cf\u62d3\u6251",level:3},{value:"\u91cd\u542fKubeProxy Pod",id:"\u91cd\u542fkubeproxy-pod",level:3},{value:"KubeProxy\u529f\u80fd\u9a8c\u8bc1",id:"kubeproxy\u529f\u80fd\u9a8c\u8bc1",level:3}],u={toc:i};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1\u80cc\u666f\u8bf4\u660e"},"1.\u80cc\u666f\u8bf4\u660e"),(0,o.kt)("p",null,"OpenYurt\u4e3a\u9002\u5e94\u8fb9\u7aef\u73af\u5883\uff0c\u9700\u8981\u7528\u6237\u5bf9K8S\u505a\u4e00\u4e9b\u8c03\u6574\uff0c\u5982\uff1aCoreDNS\uff0cKubeProxy\u7b49\u3002"),(0,o.kt)("h2",{id:"2-coredns\u8c03\u6574"},"2. CoreDNS\u8c03\u6574"),(0,o.kt)("p",null,"\u4e00\u822c\u573a\u666f\u4e0b\uff0cCoreDNS\u662f\u4ee5Deployment\u5f62\u5f0f\u90e8\u7f72\uff0c\u5728\u8fb9\u7aef\u573a\u666f\u4e0b\uff0c\u57df\u540d\u89e3\u6790\u8bf7\u6c42\u65e0\u6cd5\u8de8",(0,o.kt)("inlineCode",{parentName:"p"},"NodePool"),"\uff0c\u6240\u4ee5CoreDNS\u9700\u8981\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"Daemonset"),"\u6216\u8005",(0,o.kt)("inlineCode",{parentName:"p"},"YurtAppDaemon"),"\u5f62\u5f0f\u90e8\u7f72\uff0c\u4ee5\u5b9e\u73b0\u5c06hostname\u89e3\u6790\u4e3atunnelserver\u5730\u5740\u3002"),(0,o.kt)("h3",{id:"21-coredns-\u914d\u7f6e\u4fee\u6539"},"2.1 CoreDNS \u914d\u7f6e\u4fee\u6539"),(0,o.kt)("p",null,"\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"p"},"kube-system")," ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace"),"\u4e0b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigMap")," ",(0,o.kt)("inlineCode",{parentName:"p"},"coredns"),"\uff0c\u589e\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"        hosts /etc/edge/tunnel-nodes { # \u589e\u52a0hosts\u63d2\u4ef6\n            reload 300ms\n            fallthrough\n        }\n")),(0,o.kt)("p",null,"\u4fee\u6539\u540e\u6548\u679c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\ndata:\n  Corefile: |\n    .:53 {\n        errors\n        log . {\n          class denial success\n\n        }\n        health {\n           lameduck 5s\n        }\n        ready\n        hosts /etc/edge/tunnel-nodes { # \u589e\u52a0hosts\u63d2\u4ef6\n            reload 300ms\n            fallthrough\n        }\n        kubernetes cluster.local in-addr.arpa ip6.arpa {\n           pods insecure\n           fallthrough in-addr.arpa ip6.arpa\n           ttl 30\n        }\n        prometheus :9153\n        forward . /etc/resolv.conf {\n           max_concurrent 1000\n        }\n        cache 30\n        loop\n        reload\n        loadbalance\n    }\nkind: ConfigMap\nmetadata:\n  name: coredns\n  namespace: kube-system\n")),(0,o.kt)("h3",{id:"22-coredns-\u652f\u6301\u670d\u52a1\u62d3\u6251"},"2.2 CoreDNS \u652f\u6301\u670d\u52a1\u62d3\u6251"),(0,o.kt)("p",null,"\u589e\u52a0annotation\uff0c\u5229\u7528openyurt\u7684\u673a\u5236\u5b9e\u73b0\u8fb9\u7f18\u670d\u52a1\u9009\u62e9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5229\u7528openyurt\u5b9e\u73b0endpoint\u8fc7\u6ee4\nkubectl annotate svc kube-dns -n kube-system openyurt.io/topologyKeys='openyurt.io/nodepool'\n")),(0,o.kt)("p",null,"\u4fee\u6539\u540e\u6548\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    openyurt.io/topologyKeys: openyurt.io/nodepool\n    prometheus.io/port: "9153"\n    prometheus.io/scrape: "true"\n  creationTimestamp: "2022-02-14T10:13:37Z"\n  labels:\n    k8s-app: kube-dns\n    kubernetes.io/cluster-service: "true"\n    kubernetes.io/name: KubeDNS\n  name: kube-dns\n  namespace: kube-system\n  resourceVersion: "65474309"\n  selfLink: /api/v1/namespaces/kube-system/services/kube-dns\n  uid: ee23195f-44c3-4c70-99e2-aff4d5cf0ae1\nspec:\n  clusterIP: 10.254.0.10\n  ports:\n  - name: dns\n    port: 53\n    protocol: UDP\n    targetPort: 53\n  - name: dns-tcp\n    port: 53\n    protocol: TCP\n    targetPort: 53\n  - name: metrics\n    port: 9153\n    protocol: TCP\n    targetPort: 9153\n  selector:\n    k8s-app: kube-dns\n  sessionAffinity: None\n  type: ClusterIP\n')),(0,o.kt)("h3",{id:"22-coredns-daemonset\u90e8\u7f72"},"2.2 CoreDNS DaemonSet\u90e8\u7f72"),(0,o.kt)("p",null,"\u5982\u679cCoreDNS\u539f\u672c\u4f7f\u7528DaemonSet\u90e8\u7f72\uff0c\u53ef\u4ee5\u624b\u5de5\u8fdb\u884c\u5982\u4e0b\u8c03\u6574\uff1a"),(0,o.kt)("p",null,"1\uff09\u53ef\u4ee5\u8c03\u6574CoreDNS\u7684\u955c\u50cf\u4e3a\u81ea\u5df1\u7684\u7248\u672c\uff1b"),(0,o.kt)("p",null,"2\uff09\u9700\u8981\u6302\u8f7dVolume ConfigMap ",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-nodes"),"\uff1b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  labels:\n    k8s-app: kube-dns\n  name: coredns\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n      k8s-app: kube-dns\n  template:\n    metadata:\n      labels:\n        k8s-app: kube-dns\n    spec:\n      containers:\n      - args:\n        - -conf\n        - /etc/coredns/Corefile\n        image: registry.aliyuncs.com/google_containers/coredns:1.7.0\n        livenessProbe:\n          failureThreshold: 5\n          httpGet:\n            path: /health\n            port: 8080\n            scheme: HTTP\n          initialDelaySeconds: 60\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 5\n        name: coredns\n        ports:\n        - containerPort: 53\n          name: dns\n          protocol: UDP\n        - containerPort: 53\n          name: dns-tcp\n          protocol: TCP\n        - containerPort: 9153\n          name: metrics\n          protocol: TCP\n        readinessProbe:\n          failureThreshold: 3\n          httpGet:\n            path: /ready\n            port: 8181\n            scheme: HTTP\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 1\n        resources:\n          limits:\n            memory: 170Mi\n          requests:\n            cpu: 100m\n            memory: 70Mi\n        securityContext:\n          allowPrivilegeEscalation: false\n          capabilities:\n            add:\n            - NET_BIND_SERVICE\n            drop:\n            - all\n          readOnlyRootFilesystem: true\n        volumeMounts:\n        - mountPath: /etc/coredns\n          name: config-volume\n          readOnly: true\n        - mountPath: /etc/edge\n          name: hosts\n          readOnly: true\n      dnsPolicy: Default\n      nodeSelector:\n        kubernetes.io/os: linux\n      priorityClassName: system-cluster-critical\n      serviceAccount: coredns\n      serviceAccountName: coredns\n      tolerations:\n      - operator: Exists\n      - key: CriticalAddonsOnly\n        operator: Exists\n      - effect: NoSchedule\n        key: node-role.kubernetes.io/master\n      volumes:\n      - configMap:\n          defaultMode: 420\n          items:\n          - key: Corefile\n            path: Corefile\n          name: coredns\n        name: config-volume\n      - configMap:\n          defaultMode: 420\n          name: yurt-tunnel-nodes\n        name: hosts\n")),(0,o.kt)("h3",{id:"24-\u51cf\u5c11coredns-deployment-\u526f\u672c\u6570"},"2.4 \u51cf\u5c11CoreDNS Deployment \u526f\u672c\u6570"),(0,o.kt)("p",null,"\u5982\u679ck8s\u4e0d\u662f\u7528Deployment\u90e8\u7f72\uff0c\u53ef\u4ee5\u4e0d\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl scale --replicas=0 deployment/coredns -n kube-system\n")),(0,o.kt)("h2",{id:"3-kubeproxy\u8c03\u6574"},"3. KubeProxy\u8c03\u6574"),(0,o.kt)("p",null,"kubeadm\u90e8\u7f72\u7684k8s\u96c6\u7fa4\u4f1a\u4e3aKubeProxy\u751f\u6210kubeconfig\u914d\u7f6e\uff0c\u5728\u4e0d\u914d\u7f6e",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service-topology/"},(0,o.kt)("inlineCode",{parentName:"a"},"Service Topology"))," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/topology-aware-hints/"},(0,o.kt)("inlineCode",{parentName:"a"},"Topology Aware Hints"))," \u60c5\u51b5\u4e0b\uff0cKubeProxy\u4f7f\u7528\u8fd9\u4e2akubeconfig\u62ff\u5230\u7684endpoints\u662f\u5168\u91cf\u7684\u3002"),(0,o.kt)("p",null,"\u4e91\u8fb9\u7aef\u573a\u666f\u4e0b\uff0c\u8fb9\u7f18\u8282\u70b9\u95f4\u5f88\u6709\u53ef\u80fd\u65e0\u6cd5\u4e92\u901a\uff0c\u56e0\u6b64\u9700\u8981endpoints\u57fa\u4e8enodepool\u8fdb\u884c\u62d3\u6251\u3002\u76f4\u63a5\u5c06kube-proxy\u7684kubeconfig\u914d\u7f6e\u5220\u9664\uff0c\u5c06apiserver\u8bf7\u6c42\u7ecf\u8fc7yurthub\u5373\u53ef\u89e3\u51b3\u670d\u52a1\u62d3\u6251\u95ee\u9898\u3002"),(0,o.kt)("h3",{id:"kubeproxy\u652f\u6301\u6d41\u91cf\u62d3\u6251"},"KubeProxy\u652f\u6301\u6d41\u91cf\u62d3\u6251"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl edit cm -n kube-system kube-proxy\n")),(0,o.kt)("p",null,"\u6ce8\u91ca\u6389",(0,o.kt)("inlineCode",{parentName:"p"},"config.conf"),"\u6587\u4ef6\u4e0b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"clientConnection.kubeconfig"),"\uff0c\u4fee\u6539\u5b8c\u540e\u6548\u679c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\ndata:\n  config.conf: |-\n    apiVersion: kubeproxy.config.k8s.io/v1alpha1\n    bindAddress: 0.0.0.0\n    bindAddressHardFail: false\n    clientConnection:\n      acceptContentTypes: ""\n      burst: 0\n      contentType: ""\n      #kubeconfig: /var/lib/kube-proxy/kubeconfig.conf\n      qps: 0\n    clusterCIDR: 100.64.0.0/10\n    configSyncPeriod: 0s\n// \u7701\u7565\n')),(0,o.kt)("h3",{id:"\u91cd\u542fkubeproxy-pod"},"\u91cd\u542fKubeProxy Pod"),(0,o.kt)("p",null,"\u4e3a\u4f7f\u4e0a\u8ff0\u914d\u7f6e\u751f\u6548\uff0c\u9700\u8981\u91cd\u542fkubeproxy\u7684pod\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u7ebf\u4e0a\u73af\u5883\u8c28\u614e\u64cd\u4f5c"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete pod -n kube-system -l k8s-app=kube-proxy\n")),(0,o.kt)("h3",{id:"kubeproxy\u529f\u80fd\u9a8c\u8bc1"},"KubeProxy\u529f\u80fd\u9a8c\u8bc1"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7KubeProxy\u7684\u65e5\u5fd7\u8fdb\u884c\u9a8c\u8bc1\u662f\u5426\u4fee\u6539\u6210\u529f\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u4e3a\u9632\u6b62\u65e5\u5fd7\u8fc7\u591a\uff0c\u751f\u4ea7\u73af\u5883\u8c28\u614e\u4f7f\u7528"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl edit ds -n kube-system kube-proxy\n")),(0,o.kt)("p",null,"\u5728command\u540e\u9762\u8ffd\u52a0\u53c2\u6570",(0,o.kt)("inlineCode",{parentName:"p"},"--v=6"),"\uff0c\u4fee\u6539\u540e\u6548\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  annotations:\n    deprecated.daemonset.template.generation: "3"\n  creationTimestamp: "2022-05-10T06:27:27Z"\n  generation: 3\n  labels:\n    k8s-app: kube-proxy\n  name: kube-proxy\n  namespace: kube-system\n  resourceVersion: "5377081"\n  uid: 0f8eccdd-d26f-48f0-8401-8d762a630dc8\nspec:\n  revisionHistoryLimit: 10\n  selector:\n    matchLabels:\n      k8s-app: kube-proxy\n  template:\n    metadata:\n      creationTimestamp: null\n      labels:\n        k8s-app: kube-proxy\n    spec:\n      containers:\n      - command:\n        - /usr/local/bin/kube-proxy\n        - --config=/var/lib/kube-proxy/config.conf\n        - --hostname-override=$(NODE_NAME)\n        - --v=6\n')),(0,o.kt)("p",null,"\u68c0\u67e5KubeProxy\u7684Pod\u8f93\u51fa\u65e5\u5fd7\uff0c\u5982\u679capiserver\u5730\u5740\u662f\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"169.254.2.1:10268"),"\u4ee3\u8868\u4fee\u6539\u6210\u529f\u3002\u65e5\u5fd7\u8f93\u51fa\u6837\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"I0521 02:57:01.986790       1 round_trippers.go:454] GET https://169.254.2.1:10268/api/v1/nodes/jd-sh-qianyi-test-02 200 OK in 12 milliseconds\nI0521 02:57:02.021682       1 round_trippers.go:454] POST https://169.254.2.1:10268/api/v1/namespaces/default/events 201 Created in 4 milliseconds                                                       \n")))}c.isMDXComponent=!0}}]);