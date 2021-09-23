<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import { PostBrief } from "../../shared/models/post";
  import { getAllPosts } from "../network/post/getAllPosts";
  import CPostCard from "./CPostCard.vue";
  CPostCard;

  export default defineComponent({
    name: "CPostList",
    setup(props) {
      const posts = ref<PostBrief[]>([]);
      getAllPosts({ skip: 0, limit: 999 }).then((ps) => (posts.value = ps));

      return () => (
        <div class="c-post-list">
          <div class="c-post-list_posts">
            {posts.value.map((post) => (
              <CPostCard
                class="c-post-list_posts-postcard"
                post={post}
                key={post._id}
              />
            ))}
          </div>
          <div class="c-post-list_pager"></div>
        </div>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .c-post-list {
    &_posts {
      &-postcard {
        margin: 0.5rem 0;
      }
    }
  }
</style>
