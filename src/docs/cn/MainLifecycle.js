export default [
  {
    type: 'section',
    content: `
# React - 生命周期

任何一个基于 vDom 的现代前端框架都具有生命周期的概念，生命周期告诉我们目前我们的 UI 处于一个什么阶段，我们可以在这个时候做什么，不能做什么，需要注意什么。

我们可以参考下图：
    `,
  },
  {
    type: 'image',
    src: '/imgs/lifecycle.png',
    alt: '开发模式报错提醒'
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