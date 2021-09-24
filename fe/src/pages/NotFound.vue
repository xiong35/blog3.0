<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import CEmpty from "../components/CEmpty.vue";

  export default defineComponent({
    name: "NotFound",
    setup(props) {
      return () => (
        <div class="p-not-found">
          <CEmpty style="margin: 20vh auto;" />
        </div>
      );
    },
  });
</script>

<style lang="scss">
  .p-not-found {
  }
</style>
