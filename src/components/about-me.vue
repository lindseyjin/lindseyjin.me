<template>
  <div class="app-container">
    <!-- <h1>ABOUT</h1> -->
    <div style="display: inline-block;">
      <img class="profile-pic" src="../../static/img/me.jpg" alt="Avatar">
      <div class="speech-bubble">
        Hi, I'm Lindsey! I'm currently studying Software Engineering at the University of Waterloo.
        Feel free to check out my resume or my Github. I like going to hackathons and reading and birds.
      </div>
    </div> 
  </div>
</template>

<script>
  export default {
    name: 'AboutMe',
    data () {
      return {}
    }
  }
</script>
<style scoped>
  .app-container {
    /* width: 70%; */
    text-align: center;
    margin: 120px 0;
  }
  img {
    width: 300px;
    border: 5px solid #bac;
    border-radius: 50%;
    float: left;
    margin-right: 60px;
  }
  .speech-bubble {
    float: right;
    position: relative;
    background: #bac;
    border-radius: .4em;
    width: 400px;
    padding: 40px;
    margin-top: 30px;
  }
  /* TODO: fix speech bubble and add shadow? also add border to img maybe */
.speech-bubble:after {
    content: '';
    position: absolute;
    left: -30px;
    top: 50%;
    width: 0;
    height: 0;
    border: 34px solid transparent;
    border-right-color: #bac;
    border-left: 0;
    border-bottom: 0;
    margin-top: -17px;
    margin-left: -34
  }
</style>