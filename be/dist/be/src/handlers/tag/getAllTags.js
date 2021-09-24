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
exports.getAllTags = void 0;
const tag_1 = require("../../models/tag");
const getAllTags = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const tags = yield tag_1.Tag.find({ count: { $gt: 0 } });
    const ret = {
        status: 200,
        msg: "ok",
        data: tags,
    };
    ctx.body = ret;
});
exports.getAllTags = getAllTags;
