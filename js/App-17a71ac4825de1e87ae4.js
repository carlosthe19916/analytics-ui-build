!function(e){function n(n){for(var r,o,a=n[0],i=n[1],c=n[2],u=0,s=[];u<a.length;u++)o=a[u],R[o]&&s.push(R[o][0]),R[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(I&&I(n);s.length;)s.shift()();return S.push.apply(S,c||[]),t()}function t(){for(var e,n=0;n<S.length;n++){for(var t=S[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==R[a]&&(r=!1)}r&&(S.splice(n--,1),e=U(U.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!O[e]||!E[e])return;for(var t in E[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--y&&0===g&&D()}(e,n),r&&r(e,n)};var o,a=!0,i="17a71ac4825de1e87ae4",c=1e4,u={},s=[],l=[];var d=[],p="idle";function f(e){p=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var h,v,m,y=0,g=0,b={},E={},O={};function w(e){return+e+""===e?+e:e}function P(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,f("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=U.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;E={},b={},O=e.c,m=e.h,f("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});for(var t in v={},R)_(t);return"prepare"===p&&0===g&&0===y&&D(),n})}function _(e){O[e]?(E[e]=!0,y++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=U.p+""+e+"."+i+".hot-update.js",n.appendChild(t)}(e)):b[e]=!0}function D(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then(function(){return j(a)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(w(t));e.resolve(n)}}function j(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,r,o,a,c;function l(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=A[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var u=0;u<a.parents.length;u++){var s=a.parents[u],l=A[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(l.hot._acceptedDependencies[i]?(t[s]||(t[s]=[]),d(t[s],[i])):(delete t[s],n.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},y=[],g={},b=function(){console.warn("[HMR] unexpected require("+P.moduleId+") to disposed module")};for(var E in v)if(Object.prototype.hasOwnProperty.call(v,E)){var P;c=w(E);var _=!1,D=!1,j=!1,S="";switch((P=v[E]?l(c):{type:"disposed",moduleId:E}).chain&&(S="\nUpdate propagation: "+P.chain.join(" -> ")),P.type){case"self-declined":n.onDeclined&&n.onDeclined(P),n.ignoreDeclined||(_=new Error("Aborted because of self decline: "+P.moduleId+S));break;case"declined":n.onDeclined&&n.onDeclined(P),n.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+P.moduleId+" in "+P.parentId+S));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(P),n.ignoreUnaccepted||(_=new Error("Aborted because "+c+" is not accepted"+S));break;case"accepted":n.onAccepted&&n.onAccepted(P),D=!0;break;case"disposed":n.onDisposed&&n.onDisposed(P),j=!0;break;default:throw new Error("Unexception type "+P.type)}if(_)return f("abort"),Promise.reject(_);if(D)for(c in g[c]=v[c],d(y,P.outdatedModules),P.outdatedDependencies)Object.prototype.hasOwnProperty.call(P.outdatedDependencies,c)&&(h[c]||(h[c]=[]),d(h[c],P.outdatedDependencies[c]));j&&(d(y,[P.moduleId]),g[c]=b)}var x,L=[];for(r=0;r<y.length;r++)c=y[r],A[c]&&A[c].hot._selfAccepted&&L.push({module:c,errorHandler:A[c].hot._selfAccepted});f("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete R[e]}(e)});for(var k,I,T=y.slice();T.length>0;)if(c=T.pop(),a=A[c]){var H={},C=a.hot._disposeHandlers;for(o=0;o<C.length;o++)(t=C[o])(H);for(u[c]=H,a.hot.active=!1,delete A[c],delete h[c],o=0;o<a.children.length;o++){var M=A[a.children[o]];M&&((x=M.parents.indexOf(c))>=0&&M.parents.splice(x,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=A[c]))for(I=h[c],o=0;o<I.length;o++)k=I[o],(x=a.children.indexOf(k))>=0&&a.children.splice(x,1);for(c in f("apply"),i=m,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var q=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=A[c])){I=h[c];var N=[];for(r=0;r<I.length;r++)if(k=I[r],t=a.hot._acceptedDependencies[k]){if(-1!==N.indexOf(t))continue;N.push(t)}for(r=0;r<N.length;r++){t=N[r];try{t(I)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:c,dependencyId:I[r],error:e}),n.ignoreErrored||q||(q=e)}}}for(r=0;r<L.length;r++){var F=L[r];c=F.module,s=[c];try{U(c)}catch(e){if("function"==typeof F.errorHandler)try{F.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:t,originalError:e}),n.ignoreErrored||q||(q=t),q||(q=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:c,error:e}),n.ignoreErrored||q||(q=e)}}return q?(f("fail"),Promise.reject(q)):(f("idle"),new Promise(function(e){e(y)}))}var A={},R={1:0},S=[];function U(n){if(A[n])return A[n].exports;var t=A[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:P,apply:j,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:u[e]};return o=void 0,n}(n),parents:(l=s,s=[],l),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=A[e];if(!n)return U;var t=function(t){return n.hot.active?(A[t]?-1===A[t].parents.indexOf(e)&&A[t].parents.push(e):(s=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),s=[]),U(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return U[e]},set:function(n){U[e]=n}}};for(var a in U)Object.prototype.hasOwnProperty.call(U,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(t,a,r(a));return t.e=function(e){return"ready"===p&&f("prepare"),g++,U.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===p&&(b[e]||_(e),0===g&&0===y&&D())}},t.t=function(e,n){return 1&n&&(e=t(e)),U.t(e,-2&n)},t}(n)),t.l=!0,t.exports}U.e=function(e){var n=[],t=R[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=R[e]=[n,r]});n.push(t[2]=r);var o,a=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,U.nc&&c.setAttribute("nonce",U.nc),c.src=function(e){return U.p+"js/"+({0:"Rules~SamplePage",2:"SamplePage",3:"Rules"}[e]||e)+"-"+i+".js"}(e),o=function(n){c.onerror=c.onload=null,clearTimeout(u);var t=R[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,t[1](a)}R[e]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,a.appendChild(c)}return Promise.all(n)},U.m=e,U.c=A,U.d=function(e,n,t){U.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},U.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},U.t=function(e,n){if(1&n&&(e=U(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(U.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)U.d(t,r,function(n){return e[n]}.bind(null,r));return t},U.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return U.d(n,"a",n),n},U.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},U.p="/beta/apps/xavier/",U.oe=function(e){throw console.error(e),e},U.h=function(){return i};var x=window.webpackJsonp=window.webpackJsonp||[],L=x.push.bind(x);x.push=n,x=x.slice();for(var k=0;k<x.length;k++)n(x[k]);var I=L;S.push([132,5]),t()}({129:function(e,n,t){var r=t(27);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=t(52)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(27,function(){var n=t(27);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(n)}),e.hot.dispose(function(){a()})},13:function(e,n,t){"use strict";var r=t(14);t.d(n,"a",function(){return o}),t.d(n,"d",function(){return a}),t.d(n,"c",function(){return i}),t.d(n,"b",function(){return c});var o={UPLOAD_REQUEST:"UPLOAD_REQUEST",UPLOAD_PROGRESS:"UPLOAD_PROGRESS",UPLOAD_CLEAR:"UPLOAD_CLEAR"},a=function(e,n,t){var a=new FormData;return a.append("file",n,n.name),{type:o.UPLOAD_REQUEST,payload:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.post("/upload/".concat(e),n,t)}(e,a,t),meta:{file:n,notifications:{rejected:{variant:"danger",title:"Failed to upload file ".concat(n.name)}}}}},i=function(e,n){return{type:o.UPLOAD_PROGRESS,payload:{file:e,progress:n}}},c=function(){return{type:o.UPLOAD_CLEAR}}},132:function(e,n,t){"use strict";t.r(n);var r,o=t(1),a=t.n(o),i=t(32),c=t.n(i),u=t(61),s=t(19),l=t(44),d=t.n(l),p=t(50),f=t(3),h=t.n(f),v=t(8),m={loading:!1,error:null},y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=Object.assign({},m);return t[e]=n,t},g=function(e){return e+"_FULFILLED"},b=function(e){return e+"_PENDING"},E=function(e){return e+"_REJECTED"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y("reports",[]),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b(v.b):return h()({},e,{reports:[],loading:!0,error:null});case g(v.b):return h()({},e,{reports:n.payload.data,loading:!1,error:null,total:n.payload.data.length});case E(v.b):return h()({},e,{reports:[],loading:!1,error:n.payload.message});case b(v.a):return h()({},e,{loading:!0,error:null});case g(v.a):return h()({},e,{loading:!1,error:null,report:n.payload.data});case E(v.a):return h()({},e,{loading:!1,error:n.payload.message});default:return e}},w=t(46),P=t.n(w),_=t(13),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y("uploads",[]),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case _.a.UPLOAD_PROGRESS:return h()({},e,{uploads:e.uploads.map(function(e){var t=h()({},e);return e.file===n.payload.file&&(t=Object.assign({},t,n.payload)),t})});case _.a.UPLOAD_CLEAR:return h()({},e,{uploads:[]});case b(_.a.UPLOAD_REQUEST):return h()({},e,{uploads:[].concat(P()(e.uploads),[{file:n.meta.file,success:null,error:null}])});case g(_.a.UPLOAD_REQUEST):return h()({},e,{uploads:e.uploads.map(function(e){return e.file===n.meta.file?h()({},e,{success:!0,error:null}):h()({},e)})});case E(_.a.UPLOAD_REQUEST):return h()({},e,{uploads:e.uploads.map(function(e){return e.file===n.meta.file?h()({},e,{success:!1,error:n.payload.message}):e})});default:return e}};var j=t(9),A=t.n(j),R=t(10),S=t.n(R),U=t(16),x=t.n(U),L=t(17),k=t.n(L),I=t(18),T=t.n(I),H=t(0),C=t.n(H),M=t(90),q=t(42),N=t.n(q),F=t(47),G=t.n(F),Q=t(56),B=t(92),J=t(91),V=t(15),X=t(49),z=t.n(X),W=Object(V.a)(function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,285))}),K=Object(V.a)(function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,288))}),Y=Object(V.a)(function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,287))}),Z=Object(V.a)(function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,289))}),$={dashboard:"/dashboard",upload:"/upload",reports:"/reports",reportView:"/reports/:reportId"},ee=function(e){var n=e.component,t=e.rootClass,r=G()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(t),"pf-c-page__main"),o.setAttribute("role","main"),a.a.createElement(Q.a,N()({},r,{component:n}))};ee.propTypes={component:C.a.func,rootClass:C.a.string};var ne=function(e){var n=e.childProps.location.pathname;return a.a.createElement(B.a,null,a.a.createElement(ee,{path:$.dashboard,component:W,rootClass:"dashboard"}),a.a.createElement(ee,{path:$.upload,component:K,rootClass:"upload"}),a.a.createElement(ee,{path:$.reports,component:Y,rootClass:"reports",exact:!0}),a.a.createElement(ee,{path:$.reportView,component:Z,rootClass:"report",exact:!0}),a.a.createElement(Q.a,{render:function(){return z()($,function(e){return e===n})?null:a.a.createElement(J.a,{to:$.dashboard})}}))};ne.propTypes={childProps:C.a.object.isRequired};t(129);var te=function(e){function n(){return A()(this,n),x()(this,k()(n).apply(this,arguments))}return T()(n,e),S()(n,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("analytics"),insights.chrome.navigation(oe()),this.appNav=insights.chrome.on("APP_NAVIGATION",function(n){return e.props.history.push("/".concat(n.navId))}),this.buildNav=this.props.history.listen(function(){return insights.chrome.navigation(oe())})}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return a.a.createElement(ne,{childProps:this.props})}}]),n}(o.Component);te.propTypes={history:C.a.object};var re=Object(M.a)(Object(s.connect)()(te));function oe(){var e=window.location.pathname.split("/").slice(-1)[0];return[{title:"Actions",id:"actions"},{title:"Rules",id:"rules"}].map(function(n){return h()({},n,{active:n.id===e})})}var ae=function(e){var n="/",t=e.split("/");return t.shift(),"beta"===t[0]&&(t.shift(),n="/beta/"),"".concat(n).concat(t[0],"/").concat(t[1])};c.a.render(a.a.createElement(s.Provider,{store:function(){if(r)throw new Error("store already initialized");for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(r=new d.a({},[Object(p.a)()].concat(n))).register({reports:O,uploads:D}),r}().getStore()},a.a.createElement(u.a,{basename:ae(window.location.pathname)},a.a.createElement(re,null))),document.getElementById("root"))},14:function(e,n,t){"use strict";var r=t(9),o=t.n(r),a=t(10),i=t.n(a),c=t(45),u=t.n(c),s=function(){function e(){o()(this,e)}return i()(e,null,[{key:"request",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",r=arguments.length>3?arguments[3]:void 0;return u.a.request(Object.assign({},{url:"/api/xavier/camel".concat(e),method:t,data:n},r))}},{key:"post",value:function(e,n,t){return this.request(e,n,"post",t)}},{key:"put",value:function(e,n,t){return this.request(e,n,"put",t)}},{key:"get",value:function(e){return this.request(e)}},{key:"delete",value:function(e,n){return this.request(e,null,"delete",n)}}]),e}();n.a=s},15:function(e,n,t){"use strict";t.d(n,"a",function(){return b});var r=t(30),o=t.n(r),a=t(48),i=t.n(a),c=t(9),u=t.n(c),s=t(10),l=t.n(s),d=t(16),p=t.n(d),f=t(17),h=t.n(f),v=t(18),m=t.n(v),y=t(1),g=t.n(y);function b(e){return function(n){function t(e){var n;return u()(this,t),(n=p()(this,h()(t).call(this,e))).state={component:null},n}return m()(t,n),l()(t,[{key:"componentDidMount",value:function(){var n=i()(o.a.mark(function n(){var t,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:t=n.sent,r=t.default,this.setState({component:r});case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?g.a.createElement(e,this.props):g.a.createElement("div",null,"Loading...")}}]),t}(y.Component)}},27:function(e,n,t){(n=e.exports=t(33)(!1)).i(t(130),""),n.push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n",""])},8:function(e,n,t){"use strict";var r=t(14);t.d(n,"b",function(){return o}),t.d(n,"a",function(){return a}),t.d(n,"d",function(){return i}),t.d(n,"c",function(){return c});var o="FETCH_REPORTS",a="FETCH_REPORT",i=function(){return{type:o,payload:r.a.get("/report"),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load reports"}}}}},c=function(e){return{type:a,payload:function(e){return r.a.get("/report/".concat(e))}(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report ".concat(e)}}}}}}});
//# sourceMappingURL=../sourcemaps/App.js.map