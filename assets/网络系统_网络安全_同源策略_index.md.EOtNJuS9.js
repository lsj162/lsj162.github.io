import{_ as e,o as a,c as t,R as r}from"./chunks/framework.FQOLfzW2.js";const u=JSON.parse('{"title":"同源策略","description":"","frontmatter":{},"headers":[],"relativePath":"网络系统/网络安全/同源策略/index.md","filePath":"网络系统/网络安全/同源策略/index.md"}'),o={name:"网络系统/网络安全/同源策略/index.md"},i=r('<h1 id="同源策略" tabindex="-1">同源策略 <a class="header-anchor" href="#同源策略" aria-label="Permalink to &quot;同源策略&quot;">​</a></h1><p>同源策略（Same-Origin Policy）是一种浏览器安全策略，它限制一个网页文档或脚本如何能够与另一个源（域、协议和端口的组合）的资源进行交互。同源策略是为了防止恶意网站通过一些隐蔽的手段从其他站点获取用户的敏感信息或进行恶意操作。</p><h2 id="同源策略的主要规则包括" tabindex="-1">同源策略的主要规则包括： <a class="header-anchor" href="#同源策略的主要规则包括" aria-label="Permalink to &quot;同源策略的主要规则包括：&quot;">​</a></h2><p>协议相同： 页面中的脚本只能访问与该页面相同协议（http 或 https）的资源。</p><p>域名相同： 页面中的脚本只能访问与该页面相同域名的资源。</p><p>端口相同： 页面中的脚本只能访问与该页面相同端口号的资源。</p><p>这意味着如果一个页面加载的脚本来自于一个不同协议、域名或端口的资源，浏览器会阻止这种访问，从而保护用户的安全和隐私。</p><h2 id="同源策略的目标是防止一些常见的安全威胁-包括" tabindex="-1">同源策略的目标是防止一些常见的安全威胁，包括： <a class="header-anchor" href="#同源策略的目标是防止一些常见的安全威胁-包括" aria-label="Permalink to &quot;同源策略的目标是防止一些常见的安全威胁，包括：&quot;">​</a></h2><p>CSRF（Cross-Site Request Forgery）： 通过伪造用户的身份，攻击者在用户不知情的情况下向受信任网站发送请求。</p><p>XSS（Cross-Site Scripting）： 在网页中插入恶意脚本，这些脚本可以窃取用户信息或执行其他恶意操作。</p><p>数据泄露： 防止在不同源之间未经授权地传输敏感信息。</p><h3 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h3><p>Ai GPT</p>',13),n=[i];function s(p,c,d,h,_,l){return a(),t("div",null,n)}const f=e(o,[["render",s]]);export{u as __pageData,f as default};
