<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import { RouterView } from "vue-router";
  import AdminLayout from "./layouts/Admin.vue";
  import CommonLayout from "./layouts/Common.vue";

  import router from "./router";

  export default defineComponent({
    setup(props) {
      return () => (
        <div class="main">
          {router.currentRoute.value.meta.admin ? (
            <AdminLayout v-slots={{ default: () => <RouterView /> }} />
          ) : (
            <CommonLayout v-slots={{ default: () => <RouterView /> }} />
          )}
        </div>
      );
    },
  });
</script>

<style lang="scss">
  .main {
  }
</style>
