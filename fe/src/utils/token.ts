/* 操作 token 的函数 */

import { UserID } from "../models/user";
import { INIT_SELF, self } from "../reactivity/self";

const TOKEN_KEY = "__BBHUST__token";

export interface Token {
  value: string;
  expire: number;
  _id: UserID;
}

export function setToken(token: Token) {
  window.localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}

export function clearToken() {
  self.value = { ...INIT_SELF };
  window.localStorage.removeItem(TOKEN_KEY);
}

export function getToken(): Token | null {
  const tokenStr = window.localStorage.getItem(TOKEN_KEY);
  if (!tokenStr) return null;

  const token = JSON.parse(tokenStr) as Token;
  if (!token.value || !token.expire) return null;

  if (token.expire * 1000 < Date.now()) {
    clearToken();
    return null;
  }

  return token;
}
