type Data = {
  digest: string;
  title: string;
  content: string;
  tagNames: string[];
};

export function processContent(content: string): Data {
  content = content.trim();

  const reg = /# (.*)\s*\> 关键词\: (.*)\s*([\s\S]*)/gm;
  const [_, title, tags, main] = reg.exec(content) || [];

  if (!title) throw new Error("没有标题");
  if (!main) throw new Error("没有主要内容");
  if (!tags) throw new Error("没有tag");

  const digest = generateDigest(main);
  const tagNames = tags.split(",").map((t) => t.trim());
  if (tagNames.length > 5) throw new Error("标题太多了: " + tags);

  return {
    digest,
    title,
    tagNames,
    content,
  };
}

type ReplaceParam = Parameters<string["replace"]>;

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
  {
    // 去除引用
    reg: /^> (.*)/gm,
    replace: (match, $1) => $1,
  },
  // ol 和 ul 就不去除了
  {
    // 去除块级代码段
    reg: /```[\s\S]*?```/gm,
    replace: () => "[代码]",
  },
  {
    // 去除行内代码段
    reg: /`.*?`/g,
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
  {
    // 将多个空白字符合并
    reg: /\s+/gm,
    replace: () => ` `,
  },
];

/**
 * 将内容中的 md 语法去除并返回截断的摘要
 * @param content
 * @returns
 */
function generateDigest(content: string): string {
  return toReplace
    .reduce((c, r) => c.replace(r.reg, r.replace), content)
    .slice(0, 200);
}
