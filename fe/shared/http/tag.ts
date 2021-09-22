import { Tag } from "../models/tag";
import { HttpRes } from "./";

export type GetTagsRes = HttpRes<Tag[]>;
