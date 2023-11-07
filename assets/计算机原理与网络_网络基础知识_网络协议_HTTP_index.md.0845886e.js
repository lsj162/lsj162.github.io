import{_ as e,o as a,c as t,S as T}from"./chunks/framework.2524ba1c.js";const p=JSON.parse('{"title":"HTTP 超文本传输协议","description":"","frontmatter":{},"headers":[],"relativePath":"计算机原理与网络/网络基础知识/网络协议/HTTP/index.md","filePath":"计算机原理与网络/网络基础知识/网络协议/HTTP/index.md"}'),r={name:"计算机原理与网络/网络基础知识/网络协议/HTTP/index.md"},o=T('<h1 id="http-超文本传输协议" tabindex="-1">HTTP 超文本传输协议 <a class="header-anchor" href="#http-超文本传输协议" aria-label="Permalink to &quot;HTTP 超文本传输协议&quot;">​</a></h1><p>HTTP 全称是 HyperText Transfer Protocal ，即超文本传输协议。</p><p>HTTP 是 应用层协议，当你上网浏览网页的时候，浏览器和 Web 服务器之间就会通过 HTTP 在 Internet 上进行数据的发送和接收。 HTTP 是一个基于请求/响应模式的、无状态的协议。</p><h1 id="http2-🔥" tabindex="-1">HTTP2 🔥 <a class="header-anchor" href="#http2-🔥" aria-label="Permalink to &quot;HTTP2 🔥&quot;">​</a></h1><p>HTTP/2（超文本传输协议第 2 版，最初命名为 HTTP 2.0），简称为 h2（基于 TLS/1.2 或以上版本的加密连接）或 h2c（非加密连接），是 HTTP 协议的的第二个主要版本，使用于万维网。</p><h2 id="旧版本问题" tabindex="-1">旧版本问题 <a class="header-anchor" href="#旧版本问题" aria-label="Permalink to &quot;旧版本问题&quot;">​</a></h2><ul><li>多个 TCP 连接：虽然 HTTP/1.1 管线化可以支持请求并发，但是浏览器很难实现，主流浏览器厂商都禁用了管线化</li><li>队头阻塞：TCP 连接上只能发送一个请求，由于单连接上的串行请求，前面的请求未完成前，后续的请求都在排队等待</li><li>头部冗余：HTTP/1.x 采用文本格式传输，首部未压缩，无状态特性让每个请求都会带上 Cookie、User-Agent 等重复的信息</li><li>不支持服务端主动推送：HTTP/1.1 不支持服务推送消息，只能使用轮询的方式解决</li></ul><h1 id="http3" tabindex="-1">HTTP3 <a class="header-anchor" href="#http3" aria-label="Permalink to &quot;HTTP3&quot;">​</a></h1><p>Google 在推 SPDY 的时候就已经意识到了这些问题，于是就另起炉灶搞了一个基于 UDP 协议的“QUIC”协议，让 HTTP 跑在 QUIC 上而不是 TCP 上。 而这个“HTTP over QUIC”就是 HTTP 协议的下一个大版本，HTTP/3。</p>',9),i=[o];function n(P,l,h,s,c,d){return a(),t("div",null,i)}const H=e(r,[["render",n]]);export{p as __pageData,H as default};
