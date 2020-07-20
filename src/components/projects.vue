<template>
  <div class="website-section">
    <div class="hr-wrapper">
      <h1>Projects</h1>
      <div class="line-thick line"/>
      <p>Here are some of my projects that I've worked on in the past. </p>
    </div>
    <div class="projects">
        <div class="row">
          <ProjectCard
            :project-data="lift"
          />
          <ProjectCard
            :project-data="passportPlus"
          />
          <ProjectCard
            :project-data="bashTheBallot"
          />
        </div>
        <div class='row'>
          <ProjectCard
            :project-data="tutorConnect"
          />
          <ProjectCard
            :project-data="deScribe"
          />
          <ProjectCard
            :project-data="fruityFun"
          />
        </div>
        <!-- <div class='row'>
          <ProjectCard
          url='../../static/img/default-image.jpg'
          name='My Github Favs'
          desc='Arduino'
          tools='Arduino, uPort'
          />
          <ProjectCard
          url='../../static/img/default-image.jpg'
          name='Conway's Game of Life Simulator'
          desc='Arduino'
          tools='Arduino, uPort'
          />
          watfridge ????
          -->
        </div>
    </div>
</template>

<script>
  import ProjectCard from './project-card'

  export default {
    name: 'Projects',
    components: {ProjectCard},
    data () {
      return {
        'lift': {
          'images': [
            '../../static/img/lift2.jpg',
            '../../static/img/lift1.png'
          ],
          'name': 'Lift',
          'subheading': 'Winner at Hack the North 2018',
          'desc': 'Fitbit app that tracks a users workout progress! Data is displayed on a companion web app that shows real time biometrics.',
          'tools': 'Fitbit SDK, Vue.js',
          'links': {
            'github': 'https://github.com/lindseyjin/lift',
            'devpost': 'https://devpost.com/software/lift-ilm43c'
          }
        },
        'passportPlus': {
          'images': [
            '../../static/img/passportplus2.png',
            '../../static/img/passportplus1.png'
            ],
          'name': 'Passport-Plus',
          'desc': 'Website that displays information about exchange schools in a table with search and filter options, using data scraped from Waterloo Passport (the official university exchange website).',
          'tools': 'Flask, BeautifulSoup, Vue.js, Bootstrap',
          'links': {
            'github': 'https://github.com/lindseyjin/passport-plus'
          }
        },
        'bashTheBallot': {
          'images': [
            '../../static/img/bashtheballot2.PNG',
            '../../static/img/bashtheballot.PNG'
          ],
          'name': 'Bash the Ballot',
          'subheading': 'Best Use of ConsenSys API at Hack the Valley 2',
          'desc': 'Elections web app that verifies unique voter identity by using uPort, which implements smart contracts on the blockchain.',
          'tools': 'React, uPort',
          'links': {
            'github': 'https://github.com/lindseyjin/Bash_The_Ballot'
          }
        },
        'tutorConnect': {
          'images': [
            '../../static/img/tutorconnect1.jpg',
            '../../static/img/tutorconnect2.jpg'
          ],
          'name': 'TutorConnect',
          'subheading': 'Equithon 2018',
          'desc': 'Web app to connect struggling students to potential tutors nearby. Made for the Access to Education category in Equithon 2018.',
          'tools': 'Flask, Bootstrap',
          'links': {
            'github': 'https://github.com/lindseyjin/TutorConnect',
            'devpost': 'https://devpost.com/software/tutor-connect'
          }
        },
        'fruityFun': {
          'images': [
            '../../static/img/fruityfun.gif'
            // '../../static/img/fruityfun1.PNG',
          ],
          'name': 'FruityFun',
          'subheading': 'SE101 Project',
          'desc': 'A healthier alternative to Candy Crush, reimagined for Arduino! Made for use with a TFT LCD Touch Screen Shield and Arduino Uno R3.',
          'tools': 'C, Arduino UNO',
          'links': {
            'github': 'https://github.com/lindseyjin/fruity-fun'
          }
        },
        'deScribe': {
          'images': [
            '../../static/img/describe2.png',
            '../../static/img/describe1.jpg'
          ],
          'name': 'deScribe',
          'subheading': 'UoftHacks 2019',
          'desc': 'Say hello to Kiwi, your personal Google Assistant chat bot! Kiwi asks you questions about your day, and runs sentiment analysis on your responses to track mental health over time.',
          'tools': 'React, Node.js, Firebase',
          'links': {
            'github': 'https://github.com/beini19/SmartJournalAssistant',
            'devpost': 'https://devpost.com/software/describe-lbpsfm'
          }
        }
      }
    }
  }
</script>

<style scoped>
  @media (max-width: 800px) {
    .row {
      flex-direction: column;
    }
  }
  .website-section {
    padding: 5% 5% 15%;
    overflow: auto;
    background: #EDEDED;
  }
  .row {
    display: flex;
    width: 100%;
  }
  .hr-wrapper {
    margin: 0 2%;
  }
  h1 {
    margin-bottom: 0;
  }
  .line {
    width: 200px;
  }
</style>
