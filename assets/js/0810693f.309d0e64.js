"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[5869],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6224:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var r=n(3117),a=(n(7294),n(3905));const o={title:"YurtDeviceController"},i=void 0,l={unversionedId:"core-concepts/yurt-device-controller",id:"version-v0.7.0/core-concepts/yurt-device-controller",title:"YurtDeviceController",description:"Background",source:"@site/versioned_docs/version-v0.7.0/core-concepts/yurt-device-controller.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurt-device-controller",permalink:"/docs/core-concepts/yurt-device-controller",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-device-controller.md",tags:[],version:"v0.7.0",lastUpdatedBy:"wawlian",lastUpdatedAt:1657250779,formattedLastUpdatedAt:"7/8/2022",frontMatter:{title:"YurtDeviceController"},sidebar:"version-v0.7.0/docs",previous:{title:"NodeResourceManager",permalink:"/docs/core-concepts/node-resource-manager"},next:{title:"Node Autonomy",permalink:"/docs/user-manuals/autonomy/node-autonomy"}},c={},d=[{value:"Background",id:"background",level:2},{value:"Abstraction",id:"abstraction",level:2},{value:"device management related CRDs",id:"device-management-related-crds",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Version",id:"version",level:3},{value:"EdgeX Foundry",id:"edgex-foundry",level:2},{value:"yurt-edgex-manager",id:"yurt-edgex-manager",level:3},{value:"Version",id:"version-1",level:3},{value:"References",id:"references",level:2}],u={toc:d};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,'OpenYurt has been designed to meet various DevOps requirements against typical edge infrastructures. It provides the same user experience for managing the edge applications as if they were running in the cloud infrastructure.\nHowever, when the related management capability is extended to the edge "device" layer, the following problems may occur:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In order to support various edge devices, the existing framework must develop special adapters for each category of devices;"),(0,a.kt)("li",{parentName:"ul"},"When adapting Kubernetes to the edge computing environments, existing solutions either change the system architecture or modify core components (such as kubelet) significantly.")),(0,a.kt)("p",null,'At the same time, we saw a lot of great edge device management platforms emerging in the community\uff0csuch as EdgeX Foundry\u3002inspiring by the Unix philosophy, "Do one thing and do it well",\nwe believe that Kubernetes should focus on managing computing resources while edge devices management can be done by adopting existing edge computing platforms.'),(0,a.kt)("p",null,"A overall architecture about cloud-edge-device depicted below"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(8857).Z,width:"1412",height:"1402"})),(0,a.kt)("p",null,"The communication range of edge devices is usually limited to a certain network area. Therefore, edge nodes in the same network area can be divided into a nodepool. So a device management platform and a yurt-device-controller\ncan be deployed in each nodepool.\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When communicating with kube-apiserver on the cloud, Yurt-Device-Controller only watches the device objects in its nodepool and synchronizes the updated specs to the corresponding devices through the corresponding device management platform."),(0,a.kt)("li",{parentName:"ul"},"When communicating with the device management platform\uff0cYurtHub, NodePool, and UnitedDeployment capabilities are reused. The device information in the node pool is abstracted into device, deviceService, and deviceProfile objects and synchronized to the cloud.")),(0,a.kt)("h2",{id:"abstraction"},"Abstraction"),(0,a.kt)("h3",{id:"device-management-related-crds"},"device management related CRDs"),(0,a.kt)("p",null,"To manage devices in the real world, we should make some abstractions\uff0cBeing a component connecting cloud and edge management platform, Yurt-device-controller proposed 3 CRDs: DeviceProfile\u3001DeviceService and Device\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DeviceProfile"),"\uff1adefines a type of devices using same kind of protocol, which includes some generic information like the manufacturer's name, the device description, and the device model. DeviceProfile also defines what kind of resources (e.g., temperature, humidity) this type of device provided and how to read/write these resources."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DeviceService"),"\uff1adefines the way of how to connect a device to the OpenYurt, like the URL of the device. The DeviceService can not exist alone. Every DeviceService must associate with a DeviceProfile."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Device"),'\uff1ais used to refer to a sensor, actuator, or IoT "thing", it gives the detailed definition of a specific device, like which DeviceProfile it belongs to and which DeviceService it used to connect to the system.')),(0,a.kt)("h3",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"The major Yurt-Device-Controller components consist of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Device controller"),": It can abstract device objects in the edge platform into device CRs and synchronize them to the cloud. With the support of device controller, users can influence the actual device on the edge platform through the operation of cloud device CR, such as creating a device, deleting a device, updating device attributes (such as setting the light on and off, etc.)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DeviceService controller"),": It can abstract deviceService objects in the edge platform into deviceService CRs and synchronize them to the cloud. With the support of deviceService Controller, users can view deviceService information of edge platforms in the cloud, and create or delete deviceService CRs to affect the actual deviceService of edge platforms."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DeviceProfile controller"),": It can abstract deviceProfile objects in the edge platform into deviceProfile CRs and synchronize them to the cloud. With the support of deviceProfile Controller, users can view deviceProfile information of edge platforms in the cloud, and create or delete deviceProfile CRs to affect the actual deviceService of edge platforms.")),(0,a.kt)("h3",{id:"version"},"Version"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Image"),(0,a.kt)("th",{parentName:"tr",align:null},"Release Date"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"),(0,a.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v0.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"openyurt/yurt-device-controller:v0.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"2021.09"),(0,a.kt)("td",{parentName:"tr",align:null},"First Release"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v0.2.0"),(0,a.kt)("td",{parentName:"tr",align:null},"openyurt/yurt-device-controller:v0.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"2022.05"),(0,a.kt)("td",{parentName:"tr",align:null},"Support EdgeX LTS Version"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h2",{id:"edgex-foundry"},"EdgeX Foundry"),(0,a.kt)("p",null,"EdgeX Foundry is a vendor-neutral open source project hosted by The Linux Foundation building a common open framework for IoT edge computing. It's a framework hosted within a full hardware and OS-agnostic\nreference software platform to enable an ecosystem of plug-and-play components that unifies the marketplace and accelerates the deployment of IoT solutions\u3002In collaboration with the EdgeX Foundry community\uff0c\nOpenYurt integrated EdgeX since 0.5.0. In addition to yurt-device-controller, A yurt-edgex-manager component is also provided to simplify the deployment of the EdgeX Foundry in edge scenarios."),(0,a.kt)("p",null,"Integration Architecture\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(9177).Z,width:"1412",height:"1424"})),(0,a.kt)("h3",{id:"yurt-edgex-manager"},"yurt-edgex-manager"),(0,a.kt)("p",null,"OpenYurt introduces a yurt-edgex-manager controller to manage the EdgeX Foundry instances. You can manipulate EdgeX CR to manage EdgeX deployment, update, delete.You just need to create a CR of EdgeX,\nthen yurt-edgex-manager will automatically deploy EdgeX according to the spec defined. You can also deploy multiple EdgeX in a cluster based on the number of Nodepool.\nThe version of each EdgeX and the included EdgeX service can be configured.\n",(0,a.kt)("img",{alt:"img",src:n(1173).Z,width:"1280",height:"720"})),(0,a.kt)("p",null,"In OpenYurt Cluster, EdgeX uses Kubernetes Service to provide access."),(0,a.kt)("h3",{id:"version-1"},"Version"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Image"),(0,a.kt)("th",{parentName:"tr",align:null},"Release Date"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"),(0,a.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v0.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"openyurt/yurt-edgex-manager:0.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"2021.09"),(0,a.kt)("td",{parentName:"tr",align:null},"First Release"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v0.2.0"),(0,a.kt)("td",{parentName:"tr",align:null},"openyurt/yurt-edgex-manager:0.2.0"),(0,a.kt)("td",{parentName:"tr",align:null},"2022.05"),(0,a.kt)("td",{parentName:"tr",align:null},"Support EdgeX LTS Version"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurt-edgex-manager"},"Yurt-edgex-manager"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurt-device-controller"},"Yurt-device-controller"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://openyurt.io/"},"OpenYurt"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.edgexfoundry.org/"},"EdgeX Foundry")))))}s.isMDXComponent=!0},8857:function(e,t,n){t.Z=n.p+"assets/images/cloud-edge-device-d7d6d132d9b49582462927972b8c094c.png"},9177:function(e,t,n){t.Z=n.p+"assets/images/openyurt-edgex-integration-015fb09468c64253b81ebbf9531a1d86.png"},1173:function(e,t,n){t.Z=n.p+"assets/images/yurt-edgex-manager-e0652972f3802d01698453c4d73880fe.jpeg"}}]);