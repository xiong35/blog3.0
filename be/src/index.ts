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
  .use(cors({ credentials: true, origin: "http://localhost:3000" }))

  .use(useHandleError())

  .use(KoaBody())

  .use(router.routes());

app.listen(8080);

console.log("listen on 8080");
