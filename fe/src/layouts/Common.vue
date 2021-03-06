<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import { Tag } from "../../shared/models/tag";
  import CBtn from "../components/CBtn.vue";
  import CTag from "../components/CTag.vue";
  import TheFooter from "../components/TheFooter.vue";
  import { getAllTags } from "../network/tag/getAllTags";
  import { isHovering } from "../reactivity/theCursor";
  import router from "../router";
  import { jumpTo } from "../utils/jumpRoute";
  import imgSearch from "../assets/img/search.svg";
  import imgMenu from "../assets/img/menu.svg";

  // TODO limit max width
  export default defineComponent({
    name: "CommonLayout",
    setup(props, { slots }) {
      const kw = ref("");
      const tags = ref<Tag[]>([]);
      getAllTags().then((ts) => (tags.value = ts));

      const showMenu = ref(false);

      return () => (
        <div class="l-com">
          <header class="l-com_header">
            <div class="l-com_header-content">
              <div
                class="l-com_header-logo u-only-big"
                onClick={() => router.push({ name: "about" })}
                onMouseleave={() => (isHovering.value = false)}
                onMouseenter={() => (isHovering.value = true)}
              >
                Xiong<sup>35 </sup>'s Blog
              </div>
              <div class="u-spacer u-only-big"></div>

              <div class="l-com_header-searchbar">
                <input
                  v-model={kw.value}
                  class="l-com_header-searchbar-input"
                  onKeydown={(e) => {
                    if (e.key === "Enter")
                      router.push({ name: "posts", query: { kw: kw.value } });
                  }}
                  placeholder="搜索标题，摘要，Tag。支持正则"
                  maxlength={30}
                />
                <img
                  class="l-com_header-searchbar-icon"
                  src={imgSearch}
                  onMouseleave={() => (isHovering.value = false)}
                  onMouseenter={() => (isHovering.value = true)}
                  onClick={(e) =>
                    jumpTo(e, { name: "posts", query: { kw: kw.value } })
                  }
                />
              </div>

              <img
                class="l-com_header-menuBtn u-only-small"
                src={imgMenu}
                onClick={() => (showMenu.value = true)}
              />
              <div
                class={`l-com_header-menuBox ${showMenu.value ? "show" : ""}`}
                onClick={() => (showMenu.value = false)}
              >
                <h2 class="l-com_header-menuBox-title">站内导航</h2>
                <CBtn
                  content="关于我"
                  onClick={(e) => jumpTo(e, { name: "about" })}
                />
                <CBtn
                  content="文 章"
                  onClick={(e) => jumpTo(e, { name: "posts" })}
                />
                <CBtn
                  content="简 历"
                  onClick={(e) =>
                    (window.location.href = "http://resume.xiong35.cn")
                  }
                />
              </div>
            </div>
          </header>

          <main class="l-com_main">
            <aside class="l-com_main-l u-only-big">
              <CBtn
                content="关于我"
                onClick={(e) => jumpTo(e, { name: "about" })}
              />
              <CBtn
                content="文 章"
                onClick={(e) => jumpTo(e, { name: "posts" })}
              />
              <CBtn
                content="简 历"
                onClick={(e) =>
                  (window.location.href = "http://resume.xiong35.cn")
                }
              />
            </aside>

            <div class="l-com_main-m">{slots.default && slots.default()}</div>

            <aside class="l-com_main-r u-only-big">
              {tags.value.map((t) => (
                <CTag
                  class="pa-compose_wrapper-tags-tag"
                  name={`${t.name} ${t.count}`}
                  key={t._id}
                  onClick={(e) =>
                    jumpTo(e, { name: "posts", query: { kw: t.name } })
                  }
                />
              ))}
            </aside>
          </main>

          <footer class="l-com_footer">
            <TheFooter />
          </footer>
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
    $footer-h: 200px;
    $max-w: 1100px;
    background-color: $background;

    &_header {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      height: $header-h;

      border-bottom: 1px solid $foreground;
      background-color: $background;

      z-index: 10;

      &-content {
        max-width: $max-w;
        height: 100%;
        margin: auto;
        padding: 0 20px;
        display: flex;
        align-items: center;
      }

      &-logo {
        font-weight: 100;
        font-size: 1.3rem;
        @media (max-width: 768.321px) {
          font-size: 1.2rem;
          margin-right: 1rem;
          word-break: keep-all;
          white-space: pre;
        }
      }

      &-searchbar {
        border: 1px solid $foreground;
        border-radius: 0;

        display: flex;
        align-items: center;
        flex: 1 1 200px;

        @media (min-width: 768.321px) {
          flex: 0 0 300px;
        }
        &-input {
          border: none;
          padding: 5px;
          background-color: transparent;
          flex: 1 1 0;
          width: 0;
        }
        &-icon {
          width: 1.5em;
          padding: 0 0.5em;
        }
      }

      &-menu {
        &Btn {
          width: 1.5em;
          margin-left: 16px;
        }
        &Box {
          position: fixed;
          top: 0;
          height: 0;
          left: 0;
          right: 0;
          overflow: hidden;
          transition: height 0.3s;
          background-color: $background-0;
          display: flex;
          align-items: center;
          flex-direction: column;
          &-title {
            margin: 2rem;
            color: $secondary;
          }

          .c-btn {
            margin: 1rem;
          }
          &.show {
            height: 100vh;
          }
        }
      }
    }

    &_main {
      padding: 0 16px;
      padding-top: $header-h;
      min-height: calc(100vh - #{$header-h} - #{$footer-h});
      display: flex;
      max-width: $max-w;
      margin: auto;

      &-l,
      &-r {
        flex: 0 0;
        height: 400px;
      }
      &-m {
        flex: 1 1;
      }

      &-l {
        flex-basis: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4rem;
        .c-btn {
          margin: 1rem;
        }
      }
      &-r {
        padding: 4rem 0 0 1rem;
        flex-basis: 250px;
        .c-tag {
          margin: 0.15rem 0.25rem;
          font-size: 1em;
        }
      }
    }

    &_footer {
      min-height: 200px;
    }
  }
</style>
