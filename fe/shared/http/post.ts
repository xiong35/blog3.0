import { Post, PostBrief } from "../models/post";
import { HttpRes } from "./";

export type GetPostsResData = PostBrief[];
export type GetPostsRes = HttpRes<GetPostsResData>;
export type GetPostsReq = {
  from?: number;
  to?: number;
  limit: number;
  kw?: string;
};
export type GetPostDetailRes = HttpRes<Post>;

export type CreatePostReq = Pick<Post, "digest" | "title" | "content"> & {
  tagNames: string[];
};

export type UpdatePostReq = CreatePostReq;
export type DeletePostReq = { id: string };
