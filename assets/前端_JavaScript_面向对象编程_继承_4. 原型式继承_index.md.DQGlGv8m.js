import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.-E9IboRH.js";const _=JSON.parse('{"title":"原型式继承","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/JavaScript/面向对象编程/继承/4. 原型式继承/index.md","filePath":"前端/JavaScript/面向对象编程/继承/4. 原型式继承/index.md"}'),n={name:"前端/JavaScript/面向对象编程/继承/4. 原型式继承/index.md"},e=t(`<h1 id="原型式继承" tabindex="-1">原型式继承 <a class="header-anchor" href="#原型式继承" aria-label="Permalink to &quot;原型式继承&quot;">​</a></h1><p>借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型</p><p>在 object 函数内部，先创建一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后返回这个临时类型的一个新实例</p><p>本质上来说，object 对传入其中的对象执行了一次浅复制</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">o</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> F</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    F</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> o;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> F</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,5),p=[e];function h(l,k,r,d,o,c){return a(),i("div",null,p)}const g=s(n,[["render",h]]);export{_ as __pageData,g as default};
