import{_ as t,c as e,o as a,a6 as p}from"./chunks/framework.DwCPU-X7.js";const g=JSON.parse('{"title":"Date","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/JavaScript/基础笔记/内置对象/数字和日期对象/Date/index.md","filePath":"前端/JavaScript/基础笔记/内置对象/数字和日期对象/Date/index.md","lastUpdated":1711979253000}'),o={name:"前端/JavaScript/基础笔记/内置对象/数字和日期对象/Date/index.md"},r=p('<h1 id="date" tabindex="-1">Date <a class="header-anchor" href="#date" aria-label="Permalink to &quot;Date&quot;">​</a></h1><h2 id="date-构造函数" tabindex="-1">Date() 构造函数 <a class="header-anchor" href="#date-构造函数" aria-label="Permalink to &quot;Date() 构造函数&quot;">​</a></h2><p>Date() 构造函数可以创建一个 Date 实例或返回代表当前时间的字符串。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><p>Date.prototype (en-US) 允许为 Date 对象添加属性。</p><p>Date.length Date.length 的值是 7。这是该构造函数可接受的参数个数。</p><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><p>Date.now() 返回自 1970-1-1 00:00:00 UTC（世界标准时间）至今所经过的毫秒数。</p><p>Date.parse() 解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数。</p><p>备注： 由于浏览器差异和不一致，强烈建议不要使用 Date.parse 解析字符串。</p><p>Date.UTC() 接受和构造函数最长形式的参数相同的参数（从 2 到 7），并返回从 1970-01-01 00:00:00 UTC 开始所经过的毫秒数。</p><h2 id="javascript-date-实例" tabindex="-1">JavaScript Date 实例 <a class="header-anchor" href="#javascript-date-实例" aria-label="Permalink to &quot;JavaScript Date 实例&quot;">​</a></h2><p>所有的 Date 实例都继承自 Date.prototype (en-US)。修改 Date 构造函数的原型对象会影响到所有的 Date 实例。</p><h3 id="实例属性" tabindex="-1">实例属性 <a class="header-anchor" href="#实例属性" aria-label="Permalink to &quot;实例属性&quot;">​</a></h3><p>Date.prototype.constructor 返回创建了实例的构造函数，默认是 Date 构造函数。</p><h3 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h3><p>Date.prototype.getDate() 根据本地时间，返回一个指定的 Date 对象为一个月中的哪一日（1-31）。</p><p>Date.prototype.getDay() 根据本地时间，返回一个指定的 Date 对象是在一周中的第几天（0-6），0 表示星期天。</p><p>Date.prototype.getFullYear() 根据本地时间，返回一个指定的 Date 对象的完整年份（四位数年份）。</p><p>Date.prototype.getHours() 根据本地时间，返回一个指定的 Date 对象的小时（0–23）。</p><p>Date.prototype.getMilliseconds() 根据本地时间，返回一个指定的 Date 对象的毫秒数（0–999）。</p><p>Date.prototype.getMinutes() 根据本地时间，返回一个指定的 Date 对象的分钟数（0–59）。</p><p>Date.prototype.getMonth() 根据本地时间，返回一个指定的 Date 对象的月份（0–11），0 表示一年中的第一月。</p><p>Date.prototype.getSeconds() 根据本地时间，返回一个指定的 Date 对象的秒数（0–59）。</p><p>Date.prototype.getTime() 返回一个数值，表示从 1970 年 1 月 1 日 0 时 0 分 0 秒（UTC，即协调世界时）距离该 Date 对象所代表时间的毫秒数。（更早的时间会用负数表示）</p><p>Date.prototype.getTimezoneOffset() 返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟。</p><p>Date.prototype.getUTCDate() 以协调世界时为标准，返回一个指定的 Date 对象为一个月中的哪一日（1-31）。</p><p>Date.prototype.getUTCDay() 以协调世界时为标准，返回一个指定的 Date 对象是在一周中的第几天（0-6），0 表示星期天。</p><p>Date.prototype.getUTCFullYear() 以协调世界时为标准，返回一个指定的 Date 对象的完整年份（四位数年份）。</p><p>Date.prototype.getUTCHours() 以协调世界时为标准，返回一个指定的 Date 对象的小时（0–23）。</p><p>Date.prototype.getUTCMilliseconds() 以协调世界时为标准，返回一个指定的 Date 对象的毫秒数（0–999）。</p><p>Date.prototype.getUTCMinutes() 以协调世界时为标准，返回一个指定的 Date 对象的分钟数（0–59）。</p><p>Date.prototype.getUTCMonth() 以协调世界时为标准，返回一个指定的 Date 对象的月份（0–11），0 表示一年中的第一月。</p><p>Date.prototype.getUTCSeconds() 以协调世界时为标准，返回一个指定的 Date 对象的秒数（0–59）。</p><p>Date.prototype.getYear() 根据本地时间，返回一个指定的 Date 对象的相对年份（相对 1900 年，通常是 2 到 3 位数字）。请改用 getFullYear 。</p><p>Date.prototype.setDate() 根据本地时间，设置一个 Date 对象在所属月份中的天数。</p><p>Date.prototype.setFullYear() 根据本地时间，设置一个 Date 对象的完整年份（四位数年份）。</p><p>Date.prototype.setHours() 根据本地时间，设置一个 Date 对象的小时数。</p><p>Date.prototype.setMilliseconds() 根据本地时间，设置一个 Date 对象的豪秒数。</p><p>Date.prototype.setMinutes() 根据本地时间，设置一个 Date 对象的分钟数。</p><p>Date.prototype.setMonth() 根据本地时间，设置一个 Date 对象的月份。</p><p>Date.prototype.setSeconds() 根据本地时间，设置一个 Date 对象的秒数。</p><p>Date.prototype.setTime() 用一个从 1970-1-1 00:00:00 UTC 计时的毫秒数来为一个 Date 对象设置时间。用负数来设置更早的时间。</p><p>Date.prototype.setUTCDate() 以协调世界时为标准，设置一个 Date 对象在所属月份中的天数。</p><p>Date.prototype.setUTCFullYear() 以协调世界时为标准，设置一个 Date 对象的完整年份（四位数年份）。</p><p>Date.prototype.setUTCHours() 以协调世界时为标准，设置一个 Date 对象的小时数。</p><p>Date.prototype.setUTCMilliseconds() 以协调世界时为标准，设置一个 Date 对象的豪秒数。</p><p>Date.prototype.setUTCMinutes() 以协调世界时为标准，设置一个 Date 对象的分钟数。</p><p>Date.prototype.setUTCMonth() 以协调世界时为标准，设置一个 Date 对象的月份。</p><p>Date.prototype.setUTCSeconds() 以协调世界时为标准，设置一个 Date 对象的秒数。</p><p>Date.prototype.setYear() 根据本地时间，设置一个 Date 对象的相对年份（相对 1900 年，通常是 2 到 3 位数字）。请改用 setFullYear 。</p><p>Date.prototype.toDateString() 以美式英语和人类易读的表述形式返回一个 Date 对象日期部分的字符串。</p><p>Date.prototype.toISOString() 将指定 Date 对象转换成 ISO 格式表述的字符串并返回。</p><p>Date.prototype.toJSON() 返回指定 Date 对象调用 toISOString() 方法的返回值。在 JSON.stringify() 中使用。</p><p>Date.prototype.toLocaleDateString() 返回一个表述指定 Date 对象的日期部分字符串。该字符串格式因不同语言而不同。</p><p>Date.prototype.toLocaleString() 返回一个表述指定 Date 对象的字符串。该字符串格式因不同语言而不同。</p><p>Date.prototype.toLocaleTimeString() 返回一个表述指定 Date 对象时间部分的的字符串。该字符串格式因不同语言而不同。</p><p>Date.prototype.toString() 返回一个字符串，表示该 Date 对象。覆盖了 Object.prototype.toString() 方法。</p><p>Date.prototype.toTimeString() 以人类易读形式返回一个 Date 对象时间部分的字符串，该字符串以美式英语格式化。</p><p>Date.prototype.toUTCString() 使用 UTC 时区，把一个 Date 对象转换为一个字符串。</p><p>Date.prototype.valueOf() 返回一个 Date 对象的原始值。覆盖了 Object.prototype.valueOf() 方法。</p>',62),D=[r];function s(i,n,l,d,c,h){return a(),e("div",null,D)}const u=t(o,[["render",s]]);export{g as __pageData,u as default};
