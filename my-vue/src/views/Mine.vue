<template>
  <div>
    <Head title="我的"></Head>
    <h2>mine == 个人中心</h2>
    <div v-if="isLogin">
      <h2>username =={{username}}</h2>
      <Uploadavatar :username="username" />
    </div>
    <div v-else>
      <van-button @click="gotoLogin" type="primary">立即登录</van-button>
    </div>
  </div>
</template>

<script>
import Uploadavatar from "@/components/Uploadavatar.vue";
export default {
  data() {
    return {
      isLogin: false,
      username: ""
    };
  },
  components: {
    Uploadavatar
  },
  methods: {
    gotoLogin() {
      this.$router.push({ name: "login" });
    }
  },
  mounted() {
    if (sessionStorage.userInfo) {
      this.isLogin = JSON.parse(sessionStorage.userInfo).token;
      console.log(this.isLogin);
      this.username = JSON.parse(sessionStorage.userInfo).username;
      console.log(this.username);
    }
  }
};
</script>

<style   scoped>
div {
  text-align: center;
}
</style>