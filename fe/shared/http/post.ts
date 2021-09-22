import { Post, PostBrief } from "../models/post";
import { HttpRes } from "./";

export type GetPostsRes = HttpRes<PostBrief[]>;
export type GetPostsReq = { skip: number; limit: number };
export type GetPostDetailRes = HttpRes<Post>;

export type CreatePostReq = Pick<Post, "digest" | "title" | "content"> & {
  tagNames: string[];
};

export type UpdatePostReq = CreatePostReq;
export type DeletePostReq = { id: string };
