<template>
  <el-card ref="panel" class="panel" :style="panelSytle">
    <div
      v-if="typeof title==='string'||typeof btnName==='string'"
      ref="header"
      slot="header"
      class="clearfix"
    >
      <span v-if="typeof title==='string'" class="lp-title-font fl">{{title}}</span>
      <el-button
        v-if="typeof btnName==='string'"
        type="text"
        class="fr lp-title-font lp-title-button"
      >{{btnName}}</el-button>
    </div>
    <div>
      <chart ref="chart1" :options="orgOptions" :style="chartStyle" :auto-resize="true"></chart>
    </div>
  </el-card>
</template> 

<script>
export default {
  name: "listPanel",
  props: {
    list: Array,
    height: Number,
    onListClick: Function,
    title: String,
    btnName: String
  },
  data() {
    return {
      panelSytle: "",
      chartStyle: {
        height:"0px",
        width:"0px"
      },
      orgOptions: {},
      test:1
    };
  },
  mounted() {
    this.panelSytle =
      typeof this.height === "number" ? "height:" + this.height + "px" : "";
    // console.log("test1");
    // console.log(this.$refs.panel.$el.clientHeight);
    // console.log(this.$refs);
    // console.log(this.$refs.header.$el.clientHeight);

    // let ch=this.$refs.panel.$el.clientHeight;
    // let hh=this.$refs.header.$el.clientHeight;
    // let cw=this.$refs.panel.$el.clientWidth;
    // let hw=this.$refs.header.$el.clientWidth;
    // console.log(ch+hh+cw+hw);
    this.chartStyle = {
      height:
        this.$refs.panel.$el.clientHeight -
        this.$refs.header.offsetHeight +
        "px",
      width: this.$refs.header.offsetWidth + "px"
    };
    console.log(this.$refs.panel);
    
    console.log(this.$refs.panel.$el.offsetHeight);
    console.log(this.$refs.panel.$el.clientHeight);
    console.log(this.$refs.header.offsetHeight);
    console.log(this.chartStyle);
    this.orgOptions = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true
        }
      ]
    };
    // setInterval(() => {
    //   this.$refs.chart1.resize();
    //   console.log(this.chartStyle);
    // }, 200);
    
    console.log(this.$refs);
  }
};
</script>
<style scoped>
.el-card__header {
  padding: 10px;
}
.el-card__body {
  padding: 10px;
}
.el-card {
  margin: 10px;
}
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

.el-image-title {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 20px;
  background: rgba(0, 0, 0, 0.4);
  bottom: 0;
  color: #c4c4c4;
}
</style>