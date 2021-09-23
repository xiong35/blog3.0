<script lang="tsx">
  import { defineComponent, ref, toRef } from "vue";

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
          onClick={onClick}
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
    padding: 0.08em 0.6em 0.2em;

    border-radius: 999px;
    border: 1px solid $secondary;
    color: $secondary;
    cursor: pointer;
    z-index: 0;

    &:hover {
      &::after {
        opacity: 0.1;
      }
    }

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      background-color: currentColor;
      opacity: 0;
      transition: opacity 0.2s;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }

    &_active {
      color: $on-primary;
      background-color: $secondary;
    }
  }
</style>
