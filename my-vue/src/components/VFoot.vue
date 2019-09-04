<template>
  <van-tabbar v-model="active">
    <van-tabbar-item
      v-for="(foot,i) in foots"
      :key="i"
      :icon="foot.icon"
      :info="i==2?total:''"
    >{{foot.txt}}</van-tabbar-item>
  </van-tabbar>
</template>


<script>
// this.$router 实际上 就是全局 路由对象  任何页面 都可以 调用 push

// (), go()等方法

// 2.

// this.$route  表示当前正在用于跳转的路由器对象，可以调用其name、path、query、params等属性；

import { mapState, mapMutation, mapMutations } from "vuex";
export default {
  computed:{
    ...mapState(['cars','total']),//购买的总数量
    active:{
      get(){
        return this.$store.state.active
        //被动获取active的值已得到当前页面的内容
      },
      set(newVal){
        this.changeActive(newVal);
        //主动改变 active进行跳转页面
      }
    }
  },
  data() {
    return {
      foots: [
        {
          txt: "首页",
          name: "home",
          path: "/index/home",
          icon: "wap-home"
        },
        {
          txt: "分类",
          name: "classify",
          path: "/index/classify",
          icon: "apps-o"
        },
        {
          txt: "购物车",
          name: "cart",
          path: "/index/cart",
          icon: "shopping-cart-o"
        },
        {
          txt: "我的",
          name: "mine",
          path: "/index/mine",
          icon: "friends-o"
        }
      ],
      // active: 0
    };
  },
  watch: {
    active: function(newVal) {
      //得到对应foot的下标 的值
      // console.log(newVal); //(1,2,3,4)
      // console.log(this.$router);
      this.$router.push({ name: this.foots[newVal].name });
      //name: this.foots[newVak].name }=>home ,classify,cart,mine
      //跳转到相对应的路由界面
    }
  },
  mounted() {
    console.log(this.$route);
    let name = this.$route.name;
    this.foots.forEach((item, index) => {
      if (item.name == name) {
        // this.active = index;
        this.changeActive(index);
        //执行active为当前页面的active的函数在store中执行
        //当前 是哪一个页面 就哪一个显示高亮
        //active 为 1 ，索引为1的 icon图标就高亮
      }
    });
  },
  methods:{
    ...mapMutations(['changeActive'])
  }
};
</script>
