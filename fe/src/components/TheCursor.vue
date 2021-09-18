<script lang="tsx">
  import { defineComponent, onMounted, ref } from "vue";
  import { traceCursor, isHovering } from "../reactivity/theCursor";

  export default defineComponent({
    name: "TheCursor",
    setup(props) {
      const position = traceCursor();

      return () => (
        <div
          class={`t-cursor ${isHovering.value ? "isHovering" : ""}`}
          style={{ top: position.y + 2 + "px", left: position.x + 2 + "px" }}
        ></div>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";
  $m: "cursor";

  .t-cursor {
    width: 100px;
    height: 100px;
    clip-path: polygon(0 0, 20px 20px, 7px 28px, 0 0);
    background-color: $background;
    position: fixed;
    transition: top 0.03s, left 0.03s, transform 0.3s;
    mix-blend-mode: difference;
    transform-origin: 0 0;

    &.isHovering {
      transform: rotateY(180deg);
    }
  }

  * {
    cursor: none;
  }
</style>
