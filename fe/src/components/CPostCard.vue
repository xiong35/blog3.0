<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import { PostBrief } from "../../shared/models/post";
  import { isHovering } from "../reactivity/theCursor";
  import { dateFormat } from "../utils/dateFormat";
  import { jumpTo } from "../utils/jumpRoute";
  import CTag from "./CTag.vue";
  import hotImg from "../assets/img/hot.svg";

  export default defineComponent({
    name: "CPostCard",
    props: {
      post: { type: Object as () => PostBrief, required: true },
    },
    setup(props) {
      const { post } = props;
      return () => (
        <article
          class="c-postcard"
          onMouseenter={() => (isHovering.value = true)}
          onMouseleave={() => (isHovering.value = false)}
          onClick={(e) =>
            jumpTo(e, { name: "post-detail", params: { id: post._id } })
          }
        >
          <div class="c-postcard_content">
            <title class="c-postcard_title" data-text={post.title}>
              {post.title}
            </title>
            <div class="c-postcard_hot">
              <img src={hotImg} alt="hot" class="c-postcard_hot-icon" />
              <span class="c-postcard_hot-count">{post.visited}</span>
            </div>
            <div class="c-postcard_digest">{post.digest}</div>
            <div class="c-postcard_tags">
              {post.tags.map((t) => (
                <CTag
                  class="c-postcard_tags-tag"
                  name={t.name}
                  key={t._id}
                  onClick={(e) => {
                    jumpTo(e, { name: "posts", query: { kw: t.name } });
                  }}
                />
              ))}
            </div>
            <div class="c-postcard_time u-only-big">
              {dateFormat(new Date(post.updatedAt))}
            </div>
          </div>

          <div class="c-postcard_decorate">
            <div class="c-postcard_decorate-item c-postcard_decorate-Alice"></div>
            <div class="c-postcard_decorate-item c-postcard_decorate-Bob"></div>
            <div class="c-postcard_decorate-item c-postcard_decorate-Candy"></div>
          </div>
        </article>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .c-postcard {
    transition: filter 0.3s;
    position: relative;
    z-index: 0;

    &:hover {
      filter: grayscale(0.7) contrast(1.3);
      .c-postcard_decorate-item {
        display: block;
        animation-play-state: running;
      }
      .c-postcard_decorate {
        top: -1px;
        bottom: -1px;
        right: -1px;
        left: -1px;
      }
      .c-postcard_title {
        @mixin glitchCopy {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        position: relative;

        &::before {
          @include glitchCopy;
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }

        &::after {
          @include glitchCopy;
          left: -2px;
          text-shadow: -2px 0 $primary, 2px 2px #ff00c1;
          animation: glitch-anim2 1s infinite linear alternate-reverse;
        }
      }
    }
    &_content {
      padding: 0.8rem;
      background-color: $background-2;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 4rem 4rem;
    }

    &_title {
      grid-column: 1/3;
      grid-row: 1/2;
      font-weight: bold;
      font-size: 1.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: keep-all;
      white-space: nowrap;
    }
    &_hot {
      grid-column: 3/4;
      grid-row: 1/2;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &-icon {
        height: 1.2em;
        width: 1.2em;
        margin-right: 0.2rem;
      }
      &-count {
        color: $primary;
      }
    }
    &_digest {
      grid-column: 1/4;
      grid-row: 2/3;
      color: $foreground-2;

      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      line-height: 1.4em;
      max-height: 2.8em;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    &_tags {
      padding-top: 0.5rem;
      grid-column: 1/2;
      grid-row: 3/4;
      &-tag {
        margin-right: 0.2rem;
      }
    }
    &_time {
      padding-top: 0.5rem;
      grid-column: 2/4;
      grid-row: 3/4;
      text-align: right;
      color: $foreground-4;
    }

    &_decorate {
      position: absolute;
      top: 1px;
      bottom: 1px;
      right: 1px;
      left: 1px;
      background-color: transparent;
      overflow: hidden;
      z-index: -1;
      transition: all 0.3s;
      &-item {
        background-color: $primary;
        position: absolute;
        width: 120%;
        padding-bottom: 120%;
        height: 0;
        top: -999px;
        bottom: -999px;
        right: -999px;
        left: -999px;
        margin: auto;
        animation: rotate linear infinite forwards;
        animation-play-state: paused;
        mix-blend-mode: difference;
      }
      &-Alice {
        clip-path: polygon(97% 32%, 42% 72%, 0% 29%, 26% 72%);
        animation-duration: 7s;
      }
      &-Bob {
        clip-path: polygon(55% 5%, 45% 51%, 100% 60%, 24% 61%);
        animation-duration: 11s;
      }
      &-Candy {
        clip-path: polygon(83% 19%, 62% 85%, 8% 26%, 49% 79%);
        animation-duration: 9s;
        animation-name: rotate-back;
        @keyframes rotate-back {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      }
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }

    @keyframes glitch-anim {
      $steps: 20;
      @for $i from 0 through $steps {
        #{percentage($i*(1/$steps))} {
          clip: rect(random(100) + px, 9999px, random(100) + px, 0);
          transform: skew((random(100) / 100) + deg);
        }
      }
    }

    @keyframes glitch-anim2 {
      $steps: 20;
      @for $i from 0 through $steps {
        #{percentage($i*(1/$steps))} {
          clip: rect(random(100) + px, 9999px, random(100) + px, 0);
          transform: skew((random(100) / 100) + deg);
        }
      }
    }
  }
</style>
