// @flow

// react
import React from 'react'
import { render } from 'react-dom'

// redux
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

// router
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

// local
import App from './app'
import { reducers, sagas } from './redux'

const sagaMiddleware = createSagaMiddleware()
const history = createHistory()
const historyMiddleware = routerMiddleware(history)

/* eslint-disable no-underscore-dangle */
// $ItWorksFineButFlowIsAnIdiot: we know that it works.
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware, historyMiddleware),
  routerReducer,
)
/* eslint-enable */

sagaMiddleware.run(sagas)
const rootElement = document.createElement('div')

if (document.body) document.body.appendChild(rootElement)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElement,
)
