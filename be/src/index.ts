import * as Koa from "koa";
import * as KoaBody from "koa-body";
import * as logger from "koa-logger";

import * as cors from "@koa/cors";

import useHandleError from "./middleware/useHandleError";
import { setupMongo } from "./models";
import router from "./router";

setupMongo();

const app = new Koa<
  { isKnownError: Boolean },
  { error: (status: number, msg: string) => void }
>();

app
  .use(logger())
  .use(
    cors({
      origin: "*",
      allowMethods: "*",
      allowHeaders:
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      exposeHeaders:
        "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Cache-Control, Content-Language, Content-Type",
      credentials: true,
    })
  )

  .use(useHandleError())

  .use(KoaBody())

  .use(router.routes());

app.listen(3012);

console.log("listen on 3012");
