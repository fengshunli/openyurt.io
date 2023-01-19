"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[8377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const i={title:"CI Workflow"},o=void 0,r={unversionedId:"developer-manuals/ci-workflow",id:"version-v0.6.0/developer-manuals/ci-workflow",title:"CI Workflow",description:"This article will introduce the CI Workflow which all pull requests should pass before being merged. The CI Workflow of OpenYurt is built based on Github Actions. Details of Github Actions can be found at its official documentation. The config of the CI Workflow is located at ci.yaml.",source:"@site/versioned_docs/version-v0.6.0/developer-manuals/ci-workflow.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/ci-workflow",permalink:"/docs/v0.6.0/developer-manuals/ci-workflow",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/ci-workflow.md",tags:[],version:"v0.6.0",lastUpdatedBy:"Congrool",lastUpdatedAt:1643526184,formattedLastUpdatedAt:"Jan 30, 2022",frontMatter:{title:"CI Workflow"},sidebar:"version-v0.6.0/docs",previous:{title:"Local Up OpenYurt",permalink:"/docs/v0.6.0/developer-manuals/local-up-openyurt"},next:{title:"How to Contribute",permalink:"/docs/v0.6.0/developer-manuals/how-to-contribute"}},s={},p=[{value:"check-license",id:"check-license",level:2},{value:"golangci-lint",id:"golangci-lint",level:2},{value:"markdownlint-misspell-shellcheck",id:"markdownlint-misspell-shellcheck",level:2},{value:"unit-tests",id:"unit-tests",level:2},{value:"build-binaries",id:"build-binaries",level:2},{value:"e2e-tests",id:"e2e-tests",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This article will introduce the CI Workflow which all pull requests should pass before being merged. The CI Workflow of OpenYurt is built based on Github Actions. Details of Github Actions can be found at its ",(0,l.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/actionsh"},"official documentation"),". The config of the CI Workflow is located at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/.github/workflows/ci.yam"},"ci.yaml"),"."),(0,l.kt)("p",null,"The current CI Worflow of OpenYurt contains the following checks:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"check-license"),(0,l.kt)("li",{parentName:"ol"},"golangci-lint"),(0,l.kt)("li",{parentName:"ol"},"markdownlint-misspell-shellcheck"),(0,l.kt)("li",{parentName:"ol"},"unit-tests"),(0,l.kt)("li",{parentName:"ol"},"build-binaries"),(0,l.kt)("li",{parentName:"ol"},"e2e-tests")),(0,l.kt)("p",null,"At the moment you submit a pull request to OpenYurt, Github Actions will be triggered to check your PR. A pull request can not be merged until it passed all the checks in Github Actions as the following picture shows:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pr-passed-ci",src:n(24918).Z,width:"1257",height:"672"})),(0,l.kt)("p",null,"You can click ",(0,l.kt)("inlineCode",{parentName:"p"},"Details")," to check logs to solve the problem if you find some checks failed. The article will then give the discription of all six checks to help you understand why some of these checks fail. By the way, all of these checks can run at your local host."),(0,l.kt)("h2",{id:"check-license"},"check-license"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"check-license")," will check all the ",(0,l.kt)("inlineCode",{parentName:"p"},".go")," and ",(0,l.kt)("inlineCode",{parentName:"p"},".sh")," files to ensure all of them have a license. It will use the bash shell ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/hack/make-rules/check_license.sh"},"check_license.sh"),". If it finds some files don't contain license, it will output their paths."),(0,l.kt)("p",null,"license is a statement in the comments at the beginning of the file. The following license is what OpenYurt uses:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'Copyright 2021 The OpenYurt Authors.\n\nLicensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n')),(0,l.kt)("h2",{id:"golangci-lint"},"golangci-lint"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"golangci-lint")," will check the format of all go source code files. It uses the tool ",(0,l.kt)("inlineCode",{parentName:"p"},"golangci-lint")," with serval linters to do the check. More details of ",(0,l.kt)("inlineCode",{parentName:"p"},"golangci-lint")," can be found at the ",(0,l.kt)("a",{parentName:"p",href:"https://golangci-lint.run/"},"doc"),". This sections will give the brief introduction of linters used by OpenYurt."),(0,l.kt)("p",null,"The config file of ",(0,l.kt)("inlineCode",{parentName:"p"},"golangci-lint")," is at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/.golangci.yaml"},".golangci.yaml"),". The enabled linters and their descriptions are as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"linter"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/remyoudompheng/go-misc/tree/master/deadcode"},"deadcode")),(0,l.kt)("td",{parentName:"tr",align:null},"Finds unused code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pkg.go.dev/cmd/gofmt"},"gofmt")),(0,l.kt)("td",{parentName:"tr",align:null},"checks whether code was gofmt-ed. By default this tool runs with -s option to check for code simplification")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pkg.go.dev/golang.org/x/tools/cmd/goimports?utm_source=godoc"},"goimports")),(0,l.kt)("td",{parentName:"tr",align:null},"In addition to fixing imports, goimports also formats your code in the same style as gofmt.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/daixiang0/gci"},"gci")),(0,l.kt)("td",{parentName:"tr",align:null},"Gci control golang package import order and make it always deterministic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/gordonklaus/ineffassign"},"ineffassign")),(0,l.kt)("td",{parentName:"tr",align:null},"Detects when assignments to existing variables are not used")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/client9/misspell"},"misspell")),(0,l.kt)("td",{parentName:"tr",align:null},"Finds commonly misspelled English words in comments")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pkg.go.dev/cmd/vet"},"vet")),(0,l.kt)("td",{parentName:"tr",align:null},"Vet examines Go source code and reports suspicious constructs, such as Printf calls whose arguments do not align with the format string")))),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"make lint")," at your local host to run these checks. This command will automatically install the ",(0,l.kt)("inlineCode",{parentName:"p"},"golangci-lint")," tool if not found. Running this command at local host will show more details than what Github Actions will output, such as the error lines. We always recommend running ",(0,l.kt)("inlineCode",{parentName:"p"},"make lint")," at your local host before submitting a pull reuqest."),(0,l.kt)("h2",{id:"markdownlint-misspell-shellcheck"},"markdownlint-misspell-shellcheck"),(0,l.kt)("p",null,"OpenYurt uses the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pouchcontainer/pouchlinter"},"pouchlinter")," to do this check, which contains some installed lint tools we need: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/client9/misspell"},"misspell")," and ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/markdownlint/markdownlint"},"markdownlint"),". misspell will check if there're some misspelled English words. It will output the file path and line number, if any. markdownlint will check if markdown files repect specified rules. The descriptions of all rules can be found at the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md"},"doc"),". In this check, ",(0,l.kt)("inlineCode",{parentName:"p"},"MD010"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MD013"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MD022"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MD024"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MD029"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MD031"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MD032"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MD033"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MD034"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MD036")," will not be respected."),(0,l.kt)("h2",{id:"unit-tests"},"unit-tests"),(0,l.kt)("p",null,"In this check, all go files with suffix ",(0,l.kt)("inlineCode",{parentName:"p"},"_test.go")," will be executed. These files usually contain test cases of some functions and modules. The following command will be used to run these tests:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,l.kt)("h2",{id:"build-binaries"},"build-binaries"),(0,l.kt)("p",null,"This check will try to build binaries of all OpenYurt components on the ",(0,l.kt)("inlineCode",{parentName:"p"},"linux/amd64")," platform, including ",(0,l.kt)("inlineCode",{parentName:"p"},"yurtctl"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"yurt-node-servant"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"yurt-hub"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"yurt-controller-manager"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-agent"),". It will use the following command to build these binaries:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make build\n")),(0,l.kt)("h2",{id:"e2e-tests"},"e2e-tests"),(0,l.kt)("p",null,"In this check, a OpenYurt cluster with two nodes will be set up to run e2e test cases under ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," folder. OpenYurt also provide a way to run this test at your local host which you can find at ",(0,l.kt)("a",{parentName:"p",href:"/docs/v0.6.0/developer-manuals/local-up-openyurt"},"Local Up OpenYurt"),". Currently, the following e2e test cases will run during this check:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Case"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cluster_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Fetch cluster info from the cluster, including the number of pods and all namespaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pod_operate_test"),(0,l.kt)("td",{parentName:"tr",align:null},"Create/Delete pod on the edge node")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pod_operate_test_on_edge"),(0,l.kt)("td",{parentName:"tr",align:null},"Execute command in the pod on the edge node")))))}u.isMDXComponent=!0},24918:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pr-passed-ci-78d99539a449c6dd4527a7263bd4cdf7.png"}}]);