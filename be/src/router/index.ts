import * as Router from "koa-router";
import { t } from "src/handlers/t";

const router = new Router();

router.all("/test", t);
// .use("/room", roomRouter.routes(), roomRouter.allowedMethods())
// .use(
//   "/game",
//   UseAuth(),
//   gameRouter.routes(),
//   gameRouter.allowedMethods()
// );

export default router;
