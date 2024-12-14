import*as m from"react";function D(r,t){if(typeof r!="object"||!r)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var n=e.call(r,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function R(r){var t=D(r,"string");return typeof t=="symbol"?t:String(t)}function T(r,t,e){return t=R(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function w(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),e.push.apply(e,n)}return e}function j(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?w(Object(e),!0).forEach(function(n){T(r,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}function k(r,t){var e={};for(var n in r)e[n]=t(r[n],n);return e}var _=(r,t,e)=>{for(var n of Object.keys(r)){var a;if(r[n]!==((a=t[n])!==null&&a!==void 0?a:e[n]))return!1}return!0},p=r=>{var t=e=>{var n=r.defaultClassName,a=j(j({},r.defaultVariants),e);for(var o in a){var s,i=(s=a[o])!==null&&s!==void 0?s:r.defaultVariants[o];if(i!=null){var u=i;typeof u=="boolean"&&(u=u===!0?"true":"false");var f=r.variantClassNames[o][u];f&&(n+=" "+f)}}for(var[c,l]of r.compoundVariants)_(c,a,r.defaultVariants)&&(n+=" "+l);return n};return t.variants=()=>Object.keys(r.variantClassNames),t.classNames={get base(){return r.defaultClassName.split(" ")[0]},get variants(){return k(r.variantClassNames,e=>k(e,n=>n.split(" ")[0]))}},t};var P="var(--_1mwhrkn2)",S=p({defaultClassName:"_1mwhrkn3",variantClassNames:{size:{xs:"_1mwhrkn4",sm:"_1mwhrkn5",md:"_1mwhrkn6",lg:"_1mwhrkn7"},variant:{solid:"_1mwhrkn8",outline:"_1mwhrkn9",ghost:"_1mwhrkna"}},defaultVariants:{},compoundVariants:[]}),V="var(--_1mwhrkn0)",x="var(--_1mwhrkn1)",y=p({defaultClassName:"_1mwhrknb",variantClassNames:{size:{xs:"_1mwhrknc",sm:"_1mwhrknd",md:"_1mwhrkne",lg:"_1mwhrknf"}},defaultVariants:{},compoundVariants:[]}),O=p({defaultClassName:"_1mwhrknh",variantClassNames:{size:{xs:"_1mwhrkni",sm:"_1mwhrknj",md:"_1mwhrknk",lg:"_1mwhrknl"}},defaultVariants:{},compoundVariants:[]});import{clsx as E}from"clsx";import{vars as d}from"@everyteen/themes";function g(r){var t=r.match(/^var\((.*)\)$/);return t?t[1]:r}function C(r,t){var e=r;for(var n of t){if(!(n in e))throw new Error("Path ".concat(t.join(" -> ")," does not exist in object"));e=e[n]}return e}function h(r,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],n={};for(var a in r){var o=r[a],s=[...e,a];typeof o=="string"||typeof o=="number"||o==null?n[a]=t(o,s):typeof o=="object"&&!Array.isArray(o)?n[a]=h(o,t,s):console.warn('Skipping invalid key "'.concat(s.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(o)?"Array":typeof o,'"'))}return n}function N(r,t){var e={};if(typeof t=="object"){var n=r;h(t,(i,u)=>{if(i!=null){var f=C(n,u);e[g(f)]=String(i)}})}else{var a=r;for(var o in a){var s=a[o];s!=null&&(e[g(o)]=s)}}return Object.defineProperty(e,"toString",{value:function(){return Object.keys(this).map(u=>"".concat(u,":").concat(this[u])).join(";")},writable:!1}),e}import{useCallback as W,useState as X}from"react";var B=r=>{let{elementType:t="button",isDisabled:e,isLoading:n,tabIndex:a,onKeyDown:o,type:s="button"}=r,i=e||n,u=l=>{if(o==null||o(l),l.key===" "||l.key==="Spacebar"||l.key==="32"){if(i||l.defaultPrevented||t==="button")return;l.preventDefault(),l.currentTarget.click();return}if(l.key==="Enter"||l.key==="13"){if(i||l.defaultPrevented||t==="input"&&s!=="button")return;l.preventDefault(),l.currentTarget.click();return}},f={...r,"data-loading":n,tabIndex:i?void 0:a!=null?a:0,onKeyDown:u},c={};switch(t){case"button":{c={type:s!=null?s:"button",disabled:i};break}case"a":{let{href:l,target:b,rel:v}=r;c={role:"button",href:i?void 0:l,target:i?void 0:b,rel:i?void 0:v,"area-disabled":e};break}case"input":{c={role:"button",type:r.type,disabled:i,"area-disabled":void 0};break}default:{c={role:"button",type:s!=null?s:"button","area-disabled":e};break}}return{buttonProps:{...f,...c}}};var A=(r,t)=>{let{buttonProps:e}=B(r),{variant:n="solid",size:a="md",color:o="gray",leftIcon:s,rightIcon:i,isLoading:u,children:f,style:c}=r,l=d.colors.$scale[o][500],b=n==="solid"?d.colors.$scale[o][600]:d.colors.$scale[o][50],v=n==="solid"?d.colors.$scale[o][700]:d.colors.$scale[o][100];return m.createElement("button",{...e,ref:t,className:E([S({size:a,variant:n})]),style:{...N({[V]:l,[x]:b,[P]:v}),...c}},u&&m.createElement("div",{className:O({size:a})}),s&&m.createElement("span",{className:y({size:a})},s),m.createElement("span",null,f),i&&m.createElement("span",{className:y({size:a})},i))},I=m.forwardRef(A);export{I as Button};
//# sourceMappingURL=index.js.map