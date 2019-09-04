# my-vue

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## 项目的 自我提醒  

## readme 项目提示 文件 

## 项目 安装步骤  
1. cnpm i -g @vue/cli   yarn add -g @vue/cli  
2. vue --version      3.x.x  脚手架 3.0 版本 
3. vue create my-demo  新建 vue 项目
4. cd my-demo 
5. yarn serve  启动
6. yarn build  打包上线         



## vue 框架  framework 
## 全家桶   vue + vuex + vue-router + vue-resource


## 弹性盒布局 

## boostrap  100%布局   栅格系统  把屏幕切割 12  等分 

## 移动端 适配    rem 

## 为了 不同手机设备  适应显示 设计稿  

## 媒体查询  @media  根据不同设备宽度 范围 添加对应的样式 

## 移动端 适配    rem px em vw vh

## rem 指的是 页面的 根节点 html 的字体大小 font-size 

## js document.documentElement.clientWidth  css3 100vw 

## 等比缩放   当前设备的宽度  跟 设计稿宽度(750px) 的比 等于 当前设备的rem 跟 设计稿假定 rem = 100px 的比     动态计算出 当前设备的 rem 

##   100vw : 750px =  ?  : 100px    ? ===>  100vw*100px/750px  = 100vw/7.5   
##   100vw : 640px =  ?  : 100px    ? ===>  100vw*100px/640px  = 100vw/6.4

    设计稿宽度       div         rem             css
    750px           200px       100px            2rem(书写)
    375px           ? 100       100vw/7.5 =50    2rem 
    414px           ? 110.4     414/7.5 = 55.2   2rem



## viewport  视口宽度    



## 适配方法
a. 网易适配  设计稿宽度 750  假设 设计稿 rem = 100px; 
b. 淘宝适配  flexiable.js   设计稿 750px  平均分成 10等分  1rem = 75px    

手机淘宝 前端小组  
1. 把设计稿分成 10等分 , 1rem = 100vw/10  
2. 根据手机 的 dpr  (像素密度比)   自动缩放  initial-scale   从而改变 viewport 

物理像素    跟 硬件设备 有关   pt    设备像素，他是显示设备中一个最微小的物理部件

dpr = 2   1px =  2pt     initial-scale  = 0.5   viewport 放大 2 倍
dpr = 3   1px =  3pt     initial-scale  = 1/3   viewport 放大 3 倍

    设计稿宽度       div         rem             css
    750px           150px       75px             2rem(书写)
    375px           ? 75px      37.5px           2rem 
    414px           ? 82.8     41.4px                2rem

 1rem ===  100vw/10    10vw 


vue === 网易适配
react  === 淘宝适配 


## token   令牌   (加密后的身份信息 编码  )

1. token 用户登录 成功 后台 返回  的 加密  字段   ( token  存在  session && cookies )

2. 前端 得到 token 会把这个 token (存储到sessionStorage ) 配置 请求头 里面 request.headers.token = token  

3. 前端 每次 发送 ajax headers 携带 token 数据  

4. 后端 得到 请求  得到  req.headers.token  

5. 关于 token 逻辑操作  

a.  请求头 没有 token  
b.  前端 发送 的请求头的 token 与 存储 在后台 的token 不一样  
c.  请求头 没有 token    后端 存储 token 已经消失  


## session  会话  记录一段时间 用户 操作 记录信息 (用户名 和 密码 )

## session 必须 反向代理 同一个 主机(hostname) 端口(port)




##  Vuex 是什么？
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式  ( data  )

## vuex   实现组件之间的状态 共享   实现组件通信   集中式管理所有组件的状态 

state，驱动应用的数据源    Object  存储所有组件的状态 的集合 ；
view，以声明方式将 state 映射到视图； 组件 component 
actions，响应在 view 上的用户输入导致的状态变化。

## 理念 单向数据流


component  组件  视图 
actions    动作       Action 提交的是 mutation，而不是直接变更状态
mutations  管理 变异         Mutation  更改 Vuex 的 store 中的状态的唯一方法是提交 mutation 
state  组件存储的状态    对象就包含了全部的应用层级状态


getter
module 

## vuex 的原理  

1.  组件  通过 函数事件 去 派发 store.dispatch    action  
2.  在 action 里面  通过 store 去 提交 commit  mutation  (管理 type )
3.  进入 mutation 这里面  匹配成功对应 的 mutation 就会 mutate (改变) state (组件的状态)
4.  vue 响应式数据系统  state 改变  会自动去 render 重新渲染页面   



## 辅助函数   方便去访问 store 
mapState
mapActions
mapMutations
mapGetters
