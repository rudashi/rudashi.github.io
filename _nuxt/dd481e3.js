(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{252:function(t,e,l){"use strict";l.r(e);var n={props:{size:{type:String,default:"1em"}}},r=l(42),o={name:"List",components:{UilAngleDown:Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("svg",t._b({staticClass:"ui-svg-inline",attrs:{width:t.size,height:t.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},"svg",t.$attrs,!1),[l("path",{attrs:{d:"M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"}})])}),[],!1,null,null,null).exports},props:{items:Array},data:function(){return{model:-1}},methods:{selectItem:function(t,e){this.model=this.model===e?-1:e},beforeEnter:function(t){t.style.height="0"},enter:function(t){t.style.height=t.scrollHeight+"px"},beforeLeave:function(t){t.style.height=t.scrollHeight+"px"},leave:function(t){t.style.height="0"}}},c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"list"},t._l(t.items,(function(e,i){return l("div",{class:{"list-group":!0,"list-group--active":i===t.model}},[l("div",{staticClass:"list-item list-group--header",on:{click:function(l){return t.selectItem(e,i)}}},[l("div",{staticClass:"list-item--icon"},[t._t("list-header--icon",null,null,{item:e})],2),t._v(" "),l("div",{staticClass:"list-item--content"},[l("div",{staticClass:"list-item--title"},[t._t("list-header--title",null,null,{item:e})],2),t._v(" "),l("div",{staticClass:"list-item--subtitle"},[t._t("list-header--subtitle",null,null,{item:e})],2)]),t._v(" "),l("div",{staticClass:"list-item--action"},[l("uil-angle-down")],1)]),t._v(" "),l("transition",{on:{"before-enter":t.beforeEnter,enter:t.enter,"before-leave":t.beforeLeave,leave:t.leave}},[l("div",{directives:[{name:"show",rawName:"v-show",value:i===t.model,expression:"i === model"}],staticClass:"list-group--items"},t._l(e.items,(function(n){return l("div",{staticClass:"list-item"},[l("div",{staticClass:"list-item--content"},[l("div",{staticClass:"list-item--title"},[l("div",{staticClass:"list-item--title"},[t._t("list-group--title",null,null,{item:n})],2),t._v(" "),l("div",[t._t("list-group--action",null,null,{item:n})],2)]),t._v(" "),l("div",{staticClass:"list-item--subtitle"},[t._t("list-group--item",null,null,{item:n,parent:e})],2)])])})),0)])],1)})),0)}),[],!1,null,null,null);e.default=c.exports}}]);