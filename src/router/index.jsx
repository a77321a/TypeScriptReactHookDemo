import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import AnimatedRouter from 'react-animated-router'
import 'react-animated-router/animate.css'
import App from '../App'
import Login from '../views/Login/Login'
import Home from '../views/Home/Home'
import ForgetPwd from '../views/ForgetPwd/ForgetPwd'

import { Provider } from 'react-redux'
import store from '../store/index'

const BasicRoute = (props) => {
  let AppRouter = (
    <App>
      <AnimatedRouter appear={true} timeout={150}>
        <Route exact path="/"></Route>
        <Route title="首页" exact path="/home" component={Home}></Route>
      </AnimatedRouter>
    </App>
  )
  return (
    <Provider store={store}>
      <Router>
        <AnimatedRouter appear={true} timeout={150}>
          <Route title="登录" exact path="/login" component={Login}></Route>
          <Route
            title="忘记密码"
            exact
            path="/forget"
            component={ForgetPwd}
          ></Route>

          <Route path="/" render={(props) => AppRouter}></Route>
        </AnimatedRouter>
      </Router>
    </Provider>
  )
}
export default BasicRoute
