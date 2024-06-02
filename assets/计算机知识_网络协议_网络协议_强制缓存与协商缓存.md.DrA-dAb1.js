import{_ as a,c as e,o as s,a5 as n}from"./chunks/framework.DALfHeHd.js";const b=JSON.parse('{"title":"强制缓存与协商缓存 🔥","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"计算机知识/网络协议/网络协议/强制缓存与协商缓存.md","filePath":"计算机知识/网络协议/网络协议/强制缓存与协商缓存.md","lastUpdated":1717313630000}'),t={name:"计算机知识/网络协议/网络协议/强制缓存与协商缓存.md"},o=n(`<h1 id="强制缓存与协商缓存-🔥" tabindex="-1">强制缓存与协商缓存 🔥 <a class="header-anchor" href="#强制缓存与协商缓存-🔥" aria-label="Permalink to &quot;强制缓存与协商缓存 🔥&quot;">​</a></h1><h2 id="优点" tabindex="-1"><strong>优点：</strong> <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;**优点：**&quot;">​</a></h2><ul><li>减少请求，节省带宽流量。</li><li>降低服务器压力。</li><li>加快响应速度，提升用户体验。</li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>强制缓存；服务器设置以下标头:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Cache-Control:max-age=3600</span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span>Expires: Tue, 28 Feb 2022 22:22:22 GMT（系统时钟格林时间有偏移会导致错乱问题，推荐用max-age）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果同时存在， Cache-Control 优先级高于 Expires 。</span></span></code></pre></div><p>协商缓存；服务器设置以下标头:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ETag: W/&quot;6d9930e83bbb43&quot;</span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span>Last-Modified:Tue, 28 Feb 2022 22:22:22 GMT</span></span></code></pre></div><h2 id="理论原理" tabindex="-1">理论原理： <a class="header-anchor" href="#理论原理" aria-label="Permalink to &quot;理论原理：&quot;">​</a></h2><ol><li><strong>强制缓存：</strong></li></ol><p>Cache-Control 这个字段是 http 1.1 的规范。</p><p>服务器设置 Response Headers 属性，添加<code>Cache-Control:max-age=3600</code>，同时会带上 Date 字段，资源缓存的有效期是 3600 秒。有效期内浏览器不会发出请求。</p><p>Expires 这个字段是 http 1.0 的规范。</p><p>服务器设置 Response Headers 属性，添加<code>Expires:Mon,18 Oct 2066 23:59:59 GMT</code>，这个 GMT 时间代表资源失效的时间，如果当前的时间戳内，有效期内浏览器不会发出请求。</p><ol start="2"><li><strong>协商缓存：</strong></li></ol><p>服务器设置 Response Headers 属性，添加 Etag 资源生成的唯一标识串，下一次请求时， 请求头自动带上 If-None-Match 就是 Etag 值。服务器比较值，如果未变返回 304，否则返回新资源。</p><p>服务器设置 Response Headers 属性，添加 Last-Modified 标记最后文件修改时间，下一次请求时，请求头中自动带上 If-Modified-Since 值就是 Last-Modified 的值，在服务器上根据文件的最后修改时间判断资源是否有变化，如果未变返回 304，否则返回新资源。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>优先级：Cache-Control  &gt; expires &gt; Etag &gt; Last-Modified</span></span></code></pre></div><h2 id="其他-cache-control" tabindex="-1">其他 Cache-Control <a class="header-anchor" href="#其他-cache-control" aria-label="Permalink to &quot;其他 Cache-Control&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>标准的</span></span>
<span class="line"><span>Cache-Control: immutable（指令可用于明确指示不需要重新验证）</span></span>
<span class="line"><span>Cache-Control: no-cache</span></span>
<span class="line"><span>兼容过时的实现</span></span>
<span class="line"><span>Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">提示</p><p>请求头的是否带有参数 If-Modified-Since，受（ Cache-Control 配置影响）</p></div><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching" target="_blank" rel="noreferrer">MDN 官网：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching</a></p>`,23),p=[o];function i(l,c,r,d,h,u){return s(),e("div",null,p)}const _=a(t,[["render",i]]);export{b as __pageData,_ as default};
