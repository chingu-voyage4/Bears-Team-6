import React from 'react'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { MainMenu } from './components/MainMenu'
import Main from './components/Main'
import { Creators } from './redux'

class App extends React.Component<Props>{
  // Checks if there is a token
  componentWillMount() {
    this.props.loadToken();
  }

  render() {
    return (
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
  }
}

const mapDispatchToProps = (dispatch) => {
  const { loadToken } = Creators
  return bindActionCreators(
    { loadToken },
    dispatch,
  )
}

//
export default withRouter(connect(() => ({}), mapDispatchToProps)(App))
