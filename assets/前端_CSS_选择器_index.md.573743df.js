import{_ as s,o as a,c as n,S as l}from"./chunks/framework.2524ba1c.js";const d=JSON.parse('{"title":"CSS 选择器","description":"","frontmatter":{},"headers":[],"relativePath":"前端/CSS/选择器/index.md","filePath":"前端/CSS/选择器/index.md"}'),p={name:"前端/CSS/选择器/index.md"},o=l(`<h1 id="css-选择器" tabindex="-1">CSS 选择器 <a class="header-anchor" href="#css-选择器" aria-label="Permalink to &quot;CSS 选择器&quot;">​</a></h1><p>CSS 选择器，规定了 CSS 规则会被应用到哪些元素上。</p><div class="info custom-block"><p class="custom-block-title">备注</p><p>暂时没有能够选择 父元素、父元素的同级元素，或 父元素的同级元素的子元素 的选择器或者组合器。</p></div><h2 id="基本选择器" tabindex="-1">基本选择器 <a class="header-anchor" href="#基本选择器" aria-label="Permalink to &quot;基本选择器&quot;">​</a></h2><p>通用选择器</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>元素选择器</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 所有 &lt;a&gt; 元素。*/</span></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>类选择器</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 所有含有 class=&quot;spacious&quot; 类的元素 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">spacious</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>ID 选择器</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* id 为 &quot;demo&quot; 的元素会被选中 */</span></span>
<span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">demo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> solid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>属性选择器</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 存在 title 属性的 &lt;a&gt; 元素 */</span></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> purple</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="分组选择器-grouping-selector" tabindex="-1">分组选择器（Grouping selector） <a class="header-anchor" href="#分组选择器-grouping-selector" aria-label="Permalink to &quot;分组选择器（Grouping selector）&quot;">​</a></h2><p>CSS 选择器列表（,）选择所有匹配的节点。选择器列表是以逗号分隔的多个选择器所组成的列表。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">span</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> solid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="组合器-combinator" tabindex="-1">组合器（Combinator） <a class="header-anchor" href="#组合器-combinator" aria-label="Permalink to &quot;组合器（Combinator）&quot;">​</a></h2><h3 id="后代选择器" tabindex="-1">后代选择器 <a class="header-anchor" href="#后代选择器" aria-label="Permalink to &quot;后代选择器&quot;">​</a></h3><p>后代组合器（通常用单个空格（&quot; &quot;）字符表示）</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* List items that are descendants of the &quot;my-things&quot; list */</span></span>
<span class="line"><span style="color:#FFCB6B;">ul</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">my-things</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="子组合器" tabindex="-1">子组合器 <a class="header-anchor" href="#子组合器" aria-label="Permalink to &quot;子组合器&quot;">​</a></h3><p>子组合器（&gt;）被放在两个 CSS 选择器之间。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 选择属于“my-things”类的无序列表（ul）的直接子列表元素（li） */</span></span>
<span class="line"><span style="color:#FFCB6B;">ul</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">my-things</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="兄弟选择器" tabindex="-1">兄弟选择器 <a class="header-anchor" href="#兄弟选择器" aria-label="Permalink to &quot;兄弟选择器&quot;">​</a></h3><p>兄弟选择器（~）将两个选择器分开</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 在任意图像后的兄弟段落 */</span></span>
<span class="line"><span style="color:#FFCB6B;">img</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="相邻兄弟选择器" tabindex="-1">相邻兄弟选择器 <a class="header-anchor" href="#相邻兄弟选择器" aria-label="Permalink to &quot;相邻兄弟选择器&quot;">​</a></h3><p>相邻兄弟选择器 (+) 介于两个选择器之间，当第二个元素紧跟在第一个元素之后</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 图片后面紧跟着的段落将被选中 */</span></span>
<span class="line"><span style="color:#FFCB6B;">img</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> bold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="伪选择器-pseudo" tabindex="-1">伪选择器（Pseudo） <a class="header-anchor" href="#伪选择器-pseudo" aria-label="Permalink to &quot;伪选择器（Pseudo）&quot;">​</a></h2><h3 id="伪类" tabindex="-1">伪类 <a class="header-anchor" href="#伪类" aria-label="Permalink to &quot;伪类&quot;">​</a></h3><p>CSS 伪类是添加到选择器的关键字</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 用户的指针悬停在其上的任何按钮 */</span></span>
<span class="line"><span style="color:#FFCB6B;">button</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="伪元素" tabindex="-1">伪元素 <a class="header-anchor" href="#伪元素" aria-label="Permalink to &quot;伪元素&quot;">​</a></h3><p>伪元素是一个附加至选择器末的关键词</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 每一个 &lt;p&gt; 元素的第一行。 */</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">first-line</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> uppercase</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,37),e=[o];function t(c,r,i,y,C,D){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};
