import * as Router from "koa-router";

import { createPost } from "../handlers/post/createPost";
import { deletePost } from "../handlers/post/deletePost";
import { getAllPosts } from "../handlers/post/getAllPosts";
import { getPostDetail } from "../handlers/post/getPostDetail";
import { updatePost } from "../handlers/post/updatePost";
import { useAuth } from "../middleware/useAuth";

export const postRouter = new Router();

postRouter
  .get("/:id", getPostDetail)
  .get("/", getAllPosts)
  .use(useAuth())
  .post("/", createPost)
  .put("/:id", updatePost)
  .delete("/:id", deletePost);
