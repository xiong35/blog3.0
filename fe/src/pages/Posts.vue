<script lang="tsx">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Posts",
    setup(props) {
      return () => <div class="p-posts">Posts</div>;
    },
  });
</script>

<style lang="scss">
  .p-posts {
  }
</style>
