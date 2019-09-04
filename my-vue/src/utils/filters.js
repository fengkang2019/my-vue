

//全局的过滤器

import Vue from "vue";

Vue.filter('upper', function (value) {
    if (!value) {
        return;
    }
    return value.toUpperCase();
})

import hello from "../components/hello.vue";
//将 hello进行全局引用
Vue.component("hello", hello);
//全局定义组件 hello

import SwiperDemo from "../components/SwiperDemo.vue";
Vue.component("SwiperDemo", SwiperDemo);

import SwiperItem from "../components/SwiperItem.vue";
Vue.component("SwiperItem", SwiperItem)

import Head from "../components/Head.vue";

Vue.component("Head", Head);

import List from "../components/List.vue";

Vue.component("List",List);

import Item from "../components/Item.vue";

Vue.component("Item",Item);