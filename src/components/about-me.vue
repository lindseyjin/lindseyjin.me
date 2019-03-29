<template>
  <div class="app-container">
    <div class="hr-sect">
      <h1>ABOUT ME</h1>
    </div>
    <div class="content">
      <img
        src="/../../static/img/me.jpg"
        alt="Avatar"
      >
      <div class="speech-bubble">
        <p>
          Hi, I'm Lindsey!
          I'm currently heading into my 2B term of Software Engineering at the University of Waterloo. 
          I love learning new things and I'm passionate about efficient programming. In my spare time, 
          I like going to hackathons, reading, and birds!
          Feel free to browse through my website. Thanks for visiting!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {};
  }
};
</script>
<style scoped>
.app-container {
  height: 100vh;
  text-align: center;
  width: 90%;
  margin: auto;
  margin-top: 60px;
}
.content {
  margin-top: 70px;
  display: inline-block;
}
img {
  width: 300px;
  border: 6px solid #ae98aa;
  border-radius: 50%;
  float: left;
  margin-right: 100px;
}
.speech-bubble {
  float: right;
  position: relative;
  background: #ae98aa;
  border-radius: 0.4em;
  width: 500px;
  padding: 40px;
  margin-top: 30px;
}
.speech-bubble:after {
  content: "";
  position: absolute;
  left: -30px;
  top: 50%;
  width: 0;
  height: 0;
  border: 34px solid transparent;
  border-right-color: #ae98aa;
  border-left: 0;
  border-bottom: 0;
  margin-top: -17px;
  margin-left: -34;
}
</style>