export type GetDotRet = {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        weeks: {
          contributionDays: {
            contributionCount: number;
            date: string;
          }[];
        }[];
      };
    };
  };
};
