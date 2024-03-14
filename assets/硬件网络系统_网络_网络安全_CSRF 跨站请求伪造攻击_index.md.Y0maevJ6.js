import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.-E9IboRH.js";const g=JSON.parse('{"title":"CSRF 跨站请求伪造攻击","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"硬件网络系统/网络/网络安全/CSRF 跨站请求伪造攻击/index.md","filePath":"硬件网络系统/网络/网络安全/CSRF 跨站请求伪造攻击/index.md"}'),n={name:"硬件网络系统/网络/网络安全/CSRF 跨站请求伪造攻击/index.md"},e=t(`<h1 id="csrf-跨站请求伪造攻击" tabindex="-1">CSRF 跨站请求伪造攻击 <a class="header-anchor" href="#csrf-跨站请求伪造攻击" aria-label="Permalink to &quot;CSRF 跨站请求伪造攻击&quot;">​</a></h1><p>CSRF（Cross-Site Request Forgery，跨站请求伪造）是一种网络安全漏洞，攻击者利用用户已经在某个网站上登录的身份，在用户不知情的情况下执行某些操作。攻击者通过欺骗用户使其浏览器发送伪造的请求，这些请求可能包括在用户已经登录的站点上执行敏感的操作，如更改密码、发表评论、转账等。</p><h2 id="csrf-攻击的基本原理如下" tabindex="-1">CSRF 攻击的基本原理如下： <a class="header-anchor" href="#csrf-攻击的基本原理如下" aria-label="Permalink to &quot;CSRF 攻击的基本原理如下：&quot;">​</a></h2><p>用户登录目标网站： 用户在一个网站上登录，并且在同一浏览器中保持了登录状态。这通常会导致浏览器存储有用户的会话 Cookie。</p><p>攻击者准备伪造请求： 攻击者创建一个包含伪造请求的 HTML 页面，并将这个页面传播给目标用户。这个页面中可能包含了一些对目标网站的请求，这些请求会利用用户当前的身份进行操作。</p><p>用户访问恶意页面： 用户在不知情的情况下访问了包含恶意请求的页面，这可能是通过点击一个恶意链接、查看恶意邮件或者点击了一个被攻击者控制的广告。</p><p>浏览器自动发送请求： 由于用户已经在目标网站上保持了登录状态，浏览器会自动发送包含用户身份信息的请求到目标网站。这使得目标网站认为这个请求是用户自愿发起的。</p><p>攻击成功： 攻击者成功利用用户的身份在目标网站上执行了某些操作，这可能包括更改账户设置、发表评论、转账等。</p><h2 id="为了防范-csrf-攻击-开发者可以采取以下措施" tabindex="-1">为了防范 CSRF 攻击，开发者可以采取以下措施： <a class="header-anchor" href="#为了防范-csrf-攻击-开发者可以采取以下措施" aria-label="Permalink to &quot;为了防范 CSRF 攻击，开发者可以采取以下措施：&quot;">​</a></h2><p>使用 CSRF 令牌： 在用户和服务器之间引入 CSRF 令牌，确保每个请求都携带了有效的令牌。攻击者难以获取有效的 CSRF 令牌，从而难以伪造有效请求。</p><p>同源策略： 同源策略是浏览器的一项安全措施，限制了一个网页从一个源加载的文档或脚本如何与来自另一个源的资源进行交互。通过限制跨域请求，可以降低 CSRF 攻击的风险。</p><p>检查 Referer 头： 在服务器端可以检查 HTTP 请求头中的 Referer 字段，确保请求来自合法的源。</p><p>使用 Cookie 属性： 将 Cookie 属性设置为 SameSite，限制第三方站点对 Cookie 的访问，进一步减少 CSRF 攻击的可能性。</p><h2 id="举-🌰" tabindex="-1">举 🌰 <a class="header-anchor" href="#举-🌰" aria-label="Permalink to &quot;举 🌰&quot;">​</a></h2><p>假设有一个在线银行网站，其中用户登录后可以执行转账操作。银行网站使用简单的 GET 请求来执行转账操作，类似于以下的 URL：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//bank.com/transfer?toAccount=attacker&amp;amount=1000</span></span></code></pre></div><ol><li><p>用户登录银行网站： 用户在银行网站上登录，建立了与银行服务器的会话，并在浏览器中保存了相应的会话 Cookie。</p></li><li><p>攻击者创建恶意页面： 攻击者创建了一个包含如下 HTML 代码的恶意网页，并将它传播给目标用户：</p></li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Check out this funny cat picture!&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://bank.com/transfer?toAccount=attacker&amp;amount=1000&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ol><li><p>目标用户点击链接： 目标用户在不怀疑的情况下点击了攻击者提供的链接，这可能是通过电子邮件、社交媒体或其他途径传播的。</p></li><li><p>浏览器发起跨站请求： 由于用户已经登录了银行网站，浏览器会自动携带有效的银行会话 Cookie，向 https://bank.com/transfer?toAccount=attacker&amp;amount=1000 这个地址发起 GET 请求，执行了转账操作。</p></li><li><p>攻击成功： 由于浏览器发送的请求包含了用户的身份信息（会话 Cookie），银行服务器将以用户的身份执行转账操作，将 1000 单位的资金转到了攻击者指定的账户。</p></li></ol><p>这就是 CSRF 攻击的基本原理。攻击者利用了用户在目标网站上的已登录状态，通过构造包含恶意请求的页面，诱使用户在不知情的情况下触发了这些请求，从而执行了攻击者事先定义好的操作。为了防范 CSRF 攻击，目标网站可以采取措施，如使用 CSRF 令牌、检查 Referer 头、使用同源检查等。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p>Ai GPT</p>`,22),l=[e];function p(h,k,r,o,E,d){return a(),i("div",null,l)}const y=s(n,[["render",p]]);export{g as __pageData,y as default};
