module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Izaya/' : '/',
  outputDir: 'dist',
  productionSourceMap: false,
  filenameHashing: true,
};
