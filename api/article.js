import {
  request
} from '@/plugins/request.js'

// 获取公共文章列表
export const getArticles = params => {
  return request({
    url: '/api/articles',
    method: 'get',
    params
  })
}

// 获取所有文章标签
export const getTags = () => {
  return request({
    url: '/api/tags',
    method: 'get'
  })
}
// 获取关注的用户文章列表
export const getFeedArticles = params => {
  return request({
    url: '/api/articles/feed',
    method: 'get',
    params
  })
}

// 添加点赞
export const addFavorite = slug => {
  return request({
    url: `/api/articles/${slug}/favorite`,
    method: 'post'
  })
}
// 取消点赞
export const deleteFavorite = slug => {
  return request({
    url: `/api/articles/${slug}/favorite`,
    method: 'delete'
  })
}

// 获取文章详情
export const getArticle = slug => {
  return request({
    url: '/api/articles/' + slug,
    method: 'get'
  })
}

// 获取文章评论
export const getComments = slug => {
  return request({
    method: 'get',
    url: `/api/articles/${slug}/comments`
  })
}