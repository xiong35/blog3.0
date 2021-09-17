<script lang="tsx">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "AdminLayout",
    setup(props, { slots }) {
      return () => (
        <div class="l-admin">{slots.default && slots.default()}</div>
      );
    },
  });
</script>

<style lang="scss">
  .l-admin {
    width: 200px;
  }
</style>
