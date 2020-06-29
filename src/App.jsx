import React from 'react'
import GlobalStyle from './common/css/reset'
import IndexFooter from './components/Footer/IndexFooter'
import { Provider } from 'react-redux'
import HeaderBar from './components/HeaderBar/HeaderBar'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import store from './store/index'
const BodyMiddle = styled.div`
  /* position: absolute; */
  /* top: 45px;
  bottom: 50px; */
  height: auto;
  padding: 45px 0 55px;
  overflow-y: scroll;
`
function App(props) {
  let { location } = props
  if (location.pathname == '/') {
    props.history.push('/login')
  }
  const [headerBarName, setHeaderBarName] = React.useState(
    store.getState().headerBarName
  )
  store.subscribe(() => {
    setHeaderBarName(store.getState().headerBarName)
  })
  return (
    <Provider store={store}>
      {location.pathname != '/login' ? (
        <HeaderBar title={headerBarName} />
      ) : null}
      <GlobalStyle />
      <BodyMiddle className="content">{props.children}</BodyMiddle>
      {location.pathname != '/login' ? <IndexFooter /> : null}
    </Provider>
  )
}

export default withRouter(App)
