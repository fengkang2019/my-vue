<template>
  <div class="home">
    <Head title="首页"></Head>
    <h2>这是首页</h2>
    <h2>1906 daydayup</h2>
    <h2>txt=={{txt}}</h2>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <hello></hello>
    <!-- 电影轮播 -->
    <div class="swipe-box">
      <van-swipe class="h-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(b,i) in data.banner" :key="i">
          <!-- {{b.images.large}} -->
          <img :src="b.images.large" alt="" class="h-img">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import {Toast} from "vant"; // js component  必须引入 

import {mapState,mapActions} from "vuex";
//导入 两种简写方式
export default {
  //使用引入过来的组件
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      // banner: []
      txt:"1906"
    };
  },
  mounted() {
    // this.$axios
    //   .get("/vue/movie", {
    //     params: {
    //       limit: 6
    //     }
    //   })
    //   .then(res => {
    //     console.log(res);
    //     this.banner = res.data.result;
    //   });
    //异步的操作方法放到 action里面去执行
    console.log(111)
    console.log(this.data)
    console.log(this)
    console.log(this.$store.state.data)
    console.log(this.$store.state.cars)

    console.log(111)
  //第二部
    if(!this.data.banner.length){
      //如果Data.banner为空，则通过axios请求数据，
      //发送请求 函数 getBannerAsync和两个参数 
      this.getBannerAsync({url:"/vue/movie",params:{limit:8}})
    }
  },
  computed:{
    //第一步
    ...mapState(['data'])//'data'=>return this.$store.state.data
    //data为mudoleData的state的数据
  },
  methods:{
    //第三部
    ...mapActions(['getBannerAsync'])
    //接收到 视图views的请求
    //发送了一个异步执行函数getBannerAsync到actions
  }
};
</script>
<style  scoped>
.swipe-box,.h-swipe,.h-img{
  width: 100%;
  height: 4rem;
}
</style>