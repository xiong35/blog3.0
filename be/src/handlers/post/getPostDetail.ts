import { IMiddleware } from "koa-router";

import { createError } from "../../middleware/useHandleError";
import { GetPostDetailRes } from "../../models";
import { Post, PostModel } from "../../models/post";

// import { Post } from "src/models/post";

export const getPostDetail: IMiddleware = async (ctx) => {
  const req = ctx.params as { id: string };

  const post: PostModel | null = await Post.findById(req.id)
    .exec()
    .catch((e) => null);

  if (!post) createError({ status: 404, msg: "找不到文章" });

  post.visited++;
  post.save({ timestamps: false });

  console.log("# getPostDetail", { post });

  const ret: GetPostDetailRes = {
    status: 200,
    msg: "ok",
    data: post,
  };

  ctx.body = ret;
};
