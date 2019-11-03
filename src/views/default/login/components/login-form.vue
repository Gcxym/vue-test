<template>
  <el-form ref="loginForm" :model="form" :rules="rules" @keyup.enter.native="handleSubmit">
    <el-form-item prop="userName">
      <el-input v-model.trim="form.userName" size="medium" placeholder="请输入用户名">
        <span slot="prepend">
          <i class="duno-iconfont duno-tongyong-yonghumingtubiao"></i>
        </span>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model.trim="form.password" size="medium" placeholder="请输入密码">
        <span slot="prepend">
          <i class="duno-iconfont duno-mima"></i>
        </span>
      </el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-row :gutter="20">
        <el-col :span="14">
          <el-input type="text" v-model.trim="form.code" size="medium" placeholder="请输入验证码">
            <span slot="prepend">
              <i class="duno-iconfont duno-yanzhengma"></i>
            </span>
          </el-input>
        </el-col>
        <el-col :span="10">
          <img :src="imgSrc" alt="验证码" @click="codeUrl()" class="loginCode" />
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-button
        @click="handleSubmit"
        type="primary"
        long
        :loading="isLoading"
        style="width: 100%;"
      >登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
// import { getUUID } from '@/libs/util'
export default {
  name: "LoginForm",
  components: {},
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "用户名不能为空", trigger: "blur" }];
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "密码不能为空", trigger: "blur" }];
      }
    },
    codeRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "验证码不能为空", trigger: "blur" }];
      }
    },
    isLoading: {
      type: Boolean,
      default: () => {
        return false;
      }
    }
  },
  data() {
    const that = this;
    return {
      form: {
        userName: "",
        password: "",
        code: "",
        uuid: ""
      },
      imgSrc: "",
      baseUrl:
        process.env.NODE_ENV === "development"
          ? that.$config.baseUrl.dev
          : that.$config.baseUrl.pro
    };
  },
  //   computed: {
  //     rules() {
  //       return {
  //         userName: this.userNameRules,
  //         password: this.passwordRules,
  //         code: this.codeRules
  //       };
  //     }
  //   },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$emit("on-success-valid", {
            userName: this.form.userName,
            password: this.form.password,
            code: this.form.code,
            uuid: this.form.uuid
          });
        }
      });
    },
    codeUrl() {
      this.form.uuid = getUUID();
      this.imgSrc = this.baseUrl + "/auth/validate?uuid=" + this.form.uuid;
    }
  },
  mounted() {
    let that = this;
    that.codeUrl();
  }
};
</script>
<style lang="scss">
.loginCode {
  display: block;
  cursor: pointer;
  width: 100%;
}
</style>
