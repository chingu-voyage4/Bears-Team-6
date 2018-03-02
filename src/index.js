// @flow

// react
import React from 'react'
import { render } from 'react-dom'

// redux
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

// router
import { BrowserRouter as Router } from 'react-router-dom'

// local
import { App } from './components/App'
import { reducers } from './redux/reducers'
import { sagas } from './redux/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
// const store = createStore(reducers)
sagaMiddleware.run(sagas)
const rootElement = document.createElement('div')

if (document.body) document.body.appendChild(rootElement)

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement,
)
