/* 和搜索历史有关的函数 */

const SearchHistoryToken = "__BBHUST__history";

/**
 * 获取存在 storage 中的历史记录
 * @param limit 要展示的历史记录条数
 * @returns
 */
export function getSearchHistories(limit: number = 7) {
  const historyStr = localStorage.getItem(SearchHistoryToken);
  if (!historyStr) return [];

  let history: string[] = [];
  try {
    history = JSON.parse(historyStr);
    if (!(history instanceof Array)) throw new Error("not an array");
  } catch {
    localStorage.removeItem(SearchHistoryToken);
    return [];
  }

  return history.slice(0, limit);
}

/** 向 localStorage 中插入一条搜索历史 */
export function addHistory(kw: string) {
  if (!kw) return;

  const oldHistories = getSearchHistories(99);

  oldHistories.unshift(kw);

  localStorage.setItem(SearchHistoryToken, JSON.stringify(oldHistories));
}

export function clearHistory() {
  localStorage.removeItem(SearchHistoryToken);
}
