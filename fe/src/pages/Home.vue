<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import CBtn from "../components/CBtn.vue";
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
            onMouseenter={() => (isHovering.value = true)}
            onMouseleave={() => (isHovering.value = false)}
            onClick={(e) => jumpTo(e, { name: "posts" })}
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
