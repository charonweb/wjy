<template>
      <div class="hello" style="position:fixed;z-index:999;width:100%">
      <div class="logo" @click="goHome">
        <img src="@/assets/favicon.png" alt="" style="width:25px;height:25px;">
        <span>深圳市视酷信息技术有限公司</span>
      </div>
      <div class="nav">
<el-menu :default-active="this.$route.path" router mode="horizontal"
          text-color="#FFF"
          active-text-color="#ffd04b"
          background-color="#333"
          style="height:47px;width:100%">
          <el-submenu style="height:47px;" class="sub-menu">
             <template slot="title" style="height:47px;" >即时通讯</template>
             <el-menu-item index="ShiKu" style="height:47px;">视酷即时通讯</el-menu-item>
    <el-menu-item index="KuXin" style="height:47px;">酷信即时通讯</el-menu-item>
          </el-submenu>
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name"
          style="height:47px;line-height:47px">
        {{ item.navItem }}
    </el-menu-item>
</el-menu>
      </div>
      <div class="phone">
        <img src="@/assets/tel@2x.png" alt="" style="width:25px;height:25px;">
        <span>18938880745</span>
      </div>
  </div>
</template>
<script>
export default {
     name: 'Header',
  data () {
    return {
     navList:[
            {name:'/News',navItem:'行业新闻'},
            {name:'/UseNow',navItem:'立即试用'},
            {name:'/ProdtPrice',navItem:'产品价格'},
            {name:'/Company',navItem:'公司简介'},
        ]
    }
  },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        switch(key){
          case '1':
            this.$router.push('/Home');
            break;
          case '2':
            this.$router.push('/News');
            break;
             case '3':
            this.$router.push('/UserNow');
            break;
             case '4':
            this.$router.push('/ProdtPrice');
            break;
             case '5':
            this.$router.push('/Company');
            break;
        }
      },
      goHome(){
        this.$router.push('/')
      }
    }
}
</script>
<style scoped>
.hello{
  display: flex;
  background-color:#333;
}
.logo{color:#fff;line-height:44px;flex: 1;box-sizing: border-box;padding-left: 60px;cursor: pointer;min-width: 320px;}
.nav{flex: 2;min-width: 520px;}
.phone{flex:1;color:#13BFB4;line-height: 44px;;font-size: 18px;}
.hello img{vertical-align: middle;margin:0 10px;}
.phone img {width: 27px;height:27px;vertical-align: middle;}
.sub-menu{height: 47px;line-height: 47px}

</style>