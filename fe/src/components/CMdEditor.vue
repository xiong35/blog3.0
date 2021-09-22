<script lang="tsx">
  import { defineComponent, ref } from "vue";

  import VueMarkdownEditor from "../utils/setupMdEditor";

  export default defineComponent({
    name: "CMdEditor",
    setup(props) {
      const content = ref("");

      return () => (
        <VueMarkdownEditor
          class="v-md-editor"
          disabled-menus={[]}
          onUploadImage={console.log}
          v-model={content.value}
          mode="editable"
          // text={content.value}
          placeholder="创作文章..."
          left-toolbar="undo redo image"
          right-toolbar="preview toc fullscreen"
        ></VueMarkdownEditor>
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
    .v-md-textarea-editor.v-md-textarea-editor textarea {
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
