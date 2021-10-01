<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import CPlaceholder from "./CPlaceholder.vue";

  export default defineComponent({
    name: "CError",
    setup(props) {
      return () => (
        <div class="c-error">
          <CPlaceholder msg="出错了呢..." />
        </div>
      );
    },
  });
</script>

<style lang="scss">
  .c-error {
    padding: 20vh 0 0;
  }
</style>
