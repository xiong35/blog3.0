import { Tag } from "./tag";

export type Post = {
  id: string;
  title: string;
  digest: string;
  content: string;
  tags: Tag[];
  createdAt: Date;
  updatedAt: Date;
};
