import{_ as i,c as s,o as a,a5 as t}from"./chunks/framework.AYenO5Lm.js";const _=JSON.parse('{"title":"BigInt","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/JavaScript/备份/内置对象/数字和日期对象/BigInt/index.md","filePath":"前端/JavaScript/备份/内置对象/数字和日期对象/BigInt/index.md"}'),n={name:"前端/JavaScript/备份/内置对象/数字和日期对象/BigInt/index.md"},e=t(`<h1 id="bigint" tabindex="-1">BigInt <a class="header-anchor" href="#bigint" aria-label="Permalink to &quot;BigInt&quot;">​</a></h1><p>BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 （9007199254740991） 的整数。这原本是 Javascript 中可以用 Number 表示的最大数字。BigInt 可以表示任意大的整数。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;bigint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BigInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;bigint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><h3 id="不支持" tabindex="-1">不支持 <a class="header-anchor" href="#不支持" aria-label="Permalink to &quot;不支持&quot;">​</a></h3><p>不能用于 Math 对象中的方法。</p><p>BigInt 不支持单目 (+) 运算符。</p><p>不能和任何 Number 实例混合运算，两者必须转换成同一种类型。</p><p>BigInt 变量在转换成 Number 变量时可能会丢失精度。</p>`,8),p=[e];function h(l,r,k,d,o,g){return a(),s("div",null,p)}const u=i(n,[["render",h]]);export{_ as __pageData,u as default};
