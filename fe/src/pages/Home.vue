<script lang="tsx">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Home",
    setup(props) {
      return () => <div class="p-home">Home</div>;
    },
  });
</script>

<style lang="scss">
  .p-home {
  }
</style>
