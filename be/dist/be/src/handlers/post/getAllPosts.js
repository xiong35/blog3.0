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
exports.getAllPosts = void 0;
const useHandleError_1 = require("../../middleware/useHandleError");
const post_1 = require("../../models/post");
const getAllPosts = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { from, to, limit, kw: _kw } = ctx.request
        .query;
    let updateConstraint;
    let lookAt;
    if (from === undefined && to === undefined) {
        (0, useHandleError_1.createError)({ status: 400, msg: "需要提供最新/最旧的日期之一" });
    }
    else if (from !== undefined && to !== undefined) {
        const toDate = new Date(to * 1);
        const fromDate = new Date(from * 1);
        updateConstraint = {
            $gte: fromDate,
            $lte: toDate,
        };
        lookAt = "middle";
    }
    else if (from !== undefined) {
        const fromDate = new Date(from * 1);
        updateConstraint = {
            $lt: fromDate,
        };
        lookAt = "older";
    }
    else if (to !== undefined) {
        const toDate = new Date(to * 1);
        updateConstraint = {
            $gt: toDate,
        };
        lookAt = "newer";
    }
    console.log("# getAllPosts", updateConstraint);
    const kwReg = new RegExp(`${_kw || ""}`, "i");
    const posts = yield post_1.Post.find({
        updatedAt: updateConstraint,
        $or: [{ digest: kwReg }, { title: kwReg }, { "tags.name": kwReg }],
    })
        .sort({ updatedAt: lookAt === "newer" ? 1 : -1 })
        .limit((limit || 0) * 1)
        .catch((e) => null);
    if (lookAt === "newer")
        posts.reverse();
    const ret = {
        status: 200,
        msg: "ok",
        data: posts,
    };
    ctx.body = ret;
});
exports.getAllPosts = getAllPosts;
