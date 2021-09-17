/** 对点赞数做格式化 */
export function likeFormat(count: number): string | number {
  if (count < 10000) {
    return count;
  } else {
    return (count / 10000).toPrecision(2) + "w";
  }
}
