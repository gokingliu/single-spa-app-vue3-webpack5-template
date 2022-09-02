const AutoImport = require('unplugin-auto-import/dist/webpack.js');
const Components = require('unplugin-vue-components/dist/webpack.js');
const { ElementPlusResolver } = require('unplugin-vue-components/dist/resolvers.js');
const IconsResolver = require('unplugin-icons/dist/resolver.js');
const Icons = require('unplugin-icons/dist/webpack.js');

module.exports = {
  plugins: [
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({ prefix: 'Icon' }),
      ],
      dts: 'auto-imports.d.ts',
    }),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({ enabledCollections: ['ep'] }),
        // 自动导入 Element Plus 组件
        ElementPlusResolver({ importStyle: 'sass' }),
      ],
      dts: 'components.d.ts',
    }),
    Icons({ autoInstall: true }),
  ],
};
