"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[5533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||a;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"Local Up OpenYurt"},l=void 0,u={unversionedId:"developer-manuals/local-up-openyurt",id:"version-v1.1/developer-manuals/local-up-openyurt",title:"Local Up OpenYurt",description:"How to use",source:"@site/versioned_docs/version-v1.1/developer-manuals/local-up-openyurt.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/local-up-openyurt",permalink:"/docs/developer-manuals/local-up-openyurt",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/local-up-openyurt.md",tags:[],version:"v1.1",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1669032432,formattedLastUpdatedAt:"Nov 21, 2022",frontMatter:{title:"Local Up OpenYurt"},sidebar:"version-v1.1/docs",previous:{title:"How to Build and Test",permalink:"/docs/developer-manuals/how-to-build-and-test"},next:{title:"CI Workflow",permalink:"/docs/developer-manuals/ci-workflow"}},i={},s=[{value:"How to use",id:"how-to-use",level:2},{value:"What does the shell do for you",id:"what-does-the-shell-do-for-you",level:2},{value:"Reference",id:"reference",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"If you don't have the openyurt cluster, you can run the bash shell ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/hack/make-rules/local_up_openyurt.sh"},(0,r.kt)("inlineCode",{parentName:"a"},"local_up_openyurt.sh"))," to quickly set up the openyurt cluster at your local host.\nAssuming that you've entered the openyurt work path, the command is as simple as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# build OpenYurt components images and startup a OpenYurt cluster\nmake docker-build-and-up-openyurt\n\n# startup a OpenYurt cluster based on prepared images\nmake local-up-openyurt\n")),(0,r.kt)("p",null,"Then you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to interact with your OpenYurt cluster."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note:\nBy default, the above commands run on Linux/AMD64 platform. If you need to specify platform information when running on MAC, run the following command: 'make local-up-openyurt TARGET_PLATFORMS= Linux /arm64'.")),(0,r.kt)("h2",{id:"what-does-the-shell-do-for-you"},"What does the shell do for you"),(0,r.kt)("p",null,"In summary, the ",(0,r.kt)("inlineCode",{parentName:"p"},"local_up_openyurt.sh")," will use the local files under the openyurt work path to set up the cluster.  And you can specify the behavior of the shell through setting environment variables."),(0,r.kt)("p",null,"It will use ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," to set up the kubernetes cluster. You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"KUBERNETESVERSION")," to specify the kubernetes version to use. For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"export KUBERNETESVERSION=1.23")," before running the shell will enable you to use kubernetes v1.23. In addition, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"NODES_NUM")," to specify the number of nodes the cluster will contain."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"The format of ",(0,r.kt)("inlineCode",{parentName:"li"},"KUBERNETESVERSION")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"1.xx"),", other formats will not be accepted. The default KUBERNETESVERSION is ",(0,r.kt)("inlineCode",{parentName:"li"},"1.22"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"NODES_NUM")," should not be less than 2. Finally, the cluster will contains one control-plane node and ",(0,r.kt)("inlineCode",{parentName:"li"},"NODES_NUM-1")," woker nodes. The default ",(0,r.kt)("inlineCode",{parentName:"li"},"NODES_NUM")," is 2."))),(0,r.kt)("p",null,"At last, Finally, OpenYurt components will be installed in kubernetes cluster, including 'Yurthub', 'Yurt-Controller-Manager', 'Yurt-tunnel-Agent' and 'Yurt-Tunnel-Server'."),(0,r.kt)("p",null,"By now, you've got the OpenYurt cluster at your local host and you can interact with it using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," will automatically stored the kubeconfig at your ",(0,r.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," path (default path is ${HOME}/.kube/config). If you already have the ",(0,r.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," to interact with other clusters, ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," will add a new context of openyurt cluster into the ",(0,r.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," and automatically switch to it. You can manually switch back to the previous context using command ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl config use-context ${PREVIOUS_CONTEXT_NAME}"),". For more details, you can see the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"},"documentation"),". You can store the kubeconfig at another path through setting ",(0,r.kt)("inlineCode",{parentName:"p"},"KIND_KUBECONFIG"),"."),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,"Reference gives descriptions of all used environment variables."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"KIND_KUBECONFIG"))),(0,r.kt)("p",null,'KIND_KUBECONFIG represents the path to store the kubeconfig file of the cluster which is created by this shell. The default value is "$HOME/.kube/config".'),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"NODES_NUM"))),(0,r.kt)("p",null,"NODES_NUM represents the number of nodes to set up in the new-created cluster. There are one control-plane node and NODES_NUM-1 worker nodes. Thus, NODES_NUM must not be less than 2. The default value is 2."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"KUBERNETESVERSION"))),(0,r.kt)("p",null,'KUBERNETESVERSION declares the kubernetes version the cluster will use. The format is "1.XX". Now from 1.17 to 1.23 are supported. The default value is 1.22.'),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"TIMEOUT"))),(0,r.kt)("p",null,"TIMEOUT represents the time to wait for the kind control-plane, yurt-tunnel-server and yurt-tunnel-agent to be ready. If they are not ready after the duration, the shell will exit. The default value is 120s."))}c.isMDXComponent=!0}}]);