const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const Common = require('./modules/common');
const SingleSpa = require('./modules/singlespa');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
const path = require('path');

const resolve = function (dir = './') {
  return path.join(__dirname, '../', dir);
};

module.exports = (env) => {
  const standalone = env.VUE_APP_ENV === 'standalone';
  const config = merge(Common, !standalone && SingleSpa, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
      allowedHosts: 'all',
      compress: false,
      headers: { 'Access-Control-Allow-Origin': '*' },
      client: {
        logging: 'error',
        progress: true,
        overlay: { warnings: false, errors: true },
      },
    },
    plugins: [
      new DefinePlugin({
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"',
        },
      }),
      /* config.plugin('eslint') */
      new ESLintWebpackPlugin({
        extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
        cwd: resolve(),
        cache: true,
        context: resolve(),
        failOnWarning: false,
        failOnError: true,
        eslintPath: resolve('node_modules/eslint'),
        formatter: 'stylish',
      }),
      /* config.plugin('friendly-errors') */
      new FriendlyErrorsWebpackPlugin({ clearConsole: false }),
    ],
  });
  // standalone mode
  config.plugins.find((plugin) => !!plugin.definitions?.['process.env']).definitions['process.env'].VUE_APP_ENV =
    standalone ? '"standalone"' : void 0;

  return config;
};
