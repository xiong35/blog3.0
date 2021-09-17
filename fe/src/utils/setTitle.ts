import { TITLE_SUFFIX } from "../constants/title";

export function setTitle(title: string) {
  document.title = title + TITLE_SUFFIX;
}
