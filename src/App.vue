<template>
  <div id="app">
    <header></header>
    <router-view/>
  </div>
</template>

<script>
  import header from 'components/header/header'
  console.log(header)
  export default {
    name: 'app',
    components: {
      header
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
