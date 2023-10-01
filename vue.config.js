module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Izaya/' : '/',
  outputDir: 'docs',
  assetsDir: 'assets',
  productionSourceMap: false,
  filenameHashing: true,
};
