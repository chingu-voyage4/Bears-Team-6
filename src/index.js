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

// local
import Reactotron from './ReactotronConfig'
import { Timestamp } from './components/Timestamp'
import { reducers, sagas } from './redux'

const sagaMonitor = Reactotron.createSagaMonitor()
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

/* eslint-disable no-underscore-dangle */
const store = Reactotron.createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
)
/* eslint-enable */

sagaMiddleware.run(sagas)
const rootElement = document.createElement('div')

if (document.body) document.body.appendChild(rootElement)

render(
  <Provider store={store}>
    <Router>
      <Timestamp />
    </Router>
  </Provider>,
  rootElement,
)
