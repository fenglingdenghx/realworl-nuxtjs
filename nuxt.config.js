// nuxt.js 配置文件 

module.exports = {
  router: {
    linkActiveClass: 'active',
    extendRoutes(routes, resolve) {
      // 清楚默认生成的路由规则
      routes.splice(0)
      // 添加自己的路由
      routes.push(...[{
        path: '/',
        component: resolve(__dirname, 'pages/layout'),
        children: [{
            path: '', // 默认子路由
            name: 'home',
            component: resolve(__dirname, 'pages/home')
          },
          // 登录
          {
            path: '/login',
            name: 'login',
            component: resolve(__dirname, 'pages/login')
          },
          // 注册
          {
            path: '/register',
            name: 'register',
            component: resolve(__dirname, 'pages/login')
          },
          // 个人中心
          {
            path: '/profile/:username',
            name: 'profile',
            component: resolve(__dirname, 'pages/profile')
          },
          // 用户设置
          {
            path: '/settings',
            name: 'settings',
            component: resolve(__dirname, 'pages/settings')
          },
          // 创建文章
          {
            path: '/editor',
            name: 'editor',
            component: resolve(__dirname, 'pages/editor')
          },
          // 文章页
          {
            path: '/article/:slug',
            name: 'article',
            component: resolve(__dirname, 'pages/article')
          },
        ]
      }])
    }
  },
  plugins:[
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
}