type ReplaceParam = Parameters<String["replace"]>;

const toReplace: { reg: ReplaceParam[0]; replace: ReplaceParam[1] }[] = [
  {
    // 去除加粗斜体下划线删除线
    reg: /(_{1,2}|\*{1,2}|~{1,2})(.{1,20})\1/g,
    replace: (match, $1, $2) => $2,
  },
  {
    // 去除标题
    reg: /^#{1,6}/gm,
    replace: () => "",
  },
  // ol 和 ul 就不去除了
  {
    // 去除行内代码段
    reg: /`.*?`/g,
    replace: () => "[代码]",
  },
  {
    // 去除块级代码段
    reg: /```(.|\n)*?```/gm,
    replace: () => "[代码]",
  },
  {
    // 去除图片
    reg: /!\[(.*)\]\(.*\)(\{{3,3}.*\}{3,3})?/g,
    replace: (match, $1) => `[图片：${$1}]`,
  },
  {
    // 去除链接
    reg: /\[(.*)\]\(.*\)/g,
    replace: (match, $1) => `[链接：${$1}]`,
  },
  {
    // 去除行内 katex
    reg: /\$.*\$/g,
    replace: () => `[公式]`,
  },
  {
    // 去除整块 katex
    reg: /\$\$(.|\n)*?\$\$/gm,
    replace: () => `[公式]`,
  },
];

/**
 * 将内容中的 md 语法去除并返回截断的摘要
 * @param content
 * @returns
 */
export function generateDigest(content: string): string {
  return toReplace
    .reduce((c, r) => c.replace(r.reg, r.replace), content)
    .slice(0, 100);
}
