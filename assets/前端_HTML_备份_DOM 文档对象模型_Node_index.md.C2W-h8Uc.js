import{_ as s,c as a,o as e,a6 as i}from"./chunks/framework.DwCPU-X7.js";const u=JSON.parse('{"title":"Node","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"前端/HTML/备份/DOM 文档对象模型/Node/index.md","filePath":"前端/HTML/备份/DOM 文档对象模型/Node/index.md","lastUpdated":1711585217000}'),t={name:"前端/HTML/备份/DOM 文档对象模型/Node/index.md"},n=i('<h1 id="node" tabindex="-1">Node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;Node&quot;">​</a></h1><p>Node 是一个接口，各种类型的 DOM API 对象会从这个接口继承。它允许我们使用相似的方式对待这些不同类型的对象；比如，继承同一组方法，或者用同样的方式测试。</p><p>以下接口都从 Node 继承其方法和属性：</p><div class="tip custom-block"><p class="custom-block-title">备注：</p><p><code>Document</code> <code>Element</code> <code>Attr</code> <code>CharacterData</code> <code>Text</code><code>Comment</code> <code>ProcessingInstruction</code> <code>DocumentFragment</code> <code>DocumentType</code></p></div><p>从其父类型 EventTarget 承属性。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EventTarget &gt; Node</span></span></code></pre></div><h2 id="node-属性" tabindex="-1">Node 属性 <a class="header-anchor" href="#node-属性" aria-label="Permalink to &quot;Node 属性&quot;">​</a></h2><h3 id="baseuri-只读" tabindex="-1">baseURI <code>只读</code> <a class="header-anchor" href="#baseuri-只读" aria-label="Permalink to &quot;baseURI `只读`&quot;">​</a></h3><p>Node.baseURI 是只读属性，返回一个节点的绝对基址 URL。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.baseURI; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;https://developer.mozilla.org&#39;</span></span></code></pre></div><h3 id="childnodes-只读" tabindex="-1">childNodes <code>只读</code> <a class="header-anchor" href="#childnodes-只读" aria-label="Permalink to &quot;childNodes `只读`&quot;">​</a></h3><p>Node.childNodes 返回包含指定节点的子节点的集合</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.childNodes; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// NodeList(2) [&lt;!DOCTYPE html&gt;, html]</span></span></code></pre></div><h3 id="firstchild-只读" tabindex="-1">firstChild <code>只读</code> <a class="header-anchor" href="#firstchild-只读" aria-label="Permalink to &quot;firstChild `只读`&quot;">​</a></h3><p>Node.firstChild 只读属性返回树中节点的第一个子节点</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.childNodes; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &lt;!DOCTYPE html&gt;</span></span></code></pre></div><h3 id="isconnected-只读" tabindex="-1">isConnected <code>只读</code> <a class="header-anchor" href="#isconnected-只读" aria-label="Permalink to &quot;isConnected `只读`&quot;">​</a></h3><p>如果该节点与 DOM 树连接则返回 true, 否则返回 false。例如：Document 对象与一般 DOM 树连接，ShadowRoot 与 shadow DOM 连接。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.childNodes; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><h3 id="lastchild-只读" tabindex="-1">lastChild <code>只读</code> <a class="header-anchor" href="#lastchild-只读" aria-label="Permalink to &quot;lastChild `只读`&quot;">​</a></h3><p>返回当前节点的最后一个子节点。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.lastChild; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// html</span></span></code></pre></div><h3 id="nextsibling-只读" tabindex="-1">nextSibling <code>只读</code> <a class="header-anchor" href="#nextsibling-只读" aria-label="Permalink to &quot;nextSibling `只读`&quot;">​</a></h3><p>返回其父节点的 childNodes 列表中紧跟在其后面的节点，如果指定的节点为最后一个节点，则返回 null。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.nextSibling; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// null</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.head.nextSibling; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// body</span></span></code></pre></div><h3 id="nodename-只读" tabindex="-1">nodeName <code>只读</code> <a class="header-anchor" href="#nodename-只读" aria-label="Permalink to &quot;nodeName `只读`&quot;">​</a></h3><p>返回当前节点的节点名称</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.nodeName; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;#document&#39;</span></span></code></pre></div><h3 id="nodetype-只读" tabindex="-1">nodeType <code>只读</code> <a class="header-anchor" href="#nodetype-只读" aria-label="Permalink to &quot;nodeType `只读`&quot;">​</a></h3><p>只读属性 Node.nodeType 表示的是该节点的类型。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.nodeType; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 9</span></span></code></pre></div><h3 id="nodevalue" tabindex="-1">nodeValue <a class="header-anchor" href="#nodevalue" aria-label="Permalink to &quot;nodeValue&quot;">​</a></h3><p>Node 的 nodeValue 属性返回或设置当前节点的值。对于文档节点来说，nodeValue 返回 null. 对于 text, comment，和 CDATA 节点来说，nodeValue 返回该节点的文本内容. 对于 attribute 节点来说，返回该属性的属性值。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.nodeValue; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// null</span></span></code></pre></div><h3 id="ownerdocument-只读" tabindex="-1">ownerDocument <code>只读</code> <a class="header-anchor" href="#ownerdocument-只读" aria-label="Permalink to &quot;ownerDocument `只读`&quot;">​</a></h3><p>只读属性会返回当前节点的顶层的 document 对象。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.body.ownerDocument; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// #document</span></span></code></pre></div><h3 id="parentelement" tabindex="-1">parentElement <a class="header-anchor" href="#parentelement" aria-label="Permalink to &quot;parentElement&quot;">​</a></h3><p>返回当前节点的父元素节点，如果该元素没有父节点，或者父节点不是一个 DOM 元素，则返回 null。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.body.parentElement; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// #html</span></span></code></pre></div><h3 id="parentnode" tabindex="-1">parentNode <a class="header-anchor" href="#parentnode" aria-label="Permalink to &quot;parentNode&quot;">​</a></h3><p>返回指定的节点在 DOM 树中的父节点。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.body.parentNode; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// #html</span></span></code></pre></div><h3 id="previoussibling" tabindex="-1">previousSibling <a class="header-anchor" href="#previoussibling" aria-label="Permalink to &quot;previousSibling&quot;">​</a></h3><p>返回当前节点的前一个兄弟节点，没有则返回 null.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.body.parentNode; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// #html</span></span></code></pre></div><h3 id="textcontent" tabindex="-1">textContent <a class="header-anchor" href="#textcontent" aria-label="Permalink to &quot;textContent&quot;">​</a></h3><p>Node 接口的 textContent 属性表示一个节点及其后代的文本内容。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.textContent; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// null</span></span></code></pre></div><h2 id="node-方法" tabindex="-1">Node 方法 <a class="header-anchor" href="#node-方法" aria-label="Permalink to &quot;Node 方法&quot;">​</a></h2><h3 id="appendchild" tabindex="-1">appendChild() <a class="header-anchor" href="#appendchild" aria-label="Permalink to &quot;appendChild()&quot;">​</a></h3><p>Node.appendChild() 方法将一个节点附加到指定父节点的子节点列表的末尾处。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(aChild);</span></span></code></pre></div><h3 id="clonenode" tabindex="-1">cloneNode() <a class="header-anchor" href="#clonenode" aria-label="Permalink to &quot;cloneNode()&quot;">​</a></h3><p>Node.cloneNode() 方法返回调用该方法的节点的一个副本。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dupNode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cloneNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(deep);</span></span></code></pre></div><h3 id="comparedocumentposition" tabindex="-1">compareDocumentPosition() <a class="header-anchor" href="#comparedocumentposition" aria-label="Permalink to &quot;compareDocumentPosition()&quot;">​</a></h3><p>Node.compareDocumentPosition() 可以比较当前节点与任意文档中的另一个节点的位置关系。 返回值是一个具有以下值的位掩码：</p><p>1 不在同一文档中 2 otherNode 在 node 之前 4 otherNode 在 node 之后 8 otherNode 包含 node 16 otherNode 被 node 包含 32 待定</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">compareMask </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compareDocumentPosition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(otherNode);</span></span></code></pre></div><h3 id="contains" tabindex="-1">contains() <a class="header-anchor" href="#contains" aria-label="Permalink to &quot;contains()&quot;">​</a></h3><p>contains() 返回一个布尔值，表示一个节点是否是给定节点的后代，即该节点本身、其直接子节点（childNodes）、子节点的直接子节点等。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contains</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(otherNode);</span></span></code></pre></div><h3 id="getrootnode" tabindex="-1">getRootNode() <a class="header-anchor" href="#getrootnode" aria-label="Permalink to &quot;getRootNode()&quot;">​</a></h3><p>getRootNode() 方法返回上下文中的根节点，如果 shadow DOM 可用，则对 shadow DOM 同样适用。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> root </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRootNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options);</span></span></code></pre></div><h3 id="haschildnodes" tabindex="-1">hasChildNodes() <a class="header-anchor" href="#haschildnodes" aria-label="Permalink to &quot;hasChildNodes()&quot;">​</a></h3><p>hasChildNodes 方法返回一个布尔值,表明当前节点是否包含有子节点.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasChildNodes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h3 id="insertbefore" tabindex="-1">insertBefore() <a class="header-anchor" href="#insertbefore" aria-label="Permalink to &quot;insertBefore()&quot;">​</a></h3><p>Node.insertBefore() 方法在参考节点之前插入一个拥有指定父节点的子节点。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> insertedNode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> parentNode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">insertBefore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newNode, referenceNode);</span></span></code></pre></div><h3 id="isdefaultnamespace" tabindex="-1">isDefaultNamespace() <a class="header-anchor" href="#isdefaultnamespace" aria-label="Permalink to &quot;isDefaultNamespace()&quot;">​</a></h3><p>isDefaultNamespace 接受一个命名空间 URI 作为参数，如果该命名空间是当前节点的默认命名空间，则返回 true,否则返回 false.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isDefaultNamespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(namespaceURI);</span></span></code></pre></div><h3 id="isequalnode" tabindex="-1">isEqualNode() <a class="header-anchor" href="#isequalnode" aria-label="Permalink to &quot;isEqualNode()&quot;">​</a></h3><p>Node.isEqualNode() 方法可以判断两个节点是否相等。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isEqualNode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isEqualNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(otherNode);</span></span></code></pre></div><h3 id="normalize" tabindex="-1">normalize() <a class="header-anchor" href="#normalize" aria-label="Permalink to &quot;normalize()&quot;">​</a></h3><p>Node.normalize() 方法将当前节点和它的后代节点”规范化“（normalized）。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">normalize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h3 id="removechild" tabindex="-1">removeChild() <a class="header-anchor" href="#removechild" aria-label="Permalink to &quot;removeChild()&quot;">​</a></h3><p>Node.removeChild() 方法从 DOM 中删除一个子节点。返回删除的节点。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> oldChild </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(child);</span></span></code></pre></div><h3 id="replacechild" tabindex="-1">replaceChild() <a class="header-anchor" href="#replacechild" aria-label="Permalink to &quot;replaceChild()&quot;">​</a></h3><p>Node.replaceChild() 方法用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>replaceChild(newChild, oldChild)</span></span></code></pre></div><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><h3 id="selectstart" tabindex="-1">selectstart <a class="header-anchor" href="#selectstart" aria-label="Permalink to &quot;selectstart&quot;">​</a></h3><p>Selection API (en-US) 的 selectstart 事件在用户开始一个新的选择时候触发。 如果事件被取消，选择将不被触发。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;selectstart&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Selection started&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  false</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Node" target="_blank" rel="noreferrer">MDN 官网：https://developer.mozilla.org/zh-CN/docs/Web/API/Node</a></p>',93),l=[n];function h(d,o,p,c,r,k){return e(),a("div",null,l)}const E=s(t,[["render",h]]);export{u as __pageData,E as default};
