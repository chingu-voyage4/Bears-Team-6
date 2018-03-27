import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { MainMenu } from './components/MainMenu'
import { Routes } from './components/Routes'
import { Creators } from './redux'

const style = {
  fontFamily: 'Roboto',
  padding: '20px',
}

class App extends React.Component<Props> {
  // Checks if there is a token
  componentWillMount() {
    this.props.loadToken()
  }

  render() {
    return (
      <div style={style}>
        <h1>We are your team</h1>
        <Helmet titleTemplate="%s - We Are Your Team" defaultTitle="Welcome" />
        <MainMenu />
        <Routes />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const { loadToken } = Creators
  return bindActionCreators({ loadToken }, dispatch)
}

export default withRouter(connect(() => ({}), mapDispatchToProps)(App))
