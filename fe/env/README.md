# README

此目录下 `.env**` 文件中定义了不同环境(dev or prod)下的变量

关于环境变量, 有四部分内容需要注意

1. 在 `vite.config.ts` 中通过`envDir: "env"`指定了此目录为环境变量目录, 详见[vite 文档](https://cn.vitejs.dev/config/#envdir)
2. 在此文件夹的文件中下依据[此规则](https://cn.vitejs.dev/guide/env-and-mode.html#production-replacement)配置环境变量
3. 在 `package.json` 中的 script 脚本下通过`--mode`参数指定环境. 现版本中开发模式(包括本地开发及
   上线的测试版本)会设置 mode 为 dev, 生产版本 mode 为空. 详见第二点中的链接
