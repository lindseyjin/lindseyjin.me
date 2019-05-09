<template>
  <div class="website-section">
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
        desc="Fitbit app that tracks a user's workout progress! Data is displayed on a companion web app that shows real time biometrics.
        Winner at Hack the North 2018"
        tools="Fitbit SDK, Vue.js"
        />
        <ProjectCard
        url="../../static/img/screenshot.png"
        name="Passport-Plus"
        desc="Website that displays information about exchange schools, with data scraped from Waterloo Passport."
        tools="Vue.js, Flask, BeautifulSoup."
        />
        <ProjectCard
        url="../../static/img/bashtheballot.png"
        name="Bash the Ballot"
        desc="Elections web app that verifies unique voter identity using smart contracts. Best Use of ConsenSys API at Hack the Valley 2"
        tools="React, uPort"
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
  .website-section {
    /* margin: auto; */
    padding: 0 5%;
    padding-bottom: 120px;
    background-color: #dec5c8;
    overflow: auto;
  } 
</style>