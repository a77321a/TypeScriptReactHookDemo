import React from 'react'
import './common/css/reset.css'
// import GlobalStyle from './common/css/reset'
import IndexFooter from './components/Footer/IndexFooter'
// import { Provider } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
// import store from './store/index'
import './App.css'
import { connect } from 'react-redux'

const BodyMiddle = styled.div`
  background: #fff;
  box-sizing: border-box;
  height: calc(100vh - 50px);
  padding: 0 0 55px;
  overflow-y: scroll;
`

const App = (props) => {
  let { location, token } = props

  React.useEffect(() => {
    console.log(token)
    if (!token) {
      props.history.push('/login')
    } else if (location.pathname === '/') {
      props.history.push('/home')
    }
  }, [location])

  return (
    <React.Fragment>
      {/* <GlobalStyle /> */}
      <BodyMiddle>{props.children}</BodyMiddle>
      <IndexFooter />
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  }
}

export default withRouter(connect(mapStateToProps)(App))
