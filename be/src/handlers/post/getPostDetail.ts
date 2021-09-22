import { IMiddleware } from "koa-router";

import { GetPostDetailRes } from "../../models";
import { Post, PostModel } from "../../models/post";

// import { Post } from "src/models/post";

export const getPostDetail: IMiddleware = async (ctx) => {
  const req = ctx.params as { id: string };

  const post: PostModel | null = await Post.findById(req.id)
    .exec()
    .catch((e) => null);

  post.visited++;
  post.save();

  console.log("# getPostDetail", { post });

  const ret: GetPostDetailRes = {
    status: 200,
    msg: "ok",
    data: post,
  };

  ctx.body = ret;
};
