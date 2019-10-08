<template>
<div class="hello">
    <nav-bar></nav-bar>
			  <div>
                  <img src="../../src/assets/banner/imBaner.png" alt="" style="width:100%">
              </div>
              <div class="container">
      <div class="swiper-container first">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
          <img src="../../src/assets/zh1.png" alt="">
      </div>
      <div class="swiper-slide"><img src="../../src/assets/zh2.png" alt=""></div>
      <div class="swiper-slide"><img src="../../src/assets/zh3.png" alt=""></div>
      <div class="swiper-slide"><img src="../../src/assets/zh4.png" alt=""></div>
     <div class="swiper-slide"><img src="../../src/assets/zh5.png" alt=""></div>
      <div class="swiper-slide"><img src="../../src/assets/zh6.png" alt=""></div>
        <div class="swiper-slide"><img src="../../src/assets/zh7.png" alt=""></div>
        <div class="swiper-slide"><img src="../../src/assets/zh8.png" alt=""></div>
        <div class="swiper-slide"><img src="../../src/assets/zh9.png" alt=""></div>
        <div class="swiper-slide"><img src="../../src/assets/zh10.png" alt=""></div>
         <div class="swiper-slide"><img src="../../src/assets/zh11.png" alt=""></div>
    </div>
     <!-- Add Pagination -->
    <div class="swiper-pagination first"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
              </div>
              <div style="height:94px;display:flex;justify-content:center;font-size:30px;color:#666;align-items:center">
                  <span>web端界面</span>
              </div>
              <div class="section-content">
<div class="swiper-container last">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../../src/assets/a1.png" alt=""></div>
      <div class="swiper-slide"><img src="../../src/assets/a2.png" alt=""></div>
      <div class="swiper-slide"><img src="../../src/assets/a3.png" alt=""></div>
      <div class="swiper-slide"><img src="../../src/assets/a4.png" alt=""></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination last"></div>
  </div>
              </div>
               <aside class="section" style="background:#f2f2f2;color:#888;font-size:15px;line-height:1.333">
      <div class="section-content">
        <div class="row">
          <div class="row-message" style="flex:7;text-align:center">
            <p style="margin-top: 2rem;margin-bottom: 0">深圳市视酷信息技术有限公司</p>
            <p style="margin-bottom: 0;margin-top: 0">&nbsp;电话:18938880745&nbsp; 微信:18938880745 &nbsp;QQ:287076078</p>
            <p style="margin-bottom: 0;margin-top: 0">售前热线：4008770080&nbsp;联系人:唐先生</p>
            <p style="margin-bottom: 0;margin-top: 0">售前热线：4008770080&nbsp;联系人:唐先生</p>
            <p style="margin-top: 0"><a href="http://www.beian.miit.gov.cn">粤ICP备17119151号</a></p>
          </div>
          <div class="erweima" style="flex:3;text-align:left">
            <img src="../../src/assets/wechat.jpg" style="width: 90px;margin-top: 1rem;">
          </div>
        </div>
      </div>
      </aside>
</div>
</template>
<script>
import NavBar from '@/components/NavBar'
import Swipers from '@/components/Swipers'
import Swiper from 'swiper';
export default {
    components:{NavBar,Swipers},
    name:"Interface",
    data(){
        return{

        }
    },
    mounted(){
     var swiper = new Swiper('.first', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      autoplay:true,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination first',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
     var swipers = new Swiper('.swiper-container last', {
         autoplay:true,
      pagination: {
        el: '.swiper-pagination last',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });
  }
}
</script>
<style scoped>
@import "../../node_modules/swiper/css/swiper.css";
.container{width: 1170px;margin:auto;margin-top: 100px;}
.swiper-slide img{width: 100%;height: 100%;}
.section-content{width: 980px;margin: auto;}
</style>