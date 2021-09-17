import { showToast } from "../reactivity/toast";

/** 复制一段文字到剪切板 */
export function copy(content: string) {
  let textArea = document.createElement("textarea");
  // textArea.style.visibility = "hidden";
  textArea.style.position = "fixed";
  textArea.style.width = "0";
  textArea.style.height = "0";
  textArea.value = content;
  document.body.appendChild(textArea);
  textArea.select();
  let err = false;
  try {
    document.execCommand("copy");
  } catch (e) {
    err = true;
  }
  document.body.removeChild(textArea);
  if (!err) {
    showToast("复制成功！");
  } else {
    showToast("浏览器不支持复制QwQ");
  }
}
