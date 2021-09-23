<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import CBtn from "../components/CBtn.vue";
  import CMdEditor from "../components/CMdEditor.vue";

  export default defineComponent({
    name: "AdminCompose",
    setup(props) {
      const content = ref("");

      async function addPost() {
        console.log(content.value);
      }

      return () => (
        <div class="pa-compose">
          <div class="pa-compose_wrapper">
            <CMdEditor content={content} />
          </div>
          <CBtn onClick={addPost} content="上传" />
        </div>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .pa-compose {
    padding: 2rem;
    text-align: center;

    &_wrapper {
      background-color: $background-4;
      @media (min-width: 768.321px) {
        padding: 2rem;
      }
      box-shadow: #0000002b 3px 3px 9px;
      border-radius: 4px;
    }

    .v-md-editor {
      min-height: 70vh;
    }
  }
  .c-btn {
    margin: 2rem auto 1rem;
  }
</style>
