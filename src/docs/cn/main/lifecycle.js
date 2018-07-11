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
## React 组件生命周期/常用API/常用属性

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
## constructor()
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
## render()
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
> _**Note**：注意这里的key，这是 JSX 中每一个 element 节点的固有属性，所以自己在为组件设置 props 的时候不能使用 key 作为属性名。key 用于帮助 React 数组中的 DOM 对象进行区分。因此我们需要使用唯一的字符串作为 key 的值。不建议使用数组索引作为 key 的值，因为一旦数组进行元素删减，会导致数组索引发生变化，这样整个 DOM 都会被重新渲染，导致性能损失。_
    `,
  },
  {
    type: 'section',
    content: `
## componentDidMount()
当组件被挂载（也就是被插入到 DOM 树中）后就会被执行，在此时已经可以在页面上看到你的组件渲染后的效果了。这里也非常适合加载远程服务器上的数据。

这里也非常适合对 DOM 节点进行事件监听，操作或者是初始化一个第三方纯 JS 组件（比如 echarts）。当然，你也要记得在 componentWillUnmount() 中做对应的清理工作。否则会造成内存泄漏或者错误。

你可以在这里使用 this.setState 对组件的状态进行改变，因此这也会造成一次额外的渲染。
> _**Note**：componentDidMount() 在一个组件的生命周期中只会执行一次。_
    `,
  },
  {
    type: 'section',
    content: `
## componentDidUpdate(prevProps, prevState, snapshot)
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
## componentWillUnmount()
当组件实例即将从虚拟 DOM 树中移除并销毁之前，会执行该方法。我们可以在这里进行一些清理操作，比如清理注册的事件回调，定时器，取消网络请求等等。

但是你不能在这里使用 this.setState。因为组件不会再次进行更新渲染。组件实例一旦被从虚拟 DOM 树中移除，就会被销毁，它就不会被再次添加到虚拟 DOM 树中。
    `,
  },
  {
    type: 'section',
    content: `
## shouldComponentUpdate(nextProps, nextState)
shouldComponentUpdate 可以让 React 指导，是否需要根据当前的状态变化更新渲染当前的组件。在默认情况下，每一次状态的更新都会进行组件的更新渲染。

该 API 会在状态更新后，渲染发生之前被执行。默认反回 true，也就是只要发生状态变化就进行重新渲染。但是有一种情况例外，那就是通过 this.forceUpdate() 进行组件的更新渲染。

通常我们只是在这里做一些优化操作，避免频繁的渲染导致的性能损耗。如果只是希望这个组件仅绘制一次，那么可以使用 PureComponent 来代替修改 shouldComponentUpdate()，PureComponent 提供了一个浅比较来判断是否需要进行必要的更新渲染。

如果需要在该 API 中进行处理的话，那么必须要反回一个 BOOLEAN 告诉组件是否需要进行重新渲染，虽然反回 false 可以阻止组件进行重新渲染，但是并不会阻止内部子组件的状态变化引起的重新渲染。

我们并不建议在该 API 中进行深比较，或者是 JSON.stringify()这种操作。这是低效的。

目前，一旦该 API 返回 false，那么 UNSAFE_componentWillUpdate(), render(), componentDidUpdate() 都将不会执行。在将来，shouldComponentUpdate 返回 false 的时候依然会进行重新更新组件，只是把它作为一个提示。
    `,
  },
  {
    type: 'section',
    content: `
## static getDerivedStateFromProps(props, state)
该 API 是在最近16.3版本加入的。它会在渲染之前被执行，无论是初始化渲染，还是之后由于状态更新而引起的渲染。这里需要返回一个对象用于告诉组件需要更新哪些状态，或者是返回一个 null 告诉组件什么也不需要更新。

这里非常适合处理组件的过渡效果。

由于该 API 是一个静态方法，它无法访问组件实例的属性与方法。
`,
  },
  {
    type: 'section',
    content: `
## getSnapshotBeforeUpdate()
该 API 是在最近16.3版本加入的。它是一个非常有意思的 API，它会在最近进行的组件更新渲染到真是 DOM 树之前被执行，并且你还可以在这里获取一些 DOM 信息，比如滚动位置。该 API 的返回值会作为 componentDidUpdate() 的第三个参数。

因为该 API 是在渲染阶段和提交阶段之间进行的。因此非常适合在这里获取 DOM 信息，比如读取滚动位置。

> _**Note**：其实在 componentDidUpdate 中我们也可以获取这些信息，这里有一点搞不懂为什么要单独拿一个 API 出来，是为了 API 职责更清晰？_
`,
  },
  {
    type: 'section',
    content: `
## componentDidCatch()
该 API 是在最近16版本加入的。该 API 用于捕获其组件树内的子组件 JS 的 error。因此可以避免崩溃。

> _**Note**：该 API 仅能捕获自己内部的子组件的异常。_
`,
  },
  {
    type: 'section',
    content: `
## UNSAFE_componentWillMount()，UNSAFE_componentWillReceiveProps()，UNSAFE_componentWillUpdate()
由于这三个 API 经常被误解，并且错误的使用，在学习和使用过程中造成了很多麻烦，所以在16版本开始虽然还能继续使用，但是已经不建议在继续使用了。并且会在17版本中移除。
`,
  },
  {
    type: 'section',
    content: `
## setState(updater[, callback])
该方法用于告诉组件，我们希望它更新一些状态的值。并且它的子组件也需要进行重新渲染。因为该方法是一个异步方法，React 并不会因为 setState 的频繁调用而多次进行渲染。React 内部会将一些 setState 操作合并到一次一起更新组件(具体的是在同一个生命周期函数中多次调用会合并到一次处理中)。

由于 setState 并不是马上更新状态，因此在调用完 setState() 后，我们并不能马上通过 this.state 获取最新的值。因此我们需要在 callback 中拿到最新的值，或者在 componentDidUpdate 中。

setState 会总是导致重新渲染，除非在 shouldComponentUpdate 中进行处理。
`,
  },
  {
    type: 'section',
    content: `
## component.forceUpdate(callback)
该方法用于强制重新渲染组件，并且会跨过 shouldComponentUpdate 的处理。但是并不会导致子组件的 shouldComponentUpdate 失效。

通常情况下，并不建议使用 forceUpdate 来更新组件，而是通过改变 state 和 props 来触发组件的重新渲染。
`,
  },
  {
    type: 'section',
    content: `
## defaultProps
defaultProps 是一个属性，我们可以通过为它设置一些值来为props进行初始化。这仅对 undefined 的 props 属性有效，对于 null 的属性是无效的。类似解构赋值的默认值处理。
`,
  },
  {
    type: 'section',
    content: `
## displayName
组件的名称。一般情况下是不需要设置该属性的。它只是在调试模式下有用。
`,
  },
  {
    type: 'section',
    content: `
## props
this.props 包含了调用该组件的时候传入的属性，可以为对象，值，和方法。实际上 props 中也会包含很多其他的东西，比如 children 表示在调用该组件的地方，JSX 标签内部包含的子 JSX 对象。一般情况下是父组件传递给子组件的属性。

我们不能直接修改 props 的值，需要通过回调函数让拥有该属性真正所有者去修改。在组件中，组件的 props 是只读的。

下面例子中，name 就是 Welcome 组件的 props 属性：
\`\`\`JSX
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
\`\`\`
`,
  },
  {
    type: 'section',
    content: `
## state
this.state 组件自身的属性，包括对象，值，方法，我们并不能直接修改 state。需要通过 setState 对他进行修改。
`,
  }
]