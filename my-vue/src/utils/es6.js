// ES6    moudle    const/let  解构赋值  箭头函数  Promise 字符串模板  class  展开运算 ... 
// import 
// export default 


// commonJS 规范  
// 模块定义 define 
// 模块暴露  exports
// 模块引入  require 

const word = "有好牙，才能吃得香...";
const msg = "今天去个快递把我快折磨死了..."

// module.exports = { word,msg}

// 暴露方式 1.   默认暴露 权限很高   暴露是对象 不能解构赋值 
export default { word, msg };

//export default msg;