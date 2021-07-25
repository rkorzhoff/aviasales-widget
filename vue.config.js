module.exports = {
  publicPath: '/aviasales-widget/',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false,
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
}
