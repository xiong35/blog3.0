<script lang="tsx">
  import { computed, defineComponent, ref } from "vue";
  import { GetDotRet } from "../../shared/models/github";
  import { getContributionMap } from "../network/user/getContributionMap";

  export default defineComponent({
    name: "GithubHotMap",

    setup(props) {
      const map = ref<GetDotRet | null>({
        user: {
          contributionsCollection: {
            contributionCalendar: {
              weeks: [
                {
                  contributionDays: [
                    {
                      date: "2021-03-30",
                      contributionCount: 10,
                    },
                    {
                      date: "2021-03-31",
                      contributionCount: 5,
                    },
                    {
                      date: "2021-04-01",
                      contributionCount: 6,
                    },
                    {
                      date: "2021-04-02",
                      contributionCount: 5,
                    },
                    {
                      date: "2021-04-03",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-04-04",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-04-05",
                      contributionCount: 2,
                    },
                    {
                      date: "2021-04-06",
                      contributionCount: 6,
                    },
                    {
                      date: "2021-04-07",
                      contributionCount: 9,
                    },
                    {
                      date: "2021-04-08",
                      contributionCount: 1,
                    },
                    {
                      date: "2021-04-09",
                      contributionCount: 3,
                    },
                    {
                      date: "2021-04-10",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-04-11",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-04-12",
                      contributionCount: 1,
                    },
                    {
                      date: "2021-04-13",
                      contributionCount: 4,
                    },
                    {
                      date: "2021-04-14",
                      contributionCount: 6,
                    },
                    {
                      date: "2021-04-15",
                      contributionCount: 5,
                    },
                    {
                      date: "2021-04-16",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-04-17",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-04-18",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-04-19",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-04-20",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-04-21",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-04-22",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-04-23",
                      contributionCount: 2,
                    },
                    {
                      date: "2021-04-24",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-04-25",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-04-26",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-04-27",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-04-28",
                      contributionCount: 10,
                    },
                    {
                      date: "2021-04-29",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-04-30",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-01",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-05-02",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-03",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-04",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-05",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-06",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-07",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-08",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-05-09",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-10",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-11",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-12",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-13",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-14",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-15",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-05-16",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-17",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-18",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-19",
                      contributionCount: 6,
                    },
                    {
                      date: "2021-05-20",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-21",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-22",
                      contributionCount: 2,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-05-23",
                      contributionCount: 5,
                    },
                    {
                      date: "2021-05-24",
                      contributionCount: 1,
                    },
                    {
                      date: "2021-05-25",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-26",
                      contributionCount: 3,
                    },
                    {
                      date: "2021-05-27",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-28",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-29",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-05-30",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-05-31",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-01",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-02",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-03",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-04",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-05",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-06-06",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-07",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-08",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-09",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-10",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-11",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-12",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-06-13",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-14",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-15",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-16",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-17",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-18",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-19",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-06-20",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-21",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-22",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-23",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-24",
                      contributionCount: 9,
                    },
                    {
                      date: "2021-06-25",
                      contributionCount: 3,
                    },
                    {
                      date: "2021-06-26",
                      contributionCount: 9,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-06-27",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-28",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-29",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-06-30",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-07-01",
                      contributionCount: 4,
                    },
                    {
                      date: "2021-07-02",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-07-03",
                      contributionCount: 4,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-07-04",
                      contributionCount: 3,
                    },
                    {
                      date: "2021-07-05",
                      contributionCount: 6,
                    },
                    {
                      date: "2021-07-06",
                      contributionCount: 3,
                    },
                    {
                      date: "2021-07-07",
                      contributionCount: 7,
                    },
                    {
                      date: "2021-07-08",
                      contributionCount: 5,
                    },
                    {
                      date: "2021-07-09",
                      contributionCount: 7,
                    },
                    {
                      date: "2021-07-10",
                      contributionCount: 8,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-07-11",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-07-12",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-07-13",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-07-14",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-07-15",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-07-16",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-07-17",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-07-18",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-07-19",
                      contributionCount: 3,
                    },
                    {
                      date: "2021-07-20",
                      contributionCount: 8,
                    },
                    {
                      date: "2021-07-21",
                      contributionCount: 11,
                    },
                    {
                      date: "2021-07-22",
                      contributionCount: 9,
                    },
                    {
                      date: "2021-07-23",
                      contributionCount: 4,
                    },
                    {
                      date: "2021-07-24",
                      contributionCount: 4,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-07-25",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-07-26",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-07-27",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-07-28",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-07-29",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-07-30",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-07-31",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-08-01",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-08-02",
                      contributionCount: 2,
                    },
                    {
                      date: "2021-08-03",
                      contributionCount: 12,
                    },
                    {
                      date: "2021-08-04",
                      contributionCount: 19,
                    },
                    {
                      date: "2021-08-05",
                      contributionCount: 6,
                    },
                    {
                      date: "2021-08-06",
                      contributionCount: 1,
                    },
                    {
                      date: "2021-08-07",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-08-08",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-08-09",
                      contributionCount: 13,
                    },
                    {
                      date: "2021-08-10",
                      contributionCount: 14,
                    },
                    {
                      date: "2021-08-11",
                      contributionCount: 8,
                    },
                    {
                      date: "2021-08-12",
                      contributionCount: 2,
                    },
                    {
                      date: "2021-08-13",
                      contributionCount: 14,
                    },
                    {
                      date: "2021-08-14",
                      contributionCount: 6,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-08-15",
                      contributionCount: 2,
                    },
                    {
                      date: "2021-08-16",
                      contributionCount: 12,
                    },
                    {
                      date: "2021-08-17",
                      contributionCount: 4,
                    },
                    {
                      date: "2021-08-18",
                      contributionCount: 1,
                    },
                    {
                      date: "2021-08-19",
                      contributionCount: 3,
                    },
                    {
                      date: "2021-08-20",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-08-21",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-08-22",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-08-23",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-08-24",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-08-25",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-08-26",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-08-27",
                      contributionCount: 1,
                    },
                    {
                      date: "2021-08-28",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-08-29",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-08-30",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-08-31",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-09-01",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-09-02",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-09-03",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-09-04",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-09-05",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-09-06",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-09-07",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-09-08",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-09-09",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-09-10",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-09-11",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-09-12",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-09-13",
                      contributionCount: 7,
                    },
                    {
                      date: "2021-09-14",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-09-15",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-09-16",
                      contributionCount: 4,
                    },
                    {
                      date: "2021-09-17",
                      contributionCount: 9,
                    },
                    {
                      date: "2021-09-18",
                      contributionCount: 16,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-09-19",
                      contributionCount: 0,
                    },
                    {
                      date: "2021-09-20",
                      contributionCount: 3,
                    },
                    {
                      date: "2021-09-21",
                      contributionCount: 10,
                    },
                    {
                      date: "2021-09-22",
                      contributionCount: 47,
                    },
                    {
                      date: "2021-09-23",
                      contributionCount: 19,
                    },
                    {
                      date: "2021-09-24",
                      contributionCount: 25,
                    },
                    {
                      date: "2021-09-25",
                      contributionCount: 0,
                    },
                  ],
                },
                {
                  contributionDays: [
                    {
                      date: "2021-09-26",
                      contributionCount: 3,
                    },
                    {
                      date: "2021-09-27",
                      contributionCount: 3,
                    },
                    {
                      date: "2021-09-28",
                      contributionCount: 8,
                    },
                  ],
                },
              ],
            },
          },
        },
      });
      // getContributionMap().then((res) => (map.value = res));

      const weeks = computed(() =>
        map.value
          ? map.value.user.contributionsCollection.contributionCalendar.weeks
          : null
      );

      function getLv(count: number) {
        if (count === 0) return 0;
        if (count <= 7) return 1;
        if (count < 14) return 2;
        if (count < 21) return 3;
        return 4;
      }

      return () => (
        <>
          {weeks.value ? (
            <div class="c-gh-hotmap">
              <title class="c-gh-hotmap_title">近半年 GitHub 提交记录</title>
              {weeks.value.map((week, x) => (
                <div class="c-gh-col">
                  {week.contributionDays.map((day, y) => (
                    <div
                      class={`c-gh-item lv-${getLv(day.contributionCount)}`}
                      style={{ animationDelay: `${(x + y) / 15}s` }}
                      data-hint={`${
                        day.contributionCount ? day.contributionCount : "No"
                      } commits on\n${day.date}`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          ) : null}
        </>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .c-gh-hotmap {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding: 3em 3.3em 0;
    overflow: hidden;
    position: relative;

    &_title {
      position: absolute;
      top: 0.7em;
      left: 0;
      right: 0;
      font-size: 1.2em;
      font-weight: bold;
      text-align: center;
      color: $primary-2;
    }
  }
  .c-gh-col {
    margin: 0 0.15em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &:nth-child(2) {
      align-self: flex-end;
    }
    &:last-child {
      align-self: flex-start;
    }
  }
  .c-gh-item {
    width: 0.7em;
    height: 0.7em;
    margin: 0.15em 0;
    border-radius: 2px;
    background-color: $primary;
    position: relative;
    opacity: 0;
    top: 3px;
    left: 3px;
    animation: fade-in 0.3s forwards;
    @keyframes fade-in {
      0% {
        opacity: 0;
        top: 3px;
        left: 3px;
      }
      80% {
        top: -1px;
        left: -1px;
      }
      100% {
        opacity: 1;
        top: 0;
        left: 0;
      }
    }
    &.lv-0 {
      background-color: $background-2;
    }
    &.lv-1 {
      background-color: rgba($primary, 1 - 0.75);
    }
    &.lv-2 {
      background-color: rgba($primary, 1 - 0.5);
    }
    &.lv-3 {
      background-color: rgba($primary, 1 - 0.25);
    }
    &.lv-4 {
      background-color: rgba($primary, 1 - 0);
    }

    &:hover {
      &::after {
        content: attr(data-hint);
        position: absolute;
        top: -3.6em;
        right: -999px;
        left: -999px;
        margin: auto;
        padding: 0.25em 0.4em 0.2em;
        border-radius: 3px;
        background-color: $background-4;
        word-break: keep-all;
        white-space: pre;
        font-size: 0.9em;
        width: 7.5em;
        text-align: center;
      }
      &::before {
        content: "";
        position: absolute;
        top: -1.4em;
        right: -999px;
        left: -999px;
        margin: auto;
        background-color: $background-4;
        height: 1em;
        width: 1em;
        transform: rotate(45deg);
      }
    }
  }
</style>
