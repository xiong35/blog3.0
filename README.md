<div align="center" id="top"> 
  <img src="./fe/public/favicon.ico" alt="logo" />
  &#xa0;
</div>

<h1 align="center">小熊的第三代博客</h1>
 
<hr>

<p align="center">
  <a href="#-about">About</a> &#xa0; | &#xa0; 
  <!-- <a href="#sparkles-features">Features</a> &#xa0; | &#xa0; -->
  <a href="#-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#-Hierarchy">Hierarchy</a> &#xa0; | &#xa0;
  <a href="#-Requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#-Starting">Starting</a> &#xa0; | &#xa0;
  <a href="#-License">License</a> &#xa0; | &#xa0;
  <a href="#-Author" target="_blank">Author</a>
</p>

<br>

## :dart: About

原来的博客不够炫酷, 功能也不够称心, 代码也不够优雅, 小熊决定重新写一个博客!

## :rocket: Technologies

技术栈如下:

- 前端
  - vue3
  - [vue + jsx](https://github.com/vuejs/vue-next)
  - TS
  - Scss
- 后端
  - Koa
  - mongoose

## 🏗 Hierarchy

项目目录结构如下:

```txt
├── be                          # 后端代码
│   └── src
│       ├── handlers
│       ├── middleware          # 一些通用的中间件
│       ├── models              # Mongoose 的类型定义
│       ├── router              # 后端路由
│       └── utils               # 封装的工具函数
├── fe                          # 前端代码
│   ├── shared                  # 前后端共享的 TS 类型定义
│   │   ├── http                # 网络请求 body 和 response 的定义
│   │   └── models              # 使用的对象的定义
│   └── src
│       ├── assets              # 存放图片和全局使用的 scss
│       ├── components          # 共享的组件
│       ├── constants           # 全局常量
│       ├── layouts             # 布局组件
│       ├── network             # 网络请求函数
│       ├── pages               # 界面组件
│       ├── reactivity          # 全局使用的响应式数据
│       └── utils               # 封装的工具函数
└── scripts                     # 便于开发的脚本(分支管理等)
    └── upload                  # 批量上传博客的脚本
```

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com), [MongoDB](https://docs.mongodb.com/), and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting

```bash
# Clone this project
git clone git@github.com:xiong35/blog3.0.git
# download yarn
npm i yarn -g

# Access
cd blog3.0

# Install BE dependencies
cd be
yarn
# 请在 mongodb 中建立名为 `blog3` 的数据库
# run BE
yarn dev

# Install FE dependencies
cd ../fe
yarn
# run BE
yarn dev

# The server will initialize in the <http://localhost:3000>
```

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE) file.

## 👨‍💻 Author

Made with :heart: by

- 前端
  - [小熊](https://github.com/xiong35)
- 后端
  - [小熊](https://github.com/xiong35)

&#xa0;

<a href="#top">返回顶部</a>
