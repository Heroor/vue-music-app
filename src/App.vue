<template>
  <div id="app">
    <v-header></v-header>
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
  import VHeader from 'components/header/header'
  import Tab from 'components/tab/tab'
  export default {
    name: 'app',
    components: {
      VHeader,
      Tab
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './assets/style'
  body {
    background-color #333
    color #f7f7f7
  }

</style>
