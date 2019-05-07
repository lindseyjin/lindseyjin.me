<template>
  <div class="app-container">
    <div class="hr-sect">
      <h1>PROJECTS</h1>
    </div>
    <!-- <h1>&nbsp;// projects</h1> -->
    <!-- <h3 style="margin-left: 15px;">
        Sorry, this part is still under construction!
    </h3> -->
    <div class="">
        <ProjectCard
        url="../../static/img/lift.png"
        name="Lift"
        desc="Fitbit app that tracks a user's workout progress! Paired with companion web app that shows real time biometrics.
        Fitbit SDK, Vue.js"
        />
        <ProjectCard
        url="../../static/img/screenshot.png"
        name="Passport-Plus"
        desc="Website that displays information about exchange schools, scraped from 
        Waterloo Passport. Created using Vue.js, and Flask, and BeautifulSoup."
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