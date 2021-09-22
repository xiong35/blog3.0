import { IMiddleware } from "koa-router";
import * as sha256 from "sha256";

import { createError } from "./useHandleError";

export function useAuth(): IMiddleware {
  return async (ctx, next) => {
    // 前端已经加密过的密码
    const auth = ctx.headers.authorization;

    if (!auth) return createError({ status: 401, msg: "密码错误" });
    if (
      // 后端再摘要比较一次
      sha256(auth) !==
      "97f8eba41e32f009ef9956cb2e9906825be59fdabe3f19b3f2e2242116b71c7a"
    ) {
      return createError({ status: 401, msg: "密码错误" });
    } else {
      return await next();
    }
  };
}
