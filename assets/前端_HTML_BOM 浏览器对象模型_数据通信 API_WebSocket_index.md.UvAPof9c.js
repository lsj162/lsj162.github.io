import{_ as s,o as i,c as a,R as e}from"./chunks/framework.FQOLfzW2.js";const g=JSON.parse('{"title":"WebSocket","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/HTML/BOM 浏览器对象模型/数据通信 API/WebSocket/index.md","filePath":"前端/HTML/BOM 浏览器对象模型/数据通信 API/WebSocket/index.md"}'),t={name:"前端/HTML/BOM 浏览器对象模型/数据通信 API/WebSocket/index.md"},n=e(`<h1 id="websocket" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket" aria-label="Permalink to &quot;WebSocket&quot;">​</a></h1><p>WebSocket 对象提供了用于创建和管理 WebSocket 连接，以及可以通过该连接发送和接收数据的 API。</p><p>使用 WebSocket() 构造函数来构造一个 WebSocket。</p><h2 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h2><p>WebSocket(url[, protocols]) 返回一个 WebSocket 对象。</p><h2 id="示范" tabindex="-1">示范 <a class="header-anchor" href="#示范" aria-label="Permalink to &quot;示范&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Create WebSocket connection.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> socket</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WebSocket</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ws://localhost:8080&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Connection opened</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">socket.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;open&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    socket.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello Server!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Listen for messages</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">socket.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Message from server &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, event.data);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket</a></p>`,9),h=[n];function l(k,p,o,r,E,d){return i(),a("div",null,h)}const y=s(t,[["render",l]]);export{g as __pageData,y as default};
