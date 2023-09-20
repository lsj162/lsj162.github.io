import{_ as s,o as a,c as n,S as l}from"./chunks/framework.2524ba1c.js";const y=JSON.parse('{"title":"伪类","description":"","frontmatter":{},"headers":[],"relativePath":"前端/CSS/伪类/index.md","filePath":"前端/CSS/伪类/index.md"}'),e={name:"前端/CSS/伪类/index.md"},p=l(`<h1 id="伪类" tabindex="-1">伪类 <a class="header-anchor" href="#伪类" aria-label="Permalink to &quot;伪类&quot;">​</a></h1><p>CSS 伪类是添加到选择器的关键字，用于指定所选元素的特殊状态。</p><h2 id="常见的伪类" tabindex="-1">常见的伪类： <a class="header-anchor" href="#常见的伪类" aria-label="Permalink to &quot;常见的伪类：&quot;">​</a></h2><h3 id="链接" tabindex="-1">链接 <a class="header-anchor" href="#链接" aria-label="Permalink to &quot;链接&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">a:link {</span></span>
<span class="line"><span style="color:#A6ACCD;">  /* 未访问链接 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: blue;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">a:visited {</span></span>
<span class="line"><span style="color:#A6ACCD;">  /* 已访问链接 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: purple;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">a:hover {</span></span>
<span class="line"><span style="color:#A6ACCD;">  /* 用户鼠标悬停 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  background: yellow;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">a:active {</span></span>
<span class="line"><span style="color:#A6ACCD;">  /* 激活链接 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: red;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="兄弟元素" tabindex="-1">兄弟元素 <a class="header-anchor" href="#兄弟元素" aria-label="Permalink to &quot;兄弟元素&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">:first-child CSS 伪类表示在一组兄弟元素中的第一个元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">:last-child CSS 伪类代表一组兄弟元素中的最后元素。</span></span></code></pre></div><h3 id="元素显示状态伪类" tabindex="-1">元素显示状态伪类 <a class="header-anchor" href="#元素显示状态伪类" aria-label="Permalink to &quot;元素显示状态伪类&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">:fullscreen</span></span>
<span class="line"><span style="color:#A6ACCD;">匹配当前处于全屏模式的元素。</span></span></code></pre></div><h3 id="语言的伪类" tabindex="-1">语言的伪类 <a class="header-anchor" href="#语言的伪类" aria-label="Permalink to &quot;语言的伪类&quot;">​</a></h3><p>这些伪类根据文档语言而反应，可以基于语言或书写方向来选择元素。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">:dir() (en-US)</span></span>
<span class="line"><span style="color:#A6ACCD;">方向性伪类基于由文档语言所确定的其方向性来选择元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">:lang() (en-US)</span></span>
<span class="line"><span style="color:#A6ACCD;">基于其内容语言来选择元素。</span></span></code></pre></div><h3 id="树结构的伪类" tabindex="-1">树结构的伪类 <a class="header-anchor" href="#树结构的伪类" aria-label="Permalink to &quot;树结构的伪类&quot;">​</a></h3><p>这些伪类与文档树中的元素位置有关。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">:root</span></span>
<span class="line"><span style="color:#A6ACCD;">表示文档的根元素。在 HTML 中这通常是 &lt;html&gt; 元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">:empty</span></span>
<span class="line"><span style="color:#A6ACCD;">表示除空白字符外没有子元素的元素。</span></span></code></pre></div><h3 id="函数式伪类" tabindex="-1">函数式伪类 <a class="header-anchor" href="#函数式伪类" aria-label="Permalink to &quot;函数式伪类&quot;">​</a></h3><p>这些伪类接受可容错选择器列表作为参数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">:is()</span></span>
<span class="line"><span style="color:#A6ACCD;">匹配与提供的列表中的任何选择器匹配的任何元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">:not()</span></span>
<span class="line"><span style="color:#A6ACCD;">表示其参数中未表示的任何元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">:where()</span></span>
<span class="line"><span style="color:#A6ACCD;">优先级调整伪类匹配与提供的列表中的任何选择器匹配的任何元素，但不添加任何优先级权重。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">:has()</span></span>
<span class="line"><span style="color:#A6ACCD;">该关系伪类表示与任何一个与锚定的元素的相对选择器相匹配（如果有的话）的元素。</span></span></code></pre></div>`,18),o=[p];function t(c,i,r,C,A,d){return a(),n("div",null,o)}const D=s(e,[["render",t]]);export{y as __pageData,D as default};
