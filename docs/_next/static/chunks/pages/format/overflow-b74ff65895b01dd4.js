(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3496],{54974:function(e,t,r){"use strict";var s=this&&this.__rest||function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,s=Object.getOwnPropertySymbols(e);l<s.length;l++)0>t.indexOf(s[l])&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(r[s[l]]=e[s[l]]);return r},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Tgroup=t.Trow=t.Tcol=t.Tfoot=t.Thead=t.Table=void 0;let a=r(24246),n=l(r(27378)),i=({width:e})=>(0,a.jsx)("hr",{style:{borderWidth:0,margin:0,width:e}});class o extends n.default.Component{table(){return"TableCol"}render(){let e=this.props,{stickyBottom:t,stickyLeft:r,stickyRight:l,stickyTop:n,noWrap:o,rowSpan:c,colSpan:p,wrap1:u,wrap2:f,wrap3:d,wrap4:h,wrap5:b,className:x,children:m}=e,j=s(e,["stickyBottom","stickyLeft","stickyRight","stickyTop","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),y=["frui-tbl-col"];(t||r||l||n)&&(y.push("frui-tbl-sticky"),t&&y.push("frui-tbl-sticky-b","frui-tbl-z1"),r&&y.push("frui-tbl-sticky-l","frui-tbl-z2"),l&&y.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&y.push("frui-tbl-sticky-t","frui-tbl-z1")),o&&y.push("frui-tbl-nowrap");let w={};c&&(w.rowSpan=c||0),p&&(w.colSpan=p||0);let v=null;return u?v=(0,a.jsx)(i,{width:"100px"}):f?v=(0,a.jsx)(i,{width:"200px"}):d?v=(0,a.jsx)(i,{width:"300px"}):h?v=(0,a.jsx)(i,{width:"400px"}):b&&(v=(0,a.jsx)(i,{width:"500px"})),x&&y.push(x),(0,a.jsxs)("td",Object.assign({valign:"top"},j,{className:y.join(" ")},w,{children:[m,v]}))}}t.Tcol=o;class c extends n.default.Component{table(){return"TableFoot"}render(){let e=this.props,{stickyBottom:t,stickyLeft:r,stickyRight:l,noWrap:n,rowSpan:i,colSpan:o,className:c,children:p}=e,u=s(e,["stickyBottom","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","className","children"]),f=["frui-tbl-foot"];(t||r||l)&&(f.push("frui-tbl-sticky"),t&&f.push("frui-tbl-sticky-b","frui-tbl-z1"),r&&f.push("frui-tbl-sticky-l","frui-tbl-z2"),l&&f.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&f.push("frui-tbl-nowrap"));let d={};return i&&(d.rowSpan=i||0),o&&(d.colSpan=o||0),c&&f.push(c),(0,a.jsx)("th",Object.assign({},u,{className:f.join(" ")},d,{children:p}))}}t.Tfoot=c;class p extends n.default.Component{table(){return"TableGroup"}render(){return this.props.children}}t.Tgroup=p;class u extends n.default.Component{table(){return"TableRow"}render(){let e=this.props,{noWrap:t,rowSpan:r,colSpan:l,className:n,children:i}=e,o=s(e,["noWrap","rowSpan","colSpan","className","children"]),c=["frui-tbl-row"];t&&c.push("frui-tbl-nowrap");let p={};return r&&(p.rowSpan=r||0),l&&(p.colSpan=l||0),n&&c.push(n),(0,a.jsx)("tr",Object.assign({},o,{className:c.join(" ")},p,{children:i}))}}t.Trow=u;class f extends n.default.Component{table(){return"TableHead"}render(){let e=this.props,{stickyTop:t,stickyLeft:r,stickyRight:l,noWrap:n,rowSpan:o,colSpan:c,wrap1:p,wrap2:u,wrap3:f,wrap4:d,wrap5:h,className:b,children:x}=e,m=s(e,["stickyTop","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),j=["frui-tbl-head"];(r||l||t)&&(j.push("frui-tbl-sticky"),t&&(j.push("frui-tbl-sticky-t"),r&&l?j.push("frui-tbl-z4"):r||l?j.push("frui-tbl-z3"):j.push("frui-tbl-z1")),r&&j.push("frui-tbl-sticky-l","frui-tbl-z1"),l&&j.push("frui-tbl-sticky-r","frui-tbl-z1")),n&&j.push("frui-tbl-nowrap");let y={};o&&(y.rowSpan=o||0),c&&(y.colSpan=c||0);let w=null;return p?w=(0,a.jsx)(i,{width:"100px"}):u?w=(0,a.jsx)(i,{width:"200px"}):f?w=(0,a.jsx)(i,{width:"300px"}):d?w=(0,a.jsx)(i,{width:"400px"}):h&&(w=(0,a.jsx)(i,{width:"500px"})),b&&j.push(b),(0,a.jsxs)("th",Object.assign({},m,{className:j.join(" ")},y,{children:[x,w]}))}}t.Thead=f;let d=function(e){var t,r;let s=[];if(Array.isArray(e))for(let l of e)l&&(Array.isArray(l)?s.push.apply(s,d(l)):"object"==typeof l&&l.props&&"thead"in l.props?s.push(l):"function"==typeof(null===(r=null===(t=null==l?void 0:l.type)||void 0===t?void 0:t.prototype)||void 0===r?void 0:r.table)&&"TableHead"===l.type.prototype.table()&&s.push(l));return s},h=function(e){var t,r;let s=[];if(Array.isArray(e))for(let l of e)Array.isArray(l)?s.push.apply(s,h(l)):"object"==typeof l&&l.props&&"tfoot"in l.props?s.push(l):"function"==typeof(null===(r=null===(t=null==l?void 0:l.type)||void 0===t?void 0:t.prototype)||void 0===r?void 0:r.table)&&"TableFoot"===l.type.prototype.table()&&s.push(l);return s},b=function(e){var t,r,s,l;let a=[];if(Array.isArray(e))for(let n of e)if(Array.isArray(n))a.push.apply(a,b(n));else if("object"==typeof n&&n.props&&"tbody"in n.props)a.push(n);else if("function"==typeof(null===(r=null===(t=null==n?void 0:n.type)||void 0===t?void 0:t.prototype)||void 0===r?void 0:r.table)&&"TableGroup"===n.type.prototype.table()){let e=n.props.children||[];Array.isArray(e)&&e.length>0&&a.push(...e)}else"function"==typeof(null===(l=null===(s=null==n?void 0:n.type)||void 0===s?void 0:s.prototype)||void 0===l?void 0:l.table)&&"TableRow"===n.type.prototype.table()&&a.push(n);return a};function x(e){let t=e.children||[];Array.isArray(t)||(t=[t]);let r=d(t),s=b(t),l=h(t),n=["frui-tbl-overflow"];return e.className&&n.push(e.className),(0,a.jsx)("div",Object.assign({className:n.join(" "),style:e.style},{children:(0,a.jsxs)("table",Object.assign({className:"frui-tbl"},{children:[r&&(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:r})}),s&&(0,a.jsx)("tbody",{children:s}),l&&(0,a.jsx)("tfoot",{children:(0,a.jsx)("tr",{children:l})})]}))}))}t.default=x,t.Table=x},44539:function(e,t,r){"use strict";let s=r(24246);t.Z=function(e){let{value:t,length:r,words:l,hellip:a}=e,n="string"==typeof r?Number(r)||void 0:r;if(l){let e=t.split(" ");return n&&e.length>n?(0,s.jsxs)(s.Fragment,{children:[e.slice(0,n).join(" "),a&&(0,s.jsx)(s.Fragment,{children:"…"})]}):(0,s.jsx)(s.Fragment,{children:t})}return n&&t.length>n?(0,s.jsxs)(s.Fragment,{children:[t.slice(0,n),a&&(0,s.jsx)(s.Fragment,{children:"…"})]}):(0,s.jsx)(s.Fragment,{children:t})}},40141:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/format/overflow",function(){return r(39650)}])},36493:function(e,t,r){"use strict";r.d(t,{C:function(){return c},Z:function(){return o}});var s=r(24246),l=r(22879),a=r(74631),n=r(48717),i=r(14707);function o(e){let{value:t,quote:r,l,r:a,children:n}=e;return(0,s.jsxs)(s.Fragment,{children:[l?(0,s.jsx)("span",{children:"\xa0"}):"",(0,s.jsxs)("code",{className:"text-sm text-t2 bg-b1 font-semibold inline-block p-0.5",children:[r?"`":"",t||n,r?"`":""]}),a?(0,s.jsx)("span",{children:"\xa0"}):""]})}function c(e){let{className:t,copy:r=!0,children:o,language:c}=e,{_:p}=(0,l.useLanguage)();return(0,s.jsxs)("div",{className:"flex text-sm bg-black ".concat(t||""),children:[(0,s.jsx)(a.Z,{className:"flex-grow !p-4 !bg-transparent",language:c,style:n._4,children:o}),r&&(0,s.jsxs)("div",{className:"text-sm p-4 text-gray-400 cursor-pointer whitespace-nowrap",onClick:()=>{navigator.clipboard.writeText(o.toString()),(0,i.ZP)("success",p("Copied to clipboard"))},children:[(0,s.jsx)("i",{className:"fas fa-copy"})," ",p("Copy")]})]})}},18604:function(e,t,r){"use strict";var s=r(24246);r(27378);var l=r(79894),a=r.n(l);let n=e=>{let{href:t,label:r,icon:l,last:n}=e,i=t?(0,s.jsx)(a(),{href:t,className:"inline-flex items-center text-t2",children:r}):(0,s.jsx)("span",{className:"inline-flex items-center font-semibold text-t1",children:r});return(0,s.jsxs)(s.Fragment,{children:[l&&(0,s.jsx)("i",{className:"fas fa-fw fa-".concat(l," inline-block mr-1 text-t1")}),i,!n&&(0,s.jsx)("i",{className:"fas fa-fw fa-chevron-right mx-1 text-t1"})]})},i=e=>{var t;let{trail:r}=e;if(0===r.length)return null;let l=r[r.length-1],n=l.href||(null===(t=r[r.length-2])||void 0===t?void 0:t.href);return n?(0,s.jsxs)(a(),{className:"flex md:hidden items-center cursor-pointer whitespace-nowrap overflow-x-hidden",href:n,children:[(0,s.jsx)("i",{className:"mr-1 fas fa-fw fa-chevron-left text-xl text-t2"}),!!l.icon&&(0,s.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(l.icon," text-sm")}),(0,s.jsx)("span",{className:"font-bold",children:l.label})]}):(0,s.jsxs)("div",{className:"flex md:hidden items-center whitespace-nowrap overflow-x-hidden",children:[!!l.icon&&(0,s.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(l.icon," text-sm")}),(0,s.jsx)("span",{className:"font-bold",children:l.label})]})};t.Z=e=>{let{crumbs:t,className:r}=e,l=[...t].filter(e=>!!e.label),a=["hidden md:flex items-center whitespace-nowrap overflow-x-auto"];return r&&a.push(r),(0,s.jsxs)("nav",{children:[(0,s.jsx)("div",{className:a.join(" "),children:l.map((e,t)=>(0,s.jsx)(n,{href:e.href,label:e.label,icon:e.icon,last:t===l.length-1},t))}),(0,s.jsx)(i,{trail:l})]})}},63527:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var s=r(24246),l=r(22879),a=r(79531),n=r(54974),i=r.n(n);function o(e){let{props:t}=e,{_:r}=(0,l.useLanguage)(),o=(0,a.Z)("bg-b2","bg-b1");return(0,s.jsxs)(i(),{children:[(0,s.jsx)(n.Thead,{className:"text-left bg-b3",children:r("Name")}),(0,s.jsx)(n.Thead,{className:"text-left bg-b3",children:r("Type")}),(0,s.jsx)(n.Thead,{className:"text-center bg-b3",children:r("Required")}),(0,s.jsx)(n.Thead,{className:"text-left bg-b3",children:r("Notes")}),t.map((e,t)=>(0,s.jsxs)(n.Trow,{children:[(0,s.jsx)(n.Tcol,{className:"".concat(o(t)),children:e[0]}),(0,s.jsx)(n.Tcol,{className:"".concat(o(t)),children:e[1]}),(0,s.jsx)(n.Tcol,{className:"".concat(o(t)," text-center"),children:e[2]}),(0,s.jsx)(n.Tcol,{className:"".concat(o(t)),children:e[3]})]},t))]})}},79531:function(e,t,r){"use strict";function s(e,t){let r=e;return s=>"number"==typeof s?s%2==0?e:t:(s&&(r=r===e?t:e),r)}r.d(t,{Z:function(){return s}})},39650:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var s=r(24246),l=r(22879),a=r(79894),n=r.n(a),i=r(44539),o=r(78968),c=r(18604),p=r(63527),u=r(36493);function f(){let{_:e}=(0,l.useLanguage)(),t=[[e("hellip"),e("boolean"),e("No"),e("Add ... after clipped value")],[e("length"),e("number"),e("Yes"),e("Show number of characters or words before clipping")],[e("value"),e("string"),e("Yes"),e("Default value")],[e("words"),e("boolean"),e("No"),e("Clip by number of words instead of characters")]];return(0,s.jsx)(o.sF,{uri:"/format/overflow",title:"Overflow Format",description:"Overflow formats in FRUI, are ReactJS components that convert clip values.",children:(0,s.jsxs)("main",{className:"flex flex-col h-full w-full",children:[(0,s.jsx)("div",{className:"p-3 bg-b2",children:(0,s.jsx)(c.Z,{crumbs:[{icon:"text-height",label:"Formats",href:"/format"},{label:"Overflow"}]})}),(0,s.jsxs)("div",{className:"flex-grow relative h-full",children:[(0,s.jsxs)("aside",{className:"hidden lg:block absolute top-0 bottom-0 right-0 z-1 w-56 border-l border-b1 text-sm",children:[(0,s.jsx)("h4",{className:"p-3 border-b border-b1 bg-b1 uppercase font-semibold",children:(0,s.jsx)(n(),{href:"#top",children:e("Overflow")})}),(0,s.jsxs)("ul",{className:"list-disc py-3 pr-3 pl-6",children:[(0,s.jsx)("li",{className:"pl-3 pb-1",children:(0,s.jsx)(n(),{href:"#props",children:e("Props")})}),(0,s.jsx)("li",{className:"pl-3 pb-1",children:(0,s.jsx)(n(),{href:"#basic",children:e("Basics")})})]})]}),(0,s.jsxs)("div",{className:"absolute top-0 bottom-0 left-0 right-0 lg:right-56 px-3 pt-3 pb-5 h-full overflow-auto",children:[(0,s.jsx)("h1",{id:"top",className:"flex items-center uppercase font-bold text-xl",children:e("Overflow")}),(0,s.jsx)(u.C,{language:"typescript",className:"mt-2",children:"import Overflow from 'frui/formats/Overflow';"}),(0,s.jsx)("h2",{id:"props",className:"uppercase font-bold text-lg mt-8",children:e("Props")}),(0,s.jsx)(p.Z,{props:t}),(0,s.jsx)("h2",{id:"basic",className:"uppercase font-bold text-lg mt-8",children:e("Basics")}),(0,s.jsxs)("div",{className:"curved overflow-hidden",children:[(0,s.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,s.jsx)(i.Z,{value:"Lorem Ipsum",length:8,hellip:!0})}),(0,s.jsx)(u.C,{language:"typescript",children:'<Overflow value="Lorem Ipsum" length={8} hellip />'})]}),(0,s.jsxs)("div",{className:"flex items-center border-t border-b2 mt-8 pt-4",children:[(0,s.jsxs)(n(),{className:"text-t2",href:"/format/metadata",children:[(0,s.jsx)("i",{className:"fas fa-arrow-left mr-2"}),e("Metadata")]}),(0,s.jsx)("div",{className:"flex-grow"}),(0,s.jsxs)(n(),{className:"text-t2",href:"/format/phone",children:[e("Phone"),(0,s.jsx)("i",{className:"fas fa-arrow-right ml-2"})]})]})]})]})]})})}}},function(e){e.O(0,[9461,2888,9774,179],function(){return e(e.s=40141)}),_N_E=e.O()}]);