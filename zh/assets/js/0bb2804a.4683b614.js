"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[203],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,k=m["".concat(p,".").concat(s)]||m[s]||c[s]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5396:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5"},o=void 0,i={unversionedId:"developer-manuals/how-to-build-and-test",id:"version-v1.0/developer-manuals/how-to-build-and-test",title:"\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5",description:"OpenYurt\u4e3b\u4ed3\u5e93\uff08openyurtio/openyurt\uff09\u4e2d\u76ee\u524d(v0.7.0, commit: 68a18ee)\u5305\u542b\u4ee5\u4e0b\u7ec4\u4ef6\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/developer-manuals/how-to-build-and-test.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/how-to-build-and-test",permalink:"/zh/docs/developer-manuals/how-to-build-and-test",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/how-to-build-and-test.md",tags:[],version:"v1.0",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1662464199,formattedLastUpdatedAt:"2022\u5e749\u67086\u65e5",frontMatter:{title:"\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5"},sidebar:"version-v1.0/docs",previous:{title:"OpenYurt \u52a9\u529b\u7533\u901a\u5feb\u9012\u4e91\u8fb9\u7aefDevOps\u534f\u540c",permalink:"/zh/docs/best-practices/practices-1"},next:{title:"\u672c\u5730\u542f\u52a8\u96c6\u7fa4",permalink:"/zh/docs/developer-manuals/local-up-openyurt"}},p={},u=[{value:"\u5982\u4f55\u6784\u5efa",id:"\u5982\u4f55\u6784\u5efa",level:2},{value:"\u6784\u5efa\u4e8c\u8fdb\u5236",id:"\u6784\u5efa\u4e8c\u8fdb\u5236",level:3},{value:"\u6784\u5efa\u955c\u50cf",id:"\u6784\u5efa\u955c\u50cf",level:3},{value:"\u4ea4\u53c9\u7f16\u8bd1",id:"\u4ea4\u53c9\u7f16\u8bd1",level:3},{value:"Mac",id:"mac",level:4},{value:"Windows",id:"windows",level:4},{value:"\u5982\u4f55\u6d4b\u8bd5",id:"\u5982\u4f55\u6d4b\u8bd5",level:2},{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",level:3},{value:"e2e\u6d4b\u8bd5",id:"e2e\u6d4b\u8bd5",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OpenYurt\u4e3b\u4ed3\u5e93\uff08",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt"},"openyurtio/openyurt"),"\uff09\u4e2d\u76ee\u524d",(0,a.kt)("inlineCode",{parentName:"p"},"(v0.7.0, commit: 68a18ee)"),"\u5305\u542b\u4ee5\u4e0b\u7ec4\u4ef6\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"yurthub"),(0,a.kt)("li",{parentName:"ol"},"yurt-controller-manager"),(0,a.kt)("li",{parentName:"ol"},"yurt-tunnel-server"),(0,a.kt)("li",{parentName:"ol"},"yurt-tunnel-agent"),(0,a.kt)("li",{parentName:"ol"},"yurtctl"),(0,a.kt)("li",{parentName:"ol"},"yurtadm"),(0,a.kt)("li",{parentName:"ol"},"yurt-node-servant")),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u5728\u5b8c\u6210\u5bf9\u4e0a\u8ff0\u7ec4\u4ef6\u7684\u5f00\u53d1\u540e\uff0c\u5982\u4f55\u8fdb\u884c\u7f16\u8bd1\u6e90\u7801\u3001\u6253\u5305\u955c\u50cf\u3001\u8fd0\u884c\u7ec4\u4ef6\u548c\u6d4b\u8bd5\u9a8c\u8bc1\u7b49\u5de5\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u5982\u4f55\u6784\u5efa"},"\u5982\u4f55\u6784\u5efa"),(0,a.kt)("h3",{id:"\u6784\u5efa\u4e8c\u8fdb\u5236"},"\u6784\u5efa\u4e8c\u8fdb\u5236"),(0,a.kt)("p",null,"OpenYurt\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/Makefile"},"Makefile"),"\u4e2d\u63d0\u4f9b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"make build"),"\u547d\u4ee4\uff0c\u901a\u8fc7\u8be5\u547d\u4ee4\u53ef\u4ee5\u5b8c\u6210\u5bf9\u5404\u4e2a\u7ec4\u4ef6\u7684\u7f16\u8bd1\u3002\u4e0b\u9762\u4ee5\u7f16\u8bd1yurtadm\u4e3a\u4f8b\uff0c\u89e3\u91ca",(0,a.kt)("inlineCode",{parentName:"p"},"make build"),"\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u5176\u4ed6\u7ec4\u4ef6\u7c7b\u4f3c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make build WHAT=cmd/yurtadm\n")),(0,a.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u6839\u636e\u672c\u673a\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\u7f16\u8bd1yurtadm\uff0c\u5e76\u628a\u7f16\u8bd1\u51fa\u6765\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u653e\u5728_output\u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("h3",{id:"\u6784\u5efa\u955c\u50cf"},"\u6784\u5efa\u955c\u50cf"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"make docker-build"),"\u662f\u6700\u4fbf\u6377\u7684\u955c\u50cf\u6784\u5efa\u547d\u4ee4\uff0c\u5305\u62ec\u7f16\u8bd1\u548c\u6253\u5305\u955c\u50cf\u7b49\u6b65\u9aa4\uff0c\u53ef\u4ee5\u8986\u76d6\u7edd\u5927\u591a\u6570\u573a\u666f\u3002\u5176\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'make docker-build TARGET_PLATFORMS="${TARGET_PLATFORMS}" REGION="${your_region}"\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TARGET_PLATFORMS"),": \u8868\u793a\u7ec4\u4ef6\u8fd0\u884c\u7684\u76ee\u6807\u67b6\u6784\uff0c\u76ee\u524d\u652f\u6301linux/amd64, linux/arm\u548clinux/arm64\u4e09\u79cd\u67b6\u6784\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"REGION"),": \u53c2\u6570\u5f71\u54cd\u7f16\u8bd1\u65f6\u9009\u7528\u7684GOPROXY\uff0c\u4e2d\u56fd\u56fd\u5185\u7684\u7528\u6237\u5efa\u8bae\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"REGION=cn"),"\u6765\u4fdd\u8bc1\u6784\u5efa\u8fc7\u7a0b\u6b63\u786e\u8fdb\u884c(cn\u8868\u793a\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"GOPROXY=https://goproxy.cn"),")\u3002"),(0,a.kt)("p",null,"\u7528\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make docker-build TARGET_PLATFORMS=linux/amd64 REGION=cn\n")),(0,a.kt)("p",null,"\u547d\u4ee4\u6267\u884c\u5b8c\u6210\u540e\u5728\u672c\u5730\u751f\u6210OpenYurt\u5404\u4e2a\u7ec4\u4ef6\u7684\u955c\u50cf\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"docker images"),"\u67e5\u770b\u3002"),(0,a.kt)("h3",{id:"\u4ea4\u53c9\u7f16\u8bd1"},"\u4ea4\u53c9\u7f16\u8bd1"),(0,a.kt)("h4",{id:"mac"},"Mac"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"GOOS=${target_os} GOARCH=${target_arch} CGO_ENABLED=0 make build WHAT=cmd/yurtadm\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u8be5\u547d\u4ee4\u53ef\u4ee5\u5b9e\u73b0\u5728mac\u73af\u5883\u4e2d\u7f16\u8bd1\u80fd\u5728\u7279\u5b9a\u5e73\u53f0\u4e0a\u8fd0\u884c\u7684yurtadm\uff0c\u8fd9\u91cc\u6700\u597d\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"p"},"CGO_ENABLED=0"),"\u6765\u907f\u514d\u4e00\u4e9b\u517c\u5bb9\u4e0a\u7684\u95ee\u9898\u3002\u901a\u8fc7\u8fd9\u4e2a\u547d\u4ee4\u53ef\u4ee5\u5728Mac\u4e0a\u7f16\u8bd1\u4e0d\u540c\u5e73\u53f0\u7684yurtadm."),(0,a.kt)("h4",{id:"windows"},"Windows"),(0,a.kt)("p",null,"\u7531\u4e8e\u5728Windows\u4e0a\u901a\u5e38\u6ca1\u6709make\u547d\u4ee4\uff08\u5982\u679c\u4f60\u6ca1\u6709\u7528Cygwin\u7684\u8bdd\uff09\uff0c\u9700\u8981\u81ea\u5df1\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"go build"),"\uff0cpowershell\u4e2d\u6267\u884c\u65b9\u6cd5\u5982\u4e0b\uff08\u4ee5\u7ba1\u7406\u5458\u6743\u9650\u8fd0\u884c\uff09\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",(0,a.kt)("br",{parentName:"li"}),"\u5728\u8fd0\u884c\u524d\u9700\u8981\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"li"},"target_os"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"target_arch"),"\uff0c\u8bbe\u4e3a\u9700\u8981\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$Env:GOOS = $Env:target_os\n$Env:GOARCH = $Env:target_arch\n$Env:CGO_ENABLED = 0\n$Env:GOLDFLAGS = \"-s -w \n-X github.com/openyurtio/openyurt/pkg/projectinfo.projectPrefix=yurt\n-X github.com/openyurtio/openyurt/pkg/projectinfo.labelPrefix=openyurt.io\n-X github.com/openyurtio/openyurt/pkg/projectinfo.gitVersion=$(git describe --abbrev=0)\n-X github.com/openyurtio/openyurt/pkg/projectinfo.gitCommit=$(git rev-parse HEAD)\n-X github.com/openyurtio/openyurt/pkg/projectinfo.buildDate=$(date -u +'%Y-%m-%dT%H:%M:%SZ')\"\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528go build\u8fdb\u884c\u7f16\u8bd1",(0,a.kt)("br",{parentName:"li"}),"\u8fd0\u884cgo build\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\uff0c\u8fd9\u91cc\u9700\u8981\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"li"},"-ldflags=$Env:GOLDFLAGS"),"\u9009\u9879\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7-o\u6765\u8c03\u6574\u7f16\u8bd1\u597d\u7684yurtadm\u7684\u4fdd\u5b58\u4f4d\u7f6e\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"go build -ldflags=$Env:GOLDFLAGS cmd/yurtadm/yurtadm.go\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u6d4b\u8bd5"},"\u5982\u4f55\u6d4b\u8bd5"),(0,a.kt)("p",null,"OpenYurt\u4e2d\u63d0\u4f9b\u7684\u6d4b\u8bd5\u5305\u62ec\u5355\u5143\u6d4b\u8bd5\u548ce2e\u6d4b\u8bd5\u4e24\u79cd\u3002"),(0,a.kt)("h3",{id:"\u5355\u5143\u6d4b\u8bd5"},"\u5355\u5143\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u5355\u5143\u6d4b\u8bd5\u4f1a\u6267\u884ccmd\u548cpkg\u76ee\u5f55\u4e0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"*_test.go"),"\u6587\u4ef6\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef\u5b8c\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,a.kt)("h3",{id:"e2e\u6d4b\u8bd5"},"e2e\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u8fd0\u884cOpenYurt\u7684e2e test\u3002\u5728\u793e\u533a\u63d0\u4f9b\u7684\u6d4b\u8bd5\u7528\u4f8b\u4e2d\uff0c\u8282\u70b9\u7684\u81ea\u6cbb\uff08autonomy\uff09\u6d4b\u8bd5\u4ecd\u7136\u5904\u4e8e\u5f00\u53d1\u9636\u6bb5\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u5df2\u7ecf\u542f\u52a8\u4e86\u4e00\u4e2aOpenYurt\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u6309\u7167\u8fd9\u8282\u7684\u6b65\u9aa4\u6765\u8fd0\u884ce2e\u6d4b\u8bd5\u3002\u5982\u679c\u8fd8\u6ca1\u6709OpenYurt\u96c6\u7fa4\uff0c\u53ef\u4ee5\u901a\u8fc7\u201c\u672c\u5730\u542f\u52a8\u96c6\u7fa4\u201d\u4e2d\u6240\u8ff0\u6b65\u9aa4\uff0c\u5728\u672c\u5730\u5feb\u901f\u542f\u52a8\u4e00\u4e2aOpenYurt\u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"\u5728\u642d\u5efa\u597dOpenYurt\u96c6\u7fa4\u540e\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884ce2e\u76ee\u5f55\u4e0b\u7684\u6d4b\u8bd5\u7528\u4f8b\u5bf9\u96c6\u7fa4\u8fdb\u884ce2e\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make e2e-tests\n")),(0,a.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u5728_output\u76ee\u5f55\u7684\u76f8\u5e94\u5e73\u53f0\u76ee\u5f55\u4e0b\u751f\u6210e2e\u6d4b\u8bd5\u5de5\u5177yurt-e2e-test\uff0c\u5e76\u5229\u7528KUBECONFIG\u73af\u5883\u53d8\u91cf\uff08\u9ed8\u8ba4\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),"\uff09\u6307\u660e\u7684kubeconfig\u6587\u4ef6\u8bbf\u95ee\u96c6\u7fa4\uff0c\u8fd0\u884c\u6d4b\u8bd5\u3002\u53ef\u4ee5\u5728stdout\u4e2d\u770b\u5230\u5982\u4e0b\u6d4b\u8bd5\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Ran 5 of 5 Specs in 82.279 seconds\nSUCCESS! -- 5 Passed | 0 Failed | 0 Pending | 0 Skipped\nPASS\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u6307\u5b9a\u6d4b\u8bd5\u5de5\u5177yurt-e2e-test\u7684\u884c\u4e3a\uff08\u5982\u8fd0\u884c\u989d\u5916\u7684\u81ea\u6cbb\u6d4b\u8bd5\uff09\uff0c\u53ef\u4ee5\u6309\u7167\u4e0b\u4e00\u8282\u7684\u6b65\u9aa4\u8fdb\u884c\u3002"),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'\u7f16\u8bd1\u65f6\u51fa\u73b0"go: github.com...unknown revision xxx"',(0,a.kt)("br",{parentName:"p"}),"\n","\u901a\u5e38\u662fgit\u7684\u7248\u672c\u8fc7\u4f4e\u9020\u6210\u7684\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5347\u7ea7git\u7248\u672c\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'\u7f16\u8bd1\u65f6\u51fa\u73b0"unsupported GOOS/GOARCH pair xxx/xxx"',(0,a.kt)("br",{parentName:"p"}),"\n","go\u4e0d\u80fd\u652f\u6301\u6240\u6709\u7684GOOS/GOARCH\u7ec4\u5408\uff0c\u5982go1.17.3\u4e0d\u652f\u6301windows/arm64\u3002\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"go tool dist list"),"\u6765\u67e5\u770b\u652f\u6301\u7684GOOS/GOARCH\u7ec4\u5408\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'\u8fd0\u884c\u4ea4\u53c9\u7f16\u8bd1\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u65f6\u51fa\u73b0"cannot execute binary file: Exec format error"',(0,a.kt)("br",{parentName:"p"}),"\n","\u901a\u5e38\u662f\u6ca1\u6709\u6210\u529f\u5b8c\u6210\u4ea4\u53c9\u7f16\u8bd1\uff0c\u5bfc\u81f4\u8fd0\u884c\u5e73\u53f0\u4e0e\u5f53\u524d\u5e73\u53f0\u4e0d\u540c\uff0c\u65e0\u6cd5\u8bc6\u522b\u6587\u4ef6\u683c\u5f0f\u3002\u5728Windows\u4e0a\u8fdb\u884c\u4ea4\u53c9\u7f16\u8bd1\u5c24\u5176\u9700\u8981\u6ce8\u610f\u5f00\u542f\u7ba1\u7406\u5458\u6743\u9650\u3002"))))}c.isMDXComponent=!0}}]);