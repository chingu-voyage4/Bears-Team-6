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
import { Timestamp } from './components/Timestamp'
import { reducers, sagas } from './redux'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
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
