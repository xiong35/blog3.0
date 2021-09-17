import * as Koa from "koa";
import * as KoaBody from "koa-body";
import * as logger from "koa-logger";

import * as cors from "@koa/cors";

import useHandleError from "./middleware/handleError";
import router from "./router";

const app = new Koa<
  { isKnownError: Boolean },
  { error: (status: number, msg: string) => void }
>();

app
  .use(logger())
  .use(cors({ credentials: true, origin: "http://localhost:3000" }))

  .use(useHandleError())

  .use(KoaBody())

  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3030);

console.log("listen on 3030");
