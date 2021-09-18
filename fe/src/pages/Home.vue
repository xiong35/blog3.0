<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import { isHovering } from "../reactivity/theCursor";
  import router from "../router";
  import { jumpTo } from "../utils/jumpRoute";

  export default defineComponent({
    name: "Home",
    setup(props) {
      return () => (
        <div class="p-home">
          <h2>Home</h2>
          <button
            onMouseenter={() => (
              console.log("enter"), (isHovering.value = true)
            )}
            onMouseleave={() => (
              console.log("leave"), (isHovering.value = false)
            )}
            onClick={(e) => jumpTo({ name: "posts" })(e)}
          >
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
