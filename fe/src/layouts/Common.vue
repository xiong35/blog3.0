<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import CBtn from "../components/CBtn.vue";
  import { isHovering } from "../reactivity/theCursor";
  import { jumpTo } from "../utils/jumpRoute";

  export default defineComponent({
    name: "CommonLayout",
    setup(props, { slots }) {
      return () => (
        <div class="l-com">
          <header class="l-com_header">
            <div class="l-com_header-logo u-only-big">
              Xiong<sup>35 </sup>'s Blog
            </div>
            <div class="u-spacer u-only-big"></div>

            <div class="l-com_header-searchbar">
              <input class="l-com_header-searchbar-input" />
              <img
                class="l-com_header-searchbar-icon"
                src="/src/assets/img/search.svg"
                onMouseleave={() => (isHovering.value = false)}
                onMouseenter={() => (isHovering.value = true)}
              />
            </div>

            <img
              class="l-com_header-menu u-only-small"
              src="/src/assets/img/menu.svg"
            />
          </header>

          <main class="l-com_main">
            <aside class="l-com_main-l"></aside>

            <div class="l-com_main-m">{slots.default && slots.default()}</div>

            <aside class="l-com_main-r">
              <CBtn
                content="首页"
                onClick={(e) => jumpTo(e, { name: "home" })}
              />
              <CBtn
                content="文章"
                onClick={(e) => jumpTo(e, { name: "posts" })}
              />
              <CBtn
                content="关于"
                onClick={(e) => jumpTo(e, { name: "about" })}
              />
            </aside>
          </main>

          <footer class="l-com_footer"></footer>
        </div>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";
  $m: "com";

  .l-com {
    $header-h: 48px;
    background-color: $background;

    &_header {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      height: $header-h;

      padding: 0 20px;
      display: flex;
      align-items: center;

      border-bottom: 1px solid $foreground;
      background-color: $background;

      z-index: 1;

      &-logo {
        font-weight: 100;
        font-size: 120%;
      }

      &-searchbar {
        border: 1px solid $foreground;
        border-radius: 0;

        display: flex;
        align-items: center;
        flex: 1 1 0;
        @media (min-width: 768.321px) {
          flex: 0 0 200px;
        }
        &-input {
          border: none;
          padding: 5px;
          background-color: transparent;
          flex: 1;
        }
        &-icon {
          width: 1.5em;
          padding: 0 0.5em;
        }
      }

      &-menu {
        width: 1.5em;
        margin-left: 20px;
      }
    }

    &_main {
      padding-top: $header-h;
      height: 100vh;
      display: flex;

      &-l,
      &-r {
        flex: 0 0 200px;
        height: 400px;
      }
      &-m {
        flex: 1 1;
      }

      &-r {
        display: flex;
        flex-direction: column;
        align-items: center;
        .c-btn {
          margin: 20px;
        }
      }
    }

    &_footer {
      height: 200px;
    }
  }
</style>
