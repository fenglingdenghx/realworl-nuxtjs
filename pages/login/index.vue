<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "Sign in" : "Sign up" }}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="isLogin" to="/register"
              >Need an account?</nuxt-link
            >
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
            <!-- <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxtlink> -->
            <!-- <nuxt-link v-else to="/login">Have an account?</nuxt-link> -->
          </p>
          <ul class="error-messages">
            <template  v-for="(messages,field) in errors">
                <li v-for="(message,index) in messages" :key="index">{{ field }} {{message }}</li>
            </template>
          </ul>
          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                v-model="user.username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.email"
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? "Sign in" : "Sign up" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { registr,login } from "@/api/user.js";
// 仅在客户端加载 js-cookie
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  name: "LoginIndex",
   middleware:'notAuthenticated',
  
  data() {
    return {
      user: {
        email: "",
        password: "",
        username:""
      },
      // 错误信息
      errors:{}
    };
  },
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  methods: {
    async onSubmit() {
      try {
         const { data } = this.isLogin ? await login({
          user:this.user
        }) : await registr({
          user:this.user
        });
        this.$store.commit('setUser',data.user);
        // 持久化数据
        Cookie.set('user',JSON.stringify(data.user))
        this.$router.push("/");
      } catch (err) {
        this.errors = err.response.data.errors
      }
      
    },
  },
};
</script>

<style>
</style>