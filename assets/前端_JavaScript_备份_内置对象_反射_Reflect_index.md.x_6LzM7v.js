import{_ as e,o as t,c as r,R as a}from"./chunks/framework.FQOLfzW2.js";const _=JSON.parse('{"title":"Reflect","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/JavaScript/备份/内置对象/反射/Reflect/index.md","filePath":"前端/JavaScript/备份/内置对象/反射/Reflect/index.md"}'),p={name:"前端/JavaScript/备份/内置对象/反射/Reflect/index.md"},o=a('<h1 id="reflect" tabindex="-1">Reflect <a class="header-anchor" href="#reflect" aria-label="Permalink to &quot;Reflect&quot;">​</a></h1><p>Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与 proxy handler (en-US) 的方法相同。Reflect 不是一个函数对象，因此它是不可构造的。</p><h2 id="静态方法" tabindex="-1">静态方法 <a class="header-anchor" href="#静态方法" aria-label="Permalink to &quot;静态方法&quot;">​</a></h2><p>Reflect.apply(target, thisArgument, argumentsList) 对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 Function.prototype.apply() 功能类似。</p><p>Reflect.construct(target, argumentsList[, newTarget]) 对构造函数进行 new 操作，相当于执行 new target(...args)。</p><p>Reflect.defineProperty(target, propertyKey, attributes) 和 Object.defineProperty() 类似。如果设置成功就会返回 true</p><p>Reflect.deleteProperty(target, propertyKey) 作为函数的 delete 操作符，相当于执行 delete target[name]。</p><p>Reflect.get(target, propertyKey[, receiver]) 获取对象身上某个属性的值，类似于 target[name]。</p><p>Reflect.getOwnPropertyDescriptor(target, propertyKey) 类似于 Object.getOwnPropertyDescriptor()。如果对象中存在该属性，则返回对应的属性描述符，否则返回 undefined。</p><p>Reflect.getPrototypeOf(target) 类似于 Object.getPrototypeOf()。</p><p>Reflect.has(target, propertyKey) 判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同。</p><p>Reflect.isExtensible(target) 类似于 Object.isExtensible().</p><p>Reflect.ownKeys(target) 返回一个包含所有自身属性（不包含继承属性）的数组。(类似于 Object.keys(), 但不会受 enumerable 影响).</p><p>Reflect.preventExtensions(target) 类似于 Object.preventExtensions()。返回一个 Boolean。</p><p>Reflect.set(target, propertyKey, value[, receiver]) 将值分配给属性的函数。返回一个 Boolean，如果更新成功，则返回 true。</p><p>Reflect.setPrototypeOf(target, prototype) 设置对象原型的函数。返回一个 Boolean，如果更新成功，则返回 true。</p>',16),c=[o];function n(l,i,s,f,d,g){return t(),r("div",null,c)}const R=e(p,[["render",n]]);export{_ as __pageData,R as default};
