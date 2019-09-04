<template>
  <div>
    <Head title="商品搜索" :show="true"></Head>
    <van-search
      v-model="keyword"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    />
    <List :goods="goods"
    @changeallgoods ="getGoods"
    >

    </List>
  </div>
</template>

<script>

import {mapActions,mapState} from "vuex";
// import { mapState } from 'vuex';
export default {
  data() {
    return {
      // keyword: "",
      // goods:[]
    };
  },
  computed:{
    ...mapState({
      goods:'searchList'
    }),
    keyword:{
      get(){
        return this.$store.state.keyword;
      },
      set(newVal){
        this.$store.commit("getKeyword",newVal);
      }
    }
  },
  
  methods: {
    onSearch() {
      //enter 键盘的回车键
      // console.log(this.value);
      // this.$axios.get("/vue/getGoods",{
      //   params:{
      //     keyword:this.keyword,
      //   }
      // }).then(res=>{

      //   this.goods= res.data.result;
      // })
      console.log(this.keyword);
      this.getSearchListAsync({
        url:"/vue/getGoods",
        params:{
          keyword:this.keyword
        }
      })
      
    },
    getGoods(){
      this.goods.reverse();
    },
    ...mapActions(['getSearchListAsync']),
    onCancel() {
      this.$router.go(-1);
    }
  }
};
</script>