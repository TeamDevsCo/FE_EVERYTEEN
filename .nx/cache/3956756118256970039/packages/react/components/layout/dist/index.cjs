"use strict";var bo=Object.create;var R=Object.defineProperty;var wo=Object.getOwnPropertyDescriptor;var ho=Object.getOwnPropertyNames;var So=Object.getPrototypeOf,Po=Object.prototype.hasOwnProperty;var ko=(o,a)=>{for(var e in a)R(o,e,{get:a[e],enumerable:!0})},ao=(o,a,e,s)=>{if(a&&typeof a=="object"||typeof a=="function")for(let l of ho(a))!Po.call(o,l)&&l!==e&&R(o,l,{get:()=>a[l],enumerable:!(s=wo(a,l))||s.enumerable});return o};var w=(o,a,e)=>(e=o!=null?bo(So(o)):{},ao(a||!o||!o.__esModule?R(e,"default",{value:o,enumerable:!0}):e,o)),Ro=o=>ao(R({},"__esModule",{value:!0}),o);var $o={};ko($o,{Box:()=>q,Divider:()=>F,Flex:()=>z,Grid:()=>$,GridItem:()=>K,Heading:()=>J,Text:()=>W});module.exports=Ro($o);var O=w(require("react"),1),to=require("clsx");function Oo(o,a){if(typeof o!="object"||!o)return o;var e=o[Symbol.toPrimitive];if(e!==void 0){var s=e.call(o,a||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(o)}function jo(o){var a=Oo(o,"string");return typeof a=="symbol"?a:String(a)}function Eo(o,a,e){return a=jo(a),a in o?Object.defineProperty(o,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[a]=e,o}function eo(o,a){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(o);a&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable})),e.push.apply(e,s)}return e}function B(o){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?eo(Object(e),!0).forEach(function(s){Eo(o,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):eo(Object(e)).forEach(function(s){Object.defineProperty(o,s,Object.getOwnPropertyDescriptor(e,s))})}return o}var so=o=>function(){for(var a=arguments.length,e=new Array(a),s=0;s<a;s++)e[s]=arguments[s];var l=Object.assign({},...e.map(t=>t.styles)),u=Object.keys(l),f=u.filter(t=>"mappings"in l[t]),d=t=>{var r=[],n={},p=B({},t),g=!1;for(var C of f){var _=t[C];if(_!=null){var v=l[C];g=!0;for(var c of v.mappings)n[c]=_,p[c]==null&&delete p[c]}}var y=g?B(B({},n),p):t,P=function(){var b=y[h],S=l[h];try{if(S.mappings)return 1;if(typeof b=="string"||typeof b=="number")r.push(S.values[b].defaultClass);else if(Array.isArray(b))for(var k=0;k<b.length;k++){var Q=b[k];if(Q!=null){var vo=S.responsiveArray[k];r.push(S.values[Q].conditions[vo])}}else for(var U in b){var Z=b[U];Z!=null&&r.push(S.values[Z].conditions[U])}}catch(go){if(!1){var Io,Ko;if(typeof b=="object")if(Array.isArray(b)){var Mo;for(var Yo of b);}else for(var Wo in b)var Xo}throw go}};for(var h in y)P();return o(r.join(" "))};return Object.assign(d,{properties:new Set(u)})};var Vo=o=>o,lo=function(){return so(Vo)(...arguments)};var m="_1oxod3u0",i=lo({conditions:void 0,styles:{margin:{mappings:["marginTop","marginRight","marginBottom","marginLeft"]},padding:{mappings:["paddingTop","paddingRight","paddingBottom","paddingLeft"]},marginX:{mappings:["marginLeft","marginRight"]},marginY:{mappings:["marginTop","marginBottom"]},paddingX:{mappings:["paddingLeft","paddingRight"]},paddingY:{mappings:["paddingTop","paddingBottom"]},marginTop:{values:{0:{defaultClass:"_1oxod3u1"},1:{defaultClass:"_1oxod3u2"},2:{defaultClass:"_1oxod3u3"},3:{defaultClass:"_1oxod3u4"},4:{defaultClass:"_1oxod3u5"},5:{defaultClass:"_1oxod3u6"},6:{defaultClass:"_1oxod3u7"},7:{defaultClass:"_1oxod3u8"},8:{defaultClass:"_1oxod3u9"},9:{defaultClass:"_1oxod3ua"},10:{defaultClass:"_1oxod3ub"},11:{defaultClass:"_1oxod3uc"},12:{defaultClass:"_1oxod3ud"},14:{defaultClass:"_1oxod3ue"},16:{defaultClass:"_1oxod3uf"},20:{defaultClass:"_1oxod3ug"},24:{defaultClass:"_1oxod3uh"},28:{defaultClass:"_1oxod3ui"},32:{defaultClass:"_1oxod3uj"},36:{defaultClass:"_1oxod3uk"},40:{defaultClass:"_1oxod3ul"},44:{defaultClass:"_1oxod3um"},48:{defaultClass:"_1oxod3un"},52:{defaultClass:"_1oxod3uo"},56:{defaultClass:"_1oxod3up"},60:{defaultClass:"_1oxod3uq"},64:{defaultClass:"_1oxod3ur"},72:{defaultClass:"_1oxod3us"},80:{defaultClass:"_1oxod3ut"},96:{defaultClass:"_1oxod3uu"}}},marginRight:{values:{0:{defaultClass:"_1oxod3uv"},1:{defaultClass:"_1oxod3uw"},2:{defaultClass:"_1oxod3ux"},3:{defaultClass:"_1oxod3uy"},4:{defaultClass:"_1oxod3uz"},5:{defaultClass:"_1oxod3u10"},6:{defaultClass:"_1oxod3u11"},7:{defaultClass:"_1oxod3u12"},8:{defaultClass:"_1oxod3u13"},9:{defaultClass:"_1oxod3u14"},10:{defaultClass:"_1oxod3u15"},11:{defaultClass:"_1oxod3u16"},12:{defaultClass:"_1oxod3u17"},14:{defaultClass:"_1oxod3u18"},16:{defaultClass:"_1oxod3u19"},20:{defaultClass:"_1oxod3u1a"},24:{defaultClass:"_1oxod3u1b"},28:{defaultClass:"_1oxod3u1c"},32:{defaultClass:"_1oxod3u1d"},36:{defaultClass:"_1oxod3u1e"},40:{defaultClass:"_1oxod3u1f"},44:{defaultClass:"_1oxod3u1g"},48:{defaultClass:"_1oxod3u1h"},52:{defaultClass:"_1oxod3u1i"},56:{defaultClass:"_1oxod3u1j"},60:{defaultClass:"_1oxod3u1k"},64:{defaultClass:"_1oxod3u1l"},72:{defaultClass:"_1oxod3u1m"},80:{defaultClass:"_1oxod3u1n"},96:{defaultClass:"_1oxod3u1o"}}},marginBottom:{values:{0:{defaultClass:"_1oxod3u1p"},1:{defaultClass:"_1oxod3u1q"},2:{defaultClass:"_1oxod3u1r"},3:{defaultClass:"_1oxod3u1s"},4:{defaultClass:"_1oxod3u1t"},5:{defaultClass:"_1oxod3u1u"},6:{defaultClass:"_1oxod3u1v"},7:{defaultClass:"_1oxod3u1w"},8:{defaultClass:"_1oxod3u1x"},9:{defaultClass:"_1oxod3u1y"},10:{defaultClass:"_1oxod3u1z"},11:{defaultClass:"_1oxod3u20"},12:{defaultClass:"_1oxod3u21"},14:{defaultClass:"_1oxod3u22"},16:{defaultClass:"_1oxod3u23"},20:{defaultClass:"_1oxod3u24"},24:{defaultClass:"_1oxod3u25"},28:{defaultClass:"_1oxod3u26"},32:{defaultClass:"_1oxod3u27"},36:{defaultClass:"_1oxod3u28"},40:{defaultClass:"_1oxod3u29"},44:{defaultClass:"_1oxod3u2a"},48:{defaultClass:"_1oxod3u2b"},52:{defaultClass:"_1oxod3u2c"},56:{defaultClass:"_1oxod3u2d"},60:{defaultClass:"_1oxod3u2e"},64:{defaultClass:"_1oxod3u2f"},72:{defaultClass:"_1oxod3u2g"},80:{defaultClass:"_1oxod3u2h"},96:{defaultClass:"_1oxod3u2i"}}},marginLeft:{values:{0:{defaultClass:"_1oxod3u2j"},1:{defaultClass:"_1oxod3u2k"},2:{defaultClass:"_1oxod3u2l"},3:{defaultClass:"_1oxod3u2m"},4:{defaultClass:"_1oxod3u2n"},5:{defaultClass:"_1oxod3u2o"},6:{defaultClass:"_1oxod3u2p"},7:{defaultClass:"_1oxod3u2q"},8:{defaultClass:"_1oxod3u2r"},9:{defaultClass:"_1oxod3u2s"},10:{defaultClass:"_1oxod3u2t"},11:{defaultClass:"_1oxod3u2u"},12:{defaultClass:"_1oxod3u2v"},14:{defaultClass:"_1oxod3u2w"},16:{defaultClass:"_1oxod3u2x"},20:{defaultClass:"_1oxod3u2y"},24:{defaultClass:"_1oxod3u2z"},28:{defaultClass:"_1oxod3u30"},32:{defaultClass:"_1oxod3u31"},36:{defaultClass:"_1oxod3u32"},40:{defaultClass:"_1oxod3u33"},44:{defaultClass:"_1oxod3u34"},48:{defaultClass:"_1oxod3u35"},52:{defaultClass:"_1oxod3u36"},56:{defaultClass:"_1oxod3u37"},60:{defaultClass:"_1oxod3u38"},64:{defaultClass:"_1oxod3u39"},72:{defaultClass:"_1oxod3u3a"},80:{defaultClass:"_1oxod3u3b"},96:{defaultClass:"_1oxod3u3c"}}},paddingTop:{values:{0:{defaultClass:"_1oxod3u3d"},1:{defaultClass:"_1oxod3u3e"},2:{defaultClass:"_1oxod3u3f"},3:{defaultClass:"_1oxod3u3g"},4:{defaultClass:"_1oxod3u3h"},5:{defaultClass:"_1oxod3u3i"},6:{defaultClass:"_1oxod3u3j"},7:{defaultClass:"_1oxod3u3k"},8:{defaultClass:"_1oxod3u3l"},9:{defaultClass:"_1oxod3u3m"},10:{defaultClass:"_1oxod3u3n"},11:{defaultClass:"_1oxod3u3o"},12:{defaultClass:"_1oxod3u3p"},14:{defaultClass:"_1oxod3u3q"},16:{defaultClass:"_1oxod3u3r"},20:{defaultClass:"_1oxod3u3s"},24:{defaultClass:"_1oxod3u3t"},28:{defaultClass:"_1oxod3u3u"},32:{defaultClass:"_1oxod3u3v"},36:{defaultClass:"_1oxod3u3w"},40:{defaultClass:"_1oxod3u3x"},44:{defaultClass:"_1oxod3u3y"},48:{defaultClass:"_1oxod3u3z"},52:{defaultClass:"_1oxod3u40"},56:{defaultClass:"_1oxod3u41"},60:{defaultClass:"_1oxod3u42"},64:{defaultClass:"_1oxod3u43"},72:{defaultClass:"_1oxod3u44"},80:{defaultClass:"_1oxod3u45"},96:{defaultClass:"_1oxod3u46"}}},paddingRight:{values:{0:{defaultClass:"_1oxod3u47"},1:{defaultClass:"_1oxod3u48"},2:{defaultClass:"_1oxod3u49"},3:{defaultClass:"_1oxod3u4a"},4:{defaultClass:"_1oxod3u4b"},5:{defaultClass:"_1oxod3u4c"},6:{defaultClass:"_1oxod3u4d"},7:{defaultClass:"_1oxod3u4e"},8:{defaultClass:"_1oxod3u4f"},9:{defaultClass:"_1oxod3u4g"},10:{defaultClass:"_1oxod3u4h"},11:{defaultClass:"_1oxod3u4i"},12:{defaultClass:"_1oxod3u4j"},14:{defaultClass:"_1oxod3u4k"},16:{defaultClass:"_1oxod3u4l"},20:{defaultClass:"_1oxod3u4m"},24:{defaultClass:"_1oxod3u4n"},28:{defaultClass:"_1oxod3u4o"},32:{defaultClass:"_1oxod3u4p"},36:{defaultClass:"_1oxod3u4q"},40:{defaultClass:"_1oxod3u4r"},44:{defaultClass:"_1oxod3u4s"},48:{defaultClass:"_1oxod3u4t"},52:{defaultClass:"_1oxod3u4u"},56:{defaultClass:"_1oxod3u4v"},60:{defaultClass:"_1oxod3u4w"},64:{defaultClass:"_1oxod3u4x"},72:{defaultClass:"_1oxod3u4y"},80:{defaultClass:"_1oxod3u4z"},96:{defaultClass:"_1oxod3u50"}}},paddingBottom:{values:{0:{defaultClass:"_1oxod3u51"},1:{defaultClass:"_1oxod3u52"},2:{defaultClass:"_1oxod3u53"},3:{defaultClass:"_1oxod3u54"},4:{defaultClass:"_1oxod3u55"},5:{defaultClass:"_1oxod3u56"},6:{defaultClass:"_1oxod3u57"},7:{defaultClass:"_1oxod3u58"},8:{defaultClass:"_1oxod3u59"},9:{defaultClass:"_1oxod3u5a"},10:{defaultClass:"_1oxod3u5b"},11:{defaultClass:"_1oxod3u5c"},12:{defaultClass:"_1oxod3u5d"},14:{defaultClass:"_1oxod3u5e"},16:{defaultClass:"_1oxod3u5f"},20:{defaultClass:"_1oxod3u5g"},24:{defaultClass:"_1oxod3u5h"},28:{defaultClass:"_1oxod3u5i"},32:{defaultClass:"_1oxod3u5j"},36:{defaultClass:"_1oxod3u5k"},40:{defaultClass:"_1oxod3u5l"},44:{defaultClass:"_1oxod3u5m"},48:{defaultClass:"_1oxod3u5n"},52:{defaultClass:"_1oxod3u5o"},56:{defaultClass:"_1oxod3u5p"},60:{defaultClass:"_1oxod3u5q"},64:{defaultClass:"_1oxod3u5r"},72:{defaultClass:"_1oxod3u5s"},80:{defaultClass:"_1oxod3u5t"},96:{defaultClass:"_1oxod3u5u"}}},paddingLeft:{values:{0:{defaultClass:"_1oxod3u5v"},1:{defaultClass:"_1oxod3u5w"},2:{defaultClass:"_1oxod3u5x"},3:{defaultClass:"_1oxod3u5y"},4:{defaultClass:"_1oxod3u5z"},5:{defaultClass:"_1oxod3u60"},6:{defaultClass:"_1oxod3u61"},7:{defaultClass:"_1oxod3u62"},8:{defaultClass:"_1oxod3u63"},9:{defaultClass:"_1oxod3u64"},10:{defaultClass:"_1oxod3u65"},11:{defaultClass:"_1oxod3u66"},12:{defaultClass:"_1oxod3u67"},14:{defaultClass:"_1oxod3u68"},16:{defaultClass:"_1oxod3u69"},20:{defaultClass:"_1oxod3u6a"},24:{defaultClass:"_1oxod3u6b"},28:{defaultClass:"_1oxod3u6c"},32:{defaultClass:"_1oxod3u6d"},36:{defaultClass:"_1oxod3u6e"},40:{defaultClass:"_1oxod3u6f"},44:{defaultClass:"_1oxod3u6g"},48:{defaultClass:"_1oxod3u6h"},52:{defaultClass:"_1oxod3u6i"},56:{defaultClass:"_1oxod3u6j"},60:{defaultClass:"_1oxod3u6k"},64:{defaultClass:"_1oxod3u6l"},72:{defaultClass:"_1oxod3u6m"},80:{defaultClass:"_1oxod3u6n"},96:{defaultClass:"_1oxod3u6o"}}}}},{conditions:void 0,styles:{borderRadius:{values:{none:{defaultClass:"_1oxod3u6p"},sm:{defaultClass:"_1oxod3u6q"},base:{defaultClass:"_1oxod3u6r"},md:{defaultClass:"_1oxod3u6s"},lg:{defaultClass:"_1oxod3u6t"},xl:{defaultClass:"_1oxod3u6u"},"2xl":{defaultClass:"_1oxod3u6v"},"3xl":{defaultClass:"_1oxod3u6w"},full:{defaultClass:"_1oxod3u6x"}}}}},{conditions:void 0,styles:{boxShadow:{values:{xs:{defaultClass:"_1oxod3u6y"},sm:{defaultClass:"_1oxod3u6z"},base:{defaultClass:"_1oxod3u70"},md:{defaultClass:"_1oxod3u71"},lg:{defaultClass:"_1oxod3u72"},xl:{defaultClass:"_1oxod3u73"},"2xl":{defaultClass:"_1oxod3u74"},inner:{defaultClass:"_1oxod3u75"},darkLg:{defaultClass:"_1oxod3u76"},outline:{defaultClass:"_1oxod3u77"}}}}});var x=(o,a)=>{let e={};return a.forEach(s=>{o!=null&&o[s]&&(e[s]=o[s])}),e};var D=require("@everyteen/themes"),No=(o,a)=>{var f,d,t,r;let{as:e="div",color:s,background:l,children:u}=o;return O.createElement(e,{...o,ref:a,className:(0,to.clsx)([m,i(x(o,Array.from(i.properties))),o.className]),style:{color:s&&((d=(f=D.vars.colors.$scale)==null?void 0:f[s])==null?void 0:d[700]),background:l&&((r=(t=D.vars.colors.$scale)==null?void 0:t[l])==null?void 0:r[100]),...o.style}},u)},q=O.forwardRef(No);var j=w(require("react"),1),ro=require("@everyteen/themes"),To=(o,a)=>{var d,t,r;let{color:e="gray",variant:s="solid",orientation:l="horizontal",size:u=1}=o,f=l==="horizontal"?{width:"100%",borderWidth:`0 0 ${u}px 0`}:{height:"100%",borderWidth:`0 0 0 ${u}px`};return j.createElement("hr",{...o,ref:a,style:{borderStyle:s,borderColor:(r=(t=(d=ro.vars.colors.$scale)==null?void 0:d[e])==null?void 0:t[200])!=null?r:e,...f,...o.style}})},F=j.forwardRef(To);var E=w(require("react"),1),uo=require("clsx");var H=require("@everyteen/themes"),Go=(o,a)=>{var _,v,c,y;let{as:e="div",children:s,color:l,background:u,align:f,basis:d,direction:t,grow:r,justify:n,shrink:p,wrap:g,gap:C}=o;return E.createElement(e,{...o,ref:a,className:(0,uo.clsx)([i(x(o,Array.from(i.properties))),o.className]),style:{display:"flex",alignItems:f,justifyContent:n,flexDirection:t,flexWrap:g,flexGrow:r,flexShrink:p,flexBasis:d,gap:C,color:l&&((v=(_=H.vars.colors.$scale)==null?void 0:_[l])==null?void 0:v[700]),background:u&&((y=(c=H.vars.colors.$scale)==null?void 0:c[u])==null?void 0:y[100]),...o.style}},s)},z=E.forwardRef(Go);var V=w(require("react"),1),fo=require("clsx");var L=require("@everyteen/themes"),Ao=(o,a)=>{var y,P,h,A;let{as:e="div",color:s,background:l,children:u,autoColumns:f,autoFlow:d,autoRows:t,columnGap:r,column:n,gap:p,row:g,rowGap:C,templateColumns:_,templateRows:v,templateAreas:c}=o;return V.createElement(e,{...o,ref:a,className:(0,fo.clsx)([m,i(x(o,Array.from(i.properties))),o.className]),style:{display:"grid",gridAutoColumns:f,gridAutoFlow:d,gridAutoRows:t,gridColumnGap:r,gridGap:p,gridRowGap:C,gridTemplateColumns:_,gridTemplateRows:v,gridTemplateAreas:c,gridColumn:n,gridRow:g,color:s&&((P=(y=L.vars.colors.$scale)==null?void 0:y[s])==null?void 0:P[700]),background:l&&((A=(h=L.vars.colors.$scale)==null?void 0:h[l])==null?void 0:A[100]),...o.style}},u)},$=V.forwardRef(Ao);var N=w(require("react"),1),io=require("clsx");var I=require("@everyteen/themes"),Bo=(o,a)=>{var C,_,v,c;let{as:e="div",color:s,background:l,children:u,area:f,colEnd:d,colStart:t,colSpan:r,rowEnd:n,rowStart:p,rowSpan:g}=o;return N.createElement(e,{...o,ref:a,className:(0,io.clsx)([m,i(x(o,Array.from(i.properties))),o.className]),style:{gridArea:f,gridColumnEnd:d,gridColumnStart:t,gridColumn:r,gridRowEnd:n,gridRowStart:p,gridRow:g,color:s&&((_=(C=I.vars.colors.$scale)==null?void 0:C[s])==null?void 0:_[700]),background:l&&((c=(v=I.vars.colors.$scale)==null?void 0:v[l])==null?void 0:c[100]),...o.style}},u)},K=N.forwardRef(Bo);var G=w(require("react"),1);var Y=require("@everyteen/themes"),co=require("clsx");function Do(o,a){if(typeof o!="object"||!o)return o;var e=o[Symbol.toPrimitive];if(e!==void 0){var s=e.call(o,a||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(o)}function qo(o){var a=Do(o,"string");return typeof a=="symbol"?a:String(a)}function Fo(o,a,e){return a=qo(a),a in o?Object.defineProperty(o,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[a]=e,o}function no(o,a){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(o);a&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable})),e.push.apply(e,s)}return e}function xo(o){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?no(Object(e),!0).forEach(function(s){Fo(o,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):no(Object(e)).forEach(function(s){Object.defineProperty(o,s,Object.getOwnPropertyDescriptor(e,s))})}return o}function po(o,a){var e={};for(var s in o)e[s]=a(o[s],s);return e}var Ho=(o,a,e)=>{for(var s of Object.keys(o)){var l;if(o[s]!==((l=a[s])!==null&&l!==void 0?l:e[s]))return!1}return!0},M=o=>{var a=e=>{var s=o.defaultClassName,l=xo(xo({},o.defaultVariants),e);for(var u in l){var f,d=(f=l[u])!==null&&f!==void 0?f:o.defaultVariants[u];if(d!=null){var t=d;typeof t=="boolean"&&(t=t===!0?"true":"false");var r=o.variantClassNames[u][t];r&&(s+=" "+r)}}for(var[n,p]of o.compoundVariants)Ho(n,l,o.defaultVariants)&&(s+=" "+p);return s};return a.variants=()=>Object.keys(o.variantClassNames),a.classNames={get base(){return o.defaultClassName.split(" ")[0]},get variants(){return po(o.variantClassNames,e=>po(e,s=>s.split(" ")[0]))}},a};var T=M({defaultClassName:"_1cqgcm10",variantClassNames:{fontSize:{"6xl":"_1cqgcm11","5xl":"_1cqgcm12","4xl":"_1cqgcm13","3xl":"_1cqgcm14","2xl":"_1cqgcm15",xl:"_1cqgcm16",lg:"_1cqgcm17",md:"_1cqgcm18",sm:"_1cqgcm19",xs:"_1cqgcm1a"},defaultVariants:{fontSize:"xl"}},defaultVariants:{},compoundVariants:[]});var zo=(o,a)=>{var d,t,r,n;let{as:e="p",color:s="gray",background:l,children:u,fontSize:f}=o;return G.createElement(e,{...o,ref:a,className:(0,co.clsx)([m,i(x(o,Array.from(i.properties))),T({fontSize:f}),o.className]),style:{color:s&&((t=(d=Y.vars.colors.$scale)==null?void 0:d[s])==null?void 0:t[700]),background:l&&((n=(r=Y.vars.colors.$scale)==null?void 0:r[l])==null?void 0:n[100]),...o.style}},u)},W=G.forwardRef(zo);var X=require("@everyteen/themes"),_o=w(require("react"),1),mo=require("react");var Co=require("clsx");var Lo=(o,a)=>{var d,t,r,n;let{as:e="h1",fontSize:s,background:l,color:u="gray",children:f}=o;return _o.createElement(e,{...o,ref:a,className:(0,Co.clsx)([m,i(x(o,Array.from(i.properties))),T({fontSize:s}),o.className]),style:{color:u&&((t=(d=X.vars.colors.$scale)==null?void 0:d[u])==null?void 0:t[700]),background:l&&((n=(r=X.vars.colors.$scale)==null?void 0:r[l])==null?void 0:n[100]),...o.style}},f)},J=(0,mo.forwardRef)(Lo);
//# sourceMappingURL=index.cjs.map