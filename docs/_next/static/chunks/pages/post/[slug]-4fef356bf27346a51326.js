_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"20a2":function(e,t,n){e.exports=n("nOHt")},EXNP:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[slug]",function(){return n("RnN5")}])},NutJ:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var r=n(2),o=n(3);e.exports={Link:r,Date:o}},function(e,t,n){e.exports={url:function(e,t){var n=e&&e.value?e.value.document:e;if(e&&[e.type,e.link_type,e._linkType,e.linkType].some((function(e){return e&&["Document","Link.Document","Link.document"].includes(e)}))&&t&&"function"==typeof t){var r=t(n);if(r)return r}return n&&n.url?n.url:""}}},function(e,t){e.exports=function(e){if(!e)return null;var t=24==e.length?"".concat(e.substring(0,22),":").concat(e.substring(22,24)):e;return new Date(t)}}])},function(e,t,n){e.exports=n(2)},function(e,t,n){var r=n(0),o=n(3),i=r.Date,a=r.Link;e.exports={Date:i,Link:a,RichText:o}},function(e,t,n){var r=n(4),o=n(0).Link,i=n(5),a=r.Elements;function c(e,t,n,r,c){switch(t){case a.heading1:return s("h1",n,c);case a.heading2:return s("h2",n,c);case a.heading3:return s("h3",n,c);case a.heading4:return s("h4",n,c);case a.heading5:return s("h5",n,c);case a.heading6:return s("h6",n,c);case a.paragraph:return s("p",n,c);case a.preformatted:return function(e){return"<pre".concat(u(e),">").concat(i(e.text),"</pre>")}(n);case a.strong:return s("strong",n,c);case a.em:return s("em",n,c);case a.listItem:case a.oListItem:return s("li",n,c);case a.list:return s("ul",n,c);case a.oList:return s("ol",n,c);case a.image:return function(e,t){var n=t.linkTo?o.url(t.linkTo,e):null,r=t.linkTo&&t.linkTo.target?'target="'.concat(t.linkTo.target,'" rel="noopener"'):"",a=[t.label||"","block-img"],c='<img src="'.concat(t.url,'" alt="').concat(t.alt?i(t.alt):"",'" copyright="').concat(t.copyright?i(t.copyright):"",'" />');return'\n    <p class="'.concat(a.join(" "),'">\n      ').concat(n?"<a ".concat(r,' href="').concat(n,'">').concat(c,"</a>"):c,"\n    </p>\n  ")}(e,n);case a.embed:return function(e){return'\n    <div data-oembed="'.concat(e.oembed.embed_url,'"\n      data-oembed-type="').concat(e.oembed.type,'"\n      data-oembed-provider="').concat(e.oembed.provider_name,'"\n      ').concat(u(e),">\n\n      ").concat(e.oembed.html,"\n    </div>\n  ")}(n);case a.hyperlink:return function(e,t,n){var r=t.data.target?'target="'.concat(t.data.target,'" rel="noopener"'):"",a=i(o.url(t.data,e));return"<a ".concat(r,' href="').concat(a,'">').concat(n.join(""),"</a>")}(e,n,c);case a.label:return function(e,t){return"<span ".concat(u(e.data),">").concat(t.join(""),"</span>")}(n,c);case a.span:return function(e){return e?i(e).replace(/\n/g,"<br />"):""}(r);default:return""}}function u(e){return e.label?' class="'.concat(e.label,'"'):""}function s(e,t,n){return"<".concat(e).concat(u(t),">").concat(n.join(""),"</").concat(e,">")}e.exports={asText:function(e,t){return r.asText(e,t)},asHtml:function(e,t,n){return r.serialize(e,c.bind(null,t),n).join("")},Elements:a}},function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";var r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.PRIORITIES=t.NODE_TYPES=void 0;var i={heading1:"heading1",heading2:"heading2",heading3:"heading3",heading4:"heading4",heading5:"heading5",heading6:"heading6",paragraph:"paragraph",preformatted:"preformatted",strong:"strong",em:"em",listItem:"list-item",oListItem:"o-list-item",list:"group-list-item",oList:"group-o-list-item",image:"image",embed:"embed",hyperlink:"hyperlink",label:"label",span:"span"};t.NODE_TYPES=i;var a=(o(r={},i.heading1,4),o(r,i.heading2,4),o(r,i.heading3,4),o(r,i.heading4,4),o(r,i.heading5,4),o(r,i.heading6,4),o(r,i.paragraph,3),o(r,i.preformatted,5),o(r,i.strong,6),o(r,i.em,6),o(r,i.oList,1),o(r,i.list,1),o(r,i.listItem,1),o(r,i.oListItem,1),o(r,i.image,1),o(r,i.embed,1),o(r,i.hyperlink,3),o(r,i.label,4),o(r,i.span,7),r);t.PRIORITIES=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(7),i=n(2),a=n(8),c=n(0),u=(r=n(3))&&r.__esModule?r:{default:r};function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){if(0===e.length)throw new Error("Unable to elect node on empty list");var t=function(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(e.sort((function(e,t){if(e.isParentOf(t))return-1;if(t.isParentOf(e))return 1;var n=c.PRIORITIES[e.type]-c.PRIORITIES[t.type];return 0===n?e.text.length-t.text.length:n})));return{elected:t[0],others:t.slice(1)}}function f(e,t,n){if(t.length>0)return function(e,t,n){return t.reduce((function(r,o,a){var c=[],u=0===a&&o.start>n.lower,s=a===t.length-1&&n.upper>o.end;if(u){var l=new i.TextNode(n.lower,o.start,e.slice(n.lower,o.start));c=c.concat(l)}else{var f=t[a-1];if(f&&o.start>f.end){var d=e.slice(f.end,o.start),p=new i.TextNode(f.end,o.start,d);c=c.concat(p)}}if(c=c.concat(o),s){var h=new i.TextNode(o.end,n.upper,e.slice(o.end,n.upper));c=c.concat(h)}return r.concat(c)}),[])}(e,d(e,t),n);var r=e.slice(n.lower,n.upper);return[new i.TextNode(n.lower,n.upper,r)]}function d(e,t){var n=function(e){return function(e,t){return t.reduce((function(e,t){var n=(0,o.last)(e);if(n){if(n.some((function(e){return e.isParentOf(t)})))return(0,o.init)(e).concat([n.concat(t)]);var r=(0,o.last)(n);return r&&function(e,t){return e.end>=t.start}(r,t)?(0,o.init)(e).concat([n.concat(t)]):e.concat([[t]])}return[[t]]}),[])}(0,(0,o.sort)(e,(function(e,t){return n=t,e.start-n.start||function(e,t){return e.end-t.end}(e,t);var n})))}((0,o.sort)(t,(function(e,t){return e.start-t.start}))).map(l),r=(0,o.flatten)(n.map((function(t){return function(e,t){var n=t.others.reduce((function(n,r){var o=n.inner,a=n.outer,c=function(e,t,n){return n.start<t.start?{inner:i.SpanNode.slice(n,t.start,n.end,e),outer:i.SpanNode.slice(n,n.start,t.start,e)}:n.end>t.end?{inner:i.SpanNode.slice(n,n.start,t.end,e),outer:i.SpanNode.slice(n,t.end,n.end,e)}:{inner:n}}(e,t.elected,r);return{inner:o.concat(c.inner),outer:c.outer?a.concat(c.outer):a}}),{inner:[],outer:[]}),r=n.inner,o=n.outer;return[t.elected.setChildren(f(e,r,t.elected.boundaries()))].concat(d(e,o))}(e,t)})));return(0,o.sort)(r,(function(e,t){return e.start-t.start}))}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t;return(t=[{key:"fromRichText",value:function(e){return{key:(0,u.default)(),children:e.reduce((function(e,t,n){if(a.RichTextBlock.isEmbedBlock(t.type)||a.RichTextBlock.isImageBlock(t.type))return e.concat(new i.BlockNode(t.type,t));var r=function(e){var t=(e.spans||[]).map((function(t){var n=e.text.slice(t.start,t.end);return new i.SpanNode(t.start,t.end,t.type,n,[],t)})),n={lower:0,upper:e.text.length};return f(e.text,t,n)}(t),c=e[e.length-1];if(a.RichTextBlock.isListItem(t.type)&&c&&c instanceof i.ListBlockNode){var u=new i.ListItemBlockNode(t,r),s=c.addChild(u);return(0,o.init)(e).concat(s)}if(a.RichTextBlock.isOrderedListItem(t.type)&&c&&c instanceof i.OrderedListBlockNode){var l=new i.OrderedListItemBlockNode(t,r),d=c.addChild(l);return(0,o.init)(e).concat(d)}if(a.RichTextBlock.isListItem(t.type)){var p=new i.ListItemBlockNode(t,r),h=new i.ListBlockNode(a.RichTextBlock.emptyList(),[p]);return e.concat(h)}if(a.RichTextBlock.isOrderedListItem(t.type)){var y=new i.OrderedListItemBlockNode(t,r),v=new i.OrderedListBlockNode(a.RichTextBlock.emptyOrderedList(),[y]);return e.concat(v)}return e.concat(new i.BlockNode(t.type,t,r))}),[])}}}])&&s(e,t),e}();t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ListBlockNode=t.OrderedListBlockNode=t.OrderedListItemBlockNode=t.ListItemBlockNode=t.BlockNode=t.TextNode=t.SpanNode=t.Node=void 0;var r,o=(r=n(3))&&r.__esModule?r:{default:r},i=n(0);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e,t)}function l(e){return function(){var t,n=f(e);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()){var r=f(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,t)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var p=function e(t,n,r){d(this,e),this.key=(0,o.default)(),this.type=t,this.element=n,this.children=r};t.Node=p;var h=function(e){s(n,p);var t=l(n);function n(e,r,o,i,a,c){var u;return d(this,n),(u=t.call(this,o,c,a)).start=e,u.end=r,u.text=i,u.children=a,u}return u(n,[{key:"boundaries",value:function(){return{lower:this.start,upper:this.end}}},{key:"isParentOf",value:function(e){return this.start<=e.start&&this.end>=e.end}},{key:"setChildren",value:function(e){return new n(this.start,this.end,this.type,this.text,e,this.element)}}],[{key:"slice",value:function(e,t,r,o){return new n(t,r,e.type,o.slice(t,r),e.children,e.element)}}]),n}();t.SpanNode=h;var y=function(e){s(n,h);var t=l(n);function n(e,r,o){d(this,n);var a={type:i.NODE_TYPES.span,start:e,end:r,text:o};return t.call(this,e,r,i.NODE_TYPES.span,o,[],a)}return n}();t.TextNode=y;var v=function(e){s(n,p);var t=l(n);function n(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return d(this,n),t.call(this,e,r,o)}return n}();t.BlockNode=v;var b=function(e){s(n,v);var t=l(n);function n(e,r){return d(this,n),t.call(this,i.NODE_TYPES.listItem,e,r)}return n}();t.ListItemBlockNode=b;var m=function(e){s(n,v);var t=l(n);function n(e,r){return d(this,n),t.call(this,i.NODE_TYPES.oListItem,e,r)}return n}();t.OrderedListItemBlockNode=m;var x=function(e){s(n,v);var t=l(n);function n(e,r){return d(this,n),t.call(this,i.NODE_TYPES.oList,e,r)}return u(n,[{key:"addChild",value:function(e){var t=this.children.concat(e);return new n(this.element,t)}}]),n}();t.OrderedListBlockNode=x;var g=function(e){s(n,v);var t=l(n);function n(e,r){return d(this,n),t.call(this,i.NODE_TYPES.list,e,r)}return u(n,[{key:"addChild",value:function(e){var t=this.children.concat(e);return new n(this.element,t)}}]),n}();t.ListBlockNode=g},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}))}},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";var r=c(n(6)),o=c(n(1)),i=c(n(9)),a=n(0);function c(e){return e&&e.__esModule?e:{default:e}}e.exports={asText:r.default,asTree:o.default.fromRichText,serialize:i.default,Elements:a.NODE_TYPES}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e,t){var n="string"==typeof t?t:" ";return e.map((function(e){return e.text})).join(n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=function(e){return e.slice(0,-1)},t.last=function(e){return e[e.length-1]},t.flatten=function(e){var t=[],n=!0,r=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var c=i.value;Array.isArray(c)?t.push.apply(t,c):t.push(c)}}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return t},t.sort=function(e,t){return function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(e).sort(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RichTextBlock=void 0;var r=n(0);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t,this.text=n,this.spans=r}var t;return(t=[{key:"isEmbedBlock",value:function(e){return e===r.NODE_TYPES.embed}},{key:"isImageBlock",value:function(e){return e===r.NODE_TYPES.image}},{key:"isList",value:function(e){return e===r.NODE_TYPES.list}},{key:"isOrderedList",value:function(e){return e===r.NODE_TYPES.oList}},{key:"isListItem",value:function(e){return e===r.NODE_TYPES.listItem}},{key:"isOrderedListItem",value:function(e){return e===r.NODE_TYPES.oListItem}},{key:"emptyList",value:function(){return{type:r.NODE_TYPES.list,spans:[],text:""}}},{key:"emptyOrderedList",value:function(){return{type:r.NODE_TYPES.oList,spans:[],text:""}}}])&&o(e,t),e}();t.RichTextBlock=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(1))&&r.__esModule?r:{default:r},i=n(2);t.default=function(e,t,n){return o.default.fromRichText(e).children.map((function(e,r){return function(e,t,n,r){return function e(n,o){var a=n instanceof i.SpanNode?n.text:null,c=n.children.reduce((function(t,n,r){return t.concat([e(n,r)])}),[]);return r&&r(n.type,n.element,a,c,o)||t(n.type,n.element,a,c,o)}(e,n)}(e,t,r,n)}))}}])},function(e,t,n){"use strict";var r=/["'&<>]/;e.exports=function(e){var t,n=""+e,o=r.exec(n);if(!o)return n;var i="",a=0,c=0;for(a=o.index;a<n.length;a++){switch(n.charCodeAt(a)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}c!==a&&(i+=n.substring(c,a)),c=a+1,i+=t}return c!==a?i+n.substring(c,a):i}}])},Q3C4:function(e,t,n){e.exports={container:"post_container__3BS1P",postContainer:"post_postContainer__1DkNP",postBanner:"post_postBanner__1vH8j",postHeader:"post_postHeader__xhYPF",title:"post_title__3tPRa"}},RnN5:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return x})),n.d(t,"default",(function(){return g}));var r=n("nKUr"),o=n("g4pe"),i=n.n(o),a=n("ma3e"),c=n("NutJ"),u=n("20a2"),s=n("2iIZ"),l=n.n(s),f=n("Q3C4"),d=n.n(f),p=n("coAh"),h=n("YFqc"),y=n.n(h),v=n("sjX0"),b=n.n(v);function m(){return Object(r.jsx)(y.a,{href:"/",children:Object(r.jsx)("a",{children:Object(r.jsx)("header",{className:b.a.postHeader,children:Object(r.jsx)("img",{src:"/Logo.svg",alt:"logo"})})})})}var x=!0;function g(e){var t,n,o,s,f=e.post;if(Object(u.useRouter)().isFallback)return Object(r.jsx)("div",{children:"Carregando..."});var h=p.a.calcPostInfo(f.first_publication_date),y=p.a.calcPostReadTime(f.data.content);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{children:Object(r.jsx)("title",{children:f.data.title})}),Object(r.jsxs)("div",{className:d.a.container,children:[Object(r.jsx)(m,{}),Object(r.jsx)("img",{src:(null===(t=f.data)||void 0===t||null===(n=t.banner)||void 0===n?void 0:n.url)||(null===(o=f.data)||void 0===o||null===(s=o.image)||void 0===s?void 0:s.url),alt:"Post Banner",className:d.a.postBanner}),Object(r.jsx)("main",{children:Object(r.jsxs)("article",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(r.jsxs)("div",{className:d.a.title,children:[Object(r.jsx)("strong",{children:f.data.title}),Object(r.jsxs)("p",{className:l.a.postInfoContainer,children:[Object(r.jsx)(a.a,{}),Object(r.jsx)("time",{children:h.formatedDate}),Object(r.jsx)(a.c,{}),Object(r.jsx)("span",{children:f.data.author}),Object(r.jsx)(a.b,{}),Object(r.jsx)("span",{children:"".concat(y," min")})]})]}),f.data.content.map((function(e,t){return Object(r.jsxs)("div",{className:d.a.postContainer,children:[Object(r.jsx)("strong",{children:e.heading}),Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:c.RichText.asHtml(e.body)}})]},f.data.content[t].heading)}))]})})]})]})}},sjX0:function(e,t,n){e.exports={postHeader:"header_postHeader__32sXm"}}},[["EXNP",0,2,4,1,3]]]);