<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import CMdEditor from "../components/CMdEditor.vue";

  export default defineComponent({
    name: "AdminCompose",
    setup(props) {
      return () => (
        <div class="pa-compose">
          <CMdEditor />
        </div>
      );
    },
  });
</script>

<style lang="scss">
  .pa-compose {
  }
</style>
