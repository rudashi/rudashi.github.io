(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{225:function(t,e,n){"use strict";n.r(e);n(44),n(34),n(43),n(16),n(69),n(35),n(70);var r=n(26);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={name:"btn",props:{disabled:Boolean,icon:Boolean,rounded:Boolean,outlined:Boolean,to:[String,Object],href:String,color:String,large:Boolean,xLarge:Boolean},computed:{classes:function(){return l(l({btn:!0,"btn--icon":this.icon,"btn--rounded":this.rounded,"btn--disabled":this.disabled,"btn--outlined":this.outlined},this.textColor),this.size)},textColor:function(){return this.hasColor?Object(r.a)({},"text--".concat(this.color),!0):{}},hasColor:function(){return!!this.color},isNuxtLink:function(){return!!this.to},isLink:function(){return!!this.href},size:function(){return this.xLarge?{"btn--x-large":!0}:this.large?{"btn--large":!0}:{"btn--default":!0}}}},f=n(42),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isNuxtLink?n("nuxt-link",t._g(t._b({class:t.classes,attrs:{to:t.to,rel:"noopener"}},"nuxt-link",t.$attrs,!1),t.$listeners),[n("span",{staticClass:"btn--wrapper"},[t._t("default")],2)]):t.isLink?n("a",t._g(t._b({class:t.classes,attrs:{href:t.href,rel:"noopener"}},"a",t.$attrs,!1),t.$listeners),[n("span",{staticClass:"btn--wrapper"},[t._t("default")],2)]):n("button",t._g(t._b({class:t.classes,attrs:{disabled:t.disabled,type:"button"}},"button",t.$attrs,!1),t.$listeners),[n("span",{staticClass:"btn--wrapper"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports}}]);