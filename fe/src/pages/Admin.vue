<script lang="tsx">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Admin",
    setup(props) {
      return () => <div class="p-admin">Admin</div>;
    },
  });
</script>

<style lang="scss">
  .p-admin {
  }
</style>
