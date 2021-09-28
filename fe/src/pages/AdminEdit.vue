<script lang="tsx">
  import { defineComponent, onMounted, onUnmounted, reactive, ref } from "vue";
  import { Tag } from "../../shared/models/tag";
  import CBtn from "../components/CBtn.vue";
  import CMdEditor from "../components/CMdEditor.vue";
  import CTag from "../components/CTag.vue";
  import { getAllTags } from "../network/tag/getAllTags";
  import { updatePost as updatePostReq } from "../network/post/updatePost";
  import { generateDigest } from "../utils/generateDigest";
  import { getToken } from "../utils/token";
  import router from "../router";
  import { getPostDetail } from "../network/post/getPostDetail";

  export default defineComponent({
    name: "AdminEdit",
    props: { id: { type: String, required: true } },
    setup(props) {
      const content = ref("");
      const tags = ref<Tag[]>([]);
      getAllTags().then((ts) => (tags.value = ts));
      getPostDetail(props.id).then((post) => {
        content.value = post.content;
        post.tags.forEach((t) => activeTagNames.add(t.name));
      });

      onMounted(() => {
        if (!getToken())
          router.push({ name: "admin-login" }).then(() => alert("请先登录!"));
      });

      const activeTagNames = reactive(new Set<string>());

      async function updatePost() {
        const reg = /# (.*)\n([\s\S]*)/gm;
        const [_, title, main] = reg.exec(content.value) || [];
        if (!title) return alert("没有标题");
        if (!main) return alert("没有主要内容");

        const digest = generateDigest(main);

        const ok = await updatePostReq(
          {
            digest,
            title,
            content: content.value,
            tagNames: [...activeTagNames],
          },
          props.id
        );
        if (ok) {
          alert("修改成功!");
          router.go(-1);
        } else alert("出错了!");
      }

      return () => (
        <div class="pa-edit">
          <div class="pa-edit_wrapper">
            <CMdEditor content={content} />
            <div class="pa-edit_wrapper-tags">
              {tags.value.map((t) => (
                <CTag
                  class="pa-edit_wrapper-tags-tag"
                  name={t.name}
                  key={t._id}
                  active={activeTagNames.has(t.name)}
                  onClick={() =>
                    activeTagNames.has(t.name)
                      ? activeTagNames.delete(t.name)
                      : activeTagNames.add(t.name)
                  }
                />
              ))}
              <CTag
                class="pa-edit_wrapper-tags-tag"
                name="添加+"
                onClick={() => {
                  const name = prompt("输入新标签的名字：");
                  if (!name) return;
                  tags.value = [
                    ...tags.value,
                    { name, _id: "new" + tags.value.length, count: 0 },
                  ];
                  activeTagNames.add(name);
                }}
              />
            </div>
          </div>

          <CBtn
            class="pa-edit_upload"
            onClick={updatePost}
            content="确认修改"
          />
        </div>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .pa-edit {
    padding: 2rem;
    text-align: center;

    &_wrapper {
      @media (min-width: 768.321px) {
        background-color: $background-4;
        padding: 2rem;
        box-shadow: #0000002b 3px 3px 9px;
      }
      border-radius: 4px;

      &-tags {
        margin-top: 1rem;
        &-tag {
          margin: 0.2rem;
        }
      }
    }

    .v-md-editor {
      min-height: 70vh;
      text-align: initial;
    }
    &_upload {
      margin: 2rem auto 1rem;
    }
  }
</style>
