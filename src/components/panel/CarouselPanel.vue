<template>
  <el-card ref="panel" class="panel" :style="panelSytle">
    <el-carousel :autoplay="false">
      <el-carousel-item v-for="(item,key) in list" :key="key">
        <div class="el-image-title">{{item.title}}</div>
        <el-image style="width: 100%; height: 100%" :src="item.img" fit="none"></el-image>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template> 

<script>
import "../../style/comm.css";
export default {
  name: "listPanel",
  props: {
    list: Array,
    height: Number,
    onListClick: Function
  },
  data() {
    return {
      panelSytle: ""
    };
  },
  mounted() {
    this.panelSytle =
      typeof this.height === "number" ? "height:" + this.height + "px" : "";
  }
};
</script>
<style scoped>
.lp-title-font,
.lp-title-font > span {
  font-size: 15px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.lp-title-button {
  padding: 0px;
}
.lp-li-font {
  height: 20px;
  display: inline-block;
  line-height: 20px;
  vertical-align: top;
}

.lp-mark {
  width: 30px;
  font-size: 13px;
}
.lp-content {
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  vertical-align: top;
  font-size: 13px;
}
.el-card__header {
  padding: 10px;
}
.el-card__body {
  padding: 10px;
}
.el-card{
  margin:5px;
}
.el-image-title{
  position: absolute;
    z-index: 1;
    width: 100%;
    height: 20px;
    background: rgba(0,0,0,0.4);
    bottom: 0;
    color:#c4c4c4;
}
</style>