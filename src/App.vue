<template>
  <div id="app">
    <Header></Header>
    <!-- 所有的一级路由都在这显示 -->
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  mounted(){
    this.$store.dispatch('getCaetgoryList')
    this.$store.dispatch('getBannerList')
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>
