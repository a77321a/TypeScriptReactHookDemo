import React, { useState, Fragment } from 'react'
// import PropTypes from 'prop-types'
import { SearchBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { Carousel } from 'antd-mobile'

const Home = (props) => {
  const data = [
    'AiyWuByWklrrUDlFignR',
    'TekJlZRVCjLFexlOCuWn',
    'IJOtIlfsYdTyaDTRVrLI',
  ]
  return (
    <React.Fragment key="home">
      <SearchBar
        onFocus={() => console.log('onFocus')}
        placeholder="搜索课程"
        maxLength={8}
      />
      <Carousel
        className="space-carousel"
        frameOverflow="visible"
        cellSpacing={10}
        autoplay
        infinite
      >
        {data.map((val, index) => (
          <a
            key={val}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%' }}
          >
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'))
              }}
            />
          </a>
        ))}
      </Carousel>
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
