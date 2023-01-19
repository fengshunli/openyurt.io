"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[3397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||c[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},66415:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,s={unversionedId:"reference/yurtadm/yurtadm_join",id:"reference/yurtadm/yurtadm_join",title:"yurtadm_join",description:"yurtadm join",source:"@site/docs/reference/yurtadm/yurtadm_join.md",sourceDirName:"reference/yurtadm",slug:"/reference/yurtadm/yurtadm_join",permalink:"/docs/next/reference/yurtadm/yurtadm_join",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/reference/yurtadm/yurtadm_join.md",tags:[],version:"current",lastUpdatedBy:"huiwq1990",lastUpdatedAt:1674021128,formattedLastUpdatedAt:"Jan 18, 2023",frontMatter:{},sidebar:"docs",previous:{title:"yurtadm_init",permalink:"/docs/next/reference/yurtadm/yurtadm_init"},next:{title:"yurtadm_reset",permalink:"/docs/next/reference/yurtadm/yurtadm_reset"}},l={},d=[{value:"yurtadm join",id:"yurtadm-join",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 18-Jan-2023",id:"auto-generated-by-spf13cobra-on-18-jan-2023",level:6}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"yurtadm-join"},"yurtadm join"),(0,o.kt)("p",null,"Run this on any machine you wish to join an existing cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yurtadm join [api-server-endpoint] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --cri-socket string                             Path to the CRI socket to connect (default "/var/run/dockershim.sock")\n      --discovery-token-ca-cert-hash strings          For token-based discovery, validate that the root CA public key matches this hash (format: "<type>:<value>").\n      --discovery-token-unsafe-skip-ca-verification   For token-based discovery, allow joining without --discovery-token-ca-cert-hash pinning.\n  -h, --help                                          help for join\n      --ignore-preflight-errors strings               A list of checks whose errors will be shown as warnings. Example: \'IsPrivilegedUser,Swap\'. Value \'all\' ignores errors from all checks.\n      --kubernetes-resource-server string             Sets the address for downloading k8s node resources (default "dl.k8s.io")\n      --node-labels string                            Sets the labels for joining node\n      --node-name string                              Specify the node name. if not specified, hostname will be used.\n      --node-type string                              Sets the node is edge or cloud (default "edge")\n      --organizations string                          Organizations that will be added into hub\'s client certificate\n      --pause-image string                            Sets the image version of pause container (default "registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.2")\n      --reuse-cni-bin                                 Whether to reuse local CNI binaries or to download new ones\n      --token string                                  Use this token for both discovery-token and tls-bootstrap-token when those values are not provided.\n      --yurthub-image string                          Sets the image version of yurthub component (default "registry.cn-hangzhou.aliyuncs.com/openyurt/yurthub:latest")\n      --yurthub-server-addr string                    Sets the address for yurthub server addr (default "127.0.0.1")\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --add_dir_header                   If true, adds the file directory to the header of the log messages\n      --alsologtostderr                  log to standard error as well as files\n      --kubeconfig string                The path to the kubeconfig file\n      --log_backtrace_at traceLocation   when logging hits line file:N, emit a stack trace (default :0)\n      --log_dir string                   If non-empty, write log files in this directory\n      --log_file string                  If non-empty, use this log file\n      --log_file_max_size uint           Defines the maximum size a log file can grow to. Unit is megabytes. If the value is 0, the maximum file size is unlimited. (default 1800)\n      --logtostderr                      log to standard error instead of files (default true)\n      --one_output                       If true, only write logs to their native severity level (vs also writing to each lower severity level)\n      --skip_headers                     If true, avoid header prefixes in the log messages\n      --skip_log_headers                 If true, avoid headers when opening log files\n      --stderrthreshold severity         logs at or above this threshold go to stderr (default 2)\n  -v, --v Level                          number for the log level verbosity\n      --vmodule moduleSpec               comma-separated list of pattern=N settings for file-filtered logging\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/reference/yurtadm/"},"yurtadm"),"\t - yurtadm administers the yurt cluster")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-18-jan-2023"},"Auto generated by spf13/cobra on 18-Jan-2023"))}c.isMDXComponent=!0}}]);