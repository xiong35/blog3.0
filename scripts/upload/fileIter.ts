export class FileIterator implements AsyncIterator<string> {
  fileNames: string[];
  dirPath: string;
  curIndex = 0;
  key: string;

  constructor(dirPath: string) {
    const last = dirPath[dirPath.length - 1];
    if (last === "/" || last === "\\")
      throw new Error("dirPath mast not end with / or \\");

    this.fileNames = [...Deno.readDirSync(dirPath)]
      .map((f) => f.name)
      .filter((name) => name !== "key");
    this.dirPath = dirPath;

    this.key = Deno.readTextFileSync(`${this.dirPath}/key`);
  }

  async next() {
    if (this.curIndex === this.fileNames.length - 1) {
      return {
        done: true,
        value: "DONE",
      };
    }
    const fileContent = await Deno.readTextFile(
      `${this.dirPath}/${this.fileNames[this.curIndex++]}`
    );

    return {
      done: false,
      value: fileContent,
    };
  }

  [Symbol.asyncIterator]() {
    return this;
  }
}
