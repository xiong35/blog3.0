import { Middleware } from "koa";

import { GetPostsReq, GetPostsRes } from "../../models";
import { Post } from "../../models/post";

export const getAllPosts: Middleware = async (ctx) => {
  const { skip, limit, kw: _kw } = (ctx.request
    .query as unknown) as GetPostsReq;

  const kwReg = new RegExp(`${_kw || ""}`, "i");

  console.log("# getAllPosts", { skip, limit, kwReg });

  const posts = await Post.find({
    $or: [{ digest: kwReg }, { title: kwReg }, { "tags.name": kwReg }],
  })
    .skip((skip || 0) * 1)
    .limit((limit || 0) * 1)
    .catch((e) => null);

  const ret: GetPostsRes = {
    status: 200,
    msg: "ok",
    data: posts,
  };

  ctx.body = ret;
};
