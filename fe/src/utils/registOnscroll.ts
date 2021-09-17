import { onMounted, onUnmounted } from "@vue/runtime-core";

const THROTTLE = 100;

/**
 * 注册一个 window.onscroll 事件, 带节流
 * @param fn on scroll 事件
 * @param throttle 节流的时限(ms)
 * @param isMounted 当前函数调用时组件是否已挂载
 * @returns 取消事件的回调
 */
export function registerOnScroll(
  fn: (e: Event) => void,
  throttle?: number,
  isMounted: boolean = false
) {
  let timer: number | null;

  const throttled = (e: Event) => {
    if (timer) return;

    timer = window.setTimeout(() => {
      fn(e);
      timer = null;
    }, throttle || THROTTLE);
  };

  if (isMounted) {
    window.addEventListener("scroll", throttled);
  } else {
    onMounted(() => {
      window.addEventListener("scroll", throttled);
    });
  }
  onUnmounted(() => {
    window.removeEventListener("scroll", throttled);
  });

  return function unRegister() {
    window.removeEventListener("scroll", throttled);
  };
}

/**
 * 判断是否已经滚到底部
 * @returns 是否已经滚到底部
 */
export function hasScrolledToBottom(): boolean {
  const BOTTOM = 1500;

  //文档内容实际高度（包括超出视窗的溢出部分）
  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  //滚动条滚动距离
  const scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  //窗口可视范围高度
  const clientHeight =
    window.innerHeight ||
    Math.min(
      document.documentElement.clientHeight,
      document.body.clientHeight
    );

  return clientHeight + scrollTop >= scrollHeight - BOTTOM;
}
