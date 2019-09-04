<template>
  <div>
    <Head title="购物车"></Head>
    <h2>这是购物车页面</h2>
    <!-- <div>
      <h2>vuex Demo</h2>
      <h2>cartCount== {{count}}</h2>
      <h2>count1 == {{count1}}</h2>
      <h2>count2=={{count2}}</h2>
      <h2>count3=={{count3}}</h2>
      <h2>count4=={{count4}}</h2>

      <h2>newcount =={{newCount}}</h2>

      <h2>city1 =={{city1}}</h2>
      <h2>city2 =={{city2}}</h2>
      <h2>msg == {{msg}}</h2>
      <p>
        <input type="text" @input="getMsg($event)" />
      </p>
    </div> -->
    <!-- <div>
      <van-button type="danger" @click="countDesc(100)">count decrement 90</van-button>
      <van-button type="info" @click="countAdd(100)">count decrement 90</van-button>
      <van-button type="default" @click="changeCount()">修改 count++</van-button>
      <van-button type="danger" @click="changeCity('杀杀杀')">改变城市</van-button>
      <van-button type="danger" @click="changeMsg('上海')">改变msg</van-button>
      <van-button type="info" @click="increment">action count</van-button>
      <van-button type="info" @click="decrement(90)">action count</van-button>
    </div> -->
   <table>
     <thead>
        <tr>
          <td>序号</td>
          <td>选中</td>
          <td>商品名称</td>
          <td>商品描述</td>
          <td>商品单价</td>
          <td>商品数量</td>
          <td>小计</td>
          <td>操作</td>
        </tr>
      </thead>
    <tbody>
        <tr v-for="(car,i) in carList" :key="i">
          <td>{{i+1}}</td>
          <td><input type="checkbox"></td>
          <td><img :src="car.goodInfo.img" alt=""></td>
          <td>{{car.goodInfo.name}}</td>
          <td>{{car.goodInfo.price}}</td>
          <td><van-stepper v-model="car.count" /></td>
          <td>{{car.count*car.goodInfo.price}}</td>
          <td @click="del($event)" :index="i" :goodId="car.goodId">删除</td>
        </tr>
    </tbody>
    </table>
    <input type="checkbox" id="checkAll" v-model="checkAll">
    <label for="checkAll">全选反选</label>
    <h2>总计：{{all}}</h2>
    <button @click="todoDelCheck()">删除选中</button>
  </div>
  <!-- v-model 会忽略所有表单元素的 value、checked、selected 特性
    的初始值而总
    是将 Vue 实例的数据作为数据来源。
    你应该通过 JavaScript 在组件的 data 选项中声明初始值。 -->

</template>

<script>
//increment 增量/增值
import store from "@/store";
import {
  FIRSTTODO,
  COUNTADD,
  INCREMENT,
  DECREMENT
} from "@/utils/mutationtype";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      all:0,
      // count: 2000,
      // city1: this.$store.state.city,
      // count1: this.$store.state.count + 10 //不会响应式的随着state.count的变化而变化
    };
  },
  // computed: {
  //   count2() {
  //     return this.$store.state.count;
  //   },
  //   count3() {
  //     return this.$store.state.count + 1000;
  //   },
  //   city2() {
  //     return this.$store.state.city;
  //   },
  //   msg(){
  //     return this.$store.state.msg;
  //   },
  //   newCount(){
  //     return this.$store.getters.newCount;
  //   },
  // },
  computed: {
    ...mapState(['carList']),
    ...mapActions(['deleteGood']),
    checkAll:{
      get(){
        var flag =true;
          this.$store.state.carList.forEach(item=>{
          if(!item.check){
            flag =false;
            //侦听checkall 只有存在一个以上的check为fasle，checkall就为false

          }
        })
        return flag;
      },
      set(val){
        this.goods = this.$store.state.carList.map(item=>{
          item.check = val;
          return item;
        })
      }
    }
    
    // carList:{
    // get(){
    //   return this.$store.state.carlist;
    // }
    // set(newVal){
      
    // }
    // ...mapState({
    //   count2: state => state.count,
    //   //  箭头函数可使代码更简练
    //   count3: "count", // 传字符串参数 'count'
    //   //等同于 `state => state.count`
    //   //只传参数,怎么执行看store的mutation中
    //   count4(state) {
    //     return state.count + 200;
    //   },
    //   city2: "city"
    // }),
    // ...mapGetters([
    //   "newCount"
    //   //把 this.newCount 映射为 this.$store.getters.newCount
    //   //this.newCount 简写为newCount
    // ]),
    // ...mapState(["msg"]) // 映射 this.count 为 store.state.count
    //当 出现city(){
    //  return this.$store.state.city
    // 这种 属性和key一样的时候，可以用'city'表示
    // }
  },
  methods: {

    del(e){
          var goodId=e.target.getAttribute("goodId")
          var index =e.target.getAttribute("index");
        // this.deleteGood({url:"/vue/delGood",params:{goodId}})
        this.$axios.get("/vue/delGood",{
          params:{goodId}
        }).then(res=>{
          this.$store.state.carList.splice("index",1);
        })
    }
    // countDesc(num) {
    //   this.$store.commit("countDesc", num);
    // },
    // countAdd() {
    //   this.$store.commit("countAdd", 10);
    // },
    // changeCount() {
    //   this.$store.commit("firstTodo");
    // },
    // changeCity() {
    //   this.$store.commit("changeCity", "深圳");
    //   //commit("要在store中mutations 里执行的chnageCity")
    // },
    // changeMsg(msg) {
    //   this.$store.commit("changeMsg", msg);
    // },
    // increment() {
    //   this.$store.dispatch("increment");
    // },
    // decrement(num) {
    //   this.$store.dispatch("decrement", num);
    // },
    // getMsg(e) {
    //   //e 事件对象  e.target.value=》出发事件的input的value的值
    //   this.$store.commit("changemsg2", e.target.value);
    // },
    // ...mapMutations(
    //   { changeCount: "firstTodo" } //firstTodo=>this.$store.commit("firstTodo");
    // ),
    // ...mapActions({
    //   increment:'increment',
    //   decrement:'decrement'//如果参数由点击事件传递，简写时可省略
    // })
    // ...mapActions(["increment", "decrement"]),
    // ...mapMutations({
    //   countAdd: "countAdd", //  将 `this.countAdd(num)` 映射为 `this.$store.commit('countAdd', num)`
    //   changeMsg: "changeMsg",
    //   changeCity:"changeCity"
    //   //简写时，参数最好由点击事件传递，在提交就可以不用写，直接用省略写法
    // })
    // ...mapMutations([COUNTADD, "changeMsg", "changeCity"])
  },
  mounted(){
    console.log(this.$store.state.carList)
  }
};
</script>

<style scoped>
  tr{
    height: 0.8rem;
  }
  img{
    width: 0.6rem;
    height: 0.6rem;
  }

</style>
