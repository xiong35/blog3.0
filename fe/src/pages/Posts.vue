<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import CPostList from "../components/CPostList.vue";

  export default defineComponent({
    name: "Posts",
    setup(props) {
      return () => (
        <div class="p-posts">
          <h2>Posts</h2>
          <CPostList />
        </div>
      );
    },
  });
</script>

<style lang="scss">
  .p-posts {
  }
</style>
