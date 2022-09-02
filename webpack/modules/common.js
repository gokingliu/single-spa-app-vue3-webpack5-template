const { merge } = require('webpack-merge');
const LoaderConfig = require('./loaders');
const OptimizationConfig = require('./optimization');
const PluginsConfig = require('./plugins');
const Custom = require('./custom');
const path = require('path');
const { name } = require('../../package.json');

const resolve = function (dir = './') {
  return path.join(__dirname, '../../', dir);
};

module.exports = merge(LoaderConfig, OptimizationConfig, PluginsConfig, Custom, {
  context: resolve(),
  entry: { app: resolve('./src/main.ts') },
  stats: 'errors-only',
  infrastructureLogging: { level: 'info' },
  output: {
    path: resolve('./dist'),
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[chunkhash].js',
    libraryTarget: 'umd',
    devtoolNamespace: name,
  },
  resolve: {
    alias: { '@': resolve('./src') },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.vue', '.json', '.wasm'],
  },
  optimization: { realContentHash: false },
});
