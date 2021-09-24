import axiod from "https://deno.land/x/axiod/mod.ts";

import { processContent } from "./processContent.ts";

const url = "http://api.xiong35.cn/blog3.0/post";

export async function sendRequest(content: string, auth: string) {
  const data = processContent(content);

  // return console.log(data);

  await axiod
    .post(url, data, { headers: { Authorization: auth } })
    .then((response) => {
      console.log(data.title, response.data);
    });
}
