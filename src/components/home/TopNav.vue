<template>
  <el-menu
    mode="horizontal"
    background-color="#2c2c2c"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item v-for="item in menuList" :index="item.id">{{item.title}}</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: "topNav",
  props: {
    menuList: Array,
    onSelected:Function
  },
  methods:{
      handleSelect(key,path){
        this.onSelected(key);
      }
  }
};
</script>
<style scoped>
/* 重写导航栏高度 */
.el-menu--horizontal > .el-menu-item {
  height: 50px;
  line-height: 50px;
}
</style>