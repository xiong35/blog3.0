<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import router from "../router";
  import { jumpTo } from "../utils/jumpRoute";

  export default defineComponent({
    name: "Home",
    setup(props) {
      return () => (
        <div class="p-home">
          <h2>Home</h2>
          <button onClick={(e) => jumpTo({ name: "posts" })(e)}>
            to posts
          </button>
        </div>
      );
    },
  });
</script>

<style lang="scss">
  .p-home {
  }
</style>
