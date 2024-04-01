import{_ as a,c as p,o as e,a6 as t}from"./chunks/framework.DwCPU-X7.js";const y=JSON.parse('{"title":"Map","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/JavaScript/教程/内置对象/键值集合/Map/index.md","filePath":"前端/JavaScript/教程/内置对象/键值集合/Map/index.md","lastUpdated":1711682507000}'),o={name:"前端/JavaScript/教程/内置对象/键值集合/Map/index.md"},r=t('<h1 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;Map&quot;">​</a></h1><p>Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者基本类型）都可以作为一个键或一个值。</p><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><p>Map.prototype.clear() 移除 Map 对象中所有的键值对。</p><p>Map.prototype.delete() 移除 Map 对象中指定的键值对，如果键值对存在并成功被移除，返回 true，否则返回 false。调用 delete 后再调用 map.has(key) 将返回 false。</p><p>Map.prototype.get() 返回与指定的键 key 关联的值，若不存在关联的值，则返回 undefined。</p><p>Map.prototype.has() 返回一个布尔值，用来表明 Map 对象中是否存在与指定的键 key 关联的值。</p><p>Map.prototype.set() 在 Map 对象中设置与指定的键 key 关联的值，并返回 Map 对象。</p><p>Map.prototype[@@iterator]() 返回一个新的迭代对象，其为一个包含 Map 对象中所有键值对的 [key, value] 数组，并以插入 Map 对象的顺序排列。</p><p>Map.prototype.keys() 返回一个新的迭代对象，其中包含 Map 对象中所有的键，并以插入 Map 对象的顺序排列。</p><p>Map.prototype.values() 返回一个新的迭代对象，其中包含 Map 对象中所有的值，并以插入 Map 对象的顺序排列。</p><p>Map.prototype.entries() 返回一个新的迭代对象，其为一个包含 Map 对象中所有键值对的 [key, value] 数组，并以插入 Map 对象的顺序排列。</p><p>Map.prototype.forEach() 以插入的顺序对 Map 对象中存在的键值对分别调用一次 callbackFn。如果给定了 thisArg 参数，这个参数将会是回调函数中 this 的值。</p>',13),s=[r];function i(n,M,c,d,l,_){return e(),p("div",null,s)}const u=a(o,[["render",i]]);export{y as __pageData,u as default};
