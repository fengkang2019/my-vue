<template>
  <div id="photo">
    <img :src="touxiang" alt="上传头像" @click="uploadImg" class="touxiang" />
    <input type="file" @change="shangchuan" ref="upload" accept="image/*" class="hiddenInput" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      touxiang: ""
    };
  },
  methods: {
    uploadImg() {
      this.$refs.upload.click(); //使点击图片变成相当于点击input框
    },
    shangchuan() {
      console.log("准备上传...");
      let file = this.$refs.upload.files[0];
      console.log(file); //选中的上传的图片的信息
      let data = new FormData(); //新建表单对象
      console.log(data); //此时空对象
      data.append("avatar",file);
      console.log(222)
        console.log(data)
      console.log(222)

      this.$axios({
        url: "/vue/uploadAvatar",
        method: "post",
        data: data,
        // contentType: false,
        // processData: false
      }).then(res => {
        //  this.touxiang = res.data.pic.replace(/public/,'');   // 配置代理

        this.touxiang = res.data.pic.replace(/public/, "http://localhost:1906");
        //直接 替换图片资源路径，可以不需要配置代理
        // localStorage.avatar = this.touxiang;
        // processData: false,//默认情况下，通过data选项传递进来的数据，如果是一个对象(技术上讲只要不是字符串)，都会处理转化成一个查询字符串，以配合默认内容类型 "application/x-www-form-urlencoded"。如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。
        // contentType: false,//数据编码格式不使用jquery的方式 为了避免 JQuery 对其操作，从而失去分界符，而使服务器不能正常解析文件。data:formData,
      });
    }//userInfo 用户信息表
  },
  mounted(){
    let username ="";
    if(sessionStorage.userInfo){
      username = JSON.parse(sessionStorage.userInfo).username;
    }
    if(username){
      this.$axios.post("/vue/getAvatar",{
        username
      }).then(res=>{
        console.log(res)
        if(!!res.data.type){
          //登录时，如果该用户有设置图片就是用该图片
          console.log(res.data.avatar)
          this.touxiang = res.data.avatar.replace(/public/,'http://localhost:1906');
         console.log(333)
         console.log(this.touxiang)
         console.log(333)

        }else{
          //登录时，如果用户没有提前上传过图片就使用默认图片

          this.touxiang = require("@/assets/images/photo.png");

        }
      })
    }else{
      this.touxiang =require("@/assets/images/photo.png")
      //没登录时使用 默认图片
    }
  }
};
</script>

<style scoped>
.touxiang{
    width:1.8rem;
    height:1.8rem;
    border-radius: 50%;
}
.hiddenInput{
    display: none;
}
</style>
