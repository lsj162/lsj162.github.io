import{_ as a,o as i,c as e,R as s}from"./chunks/framework.FQOLfzW2.js";const u=JSON.parse('{"title":"SVG","description":"","frontmatter":{},"headers":[],"relativePath":"图形编程技术/Svg/index.md","filePath":"图形编程技术/Svg/index.md"}'),l={name:"图形编程技术/Svg/index.md"},t=s(`<h1 id="svg" tabindex="-1">SVG <a class="header-anchor" href="#svg" aria-label="Permalink to &quot;SVG&quot;">​</a></h1><p>SVG 是一种 XML 语言，类似 XHTML，可以用来绘制可缩放的矢量图形。</p><h2 id="用途" tabindex="-1">用途 <a class="header-anchor" href="#用途" aria-label="Permalink to &quot;用途&quot;">​</a></h2><ul><li>网页图形：通常用于绘制图形、图标和其他矢量图形元素。</li><li>数据可视化：SVG 可用于创建交互式数据可视化图表，如折线图、柱状图、饼图和地图。</li><li>动画：SVG 支持动画功能，允许你创建图形的过渡和动态效果。</li><li>印刷和出版：由于 SVG 是矢量图形格式，因此它适用于印刷和出版领域。</li><li>交互性：SVG 可以与 JavaScript 和 CSS 结合使用，以实现交互性。这使得创建交互式用户界面元素和动态图形成为可能。</li></ul><h2 id="svg-的优点" tabindex="-1">SVG 的优点 <a class="header-anchor" href="#svg-的优点" aria-label="Permalink to &quot;SVG 的优点&quot;">​</a></h2><p>与在浏览器环境中使用的传统位图图形（例如 JPEG、GIF 和 PNG）相比，SVG 具有一些优势，原因如下：</p><ul><li>比位图小得多，因此下载时间更快。</li><li>可以缩放图形以适应不同的显示设备，而不会出现模糊</li><li>客户端渲染快</li><li>用户可以与图形交互并更改图形</li></ul><h2 id="声明-svg" tabindex="-1">声明 svg <a class="header-anchor" href="#声明-svg" aria-label="Permalink to &quot;声明 svg&quot;">​</a></h2><p>作为 XML 的一种方言，SVG 必须正确的配置命名空间（在 xmlns 属性中绑定）。请阅读命名空间速成页面获取更多信息。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xmlns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.w3.org/2000/svg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;!-- more tags here --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li>入门</li><li>坐标定位</li><li>基本形状</li><li>路径</li><li>填充和边框</li><li>渐变</li><li>Patterns</li><li>文本</li><li>基础变形</li><li>剪切和遮罩</li><li>滤镜效果</li><li>SVG 字体</li><li>SVG image 元素</li><li>SVG 和 CSS</li></ul><h1 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h1><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial" target="_blank" rel="noreferrer">MDN 官网：https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial</a></p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Namespaces_Crash_Course" target="_blank" rel="noreferrer">MDN 官网：https://developer.mozilla.org/zh-CN/docs/Web/SVG/Namespaces_Crash_Course</a></p><p><a href="https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html" target="_blank" rel="noreferrer">https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html</a></p><h2 id="书籍" tabindex="-1">书籍 <a class="header-anchor" href="#书籍" aria-label="Permalink to &quot;书籍&quot;">​</a></h2>`,17),r=[t];function h(n,o,p,d,c,g){return i(),e("div",null,r)}const S=a(l,[["render",h]]);export{u as __pageData,S as default};
