import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.DALfHeHd.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"后端/其他/Nginx/配置/main.md","filePath":"后端/其他/Nginx/配置/main.md","lastUpdated":1717317169000}'),p={name:"后端/其他/Nginx/配置/main.md"},l=n(`<h2 id="main-上下文" tabindex="-1">main 上下文 <a class="header-anchor" href="#main-上下文" aria-label="Permalink to &quot;main 上下文&quot;">​</a></h2><p>nginx.conf 配置文件，如果块指令可以在大括号内包含其他指令，则称为上下文（例如： events、 http、 server 和 location）。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># nginx进程,一般设置为和cpu核数一样</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">worker_processes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 错误日志存放目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error_log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ./logs/error.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进程pid存放位置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./nginx.pid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">events</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 单个后台worker process进程的最大并发链接数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    worker_connections</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 文件扩展名与类型映射表</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       mime.types</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 默认的文件类型</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    default_type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  application/octet-stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 开启高效传输模式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    sendfile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 激活tcp_nopush参数可以允许把httpresponse header和文件的开始放在一个文件里发布，积极的作用是减少网络报文段的数量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    tcp_nopush</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 激活tcp_nodelay，内核会等待将更多的字节组成一个数据包，从而提高I/O性能</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    tcp_nodelay</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 连接超时时间，单位是秒</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    keepalive_timeout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  65</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 开启gzip压缩功能</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    gzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    gzip_min_length</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  10k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	# 负载均衡的服务器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server_8080{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 127.0.0.1:8080</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 反向代理http</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 80</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example.com</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 代理本地</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_pass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  http://server_8080/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 反向代理https，启动http2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       443</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example.com</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 证书文件路径</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_certificate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./xxxx.pem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_certificate_key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./xxxx.pem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_trusted_certificate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./xxxx.pem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_session_cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    shared:SSL:1m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_session_timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  5m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_ciphers</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  HIGH:!aNULL:!MD5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_prefer_server_ciphers</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 代理本地</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_pass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  http://server_8080/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,3),h=[l];function k(t,e,r,F,E,d){return a(),i("div",null,h)}const c=s(p,[["render",k]]);export{y as __pageData,c as default};
