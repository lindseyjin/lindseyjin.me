<template>
  <div>
    <Header></Header>
    <router-view/>
    <Projects></Projects>
  </div>
</template>

<script>
  import Header from './components/header'
  import Projects from './components/projects'
  export default {
    name: 'App',
    components: {Header, Projects}
  }
</script>

<style>
  #header-image {
    height: 400px;
    width: 100%;
  }
  body {
    background-color: #fffafa;
    height: 100%;
    margin: 0;
  }
</style>
