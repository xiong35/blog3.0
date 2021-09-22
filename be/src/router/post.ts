import * as Router from "koa-router";

import { createPost } from "../handlers/post/createPost";
import { getPostDetail } from "../handlers/post/getPostDetail";

export const postRouter = new Router();

postRouter.post("/", createPost).get("/:id", getPostDetail);
// .use("/room", roomRouter.routes(), roomRouter.allowedMethods())
// .use(
//   "/game",
//   UseAuth(),
//   gameRouter.routes(),
//   gameRouter.allowedMethods()
// );
