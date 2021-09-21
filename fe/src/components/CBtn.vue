<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import { isHovering } from "../reactivity/theCursor";

  export default defineComponent({
    name: "CBtn",
    props: {
      content: {
        type: String,
      },
      onClick: {
        type: Object as () => (e: MouseEvent) => void,
        required: true,
      },
    },
    setup({ content, onClick }) {
      return () => (
        <div
          onMouseenter={() => (isHovering.value = true)}
          onMouseleave={() => (isHovering.value = false)}
          onClick={onClick}
          class="c-btn"
        >
          <div class="c-btn_content">{content}</div>
          <div class="c-btn_decorate c-btn_decorate-a"></div>
          <div class="c-btn_decorate c-btn_decorate-b"></div>
          <div class="c-btn_decorate c-btn_decorate-c"></div>
        </div>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .c-btn {
    font-size: 1rem;
    height: 2.4em;
    display: inline;
    position: relative;

    &::before,
    &::after {
      position: absolute;
      z-index: -2;
      content: "";
      border: 1px solid $primary;
      width: 2em;
      height: 1em;
      background-color: transparent;
    }

    &::before {
      border: {
        top: none;
        left: none;
      }
      bottom: 0px;
      right: -2px;
    }

    &::after {
      border: {
        bottom: none;
        right: none;
      }
      top: 2px;
      left: -2px;
    }

    z-index: 0;

    &:hover {
      background-color: #000;
      .c-btn_content {
        mix-blend-mode: difference;
        background-color: $primary;
        color: $on-primary;
      }

      .c-btn_decorate {
        clip-path: polygon(0 0, 99px 0, 99px 99px, 0 99px);
        transition: all 0.3s;
        animation: 10s infinite 0.3s ease-out;
        mix-blend-mode: difference;

        &-a {
          top: -0.4em;
          left: -0.4em;
          width: 1.2em;
          height: 1.2em;
          animation-name: a-swing;

          @keyframes a-swing {
            0% {
              top: -0.4em;
              left: -0.4em;
              width: 1.2em;
              height: 1.2em;
            }
            25% {
              top: -0.5em;
              left: -0.4em;
              width: 1.1em;
              height: 1.3em;
            }
            50% {
              top: -0.3em;
              left: -0.3em;
              width: 1.2em;
              height: 1.2em;
            }
            75% {
              top: -0.4em;
              left: -0.6em;
              width: 1.2em;
              height: 1.3em;
            }
            100% {
              top: -0.4em;
              left: -0.4em;
              width: 1.2em;
              height: 1.2em;
            }
          }
        }
        &-b {
          bottom: -0.2em;
          right: 1.2em;
          width: 1.4em;
          height: 0.3em;
          animation-name: b-swing;
          background-color: $primary;

          @keyframes b-swing {
            0% {
              bottom: -0.2em;
              right: 1.2em;
              width: 1.4em;
              height: 0.3em;
            }
            25% {
              bottom: -0.3em;
              right: 1.2em;
              width: 1.3em;
              height: 0.3em;
            }
            50% {
              bottom: -0.4em;
              right: 1.1em;
              width: 1.5em;
              height: 0.3em;
            }
            75% {
              bottom: -0.4em;
              right: 1.3em;
              width: 1.5em;
              height: 0.4em;
            }
            100% {
              bottom: -0.2em;
              right: 1.2em;
              width: 1.4em;
              height: 0.3em;
            }
          }
        }
        &-c {
          top: 40%;
          right: -0.3em;
          width: 0.4em;
          height: 0.5em;
          animation-name: c-swing;

          @keyframes c-swing {
            0% {
              top: 40%;
              right: -0.3em;
              width: 0.4em;
              height: 0.5em;
            }
            25% {
              top: 35%;
              right: -0.4em;
              width: 0.5em;
              height: 0.6em;
            }
            50% {
              top: 40%;
              right: -0.4em;
              width: 0.4em;
              height: 0.5em;
            }
            75% {
              top: 35%;
              right: -0.3em;
              width: 0.3em;
              height: 0.5em;
            }
            100% {
              top: 40%;
              right: -0.3em;
              width: 0.4em;
              height: 0.5em;
            }
          }
        }
      }
    }

    &_content {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0 1.2em;
      z-index: 1;
      border: 1px solid $primary;
      color: $primary;
    }

    &_decorate {
      position: absolute;
      background-color: transparent;
      border: 1px solid $primary;
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);

      z-index: -1;

      &-a {
        top: 0;
        left: 0;
        width: 0;
        height: 0;
      }
      &-b {
        bottom: 0;
        right: 1.2em;
        width: 1.4em;
        height: 0;
      }
      &-c {
        top: 40%;
        right: 0;
        width: 0;
        height: 0.5em;
      }
    }
  }
</style>
