<script lang="tsx">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "CommonLayout",
    setup(props, { slots }) {
      return () => (
        <div class="l-com">
          <header class="l-com_header"></header>

          <main class="l-com_main">
            <aside class="l-com_main-l"></aside>

            <div class="l-com_main-m">{slots.default && slots.default()}</div>

            <aside class="l-com_main-r"></aside>
          </main>

          <footer class="l-com_footer"></footer>
        </div>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";
  $m: "com";

  .l-com {
    $header-h: 48px;
    background-color: $background;

    &_header {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      height: $header-h;
      border-bottom: 1px solid $foreground;
      background-color: pink;
    }

    &_main {
      padding-top: $header-h;
      height: 100vh;
      background-color: indianred;
      display: flex;

      &-l,
      &-r {
        flex: 0 0 200px;
        background-color: bisque;
        height: 400px;
      }
      &-m {
        flex: 1 1;
      }
    }

    &_footer {
      background-color: skyblue;
      height: 200px;
    }
  }
</style>
