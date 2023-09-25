import{_ as e,o as t,c as a,S as l}from"./chunks/framework.2524ba1c.js";const p=JSON.parse('{"title":"Element","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/HTML/DOM 文档对象模型/Element/index.md","filePath":"前端/HTML/DOM 文档对象模型/Element/index.md"}'),n={name:"前端/HTML/DOM 文档对象模型/Element/index.md"},r=l('<h1 id="element" tabindex="-1">Element <a class="header-anchor" href="#element" aria-label="Permalink to &quot;Element&quot;">​</a></h1><p>Element 是一个通用性非常强的基类，所有 Document 对象下的对象都继承自它。这个接口描述了所有相同种类的元素所普遍具有的方法和属性。</p><p>属性继承</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">EventTarget &lt;- Node &lt;- Element</span></span></code></pre></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="element-attributes-只读" tabindex="-1">Element.attributes <code>只读</code> <a class="header-anchor" href="#element-attributes-只读" aria-label="Permalink to &quot;Element.attributes `只读`&quot;">​</a></h3><p>返回一个与该元素相关的所有属性集合 NamedNodeMap。</p><h3 id="element-classlist-只读" tabindex="-1">Element.classList <code>只读</code> <a class="header-anchor" href="#element-classlist-只读" aria-label="Permalink to &quot;Element.classList `只读`&quot;">​</a></h3><p>返回该元素包含的 class 属性，是一个 DOMTokenList。</p><h3 id="element-classname" tabindex="-1">Element.className <a class="header-anchor" href="#element-classname" aria-label="Permalink to &quot;Element.className&quot;">​</a></h3><p>一个 DOMString，表示这个元素的 class。</p><h3 id="element-clientheight-只读" tabindex="-1">Element.clientHeight <code>只读</code> <a class="header-anchor" href="#element-clientheight-只读" aria-label="Permalink to &quot;Element.clientHeight `只读`&quot;">​</a></h3><p>返回 Number 表示内部相对于外层元素的高度。</p><h3 id="element-clientleft-只读" tabindex="-1">Element.clientLeft <code>只读</code> <a class="header-anchor" href="#element-clientleft-只读" aria-label="Permalink to &quot;Element.clientLeft `只读`&quot;">​</a></h3><p>返回 Number 表示该元素距离它左边界的宽度。</p><h3 id="element-clienttop-只读" tabindex="-1">Element.clientTop <code>只读</code> <a class="header-anchor" href="#element-clienttop-只读" aria-label="Permalink to &quot;Element.clientTop `只读`&quot;">​</a></h3><p>返回 Number 表示该元素距离它上边界的高度。</p><h3 id="element-clientwidth-只读" tabindex="-1">Element.clientWidth <code>只读</code> <a class="header-anchor" href="#element-clientwidth-只读" aria-label="Permalink to &quot;Element.clientWidth `只读`&quot;">​</a></h3><p>返回 Number 表示该元素内部的宽度。</p><h3 id="element-id" tabindex="-1">Element.id <a class="header-anchor" href="#element-id" aria-label="Permalink to &quot;Element.id&quot;">​</a></h3><p>是一个 DOMString 表示这个元素的 id。</p><h3 id="element-innerhtml" tabindex="-1">Element.innerHTML <a class="header-anchor" href="#element-innerhtml" aria-label="Permalink to &quot;Element.innerHTML&quot;">​</a></h3><p>是一个 DOMString 表示这个元素的内容文本。</p><h3 id="element-localname-只读" tabindex="-1">Element.localName <code>只读</code> <a class="header-anchor" href="#element-localname-只读" aria-label="Permalink to &quot;Element.localName `只读`&quot;">​</a></h3><p>是一个 DOMString 表示这个元素名称本地化的部分。</p><h3 id="element-namespaceuri-只读" tabindex="-1">Element.namespaceURI <code>只读</code> <a class="header-anchor" href="#element-namespaceuri-只读" aria-label="Permalink to &quot;Element.namespaceURI `只读`&quot;">​</a></h3><p>元素对应的 namespace URI，如果没有则返回 null</p><h3 id="nondocumenttypechildnode-nextelementsibling-只读" tabindex="-1">NonDocumentTypeChildNode.nextElementSibling <code>只读</code> <a class="header-anchor" href="#nondocumenttypechildnode-nextelementsibling-只读" aria-label="Permalink to &quot;NonDocumentTypeChildNode.nextElementSibling `只读`&quot;">​</a></h3><p>是一个 Element, 该元素下一个兄弟节点，如果为 null 表示不存在..</p><h3 id="element-outerhtml" tabindex="-1">Element.outerHTML <a class="header-anchor" href="#element-outerhtml" aria-label="Permalink to &quot;Element.outerHTML&quot;">​</a></h3><p>是一个 DOMString，获取该 DOM 元素及其后代的 HTML 文本。在设置它的时候，会从给定的字符串开始解析，替换自身。</p><h3 id="nondocumenttypechildnode-previouselementsibling-只读" tabindex="-1">NonDocumentTypeChildNode.previousElementSibling <code>只读</code> <a class="header-anchor" href="#nondocumenttypechildnode-previouselementsibling-只读" aria-label="Permalink to &quot;NonDocumentTypeChildNode.previousElementSibling `只读`&quot;">​</a></h3><p>是一个 Element, 该元素上一个兄弟节点，如果为 null 表示不存在..</p><h3 id="element-scrollheight-只读" tabindex="-1">Element.scrollHeight <code>只读</code> <a class="header-anchor" href="#element-scrollheight-只读" aria-label="Permalink to &quot;Element.scrollHeight `只读`&quot;">​</a></h3><p>返回类型为： Number，表示元素的滚动视图高度。</p><h3 id="element-scrollleft" tabindex="-1">Element.scrollLeft <a class="header-anchor" href="#element-scrollleft" aria-label="Permalink to &quot;Element.scrollLeft&quot;">​</a></h3><p>返回类型为：Number，表示该元素横向滚动条距离最左的位移。</p><h3 id="element-scrolltop" tabindex="-1">Element.scrollTop <a class="header-anchor" href="#element-scrolltop" aria-label="Permalink to &quot;Element.scrollTop&quot;">​</a></h3><p>返回类型为：Number ，表示该元素纵向滚动条距离</p><h3 id="element-scrollwidth-只读" tabindex="-1">Element.scrollWidth <code>只读</code> <a class="header-anchor" href="#element-scrollwidth-只读" aria-label="Permalink to &quot;Element.scrollWidth `只读`&quot;">​</a></h3><p>返回类型为： Number ，表示元素的滚动视图宽度。</p><h3 id="element-shadowroot只读" tabindex="-1">Element.shadowRoot<code>只读</code> <a class="header-anchor" href="#element-shadowroot只读" aria-label="Permalink to &quot;Element.shadowRoot`只读`&quot;">​</a></h3><p>返回元素所承载的开放影子根，如果不存在开放影子根，则返回 null。</p><h3 id="element-tagname-只读" tabindex="-1">Element.tagName <code>只读</code> <a class="header-anchor" href="#element-tagname-只读" aria-label="Permalink to &quot;Element.tagName `只读`&quot;">​</a></h3><p>返回一个标签名称。</p><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="eventtarget-addeventlistener" tabindex="-1">EventTarget.addEventListener() <a class="header-anchor" href="#eventtarget-addeventlistener" aria-label="Permalink to &quot;EventTarget.addEventListener()&quot;">​</a></h3><p>将事件处理程序注册到元素上的方法。</p><h3 id="element-attachshadow" tabindex="-1">Element.attachShadow() <a class="header-anchor" href="#element-attachshadow" aria-label="Permalink to &quot;Element.attachShadow()&quot;">​</a></h3><p>将 Shadow DOM 树附加到指定元素并返回对其 ShadowRoot 的引用。</p><h3 id="eventtarget-dispatchevent" tabindex="-1">EventTarget.dispatchEvent() <a class="header-anchor" href="#eventtarget-dispatchevent" aria-label="Permalink to &quot;EventTarget.dispatchEvent()&quot;">​</a></h3><p>将事件分派到 DOM 中的此节点并返回一个布尔值，指示是否没有处理程序取消了该事件。</p><h3 id="element-getattribute" tabindex="-1">Element.getAttribute() <a class="header-anchor" href="#element-getattribute" aria-label="Permalink to &quot;Element.getAttribute()&quot;">​</a></h3><p>从当前节点检索指定属性的值并将其作为对象返回。</p><h3 id="element-getattributenames" tabindex="-1">Element.getAttributeNames() <a class="header-anchor" href="#element-getattributenames" aria-label="Permalink to &quot;Element.getAttributeNames()&quot;">​</a></h3><p>返回当前元素的属性名称数组。</p><h3 id="element-getboundingclientrect" tabindex="-1">Element.getBoundingClientRect() <a class="header-anchor" href="#element-getboundingclientrect" aria-label="Permalink to &quot;Element.getBoundingClientRect()&quot;">​</a></h3><p>返回元素的大小及其相对于视口的位置。</p><h3 id="element-getclientrects" tabindex="-1">Element.getClientRects() <a class="header-anchor" href="#element-getclientrects" aria-label="Permalink to &quot;Element.getClientRects()&quot;">​</a></h3><p>返回一个矩形集合，这些矩形指示客户端中每行文本的边界矩形。</p><h3 id="element-getelementsbyclassname" tabindex="-1">Element.getElementsByClassName() <a class="header-anchor" href="#element-getelementsbyclassname" aria-label="Permalink to &quot;Element.getElementsByClassName()&quot;">​</a></h3><p>参数中给出类的列表，返回一个动态的 HTMLCollection ，包含了所有持有这些类的后代元素。</p><h3 id="element-getelementsbytagname" tabindex="-1">Element.getElementsByTagName() <a class="header-anchor" href="#element-getelementsbytagname" aria-label="Permalink to &quot;Element.getElementsByTagName()&quot;">​</a></h3><p>返回一个实时 HTMLCollection，其中包含当前元素中特定标记名称的所有后代元素。</p><h3 id="element-hasattribute" tabindex="-1">Element.hasAttribute() <a class="header-anchor" href="#element-hasattribute" aria-label="Permalink to &quot;Element.hasAttribute()&quot;">​</a></h3><p>返回一个布尔值，指示元素是否具有指定的属性。</p><h3 id="element-hasattributes" tabindex="-1">Element.hasAttributes() <a class="header-anchor" href="#element-hasattributes" aria-label="Permalink to &quot;Element.hasAttributes()&quot;">​</a></h3><p>返回一个布尔值，指示该元素是否存在一个或多个 HTML 属性。</p><h3 id="element-insertadjacentelement" tabindex="-1">Element.insertAdjacentElement() <a class="header-anchor" href="#element-insertadjacentelement" aria-label="Permalink to &quot;Element.insertAdjacentElement()&quot;">​</a></h3><p>在相对于调用它的元素的给定位置插入给定元素节点。</p><h3 id="element-insertadjacenthtml" tabindex="-1">Element.insertAdjacentHTML() <a class="header-anchor" href="#element-insertadjacenthtml" aria-label="Permalink to &quot;Element.insertAdjacentHTML()&quot;">​</a></h3><p>将文本解析为 HTML 或 XML，并将结果节点插入树中给定的位置。</p><h3 id="element-insertadjacenttext" tabindex="-1">Element.insertAdjacentText() <a class="header-anchor" href="#element-insertadjacenttext" aria-label="Permalink to &quot;Element.insertAdjacentText()&quot;">​</a></h3><p>在相对于调用它的元素的给定位置插入给定文本节点。</p><h3 id="element-queryselector" tabindex="-1">Element.querySelector() <a class="header-anchor" href="#element-queryselector" aria-label="Permalink to &quot;Element.querySelector()&quot;">​</a></h3><p>返回与相对于该元素的指定选择器字符串匹配的第一个 Node。</p><h3 id="element-queryselectorall" tabindex="-1">Element.querySelectorAll() <a class="header-anchor" href="#element-queryselectorall" aria-label="Permalink to &quot;Element.querySelectorAll()&quot;">​</a></h3><p>返回与相对于元素的指定选择器字符串匹配的节点的 NodeList。</p><h3 id="element-removeattribute" tabindex="-1">Element.removeAttribute() <a class="header-anchor" href="#element-removeattribute" aria-label="Permalink to &quot;Element.removeAttribute()&quot;">​</a></h3><p>从当前节点中删除指定的属性。</p><h3 id="eventtarget-removeeventlistener" tabindex="-1">EventTarget.removeEventListener() <a class="header-anchor" href="#eventtarget-removeeventlistener" aria-label="Permalink to &quot;EventTarget.removeEventListener()&quot;">​</a></h3><p>从元素中删除事件侦听器。</p><h3 id="element-scroll" tabindex="-1">Element.scroll() <a class="header-anchor" href="#element-scroll" aria-label="Permalink to &quot;Element.scroll()&quot;">​</a></h3><p>滚动到给定元素内的一组特定坐标。</p><h3 id="element-scrollby" tabindex="-1">Element.scrollBy() <a class="header-anchor" href="#element-scrollby" aria-label="Permalink to &quot;Element.scrollBy()&quot;">​</a></h3><p>将元素滚动给定的量。</p><h3 id="element-scrollto" tabindex="-1">Element.scrollTo() <a class="header-anchor" href="#element-scrollto" aria-label="Permalink to &quot;Element.scrollTo()&quot;">​</a></h3><p>滚动到给定元素内的一组特定坐标。</p><h3 id="element-setattribute" tabindex="-1">Element.setAttribute() <a class="header-anchor" href="#element-setattribute" aria-label="Permalink to &quot;Element.setAttribute()&quot;">​</a></h3><p>设置当前节点的命名属性的值。</p><h3 id="element-setpointercapture" tabindex="-1">Element.setPointerCapture() <a class="header-anchor" href="#element-setpointercapture" aria-label="Permalink to &quot;Element.setPointerCapture()&quot;">​</a></h3><p>指定特定元素作为未来指针事件的捕获目标。</p><h3 id="element-toggleattribute" tabindex="-1">Element.toggleAttribute() <a class="header-anchor" href="#element-toggleattribute" aria-label="Permalink to &quot;Element.toggleAttribute()&quot;">​</a></h3><p>在指定元素上切换布尔属性，如果存在则将其删除，如果不存在则将其添加。</p>',94),o=[r];function i(m,h,s,c,d,u){return t(),a("div",null,o)}const E=e(n,[["render",i]]);export{p as __pageData,E as default};
