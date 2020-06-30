import React, { useState, Fragment } from 'react'
import { Logo, FormWrap } from './style'
import * as api from './api'
import { useHistory } from 'react-router-dom'
import { WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { SET_TOKEN, SET_USER_INFO } from '../../store/actionCreators'
const Login = (props) => {
  const [mobile, setMobile] = useState('13333333333')
  const [password, setPassword] = useState('123456')
  const history = useHistory()
  React.useEffect(() => {
    localStorage.clear()
  }, [history])
  const login = () => {
    const { dispatch } = props
    api.loginApi({ mobile, password, type: 1 }).then((res) => {
      localStorage.token = res.remember_token
      localStorage.setItem('userInfo', JSON.stringify(res))
      dispatch(SET_TOKEN(res.remember_token))
      dispatch(SET_USER_INFO(res))
      history.push('/home')
    })
  }
  return (
    <Fragment>
      <Logo>LOGO</Logo>
      <FormWrap>
        <ul>
          <li>
            <input
              type="tel"
              defaultValue={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="请输入您的手机号"
            />
          </li>
          <li>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              defaultValue={password}
              placeholder="请输入密码"
            />
          </li>
        </ul>
        <WhiteSpace />
        <WingBlank>
          <Button onClick={login} type="primary">
            登 录
          </Button>
        </WingBlank>
        {/* <div onClick={login} className="button text-center block">
          登 录
        </div> */}
      </FormWrap>
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapDispatchToProps)(Login)
