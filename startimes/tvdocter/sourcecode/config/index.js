'use strict'
const path = require('path')
const packageConfig = require('../package.json')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/views/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '../',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: [
      'js', 'css', 'ttf'
    ],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 8081,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/static/config.js': { // 开发模式下，将config的配置拦截，转发到config-dev上
        target: 'http://127.0.0.1:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/static/config.js': '/static/config-dev.js'
        }
      }
    },
    cssSourceMap: false
  }
}
