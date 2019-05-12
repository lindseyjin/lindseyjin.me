<template>
  <div class="website-section">
    <div class="hr-sect">
      <h1>PROJECTS</h1>
    </div>
    <div class="projects">
        <div class="row">
          <ProjectCard
          url="../../static/img/lift.png"
          name="Lift"
          subtitle="Winner at Hack the North 2018"
          desc="Fitbit app that tracks a user's workout progress! Data is displayed on a companion web app that shows real time biometrics."
          tools="Fitbit SDK, Vue.js"
          link="https://github.com/lindseyjin/lift"
          />
          <ProjectCard
          url="../../static/img/screenshot.png"
          name="Passport-Plus"
          desc="Website that displays information about exchange schools, with data scraped from Waterloo Passport."
          tools="Vue.js, Flask, BeautifulSoup."
          />
          <ProjectCard
          url="../../static/img/default-image.jpg"
          subtitle="Best Use of ConsenSys API at Hack the Valley 2"
          name="Bash the Ballot"
          desc="Elections web app that verifies unique voter identity using smart contracts."
          tools="React, uPort"
          />
        </div>
        <div class="row">
          <ProjectCard
          url="../../static/img/default-image.jpg"
          subtitle="Equithon 2018"
          name="TutorConnect"
          desc="Arduino"
          tools="Arduino, uPort"
          />
          <ProjectCard
          url="../../static/img/default-image.jpg"
          subtitle="UoftHacks 2019"
          name="deScribe"
          desc="deScribe"
          tools="React, uPort"
          />
          <ProjectCard
          url="../../static/img/default-image.jpg"
          subtitle="SE 101 Project"
          name="FruityFun"
          desc="Arduino"
          tools="Arduino, uPort"
          />
        </div>
        <div class="row">
          <ProjectCard
          url="../../static/img/default-image.jpg"
          name="My Github Favs"
          desc="Arduino"
          tools="Arduino, uPort"
          />
          <ProjectCard
          url="../../static/img/default-image.jpg"
          name="Conway's Game of Life Simulator"
          desc="Arduino"
          tools="Arduino, uPort"
          />
        </div>
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
    padding: 15px 5% 120px;
    background-color: #d9bebf;
    overflow: auto;
  } 
  .row {
    width: 100%;
    float: right;
  }
</style>