<script lang="tsx">
  import { defineComponent, onMounted, ref } from "vue";
  import CAutoShowText from "../components/CAutoShowText.vue";
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

      return () => (
        <div class="p-home">
          <CAutoShowText msg={msg} />
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
    a {
      color: #3e88ff;
    }
  }
</style>
