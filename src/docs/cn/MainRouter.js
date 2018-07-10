import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

export default [
  {
    type: 'section',
    content: `
# React Router (React 的声明式动态路由)

### 简要

V4 版本的 React Router 是一个基于组件式的动态路由方案。看下面的例子：

\`\`\`JSX
  // react-native
  import { NativeRouter } from 'react-router-native'

  // react-dom (what we'll use here)
  import { BrowserRouter } from 'react-router-dom'

  ReactDOM.render((
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  ), el)
  Next, grab the link component to link to a new location:const App = () => (
    <div>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </div>
  )
  Finally, render a Route to show some UI when the user visits /dashboard.const App = () => (
    <div>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <div>
        <Route path="/dashboard" component={Dashboard}/>
      </div>
    </div>
  )
\`\`\`

它提供了三种路由模式分别支持 History，Hash，React Native。前两种是对基于 Web 的应用提供支持，后者是对 Facebook 的移动端方案提供的路由方案。

react-router-dom 封装了5个路由组件用来应对不同的场景 BrowserRouter，HashRouter，MemoryRouter，NativeRouter，StaticRouter。

> _**Note**: 这是一个让人又爱又恨的路由包。很多人不习惯这种路由 API 设计，但是这种设计确实解决了项目中很多问题。所有的所有，都是组件。_

### 开始

我们可以通过下面命令进行安装：

\`\`\`SH
  npm install react-router
  # or
  yarn add react-router
  // 也可以使用具有更友好 API 的 react-router-dom
  yarn add react-router-dom
  # or
  npmnpm  install react-router-dom
\`\`\`

我们可以像下面这样使用路由：
  `},
  {
    type: 'sample',
    src: [
      { 
        name: 'Demo.jsx',
        code: `
\`\`\`js
  import React from 'react'
  import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

  const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  )

  const About = () => (
    <div>
      <h2>About</h2>
    </div>
  )

  const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )

  const Topics = ({ match }) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={\`\${match.url}/rendering\`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={\`\${match.url}/components\`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={\`\${match.url}/props-v-state\`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <Route path={\`\${match.path}/:topicId\`} component={Topic}/>
      <Route exact path={match.path} render={() => (
        <h3>Please select a topic.</h3>
      )}/>
    </div>
  )

  const BasicExample = () => (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </Router>
  )
  export default BasicExample
\`\`\`        
        `
      }
    ],
    demo: () => {
      const Home = () => (
        <div>
          <h2>Home</h2>
        </div>
      )

      const About = () => (
        <div>
          <h2>About</h2>
        </div>
      )

      const Topic = ({ match }) => (
        <div>
          <h3>{match.params.topicId}</h3>
        </div>
      )

      const Topics = ({ match }) => (
        <div>
          <h2>Topics</h2>
          <ul>
            <li>
              <Link to={`${match.url}/rendering`}>
                Rendering with React
              </Link>
            </li>
            <li>
              <Link to={`${match.url}/components`}>
                Components
              </Link>
            </li>
            <li>
              <Link to={`${match.url}/props-v-state`}>
                Props v. State
              </Link>
            </li>
          </ul>

          <Route path={`${match.path}/:topicId`} component={Topic}/>
          <Route exact path={match.path} render={() => (
            <h3>Please select a topic.</h3>
          )}/>
        </div>
      )
      const BasicExample = () => (
        <div>
          <ul>
            <li><Link to="/main/start/router">Home</Link></li>
            <li><Link to="/main/start/router/about">About</Link></li>
            <li><Link to="/main/start/router/topics">Topics</Link></li>
          </ul>
  
          <hr/>
  
          <Route exact path="/main/start/router" component={Home}/>
          <Route path="/main/start/router/about" component={About}/>
          <Route path="/main/start/router/topics" component={Topics}/>
        </div>
      )
      return <BasicExample/>
    }
  },
  {
    type: 'section',
    content: `
当 Route 的 path 属性与 URL 匹配上以后，对应的组件就会被显示出来。

### 代码分割

代码分割是现代 SPA 常见的一个减少资源加载的技术，它可以实现客户端仅加载需要的资源来减少下载的资源体积的目的。

为了达到这一目的，我们需要 webpack, babel-plugin-syntax-dynamic-import,和 react-loadable 来完成这一目的。

\`\`\`JSX
  import Loadable from 'react-loadable';
  import Loading from './Loading';

  const LoadableComponent = Loadable({
    loader: () => import('./Dashboard'),
    loading: Loading,
  })

  export default class LoadableDashboard extends React.Component {
    render() {
      return <LoadableComponent />;
    }
  }
\`\`\`

> _**Note**: [react-loadable](https://github.com/jamiebuilds/react-loadable)是一个高阶组件，来帮助我们实现按需加载的目的。当然我也自己实现了一个。可以参考代码[Bundle.js](https://github.com/ryouaki/R-UI/blob/master/src/components/Bundle/index.js)。_
    `,
  },
  {
    type: 'section',
    content: `
### Redux with React Router

Redux 是 React 生态系统中是非常重要的一部分。我们希望将 Redux，React Router无缝整合到一起。

一般来说，Redux 和 React Router 是可以很好的在一起运行的。有时候却不行，比如会有这样的情况，一个组件当路由改变的时候却没有更新。

如果发生了这种情况一般会是以下原因
1. 组件通过 connect()(Comp) 连接到 Redux
2. 该组件不是通过路由渲染的，也就是说不是采用这种方式<Route component={SomeConnectedThing}/>处理的组件

问题是 Redux 在 connect 中自己实现了 shouldComponentUpdate，如果没有从路由器接收到 prop，那么就意味着没有发生任何状态变化。因此我们提供了 withRouter 来修复这种问题。那就是把 withRouter 包在最外层：

\`\`\`JSX
  // This gets around shouldComponentUpdate
  withRouter(connect(...)(MyComponent))
  // or
  compose(
    withRouter,
    connect(...)
  )(MyComponent)

  // This does not
  connect(...)(withRouter(MyComponent))
  // nor
  compose(
    connect(...),
    withRouter
  )(MyComponent)
\`\`\`
    `,
  },
  {
    type: 'section',
    content: `
### React Router API

#### BrowserRouter

基于 History API 实现的路由方式，该方式由于使用了 H5 的 API，因此只兼容 IE10 及以上版本。并且需要我们在服务端进行配置，因为在 History 模式下，路由的每一次变化都会发生重定向请求，因此需要服务端每次都要返回一次 html 页面，里面包含最初浏览器加载的 html内容。

History 模式避免了 Hash 模式重定向引起的 # 后面的参数服务器无法获取的问题。在 oauth2.0 等场景中，更适合。

下面是常用的几个参数：
- basename: string 前端路由的根路由地址，如果你的前端项目配置在子路径上，就需要设置成你的子路径。
- children: node 内部的子组件，只能有一个子组件。

> _**Note**: 其它参数请参考[BrowserRouter](https://reacttraining.com/react-router/web/api/BrowserRouter)_

#### HashRouter

Hash 模式其实就是基于 HTML 锚点的一种实现。通过 URL hash的变化触发 hashchange 事件来完成 UI 的切换，该 API 被 IE8 所支持，所以当需要兼容 IE8 的适合需要考虑使用 Hash 模式的路由机制，但是 React 仅支持到 IE9，所以考虑 IE9 以下场景的话就需要考虑其它技术了。

Hash 模式路由的好处是只请求一次服务器，之后每次 URL 变化都不会引起新的重定向请求，因此极其适合 Webapp 这种将 html，js，css 包含在 App 内部的场景。尤其是解决 Android 的 Backbutton。

下面是常用的几个参数：
- basename: string 前端路由的根路由地址，如果你的前端项目配置在子路径上，就需要设置成你的子路径。
- children: node 内部的子组件，只能有一个子组件。

> _**Note**: 其它参数请参考[HashRouter](https://reacttraining.com/react-router/web/api/HashRouter)_

#### Link

Link 提供一个导航连接组件。可以把它认为就是组件化的 a 标签。

下面是常用的几个参数：
- to: string/object 跳转的目标地址

> _**Note**: 其它参数请参考[Link](https://reacttraining.com/react-router/web/api/Link)_

#### NavLink

NavLink 一个特殊版本的导航组件，提供了导航的各种状态。比如当前激活的导航。并且可以为它设置激活后的样式。

> _**Note**: 其它参数请参考[NavLink](https://reacttraining.com/react-router/web/api/NavLink)_

#### Redirect

Redirect 是一个重定向组件。并且可以特定条件发起重定向。

> _**Note**: 其它参数请参考[Redirect](https://reacttraining.com/react-router/web/api/Redirect)_

#### Route

Route 是用于设定路由的匹配规则，当当前路径与 Route 的 path 属性匹配后，其 component，render，children 对应的组件就会被渲染。

下面是常用的几个参数：
- render: function 渲染函数，需要返回一个 JSX 对象
- component: function React 组件，对应该路径下需要显示的组件
- children: function 与 render 类似，但是提供了是否匹配到该路由的参数，你可以根据参数判断出是否需要处理
- path: string 匹配的路径
- exact: boolean 是否严格匹配

> _**Note**: 其它参数请参考[Route](https://reacttraining.com/react-router/web/api/Route)_

#### Switch

Switch 内部可以包含一系列 Route 对象，默认显示第一个 Route 组件设定的组件，或者显示匹配的 Route 对应的组件。

\`\`\`JSX
  import { Switch, Route } from 'react-router'

  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/:user" component={User}/>
    <Route component={NoMatch}/>
  </Switch>
\`\`\`

> _**Note**: 其它参数请参考[Switch](https://reacttraining.com/react-router/web/api/Switch)_

#### withRouter

该 API 用于为组件注入路由信息，有一些场景下，一些组件并不是通过路由组件 Route 来控制是否显示的，因此可以通过该 API 将路由信息注入到该组件的 props 中。

但是在和 Redux 一起使用的适合，一定要包含在 connect 外层。

> _**Note**: 其它参数请参考[withRouter](https://reacttraining.com/react-router/web/api/withRouter)_
    `,
  }
];
