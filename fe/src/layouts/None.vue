<script lang="tsx">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "NoneLayout",
    setup(props, { slots }) {
      return () => <div class="l-none">{slots.default && slots.default()}</div>;
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .l-none {
    background-color: $background;
    min-height: 100vh;
  }
</style>
