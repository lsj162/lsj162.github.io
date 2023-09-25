import{_ as s,o as a,c as n,S as l}from"./chunks/framework.2524ba1c.js";const d=JSON.parse('{"title":"查询","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"数据库/Mysql/增删改查/查/index.md","filePath":"数据库/Mysql/增删改查/查/index.md"}'),e={name:"数据库/Mysql/增删改查/查/index.md"},p=l(`<h1 id="查询" tabindex="-1">查询 <a class="header-anchor" href="#查询" aria-label="Permalink to &quot;查询&quot;">​</a></h1><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    [ALL | DISTINCT | DISTINCTROW ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [HIGH_PRIORITY]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [STRAIGHT_JOIN]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [SQL_SMALL_RESULT] [SQL_BIG_RESULT] [SQL_BUFFER_RESULT]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [SQL_NO_CACHE] [SQL_CALC_FOUND_ROWS]</span></span>
<span class="line"><span style="color:#A6ACCD;">    select_expr [, select_expr] ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    [into_option]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> table_references</span></span>
<span class="line"><span style="color:#A6ACCD;">      [PARTITION partition_list]]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [WHERE where_condition]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [GROUP BY {col_name | expr | position}, ... [WITH ROLLUP]]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [HAVING where_condition]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#F78C6C;">WINDOW</span><span style="color:#A6ACCD;"> window_name </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> (window_spec)</span></span>
<span class="line"><span style="color:#A6ACCD;">        [, window_name AS (window_spec)] ...]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> {col_name | expr | position}</span></span>
<span class="line"><span style="color:#A6ACCD;">      [ASC | DESC], ... [WITH ROLLUP]]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [LIMIT {[offset,] row_count | row_count OFFSET offset}]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [into_option]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [FOR {</span><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> | SHARE}</span></span>
<span class="line"><span style="color:#A6ACCD;">        [OF tbl_name [, tbl_name] ...]</span></span>
<span class="line"><span style="color:#A6ACCD;">        [NOWAIT | SKIP LOCKED]</span></span>
<span class="line"><span style="color:#A6ACCD;">      | LOCK </span><span style="color:#F78C6C;">IN</span><span style="color:#A6ACCD;"> SHARE MODE]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [into_option]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">into_option: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">INTO</span><span style="color:#A6ACCD;"> OUTFILE </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file_name</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        [CHARACTER SET charset_name]</span></span>
<span class="line"><span style="color:#A6ACCD;">        export_options</span></span>
<span class="line"><span style="color:#A6ACCD;">  | </span><span style="color:#F78C6C;">INTO</span><span style="color:#A6ACCD;"> DUMPFILE </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file_name</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  | </span><span style="color:#F78C6C;">INTO</span><span style="color:#A6ACCD;"> var_name [, var_name] ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- 例子</span></span>
<span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> my_table;</span></span></code></pre></div><h2 id="where-条件" tabindex="-1">where 条件 <a class="header-anchor" href="#where-条件" aria-label="Permalink to &quot;where 条件&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">SELECT field1, field2,...fieldN FROM table_name1, table_name2...</span></span>
<span class="line"><span style="color:#A6ACCD;">[WHERE condition1 [AND [OR]] condition2.....</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> my_table </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sql</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><h2 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-label="Permalink to &quot;排序&quot;">​</a></h2><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> field1, field2,... </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> table_name1, table_name2...</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> field1 [ASC [DESC][默认 ASC]], [field2...] [ASC [DESC][默认 ASC]]</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> my_table </span><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> title </span><span style="color:#F78C6C;">ASC</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><h2 id="分组" tabindex="-1">分组 <a class="header-anchor" href="#分组" aria-label="Permalink to &quot;分组&quot;">​</a></h2><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> field1, field2,... </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> table_name1, table_name2...</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> field1 [ASC [DESC][默认 ASC]], [field2...] [ASC [DESC][默认 ASC]]</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> title, </span><span style="color:#82AAFF;">COUNT</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;">   my_table </span><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> title;</span></span></code></pre></div><h1 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h1>`,13),o=[p];function t(c,C,r,i,A,y){return a(),n("div",null,o)}const _=s(e,[["render",t]]);export{d as __pageData,_ as default};
