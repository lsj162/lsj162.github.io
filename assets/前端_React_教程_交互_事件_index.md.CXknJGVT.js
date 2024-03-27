import{_ as s,c as a,o as i,a5 as t}from"./chunks/framework.AYenO5Lm.js";const E=JSON.parse('{"title":"菜单","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/React/教程/交互/事件/index.md","filePath":"前端/React/教程/交互/事件/index.md"}'),e={name:"前端/React/教程/交互/事件/index.md"},n=t('<h1 id="菜单" tabindex="-1">菜单 <a class="header-anchor" href="#菜单" aria-label="Permalink to &quot;菜单&quot;">​</a></h1><p>React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：</p><p>React 事件的命名采用小驼峰式（camelCase），而不是纯小写。 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。</p><p>传统的 HTML：</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onclick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;activateLasers()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Activate Lasers&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>在 React 中略微不同：</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{activateLasers}&gt;Activate Lasers&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>',7),p=[n];function l(h,k,c,d,o,r){return i(),a("div",null,p)}const _=s(e,[["render",l]]);export{E as __pageData,_ as default};
