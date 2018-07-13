import React from 'react';
import {Button} from '../../../components/Button';

export default [
  {
    type: 'section',
    content: `
# Button(按钮)

这里介绍如何使用 React 完成一个按钮，看似简单的按钮，我们可以通过短短几行代码即可完成一个按钮：

\`\`\`js
  const Button = () => {
    return <button>按钮</button>
  }
\`\`\`

但是如果我们要想做一个组件的话，那么就不可能这么简单了。

我们需要满足如下常规 UI 交互中常见的 Button 需求：

- 按钮风格：主要按钮，普通按钮，文本按钮
- 表单功能：提交表单，重置表单
- 按钮状态：可用，加载，禁用，hover，焦点，点击反馈

所以用户在使用的时候应该像下面这样：

\`\`\`JSX
  render() {
    return <div>
      ...
      <Button.Primary type='submit'>主要按钮</Button.Primary>
      <Button.Normal>普通按钮</Button.Normal>
      <Button.Text>文本按钮</Button.Text>
      ...
    </div>
  }
\`\`\`

所以我们需要设计以下接口：

- type ['submit', 'reset', 'button'] 分别对应提交表单的按钮，普通按钮，重置表单按钮
- mode ['primary', 'normal', 'text'] 分别对应主要按钮，普通按钮，文本按钮
- loading [boolean] 是否是加载中，这个时候需要修改鼠标为漏斗
- disabled [boolean] 是否禁用，此时鼠标需要改为禁用，且点击无反应


    `,
  },
  {
    type: 'sample',
    src: [

    ],
    demo: () => {
      class Demo extends React.Component {
        render() {
          return <div>
            <Button>
              点我
            </Button>
          </div>
        }
      }

      return <Demo />
    }
  }
]