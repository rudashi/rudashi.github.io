(window.webpackJsonp=window.webpackJsonp||[]).push([[20,4,7,8,9,10],{225:function(t,e,n){"use strict";n.r(e);n(44),n(34),n(43),n(16),n(69),n(35),n(70);var r=n(26);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={name:"btn",props:{disabled:Boolean,icon:Boolean,rounded:Boolean,outlined:Boolean,to:[String,Object],href:String,color:String,large:Boolean,xLarge:Boolean},computed:{classes:function(){return o(o({btn:!0,"btn--icon":this.icon,"btn--rounded":this.rounded,"btn--disabled":this.disabled,"btn--outlined":this.outlined},this.textColor),this.size)},textColor:function(){return this.hasColor?Object(r.a)({},"text--".concat(this.color),!0):{}},hasColor:function(){return!!this.color},isNuxtLink:function(){return!!this.to},isLink:function(){return!!this.href},size:function(){return this.xLarge?{"btn--x-large":!0}:this.large?{"btn--large":!0}:{"btn--default":!0}}}},h=n(42),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isNuxtLink?n("nuxt-link",t._g(t._b({class:t.classes,attrs:{to:t.to,rel:"noopener"}},"nuxt-link",t.$attrs,!1),t.$listeners),[n("span",{staticClass:"btn--wrapper"},[t._t("default")],2)]):t.isLink?n("a",t._g(t._b({class:t.classes,attrs:{href:t.href,rel:"noopener"}},"a",t.$attrs,!1),t.$listeners),[n("span",{staticClass:"btn--wrapper"},[t._t("default")],2)]):n("button",t._g(t._b({class:t.classes,attrs:{disabled:t.disabled,type:"button"}},"button",t.$attrs,!1),t.$listeners),[n("span",{staticClass:"btn--wrapper"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},227:function(t,e,n){"use strict";var r=n(266),l=n(267),o=n(270),c=n(269),h=n(268);e.a={home:{link:"home",text:"Home",icon:r.a},about:{link:"me",text:"Me",icon:l.a},skills:{link:"skills",text:"Skills",icon:o.a},portfolio:{link:"portfolio",text:"Portfolio",icon:c.a},contact:{link:"contact",text:"Contact",icon:h.a}}},228:function(t,e,n){"use strict";var r=n(6),l=n(238);r({target:"String",proto:!0,forced:n(239)("link")},{link:function(t){return l(this,"a","href",t)}})},230:function(t,e,n){"use strict";n.r(e);n(228);var r=n(235),menu=n(227),l={name:"Main",components:{FloatingButton:r.default},data:function(){return{menu:menu.a}},methods:{scrollToTop:function(){this.$route.hash&&this.$route.hash.substr(1)===this.menu.home.link?window.scrollTo({top:0,left:0,behavior:"smooth"}):this.$router.push({hash:this.menu.home.link})}}},o=n(42),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[t._t(t.menu.home.link),t._v(" "),t._t(t.menu.about.link),t._v(" "),t._t(t.menu.skills.link),t._v(" "),t._t(t.menu.portfolio.link),t._v(" "),t._t(t.menu.contact.link),t._v(" "),n("floating-button",{attrs:{bottom:"",right:""},on:{click:t.scrollToTop}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Main:n(230).default})},233:function(t,e,n){"use strict";n.r(e);var r=n(237),l=n(236),o=n(225),c=n(265),h={name:"Preview",components:{Toolbar:l.default,Btn:o.default,SliderItemBox:r.default,UilTimes:c.a},props:{backTo:String,item:{type:Object,default:function(){return{type:null,title:null,subtitle:null,description:null,image:null,hash:null,items:[]}}}},computed:{hasBtn:function(){return Boolean(this.item.btn)}}},f=n(42),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout--wrapper"},[n("toolbar",{staticClass:"header"},[n("btn",{attrs:{icon:"",to:{name:"index",hash:"#"+t.backTo}}},[n("uil-times")],1),t._v(" "),n("span",{staticClass:"header--title",domProps:{textContent:t._s(t.item.title)}})],1),t._v(" "),n("main",{staticClass:"preview"},[n("slider-item-box",{attrs:{image:t.item.image,type:t.item.type,title:t.item.title,"show-caption":!1}}),t._v(" "),n("div",{staticClass:"preview--description"},[n("h1",{staticClass:"text",domProps:{textContent:t._s(t.item.title)}}),t._v(" "),n("h2",{domProps:{textContent:t._s(t.item.subtitle)}}),t._v(" "),t.item.description?n("h3",{domProps:{textContent:t._s(t.item.description)}}):t._e(),t._v(" "),n("ul",t._l(t.item.items,(function(e){var text=e.text;return n("li",{domProps:{textContent:t._s("- "+text)}})})),0),t._v(" "),t.hasBtn?n("btn",{staticClass:"btn--primary",attrs:{href:t.item.btn.url,target:"_blank","x-large":""}},[t._v("\n                "+t._s(t.item.btn.text)+"\n                "),n(t.item.btn.icon,{tag:"component",staticClass:"ui-svg--right"})],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Main:n(230).default})},235:function(t,e,n){"use strict";n.r(e);var r=n(225),l={props:{size:{type:String,default:"1em"}}},o=n(42),c=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._b({staticClass:"ui-svg-inline",attrs:{width:t.size,height:t.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},"svg",t.$attrs,!1),[n("path",{attrs:{d:"M12.71,8.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L11,11.41V15a1,1,0,0,0,2,0V11.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"}})])}),[],!1,null,null,null).exports,h={name:"FloatingButton",components:{Btn:r.default,UilArrowCircleUp:c},data:function(){return{fab:!1}},props:{top:Boolean,right:Boolean,bottom:Boolean,left:Boolean},computed:{classes:function(){return{"btn--fixed":!0,"btn--back-to-top":!0,"btn--top":this.top,"btn--right":this.right,"btn--bottom":this.bottom,"btn--left":this.left}}},mounted:function(){window.addEventListener("scroll",this.onScroll)},methods:{onScroll:function(){if("undefined"!=typeof window){var t=window.pageYOffset||document.documentElement.offsetTop||0;this.fab=t>300}}}},f=Object(o.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"btn--back-to-top-fade"}},[n("btn",t._g({directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],class:t.classes,attrs:{color:"primary","aria-label":"Scroll to top",icon:""}},t.$listeners),[n("uil-arrow-circle-up")],1)],1)}),[],!1,null,null,null);e.default=f.exports},236:function(t,e,n){"use strict";n.r(e);var r={name:"Toolbar",data:function(){return{elevateOnScroll:!1}},computed:{classes:function(){return{elevate:this.elevateOnScroll}}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.elevateOnScroll=window.scrollY>0}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("header",{class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},237:function(t,e,n){"use strict";n.r(e);n(44),n(34),n(43),n(16),n(69),n(35),n(70);var r=n(26);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var o={name:"sliderItemBox",props:{type:String,title:String,image:String,to:String,showCaption:{type:Boolean,default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"slider-item__wrapper":!0,"slider-item__caption":this.showCaption,"slider-item__link":this.isClickable},this.typeClass)},typeClass:function(){return this.type?Object(r.a)({},"slider-item__".concat(this.type),!0):{}},isClickable:function(){return Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to}},methods:{generateRouteLink:function(t){return this.isLink?this.$router.push({name:this.to}):this.isClickable?this.$emit("click",t):null}}},c=o,h=n(42),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider-item",on:{click:t.generateRouteLink}},[n("div",{class:t.classes},[n("figure",[n("img",{attrs:{alt:t.title,title:t.title,src:t.image}}),t._v(" "),t.showCaption?n("figcaption",[n("div",{domProps:{textContent:t._s(t.title)}})]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},238:function(t,e,n){var r=n(3),l=n(21),o=n(11),c=/"/g,h=r("".replace);t.exports=function(t,e,n,r){var f=o(l(t)),d="<"+e;return""!==n&&(d+=" "+n+'="'+h(o(r),c,"&quot;")+'"'),d+">"+f+"</"+e+">"}},239:function(t,e,n){var r=n(5);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},265:function(t,e,n){"use strict";var r={props:{size:{type:String,default:"1em"}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._b({staticClass:"ui-svg-inline",attrs:{width:t.size,height:t.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},"svg",t.$attrs,!1),[n("path",{attrs:{d:"M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"}})])}),[],!1,null,null,null);e.a=component.exports},266:function(t,e,n){"use strict";var r={props:{size:{type:String,default:"1em"}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._b({staticClass:"ui-svg-inline",attrs:{width:t.size,height:t.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},"svg",t.$attrs,!1),[n("path",{attrs:{d:"M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"}})])}),[],!1,null,null,null);e.a=component.exports},267:function(t,e,n){"use strict";var r={props:{size:{type:String,default:"1em"}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._b({staticClass:"ui-svg-inline",attrs:{width:t.size,height:t.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},"svg",t.$attrs,!1),[n("path",{attrs:{d:"M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"}})])}),[],!1,null,null,null);e.a=component.exports},268:function(t,e,n){"use strict";var r={props:{size:{type:String,default:"1em"}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._b({staticClass:"ui-svg-inline",attrs:{width:t.size,height:t.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},"svg",t.$attrs,!1),[n("path",{attrs:{d:"M20.5,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V9.41L9.38,15.3a3,3,0,0,0,4.24,0l1.64-1.64a1,1,0,1,0-1.42-1.42L12.2,13.88a1,1,0,0,1-1.4,0L4.91,8H11.5a1,1,0,0,0,0-2h-7a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3V15A1,1,0,0,0,20.5,14Zm1.71-8.71-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42l1.29-1.3V11a1,1,0,0,0,2,0V5.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.21,5.29Z"}})])}),[],!1,null,null,null);e.a=component.exports},269:function(t,e,n){"use strict";var r={props:{size:{type:String,default:"1em"}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._b({staticClass:"ui-svg-inline",attrs:{width:t.size,height:t.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},"svg",t.$attrs,!1),[n("path",{attrs:{d:"M17,11h1a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v1A1,1,0,0,0,17,11ZM6,12h5a1,1,0,0,0,0-2H6a1,1,0,0,0,0,2ZM22,4H2A1,1,0,0,0,1,5V19a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V5A1,1,0,0,0,22,4ZM21,18H3V6H21ZM6,16h5a1,1,0,0,0,0-2H6a1,1,0,0,0,0,2Z"}})])}),[],!1,null,null,null);e.a=component.exports},270:function(t,e,n){"use strict";var r={props:{size:{type:String,default:"1em"}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._b({staticClass:"ui-svg-inline",attrs:{width:t.size,height:t.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},"svg",t.$attrs,!1),[n("path",{attrs:{d:"M6,6A2,2,0,0,1,8,4,1,1,0,0,0,8,2,4,4,0,0,0,4,6V9a2,2,0,0,1-2,2,1,1,0,0,0,0,2,2,2,0,0,1,2,2v3a4,4,0,0,0,4,4,1,1,0,0,0,0-2,2,2,0,0,1-2-2V15a4,4,0,0,0-1.38-3A4,4,0,0,0,6,9Zm16,5a2,2,0,0,1-2-2V6a4,4,0,0,0-4-4,1,1,0,0,0,0,2,2,2,0,0,1,2,2V9a4,4,0,0,0,1.38,3A4,4,0,0,0,18,15v3a2,2,0,0,1-2,2,1,1,0,0,0,0,2,4,4,0,0,0,4-4V15a2,2,0,0,1,2-2,1,1,0,0,0,0-2Z"}})])}),[],!1,null,null,null);e.a=component.exports}}]);