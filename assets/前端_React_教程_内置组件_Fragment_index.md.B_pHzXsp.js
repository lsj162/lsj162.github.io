import{_ as t,c as s,o as a,a5 as i}from"./chunks/framework.AYenO5Lm.js";const E=JSON.parse('{"title":"菜单","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/React/教程/内置组件/Fragment/index.md","filePath":"前端/React/教程/内置组件/Fragment/index.md"}'),l={name:"前端/React/教程/内置组件/Fragment/index.md"},n=i(`<h1 id="菜单" tabindex="-1">菜单 <a class="header-anchor" href="#菜单" aria-label="Permalink to &quot;菜单&quot;">​</a></h1><p>&lt;Fragment&gt; 通常使用 &lt;&gt;...&lt;/&gt; 代替，它们都允许你在不添加额外节点的情况下将子元素组合。</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PostTitle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PostBody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">注意事项</p><p>如果你要传递 key 给一个 &lt;Fragment&gt;，你不能使用 &lt;&gt;...&lt;/&gt;，你必须从 &#39;react&#39; 中导入 Fragment 且表示为&lt;Fragment key={yourKey}&gt;...&lt;/Fragment&gt;。</p><p>当你要从 &lt;&gt; &lt;Child /&gt;&lt;/&gt; 转换为 [&lt;Child /&gt;] 或 &lt;&gt;&lt;Child /&gt;&lt;/&gt; 转换为 &lt;Child /&gt;，React 并不会重置 state。这个规则只在一层深度的情况下生效，如果从 &lt;&gt;&lt;&gt;&lt;Child /&gt;&lt;/&gt;&lt;/&gt; 转换为 &lt;Child /&gt; 则会重置 state。</p></div>`,5),e=[n];function p(h,r,d,g,k,c){return a(),s("div",null,e)}const _=t(l,[["render",p]]);export{E as __pageData,_ as default};
