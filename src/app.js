import React from 'react'
import { Helmet } from "react-helmet"
import { MainMenu } from './components/MainMenu'
import Main from './components/Main'

const App = () => (
  <div>
    <Helmet
      titleTemplate="%s - We Are Your Team"
      defaultTitle="Welcome"
    >
    </Helmet>
    <MainMenu />
    <Main />
  </div>
)

export default App
