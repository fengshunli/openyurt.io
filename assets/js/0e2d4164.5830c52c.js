"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6712],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=u(r),p=o,m=f["".concat(l,".").concat(p)]||f[p]||c[p]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},77450:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,s={unversionedId:"reference/yurtadm/yurtadm_reset",id:"reference/yurtadm/yurtadm_reset",title:"yurtadm_reset",description:"yurtadm reset",source:"@site/docs/reference/yurtadm/yurtadm_reset.md",sourceDirName:"reference/yurtadm",slug:"/reference/yurtadm/yurtadm_reset",permalink:"/docs/next/reference/yurtadm/yurtadm_reset",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/reference/yurtadm/yurtadm_reset.md",tags:[],version:"current",lastUpdatedBy:"huiwq1990",lastUpdatedAt:1674021128,formattedLastUpdatedAt:"Jan 18, 2023",frontMatter:{},sidebar:"docs",previous:{title:"yurtadm_join",permalink:"/docs/next/reference/yurtadm/yurtadm_join"},next:{title:"yurtadm_token",permalink:"/docs/next/reference/yurtadm/yurtadm_token"}},l={},u=[{value:"yurtadm reset",id:"yurtadm-reset",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 18-Jan-2023",id:"auto-generated-by-spf13cobra-on-18-jan-2023",level:6}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"yurtadm-reset"},"yurtadm reset"),(0,o.kt)("p",null,"Performs a best effort revert of changes made to this host by 'yurtadm join'"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yurtadm reset [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --cert-dir string                   The path to the directory where the certificates are stored. If specified, clean this directory. (default \"/etc/kubernetes/pki\") (default \"/etc/kubernetes/pki\")\n      --cri-socket string                 Path to the CRI socket to connect\n  -f, --force                             Reset the node without prompting for confirmation.\n  -h, --help                              help for reset\n      --ignore-preflight-errors strings   A list of checks whose errors will be shown as warnings. Example: 'IsPrivilegedUser,Swap'. Value 'all' ignores errors from all checks.\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --add_dir_header                   If true, adds the file directory to the header of the log messages\n      --alsologtostderr                  log to standard error as well as files\n      --kubeconfig string                The path to the kubeconfig file\n      --log_backtrace_at traceLocation   when logging hits line file:N, emit a stack trace (default :0)\n      --log_dir string                   If non-empty, write log files in this directory\n      --log_file string                  If non-empty, use this log file\n      --log_file_max_size uint           Defines the maximum size a log file can grow to. Unit is megabytes. If the value is 0, the maximum file size is unlimited. (default 1800)\n      --logtostderr                      log to standard error instead of files (default true)\n      --one_output                       If true, only write logs to their native severity level (vs also writing to each lower severity level)\n      --skip_headers                     If true, avoid header prefixes in the log messages\n      --skip_log_headers                 If true, avoid headers when opening log files\n      --stderrthreshold severity         logs at or above this threshold go to stderr (default 2)\n  -v, --v Level                          number for the log level verbosity\n      --vmodule moduleSpec               comma-separated list of pattern=N settings for file-filtered logging\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/reference/yurtadm/"},"yurtadm"),"\t - yurtadm administers the yurt cluster")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-18-jan-2023"},"Auto generated by spf13/cobra on 18-Jan-2023"))}c.isMDXComponent=!0}}]);