<script lang="tsx">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "About",
    setup(props) {
      return () => <div class="p-about">About</div>;
    },
  });
</script>

<style lang="scss">
  .p-about {
  }
</style>
