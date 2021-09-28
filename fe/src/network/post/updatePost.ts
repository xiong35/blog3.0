import { CreatePostReq } from "../../../shared/http/post";
import { request } from "../request";

export async function updatePost(data: CreatePostReq, id: string) {
  const res = await request({
    method: "PUT",
    data,
    url: `/post/${id}`,
  });

  return !!res.data;
}
