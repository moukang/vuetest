<template>
  <div>
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input type="text" placeholder="请输入账号" v-model="Username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="请输入密码" v-model="Password"></el-input>
      </el-form-item>
      <el-form-item>
          <el-checkbox v-model="checked">记住我</el-checkbox>
          <el-button type="primary" @click="loginForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
      return {
          Username:'',
          Password:'',
          checked:true
      }
  },
};
</script>

<style lang="">
</style>