(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6450],{54974:function(e,s,t){"use strict";var l=this&&this.__rest||function(e,s){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>s.indexOf(l)&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)0>s.indexOf(l[a])&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(t[l[a]]=e[l[a]]);return t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.Tgroup=s.Trow=s.Tcol=s.Tfoot=s.Thead=s.Table=void 0;let r=t(24246),n=a(t(27378)),c=({width:e})=>(0,r.jsx)("hr",{style:{borderWidth:0,margin:0,width:e}});class i extends n.default.Component{table(){return"TableCol"}render(){let e=this.props,{stickyBottom:s,stickyLeft:t,stickyRight:a,stickyTop:n,noWrap:i,rowSpan:o,colSpan:d,wrap1:h,wrap2:u,wrap3:p,wrap4:f,wrap5:x,className:m,children:b}=e,j=l(e,["stickyBottom","stickyLeft","stickyRight","stickyTop","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),g=["frui-tbl-col"];(s||t||a||n)&&(g.push("frui-tbl-sticky"),s&&g.push("frui-tbl-sticky-b","frui-tbl-z1"),t&&g.push("frui-tbl-sticky-l","frui-tbl-z2"),a&&g.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&g.push("frui-tbl-sticky-t","frui-tbl-z1")),i&&g.push("frui-tbl-nowrap");let N={};o&&(N.rowSpan=o||0),d&&(N.colSpan=d||0);let y=null;return h?y=(0,r.jsx)(c,{width:"100px"}):u?y=(0,r.jsx)(c,{width:"200px"}):p?y=(0,r.jsx)(c,{width:"300px"}):f?y=(0,r.jsx)(c,{width:"400px"}):x&&(y=(0,r.jsx)(c,{width:"500px"})),m&&g.push(m),(0,r.jsxs)("td",Object.assign({valign:"top"},j,{className:g.join(" ")},N,{children:[b,y]}))}}s.Tcol=i;class o extends n.default.Component{table(){return"TableFoot"}render(){let e=this.props,{stickyBottom:s,stickyLeft:t,stickyRight:a,noWrap:n,rowSpan:c,colSpan:i,className:o,children:d}=e,h=l(e,["stickyBottom","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","className","children"]),u=["frui-tbl-foot"];(s||t||a)&&(u.push("frui-tbl-sticky"),s&&u.push("frui-tbl-sticky-b","frui-tbl-z1"),t&&u.push("frui-tbl-sticky-l","frui-tbl-z2"),a&&u.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&u.push("frui-tbl-nowrap"));let p={};return c&&(p.rowSpan=c||0),i&&(p.colSpan=i||0),o&&u.push(o),(0,r.jsx)("th",Object.assign({},h,{className:u.join(" ")},p,{children:d}))}}s.Tfoot=o;class d extends n.default.Component{table(){return"TableGroup"}render(){return this.props.children}}s.Tgroup=d;class h extends n.default.Component{table(){return"TableRow"}render(){let e=this.props,{noWrap:s,rowSpan:t,colSpan:a,className:n,children:c}=e,i=l(e,["noWrap","rowSpan","colSpan","className","children"]),o=["frui-tbl-row"];s&&o.push("frui-tbl-nowrap");let d={};return t&&(d.rowSpan=t||0),a&&(d.colSpan=a||0),n&&o.push(n),(0,r.jsx)("tr",Object.assign({},i,{className:o.join(" ")},d,{children:c}))}}s.Trow=h;class u extends n.default.Component{table(){return"TableHead"}render(){let e=this.props,{stickyTop:s,stickyLeft:t,stickyRight:a,noWrap:n,rowSpan:i,colSpan:o,wrap1:d,wrap2:h,wrap3:u,wrap4:p,wrap5:f,className:x,children:m}=e,b=l(e,["stickyTop","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),j=["frui-tbl-head"];(t||a||s)&&(j.push("frui-tbl-sticky"),s&&(j.push("frui-tbl-sticky-t"),t&&a?j.push("frui-tbl-z4"):t||a?j.push("frui-tbl-z3"):j.push("frui-tbl-z1")),t&&j.push("frui-tbl-sticky-l","frui-tbl-z1"),a&&j.push("frui-tbl-sticky-r","frui-tbl-z1")),n&&j.push("frui-tbl-nowrap");let g={};i&&(g.rowSpan=i||0),o&&(g.colSpan=o||0);let N=null;return d?N=(0,r.jsx)(c,{width:"100px"}):h?N=(0,r.jsx)(c,{width:"200px"}):u?N=(0,r.jsx)(c,{width:"300px"}):p?N=(0,r.jsx)(c,{width:"400px"}):f&&(N=(0,r.jsx)(c,{width:"500px"})),x&&j.push(x),(0,r.jsxs)("th",Object.assign({},b,{className:j.join(" ")},g,{children:[m,N]}))}}s.Thead=u;let p=function(e){var s,t;let l=[];if(Array.isArray(e))for(let a of e)a&&(Array.isArray(a)?l.push.apply(l,p(a)):"object"==typeof a&&a.props&&"thead"in a.props?l.push(a):"function"==typeof(null===(t=null===(s=null==a?void 0:a.type)||void 0===s?void 0:s.prototype)||void 0===t?void 0:t.table)&&"TableHead"===a.type.prototype.table()&&l.push(a));return l},f=function(e){var s,t;let l=[];if(Array.isArray(e))for(let a of e)Array.isArray(a)?l.push.apply(l,f(a)):"object"==typeof a&&a.props&&"tfoot"in a.props?l.push(a):"function"==typeof(null===(t=null===(s=null==a?void 0:a.type)||void 0===s?void 0:s.prototype)||void 0===t?void 0:t.table)&&"TableFoot"===a.type.prototype.table()&&l.push(a);return l},x=function(e){var s,t,l,a;let r=[];if(Array.isArray(e))for(let n of e)if(Array.isArray(n))r.push.apply(r,x(n));else if("object"==typeof n&&n.props&&"tbody"in n.props)r.push(n);else if("function"==typeof(null===(t=null===(s=null==n?void 0:n.type)||void 0===s?void 0:s.prototype)||void 0===t?void 0:t.table)&&"TableGroup"===n.type.prototype.table()){let e=n.props.children||[];Array.isArray(e)&&e.length>0&&r.push(...e)}else"function"==typeof(null===(a=null===(l=null==n?void 0:n.type)||void 0===l?void 0:l.prototype)||void 0===a?void 0:a.table)&&"TableRow"===n.type.prototype.table()&&r.push(n);return r};function m(e){let s=e.children||[];Array.isArray(s)||(s=[s]);let t=p(s),l=x(s),a=f(s),n=["frui-tbl-overflow"];return e.className&&n.push(e.className),(0,r.jsx)("div",Object.assign({className:n.join(" "),style:e.style},{children:(0,r.jsxs)("table",Object.assign({className:"frui-tbl"},{children:[t&&(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:t})}),l&&(0,r.jsx)("tbody",{children:l}),a&&(0,r.jsx)("tfoot",{children:(0,r.jsx)("tr",{children:a})})]}))}))}s.default=m,s.Table=m},83825:function(e,s,t){"use strict";var l=this&&this.__rest||function(e,s){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>s.indexOf(l)&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)0>s.indexOf(l[a])&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(t[l[a]]=e[l[a]]);return t};Object.defineProperty(s,"__esModule",{value:!0}),s.useSwitch=void 0;let a=t(24246),r=t(27378);function n(e){let{onChange:s,onUpdate:t,defaultChecked:l,checked:a}=e,[n,c]=(0,r.useState)(!!(l||a)),[i,o]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{void 0!==a&&a!==n&&c(a)},[a]),{isHovering:i,isChecked:n,handlers:{out:e=>o(!1),over:e=>o(!0),change:e=>{e.target.checked!==a&&c(e.target.checked),s&&s(e),t&&t(e.target.value,e.target.checked)}}}}s.useSwitch=n,s.default=function(e){let{defaultChecked:s,checked:t,label:r,error:c,rounded:i,onoff:o,yesno:d,checkex:h,sunmoon:u,ridge:p,blue:f,orange:x,green:m,style:b,className:j,onChange:g,onUpdate:N}=e,y=l(e,["defaultChecked","checked","label","error","rounded","onoff","yesno","checkex","sunmoon","ridge","blue","orange","green","style","className","onChange","onUpdate"]),{handlers:v}=n({onChange:g,onUpdate:N,checked:t,defaultChecked:s}),w=["frui-field-switch"];return i&&w.push("frui-field-switch-rounded"),c&&w.push("frui-tx-error"),o?w.push("frui-field-switch-onoff"):d?w.push("frui-field-switch-yesno"):u?w.push("frui-field-switch-sunmoon"):w.push("frui-field-switch-checkex"),p?w.push("frui-field-switch-ridge"):w.push("frui-field-switch-smooth"),f?w.push("frui-field-switch-blue"):x?w.push("frui-field-switch-orange"):m?w.push("frui-field-switch-green"):w.push("frui-field-switch-default"),j&&w.push(j),(0,a.jsxs)("label",Object.assign({className:w.join(" "),style:b},{children:[(0,a.jsx)("input",Object.assign({},y,{onChange:v.change,onMouseOut:v.out,onMouseOver:v.over,type:"checkbox",className:"frui-field-switch-control",checked:t,defaultChecked:s})),(0,a.jsx)("span",Object.assign({className:"frui-field-switch-label"},{children:r}))]}))}},44995:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/field/switch",function(){return t(25553)}])},36493:function(e,s,t){"use strict";t.d(s,{C:function(){return o},Z:function(){return i}});var l=t(24246),a=t(22879),r=t(74631),n=t(48717),c=t(14707);function i(e){let{value:s,quote:t,l:a,r,children:n}=e;return(0,l.jsxs)(l.Fragment,{children:[a?(0,l.jsx)("span",{children:"\xa0"}):"",(0,l.jsxs)("code",{className:"text-sm text-t2 bg-b1 font-semibold inline-block p-0.5",children:[t?"`":"",s||n,t?"`":""]}),r?(0,l.jsx)("span",{children:"\xa0"}):""]})}function o(e){let{className:s,copy:t=!0,children:i,language:o}=e,{_:d}=(0,a.useLanguage)();return(0,l.jsxs)("div",{className:"flex text-sm bg-black ".concat(s||""),children:[(0,l.jsx)(r.Z,{className:"flex-grow !p-4 !bg-transparent",language:o,style:n._4,children:i}),t&&(0,l.jsxs)("div",{className:"text-sm p-4 text-gray-400 cursor-pointer whitespace-nowrap",onClick:()=>{navigator.clipboard.writeText(i.toString()),(0,c.ZP)("success",d("Copied to clipboard"))},children:[(0,l.jsx)("i",{className:"fas fa-copy"})," ",d("Copy")]})]})}},18604:function(e,s,t){"use strict";var l=t(24246);t(27378);var a=t(79894),r=t.n(a);let n=e=>{let{href:s,label:t,icon:a,last:n}=e,c=s?(0,l.jsx)(r(),{href:s,className:"inline-flex items-center text-t2",children:t}):(0,l.jsx)("span",{className:"inline-flex items-center font-semibold text-t1",children:t});return(0,l.jsxs)(l.Fragment,{children:[a&&(0,l.jsx)("i",{className:"fas fa-fw fa-".concat(a," inline-block mr-1 text-t1")}),c,!n&&(0,l.jsx)("i",{className:"fas fa-fw fa-chevron-right mx-1 text-t1"})]})},c=e=>{var s;let{trail:t}=e;if(0===t.length)return null;let a=t[t.length-1],n=a.href||(null===(s=t[t.length-2])||void 0===s?void 0:s.href);return n?(0,l.jsxs)(r(),{className:"flex md:hidden items-center cursor-pointer whitespace-nowrap overflow-x-hidden",href:n,children:[(0,l.jsx)("i",{className:"mr-1 fas fa-fw fa-chevron-left text-xl text-t2"}),!!a.icon&&(0,l.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(a.icon," text-sm")}),(0,l.jsx)("span",{className:"font-bold",children:a.label})]}):(0,l.jsxs)("div",{className:"flex md:hidden items-center whitespace-nowrap overflow-x-hidden",children:[!!a.icon&&(0,l.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(a.icon," text-sm")}),(0,l.jsx)("span",{className:"font-bold",children:a.label})]})};s.Z=e=>{let{crumbs:s,className:t}=e,a=[...s].filter(e=>!!e.label),r=["hidden md:flex items-center whitespace-nowrap overflow-x-auto"];return t&&r.push(t),(0,l.jsxs)("nav",{children:[(0,l.jsx)("div",{className:r.join(" "),children:a.map((e,s)=>(0,l.jsx)(n,{href:e.href,label:e.label,icon:e.icon,last:s===a.length-1},s))}),(0,l.jsx)(c,{trail:a})]})}},63527:function(e,s,t){"use strict";t.d(s,{Z:function(){return i}});var l=t(24246),a=t(22879),r=t(79531),n=t(54974),c=t.n(n);function i(e){let{props:s}=e,{_:t}=(0,a.useLanguage)(),i=(0,r.Z)("bg-b2","bg-b1");return(0,l.jsxs)(c(),{children:[(0,l.jsx)(n.Thead,{className:"text-left bg-b3",children:t("Name")}),(0,l.jsx)(n.Thead,{className:"text-left bg-b3",children:t("Type")}),(0,l.jsx)(n.Thead,{className:"text-center bg-b3",children:t("Required")}),(0,l.jsx)(n.Thead,{className:"text-left bg-b3",children:t("Notes")}),s.map((e,s)=>(0,l.jsxs)(n.Trow,{children:[(0,l.jsx)(n.Tcol,{className:"".concat(i(s)),children:e[0]}),(0,l.jsx)(n.Tcol,{className:"".concat(i(s)),children:e[1]}),(0,l.jsx)(n.Tcol,{className:"".concat(i(s)," text-center"),children:e[2]}),(0,l.jsx)(n.Tcol,{className:"".concat(i(s)),children:e[3]})]},s))]})}},79531:function(e,s,t){"use strict";function l(e,s){let t=e;return l=>"number"==typeof l?l%2==0?e:s:(l&&(t=t===e?s:e),t)}t.d(s,{Z:function(){return l}})},25553:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return x}});var l=t(24246),a=t(22879),r=t(79894),n=t.n(r),c=t(83825),i=t.n(c),o=t(54974),d=t.n(o),h=t(78968),u=t(18604),p=t(63527),f=t(36493);function x(){let{_:e}=(0,a.useLanguage)(),s=[[e("blue"),e("boolean"),e("No"),e("Show blue switch")],[e("check"),e("boolean"),e("No"),e("Show check when checked")],[e("checked"),e("boolean"),e("No"),e("Default checked state (Controlled)")],[e("checkex"),e("boolean"),e("No"),e("Use check/ex switch")],[e("className"),e("string"),e("No"),e("Standard HTML class names")],[e("defaultChecked"),e("string"),e("No"),e("Default checked state (Uncontrolled)")],[e("defaultValue"),e("string"),e("No"),e("Default value (Uncontrolled)")],[e("green"),e("boolean"),e("No"),e("Show green/red switch")],[e("error"),e("string|boolean"),e("No"),e("Any error message")],[e("label"),e("string"),e("No"),e("Shows text to the right of switch")],[e("name"),e("string"),e("No"),e("Used for react server components.")],[e("onChange"),e("Function"),e("No"),e("Event handler when value has changed")],[e("onoff"),e("boolean"),e("No"),e("Use on/off switch")],[e("onUpdate"),e("Function"),e("No"),e("Update event handler")],[e("orange"),e("boolean"),e("No"),e("Show orange switch")],[e("passRef"),e("LegacyRef"),e("No"),e("Passes ref to html input")],[e("ridge"),e("boolean"),e("No"),e("Adds ridges to knobs")],[e("rounded"),e("boolean"),e("No"),e("Make switch rounded")],[e("style"),e("CSS Object"),e("No"),e("Standard CSS object")],[e("sunmoon"),e("boolean"),e("No"),e("Use sun/moon switch")],[e("value"),e("string"),e("No"),e("Default value (Controlled)")],[e("yesno"),e("boolean"),e("No"),e("Use yes/no switch")]];return(0,l.jsx)(h.sF,{uri:"/field/switch",title:"Switch Field",description:"Switch fields in FRUI, are ReactJS components that allow users to click and enable/disable actions.",children:(0,l.jsxs)("main",{className:"flex flex-col h-full w-full",children:[(0,l.jsx)("div",{className:"p-3 bg-b2",children:(0,l.jsx)(u.Z,{crumbs:[{icon:"rectangle-list",label:"Fields",href:"/field"},{label:"Switch"}]})}),(0,l.jsxs)("div",{className:"flex-grow relative h-full",children:[(0,l.jsxs)("aside",{className:"hidden lg:block absolute top-0 bottom-0 right-0 z-1 w-56 border-l border-b1 text-sm",children:[(0,l.jsx)("h4",{className:"p-3 border-b border-b1 bg-b1 uppercase font-semibold",children:(0,l.jsx)(n(),{href:"#top",children:e("Switch")})}),(0,l.jsxs)("ul",{className:"list-disc py-3 pr-3 pl-6",children:[(0,l.jsx)("li",{className:"pl-3 pb-1",children:(0,l.jsx)(n(),{href:"#props",children:e("Props")})}),(0,l.jsx)("li",{className:"pl-3 pb-1",children:(0,l.jsx)(n(),{href:"#basic",children:e("Basics")})}),(0,l.jsx)("li",{className:"pl-3 pb-1",children:(0,l.jsx)(n(),{href:"#events",children:e("Events")})}),(0,l.jsx)("li",{className:"pl-3 pb-1",children:(0,l.jsx)(n(),{href:"#errors",children:e("Errors")})}),(0,l.jsx)("li",{className:"pl-3 pb-1",children:(0,l.jsx)(n(),{href:"#styles",children:e("Custom Styles")})})]})]}),(0,l.jsxs)("div",{className:"absolute top-0 bottom-0 left-0 right-0 lg:right-56 px-3 pt-3 pb-5 h-full overflow-auto",children:[(0,l.jsx)("h1",{id:"top",className:"flex items-center uppercase font-bold text-xl",children:e("Switch")}),(0,l.jsx)(f.C,{language:"typescript",className:"mt-2",children:"import Switch from 'frui/fields/Switch';"}),(0,l.jsx)("h2",{id:"props",className:"uppercase font-bold text-lg mt-8",children:e("Props")}),(0,l.jsx)("p",{children:(0,l.jsxs)(a.Translate,{children:["Switch accepts all props of a standard HTML input element. See ",(0,l.jsx)("a",{className:"text-t2 underline",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Switch",target:"_blank",children:"Moz"})," for standard input attributes."]})}),(0,l.jsx)(p.Z,{props:s}),(0,l.jsx)("h2",{id:"basic",className:"uppercase font-bold text-lg mt-8",children:e("Basics")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(a.Translate,{children:["Switch wraps the HTML standard ",(0,l.jsx)("code",{className:"text-sm text-t2",children:"`<input />`"})," element. Therefore, you can use any input attributes as props."]})}),(0,l.jsxs)("div",{className:"curved overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,l.jsx)(i(),{name:"name",value:"yes",defaultChecked:!0})}),(0,l.jsx)(f.C,{language:"typescript",children:'<Switch name="name" value="yes" defaultChecked />'})]}),(0,l.jsx)("h2",{id:"events",className:"uppercase font-bold text-lg mt-8",children:e("Events")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(a.Translate,{children:[(0,l.jsx)(f.Z,{value:"onUpdate"})," is like ",(0,l.jsx)(f.Z,{value:"onChange",r:!0}),"except the value is passed instead of the change event."]})}),(0,l.jsxs)("div",{className:"curved overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,l.jsx)(i(),{onUpdate:(e,s)=>alert("".concat(e," - ").concat(s))})}),(0,l.jsx)(f.C,{language:"typescript",children:"<Switch onUpdate={(value, checked) => alert(`${value} - ${checked}`)} />"})]}),(0,l.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("On Change")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(a.Translate,{children:["The ",(0,l.jsx)(f.Z,{value:"onChange"})," event is triggered when the value has changed. The following arguments are passed to the event handler:"]})}),(0,l.jsxs)(d(),{children:[(0,l.jsx)(o.Thead,{className:"bg-b3 text-left",children:e("Name")}),(0,l.jsx)(o.Thead,{className:"bg-b3 text-left",children:e("Type")}),(0,l.jsx)(o.Thead,{className:"bg-b3 text-left",children:e("Sample")}),(0,l.jsxs)(o.Trow,{children:[(0,l.jsx)(o.Tcol,{className:"bg-b1 text-left",children:e("event")}),(0,l.jsx)(o.Tcol,{className:"bg-b1 text-left",children:e("Event Object")}),(0,l.jsxs)(o.Tcol,{className:"bg-b1 text-left",children:["see: ",(0,l.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event",target:"_blank",children:"Change Event"})]})]})]}),(0,l.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("On Update")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(a.Translate,{children:["The ",(0,l.jsx)(f.Z,{value:"onUpdate"})," event is triggered when the value has been updated. The following arguments are passed to the event handler:"]})}),(0,l.jsxs)(d(),{children:[(0,l.jsx)(o.Thead,{className:"bg-b3 text-left",children:e("Name")}),(0,l.jsx)(o.Thead,{className:"bg-b3 text-left",children:e("Type")}),(0,l.jsx)(o.Thead,{className:"bg-b3 text-left",children:e("Sample")}),(0,l.jsxs)(o.Trow,{children:[(0,l.jsx)(o.Tcol,{className:"bg-b1 text-left",children:e("value")}),(0,l.jsx)(o.Tcol,{className:"bg-b1 text-left",children:e("string")}),(0,l.jsx)(o.Tcol,{className:"bg-b1 text-left",children:(0,l.jsx)(f.Z,{value:"foobar",quote:!0})})]})]}),(0,l.jsx)("h2",{id:"errors",className:"uppercase font-bold text-lg mt-8",children:e("Errors")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(a.Translate,{children:["You can pass the ",(0,l.jsx)(f.Z,{value:"error"})," prop to highlight the Switch field red."]})}),(0,l.jsxs)("div",{className:"curved overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,l.jsx)(i(),{error:!0,label:"Active?",defaultChecked:!0})}),(0,l.jsx)(f.C,{language:"typescript",children:"<Switch error defaultChecked />"})]}),(0,l.jsx)("h2",{id:"styles",className:"uppercase font-bold text-lg mt-8",children:e("Custom Styles")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(a.Translate,{children:["You can apply rounded, colors and shapes to the",(0,l.jsx)(f.Z,{l:!0,value:"Switch"})," component."]})}),(0,l.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("Ridge")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(a.Translate,{children:["Use ",(0,l.jsx)(f.Z,{value:"ridge"})," prop to add ridges to the knobs."]})}),(0,l.jsxs)("div",{className:"curved overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,l.jsx)(i(),{ridge:!0,defaultChecked:!0})}),(0,l.jsx)(f.C,{language:"typescript",children:"<Switch ridge defaultChecked />"})]}),(0,l.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("Rounded")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(a.Translate,{children:["Use ",(0,l.jsx)(f.Z,{value:"rounded"})," prop to make the switches circular."]})}),(0,l.jsxs)("div",{className:"curved overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,l.jsx)(i(),{rounded:!0,defaultChecked:!0})}),(0,l.jsx)(f.C,{language:"typescript",children:"<Switch rounded defaultChecked />"})]}),(0,l.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("Colors")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(a.Translate,{children:["Use ",(0,l.jsx)(f.Z,{value:"blue"}),", ",(0,l.jsx)(f.Z,{value:"orange"})," or",(0,l.jsx)(f.Z,{l:!0,value:"green"})," prop to change the color of switches."]})}),(0,l.jsxs)("div",{className:"curved overflow-hidden",children:[(0,l.jsxs)("div",{className:"flex items-center justify-center p-3 bg-b1",children:[(0,l.jsx)(i(),{blue:!0,label:"Blue",defaultChecked:!0}),(0,l.jsx)(i(),{orange:!0,label:"Orange",defaultChecked:!0,className:"ml-4"}),(0,l.jsx)(i(),{green:!0,label:"Green",defaultChecked:!0,className:"ml-4"})]}),(0,l.jsx)(f.C,{language:"typescript",children:'<Switch blue label="Blue" defaultChecked />'})]}),(0,l.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("Shapes")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(a.Translate,{children:["Use ",(0,l.jsx)(f.Z,{value:"onoff"}),", ",(0,l.jsx)(f.Z,{value:"yesno"}),",",(0,l.jsx)(f.Z,{l:!0,value:"checkex"})," or ",(0,l.jsx)(f.Z,{value:"sunmoon"})," prop to change the color of switches."]})}),(0,l.jsxs)("div",{className:"curved overflow-hidden",children:[(0,l.jsxs)("div",{className:"flex items-center justify-center p-3 bg-b1",children:[(0,l.jsx)(i(),{onoff:!0,defaultChecked:!0}),(0,l.jsx)(i(),{yesno:!0,defaultChecked:!0,className:"ml-4"}),(0,l.jsx)(i(),{checkex:!0,defaultChecked:!0,className:"ml-4"}),(0,l.jsx)(i(),{sunmoon:!0,defaultChecked:!0,className:"ml-4"})]}),(0,l.jsx)(f.C,{language:"typescript",children:'<Switch onoff label="Blue" defaultChecked />'})]}),(0,l.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("Combniations")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsx)(a.Translate,{children:"Try different combinations to get the switch you want."})}),(0,l.jsx)("div",{className:"curved overflow-hidden",children:(0,l.jsxs)("div",{className:"flex items-center justify-center p-3 bg-b1",children:[(0,l.jsx)(i(),{onoff:!0,rounded:!0,blue:!0,defaultChecked:!0}),(0,l.jsx)(i(),{yesno:!0,orange:!0,ridge:!0,defaultChecked:!0,className:"ml-4"}),(0,l.jsx)(i(),{checkex:!0,rounded:!0,green:!0,ridge:!0,defaultChecked:!0,className:"ml-4"}),(0,l.jsx)(i(),{sunmoon:!0,rounded:!0,defaultChecked:!0,className:"ml-4"})]})}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(a.Translate,{children:["You can also add your own custom class to",(0,l.jsx)(f.Z,{l:!0,value:"Switch"})," components or use any combination of",(0,l.jsx)(f.Z,{l:!0,value:"frui-field-option"}),",",(0,l.jsx)(f.Z,{l:!0,value:"frui-field-option-control"}),", and",(0,l.jsx)(f.Z,{l:!0,value:"frui-field-option-label"})," CSS classes."]})}),(0,l.jsxs)("div",{className:"flex items-center border-t border-b2 mt-8 pt-4",children:[(0,l.jsxs)(n(),{className:"text-t2",href:"/field/slug",children:[(0,l.jsx)("i",{className:"fas fa-arrow-left mr-2"}),e("Slug")]}),(0,l.jsx)("div",{className:"flex-grow"}),(0,l.jsxs)(n(),{className:"text-t2",href:"/field/taglist",children:[e("Taglist"),(0,l.jsx)("i",{className:"fas fa-arrow-right ml-2"})]})]})]})]})]})})}}},function(e){e.O(0,[9461,2888,9774,179],function(){return e(e.s=44995)}),_N_E=e.O()}]);