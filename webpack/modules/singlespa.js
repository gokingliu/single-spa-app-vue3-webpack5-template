const SystemJSPublicPathWebpackPlugin = require('systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin');
const StandaloneSingleSpaPlugin = require('standalone-single-spa-webpack-plugin');
const { name } = require('../../package.json');

module.exports = {
  externals: ['single-spa'],
  optimization: { splitChunks: {} },
  plugins: [
    /* config.plugin('SystemJSPublicPathWebpackPlugin') */
    new SystemJSPublicPathWebpackPlugin({ rootDirectoryLevel: 2, systemjsModuleName: name }),
    /* config.plugin('StandaloneSingleSpaPlugin') */
    new StandaloneSingleSpaPlugin({ appOrParcelName: name, disabled: true }),
  ],
};
