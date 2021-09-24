"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const tag_1 = require("./tag");
const postSchema = new mongoose_1.Schema({
    title: String,
    digest: String,
    content: String,
    tags: { type: [tag_1._tagSchema], default: () => [] },
    visited: { type: Number, default: 0 },
}, { timestamps: true });
exports.Post = (0, mongoose_1.model)("Post", postSchema);
