(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{6122:function(e,s,t){"use strict";let r=t(24246);s.Z=function(e){let{color:s,info:t,warning:l,success:i,error:n,muted:o,solid:a,outline:c,curved:u,rounded:f,pill:d,style:p,className:h,children:b}=e,y={classes:["frui-alert"],styles:{}};u?y.classes.push("frui-curved"):f?y.classes.push("frui-rounded"):d&&y.classes.push("frui-pill"),"outline"==(c?"outline":"solid")?(y.classes.push("frui-solid","frui-thin"),s?(y.styles.borderColor=s,y.styles.color=s):t?y.classes.push("frui-bd-info","frui-tx-info"):l?y.classes.push("frui-bd-warning","frui-tx-warning"):i?y.classes.push("frui-bd-success","frui-tx-success"):n?y.classes.push("frui-bd-error","frui-tx-error"):o&&y.classes.push("frui-bd-muted","frui-tx-muted")):(y.classes.push("frui-tx-white"),s?y.styles.backgroundColor=s:t?y.classes.push("frui-bg-info"):l?y.classes.push("frui-bg-warning"):i?y.classes.push("frui-bg-success"):n?y.classes.push("frui-bg-error"):o&&y.classes.push("frui-bg-muted"));let j={classes:[...y.classes,h].join(" "),styles:Object.assign(Object.assign({},y.styles),p)};return(0,r.jsx)("div",Object.assign({className:j.classes,style:j.styles},{children:b}))}},51646:function(e,s,t){"use strict";var r=this&&this.__rest||function(e,s){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>s.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>s.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};Object.defineProperty(s,"__esModule",{value:!0});let l=t(24246);s.default=function(e){let{block:s,full:t,color:i,xs:n,sm:o,md:a,lg:c,xl:u,xl2:f,xl3:d,xl4:p,xl5:h,curved:b,rounded:y,pill:j,info:x,warning:m,success:g,error:v,muted:w,outline:O,transparent:N,solid:_,style:k,className:T,children:S}=e,C=r(e,["block","full","color","xs","sm","md","lg","xl","xl2","xl3","xl4","xl5","curved","rounded","pill","info","warning","success","error","muted","outline","transparent","solid","style","className","children"]),P={classes:["frui-btn"],styles:{}};s&&P.classes.push("frui-block"),t&&P.classes.push("frui-full"),P.classes.push(`frui-btn-${n?"xs":o?"sm":a?"md":c?"lg":u?"xl":f?"2xl":d?"3xl":p?"4xl":h?"5xl":"md"}`);let A=O?"outline":N?"transparent":"solid";b?P.classes.push("frui-curved"):y?P.classes.push("frui-rounded"):j&&P.classes.push("frui-pill"),"outline"===A||"transparent"===A?(P.classes.push("frui-solid","frui-thin"),"outline"===A&&P.classes.push("frui-bg-white"),i?(P.styles.borderColor=i,P.styles.color=i):x?P.classes.push("frui-bd-info","frui-tx-info"):m?P.classes.push("frui-bd-warning","frui-tx-warning"):g?P.classes.push("frui-bd-success","frui-tx-success"):v?P.classes.push("frui-bd-error","frui-tx-error"):w&&P.classes.push("frui-bd-muted","frui-tx-muted")):(P.classes.push("frui-tx-white"),i?P.styles.backgroundColor=i:x?P.classes.push("frui-bg-info"):m?P.classes.push("frui-bg-warning"):g?P.classes.push("frui-bg-success"):v?P.classes.push("frui-bg-error"):w&&P.classes.push("frui-bg-muted"));let M={classes:[...P.classes,T].join(" "),styles:Object.assign(Object.assign({},P.styles),k)};return(0,l.jsx)("button",Object.assign({className:M.classes,style:M.styles},C,{children:S}))}},71317:function(e,s,t){"use strict";var r=this&&this.__rest||function(e,s){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>s.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>s.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};Object.defineProperty(s,"__esModule",{value:!0});let l=t(24246);s.default=function(e){let{label:s,error:t,children:i,className:n}=e,o=r(e,["label","error","children","className"]),a=["frui-control"];return n&&a.push(n),(0,l.jsxs)("div",Object.assign({className:a.join(" ")},o,{children:[!!s&&(0,l.jsx)("label",Object.assign({className:"frui-control-label"},{children:s})),(0,l.jsx)("div",Object.assign({className:"frui-control-field"},{children:i})),!!t&&(null==t?void 0:t.length)>0&&(0,l.jsx)("div",Object.assign({className:"frui-control-error"},{children:t}))]}))}},54974:function(e,s,t){"use strict";var r=this&&this.__rest||function(e,s){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>s.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>s.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.Tgroup=s.Trow=s.Tcol=s.Tfoot=s.Thead=s.Table=void 0;let i=t(24246),n=l(t(27378)),o=({width:e})=>(0,i.jsx)("hr",{style:{borderWidth:0,margin:0,width:e}});class a extends n.default.Component{table(){return"TableCol"}render(){let e=this.props,{stickyBottom:s,stickyLeft:t,stickyRight:l,stickyTop:n,noWrap:a,rowSpan:c,colSpan:u,wrap1:f,wrap2:d,wrap3:p,wrap4:h,wrap5:b,className:y,children:j}=e,x=r(e,["stickyBottom","stickyLeft","stickyRight","stickyTop","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),m=["frui-tbl-col"];(s||t||l||n)&&(m.push("frui-tbl-sticky"),s&&m.push("frui-tbl-sticky-b","frui-tbl-z1"),t&&m.push("frui-tbl-sticky-l","frui-tbl-z2"),l&&m.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&m.push("frui-tbl-sticky-t","frui-tbl-z1")),a&&m.push("frui-tbl-nowrap");let g={};c&&(g.rowSpan=c||0),u&&(g.colSpan=u||0);let v=null;return f?v=(0,i.jsx)(o,{width:"100px"}):d?v=(0,i.jsx)(o,{width:"200px"}):p?v=(0,i.jsx)(o,{width:"300px"}):h?v=(0,i.jsx)(o,{width:"400px"}):b&&(v=(0,i.jsx)(o,{width:"500px"})),y&&m.push(y),(0,i.jsxs)("td",Object.assign({valign:"top"},x,{className:m.join(" ")},g,{children:[j,v]}))}}s.Tcol=a;class c extends n.default.Component{table(){return"TableFoot"}render(){let e=this.props,{stickyBottom:s,stickyLeft:t,stickyRight:l,noWrap:n,rowSpan:o,colSpan:a,className:c,children:u}=e,f=r(e,["stickyBottom","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","className","children"]),d=["frui-tbl-foot"];(s||t||l)&&(d.push("frui-tbl-sticky"),s&&d.push("frui-tbl-sticky-b","frui-tbl-z1"),t&&d.push("frui-tbl-sticky-l","frui-tbl-z2"),l&&d.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&d.push("frui-tbl-nowrap"));let p={};return o&&(p.rowSpan=o||0),a&&(p.colSpan=a||0),c&&d.push(c),(0,i.jsx)("th",Object.assign({},f,{className:d.join(" ")},p,{children:u}))}}s.Tfoot=c;class u extends n.default.Component{table(){return"TableGroup"}render(){return this.props.children}}s.Tgroup=u;class f extends n.default.Component{table(){return"TableRow"}render(){let e=this.props,{noWrap:s,rowSpan:t,colSpan:l,className:n,children:o}=e,a=r(e,["noWrap","rowSpan","colSpan","className","children"]),c=["frui-tbl-row"];s&&c.push("frui-tbl-nowrap");let u={};return t&&(u.rowSpan=t||0),l&&(u.colSpan=l||0),n&&c.push(n),(0,i.jsx)("tr",Object.assign({},a,{className:c.join(" ")},u,{children:o}))}}s.Trow=f;class d extends n.default.Component{table(){return"TableHead"}render(){let e=this.props,{stickyTop:s,stickyLeft:t,stickyRight:l,noWrap:n,rowSpan:a,colSpan:c,wrap1:u,wrap2:f,wrap3:d,wrap4:p,wrap5:h,className:b,children:y}=e,j=r(e,["stickyTop","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),x=["frui-tbl-head"];(t||l||s)&&(x.push("frui-tbl-sticky"),s&&(x.push("frui-tbl-sticky-t"),t&&l?x.push("frui-tbl-z4"):t||l?x.push("frui-tbl-z3"):x.push("frui-tbl-z1")),t&&x.push("frui-tbl-sticky-l","frui-tbl-z1"),l&&x.push("frui-tbl-sticky-r","frui-tbl-z1")),n&&x.push("frui-tbl-nowrap");let m={};a&&(m.rowSpan=a||0),c&&(m.colSpan=c||0);let g=null;return u?g=(0,i.jsx)(o,{width:"100px"}):f?g=(0,i.jsx)(o,{width:"200px"}):d?g=(0,i.jsx)(o,{width:"300px"}):p?g=(0,i.jsx)(o,{width:"400px"}):h&&(g=(0,i.jsx)(o,{width:"500px"})),b&&x.push(b),(0,i.jsxs)("th",Object.assign({},j,{className:x.join(" ")},m,{children:[y,g]}))}}s.Thead=d;let p=function(e){var s,t;let r=[];if(Array.isArray(e))for(let l of e)l&&(Array.isArray(l)?r.push.apply(r,p(l)):"object"==typeof l&&l.props&&"thead"in l.props?r.push(l):"function"==typeof(null===(t=null===(s=null==l?void 0:l.type)||void 0===s?void 0:s.prototype)||void 0===t?void 0:t.table)&&"TableHead"===l.type.prototype.table()&&r.push(l));return r},h=function(e){var s,t;let r=[];if(Array.isArray(e))for(let l of e)Array.isArray(l)?r.push.apply(r,h(l)):"object"==typeof l&&l.props&&"tfoot"in l.props?r.push(l):"function"==typeof(null===(t=null===(s=null==l?void 0:l.type)||void 0===s?void 0:s.prototype)||void 0===t?void 0:t.table)&&"TableFoot"===l.type.prototype.table()&&r.push(l);return r},b=function(e){var s,t,r,l;let i=[];if(Array.isArray(e))for(let n of e)if(Array.isArray(n))i.push.apply(i,b(n));else if("object"==typeof n&&n.props&&"tbody"in n.props)i.push(n);else if("function"==typeof(null===(t=null===(s=null==n?void 0:n.type)||void 0===s?void 0:s.prototype)||void 0===t?void 0:t.table)&&"TableGroup"===n.type.prototype.table()){let e=n.props.children||[];Array.isArray(e)&&e.length>0&&i.push(...e)}else"function"==typeof(null===(l=null===(r=null==n?void 0:n.type)||void 0===r?void 0:r.prototype)||void 0===l?void 0:l.table)&&"TableRow"===n.type.prototype.table()&&i.push(n);return i};function y(e){let s=e.children||[];Array.isArray(s)||(s=[s]);let t=p(s),r=b(s),l=h(s),n=["frui-tbl-overflow"];return e.className&&n.push(e.className),(0,i.jsx)("div",Object.assign({className:n.join(" "),style:e.style},{children:(0,i.jsxs)("table",Object.assign({className:"frui-tbl"},{children:[t&&(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:t})}),r&&(0,i.jsx)("tbody",{children:r}),l&&(0,i.jsx)("tfoot",{children:(0,i.jsx)("tr",{children:l})})]}))}))}s.default=y,s.Table=y},34496:function(e,s,t){"use strict";var r=this&&this.__rest||function(e,s){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>s.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>s.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.useCountry=void 0;let i=t(24246),n=l(t(84194)),o=l(t(61866));function a(e){let{value:s,defaultValue:t,map:r}=e,l=o.default.filter(e=>"fiat"===e.currencyType).map(r);return{selected:"string"==typeof s?l.filter(e=>{var t;return(null===(t=e.value)||void 0===t?void 0:t.countryCode)===s})[0]:void 0,selectedDefault:"string"==typeof t?l.filter(e=>{var s;return(null===(s=e.value)||void 0===s?void 0:s.countryCode)===t})[0]:void 0,options:l}}s.useCountry=a,s.default=function(e){let{value:s,defaultValue:t,placeholder:l="Choose a Country"}=e,o=r(e,["value","defaultValue","placeholder"]),{selected:c,selectedDefault:u,options:f}=a({value:s,defaultValue:t,map:e=>({label:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{alt:`${e.countryName} Flag`,src:`https://flagcdn.com/w40/${e.countryCode.toLowerCase()}.png`,loading:"lazy"}),(0,i.jsx)("span",Object.assign({className:"frui-field-select-label"},{children:e.countryName}))]}),value:e,keyword:s=>e.countryCode.toLowerCase().indexOf(s)>=0||e.countryName.toLowerCase().indexOf(s)>=0||e.currencyCode.toLowerCase().indexOf(s)>=0})});return(0,i.jsx)(n.default,Object.assign({},o,{placeholder:l,value:c,defaultValue:u,options:f,searchable:!0}))}},42378:function(e,s,t){"use strict";var r=this&&this.__rest||function(e,s){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>s.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>s.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};Object.defineProperty(s,"__esModule",{value:!0}),s.useInput=void 0;let l=t(24246);function i({onChange:e,onUpdate:s}){return{handlers:{change:t=>{e&&e(t),s&&s(t.target.value)}}}}s.useInput=i,s.default=function(e){let{error:s,className:t,onChange:n,onUpdate:o,passRef:a}=e,c=r(e,["error","className","onChange","onUpdate","passRef"]),{handlers:u}=i({onChange:n,onUpdate:o}),f=["frui-field-input"];return s&&f.push("frui-tx-error","frui-bd-error"),t&&f.push(t),(0,l.jsx)("input",Object.assign({},c,{className:f.join(" "),ref:a,onChange:u.change}))}},37307:function(e,s,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,s,t,r){void 0===r&&(r=t);var l=Object.getOwnPropertyDescriptor(s,t);(!l||("get"in l?!s.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return s[t]}}),Object.defineProperty(e,r,l)}:function(e,s,t,r){void 0===r&&(r=t),e[r]=s[t]}),l=this&&this.__setModuleDefault||(Object.create?function(e,s){Object.defineProperty(e,"default",{enumerable:!0,value:s})}:function(e,s){e.default=s}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var s={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(s,e,t);return l(s,e),s},n=this&&this.__rest||function(e,s){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>s.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>s.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0});let a=t(24246),c=o(t(42378));s.default=function(e){let{mask:s,regex:r,alias:l,repeat:o,greedy:u,numericInput:f,rightAlign:d,definitions:p,onReady:h}=e,b=n(e,["mask","regex","alias","repeat","greedy","numericInput","rightAlign","definitions","onReady"]);return(0,a.jsx)(c.default,Object.assign({passRef:e=>{e&&Promise.resolve().then(()=>i(t(23419))).then(t=>{h&&h(t.default),new t.default({mask:s,regex:r,alias:l,repeat:o,greedy:u,numericInput:f,rightAlign:d,definitions:p}).mask(e)})}},b))}},84194:function(e,s,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.SelectDropdown=s.useSelect=void 0;let l=t(24246),i=t(27378),n=r(t(42378));function o(e){let{options:s,value:t,defaultValue:r,onDropdown:l,onSelected:n,onUpdate:o}=e,a=void 0!==r?r:void 0!==t?t:void 0,c=s.find(e=>e.value===a),[u,f]=(0,i.useState)(""),[d,p]=(0,i.useState)(c),[h,b]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{t&&p(s.find(e=>e.value===t))},[t]),{selected:d,showing:h,handlers:{toggle(){b(!h),l&&l(!h)},search(e){setTimeout(()=>{f(e.target.value)})},match(e){let s=(u||"").toLowerCase();return"string"==typeof e.keyword?e.keyword.toLowerCase().indexOf(s)>=0:"function"==typeof e.keyword?e.keyword(s):void 0!==e.value&&null!==e.value?e.value.toString().toLowerCase().indexOf(s)>=0:"string"!=typeof e.label||e.label.toLowerCase().indexOf(s)>=0},select(e){b(!1),p(e),l&&l(!1),n&&n(e),o&&o(e.value)}}}}function a(e){let{options:s,show:t,searchable:r,select:i,search:o,match:a}=e;return(0,l.jsxs)("div",Object.assign({className:"frui-field-select-dropdown",style:t?void 0:{display:"none"}},{children:[r&&(0,l.jsxs)("div",Object.assign({className:"frui-field-select-search"},{children:[(0,l.jsx)(n.default,{className:"frui-field-select-search-control",onKeyUp:o}),(0,l.jsx)("span",Object.assign({className:"frui-field-select-search-icon"},{children:"\uD83D\uDD0E"}))]})),(0,l.jsx)("div",Object.assign({className:"frui-field-select-options"},{children:s.filter(a).map((e,s)=>(0,l.jsx)("div",Object.assign({onClick:s=>i(e),className:"frui-field-select-option"},{children:e.label}),s))}))]}))}s.useSelect=o,s.SelectDropdown=a,s.default=function(e){let{options:s,searchable:t,value:r,defaultValue:i,placeholder:n="Choose an Option",error:c,className:u,style:f,onDropdown:d,onSelected:p,onUpdate:h}=e,b="object"!=typeof s||Array.isArray(s)?s:Object.keys(s).map(e=>({value:e,label:s[e]})),{selected:y,showing:j,handlers:x}=o({options:b,value:r,defaultValue:i,onDropdown:d,onSelected:p,onUpdate:h}),m=["frui-field-select"];u&&m.push(u);let g=["frui-field-select-placeholder"];return c&&g.push("frui-tx-error","frui-bd-error"),(0,l.jsxs)("div",Object.assign({className:m.join(" "),style:f},{children:[(0,l.jsx)("div",Object.assign({className:"frui-field-select-control",onClick:x.toggle},{children:(null==y?void 0:y.label)||(0,l.jsx)("span",Object.assign({className:g.join(" ")},{children:n}))})),(0,l.jsx)(a,{options:b,show:j,error:c,searchable:t,select:x.select,search:x.search,match:x.match})]}))}},83825:function(e,s,t){"use strict";var r=this&&this.__rest||function(e,s){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>s.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>s.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};Object.defineProperty(s,"__esModule",{value:!0}),s.useSwitch=void 0;let l=t(24246),i=t(27378);function n(e){let{onChange:s,onUpdate:t,defaultChecked:r,checked:l}=e,[n,o]=(0,i.useState)(!!(r||l)),[a,c]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{void 0!==l&&l!==n&&o(l)},[l]),{isHovering:a,isChecked:n,handlers:{out:e=>c(!1),over:e=>c(!0),change:e=>{e.target.checked!==l&&o(e.target.checked),s&&s(e),t&&t(e.target.value,e.target.checked)}}}}s.useSwitch=n,s.default=function(e){let{defaultChecked:s,checked:t,label:i,error:o,rounded:a,onoff:c,yesno:u,checkex:f,sunmoon:d,ridge:p,blue:h,orange:b,green:y,style:j,className:x,onChange:m,onUpdate:g}=e,v=r(e,["defaultChecked","checked","label","error","rounded","onoff","yesno","checkex","sunmoon","ridge","blue","orange","green","style","className","onChange","onUpdate"]),{handlers:w}=n({onChange:m,onUpdate:g,checked:t,defaultChecked:s}),O=["frui-field-switch"];return a&&O.push("frui-field-switch-rounded"),o&&O.push("frui-tx-error"),c?O.push("frui-field-switch-onoff"):u?O.push("frui-field-switch-yesno"):d?O.push("frui-field-switch-sunmoon"):O.push("frui-field-switch-checkex"),p?O.push("frui-field-switch-ridge"):O.push("frui-field-switch-smooth"),h?O.push("frui-field-switch-blue"):b?O.push("frui-field-switch-orange"):y?O.push("frui-field-switch-green"):O.push("frui-field-switch-default"),x&&O.push(x),(0,l.jsxs)("label",Object.assign({className:O.join(" "),style:j},{children:[(0,l.jsx)("input",Object.assign({},v,{onChange:w.change,onMouseOut:w.out,onMouseOver:w.over,type:"checkbox",className:"frui-field-switch-control",checked:t,defaultChecked:s})),(0,l.jsx)("span",Object.assign({className:"frui-field-switch-label"},{children:i}))]}))}},49536:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(12599)}])},12599:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return v}});var r=t(24246),l=t(22879),i=t(79894),n=t.n(i),o=t(37307),a=t.n(o),c=t(34496),u=t.n(c),f=t(83825),d=t.n(f),p=t(71317),h=t.n(p),b=t(51646),y=t.n(b),j=t(6122),x=t(54974),m=t.n(x),g=t(78968);function v(){let{_:e}=(0,l.useLanguage)();return(0,r.jsx)(g.hR,{uri:"",title:"Free ReactJS UI - FRUI",description:"FRUI is a suite of free react components you can use without the commitments.",children:(0,r.jsx)("main",{className:"border-t border-b1 w-full h-full",children:(0,r.jsxs)("section",{className:"md:flex items-center border-b1 border-y h-full",children:[(0,r.jsxs)("div",{className:"basis-1/2 px-8 h-full flex flex-col justify-center text-center",children:[(0,r.jsx)("h1",{className:"font-bold text-4xl uppercase",children:e("Just React Components")}),(0,r.jsx)("p",{className:"my-4",children:e("No layouts, no grids, no themes, no style engine, no design system. FRUI offers a comprehensive suite of free react components to use without the commitments.")}),(0,r.jsx)(n(),{href:"/start",children:(0,r.jsx)(y(),{curved:!0,info:!0,xl2:!0,className:"!px-24",children:e("Get Started")})})]}),(0,r.jsxs)("div",{className:"basis-1/2 pt-3 px-3 hidden md:flex flex-col justify-center bg-b1 border-b1 border-l w-full h-full overflow-hidden",children:[(0,r.jsxs)(j.Z,{curved:!0,info:!0,children:[(0,r.jsx)("i",{className:"fas fa-info-circle mr-2"}),e("You are good to go!")]}),(0,r.jsx)(h(),{label:"Enter ID",className:"mt-2",children:(0,r.jsx)(a(),{mask:"999.999.999-99",className:"!border-b1"})}),(0,r.jsx)(h(),{label:"Choose a Country",className:"mt-2 relative z-50",children:(0,r.jsx)(u(),{className:"!border-b1 text-black"})}),(0,r.jsx)("div",{className:"my-2",children:(0,r.jsx)(d(),{ridge:!0,checkex:!0,rounded:!0,label:e("Get Started")})}),(0,r.jsx)("h3",{className:"border-t border-b3 pt-3 mt-3mt-2 text-xl font-bold uppercase",children:e("Results")}),(0,r.jsx)("div",{className:"overflow-auto w-full",children:(0,r.jsxs)(m(),{className:"mt-2",children:[(0,r.jsx)(x.Thead,{className:"bg-b3 text-left text-white",stickyLeft:!0,stickyTop:!0,children:e("ID")}),(0,r.jsx)(x.Thead,{className:"bg-b3 text-left text-white",wrap3:!0,stickyTop:!0,children:e("Name")}),(0,r.jsx)(x.Thead,{className:"bg-b3 text-left text-white",stickyTop:!0,children:e("Active")}),(0,r.jsx)(x.Thead,{className:"bg-b3 text-left text-white",wrap2:!0,stickyTop:!0,children:e("Created")}),(0,r.jsx)(x.Thead,{className:"bg-b3 text-left text-white",wrap2:!0,stickyTop:!0,children:e("Updated")}),(0,r.jsxs)(x.Trow,{children:[(0,r.jsx)(x.Tcol,{className:"bg-b1",stickyLeft:!0,noWrap:!0,children:"10000101"}),(0,r.jsx)(x.Tcol,{className:"bg-b1",noWrap:!0,children:"John Jacob Jingleheimer Schmidt"}),(0,r.jsx)(x.Tcol,{className:"bg-b1",noWrap:!0,children:e("Yes")}),(0,r.jsx)(x.Tcol,{className:"bg-b1",noWrap:!0,children:"01 January 2024 12:00 AM"}),(0,r.jsx)(x.Tcol,{className:"bg-b1",noWrap:!0,children:"01 January 2024 12:00 AM"})]}),(0,r.jsxs)(x.Trow,{children:[(0,r.jsx)(x.Tcol,{className:"bg-b2",stickyLeft:!0,noWrap:!0,children:"10000102"}),(0,r.jsx)(x.Tcol,{className:"bg-b2",noWrap:!0,children:"Jacob John Jingleheimer Schmidt"}),(0,r.jsx)(x.Tcol,{className:"bg-b2",noWrap:!0,children:e("No")}),(0,r.jsx)(x.Tcol,{className:"bg-b2",noWrap:!0,children:"02 January 2024 04:00 PM"}),(0,r.jsx)(x.Tcol,{className:"bg-b2",noWrap:!0,children:"04 February 2024 08:22 AM"})]}),(0,r.jsxs)(x.Trow,{children:[(0,r.jsx)(x.Tcol,{className:"bg-b1",stickyLeft:!0,noWrap:!0,children:"10000103"}),(0,r.jsx)(x.Tcol,{className:"bg-b1",noWrap:!0,children:"John Jacob Jingleheimer Schmidt"}),(0,r.jsx)(x.Tcol,{className:"bg-b1",noWrap:!0,children:e("Yes")}),(0,r.jsx)(x.Tcol,{className:"bg-b1",noWrap:!0,children:"01 January 2024 12:00 AM"}),(0,r.jsx)(x.Tcol,{className:"bg-b1",noWrap:!0,children:"01 January 2024 12:00 AM"})]}),(0,r.jsxs)(x.Trow,{children:[(0,r.jsx)(x.Tcol,{className:"bg-b2",stickyLeft:!0,noWrap:!0,children:"10000104"}),(0,r.jsx)(x.Tcol,{className:"bg-b2",noWrap:!0,children:"Jacob John Jingleheimer Schmidt"}),(0,r.jsx)(x.Tcol,{className:"bg-b2",noWrap:!0,children:e("No")}),(0,r.jsx)(x.Tcol,{className:"bg-b2",noWrap:!0,children:"02 January 2024 04:00 PM"}),(0,r.jsx)(x.Tcol,{className:"bg-b2",noWrap:!0,children:"04 February 2024 08:22 AM"})]})]})})]})]})})})}}},function(e){e.O(0,[3796,1866,2888,9774,179],function(){return e(e.s=49536)}),_N_E=e.O()}]);