(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7424],{54974:function(e,t,s){"use strict";var r=this&&this.__rest||function(e,t){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(s[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(s[r[l]]=e[r[l]]);return s},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Tgroup=t.Trow=t.Tcol=t.Tfoot=t.Thead=t.Table=void 0;let a=s(24246),n=l(s(27378)),i=({width:e})=>(0,a.jsx)("hr",{style:{borderWidth:0,margin:0,width:e}});class o extends n.default.Component{table(){return"TableCol"}render(){let e=this.props,{stickyBottom:t,stickyLeft:s,stickyRight:l,stickyTop:n,noWrap:o,rowSpan:c,colSpan:d,wrap1:p,wrap2:h,wrap3:u,wrap4:f,wrap5:x,className:b,children:m}=e,j=r(e,["stickyBottom","stickyLeft","stickyRight","stickyTop","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),g=["frui-tbl-col"];(t||s||l||n)&&(g.push("frui-tbl-sticky"),t&&g.push("frui-tbl-sticky-b","frui-tbl-z1"),s&&g.push("frui-tbl-sticky-l","frui-tbl-z2"),l&&g.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&g.push("frui-tbl-sticky-t","frui-tbl-z1")),o&&g.push("frui-tbl-nowrap");let y={};c&&(y.rowSpan=c||0),d&&(y.colSpan=d||0);let v=null;return p?v=(0,a.jsx)(i,{width:"100px"}):h?v=(0,a.jsx)(i,{width:"200px"}):u?v=(0,a.jsx)(i,{width:"300px"}):f?v=(0,a.jsx)(i,{width:"400px"}):x&&(v=(0,a.jsx)(i,{width:"500px"})),b&&g.push(b),(0,a.jsxs)("td",Object.assign({valign:"top"},j,{className:g.join(" ")},y,{children:[m,v]}))}}t.Tcol=o;class c extends n.default.Component{table(){return"TableFoot"}render(){let e=this.props,{stickyBottom:t,stickyLeft:s,stickyRight:l,noWrap:n,rowSpan:i,colSpan:o,className:c,children:d}=e,p=r(e,["stickyBottom","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","className","children"]),h=["frui-tbl-foot"];(t||s||l)&&(h.push("frui-tbl-sticky"),t&&h.push("frui-tbl-sticky-b","frui-tbl-z1"),s&&h.push("frui-tbl-sticky-l","frui-tbl-z2"),l&&h.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&h.push("frui-tbl-nowrap"));let u={};return i&&(u.rowSpan=i||0),o&&(u.colSpan=o||0),c&&h.push(c),(0,a.jsx)("th",Object.assign({},p,{className:h.join(" ")},u,{children:d}))}}t.Tfoot=c;class d extends n.default.Component{table(){return"TableGroup"}render(){return this.props.children}}t.Tgroup=d;class p extends n.default.Component{table(){return"TableRow"}render(){let e=this.props,{noWrap:t,rowSpan:s,colSpan:l,className:n,children:i}=e,o=r(e,["noWrap","rowSpan","colSpan","className","children"]),c=["frui-tbl-row"];t&&c.push("frui-tbl-nowrap");let d={};return s&&(d.rowSpan=s||0),l&&(d.colSpan=l||0),n&&c.push(n),(0,a.jsx)("tr",Object.assign({},o,{className:c.join(" ")},d,{children:i}))}}t.Trow=p;class h extends n.default.Component{table(){return"TableHead"}render(){let e=this.props,{stickyTop:t,stickyLeft:s,stickyRight:l,noWrap:n,rowSpan:o,colSpan:c,wrap1:d,wrap2:p,wrap3:h,wrap4:u,wrap5:f,className:x,children:b}=e,m=r(e,["stickyTop","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),j=["frui-tbl-head"];(s||l||t)&&(j.push("frui-tbl-sticky"),t&&(j.push("frui-tbl-sticky-t"),s&&l?j.push("frui-tbl-z4"):s||l?j.push("frui-tbl-z3"):j.push("frui-tbl-z1")),s&&j.push("frui-tbl-sticky-l","frui-tbl-z1"),l&&j.push("frui-tbl-sticky-r","frui-tbl-z1")),n&&j.push("frui-tbl-nowrap");let g={};o&&(g.rowSpan=o||0),c&&(g.colSpan=c||0);let y=null;return d?y=(0,a.jsx)(i,{width:"100px"}):p?y=(0,a.jsx)(i,{width:"200px"}):h?y=(0,a.jsx)(i,{width:"300px"}):u?y=(0,a.jsx)(i,{width:"400px"}):f&&(y=(0,a.jsx)(i,{width:"500px"})),x&&j.push(x),(0,a.jsxs)("th",Object.assign({},m,{className:j.join(" ")},g,{children:[b,y]}))}}t.Thead=h;let u=function(e){var t,s;let r=[];if(Array.isArray(e))for(let l of e)l&&(Array.isArray(l)?r.push.apply(r,u(l)):"object"==typeof l&&l.props&&"thead"in l.props?r.push(l):"function"==typeof(null===(s=null===(t=null==l?void 0:l.type)||void 0===t?void 0:t.prototype)||void 0===s?void 0:s.table)&&"TableHead"===l.type.prototype.table()&&r.push(l));return r},f=function(e){var t,s;let r=[];if(Array.isArray(e))for(let l of e)Array.isArray(l)?r.push.apply(r,f(l)):"object"==typeof l&&l.props&&"tfoot"in l.props?r.push(l):"function"==typeof(null===(s=null===(t=null==l?void 0:l.type)||void 0===t?void 0:t.prototype)||void 0===s?void 0:s.table)&&"TableFoot"===l.type.prototype.table()&&r.push(l);return r},x=function(e){var t,s,r,l;let a=[];if(Array.isArray(e))for(let n of e)if(Array.isArray(n))a.push.apply(a,x(n));else if("object"==typeof n&&n.props&&"tbody"in n.props)a.push(n);else if("function"==typeof(null===(s=null===(t=null==n?void 0:n.type)||void 0===t?void 0:t.prototype)||void 0===s?void 0:s.table)&&"TableGroup"===n.type.prototype.table()){let e=n.props.children||[];Array.isArray(e)&&e.length>0&&a.push(...e)}else"function"==typeof(null===(l=null===(r=null==n?void 0:n.type)||void 0===r?void 0:r.prototype)||void 0===l?void 0:l.table)&&"TableRow"===n.type.prototype.table()&&a.push(n);return a};function b(e){let t=e.children||[];Array.isArray(t)||(t=[t]);let s=u(t),r=x(t),l=f(t),n=["frui-tbl-overflow"];return e.className&&n.push(e.className),(0,a.jsx)("div",Object.assign({className:n.join(" "),style:e.style},{children:(0,a.jsxs)("table",Object.assign({className:"frui-tbl"},{children:[s&&(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:s})}),r&&(0,a.jsx)("tbody",{children:r}),l&&(0,a.jsx)("tfoot",{children:(0,a.jsx)("tr",{children:l})})]}))}))}t.default=b,t.Table=b},38900:function(e,t,s){"use strict";var r=this&&this.__rest||function(e,t){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(s[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(s[r[l]]=e[r[l]]);return s};Object.defineProperty(t,"__esModule",{value:!0}),t.useTextarea=void 0;let l=s(24246);function a({onChange:e,onUpdate:t}){return{handlers:{change:s=>{e&&e(s),t&&t(s.target.value)}}}}t.useTextarea=a,t.default=function(e){let{error:t,className:s,onChange:n,onUpdate:i,passRef:o}=e,c=r(e,["error","className","onChange","onUpdate","passRef"]),{handlers:d}=a({onChange:n,onUpdate:i}),p=["frui-field-textarea"];return t&&p.push("frui-tx-error","frui-bd-error"),s&&p.push(s),(0,l.jsx)("textarea",Object.assign({},c,{className:p.join(" "),ref:o,onChange:d.change}))}},55464:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/field/textarea",function(){return s(30304)}])},36493:function(e,t,s){"use strict";s.d(t,{C:function(){return c},Z:function(){return o}});var r=s(24246),l=s(22879),a=s(74631),n=s(48717),i=s(14707);function o(e){let{value:t,quote:s,l,r:a,children:n}=e;return(0,r.jsxs)(r.Fragment,{children:[l?(0,r.jsx)("span",{children:"\xa0"}):"",(0,r.jsxs)("code",{className:"text-sm text-t2 bg-b1 font-semibold inline-block p-0.5",children:[s?"`":"",t||n,s?"`":""]}),a?(0,r.jsx)("span",{children:"\xa0"}):""]})}function c(e){let{className:t,copy:s=!0,children:o,language:c}=e,{_:d}=(0,l.useLanguage)();return(0,r.jsxs)("div",{className:"flex text-sm bg-black ".concat(t||""),children:[(0,r.jsx)(a.Z,{className:"flex-grow !p-4 !bg-transparent",language:c,style:n._4,children:o}),s&&(0,r.jsxs)("div",{className:"text-sm p-4 text-gray-400 cursor-pointer whitespace-nowrap",onClick:()=>{navigator.clipboard.writeText(o.toString()),(0,i.ZP)("success",d("Copied to clipboard"))},children:[(0,r.jsx)("i",{className:"fas fa-copy"})," ",d("Copy")]})]})}},18604:function(e,t,s){"use strict";var r=s(24246);s(27378);var l=s(79894),a=s.n(l);let n=e=>{let{href:t,label:s,icon:l,last:n}=e,i=t?(0,r.jsx)(a(),{href:t,className:"inline-flex items-center text-t2",children:s}):(0,r.jsx)("span",{className:"inline-flex items-center font-semibold text-t1",children:s});return(0,r.jsxs)(r.Fragment,{children:[l&&(0,r.jsx)("i",{className:"fas fa-fw fa-".concat(l," inline-block mr-1 text-t1")}),i,!n&&(0,r.jsx)("i",{className:"fas fa-fw fa-chevron-right mx-1 text-t1"})]})},i=e=>{var t;let{trail:s}=e;if(0===s.length)return null;let l=s[s.length-1],n=l.href||(null===(t=s[s.length-2])||void 0===t?void 0:t.href);return n?(0,r.jsxs)(a(),{className:"flex md:hidden items-center cursor-pointer whitespace-nowrap overflow-x-hidden",href:n,children:[(0,r.jsx)("i",{className:"mr-1 fas fa-fw fa-chevron-left text-xl text-t2"}),!!l.icon&&(0,r.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(l.icon," text-sm")}),(0,r.jsx)("span",{className:"font-bold",children:l.label})]}):(0,r.jsxs)("div",{className:"flex md:hidden items-center whitespace-nowrap overflow-x-hidden",children:[!!l.icon&&(0,r.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(l.icon," text-sm")}),(0,r.jsx)("span",{className:"font-bold",children:l.label})]})};t.Z=e=>{let{crumbs:t,className:s}=e,l=[...t].filter(e=>!!e.label),a=["hidden md:flex items-center whitespace-nowrap overflow-x-auto"];return s&&a.push(s),(0,r.jsxs)("nav",{children:[(0,r.jsx)("div",{className:a.join(" "),children:l.map((e,t)=>(0,r.jsx)(n,{href:e.href,label:e.label,icon:e.icon,last:t===l.length-1},t))}),(0,r.jsx)(i,{trail:l})]})}},63527:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var r=s(24246),l=s(22879),a=s(79531),n=s(54974),i=s.n(n);function o(e){let{props:t}=e,{_:s}=(0,l.useLanguage)(),o=(0,a.Z)("bg-b2","bg-b1");return(0,r.jsxs)(i(),{children:[(0,r.jsx)(n.Thead,{className:"text-left bg-b3",children:s("Name")}),(0,r.jsx)(n.Thead,{className:"text-left bg-b3",children:s("Type")}),(0,r.jsx)(n.Thead,{className:"text-center bg-b3",children:s("Required")}),(0,r.jsx)(n.Thead,{className:"text-left bg-b3",children:s("Notes")}),t.map((e,t)=>(0,r.jsxs)(n.Trow,{children:[(0,r.jsx)(n.Tcol,{className:"".concat(o(t)),children:e[0]}),(0,r.jsx)(n.Tcol,{className:"".concat(o(t)),children:e[1]}),(0,r.jsx)(n.Tcol,{className:"".concat(o(t)," text-center"),children:e[2]}),(0,r.jsx)(n.Tcol,{className:"".concat(o(t)),children:e[3]})]},t))]})}},79531:function(e,t,s){"use strict";function r(e,t){let s=e;return r=>"number"==typeof r?r%2==0?e:t:(r&&(s=s===e?t:e),s)}s.d(t,{Z:function(){return r}})},30304:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var r=s(24246),l=s(22879),a=s(79894),n=s.n(a),i=s(38900),o=s.n(i),c=s(54974),d=s.n(c),p=s(78968),h=s(18604),u=s(63527),f=s(36493);function x(){let{_:e}=(0,l.useLanguage)(),t=[[e("className"),e("string"),e("No"),e("Standard HTML class names")],[e("defaultValue"),e("string"),e("No"),e("Default value (Uncontrolled)")],[e("error"),e("string|boolean"),e("No"),e("Any error message")],[e("name"),e("string"),e("No"),e("Used for react server components.")],[e("onChange"),e("Function"),e("No"),e("Event handler when value has changed")],[e("onUpdate"),e("Function"),e("No"),e("Update event handler")],[e("passRef"),e("LegacyRef"),e("No"),e("Passes ref to html textarea")],[e("rows"),e("number"),e("No"),e("Number of visible rows")],[e("style"),e("CSS Object"),e("No"),e("Standard CSS object")],[e("value"),e("string"),e("No"),e("Default value (Controlled)")]];return(0,r.jsx)(p.sF,{uri:"/field/textarea",title:"Textarea Field",description:"Textarea fields in FRUI, are ReactJS components that allow users to enter multi-line values.",children:(0,r.jsxs)("main",{className:"flex flex-col h-full w-full",children:[(0,r.jsx)("div",{className:"p-3 bg-b2",children:(0,r.jsx)(h.Z,{crumbs:[{icon:"rectangle-list",label:"Fields",href:"/field"},{label:"Textarea"}]})}),(0,r.jsxs)("div",{className:"flex-grow relative h-full",children:[(0,r.jsxs)("aside",{className:"hidden lg:block absolute top-0 bottom-0 right-0 z-1 w-56 border-l border-b1 text-sm",children:[(0,r.jsx)("h4",{className:"p-3 border-b border-b1 bg-b1 uppercase font-semibold",children:(0,r.jsx)(n(),{href:"#top",children:e("Textarea")})}),(0,r.jsxs)("ul",{className:"list-disc py-3 pr-3 pl-6",children:[(0,r.jsx)("li",{className:"pl-3 pb-1",children:(0,r.jsx)(n(),{href:"#props",children:e("Props")})}),(0,r.jsx)("li",{className:"pl-3 pb-1",children:(0,r.jsx)(n(),{href:"#basic",children:e("Basics")})}),(0,r.jsx)("li",{className:"pl-3 pb-1",children:(0,r.jsx)(n(),{href:"#events",children:e("Events")})}),(0,r.jsx)("li",{className:"pl-3 pb-1",children:(0,r.jsx)(n(),{href:"#errors",children:e("Errors")})})]})]}),(0,r.jsxs)("div",{className:"absolute top-0 bottom-0 left-0 right-0 lg:right-56 px-3 pt-3 pb-5 h-full overflow-auto",children:[(0,r.jsx)("h1",{id:"top",className:"flex items-center uppercase font-bold text-xl",children:e("Textarea")}),(0,r.jsx)(f.C,{language:"typescript",className:"mt-2",children:"import Textarea from 'frui/fields/Textarea';"}),(0,r.jsx)("h2",{id:"props",className:"uppercase font-bold text-lg mt-8",children:e("Props")}),(0,r.jsx)("p",{children:(0,r.jsxs)(l.Translate,{children:["Textarea accepts all props of a standard HTML Textarea element. See ",(0,r.jsx)("a",{className:"text-t2 underline",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea",target:"_blank",children:"Moz"})," for standard textarea attributes."]})}),(0,r.jsx)(u.Z,{props:t}),(0,r.jsx)("h2",{id:"basic",className:"uppercase font-bold text-lg mt-8",children:e("Basics")}),(0,r.jsx)("p",{className:"py-4",children:(0,r.jsxs)(l.Translate,{children:["Textarea wraps the HTML standard ",(0,r.jsx)("code",{className:"text-sm text-t2",children:"`<textarea />`"})," element. Therefore, you can use any textarea attributes as props."]})}),(0,r.jsxs)("div",{className:"curved overflow-hidden",children:[(0,r.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,r.jsx)(o(),{name:"name",placeholder:"Enter name..",children:"Hello World"})}),(0,r.jsx)(f.C,{language:"typescript",children:'<Textarea name="name" placeholder="Enter name..">Hello World</Textarea>'})]}),(0,r.jsx)("h2",{id:"events",className:"uppercase font-bold text-lg mt-8",children:e("Events")}),(0,r.jsx)("p",{className:"py-4",children:(0,r.jsxs)(l.Translate,{children:[(0,r.jsx)(f.Z,{value:"onUpdate"})," is like ",(0,r.jsx)(f.Z,{value:"onChange",r:!0}),"except the value is passed instead of the change event."]})}),(0,r.jsxs)("div",{className:"curved overflow-hidden",children:[(0,r.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,r.jsx)(o(),{onUpdate:e=>alert(e),children:"Hello World"})}),(0,r.jsx)(f.C,{language:"typescript",children:"<Textarea onUpdate={value => alert(value)}>Hello World</Textarea>"})]}),(0,r.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("On Change")}),(0,r.jsx)("p",{className:"py-4",children:(0,r.jsxs)(l.Translate,{children:["The ",(0,r.jsx)(f.Z,{value:"onChange"})," event is triggered when the value has changed. The following arguments are passed to the event handler:"]})}),(0,r.jsxs)(d(),{children:[(0,r.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Name")}),(0,r.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Type")}),(0,r.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Sample")}),(0,r.jsxs)(c.Trow,{children:[(0,r.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("event")}),(0,r.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("Event Object")}),(0,r.jsxs)(c.Tcol,{className:"bg-b1 text-left",children:["see: ",(0,r.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event",target:"_blank",children:"Change Event"})]})]})]}),(0,r.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("On Update")}),(0,r.jsx)("p",{className:"py-4",children:(0,r.jsxs)(l.Translate,{children:["The ",(0,r.jsx)(f.Z,{value:"onUpdate"})," event is triggered when the value has been updated. The following arguments are passed to the event handler:"]})}),(0,r.jsxs)(d(),{children:[(0,r.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Name")}),(0,r.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Type")}),(0,r.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Sample")}),(0,r.jsxs)(c.Trow,{children:[(0,r.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("value")}),(0,r.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("string")}),(0,r.jsx)(c.Tcol,{className:"bg-b1 text-left",children:(0,r.jsx)(f.Z,{value:"foobar",quote:!0})})]})]}),(0,r.jsx)("h2",{id:"errors",className:"uppercase font-bold text-lg mt-8",children:e("Errors")}),(0,r.jsx)("p",{className:"py-4",children:(0,r.jsxs)(l.Translate,{children:["You can pass the ",(0,r.jsx)(f.Z,{value:"error"})," prop to highlight the textarea field red."]})}),(0,r.jsxs)("div",{className:"curved overflow-hidden",children:[(0,r.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,r.jsx)(o(),{error:!0,onUpdate:e=>alert(e),children:"Not a hotdog."})}),(0,r.jsx)(f.C,{language:"typescript",children:"<Textarea error onUpdate={value => alert(value)}>Not a hotdog.</Textarea>"})]}),(0,r.jsxs)("div",{className:"flex items-center border-t border-b2 mt-8 pt-4",children:[(0,r.jsxs)(n(),{className:"text-t2",href:"/field/taglist",children:[(0,r.jsx)("i",{className:"fas fa-arrow-left mr-2"}),e("Taglist")]}),(0,r.jsx)("div",{className:"flex-grow"}),(0,r.jsxs)(n(),{className:"text-t2",href:"/field/textlist",children:[e("Textlist"),(0,r.jsx)("i",{className:"fas fa-arrow-right ml-2"})]})]})]})]})]})})}}},function(e){e.O(0,[9461,2888,9774,179],function(){return e(e.s=55464)}),_N_E=e.O()}]);