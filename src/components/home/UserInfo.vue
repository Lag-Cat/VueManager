<template>
  <div class="u-span">
    <el-avatar class="h-avatar" icon="el-icon-user-solid" @click.native="JumpTOManager()"></el-avatar>
    <span v-if="!islogin">
      您好，请
      <a class="h-alink" @click="UserLogin()">登录</a>
    </span>
    <span v-if="islogin">您好，{{this.userName}}。</span>
  </div>
</template>
<script>
export default {
  name: "userInfo",
  data() {
    return {
      islogin: false
    };
  },
  props: {
    onLogin: Function
  },
  computed: {
    userNamex() {
      console.log("userNamex");
      return this.$store.state.userName;
    }
  },
  methods: {
    UserLogin() {
      //this.$refs.shadowLogin.componentsShow = true;
      if (typeof this.onLogin === "function") {
        this.onLogin();
      }
    },
    JumpTOManager(){
      console.log("test");
      this.$router.push("/manager");
    }
  },
  watch: {
    userNamex(val) {
      if (val != "") {
        this.userName = val;
        this.islogin = true;
      }
    }
  },
  mounted() {
    if (this.$store.state.userName) {
      this.userName = this.$store.state.userName;
      this.islogin = true;
    }
  }
};
</script>

<style scoped>
.u-span {
  /* line-height */
  float: right;
  width: 200px;
  overflow: hidden;
}

.u-span > .h-avatar,
.u-span > span {
  line-height: 40px;
  vertical-align: middle;
  font-size: 15px;
  color: dimgray;
}
.h-avatar {
  margin: 5px;
  cursor:pointer;
}

.h-alink {
  cursor: pointer;
}
.h-alink:hover {
  color: dodgerblue;
}
</style>