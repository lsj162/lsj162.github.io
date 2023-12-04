import{_ as s,o as t,c as i,R as a}from"./chunks/framework.FQOLfzW2.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/TypeScript/基本用法/any 类型/index.md","filePath":"前端/TypeScript/基本用法/any 类型/index.md"}'),n={name:"前端/TypeScript/基本用法/any 类型/index.md"},d=a(`<h2 id="any" tabindex="-1">any <a class="header-anchor" href="#any" aria-label="Permalink to &quot;any&quot;">​</a></h2><p>使用“any”会禁用所有进一步的类型检查。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { x: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 以下代码行都不会引发编译器错误。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj.bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>不过，您通常希望避免这种情况，因为 any 没有进行类型检查。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>当您不指定类型并且 TypeScript 无法从上下文中推断出类型时，编译器通常会默认为 any.</p></div><h2 id="unknown" tabindex="-1">unknown <a class="header-anchor" href="#unknown" aria-label="Permalink to &quot;unknown&quot;">​</a></h2><p>unknown 类型代表任何值。这与类型类似 any，但更安全，因为对值执行任何操作都是不合法的 unknown</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> v1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { foo: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v1.foo; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 报错</span></span></code></pre></div><p>那么，怎么才能使用 unknown 类型变量呢？答案是只有经过“类型缩小”。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;number&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 正确</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="never" tabindex="-1">never <a class="header-anchor" href="#never" aria-label="Permalink to &quot;never&quot;">​</a></h2><p>“空类型”的概念，即该类型为空，不包含任何值。</p><p>由于不存在任何属于“空类型”的值，所以该类型被称为 never，即不可能有这样的值。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> never</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>上面示例中，变量 x 的类型是 never，就不可能赋给它任何值，否则都会报错。</p><h2 id="兼容表" tabindex="-1">兼容表 <a class="header-anchor" href="#兼容表" aria-label="Permalink to &quot;兼容表&quot;">​</a></h2><p>下表总结了一些抽象类型之间的可分配性。行指示每个可分配的内容，列指示可分配给它们的内容。“</p><table><thead><tr><th></th><th>any</th><th>unknown</th><th>object</th><th>void</th><th>undefined</th><th>null</th><th>never</th></tr></thead><tbody><tr><td>any →</td><td></td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✕</td></tr><tr><td>unknown →</td><td>✓</td><td></td><td>✕</td><td>✕</td><td>✕</td><td>✕</td><td>✕</td></tr><tr><td>object →</td><td>✓</td><td>✓</td><td></td><td>✕</td><td>✕</td><td>✕</td><td>✕</td></tr><tr><td>void →</td><td>✓</td><td>✓</td><td>✕</td><td></td><td>✕</td><td>✕</td><td>✕</td></tr><tr><td>undefined →</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td></td><td>✓</td><td>✕</td></tr><tr><td>null →</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td></td><td>✕</td></tr><tr><td>never →</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td></td></tr></tbody></table>`,18),h=[d];function e(p,l,k,r,o,E){return t(),i("div",null,h)}const g=s(n,[["render",e]]);export{y as __pageData,g as default};
