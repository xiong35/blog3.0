import * as Router from "koa-router";

import { getAllTags } from "../handlers/tag/getAllTags";

export const tagRouter = new Router();

tagRouter.get("/", getAllTags);
