(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{618:function(s,t,n){"use strict";n.r(t);var a=n(66),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("今天想实现右侧导航滑动的时候,我对应的左侧也会随之滑动到对应的位置,并且点击对应类目,右边就会跳转到对应的位置,也就就是说它们是相互的关系!")]),s._v(" "),n("img",{attrs:{src:"/work/Vue/better-scroll.png"}}),s._v(" "),n("p",[s._v("想了想,大概的思想就是,提取我右边每个li的高度,一个li对应左边的一个li,它们是一一对应的,所以当我右边滑动到一定的距离,我就通过index值和滑动高度来对左边实现跳转,当然想要实现这个必须左边跟右边的数量是一一对应的!")]),s._v(" "),n("p",[s._v("然而有一个很好的插件,可以很好的帮助我实现我想要的效果,它就是 "),n("a",{attrs:{href:"http://ustbhuangyi.github.io/better-scroll/doc/api.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("better-scroll"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("让我们来看看官网的介绍吧,这里简单的描述了如何进行使用")]),s._v(" "),n("p",[s._v("国际惯例,下包引入之后,我们就创建一个实例,接受2个参数,第一个参数接受一个包裹的元素,一般我们用选择器来写,第二个参数是一些配置")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" scroll "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BScroll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.wrapper'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    scrollY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    click"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("code",[s._v("这样就实现了一个纵向可点击的滚动效果。")])]),s._v(" "),n("p",[s._v("此时我们就可以通过监听我滚动过程,来实时获取我当前滚动的距离,它有一个事件, "),n("a",{attrs:{href:"http://ustbhuangyi.github.io/better-scroll/doc/events.html#scroll",target:"_blank",rel:"noopener noreferrer"}},[s._v("scroll事件"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("获取到了滚动距离之后,我们就可以通过scrollY值以及右侧每一项li的高度,获取li高度时候,踩了一个坑,"),n("a",{attrs:{href:"https://www.yjdzm.com/work/pit/watch%E6%9B%B4%E6%96%B0%E4%B8%8D%E8%83%BD%E7%9B%B4%E6%8E%A5%E6%93%8D%E4%BD%9Cdom.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("watch更新后不能直接操作dom"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("很好,我们现在有了我们想要的数据了,我们先来实现右边滑动的时候,左边对应的更新吧,您可以参考以下代码")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("currentIndex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("scrollY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tops"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这里的scrollY是指右侧滑动的了的高度,tops放置的是右侧每个li距离包裹元素的高度")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" index "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tops"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("findIndex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("top"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" scrollY "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" top "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" scrollY "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" tops"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//通过数组的findIndex方法,在tops数组中找到最接近当前scrollY值的元素下标值(fineIndex方法就是找满足条件的第一个下标值)")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("leftScroll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//把当前下标进行更新存放")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" index\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//通过对应的下标在左侧包裹元素中寻找到对应的li")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" li "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$refs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("leftUl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//通过better-scroll 对应的 scrollToElement方法,滑动到相应的位置")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("leftScroll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scrollToElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("li"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回index,用于判断index值相等的时候,改变我的class样式")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" index\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("点击对应类目,右边就会跳转到对应的位置, 您可以参考以下代码")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//当我点击左侧选项的时候,获取我的index值")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("goCurrent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// index值一一对应,获取到我右边需要滑动的距离")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" top "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tops"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更新我右侧应该滑动的距离")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scrollY "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" top\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过better-scroll 对应的 scrollTo,滑动到相应的位置")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rightScroll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scrollTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("top"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])])])},[],!1,null,null,null);t.default=e.exports}}]);