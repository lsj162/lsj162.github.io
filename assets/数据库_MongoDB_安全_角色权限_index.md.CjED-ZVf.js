import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.AYenO5Lm.js";const c=JSON.parse('{"title":"访问控制和账户管理","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"数据库/MongoDB/安全/角色权限/index.md","filePath":"数据库/MongoDB/安全/角色权限/index.md"}'),t={name:"数据库/MongoDB/安全/角色权限/index.md"},h=n(`<h1 id="访问控制和账户管理" tabindex="-1">访问控制和账户管理 <a class="header-anchor" href="#访问控制和账户管理" aria-label="Permalink to &quot;访问控制和账户管理&quot;">​</a></h1><p>MongoDB 提供各种功能，例如身份验证、访问控制、加密，以保护您的 MongoDB 部署。一些关键的安全功能包括：</p><p>验证 授权 传输层安全/SSL 仅限企业 加密</p><h2 id="启用访问控制" tabindex="-1">启用访问控制 <a class="header-anchor" href="#启用访问控制" aria-label="Permalink to &quot;启用访问控制&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">use admin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">db.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myUserAdmin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pwd: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">passwordPrompt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// or cleartext password</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    roles: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { role: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;userAdminAnyDatabase&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, db: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;admin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { role: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;readWriteAnyDatabase&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, db: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;admin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="创建用户" tabindex="-1">创建用户 <a class="header-anchor" href="#创建用户" aria-label="Permalink to &quot;创建用户&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">use test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">db.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myTester&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pwd:  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">passwordPrompt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// or cleartext password</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    roles: [ { role: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;readWrite&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, db: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             { role: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;read&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, db: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;reporting&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="验证用户身份" tabindex="-1">验证用户身份 <a class="header-anchor" href="#验证用户身份" aria-label="Permalink to &quot;验证用户身份&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mongosh </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">port </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">27017</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">authenticationDatabase \\ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;admin&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">u </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myUserAdmin&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p</span></span></code></pre></div><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="https://www.mongodb.com/docs/manual/core/authentication/" target="_blank" rel="noreferrer">https://www.mongodb.com/docs/manual/core/authentication/</a></p>`,11),e=[h];function l(p,k,E,r,d,o){return a(),i("div",null,e)}const y=s(t,[["render",l]]);export{c as __pageData,y as default};
