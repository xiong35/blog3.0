declare module "*.vue" {
import { ComponentOptions } from "vue";

    const componentOptions: ComponentOptions;
  export default componentOptions;
}

declare module "@kangc/v-md-editor/lib/theme/vuepress.js";
declare module "@kangc/v-md-editor/lib/theme/github.js";
declare module "@kangc/v-md-editor/lib/plugins/emoji/index";
declare module "@kangc/v-md-editor/lib/plugins/katex/cdn";
declare module "@kangc/v-md-editor/lib/plugins/todo-list/index";
declare module "@kangc/v-md-editor/lib/plugins/line-number/index";
declare module "@kangc/v-md-editor/lib/plugins/copy-code/index";

declare module "@kangc/v-md-editor";
