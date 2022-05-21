const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    host: 'localhost',
    port: 8082,
    proxy: {
      '/.*_index/': {
        target: 'http://127.0.0.1:9200',
        ws: true,
        changeOrigin: true
      },
      '/api/v1/': {
        target: 'http://127.0.0.1:8081',
        ws: true,
        changeOrigin: true
      },
      '/md/': {
        target: 'http://127.0.0.1:8081',
        ws: true,
        changeOrigin: true
      },
      '/conn/': {
        target: 'http://127.0.0.1:8081',
        ws: true,
        changeOrigin: true
      },
      '/ssh/': {
        target: 'http://127.0.0.1:8081',
        ws: true,
        changeOrigin: true
      },
      '/HackTools/': {
        target: 'http://127.0.0.1:8081',
        ws: true,
        changeOrigin: true
      }
    }
    // convertJsToTs: true,
    // allowJs: true
  },
  transpileDependencies: true,
  publicPath: '',

  pluginOptions: {
    cordovaPath: 'src-cordova'
  }
})
