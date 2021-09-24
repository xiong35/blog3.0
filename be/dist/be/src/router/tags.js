"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagRouter = void 0;
const Router = require("koa-router");
const getAllTags_1 = require("../handlers/tag/getAllTags");
exports.tagRouter = new Router();
exports.tagRouter.get("/", getAllTags_1.getAllTags);
