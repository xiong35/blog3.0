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
exports.updatePost = void 0;
const useHandleError_1 = require("../../middleware/useHandleError");
const post_1 = require("../../models/post");
const tag_1 = require("../../models/tag");
const set_1 = require("../../utils/set");
const updatePost = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const req = ctx.request.body;
    req.tagNames = req.tagNames.map((t) => t.trim()).filter((t) => t);
    const { id } = ctx.params;
    if (!req.content)
        (0, useHandleError_1.createError)({
            status: 400,
            msg: "文章内容为空",
        });
    if (!req.digest)
        (0, useHandleError_1.createError)({
            status: 400,
            msg: "文章摘要为空",
        });
    if (!req.title)
        (0, useHandleError_1.createError)({
            status: 400,
            msg: "文章标题为空",
        });
    const post = yield post_1.Post.findOne({ _id: id }).catch((e) => null);
    if (!post)
        (0, useHandleError_1.createError)({ msg: "找不到文章", status: 404 });
    console.log("# updatePost", post);
    const oldTagNames = new Set(post.tags.map((t) => t.name));
    const newTagNames = new Set(req.tagNames);
    const deletedTagNames = (0, set_1.AMinusB)(oldTagNames, newTagNames);
    const addedTagNames = (0, set_1.AMinusB)(newTagNames, oldTagNames);
    const existingTags = yield tag_1.Tag.find({
        name: {
            $in: [...newTagNames],
        },
    });
    const nonExistingTagNames = [...newTagNames].filter((name) => !existingTags.find((tag) => tag.name === name));
    const createdTags = yield tag_1.Tag.insertMany(nonExistingTagNames.map((name) => ({ name, count: 0 })));
    post.tags = [
        ...createdTags.map((t) => {
            t.count = 1;
            return t;
        }),
        ...existingTags,
    ];
    yield post.save();
    const bulk = tag_1.Tag.collection.initializeUnorderedBulkOp();
    bulk
        .find({
        name: {
            $in: deletedTagNames,
        },
    })
        .update({ $inc: { count: -1 } });
    bulk
        .find({
        name: {
            $in: addedTagNames,
        },
    })
        .update({ $inc: { count: 1 } });
    bulk.execute();
    const ret = {
        status: 200,
        msg: "ok",
        data: { id: post.id },
    };
    ctx.body = ret;
});
exports.updatePost = updatePost;
