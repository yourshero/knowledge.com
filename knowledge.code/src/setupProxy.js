const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
      proxy(
          'aabbbcccc.json',
          {
            target: 'https://www.baidu.com',
            changeOrigin: true
          }
      )
  )
        }
