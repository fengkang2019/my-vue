<template>
  <van-nav-bar 
  :title="title" 
  :left-text="show?'返回':''" 
  :left-arrow="show" 
  @click-left="onClickLeft">
    <div slot="right">
      <van-icon 
      @click="todoScan" 
      name="scan" />
      <van-icon 
      v-if="searchShow" 
       @click="todoSearch"
        name="search" />
    </div>
  </van-nav-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "xxxx",

    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
        searchShow:true,
    };
  },
  methods: {
    onClickLeft() {
        console.log("返回上一个页面")
      this.$router.go(-1);
    },
    onClickRight() {},

    todoSearch() {
      this.$router.push({ name: 'search' });
    },
    todoScan() {
      console.log("我要开始scan了哦！");
    }
  },
  mounted(){
      if(this.$route.name=="search"){
          this.searchShow=false;
        //   如果当前路由页面是search ，那么searchShow 为 false
      }
  }
  
  };
</script>