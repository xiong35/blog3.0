import { Middleware } from "koa";

import { GetPostsReq, GetPostsRes } from "../../models";
import { Post } from "../../models/post";

export const getAllPosts: Middleware = async (ctx) => {
  const { skip, limit } = (ctx.request.query as unknown) as GetPostsReq;

  console.log("# getAllPosts", { skip, limit });

  const posts = await Post.find()
    .skip(skip * 1)
    .limit(limit * 1)
    .catch((e) => null);

  const ret: GetPostsRes = {
    status: 200,
    msg: "ok",
    data: posts,
  };

  ctx.body = ret;
};
