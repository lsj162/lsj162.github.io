import{_ as e,c as t,o as a,a5 as i}from"./chunks/framework.-E9IboRH.js";const f=JSON.parse('{"title":"什么是 TypeScript？它和 JavaScript 有什么区别？","description":"","frontmatter":{},"headers":[],"relativePath":"汇总面试题/前端TypeScript/Ai热门面试题.md","filePath":"汇总面试题/前端TypeScript/Ai热门面试题.md"}'),r={name:"汇总面试题/前端TypeScript/Ai热门面试题.md"},p=i('<h1 id="什么是-typescript-它和-javascript-有什么区别" tabindex="-1">什么是 TypeScript？它和 JavaScript 有什么区别？ <a class="header-anchor" href="#什么是-typescript-它和-javascript-有什么区别" aria-label="Permalink to &quot;什么是 TypeScript？它和 JavaScript 有什么区别？&quot;">​</a></h1><p>TypeScript 是一种由 Microsoft 开发的开源编程语言，它是 JavaScript 的一个超集。 区别：静态类型检查，类和接口；</p><h1 id="typescript-中的类型是什么-请举例说明几种常见的类型。" tabindex="-1">TypeScript 中的类型是什么？请举例说明几种常见的类型。 <a class="header-anchor" href="#typescript-中的类型是什么-请举例说明几种常见的类型。" aria-label="Permalink to &quot;TypeScript 中的类型是什么？请举例说明几种常见的类型。&quot;">​</a></h1><p>基本类型，数组类型，元组类型，枚举类型，任意类型，空值类型，null 和 undefined 类型；</p><h1 id="请解释-typescript-中的类型注解和类型推断。" tabindex="-1">请解释 TypeScript 中的类型注解和类型推断。 <a class="header-anchor" href="#请解释-typescript-中的类型注解和类型推断。" aria-label="Permalink to &quot;请解释 TypeScript 中的类型注解和类型推断。&quot;">​</a></h1><p>提高代码的可读性和可维护性。类型推断适用于简化代码，减少不必要的冗余，使代码更加简洁。</p><h1 id="什么是声明文件-declaration-files-为什么它们在-typescript-中很重要" tabindex="-1">什么是声明文件（declaration files）？为什么它们在 TypeScript 中很重要？ <a class="header-anchor" href="#什么是声明文件-declaration-files-为什么它们在-typescript-中很重要" aria-label="Permalink to &quot;什么是声明文件（declaration files）？为什么它们在 TypeScript 中很重要？&quot;">​</a></h1><p>声明文件（declaration files）是一种用于描述 JavaScript 代码库中类型和结构的文件，通常具有 .d.ts 扩展名。包含了变量、函数、类等的类型声明和接口定义； 对库的类型检查，代码提示，类型定义扩展；</p><h1 id="如何在-typescript-中实现模块化的代码拆分" tabindex="-1">如何在 TypeScript 中实现模块化的代码拆分？ <a class="header-anchor" href="#如何在-typescript-中实现模块化的代码拆分" aria-label="Permalink to &quot;如何在 TypeScript 中实现模块化的代码拆分？&quot;">​</a></h1><p>使用 ES6 模块（import 和 export），使用命名空间（namespace 和 export）</p><h1 id="什么是接口-interface-作用是什么-与-type-区别" tabindex="-1">什么是接口（interface）作用是什么，与 type 区别？ <a class="header-anchor" href="#什么是接口-interface-作用是什么-与-type-区别" aria-label="Permalink to &quot;什么是接口（interface）作用是什么，与 type 区别？&quot;">​</a></h1><p>接口（interface）是一种用来描述对象的形状（即属性和方法）的方式。只是用来进行类型检查和类型声明的工具。 都用于定义类型，区别：语法（定义接口，类型别名），拓展性（可继承，通过联合），兼容性（被类实现，不能）</p><h1 id="什么是泛型-generics-它在-typescript-中有什么用途" tabindex="-1">什么是泛型（generics）？它在 TypeScript 中有什么用途？ <a class="header-anchor" href="#什么是泛型-generics-它在-typescript-中有什么用途" aria-label="Permalink to &quot;什么是泛型（generics）？它在 TypeScript 中有什么用途？&quot;">​</a></h1><p>泛型（generics）它允许在定义函数、类或接口时使用类型参数；增强代码的可重用性；</p><h1 id="什么是枚举-enum-它在-typescript-中的作用是什么" tabindex="-1">什么是枚举（enum）？它在 TypeScript 中的作用是什么？ <a class="header-anchor" href="#什么是枚举-enum-它在-typescript-中的作用是什么" aria-label="Permalink to &quot;什么是枚举（enum）？它在 TypeScript 中的作用是什么？&quot;">​</a></h1><p>枚举（enum）是一种用于定义一组命名的常量集合的数据类型。可读性，自动映射；</p><h1 id="什么是联合类型-union-types-和交叉类型-intersection-types" tabindex="-1">什么是联合类型（union types）和交叉类型（intersection types）？ <a class="header-anchor" href="#什么是联合类型-union-types-和交叉类型-intersection-types" aria-label="Permalink to &quot;什么是联合类型（union types）和交叉类型（intersection types）？&quot;">​</a></h1><p>联合类型（Union Types）允许值属于多个不同类型之一，使用 | 符号连接； 交叉类型（Intersection Types）要求值具有多个类型的所有成员，使用 &amp; 符号连接。</p><h1 id="何时使用类-class-而不是接口-interface" tabindex="-1">何时使用类（class）而不是接口（interface）？ <a class="header-anchor" href="#何时使用类-class-而不是接口-interface" aria-label="Permalink to &quot;何时使用类（class）而不是接口（interface）？&quot;">​</a></h1><p>当需要创建可实例化的对象、封装数据和行为、使用继承和多态特性、实现抽象概念时，应该使用类来定义对象。</p><p>当只需要描述对象的形状、定义代码的合约、扩展现有类型、进行类型检查时，应该使用接口来描述对象。</p>',21),c=[p];function n(s,o,l,h,d,y){return a(),t("div",null,c)}const _=e(r,[["render",n]]);export{f as __pageData,_ as default};
