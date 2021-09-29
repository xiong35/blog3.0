import * as Router from "koa-router";

import { setu } from "../handlers/setu";
import { useAuth } from "../middleware/useAuth";
import { postRouter } from "./post";
import { tagRouter } from "./tags";

const router = new Router();

router
  .get("/setu", setu)
  .use("/post", postRouter.routes())
  .use("/tag", tagRouter.routes())
  .get("/login", useAuth(false));

export default router;
