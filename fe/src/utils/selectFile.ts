/**
 * 选择文件
 * @param accept a comma-separated list of content types.
 * @returns Promise of File or null(如果取消了选择)
 */
export default function selectFile(
  accept: string
): Promise<File | null> {
  return new Promise((res, rej) => {
    const el = document.createElement("input");
    el.type = "file";
    if (accept) el.accept = accept;
    el.multiple = false;
    const onChange = () => {
      res(el.files && el.files[0]);
      el.removeEventListener("change", onChange);
    };
    el.addEventListener("change", onChange);

    el.click();
  });
}
