<div align="center" id="top"> 
  <img src="./src/assets/logo-prime.png" alt="logo" />
  &#xa0;
</div>

<h1 align="center">博客 3.0</h1>
 
<hr>

<p align="center">
  <a href="#-about">About</a> &#xa0; | &#xa0; 
  <!-- <a href="#sparkles-features">Features</a> &#xa0; | &#xa0; -->
  <a href="#-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#-hierarchy">Hierarchy</a> &#xa0; | &#xa0;
  <a href="#-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#-license">License</a> &#xa0; | &#xa0;
  <a href="#-Author" target="_blank">Author</a>
</p>

<br>

## :dart: About

华科校内论坛网页

## :rocket: Technologies

技术栈如下:

- [vue3](https://www.vue3js.cn/)
- [vue-router](https://next.router.vuejs.org/)
- ts
- scss
- pug
- [GraphQL](https://graphql.org/)

## 🏗 hierarchy

项目目录结构如下:

```txt
/src
  /assets           静态资源文件夹(字体, 图片等)
  /changeLog        版本变更记录, 详见其中 README
  /components       拆分的 vue 组件
  /constants        一些项目中通用的常量
  /mail             发送验证码的邮件样式
  /mock             mock 数据存放的文件夹
  /models           模型定义
  /network          网络请求相关函数, 详见其中 README
    /gql            使用 gql 发送的请求
    /rest           使用 rest 发送的请求
    request.ts      封装的 axios 和 GQL 的配置
  /pages            存放界面的 vue 组件
  /reactivity       全局共享的状态管理文件夹
  /utils            封装的工具函数
  index.scss        自定义的全局 scss
  normalize.css     规范不同浏览器样式的 css
  project.d.ts      ts 指导文件
  router.ts         路由器
/docs
  接锅指南.md       如题, 重要
  文本编辑器使用指南.md     对此项目中文本编辑器的使用指导(面向论坛的用户)
/env                定义不同环境下的变量, 详见其中 README
```

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting

```bash
# Clone this project
git clone ssh://git@git.bingyan.net:88/xiongyilang/hust-forum.git

# Access
cd hust-forum

# Install dependencies
npm i

# Run the project
npm run dev

# The server will initialize in the <http://localhost:3000>
```

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE) file.

## 👨‍💻 Author

Made with :heart: by

- 前端
  - [前端小熊](https://git.bingyan.net/xiongyilang/)
- 后端
  - [KS](https://git.bingyan.net/KSkun)
  - [lyt99](https://git.bingyan.net/lyt99)
  - [yokel](https://git.bingyan.net/yokel)

&#xa0;

<a href="#top">返回顶部</a>
