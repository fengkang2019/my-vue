<template>
  <div>
    <Head title="登录/注册" :show="true"></Head>
    <van-tabs v-model="active" @click="printdd">
      <van-tab title="注册">
        <van-cell-group>
          <van-field
            v-model="register.username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('请输入最多4位长度的用户名')"
          />

          <van-field
            v-model="register.usertel"
            type="tel"
            label="手机号"
            placeholder="请输入手机号"
            right-icon="question-o"
            @click-right-icon="$toast('请输入11位手机号')"
            required
          />
          <van-field
            v-model="register.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
            right-icon="question-o"
            @click-right-icon="$toast('请输入6-12位密码')"
          />
          <van-field
            v-model="register.dbpassword"
            type="password"
            label="确认密码"
            placeholder="请输入确认密码"
            required
            right-icon="question-o"
            @click-right-icon="$toast('请输入6-12位确认密码')"
          />
          <van-button @click="todoRegister" type="primary" size="large">马上注册</van-button>
        </van-cell-group>
      </van-tab>
      <van-tab title="登录">
        <van-cell-group>
          <van-field
            v-model="login.keys"
            type="text"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('请输入用户名或手机号')"
          />

          <van-field
            v-model="login.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
            right-icon="question-o"
            @click-right-icon="$toast('请输入密码')"
          />
          <van-button @click="todoLogin" type="primary" size="large">立即登录</van-button>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0, //0 为van-tab 的 下标
      login: {},
      register: {}
    };
  },
  methods: {
    printdd() {
      console.log(this.active);
    },
    todoRegister() {
      this.$axios.post("/vue/register", this.register).then(res => {
        console.log(res);
        if (!!res.data.type) {
          this.active = 1;
        } else {
          console.log("注册失败");
        }
        this.register={};
        //不管注册成功还是失败，清空输入的注册信息
      });
    },
    todoLogin() {
      console.log(this.login);
      this.$axios.post("/vue/login", this.login).then(res => {
        console.log(res);
        if (!!res.data.type) {
        
          sessionStorage.userInfo = JSON.stringify({
            token: res.data.token,
              //如果登录成功 
            //将 前端的token 取出 存储在sessionStorage中
            username: this.login.keys
          });
          setTimeout(()=>{
            this.$router.push({name:'mine'});
          },600)
        }else{
          //如果登录失败 ，将token清空
          sessionStorage.userInfo=JSON.stringify({
            token:""
          })
        }
      });
    }
  }
};
</script>