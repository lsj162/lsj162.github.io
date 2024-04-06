import{_ as e,c as r,o as t,a6 as a}from"./chunks/framework.DwCPU-X7.js";const P=JSON.parse('{"title":"浏览器的多进程架构","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/HTML/备份/BOM 浏览器对象模型/浏览器工作原理/浏览器架构/index.md","filePath":"前端/HTML/备份/BOM 浏览器对象模型/浏览器工作原理/浏览器架构/index.md","lastUpdated":1712399324000}'),o={name:"前端/HTML/备份/BOM 浏览器对象模型/浏览器工作原理/浏览器架构/index.md"},s=a('<h1 id="浏览器的多进程架构" tabindex="-1">浏览器的多进程架构 <a class="header-anchor" href="#浏览器的多进程架构" aria-label="Permalink to &quot;浏览器的多进程架构&quot;">​</a></h1><p>假如我们去开发一个浏览器，它的架构可以是一个单进程多线程的应用程序，也可以是一个使用 IPC 通信的多进程应用程序。</p><p>不同的浏览器使用不同的架构，下面主要以 Chrome 为例，介绍浏览器的多进程架构。</p><p>在 Chrome 中，主要的进程有 4 个：</p><p>浏览器进程 （Browser Process）：负责浏览器的 Tab 的前进、后退、地址栏、书签栏的工作和处理浏览器的一些不可见的底层操作，比如网络请求和文件访问。 渲染进程 （Renderer Process）：负责一个 Tab 内的显示相关的工作，也称渲染引擎。 插件进程 （Plugin Process）：负责控制网页使用到的插件 GPU 进程 （GPU Process）：负责处理整个应用程序的 GPU 任务</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="https://tsejx.github.io/javascript-guidebook/browser-object-model/browser-working-principle/browser-architecture#%E6%B5%8F%E8%A7%88%E5%99%A8%E6%9E%B6%E6%9E%84-1" target="_blank" rel="noreferrer">https://tsejx.github.io</a></p>',7),i=[s];function n(c,d,p,_,h,l){return t(),r("div",null,i)}const b=e(o,[["render",n]]);export{P as __pageData,b as default};
