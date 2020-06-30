import React, { useState, Fragment } from 'react'
// import PropTypes from 'prop-types'
import { SearchBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
const Home = (props) => {
  return (
    <React.Fragment key="home" style={{ background: '#f7f7f7' }}>
      <SearchBar
        onFocus={() => console.log('onFocus')}
        placeholder="搜索课程"
        maxLength={8}
      />
    </React.Fragment>
  )
}

// Home.propTypes = {
//   // 必传 必须是string类型
//   test: PropTypes.string.isRequired,
//   // 验证类型
//   content: PropTypes.string,
//   func: PropTypes.func,
//   index: PropTypes.number,
// }

// Home.defaultProps = {
//   //不传test 默认值
//   test: 'PropTypes.string.isRequired',
// }
export default withRouter(Home)
