import{_ as s,o as n,c as a,S as l}from"./chunks/framework.2524ba1c.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"后端/Nginx/配置/main/index.md","filePath":"后端/Nginx/配置/main/index.md"}'),p={name:"后端/Nginx/配置/main/index.md"},o=l(`<h2 id="main-上下文" tabindex="-1">main 上下文 <a class="header-anchor" href="#main-上下文" aria-label="Permalink to &quot;main 上下文&quot;">​</a></h2><p>nginx.conf 配置文件，如果块指令可以在大括号内包含其他指令，则称为上下文（例如： events、 http、 server 和 location）。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># nginx进程,一般设置为和cpu核数一样</span></span>
<span class="line"><span style="color:#FFCB6B;">worker_processes</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 错误日志存放目录</span></span>
<span class="line"><span style="color:#FFCB6B;">error_log</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">./logs/error.log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进程pid存放位置</span></span>
<span class="line"><span style="color:#FFCB6B;">pid</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./nginx.pid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">events</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 单个后台worker process进程的最大并发链接数</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">worker_connections</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">http</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 文件扩展名与类型映射表</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 默认的文件类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">default_type</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 开启高效传输模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">sendfile</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 激活tcp_nopush参数可以允许把httpresponse header和文件的开始放在一个文件里发布，积极的作用是减少网络报文段的数量</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">tcp_nopush</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 激活tcp_nodelay，内核会等待将更多的字节组成一个数据包，从而提高I/O性能</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">tcp_nodelay</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 连接超时时间，单位是秒</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">keepalive_timeout</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 开启gzip压缩功能</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">gzip</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">gzip_min_length</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">10</span><span style="color:#C3E88D;">k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;"># 负载均衡的服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">upstream</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server_8080{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">127.0</span><span style="color:#C3E88D;">.0.1:8080</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 反向代理http</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">example.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 代理本地</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">proxy_pass</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">http://server_8080/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 反向代理https，启动http2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;">       </span><span style="color:#F78C6C;">443</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ssl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">example.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 证书文件路径</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">ssl_certificate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./xxxx.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">ssl_certificate_key</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./xxxx.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">ssl_trusted_certificate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./xxxx.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">ssl_session_cache</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">shared:SSL:1m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">ssl_session_timeout</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">5</span><span style="color:#C3E88D;">m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">ssl_ciphers</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">HIGH:!aNULL:!MD5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">ssl_prefer_server_ciphers</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 代理本地</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">proxy_pass</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">http://server_8080/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,3),e=[o];function t(c,r,C,y,A,i){return n(),a("div",null,e)}const B=s(p,[["render",t]]);export{F as __pageData,B as default};
