<script lang="tsx">
  import { defineComponent, onMounted, ref } from "vue";
  import CAutoShowText from "../components/CAutoShowText.vue";
  import { notFoundPageMsg } from "../constants/notFoundPageMsg";

  export default defineComponent({
    name: "notFound",
    props: {
      msg: String,
    },
    setup(props) {
      let msg: string = "";
      if (props.msg) msg = props.msg;
      else msg = notFoundPageMsg;

      return () => (
        <div class="p-notFound">
          <CAutoShowText msg={msg} />
        </div>
      );
    },
  });
</script>

<style lang="scss">
  .p-notFound {
    padding: 1rem;
    font-size: 1.2rem;
    background-color: #000;
    color: #fff;
    min-height: 100vh;
    box-sizing: border-box;
    a {
      color: #3e88ff;
    }
  }
</style>
