
import axios from 'axios'
import { Toast } from 'antd-mobile';
// 全局定义loading
let loading
function startLoading () {
  Toast.loading('Loading...');
}
function endLoading () {
  Toast.hide()
}
// 一段时间内的请求共用一个loading
let needLoadingRequestCount = 0
export function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}
export function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    // 是否一段时间内共用一个loading
    endLoading()
  }
}
// 合并相同请求
const requestList = []
const CancelToken = axios.CancelToken
let sources = {}

// http request 拦截器
axios.interceptors.request.use(
  config => {
    const request = JSON.stringify(config.url) + JSON.stringify(config.method) + JSON.stringify(config.data || '')
    config.cancelToken = new CancelToken((cancel) => {
      sources[request] = cancel
    })
    requestList.push(request)
    if (config.loading) {
      startLoading()
    };
    return config
  }, err => {
    return Promise.reject(err)
  }
)
// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    const request = JSON.stringify(response.config.url) + JSON.stringify(response.config.method) + JSON.stringify(response.config.data || '')
    requestList.splice(requestList.findIndex(item => item === request), 1)
    if (loading) {
      // tryHideFullScreenLoading()
      endLoading()
    };
    if (response.data.code === 200) {
      return response.data
    } else {
      Toast.info(response.data.msg, 1);
      return response.data
    }

  },
  (error) => {
    if (loading !== undefined) {
      loading.close()
    };
    requestList.length = 0
    return Promise.reject(error)
  }
)

// 封装get方法

function get (url, params = {}, loading = true) {
  return new Promise((resolve, reject) => {
    if (loading) startLoading()
    axios.get(url, {
      params: params,
      loading,
      headers: {
        withCredentials: true,
        Authorization: localStorage.token
      }
    })
      .then(response => {
        endLoading()
        resolve(response.data)
      })
      .catch(err => {
        endLoading()
        reject(err)
      })
  })
}

// 封装post请求

function post (url, data = {}, loading = false) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      loading: loading,
      xhrFields: { withCredentials: true },
      headers: {
        withCredentials: true,
        Authorization: localStorage.token
      }
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

// 封装patch请求

function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
// 封装 formData 表单提交
function postForm (url, formData, loading = true) {
  return new Promise((resolve, reject) => {
    axios.post(url, formData, {
      timeout: 0,
      loading,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.token
      }
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
// 封装put请求

function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data, {
      headers: {
        Authorization: localStorage.token
      }
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
// 封装delete请求

function todelete (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, { params: params })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
axios.defaults.timeout = 0
// axios.defaults.baseURL = 'http://118.31.13.116/api/'

axios.defaults.baseURL = 'https://testwx.baijiayun.com'

axios.defaults.headers.Authorization = localStorage.token
axios.defaults.headers['token'] = localStorage.token

export default { get, post, patch, put, todelete, postForm }
