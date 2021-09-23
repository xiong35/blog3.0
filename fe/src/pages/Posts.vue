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
          <h2>{kw.value}</h2>
          <CPostList fromDate={fromDate} toDate={toDate} kw={kw.value} />
        </div>
      );
    },
  });
</script>

<style lang="scss">
  .p-posts {
  }
</style>
