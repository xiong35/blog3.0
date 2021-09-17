import { RouteLocationRaw } from "vue-router";

import { UserID } from "../models/user";
import router from "../router";

/** 在浏览器中打开一个新 tab 并跳转链接 */
export function openInNewTab(opts: RouteLocationRaw) {
  const url = router.resolve(opts);

  window.open(url.href, "_blank");
}
/**
 * 通过强制刷新, 解决 vue router 在路由发生跳转时
 * query 发生变化而 path 不变时不会更新界面的问题
 */
export function forcePushToUser(userID?: UserID) {
  router.push({ name: "user-detail", query: { id: userID } });
  // .then(() => router.go(0));
}
