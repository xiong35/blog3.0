import { Middleware } from "koa";

import { createError } from "../../middleware/useHandleError";
import { CreatePostReq, HttpRes } from "../../models";
import { Post } from "../../models/post";
import { Tag } from "../../models/tag";

export const createPost: Middleware = async (ctx) => {
  const req = ctx.request.body as CreatePostReq;
  req.tagNames = req.tagNames.map((t) => t.trim()).filter((t) => t);

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
  const existingTags =
    (await Tag.find({
      name: {
        $in: req.tagNames,
      },
    })) || [];

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

  // 设置用过的每个 tag 的使用次数 ++
  const bulk = Tag.collection.initializeUnorderedBulkOp();
  bulk
    .find({
      name: {
        $in: existingTags.map((t) => t.name),
      },
    })
    .update({ $inc: { count: 1 } })
    .execute();

  console.log("# createPost", newPost);

  await newPost.save();

  const ret: HttpRes = {
    status: 200,
    msg: "ok",
    data: { id: newPost.id },
  };

  ctx.body = ret;
};
