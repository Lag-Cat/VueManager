<template>
  <div>
    <sdLogin ref="shadowLogin"></sdLogin>
    <el-container class="h-container">
      <el-header class="h-header" height="200px">
        <el-row>
          <el-col>
            <div class="h-header-context">
              <div class="h-spanL h-spanL-logo" @click="JumpToHome()">
                <img class="h-logo" src="../../assets/logo.png" />
                <span>蕉蕉小站</span>
              </div>
              <div class="h-spanR">
                <userInfo :onLogin="UserLogin"></userInfo>
              </div>
            </div>
          </el-col>
          <el-col>
            <div class="h-banner h-clear"></div>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="h-el-main">
        <el-row>
          <el-col>
            <div class="h-m-container">
              <div class="h-m-context">
                <el-menu mode="horizontal" class="fl">
                  <el-menu-item index="1">首页</el-menu-item>
                  <el-menu-item index="2">Banana World!</el-menu-item>
                  <el-menu-item index="3">文章</el-menu-item>
                  <el-menu-item index="4">图库</el-menu-item>
                  <el-menu-item index="5">视频</el-menu-item>
                  <el-menu-item index="6">商城</el-menu-item>
                  <el-menu-item index="7">论坛</el-menu-item>
                  <el-menu-item index="8">其它</el-menu-item>
                </el-menu>
                <div class="fr">
                  <el-button icon="el-icon-s-data" class="h-m-more" round>这里有好康的</el-button>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>

        <div class="h-context">
          <el-row class="h-c-row">
            <el-col :span="18">
              <!-- <div class="h-panel">
                <el-carousel height="350px" :autoplay="false">
                  <el-carousel-item v-for="(item,key) in topCarouselList" :key="key" >
                    <div class="el-image-title">{{item.title}}</div>
                    <el-image style="width: 100%; height: 100%" :src="item.img" fit="none"></el-image>
                  </el-carousel-item>
                </el-carousel>
              </div> -->
              <carouselPanel :height="350" :list="topCarouselList"></carouselPanel>
            </el-col>
            <el-col :span="6">
                <listPanel :title="'测试一下'" :btnName="'冲鸭'" :height="350" :list="announcementList"></listPanel>
            </el-col>
          </el-row>
          <el-row class="h-c-row">
            <el-col :span="12">
              <!-- <chartsPanel :title="'测试一下'" :btnName="'冲鸭'" :height="350"></chartsPanel> -->
              <div class="h-panel">
                <el-image style="width: 100%; height: 100%" :src="testsrc" fit="none"></el-image>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="h-panel">
                <el-image style="width: 100%; height: 100%" :src="testsrc" fit="none"></el-image>
              </div>
            </el-col>
          </el-row>
          <el-row class="h-c-row">
            <el-col :span="12">
              <div class="h-panel">
                <el-image style="width: 100%; height: 100%" :src="testsrc" fit="none"></el-image>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="h-panel">
                <el-image style="width: 100%; height: 100%" :src="testsrc" fit="none"></el-image>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
    <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
    <el-divider></el-divider>
    <footer>
      xxx有限公司
    </footer>
  </div>
</template>
<script>
import sdLogin from "../../components/home/ShadowLogin";
import userInfo from "../../components/home/UserInfo";
import listPanel from '../../components/panel/ListPanel';
import carouselPanel from '../../components/panel/CarouselPanel';
// import chartsPanel from '../../components/panel/ChartsPanel'
export default {
  name: "Home",
  components: {
    sdLogin,
    userInfo,
    listPanel,
    carouselPanel,
    //chartsPanel
  },
  data() {
    return {
      testsrc: require("@/assets/img1.jpg"),
      userName: "",
      islogin: false,
      topCarouselList: [
        {
          title: "壁纸1哦",
          subtitle: "这是个壁纸1",
          img: require("@/assets/img1.jpg")
        },
        {
          title: "壁纸2哦",
          subtitle: "这是个壁纸2",
          img: require("@/assets/img2.jpg")
        },
        {
          title: "壁纸3哦",
          subtitle: "这是个壁纸3",
          img: require("@/assets/img3.jpg")
        },
        {
          title: "壁纸4哦",
          subtitle: "这是个壁纸4",
          img: require("@/assets/img4.jpg")
        }
      ],
      announcementList:[
        {
          mark:"置顶",
          title:"4月新番上线!",
          content:"进入查看详细情况"
        },
        {
          mark:"维护",
          title:"2020年春节系统维护公告",
          content:"由于公司春节放假，服务器需要停机，从2020年1月19日到2020年2月1号在系统里将不能访问内部数据，QQ和电话客服都将暂停服务，不便之处，敬请原谅。",
          linkType:"outside",
          url:"https://www.baidu.com"
        },
        {
          mark:"重要",
          title:"向大佬学习!每天都要进步!",
          content:"学习笔记学习笔记..."
        },
        {
          mark:"冲鸭",
          title:"哦哦哦哦哦哦哦",
          content:"哼哼哼啊啊啊啊啊啊啊啊啊啊啊啊"
        }
      ]
    };
  },
  methods: {
    UserLogin() {
      this.$refs.shadowLogin.componentsShow = true;
    },
    JumpToHome() {
      this.$router.push("/");
    }
  },
  mounted() {},
  computed: {
    userNamex() {
      console.log("userNamex");
      return this.$store.state.userName;
    }
  },
  watch: {
    userNamex(val) {
      if (val != "") {
        this.userName = val;
        this.islogin = true;
      }
    }
  }
};
</script>
<style scoped>
.h-container {
  /* background-image: url(../../assets/background.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover; */
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  /* overflow: hidden; */
}
.h-header {
  height: 50px;
  /* background: rgba(44, 44, 44, 0.8); */
}
.el-header {
  padding: 0px;
}
.h-logo {
  max-height: 40px;
  max-width: 40px;
}
.h-header-context {
  width: 1110px;
  margin: 0 auto;
  height: 50px;
}
.h-el-main {
  background: rgba(219, 219, 219, 0.8);
}
.el-main {
  padding: 0px;
}
.h-context {
  width: 1110px;
  margin: 0 auto;
  height: 100%;
}
/* .h-header{
    line-height:40px;
    vertical-align: middle;
} */
.h-spanL {
  line-height: 40px;
  /* vertical-align: middle; */
  float: left;
  width: 250px;
}
.h-spanL > img,
.h-spanL > span {
  line-height: 40px;
  vertical-align: middle;
  font-size: 25px;
  color: lightslategrey;
}
.h-spanL-logo {
  cursor: pointer;
  margin-left: 20px;
}
.h-spanR {
  /* line-height */
  float: right;
  width: 200px;
  overflow: hidden;
}

.h-spanR > .h-avatar,
.h-spanR > span {
  line-height: 40px;
  vertical-align: middle;
  font-size: 15px;
  color: dimgray;
}
.h-avatar {
  margin: 5px;
}
.h-m-container {
  background: #fff;
  height: 35px;
}
.h-m-context {
  width: 1110px;
  margin: 0 auto;
  height: inherit;
  vertical-align: middle;
  line-height: 35px;
}
.h-m-more {
  padding: 7px 23px;
}
.h-alink {
  cursor: pointer;
}
.h-alink:hover {
  color: dodgerblue;
}
.h-banner {
  width: 100%;
  height: 150px;
  background-image: url("../../assets/banner.png");
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-position: center center;
  background-size: cover;
}

.h-panel {
  background: rgba(255, 255, 255, 0.8);
  padding: 20px 50px 20px 50px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px rgb(71, 71, 71, 0.5);
  margin: 5px;
}

.h-c-row {
  margin: 5px 0px 5px 0px;
}

.h-clear {
  clear: both;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

/* 重写导航栏高度 */
.el-menu--horizontal > .el-menu-item {
  height: 35px;
  line-height: 35px;
}

.el-carousel__indicators--horizontal{
  bottom:10px;
}
.el-divider--horizontal{
  margin:12px;
}
footer{
  text-align:center;
  font-size:15px;
}
</style>