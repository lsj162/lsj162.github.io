import{_ as s,o as a,c as n,S as l}from"./chunks/framework.2524ba1c.js";const A=JSON.parse('{"title":"WebGL","description":"","frontmatter":{},"headers":[],"relativePath":"图形编程技术/WebGL/index.md","filePath":"图形编程技术/WebGL/index.md"}'),o={name:"图形编程技术/WebGL/index.md"},p=l(`<h1 id="webgl" tabindex="-1">WebGL <a class="header-anchor" href="#webgl" aria-label="Permalink to &quot;WebGL&quot;">​</a></h1><p>WebGL (Web 图形库) 是一个用于绘制交互式 2D/3D 图形的 JavaScript API ，基于 OpenGL ES 2.0。目前所有主流 浏览器 都支持 WebGL，即便如此，WebGL 是否可用还是取决于硬件设备等其他因素（比如 GPU 是否支持 WebGL）。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>WebGL 支持 HTML 的 canvas 标签的浏览器中，不需要安装任何插件，便可以使用基于 OpenGL ES 2.0 的 API 在 canvas 中进行 2D 和 3D 渲染。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onload</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">main</span><span style="color:#C3E88D;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">glcanvas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">640</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">480</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    你的浏览器似乎不支持或者禁用了 HTML5 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">&amp;lt;canvas&amp;gt;</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 元素。</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 从这里开始</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">canvas</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#glcanvas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 初始化 WebGL 上下文</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">gl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getContext</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webgl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 确认 WebGL 支持性</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">gl</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">无法初始化 WebGL，你的浏览器、操作系统或硬件等可能不支持 WebGL。</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 使用完全不透明的黑色清除所有图像</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">gl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clearColor</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0.0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1.0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 用上面指定的颜色清除缓冲区</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">gl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">gl</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">COLOR_BUFFER_BIT</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="用途" tabindex="-1">用途 <a class="header-anchor" href="#用途" aria-label="Permalink to &quot;用途&quot;">​</a></h2><ul><li>三维游戏开发：WebGL 在创建在线三维游戏方面非常有用。</li><li>三维建模和可视化：WebGL 可以用于创建三维建模工具、虚拟现实演示、室内设计和三维模型的在线查看。</li><li>虚拟现实（VR）和增强现实（AR）：WebGL 可以与 WebXR API 集成，以支持虚拟现实和增强现实应用程序的开发。</li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Tutorial" target="_blank" rel="noreferrer">MDN 文档：https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Tutorial</a></p><p><a href="https://www.khronos.org/webgl/" target="_blank" rel="noreferrer">官网：https://www.khronos.org/webgl/</a></p>`,11),e=[p];function t(c,r,F,y,D,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
