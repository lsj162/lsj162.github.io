import{_ as a,c as s,o as n,a5 as p}from"./chunks/framework.AYenO5Lm.js";const b=JSON.parse('{"title":"词法语法","description":"","frontmatter":{},"headers":[],"relativePath":"前端/JavaScript/备份/基本语法/词法语法/index.md","filePath":"前端/JavaScript/备份/基本语法/词法语法/index.md"}'),e={name:"前端/JavaScript/备份/基本语法/词法语法/index.md"},l=p(`<h1 id="词法语法" tabindex="-1">词法语法 <a class="header-anchor" href="#词法语法" aria-label="Permalink to &quot;词法语法&quot;">​</a></h1><h2 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h2><p>JavaScript 是区分大小写的，并使用 Unicode 字符集。</p><p>在 JavaScript 中，指令被称为语句，并用分号（;）进行分隔。独占一行的话，那么分号是可以省略的。</p><h2 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h2><p>Javascript 注释的语法和 C++ 或许多其他语言类似：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 单行注释</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 这是一个更长的，</span></span>
<span class="line"><span>   多行注释</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 然而，你不能，/* 嵌套注释 */ 语法错误 */</span></span></code></pre></div><p>在代码执行过程中，注释将被自动跳过（不执行）。</p><h2 id="声明" tabindex="-1">声明 <a class="header-anchor" href="#声明" aria-label="Permalink to &quot;声明&quot;">​</a></h2><p>JavaScript 有三种声明方式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var</span></span>
<span class="line"><span>声明一个变量，可选初始化一个值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let</span></span>
<span class="line"><span>声明一个块作用域的局部变量，可选初始化一个值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const</span></span>
<span class="line"><span>声明一个块作用域的只读常量。</span></span></code></pre></div><h2 id="字面量" tabindex="-1">字面量 <a class="header-anchor" href="#字面量" aria-label="Permalink to &quot;字面量&quot;">​</a></h2><p>字面量（Literal），又名直接量，即程序中直接使用的数据值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Null 字面量</span></span>
<span class="line"><span>const n = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Undefined 字面量</span></span>
<span class="line"><span>const u = undefined;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Boolean 布尔值字面量</span></span>
<span class="line"><span>const b1 = true;</span></span>
<span class="line"><span>const b2 = false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Number 数值字面量</span></span>
<span class="line"><span>const num = 1;</span></span>
<span class="line"><span>const nan = NaN;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// String 字符串字面量</span></span>
<span class="line"><span>const hello = &#39;hello&#39;;</span></span>
<span class="line"><span>const world = &#39;world&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Regexp 正则字面量</span></span>
<span class="line"><span>const reg = /pattern/;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Template Literal 模版字面量</span></span>
<span class="line"><span>const temp = \`hello, \${world}\`</span></span></code></pre></div>`,14),i=[l];function t(c,o,r,d,h,u){return n(),s("div",null,i)}const v=a(e,[["render",t]]);export{b as __pageData,v as default};
