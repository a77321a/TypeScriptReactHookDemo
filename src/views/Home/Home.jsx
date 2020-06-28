import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

const Home = (props) => {
  return <div>home</div>
}

Home.propTypes = {
  // 必传 必须是string类型
  test: PropTypes.string.isRequired,
  // 验证类型
  content: PropTypes.string,
  func: PropTypes.func,
  index: PropTypes.number,
}

Home.defaultProps = {
  //不传test 默认值
  test: 'PropTypes.string.isRequired',
}
export default Home
