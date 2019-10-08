<template>
  <div class="hello">
<el-menu
style="position:fixed;top:0;width:100%"
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-menu-item index="2">
   我的工作台
  </el-menu-item>
  <el-menu-item index="3">消息中心</el-menu-item>
  <el-menu-item index="4">订单管理</el-menu-item>
</el-menu>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
       activeIndex: '1',
        activeIndex2: '1'
    }
  },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
