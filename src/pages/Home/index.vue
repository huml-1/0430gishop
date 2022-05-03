<template>
<div>
  <TypeNav/>
  <ListContainer/>
  <TodayRecommend />
  <Rank/>
  <Like/>
  <Floor/>
  <Brand/>
</div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Brand from '@/pages/Home/Brand'
import Like from '@/pages/Home/Like'
import Rank from '@/pages/Home/Rank'
import Floor from '@/pages/Home/Floor'
import TodayRecommend from '@/pages/Home/TodayRecommend'
import { mapState } from 'vuex'
export default {
    name:'Home',
   mounted () {
      // 触发vuex的异步action调用, 从mock接口请求数据到state中
      this.$store.dispatch('getRecommendsList')
      this.$store.dispatch('getFloors')
    },
   components:{
     ListContainer,
     Brand,
     Like,
     Rank,
     TodayRecommend,
     Floor

   }
}
</script>

<style>

</style>