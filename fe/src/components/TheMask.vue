<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import { curMaskState, masks } from "../reactivity/theMasks";

  export default defineComponent({
    name: "CMask",
    setup(props) {
      return () => (
        <div
          class={`t-mask ${curMaskState.value === "none" ? "" : "displayed"}`}
        >
          {masks.map((m) => (
            <div
              class="t-mask_block"
              style={{
                top: m.y + "px",
                left: m.x + "px",
                transform: `translate(-50%, -50%) rotate(${m.angle}deg) scale(${
                  curMaskState.value === "together" ? 0.05 : 1
                })`,
              }}
            ></div>
          ))}
        </div>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .t-mask {
    display: none;
    &_block {
      position: fixed;
      width: 19vmin;
      height: 19vmin;
      background-color: $foreground;
    }

    &.displayed {
      display: block;
      .#{$m}_block {
        transition: all 0.8s ease;
      }
    }
  }
</style>
