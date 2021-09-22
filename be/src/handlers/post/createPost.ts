import { Middleware } from "koa";
import { constants } from "perf_hooks";
import { Post } from "src/models/post";
import { Tag } from "src/models/tag";

import { CreatePostReq, HttpRes } from "../../models";

export const createPost: Middleware = async (ctx) => {
  const req = ctx.request.body as CreatePostReq;

  // 找到文章 tag 中已有的部分
  const existingTags = await Tag.find({
    name: {
      $in: req.tagNames,
    },
  }).exec();

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
    data: {},
  };

  ctx.body = ret;
};
