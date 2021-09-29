"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setu = void 0;
const UA = require("ua-device");
const setu = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { "user-agent": userAgent } = ctx.request.header;
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
${((_a = info === null || info === void 0 ? void 0 : info.device) === null || _a === void 0 ? void 0 : _a.type) ? "用的是" + type2Name[info.device.type] + "是吧" : "<"}
${((_b = info === null || info === void 0 ? void 0 : info.os) === null || _b === void 0 ? void 0 : _b.name) ? "用的是 " + info.os.name + " 系统是吧" : "<"}
${info.browser.name ? "用的是 " + info.browser.name + " 浏览器是吧" : "<"}
ip 是 ${ctx.request.ip} 是吧
这就去 gank 你!`;
    ctx.response.redirect("http://www.xiong35.cn/blog3.0/?m=" + rtString);
});
exports.setu = setu;
