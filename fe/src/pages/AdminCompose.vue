<script lang="tsx">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "AdminCompose",
    setup(props) {
      return () => <div class="pa-compose">AdminCompose</div>;
    },
  });
</script>

<style lang="scss">
  .pa-compose {
  }
</style>
