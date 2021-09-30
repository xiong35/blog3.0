<script lang="tsx">
  import { computed, defineComponent, ref } from "vue";
  import { GetDotRet } from "../../shared/models/github";
  import { getContributionMap } from "../network/user/getContributionMap";

  export default defineComponent({
    name: "GithubHotMap",

    setup(props) {
      const map = ref<GetDotRet | null>();
      getContributionMap().then((res) => (map.value = res));

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
                      style={{ animationDelay: `${(x + y) / 15 + 1.5}s` }}
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
    padding: 3em 3em 0;
    overflow: hidden;
    position: relative;

    @media (max-width: 768.321px) {
      font-size: 10px;
    }

    &_title {
      position: absolute;
      top: 0.7em;
      left: 0;
      right: 0;
      opacity: 0;
      font-size: 1.2em;
      font-weight: bold;
      text-align: center;
      color: $foreground;
      animation: titlefloat-in 1s forwards 2s;
      @keyframes titlefloat-in {
        from {
          top: 1.7em;
          opacity: 0;
        }
        to {
          top: 0.7em;
          opacity: 1;
        }
      }
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
    z-index: 0;
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
      z-index: 1;
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
