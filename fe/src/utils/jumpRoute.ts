import { RouteLocationRaw } from "vue-router";

import { triggerMaskAnim } from "../reactivity/theMasks";
import router from "../router";

/** 在浏览器中打开一个新 tab 并跳转链接 */
export function openInNewTab(opts: RouteLocationRaw) {
  const url = router.resolve(opts);

  window.open(url.href, "_blank");
}

export function jumpTo(opts: RouteLocationRaw) {
  return function doJump(e: MouseEvent) {
    const close = triggerMaskAnim({ x: e.clientX, y: e.clientY });
    router.push(opts).then(close);
  };
}
