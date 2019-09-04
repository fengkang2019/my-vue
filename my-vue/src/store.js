
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from "@/utils/axios"

import {FIRSTTODO,COUNTADD,INCREMENT,DECREMENT} from "@/utils/mutationtype"


// 每一个 Vuex 应用的核心就是 store（仓库）  “store”基本上就是一个容器  包含大部分的状态 
// vuex store 仓库  
// Vuex 的状态存储是响应式的  当 Vue 组件从 store 中读取状态的时候   store 中的状态发生变化，那么相应的组件也会相应地得到高效更新
// 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation

// Vuex 允许我们将 store 分割成模块（module）

//设置 购物车需要的store模块
const ModuleCar ={
  state:{
    carNum:2,
    // carList:[],  //state里面的内容为this.$store.state.cars

  },
  action:{

  },
  mutations:{

  }
}

const ModuleData ={
  state :{
    banner:[],//==>this.$store.state.data==>state这个对象
    //通过 this.$store.state.data.baner可以获取到banner这个集合
    },
  actions:{
    getBannerAsync({commit},{url,params}){
      axios.get(url,{
        params
      }).then(res=>{
        //自动 提交mutation
        commit("getBanner",res.data.result);
        //得到的结果result为getBanner的参数
      })
    }
  },
  mutations:{
    getBanner(state,banner){
      state.banner =banner
    }
  }
}

// 一个对象 state 就包含了全部组件的应用层级状态
//Vue store 仓库
const store = new Vuex.Store({
  modules:{
    cars:ModuleCar,
    data:ModuleData,
  },
  state: {//组件里面的所有的数据/状态
    count: 1906,
    city: 'wuhan~~~',
    msg: "wuhan1906 daydayup",
    searchList:[],
    keyword:'',
    active:0,
    oldActive:0,
    goodList:[],
    typeList:[],
    carList:[],
    userInfo:{

    },
    //商品详情的 信息和购物车总数量
    detail:{},
    total:0,

  }, actions: {
    // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    //  Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象  context.commit
    increment(context) {
      context.commit("increment")// mutations type 
    },
    decrement({ commit }, num) {
      commit("decrement", num)
    },
    //action 格式 ({commit},参数)
    // commit("执行的函数",参数)
    getSearchListAsync({commit},{url,params}){
      axios.get(url,{
        params
      }).then(res=>{
        commit("getSearchList",res.data.result);
      })
    },
    getTypeListAsync({commit},{url,cb}){
     axios.get(url).then(res=>{
       cb();
       commit("getTypeList",res.data.result);
     })
    },
    getGoodDetails({commit},{url,params,cb}){
      axios.get(url,{
        params
      }).then(res=>{
        cb();
        commit('getGoodDetails',res.data.result)
      })
    },
    getShopCarInfo({commit},{url,params}){
      axios.get(url,{
        params
      }).then(res=>{
        console.log(2)
        console.log(res.data.carList)
        console.log(2)

        commit('getShopcarInfo',{total:res.data.total,carList:res.data.carList})
      })//提交函数到mutations时只能传递一个参数，多个参数只能使用数组或对象来传递
    },
    addTotal({commit},{url,params}){
      axios.get(url,{
        params
      }).then(res=>{
        commit("addTotal",params.count)
      })
    },
    //购物车
    // deleteGood({commit},{url,params}){
    //   axios.get(url,{
    //     params
    //   }).then(res=>{
    //     commit("deleteGood")
    //   })
    // }

  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state, num) {
      state.count -= num;
    },
    countDesc(state, num) {
      state.count += num;
    },
    [COUNTADD](state, num) {
      state.count += num
    },
    [FIRSTTODO](state) {
      state.count++
    },
    changeCity(state, city) {
      state.city = city;
    },
    changeMsg(state, msg) {
      state.msg = msg
    },
    changemsg2(state,msg){
      state.msg = msg;

    },
    getSearchList(state,searchList){
      state.searchList=searchList;
    },
    getKeyword(state,keyword){
      state.keyword =keyword;
    },
    changeActive(state,active){
      state.active =active;
    },
    changeOldActive(state,oldActive){
      state.oldActive = oldActive;
    },
    getGoodList(state,goodList){//参数goodList=>res.data.result
      state.goodList = goodList;
    },
    getTypeList(state,typeList){
      state.typeList = typeList
    },
    //商品详情
    getGoodDetails(state,detail){
      state.detail =detail;
    },
    getShopcarInfo(state,a){
      state.total = a.total;
      state.carList=a.carList;
    },
    addTotal(state,count){
      state.total+=count
    
    },
    // deleteGood(state){

    // }

  },
  getters: {
    // store 中的 state 中派生出一些状态，例如对列表进行过滤并计数  把store.state 数据进行优化 

    newCount(state) {
      return state.count * 10;
    },
  }

})


export default store;