import{_ as a,c as s,o as e,a5 as i}from"./chunks/framework.DALfHeHd.js";const k=JSON.parse('{"title":"Homebrew","description":"","frontmatter":{},"headers":[],"relativePath":"计算机知识/系统/Mac系统/安装/brew 安装.md","filePath":"计算机知识/系统/Mac系统/安装/brew 安装.md","lastUpdated":1717313630000}'),t={name:"计算机知识/系统/Mac系统/安装/brew 安装.md"},n=i('<h1 id="homebrew" tabindex="-1">Homebrew <a class="header-anchor" href="#homebrew" aria-label="Permalink to &quot;Homebrew&quot;">​</a></h1><p>使用 Homebrew 安装 Apple（或您的 Linux 系统）没有预装但 你需要的东西。Homebrew 不会将文件安装到它本身目录之外，所以您可将 Homebrew 安装到任意位置。</p><h2 id="安装-homebrew" tabindex="-1">安装 Homebrew <a class="header-anchor" href="#安装-homebrew" aria-label="Permalink to &quot;安装 Homebrew&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/bin/bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</span></span></code></pre></div><h2 id="卸载-homebrew" tabindex="-1">卸载 Homebrew <a class="header-anchor" href="#卸载-homebrew" aria-label="Permalink to &quot;卸载 Homebrew&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/bin/bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)&quot;</span></span></code></pre></div><p><a href="https://github.com/homebrew/install#uninstall-homebrew" target="_blank" rel="noreferrer">Uninstall Homebrew</a></p><h2 id="设置镜像" tabindex="-1">设置镜像 <a class="header-anchor" href="#设置镜像" aria-label="Permalink to &quot;设置镜像&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">清华大学开源软件镜像站</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="常见的命令" tabindex="-1">常见的命令： <a class="header-anchor" href="#常见的命令" aria-label="Permalink to &quot;常见的命令：&quot;">​</a></h2><ol><li><p><strong>安装软件包</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>brew install &lt;package_name&gt;</span></span></code></pre></div></li><li><p><strong>卸载软件包</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>brew uninstall &lt;package_name&gt;</span></span></code></pre></div></li><li><p><strong>查看已安装的软件包</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>brew list</span></span></code></pre></div></li><li><p><strong>清除缓存</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>brew cleanup</span></span></code></pre></div></li><li><p><strong>更新 Homebrew</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>brew update</span></span></code></pre></div></li><li><p><strong>帮助</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>brew help</span></span></code></pre></div></li></ol><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="https://brew.sh/" target="_blank" rel="noreferrer">官网 https://brew.sh/</a></p>',13),l=[n];function h(p,o,r,d,c,b){return e(),s("div",null,l)}const u=a(t,[["render",h]]);export{k as __pageData,u as default};
