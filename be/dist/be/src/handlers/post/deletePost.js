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
exports.deletePost = void 0;
const post_1 = require("../../models/post");
const tag_1 = require("../../models/tag");
const deletePost = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = ctx.params;
    const post = yield post_1.Post.findOne({ _id: id });
    const tagNames = post.tags.map((tag) => tag.name);
    const bulk = tag_1.Tag.collection.initializeUnorderedBulkOp();
    bulk
        .find({
        name: {
            $in: tagNames,
        },
    })
        .update({ $inc: { count: -1 } })
        .execute();
    post.delete();
    const ret = {
        status: 200,
        msg: "ok",
        data: {},
    };
    ctx.body = ret;
});
exports.deletePost = deletePost;
