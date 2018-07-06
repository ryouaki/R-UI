export default [
  {
    type: 'section',
    content: `
# React - JSX

使用 React 并不需要学习额外的编程语言或者是技术，因为你只需要熟悉基本的 JavaScript 以及 ES6 的部分新特性即可进行开发。
对于 JSX 可能需要你学习一下，不过内容也非常的少。因此，在进行 React 开发，我们需要着重掌握 JSX。
    `,
  },
  {
    type: 'section',
    content: `
## JSX 介绍

请看下面的代码：

\`\`\`JSX
  const element = <h1>Hello, world!</h1>;
\`\`\`

这个写法其实很奇怪，既不是字符串也不是XML。这就是 JSX。他是 JavaScript 的一个扩展，官方建议我们使用 JSX 来开发 React。当然我们也可以不用 JSX 开发 React 应用，但是那会很麻烦。
也很不友好。虽然 JSX 看起来像模版语言，但是它却可以在 Dev-tool 的帮助下和 JavaScript 一起无缝使用，相比较其他框架开发体验非常好。

> **Note**：_其实国内很多人讨厌 JSX，因为他和传统的前端开发模式完全不一样。绝大部分人习惯了使用模版类型的技术来开发前端页面。所以很多人也因此不喜欢使用 React。_
> **Note**：_这也造成一个问题，那就是 React 集成进一个老的系统是一件很麻烦的事情。需要通过 React 的一系列 Api 来构建页面。我觉得那就是灾难。_
`,
},
{
  type: 'section',
  content: `
### 为什么是 JSX

React 包括渲染逻辑和其它一些 UI 交互逻辑：事件如何处理，如何响应状态变化，以及数据是否已经可以显示？

相较于将标记(html标签)和逻辑(逻辑代码js)人为的分离。React 通过拆分成"组件"这种松耦合单元来解决分离的问题。当你见识到 React 强大的组件化功能以后，你会喜欢上 JSX。
`,
},
{
  type: 'section',
  content: `
### 在 JSX 中嵌入表达式

你可以通过大括号，在 JSX 中嵌入一些 JS 表达式。比如 \`2 + 2\`，\`user.firstName\`，\`formatName(user)\` 都是合法的表达式。

\`\`\`jsx
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
\`\`\`

> _**Note**：其中 ReactDOM.render 用于将 React 构建的 UI 渲染到 HTML 的 #root 节点上。_
> _**Note**：不要在 React 渲染完页面以后对 React 渲染的 DOM 节点进行增加或删减，这会导致 React 内绑定的事件无效。_
    `,
  },
  {
    type: 'section',
    content: `
### JSX 也是一个表达式

在编译后，JSX 表达式会变成标准的 JavaScript 函数调用和 JavaScript 对象。

这也就意味着，你可以在任何语句或者循环中，将 JSX 表达式赋给一个变量，或者作为一个函数参数，也可以作为函数返回值：

\`\`\`JSX
  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
\`\`\`

> _**Note**：也正是因为如此，React 相较于 Angular 和 Vue 这种基于模版的前端库来说，在构建复杂的动态页面会非常灵活和简单。代码也更容易理解和维护。
    `,
  },
  {
    type: 'section',
    content: `
### JSX 的属性

你可以像下面这样将一个字面量作为属性：

\`\`\`JSX
  const element = <div tabIndex="0"></div>;
\`\`\`

也可以像下面这样，在 JSX 属性上通过一个大括号包含一个 JavaScript 表达式：

\`\`\`JSX
  const element = <img src={user.avatarUrl}></img>;
\`\`\`

> _**Note**: 不能在嵌入 JavaScript 表达式的大括号的外面使用字面量，这回引起错误。不要一起使用这两种方式。_
> _**Note**: JSX 是一个闭合标签语言，当使用 HTML 中的标签属性时，需要转化为驼峰法的属性名以区分 HTML 属性。比如：className。_
    `,
  },
  {
    type: 'section',
    content: `
### JSX 的子节点

如果标签内没有其他元素，那么你可以直接使用 \`/>\` 来结束标签，就像 XML 那样：

\`\`\`JSX
  const element = <img src={user.avatarUrl} />;
\`\`\`

如果包含子元素的话，就像这样：

\`\`\`JSX
  const element = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );
\`\`\`
    `,
  },
  {
    type: 'section',
    content: `
### JSX 可以防止注入攻击

当我们使用 JSX 的时候，他可以避免 XSS 攻击：

\`\`\`JSX
  const title = response.potentiallyMaliciousInput;
  // This is safe:
  const element = <h1>{title}</h1>;
\`\`\`

默认情况下，React DOM 会在渲染他们之前避开这种攻击代码，因此它可以确保不会注入任何不属于你应用的代码。
所有的东西在渲染之前都会被转化为字符串。这可以帮助我们避开 XSS 攻击。
    `,
  },
  {
    type: 'section',
    content: `
### JSX 相当于对象

Babel 编译后的 JSX 元素其实是 \`React.createElement()\` 的调用，这里有两段代码会产生一样的结果：

\`\`\`JSX
  const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );
\`\`\`

\`\`\`JSX
  const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );
\`\`\`

\`React.createElement()\` 会执行一些检查，用于帮助你减少 Bug，但是其实它创建了一个下面这样的对象：

\`\`\`JSX
  // Note: this structure is simplified
  const element = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world'
    }
  };
\`\`\`

这个对象叫做 React 元素，你可以把他们想像成 页面上需要显示的 UI 元素的描述。React 通过这些对象来构建 DOM 树，并且保持更新他们。

> _**Note**：我们推荐使用一些能够帮助你的编辑工具高亮 ES6 和 JSX 语法的辅助 Babel 插件。_
    `,
  },
  {
    type: 'section',
    content: `
### React 组件生命周期/常用API/常用属性

当一个 React 组件被实例化和插入到浏览器的 DOM中，这些生命周期函数就会被调用，功能和 Vue 的钩子函数是一样的。

* 在组件实例化期间：
  - constructor() 
  - static getDerivedStateFromProps()
  - componentWillMount() / UNSAFE_componentWillMount() 
  - render() 
  - componentDidMount()

* 在组件状态变化期间：
  - componentWillReceiveProps() / UNSAFE_componentWillReceiveProps()
  - static getDerivedStateFromProps()
  - shouldComponentUpdate()
  - componentWillUpdate() / UNSAFE_componentWillUpdate()
  - render()
  - getSnapshotBeforeUpdate()
  - componentDidUpdate()

* 在组件将要被销毁期间：
  - componentWillUnmount()

* 在组件发生异常的时候：
  - componentDidCatch()

* 每个组件都包含的APi：
  - setState()
  - forceUpdate()

* 组件类的属性：
  - defaultProps
  - displayName

* 实例的属性：
  - props
  - state

### render()
伴随着 props 或者 state 变化而触发的 API，他必须返回一个 JSX 对象或者是 null，String，Number，Portals，Booleans。

我们不能在 render 中更改组件的状态，他会导致组件陷入无限死循环。我们也可以通过在 shouldComponentUpdate() 返回 false 来阻止 render的调用次数，这也是众多 React 的优化方案的基础。

\`\`\`JSX
  render() {
    return [
      <li key="A">First item</li>,
      <li key="B">Second item</li>,
      <li key="C">Third item</li>,
    ];
  }
\`\`\`
> _**Note**：注意这里的key，这是 JSX 中每一个 element 节点的固有属性，所以自己在为组件设置 props 的时候不能使用 key 作为属性名。_
    `,
  }
]
