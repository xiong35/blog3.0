<script lang="tsx">
  import { defineComponent, onMounted, ref } from "vue";
  import { traceCursor, isHovering } from "../reactivity/theCursor";

  export default defineComponent({
    name: "TheCursor",
    setup(props) {
      const position = traceCursor();

      return () => (
        <div
          class={`u-only-big t-cursor ${isHovering.value ? "isHovering" : ""}`}
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
    clip-path: polygon(0 0, 21px 20px, 12.7px 21px, 7px 28px);
    background-color: $primary;

    position: fixed;
    transition: top 0.03s, left 0.03s, transform 0.3s, box-shadow 0.3s;
    mix-blend-mode: difference;
    transform-origin: 0 0;

    z-index: 90;

    &.isHovering {
      transform: rotateY(180deg);
    }
  }

  @media (min-width: 768.321px) {
    * {
      cursor: none;
    }
  }
</style>
