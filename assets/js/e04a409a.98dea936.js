"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6431],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>d});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=t.createContext({}),i=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=i(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(a),d=o,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return a?t.createElement(g,l(l({ref:n},c),{},{components:a})):t.createElement(g,l({ref:n},c))}));function d(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<r;i++)l[i]=a[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},46729:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var t=a(87462),o=(a(67294),a(3905));const r={title:"Edge Local Storage"},l=void 0,s={unversionedId:"user-manuals/storage/edge-local-storage",id:"version-v0.5.0/user-manuals/storage/edge-local-storage",title:"Edge Local Storage",description:"1. \u786e\u8ba4\u8282\u70b9\u4e0a\u7684\u672c\u5730\u5b58\u50a8\u8d44\u6e90",source:"@site/versioned_docs/version-v0.5.0/user-manuals/storage/edge-local-storage.md",sourceDirName:"user-manuals/storage",slug:"/user-manuals/storage/edge-local-storage",permalink:"/docs/v0.5.0/user-manuals/storage/edge-local-storage",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/storage/edge-local-storage.md",tags:[],version:"v0.5.0",lastUpdatedBy:"Peeknut",lastUpdatedAt:1642145865,formattedLastUpdatedAt:"Jan 14, 2022",frontMatter:{title:"Edge Local Storage"},sidebar:"version-v0.5.0/docs",previous:{title:"Service Topology",permalink:"/docs/v0.5.0/user-manuals/network/service-topology"},next:{title:"Node Pool Management",permalink:"/docs/v0.5.0/user-manuals/workload/node-pool-management"}},p={},i=[{value:"1. \u786e\u8ba4\u8282\u70b9\u4e0a\u7684\u672c\u5730\u5b58\u50a8\u8d44\u6e90",id:"1-\u786e\u8ba4\u8282\u70b9\u4e0a\u7684\u672c\u5730\u5b58\u50a8\u8d44\u6e90",level:3},{value:"2. \u521b\u5efaConfigmap",id:"2-\u521b\u5efaconfigmap",level:3},{value:"3. \u5b89\u88c5 node-resource-manager",id:"3-\u5b89\u88c5-node-resource-manager",level:3},{value:"4. \u5728\u96c6\u7fa4\u4e2d\u90e8\u7f72\u5e94\u7528\uff08\u4ee5lvm\u4e3a\u4f8b\uff09",id:"4-\u5728\u96c6\u7fa4\u4e2d\u90e8\u7f72\u5e94\u7528\u4ee5lvm\u4e3a\u4f8b",level:3},{value:"\u521b\u5efa storageclass",id:"\u521b\u5efa-storageclass",level:4},{value:"\u521b\u5efaPVC",id:"\u521b\u5efapvc",level:4},{value:"\u521b\u5efa\u5e94\u7528",id:"\u521b\u5efa\u5e94\u7528",level:4}],c={toc:i};function u(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-\u786e\u8ba4\u8282\u70b9\u4e0a\u7684\u672c\u5730\u5b58\u50a8\u8d44\u6e90"},"1. \u786e\u8ba4\u8282\u70b9\u4e0a\u7684\u672c\u5730\u5b58\u50a8\u8d44\u6e90"),(0,o.kt)("p",null,"\u786e\u8ba4\u8282\u70b9\u4e0a\u5df2\u7ecf\u5b58\u5728\u7684\u5757\u8bbe\u5907\u548c\u8282\u70b9\u7684\u5bf9\u5e94\u5173\u7cfb\u3002"),(0,o.kt)("h3",{id:"2-\u521b\u5efaconfigmap"},"2. \u521b\u5efaConfigmap"),(0,o.kt)("p",null,"\u5728\u96c6\u7fa4\u4e2d\u521b\u5efaConfigMap, \u8fd9\u91cc\u5c55\u793a\u4e00\u4e2a\u76f8\u5bf9\u901a\u7528\u7684 Configmap \u914d\u7f6e\uff0c\u5728\u8fd9\u4e2aConfigmap \u914d\u7f6e\u4e2d\u914d\u7f6e\u672c\u5730\u5b58\u50a8\u8d44\u6e90\u3002\u8be6\u7ec6\u8bf4\u660e\u8bf7\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/node-resource-manager/blob/main/docs/configmap.zh.md"},"\u6587\u6863")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: node-resource-topo\n  namespace: kube-system\ndata:\n  volumegroup: |-\n    volumegroup:\n    - name: volumegroup1\n      key: kubernetes.io/hostname\n      operator: In\n      value: cn-zhangjiakou.192.168.3.114\n      topology:\n        type: device\n        devices:\n        - /dev/vdb\n        - /dev/vdc\n  quotapath: |-\n    quotapath:\n    - name: /mnt/path1\n      key: kubernetes.io/hostname\n      operator: In\n      value: cn-beijing.192.168.3.35\n      topology:\n        type: device\n        options: prjquota\n        fstype: ext4\n        devices:\n        - /dev/vdb\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u914d\u7f6e\u53ef\u4ee5\u5b8c\u6210\u5982\u4e0b\u529f\u80fd;"),(0,o.kt)("p",null,"\u5728\u96c6\u7fa4\u4e2d\u7684 cn-zhangjiakou.192.168.3.114 \u8282\u70b9\u4e0a\u4f7f\u7528 /dev/vdb & /dev/vdc \u8fd9\u4e24\u4e2a\u5757\u8bbe\u5907\u521b\u5efa\u4e00\u4e2a lvm volumegroup\u3002\u8fd9\u91cc\u7684 devices \u53ef\u4ee5\u6dfb\u52a0\u4e0d\u5b58\u5728\u7684\u8def\u5f84\uff0c \u63d2\u4ef6\u5728\u8282\u70b9\u4e0a\u521d\u59cb\u5316\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u5ffd\u7565\u3002\n\u5728\u96c6\u7fa4\u4e2d\u7684 cn-beijing.192.168.3.35 \u8282\u70b9\u4e0a\u4f7f\u7528 /dev/vdb \u8fd9\u4e2a\u5757\u8bbe\u5907\u683c\u5f0f\u5316\u6210 prjquota \u683c\u5f0f\uff0c\u5e76\u6302\u8f7d\u5230/mnt/path1 \u8fd9\u4e2a\u8def\u5f84\u4e0a\uff0c\u540e\u7eed\u518d\u8fd9\u4e2a\u8def\u5f84\u4e0b\u9762\u521b\u5efa\u7684\u5b50\u76ee\u5f55\u90fd\u53ef\u4ee5\u8bbe\u5b9a\u6bcf\u4e2a\u76ee\u5f55\u7684\u6700\u5927quota\uff0c\u540c\u6837\uff0c \u8fd9\u91cc\u7684 devices \u91cc\u9762\u53ef\u4ee5\u586b\u5199\u4e0d\u5b58\u5728\u8def\u5f84\uff0c\u7ec4\u4ef6\u4f1a\u81ea\u52a8\u9009\u62e9\u7b2c\u4e00\u4e2a\u5b58\u5728\u7684\u5757\u8bbe\u5907\u5b8c\u6210\u683c\u5f0f\u5316\u548c\u7ed1\u5b9a\u7684\u64cd\u4f5c"),(0,o.kt)("h3",{id:"3-\u5b89\u88c5-node-resource-manager"},"3. \u5b89\u88c5 node-resource-manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/openyurtio/node-resource-manager/main/deploy/nrm.yaml\n")),(0,o.kt)("h3",{id:"4-\u5728\u96c6\u7fa4\u4e2d\u90e8\u7f72\u5e94\u7528\u4ee5lvm\u4e3a\u4f8b"},"4. \u5728\u96c6\u7fa4\u4e2d\u90e8\u7f72\u5e94\u7528\uff08\u4ee5lvm\u4e3a\u4f8b\uff09"),(0,o.kt)("h4",{id:"\u521b\u5efa-storageclass"},"\u521b\u5efa storageclass"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'cat <<EOF | kubectl apply -f -\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n    name: csi-local\nprovisioner: localplugin.csi.alibabacloud.com\nparameters:\n    volumeType: LVM\n    vgName: volumegroup1\n    fsType: ext4\n    lvmType: "striping"\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\nallowVolumeExpansion: true\nEOF\n')),(0,o.kt)("p",null,"parameters.vgName\u4e3a\u5728node-resource-topo configmap\u4e2d\u5b9a\u4e49\u7684VolumeGroup\u540d\u79f0volumegroup1\u3002"),(0,o.kt)("h4",{id:"\u521b\u5efapvc"},"\u521b\u5efaPVC"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"cat << EOF | kubectl apply -f -\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: lvm-pvc\n  annotations:\n    volume.kubernetes.io/selected-node: cn-zhangjiakou.192.168.3.114\nspec:\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 2Gi\n  storageClassName: csi-local\nEOF\n")),(0,o.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u5728 pvc \u7684 annotation \u4e2d\u6307\u5b9a\u5b58\u50a8\u6240\u5728\u7684\u8282\u70b9\uff0c"),(0,o.kt)("h4",{id:"\u521b\u5efa\u5e94\u7528"},"\u521b\u5efa\u5e94\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'cat << EOF | kubectl apply -f -\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: deployment-lvm\n  labels:\n    app: nginx\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.7.9\n        volumeMounts:\n          - name: lvm-pvc\n            mountPath: "/data"\n      volumes:\n        - name: lvm-pvc\n          persistentVolumeClaim:\n            claimName: lvm-pvc\nEOF\n')),(0,o.kt)("p",null,"\u4ee5\u4e0a\uff0c\u6211\u4eec\u5c31\u5b8c\u6210\u4e86\u672c\u5730\u5b58\u50a8\u7684\u57fa\u672c\u4f7f\u7528\uff0c Quotapath \u6a21\u5f0f\u57fa\u672c\u76f8\u540c\uff0c\u53ea\u9700\u6539\u9020 StorageClass \u5373\u53ef\u3002"))}u.isMDXComponent=!0}}]);