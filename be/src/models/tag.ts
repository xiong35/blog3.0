import { Document, model, Model, Schema } from "mongoose";

import { Tag as TagDef } from "../../../fe/shared/models/tag";

export const _tagSchema = new Schema({
  content: String,
});

export type TagModel = Document & TagDef;

export const Tag: Model<TagModel> = model("Tag", _tagSchema);
