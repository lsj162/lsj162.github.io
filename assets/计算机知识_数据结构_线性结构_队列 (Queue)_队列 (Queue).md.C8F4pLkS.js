import{_ as e,c as t,o as u,a5 as a}from"./chunks/framework.DALfHeHd.js";const Q=JSON.parse('{"title":"队列 (Queue)","description":"","frontmatter":{},"headers":[],"relativePath":"计算机知识/数据结构/线性结构/队列 (Queue)/队列 (Queue).md","filePath":"计算机知识/数据结构/线性结构/队列 (Queue)/队列 (Queue).md","lastUpdated":1717313630000}'),_={name:"计算机知识/数据结构/线性结构/队列 (Queue)/队列 (Queue).md"},o=a('<h1 id="队列-queue" tabindex="-1">队列 (Queue) <a class="header-anchor" href="#队列-queue" aria-label="Permalink to &quot;队列 (Queue)&quot;">​</a></h1><p>队列（Queue）是一种先进先出（First In First Out，简称 FIFO）的数据结构，它只允许在一端进行插入元素，在另一端进行删除元素的线性表。</p><p>在队列中，新添加的元素总是位于队尾，而最早被添加的元素总是位于队首。当进行出队操作时，队首的元素将被删除并返回。当进行入队操作时，新元素将被添加到队尾。</p><p>队列中两个主要的操作是：</p><ol><li>入队（Enqueue）：在队尾添加一个元素。</li><li>出队（Dequeue）：从队首删除一个元素。</li></ol><p>队列的主要优点是操作的高效性和公平性。它确保了所有元素都有相同的机会被处理，遵循先到先服务的原则。</p><p>队列的实现可以有多种方式，包括：</p><ul><li>顺序队列：使用数组实现，操作简单，但有可能浪费内存空间。</li><li>链式队列：使用链表实现，可以动态地分配和释放内存，更加灵活。</li></ul><p>队列的应用非常广泛，包括线程池管理、任务调度、缓冲管理、网络数据传输、打印队列等场景。</p>',9),i=[o];function l(r,s,p,n,c,d){return u(),t("div",null,i)}const m=e(_,[["render",l]]);export{Q as __pageData,m as default};
