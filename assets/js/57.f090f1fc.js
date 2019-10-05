(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{117:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在我们使用vue开发的时候,如果通过插件来做移动端适配呢?")]),s._v(" "),a("p",[s._v("本文将基于vue-cli3.0脚手架环境下进行的适配,其他情况下不确保可以使用")]),s._v(" "),a("p",[s._v("如何搭建vue-cli3.0脚手架,可以移步 (官网)[https://cli.vuejs.org/zh/guide/installation.html]")]),s._v(" "),a("h2",{attrs:{id:"安装lib-flexible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装lib-flexible","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装lib-flexible")]),s._v(" "),a("blockquote",[a("p",[s._v("yarn add lib-fiexible")])]),s._v(" "),a("p",[s._v("它的主要作用在于,让网页根据设备dpr和宽度，利用viewport和html根元素的font-size配合rem来适配不同尺寸的移动端设备")]),s._v(" "),a("p",[s._v(":::denger\nlib-flexible内部已经将meta标签添加了,所以我们在index.html文件中无需添加,如果添加了,它会以index的为准,这样就造成了无法\n:::")]),s._v(" "),a("h2",{attrs:{id:"安装postcss-px2rem-exclude"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装postcss-px2rem-exclude","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装postcss-px2rem-exclude")]),s._v(" "),a("blockquote",[a("p",[s._v("yarn add postcss-px2rem-exclude")])]),s._v(" "),a("p",[s._v("在package.json内，在postcss内添加：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"postcss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("   \n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"autoprefixer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    \n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"postcss-pxtorem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("           \n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rootValue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("75")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设计稿宽度的1/10,（JSON文件中不加注释，此行注释及下行注释均删除）          ")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"propList"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部    ")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("它的作用在于,设置1rem等于多少px,并且将我样式中写的所有px值转换为对应的rem进行显示")])])},[],!1,null,null,null);t.default=e.exports}}]);