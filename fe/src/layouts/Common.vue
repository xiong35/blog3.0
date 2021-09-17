<script lang="tsx">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "CommonLayout",
    setup(props, { slots }) {
      console.log("# Common", slots);
      return () => (
        <div class="l-common">{slots.default && slots.default()}</div>
      );
    },
  });
</script>

<style lang="scss">
  .l-common {
    width: 100px;
  }
</style>
