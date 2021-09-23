<script lang="tsx">
  import { defineComponent, ref, Ref, toRef } from "vue";

  import VueMarkdownEditor from "../utils/setupMdEditor";

  export default defineComponent({
    name: "CMdEditor",
    props: {
      readOnly: Boolean,
      content: { type: Object as () => Ref<string>, required: true },
    },
    setup(props) {
      let { content, readOnly } = props;

      return () => (
        <>
          {readOnly ? (
            <VueMarkdownEditor
              class="v-md-editor"
              mode={"preview"}
              v-model={content.value}
            ></VueMarkdownEditor>
          ) : (
            <VueMarkdownEditor
              class="v-md-editor"
              disabled-menus={[]}
              onUploadImage={console.log}
              v-model={(content as Ref).value}
              mode={"editable"}
              placeholder="创作文章..."
              left-toolbar="undo redo image"
              right-toolbar="preview fullscreen"
            ></VueMarkdownEditor>
          )}
        </>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .v-md-editor {
    * {
      background-color: $background-2;
      color: $foreground;
    }
    .v-md-textarea-editor textarea {
      color: $foreground;
    }
    td {
      background-color: transparent;
    }
    tr:nth-child(2n),
    th {
      background-color: $background;
    }

    [class^="v-md-prism"] {
      .token {
        background-color: transparent;
      }
    }
  }
</style>
