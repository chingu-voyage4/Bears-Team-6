// react
import React from 'react'
import { render } from 'react-dom'

// redux 
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

// router 
import { BrowserRouter as Router } from 'react-router-dom';

// components
import App from './components/App'

const store = createStore(reducers, {})

const rootElement = document.createElement("div")
document.body.appendChild(rootElement)

render(
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>,
  rootElement
)
