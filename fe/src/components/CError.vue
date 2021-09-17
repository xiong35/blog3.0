<script lang="tsx">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "CError",
    setup(props) {
      return () => <div class="c-error">error</div>;
    },
  });
</script>

<style lang="scss">
  .c-error {
  }
</style>
