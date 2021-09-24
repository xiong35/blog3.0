<script lang="tsx">
  import { defineComponent, ref } from "vue";

  import imgGithub from "../assets/img/github.svg";
  import img公安 from "../assets/img/公安.png";

  export default defineComponent({
    name: "TheFooter",
    setup(props) {
      return () => (
        <div class="t-footer">
          <div class="t-footer_repo">
            <img src={imgGithub} alt="github" />
            <a href="https://github.com/xiong35/blog3.0">本博客 GitHub 地址</a>
          </div>

          <a href="http://www.beian.miit.gov.cn/" class="t-footer_record-icp">
            鄂ICP备20007921号-1
          </a>

          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011102003909"
            class="t-footer_record-公安"
          >
            <img src={img公安} alt="公安" />
            鄂公网安备 42011102003909号
          </a>

          <div class="t-footer_hint">
            请使用 Edge 或 Chrome 访问以获得最佳体验
          </div>
        </div>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .t-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;

    * {
      color: $foreground-2;
    }
    img {
      width: 1.5em;
      height: 1.5em;
      margin-right: 0.4em;
    }

    &_repo {
      margin: 1rem;
    }
    &_hint {
      margin: 1rem;
      font-size: 95%;
    }

    [class^="t-footer_record"] {
      opacity: 0.8;
      font-size: 90%;
    }
  }
</style>
