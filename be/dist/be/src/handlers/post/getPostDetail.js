"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostDetail = void 0;
const useHandleError_1 = require("../../middleware/useHandleError");
const post_1 = require("../../models/post");
const getPostDetail = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const req = ctx.params;
    const post = yield post_1.Post.findById(req.id)
        .exec()
        .catch((e) => null);
    if (!post)
        (0, useHandleError_1.createError)({ status: 404, msg: "找不到文章" });
    post.visited++;
    post.save({ timestamps: false });
    console.log("# getPostDetail", { post });
    const ret = {
        status: 200,
        msg: "ok",
        data: post,
    };
    ctx.body = ret;
});
exports.getPostDetail = getPostDetail;
