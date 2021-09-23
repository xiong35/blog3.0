import * as sha256 from "sha256";

import { clearToken, setToken } from "../../utils/token";
import { request } from "../request";

export async function login(pw?: string) {
  if (pw) setToken({ value: sha256(pw) });

  const res = await request<{}>({
    url: "/login",
    method: "GET",
  });

  console.log("# login", { res });

  const { msg } = res;

  if (msg === "ok") return true;

  clearToken();
  return false;
}
