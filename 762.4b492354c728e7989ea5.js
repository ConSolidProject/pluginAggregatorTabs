(self.webpackChunktabs=self.webpackChunktabs||[]).push([[762],{95318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},20862:(e,t,r)=>{var n=r(50008).default;function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=l?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r},e.exports.default=e.exports,e.exports.__esModule=!0},50008:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},89875:(e,t,r)=>{"use strict";var n=r(95318),o=r(20862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(r(77865)),a=(0,n(r(2108)).default)(l.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.default=a},2108:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(28546)},31762:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>C});var n=r(77865),o=r.n(n),l=r(21704),a=r.n(l),s=r(96156),i=r(28481),c=r(5034),u=r(26975),d=r(16837),p=r(38399);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=r(60306),y=(0,c.Z)({productionPrefix:b.name,seed:b.name});const v=function(e){var t,r=e.sharedProps,l=e.module;l.children&&Object.keys(l.children)[0]&&(t=Object.keys(l.children)[0]),console.log("initial",t);var a=(0,n.useState)(t),s=(0,i.Z)(a,2),c=s[0],f=s[1];return l.children?o().createElement("div",null,o().createElement(u.ZP,{generateClassName:y},o().createElement(p.CssBaseline,null),o().createElement("div",{id:"pluginChild",style:{width:l.dimensions.w-60-2,marginLeft:60}},Object.keys(l.children).map((function(e){var t=m(m({},l.children[e]),{},{dimensions:m(m({},l.dimensions),{},{width:l.dimensions-60-2})});return o().createElement(d.System,{system:{module:t.module,url:t.url,scope:t.scope},sharedProps:r,inactive:c!==e,module:t})})),"        "),o().createElement(p.Drawer,{anchor:"left",variant:"permanent"},o().createElement("div",null),o().createElement(p.Divider,null),Object.keys(l.children).map((function(e){return o().createElement("div",{style:{margin:10,marginLeft:4},key:e+"_icon"},o().createElement(p.SvgIcon,{color:"primary",style:{marginLeft:15,height:30,width:30},onClick:function(){f(e)}},o().createElement("path",{d:l.children[e].icon})))})),o().createElement(p.Divider,null)))):o().createElement("p",null,"This plugin needs child modules to render and cannot be used as standalone. No child modules were passed. Please use always in a container application using an LBDserver configuration.")};var g=r(24853),h=r(75073),w=r(99170),j=((0,g.atom)({key:"session",default:new h.Session}),(0,g.atom)({key:"projects",default:["http://localhost:5000/jeroen/lbd/642f0417-ce23-4d9d-8806-c078aed93ae1/"]})),k=(0,g.atom)({key:"activeResources",default:[]}),O=(0,g.atom)({key:"selectedElements",default:[]}),E=(0,g.atom)({key:"selectionId",default:""}),x=(0,g.atom)({key:"trigger",default:"0"}),P=(0,g.atom)({key:"store",default:new w.Store}),S=r(19705),_=r(89875),M=r(60306);r(60306);var D=function(e,t,r){var n;if(r)n=o().createElement(r,null);else{var l={};t&&(l=t),n=o().createElement(v,l)}a().render(n,e)},R=document.querySelector("#_tabs_component");R&&D(R,{},(function(){var e={url:M.domain,scope:M.name,label:M.name,module:"./index",dimensions:{x:0,y:0,h:850,w:400}},t=function(e,t){return function(){var r=(0,n.useState)(!0),l=(0,i.Z)(r,2),a=l[0],s=l[1],c=(0,g.useRecoilState)(k),u=(0,i.Z)(c,2),d=u[0],f=u[1],m=(0,g.useRecoilState)(O),b=(0,i.Z)(m,2),y=b[0],v=b[1],h=(0,g.useRecoilState)(j),w=(0,i.Z)(h,2),S=w[0],M=w[1],D=(0,g.useRecoilState)(E),R=(0,i.Z)(D,2),C=R[0],Z=R[1],L=(0,g.useRecoilState)(x),I=(0,i.Z)(L,2),q={projects:S,setProjects:M,activeResources:d,setActiveResources:f,selectedElements:y,setSelectedElements:v,selectionId:C,setSelectionId:Z,trigger:I[0],setTrigger:I[1],store:(0,g.useRecoilValue)(P)};return o().createElement("div",null,o().createElement(p.IconButton,{style:{position:"absolute",right:a?450:0},variant:"contained",color:"primary",onClick:function(){return s(!a)}},a?o().createElement(o().Fragment,null):o().createElement(_.default,null)),o().createElement(e,{sharedProps:q,module:t,children:null}))}}(v,e);return o().createElement("div",{style:{width:e.dimensions.w,height:e.dimensions.h}},o().createElement(g.RecoilRoot,null,o().createElement(S.QueryClientProvider,{client:new S.QueryClient},o().createElement(t,{module:e}))))}));const C=D},60306:e=>{"use strict";e.exports=JSON.parse('{"name":"tabs","version":"1.0.0","port":"8086","domain":"https://consolidproject.github.io/pluginAggregatorTabs/","scripts":{"start":"webpack serve --config config/webpack.dev.js","build:dev":"webpack --config config/webpack.dev.js","build":"webpack --config config/webpack.prod.js"},"dependencies":{"@frogcat/ttl2jsonld":"0.0.6","@inrupt/solid-client-authn-browser":"^1.11.2","@inrupt/solid-ui-react":"^2.3.1","@ldflex/comunica":"^3.4.2","@material-ui/core":"^4.12.3","@material-ui/icons":"^4.9.1","@solid/query-ldflex":"^2.11.3","assert":"^2.0.0","browserify-fs":"^1.0.0","browserify-zlib":"^0.2.0","buffer":"^6.0.3","consolid-react-ui":"0.0.11","crypto-browserify":"^3.12.0","events":"^3.3.0","graphql-ld":"^1.2.0","graphql-ld-comunica-solid":"^1.0.1","https-browserify":"^1.0.0","ldflex":"^2.12.1","mem":"^9.0.0","n3":"^1.11.1","os-browserify":"^0.3.0","path":"^0.12.7","path-browserify":"^1.0.1","process":"^0.11.10","react":"^17.0.1","react-bootstrap":"^1.6.0","react-dom":"^17.0.1","react-query":"^3.18.1","react-router-dom":"^5.2.0","recoil":"^0.4.1","source-map-loader":"^3.0.0","stream-browserify":"^3.0.0","stream-http":"^3.2.0","util":"^0.12.4"},"devDependencies":{"@babel/core":"^7.12.3","@babel/plugin-transform-runtime":"^7.12.1","@babel/preset-env":"^7.12.1","@babel/preset-react":"^7.12.1","babel-loader":"^8.1.0","clean-webpack-plugin":"^3.0.0","css-loader":"^5.0.0","html-webpack-plugin":"^4.5.0","style-loader":"^2.0.0","webpack":"^5.4.0","webpack-cli":"^4.7.0","webpack-dev-server":"^3.11.2","webpack-merge":"^5.2.0"}}')}}]);