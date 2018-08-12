<template>
  <div class="no-margin">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/header'
  export default {
    name: 'App',
    components: {Header}
  }
</script>

<style>
  #header-image {
    height: 400px;
    width: 100%;
  }
  body {
    height: 100%;
    margin: 0;
  }
</style>
