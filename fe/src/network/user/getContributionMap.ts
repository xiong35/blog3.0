import axios from "axios";

import { GetDotRet } from "../../../shared/models/github";
import { request } from "../request";

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

export async function getContributionMap() {
  const res = await axios
    .post(
      "https://api.github.com/graphql",
      { query: GET_DOTS },
      {
        headers: {
          Authorization: "token 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",
        },
      }
    )
    .catch((e) => e);
  if (res && res.data && res.data.data) {
    console.log("# getContributionMap", res.data.data);
    return res.data.data as GetDotRet;
  } else {
    return null;
  }
}
