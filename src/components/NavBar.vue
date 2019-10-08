<template>
    <div>
        <nav id="imChapternav" class="chapternav theme-dark">
            <div class="chapternav-wrapper">
                <ul class="chapternav-items" ismap="ismap">
                       <li v-for="(item, index) in navlink" :key="index" @click="go(index)">
                           <img :src="item.img" alt="" v-if="!item.dark">
                           <img :src="item.img1" alt="" v-if="item.dark">
                           <span>{{item.txt}}</span>
                       </li>
                        
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name:'NavBar',
    data(){
        return{
            dark:false,
            navlink:[{
                id:1,
                dark:false,
                name:"ShiKu",
                img:require("../../src/assets/introduce1.png"),
                img1:require("../../src/assets/introduce1.png"),
                txt:"软件介绍"
            },{
                id:2,
                dark:false,
                name:"Interface",
                img:require("../../src/assets/interface.png"),
                img1:require("../../src/assets/interface1.png"),
                txt:"软件界面"
            },{
                id:3,
                dark:false,
                name:"Action",
                img:require("../../src/assets/action.png"),
                 img1:require("../../src/assets/action1.png"),
                txt:"软件功能"
            },{
                id:4,
                dark:false,
                name:"Compare",
                img:require("../../src/assets/compare.png"),
                img1:require("../../src/assets/compare1.png"),
                txt:"服务端"
            },{
                 id:5,
                 dark:false,
                name:"UseNow",
                img:require("../../src/assets/download.png"),
                img1:require("../../src/assets/download.png"),
                txt:"立即试用"
            },{
                id:6,
                 dark:false,
                name:"Faq",
                img:require("../../src/assets/faq.png"),
                img1:require("../../src/assets/faq.png"),
                txt:"常见问题"
            }]
        }
    },
    methods:{
            go(e){
                console.log(e)
                this.navlink[e].dark=!this.navlink[e].dark
               this.$router.push(this.navlink[e].name)
            }
        }
}
</script>
<style scoped>
.chapternav.theme-dark{
    background:rgba(0, 0, 0, 0.5);
    position:fixed;
    top:47px;
    left:0;
}
.chapternav {
    top: auto;
    box-sizing: content-box;
    overflow: hidden;
    padding: 0;
    position: relative;
    text-align: center;
    width: 100%;
    height: 86px;
    z-index: 11;
}
.chapternav-items{margin:0 auto;width: 50%;box-sizing: border-box;padding: 5px;display:flex;justify-content: space-around;align-items:center;
list-style: none;}
.chapternav-items li{display: flex;flex-direction: column;width: 70px;justify-content: center;align-content: center;align-items:center;
box-sizing: border-box;padding:10px 0;}
.chapternav-items  li img{width: 60%;}
.chapternav-items li:active,.chapternav-items li:visited{color: #f00;}
.chapternav-items  li span{font-size: 11px;color:#fff}

</style>>
