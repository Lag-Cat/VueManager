<template>
  <el-card ref="panel" class="panel" :style="panelSytle">
    <div v-if="typeof btnName==='string' || typeof title==='string'" slot="header" class="clearfix">
      <span v-if="typeof btnName==='string'" class="lp-title-font fl">{{title}}</span>
      <el-button
        v-if="typeof title==='string'"
        type="text"
        class="fr lp-title-font lp-title-button"
      >{{btnName}}</el-button>
    </div>
    <div>
      <slot></slot>
    </div>
  </el-card>
</template>
<script>
export default {
  name:"panel",
  props: {
    title: String,
    btnName: String,
    list: Array,
    markWdith: Number,
    height: Number,
    onListClick:Function,
    onHeaderBtnClick:Function
  },
  data() {
    return {
      default_MarkWidth: 30,
      default_margin:10,
      panelSytle: "",
      mwidth: 0,
      cwidth: 0
    };
  },
  mounted() {
    let width = this.$refs.panel.$el.offsetHeight;
    this.mwidth =
      typeof markWdith === "number" ? markWdith : this.default_MarkWidth;
    this.cwidth = width - this.mwidth-this.default_margin*2 > 0 ? width - this.mwidth -this.default_margin*2 : 0;
    this.panelSytle =
      typeof this.height === "number" ? "height:" + this.height + "px" : "";
  }
}
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
.el-card{
  margin:5px;
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

</style>