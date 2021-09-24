/* 
deno run -A ./scripts/upload/index.ts
*/

import { FileIterator } from "./fileIter.ts";
import { sendRequest } from "./sendRequest.ts";

const fileIterator = new FileIterator("C:\\Users\\xiong35\\Desktop\\blogs");

const errors = [];

for await (const fileContent of fileIterator) {
  try {
    await sendRequest(fileContent, fileIterator.key);
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });
  } catch (err) {
    const hint = err + "\nat: \n" + fileContent.slice(0, 200);
    errors.push(hint);
    console.log(hint);
  }
}

if (errors.length > 0) {
  console.error("\n\n### the following are errors: ###");
  console.log(errors.join("\n"));
} else {
  console.log("\n\n### ALL DONE ###");
}
