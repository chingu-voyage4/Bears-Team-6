// @flow

// react
import React from 'react'
import { render } from 'react-dom'

// redux
import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

// router
import { BrowserRouter as Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

// local
import Reactotron from './ReactotronConfig'
import App from './App'
import { reducers, sagas } from './redux'

const sagaMonitor = Reactotron.createSagaMonitor()
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
const history = createHistory()
const historyMiddleware = routerMiddleware(history)

/* eslint-disable no-underscore-dangle */
const store = Reactotron.createStore(
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
