<script lang="tsx">
  import { defineComponent, ref, toRef } from "vue";
  import { isHovering } from "../reactivity/theCursor";

  export default defineComponent({
    name: "CTag",
    props: {
      name: String,
      active: Boolean,
      onClick: {
        type: (Function as unknown) as () => (e: MouseEvent) => any,
        default: () => {},
      },
    },
    setup(props) {
      const { name, onClick } = props;
      const active = toRef(props, "active");
      return () => (
        <div
          class={`c-tag ${active.value ? "c-tag_active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onClick(e);
          }}
          onMouseleave={() => (isHovering.value = false)}
          onMouseenter={() => (isHovering.value = true)}
        >
          {name}
        </div>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .c-tag {
    display: inline-block;
    position: relative;

    font-size: 80%;
    padding: 0.08em 0.6em 0.1em;

    border-radius: 999px;
    border: 1px solid $secondary;
    color: $secondary;
    z-index: 0;
    overflow: hidden;

    &:hover {
      &::after {
        opacity: 0.15;
      }
    }

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      background-color: currentColor;
      opacity: 0;
      transition: opacity 0.2s;
      top: -1px;
      bottom: -1px;
      right: -1px;
      left: -1px;
    }

    &_active {
      color: $on-primary;
      background-color: $secondary;
    }
  }
</style>
