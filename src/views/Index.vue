<template>
  <div class="home">
    <Header :headerdata='headerdata'/>
    <swiper :swiperdata='swiperdata'/>
    <flex :flex='flex'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import swiper from '@/components/swiper.vue'
import flex from '@/components/flex.vue'
import {homedata} from '../api/user.js'

export default {
  name: 'home',
  components: {
    Header,
    swiper,
    flex
  },
  data(){
    return{
      swiperdata:[],
      headerdata:[],
      flex:[]
    }
  },
  created() {
    homedata().then((res)=>{
      const swiperdata=res.swiper
      this.swiperdata=swiperdata
      const headerdata=res.headerdata
      this.headerdata=headerdata
      const flex=res.flex
      this.flex=flex
     })
  },
}
</script>
