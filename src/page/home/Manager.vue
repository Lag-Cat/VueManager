<template>
  <el-container class="m-mainContainer">
    <el-header class="m-header" height="50px">
      <div class="m-spanL m-aside-w m-spanL-logo" @click="JumpToHome()">
        <img class="m-logo" src="../../assets/logo.png" />
        <span>蕉蕉小站</span>
      </div>
      <div class="m-spanL">
        <topNav :menuList="topNavList" :onSelected="onTopNavSelected"></topNav>
      </div>
      <div class="m-spanR">
        <userInfo></userInfo>
      </div>
    </el-header>
    <el-container class="m-main-h">
      <el-aside class="m-aside m-main-h m-aside-w" width="200px">
        <div></div>
        <leftNav :menuList="leftNavList"></leftNav>
      </el-aside>
      <el-container>
        <el-header>
          <!-- <el-breadcrumb separator="-">
            <el-breadcrumb-item to="/manager/userinfo">我的资料</el-breadcrumb-item>
            <el-breadcrumb-item to="/manager/personalInfo">个人资料</el-breadcrumb-item>
          </el-breadcrumb> -->
        </el-header>
        <el-main class="m-main-h">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import topNav from "../../components/home/topNav";
import leftNav from "../../components/home/LeftNav";
import userInfo from "../../components/home/UserInfo";
export default {
  name: "manager",
  components: {
    topNav,
    leftNav,
    userInfo
  },
  data() {
    return {
      topNavList: [],
      leftNavList: []
    };
  },
  methods: {
    onTopNavSelected(keyvalue) {
      //console.log(this.$store.getters.getUserLeftNavListById(keyvalue));
      this.leftNavList = this.$store.getters.getUserLeftNavListById(keyvalue);
    },
    JumpToHome(){
      this.$router.push("/");
    }
  },
  mounted() {
    this.topNavList = this.$store.getters.getUserTopNavList; //在vuex中获取菜单
    if (this.topNavList.length > 0) {
      this.onTopNavSelected(this.topNavList[0].id);
    }
  }
};
</script>
<style scoped>

.m-mainContainer {
  width: 100%;
  height: 100%;
}
.m-header {
  height: 50px;
  background: rgba(44, 44, 44);
  width: 100%;
}
.m-span-Logo {
  width: 200px;
}
.m-logo {
  max-height: 40px;
  max-width: 40px;
}
.m-spanL {
  line-height: 40px;
  vertical-align: middle;
  float: left;
  /* max-width: 250px; */
}
.m-spanL > img,
.m-spanL > span {
  line-height: 40px;
  vertical-align: middle;
  font-size: 25px;
  color: lightslategrey;
}
.m-spanR {
  height: 50px;
}
.m-spanL-logo{
  cursor:pointer;
}
.m-aside {
  background: rgb(85, 85, 85);
  /* width:50px; */
  /* height:100px; */
}

.m-main-h {
  height: 100%;
}

.m-aside-w {
  width: 200px;
}

.m-spanR {
  /* line-height */
  float: right;
  width: 200px;
  overflow: hidden;
}

.m-spanR > .m-avatar,
.m-spanR > span {
  line-height: 40px;
  vertical-align: middle;
  font-size: 15px;
  color: dimgray;
}
.m-avatar {
  margin: 5px;
}

.m-alink {
  cursor: pointer;
}
.m-alink:hover {
  color: dodgerblue;
}
</style>

<style>
html,body{
  height:100%
}
</style>