/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-02-26 22:15:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-30 14:12:20
 */
import http from '../../common/js/axios';

export const loginApi = (param) => {
  return http.post('/api/app/login', param)
}