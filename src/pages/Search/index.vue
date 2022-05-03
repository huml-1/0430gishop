<template>
  <div>
    <TypeNav/>
  Search
  <h3>{{$route.params.keyword}}</h3>
  <h3>{{$route.query.keyword2}}</h3>
  <h3>props:{{keyword3}}</h3>
  <h3>props:{{keyword4}}</h3>
  </div>
</template>

<script>
export default {
    name:'Search',
    props:['keyword3','keyword4'],
}
</script>

<style>

</style>