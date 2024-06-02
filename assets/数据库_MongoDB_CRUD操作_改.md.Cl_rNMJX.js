import{_ as s,c as a,o as i,a5 as n}from"./chunks/framework.DALfHeHd.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"数据库/MongoDB/CRUD操作/改.md","filePath":"数据库/MongoDB/CRUD操作/改.md","lastUpdated":1716891854000}'),p={name:"数据库/MongoDB/CRUD操作/改.md"},t=n(`<h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>   &lt;update operator&gt;: {</span></span>
<span class="line"><span>      &lt;field&gt; : {</span></span>
<span class="line"><span>         ...</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &lt;field&gt; : {</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>   &lt;update operator&gt;: {</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>更新文档的顶层包含以下一个或多个更新运算符：</p><ul><li><p>$set：将某个字段的值替换为指定的值</p></li><li><p>$inc：增加或减少字段值</p></li><li><p>$rename: 重命名字段</p></li><li><p>$unset：删除字段</p></li><li><p>$mul：将字段值乘以指定数字</p></li></ul><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myDB</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> client.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">db</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myDB&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myColl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myDB.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">collection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;items&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> filter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">465</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// update the value of the &#39;quantity&#39; field to 5</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> updateDocument</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $set: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        quantity: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myColl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateOne</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(filter, updateDocument);</span></span></code></pre></div>`,6),l=[t];function e(h,k,d,r,o,c){return i(),a("div",null,l)}const y=s(p,[["render",e]]);export{g as __pageData,y as default};
