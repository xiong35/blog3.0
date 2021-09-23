import * as Router from "koa-router";

import { t } from "../handlers/t";
import { useAuth } from "../middleware/useAuth";
import { postRouter } from "./post";
import { tagRouter } from "./tags";

const router = new Router();

router
  .all("/test", t)
  .use("/post", postRouter.routes())
  .use("/tag", tagRouter.routes())
  .get("/login", useAuth(false));

export default router;
