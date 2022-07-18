"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[24],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6057:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return c}});var a=t(3117),o=(t(7294),t(3905));const r={title:"Edge Local Storage"},l=void 0,i={unversionedId:"user-manuals/storage/edge-local-storage",id:"version-v0.7.0/user-manuals/storage/edge-local-storage",title:"Edge Local Storage",description:"1. Check the local storage resources on the node",source:"@site/versioned_docs/version-v0.7.0/user-manuals/storage/edge-local-storage.md",sourceDirName:"user-manuals/storage",slug:"/user-manuals/storage/edge-local-storage",permalink:"/docs/user-manuals/storage/edge-local-storage",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/storage/edge-local-storage.md",tags:[],version:"v0.7.0",lastUpdatedBy:"frank-huangyuqi",lastUpdatedAt:1657019976,formattedLastUpdatedAt:"7/5/2022",frontMatter:{title:"Edge Local Storage"},sidebar:"version-v0.7.0/docs",previous:{title:"Edge Ingress",permalink:"/docs/user-manuals/network/edge-ingress"},next:{title:"Node Pool Management",permalink:"/docs/user-manuals/workload/node-pool-management"}},s={},c=[{value:"1. Check the local storage resources on the node",id:"1-check-the-local-storage-resources-on-the-node",level:3},{value:"2. Create Configmap",id:"2-create-configmap",level:3},{value:"3. Install node-resource-manager",id:"3-install-node-resource-manager",level:3},{value:"4. Deploy application in cluster\uff08with lvm\uff09",id:"4-deploy-application-in-clusterwith-lvm",level:3},{value:"Create storageclass",id:"create-storageclass",level:4},{value:"Create PVC",id:"create-pvc",level:4},{value:"Create application",id:"create-application",level:4}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-check-the-local-storage-resources-on-the-node"},"1. Check the local storage resources on the node"),(0,o.kt)("p",null,"Check the corresponding Relation between existing block devices and nodes."),(0,o.kt)("h3",{id:"2-create-configmap"},"2. Create Configmap"),(0,o.kt)("p",null,"Create a ConfigMap in a cluster. Here is a relatively generic ConfigMap configuration that configures local storage resources. For details, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/node-resource-manager/blob/main/docs/configmap.zh.md"},"DOC")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: node-resource-topo\n  namespace: kube-system\ndata:\n  volumegroup: |-\n    volumegroup:\n    - name: volumegroup1\n      key: kubernetes.io/hostname\n      operator: In\n      value: cn-zhangjiakou.192.168.3.114\n      topology:\n        type: device\n        devices:\n        - /dev/vdb\n        - /dev/vdc\n  quotapath: |-\n    quotapath:\n    - name: /mnt/path1\n      key: kubernetes.io/hostname\n      operator: In\n      value: cn-beijing.192.168.3.35\n      topology:\n        type: device\n        options: prjquota\n        fstype: ext4\n        devices:\n        - /dev/vdb\n")),(0,o.kt)("p",null,"The previous configuration provides the following functionsThe previous configuration provides the following functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'In the test cluster,  we used two pieces of equipment : /dev/VDB & / dev/VDC  to create an LVM volumegroup on the worker node: "cn - zhangjiakou. 192.168.3.114 ".  Devices here can add paths that do not exist,  because the plug-in will automatically ignore this path during the node initialisation.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Meanwhile, we format the block device "/dev/vdb" to prjquota format on worker node "cn-beijing.192.168.3.35", and  mount it to path "/mnt/path1",  and then subdirectories created under this path can set the maximum quota for each directory. Devices here can also add paths that do not exist, the component will automatically select the first existing block device for formatting and binding. '))),(0,o.kt)("h3",{id:"3-install-node-resource-manager"},"3. Install node-resource-manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/openyurtio/node-resource-manager/main/deploy/nrm.yaml\n")),(0,o.kt)("h3",{id:"4-deploy-application-in-clusterwith-lvm"},"4. Deploy application in cluster\uff08with lvm\uff09"),(0,o.kt)("h4",{id:"create-storageclass"},"Create storageclass"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'cat <<EOF | kubectl apply -f -\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n    name: csi-local\nprovisioner: localplugin.csi.alibabacloud.com\nparameters:\n    volumeType: LVM\n    vgName: volumegroup1\n    fsType: ext4\n    lvmType: "striping"\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\nallowVolumeExpansion: true\nEOF\n')),(0,o.kt)("p",null,"Parameters. vgName is the VolumeGroup defined in node-resource-topo configmap, named volumegroup1."),(0,o.kt)("h4",{id:"create-pvc"},"Create PVC"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"cat << EOF | kubectl apply -f -\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: lvm-pvc\n  annotations:\n    volume.kubernetes.io/selected-node: cn-zhangjiakou.192.168.3.114\nspec:\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 2Gi\n  storageClassName: csi-local\nEOF\n")),(0,o.kt)("p",null,"You need to specify the node where the storage is located in the PVC's annotation,"),(0,o.kt)("h4",{id:"create-application"},"Create application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'cat << EOF | kubectl apply -f -\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: deployment-lvm\n  labels:\n    app: nginx\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.7.9\n        volumeMounts:\n          - name: lvm-pvc\n            mountPath: "/data"\n      volumes:\n        - name: lvm-pvc\n          persistentVolumeClaim:\n            claimName: lvm-pvc\nEOF\n')),(0,o.kt)("p",null,"Above, we have completed the basic use of local storage, Quotapath mode is basically the same, just need to change the StorageClass."))}p.isMDXComponent=!0}}]);