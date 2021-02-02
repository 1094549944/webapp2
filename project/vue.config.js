const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 
  devServer: {
    proxy: {
      '/api': {
        //target: 'http://127.0.0.1:9001',
        target: 'http://www.imooc.com/api',
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.

    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },

}