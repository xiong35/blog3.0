import { Middleware } from "koa";

const useHandleError = function (): Middleware {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      try {
        const msg = JSON.parse(err.message);
        ctx.body = {
          ...msg,
          data: {},
        };
      } catch {
        ctx.body = {
          status: 500,
          msg: err.message,
          data: {},
        };
      } finally {
        console.error(err);
      }
    } finally {
      if (ctx.status === 301 || ctx.status === 302) void 0;
      else ctx.status = 200;
    }
  };
};

export default useHandleError;

export function createError({
  status,
  msg,
}: {
  status: number;
  msg: string;
}): undefined {
  throw new Error(
    JSON.stringify({
      status,
      msg,
    })
  );
}
