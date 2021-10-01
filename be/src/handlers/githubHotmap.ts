import axios from "axios";
import * as fs from "fs";
import { IMiddleware } from "koa-router";

import { GetDotRet } from "../../../fe/shared/models/github";
import { HttpRes } from "../models";

const key = fs.readFileSync("./local/key").toString();
console.log({ key });

export const githubHotmap: IMiddleware = async (ctx) => {
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

  const res = await axios
    .post(
      "https://api.github.com/graphql",
      { query: GET_DOTS },
      {
        headers: {
          Authorization: `token ${key}`,
        },
      }
    )
    .catch((e) => e);

  if (res && res.data && res.data.data) {
    ctx.body = {
      status: 200,
      msg: "ok",
      data: res.data.data,
    } as HttpRes;
  } else {
    ctx.body = {
      status: 200,
      msg: "ok",
      data: null,
    } as HttpRes;
  }
};
