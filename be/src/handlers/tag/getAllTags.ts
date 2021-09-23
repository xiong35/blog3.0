import { IMiddleware } from "koa-router";

import { GetTagsRes } from "../../models";
import { Tag } from "../../models/tag";

export const getAllTags: IMiddleware = async (ctx) => {
  const tags = await Tag.find({ count: { $gt: 0 } });

  const ret: GetTagsRes = {
    status: 200,
    msg: "ok",
    data: tags,
  };

  ctx.body = ret;
};
