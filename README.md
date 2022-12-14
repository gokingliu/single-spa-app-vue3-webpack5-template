# SingleSpa 子应用

- 项目名称: single-spa-app-vue3-webpack5-template
- 说明: 此项目为微前端子应用，使用了 single-spa 微前端框架，支持项目作为 single-spa 子应用启动，也支持项目单独启动，方便子应用开发。项目构建支持 webpack 和 vite 工具，本地开发可使用 vite 提升开发体验，打包静态资源仅使用 webpack 保障项目兼容性。

## 技术栈

- 微前端: **single-spa**
- 构建工具: **webpack5** **vite3**
- 前端框架: **vue3**
- 编程语言: **typescript** **tsx** **javascript**
- UI 组件库: **element-plus**
- CSS 预编译: **sass**
- 网络请求: **axios**
- 代码规范: **eslint** **prettier**
- GIT 规范: **husky**
- modules 管理: **pnpm** **npm**

## 本地运行

- Vite SingleSpa 启动

```shell
npm run vite
```

- Vite 单独启动

```shell
npm run vite:standalone
```

- Webpack SingleSpa 启动

```shell
npm run webpack
```

- Webpack 单独启动

```shell
npm run webpack:standalone
```

## 打包项目

```shell
npm run build
```

## 代码格式化

```shell
npm run lint
```
