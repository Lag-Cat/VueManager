<template>
  <el-row class="l-row l-container" v-if="showLogin">
    <el-col class="l-logo">
      <img src="../../assets/logo.png" />
    </el-col>
    <el-col class="l-col">
      <el-input class="l-input" placeholder="用户名、邮箱、手机号" v-model="account"></el-input>
    </el-col>
    <el-col class="l-col">
      <el-input class="l-input" placeholder="密码" v-model="passwd"></el-input>
    </el-col>
    <el-col class="l-col">
      <el-button class="l-input l-login" @click="Login()">登录</el-button>
    </el-col>
     <el-col class="l-col">
        <el-button class="l-input" @click="Register()">注册</el-button>
      </el-col>
  </el-row>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      account: "",
      passwd: "",
      show:false,
      //show1:false,
    };
  },
  props:{
    showLogin:Boolean,
    onClosed:Function
  },
  methods: {
    Login() {
      this.onClosed();
      this.$store.commit("setUserName", this.account);
      //this.$router.push("/Manager");
    },
    Register() {}
  },
  watch:{
    show(val){
      console.log("loginShow="+this.show);
    },
    showLogin(val){
      console.log("loginShow1="+this.showLogin);
    }
  }
};
</script>
<style scoped>
.l-row {
  /* margin: 10px; */
  width: 250px;
}
.l-col {
  /* margin:10px; */
  margin: 10px;
  width: 230px;
}
.l-container {
  height: 400px;
  /* border: 1px solid #c0c0c0; */
  border: 4px solid;
  border-image-source: linear-gradient(
    to right,
    #e1adff,
    rgb(119, 255, 187),
    rgb(255, 92, 92)
  );
  border-image-slice: 1;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.2);
  z-index:1000;
}
.l-input {
  width: 220px;
}
.l-logo {
  text-align: center;
  margin-top:20px;
}

.l-logo > img {
  max-height: 100px;
  max-width: 100px;
}

.l-login{
  background:rgb(51, 148, 51);
  color:#ffffff;
}
</style>