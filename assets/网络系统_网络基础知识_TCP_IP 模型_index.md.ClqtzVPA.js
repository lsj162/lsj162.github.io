import{_ as a,c as e,o as t,a5 as r}from"./chunks/framework.-E9IboRH.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"网络系统/网络基础知识/TCP_IP 模型/index.md","filePath":"网络系统/网络基础知识/TCP_IP 模型/index.md"}'),l={name:"网络系统/网络基础知识/TCP_IP 模型/index.md"},i=r('<h2 id="tcp-ip-概念层模型" tabindex="-1">TCP/IP 概念层模型 <a class="header-anchor" href="#tcp-ip-概念层模型" aria-label="Permalink to &quot;TCP/IP 概念层模型&quot;">​</a></h2><p>TCP/IP 模型是一种计算机网络通信模型，它描述了互联网协议套件的组成和工作原理。TCP/IP 模型是实际互联网通信的基础，它将网络通信过程划分为四个抽象层次，以便更好地理解和管理网络通信。</p><h2 id="tcp-ip-模型的四层" tabindex="-1">TCP/IP 模型的四层： <a class="header-anchor" href="#tcp-ip-模型的四层" aria-label="Permalink to &quot;TCP/IP 模型的四层：&quot;">​</a></h2><h2 id="_1-网络接口层-network-interface-layer" tabindex="-1">1. 网络接口层 (Network Interface Layer)： <a class="header-anchor" href="#_1-网络接口层-network-interface-layer" aria-label="Permalink to &quot;1. 网络接口层 (Network Interface Layer)：&quot;">​</a></h2><blockquote><ul><li>主要职责：处理物理介质和数据传输的硬件细节，如以太网、Wi-Fi、PPP 等。</li><li>传输单位：帧（Frame）。</li><li>功能：将数据帧从一个物理介质传输到另一个，进行物理寻址。</li></ul></blockquote><h2 id="_2-网际层-internet-layer" tabindex="-1">2. 网际层 (Internet Layer)： <a class="header-anchor" href="#_2-网际层-internet-layer" aria-label="Permalink to &quot;2. 网际层 (Internet Layer)：&quot;">​</a></h2><blockquote><ul><li>主要职责：处理数据包的路由和转发，确保数据从源主机到目标主机的传递。</li><li>传输单位：数据包（Packet）。</li><li>功能：负责逻辑寻址，选择最佳路径以将数据包从源传输到目标。</li></ul></blockquote><h2 id="_3-传输层-transport-layer" tabindex="-1">3. 传输层 (Transport Layer)： <a class="header-anchor" href="#_3-传输层-transport-layer" aria-label="Permalink to &quot;3. 传输层 (Transport Layer)：&quot;">​</a></h2><blockquote><ul><li>主要职责：提供端到端的数据传输服务，包括流量控制、错误检测和纠正，以及数据的分段和重组。</li><li>传输单位：数据段（Segment）。</li><li>功能：确保可靠的数据传输，包括流量控制、差错检测、重新传输等。包括 TCP 和 UDP 协议。</li></ul></blockquote><h2 id="_4-应用层-application-layer" tabindex="-1">4. 应用层 (Application Layer)： <a class="header-anchor" href="#_4-应用层-application-layer" aria-label="Permalink to &quot;4. 应用层 (Application Layer)：&quot;">​</a></h2><blockquote><ul><li>主要职责：包含了各种应用程序和协议，如 HTTP、SMTP、FTP 等，负责应用程序之间的通信和数据交换。</li><li>传输单位：消息（Message）。</li><li>功能：提供各种应用程序，使用户能够进行通信、访问资源和执行各种任务。</li></ul></blockquote><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p>AI GPT</p>',13),o=[i];function n(c,h,s,P,d,_){return t(),e("div",null,o)}const T=a(l,[["render",n]]);export{u as __pageData,T as default};
