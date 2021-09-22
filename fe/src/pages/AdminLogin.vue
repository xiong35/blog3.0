<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import CBtn from "../components/CBtn.vue";
  import router from "../router";

  export default defineComponent({
    name: "AdminLogin",
    setup(props) {
      return () => (
        <div class="pa-login">
          <input
            type="password"
            class="pa-login_input"
            placeholder="请输入密码"
          />
          <CBtn
            content="登录"
            onClick={() => router.push({ name: "admin-compose" })}
          />
        </div>
      );
    },
  });
</script>

<style lang="scss">
  @import "../assets/css/variables.scss";

  .pa-login {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 400px;
    max-width: 90vw;
    min-height: 200px;

    background-color: $background-2;
    border-radius: 4px;

    &_input {
      color: $foreground;
      background-color: $background;
      width: 80%;
      padding: 0.5em;
      margin-bottom: 2rem;
      border: 1px solid $primary;

      &::placeholder {
        color: $foreground-2;
      }
    }
  }
</style>
