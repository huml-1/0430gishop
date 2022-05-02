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
export default {
    name:'Home',
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