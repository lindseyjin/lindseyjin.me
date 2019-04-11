<template>
  <div class="app-container">
    <div class="hr-sect">
      <h1>PROJECTS</h1>
    </div>
    <h3 style="margin-left: 15px;">
        Sorry, this part is still under construction!
    </h3>
    <div class="">
        <ProjectCard/>
        <ProjectCard/>
    </div>
  </div> 
</template>

<script>
  import ProjectCard from './project-card';

  export default {
    name: 'Projects',
    components: {ProjectCard},
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .app-container {
    height: 100vh;
    width: 90%;
    margin: 120px auto;
  }


</style>