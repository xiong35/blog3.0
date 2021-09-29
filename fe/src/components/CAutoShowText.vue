<script lang="tsx">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "CAutoShowText",
    props: {
      msg: { type: String, required: true },
    },
    setup(props) {
      const { msg } = props;

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
        <div class="c-auto-show-text">
          <span class="c-auto-show-text_html" v-html={html.value}></span>
          <span class="c-auto-show-text_content">{content.value}</span>

          <span class="c-auto-show-text__">_</span>
        </div>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .c-auto-show-text {
    white-space: pre-line;
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
