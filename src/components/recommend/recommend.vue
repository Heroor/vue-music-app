<template>
  <div>
    recommend
  </div>
</template>

<script>
  import {
    getRecommend
  } from 'api/recommend'
  export default {
    created () {
      getRecommend().then(res => {
        console.log(res)
      })
    }
  }

</script>

<style>


</style>
