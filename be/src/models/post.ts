import { Document, model, Model, Schema } from "mongoose";

import { Post as PostDef } from "../../../fe/shared/models/post";
import { _tagSchema, TagModel } from "./tag";

const postSchema = new Schema(
  {
    title: String,
    digest: String,
    content: String,
    tags: { type: [_tagSchema], default: () => [] },
  },
  { timestamps: true }
);

export type PostModel = Document & Omit<PostDef, "tags"> & { tags: TagModel[] };

export const Post: Model<PostModel> = model("Post", postSchema);
