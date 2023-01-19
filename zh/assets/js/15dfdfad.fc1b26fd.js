"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[7389],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(k,i(i({ref:n},s),{},{components:t})):o.createElement(k,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59757:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={title:"\u5982\u4f55\u4f7f\u7528`kubeconfig`\u4f53\u9a8cOpenYurt\u7684\u80fd\u529b"},i=void 0,p={unversionedId:"installation/openyurt-experience-center/kubeconfig",id:"version-v0.6.0/installation/openyurt-experience-center/kubeconfig",title:"\u5982\u4f55\u4f7f\u7528`kubeconfig`\u4f53\u9a8cOpenYurt\u7684\u80fd\u529b",description:"\u8fd9\u4efd\u6587\u6863\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u4f53\u9a8c\u4e2d\u5fc3\u4e2d\u63d0\u4f9b\u7684 kubeconfig \u4f53\u9a8c OpenYurt \u7684\u5355\u5143\u5316\u90e8\u7f72\u80fd\u529b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.6.0/installation/openyurt-experience-center/kubeconfig.md",sourceDirName:"installation/openyurt-experience-center",slug:"/installation/openyurt-experience-center/kubeconfig",permalink:"/zh/docs/v0.6.0/installation/openyurt-experience-center/kubeconfig",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-experience-center/kubeconfig.md",tags:[],version:"v0.6.0",lastUpdatedBy:"luc99hen",lastUpdatedAt:1642577047,formattedLastUpdatedAt:"2022\u5e741\u670819\u65e5",frontMatter:{title:"\u5982\u4f55\u4f7f\u7528`kubeconfig`\u4f53\u9a8cOpenYurt\u7684\u80fd\u529b"},sidebar:"version-v0.6.0/docs",previous:{title:"\u5982\u4f55\u4f7f\u7528\u4f53\u9a8c\u4e2d\u5fc3\u7684Web\u63a7\u5236\u53f0",permalink:"/zh/docs/v0.6.0/installation/openyurt-experience-center/web_console"},next:{title:"\u521b\u5efaOpenYurt\u6d4b\u8bd5\u96c6\u7fa4(Yurtctl init/join)",permalink:"/zh/docs/v0.6.0/installation/yurtctl-init-join"}},l={},c=[{value:"\u672c\u5730\u914d\u7f6e <code>kubeconfig</code>",id:"\u672c\u5730\u914d\u7f6e-kubeconfig",level:2},{value:"\u4f53\u9a8c OpenYurt \u7684\u5355\u5143\u5316\u90e8\u7f72\u529f\u80fd",id:"\u4f53\u9a8c-openyurt-\u7684\u5355\u5143\u5316\u90e8\u7f72\u529f\u80fd",level:2}],s={toc:c};function u(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u4efd\u6587\u6863\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u4f53\u9a8c\u4e2d\u5fc3\u4e2d\u63d0\u4f9b\u7684 kubeconfig \u4f53\u9a8c OpenYurt \u7684\u5355\u5143\u5316\u90e8\u7f72\u80fd\u529b\u3002")),(0,r.kt)("h2",{id:"\u672c\u5730\u914d\u7f6e-kubeconfig"},"\u672c\u5730\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"h2"},"kubeconfig")),(0,r.kt)("p",null,"\u7528\u6237\u9700\u8981\u5728\u672c\u5730\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u540e\uff0c\u624d\u80fd\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u7ba1\u7406\u96c6\u7fa4\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u201c\u96c6\u7fa4\u4fe1\u606f\u201d\u9875\u9762\u4e0b\u201c\u8fde\u63a5\u4fe1\u606f\u201dtab \u91cc\u590d\u5236",(0,r.kt)("inlineCode",{parentName:"li"},"kubeconfig"),"\u4fe1\u606f")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(47745).Z,width:"1410",height:"793"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5c06\u590d\u5236\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"kubeconfig"),"\u4fe1\u606f\u4fdd\u5b58\u5230\u672c\u5730",(0,r.kt)("inlineCode",{parentName:"li"},"~/.kube/config"),"\u6587\u4ef6\u4e0b")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(70886).Z,width:"1270",height:"793"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u914d\u7f6e\u65e0\u8bef\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl"),"\u6765\u7ba1\u7406\u96c6\u7fa4\u4e86")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(27734).Z,width:"1482",height:"787"})),(0,r.kt)("h2",{id:"\u4f53\u9a8c-openyurt-\u7684\u5355\u5143\u5316\u90e8\u7f72\u529f\u80fd"},"\u4f53\u9a8c OpenYurt \u7684\u5355\u5143\u5316\u90e8\u7f72\u529f\u80fd"),(0,r.kt)("p",null,"OpenYurt \u9488\u5bf9\u8fb9\u7f18\u8ba1\u7b97\u573a\u666f\uff0c\u5141\u8bb8\u7528\u6237\u5c06\u5de5\u4f5c\u8d1f\u8f7d\u5206\u7ec4\u5230\u5206\u5e03\u5728\u4e0d\u540c\u5730\u7406\u4f4d\u7f6e\u7684\u4e0d\u540c\u5355\u5143\u4e2d\u3002\u4e0b\u9762\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684\u573a\u666f\u6765\u4f53\u9a8c OpenYurt \u7684\u5355\u5143\u5316\u90e8\u7f72\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u6709\u4e24\u4e2a\u8fb9\u7f18\u7aef\u7684\u8282\u70b9 node1 \u4e0e node2 \u5206\u5e03\u5728\u4e0d\u540c\u7684\u4f4d\u7f6e\uff08\u6bd4\u5982 node1 \u5728\u676d\u5dde\uff0cnode2 \u5728\u4e0a\u6d77\uff09\uff0c\u6211\u4eec\u5e0c\u671b\u90e8\u7f72\u5e94\u7528\u5230\u676d\u5dde\u7684\u8282\u70b9\uff0c\u800c\u4e0d\u8981\u90e8\u7f72\u5230\u4e0a\u6d77\u7684\u8282\u70b9\u3002OpenYurt \u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/docs/enhancements/20201211-nodepool_uniteddeployment.md"},"NodePool")," \u4e0e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/docs/enhancements/20201211-nodepool_uniteddeployment.md"},"YurtAppSet")," (previous UnitedDeployment)\u4e24\u79cd\u8d44\u6e90\u6765\u5b9e\u73b0\u8fd9\u4e2a\u80fd\u529b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5047\u8bbe\u6211\u4eec\u5df2\u7ecf\u5728 OpenYurt \u96c6\u7fa4\u4e2d\u63a5\u5165\u4e86\u4e24\u4e2a\u8282\u70b9 node1 \u4e0e node2\u3002\uff08\u4e0d\u77e5\u9053\u5982\u4f55\u63a5\u5165\u8282\u70b9\uff1f\u8bf7\u53c2\u7167",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v0.6.0/installation/openyurt-experience-center/web_console"},"\u6587\u6863\uff1a\u5982\u4f55\u4f7f\u7528 web_console"),"\uff09")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(93581).Z,width:"1410",height:"653"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728\u914d\u7f6e\u597d",(0,r.kt)("inlineCode",{parentName:"li"},"kubeconfig"),"\u7684\u672c\u5730\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl"),"\u4e2d\u521b\u5efa NodePool \u8d44\u6e90\uff0c\u5e76\u5c06 node1 \u52a0\u5165\u5176\u4e2d\u8be5 NodePool\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efanodepool hangzhou\ncat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  type: Edge\nEOF\n\n\n# \u5c06node1\u8282\u70b9\u52a0\u5165nodepool\nkubectl label node node1 apps.openyurt.io/desired-nodepool=hangzhou\n\n# \u83b7\u53d6nodepool\nkubectl get nodepool\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(17758).Z,width:"1450",height:"788"})),(0,r.kt)("p",null,"\u6b64\u65f6\u5728\u63a7\u5236\u53f0\u754c\u9762\u4e2d\u4e5f\u53ef\u4ee5\u770b\u5230\u5bf9\u5e94\u7684\u8282\u70b9\u6c60 NodePool \u4fe1\u606f\u3002\n",(0,r.kt)("img",{src:t(18725).Z,width:"1521",height:"1022"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl"),"\u521b\u5efa Workload \u8d44\u6e90\uff0c\u901a\u8fc7 YurtAppSet \u53ea\u628a\u5e94\u7528\u90e8\u7f72\u5230 hangzhou \u7684\u8282\u70b9\u6c60\u4e2d\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5355\u5143\u5316\u90e8\u7f72pod\ncat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: UnitedDeployment\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: ud-test\n  namespace: "183xxxxxxxx"  # \u6ce8\u610f: \u66ff\u6362\u6210\u4f60\u7684namespace\nspec:\n  selector:\n    matchLabels:\n      app: ud-test\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: ud-test\n      namespace: "183xxxxxxxx"  # \u6ce8\u610f: \u66ff\u6362\u6210\u4f60\u7684namespace\n      spec:\n        template:\n          metadata:\n            labels:\n              app: ud-test\n          spec:\n            containers:\n              - name: nginx\n                image: nginx\n  topology:\n    pools:\n    - name: hangzhou\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou\n      replicas: 1\n  revisionHistoryLimit: 5\nEOF\n\n# \u67e5\u770b\u8d44\u6e90\nkubectl get node\nkubectl get pod -A\nkubectl get nodepool\n\n\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(82246).Z,width:"1270",height:"793"}),"\n",(0,r.kt)("img",{src:t(91067).Z,width:"1270",height:"793"})),(0,r.kt)("p",null,"\u521b\u5efa\u6210\u529f\u540e\uff0c\u5728\u63a7\u5236\u53f0\u754c\u9762\u4e0a\u53ef\u4ee5\u770b\u5230\u5bf9\u5e94\u7684 Pod \u88ab\u5206\u914d\u5230\u4e86 hangzhou \u8282\u70b9\u6c60\u4e2d\u7684 node1 \u4e0a\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(9202).Z,width:"1450",height:"496"})))}u.isMDXComponent=!0},70886:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cmd_kubeconfig-7205e32b25fee4f3d652c57d7f2c1172.png"},27734:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cmd_kubectl-f15c995e6491a32509dc7efc020cd99b.png"},17758:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cmd_np-a048f63d03de469acd0bc064675d8425.png"},82246:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cmd_ud_create-5c3f62f405528cce9d2f5989e1c27f00.png"},91067:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cmd_ud_get-6074a5b02d77faae825438898c283d77.png"},47745:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/web_kubeconfig-a18a5efd468931241ad8d623298dbff9.png"},93581:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/web_node-0f4d1e382ea20f2775f60844d2c17c91.png"},18725:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/web_np-dce0ab4bedba05c3331286ace37ac673.png"},9202:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/web_ud-975b925ce96f411a937525174d39d35c.png"}}]);