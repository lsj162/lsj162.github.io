import{_ as e,c as a,o as i,a5 as s}from"./chunks/framework.-E9IboRH.js";const g=JSON.parse('{"title":"概述","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/JavaScript/浏览器模型/Cookie.md","filePath":"前端/JavaScript/浏览器模型/Cookie.md"}'),t={name:"前端/JavaScript/浏览器模型/Cookie.md"},o=s('<h1 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h1><p>Cookie 是服务器保存在浏览器的一小段文本信息，一般大小不能超过 4KB。浏览器每次向服务器发出请求，就会自动附上这段信息。只有那些每次请求都需要让服务器知道的信息，才应该放在 Cookie 里面。</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>Cookie 不考虑协议和端口。也就是说，<a href="http://example.xn--com-5w2hj49al4r" target="_blank" rel="noreferrer">http://example.com设置的</a> Cookie，可以被<a href="https://example.xn--comhttp-jf7n" target="_blank" rel="noreferrer">https://example.com或http</a>😕/example.com:8080读取。</p></div><h1 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;Api&quot;">​</a></h1><h3 id="服务器如何设置" tabindex="-1">服务器如何设置 <a class="header-anchor" href="#服务器如何设置" aria-label="Permalink to &quot;服务器如何设置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly</span></span></code></pre></div><p>属性</p><ul><li>Domain 指定 cookie 可以送达的主机。</li><li>Expires 指定的 cookie 的最长有效时间。</li><li>HttpOnly 阻止 JavaScript 通过 Document.cookie 属性访问 cookie。</li><li>Max-Age 在 cookie 过期之前需要经过的秒数。</li><li>Path 表示浏览器要发送该 Cookie 标头时，请求的 URL 中所必须存在的路径。</li><li>SameSite 控制 cookie 是否随跨站请求一起发送，这样可以在一定程度上防范跨站请求伪造攻击（CSRF）。 <ul><li>Strict、Lax、None</li></ul></li><li>Secure 表示仅当请求通过 https: 协议（localhost 不受此限制）发送时才会将该 cookie 发送到服务器，因此其更能够抵抗中间人攻击。</li></ul><h3 id="前端如何设置" tabindex="-1">前端如何设置 <a class="header-anchor" href="#前端如何设置" aria-label="Permalink to &quot;前端如何设置&quot;">​</a></h3><p>读取</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.cookie; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 返回所有 Cookie，分号分隔</span></span></code></pre></div><p>写入</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.cookie </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;test1=hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 每次只能写入一个，与 HTTP 协议一致；最好encodeURIComponent进行转义</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.cookie </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `test2=world;expires=new Date().toGMTString();max-age=10;path=/;domain=mozilla.org;secure`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 比如添加个test2，https传输，10秒自动删除</span></span></code></pre></div><p>删除</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.cookie </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fontSize=;expires=Thu, 01-Jan-1970 00:00:01 GMT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 唯一方法，是设置它的expires属性为一个过去的日期。</span></span></code></pre></div><h1 id="推荐" tabindex="-1">推荐 <a class="header-anchor" href="#推荐" aria-label="Permalink to &quot;推荐&quot;">​</a></h1><p>使用 js-cookie 库；</p><h1 id="资料" tabindex="-1">资料 <a class="header-anchor" href="#资料" aria-label="Permalink to &quot;资料&quot;">​</a></h1><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie" target="_blank" rel="noreferrer">一个小框架：一个完整支持 unicode 的 cookie 读取/写入器 https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie</a></p><h1 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h1><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie" target="_blank" rel="noreferrer">MDN 官网：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie</a></p><p><a href="https://wangdoc.com/javascript/bom/cookie" target="_blank" rel="noreferrer">https://wangdoc.com/javascript/bom/cookie</a></p>',22),l=[o];function p(n,h,r,c,k,d){return i(),a("div",null,l)}const m=e(t,[["render",p]]);export{g as __pageData,m as default};
