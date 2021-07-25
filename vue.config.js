module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/aviasales-widget/' : '/',
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
