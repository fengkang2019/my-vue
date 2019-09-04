

// vue/cli 相关配置文件 脚手架

module.exports = {
    publicPath: "",//设置项目的公共路径 打包上线

    devServer: {
        host: "0.0.0.0",
        port: 8080,
        open: true,//自动打开浏览器
        proxy: { //代理
            "/vue": {
                target: "http://localhost:1906",
                changeOrigin: true,
            }
        }
    }
}