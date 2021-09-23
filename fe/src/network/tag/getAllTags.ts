import { Tag } from "../../../shared/models/tag";
import { request } from "../request";

export async function getAllTags() {
  const res = await request<Tag[]>({
    method: "GET",
    url: "/tag",
  });

  return res.data || [];
}
