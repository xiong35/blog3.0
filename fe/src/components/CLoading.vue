<script lang="tsx">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "CLoading",
    setup(props) {
      return () => <div class="c-loading">CLoading</div>;
    },
  });
</script>

<style lang="scss">
  .c-loading {
  }
</style>
