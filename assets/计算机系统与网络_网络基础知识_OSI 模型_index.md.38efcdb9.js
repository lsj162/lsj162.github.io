import{_ as a,o as e,c as l,S as i}from"./chunks/framework.2524ba1c.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"计算机系统与网络/网络基础知识/OSI 模型/index.md","filePath":"计算机系统与网络/网络基础知识/OSI 模型/index.md"}'),t={name:"计算机系统与网络/网络基础知识/OSI 模型/index.md"},o=i('<h2 id="osi-模型" tabindex="-1">OSI 模型 <a class="header-anchor" href="#osi-模型" aria-label="Permalink to &quot;OSI 模型&quot;">​</a></h2><p>OSI 模型（Open Systems Interconnection 模型）是一种用于理解和描述计算机网络通信的七层模型。它被国际标准化组织（ISO）制定，旨在帮助网络工程师和专业人员更好地理解网络协议、技术和通信的不同层次。</p><h2 id="osi-模型的七层" tabindex="-1">OSI 模型的七层： <a class="header-anchor" href="#osi-模型的七层" aria-label="Permalink to &quot;OSI 模型的七层：&quot;">​</a></h2><h2 id="_1-物理层-physical-layer" tabindex="-1">1. 物理层 (Physical Layer)： <a class="header-anchor" href="#_1-物理层-physical-layer" aria-label="Permalink to &quot;1. 物理层 (Physical Layer)：&quot;">​</a></h2><blockquote><ul><li>主要职责：处理物理介质和数据传输的硬件细节。</li><li>传输单位：比特（bit）。</li><li>功能：处理电压、光信号、电缆规格等物理细节，确保数据能够在物理介质上传输。</li></ul></blockquote><h2 id="_2-数据链路层-data-link-layer" tabindex="-1">2. 数据链路层 (Data Link Layer)： <a class="header-anchor" href="#_2-数据链路层-data-link-layer" aria-label="Permalink to &quot;2. 数据链路层 (Data Link Layer)：&quot;">​</a></h2><blockquote><ul><li>主要职责：管理数据帧的传输、错误检测和校正，同时管理物理介质的访问。</li><li>传输单位：数据帧（Frame）。</li><li>功能：将数据帧划分为适当的大小，进行错误检测和纠正，控制数据访问和传输。</li></ul></blockquote><h2 id="_3-网络层-network-layer" tabindex="-1">3. 网络层 (Network Layer)： <a class="header-anchor" href="#_3-网络层-network-layer" aria-label="Permalink to &quot;3. 网络层 (Network Layer)：&quot;">​</a></h2><blockquote><ul><li>主要职责：处理数据包的路由和转发，确保数据从源主机到目标主机的传递。</li><li>传输单位：数据包（Packet）。</li><li>功能：选择最佳路径以将数据包从源传输到目标，处理逻辑地址（如 IP 地址）。</li></ul></blockquote><h2 id="_4-传输层-transport-layer" tabindex="-1">4. 传输层 (Transport Layer)： <a class="header-anchor" href="#_4-传输层-transport-layer" aria-label="Permalink to &quot;4. 传输层 (Transport Layer)：&quot;">​</a></h2><blockquote><ul><li>主要职责：提供端到端的数据传输服务，负责数据的流量控制、错误检测和纠正，以及数据的分段和重组。</li><li>传输单位：报文段（Segment）。</li><li>功能：确保可靠的数据传输，包括流量控制、差错检测、重新传输等。</li></ul></blockquote><h2 id="_5-会话层-session-layer" tabindex="-1">5. 会话层 (Session Layer)： <a class="header-anchor" href="#_5-会话层-session-layer" aria-label="Permalink to &quot;5. 会话层 (Session Layer)：&quot;">​</a></h2><blockquote><ul><li>主要职责：管理会话或连接的建立、维护和终止，处理会话同步和管理。</li><li>传输单位：数据流（Data Stream）。</li><li>功能：协调通信会话，确保数据的可靠交换和同步。</li></ul></blockquote><h2 id="_6-表示层-presentation-layer" tabindex="-1">6. 表示层 (Presentation Layer)： <a class="header-anchor" href="#_6-表示层-presentation-layer" aria-label="Permalink to &quot;6. 表示层 (Presentation Layer)：&quot;">​</a></h2><blockquote><ul><li>主要职责：处理数据的编码、格式转换、加密和解密，以确保数据在不同系统之间的互操作性。</li><li>传输单位：数据。</li><li>功能：数据的格式转换和加密，以便不同系统能够理解和交流。</li></ul></blockquote><h2 id="_7-应用层-application-layer" tabindex="-1">7. 应用层 (Application Layer)： <a class="header-anchor" href="#_7-应用层-application-layer" aria-label="Permalink to &quot;7. 应用层 (Application Layer)：&quot;">​</a></h2><blockquote><ul><li>主要职责：包含各种应用程序和协议，如电子邮件、文件传输和网络浏览器，负责应用程序之间的通信和数据交换。</li><li>传输单位：消息（Message）。</li><li>功能：提供各种应用程序，使用户能够进行通信、访问资源和执行各种任务。</li></ul></blockquote><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p>AI GPT</p>',19),r=[o];function n(s,c,h,u,d,_){return e(),l("div",null,r)}const q=a(t,[["render",n]]);export{k as __pageData,q as default};
