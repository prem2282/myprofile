(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"hHh lpR fFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),n("q-toolbar-title",[e._v("\n        PremAnand\n      ")]),n("div",[e._v("Professional Profile")])],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n        Essential Links\n      ")]),e._l(e.essentialLinks,(function(t){return n("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2)],1),n("q-page-container",[n("router-view")],1)],1)},i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:e.link}},[e.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1):e._e(),n("q-item-section",[n("q-item-label",[e._v(e._s(e.title))]),n("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)},r=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},s=o,c=n("2877"),p=n("66e5"),u=n("4074"),m=n("0016"),b=n("0170"),f=n("eebe"),d=n.n(f),w=Object(c["a"])(s,l,r,!1,null,null,null),k=w.exports;d()(w,"components",{QItem:p["a"],QItemSection:u["a"],QIcon:m["a"],QItemLabel:b["a"]});const q=[{title:"Github",caption:"github.com/prem2282",icon:"code",link:"https://github.com/prem2282"},{title:"LinkedIn",caption:"https://www.linkedin.com/in/prem2282/",icon:"fab fa-linkedin-in",link:"https://www.linkedin.com/in/prem2282/"}];var v={name:"MainLayout",components:{EssentialLink:k},data(){return{leftDrawerOpen:!1,essentialLinks:q}}},h=v,_=n("4d5a"),g=n("e359"),L=n("65c6"),Q=n("9c40"),y=n("6ac5"),O=n("9404"),D=n("1c1c"),E=n("09e3"),I=Object(c["a"])(h,a,i,!1,null,null,null);t["default"]=I.exports;d()(I,"components",{QLayout:_["a"],QHeader:g["a"],QToolbar:L["a"],QBtn:Q["a"],QToolbarTitle:y["a"],QDrawer:O["a"],QList:D["a"],QItemLabel:b["a"],QPageContainer:E["a"]})}}]);