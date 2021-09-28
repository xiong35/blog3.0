<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import GithubHotMap from "../components/GithubHotMap.vue";
  import imgAvatar from "../assets/img/avatar.png";
  import CBtn from "../components/CBtn.vue";
  import router from "../router";

  export default defineComponent({
    name: "About",
    setup(props) {
      return () => (
        <div class="p-about">
          <div class="p-about_avatar">
            <img class="p-about_avatar-img" src={imgAvatar} alt="头像" />
            <div class="p-about_avatar_decorate-wrap">
              <div class="p-about_avatar_decorate"></div>
            </div>
          </div>
          <nav class="p-about_navs">
            <CBtn
              onClick={() => router.push({ name: "posts" })}
              content={"文章"}
            />
            <CBtn
              onClick={() =>
                (window.location.href = "http://resume.xiong35.cn")
              }
              content={"简历"}
            />
          </nav>
          <GithubHotMap />
        </div>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .p-about {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5vh 0 5vh;

    &_avatar {
      display: flex;
      margin: auto;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 150px;
      position: relative;
      border-radius: 999px;
      font-size: 0.8rem;
      padding: 10px;

      &-img {
        width: calc(100% - 10px);
        height: calc(100% - 10px);
        border-radius: 999px;
        animation: clip-in 2s forwards;
        @keyframes clip-in {
          0% {
            clip-path: polygon(
              25% 25%,
              25% 25%,
              39.43% 50%,
              58.33% 25%,
              58.33% 25%,
              39.43% 50%,
              58.33% 75%,
              58.33% 75%,
              39.43% 50%,
              25% 75%,
              25% 75%,
              39.43% 50%
            );
          }
          40% {
            clip-path: polygon(
              25% 25%,
              41.7% 25%,
              50% 39.43%,
              58.33% 25%,
              75% 25%,
              60.56% 50%,
              75% 75%,
              58.33% 75%,
              50% 60.57%,
              41.7% 75%,
              25% 75%,
              39.43% 50%
            );
          }
          70% {
            clip-path: polygon(
              25% 25%,
              41.7% 25%,
              50% 39.43%,
              58.33% 25%,
              75% 25%,
              60.56% 50%,
              75% 75%,
              58.33% 75%,
              50% 60.57%,
              41.7% 75%,
              25% 75%,
              39.43% 50%
            );
          }
          100% {
            clip-path: polygon(
              (25% - 50%) * 10 + 50% (25%-50%) * 10+50%,
              (41.7% - 50%) * 10 + 50% (25%-50%) * 10+50%,
              (50% - 50%) * 10 + 50% (39.43%-50%) * 10+50%,
              (58.33% - 50%) * 10 + 50% (25%-50%) * 10+50%,
              (75% - 50%) * 10 + 50% (25%-50%) * 10+50%,
              (60.56% - 50%) * 10 + 50% (50%-50%) * 10+50%,
              (75% - 50%) * 10 + 50% (75%-50%) * 10+50%,
              (58.33% - 50%) * 10 + 50% (75%-50%) * 10+50%,
              (50% - 50%) * 10 + 50% (60.57%-50%) * 10+50%,
              (41.7% - 50%) * 10 + 50% (75%-50%) * 10+50%,
              (25% - 50%) * 10 + 50% (75%-50%) * 10+50%,
              (39.43% - 50%) * 10 + 50% (50%-50%) * 10+50%
            );
          }
        }
      }

      &_decorate {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        border: 1px solid transparent;
        border: {
          top: 1px solid $secondary;
          bottom: 1px solid $secondary;
        }
        animation: rotate infinite linear;
        animation-duration: 6s;
        animation-delay: -3s;
        border-radius: 999px;

        &-wrap {
          animation: scale-in 3s forwards;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          @keyframes scale-in {
            0% {
              transform: scale(50%);
              opacity: 0;
            }
            40% {
              transform: scale(70%);
              opacity: 1;
            }
            70% {
              transform: scale(70%);
            }
            70% {
              transform: scale(100%);
            }
          }
        }

        &::before,
        &::after {
          content: "";
          border: 1px solid transparent;
          border-radius: 999px;
          position: absolute;
          animation: rotate infinite linear;
        }
        &::before {
          border-top: 1px solid $primary;
          top: -10px;
          bottom: -10px;
          right: -10px;
          left: -10px;
          animation-duration: 10s;
          animation-delay: -2s;
        }
        &::after {
          border-top: 1px solid $primary-2;
          top: -20px;
          bottom: -20px;
          right: -20px;
          left: -20px;
          animation-duration: 7s;
          animation-delay: -5s;
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
    }

    &_navs {
      display: flex;
      margin: 3rem auto;
      max-width: 300px;
      justify-content: space-around;
      width: 90vw;
    }
  }
</style>
