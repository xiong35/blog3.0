<script lang="tsx">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "NotFound",
    setup(props) {
      return () => <div class="p-not-found">NotFound</div>;
    },
  });
</script>

<style lang="scss">
  .p-not-found {
  }
</style>
