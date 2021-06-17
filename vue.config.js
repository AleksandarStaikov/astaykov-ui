module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/styles/base.scss";'
            }
        }
    },
    configureWebpack: {
        module: {
          rules: [
            {
              test: /\.(pdf)(\?.*)?$/,
              use: [
                {
                  loader: 'url-loader'
                }
              ]
            }
          ]
        }
      }
}