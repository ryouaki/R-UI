export default [
  {
    type: 'section',
    content: `
# 从 create-react-app 开始

create-react-app 是 facebook 提供的脚手架，用于快速构建基本的 React 单页项目。它集成非常众多且好用的官方工具，且一般情况下不需要任何配置。基本上是目前的首选脚手架。

下面是一些 create-react-app 的官方资料：
* [Creating an App](#creating-an-app) – 如何构建一个新的应用.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – 如何通过 Create React App 进行应用开发.
    `,
  },
  {
    type: 'section',
    content: `
## 安装

**首先你需要在本地安装 6.0 以上版本的 Nodejs**。通过下面的指令来完成安装：
\`\`\`sh
  $ npm install -g create-react-app
\`\`\`
> _*Note*:现在也可以不用安装，通过 npx 来直接执行。不过这需要使用 NPM5.2+ 以上版本_
    `,
  },
  {
    type: 'section',
    content: `
## 构建

如果你全局安装了 create-react-app，你可以通过下面的命令快速构建和运行你的第一个 React 应用程序：
\`\`\`sh
  $ create-react-app my-app
  $ cd my-app
  $ npm start
\`\`\`

当然你也可以不进行【安装】步骤直接使用 npx 来完成构建：
\`\`\`sh
  $ npx create-react-app my-app
  $ cd my-app
  $ npm start
\`\`\`

下面是一个官方提供的构建过程动画:
    `,
  },
  {
    type: 'image',
    src: '/imgs/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b696e63756261746f722f6372656174652d72656163742d6170702f366162363765366239363435373732306438343361613363353537666639353161343162616663322f73637265656e636173742e737667.svg',
    alt: '开发模式报错提醒'
  },
  {
    type: 'section',
    content: `
## 目录结构

通常我们执行完【构建】的步骤之后会得到下面这样的文件夹：
\`\`\`
  my-app
  ├── README.md
  ├── node_modules
  ├── package.json
  ├── .gitignore
  ├── public
  │   └── favicon.ico
  │   └── index.html
  │   └── manifest.json
  └── src
      └── App.css
      └── App.js
      └── App.test.js
      └── index.css
      └── index.js
      └── logo.svg
      └── registerServiceWorker.js
\`\`\`
    `,
  },
  {
    type: 'section',
    content: `
## npm start or yarn start

通过该命令会启动开发者模式，在这个模式下，当修改代码的时候，会自动刷新页面并将你写的最新代码反应到页面上。

如果发生任何错误，也可以在控制台看到错误提示，就像下面这样：
    `,
  },
  {
    type: 'image',
    src: '/imgs/687474703a2f2f692e696d6775722e636f6d2f466e4c566677362e706e67.png',
    alt: '开发模式报错提醒'
  },
  {
    type: 'section',
    content: `
## npm test or yarn test

当然，create-react-app 也帮我们集成了测试功能，默认情况下，测试会自动对最后一次提交的代码进行测试。

但是在国内互联网环境下，我们是很少写测试的，除非由测试人员来写，或者拥有足够的开发时间，不过这一般是不可能的。
    `,
  },
  {
    type: 'section',
    content: `
## npm run build or yarn build

通过该指令用于构建生产环境的代码，会在项目根目录创建一个 build 目录用于存放构建后的文件。这个过程已经帮我们进行了优化。同时也会帮助我们对文件体积进行压缩和对文件名进行 hash 处理。

当然它也为我们默认提供了 Service Worker，因此我们的应用可以在接下来从本地缓存加载资源。

> _**Note**：这里有一个非常重要的地方，通常前端开发所安装的依赖对于服务器是没用处的。只有在开发模式和打包的过程中这些依赖才有用。
因此在打包 Docker 镜像的时候并没有必要进行整个前端构建活动。应该在构建 Docker 之前在宿主服务器进行前端构建，然后打包的时候将前端编译后的目标代码打包进 Docker 镜像。因此可以大大节约 Docker 构建过程和最终的镜像体积。_
    `,
  },
  {
    type: 'section',
    content: `
## 升级更新

create-react-app 包含两部分：
* \`create-react-app\` 全局命令行工具，用于构建基础项目.
* \`react-scripts\` 开发过程中依赖的开发工具和构建工具.

因此，我们在已经构建的项目中直接升级 \`react-scripts\` 依赖即可。非常简单，不是吗？
    `,
  },
  {
    type: 'section',
    content: `
## 关于使用 Less

这一点是很奇葩的，官方居然觉得 CSS 预处理并不是很必要。而官方文档也仅仅提供了 sass 的使用方法。这是很让人苦恼的。毕竟 Less 易学易用。在国内还是非常普遍的。而且统一管理的样式，对于部分换肤需求也是非常重要的。

所以我自己写了一个工具，可以保证既不影响 react-scripts 升级的前提下，又可以满足大家对于 Less 的需求

[工具 react-less-watcher](https://github.com/ryouaki/react-less-watcher)

#### 使用方法

安装依赖
\`\`\`sh
  $ npm install -save-dev react-less-watcher
\`\`\`

修改配置(package.json)
\`\`\`json
  scripts: {
    "watch-less": "react-less-watcher -d src",
    "start": "react-scripts start&npm run watch-less"
  }
\`\`\`

这样在以开发模式启动项目的时候，就会自动发现 src 目录下的所有 less 文件，并自动编译成 css 文件，所以只需要在 jsx 文件中引入 css 文件即可。

\`\`\`javascript
  import './main.css';
\`\`\`
    `,
  },
  {
    type: 'section',
    content: `
## create-react-app 用户手册

下面是 create-react-app 的官方使用手册，非常简单，但是目前还没有中文版本：
- [Updating to New Releases](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#updating-to-new-releases)
- [Folder Structure](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#folder-structure)
- [Available Scripts](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#available-scripts)
- [Supported Browsers](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-browsers)
- [Supported Language Features and Polyfills](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills)
- [Syntax Highlighting in the Editor](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#syntax-highlighting-in-the-editor)
- [Displaying Lint Output in the Editor](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#displaying-lint-output-in-the-editor)
- [Formatting Code Automatically](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#formatting-code-automatically)
- [Debugging in the Editor](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#debugging-in-the-editor)
- [Changing the Page \`<title>\`](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#changing-the-page-title)
- [Installing a Dependency](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#installing-a-dependency)
- [Importing a Component](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#importing-a-component)
- [Code Splitting](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting)
- [Adding a Stylesheet](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-stylesheet)
- [Post-Processing CSS](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#post-processing-css)
- [Adding a CSS Preprocessor (Sass, Less etc.)](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)
- [Adding Images, Fonts, and Files](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-images-fonts-and-files)
- [Using the \`public\` Folder](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#using-the-public-folder)
- [Using Global Variables](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#using-global-variables)
- [Adding Bootstrap](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-bootstrap)
- [Adding Flow](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-flow)
- [Adding a Router](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-router)
- [Adding Custom Environment Variables](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables)
- [Can I Use Decorators?](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#can-i-use-decorators)
- [Fetching Data with AJAX Requests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#fetching-data-with-ajax-requests)
- [Integrating with an API Backend](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#integrating-with-an-api-backend)
- [Proxying API Requests in Development](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development)
- [Using HTTPS in Development](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#using-https-in-development)
- [Generating Dynamic \`<meta>\` Tags on the Server](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#generating-dynamic-meta-tags-on-the-server)
- [Pre-Rendering into Static HTML Files](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#pre-rendering-into-static-html-files)
- [Running Tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
- [Debugging Tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#debugging-tests)
- [Developing Components in Isolation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#developing-components-in-isolation)
- [Publishing Components to npm](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#publishing-components-to-npm)
- [Making a Progressive Web App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app)
- [Analyzing the Bundle Size](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#analyzing-the-bundle-size)
- [Deployment](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment)
- [Advanced Configuration](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#advanced-configuration)
- [Troubleshooting](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting)
    `,
  }
]
