import{_ as s,o as n,c as a,S as l}from"./chunks/framework.2524ba1c.js";const F=JSON.parse('{"title":"菜单","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/TypeScript/基本用法/Enum 类型/index.md","filePath":"前端/TypeScript/基本用法/Enum 类型/index.md"}'),p={name:"前端/TypeScript/基本用法/Enum 类型/index.md"},o=l(`<h1 id="菜单" tabindex="-1">菜单 <a class="header-anchor" href="#菜单" aria-label="Permalink to &quot;菜单&quot;">​</a></h1><p>TypeScript 就设计了 Enum 结构，用来将相关常量放在一个容器里面，方便使用。</p><p>Enum 成员默认不必赋值，系统会从零开始逐一递增，按照顺序为每个成员赋值，比如 0、1、2……</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  Red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// 0</span></span>
<span class="line"><span style="color:#A6ACCD;">  Green</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  Blue     </span><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>调用</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Color</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Green</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 等同于</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Color[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Green</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span></code></pre></div><h2 id="同名-enum-的合并" tabindex="-1">同名 Enum 的合并 <a class="header-anchor" href="#同名-enum-的合并" aria-label="Permalink to &quot;同名 Enum 的合并&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Foo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  A</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Foo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  B </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 等同于</span></span>
<span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Foo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  A</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  B </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,8),e=[o];function t(c,r,i,y,C,D){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
