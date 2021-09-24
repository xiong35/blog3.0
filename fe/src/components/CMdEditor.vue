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
      * {
        background-color: $background;
      }
    }

    h1,
    h2,
    h3 {
      position: relative;
      padding-left: 14px;
      border: none;
      &::before {
        position: absolute;
        content: "";
        top: 1px;
        bottom: 0;
        left: 0;
        border-radius: 999px;
        width: 3px;
      }
    }
    h1 {
      &::before {
        width: 4px;
        background-color: $primary;
      }
    }
    h2 {
      &::before {
        width: 2px;
        background-color: $secondary;
      }
    }
    h3 {
      &::before {
        width: 1px;
        background-color: $primary-2;
      }
    }

    strong {
      color: $md-strong;
    }
    code {
      color: $md-code;
      margin: 0.2rem;
      background-color: $background;
    }
    a {
      color: $md-a;
    }

    [class^="v-md-prism"] {
      .token {
        background-color: transparent;
      }
    }
  }
</style>
