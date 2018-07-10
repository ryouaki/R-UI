import React from 'react';

import Bundle from './../components/Bundle';

export default [
  {
    path: '/main/start',
    component: null,
    children: [
      {
        path: '/main/start/react',
        component: (props) => {
              return <Bundle load={ () => import('./../containers/Main/fragments/ArticleTmpl') }>
                { Component => <Component {...props} docs={ require('./../docs/cn/MainReact').default }/> }
              </Bundle>
            },
      },
      {
        path: '/main/start/create',
        component: (props) => {
          return <Bundle load={ () => import('./../containers/Main/fragments/ArticleTmpl') }>
            { Component => <Component {...props} docs={ require('./../docs/cn/MainCreate').default }/> }
          </Bundle>
        },
      },
      {
        path: '/main/start/jsx',
        component: (props) => {
          return <Bundle load={ () => import('./../containers/Main/fragments/ArticleTmpl') }>
            { Component => <Component {...props} docs={ require('./../docs/cn/MainJSX').default }/> }
          </Bundle>
        },
      },
      {
        path: '/main/start/lifecycle',
        component: (props) => {
          return <Bundle load={ () => import('./../containers/Main/fragments/ArticleTmpl') }>
            { Component => <Component {...props} docs={ require('./../docs/cn/MainLifecycle').default }/> }
          </Bundle>
        },
      },
      {
        path: '/main/start/think',
        component: (props) => {
          return <Bundle load={ () => import('./../containers/Main/fragments/ArticleTmpl') }>
            { Component => <Component {...props} docs={ require('./../docs/cn/MainThink').default }/> }
          </Bundle>
        },
      },
      {
        path: '/main/start/flux',
        component: (props) => {
          return <Bundle load={ () => import('./../containers/Main/fragments/ArticleTmpl') }>
            { Component => <Component {...props} docs={ require('./../docs/cn/MainFlux').default }/> }
          </Bundle>
        },
      },
      {
        path: '/main/start/router',
        component: (props) => {
          return <Bundle load={ () => import('./../containers/Main/fragments/ArticleTmpl') }>
            { Component => <Component {...props} docs={ require('./../docs/cn/MainRouter').default }/> }
          </Bundle>
        },
      },
      {
        path: '/main/start/redux',
        component: (props) => {
          return <Bundle load={ () => import('./../containers/Main/fragments/ArticleTmpl') }>
            { Component => <Component {...props} docs={ require('./../docs/cn/MainRedux').default }/> }
          </Bundle>
        },
      }
    ]
  },
  {
    path: '/main/base',
    component: null,
    children: [
      {
        path: '/main/base/layout',
        component: null,
      },
      {
        path: '/main/base/button',
        component: null,
      },
      {
        path: '/main/base/icon',
        component: null,
      }
    ]
  },
  {
    path: '/main/form',
    component: null,
    children: [
      {
        path: '/main/form/form',
        component: null,
      },
      {
        path: '/main/form/input',
        component: null,
      },
      {
        path: '/main/form/radio',
        component: null,
      },
      {
        path: '/main/form/checkbox',
        component: null,
      },
      {
        path: '/main/form/number',
        component: null,
      },
      {
        path: '/main/form/select',
        component: null,
      },
      {
        path: '/main/form/switch',
        component: null,
      },
      {
        path: '/main/form/datetimepicker',
        component: null,
      },
      {
        path: '/main/form/updater',
        component: null,
      }
    ]
  },
  {
    path: '/main/data',
    component: null,
    children: [
      {
        path: '/main/data/table',
        component: null,
      },
      {
        path: '/main/data/pagination',
        component: null,
      },
      {
        path: '/main/data/tree',
        component: null,
      }
    ]
  },
  {
    path: '/main/notice',
    component: null,
    children: [
      {
        path: '/main/notice/alert',
        component: null,
      },
      {
        path: '/main/notice/loading',
        component: null,
      },
      {
        path: '/main/notice/message',
        component: null,
      }
    ]
  },
  {
    path: '/main/others',
    component: null,
    children: [
      {
        path: '/main/others/dialog',
        component: null,
      },
      {
        path: '/main/others/tooltip',
        component: null,
      },
      {
        path: '/main/others/tabs',
        component: null,
      },
      {
        path: '/main/others/dropdown',
        component: null,
      }
    ]
  },
]
