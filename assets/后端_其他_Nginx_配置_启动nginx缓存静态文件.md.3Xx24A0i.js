import{_ as s,c as a,o as i,a5 as n}from"./chunks/framework.DALfHeHd.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"后端/其他/Nginx/配置/启动nginx缓存静态文件.md","filePath":"后端/其他/Nginx/配置/启动nginx缓存静态文件.md","lastUpdated":1716891854000}'),p={name:"后端/其他/Nginx/配置/启动nginx缓存静态文件.md"},e=n(`<div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 缓存路径和配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    proxy_cache_path </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/path/to/cache levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 定义一个命名的缓存区域</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    proxy_cache </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">my_cache;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">your_domain.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 缓存控制指令</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_cache_valid </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 304</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置缓存时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_cache_key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$host$uri$is_args$args; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置缓存键</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 根据需要缓存的文件类型进行配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 在此示例中，我们缓存了 CSS、JavaScript 和图片文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_cache_use_stale </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timeout updating http_500 http_502 http_503 http_504;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_cache_bypass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$cookie_nocache $arg_nocache $arg_comment;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_no_cache </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$http_pragma $http_authorization;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 其他缓存控制指令</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            add_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Cache $upstream_cache_status;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 代理到后端服务器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://backend_server;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 其他服务器配置...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 其他 http 块配置...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在上面的配置中：</p><ul><li><code>proxy_cache_path</code> 指令用于定义缓存路径和相关配置，如缓存大小、缓存区块的数量等。</li><li><code>proxy_cache my_cache;</code> 定义了一个名为 <code>my_cache</code> 的缓存区域。</li><li><code>proxy_cache_valid</code> 指令用于设置缓存的有效时间。</li><li><code>proxy_cache_key</code> 指令定义了用于缓存键的参数。</li><li><code>proxy_cache_use_stale</code> 指令定义了在后端服务器不可用时是否使用过期的缓存。</li><li><code>proxy_cache_bypass</code> 和 <code>proxy_no_cache</code> 指令用于控制是否绕过缓存。</li><li><code>add_header</code> 指令添加了一个自定义的头部，以便于调试时查看缓存状态。</li><li><code>proxy_set_header</code> 指令设置了向后端服务器传递的一些 HTTP 头部信息。</li><li><code>proxy_pass</code> 指令将请求代理到后端服务器。</li></ul><p>这只是一个简单的示例配置。根据你的具体需求，你可能需要对缓存路径、缓存有效时间、缓存键、缓存的文件类型等进行进一步的定制和调整。</p>`,4),l=[e];function h(t,k,c,r,d,_){return i(),a("div",null,l)}const E=s(p,[["render",h]]);export{y as __pageData,E as default};
