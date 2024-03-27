import{_ as s,c as a,o as i,a5 as n}from"./chunks/framework.AYenO5Lm.js";const c=JSON.parse('{"title":"YAML","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"工具/语言及命令行工具/YAML/index.md","filePath":"工具/语言及命令行工具/YAML/index.md"}'),l={name:"工具/语言及命令行工具/YAML/index.md"},t=n(`<h1 id="yaml" tabindex="-1">YAML <a class="header-anchor" href="#yaml" aria-label="Permalink to &quot;YAML&quot;">​</a></h1><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 🌰 基本例子</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  : 代表对象</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">languages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # - 代表数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Ruby</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Perl</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Python</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">websites</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1976-07-31</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">这是一行字符串</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 注释：~ 代表null</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  parent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">~</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 注释：!! 代表强制转换数据类型</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!str</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &amp; 用来建立锚点（defaults）* 用来引用锚点 &lt;&lt; 表示合并到当前</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">defaults</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defaults</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  adapter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">postgres</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">localhost</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">development</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">myapp_development</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">defaults</span></span></code></pre></div><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="https://yaml.org/" target="_blank" rel="noreferrer">官网地址：https://yaml.org/</a></p><p><a href="https://www.ruanyifeng.com/blog/2016/07/yaml.html" target="_blank" rel="noreferrer">阮一峰的网络日志 » YAML 语言教程：https://www.ruanyifeng.com/blog/2016/07/yaml.html</a></p><p><a href="http://nodeca.github.io/js-yaml/" target="_blank" rel="noreferrer">在线体验：http://nodeca.github.io/js-yaml/</a></p>`,6),p=[t];function h(e,k,r,d,E,g){return i(),a("div",null,p)}const o=s(l,[["render",h]]);export{c as __pageData,o as default};
