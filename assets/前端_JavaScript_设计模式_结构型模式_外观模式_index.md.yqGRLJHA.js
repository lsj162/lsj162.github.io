import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.DALfHeHd.js";const F=JSON.parse('{"title":"外观模式（Facade Pattern）","description":"","frontmatter":{},"headers":[],"relativePath":"前端/JavaScript/设计模式/结构型模式/外观模式/index.md","filePath":"前端/JavaScript/设计模式/结构型模式/外观模式/index.md","lastUpdated":1716891854000}'),p={name:"前端/JavaScript/设计模式/结构型模式/外观模式/index.md"},t=n(`<h1 id="外观模式-facade-pattern" tabindex="-1">外观模式（Facade Pattern） <a class="header-anchor" href="#外观模式-facade-pattern" aria-label="Permalink to &quot;外观模式（Facade Pattern）&quot;">​</a></h1><p>外观模式（Facade Pattern）是一种结构型设计模式，它提供了一个简化的接口，用于访问复杂子系统中的一组接口。外观模式的目标是通过创建一个高层次的接口，将客户端与子系统的复杂性隔离开来，从而使客户端更容易使用子系统。</p><p>外观模式的主要思想是封装复杂性，为客户端提供一个统一的接口，以便在客户端代码中降低耦合度。这样，客户端不需要了解子系统的具体细节，只需使用外观提供的简化接口来执行任务。</p><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><p>简化复杂系统：当一个系统变得非常复杂，由多个子系统组成时，外观模式可以提供一个简化的接口，以减少客户端代码的复杂性。</p><p>隐藏实现细节：外观模式允许隐藏系统的内部实现细节，从而提高系统的安全性和稳定性。</p><p>降低耦合度：通过使用外观模式，客户端代码不需要了解子系统的内部结构，这降低了客户端和子系统之间的耦合度，使系统更易维护和扩展。</p><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 子系统组件1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SubsystemComponent1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  operation1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Subsystem Component 1: Operation 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 子系统组件2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SubsystemComponent2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  operation2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Subsystem Component 2: Operation 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 子系统组件3</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SubsystemComponent3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  operation3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Subsystem Component 3: Operation 3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 外观类，封装子系统的复杂性</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Facade</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.component1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SubsystemComponent1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.component2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SubsystemComponent2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.component3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SubsystemComponent3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  operation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.component1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">operation1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.component2.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">operation2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.component3.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">operation3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 客户端代码使用外观</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> facade</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Facade</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> facade.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">operation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span></code></pre></div><p>在上面的示例中，SubsystemComponent1、SubsystemComponent2 和 SubsystemComponent3 是子系统的组件，它们提供不同的操作。Facade 是外观类，它封装了子系统组件，并提供了一个简化的接口 operation，该接口执行一系列操作。客户端代码只需要使用外观类，而不需要了解子系统的复杂性。</p><p>通过使用外观模式，可以减少客户端与子系统之间的耦合，使客户端代码更简洁、易于维护，并提供更高的抽象级别。这种模式对于隐藏系统的复杂性和提供统一接口非常有用。</p>`,11),h=[t];function l(k,e,r,E,d,y){return a(),i("div",null,h)}const o=s(p,[["render",l]]);export{F as __pageData,o as default};
