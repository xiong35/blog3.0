<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import CPostList from "../components/CPostList.vue";

  export default defineComponent({
    name: "Posts",
    props: {
      fromDate: Number,
      toDate: Number,
      page: Number,
    },
    setup(props) {
      const { fromDate, toDate, page } = props;

      return () => (
        <div class="p-posts">
          <h2>Posts</h2>
          <CPostList fromDate={fromDate} toDate={toDate} page={page} />
        </div>
      );
    },
  });
</script>

<style lang="scss">
  .p-posts {
  }
</style>
