"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6905],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,f=m["".concat(u,".").concat(p)]||m[p]||c[p]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87692:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"reference/yurtadm/yurtadm",id:"reference/yurtadm/yurtadm",title:"yurtadm",description:"yurtadm",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference/yurtadm/yurtadm.md",sourceDirName:"reference/yurtadm",slug:"/reference/yurtadm/",permalink:"/zh/docs/next/reference/yurtadm/",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/reference/yurtadm/yurtadm.md",tags:[],version:"current",lastUpdatedBy:"huiwq1990",lastUpdatedAt:1674021128,formattedLastUpdatedAt:"2023\u5e741\u670818\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"API Reference",permalink:"/zh/docs/next/reference/api_reference"},next:{title:"yurtadm_completion",permalink:"/zh/docs/next/reference/yurtadm/yurtadm_completion"}},u={},s=[{value:"yurtadm",id:"yurtadm",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 18-Jan-2023",id:"auto-generated-by-spf13cobra-on-18-jan-2023",level:6}],d={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"yurtadm"},"yurtadm"),(0,a.kt)("p",null,"yurtadm administers the yurt cluster"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --add_dir_header                   If true, adds the file directory to the header of the log messages\n      --alsologtostderr                  log to standard error as well as files\n  -h, --help                             help for yurtadm\n      --kubeconfig string                The path to the kubeconfig file\n      --log_backtrace_at traceLocation   when logging hits line file:N, emit a stack trace (default :0)\n      --log_dir string                   If non-empty, write log files in this directory\n      --log_file string                  If non-empty, use this log file\n      --log_file_max_size uint           Defines the maximum size a log file can grow to. Unit is megabytes. If the value is 0, the maximum file size is unlimited. (default 1800)\n      --logtostderr                      log to standard error instead of files (default true)\n      --one_output                       If true, only write logs to their native severity level (vs also writing to each lower severity level)\n      --skip_headers                     If true, avoid header prefixes in the log messages\n      --skip_log_headers                 If true, avoid headers when opening log files\n      --stderrthreshold severity         logs at or above this threshold go to stderr (default 2)\n  -v, --v Level                          number for the log level verbosity\n      --vmodule moduleSpec               comma-separated list of pattern=N settings for file-filtered logging\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/next/reference/yurtadm/yurtadm_completion"},"yurtadm completion"),"\t - generate the autocompletion script for the specified shell"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/next/reference/yurtadm/yurtadm_docs"},"yurtadm docs"),"\t - generate API reference"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/next/reference/yurtadm/yurtadm_init"},"yurtadm init"),"\t - Run this command in order to set up the OpenYurt control plane"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/next/reference/yurtadm/yurtadm_join"},"yurtadm join"),"\t - Run this on any machine you wish to join an existing cluster"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/next/reference/yurtadm/yurtadm_reset"},"yurtadm reset"),"\t - Performs a best effort revert of changes made to this host by 'yurtadm join'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/next/reference/yurtadm/yurtadm_token"},"yurtadm token"),"\t - Run this command in order to manage openyurt joint token")),(0,a.kt)("h6",{id:"auto-generated-by-spf13cobra-on-18-jan-2023"},"Auto generated by spf13/cobra on 18-Jan-2023"))}c.isMDXComponent=!0}}]);