import * as Router from "koa-router";
import { createPost } from "src/handlers/post/createPost";
import { t } from "src/handlers/t";

export const postRouter = new Router();

postRouter.post("/create", createPost);
// .use("/room", roomRouter.routes(), roomRouter.allowedMethods())
// .use(
//   "/game",
//   UseAuth(),
//   gameRouter.routes(),
//   gameRouter.allowedMethods()
// );
