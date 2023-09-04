import{_ as s,o as a,c as n,S as l}from"./chunks/framework.2524ba1c.js";const A=JSON.parse('{"title":"菜单","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/TypeScript/模块/index.md","filePath":"前端/TypeScript/模块/index.md"}'),p={name:"前端/TypeScript/模块/index.md"},o=l(`<h1 id="菜单" tabindex="-1">菜单 <a class="header-anchor" href="#菜单" aria-label="Permalink to &quot;菜单&quot;">​</a></h1><p>从 ECMAScript 2015 开始，JavaScript 有了模块的概念。TypeScript 也有这个概念。</p><p>模块在自己的作用域内执行，而不是在全局作用域内执行；这意味着模块中声明的变量、函数、类等在模块外部不可见，除非使用其中一种形式显式 export 导出。相反，要使用从不同模块导出的变量、函数、类、接口等，必须使用其中一种形式 import 导入。</p><p>模块是声明性的；模块之间的关系是根据文件级别的导入和导出来指定的。</p><p>模块使用模块加载器相互导入。在运行时，模块加载器负责在执行模块之前查找并执行模块的所有依赖项。JavaScript 中使用的著名模块加载器是 Node.js 的 CommonJS 模块加载器和 Web 应用程序中 AMD 模块的 RequireJS 加载器。</p><p>在 TypeScript 中，就像在 ECMAScript 2015 中一样，任何包含顶级 import 或 的文件 export 都被视为模块。相反，没有任何顶级 import 或 export 声明的文件被视为其内容在全局范围内可用的脚本（因此也适用于模块）。</p><h2 id="简单例子" tabindex="-1">简单例子 <a class="header-anchor" href="#简单例子" aria-label="Permalink to &quot;简单例子&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Validation.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StringValidator</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">isAcceptable</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// LettersOnlyValidator.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">StringValidator</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./Validation</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> lettersRegexp </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">A-Za-z</span><span style="color:#89DDFF;">]+</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LettersOnlyValidator</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StringValidator</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">isAcceptable</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lettersRegexp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><a href="https://www.typescriptlang.org/docs/handbook/modules.html" target="_blank" rel="noreferrer">官方教程：https://www.typescriptlang.org/docs/handbook/modules.html</a></p><p><a href="https://wangdoc.com/typescript/module" target="_blank" rel="noreferrer">阮一峰教程：https://wangdoc.com/typescript/module</a></p>`,10),t=[o];function e(r,c,i,y,D,F){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{A as __pageData,d as default};
