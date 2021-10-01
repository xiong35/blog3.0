import { GetDotRet } from "../../../shared/models/github";
import { request } from "../request";

export async function getContributionMap() {
  const res = await request<GetDotRet>({
    method: "GET",
    url: "/github/hotmap",
  });

  return res.data;
}
