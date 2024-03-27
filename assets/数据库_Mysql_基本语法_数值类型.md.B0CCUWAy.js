import{_ as s,c as a,o as n,a5 as t}from"./chunks/framework.AYenO5Lm.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"数据库/Mysql/基本语法/数值类型.md","filePath":"数据库/Mysql/基本语法/数值类型.md"}'),p={name:"数据库/Mysql/基本语法/数值类型.md"},e=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>类型            大小            范围（有符号）          范围（无符号）          用途</span></span>
<span class="line"><span>TINYINT	    1 Bytes	(-128，127)	(0，255)	小整数值</span></span>
<span class="line"><span>SMALLINT	2 Bytes	(-32 768，32 767)	(0，65 535)	大整数值</span></span>
<span class="line"><span>MEDIUMINT	3 Bytes	(-8 388 608，8 388 607)	(0，16 777 215)	大整数值</span></span>
<span class="line"><span>INT或INTEGER	4 Bytes	(-2 147 483 648，2 147 483 647)	(0，4 294 967 295)	大整数值</span></span>
<span class="line"><span>BIGINT	8 Bytes	(-9,223,372,036,854,775,808，9 223 372 036 854 775 807)	(0，18 446 744 073 709 551 615)	极大整数值</span></span>
<span class="line"><span>FLOAT	4 Bytes	(-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38)	0，(1.175 494 351 E-38，3.402 823 466 E+38)	单精度</span></span>
<span class="line"><span>浮点数值</span></span>
<span class="line"><span>DOUBLE	8 Bytes	(-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308)	0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308)	双精度</span></span>
<span class="line"><span>浮点数值</span></span>
<span class="line"><span>DECIMAL	对DECIMAL(M,D) ，如果M&gt;D，为M+2否则为D+2	依赖于M和D的值	依赖于M和D的值	小数值</span></span></code></pre></div>`,1),l=[e];function c(i,_,o,r,d,E){return n(),a("div",null,l)}const I=s(p,[["render",c]]);export{h as __pageData,I as default};
