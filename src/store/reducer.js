/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-02-29 11:05:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-30 17:08:31
 */
/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-02-29 11:05:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-30 16:18:25
 */



const defaultState = {
  token: localStorage.token ? localStorage.token : '',
  userInfo: localStorage.userInfo ? JSON.parse(localStorage.userInfo) : {}
}
// reducer可以接受state，但绝不能修改state
export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'SET_TOKEN') {
    newState.token = action.value
    return newState
  }
  if (action.type === 'SET_USER_INFO') {
    newState.userInfo = action.value
    return newState
  }
  return state
}