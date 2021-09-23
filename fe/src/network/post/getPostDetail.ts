import { DEFAULT_POST, Post } from "../../../shared/models/post";
import { request } from "../request";

export async function getPostDetail(id: string) {
  const res = await request<Post>({
    method: "GET",
    url: `/post/${id}`,
  });

  return res.data || DEFAULT_POST;
}
