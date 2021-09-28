<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import GithubHotMap from "../components/GithubHotMap.vue";

  export default defineComponent({
    name: "About",
    setup(props) {
      return () => (
        <div class="p-about">
          <GithubHotMap />
        </div>
      );
    },
  });
</script>

<style lang="scss">
  .p-about {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
