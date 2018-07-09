export default [
  {
    type: 'section',
    content: `
# Think in React(译文[原址](https://reactjs.org/docs/thinking-in-react.html))
React 就是，在我们看来，总体来说就是使用 JavaScript 建立大的，快速的 Web 应用. 它在我们的 Facebook 和 Instagram 的扩展性非常好。

React众多重要组成部分之一就是让你思考你创建的应用程序。在本文中，我们带你一起来思考如何通过使用React创建一个搜索产品的数据表。

### 从虚拟开始
假设，我们已经有了一个JSON的API和设计师提供的方案。方案看起来像下面这样:
    `,
  },
  {
    type: 'image',
    src: '/imgs/thinking-in-react-mock.png',
    alt: '虚拟的数据'
  },
  {
    type: 'section',
    content: `
我们的JSON API会返回像下面这样的数据:
\`\`\`json
  [
    {category: "Sporting Goods"，price: "$49.99"，stocked: true，name: "Football"},
    {category: "Sporting Goods"，price: "$9.99"，stocked: true，name: "Baseball"},
    {category: "Sporting Goods"，price: "$29.99"，stocked: false，name: "Basketball"},
    {category: "Electronics"，price: "$99.99"，stocked: true，name: "iPod Touch"},
    {category: "Electronics"，price: "$399.99"，stocked: false，name: "iPhone 5"},
    {category: "Electronics"，price: "$199.99"，stocked: true，name: "Nexus 7"}
  ];
\`\`\`

### 步骤 1： 将 UI 分成组件层次结构
你要做的第一件事情就是为每一个组件(和子组件) 的周围画一个框，然后给他们明明。如果你和一名设计师在一起工作，那么他们应该已经做好这些了，那么去和他们谈一谈！他们 Photoshop 图层名称可能最终会成为你的组件名称！

但是你如何知道什么才应该是它自己的组件呢？只是使用相同的技术来决定是否你需要新建一个函数还是对象。这样一种技术是[单一责任原则](https://en.wikipedia.org/wiki/Single_responsibility_principle)，那就是，一个组件在理想情况下只做一件事情。如果它最终扩展，它应该被拆解成小的子组件。

因为你需要经常为用户显示JSON数据模型，你会发现如果你的模型是正确的，你的UI (和你的组件结构) 就会很好的呈现它们。那是因为UI和数据模型保持着相同的信息结构，这意味着将你的UI拆解成组件会变得很琐碎。只需将它分解成代表数据模型的一部分的组件。
    `,
  },
  {
    type: 'image',
    src: '/imgs/thinking-in-react-components.png',
    alt: '虚拟的数据'
  },
  {
    type: 'section',
    content: `
你将在这里看到，在我们的简单应用程序中有五个组件。我们用斜体显示每个组件所代表的数据。

- FilterableProductTable (橙色): 包含完整的示例
- SearchBar (蓝色): 接收 用户输入
- ProductTable (绿色): 通过用户输入 显示和过滤 数据集
- ProductCategoryRow (绿松石色): 为每个 分类显示一个标题
- ProductRow (红色): 每一行中显示的产品

如果你看看ProductTable，你会发现表格的头 (包含 "Name" 和 "Price" 标签) 并不是该它自己的组件.这个是个偏好问题，对于该选择哪种方式一直有争议.对于这个例子，我们分离它，将它作为ProductTable的一部分，因为它是ProductTable中数据集的一部分。然而，如果这个表头变得很复杂(比如，如果你需要添加用于排序的功能)，那就有足够的理由它成为一个独立的ProductTableHeader组件。

现在，已经在我们的虚拟应用中识别出了我们所需要的组件，让我们将这些组件的成绩结构整理出来吧.这很简单.在模拟中，在另一个组件中以子组件的形式出现的组件，应该作为层级结构的子节点:

* FilterableProductTable
  * SearchBar
  * ProductTable
    * ProductCategoryRow
    * ProductRow

### 步骤 2： 生成静态React版本

在[CodePen](http://codepen.io/)查看 [Thinking In React: Step 2](https://codepen.io/gaearon/pen/BwWzwm)。

现在，你有你的组件层次结构，现在是时候完成你的应用了。最简单的办法是不考虑层级结构，先通过你的数据模型和渲染的UI创建一个版本。最好解耦这些过程，因为构建一个静态版本需要大量的代码并不需要太多思考，增加交互性需要大量的思考，而不仅仅是大量的代码。我们将看到为什么。

为你的应用构建一个静态版本呈现出你的数据模型，需要创建能够重复使用其他组件的组件，并且通过 props 传递数据。props 是一个用于从父组件为子组件传递数据的途径。如果你熟悉 状态 (state) 的概念，\`不要使用状态去构建你的静态版本\`.状态仅仅是为了交互时实用的，也就是说随时发生变化的数据。由于这是静态版本的应用，你并不需要他们。

你可以从上至下也可以从下至上构建.也就是说，你可以开始建立高层级的组件 (比如. 从 \`FilterableProductTable\` 开始) 或者从被它包含的一些低层级的组件开始 (\`ProductRow\`)。在更简单的例子中，自上而下会更加容易，在大型项目中，自下而上会更加容易一些，并在构建的时候编写测试。

在这一节的最后，你将拥有一个可重用的组件库去呈现你的数据模型。这是一个静态版本的应用程序，因此这些组件也许只有一个render()方法。你的数据模型会在最高层级组件 (FilterableProductTable) 的 prop 中。如果你更改了你的数据模型并且再一次调用了 ReactDOM.render() 方法，UI就会被更新。很容易看到你的 UI 是如何更新的，在哪里进行更改，因为没有什么复杂的事情发生。React 采用 单向数据流 (也被叫做 单向绑定) 以此来保持模块化并且具有很快的速度。

如果你在这一节需要帮助，你可以简单的参考这里 [React docs](https://reactjs.org/docs/)。

### 短暂的插曲: Props vs State

这是 React 中两种不同的数据模型: props and state。理解他们的区别是非常重要的; 如果你不明白他们的不同，那么看看正式的[React文档](https://reactjs.org/docs/interactivity-and-dynamic-uis.html)。

### 步骤 3: 识别最小的 (但完整的) UI 状态

为了使UI具有交互性，你需要具有能够触发对基础数据模型进行修改的能力，React 通过 state 使这一切变得简单。

为了正确的构建你的应用程序，你首先需要思考在你的应用程序中的最小可变状态集合.这里的关键是 \`DRY: Don't Repeat Yourself \`。计算出你的应用程序中需要的最小的基础状态单位，并计算所有你需要的内容.举例来说，如果你要构建一个TODO列表应用，只需要保留一个TODO事项的列表数组; 不需要为总数保留一个有序的状态变量。相反，当我们需要呈现TODO的数量的时候，只需要简单的拿到TODO项目数组的长度即可。

思考，在我们的示例应用程序中，所有数据块。我们有:

* 原来的产品列表
* 用户输入的搜索条件
* 复选框的值
* 筛选后的产品列表

然我们通过每一条，找出哪一个是状态。并思考三个关于每一个数据价格的简单问题:

1. 它是通过父组件的 props 而得到的吗? 如果是，它可能就不是状态
2. 是否一直保持不变? 如果是，它可能就不是状态
3. 是否可以通过组件的 state 或者 props 计算得到? 如果是，那么它可能不是状态

最初的产品列表中的数据通过 props 被传递进子组件，因此这并不是状态.而搜索内容和复选框会随着时间的变化而变化，并且不被用于计算。最后，过滤后的产品列表是通过搜索内容和复选框的值进行筛选后而得到的数据，因此也不是状态。

最后，我们的状态是:
* 用户输入的搜索条件
* 复选框的值

### 步骤 4: 识别出你的状态应该在哪里

在[CodePen](http://codepen.io/)查看 [Thinking In React: Step 4](https://codepen.io/gaearon/pen/qPrNQZ)。

好吧，我们已经识别出了这个应用程序中最小的状态集合，下一步，我们需要识别出哪些组件会发生改变，或者拥有状态。

记住: React是单项数据流，逐层向下传递数据。很难摸清楚哪些组件需要拥有什么状态。这对于新接触 React 的人来说理解这一部分内容是最具挑战性的，所以按照以下步骤来识别出它们:

在你的应用程序中的每一个状态:
* 识别出每一个需要基于状态渲染UI的组件
* 找出共同的所有者组件 (一个在层级中最顶层的需要这个状态的组件)
* 每一个共同的所有者组件，或者其他一些在层级中上层的组件，需要拥有状态
* 如果你找不到让你觉得可以拥有这些状态的组件，创建一个简单组件来持有这些状态，然后将该组件放置在组件层级解构中共同的所有者组件上层

让我们按照这个方式来运行我们的应用程序:
* ProductTable 需要根据状态来过滤需要显示到产品列表的数据并且 SearchBar 需要显示查找条件和复选框的状态
* 共同的所有者组件是 FilterableProductTable
* 它给我们的感觉是应该把过滤文本和复选框的值放在 FilterableProductTable

非常棒，所以我们决定把我们的状态放到 FilterableProductTable。首先，在 FilterableProductTable 的 constructor 中添加一个属性实例 this.state = {filterText: '', inStockOnly: false}来显示你的应用程序的初始状态.然后，以 prop 的方式将 filterText 和 inStockOnly 传入 ProductTable 和 SearchBar 中。最后，使用这些props来过滤 ProductTable 中的数据并在 SearchBar 中设置字段的值。

你可以看到你的应用程序是如何运行的来: 将 filterText 设置为 "球" 并刷新您的应用程序(译者注: 这里的刷新并不是浏览器刷新，应该是指由于 filterText 的值发生了变化导致的组件刷新)。您将看到该数据表格被正确的更新了。

### 步骤 5： 添加逆向数据流
在[CodePen](http://codepen.io/)查看 [Thinking In React: Step 5](https://codepen.io/gaearon/pen/LzWZvb)。

到目前为止，我们已经构建了一个应用程序，它具有正确地显示出层次结构中的 props 和 state 的功能。现在是时候来支持数据向相反方向流动: 在深层次的表单组件中需要更新在 FilterableProductTable 中的状态。

React使这种数据流程明确和更易于理解你的程序如何工作，但是相比较传统的双向数据绑定需要更多的代码。

如果您尝试在当前版本的示例中输入或改变复选框，你会发现 React 忽略了你的输入。这是故意的，我们总是设置 input 的 value，像等同于从 FilterableProductTable 传入的 state 一样。

让我们想象一下我们希望发生什么.我们希望确定的是无论何时用户改变表单中的输入，我们更新状态来反映这些用户输入。因为组件只更新它自己的状态 FilterableProductTable 会传入一个回调函数给 SearchBar，并且在需要更新状态的时候被执行。我们可以通过 input 的 onChange 事件来触发这个回调函数。FilterableProductTable 传入的回调函数会执行 setState()，然后整个应用程序的状态会被更新。

听起来很复杂，它只是很少几行代码而已，并且你可以通过这些代码这些数据是如何在你的应用程序中被传递的。

### 就是这样
希望，这可以给你很多构建 React 组件和应用的灵感，虽然这可能需要你敲入更多的代码，但是这些代码是用来读的，这比写它们更有意义，并且它们极易与理解，代码非常清晰。当你开始构建一个庞大的组件库的时候，你会非常喜欢这种清晰与模块化。并且重复使用这些代码，你的代码会开始减少。
    `,
  }
]