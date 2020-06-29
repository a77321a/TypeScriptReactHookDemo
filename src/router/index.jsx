import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import AnimatedRouter from 'react-animated-router'
import 'react-animated-router/animate.css'
import App from '../App'
import Login from '../views/Login/Login'
import Home from '../views/Home/Home'
const BasicRoute = (props) => {
  const location = props.location
  let AppRouter = (
    <App>
        <AnimatedRouter appear={true} timeout={150}>
          <Route exact path="/"></Route>
          <Route title="首页" exact path="/home" component={Home}></Route>
        </AnimatedRouter>
    </App>
  )
  return (
    <Router>
      <AnimatedRouter  appear={true} timeout={150}>
        <Route title="登录" exact path="/login" component={Login}></Route>
        <Route path="/" render={(props) => AppRouter}></Route>
      </AnimatedRouter>
    </Router>
  )
}
export default BasicRoute
