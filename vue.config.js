const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const resolve = dir => {
    return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'

module.exports = {
    publicPath: '/',
    // 调整内部webpack配置.
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'))
        config.module
            .rule('iview')
            .test(/iview.src.*?js$/)
            .use('babel')
            .loader('babel-loader')
            .end()
    },
    configureWebpack: {
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: true,
                            drop_console: true, //删除console
                            drop_debugger: true // 删除debugger
                        }
                    }
                })
            ]
        }
    },
    // 打包时不生成.map文件
    productionSourceMap: false,
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的publicPath要写为 '' ，即空字符串
    devServer: {
        port: '9090'
    }
}
