const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const IconsResolver = require('unplugin-icons/resolver');
const Icons = require('unplugin-icons/webpack');

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
    Icons({ autoInstall: true, compiler: 'vue3' }),
  ],
};
