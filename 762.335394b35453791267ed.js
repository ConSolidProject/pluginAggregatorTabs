(self.webpackChunktabs=self.webpackChunktabs||[]).push([[762],{95318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},20862:(e,t,r)=>{var n=r(50008).default;function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=l?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r},e.exports.default=e.exports,e.exports.__esModule=!0},50008:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},89875:(e,t,r)=>{"use strict";var n=r(95318),o=r(20862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(r(77865)),a=(0,n(r(2108)).default)(l.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.default=a},2108:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(28546)},31762:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Z});var n=r(77865),o=r.n(n),l=r(21704),a=r.n(l),s=r(96156),c=r(28481),i=r(5034),u=r(26975),d=r(16837),p=r.n(d),f=r(38399);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=r(60306),v=(0,i.Z)({productionPrefix:y.name,seed:y.name});const h=function(e){var t,r=e.sharedProps,l=e.module;l.children&&Object.keys(l.children)[0]&&(t=Object.keys(l.children)[0]);var a=(0,n.useState)(t),s=(0,c.Z)(a,2),i=s[0],d=s[1];return l.children?o().createElement("div",null,o().createElement(u.ZP,{generateClassName:v},o().createElement(f.CssBaseline,null),o().createElement("div",{id:"pluginChild",style:{width:l.dimensions.w-60-2,marginLeft:60}},Object.keys(l.children).map((function(e){var t=b(b({},l.children[e]),{},{dimensions:b(b({},l.dimensions),{},{width:l.dimensions-60-2})});return o().createElement(p(),{system:{module:t.module,url:t.url,scope:t.scope},sharedProps:r,inactive:i!==e,module:t})})),"        "),o().createElement(f.Drawer,{anchor:"left",variant:"permanent"},o().createElement("div",null),o().createElement(f.Divider,null),Object.keys(l.children).map((function(e){return o().createElement("div",{style:{margin:10,marginLeft:4},key:e+"_icon"},o().createElement(f.SvgIcon,{color:"primary",style:{marginLeft:15,height:30,width:30},onClick:function(){d(e)}},o().createElement("path",{d:l.children[e].icon})))})),o().createElement(f.Divider,null)))):o().createElement("p",null,"This plugin needs child modules to render and cannot be used as standalone. No child modules were passed. Please use always in a container application using an LBDserver configuration.")};var g=r(24853),w=r(75073),j=r(99170),k=((0,g.atom)({key:"session",default:new w.Session}),(0,g.atom)({key:"projects",default:["http://localhost:5000/jeroen/lbd/642f0417-ce23-4d9d-8806-c078aed93ae1/"]})),O=(0,g.atom)({key:"activeResources",default:[]}),E=(0,g.atom)({key:"selectedElements",default:[]}),x=(0,g.atom)({key:"selectionId",default:""}),P=(0,g.atom)({key:"trigger",default:"0"}),S=(0,g.atom)({key:"store",default:new j.Store}),_=r(19705),M=r(89875),D=r(60306);r(60306);var R=function(e,t,r){var n;if(r)n=o().createElement(r,null);else{var l={};t&&(l=t),n=o().createElement(h,l)}a().render(n,e)},C=document.querySelector("#_tabs_component");C&&R(C,{},(function(){var e={url:D.domain,scope:D.name,label:D.name,module:"./index",dimensions:{x:0,y:0,h:850,w:400}},t=function(e,t){return function(){var r=(0,n.useState)(!0),l=(0,c.Z)(r,2),a=l[0],s=l[1],i=(0,g.useRecoilState)(O),u=(0,c.Z)(i,2),d=u[0],p=u[1],m=(0,g.useRecoilState)(E),b=(0,c.Z)(m,2),y=b[0],v=b[1],h=(0,g.useRecoilState)(k),w=(0,c.Z)(h,2),j=w[0],_=w[1],D=(0,g.useRecoilState)(x),R=(0,c.Z)(D,2),C=R[0],Z=R[1],L=(0,g.useRecoilState)(P),I=(0,c.Z)(L,2),q={projects:j,setProjects:_,activeResources:d,setActiveResources:p,selectedElements:y,setSelectedElements:v,selectionId:C,setSelectionId:Z,trigger:I[0],setTrigger:I[1],store:(0,g.useRecoilValue)(S)};return o().createElement("div",null,o().createElement(f.IconButton,{style:{position:"absolute",right:a?450:0},variant:"contained",color:"primary",onClick:function(){return s(!a)}},a?o().createElement(o().Fragment,null):o().createElement(M.default,null)),o().createElement(e,{sharedProps:q,module:t,children:null}))}}(h,e);return o().createElement("div",{style:{width:e.dimensions.w,height:e.dimensions.h}},o().createElement(g.RecoilRoot,null,o().createElement(_.QueryClientProvider,{client:new _.QueryClient},o().createElement(t,{module:e}))))}));const Z=R},60306:e=>{"use strict";e.exports=JSON.parse('{"name":"tabs","version":"1.0.0","port":"8086","domain":"https://consolidproject.github.io/pluginAggregatorTabs/","scripts":{"start":"webpack serve --config config/webpack.dev.js","build:dev":"webpack --config config/webpack.dev.js","build":"webpack --config config/webpack.prod.js"},"dependencies":{"@frogcat/ttl2jsonld":"0.0.6","@inrupt/solid-client-authn-browser":"^1.11.2","@inrupt/solid-ui-react":"^2.3.1","@ldflex/comunica":"^3.4.2","@material-ui/core":"^4.12.3","@material-ui/icons":"^4.9.1","@solid/query-ldflex":"^2.11.3","assert":"^2.0.0","browserify-fs":"^1.0.0","browserify-zlib":"^0.2.0","buffer":"^6.0.3","consolid-react-ui":"0.0.11","crypto-browserify":"^3.12.0","events":"^3.3.0","graphql-ld":"^1.2.0","graphql-ld-comunica-solid":"^1.0.1","https-browserify":"^1.0.0","ldflex":"^2.12.1","mem":"^9.0.0","n3":"^1.11.1","os-browserify":"^0.3.0","path":"^0.12.7","path-browserify":"^1.0.1","process":"^0.11.10","react":"^17.0.1","react-bootstrap":"^1.6.0","react-dom":"^17.0.1","react-query":"^3.18.1","react-router-dom":"^5.2.0","recoil":"^0.4.1","source-map-loader":"^3.0.0","stream-browserify":"^3.0.0","stream-http":"^3.2.0","util":"^0.12.4"},"devDependencies":{"@babel/core":"^7.12.3","@babel/plugin-transform-runtime":"^7.12.1","@babel/preset-env":"^7.12.1","@babel/preset-react":"^7.12.1","babel-loader":"^8.1.0","clean-webpack-plugin":"^3.0.0","css-loader":"^5.0.0","html-webpack-plugin":"^4.5.0","style-loader":"^2.0.0","webpack":"^5.4.0","webpack-cli":"^4.7.0","webpack-dev-server":"^3.11.2","webpack-merge":"^5.2.0"}}')}}]);