import{_ as s,c as i,o as a,a6 as t}from"./chunks/framework.DwCPU-X7.js";const E=JSON.parse('{"title":"链表 (Linked List)","description":"","frontmatter":{},"headers":[],"relativePath":"计算机知识/数据结构/线性数据结构/链表 (Linked List)/链表 (Linked List).md","filePath":"计算机知识/数据结构/线性数据结构/链表 (Linked List)/链表 (Linked List).md","lastUpdated":1712539768000}'),e={name:"计算机知识/数据结构/线性数据结构/链表 (Linked List)/链表 (Linked List).md"},n=t(`<h1 id="链表-linked-list" tabindex="-1">链表 (Linked List) <a class="header-anchor" href="#链表-linked-list" aria-label="Permalink to &quot;链表 (Linked List)&quot;">​</a></h1><p>链表是一种物理存储单元上非连续、非顺序的存储结构，链表中每一个元素称为结点。</p><p>每个结点都有两部分组成：</p><ul><li>数据域和指针域。数据域存储结点的值，而指针域则指向下一个结点。</li></ul><p>由于链表的每个结点都有指针域，所以链表可以动态分配内存。</p><p>链表的类型主要分为单链表和双链表两种。单链表只有一个指针域，指向下一个结点，而双链表则有两个指针域，分别指向前驱结点和后继结点。</p><p>在 C 语言中，链表可以通过结构体和指针来实现。结构体可以存储结点的数据域和指针域，而指针则可以实现结点之间的连接。例如：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Node {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Node </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> next;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>链表的操作包括：</p><ul><li>插入结点和删除结点。</li></ul>`,10),l=[n];function p(d,h,k,r,c,o){return a(),i("div",null,l)}const L=s(e,[["render",p]]);export{E as __pageData,L as default};
