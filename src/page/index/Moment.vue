<template>
  <div>
    <el-container>
      <el-aside width="320px">
        <listPanel :height="300" :width="300"></listPanel>
      </el-aside>
      <el-container>
        <el-main>
          <momentItem v-for="key in 10" :key="key"></momentItem>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import momentItem from "../../components/panel/MomentPanel";
import listPanel from "../../components/panel/ListPanel";
export default {
  name: "gallary",
  components: {
    momentItem,
    listPanel
  }
};
</script>

<style scoped>
.el-main{
  padding:0px;
}
</style>