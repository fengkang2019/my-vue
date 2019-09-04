<template>
  <div v-if="show">
    <Head :title="$route.query.name" :show="true"></Head>
    <div>
      <img :src="detail.img" alt style="width:100%;height:300px" />
      <h2>{{detail.name}}</h2>
      <h2>折扣 {{detail.discount}}折</h2>
      <h2>价格 ￥{{detail.price}}.00</h2>
      <h2>
        评分
        <van-rate v-model="average" />
      </h2>
      <p>
        <van-stepper v-model="count" />
      </p>
      
      <van-button type="danger">商品规格</van-button>
    </div>
    <van-goods-action>
      <van-goods-action-icon 
      icon="chat-o" 
      text="客服" 
      @click="meimei" />
      <van-goods-action-icon 
      icon="cart-o" 
      text="购物车" 
      :info="total" 
      @click="gotoshopcar" />
      <van-goods-action-button 
      type="warning" 
      text="加入购物车"
       @click="addShopcar" />
      <van-goods-action-button 
      type="danger" 
      text="立即购买" 
      @click="buy" />
    </van-goods-action>
  </div>
</template>


<script>
import { getUsername } from "@/utils";
import {mapState,mapActions} from "vuex";
export default {
  data() {
    return {
      show: false,
      // detail: this.$store.state.detail,
      average: 5,
      // total: this.$store.state.total,
      count:1,
    };
  },
  computed:{
    ...mapState(['detail','total'])
  },
  mounted() {
    // this.$axios
    //   .get("/vue/getGoodDetail", {
    //     params: {
    //       goodId: this.$route.params.goodId
    //     }
    //   })
    //   .then(res => {
    //     console.log(res);
    //     this.detail = res.data.result;
    //     this.show = true;
    //   });
    this.getGoodDetails({url:"/vue/getGoodDetail",params:{goodId:this.$route.params.goodId},cb:()=>{
      this.show = true;
    }})

    // this.$axios
    //   .post("/vue/getShopcarInfo", {
    //     username: getUsername()
    //   })
    //   .then(res => {
    //     this.total = res.data.total;
    //   });
   
    this.getShopCarInfo({url:"/vue/getShopcarInfo",params:{username:getUsername()}})
  },
  methods: {

    ...mapActions([
      'getGoodDetails',
      'getShopCarInfo',
      'addTotal'
    ]),
    meimei() {},
    gotoshopcar() {
      this.$router.push({name:"cart"})

    },
    addShopcar() {

         console.log(this.count)
      // this.$axios
      //   .post("/vue/addShopcar", {
      //     username: getUsername(),
      //     goodId: this.$route.params.goodId,
      //     count: this.count,
      //     goodInfo: this.detail
      //   })
      //   .then(res => {
      //     this.total += this.count;
      //   });
   
      this.addTotal(
        {url:"/vue/addShopcar",
        params:{username:getUsername(),
        goodId:this.$route.params.goodId,
        count:this.count,
        goodInfo:this.$store.state.detail,
        }})
    },
    buy() {

    }
  }
};
</script>