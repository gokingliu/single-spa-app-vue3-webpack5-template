const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const Common = require('./modules/common');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const productionGzipExtensions = ['js', 'html', 'css', 'svg', 'png'];

module.exports = merge(Common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    usedExports: true,
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        BASE_URL: '"/"',
      },
    }),
    /* config.plugin('clean-webpack-plugin') */
    new CleanWebpackPlugin(),
    /* config.plugin('compression-webpack-plugin') */
    new CompressionWebpackPlugin({
      algorithm: 'gzip',
      test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`), // 匹配文件名
      threshold: 10240, // 对超过 10k 的数据进行压缩
      minRatio: 0.8,
      deleteOriginalAssets: false, // 是否删除原文件
    }),
    /* config.plugin('copy') */
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public'),
          to: path.resolve(__dirname, './dist'),
          toType: 'dir',
          noErrorOnMissing: true,
          globOptions: { ignore: ['**/.DS_Store', path.resolve(__dirname, './public/index.html')] },
          info: { minimized: true },
        },
      ],
    }),
  ],
});
