<script lang="tsx">
  import { defineComponent, ref, toRef } from "vue";
  import CPostList from "../components/CPostList.vue";

  export default defineComponent({
    name: "Posts",
    props: {
      fromDate: Number,
      toDate: Number,
      kw: String,
    },
    setup(props) {
      const { fromDate, toDate } = props;

      const kw = toRef(props, "kw");

      return () => (
        <div class="p-posts">
          <title class="p-posts_title">文章列表</title>
          <CPostList fromDate={fromDate} toDate={toDate} kw={kw.value} />
        </div>
      );
    },
  });
</script>

<style lang="scss">
  .p-posts {
    &_title {
      font-size: 1.8rem;
      font-weight: bold;
      margin: 1rem 0;
    }
  }
</style>
