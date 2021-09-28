import { CreatePostReq } from "../../../shared/http/post";
import { request } from "../request";

export async function delPost(id: string) {
  const res = await request({
    method: "DELETE",
    url: `/post/${id}`,
  });

  return !!res.data;
}
