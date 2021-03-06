"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const githubHotmap_1 = require("../handlers/githubHotmap");
const setu_1 = require("../handlers/setu");
const useAuth_1 = require("../middleware/useAuth");
const post_1 = require("./post");
const tags_1 = require("./tags");
const router = new Router();
router
    .get("/setu", setu_1.setu)
    .get("/github/hotmap", githubHotmap_1.githubHotmap)
    .use("/post", post_1.postRouter.routes())
    .use("/tag", tags_1.tagRouter.routes())
    .get("/login", (0, useAuth_1.useAuth)(false));
exports.default = router;
