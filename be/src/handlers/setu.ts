import { IMiddleware } from "koa-router";

const UA = require("ua-device");

export const setu: IMiddleware = async (ctx) => {
  const { host, "user-agent": userAgent } = ctx.request.header;
  console.log(host, userAgent);
  console.log(UA);
  const info = new UA(userAgent);

  const type2Name = {
    mobile: "手机",
    tablet: "平板",
    desktop: "电脑",
  };
  let rtString = `
想看色图??
我是正经人, 哪来的色图!
你是坏人.$.$.$
小本本记下来了: 
${info?.device?.type ? "用的是" + type2Name[info.device.type] + "是吧" : "<"}
${info?.os?.name ? "用的是 " + info.os.name + " 系统是吧" : "<"}
${info.browser.name ? "用的是 " + info.browser.name + " 浏览器是吧" : "<"}
ip 是 ${host} 是吧
这就去 gank 你!`;

  ctx.response.redirect("http://www.xiong35.cn/blog3.0/?m=" + rtString);
};
