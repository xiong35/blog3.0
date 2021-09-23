/* 对 v-md-editor 做初始化 */

import "@kangc/v-md-editor/lib/style/base-editor.css";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";

import VueMarkdownEditor from "@kangc/v-md-editor";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";

import createEmojiPlugin from "@kangc/v-md-editor/lib/plugins/emoji/index";
import "@kangc/v-md-editor/lib/plugins/emoji/emoji.css";

import createKatexPlugin from "@kangc/v-md-editor/lib/plugins/katex/cdn";

// todolist 的插件
import createTodoListPlugin from "@kangc/v-md-editor/lib/plugins/todo-list/index";
import "@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css";

// 一键复制代码的插件
import createCopyCodePlugin from "@kangc/v-md-editor/lib/plugins/copy-code/index";
import "@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css";

// 代码高亮的插件, 引入以下支持的语言
//#region langs
import Prism from "prismjs"; // 必须引入才能让后面的引入得到Prism全局变量
Prism.toString;

import "prismjs/components/prism-bash";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cmake";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-dart";
import "prismjs/components/prism-go";
import "prismjs/components/prism-java";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-nginx";
import "prismjs/components/prism-python";
import "prismjs/components/prism-sass";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-typescript";
//#endregion

// 使用 vue press 主题
VueMarkdownEditor.use(vuepressTheme, {
  // options: 将 vue 的代码高亮指定为 html, 将 react 的指定为 jsx
  codeHighlightExtensionMap: {
    vue: "html",
    react: "jsx",
  },
  Prism,
});

VueMarkdownEditor.use(createEmojiPlugin()); // 支持 :emoji: 的插件
VueMarkdownEditor.use(createKatexPlugin()); // 支持 katex 的插件(在 index.html 中引入了相关依赖)
VueMarkdownEditor.use(createTodoListPlugin()); // 支持 todolist 的插件
VueMarkdownEditor.use(createCopyCodePlugin()); // 一键复制代码的插件

// 扩展 xss 规则, 防止 style 注入
VueMarkdownEditor.xss.extend({
  onTag(tag: string, html: string, options: { isClosing: boolean }) {
    if (tag === "style") {
      if (options.isClosing) {
        return "&lt;/style&gt;";
      } else {
        return "&lt;style&gt;";
      }
    }
  },
  stripIgnoreTag: true,
});

export default VueMarkdownEditor;
