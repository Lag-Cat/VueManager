<template>
  <div>
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
              <chartsPanel :title="'测试一下'" :btnName="'冲鸭'" :height="350"></chartsPanel>
            </el-col>
            <el-col :span="12">
              <panel :title="'测试一下'" :btnName="'冲鸭'"  :height="350">
                <el-image style="width: 100%; height: 100%" :src="testsrc" fit="none"></el-image>
              </panel>
            </el-col>
          </el-row>
          <el-row class="h-c-row">
            <el-col :span="12">
               <panel :height="350">
                <el-image style="width: 100%; height: 100%" :src="testsrc" fit="none"></el-image>
              </panel>
            </el-col>
            <el-col :span="12">
                <panel :height="350">
                <el-image style="width: 100%; height: 100%" :src="testsrc" fit="none"></el-image>
              </panel>
            </el-col>
          </el-row>
  </div>
</template>
<script>

import listPanel from '../../components/panel/ListPanel';
import carouselPanel from '../../components/panel/CarouselPanel';
import chartsPanel from '../../components/panel/ChartsPanel';
import panel from '../../components/panel/Panel'
export default {
  name:"index",
  components: {
    listPanel,
    carouselPanel,
    chartsPanel,
    panel
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
}
</script>