<script lang="tsx">
  import {
    computed,
    defineComponent,
    ref,
    toRef,
    watch,
    watchEffect,
  } from "vue";
  import { GetPostsReq } from "../../shared/http";
  import { PostBrief } from "../../shared/models/post";
  import { getAllPosts } from "../network/post/getAllPosts";
  import { PER_PAGE } from "../network/request";
  import router from "../router";
  import { scrollToTop } from "../utils/scrollTo";
  import CBtn from "./CBtn.vue";
  import CEmpty from "./CEmpty.vue";
  import CPostCard from "./CPostCard.vue";

  export default defineComponent({
    name: "CPostList",
    props: {
      fromDate: Number,
      toDate: Number,
      page: Number,
      kw: String,
    },
    setup(props) {
      const posts = ref<PostBrief[]>([]);

      const kw = toRef(props, "kw");
      watch(kw, () => {
        posts.value = [];
        currentPage.value = 0;
        maxPageNum.value = 9999;
        fromDate.value = 0;
        toDate.value = Date.now();
        getPosts(true, true);
      });

      const currentPage = ref(-9999);
      const maxPageNum = ref(9999);

      const fromDate = ref(props.fromDate || 0);
      const toDate = ref(props.toDate || Date.now());
      watchEffect(() => {
        history.pushState(
          {},
          "",
          window.location.href.split("?")[0] +
            `?fromDate=${fromDate.value}&toDate=${toDate.value}${
              kw.value ? "&kw=" + kw.value : ""
            }`
        );
      });

      async function getPosts(nextPage: boolean, init = false) {
        const query: GetPostsReq = {
          limit: PER_PAGE,
        };

        if (nextPage) {
          query.from = fromDate.value;
        } else {
          query.to = toDate.value;
        }
        if (init) {
          query.to = toDate.value;
          query.from = fromDate.value;
        }

        const newPosts = await getAllPosts({ ...query, kw: kw.value });

        if (newPosts && newPosts.length) {
          posts.value = newPosts;
          toDate.value = new Date(newPosts[0].updatedAt).getTime();
          fromDate.value = new Date(
            newPosts[newPosts.length - 1].updatedAt
          ).getTime();

          if (!init) {
            if (nextPage) currentPage.value++;
            else currentPage.value--;
          }

          if (newPosts.length !== PER_PAGE)
            maxPageNum.value = currentPage.value;
        } else {
          if (nextPage) maxPageNum.value = currentPage.value;
          else currentPage.value = 0;
        }
      }

      getPosts(true, true);

      return () => (
        <div class="c-post-list">
          <div class="c-post-list_posts">
            {posts.value.length ? (
              <>
                {posts.value.map((post) => (
                  <CPostCard
                    class="c-post-list_posts-postcard"
                    post={post}
                    key={post._id}
                  />
                ))}
              </>
            ) : (
              <CEmpty style={{ margin: "10vh auto" }} />
            )}
          </div>
          <div class="c-post-list_pager">
            <CBtn
              content="第 0 页"
              onClick={() => {
                fromDate.value = 0;
                toDate.value = Date.now();
                currentPage.value = 0;
                getPosts(true, true);
              }}
            />
            <div class="u-spacer"> </div>
            <CBtn
              content="上一页"
              disabled={currentPage.value === 0}
              onClick={() => {
                getPosts(false).then(() => scrollToTop());
              }}
            />
            <CBtn
              content="下一页"
              disabled={currentPage.value === maxPageNum.value}
              onClick={() => {
                getPosts(true).then(() => scrollToTop());
              }}
            />
          </div>
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

    &_pager {
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      margin: 0 -1rem;

      .c-btn {
        margin: 0 1rem;
      }
    }
  }
</style>
