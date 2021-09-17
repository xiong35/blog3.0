<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import { jumpTo } from "../utils/jumpRoute";

  export default defineComponent({
    name: "Posts",
    setup(props) {
      return () => (
        <div class="p-posts">
          <h2>Posts</h2>
          <button onClick={(e) => jumpTo({ name: "home" })(e)}>to home</button>
        </div>
      );
    },
  });
</script>

<style lang="scss">
  .p-posts {
  }
</style>
