import{_ as s,c as i,o as a,a6 as n}from"./chunks/framework.DwCPU-X7.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"计算机知识/数据结构/线性数据结构/队列 (Queue)/双端队列 (Deque).md","filePath":"计算机知识/数据结构/线性数据结构/队列 (Queue)/双端队列 (Deque).md","lastUpdated":1712539768000}'),p={name:"计算机知识/数据结构/线性数据结构/队列 (Queue)/双端队列 (Deque).md"},e=n(`<p>双端队列（Deque，Double-Ended Queue）是一种数据结构，它支持在表的两端进行插入和删除操作。它结合了栈（stack）和队列（queue）的操作，允许快速地从两端添加或移除元素，而不是只从一端进行，因此它是一种更灵活的数据结构。</p><p>Deque 的特性包括：</p><ol><li><strong>两端插入和删除</strong>：在双端队列的两端都可以快速插入和删除元素。</li><li><strong>高效访问</strong>：双端队列提供了在两端的快速插入和删除操作，同时提供了从两端到中心的线性时间访问。</li><li><strong>支持队列和栈操作</strong>：它既可以作为队列使用，也可以作为栈使用。作为队列时，它遵循先进先出的原则；作为栈时，它遵循后进先出的原则。</li></ol><p>在 Python 中，<code>collections</code>模块提供了一个名为<code>deque</code>的类，实现了双端队列。<code>deque</code>类提供了一个线程安全的双端队列，可以在 O(1)时间内从两端插入和删除元素。<code>deque</code>可以作为队列和栈使用，也可以用于实现其他的算法，如搜索算法等。</p><p>使用 Python 的<code>collections.deque</code>类的例子：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> collections </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> deque</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建一个空的双端队列</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dq </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> deque()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从右侧添加元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dq.append(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dq.append(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dq.append(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dq)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: deque([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从左侧添加元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dq.appendleft(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;z&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dq)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: deque([&#39;z&#39;, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从右侧删除元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dq.pop()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dq)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: deque([&#39;z&#39;, &#39;a&#39;, &#39;b&#39;])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从左侧删除元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dq.popleft()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dq)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: deque([&#39;a&#39;, &#39;b&#39;])</span></span></code></pre></div><p>在使用时，双端队列非常高效，非常适合需要在两端进行快速插入和删除操作的场景，例如在处理大量数据时进行缓冲处理或者作为动态数组的替代品。</p>`,7),l=[e];function t(h,k,d,E,r,c){return a(),i("div",null,l)}const y=s(p,[["render",t]]);export{g as __pageData,y as default};
