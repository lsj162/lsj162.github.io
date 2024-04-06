import{_ as e,c as a,o as t,a6 as n}from"./chunks/framework.DwCPU-X7.js";const m=JSON.parse('{"title":"Document Event","description":"","frontmatter":{},"headers":[],"relativePath":"前端/HTML/备份/DOM 文档对象模型/Document Event/index.md","filePath":"前端/HTML/备份/DOM 文档对象模型/Document Event/index.md","lastUpdated":1712399324000}'),r={name:"前端/HTML/备份/DOM 文档对象模型/Document Event/index.md"},o=n('<h1 id="document-event" tabindex="-1">Document Event <a class="header-anchor" href="#document-event" aria-label="Permalink to &quot;Document Event&quot;">​</a></h1><p>列出了使用 addEventListener() 或为接口的事件处理器属性 oneventname 赋值的方式来监听的事件。</p><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><p>beforescriptexecute 在静态的 <code>&lt;script&gt;</code> 开始执行脚本时触发。</p><p>scroll 在滚动文档视图或元素时触发。</p><p>visibilitychange 在变前的内容变为可见、隐藏时触发。</p><p>wheel (en-US) 在用户在点击设备（通常为鼠标）上转动滚轮时触发。</p><h2 id="动画事件" tabindex="-1">动画事件 <a class="header-anchor" href="#动画事件" aria-label="Permalink to &quot;动画事件&quot;">​</a></h2><p>animationcancel (en-US) 在动画意外中止时触发。</p><p>animationend (en-US) 在动画正常完成时触发。</p><p>animationiteration (en-US) 在动画迭代完成时触发。</p><p>animationstart (en-US) 在动画开始时触发。</p><h2 id="剪切板事件" tabindex="-1">剪切板事件 <a class="header-anchor" href="#剪切板事件" aria-label="Permalink to &quot;剪切板事件&quot;">​</a></h2><p>copy (en-US) 在用户通过浏览器的用户界面使用复制操作时触发。</p><p>cut (en-US) 在用户通过浏览器的用户界面使用剪切操作时触发。</p><p>paste (en-US) 在用户通过浏览器的用户界面使用粘贴操作时触发。</p><h2 id="拖放事件" tabindex="-1">拖放事件 <a class="header-anchor" href="#拖放事件" aria-label="Permalink to &quot;拖放事件&quot;">​</a></h2><p>drag 在用户拖动元素或选择的文本时每几百毫秒触发一次。</p><p>dragend 在拖动操作结束（通过释放鼠标按钮或按下退出键））时触发。</p><p>dragenter 在拖动的元素或选择的文本进入有效的放置目标时触发。</p><p>dragleave 在拖动的元素或选择的文本离开有效的放置目标时触发。</p><p>dragover 在拖动的元素或选择的文本在有效的放置目标时触发（每几百毫秒）。</p><p>dragstart 在用户开始拖动元素或选择的文本时触发。</p><p>drop 在元素或选择的文本被放置在有效的放置目标时触发。</p><h2 id="全屏事件" tabindex="-1">全屏事件 <a class="header-anchor" href="#全屏事件" aria-label="Permalink to &quot;全屏事件&quot;">​</a></h2><p>fullscreenchange 在 Document 进入或退出全屏模式时触发。</p><p>fullscreenerror 在尝试进入或退出全屏模式而发生错误时触发。</p><h2 id="键盘事件" tabindex="-1">键盘事件 <a class="header-anchor" href="#键盘事件" aria-label="Permalink to &quot;键盘事件&quot;">​</a></h2><p>keydown (en-US) 在某个键被按下时触发。</p><p>keyup (en-US) 在释放按键时触发。</p><h2 id="加载和卸载事件" tabindex="-1">加载和卸载事件 <a class="header-anchor" href="#加载和卸载事件" aria-label="Permalink to &quot;加载和卸载事件&quot;">​</a></h2><p>DOMContentLoaded 在文档完全加载并解析后触发，无需等待样式表、图像和子框架完成加载。</p><p>readystatechange 在文档的 readyState 属性发生变化时触发。</p><h2 id="指针事件" tabindex="-1">指针事件 <a class="header-anchor" href="#指针事件" aria-label="Permalink to &quot;指针事件&quot;">​</a></h2><p>gotpointercapture (en-US) 在使用 setPointerCapture() 捕获元素时触发。</p><p>lostpointercapture (en-US) 在捕获指针释放时触发。</p><p>pointercancel (en-US) 在指针事件取消时触发。</p><p>pointerdown (en-US) 在指针变为活动状态时触发。</p><p>pointerenter (en-US) 在指针移入到元素或其子元素之一的命中测试边界时触发。</p><p>pointerleave (en-US) 在指针移出元素的命中测试边界时触发。</p><p>pointerlockchange 在指针被锁定或解锁时触发。</p><p>pointerlockerror (en-US) 在指针锁定失败时触发。</p><p>pointermove (en-US) 在指针坐标改变时触发。</p><p>pointerout (en-US) 在指正移除元素的命中测试边界（或其他原因）时触发。</p><p>pointerover (en-US) 在指针移入元素的命中测试边界时触发。</p><p>pointerup (en-US) 在指针不再活动时触发。</p><h2 id="选择事件" tabindex="-1">选择事件 <a class="header-anchor" href="#选择事件" aria-label="Permalink to &quot;选择事件&quot;">​</a></h2><p>selectionchange 在文档中的选中的文本发生改变时触发。</p><h2 id="触摸事件" tabindex="-1">触摸事件 <a class="header-anchor" href="#触摸事件" aria-label="Permalink to &quot;触摸事件&quot;">​</a></h2><p>touchcancel 在一个或多个接触点以特定于实现的方式中断（例如，创建了太多的接触点）时触发。</p><p>touchend 在从接触面移除一个或多个接触点时触发。</p><p>touchmove 在一个或多个接触点沿接触面移动时触发。</p><p>touchstart 在向接触面放置一个或多个接触点时触发。</p><h2 id="过渡事件" tabindex="-1">过渡事件 <a class="header-anchor" href="#过渡事件" aria-label="Permalink to &quot;过渡事件&quot;">​</a></h2><p>transitioncancel (en-US) 在 CSS 过渡取消时触发。</p><p>transitionend (en-US) 在 CSS 过渡完成时触发。</p><p>transitionrun (en-US) 在 CSS 过渡第一次创建时触发。</p><p>transitionstart (en-US) 在 CSS 过渡实际开始时触发。</p>',58),p=[o];function i(c,d,l,h,s,u){return t(),a("div",null,p)}const _=e(r,[["render",i]]);export{m as __pageData,_ as default};
