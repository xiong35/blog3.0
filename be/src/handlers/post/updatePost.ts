import { IMiddleware } from "koa-router";

import { createError } from "../../middleware/useHandleError";
import { HttpRes, UpdatePostReq } from "../../models";
import { Post, PostModel } from "../../models/post";
import { Tag } from "../../models/tag";
import { AMinusB } from "../../utils/set";

export const updatePost: IMiddleware = async (ctx) => {
  const req = ctx.request.body as UpdatePostReq;
  req.tagNames = req.tagNames.map((t) => t.trim()).filter((t) => t);

  const { id } = ctx.params;

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

  const post: PostModel | null = await Post.findOne({ _id: id }).catch(
    (e) => null
  );
  if (!post) createError({ msg: "找不到文章", status: 404 });

  console.log("# updatePost", post);

  const oldTagNames = new Set(post.tags.map((t) => t.name));
  const newTagNames = new Set(req.tagNames);
  const deletedTagNames = AMinusB(oldTagNames, newTagNames);
  const addedTagNames = AMinusB(newTagNames, oldTagNames);

  // 找到文章 tag 中已有的部分
  const existingTags = await Tag.find({
    name: {
      $in: [...newTagNames],
    },
  });
  // 找到全新添加的 tag
  const nonExistingTagNames = [...newTagNames].filter(
    (name) => !existingTags.find((tag) => tag.name === name)
  );
  // 创建新的 tag
  const createdTags = await Tag.insertMany(
    nonExistingTagNames.map((name) => ({ name, count: 0 }))
  );

  post.tags = [
    ...createdTags.map((t) => {
      t.count = 1;
      return t;
    }),
    ...existingTags,
  ];
  await post.save();

  //#region 更新 tag 库的 count
  const bulk = Tag.collection.initializeUnorderedBulkOp();
  bulk
    .find({
      name: {
        $in: deletedTagNames,
      },
    })
    .update({ $inc: { count: -1 } });
  bulk
    .find({
      name: {
        $in: addedTagNames,
      },
    })
    .update({ $inc: { count: 1 } });
  bulk.execute();
  //#endregion

  const ret: HttpRes = {
    status: 200,
    msg: "ok",
    data: { id: post.id },
  };

  ctx.body = ret;
};
