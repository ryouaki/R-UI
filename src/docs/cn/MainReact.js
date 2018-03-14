import React from 'react';
import marked from 'marked';

export default [
  {
    type: 'section',
    content: `
# 认识 React

一个用于构建用户界面的JavaScript库
    `,
  },
  {
    type: 'section',
    content: `
## 声明式的

React 可以使构建用户交互界面变得更加轻松。在应用程序中为每个状态设计简单的视图，当你的数据发生改变的时候，React 就会高效的更新和渲染正确的视图组件。

声明式的视图使代码更易于预测和调试。
    `,
  },
  {
    type: 'section',
    content: `
## 基于组件的

通过构建封装并管理自己状态的组件，组合成复杂的 UI 界面。

由于组件的逻辑是使用 JavaScript，而不是模版来构建的，因此你可以轻松的传入丰富的数据，并将状态保存在 DOM 之外。

_**Note**: 因为没有采用模版来构建视图，因此它比 Angular 和 Vue 在构建复杂 UI 界面的时候更加灵活，这一点在构建这个网站的时候体现的淋漓尽致。_
    `,
  },
  {
    type: 'section',
    content: `
## 学一次，随处写

我们并不会对你其余的技术栈进行假设，因此你可以在不重写现有代码的前提下使用 React 开发新的功能。

React 也可以运行在服务器端的 Node上，使用 React Native 开发强大的移动端应用。
    `,
  },
  {
    type: 'sample',
    content: `
## 一个简单的组件

React 组件执行一个 \`render()\` 方法，获取输入数据并用于显示。这个例子使用一种类似于 XML 的语法叫做 JSX。
输入的数据可以在组件的 render() 方法内，通过 \`this.props\` 获得。
    `,
    src: [
      {
        name: 'Demo.jsx',
        code: `
\`\`\`javascript      
  class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          Hello {this.props.name}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <HelloMessage name="Taylor" />,
    mountNode
  );
\`\`\`
      `
      }
    ],
    demo: () => {
      class HelloMessage extends React.Component {
        render() {
          return (
            <div>
              Hello {this.props.name}
            </div>
          );
        }
      }
      return <HelloMessage name="Taylor" />
    }
  },
  {
    type: 'sample',
    content: `
## 一个应用

使用 \`props\` 和 \`state\`，我们能够组成一个简单的 Todo 应用。这个例子，通过使用 \`state\` 跟踪当前列表中的元素，就像跟踪用户输入的文本框那样。尽管事件处理像是直接绑定在虚拟 DOM 元素上，但是他是通过事件委托来执行的。
    `,
    src: [
      {
        name: 'Demo.jsx',
        code: `
\`\`\`javascript      
  class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }

    handleChange(e) {
      this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }

  class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }

  ReactDOM.render(<TodoApp />, mountNode);
\`\`\`
      `
      }
    ],
    demo: () => {
      class TodoApp extends React.Component {
        constructor(props) {
          super(props);
          this.state = { items: [], text: '' };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
    
        render() {
          return (
            <div>
              <h3>TODO</h3>
              <TodoList items={this.state.items} />
              <form onSubmit={this.handleSubmit}>
                <input
                  onChange={this.handleChange}
                  value={this.state.text}
                />
                <button>
                  Add #{this.state.items.length + 1}
                </button>
              </form>
            </div>
          );
        }
    
        handleChange(e) {
          this.setState({ text: e.target.value });
        }
    
        handleSubmit(e) {
          e.preventDefault();
          if (!this.state.text.length) {
            return;
          }
          const newItem = {
            text: this.state.text,
            id: Date.now()
          };
          this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
          }));
        }
      }
    
      class TodoList extends React.Component {
        render() {
          return (
            <ul>
              {this.props.items.map(item => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
          );
        }
      }
      return <TodoApp />
    }
  },
  {
    type: 'sample',
    content: `
## 使用外部插件的组件

React 是非常灵活的，并且提供了钩子用于使用其他的包或者框架。在这个例子用，通过 \`marked\`这样一个外部的 Markdown 包，对 \`<textarea>\` 的值进行实时转换。

_*Note*: 这个例子中的 remarkable 无法从 npm 安装，被我替换成 marked 了。_
    `,
    src: [
      {
        name: 'Demo.jsx',
        code: `
\`\`\`javascript      
  class MarkdownEditor extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { value: 'Type some *markdown* here!' };
    }

    handleChange(e) {
      this.setState({ value: e.target.value });
    }

    getRawMarkup() {
      return { __html: marked(this.state.value) };
    }

    render() {
      return (
        <div className="MarkdownEditor">
          <h3>Input</h3>
          <textarea
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
          <h3>Output</h3>
          <div
            className="content"
            dangerouslySetInnerHTML={this.getRawMarkup()}
          />
        </div>
      );
    }
  }

  ReactDOM.render(<MarkdownEditor />, mountNode);
\`\`\`
      `
      }
    ],
    demo: () => {
      class MarkdownEditor extends React.Component {
        constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
          this.state = { value: 'Type some *markdown* here!' };
        }
    
        handleChange(e) {
          this.setState({ value: e.target.value });
        }
    
        getRawMarkup() {
          return { __html: marked(this.state.value) };
        }
    
        render() {
          return (
            <div className="MarkdownEditor">
              <h3>Input</h3>
              <textarea
                style={{height: '100px', width: '400px', fontSize: '16px'}}
                onChange={this.handleChange}
                defaultValue={this.state.value}
              />
              <h3>Output</h3>
              <div
                className="content"
                dangerouslySetInnerHTML={this.getRawMarkup()}
              />
            </div>
          );
        }
      }
      return <MarkdownEditor/>
    }
  }
]
