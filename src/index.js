/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-02-26 12:23:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-29 10:25:53
 */
import React from 'react'
import ReactDOM from 'react-dom'
import BasicRoute from './router/index'
import { TransitionGroup, CSSTransition } from "react-transition-group";

// import BasicRoute from './router/index'
// import './common/js/http'
// import 'antd-mobile/lib/date-picker/style/css';
ReactDOM.render(
  <TransitionGroup>
    <CSSTransition
      appear={true}
      classNames="appAppear"
      timeout={500}
    >
      <BasicRoute />
    </CSSTransition>
  </TransitionGroup>
  ,
  document.getElementById('root'))
