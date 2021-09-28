<script lang="tsx">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "CEmpty",
    setup(props) {
      return () => (
        <div class="c-empty">
          <span class="c-empty_hint">什么都没有，该有什么呢</span>
          <div class="c-empty_decorate"></div>
        </div>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .c-empty {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    position: relative;
    border-radius: 999px;
    font-size: 0.8rem;

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
        top: 10px;
        bottom: 10px;
        right: 10px;
        left: 10px;
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
</style>
