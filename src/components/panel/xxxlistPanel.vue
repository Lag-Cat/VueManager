<template>
  <div class="panel" :style="style">
    <div>
      <span class="fl" v-if="typeof title==='string'">{{title}}</span>
      <a class="fr" v-if="typeof btnName==='string'">{{btnName}}</a>
    </div>
    <div class="cb"></div>
    <div class="divider"></div>
    <div>
      <ul>
        <li v-for="(item,key) in list" :key="key">
          <span class="lp-mark lp-li-font" :style="'width:'+mwidth+'px'">{{key}}</span>
          <span class="lp-content lp-li-font" :style="'width:'+cwidth+'px'">{{item.content}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import "../../style/comm.css";
export default {
  name: "listPanel",
  props: {
    title: String,
    list: Array,
    btnName: String,
    onBtnClick: Function,
    height: String,
    width: String,
    contentWidth: Number,
    markWidth: Number
  },
  data() {
    return {
      style: "",
      default_contentWidth: 200,
      default_MarkWidth: 30,
      default_margin: 5,
      default_padding: 10,
      default_offset: 10,
      default_width:250,
      mwidth: 0,
      cwidth: 0
    };
  },
  created() {
  },
  mounted() {
    this.style += this.height ? "height:" + this.height + "px;" : "";
    this.style += this.width ? "width:" + this.width + "px;" : "";
    console.log(this.mwidth);
    console.log(this.cwidth);
    if(this.markWidth){
      this.mwidth= this.markWidth;
    }else{
      this.mwidth= this.default_MarkWidth;
    }
    if(this.contentWidth){
      this.cwidth= this.default_width -(this.default_margin + this.default_padding) * 2 - this.default_offset;
      
    }else{
      this.cwidth= this.default_contentWidth;
    }
    console.log(this.mwidth);
    console.log(this.cwidth);

    
  }
};
</script>
<style scoped>
.panel {
  background: rgba(255, 255, 255, 0.8);
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px rgb(71, 71, 71, 0.5);
  margin: 5px;
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
</style>