const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Progress = require('progress-webpack-plugin');
const { name } = require('../../package.json');

const resolve = function (dir = './') {
  return path.join(__dirname, '../../', dir);
};

module.exports = {
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
    }),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('html') */
    new HtmlWebpackPlugin({
      title: name,
      scriptLoading: 'defer',
      template: resolve('./public/index.html'),
    }),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        extensions: { vue: { enabled: true, compiler: resolve('./node_modules/vue/compiler-sfc') } },
        diagnosticOptions: { semantic: true, syntactic: false },
      },
    }),
    /* config.plugin('progress-webpack-plugin') */
    new Progress(),
  ],
};
