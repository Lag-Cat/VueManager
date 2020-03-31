<template>
  <el-menu
    mode="vertical"
    background-color="#555555"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item v-for="item in menuList" :index="item.index">{{item.title}}</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: "leftNav",
  props: {
    menuList: Array
  },
};
</script>
<style scoped>
</style>