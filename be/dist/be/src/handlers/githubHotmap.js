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
exports.githubHotmap = void 0;
const axios_1 = require("axios");
const fs = require("fs");
const key = fs.readFileSync("./local/key").toString();
console.log({ key });
const githubHotmap = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const HALF_YEAR_AGO = new Date();
    HALF_YEAR_AGO.setMonth(new Date().getMonth() - 6);
    const GET_DOTS = `
query {
  user(login: "xiong35") {
    contributionsCollection(from: "${HALF_YEAR_AGO.toISOString()}", to :"${new Date().toISOString()}") {
      contributionCalendar {
        weeks {
          contributionDays {
            date
            contributionCount
          }
        }
      }
    }
  }
}

`;
    const res = yield axios_1.default
        .post("https://api.github.com/graphql", { query: GET_DOTS }, {
        headers: {
            Authorization: `token ${key}`,
        },
    })
        .catch((e) => e);
    if (res && res.data && res.data.data) {
        ctx.body = {
            status: 200,
            msg: "ok",
            data: res.data.data,
        };
    }
    else {
        ctx.body = {
            status: 200,
            msg: "ok",
            data: null,
        };
    }
});
exports.githubHotmap = githubHotmap;
