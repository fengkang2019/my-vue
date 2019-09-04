import Vue from 'vue'//导入vue
import App from './App.vue'// 根组件
import router from './router'//导入路由组件
import store from './store'


//引入公共的模块 
// 公共 过滤器  组件  指令  样式  
import "./utils/filters";//
import "./styles/index.scss";//导入公共样式

//导入 vant 
import Vant from "vant";//导入vant
Vue.use(Vant); //全局配置

//导入 vue-resouce , axious

import VueResource from "vue-resource";
Vue.use(VueResource); // this.$http    Vue.http 请求数据 

import axios from "@/utils/axios.js";
Vue.prototype.$axios = axios;
// this==> Vue.prototype  this.$axios ==> axios ;

// 项目启动的主文件 
console.log("vue 项目启动的 main.js")

Vue.config.productionTip = false
// 标记 是什么环境模式   开发测试模式     线上模式  



new Vue({//实例化vue对象
  router,
  store,
  render: h => h(App) // 加载根组件 到  div#app 
}).$mount('#app')
// function render(h){
//   return h(App)
// }