"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const t_1 = require("../handlers/t");
const useAuth_1 = require("../middleware/useAuth");
const post_1 = require("./post");
const tags_1 = require("./tags");
const router = new Router();
router
    .all("/test", t_1.t)
    .use("/post", post_1.postRouter.routes())
    .use("/tag", tags_1.tagRouter.routes())
    .get("/login", (0, useAuth_1.useAuth)(false));
exports.default = router;
