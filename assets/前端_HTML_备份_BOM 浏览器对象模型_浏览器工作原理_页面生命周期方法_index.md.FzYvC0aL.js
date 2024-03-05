import{_ as a,o as e,c as o,R as t}from"./chunks/framework.FQOLfzW2.js";const f=JSON.parse('{"title":"页面生命周期方法","description":"","frontmatter":{},"headers":[],"relativePath":"前端/HTML/备份/BOM 浏览器对象模型/浏览器工作原理/页面生命周期方法/index.md","filePath":"前端/HTML/备份/BOM 浏览器对象模型/浏览器工作原理/页面生命周期方法/index.md"}'),d={name:"前端/HTML/备份/BOM 浏览器对象模型/浏览器工作原理/页面生命周期方法/index.md"},n=t('<h1 id="页面生命周期方法" tabindex="-1">页面生命周期方法 <a class="header-anchor" href="#页面生命周期方法" aria-label="Permalink to &quot;页面生命周期方法&quot;">​</a></h1><p>HTML 页面的生命周期包含四个重要事件：</p><h2 id="domcontentloaded" tabindex="-1">DOMContentLoaded <a class="header-anchor" href="#domcontentloaded" aria-label="Permalink to &quot;DOMContentLoaded&quot;">​</a></h2><p>浏览器已完全加载 HTML，并构建了 DOM 树，但诸如 &lt;img&gt; 和样式表之类的外部资源可能尚未加载完成</p><p>DOM 已经就绪，因此处理程序可以查找 DOM 节点，并初始化接口</p><h2 id="load" tabindex="-1">load <a class="header-anchor" href="#load" aria-label="Permalink to &quot;load&quot;">​</a></h2><p>浏览器不仅加载完成了 HTML，还加载完成了所有外部资源</p><p>外部资源已加载完成，样式已被应用，图片大小也已知了</p><h2 id="beforeunload" tabindex="-1">beforeunload <a class="header-anchor" href="#beforeunload" aria-label="Permalink to &quot;beforeunload&quot;">​</a></h2><p>当用户正在离开页面时触发</p><p>用户正在离开，我们可以检查用户是否保存了更改，并询问他是否真的要离开</p><h2 id="unload" tabindex="-1">unload <a class="header-anchor" href="#unload" aria-label="Permalink to &quot;unload&quot;">​</a></h2><p>当用户正在离开页面时触发</p><p>用户几乎已经离开了，但是我们仍然可以启动一些操作，例如发送统计数据</p>',14),r=[n];function l(i,c,h,s,p,_){return e(),o("div",null,r)}const m=a(d,[["render",l]]);export{f as __pageData,m as default};
