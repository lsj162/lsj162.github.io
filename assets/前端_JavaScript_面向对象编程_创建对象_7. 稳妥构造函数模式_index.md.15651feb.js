import{_ as s,o as n,c as a,S as o}from"./chunks/framework.2524ba1c.js";const C=JSON.parse('{"title":"稳妥构造函数模式","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/JavaScript/面向对象编程/创建对象/7. 稳妥构造函数模式/index.md","filePath":"前端/JavaScript/面向对象编程/创建对象/7. 稳妥构造函数模式/index.md"}'),l={name:"前端/JavaScript/面向对象编程/创建对象/7. 稳妥构造函数模式/index.md"},p=o(`<h1 id="稳妥构造函数模式" tabindex="-1">稳妥构造函数模式 <a class="header-anchor" href="#稳妥构造函数模式" aria-label="Permalink to &quot;稳妥构造函数模式&quot;">​</a></h1><p>稳妥对象最适合在一些安全环境中（这些环境会禁止使用 this 和 new），或防止数据被其他应用程序改动时使用</p><p>稳妥构造函数模式和寄生模式类似，有两点不同:一是创建对象的实例方法不引用 this，而是不使用 new 操作符调用构造函数</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">job</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">o</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Object</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">o</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">o</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">job</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">job</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">o</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">o</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> person1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#A6ACCD;">(‘Jiang’</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ‘student’)</span></span>
<span class="line"><span style="color:#A6ACCD;">person1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayName</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><p>和寄生构造函数模式一样，这样创建出来的对象与构造函数之间没有什么关系，instanceof 操作符对他们没有意义</p>`,5),e=[p];function t(c,r,y,F,D,A){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};
