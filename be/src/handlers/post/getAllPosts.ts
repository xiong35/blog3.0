import { Middleware } from "koa";

import { PostBrief } from "../../../../fe/shared/models/post";
import { createError } from "../../middleware/useHandleError";
import { GetPostsReq, GetPostsRes } from "../../models";
import { Post } from "../../models/post";

export const getAllPosts: Middleware = async (ctx) => {
  const { from, to, limit, kw: _kw } = (ctx.request
    .query as unknown) as GetPostsReq;

  let updateConstraint;
  let lookAt: "newer" | "middle" | "older";
  if (from === undefined && to === undefined) {
    createError({ status: 400, msg: "需要提供最新/最旧的日期之一" });
  } else if (from !== undefined && to !== undefined) {
    const toDate = new Date(to * 1);
    const fromDate = new Date(from * 1);
    updateConstraint = {
      $gte: fromDate,
      $lte: toDate,
    };
    lookAt = "middle";
  } else if (from !== undefined) {
    const fromDate = new Date(from * 1);
    updateConstraint = {
      $lt: fromDate,
    };
    lookAt = "older";
  } else if (to !== undefined) {
    const toDate = new Date(to * 1);
    updateConstraint = {
      $gt: toDate,
    };
    lookAt = "newer";
  }

  console.log("# getAllPosts", updateConstraint);

  const kwReg = new RegExp(`${_kw || ""}`, "i");

  const posts: PostBrief[] = await Post.find({
    updatedAt: updateConstraint,
    $or: [{ digest: kwReg }, { title: kwReg }, { "tags.name": kwReg }],
  })
    .sort({ updatedAt: lookAt === "newer" ? 1 : -1 })
    .limit((limit || 0) * 1)
    .catch((e) => null);

  if (lookAt === "newer") posts.reverse();

  const ret: GetPostsRes = {
    status: 200,
    msg: "ok",
    data: posts,
  };

  ctx.body = ret;
};
