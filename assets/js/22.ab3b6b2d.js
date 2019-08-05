(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{261:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("code",[t._v("面试官:您跟我说说vue的生命周期吧")])]),t._v(" "),a("p",[t._v("面对面试官这样的提问,我们应该如何回答呢,下面是我自己对生命周期的理解,如果遇到这样的提问,我可能会这样述说!")]),t._v(" "),a("h2",{attrs:{id:"new-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-vue","aria-hidden":"true"}},[t._v("#")]),t._v(" new Vue()")]),t._v(" "),a("p",[t._v("创建了一个实例化对象\n")]),a("hr"),a("p"),t._v(" "),a("h2",{attrs:{id:"init-events-lifecycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-events-lifecycle","aria-hidden":"true"}},[t._v("#")]),t._v(" Init Events && Lifecycle")]),t._v(" "),a("p",[t._v("然后进行初始化一些事件,初始化一些生命周期函数,初始化渲染!")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("这里的初始化渲染指的是给vm添加了虚拟dom,初始化了生命周期才能使我后面能调用beforeCreate()等生命周期函数,初始化事件的相关属性:on、off、emit")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"beforecreate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeCreate()")]),t._v(" "),a("p",[t._v("然后就调用了我的beforeCreate函数了,这里需要注意的是,我的vue还没有相应的数据,所以我们不能在这里对数据进行操作")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("我们可以在这个钩子函数中放置一些加载动画")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"init-injections-reactivity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-injections-reactivity","aria-hidden":"true"}},[t._v("#")]),t._v(" Init injections && reactivity")]),t._v(" "),a("p",[t._v("这里主要是依赖的注入和效验,我的理解是可以让我的父组件访问到子组件,无论我的子组件有多深")]),t._v(" "),a("h2",{attrs:{id:"created"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#created","aria-hidden":"true"}},[t._v("#")]),t._v(" created()")]),t._v(" "),a("p",[t._v("太好了,我们现在终于来到了created函数了,这里我们终于可以操作我们的数据了,我们此时如果打印相应的数据的话,它是会显示的了,既然我们能读取到相应的数据,也就是证明了它已经完成了数据观测(data observer)")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("这里我们可以发起ajax请求，需要注意的是，$el属性还没挂载,当然如果您的ajax请求过多,不建议您在这里进行发送,因为这样会导致您的页面初始化渲染就要耗时过多!")])]),t._v(" "),a("h2",{attrs:{id:"检查是否有el属性、template等"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查是否有el属性、template等","aria-hidden":"true"}},[t._v("#")]),t._v(" 检查是否有el属性、template等")]),t._v(" "),a("img",{attrs:{src:"/article/Vue/el.png"}}),t._v(" "),a("p",[t._v("到了这里vue会检查我的配置对象中是否有el属性,如果有的话,它就会继续判断是否有template,它接受的是字符串作为参数,可以是#id、模版字符串、dom元素，然后通过render函数进行编译，如果没有template那么就会将el以及其子内容作为模板进行编译!")]),t._v(" "),a("p",[t._v("渲染编译的优先级: "),a("code",[t._v("render > template > el")]),t._v(" ,记住,必须要有el,因为vue需要知道我最终渲染完的东西需要挂载到哪里!")]),t._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("如果我的vm配置对象没有el属性，那么生命周期就会判断是否有el的时候就结束的了，如果想生命周期继续执行，只能通过vm.$mount来进行手动的挂载!")])]),t._v(" "),a("h2",{attrs:{id:"beforemount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforemount","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeMount")]),t._v(" "),a("p",[t._v("经历千辛万苦,终于来到了beforeMount阶段了,这里主要是将我的刚刚编译完成的模板,把我的data里面的数据生成对应的html")]),t._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("此时我的页面还没有内容可以显示,因为我还没将我的html挂载到页面")])]),t._v(" "),a("h2",{attrs:{id:"进行挂载并且给我的vm添加-el属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进行挂载并且给我的vm添加-el属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 进行挂载并且给我的vm添加$el属性")]),t._v(" "),a("img",{attrs:{src:"/article/Vue/mounting.png"}}),t._v(" "),a("p",[t._v("这里主要是将我的编译好的模板挂载到页面上,并且给我的vm添加$el属性,这样您就可以通过this.$el的方式来读取我最终渲染的DOM结构了")]),t._v(" "),a("h2",{attrs:{id:"mounted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mounted","aria-hidden":"true"}},[t._v("#")]),t._v(" mounted")]),t._v(" "),a("p",[t._v("到了这里,模板已经挂载完毕了,此时我已经将我的el属性替换成我最终编译好的DOM结构了,页面在此时已经可以正常的显示了")]),t._v(" "),a("h2",{attrs:{id:"beforeupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeUpdate")]),t._v(" "),a("p",[t._v("当我的vue中的data数据发生变化的时候,就会执行这个函数,此时需要注意的是我的页面还没有更新的,只是我的虚拟DOM已经配置了,此时我的data数据已经是我更改的数据!")]),t._v(" "),a("h2",{attrs:{id:"通过diff算法渲染虚拟dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过diff算法渲染虚拟dom","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过diff算法渲染虚拟DOM")]),t._v(" "),a("img",{attrs:{src:"/article/Vue/Updating.png"}}),t._v(" "),a("p",[t._v("到了这里,将会重新渲染虚拟DOM,通过diff算法来对比我的节点之间的差异更新真实的DOM\n这样就能提高性能!")]),t._v(" "),a("h2",{attrs:{id:"updated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updated","aria-hidden":"true"}},[t._v("#")]),t._v(" updated")]),t._v(" "),a("p",[t._v("到了这里,就说明data里面的数据已经成功与页面进行同步了,页面此时已经展示了最新的数据信息了,view已经重新渲染了!")]),t._v(" "),a("h2",{attrs:{id:"beforedestroy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforedestroy","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeDestroy")]),t._v(" "),a("p",[t._v("想要这个生命周期执行,必须通过调用实例对象的$destroy()方法,来执行销毁vue实例,在这个生命周期,您仍然可以访问实例调用其方法,因为此时它还没正在给销毁")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("一般我们会在这里清理定时器等操作")])]),t._v(" "),a("h2",{attrs:{id:"进行卸载等操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进行卸载等操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 进行卸载等操作")]),t._v(" "),a("img",{attrs:{src:"/article/Vue/destroy.png"}}),t._v(" "),a("p",[t._v("在这个阶段,会卸载子组件,解除观察,卸载事件监听")]),t._v(" "),a("h2",{attrs:{id:"destroyed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destroyed","aria-hidden":"true"}},[t._v("#")]),t._v(" destroyed")]),t._v(" "),a("p",[t._v("实例给卸载后调用,此时页面已经没有相应的内容了,也没办法调用实例的方法了,已经完全移除了!")])])},[],!1,null,null,null);e.default=s.exports}}]);