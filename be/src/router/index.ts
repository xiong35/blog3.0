import * as Router from "koa-router";
import { t } from "src/handlers/t";

import { postRouter } from "./post";

const router = new Router();

router
  .all("/test", t)
  .use("/post", postRouter.routes(), postRouter.allowedMethods());
// .use(
//   "/game",
//   UseAuth(),
//   gameRouter.routes(),
//   gameRouter.allowedMethods()
// );

export default router;
