import{_ as s,o as n,c as a,S as l}from"./chunks/framework.2524ba1c.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"后端/Nginx/运行/index.md","filePath":"后端/Nginx/运行/index.md"}'),p={name:"后端/Nginx/运行/index.md"},e=l(`<h2 id="启动、停止和重新加载配置" tabindex="-1">启动、停止和重新加载配置 <a class="header-anchor" href="#启动、停止和重新加载配置" aria-label="Permalink to &quot;启动、停止和重新加载配置&quot;">​</a></h2><p>要启动 nginx，请运行可执行文件。一旦 nginx 启动，就可以通过带 <code>-s</code> 参数调用可执行文件来控制它。使用以下常见的语法：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 启动</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 关闭</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重启</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 退出</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-V（编译器版本和配置参数）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 测试配置文件</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span></span></code></pre></div>`,3),o=[e];function t(c,i,r,y,C,d){return n(),a("div",null,o)}const D=s(p,[["render",t]]);export{A as __pageData,D as default};
