import { Tag } from "./tag";

export type Post = PostBrief & {
  content: string;
};

export type PostBrief = {
  _id: string;
  visited: number;
  title: string;
  digest: string;
  tags: Tag[];
  createdAt: Date;
  updatedAt: Date;
};

export const DEFAULT_POST: Post = {
  _id: "",
  content: "",
  createdAt: new Date(),
  digest: "",
  tags: [],
  title: "",
  updatedAt: new Date(),
  visited: 0,
};
