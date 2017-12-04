<template>
  <div>
    <ul>
      <li v-for="(item, index) in slider" :key="index">
        {{item.id}}
      </li>
    </ul>
  </div>
</template>
<script>
import {
  getRecommend
} from 'api/recommend'
import { ERR_OK } from 'api/config'
export default {
  data () {
    return {
      songList: [],
      slider: []
    }
  },
  created () {
    getRecommend().then(res => {
      if (res.code === ERR_OK) {
        console.log(res)
        const data = res.data
        this.slider = data.slider
      }
    })
  }
}

</script>
<style>


</style>
