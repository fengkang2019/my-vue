// 路由懒加载   当这个路由被访问时 才去编译加载这个路由组件模板

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter); // 全局声明


import Guide from "@/views/Guide.vue";

const routes = [
  {
    path: "/", redirect: { name: "guide" }
  },
  {
    path: "/guide",
    name: "guide",
    component: Guide
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/Search.vue")
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("@/views/Login.vue")
  },
 {
   path:"/good/:goodId",
   name:'good',
   component:()=>import("@/views/Good.vue")
 },
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/Index.vue"),
    children: [
      { path: "", redirect: { name: "home" } },
      { path: "home", name: "home", component: () => import("@/views/Home.vue") },
      { path: "classify", name: "classify", component: () => import("@/views/Classify.vue") },
      { path: "cart", name: "cart", component: () => import("@/views/Cart.vue") },
      { path: "mine", name: "mine", component: () => import("@/views/Mine.vue") },
      { path: "**", redirect: { name: "home" } },
      {path:"**",
      redirect:{
        name:'home'
      }}
    ]
  },
  {
    path:"**",
    redirect:{name:'home'}
  }

]




const router = new VueRouter({
  routes,
  mode: "hash",
  base: "/"
})


export default router; 