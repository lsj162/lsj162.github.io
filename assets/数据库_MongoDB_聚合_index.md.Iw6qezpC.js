import{_ as s,o as a,c as i,R as n}from"./chunks/framework.FQOLfzW2.js";const c=JSON.parse('{"title":"聚合","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"数据库/MongoDB/聚合/index.md","filePath":"数据库/MongoDB/聚合/index.md"}'),t={name:"数据库/MongoDB/聚合/index.md"},l=n(`<h1 id="聚合" tabindex="-1">聚合 <a class="header-anchor" href="#聚合" aria-label="Permalink to &quot;聚合&quot;">​</a></h1><p>没有索引，MongoDB 必须执行集合扫描，即扫描集合中的每个文档。</p><p>您不能在_id 字段上删除此索引。</p><h2 id="查询" tabindex="-1">查询 <a class="header-anchor" href="#查询" aria-label="Permalink to &quot;查询&quot;">​</a></h2><p>语法</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">db.collection.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aggregate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( [ { &lt;stage&gt; }, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] )</span></span></code></pre></div><h2 id="聚合管道阶段" tabindex="-1">聚合管道阶段 <a class="header-anchor" href="#聚合管道阶段" aria-label="Permalink to &quot;聚合管道阶段&quot;">​</a></h2><p>例子</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">db.orders.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aggregate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Stage 1: Filter pizza order documents by date range</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $match: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            date: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                $gte: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ISODate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2020-01-30&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                $lt: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ISODate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2022-01-30&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Stage 2: Group remaining documents by date and calculate results</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $group: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            _id: { $dateToString: { format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%Y-%m-%d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, date: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$date&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            totalOrderValue: { $sum: { $multiply: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$price&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$quantity&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            averageOrderQuantity: { $avg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$quantity&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Stage 3: Sort documents by totalOrderValue in descending order</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $sort: { totalOrderValue: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span></code></pre></div><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="https://www.mongodb.com/docs/manual/aggregation/" target="_blank" rel="noreferrer">https://www.mongodb.com/docs/manual/aggregation/</a></p>`,11),e=[l];function p(h,k,E,r,d,o){return a(),i("div",null,e)}const y=s(t,[["render",p]]);export{c as __pageData,y as default};
