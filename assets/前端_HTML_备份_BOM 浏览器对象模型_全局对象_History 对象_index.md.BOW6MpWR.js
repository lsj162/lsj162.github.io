import{_ as a,c as e,o as t,a5 as r}from"./chunks/framework.DALfHeHd.js";const f=JSON.parse('{"title":"History","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/HTML/备份/BOM 浏览器对象模型/全局对象/History 对象/index.md","filePath":"前端/HTML/备份/BOM 浏览器对象模型/全局对象/History 对象/index.md","lastUpdated":1716891854000}'),o={name:"前端/HTML/备份/BOM 浏览器对象模型/全局对象/History 对象/index.md"},i=r('<h1 id="history" tabindex="-1">History <a class="header-anchor" href="#history" aria-label="Permalink to &quot;History&quot;">​</a></h1><p>History 接口允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录。</p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><p>History 接口不继承于任何属性。</p><h3 id="length-只读" tabindex="-1">length 只读 <a class="header-anchor" href="#length-只读" aria-label="Permalink to &quot;length 只读&quot;">​</a></h3><p>返回一个整数（Integer），该整数表示会话历史中元素的数目，包括当前加载的页。例如，在一个新的选项卡加载的一个页面中，这个属性返回 1。</p><h3 id="scrollrestoration" tabindex="-1">scrollRestoration <a class="header-anchor" href="#scrollrestoration" aria-label="Permalink to &quot;scrollRestoration&quot;">​</a></h3><p>允许 Web 应用程序在历史导航上显式地设置默认滚动恢复行为。此属性可以是自动的（auto）或者手动的（manual）。</p><h3 id="state-只读" tabindex="-1">state 只读 <a class="header-anchor" href="#state-只读" aria-label="Permalink to &quot;state 只读&quot;">​</a></h3><p>返回一个表示历史堆栈顶部的状态的任意（any）值。这是一种不必等待 popstate 事件而查看状态的方式。</p><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><p>History 接口不继承任何方法。</p><h3 id="back" tabindex="-1">back() <a class="header-anchor" href="#back" aria-label="Permalink to &quot;back()&quot;">​</a></h3><p>此异步方法转到浏览器会话历史的上一页，与用户单击浏览器的 Back 按钮的行为相同。等价于 history.go(-1)。</p><p>调用此方法回到会话历史的第一页之前没有效果并且不会引发异常。</p><h3 id="forward" tabindex="-1">forward() <a class="header-anchor" href="#forward" aria-label="Permalink to &quot;forward()&quot;">​</a></h3><p>此### 异步方法转到浏览器会话历史的下一页，与用户单击浏览器的 Forward 按钮的行为相同。等价于 history.go(1)。</p><p>调用此方法超越浏览器历史记录中最新的页面没有效果并且不会引发异常。</p><h3 id="go" tabindex="-1">go() <a class="header-anchor" href="#go" aria-label="Permalink to &quot;go()&quot;">​</a></h3><p>通过当前页面的相对位置从浏览器历史记录（会话记录）异步加载页面。比如：参数为 -1 的时候为上一页，参数为 1 的时候为下一页。当你指定了一个越界值（例如：当会话历史记录中没有之前访问的页面时，则传参的值为 -1，那么这个方法没有任何效果也不会报错。调用没有参数的 go() 方法或者参数值为 0 时，重新载入当前页面。Internet Explorer 允许你指定一个字符串，而不是整数，以转到历史记录列表中的特定 URL。</p><h3 id="pushstate" tabindex="-1">pushState() <a class="header-anchor" href="#pushstate" aria-label="Permalink to &quot;pushState()&quot;">​</a></h3><p>按指定的名称和 URL（如果提供该参数）将数据 push 进会话历史栈，数据被 DOM 进行不透明处理；你可以指定任何可以被序列化的 javascript 对象。请注意，除了 Safari 所有浏览器现在都忽略了 title 参数。更多的信息，请看使用 History API。</p><h3 id="replacestate" tabindex="-1">replaceState() <a class="header-anchor" href="#replacestate" aria-label="Permalink to &quot;replaceState()&quot;">​</a></h3><p>按指定的数据、名称和 URL（如果提供该参数），更新 history 栈上最新的条目。这个数据被 DOM 进行了不透明处理。你可以指定任何可以被序列化的 javascript 对象。请注意，除了 Safari 所有浏览器现在都忽略了 title 参数。更多的信息，请看使用 History API。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History" target="_blank" rel="noreferrer">MDN 官网：https://developer.mozilla.org</a></p>',26),s=[i];function l(h,n,d,c,p,u){return t(),e("div",null,s)}const _=a(o,[["render",l]]);export{f as __pageData,_ as default};
