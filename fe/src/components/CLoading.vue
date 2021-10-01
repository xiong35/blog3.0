<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import CPlaceholder from "./CPlaceholder.vue";
  CPlaceholder;

  export default defineComponent({
    name: "CLoading",
    setup(props) {
      return () => (
        <div class="c-loading">
          <CPlaceholder msg="加载中..." />
        </div>
      );
    },
  });
</script>

<style lang="scss">
  .c-loading {
    padding: 20vh 0 0;
  }
</style>
