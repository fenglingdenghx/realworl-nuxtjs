// 基于 axios 封装的请求模块
import axios from 'axios'

const request = axios.create({
  baseURL: 'https://conduit.productionready.io'

})

// 请求拦截器
request.interceptors.request.use((config) => {
  // config.headers.Authorization = `Token 用户token`
  return config
}, (err) => {
  return Promise.reject(err)
})
// 响应拦截器

export default request