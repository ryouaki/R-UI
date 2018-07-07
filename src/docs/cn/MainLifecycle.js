import React from 'react';

export default [
  {
    type: 'section',
    content: `
# React - 生命周期和状态

任何一个基于 vDom 的现代前端框架都具有生命周期的概念，生命周期告诉我们目前我们的 UI 组件处于一个什么阶段，我们可以在这个时候做什么，不能做什么，需要注意什么。熟悉生命周期对于我们学习一个现代前端框架来说至关重要。

下面是一个基于 React 16.4.1的生命周期示意图：
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
    `,
  },
  {
    type: 'sample',
    src: [
      { 
        name: 'Demo.jsx',
        code: `
\`\`\`js
  class Sample extends React.Component {
    displayName = 'Sample';
    static defaultProps = {
      propName: 'Sample'
    };

    constructor(props) {
      super(props);
      console.log('lifecycle: constructor');
      this.state = {
        update: false
      };
    }

    static getDerivedStateFromProps() {
      console.log('lifecycle: getDerivedStateFromProps');
      return null;
    }

    componentWillMount() {
      console.log('lifecycle: componentWillMount(废弃)');
    }

    componentDidMount() {
      console.log('lifecycle: componentDidMount');
    }

    componentWillReceiveProps() {
      console.log('lifecycle: componentWillReceiveProps(废弃)');
    }

    shouldComponentUpdate() {
      console.log('lifecycle: shouldComponentUpdate');
      return true;
    }

    componentWillUpdate() {
      console.log('lifecycle: componentWillUpdate(废弃)');
    }

    getSnapshotBeforeUpdate() {
      console.log('lifecycle: getSnapshotBeforeUpdate');
      return null;
    }

    componentDidUpdate() {
      console.log('lifecycle: componentDidUpdate');
    }

    componentWillUnmount() {
      console.log('lifecycle: componentWillUnmount');
    }

    componentDidCatch() {
      console.log('lifecycle: componentDidCatch');
    }

    render() {
      console.log('lifecycle: render');
      return <div ref={(div) => this.ref = div}>
        React Component Lifecycle Demo<br/>
        displayName: {this.displayName}<br/>
        defaultProps: {this.props.propName}<br/>
        <button onClick={() => {
            this.setState({
              update: this.state.update
            })
          }}>更新</button><br/>
        遗憾的是我们没办法虚拟异常和卸载的情况，当然，你切换到其它页面就可以了。
      </div>
    }
  }
\`\`\`        
        `
      }
    ],
    demo: () => {
      class Sample extends React.Component {
        displayName = 'Sample';
        static defaultProps = {
          propName: 'Sample'
        };

        constructor(props) {
          super(props);
          console.log('lifecycle: constructor');
          this.state = {
            update: false
          };
        }

        static getDerivedStateFromProps() {
          console.log('lifecycle: getDerivedStateFromProps');
          return null;
        }

        componentWillMount() {
          console.log('lifecycle: componentWillMount(废弃)');
        }

        componentDidMount() {
          console.log('lifecycle: componentDidMount');
        }

        componentWillReceiveProps() {
          console.log('lifecycle: componentWillReceiveProps(废弃)');
        }

        shouldComponentUpdate() {
          console.log('lifecycle: shouldComponentUpdate');
          return true;
        }

        componentWillUpdate() {
          console.log('lifecycle: componentWillUpdate(废弃)');
        }

        getSnapshotBeforeUpdate() {
          console.log('lifecycle: getSnapshotBeforeUpdate');
          return null;
        }

        componentDidUpdate() {
          console.log('lifecycle: componentDidUpdate');
        }

        componentWillUnmount() {
          console.log('lifecycle: componentWillUnmount');
        }

        componentDidCatch() {
          console.log('lifecycle: componentDidCatch');
        }

        render() {
          console.log('lifecycle: render');
          return <div ref={(div) => this.ref = div}>
            React Component Lifecycle Demo<br/>
            displayName: {this.displayName}<br/>
            defaultProps: {this.props.propName}<br/>
            <button onClick={() => {
                this.setState({
                  update: this.state.update
                })
              }}>更新</button><br/>
            遗憾的是我们没办法虚拟异常和卸载的情况，当然，你切换到其它页面就可以了。
          </div>
        }
      }
      return <Sample/>
    }
  },
  {
    type: 'section',
    content: `
### constructor()
constructor 在组件 mount 之前执行，你需要在函数内的最顶部执行一次 super(props), 否则在这里访问 this.props 是 undefined。

一般来讲，我们在 constructor 中完成两件事情:
- 初始化组件状态 state。
- 事件回调方法的 bind 操作。

当然你不能在 constructor 中使用 this.setState，这会导致出错。你需要像下面这样初始化组件状态：

\`\`\`JSX
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
\`\`\`

> _**Note**：只有在 constructor 中，你可以直接为 this.state 进行赋值操作，在其它地方你需要通过 this.setState 进行状态的改变。_
> _**Note**：如果你不需要初始化 state 或者 bind 一些方法的话，那么你不需要自己实现 constructor 方法的。_
    `,
  },
  {
    type: 'section',
    content: `
### componentDidMount()
当组件被挂载（也就是被插入到 DOM 树中）后就会被执行，在此时已经可以在页面上看到你的组件渲染后的效果了。这里也非常适合加载远程服务器上的数据。

这里也非常适合对 DOM 节点进行事件监听，操作或者是初始化一个第三方纯 JS 组件（比如 echarts）。当然，你也要记得在 componentWillUnmount() 中做对应的清理工作。否则会造成内存泄漏或者错误。

你可以在这里使用 this.setState 对组件的状态进行改变，因此这也会造成一次额外的渲染。
> _**Note**：componentDidMount() 在一个组件的生命周期中只会执行一次。_
    `,
  },
  {
    type: 'section',
    content: `
### componentDidUpdate(prevProps, prevState, snapshot)
当组件状态更新以后该函数就会被执行，但是，并不是在初始化组件的过程中更新状态以后执行，这一点需要注意一下。

我们可以在这里对状态更新后的 DOM 进行操作（当然，并不是很必要这么做，除非有一些纯 JS 库的使用），也可以作为请求远程服务器数据的地方：

\`\`\`JSX
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }
\`\`\`

> _**Note**：我们也可以在这里执行 this.setState ，但是我们需要对这个调用进行限制，否则他会引起反复的组件更新而进入死循环。_
    `,
  },
  {
    type: 'section',
    content: `
### componentWillUnmount()
当组件实例即将从虚拟 DOM 树中移除并销毁之前，会执行该方法。我们可以在这里进行一些清理操作，比如清理注册的事件回调，定时器，取消网络请求等等。

但是你不能在这里使用 this.setState。因为组件不会再次进行更新渲染。组件实例一旦被从虚拟 DOM 树中移除，就会被销毁，它就不会被再次添加到虚拟 DOM 树中。
    `,
  },
  {
    type: 'section',
    content: `
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