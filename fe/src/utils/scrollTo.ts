/**
 * 平滑的, 兼容的返回顶部
 * @param count 最大调用次数(防止恶意行为和 bug)
 */
export const scrollToTop = (count: number = 42) => {
  if (count <= 0) return;
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (cb) {
      return setTimeout(cb, 17);
    };
  }

  const c =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 1) {
    window.requestAnimationFrame(() => scrollToTop(--count));
    window.scrollTo(0, Math.floor(c * 0.7));
  }
};
