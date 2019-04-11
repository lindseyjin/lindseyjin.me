<template>
  <div class="app-container">
    <div class="hr-sect">
      <h1>PROJECTS</h1>
    </div>
    <h3 style="margin-left: 15px;">
        Sorry, this part is still under construction!
    </h3>
    <div class="">
        <ProjectCard
        url="../../static/img/lift.png"
        name="Lift"
        desc="Insert project description"
        />
        <ProjectCard
        url="../../static/img/screenshot.png"
        name="Passport-Plus"
        desc="Insert project description"
        />
        <!-- fruityFun, add deScribe, bash the ballot, my github favs, tutorconect, online conway simulator? what else? -->
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