export default [
  {
    type: 'section',
    content: `
# Flux 深度解读

FLux 是 facebook 用于构建 Web 客户端的一种应用架构。它利用单向数据流，来帮助复杂的 React 组合组件的状态管理。它是一种模式，而不仅仅是一个框架，你可以不需要写任何新代码来将 Flux 直接应用到你的应用当中。

基于 Flux 的应用程序需要包含三个主要部分：dispatcher，store 和 view(React组件)。这并不能与 MVC 模式混淆，C 确实存在于 Flux 架构中，但是它们是 controller-views ---- 通常在最顶层的视图需要将数据传递给它的子组件。另外，action 的生产者 dispatcher 相关方法用于描述应用中各种可能的状态改变。这对于我们思考第四部分非常有帮助。

Flux 避开了 MVC，采取了单向数据流，当用户与 React 视图进行交互的时候，视图通过 dispatcher 方法传递一个 action 对象到保存数据和业务逻辑的各个存储对象区 store 中。这些存储区的数据变化会影响所有视图，并导致视图发生更新。这与 React 的编程风格有关，该风格允许通过数据的变化来改变视图，而不需要指定如何通过状态切换视图。

我们最初的目的是能够正确的通过驱动数据：比如，我们希望显示消息线程未读计数，而另一个视图显示线程列表，高亮显示未读线程。这在 MVC 中很难处理 --- 将一个单一线程指派为读更新线程，然后需要更新未读计数。这些依赖和关联经常出现在大型 MVC 应用中。数据流和不可预测的操作交织在一起。

控制和存储相反：存储接受更新并在适当的时候进行协调处理，而不是在一致的依赖外部更新数据的方式。存储区外部的任何东西都无法观察它内部的数据变化，这可以帮助我们保持清晰。存储区中并没有提供任何修改数据的方法，而是只有一个简单的途径来将新数据推送到存储区中 -- 注册的 dispatcher。

## 结构和数据流

在 Flux 应用中，数据的流向是单一的：
    `,
  },
  {
    type: 'image',
    src: '/imgs/flux-simple-f8-diagram-1300w.png',
    alt: '结构1'
  },
  {
    type: 'section',
    content: `
单向数据流是 Flux 模式的核心，在上图应该是__Flux 程序的主要模型__。dispatcher ，stores 和 views 是独立的节点，具有不同的数据和输出。actions 是简单的对象，包括一个 type 标实属性和新的数据。

视图产生新的 action 在系统中传播，以响应用户的操作：
    `,
  },
  {
    type: 'image',
    src: '/imgs/flux-simple-f8-diagram-with-client-action-1300w.png',
    alt: '结构1'
  },
  {
    type: 'section',
    content: `
所有的数据流都要通过 dispatcher 来完成。action 在 action 生成器中被提供给 dispatcher，并且大部分来自于用户的页面交互操作。然后 dispatcher 执行在 store 上注册的回调，将 action 传入到所有的 store 中。在这些注册的回调中，store 对 action 做对应的关联处理。然后这些 store 通知一个变更事件，去告知 controller-views 数据发生了变化。controller-views 调用他们自己的 setState 方法，触发一次重新渲染。更新整个相关的组件树。
    `,
  },
  {
    type: 'image',
    src: '/imgs/flux-simple-f8-diagram-explained-1300w.png',
    alt: '结构3'
  },
  {
    type: 'section',
    content: `
这种结构可以帮助我们很容易的预测程序的执行结果，这种方式让我们联想起了函数式编程，或者数据流编程，基于数据的编程。在这些编程中，数据以单一的方向在程序中流动 -- 不存在双向绑定。应用状态仅存在 store 中，所以应用程序可以不同程度的进行解藕。在 store 间保持着依赖关系，通过 dispatcher 进行同步的更新管理。

我们发现，双向数据绑定导致联动更新，其中一个对象的改变就会导致另一个对象改变，也可能出发更多的更新。随着程序的增长，这些联动更新变得难以预测。一次用户操作会带来复杂的数据更新，导致难以预测。但是，如果只能单向的更新数据的话，这一切将变得更好预测。

让我们自己看看 Flux 的各个组成部分。

### 一个单一的 Dispatcher

dispatcher 作为数据流管理程序中的派发器。它其实是一个被注册到 store 中的一个回调函数。并没有自己的职能 -- 它将 action 传入到 store 中。每一个 store 都需要注册并提供一个回调函数。每一个 action 都是通过 dispatcher 被传入到 store 中的。

随着应用的迭代，dispatcher 变得更加重要，它可以用于在 store 间通过调用回调来按顺序管理依赖关系。store 可以等待其他 store 完成更新，然后再更新自己。

Facebook 用于生产的 dispatcher 可以在[npm](https://www.npmjs.com/package/flux), [Bower](http://bower.io/), 和 [GitHub](https://github.com/facebook/flux)中找到。

### Stores

store 中包含应用的状态和逻辑。它的角色有点类似 MVC 中的 M，但是它们管理一些对象状态 -- 他们不像 ORM 那样表示单个数据记录。这和 Backbone 的集合不同。和管理单一的 ORM 风格的数据对象集合不同。store 管理特定域内的数据状态。

例如：Facebook 的 Lookback 媒体编辑工具使用了一个叫做 [Lookback Video Editor](https://facebook.com/lookback/edit) 的技术来跟踪回放时间和回放状态。在另一方面，同一个应用的镜像存储保持一个图片的集合。在 [TodoMVC 例子](https://github.com/facebook/flux/tree/master/examples/flux-todomvc/) 这个例子的中， TodoStore 用于管理一个简单的代办事项集合。Store 即是一个数据集又是一个单模型域。

就像上面提到的，一个 store 会注册一个 dispatcher 并且提供一个回调函数。这个回调函数接收 action 对象作为参数。对于 store 中注册的回调函数中，根据操作的类型提供一个 switch 操作来对 action 的 type 有针对性的进行处理。这允许操作通过 dispatcher 更新 store 中的数据状态。之后，store 就进行了更新，他们通过广播事件来通知它们的状态发生了改变，因此视图会查询最新的状态，然后更新自己。

### Views and Controller-Views

React 提供了视图层所需要的各种组合方式以及自由的视图层渲染方式。在视图层的最顶层，一种特殊的视图用于监听它所依赖的 store 中的广播事件(注册的回调)。我们称之为 controller-view(react-redux的connectWrapper)，因为它们提供了从 store 中获取数据的方式，并将这些数据传递给它的后代。我们也许需要一个 controller-view 来管理页面的各个部分。

当它从 store 中接受到事件，它首先通过 store 提供的取数据方法拿到新的数据(mapStateToProps)。然后调用自己的 setState 或者是 forceUpdate 方法来让 React组件及其子组件重新渲染。


We often pass the entire state of the store down the chain of views in a single object, allowing different descendants to use what they need. In addition to keeping the controller-like behavior at the top of the hierarchy, and thus keeping our descendant views as functionally pure as possible, passing down the entire state of the store in a single object also has the effect of reducing the number of props we need to manage.

Occasionally we may need to add additional controller-views deeper in the hierarchy to keep components simple.  This might help us to better encapsulate a section of the hierarchy related to a specific  data domain.  Be aware, however, that controller-views deeper in the hierarchy can violate the singular flow of data by introducing a new, potentially conflicting entry point for the data flow.  In making the decision of whether to add a deep controller-view, balance the gain of simpler components against the complexity of multiple data updates flowing into the hierarchy at different points.  These multiple data updates can lead to odd effects, with React's render method getting invoked repeatedly by updates from different controller-views, potentially increasing the difficulty of debugging.


### Actions

The dispatcher exposes a method that allows us to trigger a dispatch to the stores, and to include a payload of data, which we call an action. The action's creation may be wrapped into a semantic helper method which sends the action to the dispatcher. For example, we may want to change the text of a to-do item in a to-do list application. We would create an action with a function signature like \`updateText(todoId, newText)\` in our \`TodoActions\` module. This method may be invoked from within our views' event handlers, so we can call it in response to a user interaction. This action creator method also adds a _type_ to the action, so that when the action is interpreted in the store, it can respond appropriately. In our example, this type might be named something like \`TODO_UPDATE_TEXT\`.

Actions may also come from other places, such as the server. This happens, for example, during data initialization. It may also happen when the server returns an error code or when the server has updates to provide to the application.


### What About that Dispatcher?

As mentioned earlier, the dispatcher is also able to manage dependencies between stores. This functionality is available through the \`waitFor()\` method within the Dispatcher class.  We did not need to use this method within the extremely simple [TodoMVC application](https://github.com/facebook/flux/tree/master/examples/flux-todomvc/), but it becomes vital in a larger, more complex application.

Within the TodoStore's registered callback we could explicitly wait for any dependencies to first update before moving forward:

\`\`\`javascript
case 'TODO_CREATE':
  Dispatcher.waitFor([
    PrependedTextStore.dispatchToken,
    YetAnotherStore.dispatchToken
  ]);

  TodoStore.create(PrependedTextStore.getText() + ' ' + action.text);
  break;
\`\`\`

\`waitFor()\` accepts a single argument which is an array of dispatcher registry indexes, often called _dispatch tokens_. Thus the store that is invoking \`waitFor()\` can depend on the state of another store to inform how it should update its own state.

A dispatch token is returned by \`register()\` when registering callbacks for the Dispatcher:

\`\`\`javascript
PrependedTextStore.dispatchToken = Dispatcher.register(function (payload) {
  // ...
});
\`\`\`

For more on \`waitFor()\`, actions, action creators and the dispatcher, please see [Flux: Actions and the Dispatcher](http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html).
    `,
  }
]