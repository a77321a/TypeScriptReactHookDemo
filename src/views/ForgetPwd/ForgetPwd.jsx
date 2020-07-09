import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'
import { Wrap } from './style.js'
class Page_0 extends Component {
  render() {
    return (
      <Wrap>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
        >
          修改密码
        </NavBar>
        <span className="row">当前绑定手机号:158*大大*5858</span>
        <div className="mod4">
          <span className="txt">验证码</span>
          <input className="title" placeholder="请输入验证码" />
          <span className="text_2">获取验证码</span>
        </div>
        <div className="mod5"></div>
        <div className="mod6">
          <span className="txt">新密码</span>
          <input placeholder="密码(6-20位，区分大小写)" className="title" />
          <span style={{ visibility: 'hidden' }} className="text_2">
            获取验证码
          </span>
        </div>
        <div className="mod7"></div>
        <div className="mod8">
          <span className="text_3">确定</span>
        </div>
      </Wrap>
    )
  }
}
export default Page_0
