import{_ as s,o as a,c as o,S as n}from"./chunks/framework.2524ba1c.js";const C=JSON.parse('{"title":"索引","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"数据库/MongoDB/索引/index.md","filePath":"数据库/MongoDB/索引/index.md"}'),l={name:"数据库/MongoDB/索引/index.md"},e=n('<h1 id="索引" tabindex="-1">索引 <a class="header-anchor" href="#索引" aria-label="Permalink to &quot;索引&quot;">​</a></h1><p>索引支持 MongoDB 中查询的高效执行。如果没有索引，MongoDB 必须扫描集合中的每个文档才能返回查询结果。如果查询存在适当的索引，MongoDB 会使用该索引来限制必须扫描的文档数量。</p><p>MongoDB 在创建集合期间在 _id 字段上创建唯一索引。您不能在_id 字段上删除此索引。</p><h2 id="查询索引" tabindex="-1">查询索引 <a class="header-anchor" href="#查询索引" aria-label="Permalink to &quot;查询索引&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.&lt;</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">&gt;.</span><span style="color:#82AAFF;">getIndexes</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><h2 id="创建索引" tabindex="-1">创建索引 <a class="header-anchor" href="#创建索引" aria-label="Permalink to &quot;创建索引&quot;">​</a></h2><p>索引一旦创建就无法重命名。</p><p>语法</p><p>要创建索引，请使用 createIndex()shell 方法或驱动程序的等效方法。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createIndex</span><span style="color:#A6ACCD;">( </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">and</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">index</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">specification</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> )</span></span></code></pre></div><p>例子</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createIndex</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="删除索引" tabindex="-1">删除索引 <a class="header-anchor" href="#删除索引" aria-label="Permalink to &quot;删除索引&quot;">​</a></h2><p>空参数，则会删除除索引之外的所有索引_id</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.&lt;</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">&gt;.</span><span style="color:#82AAFF;">dropIndexes</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;index1&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;index2&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;index3&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="https://www.mongodb.com/docs/manual/indexes/" target="_blank" rel="noreferrer">https://www.mongodb.com/docs/manual/indexes/</a></p>',17),p=[e];function t(c,r,D,i,d,y){return a(),o("div",null,p)}const A=s(l,[["render",t]]);export{C as __pageData,A as default};
