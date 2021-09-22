import { Middleware } from "koa";

import { createError } from "../../middleware/useHandleError";
import { CreatePostReq, HttpRes } from "../../models";
import { Post } from "../../models/post";
import { Tag } from "../../models/tag";

export const createPost: Middleware = async (ctx) => {
  const req = ctx.request.body as CreatePostReq;

  if (!req.content)
    createError({
      status: 400,
      msg: "文章内容为空",
    });
  if (!req.digest)
    createError({
      status: 400,
      msg: "文章摘要为空",
    });
  if (!req.title)
    createError({
      status: 400,
      msg: "文章标题为空",
    });

  // 找到文章 tag 中已有的部分
  const existingTags = await Tag.find({
    name: {
      $in: req.tagNames,
    },
  });

  // 找到新添加的 tag
  const newTagNames = req.tagNames.filter(
    (name) => !existingTags.find((tag) => tag.name === name)
  );
  console.log(
    "# createPost",
    { newTagNames },
    newTagNames.map((name) => ({ name }))
  );
  // 创建新的 tag
  const newTags = await Tag.insertMany(newTagNames.map((name) => ({ name })));

  const newPost = new Post(req);

  // 设置文章的 tags
  newPost.tags = [...existingTags, ...newTags];

  await newPost.save();

  const ret: HttpRes = {
    status: 200,
    msg: "ok",
    data: { id: newPost.id },
  };

  ctx.body = ret;
};
