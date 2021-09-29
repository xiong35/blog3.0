<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import { RouterView } from "vue-router";
  import TheCursor from "./components/TheCursor.vue";
  import TheMask from "./components/TheMask.vue";
  import AdminLayout from "./layouts/Admin.vue";
  import CommonLayout from "./layouts/Common.vue";
  import NoneLayout from "./layouts/None.vue";

  import router from "./router";

  export default defineComponent({
    setup(props) {
      return () => (
        <>
          {router.currentRoute.value.meta.admin ? (
            <AdminLayout v-slots={{ default: () => <RouterView /> }} />
          ) : router.currentRoute.value.meta.none ? (
            <NoneLayout v-slots={{ default: () => <RouterView /> }} />
          ) : (
            <CommonLayout v-slots={{ default: () => <RouterView /> }} />
          )}

          <TheMask />
          <TheCursor />
        </>
      );
    },
  });
</script>

<style lang="scss"></style>
