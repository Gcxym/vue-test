<style lang="scss">
@import "./login.scss";
</style>

<template>
  <div class="login">
    <div class="login-con">
      <el-card icon="log-in" title :bordered="false">
        <div slot="header" class="clearfix">
          <span>欢迎登录</span>
        </div>
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit" :isLoading="isLoading"></login-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import LoginForm from "./components/login-form.vue";
import { mapActions } from "vuex";
export default {
  components: {
    LoginForm
  },
  data() {
    return {
      isLoading: false
    };
  }
  // methods: {
  //   ...mapActions(["handleLogin", "getUserInfo"]),
  //   handleSubmit({ userName, password, code, uuid }) {
  //     this.isLoading = true;
  //     this.handleLogin({ userName, password, code, uuid }).then(res => {
  //       if (res.code === 200) {
  //         this.getUserInfo().then(res => {
  //           this.isLoading = false;
  //           this.$router.push({ name: "home" });
  //         });
  //       } else {
  //         this.isLoading = false;
  //         this.$message.error(res.msg);
  //       }
  //     });
  //   }
  // }
};
</script>

<style></style>
