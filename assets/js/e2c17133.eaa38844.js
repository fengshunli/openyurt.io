"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4901],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99375:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"OpenYurt Experience Center Introduction"},i=void 0,s={unversionedId:"installation/openyurt-experience-center/overview",id:"version-v0.6.0/installation/openyurt-experience-center/overview",title:"OpenYurt Experience Center Introduction",description:"For better user experience\uff0c Experience Centerhas been relocated to new address\uff0cand the old one will no longer be maintained after 7 days \u3002",source:"@site/versioned_docs/version-v0.6.0/installation/openyurt-experience-center/overview.md",sourceDirName:"installation/openyurt-experience-center",slug:"/installation/openyurt-experience-center/overview",permalink:"/docs/v0.6.0/installation/openyurt-experience-center/overview",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-experience-center/overview.md",tags:[],version:"v0.6.0",lastUpdatedBy:"luc",lastUpdatedAt:1657507576,formattedLastUpdatedAt:"Jul 11, 2022",frontMatter:{title:"OpenYurt Experience Center Introduction"},sidebar:"version-v0.6.0/docs",previous:{title:"Summary",permalink:"/docs/v0.6.0/installation/summary"},next:{title:"How to create an account in the experience center",permalink:"/docs/v0.6.0/installation/openyurt-experience-center/user"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Architecture",id:"architecture",level:2}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For better user experience\uff0c ",(0,a.kt)("a",{parentName:"p",href:"http://47.243.253.79/"},"Experience Center"),"has been relocated to ",(0,a.kt)("a",{parentName:"p",href:"http://47.243.253.79/"},"new address"),"\uff0cand ",(0,a.kt)("a",{parentName:"p",href:"http://139.224.236.157/"},"the old one")," will no longer be maintained after 7 days \u3002")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"As an edge cloud native project, OpenYurt involves both edge computing and cloud native areas, many edge computing developers are not familiar with cloud native related technologies. In order to lower the threshold of using OpenYurt and help more developers get started with OpenYurt quickly, our community has launched a platform called OpenYurt Experience Center. Instead of building an OpenYurt cluster from scratch, new users who want to try out OpenYurt's features can simply apply for a test account on the platform and have an available OpenYurt cluster right away."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(53790).Z,width:"1408",height:"793"})),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,"Platform will assign an OpenYurt cluster to each ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.6.0/installation/openyurt-experience-center/user"},"registered user"),". (Note that this cluster is not a full-featured K8s cluster and this means users can only be active under their own namespace; see the Experience Center's architecture for details)"),(0,a.kt)("p",null,"OpenYurt Experience Center has provided two ways to use OpenYurt cluster:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Users can use the ",(0,a.kt)("a",{parentName:"li",href:"/docs/v0.6.0/installation/openyurt-experience-center/web_console"},"Web Console")," provided by platform to manage the cluster. The console displays the status of the cluster and provides some common operations, such as: user management, node access, node autonomy settings, lab quick deployment, and so on.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(79068).Z,width:"1946",height:"1092"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"The Experience Center also provides access via ",(0,a.kt)("a",{parentName:"li",href:"/docs/v0.6.0/installation/openyurt-experience-center/kubeconfig"},(0,a.kt)("inlineCode",{parentName:"a"},"kubeconfig")),", where users can configure ",(0,a.kt)("inlineCode",{parentName:"li"},"kubeconfig")," locally and operate the cluster via the ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," command.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(47745).Z,width:"1410",height:"793"})),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(91050).Z,width:"1184",height:"947"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurt-dashboard"},"Yurt-dashboard")," is open source and welcomes your feedback.\nBesides, if you are interested in the implementation of the experience center, you can refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1pf4y1K7M4"},"video discussion")," of biweekly meetings.")),(0,a.kt)("p",null,"The experience center consists of three main parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Yurt Dashboard: yurt-dashboard is a web console similar to the kubernetes dashboard that contains front-end and back-end web applications. The front-end provides a graphical interface, while the back-end is responsible for communicating with the cluster's API Server."),(0,a.kt)("li",{parentName:"ol"},"Account Controller: user information of the platform is stored in the cluster as CRD. Account Controller is responsible for managing the creation and deletion of user accounts and related resources (e.g. namespace, certificates, etc)."),(0,a.kt)("li",{parentName:"ol"},"Autonomy Sidecar: all users in experience center share the same OpenYurt cluster. The Autonomy component implements multi-tenant isolation of the cluster, so that each user shares the same Master, but has exclusive access to its own edge resources.")))}u.isMDXComponent=!0},91050:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/arch-3b0a5a9cd2cecdbfdd7ad8b5ce6c1795.png"},53790:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/register_blank-7209f48ba89832433874e9a6ee5defab.png"},47745:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/web_kubeconfig-a18a5efd468931241ad8d623298dbff9.png"},79068:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/web_overview-124bbea660e023dd2e4dec42c61032d2.png"}}]);