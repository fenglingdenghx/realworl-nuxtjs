import {
  request
} from '@/plugins/request.js'


// 用户登录
export const login = data => {
  return request({
    url: '/api/users/login',
    data,
    method: 'post'
  })
}

// 用户注册
export const registr = data => {
  return request({
    url: '/api/users',
    data: data,
    method: 'post'
  })
}