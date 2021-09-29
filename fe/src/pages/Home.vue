<script lang="tsx">
  import { defineComponent, onMounted, ref } from "vue";
  import { homePageMsg } from "../constants/homePageMsg";

  export default defineComponent({
    name: "Home",
    props: {
      msg: String,
    },
    setup(props) {
      let msg: string = "";
      if (props.msg) msg = props.msg;
      else msg = homePageMsg;

      const html = ref("");
      const content = ref("");
      let i = 0;

      const timer = window.setInterval(addChar, 100);

      let preAddToContent = false;
      let addToContent = false;

      function addChar() {
        if (i === msg.length) {
          return clearInterval(timer);
        }

        const char = msg[i++];

        if (char === "$") return;
        if (char === "^") {
          html.value = html.value.slice(0, html.value.length - 1);
          return;
        }

        if (char !== "/" && preAddToContent) {
          content.value = "<";
          addToContent = true;
        }
        preAddToContent = char === "<";

        if (/<(\w+).*?>/.test(content.value)) {
          addToContent = false;
          preAddToContent = false;
          content.value = "";
        }

        html.value += char;
        if (addToContent) content.value += char;
      }

      return () => (
        <div class="p-home">
          <span class="p-home_html" v-html={html.value}></span>
          <span class="p-home_content">{content.value}</span>

          <span class="p-home__">_</span>
        </div>
      );
    },
  });
</script>

<style lang="scss">
  .p-home {
    padding: 1rem;
    font-size: 1.2rem;
    background-color: #000;
    color: #fff;
    min-height: 100vh;
    white-space: pre-line;
    a {
      color: #3e88ff;
    }

    &__ {
      animation: shine 1.3s infinite;
      @keyframes shine {
        0% {
          opacity: 0;
        }
        49% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
</style>
