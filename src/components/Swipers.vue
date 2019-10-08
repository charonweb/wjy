<template>
     <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><p>Slide 1</p></div>
            <div class="swiper-slide"><p>Slide 2</p></div>
            <div class="swiper-slide"><p>Slide 3</p></div>
        </div>
        <div class="swiper-pagination"></div> 
    </div>

</template>
<script>
import Swiper from 'swiper';
export default {
    name:"Swipers",
    data(){
        return{

        }
    },
    mounted(){
        var swiper = new Swiper('.swiper-container',{
		direction : 'vertical',
		followFinger : false,
		speed:800,
		mousewheel: true,
		pagination : {
			el:'.swiper-pagination',
		},
		on:{
			init:function(swiper){
		        slide=this.slides.eq(0);
			    slide.addClass('ani-slide');
		    },
			transitionStart: function(){
			    for(i=0;i<this.slides.length;i++){
			    	slide=this.slides.eq(i);
			        slide.removeClass('ani-slide');
				}
		    },
			transitionEnd: function(){
				slide=this.slides.eq(this.activeIndex);
			    slide.addClass('ani-slide');
				
		    },
		}
    });

    }
}
</script>
<style scoped>
@import "../../node_modules/swiper/css/swiper.css";
	.swiper-wrapper{
    transition-delay:.3s;
    }
    .swiper-container {
        width: 500px;
        height: 300px;
        margin: 20px auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
	.swiper-slide:nth-child(2){
		background:#3183ff;
		color:#fff;}
	.swiper-slide p{
		transform:translateX(-200px);
		opacity:0;
		transition:all .4s;}
	.ani-slide p{
		transform:translateX(0);
		opacity:1;
		}

</style>