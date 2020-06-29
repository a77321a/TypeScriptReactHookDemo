import React from 'react'
import './common/css/reset.css'
// import GlobalStyle from './common/css/reset'
import IndexFooter from './components/Footer/IndexFooter'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import store from './store/index'
import './App.css'
const BodyMiddle = styled.div`
  background:#fff;
  box-sizing:border-box;
  height: calc(100vh - 50px);
  padding: 0 0 55px;
  overflow-y: scroll;
`
function App(props) {
  let { location } = props


  if (location.pathname == '/') {
    props.history.push('/home')
  }
  return (
    <Provider store={store}>
      {/* <GlobalStyle /> */}
      <BodyMiddle className="content">{props.children}</BodyMiddle>
      {location.pathname != '/login' ? <IndexFooter /> : null}
    </Provider>
  )
}

export default withRouter(App)
