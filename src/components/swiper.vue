<template>
     <div class="header-swiper">
       <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for ='item in swiperdata' :key="item.index" >
                <img :src="item.url">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div class="box"></div>
    </div>
</template>
<script>
export default {
        props:['swiperdata'],
      data(){
        return {
            swiperdatas:[],
            // swiperList:[
            //     {
            //         url:'https://i0.hdslb.com/bfs/archive/df5b0ea0658e08514ec0d1162eb47b47bc05aa80.jpg@480w_300h.webp'
            //     },{
            //         url:'https://i0.hdslb.com/bfs/archive/11a5d50654c2df4a9d683ae914feb1ab4d3b9523.jpg@480w_300h.webp'
            //     },{
            //         url:'https://i0.hdslb.com/bfs/archive/340b979432950772264d4a0cdefbc03dcc8ae4c1.jpg@480w_300h.webp'
            //     }
            // ],
           swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                // loop: true,
                speed:300,
                autoplay : {
                    delay:3000
                },
                
            }
        }
    },
    created() {
    },
}
</script>
<style lang="stylus" scoped>
    .header-swiper{
        height: 0;
        background #ccc;
        z-index:0;
        width:96%;
        margin-left 2%;
        margin-right 2%;
        border-radius: 10px 10px 10px 10px;
        padding-bottom: 26.67%;
    }
    .header-swiper img{
        border-radius: 10px 10px 10px 10px;
        width: 100%;
        height: 100%;
        display block;
        z-index:0;
    }
     .header-swiper>>>.swiper-pagination-bullet-active {
        background #fff;
    }
</style>