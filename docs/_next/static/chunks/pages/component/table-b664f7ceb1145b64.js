(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9734],{54974:function(e,s,l){"use strict";var a=this&&this.__rest||function(e,s){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>s.indexOf(a)&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)0>s.indexOf(a[t])&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(l[a[t]]=e[a[t]]);return l},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.Tgroup=s.Trow=s.Tcol=s.Tfoot=s.Thead=s.Table=void 0;let c=l(24246),r=t(l(27378)),n=({width:e})=>(0,c.jsx)("hr",{style:{borderWidth:0,margin:0,width:e}});class o extends r.default.Component{table(){return"TableCol"}render(){let e=this.props,{stickyBottom:s,stickyLeft:l,stickyRight:t,stickyTop:r,noWrap:o,rowSpan:i,colSpan:b,wrap1:d,wrap2:h,wrap3:m,wrap4:u,wrap5:p,className:x,children:T}=e,g=a(e,["stickyBottom","stickyLeft","stickyRight","stickyTop","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),f=["frui-tbl-col"];(s||l||t||r)&&(f.push("frui-tbl-sticky"),s&&f.push("frui-tbl-sticky-b","frui-tbl-z1"),l&&f.push("frui-tbl-sticky-l","frui-tbl-z2"),t&&f.push("frui-tbl-sticky-r","frui-tbl-z2"),r&&f.push("frui-tbl-sticky-t","frui-tbl-z1")),o&&f.push("frui-tbl-nowrap");let N={};i&&(N.rowSpan=i||0),b&&(N.colSpan=b||0);let j=null;return d?j=(0,c.jsx)(n,{width:"100px"}):h?j=(0,c.jsx)(n,{width:"200px"}):m?j=(0,c.jsx)(n,{width:"300px"}):u?j=(0,c.jsx)(n,{width:"400px"}):p&&(j=(0,c.jsx)(n,{width:"500px"})),x&&f.push(x),(0,c.jsxs)("td",Object.assign({valign:"top"},g,{className:f.join(" ")},N,{children:[T,j]}))}}s.Tcol=o;class i extends r.default.Component{table(){return"TableFoot"}render(){let e=this.props,{stickyBottom:s,stickyLeft:l,stickyRight:t,noWrap:r,rowSpan:n,colSpan:o,className:i,children:b}=e,d=a(e,["stickyBottom","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","className","children"]),h=["frui-tbl-foot"];(s||l||t)&&(h.push("frui-tbl-sticky"),s&&h.push("frui-tbl-sticky-b","frui-tbl-z1"),l&&h.push("frui-tbl-sticky-l","frui-tbl-z2"),t&&h.push("frui-tbl-sticky-r","frui-tbl-z2"),r&&h.push("frui-tbl-nowrap"));let m={};return n&&(m.rowSpan=n||0),o&&(m.colSpan=o||0),i&&h.push(i),(0,c.jsx)("th",Object.assign({},d,{className:h.join(" ")},m,{children:b}))}}s.Tfoot=i;class b extends r.default.Component{table(){return"TableGroup"}render(){return this.props.children}}s.Tgroup=b;class d extends r.default.Component{table(){return"TableRow"}render(){let e=this.props,{noWrap:s,rowSpan:l,colSpan:t,className:r,children:n}=e,o=a(e,["noWrap","rowSpan","colSpan","className","children"]),i=["frui-tbl-row"];s&&i.push("frui-tbl-nowrap");let b={};return l&&(b.rowSpan=l||0),t&&(b.colSpan=t||0),r&&i.push(r),(0,c.jsx)("tr",Object.assign({},o,{className:i.join(" ")},b,{children:n}))}}s.Trow=d;class h extends r.default.Component{table(){return"TableHead"}render(){let e=this.props,{stickyTop:s,stickyLeft:l,stickyRight:t,noWrap:r,rowSpan:o,colSpan:i,wrap1:b,wrap2:d,wrap3:h,wrap4:m,wrap5:u,className:p,children:x}=e,T=a(e,["stickyTop","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),g=["frui-tbl-head"];(l||t||s)&&(g.push("frui-tbl-sticky"),s&&(g.push("frui-tbl-sticky-t"),l&&t?g.push("frui-tbl-z4"):l||t?g.push("frui-tbl-z3"):g.push("frui-tbl-z1")),l&&g.push("frui-tbl-sticky-l","frui-tbl-z1"),t&&g.push("frui-tbl-sticky-r","frui-tbl-z1")),r&&g.push("frui-tbl-nowrap");let f={};o&&(f.rowSpan=o||0),i&&(f.colSpan=i||0);let N=null;return b?N=(0,c.jsx)(n,{width:"100px"}):d?N=(0,c.jsx)(n,{width:"200px"}):h?N=(0,c.jsx)(n,{width:"300px"}):m?N=(0,c.jsx)(n,{width:"400px"}):u&&(N=(0,c.jsx)(n,{width:"500px"})),p&&g.push(p),(0,c.jsxs)("th",Object.assign({},T,{className:g.join(" ")},f,{children:[x,N]}))}}s.Thead=h;let m=function(e){var s,l;let a=[];if(Array.isArray(e))for(let t of e)t&&(Array.isArray(t)?a.push.apply(a,m(t)):"object"==typeof t&&t.props&&"thead"in t.props?a.push(t):"function"==typeof(null===(l=null===(s=null==t?void 0:t.type)||void 0===s?void 0:s.prototype)||void 0===l?void 0:l.table)&&"TableHead"===t.type.prototype.table()&&a.push(t));return a},u=function(e){var s,l;let a=[];if(Array.isArray(e))for(let t of e)Array.isArray(t)?a.push.apply(a,u(t)):"object"==typeof t&&t.props&&"tfoot"in t.props?a.push(t):"function"==typeof(null===(l=null===(s=null==t?void 0:t.type)||void 0===s?void 0:s.prototype)||void 0===l?void 0:l.table)&&"TableFoot"===t.type.prototype.table()&&a.push(t);return a},p=function(e){var s,l,a,t;let c=[];if(Array.isArray(e))for(let r of e)if(Array.isArray(r))c.push.apply(c,p(r));else if("object"==typeof r&&r.props&&"tbody"in r.props)c.push(r);else if("function"==typeof(null===(l=null===(s=null==r?void 0:r.type)||void 0===s?void 0:s.prototype)||void 0===l?void 0:l.table)&&"TableGroup"===r.type.prototype.table()){let e=r.props.children||[];Array.isArray(e)&&e.length>0&&c.push(...e)}else"function"==typeof(null===(t=null===(a=null==r?void 0:r.type)||void 0===a?void 0:a.prototype)||void 0===t?void 0:t.table)&&"TableRow"===r.type.prototype.table()&&c.push(r);return c};function x(e){let s=e.children||[];Array.isArray(s)||(s=[s]);let l=m(s),a=p(s),t=u(s),r=["frui-tbl-overflow"];return e.className&&r.push(e.className),(0,c.jsx)("div",Object.assign({className:r.join(" "),style:e.style},{children:(0,c.jsxs)("table",Object.assign({className:"frui-tbl"},{children:[l&&(0,c.jsx)("thead",{children:(0,c.jsx)("tr",{children:l})}),a&&(0,c.jsx)("tbody",{children:a}),t&&(0,c.jsx)("tfoot",{children:(0,c.jsx)("tr",{children:t})})]}))}))}s.default=x,s.Table=x},56408:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/table",function(){return l(11313)}])},36493:function(e,s,l){"use strict";l.d(s,{C:function(){return i},Z:function(){return o}});var a=l(24246),t=l(22879),c=l(74631),r=l(48717),n=l(14707);function o(e){let{value:s,quote:l,l:t,r:c,children:r}=e;return(0,a.jsxs)(a.Fragment,{children:[t?(0,a.jsx)("span",{children:"\xa0"}):"",(0,a.jsxs)("code",{className:"text-sm text-t2 bg-b1 font-semibold inline-block p-0.5",children:[l?"`":"",s||r,l?"`":""]}),c?(0,a.jsx)("span",{children:"\xa0"}):""]})}function i(e){let{className:s,copy:l=!0,children:o,language:i}=e,{_:b}=(0,t.useLanguage)();return(0,a.jsxs)("div",{className:"flex text-sm bg-black ".concat(s||""),children:[(0,a.jsx)(c.Z,{className:"flex-grow !p-4 !bg-transparent",language:i,style:r._4,children:o}),l&&(0,a.jsxs)("div",{className:"text-sm p-4 text-gray-400 cursor-pointer whitespace-nowrap",onClick:()=>{navigator.clipboard.writeText(o.toString()),(0,n.ZP)("success",b("Copied to clipboard"))},children:[(0,a.jsx)("i",{className:"fas fa-copy"})," ",b("Copy")]})]})}},18604:function(e,s,l){"use strict";var a=l(24246);l(27378);var t=l(79894),c=l.n(t);let r=e=>{let{href:s,label:l,icon:t,last:r}=e,n=s?(0,a.jsx)(c(),{href:s,className:"inline-flex items-center text-t2",children:l}):(0,a.jsx)("span",{className:"inline-flex items-center font-semibold text-t1",children:l});return(0,a.jsxs)(a.Fragment,{children:[t&&(0,a.jsx)("i",{className:"fas fa-fw fa-".concat(t," inline-block mr-1 text-t1")}),n,!r&&(0,a.jsx)("i",{className:"fas fa-fw fa-chevron-right mx-1 text-t1"})]})},n=e=>{var s;let{trail:l}=e;if(0===l.length)return null;let t=l[l.length-1],r=t.href||(null===(s=l[l.length-2])||void 0===s?void 0:s.href);return r?(0,a.jsxs)(c(),{className:"flex md:hidden items-center cursor-pointer whitespace-nowrap overflow-x-hidden",href:r,children:[(0,a.jsx)("i",{className:"mr-1 fas fa-fw fa-chevron-left text-xl text-t2"}),!!t.icon&&(0,a.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(t.icon," text-sm")}),(0,a.jsx)("span",{className:"font-bold",children:t.label})]}):(0,a.jsxs)("div",{className:"flex md:hidden items-center whitespace-nowrap overflow-x-hidden",children:[!!t.icon&&(0,a.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(t.icon," text-sm")}),(0,a.jsx)("span",{className:"font-bold",children:t.label})]})};s.Z=e=>{let{crumbs:s,className:l}=e,t=[...s].filter(e=>!!e.label),c=["hidden md:flex items-center whitespace-nowrap overflow-x-auto"];return l&&c.push(l),(0,a.jsxs)("nav",{children:[(0,a.jsx)("div",{className:c.join(" "),children:t.map((e,s)=>(0,a.jsx)(r,{href:e.href,label:e.label,icon:e.icon,last:s===t.length-1},s))}),(0,a.jsx)(n,{trail:t})]})}},79531:function(e,s,l){"use strict";function a(e,s){let l=e;return a=>"number"==typeof a?a%2==0?e:s:(a&&(l=l===e?s:e),l)}l.d(s,{Z:function(){return a}})},11313:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return x}});var a=l(24246),t=l(22879),c=l(79531),r=l(79894),n=l.n(r),o=l(54974),i=l.n(o),b=l(78968),d=l(18604),h=l(36493);let m='\n<Table className="w-full">\n  <Thead className="bg-b3 text-left">ID</Thead>\n  <Thead className="bg-b3 text-left">Name</Thead>\n  <Thead className="bg-b3 text-center">Active</Thead>\n  <Thead className="bg-b3 text-right">Created</Thead>\n  <Thead className="bg-b3 text-right">Updated</Thead>\n  <Trow>\n    <Tcol className="bg-b1">1</Tcol>\n    <Tcol className="bg-b1">John Doe</Tcol>\n    <Tcol className="bg-b1 text-center">Yes</Tcol>\n    <Tcol className="bg-b1 text-right">2021-01-01</Tcol>\n    <Tcol className="bg-b1 text-right">2021-01-01</Tcol>\n  </Trow>\n  <Trow>\n    <Tcol className="bg-b2">2</Tcol>\n    <Tcol className="bg-b2">Jane Doe</Tcol>\n    <Tcol className="bg-b2 text-center">No</Tcol>\n    <Tcol className="bg-b2 text-right">2021-01-01</Tcol>\n    <Tcol className="bg-b2 text-right">2021-01-01</Tcol>\n  </Trow>\n</Table>'.trim(),u='\n<Table>\n  <Thead className="bg-b3 text-left">ID</Thead>\n  <Thead className="bg-b3 text-left">Name</Thead>\n  <Thead className="bg-b3 text-center">Active</Thead>\n  <Thead className="bg-b3 text-right">Created</Thead>\n  <Thead className="bg-b3 text-right">Updated</Thead>\n  <Trow>\n    <Tcol className="bg-b1">1</Tcol>\n    <Tcol wrap3 className="bg-b1">\n      Duis id ante leo. Morbi orci ex, porttitor nec \n      turpis ac, rutrum laoreet tellus. Cras nulla \n      justo, consectetur eget ante non, faucibus \n      finibus velit. Phasellus mollis sapien egestas, \n      convallis magna id, egestas eros. Donec mauris \n      leo, cursus sit amet ullamcorper ac, pretium \n      vitae massa. Orci varius natoque penatibus et \n      magnis dis parturient montes, nascetur ridiculus \n      mus. Sed vitae orci felis. Etiam finibus, massa \n      vel semper sagittis, velit nulla hendrerit justo, \n      in ultrices lorem magna vitae quam.\n    </Tcol>\n    <Tcol className="bg-b1 text-center">Yes</Tcol>\n    <Tcol noWrap className="bg-b1 text-right">2021-01-01</Tcol>\n    <Tcol noWrap className="bg-b1 text-right">2021-01-01</Tcol>\n  </Trow>\n  <Trow>\n    <Tcol className="bg-b2">2</Tcol>\n    <Tcol wrap3 className="bg-b2">\n      Maecenas enim nibh, tincidunt lacinia molestie \n      id, dictum vel felis. Cras laoreet laoreet arcu \n      eu tincidunt. Aenean hendrerit mi purus, id \n      vestibulum ligula tempus nec. Praesent \n      sollicitudin ligula et ipsum gravida viverra. \n      Cras pretium neque arcu, vitae mollis orci \n      iaculis et. Nullam egestas nec sem in mollis. \n      Vestibulum ante ipsum primis in faucibus orci \n      luctus et ultrices posuere cubilia curae; \n      Pellentesque habitant morbi tristique senectus \n      et netus et malesuada fames ac turpis egestas. \n      Quisque lobortis leo eu enim dapibus, at tempor \n      metus egestas. Aliquam in eros ut erat fermentum \n      volutpat ac in magna. Curabitur a magna at sem lacinia \n      tristique ac ut nibh. Nulla erat nulla, mollis at \n      finibus eget, mollis eu felis.</Tcol>\n    <Tcol className="bg-b2 text-center">No</Tcol>\n    <Tcol noWrap className="bg-b2 text-right">2021-01-01</Tcol>\n    <Tcol noWrap className="bg-b2 text-right">2021-01-01</Tcol>\n  </Trow>\n</Table>'.trim(),p='\n<div className="h-64 w-72 overflow-auto">\n  <Table className="w-full">\n    <Thead stickyTop stickyLeft className="bg-b3 text-left">ID</Thead>\n    <Thead stickyTop noWrap className="bg-b3 text-left">First Name</Thead>\n    <Thead stickyTop noWrap className="bg-b3 text-left">Last Name</Thead>\n    <Thead stickyTop className="bg-b3 text-center">Active</Thead>\n    <Thead stickyTop className="bg-b3 text-right">Created</Thead>\n    <Thead stickyTop className="bg-b3 text-right">Updated</Thead>\n    <Trow>\n      <Tcol stickyLeft className="bg-b1">1</Tcol>\n      <Tcol className="bg-b1">John</Tcol>\n      <Tcol className="bg-b1">Doe</Tcol>\n      <Tcol className="bg-b1 text-center">Yes</Tcol>\n      <Tcol noWrap className="bg-b1 text-right">2021-01-01</Tcol>\n      <Tcol noWrap className="bg-b1 text-right">2021-01-02</Tcol>\n    </Trow>\n    <Trow>\n      <Tcol stickyLeft className="bg-b2">2</Tcol>\n      <Tcol className="bg-b2">Jane</Tcol>\n      <Tcol className="bg-b2">Doe</Tcol>\n      <Tcol className="bg-b2 text-center">No</Tcol>\n      <Tcol noWrap className="bg-b2 text-right">2021-02-03</Tcol>\n      <Tcol noWrap className="bg-b2 text-right">2021-02-04</Tcol>\n    </Trow>\n    <Trow>\n      <Tcol stickyLeft className="bg-b1">3</Tcol>\n      <Tcol className="bg-b1">Jack</Tcol>\n      <Tcol className="bg-b1">Doe</Tcol>\n      <Tcol className="bg-b1 text-center">No</Tcol>\n      <Tcol noWrap className="bg-b1 text-right">2021-03-05</Tcol>\n      <Tcol noWrap className="bg-b1 text-right">2021-03-06</Tcol>\n    </Trow>\n    <Trow>\n      <Tcol stickyLeft className="bg-b2">4</Tcol>\n      <Tcol className="bg-b2">Jan</Tcol>\n      <Tcol className="bg-b2">Doe</Tcol>\n      <Tcol className="bg-b2 text-center">No</Tcol>\n      <Tcol noWrap className="bg-b2 text-right">2021-04-07</Tcol>\n      <Tcol noWrap className="bg-b2 text-right">2021-04-08</Tcol>\n    </Trow>\n    <Trow>\n      <Tcol stickyLeft className="bg-b1">5</Tcol>\n      <Tcol className="bg-b1">Jimmy</Tcol>\n      <Tcol className="bg-b1">Doe</Tcol>\n      <Tcol className="bg-b1 text-center">Yes</Tcol>\n      <Tcol noWrap className="bg-b1 text-right">2021-05-09</Tcol>\n      <Tcol noWrap className="bg-b1 text-right">2021-05-10</Tcol>\n    </Trow>\n    <Trow>\n      <Tcol stickyLeft className="bg-b2">6</Tcol>\n      <Tcol className="bg-b2">Jenny</Tcol>\n      <Tcol className="bg-b2">Doe</Tcol>\n      <Tcol className="bg-b2 text-center">No</Tcol>\n      <Tcol noWrap className="bg-b2 text-right">2021-06-11</Tcol>\n      <Tcol noWrap className="bg-b2 text-right">2021-06-12</Tcol>\n    </Trow>\n  </Table>\n</div>'.trim();function x(){let{_:e}=(0,t.useLanguage)(),s=(0,c.Z)("bg-b2","bg-b1"),l=[[e("className"),e("string"),e("No"),e("Standard HTML class names")],[e("colSpan"),e("boolean"),"Thead, Tfoot, Tcol",e("No"),e("How many columns this cell will cover")],[e("noWrap"),e("boolean"),"Thead, Tfoot, Tcol",e("No"),e("Keeps all text in one line")],[e("rowSpan"),e("boolean"),"Tcol",e("No"),e("How many rows this cell will cover")],[e("stickyBottom"),e("boolean"),"Tfoot",e("No"),e("Always show on the bottom, even on overflow")],[e("stickyLeft"),e("boolean"),"Thead, Tfoot, Tcol",e("No"),e("Always show on the left, even on overflow")],[e("stickyRight"),e("boolean"),"Thead, Tfoot, Tcol",e("No"),e("Always show on the right, even on overflow")],[e("stickyTop"),e("boolean"),"Thead",e("No"),e("Always show on the top, even on overflow")],[e("style"),e("CSS Object"),"All",e("No"),e("Standard CSS input")],[e("wrap1"),e("boolean"),"Thead, Tfoot, Tcol",e("No"),e("Keeps the cell size a minimum of 100px")],[e("wrap2"),e("boolean"),"Thead, Tfoot, Tcol",e("No"),e("Keeps the cell size a minimum of 200px")],[e("wrap3"),e("boolean"),"Thead, Tfoot, Tcol",e("No"),e("Keeps the cell size a minimum of 300px")],[e("wrap4"),e("boolean"),"Thead, Tfoot, Tcol",e("No"),e("Keeps the cell size a minimum of 400px")],[e("wrap5"),e("boolean"),"Thead, Tfoot, Tcol",e("No"),e("Keeps the cell size a minimum of 500px")]];return(0,a.jsx)(b.sF,{uri:"/component/modal",title:"Table Component",description:"Tables in FRUI, are ReactJS components used to display tabular information.",children:(0,a.jsxs)("main",{className:"flex flex-col h-full w-full",children:[(0,a.jsx)("div",{className:"p-3 bg-b2",children:(0,a.jsx)(d.Z,{crumbs:[{icon:"icons",label:"Components",href:"/component"},{label:"Table"}]})}),(0,a.jsxs)("section",{className:"flex-grow relative h-full",children:[(0,a.jsxs)("aside",{className:"hidden lg:block absolute top-0 bottom-0 right-0 z-1 w-56 border-l border-b1 text-sm",children:[(0,a.jsx)("h4",{className:"p-3 border-b border-b1 bg-b1 text-sm uppercase font-semibold",children:e("Contents")}),(0,a.jsxs)("div",{className:"p-3",children:[(0,a.jsx)(n(),{className:"block pb-1",href:"#top",children:"Table"}),(0,a.jsxs)("ul",{className:"list-disc pl-3",children:[(0,a.jsx)("li",{className:"pl-3 pb-1",children:(0,a.jsx)(n(),{href:"#props",children:e("Props")})}),(0,a.jsx)("li",{className:"pl-3 pb-1",children:(0,a.jsx)(n(),{href:"#basic",children:e("Basic")})}),(0,a.jsx)("li",{className:"pl-3 pb-1",children:(0,a.jsx)(n(),{href:"#wrap",children:e("Wrap & No Wrap")})}),(0,a.jsx)("li",{className:"pl-3 pb-1",children:(0,a.jsx)(n(),{href:"#sticky",children:e("Sticky")})}),(0,a.jsx)("li",{className:"pl-3 pb-1",children:(0,a.jsx)(n(),{href:"#styles",children:e("Custom Styles")})})]})]})]}),(0,a.jsxs)("div",{className:"absolute top-0 bottom-0 left-0 right-0 lg:right-56 px-3 pt-3 pb-5 h-full overflow-auto",children:[(0,a.jsx)("h1",{id:"top",className:"flex items-center uppercase font-bold text-xl",children:e("Table")}),(0,a.jsx)(h.C,{language:"typescript",className:"mt-2",children:"import Table, { Thead, Trow, Tcol } from 'frui/Table';"}),(0,a.jsx)("h2",{id:"props",className:"uppercase font-bold text-lg mt-8",children:e("Props")}),(0,a.jsx)("div",{className:"w-full overflow-auto",children:(0,a.jsxs)(i(),{children:[(0,a.jsx)(o.Thead,{className:"text-left bg-b3",children:e("Name")}),(0,a.jsx)(o.Thead,{className:"text-left bg-b3",children:e("Type")}),(0,a.jsx)(o.Thead,{noWrap:!0,className:"text-left bg-b3",children:e("For Element")}),(0,a.jsx)(o.Thead,{className:"text-center bg-b3",children:e("Required")}),(0,a.jsx)(o.Thead,{className:"text-left bg-b3",children:e("Notes")}),l.map((e,l)=>(0,a.jsxs)(o.Trow,{children:[(0,a.jsx)(o.Tcol,{className:"".concat(s(l)),children:e[0]}),(0,a.jsx)(o.Tcol,{className:"".concat(s(l)),children:e[1]}),(0,a.jsx)(o.Tcol,{className:"".concat(s(l)),children:e[2]}),(0,a.jsx)(o.Tcol,{className:"".concat(s(l)," text-center"),children:e[3]}),(0,a.jsx)(o.Tcol,{className:"".concat(s(l)),children:e[4]})]},l))]})}),(0,a.jsx)("h2",{id:"basic",className:"uppercase font-bold text-lg mt-8",children:e("Basic")}),(0,a.jsx)("p",{className:"py-4",children:(0,a.jsxs)(t.Translate,{children:["Tables do not need: ",(0,a.jsx)(h.Z,{value:"thead"}),", and",(0,a.jsx)(h.Z,{l:!0,value:"tbody"})," elements as in the following basic example."]})}),(0,a.jsxs)("div",{className:"curved overflow-hidden",children:[(0,a.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,a.jsxs)(i(),{className:"w-full",children:[(0,a.jsx)(o.Thead,{className:"bg-b3 text-left",children:"ID"}),(0,a.jsx)(o.Thead,{className:"bg-b3 text-left",children:"Name"}),(0,a.jsx)(o.Thead,{className:"bg-b3 text-center",children:"Active"}),(0,a.jsx)(o.Thead,{className:"bg-b3 text-right",children:"Created"}),(0,a.jsx)(o.Thead,{className:"bg-b3 text-right",children:"Updated"}),(0,a.jsxs)(o.Trow,{children:[(0,a.jsx)(o.Tcol,{className:"bg-b1",children:"1"}),(0,a.jsx)(o.Tcol,{className:"bg-b1",children:"John Doe"}),(0,a.jsx)(o.Tcol,{className:"bg-b1 text-center",children:"Yes"}),(0,a.jsx)(o.Tcol,{className:"bg-b1 text-right",children:"2021-01-01"}),(0,a.jsx)(o.Tcol,{className:"bg-b1 text-right",children:"2021-01-01"})]}),(0,a.jsxs)(o.Trow,{children:[(0,a.jsx)(o.Tcol,{className:"bg-b2",children:"2"}),(0,a.jsx)(o.Tcol,{className:"bg-b2",children:"Jane Doe"}),(0,a.jsx)(o.Tcol,{className:"bg-b2 text-center",children:"No"}),(0,a.jsx)(o.Tcol,{className:"bg-b2 text-right",children:"2021-01-01"}),(0,a.jsx)(o.Tcol,{className:"bg-b2 text-right",children:"2021-01-01"})]})]})}),(0,a.jsx)(h.C,{language:"typescript",children:m})]}),(0,a.jsx)("h2",{id:"wrap",className:"uppercase font-bold text-lg mt-8",children:e("Wrap & No Wrap")}),(0,a.jsx)("p",{className:"py-4",children:(0,a.jsxs)(t.Translate,{children:["Headers and cell width can be manipulated using",(0,a.jsx)(h.Z,{l:!0,value:"noWrap"}),", ",(0,a.jsx)(h.Z,{value:"wrap1"}),",",(0,a.jsx)(h.Z,{l:!0,value:"wrap2"}),", ",(0,a.jsx)(h.Z,{value:"wrap3"}),",",(0,a.jsx)(h.Z,{l:!0,value:"wrap4"}),", and ",(0,a.jsx)(h.Z,{value:"wrap5"}),"."]})}),(0,a.jsxs)("div",{className:"curved overflow-hidden",children:[(0,a.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,a.jsx)("div",{className:"w-full overflow-auto",children:(0,a.jsxs)(i(),{className:"w-full",children:[(0,a.jsx)(o.Thead,{className:"bg-b3 text-left",children:"ID"}),(0,a.jsx)(o.Thead,{className:"bg-b3 text-left",children:"Name"}),(0,a.jsx)(o.Thead,{className:"bg-b3 text-center",children:"Active"}),(0,a.jsx)(o.Thead,{className:"bg-b3 text-right",children:"Created"}),(0,a.jsx)(o.Thead,{className:"bg-b3 text-right",children:"Updated"}),(0,a.jsxs)(o.Trow,{children:[(0,a.jsx)(o.Tcol,{className:"bg-b1",children:"1"}),(0,a.jsx)(o.Tcol,{wrap3:!0,className:"bg-b1",children:"Duis id ante leo. Morbi orci ex, porttitor nec turpis ac, rutrum laoreet tellus. Cras nulla justo, consectetur eget ante non, faucibus finibus velit. Phasellus mollis sapien egestas, convallis magna id, egestas eros. Donec mauris leo, cursus sit amet ullamcorper ac, pretium vitae massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae orci felis. Etiam finibus, massa vel semper sagittis, velit nulla hendrerit justo, in ultrices lorem magna vitae quam."}),(0,a.jsx)(o.Tcol,{className:"bg-b1 text-center",children:"Yes"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b1 text-right",children:"2021-01-01"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b1 text-right",children:"2021-01-01"})]}),(0,a.jsxs)(o.Trow,{children:[(0,a.jsx)(o.Tcol,{className:"bg-b2",children:"2"}),(0,a.jsx)(o.Tcol,{wrap3:!0,className:"bg-b2",children:"Maecenas enim nibh, tincidunt lacinia molestie id, dictum vel felis. Cras laoreet laoreet arcu eu tincidunt. Aenean hendrerit mi purus, id vestibulum ligula tempus nec. Praesent sollicitudin ligula et ipsum gravida viverra. Cras pretium neque arcu, vitae mollis orci iaculis et. Nullam egestas nec sem in mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque lobortis leo eu enim dapibus, at tempor metus egestas. Aliquam in eros ut erat fermentum volutpat ac in magna. Curabitur a magna at sem lacinia tristique ac ut nibh. Nulla erat nulla, mollis at finibus eget, mollis eu felis."}),(0,a.jsx)(o.Tcol,{className:"bg-b2 text-center",children:"No"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b2 text-right",children:"2021-01-01"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b2 text-right",children:"2021-01-01"})]})]})})}),(0,a.jsx)(h.C,{language:"typescript",children:u})]}),(0,a.jsx)("h2",{id:"sticky",className:"uppercase font-bold text-lg mt-8",children:e("Sticky")}),(0,a.jsx)("p",{className:"py-4",children:(0,a.jsxs)(t.Translate,{children:["Headers and cells can use a combination of",(0,a.jsx)(h.Z,{l:!0,value:"stickLeft"}),", ",(0,a.jsx)(h.Z,{value:"stickyTop"}),",",(0,a.jsx)(h.Z,{l:!0,value:"stickyBottom"}),", ",(0,a.jsx)(h.Z,{value:"stickyRight",r:!0}),"to make tables in the mobile view responsive."]})}),(0,a.jsxs)("div",{className:"curved overflow-hidden",children:[(0,a.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,a.jsx)("div",{className:"h-64 w-72 overflow-auto",children:(0,a.jsxs)(i(),{className:"w-full",children:[(0,a.jsx)(o.Thead,{stickyTop:!0,stickyLeft:!0,className:"bg-b3 text-left",children:"ID"}),(0,a.jsx)(o.Thead,{stickyTop:!0,noWrap:!0,className:"bg-b3 text-left",children:"First Name"}),(0,a.jsx)(o.Thead,{stickyTop:!0,noWrap:!0,className:"bg-b3 text-left",children:"Last Name"}),(0,a.jsx)(o.Thead,{stickyTop:!0,className:"bg-b3 text-center",children:"Active"}),(0,a.jsx)(o.Thead,{stickyTop:!0,className:"bg-b3 text-right",children:"Created"}),(0,a.jsx)(o.Thead,{stickyTop:!0,className:"bg-b3 text-right",children:"Updated"}),(0,a.jsxs)(o.Trow,{children:[(0,a.jsx)(o.Tcol,{stickyLeft:!0,className:"bg-b1",children:"1"}),(0,a.jsx)(o.Tcol,{className:"bg-b1",children:"John"}),(0,a.jsx)(o.Tcol,{className:"bg-b1",children:"Doe"}),(0,a.jsx)(o.Tcol,{className:"bg-b1 text-center",children:"Yes"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b1 text-right",children:"2021-01-01"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b1 text-right",children:"2021-01-02"})]}),(0,a.jsxs)(o.Trow,{children:[(0,a.jsx)(o.Tcol,{stickyLeft:!0,className:"bg-b2",children:"2"}),(0,a.jsx)(o.Tcol,{className:"bg-b2",children:"Jane"}),(0,a.jsx)(o.Tcol,{className:"bg-b2",children:"Doe"}),(0,a.jsx)(o.Tcol,{className:"bg-b2 text-center",children:"No"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b2 text-right",children:"2021-02-03"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b2 text-right",children:"2021-02-04"})]}),(0,a.jsxs)(o.Trow,{children:[(0,a.jsx)(o.Tcol,{stickyLeft:!0,className:"bg-b1",children:"3"}),(0,a.jsx)(o.Tcol,{className:"bg-b1",children:"Jack"}),(0,a.jsx)(o.Tcol,{className:"bg-b1",children:"Doe"}),(0,a.jsx)(o.Tcol,{className:"bg-b1 text-center",children:"No"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b1 text-right",children:"2021-03-05"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b1 text-right",children:"2021-03-06"})]}),(0,a.jsxs)(o.Trow,{children:[(0,a.jsx)(o.Tcol,{stickyLeft:!0,className:"bg-b2",children:"4"}),(0,a.jsx)(o.Tcol,{className:"bg-b2",children:"Jan"}),(0,a.jsx)(o.Tcol,{className:"bg-b2",children:"Doe"}),(0,a.jsx)(o.Tcol,{className:"bg-b2 text-center",children:"No"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b2 text-right",children:"2021-04-07"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b2 text-right",children:"2021-04-08"})]}),(0,a.jsxs)(o.Trow,{children:[(0,a.jsx)(o.Tcol,{stickyLeft:!0,className:"bg-b1",children:"5"}),(0,a.jsx)(o.Tcol,{className:"bg-b1",children:"Jimmy"}),(0,a.jsx)(o.Tcol,{className:"bg-b1",children:"Doe"}),(0,a.jsx)(o.Tcol,{className:"bg-b1 text-center",children:"Yes"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b1 text-right",children:"2021-05-09"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b1 text-right",children:"2021-05-10"})]}),(0,a.jsxs)(o.Trow,{children:[(0,a.jsx)(o.Tcol,{stickyLeft:!0,className:"bg-b2",children:"6"}),(0,a.jsx)(o.Tcol,{className:"bg-b2",children:"Jenny"}),(0,a.jsx)(o.Tcol,{className:"bg-b2",children:"Doe"}),(0,a.jsx)(o.Tcol,{className:"bg-b2 text-center",children:"No"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b2 text-right",children:"2021-06-11"}),(0,a.jsx)(o.Tcol,{noWrap:!0,className:"bg-b2 text-right",children:"2021-06-12"})]})]})})}),(0,a.jsx)(h.C,{language:"typescript",children:p})]}),(0,a.jsx)("h2",{id:"styles",className:"uppercase font-bold text-lg mt-8",children:e("Custom Styles")}),(0,a.jsx)("p",{className:"py-4",children:(0,a.jsxs)(t.Translate,{children:["You can add your own custom class to table components or use any combination of ",(0,a.jsx)(h.Z,{value:"frui-tbl-col"}),", ",(0,a.jsx)(h.Z,{value:"frui-tbl-row"}),", ",(0,a.jsx)(h.Z,{value:"frui-tbl-head"}),", and ",(0,a.jsx)(h.Z,{value:"frui-tbl-foot"})," CSS classes."]})}),(0,a.jsxs)("div",{className:"flex items-center border-t border-b1 my-8 py-8",children:[(0,a.jsxs)(n(),{className:"text-t2",href:"/component/modal",children:[(0,a.jsx)("i",{className:"fas fa-arrow-left mr-2"}),e("Modals")]}),(0,a.jsx)("div",{className:"flex-grow"}),(0,a.jsxs)(n(),{className:"text-t2",href:"/field",children:[e("Fields"),(0,a.jsx)("i",{className:"fas fa-arrow-right ml-2"})]})]})]})]})]})})}}},function(e){e.O(0,[9461,2888,9774,179],function(){return e(e.s=56408)}),_N_E=e.O()}]);