import{_ as a,c as t,o as e,a6 as S}from"./chunks/framework.DwCPU-X7.js";const h=JSON.parse('{"title":"SSR","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/项目架构经验/模式/SSR/index.md","filePath":"前端/项目架构经验/模式/SSR/index.md","lastUpdated":1712030009000}'),i={name:"前端/项目架构经验/模式/SSR/index.md"},r=S('<h1 id="ssr" tabindex="-1">SSR <a class="header-anchor" href="#ssr" aria-label="Permalink to &quot;SSR&quot;">​</a></h1><p>SSR（Server-Side Rendering，服务端渲染）是一种 Web 开发技术，它与传统的客户端渲染（CSR）相对应。SSR 的核心思想是在服务器端生成完整的 HTML 页面，并将其发送给客户端，而不是仅发送一些基本的 HTML 结构和空的页面，然后通过客户端的 JavaScript 在浏览器中渲染页面。</p><h2 id="以下是-ssr-技术的详细概述" tabindex="-1">以下是 SSR 技术的详细概述： <a class="header-anchor" href="#以下是-ssr-技术的详细概述" aria-label="Permalink to &quot;以下是 SSR 技术的详细概述：&quot;">​</a></h2><ol><li>服务器端生成 HTML：</li></ol><p>在 SSR 中，页面的 HTML 内容在服务器上被动态生成，包括页面的内容、数据和结构。 与 CSR 不同，SSR 在服务器端运行 JavaScript 代码，并使用模板引擎或其他方法将数据注入到 HTML 中。</p><ol start="2"><li>更快的首次加载时间：</li></ol><p>由于 SSR 在服务器端生成完整的 HTML 页面，用户在首次加载时可以直接获得完整的渲染页面，而不需要等待客户端 JavaScript 的下载和执行。</p><ol start="3"><li>SEO 友好：</li></ol><p>SSR 对搜索引擎更为友好。搜索引擎能够轻松爬取服务器生成的 HTML，这有助于提高网站在搜索结果中的排名。 对于 CSR，搜索引擎需要等待 JavaScript 的执行完成，这可能导致搜索引擎无法获取完整的页面内容。</p><ol start="4"><li>改善性能：</li></ol><p>在 SSR 中，服务器可以直接处理一部分页面渲染工作，减轻客户端设备的负担，特别是对于性能较低的设备来说，这可能提供更好的用户体验。</p><ol start="5"><li>提高可访问性（Accessibility）：</li></ol><p>由于 SSR 在服务器上生成完整的 HTML，即使在没有 JavaScript 支持的情况下，页面仍然可以被渲染和访问。 这有助于提高网站的可访问性，特别是对于一些无法或选择不启用 JavaScript 的用户。</p><ol start="6"><li>适用于复杂的业务逻辑：</li></ol><p>一些复杂的业务逻辑可能更适合在服务器端执行，因为服务器通常具有更可靠和稳定的环境，而且可以更好地处理一些特殊的任务。 7. 框架支持：</p><p>许多现代的 JavaScript 框架（如 Next.js、Nuxt.js 等）支持 SSR，并提供了简化和加速开发过程的工具。</p><ol start="8"><li>客户端渲染的混合使用：</li></ol><p>一些应用可能同时使用 SSR 和 CSR，通过在首次加载时使用 SSR 获得更快的渲染，然后在后续导航中使用 CSR 来提供更快的用户体验。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2>',19),l=[r];function o(s,p,c,n,d,_){return e(),t("div",null,l)}const T=a(i,[["render",o]]);export{h as __pageData,T as default};
