import { CreatePostReq } from "../../../shared/http/post";
import { request } from "../request";

export async function addPost(data: CreatePostReq) {
  const res = await request({
    method: "POST",
    data,
    url: "/post",
  });

  return !!res.data;
}
