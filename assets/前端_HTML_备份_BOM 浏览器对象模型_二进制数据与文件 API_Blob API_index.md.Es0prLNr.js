import{_ as a,c as e,o as t,a5 as i}from"./chunks/framework.DALfHeHd.js";const y=JSON.parse('{"title":"Blob","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/HTML/备份/BOM 浏览器对象模型/二进制数据与文件 API/Blob API/index.md","filePath":"前端/HTML/备份/BOM 浏览器对象模型/二进制数据与文件 API/Blob API/index.md","lastUpdated":1716891854000}'),s={name:"前端/HTML/备份/BOM 浏览器对象模型/二进制数据与文件 API/Blob API/index.md"},o=i(`<h1 id="blob" tabindex="-1">Blob <a class="header-anchor" href="#blob" aria-label="Permalink to &quot;Blob&quot;">​</a></h1><p>Blob 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 ReadableStream 来用于数据操作。</p><p>Blob 表示的不一定是 JavaScript 原生格式的数据。File 接口基于 Blob，继承了 blob 的功能并将其扩展以支持用户系统上的文件。</p><h2 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h2><h3 id="blob-1" tabindex="-1">Blob() <a class="header-anchor" href="#blob-1" aria-label="Permalink to &quot;Blob()&quot;">​</a></h3><p>返回一个新创建的 Blob 对象，其内容由参数中给定的数组拼接组成。</p><h2 id="实例属性" tabindex="-1">实例属性 <a class="header-anchor" href="#实例属性" aria-label="Permalink to &quot;实例属性&quot;">​</a></h2><h3 id="blob-prototype-size-只读" tabindex="-1">Blob.prototype.size 只读 <a class="header-anchor" href="#blob-prototype-size-只读" aria-label="Permalink to &quot;Blob.prototype.size 只读&quot;">​</a></h3><p>Blob 对象中所包含数据的大小（字节）。</p><h3 id="blob-prototype-type-只读" tabindex="-1">Blob.prototype.type 只读 <a class="header-anchor" href="#blob-prototype-type-只读" aria-label="Permalink to &quot;Blob.prototype.type 只读&quot;">​</a></h3><p>一个字符串，表明该 Blob 对象所包含数据的 MIME 类型。如果类型未知，则该值为空字符串。</p><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="blob-prototype-arraybuffer" tabindex="-1">Blob.prototype.arrayBuffer() <a class="header-anchor" href="#blob-prototype-arraybuffer" aria-label="Permalink to &quot;Blob.prototype.arrayBuffer()&quot;">​</a></h3><p>返回一个 promise，其会兑现一个包含 Blob 所有内容的二进制格式的 ArrayBuffer。</p><h3 id="blob-prototype-slice" tabindex="-1">Blob.prototype.slice() <a class="header-anchor" href="#blob-prototype-slice" aria-label="Permalink to &quot;Blob.prototype.slice()&quot;">​</a></h3><p>返回一个新的 Blob 对象，包含了源 Blob 对象中指定范围内的数据。</p><h3 id="blob-prototype-stream" tabindex="-1">Blob.prototype.stream() <a class="header-anchor" href="#blob-prototype-stream" aria-label="Permalink to &quot;Blob.prototype.stream()&quot;">​</a></h3><p>返回一个能读取 Blob 内容的 ReadableStream。</p><h3 id="blob-prototype-text" tabindex="-1">Blob.prototype.text() <a class="header-anchor" href="#blob-prototype-text" aria-label="Permalink to &quot;Blob.prototype.text()&quot;">​</a></h3><p>返回一个 promise，其会兑现一个包含 Blob 所有内容的 UTF-8 格式的字符串。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>创建一个 blob Blob() 构造函数可以通过其他对象创建 blob。例如，用一个 JSON 字符串构造一个 blob：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { hello: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> blob</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Blob</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)], {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Blob" target="_blank" rel="noreferrer">MDN 官网：https://developer.mozilla.org/zh-CN/docs/Web/API/Blob</a></p>`,25),l=[o];function r(p,h,n,b,d,k){return t(),e("div",null,l)}const B=a(s,[["render",r]]);export{y as __pageData,B as default};
