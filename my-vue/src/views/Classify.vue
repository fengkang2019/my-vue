<template>
  <div v-if="show">
    <Head title="商品分类"></Head>
    <van-tabs 
    v-model="active" 
    sticky
    title-active-color="#f44"
    swipeable
    >
      <van-tab 
      v-for="(ts,i) in typeList" :key="i" 
      :title="ts.text" 
      :name="ts.value"
      >
      <List 
      :goodtype="ts"
      :goodList="goodList"
      :goods="goodList.filter(item=>item.type.value==ts.value)"
      @changeAllgoods="getNewGoodList"
      ></List>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapState,mapActions,mapMutations,mapGetters } from 'vuex';
export default {

  data(){
    return {
      // typeList:[],
      active:0,
      show:true,
      // goodList:[],
    }
  },
  computed:{
    ...mapState(['goodList','typeList'])
    // goodList=>return this.$store.state.goodList
  },
  methods:{
    getNewGoodList(){
      this.goodList.reverse();
    },
    ...mapMutations(['getGoodList']),
    ...mapActions(['getTypeListAsync'])

  },
  created(){
    // this.$axios.get("/vue/getGoods").then(res=>{
    //   this.goodList = res.data.result;
    // })
    if(!this.goodList.length){
      this.$axios.get("/vue/getGoods").then(res=>{
        this.getGoodList(res.data.result);
      })
    }
  },
  mounted(){

    // this.$axios.get("/vue/getGoodTypes").then(res=>{
    //   // console.log(res);
    //   this.typeList = res.data.result;
    // })
    if(!this.typeList.length){
      this.getTypeListAsync({url:"/vue/getGoodTypes",cb:()=>{
       
      }})
    }
     this.show =true;
  }




};
</script>