import axios from "axios";

// axios.defaults.baseURL = "http://localhost:1906/"// 基路径

let AUTH_TOKEN = '';

axios.defaults.headers.common['token'] = AUTH_TOKEN;    // token 

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

import { Toast } from "vant";
//导入 轻提示 ui 插件

function fail(msg) {
    Toast.clear();
    Toast({
        message: msg,
        icon: 'cross',
        duration: 800
    })
}

import router from "@/router"
//导入 路由模块
//发送请求之前 添加拦截器
axios.interceptors.request.use(function (config) {
    //发送之前做的事情
    if (sessionStorage.userInfo) {
        AUTH_TOKEN = JSON.parse(sessionStorage.userInfo).token;

    };
    //config =》发送的请求的集合
    config.headers['token'] = AUTH_TOKEN;
    console.log(11)
    console.log(config)
    console.log(11)

    Toast.loading({
        msssage: '加载中...',
        duration: 10000
    })
    return config;
}, function (error) {
    //发送失败 做的事情
    fail('请求-未知错误');
    return Promise.reject(error);
})

//响应数据的 拦截器
//interceptors 拦截器

axios.interceptors.response.use(function (response) {
    //成功接收到数据

    console.log(response);
    //response 得到的响应数据
    //和 axios.get得到的res 一样

    setTimeout(() => {
        Toast.clear();
        Toast.success({
            message: response.data.msg,
            duration: 400
        });
        if (response.data.code == "500") {
            router.push({
                name: "login",
                query: {
                    active: 1
                }
                //如果code为500，返回登陆界面
            })
        }
    }, 800)
    return response;
}, function (error) {
    fail('响应-未知错误')
    //无法接受到数据
    return Promise.reject(error)
})


export default axios;