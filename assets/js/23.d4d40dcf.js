(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{620:function(s,t,n){"use strict";n.r(t);var a=n(66),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("最近有人问我博客是如何搭建的,今天就出一个教程,详细的介绍博客的搭建,避免大家浪费更多的时间去看文档,这个仅仅只是基础的让您搭建起一个博客,如果您想对博客进行自定义主题的话,请您留意后续的文章!")]),s._v(" "),n("p",[s._v("博客使用的是 "),n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePresss"),n("OutboundLink")],1),s._v(" 进行搭建的")]),s._v(" "),n("p",[s._v("首先我们先全局安装Vuepress吧")]),s._v(" "),n("p",[n("code",[s._v("yarn global add vuepress")])]),s._v(" "),n("p",[n("code",[s._v("npm i -g vuepress")])]),s._v(" "),n("p",[s._v("在等待安装的时候,不妨给我一个star "),n("a",{attrs:{href:"https://github.com/yaojin2070/yaojin2070.github.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("我的github"),n("OutboundLink")],1)]),s._v(" "),n("h1",{attrs:{id:"创建docs文件夹"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建docs文件夹","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建docs文件夹")]),s._v(" "),n("p",[s._v("在您想存放您博客的位置当中创建一个 "),n("code",[s._v("docs")]),s._v(" 文件夹, 切记一定要是docs文件夹,不然就没法编译了")]),s._v(" "),n("p",[s._v("然后我们在这个文件夹当中创建一个mackdown文件,命名为 "),n("code",[s._v("README.md")])]),s._v(" "),n("p",[s._v("内容随便写一个标题,以便检测是否成功")]),s._v(" "),n("h1",{attrs:{id:"初始化package-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化package-json","aria-hidden":"true"}},[s._v("#")]),s._v(" 初始化package.json")]),s._v(" "),n("p",[s._v("很好,我们现在有了相关的文件夹以及文件了,我们来初始化一个package.json,以便我们可以跑起来吧")]),s._v(" "),n("p",[s._v("运行命令: "),n("code",[s._v("npm init")]),s._v(",然后一直回车就完事了")]),s._v(" "),n("h1",{attrs:{id:"运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行","aria-hidden":"true"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),n("p",[s._v("现在各种文件都有了,让我们跑起来看看结果吧")]),s._v(" "),n("p",[s._v("运行命令:  "),n("code",[s._v("npx vuepress dev docs")])]),s._v(" "),n("p",[s._v("编译完成后,我们就可以在命令行窗口中查看到一个地址了,我们在浏览器中输入地址就可以看到我们的项目跑起来了")]),s._v(" "),n("p",[s._v("您看到的情况应该是这样的")]),s._v(" "),n("img",{attrs:{src:"/article/Vue/vuepress-teach1.png"}}),s._v(" "),n("h1",{attrs:{id:"创建配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建配置文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建配置文件")]),s._v(" "),n("p",[s._v("很好,我们现在已经有了初步的样子了,让我们来设置对应的配置来获得更多的功能吧")]),s._v(" "),n("p",[s._v("首先,我们需要在 "),n("code",[s._v("pageage.json")]),s._v(" 文件的script属性中,改变它的值")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docs:dev"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docs:build"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("然后我们在根目录中运行 "),n("code",[s._v("npm run docs:build")])]),s._v(" "),n("p",[s._v("当我们运行完毕之后,我们会发现多了一个 "),n("code",[s._v(".vuepress")]),s._v(" 文件夹,里面有一个 "),n("code",[s._v("dist")]),s._v(" 文件夹,这个就是打包后的文件夹了,我们部署到GitHub上就是把这个文件夹放上去的")]),s._v(" "),n("p",[s._v("您可以理解成 "),n("code",[s._v(".vuepress")]),s._v(" 文件夹是vuepress的核心文件夹,它用来存放配置文件以及一些公用的图片等都是放到这个文件夹中的")]),s._v(" "),n("p",[s._v("让我们在这个文件夹中创建一个 "),n("code",[s._v("config.js")]),s._v(" 文件,它就是vuepress最核心的配置文件了,里面的配置将会决定页面的展示以及部署, 关于更多config文件的配置您可以查看"),n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[s._v("配置以及默认主题"),n("OutboundLink")],1),s._v("了解更多,这篇文章只会教一些基本用到的配置项,让您可以搭建一个基本的博客,存放您的文章!")]),s._v(" "),n("p",[s._v("创建 "),n("code",[s._v("public")]),s._v(" 文件夹存放图片")]),s._v(" "),n("p",[s._v("让我们来看下基本的一些配置信息吧,将这些信息拷贝到您的 "),n("code",[s._v("config.js")]),s._v(" 文件中")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'遥近个人博客'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 博客标题")]),s._v("\n  dest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./dist'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打包后存放的路径,以根目录开始")]),s._v("\n  head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'icon'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" href"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/favicon.ico'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置网页的icon图标,将会从public文件夹中找到favicon.ico文件")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'meta'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'viewport'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'width=device-width,initial-scale=1,user-scalable=no'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置移动端兼容")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  themeConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    nav"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导航栏配置")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 没有下拉选项的导航")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'主页'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 您想展示的文本信息")]),s._v("\n        link"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// '/'默认为docs文件夹下的README.md文件")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 有下拉选项的导航")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'我的文章'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/note/vue/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意link的设置,这样写的话就是从docs文件夹中找到note文件夹在找到vue文件夹")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/note/react/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意link的设置,这样写的话就是从docs文件夹中找到note文件夹在找到react文件夹")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 侧边栏配置")]),s._v("\n    sidebar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将会从docs文件夹中找到note文件夹在找到vue文件夹中开始寻找对应的文件")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/note/vue/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'介绍'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意必须要有README.md文件,这样写,就会找到docs/note/vue/README.md文件")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 单一侧边栏,没有下拉选项")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test1.md'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue的介绍'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 必须以数组的形式进行设置, [link,text],link为文件路径,text为侧边栏文本,这样写,就会从docs/note/vue文件夹中,找到test1.md文件")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将会从docs文件夹中找到note文件夹在找到react文件夹中开始寻找对应的文件")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/note/react/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'介绍'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 寻找docs/note/react/README.md文件")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 有下拉选项的侧边栏")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'基本教程'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 下拉侧边栏显示的文本")]),s._v("\n            children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/note/react/basic/react如何使用'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react如何使用'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 找到docs/note/react/basic/react如何使用.md文件")]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/note/react/basic/遥近666'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'遥近666'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 首页的侧边栏")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'首页'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// docs/README.md")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'遥近2070'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'遥近2070'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// docs/遥近2070.md")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sidebarDepth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 侧边栏显示等级,我一般设置0级")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br")])]),n("p",[s._v(":::danger\n主要需要注意的是,以文件夹作为结束的路径的话,必须要有/结尾,不然会判断为一个md文件进行编译,图片必须存放到public文件夹中,如果您想首页有侧边栏,务必将配置项放到最后, 不过一般我们首页都不会写侧边栏,这里仅仅告知您注意事项,还需要注意的是,快速搜索栏,会匹配.md文件的标题栏,所以务必养成写标题的习惯,当您的文章比较多的时候,搜索栏是一个非常重要的功能\n:::")]),s._v(" "),n("p",[s._v("让我们来看下,设置完毕之后的显示效果吧,图片比较大,您可以保存来查看")]),s._v(" "),n("img",{attrs:{src:"/article/Vue/vuepress-teach2.png"}}),s._v(" "),n("h1",{attrs:{id:"通过第三包美化界面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过第三包美化界面","aria-hidden":"true"}},[s._v("#")]),s._v(" 通过第三包美化界面")]),s._v(" "),n("p",[s._v("我们已经对基本的配置已经有基本的了解,如果您想让您的页面独特性,那么就要自己写组件,自定义主题了,这个的话我后续会介绍,今天我们来引入别人写好的第三方包来进行美化,这个也是我目前正在使用的 "),n("code",[s._v("vuepress-theme-reco")])]),s._v(" "),n("p",[s._v("首先,我们先安装,在根目录下执行:")]),s._v(" "),n("p",[n("code",[s._v("npm install vuepress-theme-reco -dev--save")])]),s._v(" "),n("p",[s._v("或者")]),s._v(" "),n("p",[n("code",[s._v("yarn add vuepress-theme-reco")])]),s._v(" "),n("p",[s._v("在 "),n("code",[s._v("config.js")]),s._v(" 配置文件中,添加如下配置")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v(" theme"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reco'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表示应用第三方主题,别放在别的属性当中哦")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("删除首页的导航的侧边栏,我们设置一个不一样的首页(如果没有设置可以忽略)")]),s._v(" "),n("p",[s._v("修改 "),n("code",[s._v("docs/README.md")]),s._v("文件如下:")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\nhome"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nheroImage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jpg\nactionText"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 博客介绍\nactionLink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("info\nfeatures"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 个人分享\n  details"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 分享文章\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 个人博客\n  details"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 分享东西\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 留言吧\n  details"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 给出好的建议\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("里面的内容您可以自动设置, "),n("code",[s._v("heroImage")]),s._v(",为大图")]),s._v(" "),n("p",[s._v("设置完毕之后,也在 "),n("code",[s._v("config.js")]),s._v(" 给 "),n("code",[s._v("themeConfig")]),s._v(" 对象添加一个logo属性,值跟 "),n("code",[s._v("heroImage")]),s._v(" 一样,让左上角有个logo图片,看上去更加美观")]),s._v(" "),n("p",[s._v("设置完毕之后如果您想更改主题的默认样式或者基于这个包进行美化,需要您从 "),n("code",[s._v("node_modules")]),s._v(" 文件夹中找到 "),n("code",[s._v("vuepress-theme-reco")]),s._v(" 找到对应的组件进行修改,这里就不一一介绍了")]),s._v(" "),n("p",[s._v("关于更多这个包的功能,您可以查看"),n("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/home.html#%E9%BB%98%E8%AE%A4%E9%A6%96%E9%A1%B5%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-reco"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("到了这里,恭喜您,基本的配置项您已经掌握了,您可以开始写您自己的文章了,一个简单的博客就这样搭建起来了!")]),s._v(" "),n("h1",{attrs:{id:"部署到github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署到github","aria-hidden":"true"}},[s._v("#")]),s._v(" 部署到GitHub")]),s._v(" "),n("p",[s._v("作为开发者,必须怀有分享的精神,我们这么辛苦建立的博客怎么能的单单自己看呢,必须进行分享,让我们部署到GitHub上,让更多的人看到吧")]),s._v(" "),n("p",[s._v("首先在 "),n("code",[s._v("config.js")]),s._v(" 文件中,添加远程关联GitHub的配置")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("repo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://github.com/您的GitHub账号名/您的GitHub账号名.github.io.git'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在根目录,执行 "),n("code",[s._v("npm run docs:build")]),s._v(" 打包生成新的dist文件夹")]),s._v(" "),n("p",[s._v("在GitHub上创建一个仓库,名字为 "),n("code",[s._v("您的GitHub账号名称.github.io")]),s._v(",必须要以这样的格式进行创建")]),s._v(" "),n("p",[s._v("创建完毕之后,我们在根目录下,关联我们的仓库")]),s._v(" "),n("p",[s._v("执行如下命令: "),n("code",[s._v("git remote add origin 仓库的地址")])]),s._v(" "),n("p",[s._v("关联完毕之后,在根目录下,创建一个 "),n("code",[s._v(".gitignore")]),s._v(" 文件,内容为: "),n("code",[s._v("node_modules/")]),s._v(" ,忽略 "),n("code",[s._v("node_modules")]),s._v("内容,避免也提交到GitHub上去,我们并不需要,而且文件非常大")]),s._v(" "),n("p",[s._v("配置完毕之后在根目录执行 "),n("code",[s._v("git add .")]),s._v(" 、 "),n("code",[s._v("git commit -m '提交的信息描述'")])]),s._v(" "),n("p",[s._v("先别提交内容,创建一个分支,这个分支专门用来开发的 "),n("code",[s._v("git checkout -b 分支名称")])]),s._v(" "),n("p",[s._v("在这个分区下再次刚刚的2步操作 然后提交内容 "),n("code",[s._v("git push origin 分支名称")])]),s._v(" "),n("p",[s._v("切换到master分支 "),n("code",[s._v("git checkout master")])]),s._v(" "),n("p",[s._v("然后在从master分支下,提取另一个分支下的dist文件夹 "),n("code",[s._v("git checkout 另一个分支的名称 dist/")])]),s._v(" "),n("p",[s._v("然后您就会发现,您的master分支下多了一个dist文件夹,把文件夹的内容剪切到根目录下")]),s._v(" "),n("p",[s._v("在master分支下,执行提交的3步骤,这样您的仓库就有2个分支,master分支专门用来展示内容的,另外一个分支专门用来开发的")]),s._v(" "),n("p",[s._v("创建完毕了,让我们在地址栏输入 "),n("code",[s._v("https://您的GitHub名称.github.io/")]),s._v(" 就可以看到你的博客了")]),s._v(" "),n("p",[s._v("如果您想有独特的域名,您可以在阿里云等平台购买一个域名,然后在您的仓库中,改变您的配置,然后在将您的域名解析的地址写成GitHub上的地址,那么也可以访问到的")]),s._v(" "),n("p",[s._v("到这里为止,一个属于自己的博客就创建完毕了!")]),s._v(" "),n("p",[s._v(":::danger\n由于之前已经配置过了,可能在部署到GitHub上会存在错误的东西,如果有错误的问题,您留言,我将会在后续当中更改相关的内容\n:::")])])},[],!1,null,null,null);t.default=e.exports}}]);