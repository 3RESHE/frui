(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1926],{54974:function(e,t,s){"use strict";var l=this&&this.__rest||function(e,t){var s={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(s[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)0>t.indexOf(l[r])&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(s[l[r]]=e[l[r]]);return s},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Tgroup=t.Trow=t.Tcol=t.Tfoot=t.Thead=t.Table=void 0;let n=s(24246),a=r(s(27378)),o=({width:e})=>(0,n.jsx)("hr",{style:{borderWidth:0,margin:0,width:e}});class i extends a.default.Component{table(){return"TableCol"}render(){let e=this.props,{stickyBottom:t,stickyLeft:s,stickyRight:r,stickyTop:a,noWrap:i,rowSpan:c,colSpan:d,wrap1:p,wrap2:u,wrap3:h,wrap4:f,wrap5:x,className:b,children:m}=e,j=l(e,["stickyBottom","stickyLeft","stickyRight","stickyTop","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),g=["frui-tbl-col"];(t||s||r||a)&&(g.push("frui-tbl-sticky"),t&&g.push("frui-tbl-sticky-b","frui-tbl-z1"),s&&g.push("frui-tbl-sticky-l","frui-tbl-z2"),r&&g.push("frui-tbl-sticky-r","frui-tbl-z2"),a&&g.push("frui-tbl-sticky-t","frui-tbl-z1")),i&&g.push("frui-tbl-nowrap");let y={};c&&(y.rowSpan=c||0),d&&(y.colSpan=d||0);let v=null;return p?v=(0,n.jsx)(o,{width:"100px"}):u?v=(0,n.jsx)(o,{width:"200px"}):h?v=(0,n.jsx)(o,{width:"300px"}):f?v=(0,n.jsx)(o,{width:"400px"}):x&&(v=(0,n.jsx)(o,{width:"500px"})),b&&g.push(b),(0,n.jsxs)("td",Object.assign({valign:"top"},j,{className:g.join(" ")},y,{children:[m,v]}))}}t.Tcol=i;class c extends a.default.Component{table(){return"TableFoot"}render(){let e=this.props,{stickyBottom:t,stickyLeft:s,stickyRight:r,noWrap:a,rowSpan:o,colSpan:i,className:c,children:d}=e,p=l(e,["stickyBottom","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","className","children"]),u=["frui-tbl-foot"];(t||s||r)&&(u.push("frui-tbl-sticky"),t&&u.push("frui-tbl-sticky-b","frui-tbl-z1"),s&&u.push("frui-tbl-sticky-l","frui-tbl-z2"),r&&u.push("frui-tbl-sticky-r","frui-tbl-z2"),a&&u.push("frui-tbl-nowrap"));let h={};return o&&(h.rowSpan=o||0),i&&(h.colSpan=i||0),c&&u.push(c),(0,n.jsx)("th",Object.assign({},p,{className:u.join(" ")},h,{children:d}))}}t.Tfoot=c;class d extends a.default.Component{table(){return"TableGroup"}render(){return this.props.children}}t.Tgroup=d;class p extends a.default.Component{table(){return"TableRow"}render(){let e=this.props,{noWrap:t,rowSpan:s,colSpan:r,className:a,children:o}=e,i=l(e,["noWrap","rowSpan","colSpan","className","children"]),c=["frui-tbl-row"];t&&c.push("frui-tbl-nowrap");let d={};return s&&(d.rowSpan=s||0),r&&(d.colSpan=r||0),a&&c.push(a),(0,n.jsx)("tr",Object.assign({},i,{className:c.join(" ")},d,{children:o}))}}t.Trow=p;class u extends a.default.Component{table(){return"TableHead"}render(){let e=this.props,{stickyTop:t,stickyLeft:s,stickyRight:r,noWrap:a,rowSpan:i,colSpan:c,wrap1:d,wrap2:p,wrap3:u,wrap4:h,wrap5:f,className:x,children:b}=e,m=l(e,["stickyTop","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),j=["frui-tbl-head"];(s||r||t)&&(j.push("frui-tbl-sticky"),t&&(j.push("frui-tbl-sticky-t"),s&&r?j.push("frui-tbl-z4"):s||r?j.push("frui-tbl-z3"):j.push("frui-tbl-z1")),s&&j.push("frui-tbl-sticky-l","frui-tbl-z1"),r&&j.push("frui-tbl-sticky-r","frui-tbl-z1")),a&&j.push("frui-tbl-nowrap");let g={};i&&(g.rowSpan=i||0),c&&(g.colSpan=c||0);let y=null;return d?y=(0,n.jsx)(o,{width:"100px"}):p?y=(0,n.jsx)(o,{width:"200px"}):u?y=(0,n.jsx)(o,{width:"300px"}):h?y=(0,n.jsx)(o,{width:"400px"}):f&&(y=(0,n.jsx)(o,{width:"500px"})),x&&j.push(x),(0,n.jsxs)("th",Object.assign({},m,{className:j.join(" ")},g,{children:[b,y]}))}}t.Thead=u;let h=function(e){var t,s;let l=[];if(Array.isArray(e))for(let r of e)r&&(Array.isArray(r)?l.push.apply(l,h(r)):"object"==typeof r&&r.props&&"thead"in r.props?l.push(r):"function"==typeof(null===(s=null===(t=null==r?void 0:r.type)||void 0===t?void 0:t.prototype)||void 0===s?void 0:s.table)&&"TableHead"===r.type.prototype.table()&&l.push(r));return l},f=function(e){var t,s;let l=[];if(Array.isArray(e))for(let r of e)Array.isArray(r)?l.push.apply(l,f(r)):"object"==typeof r&&r.props&&"tfoot"in r.props?l.push(r):"function"==typeof(null===(s=null===(t=null==r?void 0:r.type)||void 0===t?void 0:t.prototype)||void 0===s?void 0:s.table)&&"TableFoot"===r.type.prototype.table()&&l.push(r);return l},x=function(e){var t,s,l,r;let n=[];if(Array.isArray(e))for(let a of e)if(Array.isArray(a))n.push.apply(n,x(a));else if("object"==typeof a&&a.props&&"tbody"in a.props)n.push(a);else if("function"==typeof(null===(s=null===(t=null==a?void 0:a.type)||void 0===t?void 0:t.prototype)||void 0===s?void 0:s.table)&&"TableGroup"===a.type.prototype.table()){let e=a.props.children||[];Array.isArray(e)&&e.length>0&&n.push(...e)}else"function"==typeof(null===(r=null===(l=null==a?void 0:a.type)||void 0===l?void 0:l.prototype)||void 0===r?void 0:r.table)&&"TableRow"===a.type.prototype.table()&&n.push(a);return n};function b(e){let t=e.children||[];Array.isArray(t)||(t=[t]);let s=h(t),l=x(t),r=f(t),a=["frui-tbl-overflow"];return e.className&&a.push(e.className),(0,n.jsx)("div",Object.assign({className:a.join(" "),style:e.style},{children:(0,n.jsxs)("table",Object.assign({className:"frui-tbl"},{children:[s&&(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:s})}),l&&(0,n.jsx)("tbody",{children:l}),r&&(0,n.jsx)("tfoot",{children:(0,n.jsx)("tr",{children:r})})]}))}))}t.default=b,t.Table=b},79565:function(e,t,s){"use strict";var l=this&&this.__rest||function(e,t){var s={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(s[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)0>t.indexOf(l[r])&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(s[l[r]]=e[l[r]]);return s},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AutocompleteDropdown=t.useAutocomplete=void 0;let n=s(24246),a=s(27378),o=r(s(42378));function i(e){let{options:t,defaultValue:s,onSelected:l,onQuery:r,onDropdown:n,onChange:o,onUpdate:i}=e,[c,d]=(0,a.useState)(s||""),[p,u]=(0,a.useState)(t||[]),[h,f]=(0,a.useState)(""),[x,b]=(0,a.useState)(!1);return{value:c,options:p,showing:x,handlers:{search:e=>{b(!0),n&&n(!0),setTimeout(()=>{let t=e.target;f(t.value),r&&r(t.value,u)})},update:e=>{o&&o(e),i&&i(e.target.value),d(e.target.value)},match:e=>{let t=(h||"").toLowerCase();return h.length&&e.toLowerCase().indexOf(t)>=0},select:e=>{b(!1),n&&n(!1),i&&i(e),d(e),o&&o({target:{value:e}}),l&&l(e)},blur:e=>{setTimeout(()=>b(!1),10)}}}}function c(e){let{options:t,show:s,select:l,match:r}=e;return t&&0!==t.filter(r).length?(0,n.jsx)("div",Object.assign({className:"frui-field-autocomplete-dropdown",style:s?void 0:{display:"none"}},{children:(0,n.jsx)("div",Object.assign({className:"frui-field-autocomplete-options"},{children:t&&t.filter(r).map((e,t)=>(0,n.jsx)("div",Object.assign({onClick:t=>l(e),className:"frui-field-autocomplete-option"},{children:e}),t))}))})):null}t.useAutocomplete=i,t.AutocompleteDropdown=c,t.default=function(e){let{options:t,className:s,style:r,defaultValue:a,value:d,onQuery:p,onDropdown:u,onChange:h,onUpdate:f}=e,x=l(e,["options","className","style","defaultValue","value","onQuery","onDropdown","onChange","onUpdate"]),{value:b,options:m,showing:j,handlers:g}=i({defaultValue:a||d,options:t,onQuery:p,onDropdown:u,onChange:h,onUpdate:f}),y=["frui-field-autocomplete"];return s&&y.push(s),(0,n.jsxs)("div",Object.assign({className:y.join(" "),style:r},{children:[(0,n.jsx)(o.default,Object.assign({onBlur:g.blur,onKeyDown:g.search,onChange:g.update},x,{value:b})),(0,n.jsx)(c,{options:m,show:j,select:g.select,match:g.match})]}))}},42378:function(e,t,s){"use strict";var l=this&&this.__rest||function(e,t){var s={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(s[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)0>t.indexOf(l[r])&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(s[l[r]]=e[l[r]]);return s};Object.defineProperty(t,"__esModule",{value:!0}),t.useInput=void 0;let r=s(24246);function n({onChange:e,onUpdate:t}){return{handlers:{change:s=>{e&&e(s),t&&t(s.target.value)}}}}t.useInput=n,t.default=function(e){let{error:t,className:s,onChange:a,onUpdate:o,passRef:i}=e,c=l(e,["error","className","onChange","onUpdate","passRef"]),{handlers:d}=n({onChange:a,onUpdate:o}),p=["frui-field-input"];return t&&p.push("frui-tx-error","frui-bd-error"),s&&p.push(s),(0,r.jsx)("input",Object.assign({},c,{className:p.join(" "),ref:i,onChange:d.change}))}},2650:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/field/autocomplete",function(){return s(41441)}])},36493:function(e,t,s){"use strict";s.d(t,{C:function(){return c},Z:function(){return i}});var l=s(24246),r=s(22879),n=s(74631),a=s(48717),o=s(14707);function i(e){let{value:t,quote:s,l:r,r:n,children:a}=e;return(0,l.jsxs)(l.Fragment,{children:[r?(0,l.jsx)("span",{children:"\xa0"}):"",(0,l.jsxs)("code",{className:"text-sm text-t2 bg-b1 font-semibold inline-block p-0.5",children:[s?"`":"",t||a,s?"`":""]}),n?(0,l.jsx)("span",{children:"\xa0"}):""]})}function c(e){let{className:t,copy:s=!0,children:i,language:c}=e,{_:d}=(0,r.useLanguage)();return(0,l.jsxs)("div",{className:"flex text-sm bg-black ".concat(t||""),children:[(0,l.jsx)(n.Z,{className:"flex-grow !p-4 !bg-transparent",language:c,style:a._4,children:i}),s&&(0,l.jsxs)("div",{className:"text-sm p-4 text-gray-400 cursor-pointer whitespace-nowrap",onClick:()=>{navigator.clipboard.writeText(i.toString()),(0,o.ZP)("success",d("Copied to clipboard"))},children:[(0,l.jsx)("i",{className:"fas fa-copy"})," ",d("Copy")]})]})}},18604:function(e,t,s){"use strict";var l=s(24246);s(27378);var r=s(79894),n=s.n(r);let a=e=>{let{href:t,label:s,icon:r,last:a}=e,o=t?(0,l.jsx)(n(),{href:t,className:"inline-flex items-center text-t2",children:s}):(0,l.jsx)("span",{className:"inline-flex items-center font-semibold text-t1",children:s});return(0,l.jsxs)(l.Fragment,{children:[r&&(0,l.jsx)("i",{className:"fas fa-fw fa-".concat(r," inline-block mr-1 text-t1")}),o,!a&&(0,l.jsx)("i",{className:"fas fa-fw fa-chevron-right mx-1 text-t1"})]})},o=e=>{var t;let{trail:s}=e;if(0===s.length)return null;let r=s[s.length-1],a=r.href||(null===(t=s[s.length-2])||void 0===t?void 0:t.href);return a?(0,l.jsxs)(n(),{className:"flex md:hidden items-center cursor-pointer whitespace-nowrap overflow-x-hidden",href:a,children:[(0,l.jsx)("i",{className:"mr-1 fas fa-fw fa-chevron-left text-xl text-t2"}),!!r.icon&&(0,l.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(r.icon," text-sm")}),(0,l.jsx)("span",{className:"font-bold",children:r.label})]}):(0,l.jsxs)("div",{className:"flex md:hidden items-center whitespace-nowrap overflow-x-hidden",children:[!!r.icon&&(0,l.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(r.icon," text-sm")}),(0,l.jsx)("span",{className:"font-bold",children:r.label})]})};t.Z=e=>{let{crumbs:t,className:s}=e,r=[...t].filter(e=>!!e.label),n=["hidden md:flex items-center whitespace-nowrap overflow-x-auto"];return s&&n.push(s),(0,l.jsxs)("nav",{children:[(0,l.jsx)("div",{className:n.join(" "),children:r.map((e,t)=>(0,l.jsx)(a,{href:e.href,label:e.label,icon:e.icon,last:t===r.length-1},t))}),(0,l.jsx)(o,{trail:r})]})}},63527:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var l=s(24246),r=s(22879),n=s(79531),a=s(54974),o=s.n(a);function i(e){let{props:t}=e,{_:s}=(0,r.useLanguage)(),i=(0,n.Z)("bg-b2","bg-b1");return(0,l.jsxs)(o(),{children:[(0,l.jsx)(a.Thead,{className:"text-left bg-b3",children:s("Name")}),(0,l.jsx)(a.Thead,{className:"text-left bg-b3",children:s("Type")}),(0,l.jsx)(a.Thead,{className:"text-center bg-b3",children:s("Required")}),(0,l.jsx)(a.Thead,{className:"text-left bg-b3",children:s("Notes")}),t.map((e,t)=>(0,l.jsxs)(a.Trow,{children:[(0,l.jsx)(a.Tcol,{className:"".concat(i(t)),children:e[0]}),(0,l.jsx)(a.Tcol,{className:"".concat(i(t)),children:e[1]}),(0,l.jsx)(a.Tcol,{className:"".concat(i(t)," text-center"),children:e[2]}),(0,l.jsx)(a.Tcol,{className:"".concat(i(t)),children:e[3]})]},t))]})}},79531:function(e,t,s){"use strict";function l(e,t){let s=e;return l=>"number"==typeof l?l%2==0?e:t:(l&&(s=s===e?t:e),s)}s.d(t,{Z:function(){return l}})},41441:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return j}});var l=s(24246),r=s(22879),n=s(79894),a=s.n(n),o=s(79565),i=s.n(o),c=s(54974),d=s.n(c),p=s(78968),u=s(18604),h=s(63527),f=s(36493);let x="\n<Autocomplete \n  className=\"w-full\" \n  options={[ 'foo', 'bar' ]} \n  placeholder=\"Enter foo or bar\"\n/>".trim(),b="\n<Autocomplete \n  className=\"w-full\" \n  options={['foo', 'bar']}\n  onQuery={(query, set) => setTimeout(\n    () => set(['boo', 'bar', 'baz']), \n    1000\n  )}\n  onDropdown={open => console.log('dropdown', open)}\n  onChange={e => console.log('change', e)}\n  onUpdate={value => console.log('update', value)}\n  placeholder=\"Enter 'b'\"\n/>".trim(),m="\n<Autocomplete \n  error\n  className=\"w-full\" \n  options={[ 'foo', 'bar' ]} \n  placeholder=\"Enter foo or bar\"\n/>".trim();function j(){let{_:e}=(0,r.useLanguage)(),t=[[e("className"),e("string"),e("No"),e("Standard HTML class names")],[e("defaultValue"),e("string"),e("No"),e("Alias to value")],[e("error"),e("string|boolean"),e("No"),e("Any error message")],[e("name"),e("string"),e("No"),e("Used for react server components.")],[e("onChange"),e("Function"),e("No"),e("Event handler when value has changed")],[e("onDropdown"),e("Function"),e("No"),e("Event handler when dropdown opens/closes")],[e("onQuery"),e("Function"),e("No"),e("Event handler when something is searched")],[e("onUpdate"),e("Function"),e("No"),e("Update event handler")],[e("options"),e("string[]"),e("No"),e("List of select options.")],[e("style"),e("CSS Object"),e("No"),e("Standard CSS object")],[e("value"),e("string"),e("No"),e("Selected value from the options")]];return(0,l.jsx)(p.sF,{uri:"/field/autocomplete",title:"Autocomplete Field",description:"Autocomplete fields in FRUI, suggests values as the user enters more information.",children:(0,l.jsxs)("main",{className:"flex flex-col h-full w-full",children:[(0,l.jsx)("div",{className:"p-3 bg-b2",children:(0,l.jsx)(u.Z,{crumbs:[{icon:"rectangle-list",label:"Fields",href:"/field"},{label:"Autocomplete"}]})}),(0,l.jsxs)("div",{className:"flex-grow relative h-full",children:[(0,l.jsxs)("aside",{className:"hidden lg:block absolute top-0 bottom-0 right-0 z-1 w-56 border-l border-b1 text-sm",children:[(0,l.jsx)("h4",{className:"p-3 border-b border-b1 bg-b1 text-sm uppercase font-semibold",children:(0,l.jsx)(a(),{href:"#top",children:"Autocomplete"})}),(0,l.jsxs)("ul",{className:"list-disc py-3 pr-3 pl-6",children:[(0,l.jsx)("li",{className:"pl-3 pb-1",children:(0,l.jsx)(a(),{href:"#props",children:e("Props")})}),(0,l.jsx)("li",{className:"pl-3 pb-1",children:(0,l.jsx)(a(),{href:"#basic",children:e("Basics")})}),(0,l.jsx)("li",{className:"pl-3 pb-1",children:(0,l.jsx)(a(),{href:"#events",children:e("Events")})}),(0,l.jsx)("li",{className:"pl-3 pb-1",children:(0,l.jsx)(a(),{href:"#errors",children:e("Errors")})}),(0,l.jsx)("li",{className:"pl-3 pb-1",children:(0,l.jsx)(a(),{href:"#styles",children:e("Custom Styles")})})]})]}),(0,l.jsxs)("div",{className:"absolute top-0 bottom-0 left-0 right-0 lg:right-56 px-3 pt-3 pb-5 h-full overflow-auto",children:[(0,l.jsx)("h1",{id:"top",className:"flex items-center uppercase font-bold text-xl",children:e("Autocomplete")}),(0,l.jsx)(f.C,{language:"typescript",className:"mt-2",children:"import Autocomplete from 'frui/fields/Autocomplete';"}),(0,l.jsx)("h2",{id:"props",className:"uppercase font-bold text-lg mt-8",children:e("Props")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(r.Translate,{children:["The following props are accepted by ",(0,l.jsx)(f.Z,{value:"Autocomplete"}),"."]})}),(0,l.jsx)(h.Z,{props:t}),(0,l.jsx)("h2",{id:"basic",className:"uppercase font-bold text-lg mt-8",children:e("Basics")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(r.Translate,{children:["The following is a basic example of an",(0,l.jsx)(f.Z,{l:!0,value:"Autocomplete"})," field."]})}),(0,l.jsxs)("div",{className:"curved overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,l.jsx)(i(),{className:"w-full",options:["foo","bar"],placeholder:"Enter foo or bar"})}),(0,l.jsx)(f.C,{language:"typescript",children:x})]}),(0,l.jsx)("h2",{id:"events",className:"uppercase font-bold text-lg mt-8",children:e("Events")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(r.Translate,{children:["The following example makes use of all the possible events for ",(0,l.jsx)(f.Z,{value:"Autocomplete"}),"."]})}),(0,l.jsxs)("div",{className:"curved overflow-hidden",children:[(0,l.jsx)("div",{className:"relative flex items-center justify-center p-3 bg-b1",children:(0,l.jsx)(i(),{className:"w-full",options:["foo","bar"],onQuery:(e,t)=>setTimeout(()=>t(["boo","bar","baz"]),1e3),onDropdown:e=>console.log("dropdown",e),onChange:e=>console.log("change",e),onUpdate:e=>console.log("update",e),placeholder:"Enter 'b'"})}),(0,l.jsx)(f.C,{language:"typescript",children:b})]}),(0,l.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("On Change")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(r.Translate,{children:["The ",(0,l.jsx)(f.Z,{value:"onChange"})," event is triggered when the value has changed. The following arguments are passed to the event handler:"]})}),(0,l.jsxs)(d(),{children:[(0,l.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Name")}),(0,l.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Type")}),(0,l.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Sample")}),(0,l.jsxs)(c.Trow,{children:[(0,l.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("event")}),(0,l.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("Event Object")}),(0,l.jsxs)(c.Tcol,{className:"bg-b1 text-left",children:["see: ",(0,l.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event",target:"_blank",children:"Change Event"})]})]})]}),(0,l.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("On Dropdown")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(r.Translate,{children:["The ",(0,l.jsx)(f.Z,{value:"onDropdown"})," event is triggered when the dropdown opens or closes. The following arguments are passed to the event handler:"]})}),(0,l.jsxs)(d(),{children:[(0,l.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Name")}),(0,l.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Type")}),(0,l.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Sample")}),(0,l.jsxs)(c.Trow,{children:[(0,l.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("open")}),(0,l.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("boolean")}),(0,l.jsx)(c.Tcol,{className:"bg-b1 text-left",children:(0,l.jsx)(f.Z,{value:"true"})})]})]}),(0,l.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("On Query")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(r.Translate,{children:["The ",(0,l.jsx)(f.Z,{value:"onQuery"})," event is triggered when the user searches for something. The following arguments are passed to the event handler:"]})}),(0,l.jsxs)(d(),{children:[(0,l.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Name")}),(0,l.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Type")}),(0,l.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Sample")}),(0,l.jsxs)(c.Trow,{children:[(0,l.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("query")}),(0,l.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("string")}),(0,l.jsx)(c.Tcol,{className:"bg-b1 text-left",children:(0,l.jsx)(f.Z,{value:"foobar",quote:!0})})]}),(0,l.jsxs)(c.Trow,{children:[(0,l.jsx)(c.Tcol,{className:"bg-b2 text-left",children:e("setOptions")}),(0,l.jsx)(c.Tcol,{className:"bg-b2 text-left",children:e("Function")}),(0,l.jsx)(c.Tcol,{className:"bg-b2 text-left",children:(0,l.jsx)(f.C,{language:"json",children:"set(['boo', 'bar', 'baz'])"})})]})]}),(0,l.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("On Update")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(r.Translate,{children:["The ",(0,l.jsx)(f.Z,{value:"onUpdate"})," event is triggered when the value has been updated. The following arguments are passed to the event handler:"]})}),(0,l.jsxs)(d(),{children:[(0,l.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Name")}),(0,l.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Type")}),(0,l.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Sample")}),(0,l.jsxs)(c.Trow,{children:[(0,l.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("value")}),(0,l.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("string")}),(0,l.jsx)(c.Tcol,{className:"bg-b1 text-left",children:(0,l.jsx)(f.Z,{value:"foobar",quote:!0})})]})]}),(0,l.jsx)("h2",{id:"errors",className:"uppercase font-bold text-lg mt-8",children:e("Errors")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(r.Translate,{children:["You can pass the ",(0,l.jsx)(f.Z,{value:"error"})," prop to highlight the Autocomplete field red."]})}),(0,l.jsxs)("div",{className:"curved overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,l.jsx)(i(),{error:!0,className:"w-full",options:["foo","bar"],placeholder:"Enter foo or bar"})}),(0,l.jsx)(f.C,{language:"typescript",children:m})]}),(0,l.jsx)("h2",{id:"styles",className:"uppercase font-bold text-lg mt-8",children:e("Custom Styles")}),(0,l.jsx)("p",{className:"py-4",children:(0,l.jsxs)(r.Translate,{children:["You can add your own custom class to",(0,l.jsx)(f.Z,{l:!0,value:"Autocomplete"})," components or use any combination of ",(0,l.jsx)(f.Z,{value:"frui-field-autocomplete"}),", ",(0,l.jsx)(f.Z,{value:"frui-field-autocomplete-dropdown"}),", ",(0,l.jsx)(f.Z,{value:"frui-field-autocomplete-options"}),", and ",(0,l.jsx)(f.Z,{value:"frui-field-autocomplete-option"})," CSS classes."]})}),(0,l.jsxs)("div",{className:"flex items-center border-t border-b2 mt-8 pt-4",children:[(0,l.jsxs)(a(),{className:"text-t2",href:"/field",children:[(0,l.jsx)("i",{className:"fas fa-arrow-left mr-2"}),e("Fields")]}),(0,l.jsx)("div",{className:"flex-grow"}),(0,l.jsxs)(a(),{className:"text-t2",href:"/field/checkbox",children:[e("Checkbox"),(0,l.jsx)("i",{className:"fas fa-arrow-right ml-2"})]})]})]})]})]})})}}},function(e){e.O(0,[9461,2888,9774,179],function(){return e(e.s=2650)}),_N_E=e.O()}]);