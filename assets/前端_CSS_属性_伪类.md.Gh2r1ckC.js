import{_ as a,c as s,o as n,a6 as p}from"./chunks/framework.DwCPU-X7.js";const g=JSON.parse('{"title":"伪类","description":"","frontmatter":{},"headers":[],"relativePath":"前端/CSS/属性/伪类.md","filePath":"前端/CSS/属性/伪类.md"}'),e={name:"前端/CSS/属性/伪类.md"},l=p(`<h2 id="outline-deep" tabindex="-1">outline: deep <a class="header-anchor" href="#outline-deep" aria-label="Permalink to &quot;outline: deep&quot;">​</a></h2><p><a href="/前端/CSS/">返回</a></p><h1 id="伪类" tabindex="-1">伪类 <a class="header-anchor" href="#伪类" aria-label="Permalink to &quot;伪类&quot;">​</a></h1><p>CSS 伪类是添加到选择器的关键字，用于指定所选元素的特殊状态。</p><h2 id="常见的伪类" tabindex="-1">常见的伪类： <a class="header-anchor" href="#常见的伪类" aria-label="Permalink to &quot;常见的伪类：&quot;">​</a></h2><h3 id="链接" tabindex="-1">链接 <a class="header-anchor" href="#链接" aria-label="Permalink to &quot;链接&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>a:link {</span></span>
<span class="line"><span>  /* 未访问链接 */</span></span>
<span class="line"><span>  color: blue;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>a:visited {</span></span>
<span class="line"><span>  /* 已访问链接 */</span></span>
<span class="line"><span>  color: purple;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>a:hover {</span></span>
<span class="line"><span>  /* 用户鼠标悬停 */</span></span>
<span class="line"><span>  background: yellow;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>a:active {</span></span>
<span class="line"><span>  /* 激活链接 */</span></span>
<span class="line"><span>  color: red;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="兄弟元素" tabindex="-1">兄弟元素 <a class="header-anchor" href="#兄弟元素" aria-label="Permalink to &quot;兄弟元素&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>:first-child CSS 伪类表示在一组兄弟元素中的第一个元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:last-child CSS 伪类代表一组兄弟元素中的最后元素。</span></span></code></pre></div><h3 id="元素显示状态伪类" tabindex="-1">元素显示状态伪类 <a class="header-anchor" href="#元素显示状态伪类" aria-label="Permalink to &quot;元素显示状态伪类&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>:fullscreen</span></span>
<span class="line"><span>匹配当前处于全屏模式的元素。</span></span></code></pre></div><h3 id="语言的伪类" tabindex="-1">语言的伪类 <a class="header-anchor" href="#语言的伪类" aria-label="Permalink to &quot;语言的伪类&quot;">​</a></h3><p>这些伪类根据文档语言而反应，可以基于语言或书写方向来选择元素。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>:dir() (en-US)</span></span>
<span class="line"><span>方向性伪类基于由文档语言所确定的其方向性来选择元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:lang() (en-US)</span></span>
<span class="line"><span>基于其内容语言来选择元素。</span></span></code></pre></div><h3 id="树结构的伪类" tabindex="-1">树结构的伪类 <a class="header-anchor" href="#树结构的伪类" aria-label="Permalink to &quot;树结构的伪类&quot;">​</a></h3><p>这些伪类与文档树中的元素位置有关。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>:root</span></span>
<span class="line"><span>表示文档的根元素。在 HTML 中这通常是 &lt;html&gt; 元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:empty</span></span>
<span class="line"><span>表示除空白字符外没有子元素的元素。</span></span></code></pre></div><h3 id="函数式伪类" tabindex="-1">函数式伪类 <a class="header-anchor" href="#函数式伪类" aria-label="Permalink to &quot;函数式伪类&quot;">​</a></h3><p>这些伪类接受可容错选择器列表作为参数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>:is()</span></span>
<span class="line"><span>匹配与提供的列表中的任何选择器匹配的任何元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:not()</span></span>
<span class="line"><span>表示其参数中未表示的任何元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:where()</span></span>
<span class="line"><span>优先级调整伪类匹配与提供的列表中的任何选择器匹配的任何元素，但不添加任何优先级权重。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:has()</span></span>
<span class="line"><span>该关系伪类表示与任何一个与锚定的元素的相对选择器相匹配（如果有的话）的元素。</span></span></code></pre></div>`,20),i=[l];function t(c,o,h,d,r,u){return n(),s("div",null,i)}const v=a(e,[["render",t]]);export{g as __pageData,v as default};
