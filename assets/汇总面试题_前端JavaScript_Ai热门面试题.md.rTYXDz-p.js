import{_ as a,c as e,o as t,a5 as i}from"./chunks/framework.-E9IboRH.js";const _=JSON.parse('{"title":"什么是 JavaScript？","description":"","frontmatter":{},"headers":[],"relativePath":"汇总面试题/前端JavaScript/Ai热门面试题.md","filePath":"汇总面试题/前端JavaScript/Ai热门面试题.md"}'),r={name:"汇总面试题/前端JavaScript/Ai热门面试题.md"},o=i('<h1 id="什么是-javascript" tabindex="-1">什么是 JavaScript？ <a class="header-anchor" href="#什么是-javascript" aria-label="Permalink to &quot;什么是 JavaScript？&quot;">​</a></h1><p>JavaScript 是一种高级的、解释性的编程语言。</p><h1 id="javascript-的基本数据类型有哪些" tabindex="-1">JavaScript 的基本数据类型有哪些？ <a class="header-anchor" href="#javascript-的基本数据类型有哪些" aria-label="Permalink to &quot;JavaScript 的基本数据类型有哪些？&quot;">​</a></h1><p>基本数据类型：String，Number，Boolean，Null，Undefined，Symbol，BigInt 复杂数据类型：对象（Object）、数组（Array）、函数（Function）</p><h1 id="什么是-dom-🚮" tabindex="-1">什么是 DOM？🚮 <a class="header-anchor" href="#什么是-dom-🚮" aria-label="Permalink to &quot;什么是 DOM？🚮&quot;">​</a></h1><p>DOM 将文档解析为一个由节点组成的树形结构，DOM 提供了一组标准化的方法和属性。</p><h1 id="什么是立即执行函数表达式-iife-🚮" tabindex="-1">什么是立即执行函数表达式（IIFE）？🚮 <a class="header-anchor" href="#什么是立即执行函数表达式-iife-🚮" aria-label="Permalink to &quot;什么是立即执行函数表达式（IIFE）？🚮&quot;">​</a></h1><p>函数立即执行，创建闭包，避免变量污染，模块化开发，立即执行异步操作；</p><h1 id="什么是事件委托-🚮" tabindex="-1">什么是事件委托？🚮 <a class="header-anchor" href="#什么是事件委托-🚮" aria-label="Permalink to &quot;什么是事件委托？🚮&quot;">​</a></h1><p>只需要在父元素上绑定一个事件处理程序，从而减少了事件处理程序的数量，提高了性能。</p><h1 id="解释一下事件冒泡和事件捕获-🚮" tabindex="-1">解释一下事件冒泡和事件捕获？🚮 <a class="header-anchor" href="#解释一下事件冒泡和事件捕获-🚮" aria-label="Permalink to &quot;解释一下事件冒泡和事件捕获？🚮&quot;">​</a></h1><p>事件捕获是从外向内的过程，而事件冒泡是从内向外的过程。这两种过程结合起来构成了 JavaScript 事件处理模型。</p><h1 id="如何判断一个变量的数据类型-🚮" tabindex="-1">如何判断一个变量的数据类型？🚮 <a class="header-anchor" href="#如何判断一个变量的数据类型-🚮" aria-label="Permalink to &quot;如何判断一个变量的数据类型？🚮&quot;">​</a></h1><p>使用 typeof 操作符，使用 instanceof 操作符，使用 Object.prototype.toString.call() 方法； 区别：typeof 用于检查变量的基本数据类型，而 instanceof 通常用于检查自定义对象的类型。</p><h1 id="解释一下-javascript-中的-null-和-undefined-🚮" tabindex="-1">解释一下 JavaScript 中的 null 和 undefined？🚮 <a class="header-anchor" href="#解释一下-javascript-中的-null-和-undefined-🚮" aria-label="Permalink to &quot;解释一下 JavaScript 中的 null 和 undefined？🚮&quot;">​</a></h1><p>null 通常用于表示值的缺失或对象的不存在。 undefined 通常用于表示变量未定义或未初始化。</p><h1 id="什么是变量提升" tabindex="-1">什么是变量提升？ <a class="header-anchor" href="#什么是变量提升" aria-label="Permalink to &quot;什么是变量提升？&quot;">​</a></h1><p>代码运行时，变量和函数的声明会被提升到它们所在作用域的顶部，变量提升只会提升声明，而不会提升赋值。</p><h1 id="什么是函数声明和函数表达式的区别-🚮" tabindex="-1">什么是函数声明和函数表达式的区别？🚮 <a class="header-anchor" href="#什么是函数声明和函数表达式的区别-🚮" aria-label="Permalink to &quot;什么是函数声明和函数表达式的区别？🚮&quot;">​</a></h1><p>提升行为：函数声明会被提升到当前作用域的顶部，而函数表达式不会被提升。</p><h1 id="解释一下原型链、作用域链是什么" tabindex="-1">解释一下原型链、作用域链是什么？ <a class="header-anchor" href="#解释一下原型链、作用域链是什么" aria-label="Permalink to &quot;解释一下原型链、作用域链是什么？&quot;">​</a></h1><p>原型链（Prototype Chain）是用于实现继承和属性查找的一种机制。作用域链是执行过程中变量的查找顺序。</p><h1 id="什么是函数作用域和块级作用域" tabindex="-1">什么是函数作用域和块级作用域？ <a class="header-anchor" href="#什么是函数作用域和块级作用域" aria-label="Permalink to &quot;什么是函数作用域和块级作用域？&quot;">​</a></h1><p>函数作用域：在函数作用域中声明的变量只能在函数内部访问，外部无法访问（ES6 之前只有这个）。 块级作用域：在块级作用域中声明的变量只能在块级作用域内部访问，外部无法访问（通常出现在 {} 中）。</p><h1 id="如何避免-javascript-中的内存泄漏" tabindex="-1">如何避免 JavaScript 中的内存泄漏？ <a class="header-anchor" href="#如何避免-javascript-中的内存泄漏" aria-label="Permalink to &quot;如何避免 JavaScript 中的内存泄漏？&quot;">​</a></h1><ol><li>避免死循环引用</li><li>正确使用闭包</li><li>及时释放事件监听器：及时使用 removeEventListener 移除监听器</li><li>避免大量 DOM 节点的引用</li><li>避免过度使用全局变量：全局变量会一直存在于内存中，直到页面关闭。</li><li>优化代码结构：减少内存使用</li></ol>',26),l=[o];function n(c,h,d,p,s,u){return t(),e("div",null,l)}const b=a(r,[["render",n]]);export{_ as __pageData,b as default};
