<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import { DEFAULT_POST, Post } from "../../shared/models/post";
  import CMdEditor from "../components/CMdEditor.vue";
  import CTag from "../components/CTag.vue";
  import { getPostDetail } from "../network/post/getPostDetail";
  import { dateFormat } from "../utils/dateFormat";
  import imgHot from "../assets/img/hot.svg";
  import CBtn from "../components/CBtn.vue";
  import router from "../router";
  import { delPost } from "../network/post/delPost";

  export default defineComponent({
    name: "PostDetail",
    props: {
      id: { type: String, required: true },
    },
    setup(props) {
      const post = ref<Post>({
        ...DEFAULT_POST,
      });
      const content = ref("");

      getPostDetail(props.id).then((p) => {
        post.value = p;
        content.value = p.content;
      });
      async function handleDel() {
        if (confirm("确认删除文章吗?")) {
          const ok = await delPost(props.id);
          if (ok) {
            alert("删除成功!");
            router.go(-1);
          }
        }
      }

      return () => (
        <div class="p-post-detail">
          <header class="p-post-detail_header">
            <title class="p-post-detail_title" data-text={post.value.title}>
              {post.value.title}
            </title>
            <div class="p-post-detail_hot">
              <img src={imgHot} alt="hot" class="p-post-detail_hot-icon" />
              <span class="p-post-detail_hot-count">{post.value.visited}</span>
            </div>
            <div class="p-post-detail_tags">
              {post.value.tags.map((t) => (
                <CTag
                  class="p-post-detail_tags-tag"
                  name={t.name}
                  key={t._id}
                />
              ))}
            </div>
            <div class="p-post-detail_time u-only-big">
              {dateFormat(new Date(post.value.updatedAt))}
            </div>
          </header>
          <main class="p-post-detail_main">
            <CMdEditor readOnly content={content} />
          </main>
          {true ? (
            <div class="p-post-detail_actions">
              <CBtn
                content={"编辑"}
                onClick={() =>
                  router.push({
                    name: "admin-edit",
                    params: { id: post.value._id },
                  })
                }
              />
              <CBtn content={"删除"} onClick={handleDel} />
            </div>
          ) : null}
        </div>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .p-post-detail {
    &_header {
      padding-top: 1rem;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 4rem 4rem;
    }
    &_title {
      grid-column: 1/3;
      grid-row: 1/2;
      font-weight: bold;
      font-size: 1.5rem;
    }
    &_hot {
      grid-column: 3/4;
      grid-row: 1/2;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &-icon {
        height: 1.2em;
        width: 1.2em;
        margin-right: 0.2rem;
      }
      &-count {
        color: $primary;
      }
    }
    &_tags {
      padding-top: 0.5rem;
      grid-column: 1/2;
      grid-row: 2/3;
      &-tag {
        margin-right: 0.2rem;
      }
    }
    &_time {
      padding-top: 0.5rem;
      grid-column: 2/4;
      grid-row: 2/3;
      text-align: right;
      color: $foreground-4;
    }

    &_main {
      padding-top: 1rem;
    }

    &_actions {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
</style>
